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
  name: company.name,
  url: SITE_URL,
  email: company.email,
  telephone: company.phone,
  areaServed: company.areaServed
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  url: SITE_URL,
  email: company.email,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stockholm",
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
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

export const articleJsonLdTemplate = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Framtida artikelrubrik",
  author: { "@type": "Organization", name: company.name },
  publisher: { "@type": "Organization", name: company.name }
};
