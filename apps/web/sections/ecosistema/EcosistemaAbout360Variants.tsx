"use client";

// sections/ecosistema/EcosistemaAbout360Variants.tsx
// 3 variantes para "ESDEC Integral 360" con el círculo orbit integrado.

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import BrandLines from "@/components/BrandLines";
import ScrollReveal from "@/components/ScrollReveal";
import StickerIcon from "@/components/StickerIcon";
import FingerprintSVG from "@/components/FingerprintSVG";
import { ECOSISTEMA_ABOUT, ECOSISTEMA_ECOSYSTEM } from "@/content/ecosistema";

// ─── Utilidades del círculo ───────────────────────────────────────────────────
function pillarXY(angle: number, radius: number, center: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: center + radius * Math.cos(rad), y: center + radius * Math.sin(rad) };
}

// ─── Componente orbit reutilizable ────────────────────────────────────────────
interface OrbitCircleProps {
  size?: number;
  orbit?: number;
  centerSize?: number;
  /** Si true, la línea se dibuja al entrar al viewport */
  drawOnScroll?: boolean;
}

function OrbitCircle({ size = 560, orbit = 210, centerSize = 180, drawOnScroll = true }: OrbitCircleProps) {
  const { pillars, centerLabel, centerTagline } = ECOSISTEMA_ECOSYSTEM;
  const [activeId, setActiveId] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const drawn = useRef(false);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const lines = Array.from(svg.querySelectorAll<SVGLineElement>(".eco-line"));
    lines.forEach((l) => {
      const x1 = +l.getAttribute("x1")!; const y1 = +l.getAttribute("y1")!;
      const x2 = +l.getAttribute("x2")!; const y2 = +l.getAttribute("y2")!;
      const len = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
      l.style.strokeDasharray = String(len);
      l.style.strokeDashoffset = String(len);
    });

    if (!drawOnScroll) {
      setTimeout(() => {
        lines.forEach((l, i) => setTimeout(() => {
          l.style.transition = "stroke-dashoffset 0.9s cubic-bezier(0.22,1,0.36,1)";
          l.style.strokeDashoffset = "0";
        }, i * 120), 300);
      }, 0);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !drawn.current) {
        drawn.current = true;
        lines.forEach((l, i) => setTimeout(() => {
          l.style.transition = "stroke-dashoffset 0.9s cubic-bezier(0.22,1,0.36,1)";
          l.style.strokeDashoffset = "0";
        }, i * 120));
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    if (wrapRef.current) observer.observe(wrapRef.current);
    return () => observer.disconnect();
  }, [drawOnScroll]);

  const c = size / 2;
  const activePillar = pillars.find((p) => p.id === activeId) ?? null;

  return (
    <div ref={wrapRef} className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size, maxWidth: "100%" }}>
        {/* Anillos decorativos */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]"
          style={{ width: size - 8, height: size - 8 }} aria-hidden="true" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]"
          style={{ width: orbit * 2 + 70, height: orbit * 2 + 70 }} aria-hidden="true" />

        {/* SVG líneas */}
        <svg ref={svgRef} className="pointer-events-none absolute inset-0" width={size} height={size}
          viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
          {pillars.map((p) => {
            const { x, y } = pillarXY(p.angle, orbit, c);
            const isActive = activeId === p.id;
            return (
              <line key={p.id} className="eco-line"
                x1={c} y1={c} x2={x} y2={y}
                stroke={p.accent}
                strokeOpacity={isActive ? 0.7 : activeId ? 0.07 : 0.22}
                strokeWidth={isActive ? 1.5 : 0.8}
                style={{ transition: "stroke-opacity 0.3s ease, stroke-width 0.3s ease" }}
              />
            );
          })}
        </svg>

        {/* Centro */}
        <button
          type="button"
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/[0.14]"
          style={{
            width: centerSize, height: centerSize,
            background: "radial-gradient(circle at center, rgba(12,29,58,0.95) 0%, rgba(4,13,26,0.98) 100%)",
            boxShadow: "0 0 80px -20px rgba(90,200,255,0.25), inset 0 0 40px rgba(90,200,255,0.04)",
          }}
          onMouseEnter={() => setActiveId(null)}
          aria-label="ESDEC — ecosistema central"
        >
          <div className="absolute inset-2 animate-heartbeat rounded-full"
            style={{ "--fps": "rgba(90,200,255,0.18)", "--fpg": "rgba(90,200,255,0.03)" } as React.CSSProperties}>
            <FingerprintSVG animate={false} className="h-full w-full opacity-80" />
          </div>
          <div className="relative z-10 text-center">
            <p className="font-condensed font-black uppercase leading-none tracking-[4px] text-[var(--t1)]"
              style={{ fontSize: centerSize * 0.16 }}>
              {centerLabel}
            </p>
            <p className="mt-1 font-condensed uppercase text-[var(--p1)] opacity-50"
              style={{ fontSize: centerSize * 0.055, letterSpacing: "2px" }}>
              {centerTagline}
            </p>
          </div>
        </button>

        {/* Pilares */}
        {pillars.map((p, i) => {
          const { x, y } = pillarXY(p.angle, orbit, c);
          const isActive = activeId === p.id;
          const isDimmed = activeId !== null && !isActive;
          const nodeW = size < 400 ? 110 : 138;
          return (
            <div key={p.id} className="absolute" style={{ left: x, top: y, transform: "translate(-50%,-50%)" }}>
              <button
                type="button"
                className={`eco-pillar-node flex flex-col items-center gap-1.5 rounded-[18px] border px-3 py-3.5 text-center backdrop-blur-sm ${isActive ? "hovered" : isDimmed ? "dimmed" : ""}`}
                style={{
                  width: nodeW,
                  "--pillar-accent": p.accent,
                  borderColor: isActive ? `${p.accent}55` : `${p.accent}22`,
                  background: isActive ? "rgba(7,21,42,0.97)" : "rgba(4,13,26,0.90)",
                  animationDelay: `${i * 0.65}s`,
                } as React.CSSProperties}
                onMouseEnter={() => setActiveId(p.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                <StickerIcon name={p.icon} size="xs" />
                <p className="font-condensed text-[0.82rem] font-bold uppercase leading-none text-[var(--t1)]">
                  {p.title}
                </p>
                <p className="font-condensed text-[0.58rem] uppercase leading-[1.3] tracking-[0.5px]"
                  style={{ color: p.accent, opacity: 0.7 }}>
                  {p.kicker}
                </p>
              </button>
            </div>
          );
        })}
      </div>

      {/* Panel de detalle */}
      <div className="mt-6 h-[88px] w-full max-w-md transition-all duration-300 text-center"
        style={{ opacity: activePillar ? 1 : 0, transform: activePillar ? "translateY(0)" : "translateY(8px)" }}>
        {activePillar && (
          <>
            <p className="font-condensed text-[0.68rem] uppercase tracking-[4px]"
              style={{ color: activePillar.accent }}>
              {activePillar.kicker}
            </p>
            <p className="mt-1 font-condensed text-[1.7rem] uppercase leading-none tracking-[-0.02em] text-[var(--t1)]">
              {activePillar.title}
            </p>
            <p className="mt-1.5 font-sans text-[0.82rem] leading-[1.75] text-[var(--t2)]">
              {activePillar.description}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Variante A — Headline arriba · Círculo prominente · Grid abajo ───────────
function VariantA() {
  const { eyebrow, headlinePre, headlineAccent, headlinePost, body, closingQuote, closingLabel } = ECOSISTEMA_ABOUT;

  return (
    <div className="mx-auto max-w-landing">
      {/* Header */}
      <ScrollReveal direction="up">
        <div className="mb-14 grid gap-8 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <BrandLines size="sm" animated />
              <p className="font-condensed text-[10px] uppercase tracking-[4px] text-[var(--p1)]">{eyebrow}</p>
            </div>
            <h2 className="font-condensed text-[clamp(2.8rem,6.5vw,5.5rem)] uppercase leading-[0.84] tracking-[-0.04em] text-[var(--t1)]">
              {headlinePre}{" "}
              <span className="bg-[linear-gradient(90deg,var(--p1)_0%,var(--p2)_100%)] bg-clip-text text-transparent">
                {headlineAccent}
              </span>
              <br />{headlinePost}
            </h2>
          </div>
          <p className="font-sans text-[0.94rem] leading-[1.9] text-[var(--t2)] md:pb-2">{body}</p>
        </div>
      </ScrollReveal>

      {/* Círculo — protagonista */}
      <ScrollReveal direction="up" delay={60}>
        <div className="flex justify-center py-6">
          <OrbitCircle size={580} orbit={220} centerSize={190} />
        </div>
      </ScrollReveal>

      {/* Closing */}
      <ScrollReveal direction="up" delay={80}>
        <div className="mt-10 border-t border-white/[0.07] pt-10 text-center">
          <p className="font-condensed text-[9px] uppercase tracking-[4px] text-[var(--p2)]">{closingLabel}</p>
          <blockquote className="mx-auto mt-3 max-w-[55ch] font-condensed text-[clamp(1.2rem,2.5vw,1.8rem)] uppercase leading-[1.15] tracking-[-0.02em] text-[var(--t1)] opacity-65">
            "{closingQuote}"
          </blockquote>
        </div>
      </ScrollReveal>
    </div>
  );
}

// ─── Variante B — Split: copy izq / círculo der (sticky) ─────────────────────
function VariantB() {
  const { eyebrow, headlinePre, headlineAccent, headlinePost, body, support, closingQuote, closingLabel } = ECOSISTEMA_ABOUT;

  return (
    <div className="mx-auto max-w-landing">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">

        {/* Izquierda — copy */}
        <ScrollReveal direction="up">
          <div className="lg:sticky lg:top-24 lg:pt-8">
            <div className="mb-5 flex items-center gap-3">
              <BrandLines size="sm" animated />
              <p className="font-condensed text-[10px] uppercase tracking-[4px] text-[var(--p1)]">{eyebrow}</p>
            </div>
            <h2 className="font-condensed text-[clamp(2.6rem,5.5vw,4.8rem)] uppercase leading-[0.84] tracking-[-0.04em] text-[var(--t1)]">
              {headlinePre}{" "}
              <span className="bg-[linear-gradient(90deg,var(--p1),var(--p2))] bg-clip-text text-transparent">
                {headlineAccent}
              </span>
              <br />{headlinePost}
            </h2>
            <div className="my-6 h-px w-12 bg-[var(--bd)]" />
            <p className="max-w-[38ch] font-sans text-[0.94rem] leading-[1.9] text-[var(--t2)]">{body}</p>
            <p className="mt-3 max-w-[38ch] font-sans text-[0.86rem] leading-[1.85] text-[var(--t2)] opacity-60">{support}</p>

            <div className="mt-10 border-t border-white/[0.06] pt-6">
              <p className="font-condensed text-[9px] uppercase tracking-[3px] text-[var(--p2)]">{closingLabel}</p>
              <blockquote className="mt-2 max-w-[38ch] font-sans text-[0.84rem] italic leading-[1.8] text-[var(--t2)] opacity-55">
                "{closingQuote}"
              </blockquote>
            </div>
          </div>
        </ScrollReveal>

        {/* Derecha — círculo */}
        <ScrollReveal direction="right" delay={80}>
          <div className="flex items-center justify-center">
            <OrbitCircle size={500} orbit={188} centerSize={168} />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

// ─── Variante C — Centrado: headline · círculo · servicios grid ───────────────
function VariantC() {
  const {
    eyebrow, headlinePre, headlineAccent, headlinePost,
    body, services, closingQuote, closingLabel,
  } = ECOSISTEMA_ABOUT;

  return (
    <div className="mx-auto max-w-landing">
      {/* Header centrado */}
      <ScrollReveal direction="up">
        <div className="mb-12 text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <BrandLines size="sm" animated />
            <p className="font-condensed text-[10px] uppercase tracking-[4px] text-[var(--p1)]">{eyebrow}</p>
          </div>
          <h2 className="font-condensed text-[clamp(3rem,7vw,6rem)] uppercase leading-[0.84] tracking-[-0.04em] text-[var(--t1)]">
            {headlinePre}{" "}
            <span className="bg-[linear-gradient(90deg,var(--p1)_0%,var(--p2)_100%)] bg-clip-text text-transparent">
              {headlineAccent}
            </span>
            <br />{headlinePost}
          </h2>
          <p className="mx-auto mt-5 max-w-[44ch] font-sans text-[0.94rem] leading-[1.9] text-[var(--t2)]">{body}</p>
        </div>
      </ScrollReveal>

      {/* Círculo centrado */}
      <ScrollReveal direction="up" delay={60}>
        <div className="mb-16 flex justify-center">
          <OrbitCircle size={540} orbit={205} centerSize={180} />
        </div>
      </ScrollReveal>

      {/* Divisor */}
      <div className="mb-12 h-px bg-white/[0.06]" />

      {/* Grid servicios compacto */}
      <ScrollReveal cascade cascadeDelay={65}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group flex items-start gap-4 rounded-[20px] border border-[var(--bd)] bg-[var(--card-bg)] p-5 transition-all duration-300 hover:border-[var(--bd2)] hover:bg-[var(--card-bg2)]"
            >
              <div
                className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border"
                style={{ borderColor: `${s.accent}30`, background: `${s.accent}0c` }}
              >
                <StickerIcon name={s.icon} size="xs" />
              </div>
              <div>
                <p className="font-condensed text-[0.65rem] uppercase tracking-[2.5px] opacity-70"
                  style={{ color: s.accent }}>
                  {s.kicker}
                </p>
                <h3 className="mt-0.5 font-condensed text-[1.05rem] uppercase leading-none text-[var(--t1)]">
                  {s.title}
                </h3>
                <p className="mt-2 font-sans text-[0.79rem] leading-[1.7] text-[var(--t2)]">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Closing */}
      <ScrollReveal direction="up" delay={60}>
        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <div className="h-px w-14 bg-[var(--bd)]" />
          <p className="font-condensed text-[9px] uppercase tracking-[4px] text-[var(--p2)]">{closingLabel}</p>
          <blockquote className="max-w-[55ch] font-condensed text-[clamp(1.1rem,2.2vw,1.55rem)] uppercase leading-[1.2] tracking-[-0.01em] text-[var(--t1)] opacity-55">
            "{closingQuote}"
          </blockquote>
        </div>
      </ScrollReveal>
    </div>
  );
}

// ─── Switcher ─────────────────────────────────────────────────────────────────
const VARIANTS = [
  { id: "A", label: "A · Vertical", component: VariantA },
  { id: "B", label: "B · Split", component: VariantB },
  { id: "C", label: "C · Centrado", component: VariantC },
] as const;
type VariantId = "A" | "B" | "C";

export default function EcosistemaAbout360Variants() {
  const [active, setActive] = useState<VariantId>("A");
  const ActiveVariant = VARIANTS.find((v) => v.id === active)!.component;

  return (
    <section className="relative bg-[var(--bg2)] px-6 py-24">
      {/* Glow de fondo */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 700, height: 700,
          background: "radial-gradient(circle, rgba(90,200,255,0.06) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      {/* Picker */}
      <div className="sticky top-[72px] z-30 mb-12 flex items-center justify-center">
        <div className="flex items-center gap-1 rounded-full border border-[var(--bd)] bg-[var(--card-bg)] px-2 py-1.5 backdrop-blur-md">
          <span className="mr-2 pl-2 font-condensed text-[9px] uppercase tracking-[3px] text-[var(--p2)] opacity-50">
            ESDEC 360
          </span>
          {VARIANTS.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setActive(v.id)}
              className={`rounded-full px-4 py-1.5 font-condensed text-[11px] font-semibold uppercase tracking-[2px] transition-all duration-200 ${
                active === v.id
                  ? "bg-[var(--p2)] text-[var(--bg)]"
                  : "text-[var(--p2)]/60 hover:text-[var(--p2)]"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <ActiveVariant />
      </div>
    </section>
  );
}
