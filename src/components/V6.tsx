import { brand, cases, formats, services, steps } from "@/content";
import { LogoShapes, MarkShapes } from "./Logos";
import Parallax from "./Parallax";
import s from "./v6.module.scss";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const Arrow = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const SHAPES = ["circle", "square", "triangle", "half", "bar"] as const;
const COLORS = ["var(--y)", "var(--b)", "var(--r)", "var(--ink)", "var(--y)"];

// Направление 6 «Конструктор»: баухаус. Дизайн собирается из простых фигур — круг, квадрат, треугольник.
export default function V6() {
  return (
    <div className={s.page}>
      <header className={s.header}>
        <a href="#top"><LogoShapes className={s.logo} /></a>
        <nav className={s.nav}><a href="#cases">Кейсы</a><a href="#services">Услуги</a><a href="#formats">Форматы</a></nav>
        <a className={s.cta} href={brand.contact} target="_blank" rel="noopener noreferrer">Связаться <Arrow /></a>
      </header>

      <Parallax className={s.hero}>
        <div className={s.heroText} id="top">
          <h1><span>I AM</span><span>DSGN</span></h1>
          <p className={s.claim}>Собираем сложные продукты из простых и понятных решений</p>
          <p className={s.lead}>{brand.lead}</p>
          <a className={s.btn} href={brand.contact} target="_blank" rel="noopener noreferrer">Обсудить задачу <Arrow /></a>
        </div>
        <div className={s.compo} aria-hidden="true">
          <i className={s.cBig} />
          <i className={s.sqBlue} />
          <i className={s.tri} />
          <i className={s.half} />
          <i className={s.bar} />
          <i className={s.dot} />
          <i className={s.ring} />
        </div>
      </Parallax>

      <section className={s.strip} aria-hidden="true">
        {steps.map((st, i) => <span key={st.t} style={{ background: COLORS[i], color: i === 3 ? "var(--bg)" : "var(--ink)" }}>{st.t}</span>)}
      </section>

      <section className={s.section} id="cases">
        <h2 className={s.h2}>Кейсы</h2>
        <div className={s.cases}>
          {cases.map((c, i) => (
            <a key={c.id} className={s.case} href={c.url} target="_blank" rel="noopener noreferrer" style={{ ["--c" as string]: i ? "var(--r)" : "var(--b)" }} data-reveal>
              <div className={s.caseImg}><img src={`${BASE}/cases/${c.img}`} alt={`${c.title}: ${c.kind}`} loading="lazy" /></div>
              <div className={s.caseInfo}>
                <span className={`${s.shape} ${s[SHAPES[i]]}`} />
                <h3>{c.title}</h3>
                <p className={s.kind}>{c.kind}</p>
                <p>{c.text}</p>
                <span className={s.go}>Кейс на Behance <Arrow /></span>
              </div>
            </a>
          ))}
        </div>
        <a className={s.pill} href={brand.behance} target="_blank" rel="noopener noreferrer">Все работы <Arrow /></a>
      </section>

      <section className={s.section} id="services">
        <h2 className={s.h2}>Услуги</h2>
        <div className={s.services}>
          {services.map((v, i) => (
            <article key={v.n} style={{ ["--c" as string]: COLORS[i] }} className={i === 3 ? s.dark : undefined} data-reveal>
              <span className={`${s.shape} ${s[SHAPES[i]]}`} />
              <h3>{v.t}</h3>
              <p>{v.d}</p>
              <ul>{v.items.map((it) => <li key={it}>{it}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className={s.section} id="formats">
        <h2 className={s.h2}>Форматы</h2>
        <div className={s.formats}>
          {formats.map((f, i) => (
            <article key={f.t} data-reveal style={{ ["--d" as string]: i }}>
              <span className={s.fnum}>{i + 1}</span>
              <h3>{f.t}</h3>
              <p>{f.d}</p>
              <ul>{f.fit.map((x) => <li key={x}>{x}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className={s.contact}>
        <i className={s.contactCircle} aria-hidden="true" />
        <a className={s.contactBig} href={brand.contact} target="_blank" rel="noopener noreferrer">Соберём<br />ваш продукт?</a>
        <div className={s.contactRow}>
          <a href={brand.tg} target="_blank" rel="noopener noreferrer">Telegram {brand.tgName}</a>
          <a href={brand.behance} target="_blank" rel="noopener noreferrer">Behance</a>
          <a href={brand.dprofile} target="_blank" rel="noopener noreferrer">Dprofile</a>
        </div>
        <footer className={s.foot}><MarkShapes className={s.footMark} /><span>{brand.about} · 2026</span></footer>
      </section>
    </div>
  );
}
