"use client";

// ─────────────────────────────────────────────────────────────────────────────
// sections/AboutSection.tsx
// Quiénes somos — ESDEC MVP 0
//
// Animaciones:
//   · MVV rows: spring slide desde la derecha via IntersectionObserver + JS
//   · Val-cards: cascade con ScrollReveal
//   · Card hover: accent line top (spec-card-accent) + border cyan
//   · Logo 3-line mark como acento en cada val-card
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react";
import { ABOUT, PROFESSIONAL_ABOUT } from "@/content/landing";
import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

type Audience = "deportista" | "profesional";

// ── Líneas del logo en miniatura (ADN visual)
function LogoMark({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-[4px]", className)}>
      <div className="h-[3px] w-[22px] rounded-sm bg-[var(--p1)]" />
      <div className="h-[3px] w-[16px] rounded-sm bg-[var(--p1)] ml-[3px]" />
      <div className="h-[3px] w-[11px] rounded-sm bg-[var(--p1)] ml-[6px]" />
    </div>
  );
}

// ── Val-card derecha
function ValCard({ title, description }: { title: string; description: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        "p-6 rounded-xl",
        "bg-[var(--card-bg)] border border-[var(--card-bd)]",
        "transition-all duration-300",
        "hover:border-[var(--p1)] hover:bg-[var(--card-bg2)]",
        "spec-card-accent"
      )}
    >
      <LogoMark className="mb-4 opacity-80" />
      <h4 className="font-condensed font-bold text-[18px] uppercase tracking-wide text-[var(--t1)] mb-2">
        {title}
      </h4>
      <p className="font-sans text-sm text-[var(--t2)] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

// ── MVV Row (Visión / Misión / Objetivo)
function MvvRow({
  tag,
  text,
  rowRef,
}: {
  tag: string;
  text: string;
  rowRef: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div
      ref={rowRef}
      className="flex gap-4 py-5 border-b border-[var(--bd)] last:border-b-0"
      style={{ opacity: 0, transform: "translateX(48px)", transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(.22,1,.36,1)" }}
    >
      {/* Tag pill */}
      <span
        className={cn(
          "flex-shrink-0 self-start mt-0.5",
          "font-condensed font-bold text-[11px] uppercase tracking-[2px]",
          "px-2.5 py-[3px] rounded-full",
          "border border-[var(--p1)]/40 text-[var(--p1)]",
          "bg-[var(--p1)]/10"
        )}
      >
        {tag}
      </span>
      {/* Body con HTML */}
      <p
        className="font-sans text-sm text-[var(--t2)] leading-relaxed [&_strong]:text-[var(--t1)] [&_strong]:font-semibold"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
}

interface AboutSectionProps {
  audience?: Audience;
}

export default function AboutSection({ audience = "deportista" }: AboutSectionProps) {
  const data = audience === "profesional" ? PROFESSIONAL_ABOUT : ABOUT;
  const mvvRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const idx = Number(el.dataset.mvvIdx ?? 0);
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateX(0)";
            }, idx * 120);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    mvvRefs.current.forEach((el, i) => {
      if (el) {
        el.dataset.mvvIdx = String(i);
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      data-section="about"
      className="bg-[var(--sec-bg)] py-24 px-6 lg:px-16 overflow-hidden"
    >
      <div className="max-w-landing mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* ── Columna izquierda: headline + MVV ── */}
        <div>
          {/* Eyebrow */}
          <ScrollReveal direction="up" delay={0}>
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="inline-block w-[7px] h-[7px] rounded-full bg-[var(--p1)] animate-ping-dot flex-shrink-0" />
              <span className="font-sans text-[11px] font-semibold tracking-[3px] uppercase text-[var(--p1)]">
                {data.eyebrow}
              </span>
            </div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal direction="up" delay={80}>
            <h2
              className="font-condensed font-black uppercase leading-[0.95] tracking-[-1px] text-[var(--t1)] mb-10"
              style={{ fontSize: "clamp(52px, 7vw, 100px)" }}
            >
              {data.headline.map((word, i) =>
                i === data.headlineAccentIndex ? (
                  <span
                    key={i}
                    className="block"
                    style={{
                      background: "linear-gradient(90deg, var(--p1), var(--p2))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {word}
                  </span>
                ) : (
                  <span key={i} className="block">
                    {word}
                  </span>
                )
              )}
            </h2>
          </ScrollReveal>

          {/* MVV Rows — spring slide desde la derecha */}
          <div>
            {data.mvv.map((item, i) => (
              <MvvRow
                key={item.tag}
                tag={item.tag}
                text={item.text}
                rowRef={(el) => { mvvRefs.current[i] = el; }}
              />
            ))}
          </div>
        </div>

        {/* ── Columna derecha: val-cards ── */}
        <div>
          <ScrollReveal direction="up" delay={160}>
            <div className="inline-flex items-center gap-2 mb-7">
              <span className="font-sans text-[11px] font-semibold tracking-[3px] uppercase text-[var(--t3)]">
                {data.valuesEyebrow}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal cascade cascadeDelay={80} direction="up">
            {data.values.map((v) => (
              <ValCard key={v.title} title={v.title} description={v.description} />
            ))}
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
