import { ActionSection } from "../components/sections/ActionSection";
import { Seo } from "../components/layout/Seo";
import { actionSections } from "../data/actions";
import { articleJsonLdTemplate, pageSeo } from "../utils/seo";

export default function ActionsPage() {
  return (
    <>
      <Seo
        config={pageSeo({
          title: "Vanliga åtgärder för skyddsrum | Skyddsrumsgruppen",
          description:
            "En framtida kunskapsbank om vanliga skyddsrumsåtgärder som tätningar, dörrar, luckor och inventering.",
          path: "/vanliga-atgarder"
        })}
        jsonLd={[articleJsonLdTemplate]}
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Kunskapsbank</p>
          <h1>Vanliga åtgärder</h1>
          <p>Modulära sektioner som senare kan lyftas ut till egna SEO-sidor eller bloggartiklar.</p>
        </div>
      </section>
      <section className="section">
        <div className="container action-list">
          {actionSections.map((section) => (
            <ActionSection key={section.id} section={section} />
          ))}
        </div>
      </section>
    </>
  );
}
