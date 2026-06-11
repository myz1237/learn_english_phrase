import type { ReactNode } from "react";

export type IconName =
  | "today" | "library" | "review" | "saved"
  | "play" | "stop" | "arrowR" | "arrowL"
  | "bookmark" | "check" | "clock" | "when" | "spark";

const paths: Record<IconName, ReactNode> = {
  today: (<><circle cx="12" cy="12" r="4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></>),
  library: <><path d="M4 5h11v15H4zM15 5l5 1-2.5 14L15 19" /></>,
  review: <><path d="M3 12a9 9 0 1 0 3-6.7M3 4v4h4" /></>,
  saved: <path d="M6 3h12v18l-6-4-6 4z" />,
  play: <path d="M7 5l11 7-11 7z" fill="currentColor" stroke="none" />,
  stop: <rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor" stroke="none" />,
  arrowR: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowL: <path d="M19 12H5M11 18l-6-6 6-6" />,
  bookmark: <path d="M6 3h12v18l-6-4-6 4z" />,
  check: <path d="M5 12l4 4 10-10" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  when: <><circle cx="12" cy="12" r="9" /><path d="M12 8v4l3 2" /></>,
  spark: <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="currentColor" stroke="none" />
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}
