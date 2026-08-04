// lib/faq.ts
// Helper to build FAQPage JSON-LD from a page's visible FAQ content.
// Only call this for FAQ content that is actually rendered as plain text on the page —
// Google's guidelines prohibit FAQPage markup for hidden or non-existent content.

export interface FAQItem {
  question: string;
  answer: string;
}

export function buildFaqJsonLd(items: readonly FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
