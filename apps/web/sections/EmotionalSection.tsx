"use client";

// ─────────────────────────────────────────────────────────────────────────────
// sections/EmotionalSection.tsx
// Sección 4 — Narrativa emocional en 3 beats.
//
// Beat 1: copy izq + huella estática derecha. Wipe-in en headline.
// Beat 2: huella animada izq + copy derecha. Wipe-in en headline.
// Beat 3: imagen parallax de fondo + copy centrado + huella heartbeat.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import BrandLines from "@/components/BrandLines";
import FingerprintSVG from "@/components/FingerprintSVG";
import { EMOTIONAL, PROFESSIONAL_EMOTIONAL } from "@/content/landing";
import { cn } from "@/lib/utils";

type Audience = "deportista" | "profesional";
type BeatsData = typeof EMOTIONAL | typeof PROFESSIONAL_EMOTIONAL;
type BeatItem = BeatsData["beats"][number];

function BeatCounter({ n }: { n: string }) {
  return (
    <span className="font-condensed text-[11px] font-bold tracking-[4px] uppercase text-[var(--p1)]/50">
      {n}
    </span>
  );
}

// ── Hook: detecta entrada al viewport y activa animación una sola vez ─────────
function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── Beat 1 ────────────────────────────────────────────────────────────────────
function Beat1({ beat }: { beat: BeatItem }) {
  const { ref, inView } = useInView(0.25);

  return (
    <div className="bg-[var(--bg)] py-28 md:py-36">
      <div className="mx-auto max-w-landing px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div ref={ref}>
            <ScrollReveal direction="up" delay={0}>
              <BeatCounter n="01" />
              <p className="mt-3 mb-4 font-condensed text-xs font-bold uppercase tracking-[3px] text-[var(--t3)]">
                {beat.eyebrow}
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={60}>
              <BrandLines animated className="mb-6" />
              <h2 className="font-condensed font-black uppercase leading-[0.95] tracking-[-1px] text-[var(--t1)] text-clamp-beat">
                <span className={cn("block clip-hidden-right", inView && "animate-wipe-left")} style={{ animationDelay: "0.1s" }}>
                  {beat.headlinePre}
                </span>
                <span className={cn("block text-[var(--p1)] clip-hidden-right", inView && "animate-wipe-left")} style={{ animationDelay: "0.28s" }}>
                  {beat.headlineAccent}
                </span>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={160}>
              <p className="mt-6 max-w-md font-sans text-base leading-[1.75] text-[var(--t2)]">
                {beat.body}
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={120}>
            <div className={cn(
              "relative flex items-center justify-center h-[320px] lg:h-[400px]",
              "[--fps:rgba(90,200,255,0.18)] dark:[--fps:rgba(5,128,211,0.18)]",
              "[--fpg:rgba(90,200,255,0.04)] dark:[--fpg:rgba(5,128,211,0.04)]"
            )}>
              <FingerprintSVG animate={false} className="w-full max-w-[340px] opacity-35" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

// ── Beat 2 ────────────────────────────────────────────────────────────────────
function Beat2({ beat }: { beat: BeatItem }) {
  const { ref, inView } = useInView(0.25);

  return (
    <div className="bg-[var(--bg2)] py-28 md:py-36">
      <div className="mx-auto max-w-landing px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <ScrollReveal direction="up" delay={60}>
            <div className={cn(
              "relative flex items-center justify-center h-[320px] lg:h-[400px]",
              "[--fps:rgba(125,232,168,0.22)] dark:[--fps:rgba(12,210,94,0.22)]",
              "[--fpg:rgba(125,232,168,0.05)] dark:[--fpg:rgba(12,210,94,0.05)]"
            )}>
              <FingerprintSVG animate={false} className="w-full max-w-[340px] animate-fp-morph opacity-55" />
            </div>
          </ScrollReveal>

          <div ref={ref}>
            <ScrollReveal direction="up" delay={0}>
              <BeatCounter n="02" />
              <p className="mt-3 mb-4 font-condensed text-xs font-bold uppercase tracking-[3px] text-[var(--t3)]">
                {beat.eyebrow}
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={60}>
              <BrandLines animated className="mb-6 [--bl-color:var(--p2)]" />
              <h2 className="font-condensed font-black uppercase leading-[0.95] tracking-[-1px] text-[var(--t1)] text-clamp-beat">
                <span className={cn("block clip-hidden-right", inView && "animate-wipe-left")} style={{ animationDelay: "0.1s" }}>
                  {beat.headlinePre}
                </span>
                <span className={cn("block text-[var(--p2)] clip-hidden-right", inView && "animate-wipe-left")} style={{ animationDelay: "0.3s" }}>
                  {beat.headlineAccent}
                </span>
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

// ── Beat 3 ────────────────────────────────────────────────────────────────────
function Beat3({ beat, image }: { beat: BeatItem; image: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const { ref: wipeRef, inView } = useInView(0.2);

  // Parallax suave
  useEffect(() => {
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return;
    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const ratio = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      img.style.transform = `translateY(${ratio * 40}px) scale(1.08)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-[var(--bg)]" style={{ minHeight: "62vh" }}>
      {/* Imagen con parallax */}
      <img
        ref={imgRef}
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center will-change-transform opacity-40 brightness-125"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-black/20" />

      {/* Huella heartbeat de fondo */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center [--fps:rgba(90,200,255,0.10)] [--fpg:rgba(90,200,255,0.03)]"
        aria-hidden="true"
      >
        <FingerprintSVG animate={false} className="w-[55vw] max-w-[480px] animate-heartbeat" />
      </div>

      {/* Copy centrado */}
      <div ref={wipeRef} className="relative z-10 flex min-h-[62vh] flex-col items-center justify-center px-6 py-24 text-center">
        <ScrollReveal direction="up" delay={0}>
          <BeatCounter n="03" />
          <p className="mt-3 mb-4 font-condensed text-xs font-bold uppercase tracking-[3px] text-white/70">
            {beat.eyebrow}
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={80}>
          <BrandLines animated centered className="mx-auto mb-6" />
          <h2 className="font-condensed font-black uppercase leading-[0.95] tracking-[-1px] text-white text-clamp-beat-lg">
            <span className={cn("block clip-hidden-right", inView && "animate-wipe-left")} style={{ animationDelay: "0.05s" }}>
              {beat.headlinePre}
            </span>
            <span className={cn("block text-[var(--p1)] clip-hidden-right", inView && "animate-wipe-left")} style={{ animationDelay: "0.22s" }}>
              {beat.headlineAccent}
            </span>
            {beat.headlineSub && (
              <span className={cn("block text-white/70 text-[0.55em] mt-3 clip-hidden-right", inView && "animate-wipe-left")} style={{ animationDelay: "0.4s" }}>
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
