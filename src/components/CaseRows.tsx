"use client";

import { useEffect, useRef, useState } from "react";
import type { Case } from "@/content";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Список кейсов строками; на ДВ за курсором плывёт превью кейса (как у агентств). Позиция — в ref, без перерисовки React.
export default function CaseRows({ cases, s }: { cases: Case[]; s: Record<string, string> }) {
  const prev = useRef<HTMLDivElement>(null);
  const [cur, setCur] = useState<number | null>(null);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = prev.current;
    if (!el) return;
    let x = 0, y = 0, tx = 0, ty = 0, raf = 0;
    const move = (e: PointerEvent) => { tx = e.clientX; ty = e.clientY; if (!raf) raf = requestAnimationFrame(tick); };
    const tick = () => {
      x += (tx - x) * 0.14; y += (ty - y) * 0.14;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.5 ? requestAnimationFrame(tick) : 0;
    };
    addEventListener("pointermove", move);
    return () => { removeEventListener("pointermove", move); cancelAnimationFrame(raf); };
  }, []);
  return (
    <>
      <ul className={s.rows} onPointerLeave={() => setCur(null)}>
        {cases.map((c, i) => (
          <li key={c.id} onPointerEnter={() => setCur(i)}>
            <a href={c.url} target="_blank" rel="noopener noreferrer">
              <span className={s.rowNum}>{String(i + 1).padStart(2, "0")}</span>
              <b>{c.title}</b>
              <span className={s.rowKind}>{c.kind}</span>
              <span className={s.rowTags}>{c.tags.slice(0, 3).join(" · ")}</span>
              <span className={s.rowGo}>↗</span>
            </a>
            <img className={s.rowImg} src={`${BASE}/cases/${c.img}`} alt="" loading="lazy" />
          </li>
        ))}
      </ul>
      <div ref={prev} className={s.preview} data-on={cur !== null} aria-hidden="true">
        {cases.map((c, i) => <img key={c.id} src={`${BASE}/cases/${c.img}`} alt="" style={{ opacity: cur === i ? 1 : 0 }} />)}
      </div>
    </>
  );
}
