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
    description: "Vi stöttar er med vår expertis inom allt som gäller skyddsrum. Från en liten fråga till ett stort projekt.",
    href: "/tjanster#konsultation"
  },
  {
    id: "utbildning",
    title: "Utbildning",
    description: "Vi utbildar i skyddsrumsunderhåll och iordningställande - så att ni är redo om krisen kommer.",
    href: "/tjanster#utbildning"
  },
  {
    id: "besiktning",
    title: "Besiktning",
    description: "Vi genomför besiktningar och kontroller. Vår dokumentation är alltid tydlig och enkel att förstå. Den innehåller anmärkningar, bilder och förslag till åtgärder.",
    href: "/tjanster#besiktning"
  },
  {
    id: "atgard",
    title: "Åtgärd",
    description: "Vi genomför alla typer av åtgärder i skyddsrum. Vi hjälper er från föreläggande till slutbesiktning.",
    href: "/tjanster#atgard"
  }
];
