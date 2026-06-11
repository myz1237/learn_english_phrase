import { Fragment } from "react";
import { parsePassage } from "../lib.ts";
import { Icon } from "./Icon.tsx";
import type { Story } from "../types.ts";

/* A connected story/scenario for a unit. Highlighted phrases (marked in the
   story text as [[display|head]]) open that phrase's drawer, mirroring the
   persona passage interaction. Phrases not present in the unit just render as
   plain text (defensive: validate.ts catches dangling heads before seeding). */
export function StorySection({
  story,
  learnedSet,
  activeKey,
  hasHead,
  onPick
}: {
  story: Story;
  learnedSet: Set<string>;
  activeKey: string | null;
  hasHead: (head: string) => boolean;
  onPick: (head: string) => void;
}) {
  // blank lines split the story into paragraphs
  const paragraphs = story.text.split(/\n\s*\n/);

  return (
    <section className="story">
      <div className="story-label">
        <Icon name="spark" className="ico" />
        {story.title || "故事 · Read the phrases in one scene"}
      </div>
      <div className="bubble story-bubble">
        {paragraphs.map((para, pi) => (
          <p className="passage" key={pi}>
            {parsePassage(para).map((tk, i) => {
              if (!tk.mark || !tk.head || !hasHead(tk.head)) {
                return <Fragment key={i}>{tk.t}</Fragment>;
              }
              const head = tk.head;
              const learned = learnedSet.has(head);
              const active = activeKey === head;
              return (
                <span
                  key={i}
                  role="button"
                  tabIndex={0}
                  className={"ph-mark" + (learned ? " learned" : "") + (active ? " active" : "")}
                  onClick={() => onPick(head)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onPick(head);
                    }
                  }}
                >
                  {tk.t}
                </span>
              );
            })}
          </p>
        ))}
      </div>
    </section>
  );
}
