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
  subtitle: string;
  description: string;
  images: Array<{
    src: string;
    alt: string;
    label?: string;
  }>;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface ContactFormPayload {
  submissionId: string;
  name: string;
  email: string;
  phone: string;
  organization: string;
  propertyAddress: string;
  message: string;
  consentAccepted: boolean;
  website: string;
}

export interface ContactFormResponse {
  ok: true;
  duplicate?: boolean;
  referenceId: string;
  submittedAtUtc?: string;
}
