import { brand, cases, formats, services, steps } from "@/content";
import CaseRows from "./CaseRows";
import { LogoCobalt } from "./Logos";
import s from "./v7.module.scss";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const Arrow = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);
const WORD = ["i", "a", "m", "/", "d", "s", "g", "n"];

// Направление 6 «Кобальт · Вордмарк» (маршрут /v6): по мотивам агентств — огромный вордмарк на всю ширину,
// текст со вставками-картинками, список кейсов с превью за курсором, раскрывающиеся услуги.
export default function V7() {
  return (
    <div className={s.page}>
      <header className={s.header}>
        <a href="#top" className={s.logo}><LogoCobalt /></a>
        <nav className={s.nav}><a href="#work">Работы</a><a href="#services">Услуги</a><a href="#process">Процесс</a><a href="#formats">Форматы</a></nav>
        <a className={s.talk} href={brand.contact} target="_blank" rel="noopener noreferrer">Обсудить проект <Arrow /></a>
      </header>

      <section className={s.hero} id="top">
        <div className={s.heroTop}>
          <p className={s.kicker}>{brand.about}<br />Анализ, UX/UI, дизайн-системы</p>
          <p className={s.heroLead}>{brand.lead}</p>
        </div>
        <h1 className={s.word} aria-label="I AM DSGN">
          {WORD.map((l, i) => (
            <span key={i} className={l === "/" ? s.slash : undefined} style={{ ["--i" as string]: i }} aria-hidden="true">{l}</span>
          ))}
        </h1>
        <div className={s.heroMedia}>
          <img src={`${BASE}/cases/${cases[0].img}`} alt="WinClicks — кабинет продавца Amazon" />
          <span className={s.mediaTag}>WinClicks · кабинет продавца Amazon</span>
        </div>
      </section>

      <section className={s.statement}>
        <p data-reveal>
          <span>Мы проектируем</span>
          <i className={s.token}><img src={`${BASE}/cases/${cases[1].img}`} alt="" /></i>
          <b>сложные интерфейсы,</b> <span>собираем</span>
          <i className={`${s.token} ${s.tokenBlue}`}>iam/</i>
          <b>дизайн-системы</b> <span>и остаёмся рядом</span>
          <i className={s.token}><img src={`${BASE}/cases/${cases[0].img}`} alt="" /></i>
          <b>после запуска.</b>
        </p>
      </section>

      <section className={s.section} id="work">
        <div className={s.head}>
          <span className={s.path}>iam<b>/</b>work</span>
          <h2><span>Избранные</span> <b>работы</b></h2>
        </div>
        <CaseRows cases={cases} s={s} />
        <a className={s.more} href={brand.behance} target="_blank" rel="noopener noreferrer">Все работы на Behance <Arrow /></a>
      </section>

      <section className={s.section} id="services">
        <div className={s.head}>
          <span className={s.path}>iam<b>/</b>services</span>
          <h2><span>Полный цикл —</span> <b>от анализа до своей команды</b></h2>
        </div>
        <ul className={s.acc}>
          {services.map((v) => (
            <li key={v.n} tabIndex={0}>
              <span className={s.accNum}>{v.n}</span>
              <b>{v.t}</b>
              <div className={s.accBody}>
                <p>{v.d}</p>
                <ul>{v.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className={s.section} id="process">
        <div className={s.head}>
          <span className={s.path}>iam<b>/</b>process</span>
          <h2><span>Процесс,</span> <b>в котором вы всё видите</b></h2>
        </div>
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
        <div className={s.head}>
          <span className={s.path}>iam<b>/</b>formats</span>
          <h2><span>Выберите удобный</span> <b>формат работы</b></h2>
        </div>
        <div className={s.formats}>
          {formats.map((f, i) => (
            <article key={f.t} className={i === 0 ? s.fmtOn : undefined} data-reveal style={{ ["--d" as string]: i }}>
              <span className={s.fmtNum}>0{i + 1}</span>
              <h3>{f.t}</h3>
              <p>{f.d}</p>
              <ul>{f.fit.map((x) => <li key={x}>{x}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className={s.contact}>
        <div className={s.contactRow}>
          <h2><span>Есть задача?</span><b>Давайте обсудим</b></h2>
          <a className={s.circle} href={brand.contact} target="_blank" rel="noopener noreferrer">Написать<br />в Telegram <Arrow /></a>
        </div>
        <div className={s.links}>
          <a href={brand.tg} target="_blank" rel="noopener noreferrer">Канал {brand.tgName}</a>
          <a href={brand.behance} target="_blank" rel="noopener noreferrer">Behance</a>
          <a href={brand.dprofile} target="_blank" rel="noopener noreferrer">Dprofile</a>
          <span>{brand.about} · 2026</span>
        </div>
        <p className={s.footWord} aria-hidden="true">iam<i>/</i>dsgn</p>
      </section>
    </div>
  );
}
