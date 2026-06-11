// Phrasebook — root App: routing, tweaks, accent theming, learned/saved state.

const { useState: useStateA, useEffect: useEffectA } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": ["#3f7d5b", "#2f5e44", "#eef3ef"],
  "passageFont": "serif",
  "showZh": true
}/*EDITMODE-END*/;

const ACCENTS = [
  ["#3f7d5b", "#2f5e44", "#eef3ef"], // forest
  ["#c2603a", "#9c4a2b", "#f6ece6"], // terracotta
  ["#2f6db0", "#235487", "#e9f0f8"], // ink blue
  ["#7a5cc4", "#5f449e", "#f0ebfa"]  // muted violet
];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = useStateA(window.PB.LS.get("route", { name: "today" }));
  const [savedList, setSavedList] = useStateA(window.PB.LS.get("savedList", []));
  const [learnedList, setLearnedList] = useStateA(window.PB.LS.get("learnedList", []));
  const [streak] = useStateA(window.PB.LS.get("streak", 1));
  const savedSet = new Set(savedList);
  const learnedSet = new Set(learnedList);

  useEffectA(() => {
    const [a, deep, tint] = t.accent || ACCENTS[0];
    const r = document.documentElement.style;
    r.setProperty("--accent", a); r.setProperty("--accent-deep", deep); r.setProperty("--accent-tint", tint);
    r.setProperty("--example-font", t.passageFont === "sans" ? "var(--sans)" : "var(--serif)");
  }, [t.accent, t.passageFont]);

  const go = (r) => { setRoute(r); window.PB.LS.set("route", r); document.querySelector(".main")?.scrollTo({ top: 0 }); };

  const toggleSave = (key) => setSavedList(prev => {
    const next = prev.includes(key) ? prev.filter(x => x !== key) : [...prev, key];
    window.PB.LS.set("savedList", next); return next;
  });
  const markLearned = (key) => setLearnedList(prev => {
    if (prev.includes(key)) return prev;
    const next = [...prev, key]; window.PB.LS.set("learnedList", next); return next;
  });

  // ---- global phrase drawer (shared by passage + saved views) ----
  const [drawer, setDrawer] = useStateA(null); // { items:[{ph,role,mark}], idx }
  const openDrawer = (items, idx) => { if (idx < 0) return; setDrawer({ items, idx }); markLearned(items[idx].ph.head); };
  const closeDrawer = () => setDrawer(null);
  const stepDrawer = (d) => setDrawer(dw => {
    if (!dw) return dw;
    const n = (dw.idx + d + dw.items.length) % dw.items.length;
    markLearned(dw.items[n].ph.head);
    return { ...dw, idx: n };
  });
  const curItem = drawer ? drawer.items[drawer.idx] : null;

  let view;
  if (route.name === "library") view = <window.PBV.LibraryView go={go} learnedSet={learnedSet} />;
  else if (route.name === "saved") view = <window.PBV.SavedView savedSet={savedSet} openDrawer={openDrawer} />;
  else if (route.name === "review") view = <window.PBV.ReviewView savedSet={savedSet} showZh={t.showZh} />;
  else if (route.name === "unit") {
    const unit = window.UNITS.find(u => u.id === route.id) || window.UNITS[0];
    view = <window.PBP.PassageView unit={unit} openDrawer={openDrawer} activeKey={curItem ? curItem.ph.head : null} learnedSet={learnedSet} go={go} />;
  }
  else view = <window.PBV.TodayView go={go} learnedSet={learnedSet} savedCount={savedList.length} />;

  return (
    <div className="app">
      <window.PB.Sidebar route={route} go={go} savedCount={savedList.length} streak={streak} learnedCount={learnedList.length} />
      <main className="main">
        <div className="main-inner">{view}</div>
      </main>

      {curItem && (
        <window.PBP.PhraseDrawer
          key={curItem.ph.head}
          ph={curItem.ph} fromRole={curItem.role} showZh={t.showZh}
          saved={savedSet.has(curItem.ph.head)}
          onSave={() => toggleSave(curItem.ph.head)}
          onClose={closeDrawer}
          onPrev={() => stepDrawer(-1)} onNext={() => stepDrawer(1)}
          pos={drawer.idx + 1} total={drawer.items.length}
        />
      )}

      <TweaksPanel>
        <TweakSection label="外观" />
        <TweakColor label="强调色" value={t.accent} options={ACCENTS} onChange={v => setTweak("accent", v)} />
        <TweakSection label="阅读" />
        <TweakRadio label="正文字体" value={t.passageFont} options={[{ value: "serif", label: "衬线" }, { value: "sans", label: "无衬线" }]} onChange={v => setTweak("passageFont", v)} />
        <TweakToggle label="显示中文释义" value={t.showZh} onChange={v => setTweak("showZh", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
