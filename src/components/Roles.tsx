"use client";

import { useEffect, useState } from "react";
import { brand } from "@/content";

// «I AM ___» — слово меняется по кругу. mode: type — печатается с кареткой, swap — сменяется снизу вверх.
export default function Roles({ mode = "swap", className, interval = 2200 }: { mode?: "type" | "swap"; className?: string; interval?: number }) {
  const words = brand.roles;
  const [i, setI] = useState(0);
  const [shown, setShown] = useState(words[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [interval, words.length]);

  // печать: стираем и набираем новое слово по буквам
  useEffect(() => {
    if (mode !== "type") return;
    const target = words[i];
    let cur = shown;
    let timer: ReturnType<typeof setTimeout>;
    const step = () => {
      if (!target.startsWith(cur)) { cur = cur.slice(0, -1); setShown(cur); timer = setTimeout(step, 40); return; }
      if (cur.length < target.length) { cur = target.slice(0, cur.length + 1); setShown(cur); timer = setTimeout(step, 70); }
    };
    timer = setTimeout(step, 40);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i, mode]);

  if (mode === "type") {
    return (
      <span className={className} aria-label={words.join(", ")}>
        {shown}
        <i className="caret" aria-hidden="true" />
      </span>
    );
  }
  return (
    <span className={className} aria-label={words.join(", ")}>
      <span key={i} className="swap-in">{words[i]}</span>
    </span>
  );
}
