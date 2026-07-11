import { Link } from "react-router-dom";
import heroImage from "../../assets/background_frontpage_bunker.jpg";

export function Hero() {
  return (
    <section className="hero">
      <img
        className="hero__image"
        src={heroImage}
        alt="Modern skyddsrumsentré med robust dörr och säkerhetsskylt"
        width="1536"
        height="1024"
        fetchPriority="high"
      />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="container hero__content">
        <p className="eyebrow">
          Konsultation · Utbildning · Besiktning · Åtgärd
        </p>
        <h1>
          Vi kan
          <span>Skyddsrum</span>
        </h1>
        <p className="hero__lead">
          Skyddsrumsgruppen hjälper fastighetsägare, bostadsrättsföreningar och
          förvaltare att förstå, prioritera och genomföra rätt åtgärder.
        </p>
        <div className="hero__actions">
          <Link className="button" to="/kontakt">
            Kontakta oss
          </Link>
          <Link className="button button--secondary" to="/tjanster">
            Se tjänster
          </Link>
        </div>
      </div>
    </section>
  );
}
