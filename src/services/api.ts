import type {
  Article,
  ArticleSummary,
  ContactFormPayload,
  FutureIntegration
} from "../types/content";
import { apiRequest } from "./http";

export const futureIntegrations: FutureIntegration[] = [
  { provider: "azure-functions", status: "planned", notes: "HTTP endpoints under /api." },
  { provider: "sendgrid", status: "planned", notes: "Transactional email for contact forms." },
  { provider: "blog", status: "planned", notes: "Optional knowledge articles with Article schema." }
];

export const submitContactForm = async (payload: ContactFormPayload) => {
  return apiRequest<{ ok: true }>("/contact", {
    method: "POST",
    body: payload
  });
};

export const getArticles = (query?: string) => {
  const search = query ? `?query=${encodeURIComponent(query)}` : "";
  return apiRequest<ArticleSummary[]>(`/articles${search}`);
};

export const getArticleBySlug = (slug: string) => apiRequest<Article>(`/articles/${encodeURIComponent(slug)}`);
