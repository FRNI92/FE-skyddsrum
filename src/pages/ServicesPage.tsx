import { Seo } from "../components/layout/Seo";
import skyddsrumskontrollImage from "../assets/Tjänster/skyddsrumskontroll.jpg";
import skyddsrumsstatusImage from "../assets/Tjänster/skyddsrumsstatus.jpg";
import skyddsrumstillsynImage from "../assets/Tjänster/skyddsrumstillsyn.jpg";
import { pageSeo } from "../utils/seo";

const inspectionServices = [
  {
    title: "Skyddsrumskontroll",
    description:
      "Detta är den besiktning som motsvarar en myndighetsbesiktning. Här går man igenom hela skyddsrummet och dokumenterar brister, bilder och åtgärder.",
    image: skyddsrumskontrollImage,
    imageAlt: "Skyddsrumsdörr med skyddsrumsskylt"
  },
  {
    title: "Skyddsrumsstatus",
    description:
      "Detta är en mindre besiktning där man går igenom de viktigaste funktionerna i skyddsrummet för att få en tydlig nulägesbild.",
    image: skyddsrumsstatusImage,
    imageAlt: "Skyddsrumsskylt och skyddsrumsutrustning vid betongvägg"
  },
  {
    title: "Skyddsrumstillsyn",
    description:
      "Detta är den besiktning där man endast kontrollerar specifika punkter i skyddsrummet utifrån behov, tidigare anmärkningar eller planerade åtgärder.",
    image: skyddsrumstillsynImage,
    imageAlt: "Skyddsrumsdörr med ventilation och skyddsrumsskylt"
  }
];

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
      <section className="section services-showcase" aria-labelledby="inspections-heading">
        <div className="container">
          <div className="section__header section__header--center services-showcase__header">
            <h2 id="inspections-heading">Besiktningar</h2>
            <p>
              Det finns olika typer av besiktningar utifrån behov. I våra besiktningar ingår alltid
              dokumentation med anmärkningar, bilder och åtgärder. Vårt fokus ligger på bra service och
              vi erbjuder alltid gratis förbesiktning.
            </p>
          </div>
          <div className="inspection-grid">
            {inspectionServices.map((service) => (
              <article className="inspection-card" key={service.title}>
                <img src={service.image} alt={service.imageAlt} loading="lazy" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
