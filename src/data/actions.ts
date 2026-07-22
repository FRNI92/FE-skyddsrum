import brunnImage from "../assets/Åtgärder/brunn2 - kopia.png";
import genomforingVaImage from "../assets/Åtgärder/genomföring_va.webp";
import inluftsrorImage from "../assets/Åtgärder/inluftskanal_rostkydd.png";
import kabeldragningImage from "../assets/Åtgärder/kabeldragning.webp";
import karnborrningEfterImage from "../assets/Åtgärder/kärnborrning_efter.webp";
import karnborrningForeImage from "../assets/Åtgärder/Kärnborrning_före.webp";
import ritning1Image from "../assets/Åtgärder/ritning_1.webp";
import ritning2Image from "../assets/Åtgärder/ritning_2.webp";
import rostskyddEfterImage from "../assets/Åtgärder/rostskyddsbehandling_efter.webp";
import rostskyddForeImage from "../assets/Åtgärder/rostskyddsbehandling_före.webp";
import storreHalighetImage from "../assets/Åtgärder/större_hålighet.webp";
import utrustningImage from "../assets/Åtgärder/utrustning.webp";
import ventilspindelImage from "../assets/Åtgärder/vetilspindel.webp";
import type { ActionSectionData } from "../types/content";

export const actionSections: ActionSectionData[] = [
  {
    id: "golvbrunn",
    title: "Golvbrunn",
    subtitle: "Renovering av golvbrunn",
    description:
      "Golvbrunnarna i våra skyddsrum är idag otroligt eftersatta, där ventilspindeln är fastrostad och skruvhuvud knäckt. Genom att blästra golvbrunnen med aluminiumoxid får vi bort all yt  - djupgånde rost. Vi behandlar sedan brunnen med en godkänd primer (ISO 8501-1) och grundbeläggning med alkydlack80 µm och rostskyddsfärg med alkydlack 120 µm enligt ISO 12944-5. Detta göra att brunnarna kommer att hålla många år framöver. Vi använder även rostfria bultar istället för skruvar då vi anser att det är mer långsiktigt",
    images: [{ src: brunnImage, alt: "Renoverad golvbrunn i skyddsrum" }]
  },
  {
    id: "rostskyddsbehandling",
    title: "Rostskyddsbehandling",
    subtitle: "Före och efter behandling",
    description:
      "Utluftskanalen bli lätt utsatt för rost och bör åtgärdas så fort de uppdagas för att förhindra byte och därmed även en stor kostnad.Genom att blästra utluftskanalen med aluminiumoxid får vi bort allyt  - djupgånde rost. Vi behandlar sedan utluftskanalen med en godkänd primer (ISO 8501-1) och grundbeläggning med alkydlack 80 µm och rostskyddsfärg med alkydlack 120 µm enligt ISO 12944-5. Detta göra att utluftskanalen kommer att hålla många år framöver.",
    images: [
      { src: inluftsrorImage, alt: "Rostskadad skyddsrumskomponent före behandling" },
    ]
    
  },
  {
    id: "kabelgenomforing",
    title: "Kabelgenomföring",
    subtitle: "Kabel genom skyddsrum",
    description:
      "Att vilja dra in någon form av kabel genom skyddsrummet är idag mer förekommande något annat. Med hjälp av vår kvalificerad sakkunniga räknar vi ut vart vi kan kärnborra för att minska påverkan på skyddsrummets integritet. Därefter installerar vi certifierade produkter, godkända för skyddsrum, för att sedan dra igenom alla de kablar ni önskar. Vi lämnar även skyddsrumsintyg på genomförd åtgärd.",
    images: [{ src: kabeldragningImage, alt: "Godkänd kabelgenomföring i skyddsrum" }]
  },
  {
    id: "genomforing-va",
    title: "Genomföring VA",
    subtitle: "Vattenledning genom skyddsrum",
    description:
      "Vanligtvis rekommenderas det att försöka dra ledningen utanför skyddsrummet, men skulle man behöva dra ledningen genom skyddsrummet så hjälper vi er. Vår kvalificerad sakkunniga räknar vi ut vart vi kan kärnborra för att minska påverkan på skyddsrummets integritet. Därefter installerar vi certifierade produkter, godkända för skyddsrum, för att sedan dra igenom de ledningar ni önskar. Vi lämnar även skyddsrumsintyg på genomförd åtgärd. Allt arbete med ledningar sker tillsammans med vår VVS samarbetspartner",
    images: [{ src: genomforingVaImage, alt: "VA-genomföring genom skyddsrumsvägg" }]
  },
  {
    id: "utluftskanal",
    title: "Rostskydd av utluftskanal",
    subtitle: "Skydda utsatta ståldelar",
    description:
      "Skyddsrummets svanhals befinner sig ute året om och är därför mer utsatt än andra komponenter i skyddsrummet. Svanhalsarna blir lätt utsatta för rost och oxidation vilket innebär att livslängden är betydligt kortare än övriga komponenter. Genom att blästra svanhalsen med aluminiumoxid får vi bort all yt- och djupgående rost. Vi behandlar sedan svanhalsen med en godkänd primer (ISO 8501-1) och grundbeläggning med alkydlack 80 µm och rostskyddsfärg med alkydlack 120 µm enligt ISO 12944-5. Detta gör att svanhalsarna kommer att hålla många år framöver.",
    images: [{ src: rostskyddForeImage, alt: "Rostskyddad kanal i skyddsrum" }, { src: rostskyddEfterImage, alt: "Rostskyddad kanal i skyddsrum" }]
  },
  {
    id: "karnborrning",
    title: "Kärnborrning",
    subtitle: "Återställning av håltagning",
    description:
      "Har ni en icke godkänd hålighet i ert skyddsrum? Har ni tidigare dragit igenom kablar som ni nu inte behöver? Råkat borra i stommen på fel ställe? Vi hjälper er med att få allt korrekt och godkänt igen. Vår kvalificerad sakkunnige kommer ut och gör en granskning av stommen för att välja vilken typlösning som är applicerbar. Finns det ingen typlösning så tar vår kvalificerade sakkunnige fram en specifikt för ert skyddsrum. Därefter kan vi kärnborra upp så att vi får rätt dimension för att slutligen använda certiferade och godkända produkter för att få stommens integritet godkänt igen. Vi lämnar givetvis intyg till både er och MSB på genomförda åtgärder",
    images: [
      { src: karnborrningForeImage, alt: "Håltagning före återställning", label: "Före" },
      { src: karnborrningEfterImage, alt: "Håltagning efter återställning", label: "Efter" }
    ]
  },
  {
    id: "ventilspindel",
    title: "Byte av ventilspindel",
    subtitle: "När befintlig ventilspindel är undermålig",
    description:
      "I samband med uppfräschning av golvbrunnar brukar vi utvärdera om ventilspindeln behöver bytas eller inte. Vanligtvis går det att återställa ordinarie ventilspindel till ett bra skick, men i vissa fall krävs det byte. Vi byter till en ny, certifierad och godkänd ventilspindel tillsammans med en ny packning. ",
    images: [{ src: ventilspindelImage, alt: "Utbytt ventilspindel i golvbrunn" }]
  },
  {
    id: "iordningstallanderitning",
    title: "Iordningställanderitning",
    subtitle: "En tydlig plan för freds- och krigsdrift",
    description:
      "En vanligt anmärkning på ett förläggande är att man behöver en nya eller uppdaterad iordningställanderitning. Ritningen beskriver hur skyddsrummet ser ut i freds - och krigstid,vad som skall monteras vart, antalet, vad det innefattar och  hur det ska monteras.  Ritningen har ingående detaljbeskrivningar på komponenterna och ritas upp i CAD i ett A1 utförande.  Låt oss ta hand om er ritning, där vi kommer och mäter upp skyddsrummet, ritar upp och sköter all kontakt med MSB: Vi lämnar givetvis garanti på ritningen tills de att MSB godkänner den.",
    images: [
      { src: ritning1Image, alt: "Exempel på iordningställanderitning" },
      { src: ritning2Image, alt: "Detalj ur iordningställanderitning" }
    ]
  },
  {
    id: "utrustning",
    title: "Utrustning",
    subtitle: "Komplettering av skyddsrumsutrustning",
    description:
      "Hos oss hittar du alla utrustningsdetaljer, certifierade produkter och komponenter till skyddsrum. Vi har även originalprodukter om ni behöver komplettera upp med ett få antal specifika utrustningsdetaljer från ASKR, NSKR, TB78 (Skyddsrum som är byggd mellan 1950-1992)",
    images: [{ src: utrustningImage, alt: "Utrustning och komponenter till skyddsrum" }]
  },
  {
    id: "storre-halighet",
    title: "Större hålighet",
    subtitle: "Bedömning och anpassad återställning",
    description:
      "Idag förekommer det att man har kvarvarande genomföringar från avloppsrör, stammar, sprickor eller genomföringar. Beroende på storlek på hålighet krävs det att en kvalificerad sakkunnig gör en granskning och bedömning. Utifrån detta kan man sedan välja vilken typlösning man skall använda sig av, alternativt tar den kvalificerade sakkunnige fram en specifik lösning för just er hålighet. Efter åtgärderna får man ett skyddsrumsintyg på godkänd åtgärd som vi sedan rapporterar in till MSB.",
    images: [{ src: storreHalighetImage, alt: "Större hålighet i skyddsrum före åtgärd" }]
  }
];
