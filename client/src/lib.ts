import type { Unit, Phrase, FlatPhrase } from "./types.ts";

/* Split "...[[marker]]..." into tokens (ported from the prototype).
   A marker may be plain `[[text]]` (persona passages: text is both the shown
   form and the lookup key), or `[[display|head]]` (unit stories: `display` is
   shown inline, `head` links to the phrase with that head). */
export interface Token {
  t: string;       // text to display
  mark?: string;   // present on highlighted tokens; the shown form
  head?: string;   // story links: the `head` of the phrase to open
}
export function parsePassage(text: string): Token[] {
  const parts: Token[] = [];
  const re = /\[\[(.+?)\]\]/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push({ t: text.slice(last, m.index) });
    const bar = m[1].indexOf("|");
    if (bar >= 0) {
      const disp = m[1].slice(0, bar);
      parts.push({ t: disp, mark: disp, head: m[1].slice(bar + 1) });
    } else {
      parts.push({ t: m[1], mark: m[1] });
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push({ t: text.slice(last) });
  return parts;
}

/* Build a marker -> Phrase lookup for one persona's phrase array. */
export function phraseMap(phrases: Phrase[]): Map<string, Phrase> {
  return new Map(phrases.filter((p) => p.marker).map((p) => [p.marker as string, p]));
}

/* Flatten all phrases of a unit, in display order.
   Generic units use `unit.phrases`; passage units flatten their personas. */
export function unitPhrases(unit: Unit): FlatPhrase[] {
  if (unit.phrases?.length) {
    return unit.phrases.map((ph) => ({ ...ph, key: ph.head }));
  }
  const out: FlatPhrase[] = [];
  (unit.personas || []).forEach((p) =>
    p.phrases.forEach((ph) => out.push({ ...ph, role: p.role, key: ph.head }))
  );
  return out;
}

/* Group a unit's phrases by their optional `group` label, preserving order. */
export function groupedPhrases(unit: Unit): { label: string | null; phrases: FlatPhrase[] }[] {
  const groups: { label: string | null; phrases: FlatPhrase[] }[] = [];
  for (const ph of unitPhrases(unit)) {
    const label = ph.group ?? null;
    let g = groups.find((x) => x.label === label);
    if (!g) {
      g = { label, phrases: [] };
      groups.push(g);
    }
    g.phrases.push(ph);
  }
  return groups;
}

/* Flatten across all units. */
export function allPhrases(units: Unit[]): FlatPhrase[] {
  return units.flatMap(unitPhrases);
}

/* Strip simple HTML tags (for card subtitles). */
export function stripTags(s: string): string {
  return s.replace(/<[^>]+>/g, "");
}

/* Highlight the `hl` substring inside `en` (case-insensitive, first match). */
export function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
