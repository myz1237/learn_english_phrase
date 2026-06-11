// Phrasebook — app components. Exports to window for the entry script.

const { useState, useEffect, useRef } = React;

/* ---------------- helpers ---------------- */
const LS = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};

function speak(text, setPlaying) {
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US"; u.rate = 0.92;
    const vs = window.speechSynthesis.getVoices();
    const pref = vs.find(v => /en-(US|GB)/.test(v.lang) && /(Samantha|Daniel|Google US|Google UK)/i.test(v.name)) || vs.find(v => /^en/i.test(v.lang));
    if (pref) u.voice = pref;
    if (setPlaying) { setPlaying(true); u.onend = () => setPlaying(false); u.onerror = () => setPlaying(false); }
    window.speechSynthesis.speak(u);
  } catch {}
}

function Icon({ name, className }) {
  const p = {
    today: <><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></>,
    library: <><path d="M4 5h11v15H4zM15 5l5 1-2.5 14L15 19"/></>,
    review: <><path d="M3 12a9 9 0 1 0 3-6.7M3 4v4h4"/></>,
    saved: <path d="M6 3h12v18l-6-4-6 4z"/>,
    play: <path d="M7 5l11 7-11 7z" fill="currentColor" stroke="none"/>,
    stop: <rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor" stroke="none"/>,
    arrowR: <path d="M5 12h14M13 6l6 6-6 6"/>,
    arrowL: <path d="M19 12H5M11 18l-6-6 6-6"/>,
    bookmark: <path d="M6 3h12v18l-6-4-6 4z"/>,
    check: <path d="M5 12l4 4 10-10"/>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    when: <><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/></>,
    spark: <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="currentColor" stroke="none"/>
  }[name];
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{p}</svg>;
}

/* ---------------- Sidebar ---------------- */
function Sidebar({ route, go, savedCount, streak, learnedCount }) {
  const items = [
    { id: "today", label: "今日学习", icon: "today" },
    { id: "library", label: "场景库", icon: "library" },
    { id: "review", label: "复习", icon: "review" },
    { id: "saved", label: "我的收藏", icon: "saved", badge: savedCount }
  ];
  return (
    <aside className="side">
      <div className="brand">
        <div className="mark">P</div>
        <div className="name">Phrasebook<small>地道短语 · 例句学习</small></div>
      </div>
      <nav className="nav">
        {items.map(it => (
          <button key={it.id} className={"nav-item" + (route.name === it.id ? " active" : "")} onClick={() => go({ name: it.id })}>
            <Icon name={it.icon} className="ico" />
            {it.label}
            {it.badge ? <span className="badge">{it.badge}</span> : null}
          </button>
        ))}
      </nav>
      <div className="spacer"></div>
      <div className="streak-chip">
        <div className="big">{streak} 天</div>
        <div className="lbl">连续学习 · 累计已学 {learnedCount || 0} 个短语</div>
      </div>
    </aside>
  );
}

/* ---------------- Scenario card ---------------- */
function ScenarioCard({ scn, progress, onOpen }) {
  const pct = Math.round((progress / scn.phrases.length) * 100);
  return (
    <button className="scn-card" onClick={onOpen}>
      <div className="top">
        <span className="scn-tag">{scn.tag}</span>
        <span style={{ fontSize: 13, color: "var(--ink-faint)" }}>{scn.phrases.length} 个短语</span>
      </div>
      <div className="title">{scn.title}</div>
      <div className="sub">{scn.sub}</div>
      <div className="preview-phrases">
        {scn.phrases.slice(0, 3).map((p, i) => <span key={i}>{p.phrase}</span>)}
      </div>
      <div className="foot">
        <span className="prog"><i style={{ width: pct + "%" }}></i></span>
        <span>{progress}/{scn.phrases.length}</span>
      </div>
    </button>
  );
}

window.PB = { LS, speak, Icon, Sidebar, ScenarioCard };
// expose components other babel scripts use bare:
Object.assign(window, { Icon, ScenarioCard, Sidebar });
