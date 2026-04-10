"use client";

// ─────────────────────────────────────────────────────────────────────────────
// sections/HeroSection.tsx
// Hero de ESDEC — MVP 0
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from "react";
import { HERO } from "@/content/landing";
import FingerprintSVG from "@/components/FingerprintSVG";
import AthleteCard from "@/components/AthleteCard";
import PingDot from "@/components/PingDot";
import PillarChip from "@/components/PillarChip";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        id="hero"
        className={cn(
          "relative min-h-screen flex flex-col justify-center overflow-hidden",
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

        {/* Huella SVG flotante */}
        <div
          className={cn(
            "absolute right-[-2%] top-1/2 -translate-y-1/2",
            "w-[52%] max-w-[660px] pointer-events-none z-[1]",
            "animate-fp-float",
            "[--fps:rgba(90,200,255,0.22)] dark:[--fps:rgba(5,128,211,0.22)]",
            "[--fpg:rgba(90,200,255,0.06)] dark:[--fpg:rgba(5,128,211,0.05)]",
            "hidden lg:block"
          )}
        >
          <FingerprintSVG animate={mounted} className="w-full h-full" />
        </div>

        {/* Hero content */}
        <div className="relative z-[2] px-16 pt-[130px] pb-20 max-w-[680px]">

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

          {/* 3 líneas del logo — animación de entrada */}
          <div className="flex flex-col gap-[5px] mb-[18px]">
            {[
              { w: "72px", ml: "0px",  delay: "500ms" },
              { w: "54px", ml: "7px",  delay: "650ms" },
              { w: "38px", ml: "14px", delay: "800ms" },
            ].map((line, i) => (
              <div
                key={i}
                className={cn(
                  "h-1 rounded-sm bg-[var(--p1)]",
                  "opacity-0 animate-line-draw [animation-fill-mode:forwards]"
                )}
                style={{
                  width: 0,
                  marginLeft: line.ml,
                  animationDelay: line.delay,
                  ["--target" as string]: line.w,
                }}
              />
            ))}
          </div>

          {/* Headline */}
          <h1
            className="font-condensed font-black text-white leading-[1.0] tracking-[-1px] mb-5 animate-glitch"
            style={{ fontSize: "clamp(44px, 7.5vw, 110px)" }}
          >
            {[HERO.headlineLine1, HERO.headlineLine2, HERO.headlineLine3].map((line, i) => (
              <span
                key={i}
                className={cn("block", "opacity-0 animate-stamp [animation-fill-mode:forwards]")}
                style={{ animationDelay: `${900 + i * 100}ms` }}
              >
                {line}
              </span>
            ))}
            <span
              className={cn("block text-[var(--p1)]", "opacity-0 animate-stamp [animation-fill-mode:forwards]")}
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

        {/* Athlete card */}
        <div
          className={cn(
            "absolute right-16 top-1/2 -translate-y-1/2",
            "z-[3] w-[380px]",
            "hidden xl:block",
            "opacity-0 animate-fade-up [animation-delay:800ms] [animation-fill-mode:forwards]"
          )}
        >
        </div>
      </section>
    </>
  );
}
