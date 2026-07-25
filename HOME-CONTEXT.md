# HOME ESDEC — Contexto y visión de rediseño

Documento de referencia para la reorganización del home de ESDEC. Se actualiza a medida que cambian las decisiones de diseño — no es un artefacto de código, es la brújula antes de tocar componentes.

**Estado: implementado.** El home (`/`) ya renderiza el ecosistema integral deportivo. Ver sección 7.

---

## 1. Decisión de fondo

El home deja de ser un gate de selección de audiencia (`HeroSectionRouted` — split-screen deportista/profesional) y pasa a ser la página que hoy vive en `/ecosistema-deportivo-cordoba`.

**Por qué:**
- El split-screen obliga a elegir antes de mostrar una sola idea de qué es ESDEC. El único efecto real de esa elección es el label del botón del Navbar — no hay personalización profunda que la justifique.
- Las páginas de área (Bienestar, Salud, Educación, etc.) ya resuelven la segmentación de audiencia con dos CTAs propios (`athleteCtaLabel` / `professionalCtaLabel`) dentro del contenido. No hace falta repetir el gate en la puerta de entrada.
- El objetivo del MVP 0 es instalar una idea clara antes de pedir una acción (ver CLAUDE.md, orden narrativo "impacto → comprensión → amplitud → emoción → diagnóstico → acción"). Mostrar el mapa completo del ecosistema apenas se entra es más coherente con eso que forzar una bifurcación.

**Qué pasa con el split-screen actual:** el selector deportista/profesional dejará de ser la puerta de entrada. Sus dos CTAs (`/deportistas`, `/profesionales`) se conservan como acciones dentro del nuevo home (hero y/o CTA de cierre), no como gate obligatorio.

---

## 2. Diagnóstico del estado actual de `/ecosistema-deportivo-cordoba`

Confirmado leyendo el código, no a ojo:

| Sección actual | Componente | Estado |
|---|---|---|
| Hero | `sections/ecosistema/HeroSection.tsx` | **Débil.** Hero bespoke, estático, centrado. No usa el patrón de marca (stamp-word animation, fingerprint flotante, layout ancorado abajo) que sí usan Bienestar/Salud/Eventos/Educación. Es la causa principal de que "no haya quedado igual a las demás". |
| Objetivo/Visión/Misión | `sections/ecosistema/MVVSection.tsx` | **Corregido — ya en uso.** Componente completo (manifiesto tipográfico + acordeón con los 3 items de `ECOSISTEMA_MVV`), nunca estaba wireado en `page.tsx`. Reemplaza a `WhatIsSection` desde ahora. |
| Lo que define a ESDEC | `sections/ecosistema/PrinciplesSection.tsx` | **Corregido — ya en uso.** Componente completo con los 6 principios reales de `ECOSISTEMA_PRINCIPLES` (lista tipográfica con hover), tampoco estaba wireado. `WhatIsSection` solo mostraba 3 de los 6, mal etiquetados como "Clave 01/02/03". |
| Banner de convicción | `sections/ecosistema/ConvictionBannerSection.tsx` | Bien. Franja con 3 highlights, calidad consistente con el resto del sitio. |
| Visualización del ecosistema | `sections/ecosistema/EcosystemVisualization.tsx` | **Fuerte.** Diagrama orbital: centro con logo ESDEC + 6 pilares conectados, hover interactivo, fingerprint animado, buena factura. Es la pieza más lograda de la página actual y candidata a protagonizar el nuevo hero. |
| CTA de cierre | `sections/ecosistema/CTASection.tsx` | Sin revisar en detalle, pendiente de auditoría en la fase de implementación. |

**Corrección respecto a la primera versión de este documento:** `MVVSection.tsx` y `PrinciplesSection.tsx` NO son código muerto — son las versiones completas y ya usan la paleta fija oscura (`#050e1a` / `#07152a`) consistente con `ConvictionBannerSection` y `EcosystemVisualization`. Ya reemplazaron a `WhatIsSection.tsx` en `page.tsx` (ver sección 5).

**Deuda técnica real:** los archivos `*Variants.tsx` (`MVVSectionVariants.tsx`, `PrinciplesSectionVariants.tsx`, `EcosistemaAbout360Variants.tsx`) sí son borradores de exploración (variantes A/B/C con paleta CSS-var en vez de la paleta fija de esta página) — quedan pendientes de eliminar. `RecorridosSection.tsx`, `SinESDECSection.tsx` y `WhoWeAreSection.tsx` quedan pendientes de auditoría antes de decidir si se eliminan o se reutilizan.

---

## 3. Dirección visual elegida para el nuevo Hero

Se evaluaron dos caminos:

- ~~Reusar `SharedHeroSection` tal cual~~ (máxima consistencia, pero trata al home como "una página de área más").
- **Elegido: tratamiento propio y más ambicioso.** El home es la puerta de entrada a TODO el ecosistema, no a un pilar — merece un hero distinto en estructura, aunque hablando el mismo lenguaje visual que el resto del sitio.

**Qué significa "mismo lenguaje visual, layout distinto":**
- Mismos tokens de marca: `FingerprintSVG`, `BrandLines`, `Kicker`, paleta de `var(--bg)/--p1/--p2/--t1/--t2`, animaciones ya existentes (`animate-heartbeat`, `animate-fp-float`, dot-grid, orbit).
- Layout propio, no el de `SharedHeroSection` (no hace falta el mismo bottom-anchored + stats bar de las páginas de área).
- La visualización orbital de 6 pilares (`EcosystemVisualization`) es candidata fuerte para integrarse al Hero mismo, en vez de vivir como sección aparte más abajo — es la pieza que mejor comunica "esto es un sistema, no una landing más".

---

## 4. Estructura narrativa propuesta para el nuevo home

Borrador de orden — a validar antes de tocar código:

1. **Hero propio** — statement de marca + visualización orbital de los 6 pilares integrada (o inmediatamente debajo, sin salto visual). Sin gate de audiencia; los dos CTAs (deportista/profesional) conviven acá como acciones, no como bifurcación obligatoria.
2. **Qué es ESDEC** (`WhatIsSection` — se conserva, ya está bien resuelta).
3. **Banner de convicción** (`ConvictionBannerSection` — se conserva).
4. **CTA de cierre** — auditar si conviene migrar a `SharedCTASection` para consistencia con el resto del sitio (Bienestar/Salud/Eventos/Educación ya lo usan).

---

## 5. Qué se reutiliza vs. qué se construye nuevo

**Se reutiliza:**
- `EcosystemVisualization.tsx` (orbital) — probablemente con ajustes de layout para integrarse al hero.
- `MVVSection.tsx`, `PrinciplesSection.tsx`, `ConvictionBannerSection.tsx` — ya wireados, sin cambios grandes, solo auditoría de consistencia.
- Contenido de `content/ecosistema.ts` (pillars, MVV, principles) — se audita, no se reescribe desde cero.

**Se construye nuevo:**
- Hero propio del home (nombre tentativo: `EcosistemaHeroSection.tsx` o se reescribe `HeroSection.tsx` in place).

**Se elimina (pendiente de confirmar en la fase de implementación):**
- `WhatIsSection.tsx` — reemplazado por `MVVSection.tsx` + `PrinciplesSection.tsx`, queda huérfano.
- Los archivos `*Variants.tsx` (borradores A/B/C, ver sección 2).
- `HeroSectionRouted.tsx` dejará de usarse en `/` — decidir si se borra o se conserva por si se reutiliza el split-screen en otro punto del funnel (ej. dentro del nuevo home, como bloque secundario, no como gate).
- `RecorridosSection.tsx`, `SinESDECSection.tsx`, `WhoWeAreSection.tsx` — pendientes de auditoría antes de decidir.

---

## 6. Próximos pasos

1. ~~Validar este documento con el usuario.~~ Hecho.
2. ~~Auditar `CTASection.tsx` de ecosistema.~~ Hecho — título normalizado, estructura de doble CTA (deportista/profesional) se conserva porque tiene sentido en el cierre del home.
3. Rediseñar el Hero propio integrando la visualización orbital (`EcosystemVisualization`) — sigue pendiente, hoy el Hero conserva su estructura original solo con el título normalizado.
4. ~~Wiring de `/` → contenido de ecosistema + limpieza de archivos muertos.~~ Hecho, ver sección 7.
5. ~~Actualizar rutas.~~ Hecho — `/ecosistema-deportivo-cordoba` ahora hace `permanentRedirect("/")`.
6. Auditar `RecorridosSection.tsx`, `SinESDECSection.tsx`, `WhoWeAreSection.tsx` — siguen sin uso, pendiente decidir si se reutilizan o se eliminan.

---

## 7. Qué se implementó (resumen ejecutivo)

- **Routing:** `app/page.tsx` ahora renderiza `EcosistemaLanding` (nuevo orquestador en `sections/ecosistema/EcosistemaLanding.tsx`: Hero → MVV → Principles → ConvictionBanner → EcosystemVisualization → CTA). `app/ecosistema-deportivo-cordoba/page.tsx` hace `permanentRedirect("/")`. Todos los links internos que apuntaban a `/ecosistema-deportivo-cordoba` (Navbar, footer, breadcrumbs JSON-LD, CTAs de Educación, `AreaInDevelopmentPage`) se actualizaron a `/` directamente, sin pasar por el redirect. `sitemap.ts` ya no tiene la entrada duplicada.
- **Colores normalizados:** `MVVSection` pasó de `#050e1a` a `#001a33` (el `--bg` oscuro canónico del proyecto). `PrinciplesSection` pasó de `#07152a` a `#001f3f` (mismo tono que ya usa Eventos). Ambos ahora encadenan con `ConvictionBannerSection` (`#01305c`) y `EcosystemVisualization` (`#3269c7`) como una familia de azules coherente, en vez de tonos únicos inventados para esta página.
- **Títulos normalizados:** Hero, CTA, Principles y EcosystemVisualization dejaron de usar `.ecos-title`/`.ecos-title-compact` (hasta `clamp(3rem,7vw,6.1rem)`, ~98px) y ahora usan el mismo `font-condensed text-[clamp(36px,5vw,68px)] font-black uppercase leading-[0.92] tracking-tight` que Bienestar/Salud/Eventos/Educación. El manifiesto de MVVSection bajó de `clamp(3.4rem,9vw,8rem)` (~128px) a `clamp(2.4rem,5vw,4.5rem)` (~72px).
- **Eyebrows normalizados:** `MVVSection` y `PrinciplesSection` dejaron de tener un `<p>` a mano para el eyebrow y ahora usan el componente compartido `<Kicker>`, igual que el resto del sitio.
- **Limpieza:** se borraron `WhatIsSection.tsx` (reemplazado), `HeroSectionRouted.tsx` (split-screen, ya sin uso), `MVVSectionVariants.tsx` y `PrinciplesSectionVariants.tsx` (borradores A/B/C nunca usados) — confirmado que no tenían más importadores antes de borrar.
- **Pendiente real:** el Hero de ecosistema sigue con su estructura original (solo se le normalizó el tamaño del título) — la integración de la visualización orbital al Hero (sección 3) todavía no se hizo.

---

## 8. Segunda vuelta — Hero estándar y retemizado completo

El usuario pidió revertir la sección 3: en vez de un Hero propio, quiere el mismo `SharedHeroSection` que usan Bienestar/Salud/Eventos/Educación, y que toda la página hable el mismo lenguaje de color que el resto del sitio (no una paleta fija propia).

**Cambios aplicados:**
- `EcosistemaLanding.tsx` ahora arma el Hero con `SharedHeroSection` directamente (igual que `BienestarLanding.tsx`), sin componente `HeroSection.tsx` propio — se borró.
- `ECOSISTEMA_HERO` en `content/ecosistema.ts` se reescribió al shape que espera `SharedHeroSection` (`headlinePre`/`headlineAccent`/`body`/`ctaLabel`/`ctaHref`/`stats: {label,title}[]`). El CTA del Hero ahora ancla a `#que-es-esdec` en vez de forzar deportista/profesional — esa elección se conserva para el CTA de cierre (que ya tenía los dos botones).
- Imagen de Hero: `/images/team/Personas_maraton.jpg` (antes reusaba `Correr_lluvia_1.jpg`, la misma que Bienestar).
- **Todas las secciones pasaron de hex fijos a los tokens del tema** (`var(--bg)`, `var(--bg2)`, `var(--t1)`, `var(--t2)`, `var(--p1)`, `var(--p2)`) y se sacaron los overrides locales de CSS vars (`[--p1:...] [--card-bg:...]` etc.) que forzaban una paleta oscura fija sin importar el toggle claro/oscuro. Esto significa que ahora el home responde al theme toggle igual que el resto del sitio.
- Orden final de secciones: Hero → MVV (Objetivo/Visión/Misión, `var(--bg2)`) → Principles (Lo que define a ESDEC, `var(--bg)`) → EcosystemVisualization (orbital, `var(--bg2)`) → ConvictionBanner (`var(--bg)`) → CTA (`var(--bg)`). Se subió la Visualización un lugar (antes iba después del banner) porque es el bloque más denso/exploratorio y encaja mejor antes del cierre emocional del banner.
- Acentos de gradiente (`#7cc8ff→#7de8a8` a mano) reemplazados por la clase compartida `.ecos-title-accent` (usa `var(--p1)`/`var(--p2)` ya definidos por tema).
- Colores por pilar en `EcosystemVisualization` (cada área tiene su accent propio: verde bienestar, celeste clínica, etc.) se dejaron intactos — son semánticos, no del sistema de tema.

---

## 9. Tercera vuelta — sacar interacciones que esconden contenido

Diagnóstico: siendo la puerta de entrada a ESDEC, la página necesita explicar bien, no esconder contenido detrás de una interacción. Dos problemas concretos detectados:
- `PrinciplesSection` mostraba la descripción de cada principio solo en `hover` — invisible en mobile (touch no tiene hover), o sea la mitad del contenido de esa sección nunca se veía para gran parte del tráfico.
- `MVVSection` era un acordeón cerrado por defecto — el visitante veía "Objetivo/Visión/Misión" como labels sueltos y tenía que hacer click para leer el contenido real, justo en la sección más institucional de la página.

**Cambios aplicados:**
- `MVVSection`: se sacó el acordeón (y el `useState`/`"use client"` que ya no hacía falta). Objetivo, Visión y Misión ahora son 3 cards siempre visibles (número + label + headline + body completo), en grid de 3 columnas en desktop / apiladas en mobile — mismo patrón `spec-card-accent` que ya usa el resto del sitio (número + accent line + título + texto, todo a la vista, sin gate de interacción).
- `PrinciplesSection`: se sacó el `hover`-gate de las descripciones — ahora el body de cada uno de los 6 principios se muestra siempre, debajo del título. Se mantiene la lista tipográfica grande (funciona bien para 6 items) y la flechita en hover como detalle decorativo nada más, sin esconder contenido.
- Consecuencia esperada: la página es más larga (más scroll), lo cual es el precio correcto para una página que tiene que explicar bien ESDEC — no es una landing de venta rápida como Bienestar/Salud.

---

## 10. Cuarta vuelta — de "cuadrados" a filas editoriales con más peso visual

El usuario sintió que las 3 cards de MVV y la lista plana de Principles quedaron demasiado chicas/genéricas para ser la puerta de entrada — pidió que se noten más.

**MVVSection:** las 3 cards en grilla se reemplazaron por filas editoriales a todo el ancho (una por Objetivo/Visión/Misión). Cada fila tiene: número gigante de fondo (`font-display text-[140px]/[220px]` en `opacity-[0.06]`, sangrando del borde derecho), el label (Objetivo/Visión/Misión) como `Kicker` a la izquierda, y a la derecha un headline grande estilo stamp (`clamp(2rem,4.5vw,3.6rem)`) + el body completo. Separadas por `border-b`, sin caja/borde de card — sigue la escala del manifiesto de arriba en vez de cortarla de golpe.

**PrinciplesSection:** cada fila de la lista tipográfica ahora tiene una barra de acento a la izquierda (color propio de `item.accent`, ya existía en el content pero antes solo teñía el numerito y la flecha) y un número gigante de fondo del mismo color en baja opacidad, sangrando del borde derecho. El numerito chico y el título se mantienen igual para no perder el escaneo rápido de 6 items.

Ambos cambios usan solo `var(--t1)`/`var(--t2)` y el `accent` propio del content — nada de hex nuevo. Sin interacciones que escondan contenido (se mantiene la decisión de la vuelta anterior).

---

## 11. Quinta vuelta — de "poster/hype" a tono institucional

El usuario no quedó convencido con las filas editoriales grandes: sintió que leían más a "poster de gimnasio" que a plataforma seria. Diagnóstico: números gigantes fantasma, tipografía condensada enorme en mayúsculas y texto con gradiente son recursos de "landing de impacto", no de contenido institucional (Misión/Visión/Objetivo, valores). Se bajó la intensidad decorativa en ambas secciones:

- **MVVSection:** se sacaron los números gigantes de fondo y las filas a todo el ancho. Ahora son 3 columnas parejas (`md:grid-cols-3`), cada una con: badge circular chico con el número, `Kicker` con el label, título en `font-condensed` pero peso medio y sin mayúsculas forzadas (antes `font-black uppercase`), acento como color sólido (`text-[var(--p2)]`) en vez de gradiente. Separador simple `border-t` arriba de la fila, sin caja.
- **PrinciplesSection:** mismo criterio — se sacó el número gigante de fondo, la barra de acento lateral y la flecha de hover (ya no tenía función real tras sacar el hover-gate). Quedó una lista simple: badge circular con el número (color del accent del principio), título de peso medio sin mayúsculas forzadas, texto debajo. Separadores finos (`divide-y`) entre filas.
- El manifiesto grande de arriba y el header de "Lo que define a ESDEC" se mantuvieron sin cambios — ahí el tono de impacto sigue siendo apropiado (es la declaración de marca, no el detalle institucional).

Resultado esperado: más calma, más "plataforma seria en la que confiás tu proceso", menos "landing de hype".

---

## 12. Sexta vuelta — el manifiesto se veía plano ("no me dice nada")

El usuario mandó un screenshot: el bloque del manifiesto ("NO SOMOS UNA SUMA DE SERVICIOS. SOMOS EL SISTEMA.") se veía como un bloque de color plano con 5 líneas de texto todas del mismo tamaño y peso — sin foco, sin textura de fondo. Diagnóstico: a diferencia de Hero/EcosystemVisualization (que tienen grid de puntos + huella de fondo para dar profundidad), esta sección no tenía ninguna textura — era un `bg-[var(--bg2)]` liso. Y el manifiesto no tenía jerarquía: 5 líneas separadas del mismo `clamp` y mismo peso, sin build-up ni punch.

**Cambios aplicados:**
- Contenido: `ECOSISTEMA_MVV.manifestoLines` (array de 5 líneas sueltas) se reemplazó por `manifestoLead` ("No somos una suma de servicios.") + `manifestoPunch` ("Somos el sistema.").
- El lead se renderiza más chico y en peso medio (`clamp(1.6rem,3vw,2.4rem)`, `font-medium`, color `var(--t2)`) — es el build-up. El punch es la frase grande y dominante (`clamp(2.8rem,6vw,5.2rem)`, `font-black`, con el accent gradient) — ahí está el foco visual.
- Se agregó textura de fondo: el mismo grid de puntos sutil (`opacity-[0.07]`) que usa `HeroSection`/`BienestarSystemSection`, más una `FingerprintSVG` estática y muy tenue (`opacity-[0.05]`) a la derecha, solo desktop — sin animación, para no romper el tono institucional ya bajado en la vuelta anterior.

---

## 13. Séptima vuelta — Principios en grilla con íconos

`PrinciplesSection` pasó de lista vertical de una columna a grilla de 2 columnas × 3 filas (`sm:grid-cols-2`). Cada principio sumó un `icon` en `content/ecosistema.ts` (mapeado a íconos ya existentes en `StickerIcon`: Integración total→`estructura`, Seguimiento continuo→`progreso`, Inteligencia aplicada→`tecnologia`, Criterio profesional→`criterio`, Comunidad real→`equipo`, Escalabilidad→`escala`) en vez de depender solo del numerito. Cards con borde sutil, sin gradientes ni elementos "de impacto" — mismo tono institucional que el resto de la página.

**Ajuste inmediato:** las cards habían quedado con un borde/fondo inventado a mano (`border-white/10`, `bg-white/[0.02]`) en vez de los tokens de card reales del sistema (`var(--card-bg)`/`var(--card-bd)`/`var(--card-bg2)`, ya definidos por tema en `globals.css` y usados en el resto de las cards del sitio) — se veían débiles/sin terminar al lado del resto de la página. Se corrigió a los tokens reales, y el ícono ahora vive dentro de un chip circular con el color del principio de fondo suave (`${item.accent}1f`) en vez de flotar suelto.

---

## 14. Octava vuelta — reset completo: el home deja de ser institucional

El usuario pidió salir por completo del molde Objetivo/Visión/Misión/Principios para el home. Pidió: navegabilidad explícita (esto es el home, acá los 6 pilares, acá deportista/profesional), impacto emocional (seguridad, confianza, evolución), alusión implícita a una futura app sin nombrarla, y que se optimizara para SEO/GEO en el proceso.

**Decisiones tomadas (confirmadas con el usuario o resueltas por mí cuando pidió que decidiera):**
- Objetivo/Visión/Misión y "Lo que define a ESDEC" **se mudan a `/nosotros`** (página nueva, indexable, con su propio `AboutPage` JSON-LD, metadata y canonical) — no se pierden, se reubican para no diluir la navegabilidad del home ni restar profundidad de contenido SEO de esa URL.
- El Hero suma una línea de alusión implícita a app/portabilidad: *"todo tu proceso, en un mismo lugar, siempre a mano"* — sin nombrar "app" en ningún lado.
- El orden de navegación prioriza **Deportista/Profesional primero**, con las 6 áreas como contexto secundario debajo (confirmado explícitamente).
- El bloque de confianza se ancla en **datos reales**, no adjetivos sueltos (mismo criterio que ya usa el Hero con sus stats).

**Nueva estructura del home (`EcosistemaLanding.tsx`):**
1. Hero (`SharedHeroSection`, sin cambios de componente, copy ajustado)
2. **`AudienceNavSection`** (nueva) — dos caminos grandes (Deportista/Profesional) como cards clickeables, con las 6 áreas del ecosistema como chips de contexto debajo (reutiliza `AREA_PAGES`/`AREA_PAGE_ORDER` de `content/areas.ts`, no duplica data). Ancla `#elegir-camino` (el CTA del Hero apunta acá).
3. `EcosystemVisualization` (orbital, sin cambios)
4. **`TrustSection`** (nueva) — Seguridad/Confianza/Evolución, cada una con ícono + stat real + texto, mismo lenguaje de cards que el resto de la página. Incluye un link a `/nosotros` para quien quiera el detalle institucional completo.
5. `ConvictionBannerSection` (sin cambios)
6. `CTASection` (sin cambios)

**Nueva página `/nosotros`:** reutiliza `MVVSection` y `PrinciplesSection` tal cual (no se reescribieron, solo cambiaron de página) — metadata propia, canonical, `AboutPage` JSON-LD, agregada a `sitemap.ts` y linkeada desde el Footer ("Quiénes somos") y desde `TrustSection` en el home.

**Ajustes de SEO/GEO aplicados:**
- El body del Hero y de `AudienceNavSection`/`TrustSection` llevan las keywords reales ("ecosistema deportivo", "Córdoba", "deporte amateur") en el texto de soporte, no solo en el headline corto.
- `/nosotros` no queda huérfano: metadata + canonical + JSON-LD propios, en sitemap, linkeado desde Footer y desde el home.
- Los links a las 6 áreas y a deportista/profesional siguen siendo prominentes en el home — reparten autoridad hacia las páginas de área.
- La base técnica de SEO/GEO ya existente en `app/layout.tsx` (Organization JSON-LD con dirección de Córdoba, metadata con keywords, geo-tags, canonical, robots) no se tocó — ya era sólida.

---

## 15. Novena vuelta — consolidar los 6 pilares, sacar la redundancia

El usuario mandó screenshots de 3 problemas: los chips de "6 áreas" se veían planos y sin decir nada; la Visualización orbital se sentía "pegada", con un estilo de impacto (glow, fotos con overlay dramático) que no pasó por ninguna de las pasadas de consistencia del resto de la página; y el Banner de convicción era "mucho texto que no dice nada" — diagnóstico real: para cuando el visitante llega ahí ya se dijo "somos un sistema integral" tres veces (Hero, Nav, Confianza), era el mismo mensaje repetido una cuarta vez.

**Cambios aplicados:**
- Se sacaron los chips de "6 áreas" de `AudienceNavSection` (quedó solo con las 2 cards Deportista/Profesional).
- Se borraron `EcosystemVisualization.tsx` y `ConvictionBannerSection.tsx` (confirmado sin más importadores antes de borrar).
- Se creó `PillarsGridSection.tsx`: una sola grilla de 6 cards (mismo lenguaje `var(--card-bg)`/`var(--card-bd)` + chip circular de ícono que ya validamos en Confianza/Principios), usando `ECOSISTEMA_ECOSYSTEM.pillars` como fuente de datos — la misma data que antes alimentaba el diagrama orbital, ahora en un solo lugar bien resuelto en vez de duplicado en dos tratamientos distintos.
- `/nosotros` se mantiene — el usuario decidió conservarla aunque no esté seguro de cuánto suma, para no perder el contenido institucional ya escrito.

**Estructura final del home:** Hero → Elegí tu camino (Deportista/Profesional) → Las 6 áreas (grilla única) → Confianza (Seguridad/Confianza/Evolución) → CTA de cierre. Más corto que la versión anterior, sin repetir el mismo mensaje varias veces.

---

## 16. Décima vuelta — reordenar y sacar la última redundancia (Trust + CTA)

El usuario dudó de que Deportista/Profesional debiera ser lo primero después del Hero, dijo que "Todo conectado desde el centro" (headline de la grilla de pilares) no decía nada por ser copy pensado para el diagrama orbital viejo, y pidió sacar o repensar `TrustSection` porque no le gustaba.

**Diagnóstico:** Deportista/Profesional es la **acción**, no el impacto inicial — en el orden narrativo del sitio (impacto → comprensión → amplitud → emoción → acción) va cerca del final, no en el segundo scroll. Y `TrustSection` (Seguridad/Confianza/Evolución) resultó ser el mismo error que ya habíamos cortado con Objetivo/Visión/Misión: cambiamos 3 sustantivos institucionales por otros 3, y encima es redundante con los stats que ya tiene el Hero (247+ perfiles, 6 pilares, etc.) — el mismo mensaje de "confiá en nosotros con datos" repetido dos veces.

El usuario tambien pidio que el CTA de cierre no sea solamente el fork deportista/profesional repetido — que muestre otra cosa.

**Cambios aplicados:**
- Se borró `TrustSection.tsx` (huérfano confirmado antes de borrar).
- `ECOSISTEMA_ECOSYSTEM.headline/subtext` (grilla de pilares) se reescribió a algo concreto: "Todo lo que necesitás, en un mismo sistema" + subtexto que nombra las 6 áreas explícitamente (bueno también para SEO).
- `CTASection.tsx` se reescribió para usar **`SharedCTASection`** (el mismo componente que ya usan Bienestar/Salud/Educación/Eventos) en vez del layout a medida de dos botones — cierra con la frase de marca ("El futuro del deportista no se improvisa. Se construye.") + un único CTA a WhatsApp + un link secundario a Eventos. Es la primera vez que el home usa el patrón de CTA estándar del sitio en vez de una variante propia.
- Nuevo orden: **Hero → Las 6 áreas → Elegí tu camino (Deportista/Profesional) → CTA de cierre**. El fork de audiencia se movió al final del recorrido, justo antes del cierre, en vez de ser el segundo bloque.

---

## 17. Undécima vuelta — bug de ancla, escala de títulos, copy hablándole a un solo público, y falta un "llamador"

Haciendo el ejercicio de storytelling (recorrer el home como primera visita) encontré un bug real: el botón del Hero decía "Ver el ecosistema" pero apuntaba a `#elegir-camino` (la sección de audiencia), salteándose la sección de las 6 áreas — que es literalmente "el ecosistema". El usuario pidió arreglar esto, además de: títulos de sección más grandes (como los de `/deportistas`, no como la escala calma que usamos en Bienestar/Educación), copy que hable a deportistas Y profesionales por igual (no solo "vos, deportista"), y un "llamador" — algo que enganche — antes de mostrar la grilla de pilares.

**Hallazgo de escala de títulos:** el sitio tiene DOS escalas de título distintas conviviendo — la que usamos en Bienestar/Educación/Eventos (`clamp(36px,5vw,68px)`, la que llamamos "estándar" en vueltas anteriores) y la que ya usan `SharedCTASection` y las páginas `/deportistas`/`/profesionales` (`.text-clamp-problem`, `clamp(46px,7.5vw,104px)` — bastante más grande). El home ya usaba la escala grande en su propio CTA (heredado de `SharedCTASection`) pero yo había estado aplicando la escala chica en `PillarsGridSection` y `AudienceNavSection` — inconsistencia mía. Se corrigió: ambas ahora usan `.text-clamp-problem`, la misma escala que el CTA y que las páginas de audiencia.

**Cambios aplicados:**
- `ECOSISTEMA_HERO.ctaHref`: `#elegir-camino` → `#areas` (el botón "Ver el ecosistema" ahora sí lleva a la grilla de 6 áreas).
- Headline del Hero: de "NO TE FALTA ESFUERZO. TE FALTA SISTEMA." (esfuerzo = deportista-codificado) a "EL TALENTO SIN SISTEMA, SE DISPERSA." — retoma un mensaje rector ya existente en CLAUDE.md, pero "talento" aplica igual a un deportista que a un profesional, no excluye a ninguno.
- Body del Hero y del CTA de cierre ahora dicen explícitamente "para quien entrena y para quien acompaña ese proceso" / "entrenes o acompañes ese proceso" — hospedan a los dos públicos en la misma frase en vez de hablarle solo al deportista.
- CTA de cierre: "El futuro del deportista no se improvisa" → "El futuro del **deporte** no se improvisa" — mismo espíritu de la frase de marca, sin excluir al profesional.
- **Nueva sección `HookSection.tsx`**, insertada entre el Hero y `PillarsGridSection`: un puente corto (frase chica + punch grande, mismo patrón lead+punch que ya funcionó en el manifiesto de MVV) que dice "No importa si entrenás o acompañás ese proceso, ESDEC ES TU SISTEMA." — el "llamador" pedido, hablándole a ambos públicos antes de mostrar la grilla.

---

## 18. Duodécima vuelta — bug de ñ, más vida en Hook/Pilares/Audiencia

**Bug encontrado:** varias strings que escribí en `content/ecosistema.ts` esta sesión perdieron la "ñ" ("acompanas" en vez de "acompañas", etc.) — el archivo original (antes de mis ediciones) ya tenía este problema en varios lugares con acentos y ñ faltantes, pero solo corregí las líneas que yo mismo escribí esta sesión (4 instancias), no hice una auditoría completa del archivo — eso queda pendiente si se quiere prolijidad total más adelante.

**"Encaralo de otro lado" (HookSection):** en vez de lead+punch (texto plano sobre fondo, tercera vez que se repetía esa fórmula) y una huella tan tenue que "no decía nada", ahora son **dos chips con ícono** (Entrenás / Acompañás, cada uno con su color) que convergen en el punch grande "ESDEC ES TU SISTEMA." — ancla visual concreta por rol en vez de una sola frase genérica.

**Ajuste inmediato:** los chips de rol (Entrenás/Acompañás) describían quién sos, no explicaban nada de lo que hace el sistema — "ESDEC es tu sistema" quedaba sin sustento. Se cambiaron por 3 chips que explican qué es concretamente el sistema: Seguimiento continuo, Profesionales reales, Un solo lugar — mismo componente, mismo estilo visual, solo cambió el contenido de `ECOSISTEMA_HOOK.roles`.

**Dos vueltas más sobre el mismo bloque:** el usuario no quería el contenedor tipo pill/chip — se sacó el borde/fondo y quedaron 3 columnas simples (ícono + label, separadas por línea vertical). Seguía sin convencer ("no me dice nada, poné letras más grandes o algo que llame más"). Diagnóstico correcto esta vez: faltaba movimiento real, no tamaño. Se probó reusar `animate-stamp` (la animación de sello del Hero) para el punch — pero esa animación corre al montar la página (CSS puro con `animationDelay`), no al hacer scroll; como el bloque está debajo del fold, para cuando el usuario llega ahí la animación ya terminó y se ve estático igual. Se descartó y se resolvió con el mecanismo correcto: `ScrollReveal` en modo `cascade` sobre las palabras del punch, que sí dispara por `IntersectionObserver` cuando el bloque entra al viewport — cada palabra aparece en cascada genuinamente al hacer scroll, no al cargar la página.

---

## 19. Décimo tercera vuelta — las cards de foto no se distinguían del fondo en modo claro

El usuario mandó un screenshot en **modo claro** (fondo azul vibrante) donde las 6 cards de `PillarsGridSection` se veían pegadas unas a otras, sin borde visible, casi fundidas con el fondo de la página.

**Causa raíz encontrada:** los tokens `--card-bg`/`--card-bd` están calibrados para verse bien en modo oscuro (`--card-bg: rgba(1,48,92,0.8)`, bastante opaco, contrasta fuerte contra el `--bg` oscuro casi negro) pero en modo claro son casi transparentes (`--card-bg: rgba(255,255,255,0.08)`, `--card-bd: rgba(255,255,255,0.18)`) — contra el azul vibrante del tema claro, la card casi no se diferencia de la página. Es un problema del sistema de diseño existente, no algo que yo rompí — pero como recién ahora se ven fotos reales en las cards (antes eran solo tipografía sobre fondo, donde el problema era menos notorio), se hizo visible.

**Fix aplicado (acotado a `PillarsGridSection` y `AudienceNavSection`, no se tocó el token global para no afectar otras páginas ya aprobadas):** borde con valores fijos por tema (`border-black/10` en claro, `dark:border-white/12` en oscuro) + sombra (`shadow-[...]`, distinta por tema) para que la card se lea separada del fondo por profundidad, no solo por contraste de color. También se subió la opacidad del chip de ícono sobre la foto (`accent+33` → `accent+55`) para que se vea mejor contra fotos de colores variados.

---

## 20. Décimo cuarta vuelta — se sacan las fotos, vuelven los íconos

El usuario decidió sacar las fotos de ambas secciones: eran imágenes de banco genéricas, ya usadas en otras páginas del sitio, elegidas rápido y sin pensar específicamente en este contexto — no aportaban significado propio.

**Cambios aplicados:** `PillarsGridSection` y `AudienceNavSection` volvieron al tratamiento de ícono en chip circular (mismo patrón que `PrinciplesSection`, ya validado) — sin `next/image`, sin fotografía. Se conservó el fix de borde/sombra por tema de la vuelta anterior (eso era independiente del problema de las fotos). El campo `image` sigue en `content/ecosistema.ts` (pillars y audiences) sin usarse — no se borró, por si se retoma la fotografía más adelante con imágenes curadas a propósito.

---

## 21. Décimo quinta vuelta — flip-card para los pilares

El usuario propuso una card que gira (estilo flashcard) para mostrar el kicker/característica de cada pilar ("Guía y formación", "Visibilidad y proyección", etc.) en vez de texto chico plano debajo del título. A diferencia del error de `hover` en Principios, esta vez el trigger es **click/tap** (funciona en mobile) y lo que se esconde es un dato secundario, no el contenido central — por eso se aprobó.

**Implementación (`PillarsGridSection.tsx`):**
- `PillarFlipCard`, componente cliente nuevo con `useState` por card — cada una gira de forma independiente.
- Frente: ícono + título + "Toca para ver más". Dorso: kicker + descripción completa + link real a la página del área (`onClick` con `stopPropagation` para que el click en el link no vuelva a girar la card).
- Mecánica de giro 3D con `perspective`/`transformStyle: preserve-3d`/`backfaceVisibility: hidden` vía inline styles (no clases arbitrarias de Tailwind, para evitar cualquier duda de soporte).
- Accesibilidad: `role="button"` + `tabIndex` + manejo de `Enter`/`Espacio` en el contenedor; el link del dorso tiene `tabIndex={flipped ? 0 : -1}` para que no sea alcanzable por teclado mientras la card muestra el frente.
- La animación de entrada (`ScrollReveal` cascade) sigue actuando sobre el wrapper exterior (el que tiene `perspective`), separado del elemento que gira — así no hay conflicto entre la animación de entrada y el giro.

**Ajuste inmediato:** el frente solo mostraba el nombre del pilar ("MARCA") sin más contexto, y el título quedaba pegado abajo del todo con mucho espacio vacío arriba. Se corrigió: el título ahora va justo debajo del ícono (no al fondo), con el `kicker` ("Visibilidad y proyección") debajo del título en el frente mismo — así el frente ya "dice algo" sin necesidad de girar. El dorso mantiene la descripción completa + CTA, ahora sin repetir el kicker (para no duplicar). Ambas caras suman un glow radial sutil del color propio del pilar (`accent` en baja opacidad) para que no se vean tan planas — "vida adelante y atrás".

**Corrección de tipografía:** el título del frente no estaba usando exactamente el mismo formato que los stats del Hero (`font-condensed text-[clamp(1.1rem,1.8vw,1.35rem)] font-bold uppercase leading-[1.08] tracking-[0.02em]`, la misma clase que usa `SharedHeroSection` para sus stats) — tenía peso/tracking distintos. Se corrigió para que sea exactamente igual.

---

## 22. Décimo sexta vuelta — hover en desktop + tap en mobile, y un dorso que se lea de un vistazo

El usuario pidió: (1) que en computadora la card gire con el mouse encima y en celular/tablet gire al tocar (las dos cosas, no una u otra), (2) que el dorso muestre "algo más llamativo, no un texto que seguro nadie lea" — la descripción en prosa chica no se lee en el momento breve de un hover, y (3) que la letra en general sea un poco más grande.

**Hover en desktop + tap en mobile:** se agregó detección de capacidad real de hover con `window.matchMedia("(hover: hover) and (pointer: fine)")` (evita el problema clásico de que el primer tap en touch dispare eventos de mouse fantasma). El giro final es `flipped || (canHover && hovered)`: en desktop, pasar el mouse gira la card (y sale al retirar el mouse); en touch, el hover no cuenta y el click/tap la fija girada hasta el próximo tap. El link del dorso sigue con `stopPropagation` para no re-girar al hacer click en él.

**Dorso más llamativo:** las descripciones de los 6 pilares en `content/ecosistema.ts` se acortaron a frases de 5-7 palabras (ej. "El equilibrio interno como base para todo lo demás. Nutrición, psicología..." → "La base para que todo lo demás funcione.") y se renderizan grandes/en negrita con el color propio del pilar (`font-condensed text-[1.35rem] font-black`), no como párrafo chico — se leen de un vistazo en vez de requerir lectura sostenida.

**Tamaños subidos:** kicker del frente (0.78rem → 0.85rem), hint "Toca para ver más" (0.74rem → 0.8rem), CTA del dorso (0.75rem → 0.8rem).

**Velocidad del giro:** se pidió más lento dos veces seguidas — pasó de 0.5s a 0.9s a 1.5s (`transition: "transform 1.5s cubic-bezier(.22,1,.36,1)"`).

---

## 23. Décimo séptima vuelta — viñetas en vez de frase en el dorso

El usuario preguntó si el dorso podía mostrar viñetas en vez de la frase punchy única — coincidí: con una sola sección no hay "lista" real que escanear, y varias de las frases abstractas competían en significado con el kicker del frente. Se reemplazó `pillar.description` (frase única) por `pillar.bullets: string[]` (3 items concretos por pilar, ej. Educación → "Cursos · Talleres · Contenidos", los mismos nombres reales que usa la propia página de Educación) — se renderizan como lista con punto de color propio del pilar, en vez de prosa.

**Efecto colateral encontrado:** al borrar `description`, `EcosistemaAbout360Variants.tsx` (un archivo variante viejo, marcado como "pendiente de eliminar" desde la sección 2 de este documento pero nunca borrado) rompió el type-check porque lo referenciaba. Se confirmó que seguía sin importadores y se borró — ya no quedan archivos `*Variants.tsx` de aquella tanda de limpieza pendiente.

---

## 24. Décimo octava vuelta — de viñetas "de facultad" a fila de mini-íconos

El usuario sintió que la lista de viñetas con punto se veía "media estudiantil" (tipo diapositiva de power point), pero confirmó que el balance general profesional/moderno de la página le cierra. Se reemplazó el punto+texto por el mismo patrón ya validado en `HookSection` (ícono arriba, label abajo, en fila horizontal, sin viñeta) — ahora en miniatura dentro de cada card.

`pillar.bullets` cambió de `string[]` a `{ label, icon }[]` en `content/ecosistema.ts` — cada uno de los 18 items (3 por pilar × 6 pilares) tiene un ícono propio del set de `StickerIcon` (ej. Nutrición→`nutricion`, Psicología→`mentalidad`, Recuperación→`yoga`). El dorso de la card ahora muestra 3 columnas mini (chip circular de ícono + label chico centrado) en vez de una lista vertical con puntos.

---

## 25. Décimo novena vuelta — se prueban 6 variantes y se decide: sin giro

Se construyeron 6 variantes distintas de card (flip refinado, expandir in-place, todo visible, modal, ficha técnica dos zonas, expandir sumando panel) en una página temporal `/preview-pilares` (no indexada) para comparar en vivo — ver sección anterior de esta bitácora para el detalle de cada una.

**Decisión final del usuario:** sacar el giro/flip por completo. En su lugar: la card crece al pasar el mouse (hover, sin rotación 3D), y en vez del hint "Toca para ver más" hay un botón real que dice "Conocer más" — la card entera sigue siendo un link directo al área (sin estado de React, sin `useState`, sin `"use client"`).

**`PillarsGridSection.tsx` quedó así (versión final, sin flip):**
- Toda la info visible siempre: ícono, título, kicker, los 3 mini-ítems con ícono, y un botón "Conocer más" — nada escondido detrás de una interacción.
- Al pasar el mouse: la card crece (`hover:scale-[1.04]`), se eleva (`hover:-translate-y-1`) y su sombra se agranda — transición de 400ms, no de 1.5s (esa lentitud tenía sentido para un giro completo, no para un simple hover-grow).
- Línea LED de acento arriba, siempre visible (no depende de hover).
- Se borraron `PillarVariantsPreview.tsx` y la ruta `/preview-pilares` una vez tomada la decisión.

---

## 26. Vigésima vuelta — simplificar al máximo: sin viñetas, sin botón, hover más grande y flecha animada

Ajuste final sobre la card ya sin giro: el usuario pidió sacar las 3 mini-viñetas (Evaluación, Comunidad, etc. — "no dicen nada"), sacar el botón "Conocer más" (la card entera ya es el link, no hace falta un botón visual aparte), bajar la intensidad de color ("está muy neón") y que el hover-grow sea más notorio. Pidió además una animación nueva: al pasar el mouse, la card crece y aparece una flecha que se mueve (no estática).

**Cambios aplicados:**
- Se sacaron los 3 mini-ítems y el botón — la card ahora solo muestra ícono, título y kicker.
- Colores menos saturados: el chip de ícono bajó de `accent+2e` a `accent+18`, la línea LED de acento sólido a `accent+80` (50% con fade a transparente).
- Hover más notorio: `scale-[1.04]` → `scale-[1.08]`, `-translate-y-1` → `-translate-y-2`, con `hover:z-10` para que la card que crece quede por encima de sus vecinas sin recortarse.
- Nueva animación en `tailwind.config.ts`: keyframe `arrow-slide` (desliza 6px y vuelve, en loop) + `animation: "arrow-slide 0.9s ease-in-out infinite"` — se activa con `group-hover:animate-arrow-slide` en una flecha que aparece (fade-in) solo al pasar el mouse.
- `pillar.bullets` sigue en `content/ecosistema.ts` sin usarse (no se borró, por si se retoma).

---

## 27. Vigésimo primera vuelta — sin ícono, huella en hover en vez de flecha

Ajuste final: se sacó el chip de ícono (`StickerIcon`) del frente de la card — el color de cada pilar lo sigue llevando la línea LED de arriba y el color del kicker, así que no se perdió la identificación por color. En vez de la flecha animada en hover, aparece la `FingerprintSVG` de marca en la esquina inferior derecha (coloreada con el `accent` del pilar vía `--fps`/`--fpg`), mismo patrón que ya usan otras cards del sitio (ej. `ExperienceSection` de Eventos). La card quedó reducida a: línea LED + título + kicker, con la huella como único elemento de "vida" en hover, además del crecimiento.

---

## 28. Vigésimo segunda vuelta — se saca un stat falso y otro sin sustento

El usuario pidió sacar el stat "247+ deportistas y profesionales ya dentro" del Hero (`ECOSISTEMA_HERO.stats`) y, aparte, señaló que "1° ecosistema deportivo integral de la ciudad" es una afirmación de ranking que no se puede sostener con nada verificable — "es mentira lo que dice". Se corrigió: el stat de Córdoba pasó a "Pensado para el deporte amateur de la ciudad" (afirmación real, sin ranking inventado). El Hero quedó con 3 stats en vez de 4: Pilares integrados, En Córdoba, Visión del deportista.

**Resuelto:** en vez de seguir ajustando el tamaño de la huella "a ojo" (pedido explícito del usuario: "algo no tan subjetivo"), se cambió de un valor fijo (92px) a uno proporcional al ancho de la card (`w-2/5`, 40%) — escala con la card en vez de ser un número elegido a mano.

---

## 29. Vigésimo tercera vuelta — bug real encontrado: ScrollReveal bloqueaba el hover en TODO el sitio

El usuario subió el hover-grow de la card de 1.08 a 1.13 y dijo "ni se nota". Buscando la causa real (no ajustando números a ciegas) se encontró un bug de fondo en `components/ScrollReveal.tsx`, no en `PillarsGridSection`.

**El bug:** en modo `cascade`, `ScrollReveal` le fija `child.style.transform = "none"` por JavaScript a cada hijo despues de la animación de entrada. Un estilo puesto asi por JS (inline) le gana por especificidad CSS a CUALQUIER clase, incluidas las `hover:scale-*`/`hover:-translate-*` de Tailwind — sin importar el valor que se le ponga, el hover nunca iba a producir un cambio visible mientras ese inline style siguiera fijado. Esto no era un problema exclusivo de los pilares: **afecta a cualquier card con hover que este envuelta en un `ScrollReveal` (cascade o standard) en cualquier parte del sitio** — es probable que expectativas de "esto no se mueve" en otras secciones vinieran de la misma causa, sin haberlo diagnosticado antes.

**Fix aplicado (en el componente compartido, no en una sola sección):** despues de que la animación de entrada termina, se suelta el inline `transform`/`transition` (`element.style.transform = ""`) con un `setTimeout` calculado para disparar justo despues de que termine la transición de entrada de cada elemento. Asi el hover vuelve a quedar 100% gobernado por las clases de Tailwind, sin el bloqueo invisible.

---

## 30. Vigésimo cuarta vuelta — con el hover ya funcionando, aparece el solapamiento

Con el bug de `ScrollReveal` resuelto, el hover-grow se empezó a notar de verdad — y aparecio el problema esperable de `transform: scale()` en un grid: no reordena el layout, asi que una card que crece invade visualmente a sus vecinas. Se sumaba que `hover:-translate-y-3` (la elevacion) desplazaba la card hacia arriba de forma asimetrica respecto al crecimiento simetrico del `scale`, empujandola mas hacia la fila de arriba que hacia abajo.

**Fix:** se sacó el `-translate-y-3` (la card ya no se "eleva", solo crece, simetrico desde el centro), se bajó el scale de 1.13 a 1.1, y se aumentó el `gap` de la grilla de `gap-5` (20px) a `gap-8` (32px) para darle a esa expansion simetrica el espacio real que necesita sin tocar a la card de al lado.

---

## 31. Vigésimo quinta vuelta — el hover-grow no hablaba el mismo idioma que el resto de la pagina

El scale llegó a subir hasta 1.14 en las vueltas siguientes, pero comparado con el resto del home (`AudienceNavSection` solo usa `-translate-y-1` sin scale, el Hero no tiene hover dramatico, el Hook es puro scroll-reveal sin interaccion) quedaba como el unico elemento "movido" de la pagina — inconsistente con cada otra decision de sutileza que se tomó en esta vuelta de rediseño.

**Fix final:** scale bajado a 1.03 (consistente con el resto de las cards del home), `gap` vuelto a `gap-5` (ya no hace falta el espacio extra para un crecimiento tan chico). La huella de marca en hover queda como el gesto de "vida" principal, sin depender de un salto de tamaño grande. Se subió despues a 1.06 (1.03 resultó demasiado sutil, casi imperceptible).

---

## 32. Vigésimo sexta vuelta — tipografía de "Elegí tu camino" igualada a la de los pilares

El título de las 2 cards de `AudienceNavSection` (Deportista/Profesional) usaba `text-[1.8rem] font-black tracking-tight` — distinto peso, tamaño y tracking que el de las cards de pilares. Se igualó exactamente a la clase que ya usan los pilares (`text-[clamp(1.15rem,1.9vw,1.4rem)] font-bold leading-[1.08] tracking-[0.02em]`) para que ambas secciones hablen la misma tipografía.

---

## 33. Vigésimo séptima vuelta — la app: generalizar en Bienestar + sumarla al home

El usuario notó que `sections/bienestar-salud/BienestarAudienceSection.tsx` (contenido `BIENESTAR_APP`) ya tenía una sección "La app · En desarrollo" con badge "Próximamente" — pero con promesas de roadmap muy específicas (tags "Día 1", "Semana 1", "Mes 1", "Mes 3" con features concretas prometidas para cada momento, para un producto que todavía no existe). Pidió generalizar eso y además sumar una versión de "la app" al home, antes del CTA de cierre.

**Bienestar — generalizado:** los tags de tiempo específicos (`Dia 1`/`Semana 1`/`Mes 1`/`Mes 3`) se cambiaron a etapas relativas sin compromiso de fecha (`Punto de partida`/`En el dia a dia`/`Con el tiempo`/`En el proceso`) — mismo journey narrativo, sin prometer un timeline concreto para algo que no está construido (mismo criterio que ya aplicamos al sacar el "1° ecosistema" del Hero: no afirmar lo que no se puede sostener). El headline "Las tres dimensiones alineadas" (específico de Bienestar) pasó a "Todo tu proceso alineado" (más general).

**Home — nueva sección `AppTeaserSection.tsx`:** insertada entre `AudienceNavSection` y `CTASection`. Usa contenido nuevo `ECOSISTEMA_APP_TEASER` (versión corta y general, no el journey de 4 pasos completo de Bienestar — para el home alcanza con el badge "Próximamente" + un párrafo + CTA de acceso anticipado a WhatsApp). Mismo tratamiento visual de badge verde que ya usa Bienestar, para que ambas apariciones de "la app" en el sitio se sientan de la misma familia.

**Ajuste de alternancia de colores:** al insertar la sección nueva, se rompía el patrón `--bg2/--bg` alternado de las secciones del home. Se corrigió pasándole `bg="var(--bg2)"` explícito al `SharedCTASection` del cierre (que por defecto usa `var(--bg)`) para que la secuencia completa quede: Hook(bg2) → Pilares(bg) → Audiencia(bg2) → App(bg) → CTA(bg2).

---

## 34. Vigésimo octava vuelta — el teaser de la app le hablaba solo al deportista

El usuario notó que el body del teaser ("tu proceso deportivo completo") le hablaba solo al deportista, e hizo notar que esta sección también tiene que hablarle al profesional — y pidió una identidad propia distinta a la de Bienestar, no una copia.

**Cambio de contenido:** `ECOSISTEMA_APP_TEASER` pasó de un párrafo único a un body corto y neutral + un array `sides` con 2 bloques explícitos ("Para deportistas" / "Para profesionales"), cada uno con su ícono, color propio y una frase específica a ese público.

**Cambio visual (la "vuelta de tuerca" pedida):** en vez del badge + párrafo centrado que usa Bienestar, `AppTeaserSection` ahora suma 2 mini-cards lado a lado (una por público) antes del botón de acceso anticipado — le da una identidad propia, distinta a la de Bienestar, y resuelve el problema de fondo (hoy sí le habla a los dos públicos, explícitamente, no en una frase genérica que los mezcla).

---

## 35. Vigésimo novena vuelta — sacar la app de Bienestar, y otro hallazgo de contenido huérfano

El usuario pidió sacar la sección de "la app" de Bienestar (que hable de otra cosa), reforzar que el teaser del home también nombre al profesional explícitamente (no solo en las mini-cards), y que la tipografía en negrita del teaser coincida con la de los pilares.

**Hallazgo — otra vez contenido completo sin usar:** `sections/bienestar-salud/ForProfessionalsSection.tsx` (con contenido real `SALUD_FOR_PROFESSIONALS` — visibilidad, red profesional coordinada, clientes alineados, etc.) existe completo y bien armado, pero **no estaba wireado a ninguna página** — el mismo patrón que ya encontramos con `MVVSection`/`PrinciplesSection` al principio de esta sesión. Es un reemplazo perfecto para el hueco que deja sacar la app: contenido real, ya escrito, específicamente sobre el valor para profesionales.

**Cambios aplicados:**
- `BienestarLanding.tsx`: `BienestarAudienceSection` (la app) → `ForProfessionalsSection` (valor para profesionales de la salud). El contenido de `BIENESTAR_APP` no se borró, solo se dejó de usar.
- `ECOSISTEMA_APP_TEASER.body` (home): ahora nombra explícitamente a los dos ("el proceso de cada deportista y el trabajo de cada profesional"), no solo en las mini-cards.
- `AppTeaserSection.tsx`: el `h2` pasó de un clamp propio (`clamp(28px,4.5vw,52px)`) a `text-clamp-problem` (igual que Hook/Pilares/Audiencia — corrige una inconsistencia real que yo mismo había introducido), y el label de las mini-cards se igualó exacto al kicker de los pilares (`text-[0.8rem] tracking-[0.06em]`).

---

## 36. Trigésima vuelta — que venda más y se sienta "app" de verdad

El usuario dijo que le gustaba pero que "así no se entiende lo que quiero decir o mostrar" — pidió más venta (beneficios concretos) y que se sienta una app de verdad, no solo texto que lo menciona.

**Cambios de copy (mas venta):**
- Headline: "UN SISTEMA QUE TE ACOMPAÑA A TODOS LADOS" → "TODO ESDEC, EN TU BOLSILLO." (mas concreto, vende portabilidad real).
- Se agregó un checklist de 3 beneficios concretos con check verde (`Tu proceso completo, en un solo lugar` / `Notificaciones de tu equipo, al instante` / `Progreso real, no promesas`) — antes solo habia un parrafo abstracto.
- CTA: "Quiero acceso anticipado" → "Quiero ser de los primeros" (mas de venta/exclusividad).

**Se sumó un mockup visual de telefono** (sin inventar screenshots reales — es un mockup abstracto y estilizado con los propios tokens de color del sitio: barra superior con logo, un stat grande, una barra de progreso, y 3 filas de notificaciones con icono) para que la sección se sienta "app" de verdad, no solo lo diga. Layout ahora en dos columnas: copy de venta a la izquierda, mockup a la derecha.

**Ajuste inmediato:** el mockup dibujado a mano (div con barra de progreso, filas falsas) quedó como un boceto, no como algo premium — el usuario lo rechazó directamente ("horrible"). Se reemplazó por una foto real ya existente en el sitio (`athletes/metricas1.jpg`, la misma que ya se usaba para el pilar Tecnología) con dos tarjetas flotantes encima (un stat grande abajo-izquierda, una notificación arriba-derecha) — más creíble que un mockup inventado, sin fingir un screenshot real de una app que no existe.

---

## 37. Trigésimo primera vuelta — comparar 5 variantes de "funciones de la app" (sin foto)

El usuario pidió comparar 5 formas distintas de mostrar las funciones de la app, sin fondo de foto. Se armó `content/ecosistema.ts` → `ECOSISTEMA_APP_FEATURES` (6 funciones: seguimiento real, contacto directo, planes que se ajustan, recordatorios, métricas claras, todo en un lugar — cada una con su `problem` asociado para variantes tipo antes/después) y una página temporal `/preview-app-features` con 5 variantes: grid de cards, lista numerada, chips minimalistas, antes/con-la-app, y bento asimétrico.

**Resultado directo — la foto+tarjetas de la vuelta anterior se descartó:** el usuario la rechazó ("no me gusta, hay que hacer otra cosa") porque la foto ya traía su propia interfaz metida (el círculo "10.6 km", las barras de colores) y sumarle tarjetas flotantes encima generaba demasiadas capas compitiendo. Pidió reemplazarla por algo que muestre funcionalidades, del mismo tamaño que la caja anterior (no más grande).

**Cambios aplicados en `AppTeaserSection.tsx`:**
- El bloque de la derecha (antes foto + 2 tarjetas flotantes) pasó a ser una card limpia, mismo tamaño exacto (`aspect-[4/5]`, `max-w-[420px]`) con el label "Funcionalidades" + 5 filas (ícono + nombre) tomadas de `ECOSISTEMA_APP_FEATURES.items` — sin foto, sin capas superpuestas.
- El botón "Quiero ser de los primeros" (antes un `<Link>` con estilos a mano, `bg-[#7de8a8]`) se reemplazó por el componente **`SweepButton`** — el mismo botón que ya usan `SharedHeroSection` y `SharedCTASection` en esta misma página (`size="lg"`, `external`) — ahora es visualmente idéntico a "todos los demás botones" del sitio, como pidió el usuario.

---

## 38. Trigésimo segunda vuelta — el cuadrado de funcionalidades, en grid tipo iconos de app

El usuario no le gustó la lista vertical (ícono + nombre en fila) dentro del cuadrado. Se cambió a una **grilla 2×3 de mini-tiles** — cada una de las 6 funcionalidades como un ícono cuadrado con su nombre abajo, tipo pantalla de inicio de celular (grid de apps). Mismo tamaño exacto de caja que antes (`aspect-[4/5]`, `max-w-[420px]`), ahora usando las 6 funciones de `ECOSISTEMA_APP_FEATURES` en vez de solo 5 en lista.

---

## 39. Trigésimo tercera vuelta — dejar de iterar sobre "una caja" y resolver el concepto

La grilla de mini-tiles tampoco convenció ("horrible... no dice nada"). El usuario pidió explícitamente que se decida un enfoque propio en vez de seguir ajustando la misma caja cuadrada.

**Diagnóstico:** las 3 vueltas anteriores (foto+tarjetas, lista vertical, grilla de tiles) compartían el mismo error de fondo — meter contenido DENTRO de un contenedor cuadrado genérico (`aspect-[4/5]`), que nunca se lee como "app", solo como "una caja con cosas adentro". El usuario mismo lo nombró: "no me gusta que sea un cuadrado".

**Nuevo enfoque — silueta de telefono real:** en vez de una caja `aspect-[4/5]`, ahora es una silueta angosta con proporción real de celular (`aspect-[9/19]`, ancho fijo `210px`), con notch, bisel oscuro, y la huella de marca centrada como fondo de pantalla (sin fingir UI real). Las 3 funcionalidades ya no están adentro — flotan **por fuera** del borde del teléfono (izquierda arriba, derecha centro, izquierda abajo), como suelen mostrarse las apps en sitios de marketing reales (Notion, Duolingo, etc.): el teléfono comunica "esto va a ser una app" de un vistazo, y las tarjetas flotantes comunican "esto es lo que hace", sin competir por el mismo espacio.

Nota: esta vuelta sí convenció ("me gusta esto") — el usuario pidió profundizar en la misma dirección.

---

## 40. Trigésimo cuarta vuelta — pantalla simulada + tarjetas con vida real

Confirmada la dirección del teléfono, el usuario pidió: (1) que la pantalla del teléfono simule ser una pantalla real de la app (no solo la huella de fondo), y (2) que las tarjetas flotantes de afuera tengan más vida y sean más legibles.

**Pantalla simulada:** se reemplazó la huella de fondo por un mini-dashboard con header (`ESDEC` + punto de estado), un anillo de progreso circular (`conic-gradient`, como un Apple Watch ring) mostrando `mockup.progressValue` (72%) con el stat label adentro, y 2 filas de notificación chicas (`mockup.rows`) — todo contenido que ya existía en `ECOSISTEMA_APP_TEASER.mockup` (se había dejado de usar en una vuelta anterior, ahora se reaprovechó en vez de inventar valores nuevos).

**Tarjetas flotantes — más vida y legibilidad:** cada una ahora tiene `animate-card-float` (la animación de flotación suave ya existente en el sitio) con un `animationDelay` escalonado por tarjeta para que no se muevan todas en sincronía, un borde sólido de 1.5px con el color propio de cada función (en vez de un borde gris genérico), e ícono y texto más grandes (`sm` en vez de `xs`, `0.74rem` en vez de `0.68rem`) para mejor contraste contra el fondo azul.

---

## 41. Trigésimo quinta vuelta — se abandona el teléfono, paso a paso real por audiencia

Después de esa mejora, el usuario rechazó el teléfono por completo: "no dice nada sobre la app, y ni siquiera la pantalla que muestra es real". Pidió ver directamente las funcionalidades o el paso a paso de la app, separado por deportista y profesional — sin ningún dispositivo/mockup de por medio.

**Diagnóstico final de esta serie de intentos:** ningún mockup visual (foto, lista en caja, grilla de tiles, teléfono con pantalla simulada) iba a "decir algo" sobre la app, porque son todos sustitutos visuales de contenido real — lo que el usuario quería desde el principio era ver **qué hace la app**, no una metáfora de que existe.

**Cambio de contenido:** se agregó `ECOSISTEMA_APP_TEASER.journeys` — 2 tracks de 3 pasos numerados cada uno, uno para deportistas ("Cargás tu punto de partida" → "La app hace seguimiento" → "Recibís ajustes reales") y otro para profesionales ("Ves a tus deportistas" → "Ajustás planes al instante" → "Ganás visibilidad").

**Cambio de layout — se abandona la columna 2 (copy | visual):** `AppTeaserSection` pasó a ser todo el ancho: arriba la copy de venta centrada (headline + body + checklist), abajo 2 cards lado a lado (deportista/profesional) cada una con sus 3 pasos numerados, y el botón al final. El campo `sides` (mini-teaser corto) y `mockup` quedaron sin usar en el content — los reemplaza el journey completo, más detallado.

(Headline luego ajustado: "EN TU BOLSILLO" → "SIEMPRE A MANO" — el usuario no quería "bolsillo"; la nueva frase hace eco con el body del Hero, que ya dice "siempre a mano".)

---

## 42. Trigésimo sexta vuelta — Bienestar: mismo estilo "de impacto" viejo que ya sacamos del home

Nota: esta vuelta es sobre `/bienestar-deportivo-cordoba`, no el home — pero mismo criterio de diseño aplicado en todo el documento.

El usuario pidió rehacer "las tres dimensiones" (`BienestarSystemSection`) y "tu expertise tiene un lugar" (`ForProfessionalsSection`, la que reemplazó a la app un par de vueltas atrás) porque "no me gusta ni me dice nada".

**Diagnóstico:** ambas secciones nunca habían pasado por la limpieza que sí se le aplicó al home — usaban exactamente el estilo "de impacto" que se sacó de ahí hace muchas vueltas: números gigantes semi-transparentes, cadena escalonada con `marginLeft` progresivo, accent-line que solo aparece en hover, glows decorativos (`blur(80px)`), íconos con `drop-shadow` de color, y hex hardcodeado (`ACCENT = "#5ac8ff"`) en vez de `var(--p1)`.

**`BienestarSystemSection.tsx`:** la cadena escalonada de 3 dimensiones pasó a una grilla simple de 3 cards siempre visibles (ícono en chip circular + número + label + descripción + tags) — mismo patrón ya validado en Principios/Pilares del home. Se sacó el número gigante de fondo y el accent-bar que solo aparecía en hover.

**`ForProfessionalsSection.tsx`:** se sacaron los 2 glows decorativos (`blur(80px)`) y la huella de fondo, el `ACCENT` hardcodeado (`#5ac8ff`) se reemplazó por `var(--p1)` en todos lados, los íconos perdieron el `drop-shadow` de color, y las cards de value-props pasaron a los tokens de card estándar (`var(--card-bg)`/borde fijo) en vez de `rgba(255,255,255,0.05)` con accent-line solo-hover.

---

## 43. Trigésimo séptima vuelta — las dimensiones vuelven casi al original, y el texto de expertise se acorta

El usuario prefirió la versión anterior de "las tres dimensiones" por sobre la grilla calma que se armó en la vuelta pasada — pidió volver a algo más parecido a como estaba. Y señaló que las descripciones de "Tu expertise tiene un lugar" son largas, nadie las va a leer.

**`BienestarSystemSection.tsx`:** se revirtió casi al original (cadena escalonada, números grandes semi-transparentes, `marginLeft` progresivo) — la única diferencia real es que la barra de acento a la izquierda ya no depende de hover para verse (queda siempre visible, un ajuste menor que no cambia el look general). Lección: no todo lo que se parece al "estilo de impacto" viejo necesita el mismo trato — acá el usuario prefería la identidad visual original, a diferencia de MVV/Principios en el home donde sí quería calma.

**`SALUD_FOR_PROFESSIONALS` (content):** las 4 descripciones de value-props pasaron de 15-20 palabras a 6-9 palabras cada una (ej. "Tu perfil accesible para deportistas que necesitan exactamente lo que vos haces. Sin intermediarios, sin competencia de plataformas masivas." → "Tu perfil, visible para quien necesita justo lo que hacés."). El subtext del header también se acortó de 2 oraciones a una.

---

## 44. Trigésimo octava vuelta — texto suelto afuera, y contenido de "Salud" reciclado en la pagina de "Bienestar"

**Texto suelto:** el subtexto de "las tres dimensiones" ("El rendimiento de elite no se construye solo en la cancha...") se veia como una frase flotando sin nada alrededor en un fondo plano. Se sacó del todo — el header de `BienestarSystemSection` quedó solo con eyebrow + headline, sin la columna de texto al lado.

**Vuelta siguiente:** se sacó también el subtexto flotante del header ("El ecosistema donde tu trabajo se ve...") — mismo criterio que con las dimensiones. Y las 4 cards de value-props pasaron a usar exactamente el mismo tratamiento que las cards de Pilares: línea LED de acento arriba (`linear-gradient(90deg, var(--p1) 0%, transparent 100%)`), `hover:scale-[1.06]` + sombra que crece en hover, mismo radio/borde. Antes eran cards planas sin ese lenguaje compartido.

---

## 45. Trigésimo novena vuelta — se construye el área Tecnología desde cero

Nota: esta vuelta es sobre `/tecnologia-deportiva-cordoba`, que todavía usaba el placeholder genérico `AreaInDevelopmentPage` (a diferencia de Bienestar/Salud/Educación, nunca se había construido). Se armó siguiendo el mismo patrón ya probado de Educación (Hero vía `SharedHeroSection` + 2 secciones propias + `SharedCTASection` de cierre), aplicando desde el inicio todas las lecciones acumuladas en esta sesión: copy corta, sin promesas sin sustento, tokens `var(--card-bg)`/`var(--p1)` (nada de hex hardcodeado), sombra + borde para que las cards se separen del fondo en modo claro, línea LED de acento arriba de cada card.

**Archivos nuevos:** `content/tecnologia.ts` (Hero, `TECNOLOGIA_HOW_IT_WORKS` con 4 pasos — Registrás → Se organiza → Se conecta → Decidís mejor —, `TECNOLOGIA_OFFERINGS` con 4 funciones concretas, `TECNOLOGIA_CTA`), `sections/tecnologia/{TecnologiaHowItWorksSection,TecnologiaOfferingsSection,TecnologiaLanding}.tsx`. Se actualizó `app/tecnologia-deportiva-cordoba/page.tsx` para usar `TecnologiaLanding` en vez del placeholder. Imagen de Hero: `lifestyle/Deportes_2.jpg` (verificada como no usada por ningún otro Hero del sitio antes de elegirla).

**Hallazgo real:** "Tu expertise tiene un lugar" usaba `SALUD_FOR_PROFESSIONALS` (contenido pensado para profesionales de la salud/clínicos — kinesiólogo, deportólogo) pero está wireado en la página de **Bienestar**, no Salud — un desajuste de tema que el usuario detectó ("relacionémoslo más con bienestar, no tanto salud"). Se creó `BIENESTAR_FOR_PROFESSIONALS_VALUES` (mismo shape de 4 value-props, mismo componente) pero con eyebrow "Para profesionales del bienestar" y la descripción de "Red profesional coordinada" ahora menciona psicólogos, nutricionistas y coaches en vez de kinesiólogo/deportólogo. `ForProfessionalsSection.tsx` pasó a importar este content nuevo. `SALUD_FOR_PROFESSIONALS` queda sin usar (no se borró — sigue disponible si se arma un bloque equivalente para la página de Salud más adelante).

---

**"Más vida" en pilares y audiencia:** tanto `PillarsGridSection` como `AudienceNavSection` pasaron de cards solo-tipografía a **cards con foto** — header de imagen con overlay oscuro + ícono superpuesto, usando `pillar.image` (ya existía en `ECOSISTEMA_ECOSYSTEM.pillars`, no se usaba) y nuevas imágenes para Deportista (`athletes/maraton_1.jpg`) y Profesional (`athletes/medicina2.jpg`) agregadas a `ECOSISTEMA_NAV.audiences`. Mismo overlay oscuro fijo (no depende del tema) que ya usa `SharedHeroSection` para las fotos, por consistencia.
