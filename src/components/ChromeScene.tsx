"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import type { Group, Mesh } from "three";

// Хромовая скульптура: торический узел, зеркальный металл; медленно вращается и наклоняется за курсором.
// Окружение собрано из Lightformer — без загрузки HDR-файлов по сети.
function Blob({ calm }: { calm: boolean }) {
  const g = useRef<Group>(null);
  const knot = useRef<Mesh>(null);
  const target = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const on = (e: PointerEvent) => { target.current.x = (e.clientX / innerWidth) * 2 - 1; target.current.y = (e.clientY / innerHeight) * 2 - 1; };
    addEventListener("pointermove", on);
    return () => removeEventListener("pointermove", on);
  }, []);
  useFrame((st, dt) => {
    if (!g.current) return;
    const k = 1 - Math.exp(-3 * Math.min(dt, 0.05)); // плавно и одинаково при любом FPS
    g.current.rotation.y += (target.current.x * 0.5 - g.current.rotation.y) * k;
    g.current.rotation.x += (target.current.y * 0.35 - g.current.rotation.x) * k;
    g.current.position.y = Math.sin(st.clock.elapsedTime * 0.8) * 0.05;
    if (knot.current && !calm) { knot.current.rotation.z += dt * 0.18; knot.current.rotation.y += dt * 0.1; }
  });
  return (
    <group ref={g}>
      <mesh ref={knot} scale={0.8} rotation={[0.4, 0.2, 0]}>
        <torusKnotGeometry args={[1, 0.3, 360, 64, 2, 3]} />
        <meshPhysicalMaterial color="#ffffff" metalness={1} roughness={0.09} clearcoat={1} clearcoatRoughness={0.05} envMapIntensity={1.1} />
      </mesh>
    </group>
  );
}

export default function ChromeScene() {
  const wrap = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [calm, setCalm] = useState(false);
  useEffect(() => {
    setCalm(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
    if (wrap.current) io.observe(wrap.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={wrap} style={{ position: "absolute", inset: 0 }}>
      <Canvas frameloop={visible ? "always" : "never"} dpr={[1, 1.75]} camera={{ position: [0, 0, 5.4], fov: 38 }} gl={{ antialias: true, alpha: true }}>
        <Blob calm={calm} />
        <Environment resolution={512}>
          {/* серый «студийный» фон отражений + мягкие полосы света: хром выглядит как хром, а не как чёрные пятна */}
          <color attach="background" args={["#3a3f4b"]} />
          {/* блики несимметричные и диагональные — иначе отражение складывается в «лицо» */}
          <Lightformer form="rect" intensity={2.2} position={[-3, 5, -1]} rotation-x={Math.PI / 2} rotation-z={0.5} scale={[9, 3, 1]} />
          <Lightformer form="rect" intensity={1.8} position={[-5, 0, 1]} rotation-y={Math.PI / 2} rotation-z={0.8} scale={[12, 0.6, 1]} />
          <Lightformer form="rect" intensity={1.4} position={[5, 2, -2]} rotation-y={-Math.PI / 2} rotation-z={-0.4} scale={[12, 1.6, 1]} />
          <Lightformer form="rect" intensity={0.6} color="#a9b8ff" position={[3, -4, 2]} rotation-x={-Math.PI / 2} rotation-z={0.6} scale={[6, 1.4, 1]} />
          <Lightformer form="rect" intensity={1} color="#ffd9c2" position={[-4, -3, -3]} rotation-z={1.1} scale={[8, 0.5, 1]} />
          <Lightformer form="circle" intensity={3} position={[2.5, 3, 3]} scale={0.7} />
        </Environment>
      </Canvas>
    </div>
  );
}
