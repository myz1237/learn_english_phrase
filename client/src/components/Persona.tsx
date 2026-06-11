import { Fragment } from "react";
import { parsePassage, phraseMap } from "../lib.ts";
import type { Persona as PersonaT } from "../types.ts";

function Avatar({ p }: { p: PersonaT }) {
  return (
    <div
      className="avatar"
      style={{
        background: `color-mix(in srgb, ${p.tint} 16%, var(--surface))`,
        color: p.tint,
        borderColor: `color-mix(in srgb, ${p.tint} 35%, var(--line))`
      }}
    >
      <span>{p.avatar}</span>
    </div>
  );
}

export function Persona({
  p,
  learnedSet,
  activeKey,
  onPick
}: {
  p: PersonaT;
  learnedSet: Set<string>;
  activeKey: string | null;
  onPick: (persona: PersonaT, marker: string) => void;
}) {
  const tokens = parsePassage(p.passage);
  const map = phraseMap(p.phrases);

  return (
    <div className="persona">
      <div className="persona-id">
        <Avatar p={p} />
        <div className="persona-meta">
          <div className="role-en">{p.role}</div>
          <div className="role-zh">{p.roleZh}</div>
        </div>
      </div>
      <div className="bubble">
        <p className="passage">
          {tokens.map((tk, i) => {
            if (!tk.mark) return <Fragment key={i}>{tk.t}</Fragment>;
            const ph = map.get(tk.mark);
            const learned = !!ph && learnedSet.has(ph.head);
            const active = !!ph && activeKey === ph.head;
            return (
              <span
                key={i}
                role="button"
                tabIndex={0}
                className={"ph-mark" + (learned ? " learned" : "") + (active ? " active" : "")}
                onClick={() => onPick(p, tk.mark!)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onPick(p, tk.mark!);
                  }
                }}
              >
                {tk.t}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}
