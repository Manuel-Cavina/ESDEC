"use client";

// ─────────────────────────────────────────────────────────────────────────────
// components/AthleteCard.tsx
// Card flotante del hero con barras animadas y tilt 3D al mouse.
// ─────────────────────────────────────────────────────────────────────────────

import { useRef, useEffect, useState } from "react";
import { HERO } from "@/content/landing";
import { cn } from "@/lib/utils";

interface AthleteCardProps {
  className?: string;
}

export default function AthleteCard({ className }: AthleteCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [barsVisible, setBarsVisible] = useState(false);

  // ── Barras animadas al montar
  useEffect(() => {
    const timer = setTimeout(() => setBarsVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  // ── Tilt 3D con mouse
  useEffect(() => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (!wrap || !card) return;

    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      const mx = (e.clientX - r.left) / r.width - 0.5;
      const my = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(800px) rotateX(${-my * 14}deg) rotateY(${mx * 14}deg) translateZ(16px)`;
      card.style.boxShadow = `${mx * -20}px ${my * -20}px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.08)`;
    };
    const onLeave = () => {
      card.style.transform = "";
      card.style.boxShadow = "";
    };

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const { card } = HERO;

  return (
    <div ref={wrapRef} className={cn("perspective-[1000px]", className)}>
      <div
        ref={cardRef}
        className={cn(
          "rounded-[18px] p-6",
          "bg-white/8 backdrop-blur-xl",
          "border border-white/18",
          "transition-transform duration-100 ease-out",
          "animate-card-float",
          // Sombra base
          "shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.08)]"
        )}
      >
        {/* ── Top: avatar + info + nivel */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className={cn(
              "w-11 h-11 rounded-full flex-shrink-0",
              "flex items-center justify-center",
              "bg-gradient-to-br from-[var(--p1)] to-[var(--p2)]",
              "font-condensed font-black text-xl text-[#0c2d7a]"
            )}
          >
            {card.initials}
          </div>
          <div className="min-w-0">
            <div className="font-condensed font-bold text-base text-white leading-tight">
              {card.name} — {card.sport}
            </div>
            <div className="text-[11px] text-white/50 mt-0.5">{card.location}</div>
          </div>
          <div
            className={cn(
              "ml-auto flex-shrink-0",
              "text-[11px] font-bold uppercase tracking-wide",
              "text-[var(--p1)] bg-[var(--p1s)]",
              "px-2.5 py-1 rounded"
            )}
          >
            {card.level}
          </div>
        </div>

        {/* ── Barras de progreso */}
        <div className="flex flex-col gap-3 mb-4">
          {card.bars.map((bar) => (
            <div key={bar.label} className="flex items-center gap-2.5">
              <span className="text-[11px] text-white/50 w-[76px] flex-shrink-0">
                {bar.label}
              </span>
              <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--p1)] to-[var(--p2)] transition-[width] duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)]"
                  style={{ width: barsVisible ? `${bar.value}%` : "0%" }}
                />
              </div>
              <span className="text-[11px] font-bold text-[var(--p1)] w-7 text-right">
                {bar.value}%
              </span>
            </div>
          ))}
        </div>

        {/* ── Especialistas mini grid */}
        <div className="grid grid-cols-2 gap-2">
          {card.specialists.map((spec) => (
            <div
              key={spec.name}
              className={cn(
                "flex items-center gap-2.5",
                "bg-white/10 rounded-[10px] px-3 py-2.5",
                "border border-white/10",
                "transition-colors duration-200 hover:bg-[var(--p1s)]"
              )}
            >
              <span className="text-base leading-none">{spec.icon}</span>
              <div>
                <div className="text-[12px] font-semibold text-white leading-tight">
                  {spec.name}
                </div>
                {spec.available && (
                  <div className="flex items-center gap-1 mt-0.5">
                    <span
                      className={cn(
                        "w-1 h-1 rounded-full bg-[var(--p2)]",
                        "animate-ping-dot"
                      )}
                    />
                    <span className="text-[10px] text-[var(--p2)]">
                      Disponible
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
