"use client";

// ─────────────────────────────────────────────────────────────────────────────
// sections/EmotionalSection.tsx
// Sección 4 — Narrativa emocional de 3 beats: validación → tensión → resolución.
// Identidad de marca: watermark numérico (01/02/03) + 3 líneas del logo por beat.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react";
import FingerprintSVG from "@/components/FingerprintSVG";
import ScrollReveal from "@/components/ScrollReveal";
import { EMOTIONAL } from "@/content/landing";

// ── BrandLines ────────────────────────────────────────────────────────────────
// Las 3 líneas horizontales escalonadas del logo ESDEC.
// Se dibujan de izquierda a derecha cuando entran al viewport.

interface BrandLinesProps {
  className?: string;
  centered?: boolean;
}

function BrandLines({ className, centered = false }: BrandLinesProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const lines = Array.from(el.querySelectorAll<HTMLDivElement>("[data-target]"));

    // Estado inicial: ocultas
    lines.forEach((line) => {
      line.style.width = "0";
      line.style.opacity = "0";
    });

    // Disparar cuando entran al viewport
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        lines.forEach((line, i) => {
          setTimeout(() => {
            line.style.width = line.dataset.target!;
            line.style.opacity = "1";
          }, i * 130);
        });
        obs.disconnect();
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  if (centered) {
    return (
      <div ref={ref} className={className}>
        <div
          data-target="100%"
          className="h-0.5 rounded-full bg-[var(--p1)] opacity-60 transition-[width,opacity] duration-700"
          style={{ transitionTimingFunction: "cubic-bezier(.22,1,.36,1)" }}
        />
        <div
          data-target="72%"
          className="mx-auto mt-1.5 h-0.5 rounded-full bg-[var(--p1)] opacity-40 transition-[width,opacity] duration-700"
          style={{ transitionTimingFunction: "cubic-bezier(.22,1,.36,1)", transitionDelay: "130ms" }}
        />
        <div
          data-target="45%"
          className="mx-auto mt-1.5 h-0.5 rounded-full bg-[var(--p1)] opacity-25 transition-[width,opacity] duration-700"
          style={{ transitionTimingFunction: "cubic-bezier(.22,1,.36,1)", transitionDelay: "260ms" }}
        />
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <div
        data-target="100%"
        className="h-0.5 rounded-full bg-[var(--p1)] opacity-60 transition-[width,opacity] duration-700"
        style={{ transitionTimingFunction: "cubic-bezier(.22,1,.36,1)" }}
      />
      <div
        data-target="72%"
        className="ml-7 mt-1.5 h-0.5 rounded-full bg-[var(--p1)] opacity-40 transition-[width,opacity] duration-700"
        style={{ transitionTimingFunction: "cubic-bezier(.22,1,.36,1)", transitionDelay: "130ms" }}
      />
      <div
        data-target="45%"
        className="ml-14 mt-1.5 h-0.5 rounded-full bg-[var(--p1)] opacity-25 transition-[width,opacity] duration-700"
        style={{ transitionTimingFunction: "cubic-bezier(.22,1,.36,1)", transitionDelay: "260ms" }}
      />
    </div>
  );
}

// ── Beat 1 — Validación ───────────────────────────────────────────────────────
// "Ya ponés el esfuerzo." — la huella existe pero es latente, casi invisible.
function Beat1() {
  const beat = EMOTIONAL.beats[0];
  return (
    <div className="bg-[var(--bg)] py-28 md:py-36">
      <div className="mx-auto grid max-w-landing items-center gap-12 px-6 md:grid-cols-2 md:gap-20">

        {/* Copy — izquierda */}
        <ScrollReveal direction="left">
          <div className="relative">
            {/* Watermark numérico */}
            <span
              className="pointer-events-none absolute -top-2 right-0 select-none font-display
                         leading-none text-[var(--t1)] opacity-[0.06]"
              style={{ fontSize: "clamp(6rem, 18vw, 12rem)" }}
              aria-hidden="true"
            >
              01
            </span>

            {/* Contador + líneas de marca */}
            <p className="mb-3 font-condensed text-xs font-bold tracking-[4px] text-[var(--t3)]">
              01 / 03
            </p>
            <BrandLines className="mb-6" />

            {/* Copy */}
            <p className="mb-4 font-condensed text-xs font-bold uppercase tracking-[3px] text-[var(--p1)]">
              {beat.eyebrow}
            </p>
            <h2
              className="mb-6 font-display leading-none text-[var(--t1)]"
              style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
            >
              {beat.headlinePre}{" "}
              <span className="text-[var(--p1)]">{beat.headlineAccent}</span>
            </h2>
            <p className="font-sans text-xl leading-relaxed text-[var(--t2)]">
              {beat.body}
            </p>
          </div>
        </ScrollReveal>

        {/* Huella — derecha, baja opacidad: el esfuerzo latente existe pero no está dirigido */}
        <ScrollReveal direction="right">
          <div
            className="mx-auto h-[320px] w-[267px] opacity-35 md:h-[420px] md:w-[350px]
                       [--fps:rgba(90,200,255,0.35)] [--fpg:rgba(90,200,255,0.08)]
                       dark:[--fps:rgba(5,128,211,0.35)] dark:[--fpg:rgba(5,128,211,0.06)]"
            aria-hidden="true"
          >
            <FingerprintSVG className="h-full w-full" animate={false} />
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}

// ── Beat 2 — Tensión ──────────────────────────────────────────────────────────
// "Sin estructura, el talento se dispersa." — la huella se mueve de forma inquieta.
function Beat2() {
  const beat = EMOTIONAL.beats[1];
  return (
    <div className="bg-[var(--bg2)] py-28 md:py-36">
      <div className="mx-auto grid max-w-landing items-center gap-12 px-6 md:grid-cols-2 md:gap-20">

        {/* Huella — izquierda, animación morph: inestable, sin dirección */}
        <ScrollReveal direction="left" className="order-last md:order-first">
          <div
            className="mx-auto h-[320px] w-[267px] animate-fp-morph opacity-55 md:h-[420px] md:w-[350px]
                       [--fps:rgba(125,232,168,0.35)] [--fpg:rgba(125,232,168,0.08)]
                       dark:[--fps:rgba(12,210,94,0.30)] dark:[--fpg:rgba(12,210,94,0.06)]"
            aria-hidden="true"
          >
            <FingerprintSVG className="h-full w-full" animate={false} />
          </div>
        </ScrollReveal>

        {/* Copy — derecha */}
        <ScrollReveal direction="right">
          <div className="relative">
            {/* Watermark numérico */}
            <span
              className="pointer-events-none absolute -top-2 right-0 select-none font-display
                         leading-none text-[var(--t1)] opacity-[0.06]"
              style={{ fontSize: "clamp(6rem, 18vw, 12rem)" }}
              aria-hidden="true"
            >
              02
            </span>

            {/* Contador + líneas de marca */}
            <p className="mb-3 font-condensed text-xs font-bold tracking-[4px] text-[var(--t3)]">
              02 / 03
            </p>
            <BrandLines className="mb-6" />

            {/* Copy */}
            <p className="mb-4 font-condensed text-xs font-bold uppercase tracking-[3px] text-[var(--p2)]">
              {beat.eyebrow}
            </p>
            <h2
              className="mb-6 font-display leading-none text-[var(--t1)]"
              style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
            >
              {beat.headlinePre}{" "}
              <span className="text-[var(--p2)]">{beat.headlineAccent}</span>
            </h2>
            <p className="font-sans text-xl leading-relaxed text-[var(--t2)]">
              {beat.body}
            </p>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}

// ── Beat 3 — Resolución ───────────────────────────────────────────────────────
// "ESDEC construye el sistema." — la huella late plena como fondo, identidad construida.
function Beat3() {
  const beat = EMOTIONAL.beats[2];

  return (
    <div className="bg-[var(--bg)] py-28 md:py-36">
      <div className="mx-auto max-w-landing px-6">

        {/* Glow ambiental */}
        <div
          className="pointer-events-none mx-auto mb-0 h-1 w-px"
          style={{ boxShadow: "0 0 200px 120px color-mix(in srgb, var(--p1) 30%, transparent)" }}
          aria-hidden="true"
        />

        {/* Contenedor relativo: huella como fondo, copy encima */}
        <div className="relative flex flex-col items-center text-center">

          {/* Huella fondo — latido lento, plena opacidad */}
          <ScrollReveal direction="none" className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              className="h-[360px] w-[300px] animate-heartbeat opacity-90 md:h-[520px] md:w-[433px]
                         [--fps:rgba(90,200,255,0.32)] [--fpg:rgba(90,200,255,0.12)]
                         dark:[--fps:rgba(5,128,211,0.32)] dark:[--fpg:rgba(5,128,211,0.10)]"
              aria-hidden="true"
            >
              <FingerprintSVG className="h-full w-full" animate={false} />
            </div>
          </ScrollReveal>

          {/* Copy — z-10, centrado */}
          <div className="relative z-10 py-32 md:py-44">

            {/* Watermark numérico */}
            <span
              className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 select-none
                         font-display leading-none text-[var(--t1)] opacity-[0.05]"
              style={{ fontSize: "clamp(8rem, 22vw, 16rem)" }}
              aria-hidden="true"
            >
              03
            </span>

            <ScrollReveal direction="up">
              <p className="mb-3 font-condensed text-xs font-bold tracking-[4px] text-[var(--t3)]">
                03 / 03
              </p>
              <BrandLines centered className="mx-auto mb-6 max-w-[260px]" />
              <p className="mb-4 font-condensed text-xs font-bold uppercase tracking-[3px] text-[var(--p1)]">
                {beat.eyebrow}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <h2
                className="mb-2 font-display leading-none text-[var(--t1)]"
                style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
              >
                {beat.headlinePre}{" "}
                <span className="text-[var(--p1)]">{beat.headlineAccent}</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={180}>
              <p
                className="mb-8 font-display leading-none text-[var(--t2)]"
                style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
              >
                {beat.headlineSub}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={260}>
              <p className="mx-auto mb-10 max-w-md font-sans text-lg leading-relaxed text-[var(--t2)]">
                {beat.body}
              </p>
            </ScrollReveal>


          </div>
        </div>

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
