// components/ui/SweepButton.tsx
// Boton ghost — fondo transparente, borde acento.
// Hover: texto se convierte en el gradiente azul→verde del sistema de marca.

import Link from "next/link";
import { cn } from "@/lib/utils";

interface SweepButtonProps {
  label: string;
  href: string;
  external?: boolean;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "ghost" | "glass" | "dark";
}

const sizeClasses = {
  sm: "min-h-[42px] px-6 text-[0.74rem]",
  md: "min-h-[52px] px-8 text-[0.84rem]",
  lg: "min-h-[64px] px-10 text-[0.86rem]",
};

export default function SweepButton({
  label,
  href,
  external = false,
  onClick,
  className,
  size = "md",
  variant = "ghost",
}: SweepButtonProps) {
  const base = cn(
    variant === "glass" ? "sweep-btn-glass" : variant === "dark" ? "sweep-btn-dark" : "sweep-btn",
    "inline-flex items-center justify-center rounded-full",
    "font-condensed font-bold uppercase tracking-[0.15em]",
    sizeClasses[size],
    className
  );

  if (onClick) {
    return <button type="button" onClick={onClick} className={base}>{label}</button>;
  }

  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={base}>{label}</a>;
  }

  return <Link href={href} className={base}>{label}</Link>;
}
