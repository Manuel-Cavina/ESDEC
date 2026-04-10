"use client";

// ─────────────────────────────────────────────────────────────────────────────
// components/PillarChip.tsx
// Chip de pillar/categoría usado en el Hero de ESDEC.
// ─────────────────────────────────────────────────────────────────────────────

import { cn } from "@/lib/utils";

interface PillarChipProps {
  label: string;
}

export default function PillarChip({ label }: PillarChipProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5",
        "px-4 py-[7px] rounded-full",
        "bg-white/12 border border-white/25",
        "font-condensed font-bold text-sm uppercase tracking-wide",
        "text-white/90",
        "transition-all duration-200 cursor-default",
        "hover:bg-[var(--p1s)] hover:border-[var(--p1)] hover:text-white"
      )}
    >
      <span className="text-[var(--p1)] text-[10px]">•</span>
      {label}
    </div>
  );
}
