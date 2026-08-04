// content/ecosistema.ts
// Copy exclusivo de la pagina /ecosistema-deportivo-cordoba.

// —— HERO ———————————————————————————————————————————————————————————————————
export const ECOSISTEMA_HERO = {
  eyebrow: "Ecosistema Deportivo · Cordoba · Argentina",
  headlinePre: "EL TALENTO SIN SISTEMA,",
  headlineAccent: "SE DISPERSA.",
  keyword: "Ecosistema deportivo de Córdoba, Argentina",
  body:
    "ESDEC es la estructura que organiza el deporte amateur en Cordoba — para quien entrena y para quien acompaña ese proceso. Bienestar, clinica, marca, eventos, tecnologia y educacion dentro de una misma red que funciona junta, siempre a mano.",
  ctaLabel: "Ver el ecosistema",
  ctaHref: "#areas",
  ctaDeportista: "Entrar como deportista",
  ctaProfesional: "Entrar como profesional",
  stats: [
    { label: "Pilares integrados", title: "6 areas conectadas en un mismo sistema" },
    { label: "En Cordoba", title: "Pensado para el deporte amateur de la ciudad" },
    { label: "Vision del deportista", title: "360° del proceso, en un mismo lugar" },
  ],
  heroImage: "/images/team/Personas_maraton.jpg",
  heroImageAlt: "Comunidad deportiva dentro del ecosistema ESDEC",
} as const;

// —— HOOK: PUENTE ENTRE EL HERO Y LOS PILARES ————————————————————————————————
export const ECOSISTEMA_HOOK = {
  roles: [
    { id: "seguimiento", icon: "progreso", label: "Seguimiento continuo", accent: "#7cc8ff" },
    { id: "profesionales", icon: "equipo", label: "Profesionales reales", accent: "#7de8a8" },
    { id: "estructura", icon: "estructura", label: "Un solo lugar", accent: "#6fd4db" },
  ],
  punch: "ESDEC ES TU SISTEMA.",
} as const;

// —— LA APP: EN DESARROLLO ————————————————————————————————————————————————
export const ECOSISTEMA_APP_TEASER = {
  eyebrow: "La app · En desarrollo",
  badge: "Proximamente",
  headline: "TODO ESDEC,",
  headlineAccent: "SIEMPRE A MANO.",
  body: "Seguimiento, planes y contacto directo con tu equipo — sin abrir seis pestanas distintas.",
  benefits: [
    "Tu proceso completo, en un solo lugar",
    "Notificaciones de tu equipo, al instante",
    "Progreso real, no promesas",
  ],
  sides: [
    {
      id: "deportista",
      icon: "training",
      label: "Para deportistas",
      text: "Tu proceso, tu seguimiento y tus planes, siempre a mano.",
      accent: "#7cc8ff",
    },
    {
      id: "profesional",
      icon: "equipo",
      label: "Para profesionales",
      text: "Tu practica, con mas contexto y mejor visibilidad.",
      accent: "#7de8a8",
    },
  ],
  mockup: {
    statValue: "247+",
    statLabel: "Perfiles activos",
    progressLabel: "Tu proceso",
    progressValue: 72,
    rows: [
      { icon: "progreso", label: "Seguimiento semanal" },
      { icon: "equipo", label: "Mensaje de tu profesional" },
      { icon: "estructura", label: "Plan actualizado" },
    ],
  },
  journeys: [
    {
      id: "deportista",
      label: "Para deportistas",
      accent: "#7cc8ff",
      steps: [
        { title: "Cargas tu punto de partida", body: "Tu estado fisico y mental real, no el de otro deportista." },
        { title: "La app hace seguimiento", body: "Detecta patrones en tu proceso, dia a dia." },
        { title: "Recibis ajustes reales", body: "Tu plan cambia con vos, no al reves." },
      ],
    },
    {
      id: "profesional",
      label: "Para profesionales",
      accent: "#7de8a8",
      steps: [
        { title: "Ves a tus deportistas", body: "Contexto real de cada uno, sin perder el hilo." },
        { title: "Ajustas planes al instante", body: "Cambios y seguimiento, sin planillas sueltas." },
        { title: "Ganas visibilidad", body: "Mas contexto y mejor alcance dentro del ecosistema." },
      ],
    },
  ],
  ctaLabel: "Quiero ser de los primeros",
  ctaHref: "https://wa.me/5493515117555?text=Hola%20ESDEC%2C%20quiero%20ser%20de%20los%20primeros%20en%20probar%20la%20app.",
} as const;

// —— FEATURES DE LA APP (sin foto de fondo) ——————————————————————————————————
export const ECOSISTEMA_APP_FEATURES = {
  eyebrow: "La app · En desarrollo",
  headline: "Que va a",
  headlineAccent: "hacer por vos.",
  subtext: "Seis funciones concretas, pensadas para el proceso real de un deportista y de un profesional.",
  items: [
    {
      id: "seguimiento",
      icon: "progreso",
      title: "Seguimiento real",
      description: "Tu progreso, medido de verdad, no a ojo.",
      problem: "Hoy no sabes si estas mejorando o no.",
    },
    {
      id: "contacto",
      icon: "equipo",
      title: "Contacto directo",
      description: "Hablá con tu profesional sin perder el hilo.",
      problem: "Hoy el contacto se pierde entre mensajes sueltos.",
    },
    {
      id: "planes",
      icon: "estructura",
      title: "Planes que se ajustan",
      description: "Tu plan cambia con vos, no al reves.",
      problem: "Hoy el plan queda viejo apenas cambia algo.",
    },
    {
      id: "recordatorios",
      icon: "objetivo",
      title: "Recordatorios a tiempo",
      description: "Nunca mas te olvidas de una sesion o un ajuste.",
      problem: "Hoy dependes de acordarte vos solo.",
    },
    {
      id: "metricas",
      icon: "tecnologia",
      title: "Metricas claras",
      description: "Datos que se entienden, no numeros sueltos.",
      problem: "Hoy los datos estan pero nadie los lee juntos.",
    },
    {
      id: "unificado",
      icon: "escala",
      title: "Todo en un lugar",
      description: "Sin diez apps distintas para tu proceso.",
      problem: "Hoy todo esta repartido en apps y planillas.",
    },
  ],
} as const;

// —— NAVEGACION: DEPORTISTA / PROFESIONAL + 6 AREAS ——————————————————————————
export const ECOSISTEMA_NAV = {
  eyebrow: "Empeza por aca",
  headline: "Elegi tu",
  headlineAccent: "camino.",
  intro:
    "El ecosistema deportivo de Cordoba se recorre distinto segun quien sos. Elegi tu perfil para entrar al sistema que te corresponde.",
  audiences: [
    {
      id: "deportista",
      eyebrow: "Para deportistas",
      title: "Quiero entrenar con estructura",
      body: "Seguimiento, planificacion y profesionales reales acompañando tu proceso — bienestar, salud, tecnologia y mas, en un mismo sistema.",
      cta: "Entrar como deportista",
      href: "/deportistas",
      image: "/images/athletes/maraton_1.jpg",
      icon: "training",
      accent: "#7cc8ff",
    },
    {
      id: "profesional",
      eyebrow: "Para profesionales",
      title: "Quiero ejercer con plataforma",
      body: "Suma tu practica a un ecosistema con contexto real, procesos claros y mayor visibilidad dentro del deporte amateur de Cordoba.",
      cta: "Entrar como profesional",
      href: "/profesionales",
      image: "/images/athletes/medicina2.jpg",
      icon: "equipo",
      accent: "#7de8a8",
    },
  ],
} as const;

// —— CONFIANZA: SEGURIDAD / CONFIANZA / EVOLUCION —————————————————————————————
export const ECOSISTEMA_TRUST = {
  eyebrow: "Por que confiar en ESDEC",
  headline: "Seguridad,",
  headlineAccent: "confianza y evolucion.",
  intro:
    "No son palabras sueltas — es lo que sostiene el ecosistema deportivo de Cordoba en la practica, con datos reales detras.",
  items: [
    {
      id: "seguridad",
      icon: "clinica",
      stat: "100%",
      title: "Seguridad",
      body: "Profesionales reales y evaluados, no perfiles anonimos ni consejos sin respaldo.",
    },
    {
      id: "confianza",
      icon: "equipo",
      stat: "247+",
      title: "Confianza",
      body: "Deportistas y profesionales ya construyendo su proceso dentro del ecosistema.",
    },
    {
      id: "evolucion",
      icon: "progreso",
      stat: "360°",
      title: "Evolucion",
      body: "Seguimiento continuo del proceso, no intervenciones aisladas ni decisiones sin contexto.",
    },
  ],
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
    eyebrow: "ESDEC",
    headline: "El futuro del deporte",
    headlineAccent: "no se improvisa.",
    body:
      "Se construye — con estructura, acompañamiento y un sistema que crece con vos, entrenes o acompañes ese proceso. Empeza cuando quieras.",
    primaryCtaLabel: "Quiero sumarme a ESDEC",
    primaryCtaHref: "https://wa.me/5493515117555?text=Hola%20ESDEC%2C%20quiero%20sumarme%20al%20ecosistema.",
    primaryCtaExternal: true,
    secondaryCtaLabel: "Ver eventos deportivos",
    secondaryCtaHref: "/eventos-deportivos-cordoba",
    trustText: "247+ perfiles ya construyendo su proceso en Cordoba.",
  },
} as const;

// —— OBJETIVO / VISIÓN / MISIÓN —————————————————————————————————————————————
export const ECOSISTEMA_MVV = {
  eyebrow: "Institucional",
  manifestoLead: "No somos una suma de servicios.",
  manifestoPunch: "Somos el sistema.",
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
      icon: "estructura",
      title: "Integracion total",
      body: "Bienestar, clinica, marca, educacion, tecnologia y eventos dentro de una misma estructura. No servicios sueltos: un sistema.",
      accent: "#7cc8ff",
    },
    {
      number: "02",
      icon: "progreso",
      title: "Seguimiento continuo",
      body: "No trabajamos por intervenciones aisladas. Cada proceso tiene historia, contexto y una proxima etapa definida.",
      accent: "#7de8a8",
    },
    {
      number: "03",
      icon: "tecnologia",
      title: "Inteligencia aplicada",
      body: "Datos, metricas y herramientas que convierten informacion dispersa en decisiones mas claras y mejor fundamentadas.",
      accent: "#6fd4db",
    },
    {
      number: "04",
      icon: "criterio",
      title: "Criterio profesional",
      body: "Cada area del ecosistema esta respaldada por profesionales reales que aportan contexto, precision y responsabilidad.",
      accent: "#7cc8ff",
    },
    {
      number: "05",
      icon: "equipo",
      title: "Comunidad real",
      body: "El ecosistema crece cuando las personas se conectan. Construimos vinculos que tienen valor dentro y fuera de la cancha.",
      accent: "#7de8a8",
    },
    {
      number: "06",
      icon: "escala",
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
  headline: "Todo lo que necesitas,",
  headlineAccent: "en un mismo sistema.",
  subtext:
    "Bienestar, clinica, marca, eventos, tecnologia y educacion — cada area suma, pero el valor real aparece cuando funcionan juntas.",
  centerLabel: "ESDEC",
  centerTagline: "Ecosistema integral",
  pillars: [
    {
      id: "bienestar",
      title: "Bienestar",
      kicker: "Nutricion, mente y recovery",
      href: "/bienestar-deportivo-cordoba",
      ctaLabel: "Explorar bienestar deportivo",
      bullets: [
        { label: "Nutricion", icon: "nutricion" },
        { label: "Psicologia", icon: "mentalidad" },
        { label: "Recuperacion", icon: "yoga" },
      ],
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
      bullets: [
        { label: "Evaluacion", icon: "criterio" },
        { label: "Prevencion", icon: "objetivo" },
        { label: "Seguimiento", icon: "progreso" },
      ],
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
      bullets: [
        { label: "Identidad", icon: "marca" },
        { label: "Visibilidad", icon: "visibilidad" },
        { label: "Proyeccion", icon: "escala" },
      ],
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
      bullets: [
        { label: "Activaciones", icon: "eventos" },
        { label: "Comunidad", icon: "equipo" },
        { label: "Experiencias", icon: "objetivo" },
      ],
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
      bullets: [
        { label: "Datos", icon: "infraestructura" },
        { label: "Seguimiento", icon: "progreso" },
        { label: "Herramientas", icon: "tecnologia" },
      ],
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
      bullets: [
        { label: "Cursos", icon: "educacion" },
        { label: "Talleres", icon: "equipo" },
        { label: "Contenidos", icon: "estructura" },
      ],
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
      href: "/eventos-deportivos-cordoba",
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
      href: "/eventos-deportivos-cordoba",
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
