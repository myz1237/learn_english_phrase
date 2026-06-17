/* Registry of all content units.
   To add a new unit: create content/seed/<id>.ts exporting a UnitSeed,
   import it here, and add it to the `units` array. Then run
   `npm run validate` and `npm run seed`. */
import type { UnitSeed } from "./types.ts";
import { out } from "./out.ts";
import { time } from "./time.ts";
import { makingProgress } from "./making_progress.ts";
import { work } from "./work.ts";
import { supportingOpposing } from "./supporting_opposing.ts";
import { agreeing } from "./agreeing.ts";
import { understandingIdeas } from "./understanding_ideas.ts";
import { arrangingThings } from "./arranging_things.ts";
import { sizeNumber } from "./size_number.ts";

export const units: UnitSeed[] = [
  out,
  time,
  makingProgress,
  work,
  supportingOpposing,
  agreeing,
  understandingIdeas,
  arrangingThings,
  sizeNumber
];
