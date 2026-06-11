// Phrasebook — Today / Library / Saved / Review views (unit model).

const { useState: useStateV, useEffect: useEffectV, useMemo } = React;

function UnitCard({ unit, learnedSet, onOpen, big }) {
  const flat = window.unitPhrases(unit);
  const done = flat.filter(p => learnedSet.has(p.key)).length;
  const pct = Math.round((done / flat.length) * 100);
  const heads = flat.slice(0, big ? 6 : 4).map(p => p.head);
  return (
    <button className="scn-card" style={big ? { width: "100%" } : null} onClick={onOpen}>
      <div className="top">
        <span className="scn-tag">Unit {unit.num} · {unit.tag}</span>
        <span style={{ fontSize: 13, color: "var(--ink-faint)" }}>{unit.personas.length} 人 · {flat.length} 短语</span>
      </div>
      <div className="title" style={big ? { fontSize: 23 } : null}>{unit.title} <span style={{ color: "var(--ink-faint)", fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 500, fontSize: big ? 17 : 15 }}>{unit.titleZh}</span></div>
      <div className="sub" style={big ? { fontSize: 15 } : null} dangerouslySetInnerHTML={{ __html: stripB(unit.intro) }} />
      <div className="preview-phrases">
        {heads.map((h, i) => <span key={i}>{h}</span>)}
      </div>
      <div className="foot">
        <span className="prog"><i style={{ width: pct + "%" }}></i></span>
        <span>{done}/{flat.length}</span>
      </div>
    </button>
  );
}
function stripB(s) { return s.replace(/<[^>]+>/g, ""); }

function TodayView({ go, learnedSet, savedCount }) {
  const units = window.UNITS;
  const focus = units[0];
  const all = window.allPhrases();
  const learnedTotal = all.filter(p => learnedSet.has(p.key)).length;

  return (
    <div className="fade-in">
      <div className="eyebrow">{new Date().toLocaleDateString("zh-CN", { month: "long", day: "numeric", weekday: "long" })}</div>
      <h1 className="h1">把短语,放回它生长的句子里。</h1>
      <p className="lead">不背「一个短语五个意思」。每个单元都是几位<b style={{ color: "var(--ink)", fontWeight: 600 }}>真实角色的自述</b> —— 地道短语就藏在他们的话里。点开高亮处,看它在<b style={{ color: "var(--ink)", fontWeight: 600 }}>什么场合、用什么语气</b>说出口。</p>

      <div className="stats">
        <div className="stat"><div className="n">{learnedTotal}<span style={{ fontSize: 15, color: "var(--ink-faint)", fontWeight: 500 }}> / {all.length}</span></div><div className="l">已学短语</div></div>
        <div className="stat"><div className="n">{units.length}</div><div className="l">学习单元</div></div>
        <div className="stat"><div className="n">{savedCount}</div><div className="l">收藏待复习</div></div>
      </div>

      <div className="sec-label" style={{ marginTop: 40 }}>今日单元</div>
      <UnitCard unit={focus} learnedSet={learnedSet} big onOpen={() => go({ name: "unit", id: focus.id })} />

      {units.length > 1 && (
        <>
          <div className="sec-label" style={{ marginTop: 38 }}>继续探索</div>
          <div className="scn-grid" style={{ marginTop: 0 }}>
            {units.slice(1).map(u => <UnitCard key={u.id} unit={u} learnedSet={learnedSet} onOpen={() => go({ name: "unit", id: u.id })} />)}
          </div>
        </>
      )}
    </div>
  );
}

function LibraryView({ go, learnedSet }) {
  return (
    <div className="fade-in">
      <div className="eyebrow">场景库</div>
      <h1 className="h1">按单元浏览</h1>
      <p className="lead">每个单元是一组「会一起出现」的地道短语,放在几位角色的自述里。挑一个你最近会遇到的情境进去。</p>
      <div className="scn-grid">
        {window.UNITS.map(u => <UnitCard key={u.id} unit={u} learnedSet={learnedSet} onOpen={() => go({ name: "unit", id: u.id })} />)}
      </div>
    </div>
  );
}

function SavedView({ savedSet, openDrawer }) {
  const all = window.allPhrases().filter(p => savedSet.has(p.key));
  const items = all.map(p => ({ ph: p, role: p.role }));
  return (
    <div className="fade-in">
      <div className="eyebrow">我的收藏</div>
      <h1 className="h1">收藏夹</h1>
      <p className="lead">你标记下来、想再看一眼的表达。{all.length ? "点任意一条,直接在右侧展开它的释义和例句。" : ""}</p>
      {all.length === 0 ? (
        <div className="empty">
          <div className="big">还没有收藏的短语</div>
          <div style={{ marginTop: 10 }}>学习时点「收藏」,它们会出现在这里,方便复习。</div>
        </div>
      ) : (
        <div className="row-list">
          {all.map((p, i) => (
            <button className="prow" key={i} onClick={() => openDrawer(items, i)}>
              <span className="ph">{p.head}</span>
              <span className="ex">{p.examples[0].en}</span>
              <span className="reg">{p.register.split(" ")[0]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ReviewView({ savedSet, showZh }) {
  const pool = useMemo(() => {
    const all = window.allPhrases();
    const saved = all.filter(p => savedSet.has(p.key));
    const base = saved.length >= 3 ? saved : all;
    return [...base].sort(() => Math.random() - 0.5);
  }, []);
  const [i, setI] = useStateV(0);
  const [revealed, setRevealed] = useStateV(false);
  const p = pool[i];
  if (!p) return null;
  const ex = p.examples[0];
  const esc = (ex.hl || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const masked = ex.en.replace(new RegExp(esc, "i"), "____");

  const grade = () => { setRevealed(false); setI((i + 1) % pool.length); };

  return (
    <div className="fade-in">
      <div className="eyebrow">复习 · 回忆练习</div>
      <h1 className="h1">这句话里,该用哪个短语?</h1>
      <p className="lead">先看例句、试着想出空缺处的地道表达,再点开卡片验证。这种「主动回忆」比反复阅读记得牢得多。</p>

      <div className="flash" onClick={() => setRevealed(true)} style={{ marginTop: 26 }}>
        {!revealed ? (
          <>
            <div className="q" dangerouslySetInnerHTML={{ __html: masked.replace("____", "<span class='blank'>?</span>") }} />
            <div className="hint">{showZh ? ex.zh + " · " : ""}点击卡片揭示答案</div>
          </>
        ) : (
          <>
            <div className="reveal-phrase">{p.head}</div>
            <div className="q" style={{ fontSize: 20 }} dangerouslySetInnerHTML={{ __html: ex.en.replace(new RegExp("(" + esc + ")", "i"), "<span class='hl' style=\"color:var(--accent-deep);background:linear-gradient(transparent 62%,var(--accent-tint) 62%)\">$1</span>") }} />
            <button className="audio-btn" onClick={(e) => { e.stopPropagation(); window.PB.speak(ex.en); }}><window.PB.Icon name="play" className="ico" /></button>
          </>
        )}
      </div>
      <div className="grade-row">
        {!revealed ? (
          <button className="btn" onClick={() => setRevealed(true)}>揭示答案</button>
        ) : (
          <>
            <button className="btn" onClick={grade}>再想想</button>
            <button className="btn primary" onClick={grade}>记住了 <window.PB.Icon name="check" className="ico" /></button>
          </>
        )}
      </div>
      <div style={{ textAlign: "center", marginTop: 16, color: "var(--ink-faint)", fontSize: 13 }}>{i + 1} / {pool.length}</div>
    </div>
  );
}

window.PBV = { TodayView, LibraryView, SavedView, ReviewView, UnitCard };
