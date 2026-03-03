import { COURSES, TESTIMONIALS, FAQ_ITEMS, CONTACT } from "./constants";

const SITE_URL = "https://crescercomia.com.br";
const SITE_NAME = "Crescer com IA";
const SITE_DESCRIPTION =
  "Cursos presenciais de Inteligência Artificial para crianças e adolescentes de 7 a 17 anos. Metodologia prática, criativa e segura. Prepare seu filho para o futuro!";

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
      streetAddress: CONTACT.address,
      addressCountry: "BR",
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

/* ───── Course (x3) ───── */
function parseDurationMonths(duration: string): string {
  const match = duration.match(/(\d+)/);
  const months = match ? parseInt(match[1], 10) : 3;
  return `P${months}M`;
}

function parseAgeRange(ageRange: string): { min: number; max: number } {
  const match = ageRange.match(/(\d+)\s*-\s*(\d+)/);
  return match
    ? { min: parseInt(match[1], 10), max: parseInt(match[2], 10) }
    : { min: 7, max: 17 };
}

export function getCoursesSchema() {
  return COURSES.map((course) => {
    const age = parseAgeRange(course.ageRange);
    return {
      "@context": "https://schema.org",
      "@type": "Course",
      name: course.title,
      description: course.description,
      provider: {
        "@type": "EducationalOrganization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "onsite",
        courseWorkload: parseDurationMonths(course.duration),
        inLanguage: "pt-BR",
      },
      audience: {
        "@type": "EducationalAudience",
        educationalRole: "student",
        audienceType: `Crianças e adolescentes de ${course.ageRange}`,
        requiredMinAge: age.min,
        requiredMaxAge: age.max,
      },
      syllabusSections: course.topics.map((topic) => ({
        "@type": "Syllabus",
        name: topic,
      })),
      educationalLevel: course.ageRange,
      isAccessibleForFree: false,
    };
  });
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
    name: `${SITE_NAME} — Cursos de Inteligência Artificial para Crianças e Adolescentes`,
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
      name: "Cursos de Inteligência Artificial para Crianças",
    },
    mainEntity: {
      "@type": "EducationalOrganization",
      name: SITE_NAME,
    },
  };
}

/* ───── All schemas combined ───── */
export function getAllSchemas() {
  return [
    getWebSiteSchema(),
    getOrganizationSchema(),
    getFAQPageSchema(),
    ...getCoursesSchema(),
    getReviewSchema(),
    getBreadcrumbSchema(),
    getWebPageSchema(),
  ];
}
