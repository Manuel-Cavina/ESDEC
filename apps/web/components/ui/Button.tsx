"use client";

// ─────────────────────────────────────────────────────────────────────────────
// components/ui/Button.tsx
// Botón atómico de ESDEC — variantes primary y outline
// Renderiza <a> si se pasa href, <button> si se pasa onClick
// ─────────────────────────────────────────────────────────────────────────────

import { cn } from "@/lib/utils";

interface ButtonBaseProps {
  variant?: "primary" | "outline";
  children: React.ReactNode;
  className?: string;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  onClick?: never;
  type?: never;
  disabled?: never;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const primaryClasses = cn(
  "inline-flex items-center gap-2 group",
  "font-condensed font-bold text-[15px] uppercase tracking-wide",
  "px-[30px] py-[13px] rounded-md",
  "bg-[var(--btn-bg)] text-[var(--btn-t)]",
  "transition-all duration-200 ease-out",
  "hover:brightness-110 hover:px-[42px] hover:-translate-y-0.5",
  "hover:shadow-[0_8px_28px_rgba(0,0,0,0.25)]",
  "relative overflow-hidden before:absolute before:inset-0",
  "before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
  "before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-400"
);

const outlineClasses = cn(
  "inline-flex items-center gap-2",
  "font-sans font-medium text-sm",
  "px-[26px] py-[12px] rounded-md",
  "bg-transparent text-[var(--t2)]",
  "border border-[var(--t2)]/40",
  "transition-all duration-200",
  "hover:border-[var(--t1)] hover:text-[var(--t1)]"
);

export default function Button({ variant = "primary", children, className, href, onClick, type = "button", disabled }: ButtonProps) {
  const classes = cn(
    variant === "primary" ? primaryClasses : outlineClasses,
    disabled && "opacity-50 pointer-events-none",
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
