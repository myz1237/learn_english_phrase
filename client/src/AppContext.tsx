import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";
import { api } from "./api.ts";
import type { Unit, Progress, DrawerItem } from "./types.ts";

interface DrawerState {
  items: DrawerItem[];
  idx: number;
}

interface AppValue {
  units: Unit[];
  progress: Progress;
  loading: boolean;
  error: string | null;
  savedSet: Set<string>;
  learnedSet: Set<string>;
  toggleSave: (head: string) => void;
  resetUnitProgress: (unitId: string) => Promise<void>;
  // drawer
  drawer: DrawerState | null;
  current: DrawerItem | null;
  openDrawer: (items: DrawerItem[], idx: number) => void;
  closeDrawer: () => void;
  stepDrawer: (d: number) => void;
}

const Ctx = createContext<AppValue | null>(null);

export function useApp(): AppValue {
  const v = useContext(Ctx);
  if (!v) throw new Error("useApp must be used within <AppProvider>");
  return v;
}

const EMPTY_PROGRESS: Progress = { savedList: [], learnedList: [], streak: 0, lastStudied: null };

export function AppProvider({ children }: { children: ReactNode }) {
  const [units, setUnits] = useState<Unit[]>([]);
  const [progress, setProgress] = useState<Progress>(EMPTY_PROGRESS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [drawer, setDrawer] = useState<DrawerState | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const [u, p] = await Promise.all([api.getUnits(), api.getProgress()]);
        if (!alive) return;
        setUnits(u);
        setProgress(p);
      } catch (e) {
        if (alive) setError(e instanceof Error ? e.message : String(e));
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const savedSet = new Set(progress.savedList);
  const learnedSet = new Set(progress.learnedList);

  const toggleSave = useCallback((head: string) => {
    // optimistic
    setProgress((prev) => {
      const has = prev.savedList.includes(head);
      return { ...prev, savedList: has ? prev.savedList.filter((h) => h !== head) : [...prev.savedList, head] };
    });
    api.toggleSaved(head).then(setProgress).catch(() => {});
  }, []);

  // not optimistic: irreversible, so wait for the server before updating the UI
  const resetUnitProgress = useCallback(async (unitId: string) => {
    const p = await api.resetUnit(unitId);
    setProgress(p);
  }, []);

  const markLearned = useCallback((head: string) => {
    setProgress((prev) =>
      prev.learnedList.includes(head) ? prev : { ...prev, learnedList: [...prev.learnedList, head] }
    );
    api.markLearned(head).then(setProgress).catch(() => {});
  }, []);

  const openDrawer = useCallback(
    (items: DrawerItem[], idx: number) => {
      if (idx < 0 || idx >= items.length) return;
      setDrawer({ items, idx });
      markLearned(items[idx].ph.head);
    },
    [markLearned]
  );

  const closeDrawer = useCallback(() => setDrawer(null), []);

  const stepDrawer = useCallback(
    (d: number) => {
      setDrawer((dw) => {
        if (!dw) return dw;
        const n = (dw.idx + d + dw.items.length) % dw.items.length;
        markLearned(dw.items[n].ph.head);
        return { ...dw, idx: n };
      });
    },
    [markLearned]
  );

  const current = drawer ? drawer.items[drawer.idx] : null;

  const value: AppValue = {
    units,
    progress,
    loading,
    error,
    savedSet,
    learnedSet,
    toggleSave,
    resetUnitProgress,
    drawer,
    current,
    openDrawer,
    closeDrawer,
    stepDrawer
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
