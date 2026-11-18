"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

// Горизонтальная лента: секция закрепляется, лента едет влево на всю свою длину. Только ДВ; на МВ — обычная вертикаль.
export default function HScroll({ className, trackClass, children }: { className?: string; trackClass?: string; children: React.ReactNode }) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const w = wrap.current, t = track.current;
    if (!w || !t) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const dist = () => Math.max(0, t.scrollWidth - window.innerWidth);
        gsap.to(t, {
          x: () => -dist(),
          ease: "none",
          scrollTrigger: { trigger: w, start: "top top", end: () => `+=${dist()}`, pin: true, scrub: 0.6, invalidateOnRefresh: true },
        });
      });
    }, w);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={wrap} className={className}>
      <div ref={track} className={trackClass}>{children}</div>
    </div>
  );
}
