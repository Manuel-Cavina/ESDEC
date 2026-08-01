// components/ui/Kicker.tsx
// Etiqueta eyebrow/categoria estandar para todas las secciones.
// font-sans bold uppercase + dot pulsante = impactante sin competir con el headline.

import { cn } from "@/lib/utils";

interface KickerProps {
  children: React.ReactNode;
  className?: string;
  withLine?: boolean;
  withDot?: boolean;
  align?: "left" | "center";
}

export default function Kicker({
  children,
  className,
  withLine = false,
  withDot = false,
  align = "left",
}: KickerProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2",
        align === "center" && "justify-center",
        className
      )}
    >
      {/* Dot con pulso degradado azul → verde */}
      {withDot && (
        <span className="relative inline-flex h-2 w-2 shrink-0" aria-hidden="true">
          {/* Ring expansivo con degrade — el pulso */}
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70"
            style={{ background: "linear-gradient(135deg, #5ac8ff 0%, #0cd25e 100%)" }}
          />
          {/* Dot estatico con degrade */}
          <span
            className="relative inline-flex h-2 w-2 rounded-full"
            style={{ background: "linear-gradient(135deg, #5ac8ff 0%, #0cd25e 100%)" }}
          />
        </span>
      )}

      {/* Linea simple sin pulso */}
      {withLine && (
        <span
          className="h-px w-5 shrink-0 bg-[var(--p1)]"
          aria-hidden="true"
        />
      )}

      <p className="kicker-gradient font-sans text-[13px] font-bold uppercase tracking-[2px]">
        {children}
      </p>
    </div>
  );
}
