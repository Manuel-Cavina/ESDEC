"use client";

// ─────────────────────────────────────────────────────────────────────────────
// sections/HeroSection.tsx
// Hero de ESDEC — MVP 0
//
// Animaciones:
//   · Liquid background (CSS keyframe en globals.css)
//   · Huella SVG se dibuja al montar (stroke-dashoffset)
//   · 3 líneas del logo se extienden con lineDraw keyframe
//   · Headline línea por línea con stamp keyframe
//   · Athlete card con float + tilt 3D
//   · Glitch en headline (loop cada 7s)
//   · Dot grid overlay en hero
//   · Modo claro: azul eléctrico | Modo oscuro: navy profundo
//
// Copy: todo viene de @/content/landing
// ─────────────────────────────────────────────────────────────────────────────

import { useRef } from "react";
import { HERO, STATS } from "@/content/landing";
import FingerprintSVG from "@/components/FingerprintSVG";
import AthleteCard from "@/components/AthleteCard";
import { cn } from "@/lib/utils";

// ── Dot ping animado
function PingDot({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-block w-[7px] h-[7px] rounded-full flex-shrink-0",
        "bg-[var(--p1)] animate-ping-dot",
        className
      )}
    />
  );
}

// ── Pillar chip
function PillarChip({ label }: { label: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5",
        "px-4 py-[7px] rounded-full",
        "bg-white/12 border border-white/25",
        "font-condensed font-bold text-sm uppercase tracking-wide",
        "text-white/90",
        "transition-all duration-200 cursor-default",
        "hover:bg-[var(--p1s)] hover:border-[var(--p1)] hover:text-white"
      )}
    >
      <span className="text-[var(--p1)] text-[10px]">•</span>
      {label}
    </div>
  );
}

// ── Stat item
function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-[44px] leading-none tracking-wide text-white">
        {value.replace(/\+|°|\/7|\/|%/, "")}
        <span className="text-[var(--p1)]">
          {value.match(/\+|°|\/7/)?.[0] ?? ""}
        </span>
      </div>
      <div className="font-sans text-[11px] font-semibold tracking-[1.5px] uppercase text-white/38 mt-1">
        {label}
      </div>
    </div>
  );
}

// ── Stat separator (3 líneas del logo en miniatura)
function StatSep() {
  return (
    <div className="flex flex-col gap-[3px] opacity-20">
      <div className="h-[3px] w-4 rounded-full bg-white" />
      <div className="h-[3px] w-3 rounded-full bg-white ml-0.5" />
      <div className="h-[3px] w-2 rounded-full bg-white ml-1" />
    </div>
  );
}

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <>
      {/* ────────────────────────────────────────────────────────────────────
          HERO
      ──────────────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        id="hero"
        className={cn(
          "relative min-h-screen flex flex-col justify-center overflow-hidden",
          // Liquid background — el gradiente se define por CSS var según el modo
          "bg-hero-light dark:bg-hero-dark",
          "animate-liquid-bg",
        )}
      >
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Glow orbs */}
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[400px] rounded-full pointer-events-none hero-orb-1" />
        <div className="absolute bottom-[-80px] left-[100px] w-[400px] h-[400px] rounded-full pointer-events-none hero-orb-2" />

        {/* Overlay gradiente direccional */}
        <div className="absolute inset-0 bg-hero-overlay pointer-events-none" />

        {/* ── Panel izquierdo: imagen del atleta + huella fusionada */}
        <div
          className={cn(
            "absolute left-0 top-0 w-1/2 h-full",
            "hidden lg:block z-[1]",
            "opacity-0 animate-fade-up [animation-delay:800ms] [animation-fill-mode:forwards]"
          )}
        >
          <div className="relative w-full h-full">
            {/* Imagen del atleta */}
            <img
              src="/images/athletes/Atleta_1.png"
              alt=""
              className="w-full h-full object-cover object-center select-none pointer-events-none"
            />

            {/* Degradé derecho — fusión hacia el contenido */}
            <div
              className="absolute inset-y-0 right-0 w-[45%] pointer-events-none"
              style={{ background: "linear-gradient(to left, var(--hero-from) 0%, transparent 100%)" }}
            />
            {/* Degradé izquierdo */}
            <div
              className="absolute inset-y-0 left-0 w-[15%] pointer-events-none"
              style={{ background: "linear-gradient(to right, var(--hero-from) 0%, transparent 100%)" }}
            />
            {/* Degradé superior */}
            <div
              className="absolute inset-x-0 top-0 h-[22%] pointer-events-none"
              style={{ background: "linear-gradient(to bottom, var(--hero-from) 0%, transparent 100%)" }}
            />
            {/* Degradé inferior */}
            <div
              className="absolute inset-x-0 bottom-0 h-[28%] pointer-events-none"
              style={{ background: "linear-gradient(to top, var(--hero-from) 0%, transparent 100%)" }}
            />

          </div>
        </div>

        {/* ── Hero content — mitad derecha en desktop */}
        <div className="relative z-[2] px-16 pt-[130px] pb-20 lg:ml-[50%] lg:max-w-[calc(50%-2rem)] max-w-[680px]">

          {/* Eyebrow */}
          <div
            className={cn(
              "inline-flex items-center gap-2",
              "font-sans text-[11px] font-semibold tracking-[3px] uppercase",
              "text-[var(--p1)] mb-5",
              "opacity-0 animate-fade-up [animation-delay:200ms] [animation-fill-mode:forwards]"
            )}
          >
            <PingDot />
            {HERO.eyebrow}
          </div>

          {/* Huella estática — antes del headline */}
          <div
            className={cn(
              "mb-[18px]",
              "[--fps:var(--p1)] [--fpg:rgba(90,200,255,0.08)]",
              "opacity-0 animate-fade-up [animation-delay:500ms] [animation-fill-mode:forwards]"
            )}
          >
            <FingerprintSVG animate={false} className="w-14 h-[68px]" strokeOpacity={0.9} />
          </div>

          {/* Headline — línea por línea con stamp */}
          <h1 className="font-condensed font-black text-white leading-[1.0] tracking-[-1px] mb-5 animate-glitch"
              style={{ fontSize: "clamp(44px, 7.5vw, 110px)" }}>
            {[HERO.headlineLine1, HERO.headlineLine2, HERO.headlineLine3].map(
              (line, i) => (
                <span
                  key={i}
                  className={cn(
                    "block",
                    "opacity-0 animate-stamp [animation-fill-mode:forwards]"
                  )}
                  style={{ animationDelay: `${900 + i * 100}ms` }}
                >
                  {line}
                </span>
              )
            )}
            <span
              className={cn(
                "block text-[var(--p1)]",
                "opacity-0 animate-stamp [animation-fill-mode:forwards]"
              )}
              style={{ animationDelay: "1200ms" }}
            >
              {HERO.headlineAccent}
            </span>
          </h1>

          {/* Sub headline */}
          <p
            className={cn(
              "font-sans text-base text-white/75 leading-[1.75]",
              "max-w-[480px] mb-8",
              "opacity-0 animate-fade-up [animation-delay:1200ms] [animation-fill-mode:forwards]"
            )}
            dangerouslySetInnerHTML={{ __html: HERO.body }}
          />

          {/* Pillars */}
          <div
            className={cn(
              "flex flex-wrap gap-2 mb-8",
              "opacity-0 animate-fade-up [animation-delay:1300ms] [animation-fill-mode:forwards]"
            )}
          >
            {HERO.pillars.map((p) => (
              <PillarChip key={p} label={p} />
            ))}
          </div>

          {/* CTAs */}
          <div
            className={cn(
              "flex flex-wrap gap-3",
              "opacity-0 animate-fade-up [animation-delay:1400ms] [animation-fill-mode:forwards]"
            )}
          >
            <a
              href="#footprint"
              className={cn(
                "inline-flex items-center gap-2 group",
                "font-condensed font-bold text-[15px] uppercase tracking-wide",
                "px-[30px] py-[13px] rounded-md",
                "bg-[var(--btn-bg)] text-[var(--btn-t)]",
                "transition-all duration-200 ease-out",
                "hover:brightness-110 hover:px-[42px] hover:-translate-y-0.5",
                "hover:shadow-[0_8px_28px_rgba(0,0,0,0.25)]",
                // Shimmer interno
                "relative overflow-hidden before:absolute before:inset-0",
                "before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
                "before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-400"
              )}
            >
              {HERO.ctaPrimary} →
            </a>
            <a
              href="#about"
              className={cn(
                "inline-flex items-center gap-2",
                "font-sans font-medium text-sm",
                "px-[26px] py-[12px] rounded-md",
                "bg-transparent text-white/75",
                "border border-white/25",
                "transition-all duration-200",
                "hover:border-white hover:text-white"
              )}
            >
              {HERO.ctaSecondary}
            </a>
          </div>
        </div>

      </section>

      {/* ────────────────────────────────────────────────────────────────────
          STATS BAR
      ──────────────────────────────────────────────────────────────────── */}
      
    </>
  );
}
