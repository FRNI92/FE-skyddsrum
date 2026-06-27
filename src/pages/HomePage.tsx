import { Hero } from "../components/sections/Hero";
import { Seo } from "../components/layout/Seo";
import { ServiceGrid } from "../components/sections/ServiceGrid";
import { localBusinessJsonLd, organizationJsonLd, pageSeo, websiteJsonLd } from "../utils/seo";

export default function HomePage() {
  return (
    <>
      <Seo
        config={pageSeo({
          title: "Skyddsrumsgruppen | Konsultation, besiktning och åtgärder",
          description:
            "Skyddsrumsgruppen hjälper fastighetsägare, BRF:er och förvaltare med konsultation, utbildning, besiktning och åtgärder för skyddsrum.",
          path: "/"
        })}
        jsonLd={[organizationJsonLd, localBusinessJsonLd, websiteJsonLd]}
      />
      <Hero />
      <ServiceGrid />
      <section className="section section--muted">
        <div className="container split">
          <div>
            <p className="eyebrow">Kunskap först</p>
            <h2>Tydliga beslut i en reglerad miljö</h2>
          </div>
          <p>
            Skyddsrum kräver struktur, dokumentation och praktisk förståelse. Vi gör det enklare att se
            vad som är viktigt nu, vad som kan planeras och vilka frågor som behöver specialiststöd.
          </p>
        </div>
      </section>
    </>
  );
}
