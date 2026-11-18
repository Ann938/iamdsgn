import { brand, cases, formats, services, steps } from "@/content";
import { LogoSalon, MarkSalon } from "./Logos";
import s from "./v5.module.scss";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const ROMAN = ["I", "II", "III", "IV", "V"];

// Направление 5 «Салон»: тихая роскошь — антиква с курсивом, тонкие линии, много воздуха
export default function V5() {
  return (
    <div className={s.page}>
      <header className={s.header}>
        <nav className={s.navL}><a href="#cases">Кейсы</a><a href="#services">Услуги</a></nav>
        <a href="#top" className={s.logo}><LogoSalon /></a>
        <nav className={s.navR}><a href="#formats">Форматы</a><a href={brand.contact} target="_blank" rel="noopener noreferrer" className={s.write}>Написать</a></nav>
      </header>

      <section className={s.hero} id="top">
        <p className={s.over}>{brand.about}</p>
        <h1>
          Дизайн, который<br />
          <em>остаётся</em> с&nbsp;продуктом
        </h1>
        <div className={s.heroRow}>
          <MarkSalon className={s.mono} />
          <p>{brand.lead}</p>
          <a className={s.link} href={brand.contact} target="_blank" rel="noopener noreferrer">Обсудить проект →</a>
        </div>
      </section>

      <figure className={s.cover} data-reveal>
        <img src={`${BASE}/cases/${cases[1].img}`} alt={`${cases[1].title}: ${cases[1].kind}`} />
        <figcaption><span>Избранное</span><em>{cases[1].title}</em> — {cases[1].kind.toLowerCase()}</figcaption>
      </figure>

      <section className={s.intro}>
        <p className={s.drop} data-reveal>
          Мы — небольшая продуктовая команда. Берёмся за сложные интерфейсы: кабинеты с данными, карты, системы управления. Сначала разбираемся в бизнесе и людях, потом проектируем, собираем дизайн-систему — и остаёмся рядом, когда продукт уже работает.
        </p>
      </section>

      <section className={s.section} id="cases">
        <h2 className={s.h2}><em>Избранные</em> работы</h2>
        {cases.map((c, i) => (
          <article key={c.id} className={`${s.case} ${i % 2 ? s.flip : ""}`} data-reveal>
            <a className={s.caseImg} href={c.url} target="_blank" rel="noopener noreferrer"><img src={`${BASE}/cases/${c.img}`} alt={`${c.title}: ${c.kind}`} loading="lazy" /></a>
            <div className={s.caseText}>
              <span className={s.over}>№ {i + 1} · {c.tags.slice(0, 2).join(", ")}</span>
              <h3>{c.title}</h3>
              <p className={s.kindLine}><em>{c.kind}</em></p>
              <p>{c.text}</p>
              <a className={s.link} href={c.url} target="_blank" rel="noopener noreferrer">Читать кейс →</a>
            </div>
          </article>
        ))}
        <a className={s.link} href={brand.behance} target="_blank" rel="noopener noreferrer">Все работы на Behance →</a>
      </section>

      <section className={s.section} id="services">
        <h2 className={s.h2}>Чем <em>занимаемся</em></h2>
        <ol className={s.index}>
          {services.map((v, i) => (
            <li key={v.n} data-reveal>
              <span className={s.roman}>{ROMAN[i]}</span>
              <b>{v.t}</b>
              <i className={s.dots} aria-hidden="true" />
              <span className={s.items}>{v.items.join(", ")}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className={s.section}>
        <h2 className={s.h2}>Как мы <em>работаем</em></h2>
        <ol className={s.steps}>
          {steps.map((st, i) => (
            <li key={st.t} data-reveal style={{ ["--d" as string]: i }}>
              <span>{ROMAN[i]}</span>
              <b>{st.t}</b>
              <p>{st.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={s.section} id="formats">
        <h2 className={s.h2}><em>Форматы</em> сотрудничества</h2>
        <div className={s.formats}>
          {formats.map((f) => (
            <article key={f.t} data-reveal>
              <h3>{f.t}</h3>
              <p>{f.d}</p>
              <ul>{f.fit.map((x) => <li key={x}>{x}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className={s.contact}>
        <p className={s.over}>Связь</p>
        <a className={s.contactBig} href={brand.contact} target="_blank" rel="noopener noreferrer">Напишите <em>нам</em></a>
        <div className={s.contactRow}>
          <a href={brand.tg} target="_blank" rel="noopener noreferrer">Telegram {brand.tgName}</a>
          <a href={brand.behance} target="_blank" rel="noopener noreferrer">Behance</a>
          <a href={brand.dprofile} target="_blank" rel="noopener noreferrer">Dprofile</a>
        </div>
        <footer className={s.foot}><LogoSalon /><span>{brand.about}</span><span>MMXXVI</span></footer>
      </section>
    </div>
  );
}
