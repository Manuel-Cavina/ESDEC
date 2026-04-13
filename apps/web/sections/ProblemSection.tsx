"use client";

// ─────────────────────────────────────────────────────────────────────────────
// sections/ProblemSection.tsx
// Sección 5 — Diagnóstico + Journey.
//
// Layout:
//   1. Header split: headline izq. / huella ghost derecha (cortada)
//   2. Grid 4 problemas: números watermark editoriales + huella en hover
//   3. Pivot strip: "No te falta esfuerzo. Te falta estructura." — huella de fondo
//   4. Journey: huella sticky + pasos verticales con línea conectora
// ─────────────────────────────────────────────────────────────────────────────

import ScrollReveal from "@/components/ScrollReveal";
import BrandLines from "@/components/BrandLines";
import FingerprintSVG from "@/components/FingerprintSVG";
import { PROBLEM, PROFESSIONAL_PROBLEM } from "@/content/landing";
import { cn } from "@/lib/utils";

type ProblemData = typeof PROBLEM | typeof PROFESSIONAL_PROBLEM;

// ── Tipos locales ─────────────────────────────────────────────────────────────

interface Problem {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

interface Step {
  readonly step: string;
  readonly title: string;
  readonly description: string;
}

// ── ProblemCard ───────────────────────────────────────────────────────────────
// Número grande como watermark editorial. Huella aparece desde la esquina
// inferior derecha en hover.

function ProblemCard({ problem, index }: { problem: Problem; index: number }) {
  return (
    <ScrollReveal direction="up" delay={index * 80}>
      <div className="group relative overflow-hidden border-t-2 border-[var(--p1)]/20 py-10 transition-colors duration-300 hover:border-[var(--p1)]/80">

        {/* Huella ghost — emerge en hover desde esquina inferior derecha */}
        <div
          className={cn(
            "pointer-events-none absolute -bottom-10 -right-10 opacity-0",
            "transition-opacity duration-500 group-hover:opacity-100",
            "[--fps:rgba(90,200,255,0.18)] dark:[--fps:rgba(5,128,211,0.18)]",
            "[--fpg:rgba(90,200,255,0.04)]"
          )}
          aria-hidden="true"
        >
          <FingerprintSVG animate={false} className="w-36" />
        </div>

        {/* Número — watermark editorial */}
        <span
          className="mb-2 block select-none font-condensed font-black leading-none text-[var(--p1)]/15 transition-colors duration-300 group-hover:text-[var(--p1)]/30"
          style={{ fontSize: "clamp(72px, 9vw, 108px)" }}
          aria-hidden="true"
        >
          {problem.number}
        </span>

        {/* Acento — crece en hover */}
        <div className="mb-5 h-[2px] w-6 bg-[var(--p1)]/40 transition-[width,background-color] duration-500 group-hover:w-14 group-hover:bg-[var(--p1)]" />

        <h3
          className="mb-3 font-condensed font-black uppercase leading-[0.9] tracking-tight text-[var(--t1)]"
          style={{ fontSize: "clamp(20px, 2.4vw, 34px)" }}
        >
          {problem.title}
        </h3>
        <p className="font-sans text-sm leading-relaxed text-[var(--t2)]">
          {problem.description}
        </p>
      </div>
    </ScrollReveal>
  );
}

// ── PivotStrip ────────────────────────────────────────────────────────────────
// La frase bisagra entre el diagnóstico y la solución.
// Huella grande de fondo, texto centrado en display.

function PivotStrip({ data }: { data: ProblemData }) {
  return (
    <div className="relative overflow-hidden border-[var(--p1)]/12 bg-[var(--bg)] py-24 md:py-36">

      {/* Huella de fondo — centrada, grande */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 flex items-center justify-center",
          "[--fps:rgba(90,200,255,0.10)] dark:[--fps:rgba(5,128,211,0.10)]",
          "[--fpg:rgba(90,200,255,0.03)]"
        )}
        aria-hidden="true"
      >
        <FingerprintSVG
          animate={false}
          className="w-[55vw] max-w-[520px] opacity-70"
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-landing px-6 text-center">
        <ScrollReveal direction="up">
          <BrandLines animated centered className="mx-auto mb-8" />
          <div className="font-condensed font-black uppercase leading-[0.88] tracking-tight text-clamp-pivot">
            <span className="block text-[var(--t1)]">{data.pivotPre}</span>
            <span className="block text-[var(--p1)]">{data.pivotAccent1}</span>
            <span className="mt-2 block text-[var(--t2)] text-[0.55em] font-bold tracking-normal">
              ─
            </span>
            <span className="block text-[var(--t1)]">{data.pivotConnector}</span>
            <span className="block text-[var(--p2)]">{data.pivotAccent2}</span>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

// ── JourneyStepRow ────────────────────────────────────────────────────────────
// Paso vertical con círculo numerado, línea conectora y contenido.

function JourneyStepRow({
  step,
  index,
  isLast,
}: {
  step: Step;
  index: number;
  isLast: boolean;
}) {
  return (
    <ScrollReveal direction="up" delay={index * 100}>
      <div className="group relative flex gap-6 pb-10">

        {/* Línea conectora vertical — excepto en el último paso */}
        {!isLast && (
          <div className="absolute bottom-0 left-[21px] top-11 w-[1px] bg-[var(--p2)]/20" />
        )}

        {/* Círculo numerado */}
        <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--p2)]/30 bg-[var(--bg2)] transition-all duration-300 group-hover:border-[var(--p2)] group-hover:bg-[var(--p2)]/10 group-hover:shadow-[0_0_16px_rgba(125,232,168,0.2)]">
          <span className="font-condensed text-sm font-black leading-none text-[var(--p2)]">
            {step.step}
          </span>
        </div>

        {/* Texto */}
        <div className="pt-2">
          <h4 className="mb-1 font-condensed text-[12px] font-bold uppercase tracking-[3px] text-[var(--t1)] transition-colors duration-300 group-hover:text-[var(--p2)]">
            {step.title}
          </h4>
          <p className="font-sans text-sm leading-relaxed text-[var(--t2)]">
            {step.description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

// ── JourneySection ────────────────────────────────────────────────────────────

function JourneySection({ data }: { data: ProblemData }) {
  return (
    <div className="bg-[var(--bg2)] py-24 md:py-32">
      <div className="mx-auto max-w-landing px-6">

        {/* Cabecera */}
        <ScrollReveal direction="up" className="mb-16 max-w-xl">
          <BrandLines animated className="mb-5 [--bl-color:var(--p2)]" />
          <p className="mb-4 font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p2)]">
            {data.journeyLabel}
          </p>
          <h2 className="font-condensed font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)] text-clamp-journey">
            {data.journeyHeadlinePre}{" "}
            <span className="text-[var(--p2)]">{data.journeyHeadlineAccent}</span>
          </h2>
        </ScrollReveal>

        {/* Split: huella + pasos */}
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">

          {/* Huella — sticky en desktop */}
          <div className="lg:sticky lg:top-32">
            <div
              className={cn(
                "relative flex h-[300px] items-center justify-center lg:h-[480px]",
                "[--fps:rgba(125,232,168,0.32)] dark:[--fps:rgba(12,210,94,0.32)]",
                "[--fpg:rgba(125,232,168,0.08)] dark:[--fpg:rgba(12,210,94,0.08)]"
              )}
            >
              <FingerprintSVG
                animate={true}
                className="w-full max-w-[340px] drop-shadow-[0_0_48px_rgba(125,232,168,0.18)]"
              />
              <p className="absolute bottom-2 left-1/2 -translate-x-1/2 font-condensed text-[9px] font-bold uppercase tracking-[5px] text-[var(--p2)]/40">
                {data.journeyFingerLabel}
              </p>
            </div>
          </div>

          {/* Pasos */}
          <div className="pt-2">
            {data.journey.map((step, i) => (
              <JourneyStepRow
                key={step.step}
                step={step}
                index={i}
                isLast={i === data.journey.length - 1}
              />
            ))}

            <ScrollReveal direction="up" delay={data.journey.length * 100 + 40}>
              <a
                href={data.journeyCtaHref}
                className={cn(
                  "mt-4 inline-flex items-center gap-3",
                  "bg-[var(--btn-bg)] px-7 py-3.5",
                  "font-condensed text-sm font-bold uppercase tracking-[3px] text-[var(--btn-t)]",
                  "transition-opacity duration-200 hover:opacity-80"
                )}
              >
                {data.journeyCta} →
              </a>
            </ScrollReveal>
          </div>
        </div>

      </div>
    </div>
  );
}

// ── Sección principal ─────────────────────────────────────────────────────────

interface ProblemSectionProps {
  audience?: "deportista" | "profesional";
}

export default function ProblemSection({ audience = "deportista" }: ProblemSectionProps) {
  const data = audience === "profesional" ? PROFESSIONAL_PROBLEM : PROBLEM;

  return (
    <section id="problem" className="overflow-hidden">

      {/* ── Diagnóstico ── */}
      <div className="bg-[var(--bg2)] pb-24 pt-24 md:pb-28 md:pt-32">
        <div className="mx-auto max-w-landing px-6">

          <div className="mb-24 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

            <ScrollReveal direction="up">
              <p className="mb-4 font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
                {data.eyebrow}
              </p>
              <h2 className="mb-8 font-condensed font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)] text-clamp-problem">
                {data.headline}{" "}
                <span className="text-[var(--p1)]">{data.headlineAccent}</span>
              </h2>
              <blockquote
                className="max-w-lg font-sans text-base leading-[1.85] text-[var(--t2)] [&_strong]:font-semibold [&_strong]:text-[var(--t1)]"
                dangerouslySetInnerHTML={{ __html: data.quote }}
              />
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <div
                className={cn(
                  "relative flex h-[280px] items-center justify-center overflow-hidden lg:h-[360px]",
                  "[--fps:rgba(90,200,255,0.14)] dark:[--fps:rgba(5,128,211,0.14)]",
                  "[--fpg:rgba(90,200,255,0.04)]"
                )}
                aria-hidden="true"
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-l from-transparent via-transparent to-[var(--bg2)] opacity-0 lg:opacity-100" />
                <FingerprintSVG animate={false} className="w-full max-w-[320px] translate-x-8 opacity-50 lg:translate-x-16" />
              </div>
            </ScrollReveal>
          </div>

          {/* Grid 4 problemas */}
          <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {data.problems.map((problem, i) => (
              <ProblemCard key={problem.number} problem={problem} index={i} />
            ))}
          </div>

        </div>
      </div>

      {/* ── Pivot ── */}
      <PivotStrip data={data} />

      {/* ── Journey ── */}
      <JourneySection data={data} />

    </section>
  );
}
