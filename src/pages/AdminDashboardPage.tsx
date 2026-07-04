import { useEffect, useState } from "react";
import { Seo } from "../components/layout/Seo";
import { getAdminArticles, getCurrentUser } from "../services/api";
import type { ArticleSummary, CurrentUser } from "../types/content";
import { pageSeo } from "../utils/seo";

export default function AdminDashboardPage() {
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [articles, setArticles] = useState<ArticleSummary[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    const loadAdmin = async () => {
      try {
        const [currentUser, adminArticles] = await Promise.all([getCurrentUser(), getAdminArticles()]);
        setUser(currentUser);
        setArticles(adminArticles);
        setStatus("ready");
      } catch {
        setStatus("error");
      }
    };

    void loadAdmin();
  }, []);

  return (
    <>
      <Seo
        config={pageSeo({
          title: "Admin | Skyddsrumsgruppen",
          description: "Administrera artiklar för Skyddsrumsgruppen.",
          path: "/admin",
          robots: "noindex, nofollow"
        })}
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Admin</p>
          <h1>Artikeladministration</h1>
          <p>Skapa, förhandsgranska och publicera artiklar via Azure Functions-backend.</p>
        </div>
      </section>
      <section className="section">
        <div className="container admin-layout">
          {status === "loading" && <p className="status-text">Hämtar admininnehåll...</p>}
          {status === "error" && (
            <div className="admin-panel">
              <h2>Backend saknas än</h2>
              <p>
                Adminytan är skyddad av Static Web Apps Authentication, men Functions-endpoints behöver
                deployas innan artiklar kan hanteras här.
              </p>
              <a className="button" href="/login">
                Logga in
              </a>
            </div>
          )}
          {status === "ready" && (
            <>
              <div className="admin-panel">
                <h2>Inloggad</h2>
                <p>{user?.name ?? "Administratör"}</p>
                <a href="/logout">Logga ut</a>
              </div>
              <div className="article-list">
                {articles.map((article) => (
                  <article className="article-card" key={article.id}>
                    <div>
                      <p className="eyebrow">{article.status}</p>
                      <h2>{article.title}</h2>
                      <p>{article.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
