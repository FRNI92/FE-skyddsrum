import { Link } from "react-router-dom";
import { company, navigation } from "../../data/site";
import footerLogo from "../../assets/Logga/vit_text_logga.png";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Link className="brand brand--footer" to="/" aria-label="Skyddsrumsgruppen startsida">
            <img className="brand__logo brand__logo--footer" src={footerLogo} alt="Skyddsrumsgruppen" />
          </Link>
          <p>Specialister på konsultation, utbildning, besiktning och åtgärder för skyddsrum.</p>
        </div>
        <nav aria-label="Sidfot">
          {navigation.map((item) => (
            <Link key={item.href} to={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <address>
          <strong>Kontakt</strong>
          <a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <span>{company.address}</span>
        </address>
      </div>
      <div className="container footer__copyright">
        © 2026 Copyright Skyddsrumsgruppen Org nr: 559516-6991
      </div>
    </footer>
  );
}
