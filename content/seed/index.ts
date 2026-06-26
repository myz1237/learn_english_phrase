/* Registry of all content units.
   To add a new unit: create content/seed/<id>.ts exporting a UnitSeed,
   import it here, and add it to the `units` array. Then run
   `npm run validate` and `npm run seed`. */
import type { UnitSeed } from "./types.ts";
import { food } from "./food.ts";
import { fruitNuts } from "./fruit_nuts.ts";
import { vegetables } from "./vegetables.ts";
import { meatSeafood } from "./meat_seafood.ts";
import { breadDairyBreakfast } from "./bread_dairy_breakfast.ts";
import { drinks } from "./drinks.ts";
import { desserts } from "./desserts.ts";
import { seasonings } from "./seasonings.ts";
import { jobs } from "./jobs.ts";
import { office } from "./office.ts";
import { school } from "./school.ts";
import { moneyShopping } from "./money_shopping.ts";
import { health } from "./health.ts";
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
  food,
  fruitNuts,
  vegetables,
  meatSeafood,
  breadDairyBreakfast,
  drinks,
  desserts,
  seasonings,
  jobs,
  office,
  school,
  moneyShopping,
  health,
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
