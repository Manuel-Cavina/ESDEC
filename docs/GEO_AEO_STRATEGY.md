# Estrategia GEO / AEO — ESDEC (Ecosistema Deportivo Córdoba)

**Fecha:** 26 julio 2026
**Alcance:** visibilidad de ESDEC en motores de respuesta generativos (Google AI Overviews, Google AI Mode, ChatGPT Search, Bing Copilot, Perplexity) y en formatos de respuesta directa de Google (fragmentos destacados, panel de conocimiento, resultados enriquecidos).

**Relación con los otros documentos:**
- `docs/SEO_GEO_AUDIT.md` → prompt de auditoría técnica de código (Claude Code).
- `docs/SEO_KEYWORD_MAP.md` → **fuente única de verdad de las prioridades por pilar.** Este documento NO define un orden de prioridad propio: sigue el que está allí (Tecnología → Marketplace → Salud/Bienestar → Educación → Eventos).
- `docs/SEO_GEO_AUDIT_TECNICO.md` → lo genera Claude Code como output de la auditoría.

---

## 0. El problema central de GEO en ESDEC (y por qué es distinto al de SEO)

El SEO clásico pregunta: *¿ranquea esta página?*
El GEO pregunta: *¿el modelo sabe qué es ESDEC, y confía lo suficiente como para citarla?*

Hoy la respuesta a la segunda es **no**, y la causa está verificada:

1. **La entidad "ESDEC" está ocupada.** Al buscar "esdec" a secas, el 100% de los resultados son Esdec BV — estructuras de montaje solar, Países Bajos, fundada en 2004, adquirida por Blackstone y Rivean Capital, parte del grupo Enstall, con más de 100 millones de paneles instalados. Además existen al menos tres homónimos más (Escola de Defesa Civil en Brasil, una escuela en Francia, variantes en España). Cuando un modelo generativo construye la entidad "ESDEC", ESDEC Córdoba no aparece en ningún lado del cálculo.
2. **ESDEC Córdoba casi no existe fuera de su propio sitio.** En la auditoría se verificó que ni siquiera aparece en búsquedas de Instagram; en cambio aparecen @esdecnl, @esdecrj y @ecoleesdec. Un modelo generativo no cita una organización que solo se menciona a sí misma en su propio dominio.
3. **Cero apariciones en resultados enriquecidos** en 3 meses (reporte de "Apariciones en búsquedas" de GSC vino vacío) — no hay fragmentos destacados, ni FAQ, ni breadcrumbs.
4. **Las afirmaciones del sitio no son verificables.** "Integración total", "Inteligencia aplicada", "Seguimiento continuo" son claims de marca sin caso, cifra, fuente ni nombre detrás. Un motor generativo prioriza citar afirmaciones que puede respaldar.

**Conclusión estratégica:** el trabajo de GEO en ESDEC no arranca por escribir más contenido. Arranca por **construir la entidad**: que exista, de forma consistente y verificable, una organización llamada "ESDEC — Ecosistema Deportivo de Córdoba" que es claramente distinta de la empresa de paneles solares.

---

## 1. Definición canónica de entidad (usar textual, sin variaciones)

Esto es lo más importante del documento. Los motores construyen entidades por **consistencia entre fuentes independientes**. Si la descripción cambia en cada lugar, no se consolida.

### 1.1 Descripción corta (una línea — para bios, GBP, metadatos)

> ESDEC es el ecosistema deportivo de Córdoba, Argentina, que conecta deportistas amateurs con profesionales del deporte.

### 1.2 Descripción media (2-3 líneas — para "Sobre nosotros", LinkedIn, prensa)

> ESDEC (Elite Sports Development) es un ecosistema deportivo con sede en Córdoba, Argentina. Conecta deportistas amateurs y semiprofesionales con profesionales del deporte —kinesiólogos, nutricionistas, psicólogos deportivos y entrenadores— a través de una plataforma de acompañamiento diario. Opera sobre seis pilares: Bienestar, Salud Deportiva, Tecnología, Educación, Eventos y Marketplace de profesionales.

### 1.3 Reglas de uso (obligatorias, sin excepción)

- **"ESDEC" nunca aparece sola.** Siempre acompañada de al menos uno: *Córdoba*, *Argentina*, *deportivo/deporte*, *ecosistema deportivo*. Esto aplica a: `<title>`, H1, H2, primer párrafo, alt del logo, nombre de perfiles sociales, nombre en Google Business Profile, firma de emails, pie de piezas gráficas.
- **Nombre canónico completo:** "ESDEC — Ecosistema Deportivo de Córdoba". El nombre legal/expandido "Elite Sports Development" se puede mencionar, pero no reemplaza al canónico.
- **Resolver la relación con "Esencia Deportiva".** En la documentación original del proyecto aparece esta variante de marca. Hay que decidir y declarar explícitamente una de dos opciones:
  - (a) Son la misma organización → declararlo en el sitio ("ESDEC, anteriormente conocida como Esencia Deportiva") y en el `alternateName` del JSON-LD de Organization.
  - (b) Ya no se usa → dejar de mencionarla por completo en cualquier canal.
  La peor opción es la actual: usarla a veces sin declarar la relación, porque genera dos entidades separadas y débiles en vez de una fuerte. **Esta decisión es de Manuel y bloquea parte del trabajo de JSON-LD.**

---

## 2. Preguntas que ESDEC debe responder explícitamente (base de AEO)

Los motores de respuesta extraen respuestas de páginas que responden preguntas **de forma directa, autosuficiente y en texto plano** (no en tarjetas de diseño, no en carruseles, no en imágenes). Cada respuesta debe poder leerse aislada y seguir teniendo sentido.

### 2.1 Preguntas de entidad (van en home + página "Qué es ESDEC")

| Pregunta | Dónde responderla | Nota |
|---|---|---|
| ¿Qué es ESDEC? | Home + `/ecosistema-deportivo-cordoba` | Usar la descripción media de la sección 1.2, textual |
| ¿Qué problema resuelve ESDEC? | `/ecosistema-deportivo-cordoba` | Respuesta concreta, no eslogan |
| ¿Para quién es ESDEC? | Home | Deportistas amateurs y semiprofesionales + profesionales del deporte |
| ¿Cómo funciona ESDEC? | `/deportistas` y `/profesionales` | Los 5 pasos que ya existen en `/deportistas` sirven, hay que ponerlos en texto indexable |
| ¿En qué se diferencia ESDEC de una app de entrenamiento? | `/ecosistema-deportivo-cordoba` | **Diferenciador clave** — responder con los 6 pilares, no con adjetivos |
| ¿Dónde funciona ESDEC? | Home + footer | Córdoba, Argentina (y alcance real actual, sin exagerar) |
| ¿Qué profesionales participan en ESDEC? | `/profesionales` | Con nombres y especialidades reales cuando los haya |
| ¿Cuánto cuesta ESDEC? | Página propia o FAQ | Aunque sea "en etapa inicial, consultanos" — la ausencia total de info de precio es una señal negativa |
| ¿Cómo puede un profesional sumarse a ESDEC? | `/profesionales` | Con proceso concreto |

### 2.2 Preguntas sensibles: IA y datos de salud

Estas requieren cuidado especial porque tocan salud y porque el modelo de scoring tiene ~45% de precisión declarada.

| Pregunta | Cómo responderla |
|---|---|
| ¿ESDEC usa inteligencia artificial? | Sí, explicándolo con honestidad: la IA **sugiere** derivaciones a profesionales, no diagnostica. Nunca presentarla como certeza clínica. |
| ¿Qué datos recopila ESDEC? | Enumerar concretamente (onboarding + pulso diario), sin vaguedades. |
| ¿Cómo protege ESDEC mis datos? | **Bloqueado hoy**: los enlaces de Privacidad y Términos apuntan a `#`. No se puede responder esta pregunta hasta que existan las páginas reales. |
| ¿ESDEC reemplaza a un médico o profesional de la salud? | **No.** Declararlo explícitamente. Contenido educativo, nunca diagnóstico ni prescripción. |

> **Regla no negociable para todo contenido de salud:** nada de lo que publique ESDEC debe presentarse como diagnóstico, prescripción o reemplazo de atención profesional. Esto no es solo cumplimiento — los motores generativos aplican criterios más estrictos a contenido de salud (YMYL), y un claim mal formulado puede costar la citabilidad de todo el dominio.

### 2.3 Preguntas por pilar (cola larga)

Cada pilar en `SEO_KEYWORD_MAP.md` ya tiene consultas informativas que son literalmente preguntas ("cuándo consultar a un kinesiólogo deportivo", "diferencia entre kinesiólogo y fisioterapeuta deportivo", "cómo manejar la ansiedad antes de competir"). Esas son el material de AEO por pilar. **Seguir el orden de prioridad definido allí**, no atacar los 6 a la vez.

**Formato recomendado por respuesta:** pregunta como H2 o H3 → respuesta directa en el primer párrafo (2-4 oraciones, autosuficiente) → desarrollo opcional después. La respuesta directa arriba es lo que se cita.

---

## 3. Evidencia y confianza (lo que hace citable a ESDEC)

Un motor generativo cita lo que puede respaldar. Hoy el sitio tiene afirmaciones sin respaldo. Qué agregar, en orden de facilidad:

1. **Autoría y fechas.** Cada contenido con autor visible y fecha de publicación/actualización. Al inicio puede firmar Manuel como fundador; ideal a futuro: revisión de un profesional matriculado en contenidos de salud.
2. **Credenciales de los profesionales.** Nombre, especialidad y matrícula donde corresponda, en `/profesionales`. Esto es lo que convierte un directorio en fuente citable.
3. **Datos propios.** ESDEC va a generar datos únicos (patrones del pulso diario, perfiles de deportistas amateurs de Córdoba). Un informe propio —aunque sea chico— sobre deporte amateur en Córdoba es el activo GEO más valioso posible: es información que no existe en ningún otro lado, y por eso se cita.
4. **Casos reales.** Con nombre y consentimiento, aunque sean pocos.
5. **Páginas legales operativas.** Privacidad y Términos reales (hoy son `#`). Sin esto, cualquier evaluación de confianza del dominio falla.

**Lo que NO hacer:** inventar cifras de impacto, testimonios genéricos sin nombre, o presentar el scoring de IA como más preciso de lo que es. Un claim falso detectado es peor que no tener claim.

---

## 4. Presencia externa (fuera del sitio)

Este es el punto más descuidado hoy y el de mayor impacto en GEO. Una entidad se construye con **fuentes independientes que coinciden**.

### 4.1 Perfiles propios — consistencia total

Usar la descripción de la sección 1.1/1.2 **textual** en todos:

- Google Business Profile → nombre: "ESDEC — Ecosistema Deportivo Córdoba", categoría de servicios deportivos, área de servicio Córdoba, enlace al sitio. **Es también la vía más directa a un panel de conocimiento**, que alimenta a los modelos.
- Instagram → hoy invisible en búsqueda. Bio con "Córdoba, Argentina" en las primeras palabras y enlace al sitio.
- LinkedIn de la organización → alta prioridad: LinkedIn es fuente de alta confianza para entidades organizacionales.
- Cualquier otro perfil (YouTube, TikTok) → misma descripción, mismo nombre canónico.

Todos estos perfiles después van declarados en `sameAs` del JSON-LD de Organization, que es lo que le dice explícitamente a los motores "todos estos son la misma entidad".

### 4.2 Menciones de terceros (lo que realmente mueve la aguja)

Prioridad por accesibilidad real, no por prestigio:

1. **Profesionales que ya están en la plataforma** → que mencionen y enlacen a ESDEC desde sus propias webs/redes. Es lo más fácil y ya está a mano.
2. **Clubes y academias de Córdoba** con los que haya relación.
3. **Ecosistema emprendedor local** (incubadoras, aceleradoras, comunidades de startups de Córdoba) — suelen tener directorios de proyectos.
4. **Medios deportivos y de tecnología locales** — con un ángulo real (IA aplicada al deporte amateur es una nota interesante).
5. **Universidades / carreras de kinesiología, nutrición, psicología** de Córdoba.
6. **Podcasts y entrevistas** — el fundador hablando del proyecto genera menciones citables.

**Criterio ético (no negociable):** nada de compra de enlaces, directorios artificiales, ni menciones fabricadas. Además de ser penalizable, en GEO es contraproducente: los modelos ponderan la coherencia entre fuentes de calidad, no el volumen.

---

## 5. Acceso de rastreadores de IA

Verificar en `robots.txt` (tarea que se cruza con la Fase A del prompt de Claude Code) que **no estén bloqueados**:

| Bot | Para qué sirve | Recomendación |
|---|---|---|
| `Googlebot` | Búsqueda + AI Overviews | Permitir (crítico) |
| `Bingbot` | Bing + Copilot | Permitir |
| `OAI-SearchBot` | ChatGPT Search — citaciones | **Permitir** — es el que habilita aparecer citado en ChatGPT |
| `GPTBot` | Entrenamiento de modelos OpenAI | Decisión de Manuel: no afecta la citabilidad en búsqueda, solo entrenamiento |
| `PerplexityBot` | Perplexity | Permitir si se quiere visibilidad allí |
| `ClaudeBot` / `anthropic-ai` | Anthropic | Decisión de Manuel |

**Distinción importante:** bloquear bots de *entrenamiento* (GPTBot) no impide aparecer citado en *búsqueda* generativa (OAI-SearchBot). Son decisiones separadas. Verificar la documentación oficial vigente de cada uno antes de escribir las reglas, porque los nombres de user-agent cambian.

**Verificar también** que no haya bloqueos de CDN/WAF (Vercel) que devuelvan 403 a estos user-agents aunque `robots.txt` los permita.

**Sobre `llms.txt`:** se puede agregar como experimento de bajo costo, pero **no es un factor de posicionamiento** en Google ni sustituye robots.txt, sitemap, HTML accesible ni datos estructurados. No invertir tiempo significativo ahí.

---

## 6. Datos estructurados con foco en entidad

El detalle técnico está en el prompt de Claude Code. Acá va solo lo que importa para GEO:

- **`Organization`** (en el layout raíz, con `@id` permanente): `name` canónico, `alternateName` si se resuelve lo de Esencia Deportiva, `description` de la sección 1.2, `logo`, `sameAs` con TODOS los perfiles de la sección 4.1, `address`/`areaServed` en Córdoba, `contactPoint`, `founder`.
- **`WebSite`** con `@id` y relación al Organization.
- **`Service`** por pilar, enlazado al Organization vía `@id`.
- **`ProfilePage` + `Person`** para cada profesional del directorio, con credenciales reales.
- **`FAQPage`** — solo si las preguntas están **visibles en la página**. Marcar FAQ que el usuario no ve es una violación de las guías de Google.
- **`Event`** para eventos propios.

**Regla:** no declarar en JSON-LD ninguna propiedad que no esté visible y sea verdadera en la página. El schema describe lo que hay, no lo que se desearía tener.

---

## 7. Medición

GEO no tiene una métrica directa confiable todavía. Lo que sí se puede medir:

| Qué | Cómo | Frecuencia |
|---|---|---|
| Apariciones en resultados enriquecidos | GSC → "Apariciones en búsquedas" (hoy: vacío = línea base cero) | Mensual |
| Tráfico referido desde asistentes de IA | GA4 → fuentes de referencia: `chatgpt.com`, `perplexity.ai`, `copilot.microsoft.com`, `gemini.google.com`. Crear un segmento propio. | Mensual |
| Citabilidad efectiva | Preguntar manualmente a ChatGPT / AI Overviews / Perplexity: *"¿qué es ESDEC Córdoba?"*, *"plataforma que conecta deportistas con profesionales en Córdoba"*. Registrar si aparece y cómo se la describe. | Mensual, con captura |
| Consolidación de entidad | Buscar "ESDEC Córdoba" y ver si aparece panel de conocimiento | Mensual |
| Consistencia de descripción | Auditar que los perfiles externos sigan usando el texto canónico | Trimestral |

**Línea base a fecha de hoy (26 jul 2026):** cero resultados enriquecidos, cero panel de conocimiento, entidad no reconocida (búsqueda de "esdec" devuelve 100% Esdec BV solar), sin presencia detectable en búsqueda de Instagram. Todo lo que suba desde acá es progreso medible.

---

## 8. Qué bloquea hoy el avance de GEO

En orden de urgencia:

1. **Privacidad y Términos son enlaces muertos (`#`).** Bloquea la pregunta "¿cómo protege mis datos?" y hunde la evaluación de confianza. Es además un tema de cumplimiento (Ley 25.326, Argentina) para un producto que maneja datos de salud.
2. **Decisión pendiente sobre "Esencia Deportiva"** (sección 1.3) — bloquea el `alternateName` del JSON-LD y la consistencia de entidad.
3. **Sin Google Business Profile** — es la vía más directa al panel de conocimiento.
4. **Sin menciones externas** — sin esto, la entidad no se consolida por más schema que se agregue.
5. **Sin evidencia verificable** (autores, matrículas, casos, datos propios).

---

## 9. Qué falta para completar esta estrategia

- Confirmar si ya existe Google Business Profile y LinkedIn de organización.
- Decisión de Manuel sobre "Esencia Deportiva" (sección 1.3).
- Contenido real de `robots.txt` para verificar acceso de bots de IA (viene de la auditoría de Claude Code).
- Lista de profesionales reales activos hoy, con credenciales, para poder construir `/profesionales` como fuente citable.
- Definición de si habrá información pública de precios.
- Repetir las consultas de la sección 7 desde una sesión geolocalizada en Argentina para fijar la línea base con precisión.
