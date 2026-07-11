import { Link } from "react-router-dom";
import { services } from "../../data/site";

export function ServiceGrid() {
  return (
    <section className="section" aria-labelledby="services-heading">
      <div className="container">
        <div className="section__header">
          <p className="eyebrow">Tjänster</p>
          <h2 id="services-heading">Skyddsrumsarbetet</h2>
          <p>
            Vi erbjuder en helhetslösning för privata företag, föreningar och
            myndigheter inom skyddsrum där vi stöttar er från början till slut.
            Vårt fokus ligger på bra service och kvalité - vi är er långsiktiga
            partner i skyddsrum
          </p>
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
