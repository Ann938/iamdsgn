"use client";

import { useState } from "react";

// Большой фирменный тумблер: переключает тему страницы (светлая ⇄ тёмная). Сам знак бренда — рабочий элемент интерфейса.
export default function Toggle({ className, knobClass }: { className?: string; knobClass?: string }) {
  const [on, setOn] = useState(true);
  const flip = () => {
    const next = !on;
    setOn(next);
    document.querySelector("[data-v3]")?.setAttribute("data-dark", next ? "false" : "true");
  };
  return (
    <button type="button" role="switch" aria-checked={on} aria-label="Переключить тему" className={className} data-on={on} onClick={flip}>
      <i className={knobClass} />
    </button>
  );
}
