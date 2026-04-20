// content/ecosistema.ts
// Copy exclusivo de la pagina /ecosistema-deportivo-cordoba.

// —— NUEVO HERO ———————————————————————————————————————————————————————————————
export const ECOSISTEMA_HERO = {
  eyebrow: "Ecosistema Deportivo · Cordoba · Argentina",
  headlineLine1: "No te falta",
  headlineLine2: "esfuerzo.",
  headlineLine3: "Te falta",
  headlineAccent: "sistema.",
  subtext:
    "ESDEC es la estructura que organiza el deporte amateur. Bienestar, clinica, marca, eventos, tecnologia y educacion dentro de una misma red que funciona junta.",
  pillars: [
    "Bienestar",
    "Clinica",
    "Marca",
    "Eventos",
    "Tecnologia",
    "Educacion",
  ],
  ctaDeportista: "Entrar como deportista",
  ctaProfesional: "Entrar como profesional",
  stats: [
    { value: "6", label: "pilares integrados" },
    { value: "247+", label: "perfiles activos" },
    { value: "1°", label: "en Cordoba" },
    { value: "360°", label: "vision del deportista" },
  ],
  heroImage: "/images/lifestyle/Correr_lluvia_1.jpg",
  heroImageAlt: "Deportista en accion dentro del ecosistema ESDEC",
} as const;

export const ECOSISTEMA_OVERVIEW = {
  whatIs: {
    eyebrow: "Que es ESDEC",
    headlinePre: "Una plataforma",
    headlineAccent: "integral",
    headlinePost: "para ordenar el deporte.",
    body:
      "Plataforma integral que conecta deportistas amateurs con profesionales especializados, ofreciendo planes personalizados, seguimiento continuo y acompanamiento multidisciplinario en un solo ecosistema digital.",
    highlights: [
      {
        label: "Acompanamiento",
        title: "Planes personalizados",
        description:
          "Cada recorrido se adapta al contexto del deportista y a la etapa real de su proceso.",
      },
      {
        label: "Continuidad",
        title: "Seguimiento continuo",
        description:
          "La evolucion no se corta en acciones aisladas. El sistema sostiene lectura, criterio y progreso.",
      },
      {
        label: "Coordinacion",
        title: "Red multidisciplinaria",
        description:
          "Profesionales y herramientas trabajando dentro de una misma estructura, no en paralelo.",
      },
    ],
  },
  whoWeAre: {
    eyebrow: "Quienes somos",
    headlinePre: "UNA",
    headlineAccent: "ESTRUCTURA",
    headlinePost: "QUE ORDENA EL DEPORTE.",
    subtext:
      "Profesionales, tecnologia y vision integral dentro de una misma lectura.",
    image: "/images/team/Personas_maraton.jpg",
    imageAlt: "Equipo y comunidad deportiva dentro del ecosistema ESDEC",
  },
  cta: {
    eyebrow: "CTA",
    headlinePre: "ENTRA AL",
    headlineAccent: "ECOSISTEMA",
    headlinePost: "ESDEC.",
    body:
      "Elegi tu recorrido y empeza a construir dentro de una estructura mas clara, coordinada y preparada para crecer.",
    primaryLabel: "Soy deportista",
    primaryHref: "/deportistas",
    secondaryLabel: "Soy profesional",
    secondaryHref: "/profesionales",
    tertiaryLabel: "Ver eventos",
    tertiaryHref: "/eventos-deportivos",
  },
} as const;

// —— OBJETIVO / VISIÓN / MISIÓN —————————————————————————————————————————————
export const ECOSISTEMA_MVV = {
  eyebrow: "Institucional",
  manifestoLines: [
    { text: "No somos", accent: false },
    { text: "una suma de", accent: false },
    { text: "servicios.", accent: false },
    { text: "Somos", accent: false },
    { text: "el sistema.", accent: true },
  ],
  closing: "ESDEC organiza el ecosistema deportivo. Bienestar, clinica, marca, eventos, tecnologia y educacion dentro de una estructura que funciona junta.",
  columns: [
    {
      id: "objetivo",
      label: "Objetivo",
      number: "01",
      headlinePre: "Ordenar el deporte amateur con",
      headlineAccent: "estructura real",
      headlinePost: ".",
      body: "Conectar deportistas, profesionales y herramientas en un mismo sistema.",
    },
    {
      id: "vision",
      label: "Vision",
      number: "02",
      headlinePre: "El ecosistema deportivo de referencia en",
      headlineAccent: "Cordoba",
      headlinePost: ".",
      body: "Ser la red que ordena y potencia el deporte en Cordoba.",
    },
    {
      id: "mision",
      label: "Mision",
      number: "03",
      headlinePre: "Crear condiciones para que el deporte",
      headlineAccent: "sea mejor",
      headlinePost: ".",
      body: "Transformar esfuerzo y expertise en progreso visible y sostenido.",
    },
  ],
} as const;

// —— LO QUE DEFINE A ESDEC ————————————————————————————————————————————————
export const ECOSISTEMA_PRINCIPLES = {
  eyebrow: "Lo que define a ESDEC",
  headline: "Seis principios.",
  headlineAccent: "Una misma brujula.",
  subtext:
    "No son valores de pared. Son los criterios que organizan como funciona el ecosistema en la practica.",
  items: [
    {
      number: "01",
      title: "Integracion total",
      body: "Bienestar, clinica, marca, educacion, tecnologia y eventos dentro de una misma estructura. No servicios sueltos: un sistema.",
      accent: "#7cc8ff",
    },
    {
      number: "02",
      title: "Seguimiento continuo",
      body: "No trabajamos por intervenciones aisladas. Cada proceso tiene historia, contexto y una proxima etapa definida.",
      accent: "#7de8a8",
    },
    {
      number: "03",
      title: "Inteligencia aplicada",
      body: "Datos, metricas y herramientas que convierten informacion dispersa en decisiones mas claras y mejor fundamentadas.",
      accent: "#6fd4db",
    },
    {
      number: "04",
      title: "Criterio profesional",
      body: "Cada area del ecosistema esta respaldada por profesionales reales que aportan contexto, precision y responsabilidad.",
      accent: "#7cc8ff",
    },
    {
      number: "05",
      title: "Comunidad real",
      body: "El ecosistema crece cuando las personas se conectan. Construimos vinculos que tienen valor dentro y fuera de la cancha.",
      accent: "#7de8a8",
    },
    {
      number: "06",
      title: "Escalabilidad",
      body: "El sistema que funciona para un deportista hoy puede crecer con el manana. Disenado para expandirse sin perder coherencia.",
      accent: "#6fd4db",
    },
  ],
} as const;

// —— EL ECOSISTEMA SIN ESDEC —————————————————————————————————————————————
export const ECOSISTEMA_SIN_ESDEC = {
  eyebrow: "Sin estructura",
  headline: "Sin ESDEC, el ecosistema se rompe.",
  subtext:
    "Asi es como funciona el deporte hoy para la mayoria: en pedazos, sin lectura compartida, sin coordinacion real.",
  problems: [
    {
      id: "aislados",
      label: "Profesionales aislados",
      body: "Cada especialista trabaja solo. Sin contexto del otro. Sin sistema compartido.",
      icon: "equipo",
    },
    {
      id: "datos",
      label: "Datos sin conexion",
      body: "La informacion del deportista existe, pero nadie la lee junta. Se pierde entre planillas y apps sueltas.",
      icon: "tecnologia",
    },
    {
      id: "decisiones",
      label: "Decisiones sin seguimiento",
      body: "Se toman decisiones sin saber que paso antes. El proceso se reinicia en cada consulta.",
      icon: "clinica",
    },
    {
      id: "crecimiento",
      label: "Crecimiento sin estructura",
      body: "El deportista progresa por voluntad propia, sin un sistema que lo acompane de forma sostenida.",
      icon: "bienestar",
    },
    {
      id: "esfuerzo",
      label: "Mucho esfuerzo, poca coordinacion",
      body: "Todos ponen ganas. Pero sin coordinacion, el esfuerzo no se acumula: se dispersa.",
      icon: "eventos",
    },
    {
      id: "escalabilidad",
      label: "Sin escalabilidad",
      body: "Lo que funciona para un deportista no se puede replicar. Cada caso empieza de cero.",
      icon: "educacion",
    },
  ],
  closingLine: "¿Te suena familiar?",
  transitionLine: "ESDEC existe para cambiar exactamente esto.",
} as const;

// —— EL ECOSISTEMA DE ESDEC (visualizacion central) ——————————————————————
export const ECOSISTEMA_ECOSYSTEM = {
  eyebrow: "El ecosistema de ESDEC",
  headline: "Todo conectado",
  headlineAccent: "desde el centro.",
  subtext:
    "Seis pilares que convergen alrededor de una misma estructura. Cuando se conectan, el ecosistema funciona.",
  centerLabel: "ESDEC",
  centerTagline: "Ecosistema integral",
  pillars: [
    {
      id: "bienestar",
      title: "Bienestar",
      kicker: "Nutricion, mente y recovery",
      href: "/bienestar-deportivo-cordoba",
      ctaLabel: "Explorar bienestar deportivo",
      description:
        "El equilibrio interno como base para todo lo demas. Nutricion, psicologia y recuperacion dentro del sistema.",
      icon: "bienestar",
      accent: "#7de8a8",
      image: "/images/lifestyle/Yoga1.jpg",
      angle: 270,
      offsetX: -16,
      offsetY: 0,
    },
    {
      id: "clinica",
      title: "Clinica",
      kicker: "Prevencion y seguimiento",
      href: "/salud-deportiva-cordoba",
      ctaLabel: "Explorar salud deportiva",
      description:
        "Evaluacion, prevencion e intervencion con criterio profesional. El cuerpo como punto de partida.",
      icon: "clinica",
      accent: "#7cc8ff",
      image: "/images/lifestyle/Medico_2.jpg",
      angle: 326,
      offsetX: -10,
      offsetY: 8,
    },
    {
      id: "marca",
      title: "Marca",
      kicker: "Visibilidad y proyeccion",
      href: "/market-deportivo-cordoba",
      ctaLabel: "Explorar market deportivo",
      description:
        "La identidad del deportista y el profesional como activo. Presencia real dentro del ecosistema.",
      icon: "marca",
      accent: "#6fd4db",
      image: "/images/athletes/marketing1.jpg",
      angle: 34,
      offsetX: 10,
      offsetY: 8,
    },
    {
      id: "eventos",
      title: "Eventos",
      kicker: "Activaciones y comunidad",
      href: "/eventos-deportivos-cordoba",
      ctaLabel: "Explorar eventos deportivos",
      description:
        "Los momentos que conectan personas, expanden la red y le dan vida al ecosistema fuera de las pantallas.",
      icon: "eventos",
      accent: "#7de8a8",
      image: "/images/team/Personas_maraton.jpg",
      angle: 90,
      offsetX: 16,
      offsetY: 0,
    },
    {
      id: "tecnologia",
      title: "Tecnologia",
      kicker: "Herramientas para ordenar",
      href: "/tecnologia-deportiva-cordoba",
      ctaLabel: "Explorar tecnologia deportiva",
      description:
        "La capa digital que une datos, procesos y personas. El sistema nervioso del ecosistema.",
      icon: "tecnologia",
      accent: "#7cc8ff",
      image: "/images/athletes/metricas1.jpg",
      angle: 146,
      offsetX: 10,
      offsetY: -8,
    },
    {
      id: "educacion",
      title: "Educacion",
      kicker: "Guia y formacion",
      href: "/educacion-deportiva-cordoba",
      ctaLabel: "Explorar educacion deportiva",
      description:
        "Conocimiento que empodera. Contenido y formacion para crecer con mas autonomia y direccion.",
      icon: "educacion",
      accent: "#6fd4db",
      image: "/images/lifestyle/Vida1.jpg",
      angle: 214,
      offsetX: -10,
      offsetY: -8,
    },
  ],
} as const;

// —— RECORRIDOS (actualizado) ————————————————————————————————————————————
export const ECOSISTEMA_RECORRIDOS = {
  eyebrow: "Elegi tu recorrido",
  headline: "Tres entradas.",
  headlineAccent: "Un mismo ecosistema.",
  subtext:
    "Cada recorrido esta disenado para el contexto especifico de quien lo recorre.",
  items: [
    {
      number: "01",
      eyebrow: "Para deportistas",
      title: "Crecer con estructura",
      body: "Entrenamiento, salud y seguimiento dentro de un recorrido mas claro y coordinado.",
      cta: "Ver recorrido deportista",
      href: "/deportistas",
      accent: "#7cc8ff",
    },
    {
      number: "02",
      eyebrow: "Para profesionales",
      title: "Ejercer con plataforma",
      body: "Tu practica conectada con procesos reales, contexto y mejor visibilidad dentro del ecosistema.",
      cta: "Ver recorrido profesional",
      href: "/profesionales",
      accent: "#7de8a8",
    },
    {
      number: "03",
      eyebrow: "Eventos deportivos",
      title: "Activaciones en Cordoba",
      body: "Clinicas, experiencias y comunidad para expandir el ecosistema en movimiento.",
      cta: "Ver eventos",
      href: "/eventos-deportivos",
      accent: "#6fd4db",
    },
  ],
} as const;

export const ECOSISTEMA_SEO = {
  eyebrow: "Cordoba · Argentina · Deporte con estructura",

  h1Pre: "El ecosistema deportivo de",
  h1Accent: "Cordoba",
  h1Post: "con estructura real.",

  intro:
    "ESDEC conecta deportistas y profesionales dentro de un mismo sistema. Menos fragmentacion. Mas claridad, criterio y coordinacion.",

  ctaDeportista: "Soy deportista",
  ctaProfesional: "Soy profesional",

  recorridosTitle: "TRES CAMINOS DENTRO DEL ECOSISTEMA",

  recorridos: [
    {
      eyebrow: "Para deportistas",
      title: "CRECER CON ESTRUCTURA",
      body: "Entrenamiento, salud y seguimiento dentro de un recorrido mas claro.",
      cta: "Ver recorrido deportista",
      href: "/deportistas",
    },
    {
      eyebrow: "Para profesionales",
      title: "EJERCER CON PLATAFORMA",
      body: "Tu practica conectada con procesos reales, contexto y mejor visibilidad.",
      cta: "Ver recorrido profesional",
      href: "/profesionales",
    },
    {
      eyebrow: "Eventos deportivos",
      title: "ACTIVACIONES EN CORDOBA",
      body: "Clinicas, experiencias y comunidad para expandir el ecosistema.",
      cta: "Ver eventos",
      href: "/eventos-deportivos",
    },
  ],
} as const;

export const ECOSISTEMA_ABOUT = {
  eyebrow: "Sobre nosotros",
  headlinePre: "UN",
  headlineAccent: "ECOSISTEMA",
  headlinePost: "INTEGRAL 360.",
  body:
    "ESDEC no es una suma de servicios sueltos. Es una estructura que ordena bienestar, clinica, marca, educacion, tecnologia y eventos dentro de una misma lectura para que el deporte amateur crezca con mas claridad, mas criterio y mas proyeccion.",
  support:
    "Cuando todo conversa entre si, el deportista deja de perseguir piezas sueltas y empieza a entrar en un sistema que lo acompana de forma real.",
  defineEyebrow: "Lo que nos define",
  defineCards: [
    {
      number: "01",
      title: "Integracion total",
      body: "Bienestar, clinica, marca, educacion, tecnologia y eventos dentro de una misma estructura.",
      accent: "#7cc8ff",
    },
    {
      number: "02",
      title: "Coordinacion real",
      body: "No trabajamos por capas aisladas. Cada area suma contexto, criterio y continuidad al proceso.",
      accent: "#7de8a8",
    },
    {
      number: "03",
      title: "Proyeccion con direccion",
      body: "ESDEC convierte esfuerzo, expertise y comunidad en un ecosistema mas claro, visible y escalable.",
      accent: "#6fd4db",
    },
  ],
  orbitEyebrow: "Como se ordena el sistema",
  orbitTitle: "Todo gira alrededor de una misma base.",
  orbitBody:
    "En el centro esta ESDEC. Alrededor, las areas que hacen que el ecosistema se conecte y se vuelva mas util para cada recorrido.",
  centerLabel: "ESDEC",
  centerTitle: "Ecosistema integral 360",
  centerBody:
    "Una capa de coordinacion que conecta personas, procesos, decisiones y oportunidades dentro del deporte.",
  collageEyebrow: "Tres escenas. Un mismo sistema.",
  collageTitle: "Lo que antes estaba separado, en ESDEC entra en sintonia.",
  collageBody:
    "Bienestar, clinica y marca no compiten entre si. Se integran para que el ecosistema respire como una estructura completa.",
  servicesEyebrow: "Las 6 areas del ecosistema",
  servicesTitle: "Seis capas. Una misma lectura.",
  servicesBody:
    "Cada area cumple una funcion concreta, pero el valor aparece cuando todas se conectan entre si.",
  services: [
    {
      title: "Bienestar",
      icon: "bienestar",
      accent: "#7de8a8",
      description:
        "Nutricion, mente y recuperacion para sostener el progreso con mas equilibrio.",
      image: "/images/lifestyle/Yoga1.jpg",
      kicker: "Nutricion, mente y recovery",
    },
    {
      title: "Clinica",
      icon: "clinica",
      accent: "#7cc8ff",
      description:
        "Prevencion, evaluacion y seguimiento para decidir con mas criterio.",
      image: "/images/lifestyle/Medico_2.jpg",
      kicker: "Prevencion y seguimiento",
    },
    {
      title: "Marca",
      icon: "marca",
      accent: "#6fd4db",
      description:
        "Visibilidad y proyeccion para convertir trabajo serio en presencia real.",
      image: "/images/athletes/marketing1.jpg",
      kicker: "Visibilidad y proyeccion",
    },
    {
      title: "Eventos",
      icon: "eventos",
      accent: "#7de8a8",
      description:
        "Activaciones que expanden comunidad, vinculo y pertenencia dentro del ecosistema.",
      image: "/images/team/Personas_maraton.jpg",
      kicker: "Activaciones y comunidad",
    },
    {
      title: "Tecnologia",
      icon: "tecnologia",
      accent: "#7cc8ff",
      description:
        "Herramientas para ordenar informacion, seguimiento y mejores decisiones.",
      image: "/images/athletes/metricas1.jpg",
      kicker: "Herramientas para ordenar",
    },
    {
      title: "Educacion",
      icon: "educacion",
      accent: "#6fd4db",
      description:
        "Contenido y formacion para crecer con mas claridad, autonomia y direccion.",
      image: "/images/lifestyle/Vida1.jpg",
      kicker: "Guia y formacion",
    },
  ],
  supportImages: [
    {
      src: "/images/lifestyle/Yoga1.jpg",
      alt: "Escena de bienestar y equilibrio dentro del ecosistema ESDEC",
      label: "Bienestar",
      accent: "#7de8a8",
    },
    {
      src: "/images/lifestyle/Medico_2.jpg",
      alt: "Seguimiento clinico y evaluacion profesional en ESDEC",
      label: "Clinica",
      accent: "#7cc8ff",
    },
    {
      src: "/images/athletes/marketing1.jpg",
      alt: "Visibilidad, marca y proyeccion dentro del ecosistema ESDEC",
      label: "Marca",
      accent: "#6fd4db",
    },
  ],
  closingLabel: "La diferencia ESDEC",
  closingQuote:
    "No sumamos mas ruido alrededor del deportista. Diseñamos una estructura donde cada capa del ecosistema tenga sentido, lugar y coordinacion real.",
} as const;
