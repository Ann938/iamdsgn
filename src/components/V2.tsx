import { brand, cases, formats, services, steps, tags } from "@/content";
import { LogoCobalt } from "./Logos";
import Parallax from "./Parallax";
import Roles from "./Roles";
import s from "./v2.module.scss";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const Arrow = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const Path = ({ p }: { p: string }) => (
  <span className={s.path}>iam<i>/</i>{p}</span>
);

// Направление 2 «Кобальт»: эволюция текущего тёмно-синего. Фирменный слэш, светлая + жирная строка, стекло и свечение.
export default function V2() {
  return (
    <div className={s.page}>
      <header className={s.header}>
        <a href="#top" className={s.logo}><LogoCobalt /></a>
        <nav className={s.nav}>
          <a href="#cases">Кейсы</a><a href="#services">Услуги</a><a href="#process">Процесс</a><a href="#formats">Форматы</a>
        </nav>
        <a className={s.cta} href={brand.contact} target="_blank" rel="noopener noreferrer">Связаться</a>
      </header>

      <Parallax className={s.hero}>
        <div className={s.glow} aria-hidden="true" />
        <div className={s.heroText} id="top">
          <p className={s.cmd}>
            <span>iam<i>/</i></span>
            <Roles mode="swap" className={s.cmdRole} />
          </p>
          <h1>
            <span>Разрабатываем интерфейсы,</span>
            <b>а&nbsp;после — сопровождаем их</b>
          </h1>
          <p className={s.lead}>{brand.lead}</p>
          <div className={s.heroBtns}>
            <a className={s.btn} href={brand.contact} target="_blank" rel="noopener noreferrer">Обсудить проект <Arrow /></a>
            <a className={s.ghost} href="#cases">Смотреть кейсы</a>
          </div>
        </div>
        <div className={s.stack} aria-hidden="true">
          <img className={s.s1} src={`${BASE}/cases/${cases[1].img}`} alt="" />
          <img className={s.s2} src={`${BASE}/cases/${cases[0].img}`} alt="" />
        </div>
        <ul className={s.chips}>{tags.map((t) => <li key={t}>{t}</li>)}</ul>
      </Parallax>

      <section className={s.section} id="cases">
        <div className={s.head}><Path p="cases" /><h2><span>Кейсы,</span> <b>которыми гордимся</b></h2></div>
        <div className={s.cases}>
          {cases.map((c) => (
            <a key={c.id} className={s.case} href={c.url} target="_blank" rel="noopener noreferrer" data-reveal>
              <div className={s.caseImg}><img src={`${BASE}/cases/${c.img}`} alt={`${c.title}: ${c.kind}`} loading="lazy" /></div>
              <div className={s.caseInfo}>
                <div>
                  <h3>{c.title}</h3>
                  <p className={s.kind}>{c.kind}</p>
                </div>
                <p>{c.text}</p>
                <ul>{c.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                <span className={s.open}>Открыть кейс <Arrow /></span>
              </div>
            </a>
          ))}
        </div>
        <a className={s.ghost} href={brand.behance} target="_blank" rel="noopener noreferrer">Все работы на Behance <Arrow /></a>
      </section>

      <section className={s.section} id="services">
        <div className={s.head}><Path p="services" /><h2><span>Оказываем услуги</span> <b>по созданию и поддержке</b></h2></div>
        <div className={s.bento}>
          {services.map((v, i) => (
            <article key={v.n} className={i === 0 ? s.bentoMain : undefined} data-reveal style={{ ["--d" as string]: i }}>
              <span className={s.num}>{v.n}</span>
              <h3>{v.t}</h3>
              <p>{v.d}</p>
              <ul>{v.items.map((it) => <li key={it}>{it}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className={s.section} id="process">
        <div className={s.head}><Path p="process" /><h2><span>Процесс,</span> <b>в котором вы всё видите</b></h2></div>
        <ol className={s.steps}>
          {steps.map((st, i) => (
            <li key={st.t} data-reveal style={{ ["--d" as string]: i }}>
              <span>{i + 1}</span>
              <b>{st.t}</b>
              <p>{st.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={s.section} id="formats">
        <div className={s.head}><Path p="formats" /><h2><span>Выберите удобный</span> <b>формат работы</b></h2></div>
        <div className={s.formats}>
          {formats.map((f, i) => (
            <article key={f.t} className={i === 0 ? s.fmtOn : undefined} data-reveal style={{ ["--d" as string]: i }}>
              <h3>{f.t}</h3>
              <p>{f.d}</p>
              <span>Подходит для</span>
              <ul>{f.fit.map((x) => <li key={x}>{x}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className={s.contact}>
        <div className={s.contactCard} data-reveal>
          <Path p="contact" />
          <h2><span>Свяжитесь с нами</span> <b>удобным способом</b></h2>
          <div className={s.heroBtns}>
            <a className={s.btnLight} href={brand.contact} target="_blank" rel="noopener noreferrer">Написать в Telegram <Arrow /></a>
            <a className={s.ghost} href={brand.tg} target="_blank" rel="noopener noreferrer">Канал {brand.tgName}</a>
          </div>
        </div>
        <footer className={s.foot}>
          <LogoCobalt />
          <a href={brand.behance} target="_blank" rel="noopener noreferrer">Behance</a>
          <a href={brand.dprofile} target="_blank" rel="noopener noreferrer">Dprofile</a>
          <span>{brand.about} · 2026</span>
        </footer>
      </section>
    </div>
  );
}
