// components/ui/StepCard.tsx
// Card estandar para procesos numerados (01/02/03...) — usada por todas las
// secciones "como funciona" / journey del sitio. Numero grande en font-display
// a baja opacidad + icono opcional + titulo + descripcion.

import StickerIcon from "@/components/StickerIcon";
import FingerprintSVG from "@/components/FingerprintSVG";
import { cn } from "@/lib/utils";

interface StepCardProps {
  number: string;
  title: string;
  body: string;
  icon?: string;
  className?: string;
  /** Contenido extra despues del body (ej. lista de roles) */
  children?: React.ReactNode;
}

export default function StepCard({ number, title, body, icon, className, children }: StepCardProps) {
  return (
    <div
      className={cn(
        "group relative flex min-h-[240px] flex-col overflow-hidden rounded-[24px] border border-[rgba(255,255,255,0.35)] bg-[rgba(255,255,255,0.2)] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(90,200,255,0.5)] hover:bg-[rgba(255,255,255,0.28)]",
        className
      )}
    >
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "linear-gradient(90deg, var(--p1) 0%, var(--p2) 100%)" }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-10 -right-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      >
        <FingerprintSVG animate={false} gradient strokeOpacity={0.4} className="w-36" />
      </div>

      <div className="mb-5 flex items-center justify-between">
        <span
          className="select-none font-display text-[44px] leading-none text-[var(--t1)] opacity-[0.15]"
          aria-hidden="true"
        >
          {number}
        </span>
        {icon && <StickerIcon name={icon} size="md" />}
      </div>

      <h3 className="ecos-title-accent font-condensed text-[1.2rem] font-black uppercase leading-[1.1] tracking-[0.02em]">
        {title}
      </h3>
      <p className="mt-3 font-sans text-[0.86rem] leading-[1.75] text-[var(--t2)]">
        {body}
      </p>
      {children}
    </div>
  );
}
