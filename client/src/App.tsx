import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useApp } from "./AppContext.tsx";
import { Sidebar } from "./components/Sidebar.tsx";
import { PhraseDrawer } from "./components/PhraseDrawer.tsx";
import { TodayView } from "./views/TodayView.tsx";
import { LibraryView } from "./views/LibraryView.tsx";
import { UnitView } from "./views/UnitView.tsx";
import { SavedView } from "./views/SavedView.tsx";
import { ReviewView } from "./views/ReviewView.tsx";

export function App() {
  const { loading, error } = useApp();
  const mainRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // scroll the main column to top on navigation (mirrors the prototype)
  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0 });
  }, [location.pathname]);

  if (error) {
    return (
      <div className="center-note">
        加载失败:{error}
        <br />请确认后端已启动(npm run dev)且数据库可连接。
      </div>
    );
  }
  if (loading) return <div className="center-note">加载中…</div>;

  return (
    <div className="app">
      <Sidebar />
      <main className="main" ref={mainRef}>
        <div className="main-inner">
          <Routes>
            <Route path="/" element={<TodayView />} />
            <Route path="/library" element={<LibraryView />} />
            <Route path="/unit/:id" element={<UnitView />} />
            <Route path="/saved" element={<SavedView />} />
            <Route path="/review" element={<ReviewView />} />
            <Route path="*" element={<TodayView />} />
          </Routes>
        </div>
      </main>
      <PhraseDrawer />
    </div>
  );
}
