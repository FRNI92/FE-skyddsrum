import { ActionSection } from "../components/sections/ActionSection";
import { Seo } from "../components/layout/Seo";
import { actionSections } from "../data/actions";
import { absoluteUrl, pageSeo } from "../utils/seo";
import { Link } from "react-router-dom";

export default function ActionsPage() {
  const actionsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Vanliga åtgärder i skyddsrum",
    itemListElement: actionSections.map((section, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: section.title,
      url: absoluteUrl(`/vanliga-atgarder#${section.id}`)
    }))
  };

  return (
    <>
      <Seo
        config={pageSeo({
          title: "Vanliga åtgärder för skyddsrum | Skyddsrumsgruppen",
          description:
            "Exempel på vanliga åtgärder i skyddsrum, från rostskydd och genomföringar till ritningar och utrustning.",
          path: "/vanliga-atgarder"
        })}
        jsonLd={[actionsJsonLd]}
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Kunskapsbank</p>
          <h1>Vanliga åtgärder</h1>
          <p>Se exempel på hur vanliga brister kan åtgärdas och skyddsrummets funktion återställas.</p>
        </div>
      </section>
      <section className="section actions-page">
        <div className="container action-list">
          {actionSections.map((section) => (
            <ActionSection key={section.id} section={section} />
          ))}
          <aside className="actions-cta" aria-labelledby="actions-cta-title">
            <div>
              <p className="eyebrow">Nästa steg</p>
              <h2 id="actions-cta-title">Behöver ditt skyddsrum åtgärdas?</h2>
              <p>Berätta vad du behöver hjälp med så återkommer vi med ett lämpligt nästa steg.</p>
            </div>
            <Link className="button" to="/kontakt#kontaktformular">
              Kontakta oss
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
