"use client";

// ─────────────────────────────────────────────────────────────────────────────
// components/FingerprintSVG.tsx
// La huella digital de ESDEC — solo líneas concéntricas, sin puntos ni fondo.
// Coloreable via CSS (--fps para stroke, --fpg para glow fill).
// animate="draw" → stroke-dashoffset animado al montar.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FingerprintSVGProps {
  className?: string;
  /** Si true, las líneas se dibujan progresivamente al montar */
  animate?: boolean;
  /** Opacidad base de los paths (default: 1, usar en CSS con opacity del wrapper) */
  strokeOpacity?: number;
}

// Los 18 paths de la huella — de adentro hacia afuera
const PATHS = [
  { d: "M100,127 Q98,140 96,153 Q94,165 98,175 Q102,182 112,184 Q122,182 126,175 Q130,165 128,153 Q126,140 124,127", w: 2.2 },
  { d: "M88,109 Q88,92 100,91 Q112,92 112,109", w: 2.0 },
  { d: "M82,110 Q80,84 100,82 Q120,84 118,110", w: 2.0 },
  { d: "M76,113 Q72,76 100,72 Q128,76 124,113", w: 2.0 },
  { d: "M70,117 Q64,68 100,64 Q136,68 130,117", w: 1.9 },
  { d: "M64,122 Q56,60 100,55 Q144,60 136,122", w: 1.9 },
  { d: "M58,128 Q48,52 100,46 Q152,52 142,128", w: 1.8 },
  { d: "M52,135 Q40,44 100,38 Q160,44 148,135", w: 1.8 },
  { d: "M46,144 Q32,36 100,29 Q168,36 154,144", w: 1.7 },
  { d: "M40,154 Q24,28 100,20 Q176,28 160,154", w: 1.7 },
  { d: "M34,164 Q16,19 100,11 Q184,19 166,164", w: 1.6 },
  { d: "M28,175 Q10,12 100,4 Q190,12 172,175",  w: 1.5 },
  { d: "M80,132 Q76,148 74,163 Q72,177 77,188 Q83,198 100,200 Q117,198 123,188 Q128,177 126,163 Q124,148 120,132", w: 1.8 },
  { d: "M73,138 Q67,157 64,175 Q62,191 68,203 Q76,216 100,218 Q124,216 132,203 Q138,191 136,175 Q133,157 127,138", w: 1.7 },
  { d: "M65,145 Q57,167 54,188 Q52,205 59,218 Q68,230 100,232 Q132,230 141,218 Q148,205 146,188 Q143,167 135,145", w: 1.6 },
  { d: "M56,152 Q48,168 40,180", w: 1.5 },
  { d: "M144,152 Q152,168 160,180", w: 1.5 },
  // Núcleo (ellipse como path)
  { d: "M108,118 Q108,109 100,109 Q92,109 92,118 Q92,127 100,127 Q108,127 108,118", w: 2.2 },
];

export default function FingerprintSVG({
  className,
  animate = false,
  strokeOpacity = 1,
}: FingerprintSVGProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!animate || !svgRef.current) return;

    const paths = svgRef.current.querySelectorAll<SVGPathElement>(".fp-path");
    paths.forEach((path, i) => {
      const length = path.getTotalLength?.() ?? 1000;
      path.style.strokeDasharray = String(length);
      path.style.strokeDashoffset = String(length);
      path.style.transition = `stroke-dashoffset 0.6s ease ${i * 0.08}s`;
      // Trigger reflow
      void path.getBoundingClientRect();
      path.style.strokeDashoffset = "0";
    });
  }, [animate]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 200 240"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("block", className)}
      aria-hidden="true"
      focusable="false"
    >
      {/* Glow interior */}
      <ellipse
        cx="100"
        cy="118"
        rx="22"
        ry="26"
        className="fp-glow"
        fill="var(--fpg, rgba(90,200,255,0.06))"
      />
      {/* Líneas concéntricas */}
      {PATHS.map((p, i) => (
        <path
          key={i}
          d={p.d}
          className="fp-path"
          fill="none"
          stroke="var(--fps, rgba(90,200,255,0.22))"
          strokeWidth={p.w}
          strokeLinecap="round"
          opacity={strokeOpacity}
        />
      ))}
    </svg>
  );
}
