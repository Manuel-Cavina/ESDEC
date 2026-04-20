// ─────────────────────────────────────────────────────────────────────────────
// app/eventos-deportivos/[slug]/page.tsx
// Evento individual — stub para MVP 2. Retorna 404 hasta que haya eventos reales.
// ─────────────────────────────────────────────────────────────────────────────

import { notFound } from "next/navigation";

interface EventPageProps {
  params: { slug: string };
}

// En MVP 2: reemplazar con fetch real y generateStaticParams
export default function EventoPage({ params: { slug } }: EventPageProps) {
  // Sin eventos registrados aún — cualquier slug retorna 404
  void slug;
  notFound();
}
