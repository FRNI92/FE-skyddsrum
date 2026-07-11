import { Link } from "react-router-dom";
import { Seo } from "../components/layout/Seo";
import { pageSeo } from "../utils/seo";

export default function AboutPage() {
  return (
    <>
      <Seo
        config={pageSeo({
          title: "Om oss | Skyddsrumsgruppen",
          description:
            "Läs om Skyddsrumsgruppens arbetssätt: tydlig rådgivning, praktisk erfarenhet och fokus på långsiktig förvaltning av skyddsrum.",
          path: "/om-oss"
        })}
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Om oss</p>
          <h1>Specialiststöd med ordning, tydlighet och ansvar</h1>
          <p>
            Vi hjälper kunder att gå från osäkerhet till en konkret plan för skyddsrum, dokumentation
            och prioriterade åtgärder.
          </p>
          <Link className="button" to="/kontakt">
            Prata med oss
          </Link>
        </div>
      </section>
      <section className="section section--muted">
        <div className="container split">
          <h2>Byggt för långsiktig förvaltning</h2>
          <p>
            Vårt arbetssätt är gjort för tydlig rådgivning, praktisk uppföljning och innehåll som kan
            uppdateras när nya frågor, bilder eller åtgärder behöver lyftas fram.
          </p>
        </div>
      </section>
    </>
  );
}
