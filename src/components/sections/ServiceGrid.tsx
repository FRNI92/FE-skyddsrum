import { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../../data/site";

type ServiceGridProps = {
  mobileDropdown?: boolean;
};

export function ServiceGrid({ mobileDropdown = false }: ServiceGridProps) {
  const [openServiceId, setOpenServiceId] = useState(services[0]?.id ?? "");

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
        <div className={`card-grid ${mobileDropdown ? "card-grid--mobile-dropdown" : ""}`}>
          {services.map((service) => (
            <article className="card" id={service.id} key={service.id}>
              {mobileDropdown ? (
                <>
                  <h3 className="card__title">{service.title}</h3>
                  <button
                    className="card__toggle"
                    type="button"
                    aria-expanded={openServiceId === service.id}
                    aria-controls={`${service.id}-description`}
                    onClick={() =>
                      setOpenServiceId((current) => (current === service.id ? "" : service.id))
                    }
                  >
                    <span>{service.title}</span>
                    <span aria-hidden="true" />
                  </button>
                  <p
                    className="card__content"
                    id={`${service.id}-description`}
                    data-open={openServiceId === service.id}
                  >
                    {service.description}
                  </p>
                </>
              ) : (
                <>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </>
              )}
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
