// app/ecosistema-deportivo-cordoba/page.tsx
// El ecosistema integral deportivo ahora vive en el Home ("/").
// Redirect permanente para no duplicar contenido ni romper enlaces existentes.

import { permanentRedirect } from "next/navigation";

export default function EcosistemaDeportivoCordobaPage() {
  permanentRedirect("/");
}
