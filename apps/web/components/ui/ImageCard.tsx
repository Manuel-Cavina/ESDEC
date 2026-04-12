"use client";

// ─────────────────────────────────────────────────────────────────────────────
// components/ui/ImageCard.tsx
// Contenedor reutilizable para next/image con overlay opcional y chip de tag.
// Siempre requiere un wrapper con position:relative y dimensiones definidas.
// ─────────────────────────────────────────────────────────────────────────────

import Image from "next/image";
import { cn } from "@/lib/utils";
import { BLUR_PH } from "@/content/landing";

interface ImageCardProps {
  src: string;
  alt: string;
  /** Chip label en la esquina superior izquierda */
  tag?: string;
  /** Degradado oscuro desde abajo — útil para texto sobre imagen */
  overlay?: boolean;
  className?: string;
  /** Clases del wrapper externo (position:relative) */
  wrapperClassName?: string;
  blurDataURL?: string;
  priority?: boolean;
}

export default function ImageCard({
  src,
  alt,
  tag,
  overlay = false,
  className,
  wrapperClassName,
  blurDataURL = BLUR_PH,
  priority = false,
}: ImageCardProps) {
  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("object-cover", className)}
        placeholder="blur"
        blurDataURL={blurDataURL}
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Overlay gradiente — para legibilidad de texto encima */}
      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent"
          aria-hidden="true"
        />
      )}

      {/* Tag chip */}
      {tag && (
        <span className="absolute left-3 top-3 z-10 rounded-sm bg-white/12 px-2 py-1 font-condensed text-[9px] font-bold uppercase tracking-[3px] text-white backdrop-blur-sm border border-white/20">
          {tag}
        </span>
      )}
    </div>
  );
}
