/* Load environment from the project's .env (which holds MONGO_URL),
   regardless of the current working directory. Import this first.
   We never read/print the file ourselves — dotenv loads it. */
import { config } from "dotenv";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url)); // server/src
const root = path.resolve(here, "../..");                  // project root

// Candidate locations, in priority order.
const candidates = [
  path.join(root, ".env"),
  path.join(root, "design_reference", ".env"),
  path.join(root, "server", ".env")
];

for (const p of candidates) {
  if (existsSync(p)) {
    config({ path: p });
    break;
  }
}
