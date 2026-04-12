"use client";

// ─────────────────────────────────────────────────────────────────────────────
// components/BrandLines.tsx
// Las 3 líneas escalonadas del logo ESDEC — componente único compartido.
//
// Uso estático (Navbar, AboutSection, HeroSection stats):
//   <BrandLines className="[&_[data-line]]:bg-[var(--logo-l)]" />
//
// Uso animado (EmotionalSection — se dibuja al entrar al viewport):
//   <BrandLines animated className="mb-6" />
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface BrandLinesProps {
  className?: string;
  size?: "sm" | "md";
  animated?: boolean;
  centered?: boolean;
}

const SIZES = {
  sm: { widths: [22, 16, 11], offsets: [0, 3, 6], height: 3, gap: 4 },
  md: { widths: [32, 24, 16], offsets: [0, 4, 8], height: 4, gap: 5 },
};

export default function BrandLines({
  className,
  size = "sm",
  animated = false,
  centered = false,
}: BrandLinesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { widths, offsets, height, gap } = SIZES[size];

  useEffect(() => {
    if (!animated) return;
    const container = containerRef.current;
    if (!container) return;

    const lines = container.querySelectorAll<HTMLElement>("[data-line]");

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        lines.forEach((line, i) => {
          const targetW = Number(line.dataset.targetW ?? widths[i]);
          const opacity = Number(line.dataset.opacity ?? 1);
          setTimeout(() => {
            line.style.width = `${targetW}px`;
            line.style.opacity = String(opacity);
          }, i * 130);
        });
        obs.disconnect();
      },
      { threshold: 0.4 }
    );

    obs.observe(container);
    return () => obs.disconnect();
  }, [animated, widths]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex flex-col",
        centered && "items-center",
        className
      )}
      style={{ gap: `${gap}px` }}
      aria-hidden="true"
    >
      {widths.map((w, i) => (
        <div
          key={i}
          data-line
          data-target-w={w}
          data-opacity={[0.6, 0.4, 0.25][i]}
          style={{
            width: animated ? 0 : `${w}px`,
            marginLeft: centered ? 0 : `${offsets[i]}px`,
            height: `${height}px`,
            opacity: animated ? 0 : [0.6, 0.4, 0.25][i],
            borderRadius: `${height / 2}px`,
            backgroundColor: "var(--bl-color, var(--p1))",
            transition: animated
              ? `width 0.45s cubic-bezier(.22,1,.36,1), opacity 0.3s ease`
              : undefined,
          }}
        />
      ))}
    </div>
  );
}
