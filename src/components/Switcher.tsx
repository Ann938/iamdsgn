import s from "./switcher.module.scss";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const items = [
  { n: "Бренд", href: "/", t: "три направления" },
  { n: "1", href: "/v1/", t: "Сигнал" },
  { n: "2", href: "/v2/", t: "Кобальт" },
  { n: "3", href: "/v3/", t: "Тумблер" },
  { n: "4", href: "/v4/", t: "Хром" },
  { n: "5", href: "/v5/", t: "Салон" },
  { n: "6", href: "/v6/", t: "Конструктор" },
];

// Переключатель направлений — только для выбора, в финальный сайт не попадёт
export default function Switcher({ cur }: { cur: string }) {
  return (
    <nav className={s.sw} aria-label="Направления ребрендинга">
      <span>I AM DSGN</span>
      {items.map((it) => (
        <a key={it.n} href={`${BASE}${it.href}`} aria-current={cur === it.n ? "page" : undefined} title={it.t}>
          {it.n}
          {it.n !== "Бренд" && <i>{it.t}</i>}
        </a>
      ))}
    </nav>
  );
}
