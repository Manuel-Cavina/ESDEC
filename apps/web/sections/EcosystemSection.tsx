"use client";

// ─────────────────────────────────────────────────────────────────────────────
// sections/EcosystemSection.tsx
// Sección 3 — Ecosistema de especialistas.
//
// Deportista: marquee de deportes + mosaico flip cards (mismo que antes)
// Profesional: carrusel horizontal de servicios con auto-play, prev/next, dots
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { ECOSYSTEM } from "@/content/landing";
import { cn } from "@/lib/utils";

type Audience = "deportista" | "profesional";

// ── Tipo local ────────────────────────────────────────────────────────────────
interface Specialist {
  number: string;
  icon: string;
  role: string;
  title: string;
  description: string;
  tag: string;
  image: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// DEPORTISTA — flip cards en mosaico (mismo layout anterior)
// ─────────────────────────────────────────────────────────────────────────────

function FlipCard({ specialist, index, wide }: { specialist: Specialist; index: number; wide?: boolean }) {
  return (
    <ScrollReveal direction="up" delay={index * 70}>
      <div
        className={cn("flip-card group", wide ? "h-[320px] lg:h-[360px]" : "h-[280px] lg:h-[320px]")}
        style={{ perspective: "1000px" }}
      >
        <div className="flip-card-inner relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:[transform:rotateY(180deg)]">

          {/* ── Frente ── */}
          <div className="flip-card-face absolute inset-0 overflow-hidden rounded-2xl">
            <img src={specialist.image} alt="" draggable={false}
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.75)] via-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.15)]" />
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[var(--p1)] to-[var(--p2)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute right-4 top-4 font-condensed text-[11px] font-bold tracking-[3px] text-white/40">{specialist.number}</span>
            <span className={cn("absolute left-4 top-4 rounded-full border px-3 py-1 font-condensed text-[9px] font-bold uppercase tracking-[2px]",
              specialist.tag === "Core"
                ? "bg-[var(--p1)]/20 text-[var(--p1)] border-[var(--p1)]/30"
                : "bg-[var(--p2)]/20 text-[var(--p2)] border-[var(--p2)]/30"
            )}>{specialist.tag}</span>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="mb-1 font-condensed text-[10px] font-bold uppercase tracking-[3px] text-[var(--p1)]">{specialist.role}</p>
              <h3 className="font-condensed text-xl font-black uppercase leading-tight text-white">{specialist.title}</h3>
              <p className="mt-2 font-condensed text-[9px] font-bold uppercase tracking-[3px] text-white/35">Ver más →</p>
            </div>
          </div>

          {/* ── Dorso ── */}
          <div className="flip-card-back absolute inset-0 overflow-hidden rounded-2xl" style={{ transform: "rotateY(180deg)" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg3)] to-[var(--bg2)]" />
            <div className={cn("absolute inset-x-0 top-0 h-[2px]",
              specialist.tag === "Core"
                ? "bg-gradient-to-r from-[var(--p1)] to-[var(--p2)]"
                : "bg-gradient-to-r from-[var(--p2)] to-[var(--p1)]"
            )} />
            <span className="pointer-events-none absolute -bottom-2 -right-2 select-none font-condensed font-black leading-none text-white/[0.04]"
              style={{ fontSize: "clamp(80px, 12vw, 130px)" }} aria-hidden="true">{specialist.number}</span>
            <div className="relative z-10 flex h-full flex-col justify-between p-6">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--p1)]/15 text-xl">{specialist.icon}</span>
                  <div>
                    <p className="font-condensed text-[9px] font-bold uppercase tracking-[3px] text-[var(--p1)]">{specialist.role}</p>
                    <p className="font-condensed text-[15px] font-black uppercase leading-tight text-white">{specialist.title}</p>
                  </div>
                </div>
                <p className="font-sans text-sm leading-relaxed text-[var(--t2)]">{specialist.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className={cn("rounded-full px-3 py-1 font-condensed text-[9px] font-bold uppercase tracking-[2px]",
                  specialist.tag === "Core" ? "bg-[var(--p1)]/20 text-[var(--p1)]" : "bg-[var(--p2)]/20 text-[var(--p2)]"
                )}>{specialist.tag}</span>
                <button type="button" className={cn(
                  "font-condensed text-[11px] font-bold uppercase tracking-[2px] flex items-center gap-1 rounded-lg px-4 py-2 transition-all duration-200",
                  specialist.tag === "Core"
                    ? "bg-[var(--p1)] text-[var(--bg)] hover:brightness-110"
                    : "bg-[var(--p2)] text-[var(--bg)] hover:brightness-110"
                )}>Ver servicio →</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </ScrollReveal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PROFESIONAL — layout tipo showcase/editor, inspirado en la referencia
// ─────────────────────────────────────────────────────────────────────────────

function PreviewPill({
  specialist,
  active,
  onClick,
}: {
  specialist: Specialist;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-full border text-left transition-all duration-300",
        "h-[132px] w-[24px] shrink-0 sm:h-[154px] sm:w-[28px]",
        active
          ? "border-white/55 shadow-[0_0_0_1px_rgba(255,255,255,0.18),0_12px_24px_rgba(0,0,0,0.28)]"
          : "border-white/20 opacity-80 hover:border-white/40 hover:opacity-100"
      )}
      aria-label={`Ver ${specialist.role}`}
    >
      <img
        src={specialist.image}
        alt=""
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,19,0.14),rgba(5,9,19,0.72))]" />
      <span
        className={cn(
          "absolute bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white/80 bg-white/90 transition-all duration-300",
          active && "border-[var(--p1)] bg-[var(--p1)] shadow-[0_0_14px_var(--p1)]"
        )}
      />
    </button>
  );
}

function ServicesCarousel({ specialists }: { specialists: readonly Specialist[] }) {
  const [current, setCurrent] = useState(0);
  const specialist = specialists[current];
  const total = specialists.length;
  const getIndex = (offset: number) => (current + offset + total) % total;
  const leftPreviewIndexes = [getIndex(-2), getIndex(-1)];
  const rightPreviewIndexes = [getIndex(1), getIndex(2), getIndex(3)];
  const mobilePreviewIndexes = specialists.map((_, index) => index);

  return (
    <ScrollReveal direction="up" delay={80}>
      <div className="relative left-1/2 w-screen max-w-none -translate-x-1/2 px-4 sm:px-6 lg:px-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          aria-hidden="true"
          style={{
            background: [
              "radial-gradient(circle at 12% 18%, rgba(255,255,255,0.04), transparent 16%)",
              "radial-gradient(circle at 82% 10%, rgba(5,128,211,0.09), transparent 18%)",
            ].join(", "),
          }}
        />

        <div className="relative overflow-hidden rounded-[28px]">
          <div className="pointer-events-none absolute inset-0 opacity-35" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_48%)]" />
            <div className="absolute left-[8%] top-[12%] h-px w-[26%] bg-white/5" />
            <div className="absolute right-[8%] top-[18%] h-px w-[22%] bg-white/5" />
            <div className="absolute left-[14%] bottom-[28%] h-px w-[18%] bg-white/5" />
          </div>

          <div className="relative z-10 min-h-[250px] sm:min-h-[300px]">
            <div className="flex min-h-[250px] items-center justify-center gap-2 sm:min-h-[300px] sm:gap-3">
                <div className="hidden items-center gap-2 sm:gap-3 md:flex">
                  {leftPreviewIndexes.map((previewIndex) => {
                    const preview = specialists[previewIndex];
                    return (
                      <PreviewPill
                        key={`${preview.number}-left`}
                        specialist={preview}
                        active={previewIndex === current}
                        onClick={() => setCurrent(previewIndex)}
                      />
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => setCurrent(current)}
                  className="group relative w-full max-w-[980px] overflow-hidden rounded-[18px] border border-transparent bg-transparent text-left shadow-none"
                >
                  <img
                    src={specialist.image}
                    alt=""
                    draggable={false}
                    className="aspect-[2.7/1] w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.01] sm:aspect-[3.1/1]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,19,0),rgba(5,9,19,0.04)_58%,rgba(5,9,19,0.32))]" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="h-3.5 w-3.5 rounded-full border border-white/70 bg-white/85" />
                        <p className="font-sans text-[10px] text-white/90">{specialist.role}</p>
                      </div>
                      <p className="mt-1 font-sans text-[10px] text-white/55">
                        {specialist.title}
                      </p>
                    </div>
                  </div>
                </button>

                <div className="hidden items-center gap-2 sm:gap-3 md:flex">
                  {rightPreviewIndexes.map((previewIndex) => {
                    const preview = specialists[previewIndex];
                    return (
                      <PreviewPill
                        key={`${preview.number}-right`}
                        specialist={preview}
                        active={previewIndex === current}
                        onClick={() => setCurrent(previewIndex)}
                      />
                    );
                  })}
                </div>
            </div>

            <div className="absolute inset-x-0 bottom-2 flex justify-center gap-2 overflow-x-auto px-3 md:hidden">
              {mobilePreviewIndexes.map((previewIndex) => {
                const preview = specialists[previewIndex];
                return (
                  <PreviewPill
                    key={`${preview.number}-mobile`}
                    specialist={preview}
                    active={previewIndex === current}
                    onClick={() => setCurrent(previewIndex)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Sección principal
// ─────────────────────────────────────────────────────────────────────────────

interface EcosystemSectionProps {
  audience?: Audience;
}

export default function EcosystemSection({ audience = "deportista" }: EcosystemSectionProps) {
  const sportsLoop = [...ECOSYSTEM.sports, ...ECOSYSTEM.sports];
  const wideIndices = new Set([0, 5]);

  return (
    <section
      id="ecosystem"
      className={cn(
        "relative overflow-hidden bg-[var(--bg2)]",
        audience === "profesional" ? "pb-10 pt-20 md:pb-8 md:pt-24" : "py-24 md:py-32"
      )}
    >

      {/* Glow ambiental */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full opacity-15 blur-3xl"
        style={{ background: "var(--p1)" }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-landing px-6">

        {audience === "deportista" && (
          <>
            {/* ── Marquee de deportes ── */}
            <div className="group relative mb-20 overflow-hidden">
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20"
                style={{ background: "linear-gradient(to right, var(--bg2), transparent)" }} aria-hidden="true" />
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20"
                style={{ background: "linear-gradient(to left, var(--bg2), transparent)" }} aria-hidden="true" />
              <div className="flex animate-marquee gap-6 group-hover:[animation-play-state:paused]">
                {sportsLoop.map((sport, i) => (
                  <span key={i}
                    className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--card-bd)] bg-[var(--card-bg)] px-5 py-2.5 font-condensed text-sm font-bold uppercase tracking-widest text-[var(--t2)] transition-colors duration-200 hover:border-[var(--p1)]/50 hover:text-[var(--p1)]">
                    {sport}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ── Header ── */}
        <ScrollReveal
          direction="up"
          className={cn(
            "text-center",
            audience === "profesional" ? "mb-8 md:mb-10" : "mb-16"
          )}
        >
          <p className="mb-4 font-condensed text-sm font-bold uppercase tracking-[3px] text-[var(--p1)]">
            {ECOSYSTEM.eyebrow}
          </p>
          <h2 className="font-condensed font-black uppercase leading-none tracking-tight text-[var(--t1)] text-clamp-eco">
            {audience === "profesional" ? "TU RED DE" : ECOSYSTEM.headline}{" "}
            <span className="text-[var(--p1)]">
              {audience === "profesional" ? "ESPECIALISTAS." : ECOSYSTEM.headlineAccent}
            </span>
          </h2>
          <p
            className={cn(
              "mx-auto mt-4 text-base leading-relaxed text-[var(--t2)]",
              audience === "profesional" ? "max-w-2xl" : "max-w-md"
            )}
          >
            {audience === "profesional"
              ? "Los profesionales con los que vas a trabajar codo a codo dentro del ecosistema ESDEC."
              : ECOSYSTEM.body}
          </p>
        </ScrollReveal>

        {audience === "deportista" ? (
          <>
            {/* Eyebrow especialistas */}
            <ScrollReveal direction="up" className="mb-8 text-center">
              <p className="font-condensed text-sm font-bold uppercase tracking-[3px] text-[var(--p2)]">
                {ECOSYSTEM.specialistsEyebrow}
              </p>
            </ScrollReveal>

            {/* Mosaico flip cards */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {ECOSYSTEM.specialists.map((specialist, i) => (
                <div key={specialist.number} className={cn(wideIndices.has(i) ? "col-span-2" : "col-span-1")}>
                  <FlipCard specialist={specialist as Specialist} index={i} wide={wideIndices.has(i)} />
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Carrusel de servicios para profesional */
          <ServicesCarousel specialists={ECOSYSTEM.specialists as unknown as Specialist[]} />
        )}

      </div>
    </section>
  );
}
