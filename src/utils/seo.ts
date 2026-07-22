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
  logo: absoluteUrl("/og-image.png"),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: company.phone,
    email: company.email,
    contactType: "customer service",
    areaServed: "SE",
    availableLanguage: "Swedish"
  },
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
  name: SITE_NAME,
  url: SITE_URL
};
