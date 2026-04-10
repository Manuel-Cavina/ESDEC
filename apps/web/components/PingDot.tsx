"use client";

// ─────────────────────────────────────────────────────────────────────────────
// components/PingDot.tsx
// Indicador animado de estado — punto con efecto ping (animate-ping-dot).
// ─────────────────────────────────────────────────────────────────────────────

import { cn } from "@/lib/utils";

interface PingDotProps {
  className?: string;
}

export default function PingDot({ className }: PingDotProps) {
  return (
    <span
      className={cn(
        "inline-block h-[7px] w-[7px] flex-shrink-0 rounded-full",
        "bg-[var(--p1)] animate-ping-dot",
        className
      )}
    />
  );
}
