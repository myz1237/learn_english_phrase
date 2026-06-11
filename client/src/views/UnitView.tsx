import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useApp } from "../AppContext.tsx";
import { Persona } from "../components/Persona.tsx";
import { SentenceItem } from "../components/SentenceItem.tsx";
import { StorySection } from "../components/StorySection.tsx";
import { ConfirmModal } from "../components/ConfirmModal.tsx";
import { Icon } from "../components/Icon.tsx";
import { unitPhrases, groupedPhrases, phraseMap } from "../lib.ts";
import type { Persona as PersonaT, DrawerItem } from "../types.ts";

export function UnitView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { units, learnedSet, openDrawer, current, resetUnitProgress } = useApp();
  const [resetOpen, setResetOpen] = useState(false);
  const [resetting, setResetting] = useState(false);

  const unit = units.find((u) => u.id === id) || units[0];
  if (!unit) return <div className="center-note">找不到这个单元。</div>;

  // ordered list across the whole unit -> drives prev/next in the drawer
  const flat = unitPhrases(unit);
  const items: DrawerItem[] = flat.map((p) => ({ ph: p, role: p.role }));
  const indexOfHead = (head: string) => flat.findIndex((p) => p.head === head);
  const openHead = (head: string) => {
    const i = indexOfHead(head);
    if (i >= 0) openDrawer(items, i);
  };

  const learnedInUnit = flat.filter((p) => learnedSet.has(p.key)).length;
  const pct = flat.length ? (learnedInUnit / flat.length) * 100 : 0;
  const activeKey = current ? current.ph.head : null;

  const hasPersonas = !!unit.personas?.length;
  const pick = (persona: PersonaT, marker: string) => {
    const ph = phraseMap(persona.phrases).get(marker);
    if (ph) openDrawer(items, indexOfHead(ph.head));
  };

  const groups = groupedPhrases(unit);
  let offset = 0; // running index across groups, aligned with `flat`

  const doReset = async () => {
    setResetting(true);
    try {
      await resetUnitProgress(unit.id);
      setResetOpen(false);
    } finally {
      setResetting(false);
    }
  };

  return (
    <div className="fade-in">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <button className="btn ghost" style={{ marginLeft: -8 }} onClick={() => navigate("/library")}>← 场景库</button>
        <button className="btn ghost" onClick={() => setResetOpen(true)} disabled={learnedInUnit === 0} title={learnedInUnit === 0 ? "本单元还没有学习记录" : "重置本单元的学习进度"}>
          <Icon name="review" className="ico" /> 重置进度
        </button>
      </div>
      <div className="unit-head">
        <div>
          <div className="eyebrow">Unit {unit.num} · {unit.tag}</div>
          <h1 className="h1" style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
            {unit.title}
            <span style={{ fontSize: 20, color: "var(--ink-faint)", fontWeight: 500, fontFamily: "var(--serif)", fontStyle: "italic" }}>{unit.titleZh}</span>
          </h1>
        </div>
        <div className="unit-prog">
          <div className="ring" style={{ ["--p" as string]: pct + "%" }}>
            <b>{learnedInUnit}</b><span>/{flat.length}</span>
          </div>
        </div>
      </div>
      <p className="lead" dangerouslySetInnerHTML={{ __html: unit.intro }} />
      <div className="read-hint">
        <Icon name="spark" className="ico" /> {hasPersonas
          ? <>点击任意<span className="demo-mark">高亮短语</span>,查看含义、用法和更多例句</>
          : <>在例句里读这些短语 —— 点任意<span className="demo-mark">高亮句子</span>展开含义、用法和更多例句</>}
      </div>

      {hasPersonas ? (
        // PASSAGE MODE — the original persona monologues
        <div className="personas">
          {unit.personas!.map((p, i) => (
            <Persona key={i} p={p} learnedSet={learnedSet} activeKey={activeKey} onPick={pick} />
          ))}
        </div>
      ) : (
        // GENERIC MODE — learn each phrase inside its example sentence
        <div className="phrase-sections">
          {groups.map((g, gi) => {
            const start = offset;
            offset += g.phrases.length;
            return (
              <section key={gi}>
                {g.label ? <div className="sec-label">{g.label}</div> : <div style={{ height: 18 }} />}
                <div className="sentence-list">
                  {g.phrases.map((ph, i) => (
                    <SentenceItem
                      key={ph.head}
                      ph={ph}
                      learned={learnedSet.has(ph.key)}
                      active={activeKey === ph.head}
                      onClick={() => openDrawer(items, start + i)}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}

      {unit.story?.text && (
        <StorySection
          story={unit.story}
          learnedSet={learnedSet}
          activeKey={activeKey}
          hasHead={(head) => indexOfHead(head) >= 0}
          onPick={openHead}
        />
      )}

      {resetOpen && (
        <ConfirmModal
          title="重置学习进度?"
          confirmLabel="确认重置"
          busy={resetting}
          onConfirm={doReset}
          onCancel={() => setResetOpen(false)}
        >
          将清除「Unit {unit.num} · {unit.title}」的全部已学记录(当前 {learnedInUnit} / {flat.length} 个短语)。
          <b style={{ color: "var(--ink)" }}>此操作不可撤回。</b>收藏列表不受影响。
        </ConfirmModal>
      )}
    </div>
  );
}
