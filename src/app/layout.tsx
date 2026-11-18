import type { Metadata } from "next";
import { Geologica, Golos_Text, Inter_Tight, JetBrains_Mono, Onest, Unbounded } from "next/font/google";
import "@/styles/globals.scss";

// Шрифты трёх направлений: 1 «Сигнал» — Inter Tight + JetBrains Mono, 2 «Кобальт» — Geologica + Golos Text, 3 «Тумблер» — Unbounded + Onest
const tight = Inter_Tight({ variable: "--f-tight", subsets: ["latin", "cyrillic"], weight: ["400", "500", "600", "700", "800"] });
const mono = JetBrains_Mono({ variable: "--f-mono", subsets: ["latin", "cyrillic"], weight: ["400", "500"] });
const geo = Geologica({ variable: "--f-geo", subsets: ["latin", "cyrillic"], weight: ["300", "400", "500", "600", "700"] });
const golos = Golos_Text({ variable: "--f-golos", subsets: ["latin", "cyrillic"], weight: ["400", "500", "600"] });
const unb = Unbounded({ variable: "--f-unb", subsets: ["latin", "cyrillic"], weight: ["400", "500", "600", "700", "800"] });
const onest = Onest({ variable: "--f-onest", subsets: ["latin", "cyrillic"], weight: ["400", "500", "600"] });

const title = "I AM DSGN — ребрендинг, три направления";
const description = "Концепты нового бренда продуктовой команды дизайнеров I AM DSGN: логотип, цвет, шрифты и главная страница.";

export const metadata: Metadata = {
  robots: process.env.PAGES_EXPORT === "1" ? { index: false, follow: false } : undefined,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_ORIGIN || "http://localhost:3900"),
  title,
  description,
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.svg` },
  openGraph: { title, description, type: "website", locale: "ru_RU" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={[tight, mono, geo, golos, unb, onest].map((f) => f.variable).join(" ")}>
      <body>{children}</body>
    </html>
  );
}
