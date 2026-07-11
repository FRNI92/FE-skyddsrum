import { Link } from "react-router-dom";
import { services } from "../../data/site";

export function ServiceGrid() {
  return (
    <section className="section" aria-labelledby="services-heading">
      <div className="container">
        <div className="section__header">
          <p className="eyebrow">Tjänster</p>
          <h2 id="services-heading">Stöd genom hela skyddsrumsarbetet</h2>
          <p>Från första bedömning till tydlig åtgärdsplan och praktisk uppföljning.</p>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <article className="card" id={service.id} key={service.id}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
        <div className="section__actions">
          <Link className="button" to="/tjanster">
            Läs mer om våra tjänster
          </Link>
        </div>
      </div>
    </section>
  );
}
