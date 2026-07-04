import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Seo } from "../components/layout/Seo";
import { getArticles } from "../services/api";
import type { ArticleSummary } from "../types/content";
import { pageSeo } from "../utils/seo";

export default function ArticlesPage() {
  const [articles, setArticles] = useState<ArticleSummary[]>([]);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  const loadArticles = async (search?: string) => {
    setStatus("loading");

    try {
      const result = await getArticles(search);
      setArticles(result);
      setStatus("ready");
    } catch {
      setStatus("error");
    }
  };

  useEffect(() => {
    void loadArticles();
  }, []);

  const onSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void loadArticles(query);
  };

  return (
    <>
      <Seo
        config={pageSeo({
          title: "Artiklar | Skyddsrumsgruppen",
          description: "Läs artiklar och kunskap om skyddsrum, besiktning, dokumentation och åtgärder.",
          path: "/artiklar"
        })}
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Kunskap</p>
          <h1>Artiklar om skyddsrum</h1>
          <p>Sök och läs praktiska guider för fastighetsägare, BRF:er och förvaltare.</p>
        </div>
      </section>
      <section className="section">
        <div className="container article-layout">
          <form className="search-form" onSubmit={onSearch}>
            <label>
              Sök artiklar
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Exempel: besiktning" />
            </label>
            <button className="button" type="submit">
              Sök
            </button>
          </form>

          {status === "loading" && <p className="status-text">Hämtar artiklar...</p>}
          {status === "error" && (
            <p className="status-text">
              Artiklar är förberedda i frontend, men backend-API:t är inte tillgängligt än.
            </p>
          )}
          {status === "ready" && articles.length === 0 && <p className="status-text">Inga artiklar hittades.</p>}

          <div className="article-list">
            {articles.map((article) => (
              <article className="article-card" key={article.id}>
                <div>
                  <p className="eyebrow">{article.category}</p>
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                </div>
                <Link to={`/artiklar/${article.slug}`}>Läs artikel</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
