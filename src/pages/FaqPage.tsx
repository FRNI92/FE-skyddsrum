import { Link } from "react-router-dom";
import { Seo } from "../components/layout/Seo";
import { pageSeo } from "../utils/seo";

const maintenanceGuideUrl =
  "/dokument/till-dig-som-ager-och-ska-underhalla-ett-skyddsrum.pdf";

const faqs = [
  {
    question: "Vem ansvarar över att ställa iordning skyddsrummet?",
    answer: (
      <>
        <p>
          Du som ägare till skyddsrummet ansvarar för att skyddsrummet kan
          ställas i ordning till skyddsrumsdrift inom 48 timmar, ifall
          regeringen beslutar om höjd beredskap.
        </p>
        <p>
          Rent praktiskt underlättas iordningställandet om du eller din
          representant tillsammans med andra tillgängliga personer hjälps åt.
          Till exempel ett flerbostadshus är det rimligt att de boende deltar i
          att ställa i ordning skyddsrummet. Fokus måste ligga på att snabbt
          tömma och iordningställa skyddsrummet och då måste alla som kan hjälpa
          till.
        </p>
      </>
    ),
  },
  {
    question: "Vilken utrustning ska finnas i mitt skyddsrum?",
    answer: (
      <>
        <p>
          Till varje skyddsrum ska finnas den utrustning som behövs för att
          ställa i ordning det för skyddsrumsdrift. Vilken utrustning som ska
          finnas beror på flera saker, exempelvis skyddsrummets byggår, storlek
          samt utrustning avsedd för andra specifika behov.
        </p>
        <p>
          Variationer i utförande av utrustning och installationer förekommer
          och därför kan undantag finnas från nedanstående exempel.
        </p>
        <p>
          Är du osäker på vilken utrustning som ska finnas i ditt skyddsrum kan
          du på egen bekostnad anlita en skyddsrumssakkunnig för inventering.
        </p>
      </>
    ),
  },
  {
    question: "Är jag skyldig att underhålla mitt skyddsrum?",
    answer: (
      <>
        <p>
          Du är skyldig att underhålla skyddsrummet och den utrustning som hör
          till det.
        </p>
        <p>
          Du ska även fortlöpande säkerställa att inga otillåtna ingrepp görs i
          skyddsrummet, till exempel felaktiga håltagningar genom
          skyddsrumsstommen.
        </p>
        <p>
          Skyddsrumsförrådet eller det utrymme där inredning och utrustning
          förvaras bör kontrolleras årligen så att till exempel fuktskador kan
          upptäckas i tid.
        </p>
      </>
    ),
  },
  {
    question: "Vad innebär det för ansvar och äga ett skyddsrum?",
    answer: (
      <>
        <p>
          Enligt lagen (2006:545) om skyddsrum och tillhörande förordning och
          föreskrifter ansvarar du bland annat för att:
        </p>
        <ul>
          <li>Ge anvisning om var skyddsrummet finns genom skyltning.</li>
          <li>
            I fred använda skyddsrummet på sådant sätt att det kan ställas i
            ordning inom 48 timmar vid höjd beredskap.
          </li>
          <li>Underhålla skyddsrummet och dess utrustning.</li>
          <li>
            Inte göra ändringar eller ingrepp som kan försämra skyddsrummets
            funktion.
          </li>
          <li>Låta allmänheten komma in i skyddsrummet vid höjd beredskap.</li>
        </ul>
      </>
    ),
  },
  {
    question: "Vad innebär en myndighetskontroll?",
    answer: (
      <p>
        Vid kontroll besiktas skyddsrummets alla delar och deras funktion. Om
        Myndigheten för civilt försvar hittar brister kommer man genom ett
        beslut kräva att du ska åtgärda bristerna. I beslutet framgår om du kan
        få ersättning för åtgärderna. Ersättning lämnas inte för eftersatt
        underhåll, otillåtna ingrepp eller annan försumlighet. Du kan få
        ersättning då Myndigheten för civilt försvar beslutat om
        moderniseringsåtgärder.
      </p>
    ),
  },
  {
    question: "Kan jag göra ändringar i mitt skyddsrum?",
    answer: (
      <>
        <p>
          Om det görs ingrepp i byggnaden där skyddsrummet är, och detta inte
          görs korrekt, kan det medföra att skyddsrummet får sämre förmåga att
          skydda. Du kan då drabbas av onödiga merkostnader när skyddsrummet ska
          återställas. Kontakta alltid en sakkunnig innan du påbörjar några
          ändringar.
        </p>
        <p>
          Åtgärder i skyddsrum utförs enligt tekniska lösningar utgivna av
          ansvarig myndighet eller på annat sätt som uppfyller funktionskraven.
          Om det finns en ritning över hur skyddsrummet ska ställas i ordning
          kan den behöva uppdateras så att den överensstämmer med förhållandena
          i skyddsrummet.
        </p>
      </>
    ),
  },
  {
    question: "Hur gör jag om jag vill avveckla ett skyddsrum?",
    answer: (
      <p>
        Det finns ett stort antal skyddsrum i den befintliga bebyggelsen.
        Riksdagen har bestämt att dessa ska bevaras och underhållas för att
        kunna användas för sitt ändamål, vid behov av fysiskt skydd i krig.
        Därför är Myndigheten för civilt försvar restriktiv med att bevilja
        ansökningar om avveckling av skyddsrum. Skyddsrum får endast avvecklas
        om det finns särskilda skäl.
      </p>
    ),
  },
];

export default function FaqPage() {
  return (
    <>
      <Seo
        config={pageSeo({
          title: "Vanliga frågor om skyddsrum | Skyddsrumsgruppen",
          description:
            "Svar på vanliga frågor om ansvar, utrustning, underhåll, myndighetskontroll och ändringar i skyddsrum.",
          path: "/vanliga-fragor",
        })}
      />
      <section className="page-hero">
        <div className="container faq-container">
          <h1>Vanliga frågor</h1>
          <p>
            Här hittar du svar på vanliga frågor om att äga och underhålla ett
            skyddsrum.
          </p>
        </div>
      </section>
      <section className="section faq-section">
        <div className="container faq-container">
          <div className="faq-list">
            {faqs.map((faq) => (
              <article className="faq-item" key={faq.question}>
                <h2>{faq.question}</h2>
                <div className="faq-item__answer">{faq.answer}</div>
              </article>
            ))}
          </div>

          <aside className="faq-cta" aria-labelledby="faq-cta-title">
            <p className="eyebrow">Behöver du mer hjälp?</p>
            <h2 id="faq-cta-title">
              Har du någon fråga gällande ditt skyddsrum?
            </h2>
            <p>
              Du vet att du alltid kan mejla oss din fråga, så återkommer vi med
              svar från en sakkunnig.
            </p>
            <p className="faq-cta__note">Helt kostnadsfritt.</p>
            <div className="faq-cta__actions">
              <Link className="button" to="/kontakt#kontaktformular">
                Skicka din fråga till oss
              </Link>
              <a
                className="button button--download"
                href={maintenanceGuideUrl}
                download
              >
                Ladda ner PDF: Till dig som äger och ska underhålla ett
                skyddsrum
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
