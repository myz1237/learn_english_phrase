import type { ReactNode } from "react";
import type { FlatPhrase } from "../types.ts";

/* Render `en` with the `hl` substring wrapped as a highlighted, learned-aware mark. */
function renderHighlighted(en: string, hl: string, learned: boolean, active: boolean): ReactNode {
  const i = en.toLowerCase().indexOf((hl || "").toLowerCase());
  const cls = "ph-mark" + (learned ? " learned" : "") + (active ? " active" : "");
  if (i < 0 || !hl) return <span className={cls}>{en}</span>;
  return (
    <>
      {en.slice(0, i)}
      <span className={cls}>{en.slice(i, i + hl.length)}</span>
      {en.slice(i + hl.length)}
    </>
  );
}

/* One phrase shown the way the app intends — inside its example sentence. */
export function SentenceItem({
  ph,
  learned,
  active,
  onClick
}: {
  ph: FlatPhrase;
  learned: boolean;
  active: boolean;
  onClick: () => void;
}) {
  const ex = ph.examples[0];
  if (!ex) return null;
  return (
    <button className={"sentence-item" + (active ? " active" : "")} onClick={onClick}>
      <p className="s-en">{renderHighlighted(ex.en, ex.hl, learned, active)}</p>
      {ex.zh ? <p className="s-zh">{ex.zh}</p> : null}
    </button>
  );
}
