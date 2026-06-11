import { Schema, model } from "mongoose";

/* Single-user (local) progress document. We use a fixed _id "me". */
const ProgressSchema = new Schema(
  {
    _id: { type: String, default: "me" },
    savedList: { type: [String], default: [] },
    learnedList: { type: [String], default: [] },
    streak: { type: Number, default: 1 },
    lastStudied: { type: Date, default: null }
  },
  { timestamps: true, _id: false }
);

export const Progress = model("Progress", ProgressSchema);
export const PROGRESS_ID = "me";
