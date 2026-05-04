// app/eventos-deportivos/page.tsx
// Legacy route kept as a compatibility redirect to the canonical events page.

import { redirect } from "next/navigation";

export default function EventosPage() {
  redirect("/eventos-deportivos-cordoba");
}
