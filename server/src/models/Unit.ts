import { Schema, model } from "mongoose";

const ExampleSchema = new Schema(
  { en: String, zh: String, hl: String },
  { _id: false }
);

const PhraseSchema = new Schema(
  {
    head: { type: String, required: true },
    def: String,
    zh: String,
    register: String,
    when: String,
    syn: String,
    note: String,
    group: String,    // optional sub-section label (book section A/B/C)
    marker: String,   // optional: only for passage personas
    examples: { type: [ExampleSchema], default: [] }
  },
  { _id: false }
);

const PersonaSchema = new Schema(
  {
    role: String,
    roleZh: String,
    avatar: String,
    tint: String,
    passage: String,
    phrases: { type: [PhraseSchema], default: [] }
  },
  { _id: false }
);

const StorySchema = new Schema(
  { text: String, title: String },
  { _id: false }
);

const UnitSchema = new Schema(
  {
    id: { type: String, required: true, unique: true, index: true },
    num: String,
    tag: String,
    title: String,
    titleZh: String,
    intro: String,
    phrases: { type: [PhraseSchema], default: [] },   // generic topic phrases
    personas: { type: [PersonaSchema], default: [] }, // optional passage mode
    story: { type: StorySchema, default: undefined }  // optional connected story
  },
  { timestamps: true }
);

export const Unit = model("Unit", UnitSchema);
