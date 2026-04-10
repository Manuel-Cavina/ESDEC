"use client";

// ─────────────────────────────────────────────────────────────────────────────
// components/StatItem.tsx
// Elemento de stat — valor display + label. Resalta el carácter especial (+, °, /7).
// ─────────────────────────────────────────────────────────────────────────────

interface StatItemProps {
  value: string;
  label: string;
}

export default function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="text-center">
      <div className="font-display text-[44px] leading-none tracking-wide text-white">
        {value.replace(/\+|°|\/7|\/|%/, "")}
        <span className="text-[var(--p1)]">
          {value.match(/\+|°|\/7/)?.[0] ?? ""}
        </span>
      </div>
      <div className="font-sans text-[11px] font-semibold tracking-[1.5px] uppercase text-white/38 mt-1">
        {label}
      </div>
    </div>
  );
}
