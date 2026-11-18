import { brand, cases, formats, services, steps, tags } from "@/content";
import { LogoSignal } from "./Logos";
import Roles from "./Roles";
import s from "./v1.module.scss";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const Arrow = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

// Направление 1 «Сигнал»: светлый швейцарский интерфейс, моно-подписи, сигнальный оранжевый
export default function V1() {
  return (
    <div className={s.page}>
      <header className={s.header}>
        <a href="#top" className={s.logo}><LogoSignal /></a>
        <nav className={s.nav}>
          <a href="#cases">Кейсы</a><a href="#services">Услуги</a><a href="#process">Процесс</a><a href="#formats">Форматы</a>
        </nav>
        <a className={s.cta} href={brand.contact} target="_blank" rel="noopener noreferrer">Обсудить задачу <Arrow /></a>
      </header>

      <section className={s.hero} id="top">
        <p className={s.label}>[ продуктовая команда дизайнеров ]</p>
        <p className={s.giant} aria-hidden="true">
          <span className={s.giantI}>I AM</span>
          <Roles mode="type" className={s.giantWord} />
        </p>
        <div className={s.heroRow}>
          <h1>Проектируем интерфейсы — и&nbsp;остаёмся рядом после запуска</h1>
          <div className={s.heroSide}>
            <p>{brand.lead}</p>
            <a className={s.btn} href={brand.contact} target="_blank" rel="noopener noreferrer">Обсудить задачу <Arrow /></a>
          </div>
        </div>
      </section>

      <div className={s.ticker} aria-hidden="true">
        <div className={s.tickerIn}>
          {[0, 1].map((k) => (
            <span key={k}>{tags.map((t) => <span key={t}>{t}<i>✦</i></span>)}</span>
          ))}
        </div>
      </div>

      <section className={s.section} id="cases">
        <div className={s.head}><span>01 / Кейсы</span><h2>Сложные продукты, понятные людям</h2></div>
        {cases.map((c, i) => (
          <article key={c.id} className={s.case} data-reveal>
            <div className={s.caseMeta}>
              <span className={s.label}>{String(i + 1).padStart(2, "0")} — {c.kind}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <dl>{c.facts.map((f) => <div key={f.t}><dt>{f.v}</dt><dd>{f.t}</dd></div>)}</dl>
              <a className={s.link} href={c.url} target="_blank" rel="noopener noreferrer">Кейс на Behance <Arrow /></a>
            </div>
            <a className={s.caseImg} href={c.url} target="_blank" rel="noopener noreferrer" aria-label={`${c.title} на Behance`}>
              <img src={`${BASE}/cases/${c.img}`} alt={`${c.title}: ${c.kind}`} loading="lazy" />
              <i /><i /><i /><i />
            </a>
          </article>
        ))}
        <a className={s.more} href={brand.behance} target="_blank" rel="noopener noreferrer">Все работы на Behance <Arrow /></a>
      </section>

      <section className={s.section} id="services">
        <div className={s.head}><span>02 / Услуги</span><h2>Полный цикл — от анализа до своей дизайн-команды</h2></div>
        <ul className={s.services}>
          {services.map((v) => (
            <li key={v.n} data-reveal>
              <span className={s.sn}>{v.n}</span>
              <b>{v.t}</b>
              <p>{v.d}</p>
              <span className={s.items}>{v.items.map((it) => <i key={it}>{it}</i>)}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={s.section} id="process">
        <div className={s.head}><span>03 / Процесс</span><h2>Не исчезаем после сдачи макетов</h2></div>
        <ol className={s.steps}>
          {steps.map((st, i) => (
            <li key={st.t} data-reveal style={{ ["--d" as string]: i }}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <b>{st.t}</b>
              <p>{st.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={s.section} id="formats">
        <div className={s.head}><span>04 / Форматы</span><h2>Выберите удобный формат работы</h2></div>
        <div className={s.formats}>
          {formats.map((f, i) => (
            <article key={f.t} className={i === 0 ? s.fmtOn : undefined} data-reveal style={{ ["--d" as string]: i }}>
              <b>{f.t}</b>
              <p>{f.d}</p>
              <span className={s.label}>Подходит для</span>
              <ul>{f.fit.map((x) => <li key={x}>{x}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className={s.contact} id="contact">
        <p className={s.label}>[ 05 / Контакты ]</p>
        <a className={s.big} href={brand.contact} target="_blank" rel="noopener noreferrer">Обсудим задачу<Arrow /></a>
        <div className={s.contactRow}>
          <a href={brand.tg} target="_blank" rel="noopener noreferrer">Telegram {brand.tgName}</a>
          <a href={brand.behance} target="_blank" rel="noopener noreferrer">Behance</a>
          <a href={brand.dprofile} target="_blank" rel="noopener noreferrer">Dprofile</a>
        </div>
        <div className={s.foot}><LogoSignal /><span>{brand.about}</span><span>© 2026</span></div>
      </section>
    </div>
  );
}
