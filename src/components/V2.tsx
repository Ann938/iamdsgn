import { brand, cases, formats, services, steps } from "@/content";
import { LogoCobalt } from "./Logos";
import Roles from "./Roles";
import s from "./v2.module.scss";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const Arrow = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
// иконки услуг — простые линейные, в цвет кобальта
const icons = [
  <path key="a" d="M10.5 18a7.5 7.5 0 1 1 5.3-2.2L21 21" />,
  <path key="b" d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  <path key="c" d="M12 3a9 9 0 1 0 0 18c1 0 1.5-.8 1.5-1.6 0-1.4-1.3-1.7-1.3-3 0-1 .8-1.4 1.8-1.4H17a4 4 0 0 0 4-4C21 6.5 17 3 12 3ZM7.5 11h.01M10 7.5h.01M15 7.5h.01" />,
  <path key="d" d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />,
  <path key="e" d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM2 21a7 7 0 0 1 14 0M17 11a3 3 0 1 0 0-6M22 21a5 5 0 0 0-4-5" />,
];

// Направление 2 «Кобальт» (v2): светлое, воздушное. Фирменный слэш iam/, кобальт, мягкое сияние, 3D-витрина продукта.
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

      <section className={s.hero} id="top">
        <div className={s.aurora} aria-hidden="true"><i /><i /><i /></div>
        <p className={s.badge}><span>iam<b>/</b></span><Roles mode="swap" className={s.badgeRole} /></p>
        <h1>
          <span>Разрабатываем интерфейсы,</span>
          <b>а&nbsp;после — сопровождаем их</b>
        </h1>
        <p className={s.lead}>{brand.lead}</p>
        <div className={s.btns}>
          <a className={s.btn} href={brand.contact} target="_blank" rel="noopener noreferrer">Обсудить проект <Arrow /></a>
          <a className={s.ghost} href="#cases">Смотреть кейсы</a>
        </div>
        <div className={s.showcase}>
          <div className={s.browser}>
            <div className={s.bar}><i /><i /><i /><span>iamdsgn.ru/cases/winclicks</span></div>
            <img src={`${BASE}/cases/${cases[0].img}`} alt="WinClicks — кабинет продавца Amazon" />
          </div>
          <div className={s.floatCard}>
            <img src={`${BASE}/cases/${cases[1].img}`} alt="" />
          </div>
        </div>
      </section>

      <section className={s.section} id="cases">
        <div className={s.head}>
          <span className={s.path}>iam<b>/</b>cases</span>
          <h2><span>Кейсы,</span> <b>которыми гордимся</b></h2>
        </div>
        <div className={s.cases}>
          {cases.map((c) => (
            <a key={c.id} className={s.case} href={c.url} target="_blank" rel="noopener noreferrer" data-reveal>
              <div className={s.caseImg}><img src={`${BASE}/cases/${c.img}`} alt={`${c.title}: ${c.kind}`} loading="lazy" /></div>
              <div className={s.caseBody}>
                <div className={s.caseTitle}>
                  <h3>{c.title}</h3>
                  <span className={s.round}><Arrow /></span>
                </div>
                <p className={s.kind}>{c.kind}</p>
                <p>{c.text}</p>
                <ul>{c.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            </a>
          ))}
        </div>
        <div className={s.center}><a className={s.ghost} href={brand.behance} target="_blank" rel="noopener noreferrer">Все работы на Behance <Arrow /></a></div>
      </section>

      <section className={s.section} id="services">
        <div className={s.head}>
          <span className={s.path}>iam<b>/</b>services</span>
          <h2><span>Оказываем услуги</span> <b>по созданию и поддержке</b></h2>
        </div>
        <div className={s.services}>
          {services.map((v, i) => (
            <article key={v.n} data-reveal style={{ ["--d" as string]: i }}>
              <span className={s.icon}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[i]}</svg></span>
              <h3>{v.t}</h3>
              <p>{v.d}</p>
              <ul>{v.items.map((it) => <li key={it}>{it}</li>)}</ul>
            </article>
          ))}
          <a className={s.serviceCta} href={brand.contact} target="_blank" rel="noopener noreferrer" data-reveal>
            <b>Не нашли нужное?</b>
            <span>Расскажите о задаче — подберём состав команды <Arrow /></span>
          </a>
        </div>
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
              <h3>{f.t}</h3>
              <p>{f.d}</p>
              <span className={s.fitLabel}>Подходит для</span>
              <ul>{f.fit.map((x) => <li key={x}>{x}</li>)}</ul>
              <a className={i === 0 ? s.btnLight : s.btnSoft} href={brand.contact} target="_blank" rel="noopener noreferrer">Обсудить <Arrow /></a>
            </article>
          ))}
        </div>
      </section>

      <section className={s.contactWrap}>
        <div className={s.contact} data-reveal>
          <div className={s.aurora} aria-hidden="true"><i /><i /><i /></div>
          <span className={s.path}>iam<b>/</b>contact</span>
          <h2><span>Свяжитесь с нами</span> <b>удобным способом</b></h2>
          <div className={s.btns}>
            <a className={s.btnLight} href={brand.contact} target="_blank" rel="noopener noreferrer">Написать в Telegram <Arrow /></a>
            <a className={s.ghostLight} href={brand.tg} target="_blank" rel="noopener noreferrer">Канал {brand.tgName}</a>
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
