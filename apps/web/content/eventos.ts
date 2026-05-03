// content/eventos.ts
// Source of truth for the ESDEC events page copy and structured event data.

export interface EventsCta {
  label: string;
  href: string;
  trackingLabel: string;
  variant: "primary" | "secondary";
  external?: boolean;
}

export interface EventPhase {
  id: string;
  label: string;
  title: string;
  body: string;
}

export interface EcosystemLink {
  id: string;
  title: string;
  body: string;
}

export interface PastEvent {
  id: string;
  name: string;
  date: string;
  tag: string;
  summary: string;
  image: string;
  imageAlt: string;
}

export interface EsdecEvent {
  eyebrow: string;
  name: string;
  dateDay: string;
  dateMonth: string;
  dateLabel: string;
  receptionTime: string;
  startTime: string;
  venue: string;
  city: string;
  summary: string;
  about?: string;
  highlights?: readonly string[];
  benefit?: string;
  spotsWarning?: string;
  image: string;
  imageAlt: string;
  cta: EventsCta;
  ctas: readonly EventsCta[];
}

export const EVENTS_PAGE = {
  seo: {
    title: "Eventos Deportivos en Cordoba | ESDEC",
    description:
      "Eventos ESDEC en Cordoba: experiencias deportivas donde comunidad, energia y progreso se convierten en activacion real.",
  },
  hero: {
    eyebrow: "Eventos ESDEC · Cordoba",
    headlineLine1: "NO VENIS A VER UN EVENTO.",
    headlineLine2: "VENIS A ACTIVARTE.",
    body:
      "Eventos ESDEC es donde la comunidad, la energia y el progreso se convierten en experiencia real.",
    image: "/images/athletes/maraton_1.jpg",
    imageAlt: "Corredores en una activacion deportiva de ESDEC",
    words: [
      {
        label: "comunidad",
        title: "personas que se mueven con vos",
      },
      {
        label: "energia",
        title: "un entorno que te enciende",
      },
      {
        label: "activacion",
        title: "pasas de mirar a estar",
      },
      {
        label: "progreso",
        title: "cada experiencia deja algo",
      },
    ],
    ctas: [
      {
        label: "Ver proximo evento",
        href: "#proximo-evento",
        trackingLabel: "events_hero_next",
        variant: "primary",
      },
      {
        label: "Como se vive",
        href: "#experiencia",
        trackingLabel: "events_hero_how",
        variant: "secondary",
      },
    ] satisfies EventsCta[],
  },
  transition: {
    eyebrow: "El inicio",
    title: "ASI EMPIEZA LA EXPERIENCIA",
    steps: [
      {
        id: "descubri",
        label: "Clave 01",
        title: "DESCUBRI",
        body:
          "Encontrás una experiencia que te llama por algo más que la fecha: hay energía, comunidad y una razón concreta para moverte.",
      },
      {
        id: "te-sumas",
        label: "Clave 02",
        title: "TE SUMAS",
        body:
          "Reservás tu lugar y empezás a entrar en clima. Ya no sos espectador: sos parte de una activación que se prepara con intención.",
      },
      {
        id: "lo-vivis",
        label: "Clave 03",
        title: "LO VIVIS",
        body:
          "Llegás, entrenás, conectás y te vas distinto. El evento termina, pero la sensación de progreso sigue con vos.",
      },
    ] satisfies EventPhase[],
  },
  nextEvent: {
    eyebrow: "Proximo evento",
    name: "Run + Coffee + Recovery",
    dateDay: "9",
    dateMonth: "Mayo",
    dateLabel: "Viernes 9 de mayo",
    receptionTime: "8:00 AM",
    startTime: "9:00 AM",
    venue: "Diario Cafe",
    city: "Cordoba Capital",
    summary:
      "Movimiento, recuperacion y comunidad en una manana creada para activar el cuerpo y entrar al ecosistema desde una experiencia real.",
    about:
      "No es solo una carrera: es una manana pensada para vivir el deporte desde otro lugar. Movimiento con estructura, recuperacion real y comunidad que acompana antes, durante y despues del esfuerzo.",
    highlights: [
      "Estiramientos guiados para entrada en calor y enfriamiento.",
      "Recuperacion activa post-esfuerzo.",
      "Combo especial del espacio anfitrion para todos los participantes.",
      "Sorteos entre asistentes: indumentaria, accesorios, suplementos deportivos y mas.",
      "Descuentos exclusivos con codigo especial para quienes se registren.",
    ],
    benefit:
      "Todos los participantes reciben descuentos especiales en marcas del ecosistema. El codigo se entrega al completar la inscripcion.",
    spotsWarning:
      "Cupos limitados. Registrarte garantiza tu lugar y participacion en todos los sorteos del evento.",
    image: "/images/Evento/imagen banner.png",
    imageAlt: "Imagen principal del evento Run Coffee Recovery de ESDEC",
    cta: {
      label: "Reservar mi lugar",
      href: "https://tally.so/r/VL1BlM",
      trackingLabel: "events_next_reserve",
      variant: "primary",
      external: true,
    },
    ctas: [
      {
        label: "Reservar mi lugar",
        href: "https://tally.so/r/VL1BlM",
        trackingLabel: "events_next_reserve",
        variant: "primary",
        external: true,
      },
      {
        label: "Explorar la experiencia",
        href: "#experiencia",
        trackingLabel: "events_next_experience",
        variant: "secondary",
      },
    ] satisfies EventsCta[],
  } satisfies EsdecEvent,
  experience: {
    eyebrow: "Como se vive un evento ESDEC",
    title: "LO QUE TE LLEV\u00c1S DE UN EVENTO ESDEC",
    phases: [
      {
        id: "antes",
        label: "01",
        title: "CLARIDAD",
        body: "Entren\u00e1s con intenci\u00f3n.",
      },
      {
        id: "durante",
        label: "02",
        title: "CONEXI\u00d3N",
        body: "No entren\u00e1s solo.",
      },
      {
        id: "despues",
        label: "03",
        title: "PROGRESO",
        body: "Das un paso real.",
      },
    ] satisfies EventPhase[],
  },
  pastEvents: {
    eyebrow: "Registro vivo",
    title: "YA PASO. YA SE VIVIO. YA DEJO HUELLA.",
    items: [
      {
        id: "running-community",
        name: "Running Community + Recovery",
        date: "Abril 2026",
        tag: "Running · Comunidad",
        summary:
          "Salida grupal, movimiento compartido y cierre de recovery. Una activacion simple que dejo comunidad y vinculos reales.",
        image: "/images/team/Equipo_Escalinatas.png",
        imageAlt: "Comunidad ESDEC despues de una activacion running",
      },
      {
        id: "tecnica-en-movimiento",
        name: "Tecnica en Movimiento",
        date: "Marzo 2026",
        tag: "Clinica · Prevencion",
        summary:
          "Observacion tecnica aplicada al running. Correcciones, criterio preventivo y una mirada distinta del entrenamiento amateur.",
        image: "/images/lifestyle/Medico_2.jpg",
        imageAlt: "Acompanamiento tecnico en una experiencia deportiva",
      },
      {
        id: "recovery-session",
        name: "Recovery Session",
        date: "Febrero 2026",
        tag: "Recuperacion · Bienestar",
        summary:
          "Sesion enfocada en recuperacion activa y bienestar post-esfuerzo. Cuerpo, mente y comunidad en el mismo espacio.",
        image: "/images/lifestyle/Yoga1.jpg",
        imageAlt: "Sesion de recuperacion y bienestar deportivo",
      },
      {
        id: "comunidad-en-ruta",
        name: "Comunidad en Ruta",
        date: "Enero 2026",
        tag: "Running · Encuentro",
        summary:
          "Una salida que termino en encuentro. Ritmo accesible, energia grupal y un cierre compartido para todos los niveles.",
        image: "/images/team/personascorriendo.jpg",
        imageAlt: "Grupo de deportistas corriendo en comunidad",
      },
    ] satisfies PastEvent[],
  },
  ecosystem: {
    eyebrow: "Continuidad",
    title: "EVENTOS ESDEC NO TERMINA CUANDO TERMINA EL DIA.",
    items: [
      {
        id: "bienestar",
        title: "BIENESTAR",
        body: "Recuperacion, habitos y cuidado para sostener lo que activaste.",
      },
      {
        id: "clinica",
        title: "CLINICA",
        body: "Mirada profesional para entrenar con mas criterio y menos azar.",
      },
      {
        id: "marca",
        title: "MARCA",
        body: "Comunidad, identidad y alianzas que amplifican cada experiencia.",
      },
      {
        id: "tecnologia",
        title: "TECNOLOGIA",
        body: "Herramientas para convertir participacion en progreso visible.",
      },
    ] satisfies EcosystemLink[],
  },
  finalCta: {
    eyebrow: "El momento es ahora",
    headlineLine1: "EVOLUCIONAR NO ES UNA IDEA.",
    headlineLine2: "ES UNA DECISI\u00d3N. Y ES AHORA.",
    headlineStack: [
      "EVOLUCIONAR NO ES UNA IDEA.",
      "ES UNA DECISI\u00d3N.",
      "Y ES AHORA.",
    ],
    body:
      "Cada evento ESDEC es el punto donde empez\u00e1s a entrenar, conectar y avanzar en serio.",
    panelEyebrow: "TU PR\u00d3XIMA EXPERIENCIA ARRANCA AC\u00c1",
    panelTitle: "RESERV\u00c1 TU LUGAR EN ESDEC",
    panelBody: "Esto empieza en un evento. No termina ah\u00ed.",
    panelTrust: "Pr\u00f3ximo evento en C\u00f3rdoba \u00b7 Cupos limitados",
    ctas: [
      {
        label: "QUIERO MI LUGAR \u2192",
        href: "https://tally.so/r/VL1BlM",
        trackingLabel: "events_final_place",
        variant: "primary",
        external: true,
      },
      {
        label: "Ver todos los eventos",
        href: "#eventos-anteriores",
        trackingLabel: "events_final_all",
        variant: "secondary",
      },
    ] satisfies EventsCta[],
  },
} as const;
