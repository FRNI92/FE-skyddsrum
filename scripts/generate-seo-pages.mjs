import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const siteUrl = "https://www.skyddsrumsgruppen.se";
const outputDirectory = "dist";
const pages = [
  {
    path: "/tjanster",
    title: "Tjänster för skyddsrum | Skyddsrumsgruppen",
    description: "Besiktning, konsultation, utbildning, service och åtgärder i skyddsrum för fastighetsägare, BRF:er och förvaltare i hela Sverige."
  },
  {
    path: "/vanliga-fragor",
    title: "Vanliga frågor om skyddsrum | Skyddsrumsgruppen",
    description: "Svar på vanliga frågor om ansvar, utrustning, underhåll, myndighetskontroll och ändringar i skyddsrum."
  },
  {
    path: "/vanliga-atgarder",
    title: "Vanliga åtgärder för skyddsrum | Skyddsrumsgruppen",
    description: "Se vanliga åtgärder i skyddsrum: rostskydd, genomföringar, ritningar, utrustning och återställning av skyddsrummets funktion."
  },
  {
    path: "/kontakt",
    title: "Kontakta oss om skyddsrum | Skyddsrumsgruppen",
    description: "Kontakta Skyddsrumsgruppen för offert eller sakkunnig hjälp med besiktning, service, underhåll och åtgärder i skyddsrum."
  }
];

const escapeHtml = (value) =>
  value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

const replaceMeta = (html, attribute, key, value) => {
  const pattern = new RegExp(`(<meta\\s+${attribute}="${key}"\\s+content=")[^"]*("\\s*\\/>)`);
  return html.replace(pattern, `$1${escapeHtml(value)}$2`);
};

const template = await readFile(join(outputDirectory, "index.html"), "utf8");

for (const page of pages) {
  const canonical = `${siteUrl}${page.path}`;
  let html = template
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
    .replace(/<link rel="canonical" href="[^"]+" \/>/, `<link rel="canonical" href="${canonical}" />`);

  html = replaceMeta(html, "name", "description", page.description);
  html = replaceMeta(html, "property", "og:title", page.title);
  html = replaceMeta(html, "property", "og:description", page.description);
  html = replaceMeta(html, "property", "og:url", canonical);
  html = replaceMeta(html, "name", "twitter:title", page.title);
  html = replaceMeta(html, "name", "twitter:description", page.description);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Skyddsrumsgruppen", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: page.title.split("|")[0].trim(), item: canonical }
    ]
  };

  html = html.replace("</head>", `    <script type="application/ld+json" data-json-ld>${JSON.stringify(breadcrumb)}</script>\n  </head>`);
  const pageDirectory = join(outputDirectory, page.path.slice(1));
  await mkdir(pageDirectory, { recursive: true });
  await writeFile(join(pageDirectory, "index.html"), html);
}
