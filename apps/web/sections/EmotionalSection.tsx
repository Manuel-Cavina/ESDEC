"use client";

// ─────────────────────────────────────────────────────────────────────────────
// sections/EmotionalSection.tsx
// Sección 4 — Narrativa emocional en 3 beats:
//   Beat 1: "El esfuerzo no es el problema." — copy + huella estática
//   Beat 2: "Sin estructura, el talento se dispersa." — huella animada fp-morph
//   Beat 3: "ESDEC construye el sistema." — centrado, huella como fondo latiente
//
// Animaciones: animate-fp-morph, animate-heartbeat, BrandLines animated
// ─────────────────────────────────────────────────────────────────────────────

import ScrollReveal from "@/components/ScrollReveal";
import BrandLines from "@/components/BrandLines";
import FingerprintSVG from "@/components/FingerprintSVG";
import { EMOTIONAL } from "@/content/landing";
import { cn } from "@/lib/utils";

// ── Contador de beat (01 / 02 / 03) ──────────────────────────────────────────
function BeatCounter({ n }: { n: string }) {
  return (
    <span className="font-condensed text-[11px] font-bold tracking-[4px] uppercase text-[var(--p1)]/50">
      {n}
    </span>
  );
}

// ── Beat 1: esfuerzo / identidad ─────────────────────────────────────────────
function Beat1() {
  const beat = EMOTIONAL.beats[0];
  return (
    <div className="bg-[var(--bg)] py-28 md:py-36">
      <div className="mx-auto max-w-landing px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* Copy */}
          <div>
            <ScrollReveal direction="up" delay={0}>
              <BeatCounter n="01" />
              <p className="mt-3 mb-4 font-condensed text-xs font-bold uppercase tracking-[3px] text-[var(--t3)]">
                {beat.eyebrow}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={80}>
              <BrandLines animated className="mb-6" />
              <h2
                className="font-condensed font-black uppercase leading-[0.95] tracking-[-1px] text-[var(--t1)]"
                style={{ fontSize: "clamp(40px, 6vw, 86px)" }}
              >
                <span className="block">{beat.headlinePre}</span>
                <span className="block text-[var(--p1)]">{beat.headlineAccent}</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={160}>
              <p className="mt-6 max-w-md font-sans text-base leading-[1.75] text-[var(--t2)]">
                {beat.body}
              </p>
            </ScrollReveal>
          </div>

          {/* Huella estática — decorativa */}
          <ScrollReveal direction="up" delay={120}>
            <div
              className={cn(
                "relative flex items-center justify-center",
                "h-[320px] lg:h-[400px]",
                "[--fps:rgba(90,200,255,0.18)] dark:[--fps:rgba(5,128,211,0.18)]",
                "[--fpg:rgba(90,200,255,0.04)] dark:[--fpg:rgba(5,128,211,0.04)]"
              )}
            >
              <FingerprintSVG animate={false} className="w-full max-w-[340px] opacity-35" />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
}

// ── Beat 2: estructura / tensión ──────────────────────────────────────────────
function Beat2() {
  const beat = EMOTIONAL.beats[1];
  return (
    <div className="bg-[var(--bg2)] py-28 md:py-36">
      <div className="mx-auto max-w-landing px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* Huella animada (fp-morph) — lado izquierdo en desktop */}
          <ScrollReveal direction="up" delay={60}>
            <div
              className={cn(
                "relative flex items-center justify-center",
                "h-[320px] lg:h-[400px]",
                "[--fps:rgba(125,232,168,0.22)] dark:[--fps:rgba(12,210,94,0.22)]",
                "[--fpg:rgba(125,232,168,0.05)] dark:[--fpg:rgba(12,210,94,0.05)]"
              )}
            >
              <FingerprintSVG
                animate={false}
                className="w-full max-w-[340px] animate-fp-morph opacity-55"
              />
            </div>
          </ScrollReveal>

          {/* Copy */}
          <div>
            <ScrollReveal direction="up" delay={0}>
              <BeatCounter n="02" />
              <p className="mt-3 mb-4 font-condensed text-xs font-bold uppercase tracking-[3px] text-[var(--t3)]">
                {beat.eyebrow}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={80}>
              <BrandLines
                animated
                className="mb-6 [--bl-color:var(--p2)]"
              />
              <h2
                className="font-condensed font-black uppercase leading-[0.95] tracking-[-1px] text-[var(--t1)]"
                style={{ fontSize: "clamp(40px, 6vw, 86px)" }}
              >
                <span className="block">{beat.headlinePre}</span>
                <span className="block text-[var(--p2)]">{beat.headlineAccent}</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={160}>
              <p className="mt-6 max-w-md font-sans text-base leading-[1.75] text-[var(--t2)]">
                {beat.body}
              </p>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </div>
  );
}

// ── Beat 3: resolución / ESDEC ────────────────────────────────────────────────
function Beat3() {
  const beat = EMOTIONAL.beats[2];
  return (
    <div className="relative overflow-hidden bg-[var(--bg)] py-36 md:py-48">

      {/* Huella de fondo — late */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 flex items-center justify-center",
          "[--fps:rgba(90,200,255,0.12)] dark:[--fps:rgba(5,128,211,0.12)]",
          "[--fpg:rgba(90,200,255,0.03)] dark:[--fpg:rgba(5,128,211,0.03)]"
        )}
        aria-hidden="true"
      >
        <FingerprintSVG
          animate={false}
          className="w-[80vw] max-w-[700px] animate-heartbeat"
        />
      </div>

      {/* Contenido centrado */}
      <div className="relative z-[1] mx-auto max-w-landing px-6 text-center">

        <ScrollReveal direction="up" delay={0}>
          <BeatCounter n="03" />
          <p className="mt-3 mb-4 font-condensed text-xs font-bold uppercase tracking-[3px] text-[var(--t3)]">
            {beat.eyebrow}
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={80}>
          <BrandLines animated centered className="mx-auto mb-6" />
          <h2
            className="font-condensed font-black uppercase leading-[0.95] tracking-[-1px] text-[var(--t1)]"
            style={{ fontSize: "clamp(44px, 7vw, 100px)" }}
          >
            <span className="block">{beat.headlinePre}</span>
            <span className="block text-[var(--p1)]">{beat.headlineAccent}</span>
            {"headlineSub" in beat && (
              <span className="block text-[var(--t2)] text-[0.6em] mt-2">
                {(beat as typeof beat & { headlineSub: string }).headlineSub}
              </span>
            )}
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={160}>
          <p className="mx-auto mt-8 max-w-lg font-sans text-base leading-[1.75] text-[var(--t2)]">
            {beat.body}
          </p>
        </ScrollReveal>

      </div>
    </div>
  );
}

// ── Sección principal ─────────────────────────────────────────────────────────

export default function EmotionalSection() {
  return (
    <section id="emotional" className="overflow-hidden">
      <Beat1 />
      <Beat2 />
      <Beat3 />
    </section>
  );
}
