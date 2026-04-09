// ─────────────────────────────────────────────────────────────────────────────
// components/ui/Badge.tsx
// Badge atómico de ESDEC — variantes core (cyan) y plus (verde)
// Usado en las cards de especialistas del EcosystemSection
// ─────────────────────────────────────────────────────────────────────────────

import { cn } from "@/lib/utils";

interface BadgeProps {
  variant: "core" | "plus";
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ variant, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center",
        "font-condensed font-bold text-[11px] uppercase tracking-[1.5px]",
        "px-2.5 py-[3px] rounded-full",
        variant === "core"
          ? "bg-[var(--p1)]/15 text-[var(--p1)] border border-[var(--p1)]/30"
          : "bg-[var(--p2)]/15 text-[var(--p2)] border border-[var(--p2)]/30",
        className
      )}
    >
      {children}
    </span>
  );
}
