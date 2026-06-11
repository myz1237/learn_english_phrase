import { useApp } from "../AppContext.tsx";
import { UnitCard } from "../components/UnitCard.tsx";

export function LibraryView() {
  const { units } = useApp();
  return (
    <div className="fade-in">
      <div className="eyebrow">场景库</div>
      <h1 className="h1">按单元浏览</h1>
      <p className="lead">每个单元是一组「会一起出现」的地道短语,放在几位角色的自述里。挑一个你最近会遇到的情境进去。</p>
      <div className="scn-grid">
        {units.map((u) => <UnitCard key={u.id} unit={u} />)}
      </div>
    </div>
  );
}
