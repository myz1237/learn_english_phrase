import mongoose from "mongoose";
import { Unit } from "../models/Unit.ts";
import { Progress, PROGRESS_ID } from "../models/Progress.ts";
import type { Store, ProgressData, UnitDoc } from "./types.ts";

export async function createMongoStore(): Promise<Store> {
  const uri = process.env.MONGO_URL;
  if (!uri) {
    throw new Error(
      "MONGO_URL is not set. Add it to the project root .env file — or run the local SQLite mode: npm run dev:local"
    );
  }
  mongoose.set("strictQuery", true);
  try {
    // serverSelectionTimeoutMS: fail fast with a clear message instead of
    // hanging for the 30s driver default when MongoDB isn't running
    await mongoose.connect(uri, {
      dbName: process.env.MONGO_DB || "phrasebook",
      serverSelectionTimeoutMS: 4000
    });
  } catch (err) {
    throw new Error(
      `Cannot connect to MongoDB (${(err as Error).message}). ` +
        "Check that MongoDB is running and MONGO_URL is correct — or run the local mode: npm run dev:local"
    );
  }

  return {
    label: `MongoDB (db: ${process.env.MONGO_DB || "phrasebook"})`,
    async listUnits() {
      return (await Unit.find().sort({ num: 1 }).lean()) as unknown as UnitDoc[];
    },
    async getUnit(id) {
      return (await Unit.findOne({ id }).lean()) as unknown as UnitDoc | null;
    },
    async upsertUnit(u) {
      await Unit.updateOne({ id: u.id }, { $set: u }, { upsert: true });
    },
    async countUnits() {
      return Unit.countDocuments();
    },
    async getProgress(): Promise<ProgressData> {
      let doc = await Progress.findById(PROGRESS_ID);
      if (!doc) doc = await Progress.create({ _id: PROGRESS_ID });
      return {
        savedList: [...doc.savedList],
        learnedList: [...doc.learnedList],
        streak: doc.streak,
        lastStudied: doc.lastStudied ? new Date(doc.lastStudied).toISOString() : null
      };
    },
    async saveProgress(p) {
      await Progress.updateOne(
        { _id: PROGRESS_ID },
        { $set: { ...p, lastStudied: p.lastStudied ? new Date(p.lastStudied) : null } },
        { upsert: true }
      );
    },
    async close() {
      await mongoose.disconnect();
    }
  };
}
