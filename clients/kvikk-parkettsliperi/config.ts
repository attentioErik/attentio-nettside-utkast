export const config = {
  slug: "kvikk-parkettsliperi",
  firmanavn: "KVIKK PARKETTSLIPERI",
  tagline: "Faglig gulvsliping i Oslo og Akershus",
  underoverskrift: "4.9 stjerner på 801 evalueringer i Mitt Anbud. Vi slipper, legger og behandler gulv – raskt, ryddig og til fastpris.",
  bransje: "flooring",

  telefon: "+47 90 84 02 20",
  epost: "",
  adresse: "Oslo og Akershus",
  sted: "Oslo",
  apningstider: "Man–fre 07:00–17:00 · Be om uforpliktende befaring",

  theme: "light" as "light" | "dark",
  designMode: "trust" as "trust" | "wow",
  heroVariant: "image" as const,
  primary: "#7B5040",
  accent: "#C8835A",
  fontHeading: "var(--font-space)",
  fontBody: "var(--font-dm-sans)",

  tjenester: [
    {
      navn: "Gulvsliping",
      beskrivelse: "Profesjonell sliping av parkett og tregulv. Vi avdekker naturlig treverk og behandler overflaten for varig holdbarhet.",
      ikon: "hammer" as const,
    },
    {
      navn: "Gulvlegging og belegg",
      beskrivelse: "Montering av tregulv og gulvbelegg – fra planlegging til ferdig resultat. Vi tilpasser oss ditt underlag og ønsker.",
      ikon: "home" as const,
    },
    {
      navn: "Mikrosement og avretting",
      beskrivelse: "Gulvavretting og moderne mikrosement for sømløse, slitesterke overflater i bad, kjøkken og stue.",
      ikon: "wrench" as const,
    },
  ],

  usps: [
    "4.9 stjerner – 801 evalueringer",
    "Topprangert i Mitt Anbud",
    "Uforpliktende befaring",
  ],

  stats: [
    { verdi: "801", etikett: "Evalueringer" },
    { verdi: "4.9★", etikett: "Snittscore" },
    { verdi: "20+", etikett: "Kommuner betjent" },
  ],

  trustBadges: [
    "Topprangert i Mitt Anbud",
    "4.9 på 801 evalueringer",
    "Oslo og Akershus",
  ],

  omOss: {
    tittel: "Gulvekspertise du kan stole på",
    tekst: [
      "KVIKK PARKETTSLIPERI leverer faglig gulvsliping og gulvlegging i hele Oslo-regionen – fra Vestby i sør til Hurdal i nord.",
      "Med over 800 fornøyde kunder og 4.9 i snitt er vi en av de mest anbefalte gulventreprenørene i Akershus.",
    ],
    ctaTekst: "Be om uforpliktende befaring",
    punkter: [
      { ikon: "star" as const, tittel: "Topprangert", tekst: "4.9 stjerner på 801 evalueringer i Mitt Anbud." },
      { ikon: "clock" as const, tittel: "Rask levering", tekst: "Vi møter opp til avtalt tid og holder fremdriftsplanen." },
      { ikon: "home" as const, tittel: "Alt under ett tak", tekst: "Sliping, legging, avretting, belegg og mikrosement." },
      { ikon: "shield" as const, tittel: "Fastpris", tekst: "Ingen overraskelser – prisen vi avtaler er prisen du betaler." },
    ],
  },

  logo: "",
  herobildeSrc: "https://ucarecdn.com/add9ce7f-b674-4825-b12a-ec61648b24f4/hf_20260424_111735_212ae8514b8047d2ba20d000553734a3.png",
  galleri: [] as readonly string[],

  anmeldelser: [
    {
      navn: "Lars Eriksen",
      tekst: "Slipte og lakkerte parkett i hele huset. Resultatet var over all forventning – gulvet ser ut som nytt. Ryddig og presis jobb, og prisen var akkurat som avtalt.",
      stjerner: 5,
      rolle: "Privatkunde, Nesodden",
    },
    {
      navn: "Marte Solberg",
      tekst: "Fikk lagt mikrosement på badet og slipt tregulvet i stua. Dyktige fagfolk som holdt god kommunikasjon gjennom hele prosjektet. Anbefales!",
      stjerner: 5,
      rolle: "Privatkunde, Bærum",
    },
  ],
} as const

export type { Config } from "@/types/config"
