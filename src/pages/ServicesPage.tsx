import { Seo } from "../components/layout/Seo";
import { ServiceGrid } from "../components/sections/ServiceGrid";
import { services } from "../data/site";
import { pageSeo } from "../utils/seo";

export default function ServicesPage() {
  return (
    <>
      <Seo
        config={pageSeo({
          title: "Tjänster | Skyddsrumsgruppen",
          description:
            "Konsultation, utbildning, besiktning och åtgärdsstöd för fastighetsägare och förvaltare med skyddsrum.",
          path: "/tjanster"
        })}
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Tjänster</p>
          <h1>Konsultation, utbildning, besiktning och åtgärd</h1>
          <p>Välj rätt nivå av stöd utifrån fastighetens nuläge, dokumentation och kommande behov.</p>
        </div>
      </section>
      <ServiceGrid />
      <section className="section section--muted">
        <div className="container timeline">
          {services.map((service, index) => (
            <article key={service.id}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
