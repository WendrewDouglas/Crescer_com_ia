import { TESTIMONIALS, FAQ_ITEMS, CONTACT } from "./constants";

const SITE_URL = "https://crescercomia.com.br";
const SITE_NAME = "Crescer com IA";
const SITE_DESCRIPTION =
  "Curso presencial de Inteligência Artificial para crianças e adolescentes de 9 a 14 anos em Araçatuba e região. Metodologia prática, ética e criativa. Prepare seu filho para o futuro!";

/* ───── WebSite ───── */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "pt-BR",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

/* ───── EducationalOrganization ───── */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: SITE_DESCRIPTION,
    email: CONTACT.email,
    telephone: `+${CONTACT.whatsapp}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Araçatuba",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "City",
      name: "Araçatuba",
    },
    sameAs: [CONTACT.instagram],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${CONTACT.whatsapp}`,
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
  };
}

/* ───── FAQPage ───── */
export function getFAQPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/* ───── Course ───── */
export function getCourseSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Crescer com IA — Programa de Inteligência Artificial",
    description:
      "Programa presencial de formação em Inteligência Artificial para crianças e adolescentes de 9 a 14 anos. Metodologia prática, ética e criativa.",
    provider: {
      "@type": "EducationalOrganization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      inLanguage: "pt-BR",
      location: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Araçatuba",
          addressRegion: "SP",
          addressCountry: "BR",
        },
      },
    },
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType: "Crianças e adolescentes de 9 a 14 anos",
      requiredMinAge: 9,
      requiredMaxAge: 14,
    },
    syllabusSections: [
      { "@type": "Syllabus", name: "Como funciona a Inteligência Artificial" },
      { "@type": "Syllabus", name: "Ferramentas de IA para criar projetos" },
      { "@type": "Syllabus", name: "Pensamento crítico e resolução de problemas" },
      { "@type": "Syllabus", name: "Pesquisa com responsabilidade" },
      { "@type": "Syllabus", name: "Criatividade e autonomia digital" },
    ],
    educationalLevel: "9-14 anos",
    isAccessibleForFree: false,
  };
}

/* ───── AggregateRating + Reviews ───── */
export function getReviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_NAME,
    url: SITE_URL,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
      ratingCount: String(TESTIMONIALS.length),
      reviewCount: String(TESTIMONIALS.length),
    },
    review: TESTIMONIALS.map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.name,
      },
      reviewBody: t.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    })),
  };
}

/* ───── BreadcrumbList ───── */
export function getBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: SITE_URL,
      },
    ],
  };
}

/* ───── WebPage ───── */
export function getWebPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${SITE_NAME} — Curso de Inteligência Artificial para Crianças e Adolescentes`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    inLanguage: "pt-BR",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: {
      "@type": "Thing",
      name: "Curso de Inteligência Artificial para Crianças em Araçatuba",
    },
    mainEntity: {
      "@type": "EducationalOrganization",
      name: SITE_NAME,
    },
  };
}

/* ───── LocalBusiness (novo — SEO local para Araçatuba) ───── */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: SITE_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Araçatuba",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-21.2089",
      longitude: "-50.4328",
    },
    areaServed: [
      { "@type": "City", name: "Araçatuba" },
      { "@type": "City", name: "Birigui" },
      { "@type": "City", name: "Penápolis" },
    ],
    priceRange: "$$",
  };
}

/* ───── All schemas combined ───── */
export function getAllSchemas() {
  return [
    getWebSiteSchema(),
    getOrganizationSchema(),
    getFAQPageSchema(),
    getCourseSchema(),
    getReviewSchema(),
    getBreadcrumbSchema(),
    getWebPageSchema(),
    getLocalBusinessSchema(),
  ];
}
