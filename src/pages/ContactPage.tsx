import { FormEvent, useEffect, useState } from "react";
import { Seo } from "../components/layout/Seo";
import { company } from "../data/site";
import { submitContactForm } from "../services/api";
import { ApiError } from "../services/http";
import type { ContactFormPayload, ContactFormResponse } from "../types/content";
import {
  createEmptyContactForm,
  type ContactFieldErrors,
  validateContactForm
} from "../utils/contact";
import { pageSeo } from "../utils/seo";

const cooldownStorageKey = "skyddsrumsgruppen-contact-submitted-at";
const cooldownMilliseconds = 60_000;

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormPayload>(createEmptyContactForm);
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [sent, setSent] = useState<ContactFormResponse | null>(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [now, setNow] = useState(Date.now());
  const [cooldownUntil, setCooldownUntil] = useState(() => {
    const submittedAt = Number(localStorage.getItem(cooldownStorageKey));
    return Number.isFinite(submittedAt) ? submittedAt + cooldownMilliseconds : 0;
  });

  useEffect(() => {
    if (cooldownUntil <= Date.now()) return;
    const timer = window.setInterval(() => setNow(Date.now()), 1_000);
    return () => window.clearInterval(timer);
  }, [cooldownUntil]);

  const cooldownSeconds = Math.max(0, Math.ceil((cooldownUntil - now) / 1_000));
  const isLocked = isSubmitting || cooldownSeconds > 0 || sent !== null;

  const updateField = <K extends keyof ContactFormPayload>(field: K, value: ContactFormPayload[K]) => {
    setForm((current) => ({ ...current, [field]: value }));
    setFieldErrors((current) => ({ ...current, [field]: undefined }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLocked) return;

    const validationErrors = validateContactForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      setError("Kontrollera de markerade fälten.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const response = await submitContactForm(form);
      const submittedAt = Date.now();
      localStorage.setItem(cooldownStorageKey, String(submittedAt));
      setCooldownUntil(submittedAt + cooldownMilliseconds);
      setNow(submittedAt);
      setSent(response);
    } catch (requestError) {
      if (requestError instanceof ApiError) {
        setError(requestError.message);
        setFieldErrors(requestError.fields as ContactFieldErrors);
        if (requestError.retryAfterSeconds) {
          setCooldownUntil(Date.now() + requestError.retryAfterSeconds * 1_000);
        }
      } else {
        setError("Meddelandet kunde inte skickas just nu.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Seo
        config={pageSeo({
          title: "Kontakta oss om skyddsrum | Skyddsrumsgruppen",
          description:
            "Kontakta Skyddsrumsgruppen för frågor, offert eller sakkunnig hjälp med besiktning, underhåll och åtgärder i skyddsrum.",
          path: "/kontakt"
        })}
      />
      <section className="page-hero contact-hero">
        <div className="container">
          <p className="eyebrow">Kontakt</p>
          <h1>Berätta vad du behöver hjälp med</h1>
          <p>Vi återkommer med nästa steg och hjälper dig prioritera rätt insats.</p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-grid">
          <aside className="contact-panel" aria-label="Kontaktuppgifter">
            <h2>Kontaktuppgifter</h2>
            <p>Du kan även kontakta oss direkt via telefon eller e-post.</p>
            <address>
              <a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <span>{company.address}</span>
            </address>
          </aside>

          <form id="kontaktformular" className="contact-form" onSubmit={onSubmit} noValidate>
            {sent ? (
              <div className="contact-confirmation" role="status" aria-live="polite">
                <p className="eyebrow">Meddelandet är skickat</p>
                <h2>Tack! Du skickade precis in formuläret.</h2>
                <p>Vi har skickat en bekräftelse till din e-post och återkommer så snart vi kan.</p>
                <p className="contact-confirmation__reference">Referens: {sent.referenceId}</p>
              </div>
            ) : (
              <>
                {cooldownSeconds > 0 && (
                  <div className="notice" role="status">
                    Ett formulär skickades nyligen. Du kan försöka igen om {cooldownSeconds} sekunder.
                  </div>
                )}
                {error && <div className="error" role="alert">{error}</div>}

                <div className="contact-form__row">
                  <label>
                    Namn <span aria-hidden="true">*</span>
                    <input
                      required
                      minLength={2}
                      maxLength={100}
                      autoComplete="name"
                      value={form.name}
                      aria-invalid={Boolean(fieldErrors.name)}
                      onChange={(event) => updateField("name", event.target.value)}
                    />
                    {fieldErrors.name && <span className="field-error">{fieldErrors.name}</span>}
                  </label>
                  <label>
                    E-post <span aria-hidden="true">*</span>
                    <input
                      required
                      maxLength={254}
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      aria-invalid={Boolean(fieldErrors.email)}
                      onChange={(event) => updateField("email", event.target.value)}
                    />
                    {fieldErrors.email && <span className="field-error">{fieldErrors.email}</span>}
                  </label>
                </div>

                <div className="contact-form__row">
                  <label>
                    Telefon <span className="field-optional">Valfritt</span>
                    <input
                      maxLength={30}
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      aria-invalid={Boolean(fieldErrors.phone)}
                      onChange={(event) => updateField("phone", event.target.value)}
                    />
                    {fieldErrors.phone && <span className="field-error">{fieldErrors.phone}</span>}
                  </label>
                  <label>
                    Organisation <span className="field-optional">Valfritt</span>
                    <input
                      maxLength={120}
                      autoComplete="organization"
                      value={form.organization}
                      aria-invalid={Boolean(fieldErrors.organization)}
                      onChange={(event) => updateField("organization", event.target.value)}
                    />
                    {fieldErrors.organization && <span className="field-error">{fieldErrors.organization}</span>}
                  </label>
                </div>

                <label>
                  Fastighet eller adress <span className="field-optional">Valfritt</span>
                  <input
                    maxLength={160}
                    autoComplete="street-address"
                    value={form.propertyAddress}
                    aria-invalid={Boolean(fieldErrors.propertyAddress)}
                    onChange={(event) => updateField("propertyAddress", event.target.value)}
                  />
                  {fieldErrors.propertyAddress && <span className="field-error">{fieldErrors.propertyAddress}</span>}
                </label>

                <label>
                  Vad behöver du hjälp med? <span aria-hidden="true">*</span>
                  <textarea
                    required
                    minLength={20}
                    maxLength={4000}
                    rows={7}
                    value={form.message}
                    aria-invalid={Boolean(fieldErrors.message)}
                    onChange={(event) => updateField("message", event.target.value)}
                  />
                  <span className="field-hint">{form.message.length}/4000 tecken</span>
                  {fieldErrors.message && <span className="field-error">{fieldErrors.message}</span>}
                </label>

                <label className="contact-form__consent">
                  <input
                    type="checkbox"
                    checked={form.consentAccepted}
                    aria-invalid={Boolean(fieldErrors.consentAccepted)}
                    onChange={(event) => updateField("consentAccepted", event.target.checked)}
                  />
                  <span>Jag godkänner att Skyddsrumsgruppen behandlar uppgifterna för att besvara min förfrågan.</span>
                </label>
                {fieldErrors.consentAccepted && <span className="field-error">{fieldErrors.consentAccepted}</span>}

                <label className="contact-form__honeypot" aria-hidden="true">
                  Webbplats
                  <input
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(event) => updateField("website", event.target.value)}
                  />
                </label>

                <button className="button" type="submit" disabled={isLocked}>
                  {isSubmitting ? "Skickar säkert..." : cooldownSeconds > 0 ? `Vänta ${cooldownSeconds} s` : "Skicka meddelande"}
                </button>
                <p className="contact-form__privacy">Obligatoriska fält är markerade med *. Skicka inte känsliga personuppgifter i meddelandet.</p>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
