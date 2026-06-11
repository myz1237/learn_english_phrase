import { Router } from "express";
import { store } from "../store/index.ts";

export const unitsRouter = Router();

// GET /api/units — all units, in book order
unitsRouter.get("/", async (_req, res) => {
  res.json(await store().listUnits());
});

// GET /api/units/:id — single unit
unitsRouter.get("/:id", async (req, res) => {
  const unit = await store().getUnit(req.params.id);
  if (!unit) return res.status(404).json({ error: "unit not found" });
  res.json(unit);
});
