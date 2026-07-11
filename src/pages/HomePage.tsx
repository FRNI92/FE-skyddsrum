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
      <section className="section section--dark" aria-labelledby="why-heading">
        <div className="container">
          <div className="section__header section__header--center">
            <h2 id="why-heading">Varför välja oss?</h2>
            <p>Skyddsrumsgruppen erbjuder expertis, erfarenhet och fokus på kundens behov.</p>
          </div>
          <div className="reason-grid">
            <article className="reason">
              <span>01.</span>
              <h3>Erfarenhet och kunskap</h3>
              <p>
                Hos oss finns sakkunniga med både allmän och kvalificerad behörighet med lång erfarenhet
                inom skyddsrum. <strong>Vi kan skyddsrum.</strong>
              </p>
            </article>
            <article className="reason">
              <span>02.</span>
              <h3>Kundfokus</h3>
              <p>
                Vi lägger stort fokus på våra kunder och deras behov, därför anpassar vi oss utifrån era
                önskemål och resurser. <strong>För hos oss är ni inte en i mängden.</strong>
              </p>
            </article>
            <article className="reason">
              <span>03.</span>
              <h3>Kvalité</h3>
              <p>
                Vi lägger stort fokus på kvalité och kan därför ge garantier på genomfört arbete och
                serviceavtal. <strong>Vi är stolta över vårt arbete.</strong>
              </p>
            </article>
          </div>
          <div className="section__header section__header--center contact-teaser">
            <h2>Kontakta oss</h2>
            <p>Har du några frågor om skyddsrum eller önskar en kostnadsfri offert?</p>
            <p>Tveka inte att kontakta oss, vi erbjuder alltid en timmes gratis konsultation.</p>
          </div>
        </div>
      </section>
    </>
  );
}
