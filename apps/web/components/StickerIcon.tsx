// components/StickerIcon.tsx
// Unified sticker icon system used across the ESDEC landing.

import { cn } from "@/lib/utils";

const sizeClasses = {
  xxs: {
    shell: "h-6 w-6",
    icon: "h-3.5 w-3.5",
  },
  xs: {
    shell: "h-8 w-8",
    icon: "h-4 w-4",
  },
  sm: {
    shell: "h-10 w-10",
    icon: "h-5 w-5",
  },
  md: {
    shell: "h-12 w-12",
    icon: "h-6 w-6",
  },
  lg: {
    shell: "h-14 w-14",
    icon: "h-7 w-7",
  },
} as const;

type StickerSize = keyof typeof sizeClasses;
type StickerTone = "blue" | "green" | "dual";

interface StickerIconProps {
  name: string;
  size?: StickerSize;
  className?: string;
}

function glyphClasses(size: StickerSize) {
  return cn(sizeClasses[size].icon, "relative z-[1]");
}

function StickerGlyph({
  name,
  size,
}: {
  name: string;
  size: StickerSize;
}) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: glyphClasses(size),
    "aria-hidden": true,
  };

  switch (name) {
    case "progreso":
    case "impacto":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M5 17.5h14M7.5 15l3.5-3.5 2.7 2.7L18 10" />
          <path d="M15 10h3v3" />
        </svg>
      );
    case "equipo":
    case "red":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="8" cy="8" r="2.2" />
          <circle cx="16" cy="8" r="2.2" />
          <circle cx="12" cy="16" r="2.2" />
          <path d="m9.8 9.4 1.2 4.3M14.2 9.4 13 13.7M10 16h4" />
        </svg>
      );
    case "criterio":
    case "encaje":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="12" r="6.8" />
          <circle cx="12" cy="12" r="2.2" />
          <path d="M12 5.2v2.1M12 16.7v2.1M18.8 12h-2.1M7.3 12H5.2" />
        </svg>
      );
    case "escala":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M7.5 18.5h9M9.5 15h5M11 11.5h2" />
          <path d="m12 5.5 4.5 4.5M12 5.5l-4.5 4.5" />
          <path d="M12 5.5v8.5" />
        </svg>
      );
    case "objetivo":
    case "visibilidad":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="12" r="6.8" />
          <circle cx="12" cy="12" r="2.2" />
          <path d="m15.8 8.2 2.7-2.7M15.8 8.2l2.7.1-.1 2.6" />
        </svg>
      );
    case "infraestructura":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 4.8v3M12 16.2v3M5.7 12h3M15.3 12h3" />
          <path d="m7.4 7.4 2.1 2.1M14.5 14.5l2.1 2.1M16.6 7.4l-2.1 2.1M9.5 14.5l-2.1 2.1" />
          <circle cx="12" cy="12" r="3.2" />
        </svg>
      );
    case "bienestar":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 18.2c-3.6 0-6.3-2.7-6.3-6.1 0-3 2.3-5.4 5.4-5.4 1.4 0 2.7.5 3.7 1.4 1.1 1 1.7 2.4 1.7 4 0 3.3-2 6.1-4.5 6.1Z" />
          <path d="M11.3 8.4c1.9 1.5 2.7 3.8 2.5 6.9" />
        </svg>
      );
    case "clinica":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 5.2v13.6M5.2 12h13.6" />
          <rect x="5.2" y="5.2" width="13.6" height="13.6" rx="3.2" />
        </svg>
      );
    case "marca":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="m12 4.8 1.8 4.4 4.4 1.8-4.4 1.8L12 17.2l-1.8-4.4-4.4-1.8 4.4-1.8L12 4.8Z" />
        </svg>
      );
    case "eventos":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M7 19V5.5M7 6h9l-1.8 3 1.8 3H7" />
        </svg>
      );
    case "tecnologia":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="7" y="7" width="10" height="10" rx="2.3" />
          <path d="M12 3.8v2.1M12 18.1v2.1M20.2 12h-2.1M5.9 12H3.8M16.7 5.3l-1.3 1.3M8.6 17.4l-1.3 1.3M18.7 18.7l-1.3-1.3M6.6 6.6 5.3 5.3" />
        </svg>
      );
    case "educacion":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M6.2 6.5h5.6c1.3 0 2.3.9 2.3 2.1v9.1c0-1.2-1-2.1-2.3-2.1H6.2V6.5ZM17.8 6.5h-5.6c-1.3 0-2.3.9-2.3 2.1v9.1c0-1.2 1-2.1 2.3-2.1h5.6V6.5Z" />
        </svg>
      );
    case "mentalidad":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M9.3 17.8v-1.4c-1.7-.9-2.8-2.6-2.8-4.7 0-3 2.4-5.4 5.5-5.4s5.5 2.4 5.5 5.4c0 2.1-1.1 3.8-2.8 4.7v1.4" />
          <path d="M10 20h4M10.3 14.1c.5-.9 1.1-1.4 1.7-1.4.8 0 1.3.4 1.8 1.4M10.2 9.8c.4-.7 1-1.1 1.8-1.1s1.4.4 1.8 1.1" />
        </svg>
      );
    case "nutricion":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M9.2 6v5.8M7.2 6v4.5c0 1.1.9 2 2 2h0c1.1 0 2-.9 2-2V6M15.6 6c-1.3 1.6-1.9 3.4-1.9 5.3v6.7M15.6 6c1 1.4 1.6 2.9 1.6 4.6" />
        </svg>
      );
    case "training":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M4.5 10.8h2.1v2.4H4.5zM17.4 10.8h2.1v2.4h-2.1zM6.6 9.7h2.1v4.6H6.6zM15.3 9.7h2.1v4.6h-2.1zM8.7 11.2h6.6v1.6H8.7z" />
        </svg>
      );
    case "estructura":
    case "proceso":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M7 7.2h10M7 12h7M7 16.8h10" />
          <circle cx="5.2" cy="7.2" r="1" fill="currentColor" stroke="none" />
          <circle cx="5.2" cy="12" r="1" fill="currentColor" stroke="none" />
          <circle cx="5.2" cy="16.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="4.5" y="6.5" width="15" height="11" rx="2.2" />
          <path d="m6.5 8.5 5.5 4.2 5.5-4.2" />
        </svg>
      );
    case "pin":
    case "maps":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 20.2c2.8-3.4 5-6.2 5-8.9a5 5 0 1 0-10 0c0 2.7 2.2 5.5 5 8.9Z" />
          <circle cx="12" cy="11.2" r="1.7" />
          <path d="M12 20.2v-3.1" />
        </svg>
      );
    case "instagram":
      // Logo oficial: marco redondeado + lente + punto flash
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
          <circle cx="12" cy="12" r="4.5" />
          <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" stroke="none" />
        </svg>
      );
    case "tiktok":
      // Logo oficial: nota musical (cabeza rellena + tallo + curva)
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="9" cy="17" r="3.5" fill="currentColor" stroke="none" />
          <path d="M12.5 13.5V4" />
          <path d="M12.5 4c0 3.5 3 5.5 6 5.5" />
        </svg>
      );
    case "whatsapp":
      // Logo oficial: burbuja de chat + teléfono interno
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 3.5A8.5 8.5 0 0 0 4.4 16.5L3.5 20.5l4-.9A8.5 8.5 0 1 0 12 3.5Z" />
          <path
            d="M15.8 13.6c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.5.2l-.7.8c-.1.2-.2.2-.4.1a5.8 5.8 0 0 1-3-3c-.1-.2 0-.3.1-.4l.4-.5c.1-.1.1-.3.1-.4l-.7-1.5c-.2-.4-.4-.3-.5-.3h-.4c-.2 0-.4.1-.6.3-.7.8-.7 1.9 0 2.7l.8 1a8.8 8.8 0 0 0 3.8 3.2c1.8.7 2.7.6 3.2.4.4-.1 1.2-.5 1.4-1 .2-.5.2-1 .1-1.1l-.7-.8Z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );
    case "futbol":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="12" r="7.5" />
          <path d="M12 8.3 14.4 10l-.9 2.8h-3L9.6 10 12 8.3Z" />
          <path d="m9.6 10-2.3 1.1M14.4 10l2.3 1.1M10.5 12.8l-1.8 2M13.5 12.8l1.8 2" />
        </svg>
      );
    case "running":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="14.5" cy="5.5" r="2" />
          <path d="m11 10 2.8-1.8 2.4 1.3M8.2 13.2l3-2.3 2.1 1.2 1.4 4.1M10.5 14.5l-2.8 4M14.7 16.5l3.7 1.4" />
        </svg>
      );
    case "hockey":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M9 5 6.2 15.5h3.1M15.5 5l-2.1 8" />
          <path d="M6.2 15.5h7.6M14.3 13.1h3.8" />
          <circle cx="18.2" cy="16.8" r="1.7" />
        </svg>
      );
    case "rugby":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M7.2 15.7c-2.5-2.5-2.5-4.9 0-7.4s4.9-2.5 7.4 0 2.5 4.9 0 7.4-4.9 2.5-7.4 0Z" />
          <path d="m10 10 4 4M14 10l-4 4M8.8 12h6.4" />
        </svg>
      );
    case "basquet":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="12" r="7.5" />
          <path d="M12 4.5v15M4.5 12h15M7.2 6.6c2.1 1.2 3.3 3 3.3 5.4s-1.2 4.2-3.3 5.4M16.8 6.6c-2.1 1.2-3.3 3-3.3 5.4s1.2 4.2 3.3 5.4" />
        </svg>
      );
    case "tenis":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M10.3 6.3a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Z" />
          <path d="m13.8 14.2 3.9 3.9M18.4 18.8l-1.2 1.2" />
          <circle cx="17.2" cy="7.6" r="1.6" />
        </svg>
      );
    case "natacion":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M4 15c1 .8 2 .8 3 0s2-.8 3 0 2 .8 3 0 2-.8 3 0 2 .8 4 0" />
          <path d="M8 11.2 11.7 9l2.8 1.4M11 8.2a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z" />
        </svg>
      );
    case "ciclismo":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="7" cy="16.5" r="3.2" />
          <circle cx="17.5" cy="16.5" r="3.2" />
          <path d="m7 16.5 3.8-6h3.2l3.5 6M10.8 10.5l-1.2-2h3.1" />
        </svg>
      );
    case "boxeo":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M8.5 12.2V9.4c0-1.5 1.2-2.7 2.7-2.7h1.2c1.6 0 3 .9 3.7 2.3l1 2.1v4.8c0 1-.8 1.8-1.8 1.8H10c-1 0-1.8-.8-1.8-1.8v-3.7Z" />
          <path d="M8.5 12.2h3.4c1.3 0 2.4 1.1 2.4 2.4v1.1" />
        </svg>
      );
    case "crossfit":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M4 10.5h2.2v3H4zM17.8 10.5H20v3h-2.2zM6.2 9.2h2.1v5.6H6.2zM15.7 9.2h2.1v5.6h-2.1zM8.3 11.2h7.4v1.6H8.3z" />
        </svg>
      );
    case "artesMarciales":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="6" r="1.8" />
          <path d="m12 8.3-2.7 3.1-2.8 1.3M12 8.3l2.4 2.8 3 1.6M12 12.1l-1.8 3.4M13.2 12.3l1.9 3.5M9 18.2h6" />
        </svg>
      );
    case "esqui":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M7 5v8.5c0 2.4 1 4.4 3 5.8M14 5v8.5c0 2.7 1.1 4.9 3.4 6.3M10.5 6.2l4 11.3M14.5 6.2l-4 11.3" />
        </svg>
      );
    case "surf":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M5 15.8c1 .7 2 .7 3 0s2-.7 3 0 2 .7 3 0 2-.7 3 0 2 .7 2.8 0" />
          <path d="M13.8 6.5c2.6 1 3.9 3.3 3.9 6.8h-4.6l-1.6 4.2c-.3.8-1.4.6-1.4-.3L10.8 7c.1-.5.5-.7 1-.7h2Z" />
        </svg>
      );
    case "yoga":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="6.2" r="1.8" />
          <path d="M7.5 11.3c1.5-.8 2.8-1.2 4.5-1.2s3 .4 4.5 1.2M9 12.3l-2.8 3.5M15 12.3l2.8 3.5M9.6 17.8c.7-.8 1.5-1.2 2.4-1.2s1.7.4 2.4 1.2" />
        </svg>
      );
    case "otro":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 4.8 13.9 9l4.6.6-3.4 3.3.8 4.7-4.1-2.3-4.1 2.3.8-4.7-3.4-3.3 4.6-.6L12 4.8Z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="12" r="7.5" />
          <path d="M12 8v4.2M12 16h.01" />
        </svg>
      );
  }
}

function getTone(name: string): StickerTone {
  if (
    [
      "bienestar",
      "nutricion",
      "yoga",
      "eventos",
      "recovery",
      "surf",
      "esqui",
    ].includes(name)
  ) {
    return "green";
  }

  if (
    ["marca", "objetivo", "equipo", "red", "visibilidad", "instagram", "tiktok"].includes(
      name
    )
  ) {
    return "dual";
  }

  return "blue";
}

export default function StickerIcon({
  name,
  size = "sm",
  className,
}: StickerIconProps) {
  const tone = getTone(name);
  const toneClasses =
    tone === "green"
      ? "text-[var(--p2)]"
      : tone === "dual"
        ? "text-[var(--p1)]"
        : "text-[var(--p1)]";

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center",
        sizeClasses[size].shell,
        toneClasses,
        className
      )}
      aria-hidden="true"
    >
      <StickerGlyph name={name} size={size} />
    </span>
  );
}
