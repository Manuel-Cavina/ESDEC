// components/ui/IconFeatureCard.tsx
// Card estandar para grillas de "icono + titulo + descripcion" (sin numero) —
// usada por las secciones de oferta/beneficios del sitio. Mismo vidrio y linea
// de acento en hover que StepCard, pero crece en vez de levantarse.
// Si se pasa `href`, toda la card se vuelve un link (y opcionalmente muestra
// un renglon de CTA al pie).

import Link from "next/link";
import StickerIcon from "@/components/StickerIcon";
import Kicker from "@/components/ui/Kicker";
import { cn } from "@/lib/utils";

interface IconFeatureCardProps {
  icon?: string;
  /** Eyebrow chico arriba del titulo (via Kicker) */
  eyebrow?: string;
  title: string;
  body?: string;
  /** lg = icono y titulo grandes (grillas 2-up). md = mas compacto (grillas 3/4-up). */
  size?: "md" | "lg";
  className?: string;
  /** Si se pasa, toda la card es un Link a esta ruta. */
  href?: string;
  /** Renglon "label →" al pie — solo tiene sentido junto con href. */
  ctaLabel?: string;
}

export default function IconFeatureCard({
  icon,
  eyebrow,
  title,
  body,
  size = "lg",
  className,
  href,
  ctaLabel,
}: IconFeatureCardProps) {
  const isLg = size === "lg";

  const cardClassName = cn(
    "group relative flex flex-col overflow-hidden rounded-[24px] border border-[rgba(255,255,255,0.35)] bg-[rgba(255,255,255,0.2)] backdrop-blur-md transition-all duration-500 ease-out hover:z-10 hover:scale-[1.06] hover:border-[rgba(90,200,255,0.5)] hover:bg-[rgba(255,255,255,0.28)] hover:shadow-[0_32px_70px_-28px_rgba(0,0,0,0.5)]",
    isLg ? "min-h-[260px] p-8 md:p-10" : "min-h-[200px] p-6",
    href && "block",
    className
  );

  const content = (
    <>
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "linear-gradient(90deg, var(--p1) 0%, var(--p2) 100%)" }}
        aria-hidden="true"
      />

      {icon && <StickerIcon name={icon} size={isLg ? "lg" : "sm"} className={isLg ? "mb-5" : "mb-4"} />}
      {eyebrow && <Kicker className="mb-3">{eyebrow}</Kicker>}

      <h3
        className={cn(
          "ecos-title-accent font-condensed uppercase leading-[1.05] tracking-tight",
          isLg ? "mb-3 text-[1.4rem] font-black" : "mb-2 text-[1rem] font-bold tracking-[0.02em]"
        )}
      >
        {title}
      </h3>
      {body && (
        <p className={cn("font-sans text-[var(--t2)]", isLg ? "text-[0.9rem] leading-[1.8]" : "text-[0.85rem] leading-[1.75]")}>
          {body}
        </p>
      )}

      {ctaLabel && (
        <span className="mt-6 inline-flex items-center gap-2 font-condensed text-[0.78rem] font-bold uppercase tracking-[0.12em] text-[var(--p1)]">
          {ctaLabel}
          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cardClassName}>
        {content}
      </Link>
    );
  }

  return <div className={cardClassName}>{content}</div>;
}
