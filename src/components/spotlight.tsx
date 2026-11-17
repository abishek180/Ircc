"use client";

import { useRef, type ReactNode } from "react";

// Wraps a section and paints a soft spotlight that follows the pointer.
// Updates a CSS variable directly, so moving the mouse never re-renders React.
export function Spotlight({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={`relative [--spot-x:70%] [--spot-y:40%] ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(520px_circle_at_var(--spot-x)_var(--spot-y),rgba(255,157,0,0.16),transparent_70%)] transition-[background] duration-200"
      />
      {children}
    </div>
  );
}
