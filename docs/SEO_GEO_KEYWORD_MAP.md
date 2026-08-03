# Mapa de palabras clave y plan de visibilidad — ESDEC (por pilar y subpilar)

**Fecha:** 26 julio 2026
**Objetivo de este documento:** que ESDEC empiece a aparecer no solo para "esdec" (batalla que hoy es prácticamente imposible de ganar, ver sección 0) sino para las decenas de búsquedas reales que sí puede ganar: cada uno de los 6 pilares y sus subpilares, en Córdoba y luego en Argentina/LATAM.

---

## 0. Realidad del término de marca "esdec" (verificado hoy)

Busqué "esdec" a secas en Google. Los 10 resultados son, sin excepción, sobre **Esdec BV**: empresa neerlandesa de estructuras de montaje para paneles solares, fundada en 2004, adquirida por **Blackstone** y **Rivean Capital**, parte del grupo **Enstall** (junto con IronRidge, PanelClaw, Schletter, Sunfer), con más de 100 millones de paneles instalados y presencia en EE.UU. y Europa. Tiene sitio propio, YouTube, Facebook, cobertura de prensa financiera y varios dominios asociados.

**Conclusión honesta:** competir por "esdec" sola, a nivel global, no es una batalla realista de ganar con SEO — es una empresa de otra escala completamente. Lo que sí confirmó Search Console (ver conversación anterior) es que **en Argentina, para "esdec", ESDEC Córdoba ya aparece en posición ~5.6** — o sea, localmente sí compite, pero con un CTR de 0% porque el resultado no se distingue lo suficiente en la SERP (o el usuario ve primero el resultado internacional y duda).

**Estrategia correcta, entonces:** dejar de perseguir "esdec" pelada como objetivo principal. El objetivo real es que ESDEC aparezca para:
1. "esdec" + desambiguador (Córdoba, Argentina, deporte, deportivo) — esto sí es ganable y es 100% prioritario.
2. Las búsquedas de categoría de cada uno de los 6 pilares, donde la competencia es otra (profesionales locales, academias, clubes) y no una multinacional.

---

## 1. Reglas de desambiguación de marca (aplicar en todo el sitio, ya)

En **todo** title, H1/H2, primer párrafo, alt text de logo, y metadatos, "ESDEC" debe aparecer siempre acompañado de al menos uno de estos: **Córdoba**, **Argentina**, **deporte/deportivo**, **ecosistema deportivo**. Nunca "ESDEC" solo en un H1 o title. Esto no es keyword stuffing — es desambiguación real y necesaria, confirmada por evidencia (CTR 0% en el único término donde ya se compite).

Aplicá lo mismo en:
- Nombre del perfil de Google Business Profile: "ESDEC — Ecosistema Deportivo Córdoba" (no solo "ESDEC").
- Bio de Instagram/redes: siempre con "Córdoba" o "Argentina" visible en las primeras palabras (hoy @esdec.ar no aparece ni en búsquedas de Instagram, según lo verificado en la auditoría anterior).
- `title` del `<head>` global del sitio (Next.js `metadata` o `generateMetadata`): patrón sugerido `"[Página] | ESDEC — Ecosistema Deportivo de Córdoba"`.

---

## 2. Mapa de palabras clave por pilar

**Nota sobre volumen de búsqueda:** no tengo acceso a una fuente verificable de volumen (Keyword Planner, Ahrefs, Semrush) en esta sesión, así que no invento números. La columna "Prioridad" está basada en: (a) relevancia directa a lo que ofrece ESDEC, (b) nivel de competencia inferido de quién aparece hoy en Google para términos relacionados (ver auditoría anterior: Agencia Córdoba Deportes, IMDECO, clubes, profesionales individuales), y (c) la señal real que ya tenés en GSC (`/tecnologia-deportiva-cordoba` con posición 1, aunque con una sola impresión). Cuando tengas acceso a Search Console con más volumen o a una herramienta de keywords, esta priorización se puede afinar con datos reales.

### Pilar 1 — Salud Deportiva (`/salud-deportiva-cordoba`)

| Consulta | Intención | Etapa del embudo | Prioridad | Tipo de contenido |
|---|---|---|---|---|
| kinesiólogo deportivo Córdoba | Comercial/local | Decisión | Alta | Página de servicio + directorio de profesionales |
| médico deportólogo Córdoba | Comercial/local | Decisión | Alta | Página de servicio |
| recuperación de lesiones deportivas | Informativa | Consideración | Media | Guía/artículo |
| prevención de lesiones en deportistas amateurs | Informativa | Descubrimiento | Alta | Guía/artículo (buen candidato a FAQ + AEO) |
| cómo prevenir lesiones de rodilla corriendo | Informativa, cola larga | Descubrimiento | Media | Artículo específico |
| diferencia entre kinesiólogo y fisioterapeuta deportivo | Informativa, cola larga | Descubrimiento | Baja-media | Artículo/FAQ |
| cuándo consultar a un kinesiólogo deportivo | Informativa | Consideración | Media | Artículo/FAQ |
| evaluación de rendimiento deportivo Córdoba | Comercial | Consideración | Media | Página de servicio |
| seguimiento de salud deportiva con IA | Informativa/comercial | Consideración | Media | Cruce con pilar Tecnología |

### Pilar 2 — Bienestar (`/bienestar-deportivo-cordoba`)

| Consulta | Intención | Etapa del embudo | Prioridad | Tipo de contenido |
|---|---|---|---|---|
| psicólogo deportivo Córdoba | Comercial/local | Decisión | Alta | Página de servicio + directorio |
| salud mental del deportista amateur | Informativa | Descubrimiento | Alta | Guía/artículo |
| cómo manejar la ansiedad antes de competir | Informativa, cola larga | Consideración | Media | Artículo |
| bienestar integral del deportista | Informativa | Descubrimiento | Media | Página pilar |
| acompañamiento psicológico deportivo | Comercial | Consideración | Media | Página de servicio |
| burnout en deportistas amateurs | Informativa, cola larga | Descubrimiento | Baja-media | Artículo |

### Pilar 3 — Tecnología (`/tecnologia-deportiva-cordoba`) — **ya con señal positiva real en GSC**

| Consulta | Intención | Etapa del embudo | Prioridad | Tipo de contenido |
|---|---|---|---|---|
| tecnología deportiva Córdoba | Informativa/marca | Descubrimiento | Alta (ya rankea pos. 1 con 1 impresión) | Página pilar — reforzar con más contenido |
| inteligencia artificial aplicada al rendimiento deportivo | Informativa | Descubrimiento | Alta | Artículo/guía — diferenciador único de ESDEC |
| seguimiento deportivo con inteligencia artificial | Informativa/comercial | Consideración | Alta | Página de producto/funcionalidad |
| app de seguimiento deportivo Argentina | Comercial | Consideración | Media | Página comparativa/landing |
| planificación deportiva con IA | Informativa | Consideración | Media | Artículo |
| datos y métricas de rendimiento deportivo | Informativa | Descubrimiento | Media | Artículo/glosario |

**Nota:** este es probablemente el pilar de mejor relación esfuerzo/resultado a corto plazo — baja competencia local directa, es el diferenciador real de ESDEC ("no es solo una app de entrenamiento"), y ya hay una señal positiva real en Search Console.

### Pilar 4 — Educación Deportiva (`/educacion-deportiva-cordoba`)

| Consulta | Intención | Etapa del embudo | Prioridad | Tipo de contenido |
|---|---|---|---|---|
| cursos de entrenamiento deportivo Córdoba | Comercial | Consideración | Media | Página de curso/programa |
| capacitación para entrenadores deportivos | Comercial | Consideración | Media | Página de programa |
| educación deportiva para amateurs | Informativa | Descubrimiento | Media | Página pilar |
| cómo formarse como entrenador deportivo | Informativa | Descubrimiento | Baja-media | Guía |
| certificaciones deportivas Argentina | Informativa | Descubrimiento | Baja | Artículo (competencia con instituciones formales, cuidado con claims) |

### Pilar 5 — Eventos Deportivos (`/eventos-deportivos-cordoba`) — **pilar más difícil, ojo con la competencia**

| Consulta | Intención | Etapa del embudo | Prioridad | Tipo de contenido |
|---|---|---|---|---|
| eventos deportivos Córdoba | Local/navegacional | Descubrimiento | Media (competencia fuerte) | Calendario/página pilar |
| calendario deportivo Córdoba 2026 | Local/navegacional | Descubrimiento | Media | Página dinámica con fechas reales |
| carreras y torneos Córdoba | Local | Descubrimiento | Media | Listado |
| cómo inscribirse a un evento deportivo Córdoba | Transaccional | Decisión | Alta (si ESDEC organiza eventos propios) | Página de inscripción |

**Advertencia importante:** en la auditoría anterior, **Agencia Córdoba Deportes** ya apareció como resultado top para "ecosistema deportivo Córdoba" — es un organismo con mucha más autoridad de dominio (institucional). Para este pilar, la estrategia más realista a corto plazo no es competir por "eventos deportivos Córdoba" en general, sino por **eventos propios de ESDEC con nombre específico** (que no tienen competencia porque no existen en ningún otro lado) y dejar el término genérico para el mediano/largo plazo.

### Pilar 6 — Marketplace / Profesionales (`/market-deportivo-cordoba`, `/profesionales`) — **segunda mejor oportunidad de corto plazo**

| Consulta | Intención | Etapa del embudo | Prioridad | Tipo de contenido |
|---|---|---|---|---|
| marketplace de profesionales deportivos | Informativa/comercial | Descubrimiento | Alta | Página pilar |
| conseguir alumnos como entrenador Córdoba | Comercial (lado profesional) | Decisión | Alta | Landing para profesionales |
| plataforma para entrenadores deportivos | Comercial | Consideración | Media | Landing para profesionales |
| cómo sumar mi consultorio a una plataforma deportiva | Comercial (B2B) | Decisión | Media | Landing B2B |
| software para clubes deportivos | Comercial (B2B) | Consideración | Media | Landing institucional |
| profesionales deportivos cerca de mí Córdoba | Local/transaccional | Decisión | Alta | Directorio `/profesionales` — ya existe, reforzar SEO local |

### Pilar transversal — "Qué es ESDEC" (marca + categoría, base de todo)

| Consulta | Intención | Etapa del embudo | Prioridad | Tipo de contenido |
|---|---|---|---|---|
| ecosistema deportivo Córdoba | Informativa/marca | Descubrimiento | Alta | Home / `/ecosistema-deportivo-cordoba` |
| plataforma deportiva integral Argentina | Informativa | Descubrimiento | Media | Página pilar |
| ESDEC Córdoba | Navegacional/marca | Cualquiera | Máxima | Home — desambiguación directa |
| ESDEC ecosistema deportivo | Navegacional/marca | Cualquiera | Máxima | Home |
| app que conecta deportistas con profesionales Córdoba | Informativa/comercial | Descubrimiento | Media | Home o página pilar |

---

## 3. Priorización general (con qué arrancar primero)

**Orden recomendado de ataque, cruzando oportunidad real con esfuerzo:**

1. **Desambiguación de marca en todo el sitio** (sección 1) — esto no es contenido nuevo, es corregir lo existente. Impacto inmediato potencial en el único término donde ya hay tracción real ("esdec" en Argentina, hoy con CTR 0%).
2. **Pilar Tecnología** — ya tiene señal positiva real en GSC, baja competencia, es el diferenciador único de ESDEC.
3. **Pilar Marketplace/Profesionales** — poca competencia específica local, y tiene el beneficio extra de captar profesionales (lado de la oferta), que es un objetivo de negocio en sí mismo, no solo de tráfico.
4. **Pilar Salud Deportiva y Bienestar** — buen volumen potencial (kinesiólogos, psicólogos deportivos son búsquedas reales y frecuentes), pero más competencia de profesionales individuales con sus propias páginas/redes.
5. **Pilar Educación** — relevante pero menos urgente si todavía no hay oferta de cursos consolidada.
6. **Pilar Eventos** — dejarlo para cuando haya eventos propios con nombre concreto; el término genérico tiene competencia institucional fuerte (Agencia Córdoba Deportes).

---

## 4. Qué hace falta técnicamente para que esto funcione (resumen, ya cubierto en el prompt de Claude Code)

Este mapa de keywords no sirve de nada si la base técnica no acompaña. Recordatorio de lo que ya quedó pedido en `docs/SEO_GEO_AUDIT.md`:

- Confirmar/crear JSON-LD (Organization, WebSite, y `Service` o `ProfilePage` por cada pilar/profesional).
- FAQ visible en texto plano por página de pilar (no solo tarjetas de diseño) — cada tabla de arriba tiene varias consultas informativas que son, literalmente, preguntas frecuentes.
- H2 con la keyword real de cada pilar debajo del H1 de marca (hoy los H1 son eslóganes sin keyword).
- Enlaces internos entre pilares relacionados (ej.: Salud Deportiva ↔ Tecnología cuando se habla de seguimiento con IA).
- Google Business Profile con categoría correcta y área de servicio en Córdoba.

---

## 5. Qué falta para afinar este mapa

- **Datos de volumen real de búsqueda** (Keyword Planner, Search Console con más historial, o una herramienta como Ahrefs/Semrush/Ubersuggest) para confirmar cuáles de estas consultas tienen tráfico real y cuáles son hipótesis sin demanda.
- **Confirmación de qué eventos, cursos y profesionales concretos** tiene ESDEC hoy activos, para saber qué contenido se puede escribir con evidencia real (nombres, casos, fechas) en vez de genérico.
- Repetir la consulta "esdec" en Google **desde una sesión geolocalizada en Argentina** (yo la hice sin geolocalización específica) para confirmar exactamente qué aparece arriba de ESDEC Córdoba en la SERP local — eso terminaría de confirmar la hipótesis del CTR 0%.
