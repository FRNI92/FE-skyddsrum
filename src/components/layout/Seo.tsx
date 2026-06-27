import { useEffect } from "react";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "../../data/site";
import { absoluteUrl } from "../../utils/seo";
import type { SeoConfig } from "../../types/content";

type SeoProps = {
  config: SeoConfig;
  jsonLd?: object[];
};

const setMeta = (selector: string, attr: "content" | "href", value: string) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;

  if (!element) {
    element = selector.startsWith("link")
      ? document.createElement("link")
      : document.createElement("meta");

    if (selector.includes("property=")) {
      element.setAttribute("property", selector.match(/property="([^"]+)"/)?.[1] ?? "");
    }

    if (selector.includes("name=")) {
      element.setAttribute("name", selector.match(/name="([^"]+)"/)?.[1] ?? "");
    }

    if (selector.includes("rel=")) {
      element.setAttribute("rel", selector.match(/rel="([^"]+)"/)?.[1] ?? "");
    }

    document.head.appendChild(element);
  }

  element.setAttribute(attr, value);
};

export function Seo({ config, jsonLd = [] }: SeoProps) {
  useEffect(() => {
    const canonical = absoluteUrl(config.path);
    const image = config.image ?? DEFAULT_OG_IMAGE;

    document.title = config.title;
    setMeta('meta[name="description"]', "content", config.description);
    setMeta('meta[name="robots"]', "content", config.robots ?? "index, follow");
    setMeta('link[rel="canonical"]', "href", canonical);
    setMeta('meta[property="og:title"]', "content", config.title);
    setMeta('meta[property="og:description"]', "content", config.description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:type"]', "content", config.type ?? "website");
    setMeta('meta[property="og:site_name"]', "content", SITE_NAME);
    setMeta('meta[property="og:image"]', "content", image);
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", config.title);
    setMeta('meta[name="twitter:description"]', "content", config.description);
    setMeta('meta[name="twitter:image"]', "content", image);

    document.querySelectorAll("[data-json-ld]").forEach((node) => node.remove());
    jsonLd.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.jsonLd = "true";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [config, jsonLd]);

  return null;
}
