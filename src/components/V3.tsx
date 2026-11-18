import { brand, cases, formats, services, steps } from "@/content";
import { LogoToggle, MarkToggle } from "./Logos";
import Toggle from "./Toggle";
import s from "./v3.module.scss";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const Arrow = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);
const words = ["Анализ", "Концепт", "Дизайн", "Система", "Поддержка", "Команда"];

// Направление 3 «Тумблер»: смелая редакционная типографика, лаймовый акцент, тумблер = «дизайн включён»
export default function V3() {
  return (
    <div className={s.page} data-v3 data-dark="false">
      <header className={s.header}>
        <a href="#top" className={s.logo}><LogoToggle /></a>
        <nav className={s.nav}>
          <a href="#cases">Кейсы</a><a href="#services">Услуги</a><a href="#formats">Форматы</a>
        </nav>
        <a className={s.cta} href={brand.contact} target="_blank" rel="noopener noreferrer">Связаться <Arrow /></a>
      </header>

      <section className={s.hero} id="top">
        <h1 className={s.title} aria-label="I AM DSGN">
          <span>I AM</span>
          <span className={s.titleRow}>
            <Toggle className={s.bigToggle} knobClass={s.knob} />
            DSGN
          </span>
        </h1>
        <div className={s.heroBottom}>
          <p className={s.claim}>Включаем дизайн в&nbsp;ваш продукт — и&nbsp;не&nbsp;выключаем после запуска</p>
          <p className={s.lead}>{brand.lead}</p>
          <p className={s.hint}>← нажмите на тумблер</p>
        </div>
      </section>

      <div className={s.marquee} aria-hidden="true">
        <div>{[0, 1].map((k) => <span key={k}>{words.map((w) => <span key={w}>{w}<MarkToggle className={s.mq} /></span>)}</span>)}</div>
      </div>

      <section className={s.section} id="cases">
        <h2 className={s.h2}>Кейсы</h2>
        <div className={s.cases}>
          {cases.map((c, i) => (
            <a key={c.id} href={c.url} target="_blank" rel="noopener noreferrer" className={s.case} data-reveal style={{ ["--d" as string]: i }}>
              <div className={s.caseTop}>
                <span className={s.sticker}>{c.kind}</span>
                <span className={s.go}><Arrow /></span>
              </div>
              <div className={s.caseImg}><img src={`${BASE}/cases/${c.img}`} alt={`${c.title}: ${c.kind}`} loading="lazy" /></div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <ul>{c.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            </a>
          ))}
        </div>
        <a className={s.pill} href={brand.behance} target="_blank" rel="noopener noreferrer">Все работы на Behance <Arrow /></a>
      </section>

      <section className={s.section} id="services">
        <h2 className={s.h2}>Что включаем</h2>
        <ul className={s.services}>
          {services.map((v) => (
            <li key={v.n} data-reveal>
              <span className={s.sw}><i /></span>
              <b>{v.t}</b>
              <p>{v.d}</p>
              <span className={s.items}>{v.items.join(" · ")}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={s.section}>
        <h2 className={s.h2}>Как работаем</h2>
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
        <h2 className={s.h2}>Форматы</h2>
        <div className={s.formats}>
          {formats.map((f, i) => (
            <article key={f.t} data-reveal style={{ ["--d" as string]: i }}>
              <MarkToggle className={s.fmtMark} />
              <h3>{f.t}</h3>
              <p>{f.d}</p>
              <ul>{f.fit.map((x) => <li key={x}>{x}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className={s.contact}>
        <a className={s.contactBig} href={brand.contact} target="_blank" rel="noopener noreferrer">
          <span>Включим</span>
          <span>дизайн? <MarkToggle className={s.contactMark} /></span>
        </a>
        <div className={s.contactRow}>
          <a href={brand.tg} target="_blank" rel="noopener noreferrer">Telegram {brand.tgName}</a>
          <a href={brand.behance} target="_blank" rel="noopener noreferrer">Behance</a>
          <a href={brand.dprofile} target="_blank" rel="noopener noreferrer">Dprofile</a>
          <span>{brand.about} · 2026</span>
        </div>
      </section>
    </div>
  );
}
