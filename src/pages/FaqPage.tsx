import { Seo } from "../components/layout/Seo";
import { pageSeo } from "../utils/seo";

const faqs = [
  {
    question: "När behöver ett skyddsrum besiktigas?",
    answer:
      "Besiktning är klokt när dokumentation saknas, inför planerade arbeten eller när ni vill få en tydlig bild av status och prioriterade åtgärder."
  },
  {
    question: "Kan ni hjälpa oss att prioritera brister?",
    answer:
      "Ja. Vi hjälper till att bedöma vad som är viktigt nu, vad som kan planeras och vilka åtgärder som behöver specialiststöd."
  },
  {
    question: "Arbetar ni med bostadsrättsföreningar och förvaltare?",
    answer:
      "Ja. Vi hjälper fastighetsägare, BRF:er och förvaltare med konsultation, utbildning, besiktning och åtgärdsplanering."
  }
];

export default function FaqPage() {
  return (
    <>
      <Seo
        config={pageSeo({
          title: "Vanliga frågor | Skyddsrumsgruppen",
          description:
            "Svar på vanliga frågor om skyddsrum, besiktning, dokumentation och åtgärdsplanering.",
          path: "/vanliga-fragor"
        })}
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Vanliga frågor</p>
          <h1>Svar på frågor om skyddsrum</h1>
          <p>Här samlar vi korta svar som hjälper dig förstå nästa steg.</p>
        </div>
      </section>
      <section className="section">
        <div className="container faq-list">
          {faqs.map((faq) => (
            <article className="faq-item" key={faq.question}>
              <h2>{faq.question}</h2>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
