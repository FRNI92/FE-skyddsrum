import { useState } from "react";
import type { ActionSectionData } from "../../types/content";
import { ResponsiveImage } from "../media/ResponsiveImage";

function ActionGallery({ section }: { section: ActionSectionData }) {
  const [activeImage, setActiveImage] = useState(0);
  const hasMultipleImages = section.images.length > 1;
  const image = section.images[activeImage];

  return (
    <div className={`action-gallery ${hasMultipleImages ? "action-gallery--switcher" : ""}`}>
      <figure>
        <ResponsiveImage
          key={image.src}
          src={image.src}
          direct
          sizes="(max-width: 920px) 100vw, 58vw"
          alt={image.alt}
        />
        {image.label && <figcaption>{image.label}</figcaption>}
      </figure>

      {hasMultipleImages && (
        <div className="action-gallery__controls" aria-label={`Välj bild för ${section.title}`}>
          {section.images.map((item, index) => (
            <button
              key={item.src}
              type="button"
              className={index === activeImage ? "active" : ""}
              aria-pressed={index === activeImage}
              onClick={() => setActiveImage(index)}
            >
              {item.label ?? `Bild ${index + 1}`}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function ActionSection({ section }: { section: ActionSectionData }) {
  return (
    <article className="action-section" id={section.id}>
      <ActionGallery section={section} />
      <div className="action-section__body">
        <p className="eyebrow">Vanlig åtgärd</p>
        <h2>{section.title}</h2>
        <h3>{section.subtitle}</h3>
        <p>{section.description}</p>
      </div>
    </article>
  );
}
