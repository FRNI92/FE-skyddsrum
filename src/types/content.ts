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

export interface FutureIntegration {
  provider: "azure-functions" | "sendgrid" | "cosmos-db" | "blob-storage" | "auth" | "admin" | "blog";
  status: "planned";
  notes: string;
}
