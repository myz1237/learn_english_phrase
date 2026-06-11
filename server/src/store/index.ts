import type { Store } from "./types.ts";

let impl: Store | null = null;

/* Pick the backend:
   - DB_DRIVER=sqlite|mongo forces one (the dev:local / seed:local scripts
     set sqlite);
   - otherwise default to MongoDB when MONGO_URL is configured, and fall
     back to the local SQLite file when it isn't.
   Backends are imported lazily: node:sqlite needs its --experimental flag,
   and mongo mode shouldn't pay for it (nor sqlite mode for mongoose). */
export async function initStore(): Promise<Store> {
  if (impl) return impl;
  const driver = (process.env.DB_DRIVER || (process.env.MONGO_URL ? "mongo" : "sqlite")).toLowerCase();
  if (driver === "sqlite") {
    const { createSqliteStore } = await import("./sqlite.ts");
    impl = await createSqliteStore();
  } else {
    const { createMongoStore } = await import("./mongo.ts");
    impl = await createMongoStore();
  }
  console.log(`[db] connected to ${impl.label}`);
  return impl;
}

export function store(): Store {
  if (!impl) throw new Error("store not initialized — call initStore() first");
  return impl;
}
