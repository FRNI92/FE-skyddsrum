import { Link } from "react-router-dom";
import type { ActionSectionData } from "../../types/content";
import { services } from "../../data/site";
import { ResponsiveImage } from "../media/ResponsiveImage";

export function ActionSection({ section }: { section: ActionSectionData }) {
  const related = services.filter((service) => section.relatedServiceIds.includes(service.id));

  return (
    <article className="action-section" id={section.id}>
      {section.image ? (
        <ResponsiveImage
          className="action-section__image action-section__image--photo"
          src={section.image}
          sizes="(max-width: 920px) 100vw, 42vw"
          alt={section.imageAlt}
        />
      ) : (
        <div className="action-section__image" role="img" aria-label={section.imageAlt}>
          <span aria-hidden="true" />
        </div>
      )}
      <div className="action-section__body">
        <p className="eyebrow">Vanlig åtgärd</p>
        <h2>{section.title}</h2>
        <p>{section.description}</p>
        <Link className="button" to={section.ctaHref}>
          {section.ctaLabel}
        </Link>
        <div className="related-services" aria-label="Relaterade tjänster">
          <strong>Relaterade tjänster</strong>
          {related.map((service) => (
            <Link key={service.id} to={service.href}>
              {service.title}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
