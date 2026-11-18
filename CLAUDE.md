# I AM DSGN — ребрендинг (концепты)

Три направления нового бренда продуктовой команды I AM DSGN (iamdsgn.ru) + бренд-борд.
Next 16 App Router, SCSS-модули, масштаб u() (ДВ 1440 / МВ ≤1023, колонка 358). Порт 3900.

- `/` — бренд-борд: текущий логотип, 3 направления (логотип, знак, цвет, шрифты, носители) — `src/components/Brand.tsx`
- `/v1` «Сигнал» — светлый швейцарский, Inter Tight + JetBrains Mono, #FF4D00
- `/v2` «Кобальт» — тёмно-синий (эволюция текущего), Geologica + Golos Text, #3A5BFF
- `/v3` «Тумблер» — крем/уголь/лайм, Unbounded + Onest, тумблер в hero переключает тему
- Логотипы — `src/components/Logos.tsx` (всё в em), «I AM ___» — `Roles.tsx`
- Контент один на все — `src/content.ts` (с текущего сайта; кейсы WinClicks и GraviLink, картинки с их Tilda)
- Скриншоты: `node scripts/shot.mjs <path> <out> [w h]` при запущенном dev
- Публикация: `npm run deploy` (gh-pages, ann938.github.io/iamdsgn) — только с согласия
