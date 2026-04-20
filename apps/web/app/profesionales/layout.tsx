// ─────────────────────────────────────────────────────────────────────────────
// app/profesionales/layout.tsx
// Layout de la ruta /profesionales — activa modo oscuro (dark mode).
// .dark es una clase CSS en globals.css — el wrapper div la aplica a todo el
// árbol sin necesidad de tocar <html>.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Para Profesionales — Escalá tu Práctica Deportiva",
  description:
    "ESDEC conecta a profesionales del deporte (kinesiología, nutrición, psicología, coaching) con deportistas dentro de un ecosistema coordinado en Córdoba, Argentina. Tu conocimiento ya tiene valor — le falta plataforma.",
  keywords: [
    "profesional deportivo córdoba",
    "kinesiología deportiva córdoba",
    "nutricionista deportivo córdoba",
    "psicólogo deportivo córdoba",
    "coaching deportivo córdoba",
    "red profesionales deporte argentina",
    "plataforma profesionales deportivos",
    "ESDEC profesionales",
  ],
  alternates: {
    canonical: `${SITE_URL}/profesionales`,
  },
  openGraph: {
    url: `${SITE_URL}/profesionales`,
    title: "Para Profesionales del Deporte — Escalá tu Práctica | ESDEC",
    description:
      "Visibilidad, coordinación y acceso a deportistas dentro de un sistema serio. El ecosistema deportivo de Córdoba para profesionales que quieren ejercer mejor.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ProfesionalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // El div .dark activa todas las CSS vars del tema navy sin modificar <html>
  return <div className="dark">{children}</div>;
}
