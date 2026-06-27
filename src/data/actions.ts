import type { ActionSectionData } from "../types/content";

export const actionSections: ActionSectionData[] = [
  {
    id: "tata-genomforingar",
    title: "Täta genomföringar",
    description:
      "Otäta genomföringar i väggar och tak är vanliga brister. Dokumentera placering, omfattning och material innan åtgärd planeras.",
    imageAlt: "Illustrerad kontrollpunkt för tätning av genomföringar i skyddsrum",
    ctaLabel: "Få hjälp med åtgärdsplan",
    ctaHref: "/kontakt",
    relatedServiceIds: ["besiktning", "atgard"]
  },
  {
    id: "kontrollera-dorrar",
    title: "Kontrollera dörrar och luckor",
    description:
      "Dörrar, karmar, packningar och stängningsfunktion behöver kunna användas snabbt och säkert när skyddsrummet ska ställas i ordning.",
    imageAlt: "Illustrerad skyddsrumsdörr med markerade kontrollpunkter",
    ctaLabel: "Boka genomgång",
    ctaHref: "/kontakt",
    relatedServiceIds: ["konsultation", "besiktning"]
  },
  {
    id: "inventera-utrustning",
    title: "Inventera utrustning",
    description:
      "Skyddsrumsutrustning bör vara spårbar, komplett och lätt att hitta. En tydlig inventering gör framtida drift enklare.",
    imageAlt: "Illustrerad inventering av skyddsrumsutrustning",
    ctaLabel: "Planera inventering",
    ctaHref: "/kontakt",
    relatedServiceIds: ["utbildning", "atgard"]
  }
];
