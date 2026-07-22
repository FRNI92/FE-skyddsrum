import type { ContactFormPayload } from "../types/content";

export type ContactFieldErrors = Partial<Record<keyof ContactFormPayload, string>>;

export const createEmptyContactForm = (): ContactFormPayload => ({
  submissionId: crypto.randomUUID(),
  name: "",
  email: "",
  phone: "",
  organization: "",
  propertyAddress: "",
  message: "",
  consentAccepted: false,
  website: ""
});

export const validateContactForm = (form: ContactFormPayload): ContactFieldErrors => {
  const errors: ContactFieldErrors = {};
  const name = form.name.trim();
  const email = form.email.trim();
  const phone = form.phone.trim();
  const message = form.message.trim();

  if (name.length < 2 || name.length > 100) errors.name = "Ange ett namn med 2-100 tecken.";
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Ange en giltig e-postadress.";
  if (phone && !/^[0-9+()\-\s]{5,30}$/.test(phone)) errors.phone = "Kontrollera telefonnumret.";
  if (form.organization.trim().length > 120) errors.organization = "Ange högst 120 tecken.";
  if (form.propertyAddress.trim().length > 160) errors.propertyAddress = "Ange högst 160 tecken.";
  if (message.length < 20 || message.length > 4000) errors.message = "Meddelandet måste innehålla 20-4000 tecken.";
  if (!form.consentAccepted) errors.consentAccepted = "Du behöver godkänna behandlingen av uppgifterna.";

  return errors;
};
