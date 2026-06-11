import type { Unit, Progress } from "./types.ts";

async function req<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...init
  });
  if (!res.ok) throw new Error(`${init?.method || "GET"} ${url} → ${res.status}`);
  return res.json() as Promise<T>;
}

export const api = {
  getUnits: () => req<Unit[]>("/api/units"),
  getUnit: (id: string) => req<Unit>(`/api/units/${id}`),
  getProgress: () => req<Progress>("/api/progress"),
  toggleSaved: (head: string) =>
    req<Progress>("/api/progress/saved", { method: "PUT", body: JSON.stringify({ head }) }),
  markLearned: (head: string) =>
    req<Progress>("/api/progress/learned", { method: "PUT", body: JSON.stringify({ head }) }),
  resetUnit: (unitId: string) =>
    req<Progress>("/api/progress/reset-unit", { method: "PUT", body: JSON.stringify({ unitId }) })
};
