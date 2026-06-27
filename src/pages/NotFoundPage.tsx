import { Link } from "react-router-dom";
import { Seo } from "../components/layout/Seo";
import { pageSeo } from "../utils/seo";

export default function NotFoundPage() {
  return (
    <>
      <Seo
        config={pageSeo({
          title: "Sidan kunde inte hittas | Skyddsrumsgruppen",
          description: "Sidan du söker finns inte. Gå tillbaka till startsidan eller kontakta Skyddsrumsgruppen.",
          path: "/404",
          robots: "noindex, follow"
        })}
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">404</p>
          <h1>Sidan kunde inte hittas</h1>
          <p>Kontrollera adressen eller gå tillbaka till startsidan.</p>
          <Link className="button" to="/">
            Till startsidan
          </Link>
        </div>
      </section>
    </>
  );
}
