import type { ContactFormPayload, FutureIntegration } from "../types/content";

const API_BASE_URL = "/api";

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
  // TODO: Koppla till Azure Function: POST `${API_BASE_URL}/contact`.
  await Promise.resolve({ ok: true, payload, endpoint: `${API_BASE_URL}/contact` });
  return { ok: true };
};
