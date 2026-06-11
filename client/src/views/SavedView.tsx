import { useApp } from "../AppContext.tsx";
import { allPhrases } from "../lib.ts";
import type { DrawerItem } from "../types.ts";

export function SavedView() {
  const { units, savedSet, openDrawer } = useApp();
  const all = allPhrases(units).filter((p) => savedSet.has(p.key));
  const items: DrawerItem[] = all.map((p) => ({ ph: p, role: p.role }));

  return (
    <div className="fade-in">
      <div className="eyebrow">我的收藏</div>
      <h1 className="h1">收藏夹</h1>
      <p className="lead">
        你标记下来、想再看一眼的表达。{all.length ? "点任意一条,直接在右侧展开它的释义和例句。" : ""}
      </p>
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
              <span className="ex">{p.examples[0]?.en}</span>
              <span className="reg">{p.register.split(" ")[0]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
