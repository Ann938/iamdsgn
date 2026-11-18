"use client";

import { useEffect, useRef } from "react";

// Лёгкий параллакс от курсора: пишет --mx/--my (−1…1) в стиль обёртки, дальше всё делает CSS.
// Только на устройствах с мышью; значения в ref, React не перерисовывается.
export default function Parallax({ className, children }: { className?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const target = { x: 0, y: 0 }, cur = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      target.x = (e.clientX / innerWidth) * 2 - 1;
      target.y = (e.clientY / innerHeight) * 2 - 1;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const tick = () => {
      cur.x += (target.x - cur.x) * 0.08;
      cur.y += (target.y - cur.y) * 0.08;
      el.style.setProperty("--mx", cur.x.toFixed(3));
      el.style.setProperty("--my", cur.y.toFixed(3));
      raf = Math.abs(target.x - cur.x) + Math.abs(target.y - cur.y) > 0.002 ? requestAnimationFrame(tick) : 0;
    };
    addEventListener("pointermove", onMove);
    return () => { removeEventListener("pointermove", onMove); cancelAnimationFrame(raf); };
  }, []);
  return <div ref={ref} className={className}>{children}</div>;
}
