import { useMemo, useState } from "react";
import { useApp } from "../AppContext.tsx";
import { Icon } from "../components/Icon.tsx";
import { allPhrases, escapeRe } from "../lib.ts";
import { speak } from "../tts.ts";

export function ReviewView() {
  const { units, savedSet } = useApp();

  const pool = useMemo(() => {
    const all = allPhrases(units);
    const saved = all.filter((p) => savedSet.has(p.key));
    const base = saved.length >= 3 ? saved : all;
    return [...base].sort(() => Math.random() - 0.5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [units]);

  const [i, setI] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const p = pool[i];
  if (!p) return <div className="center-note">还没有可复习的短语,先去学习几个吧。</div>;

  const ex = p.examples[0];
  const esc = escapeRe(ex.hl || "");
  const masked = ex.en.replace(new RegExp(esc, "i"), "____");
  const advance = () => {
    setRevealed(false);
    setI((i + 1) % pool.length);
  };

  return (
    <div className="fade-in">
      <div className="eyebrow">复习 · 回忆练习</div>
      <h1 className="h1">这句话里,该用哪个短语?</h1>
      <p className="lead">先看例句、试着想出空缺处的地道表达,再点开卡片验证。这种「主动回忆」比反复阅读记得牢得多。</p>

      <div className="flash" onClick={() => setRevealed(true)} style={{ marginTop: 26 }}>
        {!revealed ? (
          <>
            <div className="q" dangerouslySetInnerHTML={{ __html: masked.replace("____", "<span class='blank'>?</span>") }} />
            <div className="hint">{ex.zh ? ex.zh + " · " : ""}点击卡片揭示答案</div>
          </>
        ) : (
          <>
            <div className="reveal-phrase">{p.head}</div>
            <div
              className="q"
              style={{ fontSize: 20 }}
              dangerouslySetInnerHTML={{
                __html: ex.en.replace(
                  new RegExp("(" + esc + ")", "i"),
                  "<span class='hl' style=\"color:var(--accent-deep);background:linear-gradient(transparent 62%,var(--accent-tint) 62%)\">$1</span>"
                )
              }}
            />
            <button className="audio-btn" onClick={(e) => { e.stopPropagation(); speak(ex.en); }}>
              <Icon name="play" className="ico" />
            </button>
          </>
        )}
      </div>

      <div className="grade-row">
        {!revealed ? (
          <button className="btn" onClick={() => setRevealed(true)}>揭示答案</button>
        ) : (
          <>
            <button className="btn" onClick={advance}>再想想</button>
            <button className="btn primary" onClick={advance}>记住了 <Icon name="check" className="ico" /></button>
          </>
        )}
      </div>
      <div style={{ textAlign: "center", marginTop: 16, color: "var(--ink-faint)", fontSize: 13 }}>{i + 1} / {pool.length}</div>
    </div>
  );
}
