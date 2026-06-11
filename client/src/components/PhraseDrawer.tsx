import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Icon } from "./Icon.tsx";
import { speak } from "../tts.ts";
import { useApp } from "../AppContext.tsx";

function highlight(en: string, hl: string): ReactNode {
  const i = en.toLowerCase().indexOf((hl || "").toLowerCase());
  if (i < 0 || !hl) return en;
  return (
    <>
      {en.slice(0, i)}
      <span className="hl">{en.slice(i, i + hl.length)}</span>
      {en.slice(i + hl.length)}
    </>
  );
}

export function PhraseDrawer() {
  const { current, drawer, savedSet, toggleSave, closeDrawer, stepDrawer } = useApp();
  const [playing, setPlaying] = useState(false);
  const [exPlay, setExPlay] = useState(-1);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
      else if (e.key === "ArrowRight") stepDrawer(1);
      else if (e.key === "ArrowLeft") stepDrawer(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeDrawer, stepDrawer]);

  if (!current || !drawer) return null;
  const ph = current.ph;
  const saved = savedSet.has(ph.head);

  return createPortal(
    <>
      <div className="drawer-scrim" onClick={closeDrawer} />
      <aside className="drawer" key={ph.head}>
        <div className="drawer-top">
          <span className="from-who">{current.role ? `来自 · ${current.role}` : current.ph.group || ""}</span>
          <button className="icon-x" onClick={closeDrawer} aria-label="关闭">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="drawer-body">
          <div className="p-register"><span className="pill">{ph.register}</span></div>
          <div className="phrase-line">
            <span className="phrase" style={{ fontSize: 32 }}>{ph.head}</span>
            <button
              className={"audio-btn" + (playing ? " playing" : "")}
              onClick={() => speak(ph.head.replace(/\bsb\b|\bsth\b|\/.*$/g, "").trim() || ph.head, setPlaying)}
            >
              <Icon name={playing ? "stop" : "play"} className="ico" />
            </button>
          </div>

          <div className="def-en">{ph.def}</div>
          {ph.zh ? <div className="def-zh">{ph.zh}</div> : null}

          <div className="when-box">
            <Icon name="when" className="ico" />
            <div className="txt" dangerouslySetInnerHTML={{ __html: "<b>什么时候用 · </b>" + ph.when }} />
          </div>

          {ph.syn ? (
            <div className="note-line"><span className="tag">近义 / 批注</span><span>{ph.syn}</span></div>
          ) : null}

          <div className="sec-label">地道例句</div>
          <div className="examples">
            {ph.examples.map((ex, i) => (
              <div className="example" key={i}>
                <div className="en" style={{ fontSize: 19 }}>
                  {highlight(ex.en, ex.hl)}{"  "}
                  <button
                    className={"audio-btn" + (exPlay === i ? " playing" : "")}
                    style={{ width: 26, height: 26, display: "inline-grid", verticalAlign: "middle", transform: "translateY(-2px)" }}
                    onClick={() => speak(ex.en, (v) => setExPlay(v ? i : -1))}
                  >
                    <Icon name={exPlay === i ? "stop" : "play"} className="ico" />
                  </button>
                </div>
                {ex.zh ? <div className="zh">{ex.zh}</div> : null}
              </div>
            ))}
          </div>
        </div>

        <div className="drawer-foot">
          <button className={"btn ghost save-btn" + (saved ? " saved" : "")} onClick={() => toggleSave(ph.head)}>
            <Icon name="bookmark" className="ico" />{saved ? "已收藏" : "收藏"}
          </button>
          <div style={{ flex: 1 }} />
          <span className="dpos">{drawer.idx + 1} / {drawer.items.length}</span>
          <button className="icon-btn" onClick={() => stepDrawer(-1)} aria-label="上一个"><Icon name="arrowL" className="ico" /></button>
          <button className="icon-btn" onClick={() => stepDrawer(1)} aria-label="下一个"><Icon name="arrowR" className="ico" /></button>
        </div>
      </aside>
    </>,
    document.body
  );
}
