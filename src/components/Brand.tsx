import { brand } from "@/content";
import { LogoChrome, LogoCobalt, LogoShapes, LogoSignal, LogoToggle, MarkChrome, MarkCobalt, MarkShapes, MarkSignal, MarkToggle } from "./Logos";
import s from "./brand.module.scss";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

type Dir = {
  n: string; id: string; theme?: string; name: string; idea: string; why: string;
  Logo: (p: { className?: string }) => React.ReactElement; Mark: (p: { className?: string }) => React.ReactElement;
  colors: { hex: string; name: string; dark?: boolean }[];
  fonts: { role: string; name: string; varName: string; weight: number; sample: string }[];
  href: string;
};

const dirs: Dir[] = [
  {
    n: "01", id: "signal", name: "Сигнал", href: "/v1/",
    idea: "Бренд как живой интерфейс: «I AM» в рамке-чипе, DSGN и мигающий курсор — команда, которая прямо сейчас что-то проектирует.",
    why: "Светлый швейцарский стиль, модульная сетка и моно-подписи. Один сигнальный оранжевый вместо набора цветов: строго, по-продуктовому и сразу узнаётся.",
    Logo: LogoSignal, Mark: MarkSignal,
    colors: [{ hex: "#F4F3EF", name: "Бумага" }, { hex: "#0E0F12", name: "Графит", dark: true }, { hex: "#FF4D00", name: "Сигнал", dark: true }, { hex: "#6B6C70", name: "Тень", dark: true }],
    fonts: [{ role: "Заголовки", name: "Inter Tight", varName: "--f-tight", weight: 800, sample: "Аа" }, { role: "Подписи и метки", name: "JetBrains Mono", varName: "--f-mono", weight: 400, sample: "[01]" }],
  },
  {
    n: "02", id: "cobalt", name: "Кобальт", href: "/v2/",
    idea: "iam/dsgn — путь, как в адресной строке. Слэш становится фирменным знаком: iam/ux, iam/research, iam/team — так называются разделы, посты и мерч.",
    why: "Светлое и воздушное: тёмно-синий из текущего бренда стал цветом текста, кобальт — акцентом. Мягкое сияние, белые карточки и 3D-витрина продукта, которая выпрямляется при прокрутке. Сохранили приём «светлая строка + жирная строка».",
    Logo: LogoCobalt, Mark: MarkCobalt,
    colors: [{ hex: "#F4F6FF", name: "Лёд" }, { hex: "#0B1033", name: "Ночь", dark: true }, { hex: "#3A5BFF", name: "Кобальт", dark: true }, { hex: "#E3E9FF", name: "Дымка" }],
    fonts: [{ role: "Заголовки", name: "Geologica", varName: "--f-geo", weight: 600, sample: "Аа" }, { role: "Текст", name: "Golos Text", varName: "--f-golos", weight: 400, sample: "Аа" }],
  },
  {
    n: "03", id: "toggle", name: "Тумблер", href: "/v3/",
    idea: "Переключатель во включённом положении: «дизайн включён». Самый понятный образ для продуктовой команды — знак сразу работает и как иконка, и как интерактив на сайте.",
    why: "Смелая редакционная типографика капсом, крем и почти чёрный, лаймовый акцент. На первом экране тумблер настоящий: переключает тему всей страницы.",
    Logo: LogoToggle, Mark: MarkToggle,
    colors: [{ hex: "#EFEBE3", name: "Крем" }, { hex: "#121212", name: "Уголь", dark: true }, { hex: "#D7FF3A", name: "Лайм" }, { hex: "#E4DFD4", name: "Карта" }],
    fonts: [{ role: "Заголовки", name: "Unbounded", varName: "--f-unb", weight: 800, sample: "Аа" }, { role: "Текст", name: "Onest", varName: "--f-onest", weight: 400, sample: "Аа" }],
  },
  {
    n: "04", id: "chrome", name: "Хром", href: "/v4/",
    idea: "Металл — прочность и точность. Строчное i am dsgn с металлическим переливом и знак «d» в стальной рамке. На сайте главный герой — огромное «DSGN», по которому медленно бежит блик.",
    why: "Чёрный фон, тонкая типографика и металлический перелив на ключевых словах. Премиально и технологично; этапы работы — карточки с иконками.",
    Logo: LogoChrome, Mark: MarkChrome,
    colors: [{ hex: "#050506", name: "Космос", dark: true }, { hex: "#E9ECF3", name: "Платина" }, { hex: "#868B98", name: "Сталь", dark: true }, { hex: "#0D0E12", name: "Графит", dark: true }],
    fonts: [{ role: "Заголовки", name: "Commissioner Light / SemiBold", varName: "--f-comm", weight: 300, sample: "Аа" }, { role: "Текст", name: "Commissioner", varName: "--f-comm", weight: 400, sample: "Аа" }],
  },
  {
    n: "05", id: "shapes", name: "Конструктор", href: "/v5/",
    idea: "Дизайн собирается из простых фигур: столбик, треугольник, круг. Метафора работы команды — сложный продукт из понятных элементов.",
    why: "Баухаус: чистые красный, синий и жёлтый, толстые чёрные линии, жёсткие тени. Фигуры на первом экране двигаются за курсором. Самый смелый и игривый.",
    Logo: LogoShapes, Mark: MarkShapes,
    colors: [{ hex: "#F2EFE8", name: "Бумага" }, { hex: "#FF3B2F", name: "Красный", dark: true }, { hex: "#2C4BFF", name: "Синий", dark: true }, { hex: "#FFC700", name: "Жёлтый" }],
    fonts: [{ role: "Заголовки", name: "Dela Gothic One", varName: "--f-dela", weight: 400, sample: "Аа" }, { role: "Текст", name: "Manrope", varName: "--f-man", weight: 500, sample: "Аа" }],
  },
  {
    n: "06", id: "cobalt-word", theme: "cobalt", name: "Кобальт · Вордмарк", href: "/v6/",
    idea: "Развитие «Кобальта» по мотивам Rejouice и Metalab: огромный iam/dsgn на всю ширину первого экрана — буквы выезжают по очереди. В тексте маленькие картинки-вставки, кейсы списком с превью за курсором.",
    why: "Тот же светлый кобальт, но подача как у топовых агентств: смелый вордмарк, раскрывающиеся карточки услуг, большая круглая кнопка «Написать» и вордмарк в подвале.",
    Logo: LogoCobalt, Mark: MarkCobalt,
    colors: [{ hex: "#F2F4FB", name: "Лёд" }, { hex: "#0B1033", name: "Ночь", dark: true }, { hex: "#3A5BFF", name: "Кобальт", dark: true }, { hex: "#E1E7FF", name: "Дымка" }],
    fonts: [{ role: "Заголовки", name: "Geologica", varName: "--f-geo", weight: 600, sample: "Аа" }, { role: "Текст", name: "Golos Text", varName: "--f-golos", weight: 400, sample: "Аа" }],
  },
  {
    n: "07", id: "cobalt-mosaic", theme: "cobalt", name: "Кобальт · Мозаика", href: "/v7/",
    idea: "Развитие «Кобальта» по мотивам Studio Freight и Cuberto: вокруг заголовка мозаика из фрагментов экранов кейсов и плиток-слов, плитки плывут за курсором. Кейсы — горизонтальная лента, которая едет при прокрутке.",
    why: "Сразу видно, что команда делает сложные интерфейсы: работы на первом экране. Разделы с липким заголовком слева, этапы с иконками.",
    Logo: LogoCobalt, Mark: MarkCobalt,
    colors: [{ hex: "#F4F6FF", name: "Лёд" }, { hex: "#0B1033", name: "Ночь", dark: true }, { hex: "#3A5BFF", name: "Кобальт", dark: true }, { hex: "#E1E7FF", name: "Дымка" }],
    fonts: [{ role: "Заголовки", name: "Geologica", varName: "--f-geo", weight: 600, sample: "Аа" }, { role: "Текст", name: "Golos Text", varName: "--f-golos", weight: 400, sample: "Аа" }],
  },
];

// рефы — первые экраны сайтов агентств, сняты 18.11.2026
const refs = [
  { id: "rejouice", name: "Rejouice", url: "https://www.rejouice.com/", took: "Вордмарк на всю ширину → направление 6" },
  { id: "metalab", name: "Metalab", url: "https://www.metalab.com/", took: "Крупное утверждение, тёмная подача → 4" },
  { id: "studiofreight", name: "Studio Freight", url: "https://studiofreight.com/", took: "Мозаика работ вокруг заголовка → 7" },
  { id: "cuberto", name: "Cuberto", url: "https://cuberto.com/", took: "Чистый крупный заголовок + работы → 2, 7" },
  { id: "halolab", name: "Halo Lab", url: "https://www.halo-lab.com/", took: "Услуги карточками с иконками → 2, 7" },
  { id: "ramotion", name: "Ramotion", url: "https://www.ramotion.com/", took: "Много воздуха, спокойная типографика → 1, 2" },
];

export default function Brand() {
  return (
    <div className={s.page}>
      <header className={s.top}>
        <p className={s.kicker}>Ребрендинг · {brand.about}</p>
        <h1>I AM DSGN<br /><span>семь направлений нового бренда</span></h1>
        <div className={s.was}>
          <span>Сейчас</span>
          <img src={`${BASE}/old-logo.svg`} alt="Текущий логотип I AM DSGN" />
          <p>Тонкий шрифт без характера на тёмно-синем — бренд не запоминается и выглядит как шаблон Tilda. Ниже семь способов сделать его современным и узнаваемым. У каждого есть логотип, знак, цвета, шрифты, носители и готовая главная страница.</p>
        </div>
      </header>

      {dirs.map((d) => (
        <section key={d.id} className={`${s.dir} ${s[d.theme ?? d.id]}`} id={d.id}>
          <div className={s.dirHead}>
            <span className={s.num}>{d.n}</span>
            <h2>{d.name}</h2>
            <a className={s.open} href={`${BASE}${d.href}`}>Открыть сайт →</a>
          </div>

          <div className={s.hero}>
            <div className={s.logoBig}><d.Logo /></div>
            <p className={s.idea}>{d.idea}</p>
          </div>

          <div className={s.grid}>
            <div className={s.cell}>
              <span className={s.cap}>Знак</span>
              <div className={s.marks}><d.Mark className={s.m96} /><d.Mark className={s.m56} /><d.Mark className={s.m32} /></div>
            </div>
            <div className={`${s.cell} ${s.inv}`}>
              <span className={s.cap}>Инверсия</span>
              <div className={s.logoMid}><d.Logo /></div>
            </div>
            <div className={`${s.cell} ${s.wide}`}>
              <span className={s.cap}>Цвет</span>
              <div className={s.colors}>
                {d.colors.map((c) => (
                  <div key={c.hex} style={{ background: c.hex, color: c.dark ? "#fff" : "#111" }}>
                    <b>{c.name}</b>
                    <span>{c.hex}</span>
                  </div>
                ))}
              </div>
            </div>
            {d.fonts.map((f) => (
              <div key={f.name} className={s.cell}>
                <span className={s.cap}>{f.role}</span>
                <p className={s.specimen} style={{ fontFamily: `var(${f.varName})`, fontWeight: f.weight }}>{f.sample}</p>
                <p className={s.fontName} style={{ fontFamily: `var(${f.varName})` }}>{f.name}</p>
                <p className={s.alphabet} style={{ fontFamily: `var(${f.varName})` }}>АБВГДЕЖЗИК абвгдежзик 0123456789</p>
              </div>
            ))}
            <div className={`${s.cell} ${s.apps}`}>
              <span className={s.cap}>Носители</span>
              <div className={s.appsRow}>
                <div className={s.bc}><d.Logo /><small>Продуктовая команда дизайнеров</small><small>t.me/iam_dsgn</small></div>
                <div className={s.bcBack}><d.Mark className={s.m56} /></div>
                <div className={s.avatar}><d.Mark className={s.m56} /></div>
              </div>
            </div>
          </div>

          <p className={s.why}>{d.why}</p>
        </section>
      ))}

      <section className={s.refs} id="refs">
        <h2>Рефы <span>— на что смотрели</span></h2>
        <div className={s.refsGrid}>
          {refs.map((r) => (
            <a key={r.id} href={r.url} target="_blank" rel="noopener noreferrer" className={s.ref}>
              <img src={`${BASE}/refs/${r.id}.webp`} alt={`Первый экран сайта ${r.name}`} loading="lazy" />
              <b>{r.name} ↗</b>
              <span>{r.took}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
