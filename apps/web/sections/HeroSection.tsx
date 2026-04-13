"use client";

// ─────────────────────────────────────────────────────────────────────────────
// sections/HeroSection.tsx
// Hero split-screen ESDEC — selector de audiencia (Deportista / Profesional)
//
// Comportamiento:
//   · Ocupa 100vh en fullscreen como entrada a la landing
//   · Hover: la mitad activa crece a 68%, la otra se achica a 32%
//   · Click: particle burst + hero sale por arriba → landing visible
//   · Mobile (<768px): paneles apilados verticalmente, 50vh cada uno
//
// Copy: todo viene de @/content/landing (HERO_SPLIT)
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from "react";
import { HERO_SPLIT } from "@/content/landing";
import FingerprintSVG from "@/components/FingerprintSVG";
import BrandLines from "@/components/BrandLines";
import { cn } from "@/lib/utils";

type Audience = "deportista" | "profesional";
type HoveredSide = "left" | "right" | null;

interface CursorPos { x: number; y: number }

interface HeroSectionProps {
  onSelect: (audience: Audience) => void;
}

export default function HeroSection({ onSelect }: HeroSectionProps) {
  const [hovered,  setHovered]  = useState<HoveredSide>(null);
  const [mounted,  setMounted]  = useState(false);
  const [cursorL,  setCursorL]  = useState<CursorPos | null>(null);
  const [cursorR,  setCursorR]  = useState<CursorPos | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const particleContainerRef = useRef<HTMLDivElement>(null);

  // Slide-in entrance: trigger after first paint
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  // ── Particle burst en el punto exacto del click
  function spawnParticles(x: number, y: number, color: string) {
    const container = particleContainerRef.current;
    if (!container) return;
    for (let i = 0; i < 22; i++) {
      const el = document.createElement("div");
      el.className = "particle";
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.backgroundColor = color;
      const angle = (i / 22) * Math.PI * 2;
      const dist = 40 + Math.random() * 90;
      el.style.setProperty("--px", `${Math.cos(angle) * dist}px`);
      el.style.setProperty("--py", `${Math.sin(angle) * dist}px`);
      el.style.animationDelay = `${Math.random() * 80}ms`;
      container.appendChild(el);
      setTimeout(() => el.remove(), 900);
    }
  }

  // ── Click handler: partículas → salida del hero → notificar parent
  function handleSelect(audience: Audience, e: React.MouseEvent) {
    const color = audience === "deportista" ? "#5ac8ff" : "#0CD25E";
    spawnParticles(e.clientX, e.clientY, color);

    setTimeout(() => {
      heroRef.current?.classList.add("hero-split-exit");
    }, 200);

    setTimeout(() => {
      if (heroRef.current) heroRef.current.style.display = "none";
      onSelect(audience);
    }, 1000);
  }

  // ── Flex values para expansión hover
  const leftFlex =
    hovered === "right" ? "0 0 32%" : hovered === "left" ? "0 0 68%" : "0 0 50%";
  const rightFlex =
    hovered === "left" ? "0 0 32%" : hovered === "right" ? "0 0 68%" : "0 0 50%";

  // ── Cursor spotlight helpers
  function handleMouseMoveL(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorL({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }
  function handleMouseMoveR(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorR({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <section
      ref={heroRef}
      id="hero-split"
      className="fixed inset-0 z-50 flex flex-col md:flex-row overflow-hidden"
    >
      {/* ── Logo + tagline centrado arriba ─────────────────────────────────── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pt-7 gap-[6px] pointer-events-none">
        <div className="flex items-center gap-2" style={{ "--bl-color": "#5ac8ff" } as React.CSSProperties}>
          <BrandLines size="sm" />
          <span className="font-condensed font-black text-sm tracking-[3px] text-white uppercase">
            ESDEC
          </span>
        </div>
        <span className="font-condensed text-[10px] tracking-[4px] text-white/50 uppercase">
          {HERO_SPLIT.topTagline}
        </span>
      </div>

      {/* ── Panel izquierdo — Deportista ───────────────────────────────────── */}
      <div
        className="relative overflow-hidden cursor-pointer h-[50vh] md:h-full"
        style={{
          flex: leftFlex,
          transition: "flex 0.6s cubic-bezier(.77,0,.175,1), transform 0.9s cubic-bezier(.22,1,.36,1)",
          transform: mounted ? "translateX(0)" : "translateX(-100%)",
        }}
        onMouseEnter={() => setHovered("left")}
        onMouseLeave={() => { setHovered(null); setCursorL(null); }}
        onMouseMove={handleMouseMoveL}
        onClick={(e) => handleSelect("deportista", e)}
      >
        {/* Imagen de fondo */}
        <img
          src={HERO_SPLIT.left.image}
          alt=""
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
          style={{
            transform: hovered === "left" ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.6s cubic-bezier(.77,0,.175,1)",
          }}
        />

        {/* Overlay azul semitransparente */}
        <div className="absolute inset-0 bg-[#1556d4]/65" />

        {/* Dim overlay cuando la otra mitad está hovered */}
        <div
          className="absolute inset-0 bg-black"
          style={{
            opacity: hovered === "right" ? 0.3 : 0,
            transition: "opacity 0.6s cubic-bezier(.77,0,.175,1)",
          }}
        />

        {/* Cursor spotlight */}
        {cursorL && (
          <div
            className="pointer-events-none absolute inset-0 z-[5]"
            style={{
              background: `radial-gradient(400px circle at ${cursorL.x}px ${cursorL.y}px, rgba(90,200,255,0.13) 0%, transparent 70%)`,
              transition: "background 0.08s ease",
            }}
          />
        )}

        {/* Contenido */}
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-12 lg:px-16 pt-28 pb-20">

          {/* Logo en esquina superior izquierda */}
          <div
            className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-2"
            style={{ "--bl-color": "#5ac8ff" } as React.CSSProperties}
          >
            <BrandLines size="sm" />
          </div>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-7 bg-[#5ac8ff] flex-shrink-0" />
            <span className="font-condensed font-bold text-[11px] tracking-[3px] uppercase text-[#5ac8ff]">
              {HERO_SPLIT.left.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h2
            className="font-condensed font-black leading-[1.0] text-white"
            style={{ fontSize: "clamp(48px, 7vw, 112px)" }}
          >
            {HERO_SPLIT.left.headlinePre}
            <br />
            <span className="text-[#5ac8ff]">{HERO_SPLIT.left.headlineAccent}</span>
          </h2>

          {/* Body */}
          <p className="font-sans text-sm text-white/80 mt-5 max-w-[320px] leading-[1.7]">
            {HERO_SPLIT.left.body}
          </p>

          {/* CTA */}
          <button
            type="button"
            className={cn(
              "mt-8 inline-flex items-center gap-2 w-fit",
              "font-condensed font-bold text-[13px] uppercase tracking-wide",
              "px-7 py-[11px] rounded-md",
              "bg-[#5ac8ff] text-[#0c2d7a]",
              "transition-all duration-200 hover:brightness-110 hover:-translate-y-px",
              "relative overflow-hidden",
              "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
              "before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-400"
            )}
          >
            {HERO_SPLIT.left.cta}
          </button>
        </div>

        {/* Huella SVG — esquina inferior derecha */}
        <div
          className="absolute bottom-0 right-0 w-36 h-44 pointer-events-none"
          style={{
            opacity: 0.08,
            ["--fps" as string]: "rgba(255,255,255,0.8)",
            ["--fpg" as string]: "rgba(255,255,255,0.02)",
          }}
        >
          <FingerprintSVG animate={false} className="w-full h-full" />
        </div>
      </div>

      {/* ── Línea divisoria ────────────────────────────────────────────────── */}
      <div className="w-px md:w-px h-px md:h-full bg-white/20 z-10 flex-shrink-0 self-stretch hidden md:block" />

      {/* ── Panel derecho — Profesional ────────────────────────────────────── */}
      <div
        className="relative overflow-hidden cursor-pointer h-[50vh] md:h-full"
        style={{
          flex: rightFlex,
          transition: "flex 0.6s cubic-bezier(.77,0,.175,1), transform 0.9s cubic-bezier(.22,1,.36,1)",
          transform: mounted ? "translateX(0)" : "translateX(100%)",
        }}
        onMouseEnter={() => setHovered("right")}
        onMouseLeave={() => { setHovered(null); setCursorR(null); }}
        onMouseMove={handleMouseMoveR}
        onClick={(e) => handleSelect("profesional", e)}
      >
        {/* Imagen de fondo */}
        <img
          src={HERO_SPLIT.right.image}
          alt=""
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
          style={{
            transform: hovered === "right" ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.6s cubic-bezier(.77,0,.175,1)",
          }}
        />

        {/* Overlay navy oscuro */}
        <div className="absolute inset-0 bg-[#001A33]/82" />

        {/* Dim overlay cuando la otra mitad está hovered */}
        <div
          className="absolute inset-0 bg-black"
          style={{
            opacity: hovered === "left" ? 0.3 : 0,
            transition: "opacity 0.6s cubic-bezier(.77,0,.175,1)",
          }}
        />

        {/* Cursor spotlight */}
        {cursorR && (
          <div
            className="pointer-events-none absolute inset-0 z-[5]"
            style={{
              background: `radial-gradient(400px circle at ${cursorR.x}px ${cursorR.y}px, rgba(12,210,94,0.13) 0%, transparent 70%)`,
              transition: "background 0.08s ease",
            }}
          />
        )}

        {/* Contenido — alineado a la derecha */}
        <div className="relative z-10 h-full flex flex-col justify-center items-end text-right px-8 md:px-12 lg:px-16 pt-28 pb-20">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <span className="font-condensed font-bold text-[11px] tracking-[3px] uppercase text-[#0CD25E]">
              {HERO_SPLIT.right.eyebrow}
            </span>
            <div className="h-px w-7 bg-[#0CD25E] flex-shrink-0" />
          </div>

          {/* Headline */}
          <h2
            className="font-condensed font-black leading-[1.0] text-white"
            style={{ fontSize: "clamp(48px, 7vw, 112px)" }}
          >
            {HERO_SPLIT.right.headlinePre}
            <br />
            <span className="text-[#0CD25E]">{HERO_SPLIT.right.headlineAccent}</span>
          </h2>

          {/* Body */}
          <p className="font-sans text-sm text-white/80 mt-5 max-w-[320px] leading-[1.7]">
            {HERO_SPLIT.right.body}
          </p>

          {/* CTA */}
          <button
            type="button"
            className={cn(
              "mt-8 inline-flex items-center gap-2 w-fit",
              "font-condensed font-bold text-[13px] uppercase tracking-wide",
              "px-7 py-[11px] rounded-md",
              "bg-[#0CD25E] text-[#001A33]",
              "transition-all duration-200 hover:brightness-110 hover:-translate-y-px",
              "relative overflow-hidden",
              "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent",
              "before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-400"
            )}
          >
            {HERO_SPLIT.right.cta}
          </button>
        </div>

        {/* Huella SVG — esquina inferior izquierda */}
        <div
          className="absolute bottom-0 left-0 w-36 h-44 pointer-events-none"
          style={{
            opacity: 0.07,
            ["--fps" as string]: "rgba(12,210,94,0.9)",
            ["--fpg" as string]: "rgba(12,210,94,0.02)",
          }}
        >
          <FingerprintSVG animate={false} className="w-full h-full" />
        </div>
      </div>

      {/* ── "ELEGÍ TU CAMINO" + indicador de scroll ────────────────────────── */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none">
        <span className="font-condensed font-bold text-[10px] tracking-[5px] uppercase text-white/35">
          {HERO_SPLIT.dividerText}
        </span>
        <div className="w-px h-7 bg-gradient-to-b from-white/35 to-transparent animate-scroll-down" />
      </div>

      {/* ── Contenedor de partículas ───────────────────────────────────────── */}
      <div
        ref={particleContainerRef}
        className="fixed inset-0 pointer-events-none z-[9999]"
      />
    </section>
  );
}
