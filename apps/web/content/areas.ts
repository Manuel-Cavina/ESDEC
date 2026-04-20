// content/areas.ts
// Source of truth for the temporary SEO landings of each ESDEC ecosystem area.

export type AreaSlug =
  | "salud-deportiva-cordoba"
  | "tecnologia-deportiva-cordoba"
  | "bienestar-deportivo-cordoba"
  | "market-deportivo-cordoba"
  | "educacion-deportiva-cordoba"
  | "eventos-deportivos-cordoba";

export interface AreaContentBlock {
  title: string;
  body: string;
}

export interface AreaRelatedLink {
  slug: AreaSlug;
  label: string;
  description: string;
}

export interface AreaPageConfig {
  slug: AreaSlug;
  shortName: string;
  navLabel: string;
  badge: string;
  h1: string;
  intro: string;
  seoTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  athleteCtaLabel: string;
  professionalCtaLabel: string;
  contactCtaLabel: string;
  relatedTitle: string;
  sections: [AreaContentBlock, AreaContentBlock, AreaContentBlock];
  relatedLinks: AreaRelatedLink[];
}

const AREA_BADGE = "Area en desarrollo";

export const AREA_PAGE_ORDER: AreaSlug[] = [
  "salud-deportiva-cordoba",
  "tecnologia-deportiva-cordoba",
  "bienestar-deportivo-cordoba",
  "market-deportivo-cordoba",
  "educacion-deportiva-cordoba",
  "eventos-deportivos-cordoba",
];

export const AREA_PAGES: Record<AreaSlug, AreaPageConfig> = {
  "salud-deportiva-cordoba": {
    slug: "salud-deportiva-cordoba",
    shortName: "Salud deportiva",
    navLabel: "Salud deportiva",
    badge: AREA_BADGE,
    h1: "Salud deportiva para procesos mejor coordinados",
    intro:
      "Esta area esta en desarrollo. ESDEC la proyecta como una capa clave para ordenar salud, seguimiento y criterio dentro del ecosistema.",
    seoTitle: "Salud deportiva en Cordoba | ESDEC",
    metaDescription:
      "Conoce como ESDEC proyecta su area de salud deportiva en Cordoba: evaluacion, prevencion y seguimiento dentro de un ecosistema deportivo mas coordinado.",
    ogTitle: "Salud deportiva en Cordoba",
    ogDescription:
      "Una landing temporal de ESDEC para presentar el rol de la salud deportiva dentro del ecosistema en construccion.",
    athleteCtaLabel: "Entrar como deportista",
    professionalCtaLabel: "Entrar como profesional",
    contactCtaLabel: "Recibir novedades de salud deportiva",
    relatedTitle: "Otras areas del ecosistema ESDEC",
    sections: [
      {
        title: "Que rol cumple esta area dentro de ESDEC",
        body:
          "Ordena prevencion, seguimiento y lectura fisica dentro del sistema.",
      },
      {
        title: "Que estamos desarrollando",
        body:
          "Estamos desarrollando una vertical conectada al ecosistema.",
      },
      {
        title: "A quien puede interesarle",
        body:
          "A deportistas y profesionales que buscan mas orden y mejor coordinacion.",
      },
    ],
    relatedLinks: [
      {
        slug: "bienestar-deportivo-cordoba",
        label: "Explorar bienestar deportivo",
        description: "Habitos, equilibrio y continuidad para sostener el progreso.",
      },
      {
        slug: "tecnologia-deportiva-cordoba",
        label: "Explorar tecnologia deportiva",
        description: "Herramientas para ordenar informacion y seguimiento.",
      },
      {
        slug: "market-deportivo-cordoba",
        label: "Explorar market deportivo",
        description: "Visibilidad y oportunidades para proyectos serios.",
      },
      {
        slug: "educacion-deportiva-cordoba",
        label: "Explorar educacion deportiva",
        description: "Guias y formacion para crecer con mas criterio.",
      },
      {
        slug: "eventos-deportivos-cordoba",
        label: "Explorar eventos deportivos",
        description: "Activaciones y comunidad para mover el ecosistema.",
      },
    ],
  },
  "tecnologia-deportiva-cordoba": {
    slug: "tecnologia-deportiva-cordoba",
    shortName: "Tecnologia deportiva",
    navLabel: "Tecnologia deportiva",
    badge: AREA_BADGE,
    h1: "Tecnologia deportiva para ordenar mejor cada proceso",
    intro:
      "Esta area esta en desarrollo. ESDEC la piensa como una capa digital para ordenar informacion, seguimiento y decisiones.",
    seoTitle: "Tecnologia deportiva en Cordoba | ESDEC",
    metaDescription:
      "Descubri el enfoque de ESDEC para tecnologia deportiva en Cordoba: herramientas, seguimiento y orden del proceso sin perder criterio humano.",
    ogTitle: "Tecnologia deportiva en Cordoba",
    ogDescription:
      "ESDEC presenta el rol de la tecnologia deportiva dentro de un ecosistema que busca ordenar mejor el deporte amateur.",
    athleteCtaLabel: "Entrar como deportista",
    professionalCtaLabel: "Entrar como profesional",
    contactCtaLabel: "Recibir novedades de tecnologia deportiva",
    relatedTitle: "Segui navegando las otras areas",
    sections: [
      {
        title: "Que rol cumple esta area dentro de ESDEC",
        body:
          "Ayuda a ordenar informacion y dar mas claridad al proceso.",
      },
      {
        title: "Que estamos desarrollando",
        body:
          "Estamos desarrollando una base tecnologica para el ecosistema.",
      },
      {
        title: "A quien puede interesarle",
        body:
          "A deportistas y profesionales que necesitan menos friccion y mas contexto.",
      },
    ],
    relatedLinks: [
      {
        slug: "salud-deportiva-cordoba",
        label: "Explorar salud deportiva",
        description: "Prevencion y seguimiento dentro de una lectura mas integrada.",
      },
      {
        slug: "bienestar-deportivo-cordoba",
        label: "Explorar bienestar deportivo",
        description: "Base interna para sostener el rendimiento.",
      },
      {
        slug: "market-deportivo-cordoba",
        label: "Explorar market deportivo",
        description: "Visibilidad y posicionamiento dentro del ecosistema.",
      },
      {
        slug: "educacion-deportiva-cordoba",
        label: "Explorar educacion deportiva",
        description: "Contenido y guia para crecer con autonomia.",
      },
      {
        slug: "eventos-deportivos-cordoba",
        label: "Explorar eventos deportivos",
        description: "Encuentros y activaciones para ampliar comunidad.",
      },
    ],
  },
  "bienestar-deportivo-cordoba": {
    slug: "bienestar-deportivo-cordoba",
    shortName: "Bienestar deportivo",
    navLabel: "Bienestar deportivo",
    badge: AREA_BADGE,
    h1: "Bienestar deportivo como base del progreso sostenido",
    intro:
      "Esta area esta en desarrollo. ESDEC la proyecta como una base para sostener bienestar, equilibrio y continuidad.",
    seoTitle: "Bienestar deportivo en Cordoba | ESDEC",
    metaDescription:
      "ESDEC desarrolla un area de bienestar deportivo en Cordoba enfocada en habitos, equilibrio y continuidad para sostener el progreso del deportista.",
    ogTitle: "Bienestar deportivo en Cordoba",
    ogDescription:
      "Una landing temporal de ESDEC para presentar el enfoque de bienestar deportivo dentro del ecosistema.",
    athleteCtaLabel: "Entrar como deportista",
    professionalCtaLabel: "Entrar como profesional",
    contactCtaLabel: "Recibir novedades de bienestar deportivo",
    relatedTitle: "Areas relacionadas dentro del ecosistema",
    sections: [
      {
        title: "Que rol cumple esta area dentro de ESDEC",
        body:
          "Sostiene habitos, equilibrio y continuidad dentro del proceso.",
      },
      {
        title: "Que estamos desarrollando",
        body:
          "Estamos desarrollando una vertical de bienestar integrada al ecosistema.",
      },
      {
        title: "A quien puede interesarle",
        body:
          "A deportistas y profesionales que entienden que sostenerse mejor tambien es rendir mejor.",
      },
    ],
    relatedLinks: [
      {
        slug: "salud-deportiva-cordoba",
        label: "Explorar salud deportiva",
        description: "La capa de evaluacion y seguimiento corporal.",
      },
      {
        slug: "tecnologia-deportiva-cordoba",
        label: "Explorar tecnologia deportiva",
        description: "Herramientas para ordenar informacion y continuidad.",
      },
      {
        slug: "market-deportivo-cordoba",
        label: "Explorar market deportivo",
        description: "Presencia y posicionamiento para hacer visible el trabajo.",
      },
      {
        slug: "educacion-deportiva-cordoba",
        label: "Explorar educacion deportiva",
        description: "Formacion y contenido para tomar mejores decisiones.",
      },
      {
        slug: "eventos-deportivos-cordoba",
        label: "Explorar eventos deportivos",
        description: "Experiencias que expanden vinculo y comunidad.",
      },
    ],
  },
  "market-deportivo-cordoba": {
    slug: "market-deportivo-cordoba",
    shortName: "Market deportivo",
    navLabel: "Market deportivo",
    badge: AREA_BADGE,
    h1: "Market deportivo para dar visibilidad a lo que vale",
    intro:
      "Esta area esta en desarrollo. ESDEC la proyecta como una capa de visibilidad, posicionamiento y conexion para el ecosistema.",
    seoTitle: "Market deportivo en Cordoba | ESDEC",
    metaDescription:
      "Conoce el enfoque de ESDEC para market deportivo en Cordoba: visibilidad, conexion y oportunidades dentro de un ecosistema deportivo en crecimiento.",
    ogTitle: "Market deportivo en Cordoba",
    ogDescription:
      "ESDEC presenta su vertical de market deportivo como parte del ecosistema que busca conectar trabajo serio con mas visibilidad.",
    athleteCtaLabel: "Entrar como deportista",
    professionalCtaLabel: "Entrar como profesional",
    contactCtaLabel: "Recibir novedades de market deportivo",
    relatedTitle: "Segui explorando el ecosistema",
    sections: [
      {
        title: "Que rol cumple esta area dentro de ESDEC",
        body:
          "Hace visible el valor del ecosistema y de quienes lo integran.",
      },
      {
        title: "Que estamos desarrollando",
        body:
          "Estamos desarrollando una vertical enfocada en identidad y presencia.",
      },
      {
        title: "A quien puede interesarle",
        body:
          "A profesionales, proyectos y deportistas que necesitan visibilidad con direccion.",
      },
    ],
    relatedLinks: [
      {
        slug: "salud-deportiva-cordoba",
        label: "Explorar salud deportiva",
        description: "La lectura fisica y preventiva del proceso deportivo.",
      },
      {
        slug: "tecnologia-deportiva-cordoba",
        label: "Explorar tecnologia deportiva",
        description: "Infraestructura digital para sostener mejor el recorrido.",
      },
      {
        slug: "bienestar-deportivo-cordoba",
        label: "Explorar bienestar deportivo",
        description: "Habitos y equilibrio como base del crecimiento.",
      },
      {
        slug: "educacion-deportiva-cordoba",
        label: "Explorar educacion deportiva",
        description: "Contenido util para crecer con direccion.",
      },
      {
        slug: "eventos-deportivos-cordoba",
        label: "Explorar eventos deportivos",
        description: "Puntos de encuentro para activar comunidad.",
      },
    ],
  },
  "educacion-deportiva-cordoba": {
    slug: "educacion-deportiva-cordoba",
    shortName: "Educacion deportiva",
    navLabel: "Educacion deportiva",
    badge: AREA_BADGE,
    h1: "Educacion deportiva para crecer con mas criterio",
    intro:
      "Esta area esta en desarrollo. ESDEC la piensa como una capa de claridad, guia y criterio para el ecosistema.",
    seoTitle: "Educacion deportiva en Cordoba | ESDEC",
    metaDescription:
      "Descubri la propuesta de educacion deportiva de ESDEC en Cordoba: contenidos, guia y formacion para crecer con mas criterio y autonomia.",
    ogTitle: "Educacion deportiva en Cordoba",
    ogDescription:
      "ESDEC presenta su vertical de educacion deportiva como una capa de claridad y acompanamiento dentro del ecosistema.",
    athleteCtaLabel: "Entrar como deportista",
    professionalCtaLabel: "Entrar como profesional",
    contactCtaLabel: "Recibir novedades de educacion deportiva",
    relatedTitle: "Explora otras areas con las que se conecta",
    sections: [
      {
        title: "Que rol cumple esta area dentro de ESDEC",
        body:
          "Convierte informacion en criterio para tomar mejores decisiones.",
      },
      {
        title: "Que estamos desarrollando",
        body:
          "Estamos desarrollando una base editorial y formativa alineada con ESDEC.",
      },
      {
        title: "A quien puede interesarle",
        body:
          "A deportistas y profesionales que quieren crecer con mas claridad.",
      },
    ],
    relatedLinks: [
      {
        slug: "salud-deportiva-cordoba",
        label: "Explorar salud deportiva",
        description: "Prevencion y criterio para leer mejor el cuerpo.",
      },
      {
        slug: "tecnologia-deportiva-cordoba",
        label: "Explorar tecnologia deportiva",
        description: "Herramientas para seguir el proceso con mas claridad.",
      },
      {
        slug: "bienestar-deportivo-cordoba",
        label: "Explorar bienestar deportivo",
        description: "El soporte interno que sostiene el progreso.",
      },
      {
        slug: "market-deportivo-cordoba",
        label: "Explorar market deportivo",
        description: "Visibilidad y presencia para proyectos bien construidos.",
      },
      {
        slug: "eventos-deportivos-cordoba",
        label: "Explorar eventos deportivos",
        description: "Experiencias presenciales para activar comunidad.",
      },
    ],
  },
  "eventos-deportivos-cordoba": {
    slug: "eventos-deportivos-cordoba",
    shortName: "Eventos deportivos",
    navLabel: "Eventos deportivos",
    badge: AREA_BADGE,
    h1: "Eventos deportivos para activar comunidad y movimiento",
    intro:
      "Esta area esta en desarrollo. ESDEC la proyecta como una linea de eventos para activar comunidad, marca y movimiento.",
    seoTitle: "Eventos deportivos en Cordoba | ESDEC",
    metaDescription:
      "ESDEC proyecta una agenda de eventos deportivos en Cordoba para activar comunidad, experiencias y vinculos dentro del ecosistema.",
    ogTitle: "Eventos deportivos en Cordoba",
    ogDescription:
      "Una landing temporal de ESDEC para presentar el rol de los eventos deportivos dentro del ecosistema.",
    athleteCtaLabel: "Entrar como deportista",
    professionalCtaLabel: "Entrar como profesional",
    contactCtaLabel: "Recibir novedades de eventos deportivos",
    relatedTitle: "Conoce las otras areas del ecosistema",
    sections: [
      {
        title: "Que rol cumple esta area dentro de ESDEC",
        body:
          "Lleva el ecosistema al territorio y lo convierte en experiencia compartida.",
      },
      {
        title: "Que estamos desarrollando",
        body:
          "Estamos desarrollando una linea de activaciones para expandir comunidad y marca.",
      },
      {
        title: "A quien puede interesarle",
        body:
          "A deportistas, profesionales y proyectos que quieran vinculo y presencia real.",
      },
    ],
    relatedLinks: [
      {
        slug: "salud-deportiva-cordoba",
        label: "Explorar salud deportiva",
        description: "La capa preventiva y de seguimiento del sistema.",
      },
      {
        slug: "tecnologia-deportiva-cordoba",
        label: "Explorar tecnologia deportiva",
        description: "Herramientas para ordenar mejor procesos y datos.",
      },
      {
        slug: "bienestar-deportivo-cordoba",
        label: "Explorar bienestar deportivo",
        description: "Habitos y equilibrio para sostener el progreso.",
      },
      {
        slug: "market-deportivo-cordoba",
        label: "Explorar market deportivo",
        description: "Visibilidad y conexiones para proyectos serios.",
      },
      {
        slug: "educacion-deportiva-cordoba",
        label: "Explorar educacion deportiva",
        description: "Formacion y guia para crecer con mas claridad.",
      },
    ],
  },
};
