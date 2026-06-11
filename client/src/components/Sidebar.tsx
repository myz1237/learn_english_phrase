import { NavLink } from "react-router-dom";
import { Icon, type IconName } from "./Icon.tsx";
import { useApp } from "../AppContext.tsx";

const items: { to: string; label: string; icon: IconName; end?: boolean; badgeKey?: "saved" }[] = [
  { to: "/", label: "今日学习", icon: "today", end: true },
  { to: "/library", label: "场景库", icon: "library" },
  { to: "/review", label: "复习", icon: "review" },
  { to: "/saved", label: "我的收藏", icon: "saved", badgeKey: "saved" }
];

export function Sidebar() {
  const { progress } = useApp();
  const savedCount = progress.savedList.length;
  const learnedCount = progress.learnedList.length;

  return (
    <aside className="side">
      <div className="brand">
        <div className="mark">P</div>
        <div className="name">Phrasebook<small>地道短语 · 例句学习</small></div>
      </div>
      <nav className="nav">
        {items.map((it) => (
          <NavLink
            key={it.to}
            to={it.to}
            end={it.end}
            className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
          >
            <Icon name={it.icon} className="ico" />
            {it.label}
            {it.badgeKey === "saved" && savedCount > 0 ? <span className="badge">{savedCount}</span> : null}
          </NavLink>
        ))}
      </nav>
      <div className="spacer" />
      <div className="streak-chip">
        <div className="big">{progress.streak} 天</div>
        <div className="lbl">连续学习 · 累计已学 {learnedCount || 0} 个短语</div>
      </div>
    </aside>
  );
}
