import "./env.ts";
import { initStore } from "./store/index.ts";
import { units } from "../../content/seed/index.ts";
import type { UnitDoc } from "./store/types.ts";

/* Idempotent: upsert each unit by its `id`. Re-running updates content
   in place and never creates duplicates. Honours DB_DRIVER, so
   `npm run seed:local` fills the local SQLite file instead of MongoDB. */
async function seed() {
  const store = await initStore();
  for (const u of units) {
    await store.upsertUnit(u as unknown as UnitDoc);
    const personas = u.personas || [];
    const phraseCount = personas.reduce((n, p) => n + p.phrases.length, 0) + (u.phrases?.length || 0);
    console.log(`[seed] upserted unit "${u.id}" — ${personas.length} personas, ${phraseCount} phrases`);
  }
  const total = await store.countUnits();
  console.log(`[seed] done. units in db: ${total}`);
  await store.close();
}

seed().catch((err) => {
  console.error("[seed] failed:", err);
  process.exit(1);
});
