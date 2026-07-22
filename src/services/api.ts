import type { ContactFormPayload, ContactFormResponse } from "../types/content";
import { apiRequest } from "./http";

export const submitContactForm = async (payload: ContactFormPayload) => {
  return apiRequest<ContactFormResponse>("/contact", {
    method: "POST",
    body: payload
  });
};
