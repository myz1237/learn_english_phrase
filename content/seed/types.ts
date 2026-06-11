/* Content seed shapes — the single source of truth for unit content.
   The Mongoose schema in server/src/models/Unit.ts matches these.

   A unit is a TOPIC with a set of phrases. There are two shapes, and a
   unit may use either:

   1. GENERIC (default): put phrases directly on `Unit.phrases`. Group them
      with the optional `group` label (the book's A/B/C sub-sections). No
      personas needed. This is the right shape for tables, articles, or any
      "show some phrases by topic" page.

   2. PASSAGE (optional): provide `Unit.personas`, each with a first-person
      `passage` containing [[markers]] that map to that persona's `phrases`.
      Use this only when the content is genuinely a set of monologues
      (e.g. the original Unit 21). `marker` must appear verbatim in `passage`.

   Don't force non-monologue content into personas — prefer the generic shape. */

export interface Example {
  en: string;          // the example sentence (English)
  zh: string;          // Chinese translation (author this if the book has none)
  hl: string;          // substring of `en` to highlight (the target phrase as it appears)
}

export interface Phrase {
  head: string;        // lemma / dictionary form, e.g. "build up" / "pass sb over"
  def: string;         // English definition / gloss
  zh: string;          // Chinese gloss
  register: string;    // 语体: 中性 / 口语 / ... (first word is shown as a pill)
  when: string;        // "什么时候用" note; may contain <b>...</b>
  examples: Example[]; // 1–2 authentic example sentences (keep the book's; >=1)
  syn?: string;        // optional 近义 / 批注 (e.g. handwritten annotations)
  note?: string;       // optional extra note
  group?: string;      // optional sub-section label (e.g. "增加与汇总" for book section A)
  marker?: string;     // ONLY for passage personas: the [[marker]] text in `passage`
}

export interface Persona {
  role: string;        // English role label, e.g. "The boss"
  roleZh: string;      // Chinese role label, e.g. "老板"
  avatar: string;      // letter(s) shown in the avatar circle
  tint: string;        // hex color for the avatar (see palette in CONTENT_GUIDE.md)
  passage: string;     // first-person monologue with [[markers]] inline
  phrases: Phrase[];   // one entry per [[marker]] in `passage`
}

export interface Story {
  // A connected English story/scenario that weaves in MOST of the unit's
  // phrases, so the learner sees them working together in context.
  // Mark each phrase inline as [[display form|phrase head]] — the part before
  // the | is the text shown in the story (the inflected form as it reads),
  // the part after the | is the `head` of the phrase it links to (must exist
  // in this unit's phrases / personas). Clicking it opens that phrase's drawer.
  // If there is no |, the whole text is treated as both display and head.
  text: string;
  title?: string;      // optional English heading shown above the story
}

export interface UnitSeed {
  id: string;          // unique id, used as upsert key (e.g. "size-number")
  num: string;         // unit number as printed, e.g. "26"
  tag: string;         // category, e.g. "数量规模 · Size & number"
  title: string;       // English title
  titleZh: string;     // Chinese subtitle
  intro: string;       // lead paragraph; may contain <b>...</b>
  phrases?: Phrase[];  // GENERIC shape: the topic's phrases (optionally grouped)
  personas?: Persona[];// PASSAGE shape: optional monologue presentation
  story?: Story;       // optional connected story/scenario using the unit's phrases
}
