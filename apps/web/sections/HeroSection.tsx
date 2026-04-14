"use client";

// sections/HeroSection.tsx
// Hero split-screen ESDEC — two audience entries with shared marketplace framing.

import { useEffect, useRef, useState } from "react";
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
  const selectionLockedRef = useRef(false);
  const selectionTimeoutRef = useRef<number | null>(null);
  const sharedState =
    hovered === "left" ? "is-left" : hovered === "right" ? "is-right" : "";

  useEffect(() => {
    return () => {
      if (selectionTimeoutRef.current !== null) {
        window.clearTimeout(selectionTimeoutRef.current);
      }
    };
  }, []);

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

  function triggerSelect(audience: Audience, x: number, y: number) {
    if (selectionLockedRef.current) return;
    selectionLockedRef.current = true;

    const color =
      audience === "deportista"
        ? "var(--hero-left-accent)"
        : "var(--hero-right-accent)";
    spawnParticles(x, y, color);

    window.setTimeout(() => {
      heroRef.current?.classList.add("hero-split-exit");
    }, 200);

    window.setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.style.display = "none";
      }

      onSelect(audience);
    }, 1000);

    selectionTimeoutRef.current = window.setTimeout(() => {
      selectionLockedRef.current = false;
      selectionTimeoutRef.current = null;
    }, 1200);
  }

  function handleClickSelect(
    audience: Audience,
    event: React.MouseEvent<HTMLElement>
  ) {
    triggerSelect(audience, event.clientX, event.clientY);
  }

  function handlePointerSelect(
    audience: Audience,
    event: React.PointerEvent<HTMLElement>
  ) {
    if (event.pointerType === "mouse") return;
    event.preventDefault();
    triggerSelect(audience, event.clientX, event.clientY);
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
      className="fixed inset-0 z-50 flex overflow-hidden"
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-1/2 z-20 hero-center-axis",
          sharedState
        )}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[340px] hero-shared-atmosphere"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute left-1/2 top-[6vh] z-30 w-full max-w-[920px] -translate-x-1/2 px-4 sm:px-5 md:top-[8vh] md:px-8">
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
            <p className="font-condensed text-[9px] font-bold uppercase tracking-[3px] text-white/60 sm:text-[10px] sm:tracking-[4px]">
              {HERO_SPLIT.sharedEyebrow}
            </p>
            <h1 className="mt-3 font-condensed text-[clamp(24px,7vw,40px)] font-black uppercase leading-[0.9] tracking-tight text-white sm:mt-4 md:text-[clamp(30px,4vw,60px)]">
              <span className="block">{HERO_SPLIT.sharedHeadlinePre}</span>
              <span className="hero-shared-accent block">
                {HERO_SPLIT.sharedHeadlineAccent}
              </span>
              <span className="block text-white/84">
                {HERO_SPLIT.sharedHeadlinePost}
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl font-sans text-[12px] leading-[1.65] text-white/76 sm:mt-5 sm:text-[13px] md:text-[15px] md:leading-[1.8]">
              {HERO_SPLIT.sharedBody}
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5 sm:mt-6 sm:gap-2 md:gap-3">
              {HERO_SPLIT.sharedPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/12 bg-white/4 px-2.5 py-1 font-condensed text-[9px] font-bold uppercase tracking-[2px] text-white/66 sm:px-3.5 sm:py-1.5 sm:text-[10px] sm:tracking-[3px]"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative h-full min-w-0 cursor-pointer touch-manipulation overflow-hidden"
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
        onPointerUp={(event) => handlePointerSelect("deportista", event)}
        onClick={(event) => handleClickSelect("deportista", event)}
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

        <div className="relative z-10 flex h-full flex-col justify-end px-4 pb-9 pt-40 sm:px-5 sm:pb-11 sm:pt-44 md:px-12 md:pb-20 md:pt-60 lg:px-16 lg:pt-64">
          <div className="mb-4 flex items-center gap-2 sm:mb-5 sm:gap-3">
            <div
              className="h-px w-5 flex-shrink-0 sm:w-7"
              style={{ backgroundColor: "var(--hero-left-accent)" }}
            />
            <span
              className="font-condensed text-[9px] font-bold uppercase tracking-[2px] sm:text-[11px] sm:tracking-[3px]"
              style={{ color: "var(--hero-left-accent)" }}
            >
              {HERO_SPLIT.left.eyebrow}
            </span>
          </div>

          <h2
            className="font-condensed text-white"
            style={{ fontSize: "clamp(22px, 5.6vw, 92px)", lineHeight: "1.0" }}
          >
            <span className="block font-black">{HERO_SPLIT.left.headlinePre}</span>
            <span
              className="block font-black"
              style={{ color: "var(--hero-left-accent)" }}
            >
              {HERO_SPLIT.left.headlineAccent}
            </span>
          </h2>

          <p className="mt-3 max-w-[170px] font-sans text-[12px] leading-[1.55] text-white/76 sm:mt-4 sm:max-w-[210px] sm:text-[13px] md:mt-5 md:max-w-[360px] md:text-sm md:leading-[1.75]">
            {HERO_SPLIT.left.body}
          </p>

          <button
            type="button"
            onPointerUp={(event) => {
              event.stopPropagation();
              handlePointerSelect("deportista", event);
            }}
            onClick={(event) => {
              event.stopPropagation();
              handleClickSelect("deportista", event);
            }}
            className={cn(
              "relative mt-5 inline-flex w-full max-w-[156px] touch-manipulation items-center justify-center gap-2 overflow-hidden rounded-md",
              "px-2.5 py-2 font-condensed text-[9px] font-bold uppercase leading-none tracking-[1.5px] sm:mt-6 sm:w-auto sm:max-w-full sm:px-4 sm:text-[11px] sm:tracking-[2px] md:mt-8 md:px-7 md:py-[11px] md:text-[13px] md:tracking-wide",
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
          className="pointer-events-none absolute bottom-0 right-0 h-28 w-24 sm:h-36 sm:w-28 md:h-44 md:w-36"
          style={{
            opacity: 0.08,
            ["--fps" as string]: "rgba(255,255,255,0.8)",
            ["--fpg" as string]: "rgba(255,255,255,0.02)",
          }}
        >
          <FingerprintSVG animate={false} className="h-full w-full" />
        </div>
      </div>

      <div className="z-10 h-full w-px flex-shrink-0 self-stretch bg-white/14 md:bg-white/20" />

      <div
        className="relative h-full min-w-0 cursor-pointer touch-manipulation overflow-hidden"
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
        onPointerUp={(event) => handlePointerSelect("profesional", event)}
        onClick={(event) => handleClickSelect("profesional", event)}
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

        <div className="relative z-10 flex h-full flex-col items-end justify-end px-4 pb-9 pt-40 text-right sm:px-5 sm:pb-11 sm:pt-44 md:px-12 md:pb-20 md:pt-60 lg:px-16 lg:pt-64">
          <div className="mb-4 flex items-center gap-2 sm:mb-5 sm:gap-3">
            <span
              className="font-condensed text-[9px] font-bold uppercase tracking-[2px] sm:text-[11px] sm:tracking-[3px]"
              style={{ color: "var(--hero-right-accent)" }}
            >
              {HERO_SPLIT.right.eyebrow}
            </span>
            <div
              className="h-px w-5 flex-shrink-0 sm:w-7"
              style={{ backgroundColor: "var(--hero-right-accent)" }}
            />
          </div>

          <h2
            className="font-condensed text-white"
            style={{ fontSize: "clamp(22px, 5.6vw, 92px)", lineHeight: "1.0" }}
          >
            <span className="block font-black">{HERO_SPLIT.right.headlinePre}</span>
            <span
              className="block font-black"
              style={{ color: "var(--hero-right-accent)" }}
            >
              {HERO_SPLIT.right.headlineAccent}
            </span>
          </h2>

          <p className="mt-3 max-w-[170px] font-sans text-[12px] leading-[1.55] text-white/76 sm:mt-4 sm:max-w-[210px] sm:text-[13px] md:mt-5 md:max-w-[360px] md:text-sm md:leading-[1.75]">
            {HERO_SPLIT.right.body}
          </p>

          <button
            type="button"
            onPointerUp={(event) => {
              event.stopPropagation();
              handlePointerSelect("profesional", event);
            }}
            onClick={(event) => {
              event.stopPropagation();
              handleClickSelect("profesional", event);
            }}
            className={cn(
              "relative mt-5 inline-flex w-full max-w-[156px] touch-manipulation items-center justify-center gap-2 overflow-hidden rounded-md",
              "px-2.5 py-2 font-condensed text-[9px] font-bold uppercase leading-none tracking-[1.5px] sm:mt-6 sm:w-auto sm:max-w-full sm:px-4 sm:text-[11px] sm:tracking-[2px] md:mt-8 md:px-7 md:py-[11px] md:text-[13px] md:tracking-wide",
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
          className="pointer-events-none absolute bottom-0 left-0 h-28 w-24 sm:h-36 sm:w-28 md:h-44 md:w-36"
          style={{
            opacity: 0.07,
            ["--fps" as string]: "rgba(var(--hero-right-rgb), 0.8)",
            ["--fpg" as string]: "rgba(var(--hero-right-rgb), 0.03)",
          }}
        >
          <FingerprintSVG animate={false} className="h-full w-full" />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
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
