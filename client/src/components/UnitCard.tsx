import { useNavigate } from "react-router-dom";
import { useApp } from "../AppContext.tsx";
import { unitPhrases, stripTags } from "../lib.ts";
import type { Unit } from "../types.ts";

export function UnitCard({ unit, big }: { unit: Unit; big?: boolean }) {
  const { learnedSet } = useApp();
  const navigate = useNavigate();
  const flat = unitPhrases(unit);
  const done = flat.filter((p) => learnedSet.has(p.key)).length;
  const pct = flat.length ? Math.round((done / flat.length) * 100) : 0;
  const heads = flat.slice(0, big ? 6 : 4).map((p) => p.head);

  return (
    <button className="scn-card" style={big ? { width: "100%" } : undefined} onClick={() => navigate(`/unit/${unit.id}`)}>
      <div className="top">
        <span className="scn-tag">Unit {unit.num} · {unit.tag}</span>
        <span style={{ fontSize: 13, color: "var(--ink-faint)" }}>{unit.personas?.length ? `${unit.personas.length} 人 · ` : ""}{flat.length} 短语</span>
      </div>
      <div className="title" style={big ? { fontSize: 23 } : undefined}>
        {unit.title}{" "}
        <span style={{ color: "var(--ink-faint)", fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 500, fontSize: big ? 17 : 15 }}>
          {unit.titleZh}
        </span>
      </div>
      <div className="sub" style={big ? { fontSize: 15 } : undefined}>{stripTags(unit.intro)}</div>
      <div className="preview-phrases">
        {heads.map((h, i) => <span key={i}>{h}</span>)}
      </div>
      <div className="foot">
        <span className="prog"><i style={{ width: pct + "%" }} /></span>
        <span>{done}/{flat.length}</span>
      </div>
    </button>
  );
}
