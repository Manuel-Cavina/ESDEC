// content/eventos.ts
// Source of truth for the ESDEC events vertical copy and structured event data.

export type EventStatus = "open" | "last-spots" | "closed" | "past";
export type EventCategory = "running" | "clinica" | "activacion" | "comunidad";

export interface EventsCta {
  label: string;
  href: string;
  trackingLabel: string;
  variant: "primary" | "secondary" | "ghost";
  external?: boolean;
}

export interface EventDetail {
  label: string;
  value: string;
}

export interface EventSocialComment {
  author: string;
  body: string;
  icon: string;
}

export interface EventExperienceTab {
  id: string;
  label: string;
  title: string;
  body: string;
}

export interface EventExperience {
  id: string;
  label: string;
  title: string;
  body: string;
}

export interface EsdecEvent {
  slug: string;
  name: string;
  eyebrow: string;
  category: EventCategory;
  posterTitle?: string;
  posterBody?: string;
  posterKicker?: string;
  posterCtaLabel?: string;
  campaignLabel?: string;
  campaignTitle?: string;
  campaignAccent?: string;
  campaignBody?: string;
  campaignNote?: string;
  dateDay?: string;
  dateMonth?: string;
  timeLabel?: string;
  status: EventStatus;
  dateLabel: string;
  venue: string;
  city: string;
  headline: string;
  summary: string;
  image: string;
  modalImage?: string;
  imageAlt: string;
  details: readonly EventDetail[];
  modalTitle: string;
  modalBody: string;
  modalBullets: readonly string[];
  socialComments?: readonly EventSocialComment[];
  experienceTabs?: readonly EventExperienceTab[];
  instagram: {
    label: string;
    href: string;
    handle: string;
    note: string;
  };
  cta: EventsCta;
}

export interface EvolutionStep {
  id: string;
  label: string;
  title: string;
  body: string;
}

export const EVENTS_PAGE = {
  seo: {
    title: "Eventos Deportivos en Cordoba | ESDEC",
    description:
      "Eventos deportivos de ESDEC en Cordoba: experiencias, comunidad y activaciones para entrar al ecosistema deportivo.",
  },
  hero: {
    eyebrow: "Eventos ESDEC · Cordoba · Comunidad en movimiento",
    headlinePre: "LOS EVENTOS",
    headlineAccent: "ACTIVAN",
    headlinePost: "EL ECOSISTEMA.",
    body:
      "No son fechas sueltas. Son experiencias que conectan deportistas, profesionales y marca dentro de una misma estructura con criterio, energia y continuidad.",
    image: "/images/athletes/maraton_1.jpg",
    imageAlt:
      "Corredores en una escena de maraton para la vertical de eventos ESDEC",
    pillars: [
      {
        eyebrow: "Comunidad",
        title: "DONDE LA COMUNIDAD",
        titleAccent: "SE ACTIVA",
      },
      {
        eyebrow: "Marca",
        title: "EXPERIENCIAS QUE",
        titleAccent: "DEJAN MARCA",
      },
      {
        eyebrow: "Identidad ESDEC",
        title: "ESDEC SE VIVE EN",
        titleAccent: "PRIMERA PERSONA",
      },
    ],
    primaryCta: {
      label: "Reservar mi lugar",
      href: "https://wa.me/5493515117555?text=Hola%20ESDEC%2C%20quiero%20reservar%20mi%20lugar%20para%20un%20evento.",
      trackingLabel: "events_hero_primary",
      variant: "primary",
      external: true,
    },
    secondaryCta: {
      label: "Descubrir la experiencia",
      href: "#proximo-evento",
      trackingLabel: "events_hero_secondary",
      variant: "secondary",
    },
  },
  nextEvent: {
    eyebrow: "Proximo evento",
    name: "Run + Coffee + Recovery",
    category: "clinica",
    posterTitle: "Run + Coffee",
    posterBody:
      "Movimiento, recuperacion y comunidad en una manana unica en Diario Cafe.",
    posterKicker: "Run + coffee + recovery",
    posterCtaLabel: "Explorar la experiencia",
    campaignLabel: "Activacion ESDEC",
    campaignTitle: "Corre.",
    campaignAccent: "Recupera. Conecta.",
    campaignBody:
      "Este 9 de mayo no venis solo a correr. Venis a vivir una experiencia: running, after running, cafe, crioterapia, estiramiento, musica, sorteos y marcas.",
    campaignNote: "Inscripciones hasta el 4 de mayo - reserva por Tally",
    dateDay: "9",
    dateMonth: "Mayo",
    timeLabel: "8:00 hs",
    status: "open",
    dateLabel: "Viernes 9 de mayo - 8:00 hs",
    venue: "Diario Cafe",
    city: "Cordoba Capital",
    headline: "Run + Coffee + Recovery: correr, recuperar y conectar.",
    summary:
      "Una experiencia que reune movimiento, recuperacion, comunidad, cafe, crioterapia, musica, sorteos y marcas en Diario Cafe.",
    image: "/images/Evento/Image2.png",
    modalImage: "/images/Evento/image.png",
    imageAlt: "Runner en movimiento para la experiencia Run Coffee Recovery de ESDEC",
    slug: "run-coffee-recovery",
    details: [
      { label: "Formato", value: "Run + Coffee + Recovery" },
      { label: "Inscripcion", value: "Hasta el 4 de mayo inclusive" },
      { label: "Reserva", value: "Por formulario Tally" },
    ],
    modalTitle: "Que se va a vivir en Run + Coffee + Recovery",
    modalBody:
      "Este 9 de mayo no venis solo a correr. Venis a vivir una manana donde el deporte se conecta con bienestar, comunidad y marcas que acompanian una propuesta distinta.",
    modalBullets: [
      "08:00 hs: presentacion oficial del evento en Diario Cafe.",
      "09:00 a 09:30 hs: entrada en calor general y largada desde Parque Sarmiento.",
      "Cierre con estiramiento, crioterapia, combo de cafe, musica, sorteos y after running.",
    ],
    socialComments: [
      {
        author: "formato",
        icon: "FMT",
        body:
          "No venis solo a sumar kilometros: venis a vivir una manana con running, cafe, recuperacion y comunidad.",
      },
      {
        author: "inscripcion",
        icon: "OK",
        body:
          "Las inscripciones estan abiertas hasta el 4 de mayo. Si queres estar, tu proxima experiencia arranca aca.",
      },
      {
        author: "reserva",
        icon: "IN",
        body:
          "La reserva se hace por Tally: rapido, claro y directo para asegurar tu lugar en Diario Cafe.",
      },
      {
        author: "running",
        icon: "RUN",
        body:
          "Largamos desde Parque Sarmiento con recorridos 3K y 5K para moverte, activar el cuerpo y compartir ruta.",
      },
      {
        author: "coffee",
        icon: "CAF",
        body:
          "El after running baja a Diario Cafe con combo, musica, sorteos, marcas amigas y un espacio para conocerse.",
      },
      {
        author: "recovery",
        icon: "REC",
        body:
          "Crioterapia, estiramiento guiado y beneficios para que la experiencia no termine cuando frenas de correr.",
      },
    ],
    experienceTabs: [
      {
        id: "run",
        label: "Run",
        title: "Movimiento con energia real",
        body:
          "Entrada en calor, largada desde Parque Sarmiento y recorridos 3K / 5K para activar la manana desde el deporte.",
      },
      {
        id: "coffee",
        label: "Coffee",
        title: "After running en Diario Cafe",
        body:
          "Combo de cafe, musica, sorteos y marcas amigas para que el evento tambien sea encuentro, disfrute y comunidad.",
      },
      {
        id: "recovery",
        label: "Recovery",
        title: "Recuperar tambien es parte",
        body:
          "Crioterapia y estiramiento guiado para cerrar con bienestar y entender que correr mejor tambien es recuperar mejor.",
      },
    ],
    instagram: {
      label: "Ver novedades en Instagram",
      href: "https://www.instagram.com/esdec.ar?igsh=N3ZtMHd0a2I2aXVz",
      handle: "@esdec.ar",
      note: "Seguimos publicando avances, cupos, marcas que acompanian y contenido de la previa en Instagram.",
    },
    cta: {
      label: "Reservar por Tally",
      href: "https://tally.so/r/VL1BlM",
      trackingLabel: "events_next_event_reserve",
      variant: "primary",
      external: true,
    },
  } satisfies EsdecEvent,
  evolution: {
    eyebrow: "Evolucion de experiencia",
    headlinePre: "ANTES, DURANTE",
    headlineAccent: "Y DESPUES.",
    headlinePost: "UN RECORRIDO.",
    body:
      "Un evento ESDEC empieza antes de llegar al lugar y sigue despues de terminar. La experiencia ordena expectativa, accion y continuidad.",
    steps: [
      {
        id: "antes",
        label: "Antes",
        title: "La previa construye deseo",
        body:
          "Comunicacion clara, reserva simple y una promesa concreta: saber que vas a vivir y por que vale estar.",
      },
      {
        id: "durante",
        label: "Durante",
        title: "La experiencia se vuelve comunidad",
        body:
          "Movimiento, criterio, energia y marca conviven en un momento que se siente vivo, cuidado y compartible.",
      },
      {
        id: "despues",
        label: "Despues",
        title: "El evento deja un siguiente paso",
        body:
          "La participacion se transforma en relacion: seguimiento, contenido, contacto y una entrada mas clara al sistema.",
      },
    ] satisfies EvolutionStep[],
  },
  manifesto: {
    eyebrow: "Por que eventos",
    headlinePre: "EL DEPORTE",
    headlineAccent: "SE CONSTRUYE",
    headlinePost: "EN MOVIMIENTO.",
    body:
      "Los eventos son el lugar donde ESDEC deja de ser una idea y se convierte en experiencia. No buscamos llenar una agenda: buscamos crear momentos que ordenen comunidad, activen identidad y hagan visible una forma distinta de vivir el deporte amateur.",
    quote:
      "Cuando una comunidad se encuentra con una estructura clara, el esfuerzo deja de sentirse aislado.",
  },
  pastEvents: {
    eyebrow: "Eventos pasados",
    headlinePre: "LO QUE YA",
    headlineAccent: "DEJAMOS",
    headlinePost: "ACTIVADO.",
    body:
      "Experiencias anteriores que muestran comunidad, movimiento y prueba real de marca. Tocalas para ver que se vivio.",
    items: [
      {
        slug: "running-community-recovery",
        name: "Running Community + Recovery",
        eyebrow: "Experiencia pasada",
        category: "running",
        status: "past",
        dateLabel: "Abril 2026",
        venue: "Nueva Cordoba",
        city: "Cordoba Capital",
        headline: "Una salida que termino en comunidad.",
        summary:
          "Una activacion breve y compartible que unio running, recovery y contacto posterior con ESDEC.",
        image: "/images/team/Equipo_Escalinatas.png",
        imageAlt: "Comunidad ESDEC en una activacion previa",
        details: [
          { label: "Asistencia", value: "72 participantes" },
          { label: "Formato", value: "Salida guiada + recovery" },
          { label: "Resultado", value: "Comunidad y contactos reales" },
        ],
        modalTitle: "Que se vivio en Running Community + Recovery",
        modalBody:
          "Fue una experiencia simple, fisica y cercana: convocatoria, movimiento compartido y un cierre pensado para que la comunidad no se corte cuando termina el entrenamiento.",
        modalBullets: [
          "Salida grupal con ritmo accesible.",
          "Cierre de recovery y conversacion.",
          "Contenido posterior para sostener el vinculo.",
        ],
        instagram: {
          label: "Ver contenido en Instagram",
          href: "https://www.instagram.com/esdec.ar?igsh=N3ZtMHd0a2I2aXVz",
          handle: "@esdec.ar",
          note: "Las fotos, reels y novedades de activaciones se comparten desde Instagram.",
        },
        cta: {
          label: "Quiero vivir el proximo",
          href: "https://wa.me/5493515117555?text=Hola%20ESDEC%2C%20quiero%20enterarme%20del%20proximo%20evento.",
          trackingLabel: "events_past_running_interest",
          variant: "ghost",
          external: true,
        },
      },
      {
        slug: "tecnica-en-movimiento",
        name: "Tecnica en Movimiento",
        eyebrow: "Experiencia pasada",
        category: "clinica",
        status: "past",
        dateLabel: "Marzo 2026",
        venue: "Parque Sarmiento",
        city: "Cordoba Capital",
        headline: "Correr, observar y ajustar.",
        summary:
          "Una experiencia de tecnica aplicada donde el valor estuvo en entender el proceso, no solo en completar una actividad.",
        image: "/images/lifestyle/Medico_2.jpg",
        imageAlt: "Seguimiento tecnico y clinico en evento ESDEC",
        details: [
          { label: "Foco", value: "Tecnica y prevencion" },
          { label: "Capas", value: "Clinica, bienestar y educacion" },
          { label: "Aprendizaje", value: "Criterio para seguir entrenando" },
        ],
        modalTitle: "Que se trabajo en Tecnica en Movimiento",
        modalBody:
          "La actividad estuvo enfocada en leer mejor el cuerpo en accion: pequenas correcciones, criterios preventivos y una mirada mas ordenada del entrenamiento amateur.",
        modalBullets: [
          "Observacion tecnica en movimiento.",
          "Correcciones simples y aplicables.",
          "Cierre educativo para seguir con mas criterio.",
        ],
        instagram: {
          label: "Ver registro en Instagram",
          href: "https://www.instagram.com/esdec.ar?igsh=N3ZtMHd0a2I2aXVz",
          handle: "@esdec.ar",
          note: "Instagram funciona como registro vivo de lo que ESDEC activa en comunidad.",
        },
        cta: {
          label: "Quiero una experiencia asi",
          href: "https://wa.me/5493515117555?text=Hola%20ESDEC%2C%20quiero%20vivir%20una%20experiencia%20como%20Tecnica%20en%20Movimiento.",
          trackingLabel: "events_past_technique_interest",
          variant: "ghost",
          external: true,
        },
      },
    ] satisfies EsdecEvent[],
  },
  finalCta: {
    eyebrow: "Unirte al sistema",
    headlinePre: "ENTRA AL",
    headlineAccent: "SISTEMA",
    headlinePost: "ESDEC.",
    body:
      "Sumarte a un evento es una forma concreta de entrar en contacto con la comunidad, entender la experiencia y descubrir como ESDEC puede acompanarte.",
    primaryCta: {
      label: "Unirme al sistema",
      href: "https://wa.me/5493515117555?text=Hola%20ESDEC%2C%20quiero%20unirme%20al%20sistema%20y%20recibir%20novedades%20de%20eventos.",
      trackingLabel: "events_system_join",
      variant: "primary",
      external: true,
    },
    secondaryCta: {
      label: "Ver ecosistema",
      href: "/ecosistema-deportivo-cordoba",
      trackingLabel: "events_system_ecosystem",
      variant: "secondary",
    },
  },
} as const;
