import { useState } from "react";

type ResponsiveImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  eager?: boolean;
};

export function ResponsiveImage({
  src,
  alt,
  className = "",
  sizes = "(max-width: 720px) 100vw, 33vw",
  eager = false
}: ResponsiveImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imageVersion = "2";
  const classes = ["responsive-image", loaded ? "responsive-image--loaded" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <img
      className={classes}
      src={`${src}-800.jpg?v=${imageVersion}`}
      srcSet={`${src}-480.jpg?v=${imageVersion} 480w, ${src}-800.jpg?v=${imageVersion} 800w, ${src}-1200.jpg?v=${imageVersion} 1200w`}
      sizes={sizes}
      width="1200"
      height="1017"
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : "auto"}
      alt={alt}
      onLoad={() => setLoaded(true)}
    />
  );
}
