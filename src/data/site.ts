import type { ServiceItem } from "../types/content";

export const SITE_URL = "https://www.skyddsrumsgruppen.se";
export const SITE_NAME = "Skyddsrumsgruppen";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const company = {
  name: "Skyddsrumsgruppen",
  legalName: "Skyddsrumsgruppen",
  email: "info@skyddsrumsgruppen.se",
  phone: "+46 (0) 768 406 700",
  address: "Örebro, Sverige",
  areaServed: "Sverige"
};

export const navigation = [
  { label: "Hem", href: "/" },
  { label: "Tjänster", href: "/tjanster" },
  { label: "Vanliga frågor", href: "/vanliga-fragor" },
  { label: "Vanliga åtgärder", href: "/vanliga-atgarder" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kontakta oss", href: "/kontakt" }
];

export const services: ServiceItem[] = [
  {
    id: "konsultation",
    title: "Konsultation",
    description: "Rådgivning inför besiktning, åtgärdsplaner och kravställning för skyddsrum.",
    href: "/tjanster#konsultation"
  },
  {
    id: "besiktning",
    title: "Besiktning",
    description: "Genomgång av funktion, dokumentation, utrustning och brister inför kommande arbete.",
    href: "/tjanster#besiktning"
  },
  {
    id: "utbildning",
    title: "Utbildning",
    description: "Praktisk kunskap för fastighetsägare, styrelser och driftpersonal.",
    href: "/tjanster#utbildning"
  },
  {
    id: "atgard",
    title: "Åtgärd",
    description: "Planering och koordinering av prioriterade åtgärder efter besiktning.",
    href: "/tjanster#atgard"
  }
];
