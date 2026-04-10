"use client";

// ─────────────────────────────────────────────────────────────────────────────
// components/BrandLines.tsx
// Las 3 líneas horizontales escalonadas del logo ESDEC.
// Consolida: LogoMark (About), LogoLines (Navbar), StatSep (Hero), BrandLines (Emotional).
//
// Color: usar la CSS var --bl-color en el contenedor padre, o dejar el default (--p1).
//   Ej: <BrandLines className="[--bl-color:var(--logo-l)]" />
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface BrandLinesProps {
  className?: string;
  /** Altura de las líneas: sm = 3px (default), md = 5px (Navbar) */
  size?: "sm" | "md";
  /** Si true, las líneas se dibujan de izquierda a derecha al entrar al viewport */
  animated?: boolean;
  /** Si true, las líneas se centran en el contenedor (para layouts centrados) */
  centered?: boolean;
}

// Proporciones del logo — ancho fijo (estático) y ancho destino (animado)
const LINES = [
  { w: "22px", ml: "0px", dTarget: "100%", dOpacity: "0.6"  },
  { w: "16px", ml: "3px", dTarget: "72%",  dOpacity: "0.4"  },
  { w: "11px", ml: "6px", dTarget: "45%",  dOpacity: "0.25" },
] as const;

export default function BrandLines({
  className,
  size = "sm",
  animated = false,
  centered = false,
}: BrandLinesProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animated) return;
    const el = ref.current;
    if (!el) return;
    const lines = Array.from(el.querySelectorAll<HTMLDivElement>("[data-target]"));

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        lines.forEach((line, i) => {
          setTimeout(() => {
            line.style.width = line.dataset.target!;
            line.style.opacity = line.dataset.opacity ?? "1";
          }, i * 130);
        });
        obs.disconnect();
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [animated]);

  const h = size === "md" ? "h-[5px]" : "h-[3px]";
  const gap = size === "md" ? "gap-[5px]" : "gap-[4px]";
  const r = size === "md" ? "rounded-[2.5px]" : "rounded-sm";

  return (
    <div
      ref={ref}
      className={cn("flex flex-col", gap, centered && "items-center", className)}
    >
      {LINES.map((line, i) => (
        <div
          key={i}
          data-target={animated ? line.dTarget : undefined}
          data-opacity={animated ? line.dOpacity : undefined}
          className={cn(h, r, "bg-[var(--bl-color,var(--p1))] transition-[width,opacity] duration-700")}
          style={{
            width: animated ? "0" : line.w,
            marginLeft: centered ? undefined : line.ml,
            opacity: animated ? 0 : undefined,
            transitionTimingFunction: "cubic-bezier(.22,1,.36,1)",
          }}
        />
      ))}
    </div>
  );
}
