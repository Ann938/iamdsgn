"use client";

import dynamic from "next/dynamic";

// Тяжёлая 3D-сцена грузится только в браузере и отдельным чанком
const ChromeScene = dynamic(() => import("./ChromeScene"), { ssr: false });

export default function Chrome3D() {
  return <ChromeScene />;
}
