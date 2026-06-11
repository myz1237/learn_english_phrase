import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";

/* Confirmation dialog for irreversible actions. Portaled to document.body
   (same reason as the drawer: escape the .fade-in containing block).
   Esc / scrim click cancel; the destructive action needs an explicit click. */
export function ConfirmModal({
  title,
  children,
  confirmLabel = "确认",
  busy = false,
  onConfirm,
  onCancel
}: {
  title: string;
  children: ReactNode;
  confirmLabel?: string;
  busy?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onCancel]);

  return createPortal(
    <>
      <div className="drawer-scrim" style={{ zIndex: 60 }} onClick={onCancel} />
      <div className="modal" role="dialog" aria-modal="true" aria-label={title}>
        <h3 className="modal-title">{title}</h3>
        <div className="modal-body">{children}</div>
        <div className="modal-actions">
          <button className="btn" onClick={onCancel} disabled={busy}>取消</button>
          <button className="btn danger" onClick={onConfirm} disabled={busy}>
            {busy ? "重置中…" : confirmLabel}
          </button>
        </div>
      </div>
    </>,
    document.body
  );
}
