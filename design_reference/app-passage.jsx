// Phrasebook — PassageView (persona monologues) + PhraseDrawer.

const { useState: useStateP, useEffect: useEffectP, useRef: useRefP } = React;

/* split "...[[marker]]..." into tokens */
function parsePassage(text) {
  const parts = [];
  const re = /\[\[(.+?)\]\]/g;
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push({ t: text.slice(last, m.index) });
    parts.push({ t: m[1], mark: m[1] });
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push({ t: text.slice(last) });
  return parts;
}

function Avatar({ p }) {
  return (
    <div className="avatar" style={{ background: "color-mix(in srgb, " + p.tint + " 16%, var(--surface))", color: p.tint, borderColor: "color-mix(in srgb, " + p.tint + " 35%, var(--line))" }}>
      <span>{p.avatar}</span>
    </div>
  );
}

function Persona({ p, learnedSet, activeKey, onPick }) {
  const tokens = parsePassage(p.passage);
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
            if (!tk.mark) return <React.Fragment key={i}>{tk.t}</React.Fragment>;
            const ph = p.phrases[tk.mark];
            const learned = ph && learnedSet.has(ph.head);
            return (
              <span key={i} role="button" tabIndex={0}
                className={"ph-mark" + (learned ? " learned" : "") + (ph && activeKey === ph.head ? " active" : "")}
                onClick={() => onPick(p, tk.mark)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onPick(p, tk.mark); } }}>
                {tk.t}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}

function PassageView({ unit, openDrawer, activeKey, learnedSet, go }) {
  // ordered list across the whole unit -> drives prev/next in the drawer
  const items = [];
  unit.personas.forEach(p => Object.keys(p.phrases).forEach(mark => items.push({ ph: p.phrases[mark], role: p.role, mark })));

  const pick = (persona, mark) => {
    const head = persona.phrases[mark].head;
    openDrawer(items, items.findIndex(it => it.ph.head === head));
  };

  const learnedInUnit = items.filter(f => learnedSet.has(f.ph.head)).length;

  return (
    <div className="fade-in">
      <button className="btn ghost" style={{ marginBottom: 18, marginLeft: -8 }} onClick={() => go({ name: "library" })}>← 场景库</button>
      <div className="unit-head">
        <div>
          <div className="eyebrow">Unit {unit.num} · {unit.tag}</div>
          <h1 className="h1" style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
            {unit.title}<span style={{ fontSize: 20, color: "var(--ink-faint)", fontWeight: 500, fontFamily: "var(--serif)", fontStyle: "italic" }}>{unit.titleZh}</span>
          </h1>
        </div>
        <div className="unit-prog">
          <div className="ring" style={{ "--p": (learnedInUnit / items.length) * 100 + "%" }}>
            <b>{learnedInUnit}</b><span>/{items.length}</span>
          </div>
        </div>
      </div>
      <p className="lead" dangerouslySetInnerHTML={{ __html: unit.intro }} />
      <div className="read-hint"><window.PB.Icon name="spark" className="ico" /> 点击任意<span className="demo-mark">高亮短语</span>,查看含义、用法和更多例句</div>

      <div className="personas">
        {unit.personas.map((p, i) => (
          <Persona key={i} p={p} learnedSet={learnedSet} activeKey={activeKey} onPick={pick} />
        ))}
      </div>
    </div>
  );
}

function PhraseDrawer({ ph, fromRole, showZh, saved, onSave, onClose, onPrev, onNext, pos, total }) {
  const [playing, setPlaying] = useStateP(false);
  const [exPlay, setExPlay] = useStateP(-1);
  useEffectP(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); else if (e.key === "ArrowRight") onNext(); else if (e.key === "ArrowLeft") onPrev(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNext, onPrev]);

  const hlEx = (en, hl) => {
    const i = en.toLowerCase().indexOf((hl || "").toLowerCase());
    if (i < 0) return en;
    return <>{en.slice(0, i)}<span className="hl">{en.slice(i, i + hl.length)}</span>{en.slice(i + hl.length)}</>;
  };

  return ReactDOM.createPortal(
    <>
      <div className="drawer-scrim" onClick={onClose}></div>
      <aside className="drawer" key={ph.head}>
        <div className="drawer-top">
          <span className="from-who">来自 · {fromRole}</span>
          <button className="icon-x" onClick={onClose} aria-label="关闭">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
        </div>

        <div className="drawer-body">
          <div className="p-register"><span className="pill">{ph.register}</span></div>
          <div className="phrase-line">
            <span className="phrase" style={{ fontSize: 32 }}>{ph.head}</span>
            <button className={"audio-btn" + (playing ? " playing" : "")} onClick={() => window.PB.speak(ph.head.replace(/\bsb\b|\bsth\b|\/.*$/g, "").trim() || ph.head, setPlaying)}>
              <window.PB.Icon name={playing ? "stop" : "play"} className="ico" />
            </button>
          </div>

          <div className="def-en">{ph.def}</div>
          {showZh ? <div className="def-zh">{ph.zh}</div> : null}

          <div className="when-box">
            <window.PB.Icon name="when" className="ico" />
            <div className="txt" dangerouslySetInnerHTML={{ __html: "<b>什么时候用 · </b>" + ph.when }} />
          </div>

          {ph.syn ? <div className="note-line"><span className="tag">近义 / 批注</span><span>{ph.syn}</span></div> : null}

          <div className="sec-label">地道例句</div>
          <div className="examples">
            {ph.examples.map((ex, i) => (
              <div className="example" key={i}>
                <div className="en" style={{ fontSize: 19 }}>
                  {hlEx(ex.en, ex.hl)}{"  "}
                  <button className={"audio-btn" + (exPlay === i ? " playing" : "")} style={{ width: 26, height: 26, display: "inline-grid", verticalAlign: "middle", transform: "translateY(-2px)" }}
                    onClick={() => window.PB.speak(ex.en, v => setExPlay(v ? i : -1))}>
                    <window.PB.Icon name={exPlay === i ? "stop" : "play"} className="ico" />
                  </button>
                </div>
                {showZh && ex.zh ? <div className="zh">{ex.zh}</div> : null}
              </div>
            ))}
          </div>
        </div>

        <div className="drawer-foot">
          <button className={"btn ghost save-btn" + (saved ? " saved" : "")} onClick={onSave}>
            <window.PB.Icon name="bookmark" className="ico" />{saved ? "已收藏" : "收藏"}
          </button>
          <div style={{ flex: 1 }}></div>
          <span className="dpos">{pos} / {total}</span>
          <button className="icon-btn" onClick={onPrev} aria-label="上一个"><window.PB.Icon name="arrowL" className="ico" /></button>
          <button className="icon-btn" onClick={onNext} aria-label="下一个"><window.PB.Icon name="arrowR" className="ico" /></button>
        </div>
      </aside>
    </>,
    document.body
  );
}

window.PBP = { PassageView, PhraseDrawer };
