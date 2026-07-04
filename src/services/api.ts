import type {
  Article,
  ArticleInput,
  ArticleSummary,
  ContactFormPayload,
  CurrentUser,
  FutureIntegration,
  UploadInitRequest,
  UploadInitResponse
} from "../types/content";
import { apiRequest } from "./http";

export const futureIntegrations: FutureIntegration[] = [
  { provider: "azure-functions", status: "planned", notes: "HTTP endpoints under /api." },
  { provider: "sendgrid", status: "planned", notes: "Transactional email for contact forms." },
  { provider: "cosmos-db", status: "planned", notes: "Content, leads and admin metadata." },
  { provider: "blob-storage", status: "planned", notes: "Managed images and downloadable documents." },
  { provider: "auth", status: "planned", notes: "Adminportal authentication." },
  { provider: "admin", status: "planned", notes: "Content and lead management." },
  { provider: "blog", status: "planned", notes: "Knowledge articles with Article schema." }
];

export const submitContactForm = async (payload: ContactFormPayload) => {
  return apiRequest<{ ok: true }>("/contact", {
    method: "POST",
    body: payload
  });
};

export const getCurrentUser = () => apiRequest<CurrentUser>("/admin/me");

export const getArticles = (query?: string) => {
  const search = query ? `?query=${encodeURIComponent(query)}` : "";
  return apiRequest<ArticleSummary[]>(`/articles${search}`);
};

export const getArticleBySlug = (slug: string) => apiRequest<Article>(`/articles/${encodeURIComponent(slug)}`);

export const getAdminArticles = () => apiRequest<ArticleSummary[]>("/admin/articles");

export const createArticle = (payload: ArticleInput) =>
  apiRequest<Article>("/admin/articles", {
    method: "POST",
    body: payload
  });

export const updateArticle = (id: string, payload: ArticleInput) =>
  apiRequest<Article>(`/admin/articles/${encodeURIComponent(id)}`, {
    method: "PUT",
    body: payload
  });

export const deleteArticle = (id: string) =>
  apiRequest<void>(`/admin/articles/${encodeURIComponent(id)}`, {
    method: "DELETE"
  });

export const publishArticle = (id: string) =>
  apiRequest<Article>(`/admin/articles/${encodeURIComponent(id)}/publish`, {
    method: "POST"
  });

export const initImageUpload = (payload: UploadInitRequest) =>
  apiRequest<UploadInitResponse>("/admin/upload/init", {
    method: "POST",
    body: payload
  });
