import type { Config } from "@/types/config"

export const config = {
  slug: "storli-bil-maskin",
  firmanavn: "Storli Bil & Maskin",
  tagline: "Kraft, presisjon og erfaring – levert på tid.",
  underoverskrift:
    "Fra graving og planering til riving og kjerneboring – vi tar oss av hele jobben. Topprangert med 5.0 stars fra 93 evalueringer på Mitt Anbud.",
  bransje: "construction machinery civil engineering excavation",

  telefon: "000 00 000",
  epost: "post@storli-maskin.no",
  adresse: "Norge",
  sted: "Norge",
  apningstider: "Man–fre 07:00–17:00 · Ring oss for rask respons",

  theme: "dark" as "light" | "dark",
  designMode: "trust" as "trust" | "wow",
  heroVariant: "image" as const,
  primærfarge: "#2563EB",
  accentfarge: "#EA580C",

  fontHeading: "var(--font-space)",

  tjenester: [
    {
      navn: "Graving & Planering",
      beskrivelse:
        "Profesjonell graving og planering for tomter, vei og anleggsarbeider. Vi håndterer alt fra enkle hagejobber til store entrepriser med tungt utstyr.",
      ikon: "hammer" as const,
    },
    {
      navn: "Drenering & Grøfter",
      beskrivelse:
        "Effektive dreneringsløsninger som holder vannet borte. Grøfter til kabel, VA-anlegg og overvannshåndtering utføres raskt og skikkelig.",
      ikon: "wrench" as const,
    },
    {
      navn: "Riving & Trefelling",
      beskrivelse:
        "Rivning av bygg, uthus og konstruksjoner – trygt og ryddig. Vi feller trær, freser stubber og rydder tomten klar for neste steg.",
      ikon: "bolt" as const,
    },
    {
      navn: "Betongsaging & Kjerneboring",
      beskrivelse:
        "Presis betongsaging og kjerneboring for nye åpninger, rørgjennomføringer og installasjoner – uten unødvendig støy eller støv.",
      ikon: "shield" as const,
    },
    {
      navn: "Massetransport & Container",
      beskrivelse:
        "Vi frakter masser dit de skal – overskuddsmasser ut, fyllmasse inn. Containerleie og slamsuging for fullstendig prosjektstyring.",
      ikon: "trending" as const,
    },
    {
      navn: "Grunnarbeid & Støttemur",
      beskrivelse:
        "Grunnmur, peler, støttemurer og all tilhørende grunnarbeid. Solid fundament som er bygd for å vare – etter gjeldende tekniske krav.",
      ikon: "home" as const,
    },
  ],

  usps: [
    "5.0 / 5.0 – topprangert på Mitt Anbud",
    "Over 93 godkjente evalueringer",
    "Faglig sterk og rask mobilisering",
  ],

  stats: [
    { verdi: "5.0★", etikett: "Snitt fra 93 kunder" },
    { verdi: "93+", etikett: "Evalueringer på Mitt Anbud" },
    { verdi: "Topp", etikett: "Rangert blant beste 4.8+" },
  ],

  trustBadges: [
    "Topprangert på Mitt Anbud",
    "Snittscore 4.8+",
    "Gratis befaring",
  ],

  omOss: {
    tittel: "Fagfolk med utstyr og vilje til å levere",
    tekst: [
      "Storli Bil & Maskin er et erfarent maskinentreprenørfirma med brei kompetanse innen graving, planering, riving og anleggsarbeid.",
      "Vi er topprangert på Mitt Anbud med 5.0 stjerner fra 93 evalueringer – fordi vi leverer det vi lover, på tid og til avtalt pris.",
    ],
    ctaTekst: "Kontakt oss for befaring",
    punkter: [
      {
        ikon: "shield" as const,
        tittel: "Trygg og ansvarlig",
        tekst: "Alle oppdrag utføres etter gjeldende HMS-krav og sikkerhetsprosedyrer.",
      },
      {
        ikon: "clock" as const,
        tittel: "Rask mobilisering",
        tekst: "Vi setter i gang raskt og holder tidsplanen gjennom hele prosjektet.",
      },
      {
        ikon: "users" as const,
        tittel: "Privat og næring",
        tekst: "Vi betjener både privatpersoner, borettslag, kommuner og næringsaktører.",
      },
      {
        ikon: "trending" as const,
        tittel: "Alt under ett tak",
        tekst: "Fra planlegging til ferdig ryddet tomt – én kontakt, én ansvarlig.",
      },
    ],
  },

  logo: "",
  herobildeSrc:
    "https://ucarecdn.com/12209093-1755-471a-b6c8-a13dd8569655/hf_20260424_103619_a254285b32924d2692f62ebde0f523cb.png",
  galleri: [] as readonly string[],

  anmeldelser: [
    {
      navn: "Kristoffer Lie",
      tekst:
        "Rask, ryddig og presis jobb. Graving og planering av tomten ble gjort på rekordtid og til avtalt pris. Anbefales på det sterkeste!",
      stjerner: 5,
      rolle: "Privatkunde",
    },
    {
      navn: "Silje Bakken",
      tekst:
        "Bestilte drenering og grøftegraving. Profesjonell gjeng som visste hva de drev med – og ryddet opp etter seg. Topp service.",
      stjerner: 5,
      rolle: "Huseier",
    },
    {
      navn: "Geir Arne Moen",
      tekst:
        "Trefelling og stubbefresing – utrolig trygg og strukturert jobb. Ingen skader på hagen, og alt ble fjernet samme dag.",
      stjerner: 5,
      rolle: "Privatkunde",
    },
  ],
} as const satisfies Config
