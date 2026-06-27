import { FormEvent, useState } from "react";
import { Seo } from "../components/layout/Seo";
import { company } from "../data/site";
import { submitContactForm } from "../services/api";
import type { ContactFormPayload } from "../types/content";
import { pageSeo } from "../utils/seo";

const initialForm: ContactFormPayload = {
  name: "",
  email: "",
  phone: "",
  message: ""
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormPayload>(initialForm);
  const [sent, setSent] = useState(false);

  const updateField = (field: keyof ContactFormPayload, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await submitContactForm(form);
    setSent(true);
    setForm(initialForm);
  };

  return (
    <>
      <Seo
        config={pageSeo({
          title: "Kontakta oss | Skyddsrumsgruppen",
          description:
            "Kontakta Skyddsrumsgruppen för frågor om skyddsrum, besiktning, konsultation, utbildning och åtgärdsplanering.",
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
            <address>
              <a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <span>{company.address}</span>
            </address>
          </aside>
          <form className="contact-form" onSubmit={onSubmit}>
            {sent && (
              <div className="success" role="status" aria-live="polite">
                Tack, ditt meddelande är mottaget. Vi återkommer så snart vi kan.
              </div>
            )}
            <label>
              Namn
              <input
                required
                autoComplete="name"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
              />
            </label>
            <label>
              E-post
              <input
                required
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
              />
            </label>
            <label>
              Telefon
              <input
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
              />
            </label>
            <label>
              Meddelande
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
              />
            </label>
            <button className="button" type="submit">
              Skicka meddelande
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
