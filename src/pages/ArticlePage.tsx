import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Seo } from "../components/layout/Seo";
import { getArticleBySlug } from "../services/api";
import type { Article } from "../types/content";
import { articleJsonLd, pageSeo } from "../utils/seo";

export default function ArticlePage() {
  const { slug = "" } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    const loadArticle = async () => {
      setStatus("loading");

      try {
        const result = await getArticleBySlug(slug);
        setArticle(result);
        setStatus("ready");
      } catch {
        setStatus("error");
      }
    };

    void loadArticle();
  }, [slug]);

  if (status === "loading") {
    return <p className="container status-text">Hämtar artikel...</p>;
  }

  if (status === "error" || !article) {
    return (
      <section className="section">
        <div className="container article-body">
          <p className="eyebrow">Artikel</p>
          <h1>Artikeln kunde inte hämtas</h1>
          <p>Backend-API:t är inte tillgängligt än eller så saknas artikeln.</p>
          <Link className="button" to="/artiklar">
            Till artiklar
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <Seo
        config={pageSeo({
          title: `${article.title} | Skyddsrumsgruppen`,
          description: article.description,
          path: `/artiklar/${article.slug}`,
          image: article.imageUrl,
          type: "article"
        })}
        jsonLd={[articleJsonLd(article)]}
      />
      <article>
        <header className="page-hero">
          <div className="container">
            <p className="eyebrow">{article.category}</p>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
          </div>
        </header>
        <section className="section">
          <div className="container article-body">
            {article.imageUrl && <img src={article.imageUrl} alt={article.imageAlt ?? ""} />}
            <div>{article.content}</div>
          </div>
        </section>
      </article>
    </>
  );
}
