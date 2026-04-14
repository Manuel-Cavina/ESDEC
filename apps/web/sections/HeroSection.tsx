"use client";

// sections/HeroSection.tsx
// Hero split-screen ESDEC — two audience entries with shared marketplace framing.

import { useRef, useState } from "react";
import { HERO_SPLIT } from "@/content/landing";
import BrandLines from "@/components/BrandLines";
import FingerprintSVG from "@/components/FingerprintSVG";
import { cn } from "@/lib/utils";

type Audience = "deportista" | "profesional";
type HoveredSide = "left" | "right" | null;

interface CursorPos {
  x: number;
  y: number;
}

interface HeroSectionProps {
  onSelect: (audience: Audience) => void;
}

export default function HeroSection({ onSelect }: HeroSectionProps) {
  const [hovered, setHovered] = useState<HoveredSide>(null);
  const [cursorL, setCursorL] = useState<CursorPos | null>(null);
  const [cursorR, setCursorR] = useState<CursorPos | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const particleContainerRef = useRef<HTMLDivElement>(null);
  const sharedState =
    hovered === "left" ? "is-left" : hovered === "right" ? "is-right" : "";

  function spawnParticles(x: number, y: number, color: string) {
    const container = particleContainerRef.current;
    if (!container) return;

    for (let index = 0; index < 22; index += 1) {
      const element = document.createElement("div");
      element.className = "particle";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      element.style.backgroundColor = color;

      const angle = (index / 22) * Math.PI * 2;
      const distance = 40 + Math.random() * 90;

      element.style.setProperty("--px", `${Math.cos(angle) * distance}px`);
      element.style.setProperty("--py", `${Math.sin(angle) * distance}px`);
      element.style.animationDelay = `${Math.random() * 80}ms`;

      container.appendChild(element);
      window.setTimeout(() => element.remove(), 900);
    }
  }

  function handleSelect(audience: Audience, event: React.MouseEvent) {
    const color =
      audience === "deportista"
        ? "var(--hero-left-accent)"
        : "var(--hero-right-accent)";
    spawnParticles(event.clientX, event.clientY, color);

    window.setTimeout(() => {
      heroRef.current?.classList.add("hero-split-exit");
    }, 200);

    window.setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.style.display = "none";
      }

      onSelect(audience);
    }, 1000);
  }

  const leftFlex =
    hovered === "right"
      ? "0 0 32%"
      : hovered === "left"
        ? "0 0 68%"
        : "0 0 50%";
  const rightFlex =
    hovered === "left"
      ? "0 0 32%"
      : hovered === "right"
        ? "0 0 68%"
        : "0 0 50%";

  function handleMouseMoveLeft(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const rect = event.currentTarget.getBoundingClientRect();
    setCursorL({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  }

  function handleMouseMoveRight(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const rect = event.currentTarget.getBoundingClientRect();
    setCursorR({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  }

  return (
    <section
      ref={heroRef}
      id="hero-split"
      className="fixed inset-0 z-50 flex flex-col overflow-hidden md:flex-row"
    >
      <div
        className={cn("pointer-events-none absolute inset-y-0 left-1/2 z-20 hidden md:block hero-center-axis", sharedState)}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[340px] hero-shared-atmosphere"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute left-1/2 top-[8vh] z-30 w-full max-w-[920px] -translate-x-1/2 px-5 md:px-8">
        <div
          className={cn(
            "hero-shared-shell mx-auto flex max-w-[780px] flex-col items-center text-center",
            sharedState
          )}
        >
          <div className="mb-5 flex items-center gap-2">
            <div
              className="flex items-center gap-2"
              style={{ "--bl-color": "var(--hero-left-accent)" } as React.CSSProperties}
            >
              <BrandLines size="sm" />
              <span className="font-condensed text-sm font-black uppercase tracking-[3px] text-white">
                ESDEC
              </span>
            </div>
          </div>

          <div className="hero-shared-copy w-full text-center">
            <p className="font-condensed text-[10px] font-bold uppercase tracking-[4px] text-white/60">
              {HERO_SPLIT.sharedEyebrow}
            </p>
            <h1 className="mt-4 font-condensed text-[clamp(30px,4vw,60px)] font-black uppercase leading-[0.9] tracking-tight text-white">
              <span className="block">{HERO_SPLIT.sharedHeadlinePre}</span>
              <span className="hero-shared-accent block">
                {HERO_SPLIT.sharedHeadlineAccent}
              </span>
              <span className="block text-white/84">
                {HERO_SPLIT.sharedHeadlinePost}
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl font-sans text-sm leading-[1.8] text-white/76 md:text-[15px]">
              {HERO_SPLIT.sharedBody}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {HERO_SPLIT.sharedPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/12 bg-white/4 px-3.5 py-1.5 font-condensed text-[10px] font-bold uppercase tracking-[3px] text-white/66"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative h-[50vh] cursor-pointer overflow-hidden md:h-full"
        style={{
          flex: leftFlex,
          transition: "flex 0.6s cubic-bezier(.77,0,.175,1)",
        }}
        onMouseEnter={() => setHovered("left")}
        onMouseLeave={() => {
          setHovered(null);
          setCursorL(null);
        }}
        onMouseMove={handleMouseMoveLeft}
        onClick={(event) => handleSelect("deportista", event)}
      >
        <img
          src={HERO_SPLIT.left.image}
          alt=""
          draggable={false}
          className="hero-panel-image absolute inset-0 h-full w-full select-none object-cover object-center pointer-events-none"
          style={{
            transform: hovered === "left" ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.6s cubic-bezier(.77,0,.175,1)",
          }}
        />
        <div className="hero-panel-tint hero-panel-tint-left absolute inset-0" />
        <div className="hero-panel-film hero-panel-film-left absolute inset-0" />
        <div
          className="absolute inset-0 bg-black"
          style={{
            opacity: hovered === "right" ? 0.18 : 0,
            transition: "opacity 0.6s cubic-bezier(.77,0,.175,1)",
          }}
        />

        {cursorL && (
          <div
            className="pointer-events-none absolute inset-0 z-[5]"
            style={{
              background: `radial-gradient(420px circle at ${cursorL.x}px ${cursorL.y}px, rgba(var(--hero-left-rgb), 0.1) 0%, transparent 72%)`,
              transition: "background 0.08s ease",
            }}
          />
        )}

        <div className="relative z-10 flex h-full flex-col justify-end px-8 pb-14 pt-44 md:px-12 md:pb-20 md:pt-52 lg:px-16">
          <div className="mb-5 flex items-center gap-3">
            <div
              className="h-px w-7 flex-shrink-0"
              style={{ backgroundColor: "var(--hero-left-accent)" }}
            />
            <span
              className="font-condensed text-[11px] font-bold uppercase tracking-[3px]"
              style={{ color: "var(--hero-left-accent)" }}
            >
              {HERO_SPLIT.left.eyebrow}
            </span>
          </div>

          <h2
            className="font-condensed text-white"
            style={{ fontSize: "clamp(42px, 6vw, 92px)", lineHeight: "1.0" }}
          >
            <span className="block font-black">{HERO_SPLIT.left.headlinePre}</span>
            <span
              className="block font-black"
              style={{ color: "var(--hero-left-accent)" }}
            >
              {HERO_SPLIT.left.headlineAccent}
            </span>
          </h2>

          <p className="mt-5 max-w-[360px] font-sans text-sm leading-[1.75] text-white/76">
            {HERO_SPLIT.left.body}
          </p>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handleSelect("deportista", event);
            }}
            className={cn(
              "relative mt-8 inline-flex w-fit items-center gap-2 overflow-hidden rounded-md",
              "px-7 py-[11px] font-condensed text-[13px] font-bold uppercase tracking-wide",
              "transition-all duration-200 hover:-translate-y-px hover:brightness-110",
              "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-400 hover:before:translate-x-full"
            )}
            style={{
              backgroundColor: "var(--hero-left-button)",
              color: "var(--hero-left-button-text)",
            }}
          >
            {HERO_SPLIT.left.cta}
          </button>
        </div>

        <div
          className="pointer-events-none absolute bottom-0 right-0 h-44 w-36"
          style={{
            opacity: 0.08,
            ["--fps" as string]: "rgba(255,255,255,0.8)",
            ["--fpg" as string]: "rgba(255,255,255,0.02)",
          }}
        >
          <FingerprintSVG animate={false} className="h-full w-full" />
        </div>
      </div>

      <div className="z-10 hidden h-full w-px flex-shrink-0 self-stretch bg-white/20 md:block" />

      <div
        className="relative h-[50vh] cursor-pointer overflow-hidden md:h-full"
        style={{
          flex: rightFlex,
          transition: "flex 0.6s cubic-bezier(.77,0,.175,1)",
        }}
        onMouseEnter={() => setHovered("right")}
        onMouseLeave={() => {
          setHovered(null);
          setCursorR(null);
        }}
        onMouseMove={handleMouseMoveRight}
        onClick={(event) => handleSelect("profesional", event)}
      >
        <img
          src={HERO_SPLIT.right.image}
          alt=""
          draggable={false}
          className="hero-panel-image absolute inset-0 h-full w-full select-none object-cover object-center pointer-events-none"
          style={{
            transform: hovered === "right" ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.6s cubic-bezier(.77,0,.175,1)",
          }}
        />
        <div className="hero-panel-tint hero-panel-tint-right absolute inset-0" />
        <div className="hero-panel-film hero-panel-film-right absolute inset-0" />
        <div
          className="absolute inset-0 bg-black"
          style={{
            opacity: hovered === "left" ? 0.2 : 0,
            transition: "opacity 0.6s cubic-bezier(.77,0,.175,1)",
          }}
        />

        {cursorR && (
          <div
            className="pointer-events-none absolute inset-0 z-[5]"
            style={{
              background: `radial-gradient(420px circle at ${cursorR.x}px ${cursorR.y}px, rgba(var(--hero-right-rgb), 0.13) 0%, transparent 72%)`,
              transition: "background 0.08s ease",
            }}
          />
        )}

        <div className="relative z-10 flex h-full flex-col items-end justify-end px-8 pb-14 pt-44 text-right md:px-12 md:pb-20 md:pt-52 lg:px-16">
          <div className="mb-5 flex items-center gap-3">
            <span
              className="font-condensed text-[11px] font-bold uppercase tracking-[3px]"
              style={{ color: "var(--hero-right-accent)" }}
            >
              {HERO_SPLIT.right.eyebrow}
            </span>
            <div
              className="h-px w-7 flex-shrink-0"
              style={{ backgroundColor: "var(--hero-right-accent)" }}
            />
          </div>

          <h2
            className="font-condensed text-white"
            style={{ fontSize: "clamp(42px, 6vw, 92px)", lineHeight: "1.0" }}
          >
            <span className="block font-black">{HERO_SPLIT.right.headlinePre}</span>
            <span
              className="block font-black"
              style={{ color: "var(--hero-right-accent)" }}
            >
              {HERO_SPLIT.right.headlineAccent}
            </span>
          </h2>

          <p className="mt-5 max-w-[360px] font-sans text-sm leading-[1.75] text-white/76">
            {HERO_SPLIT.right.body}
          </p>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handleSelect("profesional", event);
            }}
            className={cn(
              "relative mt-8 inline-flex w-fit items-center gap-2 overflow-hidden rounded-md",
              "px-7 py-[11px] font-condensed text-[13px] font-bold uppercase tracking-wide",
              "transition-all duration-200 hover:-translate-y-px hover:brightness-110",
              "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/15 before:to-transparent before:transition-transform before:duration-400 hover:before:translate-x-full"
            )}
            style={{
              backgroundColor: "var(--hero-right-button)",
              color: "var(--hero-right-button-text)",
            }}
          >
            {HERO_SPLIT.right.cta}
          </button>
        </div>

        <div
          className="pointer-events-none absolute bottom-0 left-0 h-44 w-36"
          style={{
            opacity: 0.07,
            ["--fps" as string]: "rgba(var(--hero-right-rgb), 0.8)",
            ["--fpg" as string]: "rgba(var(--hero-right-rgb), 0.03)",
          }}
        >
          <FingerprintSVG animate={false} className="h-full w-full" />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="font-condensed text-[10px] font-bold uppercase tracking-[5px] text-white/35">
          {HERO_SPLIT.dividerText}
        </span>
        <div className="h-7 w-px animate-scroll-down bg-gradient-to-b from-white/35 to-transparent" />
      </div>

      <div
        ref={particleContainerRef}
        className="pointer-events-none fixed inset-0 z-[9999]"
      />
    </section>
  );
}
