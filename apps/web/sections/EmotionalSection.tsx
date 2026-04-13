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
import { EMOTIONAL, PROFESSIONAL_EMOTIONAL } from "@/content/landing";
import { cn } from "@/lib/utils";

type Audience = "deportista" | "profesional";
type BeatsData = typeof EMOTIONAL | typeof PROFESSIONAL_EMOTIONAL;

// ── Contador de beat (01 / 02 / 03) ──────────────────────────────────────────
function BeatCounter({ n }: { n: string }) {
  return (
    <span className="font-condensed text-[11px] font-bold tracking-[4px] uppercase text-[var(--p1)]/50">
      {n}
    </span>
  );
}

type BeatItem = BeatsData["beats"][number];

// ── Beat 1: identidad / punto de partida ─────────────────────────────────────
function Beat1({ beat }: { beat: BeatItem }) {
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
                className="font-condensed font-black uppercase leading-[0.95] tracking-[-1px] text-[var(--t1)] text-clamp-beat"
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
function Beat2({ beat }: { beat: BeatItem }) {
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
              <BrandLines animated className="mb-6 [--bl-color:var(--p2)]" />
              <h2
                className="font-condensed font-black uppercase leading-[0.95] tracking-[-1px] text-[var(--t1)] text-clamp-beat"
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
function Beat3({ beat, image }: { beat: BeatItem; image: string }) {
  return (
    <div className="relative bg-[var(--bg)]">

      {/* Imagen completa — define la altura del contenedor, sin recorte */}
      <img
        src={image}
        alt=""
        className="w-full h-auto block opacity-40 brightness-125"
      />

      {/* Copy centrado sobre la imagen */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

        <ScrollReveal direction="up" delay={0}>
          <BeatCounter n="03" />
          <p className="mt-3 mb-4 font-condensed text-xs font-bold uppercase tracking-[3px] text-white/70">
            {beat.eyebrow}
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={80}>
          <BrandLines animated centered className="mx-auto mb-6" />
          <h2 className="font-condensed font-black uppercase leading-[0.95] tracking-[-1px] text-white text-clamp-beat-lg">
            <span className="block">{beat.headlinePre}</span>
            <span className="block text-[var(--p1)]">{beat.headlineAccent}</span>
            {beat.headlineSub && (
              <span className="block text-white/70 text-[0.6em] mt-2">
                {beat.headlineSub}
              </span>
            )}
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={160}>
          <p className="mx-auto mt-8 max-w-lg font-sans text-base leading-[1.75] text-white/80">
            {beat.body}
          </p>
        </ScrollReveal>

      </div>
    </div>
  );
}

// ── Sección principal ─────────────────────────────────────────────────────────

interface EmotionalSectionProps {
  audience?: Audience;
}

export default function EmotionalSection({ audience = "deportista" }: EmotionalSectionProps) {
  const data = audience === "profesional" ? PROFESSIONAL_EMOTIONAL : EMOTIONAL;
  const beat3Image =
    audience === "profesional"
      ? "/images/lifestyle/Medico1.png"
      : "/images/lifestyle/Vida1.jpg";

  return (
    <section id="emotional" className="overflow-hidden">
      <Beat1 beat={data.beats[0]} />
      <Beat2 beat={data.beats[1]} />
      <Beat3 beat={data.beats[2]} image={beat3Image} />
    </section>
  );
}
