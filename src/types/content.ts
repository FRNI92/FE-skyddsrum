import type { ReactNode } from "react";

export interface SeoConfig {
  title: string;
  description: string;
  path: string;
  image?: string;
  robots?: string;
  type?: "website" | "article";
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface ActionSectionData {
  id: string;
  title: string;
  description: string;
  imageAlt: string;
  image?: string;
  ctaLabel: string;
  ctaHref: string;
  relatedServiceIds: string[];
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface ContactFormPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export type ArticleStatus = "draft" | "published";

export interface ArticleSummary {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  status: ArticleStatus;
  publishedAt?: string;
  updatedAt: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface Article extends ArticleSummary {
  content: string;
  authorName: string;
}

export interface FutureIntegration {
  provider: "azure-functions" | "sendgrid" | "blog";
  status: "planned";
  notes: string;
}
