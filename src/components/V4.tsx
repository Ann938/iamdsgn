import { brand, cases, formats, services, steps } from "@/content";
import { LogoChrome } from "./Logos";
import s from "./v4.module.scss";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
// иконки этапов: анализ, концепт, дизайн, система, поддержка — тонкие линии в цвет текста
const stepIcons = [
  <path key="1" d="M10.5 18a7.5 7.5 0 1 1 5.3-2.2L21 21M7 12.5l2-2.5 2 1.5 2.5-3.5" />,
  <path key="2" d="M3 4h18v12H3zM3 9h18M8 20h8M12 16v4M7 12.5h4" />,
  <path key="3" d="M4 20l1-4L16 5l3 3L8 19l-4 1ZM14 7l3 3M4 20h16" />,
  <path key="4" d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 17h6M17 14v6" />,
  <path key="5" d="M20 12a8 8 0 1 1-2.3-5.7M20 4v5h-5M9 12l2 2 4-4" />,
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

// Направление 4 «Хром»: чёрный, жидкий металл в WebGL, тонкая типографика с металлическим переливом
export default function V4() {
  return (
    <div className={s.page}>
      <div className={s.grain} aria-hidden="true" />
      <header className={s.header}>
        <a href="#top"><LogoChrome className={s.logo} /></a>
        <nav className={s.nav}><a href="#cases">Кейсы</a><a href="#services">Услуги</a><a href="#formats">Форматы</a></nav>
        <a className={s.cta} href={brand.contact} target="_blank" rel="noopener noreferrer">Связаться <Arrow /></a>
      </header>

      <section className={s.hero} id="top">
        <p className={s.word} aria-hidden="true">DSGN</p>
        <p className={s.label}>{brand.about}</p>
        <div className={s.heroBottom}>
          <h1>Интерфейсы, которые <em>живут</em> после запуска</h1>
          <div>
            <p>{brand.lead}</p>
            <a className={s.btn} href={brand.contact} target="_blank" rel="noopener noreferrer">Обсудить проект <Arrow /></a>
          </div>
        </div>
      </section>

      <section className={s.manifest}>
        <p data-reveal>
          Мы — <em>продуктовая команда</em>. Разбираемся в бизнесе и людях, проектируем сложные интерфейсы, собираем <em>дизайн-системы</em> и не исчезаем после сдачи макетов.
        </p>
      </section>

      <section className={s.section} id="cases">
        <div className={s.head}><span>Кейсы</span><h2>Избранные работы</h2></div>
        <div className={s.stack}>
          {cases.map((c, i) => (
            <a key={c.id} className={s.card} href={c.url} target="_blank" rel="noopener noreferrer" style={{ ["--i" as string]: i }}>
              <div className={s.cardInfo}>
                <span className={s.idx}>0{i + 1}</span>
                <h3>{c.title}</h3>
                <p className={s.kind}>{c.kind}</p>
                <p>{c.text}</p>
                <ul>{c.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                <span className={s.open}>Смотреть кейс <Arrow /></span>
              </div>
              <div className={s.cardImg}><img src={`${BASE}/cases/${c.img}`} alt={`${c.title}: ${c.kind}`} loading="lazy" /></div>
            </a>
          ))}
        </div>
        <a className={s.ghost} href={brand.behance} target="_blank" rel="noopener noreferrer">Все работы на Behance <Arrow /></a>
      </section>

      <section className={s.section} id="services">
        <div className={s.head}><span>Услуги</span><h2>Полный цикл дизайна</h2></div>
        <ul className={s.services}>
          {services.map((v) => (
            <li key={v.n} data-reveal>
              <span className={s.num}>{v.n}</span>
              <div>
                <b>{v.t}</b>
                <p>{v.d}</p>
              </div>
              <span className={s.items}>{v.items.map((it) => <i key={it}>{it}</i>)}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={s.section}>
        <div className={s.head}><span>Процесс</span><h2>Пять этапов — и дальше вместе</h2></div>
        <ol className={s.steps}>
          {steps.map((st, i) => (
            <li key={st.t} data-reveal style={{ ["--d" as string]: i }}>
              <div className={s.stepTop}>
                <span className={s.stepIcon}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{stepIcons[i]}</svg></span>
                <span className={s.stepNum}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <b>{st.t}</b>
              <p>{st.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={s.section} id="formats">
        <div className={s.head}><span>Форматы</span><h2>Как будем работать</h2></div>
        <div className={s.formats}>
          {formats.map((f, i) => (
            <article key={f.t} data-reveal style={{ ["--d" as string]: i }}>
              <h3>{f.t}</h3>
              <p>{f.d}</p>
              <ul>{f.fit.map((x) => <li key={x}>{x}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className={s.contact}>
        <a className={s.contactBig} href={brand.contact} target="_blank" rel="noopener noreferrer">Давайте <em>поговорим</em></a>
        <div className={s.links}>
          <a href={brand.tg} target="_blank" rel="noopener noreferrer">Telegram {brand.tgName}</a>
          <a href={brand.behance} target="_blank" rel="noopener noreferrer">Behance</a>
          <a href={brand.dprofile} target="_blank" rel="noopener noreferrer">Dprofile</a>
        </div>
        <footer className={s.foot}><LogoChrome /><span>{brand.about} · 2026</span></footer>
      </section>
    </div>
  );
}
