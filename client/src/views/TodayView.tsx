import { useApp } from "../AppContext.tsx";
import { UnitCard } from "../components/UnitCard.tsx";
import { allPhrases } from "../lib.ts";

export function TodayView() {
  const { units, learnedSet, progress } = useApp();
  const savedCount = progress.savedList.length;
  const focus = units[0];
  const all = allPhrases(units);
  const learnedTotal = all.filter((p) => learnedSet.has(p.key)).length;
  const today = new Date().toLocaleDateString("zh-CN", { month: "long", day: "numeric", weekday: "long" });

  return (
    <div className="fade-in">
      <div className="eyebrow">{today}</div>
      <h1 className="h1">把短语,放回它生长的句子里。</h1>
      <p className="lead">
        不背「一个短语五个意思」。每个单元都是几位<b style={{ color: "var(--ink)", fontWeight: 600 }}>真实角色的自述</b> —— 地道短语就藏在他们的话里。点开高亮处,看它在<b style={{ color: "var(--ink)", fontWeight: 600 }}>什么场合、用什么语气</b>说出口。
      </p>

      <div className="stats">
        <div className="stat">
          <div className="n">{learnedTotal}<span style={{ fontSize: 15, color: "var(--ink-faint)", fontWeight: 500 }}> / {all.length}</span></div>
          <div className="l">已学短语</div>
        </div>
        <div className="stat"><div className="n">{units.length}</div><div className="l">学习单元</div></div>
        <div className="stat"><div className="n">{savedCount}</div><div className="l">收藏待复习</div></div>
      </div>

      {focus && (
        <>
          <div className="sec-label" style={{ marginTop: 40 }}>今日单元</div>
          <UnitCard unit={focus} big />
        </>
      )}

      {units.length > 1 && (
        <>
          <div className="sec-label" style={{ marginTop: 38 }}>继续探索</div>
          <div className="scn-grid" style={{ marginTop: 0 }}>
            {units.slice(1).map((u) => <UnitCard key={u.id} unit={u} />)}
          </div>
        </>
      )}
    </div>
  );
}
