/* Storage abstraction: the app runs on MongoDB (default, `npm run dev`)
   or a local single-file SQLite DB (`npm run dev:local`). Units are
   content documents and progress is one document — both backends store
   them as JSON, so behaviour is identical either way. */

export interface ProgressData {
  savedList: string[];
  learnedList: string[];
  streak: number;
  lastStudied: string | null; // ISO date string
}

/* Minimal shape the server needs to know about; the rest of the unit
   document passes through untouched. */
export interface UnitDoc {
  id: string;
  num?: string;
  phrases?: { head: string }[];
  personas?: { phrases: { head: string }[] }[];
  [k: string]: unknown;
}

export interface Store {
  /** human-readable backend description for the startup log */
  label: string;
  listUnits(): Promise<UnitDoc[]>;
  getUnit(id: string): Promise<UnitDoc | null>;
  upsertUnit(u: UnitDoc): Promise<void>;
  countUnits(): Promise<number>;
  getProgress(): Promise<ProgressData>;
  saveProgress(p: ProgressData): Promise<void>;
  close(): Promise<void>;
}
