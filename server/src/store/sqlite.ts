/* Fully-local single-file backend (`npm run dev:local`). Uses the Node
   built-in sqlite module (Node >= 22.5; enabled via --experimental-sqlite
   in the npm script, so this module must only be imported lazily).

   Open strategy: if the file exists and is healthy, use it as-is. If it
   is missing, create it. If it exists but can't be opened / fails the
   integrity check, move it aside (.corrupt-<timestamp>) and start fresh.
   A fresh/empty DB is auto-seeded from content/seed — zero setup. */
import { existsSync, mkdirSync, renameSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import type { Store, ProgressData, UnitDoc } from "./types.ts";

const here = path.dirname(fileURLToPath(import.meta.url)); // server/src/store
const DEFAULT_PATH = path.resolve(here, "../../data/phrasebook.sqlite");
const PROGRESS_ID = "me";
const DEFAULTS: ProgressData = { savedList: [], learnedList: [], streak: 1, lastStudied: null };

const SCHEMA = `
  CREATE TABLE IF NOT EXISTS units    (id TEXT PRIMARY KEY, data TEXT NOT NULL);
  CREATE TABLE IF NOT EXISTS progress (id TEXT PRIMARY KEY, data TEXT NOT NULL);
`;

function openOrRecreate(file: string): { db: DatabaseSync; existed: boolean } {
  const existed = existsSync(file);
  try {
    const db = new DatabaseSync(file);
    db.exec(SCHEMA);
    const row = db.prepare("PRAGMA integrity_check").get() as { integrity_check?: string } | undefined;
    if (row?.integrity_check !== "ok") throw new Error("integrity check failed");
    return { db, existed };
  } catch (err) {
    if (!existed) throw err; // couldn't even create a new file — surface the real problem
    // existing file is unreadable or corrupt: keep it as a backup, start fresh
    const stamp = new Date().toISOString().replace(/[:.]/g, "-");
    const backup = `${file}.corrupt-${stamp}`;
    renameSync(file, backup);
    console.warn(
      `[db] existing sqlite file was unreadable (${(err as Error).message}) — moved it to ${path.basename(backup)} and created a fresh DB`
    );
    const db = new DatabaseSync(file);
    db.exec(SCHEMA);
    return { db, existed: false };
  }
}

export async function createSqliteStore(): Promise<Store> {
  const file = process.env.SQLITE_PATH || DEFAULT_PATH;
  mkdirSync(path.dirname(file), { recursive: true });
  const { db, existed } = openOrRecreate(file);
  if (!existed) console.log(`[db] created new sqlite file at ${path.relative(process.cwd(), file)}`);

  const store: Store = {
    label: `SQLite (${path.relative(process.cwd(), file)})`,
    async listUnits() {
      const rows = db.prepare("SELECT data FROM units").all() as { data: string }[];
      return rows
        .map((r) => JSON.parse(r.data) as UnitDoc)
        .sort((a, b) => Number(a.num) - Number(b.num));
    },
    async getUnit(id) {
      const row = db.prepare("SELECT data FROM units WHERE id = ?").get(id) as { data: string } | undefined;
      return row ? (JSON.parse(row.data) as UnitDoc) : null;
    },
    async upsertUnit(u) {
      db.prepare(
        "INSERT INTO units (id, data) VALUES (?, ?) ON CONFLICT(id) DO UPDATE SET data = excluded.data"
      ).run(u.id, JSON.stringify(u));
    },
    async countUnits() {
      const row = db.prepare("SELECT COUNT(*) AS n FROM units").get() as { n: number };
      return row.n;
    },
    async getProgress() {
      const row = db.prepare("SELECT data FROM progress WHERE id = ?").get(PROGRESS_ID) as
        | { data: string }
        | undefined;
      return row ? { ...DEFAULTS, ...(JSON.parse(row.data) as Partial<ProgressData>) } : { ...DEFAULTS };
    },
    async saveProgress(p) {
      db.prepare(
        "INSERT INTO progress (id, data) VALUES (?, ?) ON CONFLICT(id) DO UPDATE SET data = excluded.data"
      ).run(PROGRESS_ID, JSON.stringify(p));
    },
    async close() {
      db.close();
    }
  };

  // fresh or wiped DB: fill the content in automatically
  if ((await store.countUnits()) === 0) {
    const { units } = await import("../../../content/seed/index.ts");
    for (const u of units) await store.upsertUnit(u as unknown as UnitDoc);
    console.log(`[db] sqlite was empty — auto-seeded ${units.length} unit(s) from content/seed`);
  }

  return store;
}
