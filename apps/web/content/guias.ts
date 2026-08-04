// content/guias.ts
// Contenido de las guias de ESDEC (capa AEO) — respuestas autosuficientes a
// busquedas reales de cada pilar. Fundamentadas en lo que ESDEC ofrece hoy,
// segun SEO_GEO_KEYWORD_MAP.md. No incluye pilares de salud/bienestar (YMYL)
// hasta que haya revision de un profesional matriculado.

import type { Guide } from "@/lib/guides";

export const GUIDES: Guide[] = [
  {
    slug: "seguimiento-rendimiento-deportivo",
    pillar: "tecnologia-deportiva-cordoba",
    title: "Seguimiento de rendimiento deportivo: qué es y cómo hacerlo sin perderte en planillas",
    keyword: "Datos y métricas de rendimiento deportivo",
    metaDescription:
      "Qué es el seguimiento de rendimiento deportivo, qué datos vale la pena registrar y cómo organizarlo sin depender de planillas sueltas ni mensajes perdidos.",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    author: "Manuel Cavina — Fundador de ESDEC",
    excerpt:
      "Qué datos vale la pena registrar de tu entrenamiento y cómo organizarlos para tomar decisiones con información real, no a ojo.",
    intro:
      "El seguimiento de rendimiento deportivo es el registro sistemático de tus entrenamientos, cargas y resultados a lo largo del tiempo, para tomar decisiones con datos reales en vez de a ojo o por costumbre. Hacerlo bien no depende de una app compleja — depende de tener toda esa información en un mismo lugar, en vez de repartida entre el cuaderno, el celular y la memoria.",
    sections: [
      {
        heading: "¿Para qué sirve llevar seguimiento de tu entrenamiento?",
        paragraphs: [
          "Sin seguimiento, cada decisión sobre tu entrenamiento se toma con la sensación del día: si te sentiste bien, sumás carga; si te sentiste mal, la bajás. El problema es que la sensación del día no siempre refleja lo que realmente pasó la semana anterior.",
          "Con datos reales delante —volumen, intensidad, cómo respondiste a cada bloque—, las decisiones dejan de ser intuición y pasan a ser criterio. No se trata de entrenar más, sino de entrenar con información.",
        ],
      },
      {
        heading: "Qué datos vale la pena registrar",
        paragraphs: [
          "No hace falta medir todo. Alcanza con un núcleo simple: qué entrenaste, cuánto (tiempo o volumen), cómo lo sentiste, y cualquier ajuste que haya hecho tu profesional después de verlo.",
          "Lo que más valor aporta con el tiempo no es un dato aislado, sino la línea de tiempo completa: poder mirar hacia atrás y ver el patrón, no solo la última sesión.",
        ],
      },
      {
        heading: "El problema real de las planillas sueltas",
        paragraphs: [
          "El seguimiento falla casi siempre por el mismo motivo: la información existe, pero está repartida. Una planilla acá, un mensaje de WhatsApp allá, una nota en el celular que después no se encuentra. El dato está, pero nadie lo lee junto — ni vos, ni tu profesional.",
          "Eso genera el mismo problema una y otra vez: cada consulta arranca de cero, explicando de nuevo lo que ya se había hablado la vez anterior.",
        ],
      },
      {
        heading: "Cómo lo organiza ESDEC",
        paragraphs: [
          "La tecnología de ESDEC no es una app más para instalar por separado — es la capa que conecta lo que ya hacés dentro del ecosistema, en cuatro pasos: registrás tu proceso (datos, seguimiento, ajustes) en un mismo sistema; la información se organiza sola, sin planillas sueltas ni mensajes perdidos; tu proceso y el de tu profesional quedan en el mismo contexto; y con eso delante, decidís con datos reales, no a ojo.",
          "Esto incluye historial ordenado en una misma línea de tiempo y alertas o recordatorios para no perderte una sesión o un ajuste importante.",
        ],
      },
      {
        heading: "Cuándo conviene empezar a llevar seguimiento",
        paragraphs: [
          "No hace falta ser deportista de alto rendimiento para que valga la pena. Conviene empezar apenas notás que repetís la misma pregunta en cada consulta con tu profesional, o cuando querés entender si un cambio en tu entrenamiento realmente está funcionando y no solo lo parece.",
        ],
      },
    ],
  },
  {
    slug: "como-formarte-entrenador-deportivo",
    pillar: "educacion-deportiva-cordoba",
    title: "Cómo empezar a formarte como entrenador deportivo en Córdoba",
    keyword: "Cómo formarse como entrenador deportivo",
    metaDescription:
      "Qué áreas cubre la formación de un entrenador deportivo, la diferencia entre formación formal y contenido aplicado, y por dónde empezar en Córdoba.",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    author: "Manuel Cavina — Fundador de ESDEC",
    excerpt:
      "Qué áreas conviene cubrir para formarte como entrenador deportivo y cómo combinar formación formal con contenido aplicado al día a día.",
    intro:
      "Formarte como entrenador deportivo no depende de un solo curso, sino de cubrir un puñado de áreas que se complementan entre sí: planificación del entrenamiento, nutrición básica, prevención de lesiones, y manejo de grupos y motivación. No reemplaza un título formal — lo complementa con contenido aplicable al proceso real de acompañar deportistas.",
    sections: [
      {
        heading: "Qué áreas cubre la formación de un entrenador deportivo",
        paragraphs: [
          "Más allá de la planificación del entrenamiento en sí, un entrenador que acompaña deportistas amateurs se apoya en varias áreas: nutrición e hidratación, prevención de lesiones, recuperación y descanso, salud mental y motivación, rendimiento deportivo, y cada vez más, tecnología aplicada al seguimiento del proceso.",
          "También entra el desarrollo personal y profesional propio, y el acompañamiento a familias cuando se trabaja con deportistas jóvenes.",
        ],
      },
      {
        heading: "Formación formal vs. contenido aplicado",
        paragraphs: [
          "Un título o certificación formal (por ejemplo, de un profesorado de educación física o una carrera universitaria) es la base — acredita conocimiento y habilita a ejercer. El contenido aplicado (cursos cortos, talleres, guías) no reemplaza eso: lo complementa, actualizando criterio con casos reales y problemas concretos que la formación de base no siempre cubre en detalle.",
          "Cualquier oferta de contenido que hable de 'formarte como entrenador' sin aclarar esta diferencia hay que mirarla con cuidado — la formación seria no promete atajos.",
        ],
      },
      {
        heading: "Cómo organiza ESDEC el contenido educativo",
        paragraphs: [
          "El enfoque de ESDEC es en cuatro pasos: descubrís contenido sobre entrenamiento, nutrición, recuperación y salud mental; lo aprendés a través de cursos, talleres, videos y guías creados por profesionales del ecosistema; lo aplicás a tu trabajo con deportistas; y evolucionás con más criterio y seguridad.",
          "El contenido se organiza según tu disciplina, nivel y objetivo, en formatos distintos: cursos y programas por niveles, talleres y encuentros en vivo, contenidos como videos y guías, y rutas de aprendizaje según el objetivo (empezar, competir o prevenir lesiones).",
        ],
      },
      {
        heading: "Por dónde empezar",
        paragraphs: [
          "Si ya tenés formación de base, el paso siguiente es sumar contenido aplicado sobre el área donde sentís menos seguridad — prevención de lesiones y nutrición son los puntos ciegos más comunes entre entrenadores que se formaron enfocados solo en lo técnico. Si estás arrancando, conviene primero cubrir esa base formal antes de sumar contenido específico.",
        ],
      },
    ],
  },
  {
    slug: "como-inscribirte-evento-deportivo-esdec",
    pillar: "eventos-deportivos-cordoba",
    title: "Cómo inscribirte a un evento deportivo de ESDEC en Córdoba",
    keyword: "Cómo inscribirse a un evento deportivo Córdoba",
    metaDescription:
      "Paso a paso para enterarte e inscribirte a los eventos deportivos de ESDEC en Córdoba: dónde se publican, cómo reservar tu lugar y qué incluye participar.",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-03",
    author: "Manuel Cavina — Fundador de ESDEC",
    excerpt:
      "Dónde enterarte de los próximos eventos de ESDEC en Córdoba, cómo reservar tu lugar y qué incluye participar.",
    intro:
      "Inscribirte a un evento de ESDEC en Córdoba se hace en tres pasos: te enterás del próximo evento por Instagram o WhatsApp, reservás tu lugar con un formulario simple, y recibís la confirmación al instante. Los cupos son limitados, así que anotarte apenas se publica el evento garantiza tu lugar.",
    sections: [
      {
        heading: "Cómo enterarte de los próximos eventos",
        paragraphs: [
          "Los eventos de ESDEC —running, trekking, torneos y encuentros— se publican en Instagram y por WhatsApp, con cupo limitado. También podés sumarte desde la página de eventos del sitio para enterarte apenas se abre la inscripción de uno nuevo.",
        ],
      },
      {
        heading: "Paso a paso para inscribirte",
        paragraphs: [
          "Primero descubrís el evento con la información publicada. Después reservás tu lugar con un formulario simple — la confirmación llega al instante, sin vueltas. El día del evento, hay guía profesional en el momento, recuperación activa y beneficios exclusivos para quienes participan.",
        ],
      },
      {
        heading: "Qué incluye participar de un evento ESDEC",
        paragraphs: [
          "Cada evento incluye guía profesional en el momento (por ejemplo, estiramientos guiados de entrada en calor y enfriamiento), recuperación activa post-esfuerzo, y beneficios como descuentos o sorteos entre quienes participan. Los detalles concretos varían según el evento — se confirman al momento de la inscripción.",
        ],
      },
      {
        heading: "Qué pasa si todavía no hay un evento con inscripción abierta",
        paragraphs: [
          "Cuando no hay un evento activo, podés dejar tu WhatsApp para que te avisen apenas se abra la próxima inscripción. Mientras tanto, la página de eventos también muestra los eventos anteriores de ESDEC, para tener una idea de qué tipo de experiencias organiza el ecosistema.",
        ],
      },
    ],
  },
];
