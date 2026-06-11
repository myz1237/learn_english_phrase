/* Structural validator for content seed.
   Run `npm run validate` after extracting a unit and BEFORE seeding.
   Catches mechanical mistakes (marker mismatches, hl not in example,
   missing fields, duplicate ids). It can NOT judge meaning/translation —
   that's on you (see the "提取后自检清单" in CONTENT_GUIDE.md). */
import { units } from "./seed/index.ts";
import type { UnitSeed, Phrase } from "./seed/types.ts";

const HEX = /^#[0-9a-fA-F]{6}$/;
const MARKER_RE = /\[\[(.+?)\]\]/g;

const errors: string[] = [];
const warnings: string[] = [];

function markersIn(passage: string): string[] {
  const out: string[] = [];
  let m: RegExpExecArray | null;
  MARKER_RE.lastIndex = 0;
  while ((m = MARKER_RE.exec(passage)) !== null) out.push(m[1]);
  return out;
}

// field/example checks common to both generic and passage phrases
function checkPhrase(ph: Phrase, w: (s: string) => string) {
  for (const f of ["head", "def", "zh", "register", "when"] as const) {
    if (!ph[f]) warnings.push(w(`empty field "${f}"`));
  }
  if (!ph.examples?.length) {
    errors.push(w("has no examples"));
    return;
  }
  ph.examples.forEach((ex, ei) => {
    const ew = (s: string) => w(`example[${ei}] ${s}`);
    if (!ex.en) errors.push(ew("missing en"));
    if (!ex.hl) {
      warnings.push(ew("missing hl (nothing will be highlighted)"));
    } else if (ex.en && !ex.en.toLowerCase().includes(ex.hl.toLowerCase())) {
      errors.push(ew(`hl "${ex.hl}" is not a substring of en "${ex.en}"`));
    }
    if (!ex.zh) warnings.push(ew("missing zh translation"));
  });
}

function checkUnit(u: UnitSeed) {
  const where = (s: string) => `[unit "${u.id}"] ${s}`;
  if (!u.id) errors.push(where("missing id"));
  for (const f of ["num", "tag", "title", "titleZh", "intro"] as const) {
    if (!u[f]) warnings.push(where(`empty field "${f}"`));
  }

  const hasGeneric = !!u.phrases?.length;
  const hasPersonas = !!u.personas?.length;
  if (!hasGeneric && !hasPersonas) errors.push(where("has no phrases and no personas"));

  // generic topic phrases
  (u.phrases || []).forEach((ph, hi) => {
    checkPhrase(ph, (s) => where(`phrases[${hi}] "${ph.head || "?"}" ${s}`));
  });

  // optional connected story: every [[display|head]] must point to a real head
  if (u.story?.text) {
    const allHeads = new Set<string>([
      ...(u.phrases || []).map((ph) => ph.head),
      ...(u.personas || []).flatMap((p) => p.phrases.map((ph) => ph.head))
    ]);
    const linked = new Set<string>();
    for (const marker of markersIn(u.story.text)) {
      const bar = marker.indexOf("|");
      const head = bar >= 0 ? marker.slice(bar + 1) : marker;
      if (!allHeads.has(head)) {
        errors.push(where(`story marker [[...|${head}]] points to head "${head}" which is not a phrase in this unit`));
      } else {
        linked.add(head);
      }
    }
    const coverage = allHeads.size ? Math.round((linked.size / allHeads.size) * 100) : 0;
    if (coverage < 50) {
      warnings.push(where(`story links only ${linked.size}/${allHeads.size} phrases (${coverage}%) — aim to weave in most of them`));
    }
  }

  // optional passage personas (marker/passage cross-checks apply here)
  (u.personas || []).forEach((p, pi) => {
    const pw = (s: string) => where(`persona[${pi}] "${p.role || "?"}" ${s}`);
    if (p.tint && !HEX.test(p.tint)) errors.push(pw(`tint "${p.tint}" is not a #rrggbb hex`));
    if (!p.passage) errors.push(pw("missing passage"));

    const passageMarkers = markersIn(p.passage || "");
    const phraseMarkers = (p.phrases || []).map((ph) => ph.marker || "");

    for (const m of passageMarkers) {
      if (!phraseMarkers.includes(m)) errors.push(pw(`passage marker [[${m}]] has no matching phrase`));
    }
    const seen = new Set<string>();
    for (const ph of p.phrases || []) {
      if (!ph.marker) {
        errors.push(pw(`phrase "${ph.head}" needs a marker (it lives in a persona passage)`));
      } else {
        if (!passageMarkers.includes(ph.marker)) errors.push(pw(`phrase marker "${ph.marker}" not found in passage as [[${ph.marker}]]`));
        if (seen.has(ph.marker)) errors.push(pw(`duplicate phrase marker "${ph.marker}"`));
        seen.add(ph.marker);
      }
    }
    (p.phrases || []).forEach((ph, hi) => {
      checkPhrase(ph, (s) => pw(`phrase[${hi}] "${ph.marker || ph.head || "?"}" ${s}`));
    });
  });
}

// duplicate unit ids
const ids = new Set<string>();
for (const u of units) {
  if (ids.has(u.id)) errors.push(`duplicate unit id "${u.id}"`);
  ids.add(u.id);
  checkUnit(u);
}

const phraseTotal = units.reduce(
  (n, u) => n + (u.phrases?.length || 0) + (u.personas || []).reduce((m, p) => m + p.phrases.length, 0),
  0
);
console.log(`[validate] ${units.length} unit(s), ${phraseTotal} phrase(s) checked.`);

if (warnings.length) {
  console.log(`\n⚠️  ${warnings.length} warning(s):`);
  warnings.forEach((w) => console.log("  - " + w));
}
if (errors.length) {
  console.log(`\n❌ ${errors.length} error(s):`);
  errors.forEach((e) => console.log("  - " + e));
  console.log("\nFix the errors above before running `npm run seed`.");
  process.exit(1);
}
console.log("\n✅ structural checks passed. Now do the semantic self-judgment (see CONTENT_GUIDE.md) before seeding.");
