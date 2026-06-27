import { Link } from "react-router-dom";
import { company, navigation } from "../../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Link className="brand brand--footer" to="/" aria-label="Skyddsrumsgruppen startsida">
            <span className="brand__mark" aria-hidden="true" />
            <span>Skyddsrumsgruppen</span>
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
    </footer>
  );
}
