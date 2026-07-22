import type { ActionSectionData } from "../../types/content";
import { ResponsiveImage } from "../media/ResponsiveImage";

export function ActionSection({ section }: { section: ActionSectionData }) {
  return (
    <article className="action-section" id={section.id}>
      <div className={`action-gallery action-gallery--${section.images.length}`}>
        {section.images.map((image) => (
          <figure key={image.src}>
            <ResponsiveImage
              src={image.src}
              direct
              sizes="(max-width: 920px) 100vw, 58vw"
              alt={image.alt}
            />
            {image.label && <figcaption>{image.label}</figcaption>}
          </figure>
        ))}
      </div>
      <div className="action-section__body">
        <p className="eyebrow">Vanlig åtgärd</p>
        <h2>{section.title}</h2>
        <h3>{section.subtitle}</h3>
        <p>{section.description}</p>
      </div>
    </article>
  );
}
