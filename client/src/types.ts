export interface Example {
  en: string;
  zh: string;
  hl: string;
}

export interface Phrase {
  head: string;
  def: string;
  zh: string;
  register: string;
  when: string;
  examples: Example[];
  syn?: string;
  note?: string;
  group?: string;   // optional sub-section label
  marker?: string;  // only for passage personas
}

export interface Persona {
  role: string;
  roleZh: string;
  avatar: string;
  tint: string;
  passage: string;
  phrases: Phrase[];
}

export interface Story {
  text: string;     // connected passage; phrases marked inline as [[display|head]]
  title?: string;   // optional English heading
}

export interface Unit {
  id: string;
  num: string;
  tag: string;
  title: string;
  titleZh: string;
  intro: string;
  phrases?: Phrase[];     // generic topic phrases
  personas?: Persona[];   // optional passage mode
  story?: Story;          // optional connected story using the unit's phrases
}

export interface Progress {
  savedList: string[];
  learnedList: string[];
  streak: number;
  lastStudied: string | null;
}

/* A phrase flattened with where it came from. */
export interface FlatPhrase extends Phrase {
  key: string;        // === head, the identity used for saved/learned
  role?: string;      // persona role, if it came from one
}

/* The drawer cycles through a list of these. */
export interface DrawerItem {
  ph: Phrase;
  role?: string;      // "来自 · {role}"; optional for generic phrases
}
