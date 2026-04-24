export const config = {
  slug: "raila-as",
  firmanavn: "RAILA AS",
  tagline: "Snekker og totalrenovering på Gjøvik",
  underoverskrift: "Over 15 år erfaring med innvendig og utvendig oppussing, taktekking og totalrenovering i Innlandet.",
  bransje: "carpenter",

  telefon: "47 87 67 77",
  epost: "",
  adresse: "Gjøvik",
  sted: "Gjøvik",
  apningstider: "Man–fre 07:00–16:00 · Ta kontakt for befaring",

  theme: "light" as "light" | "dark",
  designMode: "trust" as "trust" | "wow",
  heroVariant: "image" as const,
  primary: "#7A7470",
  accent: "#B07850",
  fontHeading: "var(--font-playfair)",
  fontBody: "var(--font-lora)",

  tjenester: [
    {
      navn: "Totalrenovering",
      beskrivelse: "Innvendig og utvendig rehabilitering av bolig – fra kjeller til tak. Vi koordinerer alt og leverer til fastpris.",
      ikon: "home" as const,
    },
    {
      navn: "Snekkerarbeid",
      beskrivelse: "Kledning, gulvlegging, dør- og vindusutskifting, kjøkkenmontering og terrasseplatting med lang erfaring.",
      ikon: "hammer" as const,
    },
    {
      navn: "Tak og utvendig",
      beskrivelse: "Taktekking, vindskier, pipehatt og beslag. Vi sikrer huset ditt mot vær og vind – riktig og varig.",
      ikon: "wrench" as const,
    },
  ],

  usps: [
    "15+ år faglig erfaring",
    "4.9 i Mitt Anbud – 19 evalueringer",
    "Uforpliktende befaring",
  ],

  stats: [
    { verdi: "15+", etikett: "År med erfaring" },
    { verdi: "4.9★", etikett: "Mitt Anbud" },
    { verdi: "19", etikett: "Evalueringer" },
  ],

  trustBadges: [
    "4.9 i Mitt Anbud",
    "15 år erfaring",
    "Gjøvik og Innlandet",
  ],

  omOss: {
    tittel: "Håndverker du kan stole på",
    tekst: [
      "RAILA AS ble startet på Otta med over 15 år i bransjen. Nå er vi etablert i Gjøvik og tar oppdrag over hele Innlandet.",
      "Vi er en liten og dedikert gjeng som setter kvalitet og ryddighet foran alt. Ingen overraskelser på sluttsummen.",
    ],
    ctaTekst: "Be om uforpliktende befaring",
    punkter: [
      { ikon: "shield" as const, tittel: "Erfaring som teller", tekst: "Eget firma i over 15 år – vi vet hva som kreves." },
      { ikon: "clock" as const, tittel: "Holder avtaler", tekst: "Vi møter opp til avtalt tid og holder fremdriftsplan." },
      { ikon: "home" as const, tittel: "Alt under ett tak", tekst: "Fra bad og kjøkken til kledning, tak og terrasse." },
      { ikon: "star" as const, tittel: "4.9 på Mitt Anbud", tekst: "19 evalueringer fra fornøyde kunder i Innlandet." },
    ],
  },

  logo: "",
  herobildeSrc: "https://ucarecdn.com/fcbb3126-fa9f-4459-90a9-2cc9ab30912a/hf_20260424_105535_fd3d56fdec574ff7a76bdbe8fcf726a3.png",
  galleri: [] as readonly string[],

  anmeldelser: [
    {
      navn: "Trond Aasberg",
      tekst: "RAILA AS renoverte badet og la nytt gulv i hele første etasje. Presis, ryddig og holdt prisen til punkt og prikke. Anbefales på det varmeste!",
      stjerner: 5,
      rolle: "Privatkunde, Gjøvik",
    },
    {
      navn: "Hege Mork",
      tekst: "Fikk skiftet all kledning på huset og ny terrasse. Veldig fornøyd med resultatet og kommunikasjonen underveis. Vil bruke dem igjen.",
      stjerner: 5,
      rolle: "Privatkunde, Lillehammer",
    },
  ],
} as const

export type { Config } from "@/types/config"
