// components/RelatedGuides.tsx
// Bloque "Para saber más" — enlaces internos desde una landing de pilar
// hacia sus guias relacionadas (content/guias.ts).

import Link from "next/link";
import type { Guide } from "@/lib/guides";
import { getGuidePath } from "@/lib/guides";

interface RelatedGuidesProps {
  guides: Guide[];
}

export default function RelatedGuides({ guides }: RelatedGuidesProps) {
  if (guides.length === 0) return null;

  return (
    <div className="mx-auto max-w-landing px-6 py-14">
      <p className="font-condensed text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[var(--t2)]">
        Para saber más
      </p>
      <div className="mt-4 flex flex-col gap-2">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={getGuidePath(guide.slug)}
            className="font-condensed text-[1.1rem] font-bold uppercase leading-snug tracking-tight text-[var(--p1)] no-underline transition-colors hover:text-[var(--t1)]"
          >
            {guide.title} →
          </Link>
        ))}
      </div>
    </div>
  );
}
