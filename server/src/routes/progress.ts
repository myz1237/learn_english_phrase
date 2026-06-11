import { Router } from "express";
import { store } from "../store/index.ts";
import type { ProgressData } from "../store/types.ts";

export const progressRouter = Router();

/* Calendar-day difference (b - a), ignoring time of day. */
function dayDiff(a: Date, b: Date): number {
  const da = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  const db = new Date(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.round((db.getTime() - da.getTime()) / 86_400_000);
}

/* Advance the streak when the user studies (an active action).
   same day -> unchanged; next day -> +1; gap -> reset to 1. */
function touchStreak(p: ProgressData) {
  const now = new Date();
  if (!p.lastStudied) {
    p.streak = p.streak || 1;
  } else {
    const d = dayDiff(new Date(p.lastStudied), now);
    if (d === 1) p.streak += 1;
    else if (d > 1) p.streak = 1;
    // d === 0: same day, no change
  }
  p.lastStudied = now.toISOString();
}

// GET /api/progress
progressRouter.get("/", async (_req, res) => {
  res.json(await store().getProgress());
});

// PUT /api/progress/saved  { head } — toggle a saved phrase
progressRouter.put("/saved", async (req, res) => {
  const { head } = req.body as { head?: string };
  if (!head) return res.status(400).json({ error: "head required" });
  const p = await store().getProgress();
  const i = p.savedList.indexOf(head);
  if (i >= 0) p.savedList.splice(i, 1);
  else p.savedList.push(head);
  await store().saveProgress(p);
  res.json(p);
});

// PUT /api/progress/reset-unit  { unitId } — clear learned marks for one unit's
// phrases (irreversible; savedList and streak are untouched)
progressRouter.put("/reset-unit", async (req, res) => {
  const { unitId } = req.body as { unitId?: string };
  if (!unitId) return res.status(400).json({ error: "unitId required" });
  const unit = await store().getUnit(unitId);
  if (!unit) return res.status(404).json({ error: `unit "${unitId}" not found` });
  const heads = new Set<string>([
    ...(unit.phrases || []).map((p) => p.head),
    ...(unit.personas || []).flatMap((p) => p.phrases.map((ph) => ph.head))
  ]);
  const p = await store().getProgress();
  p.learnedList = p.learnedList.filter((h) => !heads.has(h));
  await store().saveProgress(p);
  res.json(p);
});

// PUT /api/progress/learned  { head } — mark learned (idempotent) + advance streak
progressRouter.put("/learned", async (req, res) => {
  const { head } = req.body as { head?: string };
  if (!head) return res.status(400).json({ error: "head required" });
  const p = await store().getProgress();
  if (!p.learnedList.includes(head)) p.learnedList.push(head);
  touchStreak(p);
  await store().saveProgress(p);
  res.json(p);
});
