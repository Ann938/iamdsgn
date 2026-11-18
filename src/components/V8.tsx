import { brand, cases, formats, services, steps } from "@/content";
import HScroll from "./HScroll";
import { LogoCobalt } from "./Logos";
import Parallax from "./Parallax";
import Roles from "./Roles";
import s from "./v8.module.scss";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const Arrow = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
// плитки мозаики: фрагменты экранов кейсов (разные кадрирования) и плитки-слова
type Tile = { img?: string; pos?: string; zoom?: number; word?: string; blue?: boolean; x: number; y: number; w: number; h: number; d: number };
const W = cases[0].img, G = cases[1].img;
const tiles: Tile[] = [
  { img: W, pos: "8% 10%", zoom: 2.2, x: 690, y: 0, w: 200, h: 150, d: 0.6 },
  { word: "UX", blue: true, x: 910, y: 40, w: 120, h: 120, d: 1.2 },
  { img: G, pos: "30% 40%", zoom: 1.8, x: 1050, y: 0, w: 260, h: 190, d: 0.4 },
  { img: W, pos: "70% 30%", zoom: 1.6, x: 760, y: 180, w: 300, h: 210, d: 0.9 },
  { word: "Дизайн-система", x: 1080, y: 220, w: 230, h: 90, d: 1.4 },
  { img: G, pos: "90% 60%", zoom: 2.4, x: 1080, y: 330, w: 230, h: 170, d: 0.7 },
  { word: "Research", blue: true, x: 690, y: 420, w: 180, h: 80, d: 1.1 },
  { img: W, pos: "95% 85%", zoom: 2, x: 890, y: 420, w: 170, h: 170, d: 0.5 },
];
const STEP_ICONS = [
  <path key="1" d="M10.5 18a7.5 7.5 0 1 1 5.3-2.2L21 21" />,
  <path key="2" d="M3 4h18v12H3zM3 9h18M8 20h8M12 16v4" />,
  <path key="3" d="M4 20l1-4L16 5l3 3L8 19l-4 1ZM14 7l3 3" />,
  <path key="4" d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />,
  <path key="5" d="M20 12a8 8 0 1 1-2.3-5.7M20 4v5h-5" />,
];

// Направление 7 «Кобальт · Мозаика» (маршрут /v7): мозаика из экранов кейсов вокруг заголовка, горизонтальная лента кейсов, липкие заголовки
export default function V8() {
  return (
    <div className={s.page}>
      <header className={s.header}>
        <a href="#top" className={s.logo}><LogoCobalt /></a>
        <nav className={s.nav}><a href="#cases">Кейсы</a><a href="#services">Услуги</a><a href="#process">Процесс</a><a href="#formats">Форматы</a></nav>
        <a className={s.cta} href={brand.contact} target="_blank" rel="noopener noreferrer">Связаться</a>
      </header>

      <Parallax className={s.hero}>
        <div className={s.heroText} id="top">
          <p className={s.badge}>iam<b>/</b><Roles mode="swap" className={s.role} /></p>
          <h1><span>Разрабатываем интерфейсы,</span><b>а&nbsp;после — сопровождаем их</b></h1>
          <p className={s.lead}>{brand.lead}</p>
          <div className={s.btns}>
            <a className={s.btn} href={brand.contact} target="_blank" rel="noopener noreferrer">Обсудить проект <Arrow /></a>
            <a className={s.ghost} href="#cases">Кейсы</a>
          </div>
        </div>
        <div className={s.mosaic} aria-hidden="true">
          {tiles.map((t, i) => (
            <span key={i} className={`${s.tile} ${t.word ? s.tileWord : ""} ${t.blue ? s.tileBlue : ""}`} style={{ ["--x" as string]: t.x, ["--y" as string]: t.y, ["--w" as string]: t.w, ["--h" as string]: t.h, ["--dep" as string]: t.d, ["--i" as string]: i }}>
              {t.img ? <img src={`${BASE}/cases/${t.img}`} alt="" style={{ objectPosition: t.pos, transform: `scale(${t.zoom})`, transformOrigin: t.pos }} /> : t.word}
            </span>
          ))}
        </div>
      </Parallax>

      <section id="cases">
        <HScroll className={s.hwrap} trackClass={s.track}>
          <div className={s.trackHead}>
            <span className={s.path}>iam<b>/</b>cases</span>
            <h2><span>Кейсы,</span><b>которыми гордимся</b></h2>
            <p>Листайте — лента движется вместе с прокруткой</p>
          </div>
          {cases.map((c, i) => (
            <a key={c.id} className={s.slide} href={c.url} target="_blank" rel="noopener noreferrer">
              <div className={s.slideImg}><img src={`${BASE}/cases/${c.img}`} alt={`${c.title}: ${c.kind}`} loading="lazy" /></div>
              <div className={s.slideInfo}>
                <span className={s.slideNum}>0{i + 1}</span>
                <div><h3>{c.title}</h3><p className={s.kind}>{c.kind}</p></div>
                <p>{c.text}</p>
                <span className={s.open}>Открыть кейс <Arrow /></span>
              </div>
            </a>
          ))}
          <a className={s.slideMore} href={brand.behance} target="_blank" rel="noopener noreferrer">
            <span>Все работы</span><b>на Behance</b><i><Arrow /></i>
          </a>
        </HScroll>
      </section>

      <section className={s.split} id="services">
        <div className={s.sticky}>
          <span className={s.path}>iam<b>/</b>services</span>
          <h2><span>Оказываем услуги</span><b>по созданию и поддержке</b></h2>
          <a className={s.btn} href={brand.contact} target="_blank" rel="noopener noreferrer">Обсудить задачу <Arrow /></a>
        </div>
        <ul className={s.services}>
          {services.map((v) => (
            <li key={v.n} data-reveal>
              <span className={s.sNum}>{v.n}</span>
              <div>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
                <ul>{v.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className={s.split} id="process">
        <div className={s.sticky}>
          <span className={s.path}>iam<b>/</b>process</span>
          <h2><span>Процесс,</span><b>в котором вы всё видите</b></h2>
        </div>
        <ol className={s.steps}>
          {steps.map((st, i) => (
            <li key={st.t} data-reveal>
              <span className={s.stepIcon}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{STEP_ICONS[i]}</svg></span>
              <div><b>{st.t}</b><p>{st.d}</p></div>
              <span className={s.stepNum}>0{i + 1}</span>
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
              <ul>{f.fit.map((x) => <li key={x}>{x}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className={s.contact}>
        <div className={s.contactIn}>
          <span className={s.path}>iam<b>/</b>contact</span>
          <h2><span>Свяжитесь с нами</span><b>удобным способом</b></h2>
          <div className={s.btns}>
            <a className={s.btnLight} href={brand.contact} target="_blank" rel="noopener noreferrer">Написать в Telegram <Arrow /></a>
            <a className={s.ghostLight} href={brand.tg} target="_blank" rel="noopener noreferrer">Канал {brand.tgName}</a>
          </div>
        </div>
        <div className={s.contactTiles} aria-hidden="true">
          {[W, G, W].map((img, i) => <span key={i}><img src={`${BASE}/cases/${img}`} alt="" /></span>)}
        </div>
        <footer className={s.foot}><LogoCobalt /><a href={brand.behance} target="_blank" rel="noopener noreferrer">Behance</a><a href={brand.dprofile} target="_blank" rel="noopener noreferrer">Dprofile</a><span>{brand.about} · 2026</span></footer>
      </section>
    </div>
  );
}
