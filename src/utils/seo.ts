import { company, SITE_NAME, SITE_URL } from "../data/site";
import type { SeoConfig } from "../types/content";

export const absoluteUrl = (path = "/") => new URL(path, SITE_URL).toString();

export const pageSeo = (config: SeoConfig): SeoConfig => ({
  robots: "index, follow",
  type: "website",
  ...config
});

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: company.name,
  legalName: company.legalName,
  description:
    "Skyddsrumsgruppen hjälper fastighetsägare, bostadsrättsföreningar och förvaltare med konsultation, besiktning, underhåll och åtgärder i skyddsrum.",
  url: SITE_URL,
  email: company.email,
  telephone: "+46768406700",
  taxID: "559516-6991",
  logo: {
    "@type": "ImageObject",
    url: absoluteUrl("/favicon-192x192.svg"),
    contentUrl: absoluteUrl("/favicon-192x192.svg"),
    width: 192,
    height: 192
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+46768406700",
    email: company.email,
    contactType: "customer service",
    areaServed: "SE",
    availableLanguage: ["sv", "Swedish"]
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Örebro",
    addressCountry: "SE"
  },
  areaServed: {
    "@type": "Country",
    name: company.areaServed
  }
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#localbusiness`,
  name: company.name,
  description:
    "Sakkunnig hjälp med skyddsrum för fastighetsägare, bostadsrättsföreningar och förvaltare i hela Sverige.",
  url: SITE_URL,
  email: company.email,
  telephone: "+46768406700",
  image: absoluteUrl("/og-image.png"),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Örebro",
    addressCountry: "SE"
  },
  areaServed: {
    "@type": "Country",
    name: "Sverige"
  }
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: "Skyddsrumsgruppen Sverige",
  url: SITE_URL
};

export const breadcrumbJsonLd = (path: string, name: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Skyddsrumsgruppen",
      item: absoluteUrl("/")
    },
    {
      "@type": "ListItem",
      position: 2,
      name,
      item: absoluteUrl(path)
    }
  ]
});
