// ─────────────────────────────────────────────────────────────────────────────
// app/deportistas/layout.tsx
// Layout de la ruta /deportistas — tema claro (light mode por defecto)
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Para Deportistas — Estructura para Crecer Mejor",
  description:
    "ESDEC conecta a deportistas de Córdoba con los profesionales correctos: entrenamiento, nutrición, kinesiología y psicología en un solo sistema coordinado. No te falta esfuerzo. Te falta estructura.",
  keywords: [
    "deportista córdoba",
    "entrenamiento personalizado córdoba",
    "sistema deportivo integral",
    "nutrición deportiva córdoba",
    "psicología deportiva córdoba",
    "kinesiología deportiva córdoba",
    "plan entrenamiento deportista amateur",
    "ESDEC deportistas",
  ],
  alternates: {
    canonical: `${SITE_URL}/deportistas`,
  },
  openGraph: {
    url: `${SITE_URL}/deportistas`,
    title: "Para Deportistas — Estructura para Crecer Mejor | ESDEC",
    description:
      "Entrenamiento, nutrición, recuperación y salud mental integrados en una misma estructura. El ecosistema deportivo de Córdoba para deportistas que quieren crecer mejor.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

export default function DeportistasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
