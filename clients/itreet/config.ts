export const config = {
  slug: "itreet",
  firmanavn: "Itreet AS",
  tagline: "Alt er mulig",
  underoverskrift:
    "Profesjonelle oppussings- og byggearbeider samt hagetjenester. Vi kombinerer kompetanse og flere års erfaring – og gjør det vi liker aller best.",
  bransje: "painter carpenter gardener local service",

  telefon: "999 00 000",
  epost: "post@itreet.no",
  adresse: "Ta kontakt for mer informasjon",
  sted: "Oslo og omegn",
  apningstider: "Man–fre 07:00–17:00",

  theme: "light" as "light" | "dark",
  designMode: "trust" as "trust" | "wow",
  heroVariant: "image" as const,
  primærfarge: "#EA580C",
  accentfarge: "#2563EB",

  tjenester: [
    {
      navn: "Maling",
      beskrivelse:
        "Maling av hus, tak og terrasser – med grundige forberedelser som rengjøring, vasking og utskifting av råtne elementer.",
      ikon: "paint" as const,
      bilde:
        "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80",
    },
    {
      navn: "Snekring",
      beskrivelse:
        "Vi bygger terrasser og gjerder, skifter kledning, monterer vinduer og dører, og reiser alt fra småbygg til større konstruksjoner i hagen.",
      ikon: "hammer" as const,
      bilde:
        "https://images.unsplash.com/photo-1572297794026-4e0b3a9e7a92?auto=format&fit=crop&w=800&q=80",
    },
    {
      navn: "Hagearbeid",
      beskrivelse:
        "Profesjonell vedlikehold av grøntareal – klipping av hekk, fjerning av ugress, plenklipping og alt annet som trengs for at hagen din alltid ser bra ut.",
      ikon: "home" as const,
      bilde:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
    },
    {
      navn: "Felling av trær",
      beskrivelse:
        "Spesialisert fjerning av trær nær bygninger, kraftledninger og vanskelig tilgjengelige steder. Vi beskjærer kroner, fjerner farlige grener og rydder for døde trær.",
      ikon: "wrench" as const,
      bilde:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    },
  ],

  usps: [
    "Gratis og uforpliktende befaring",
    "Erfarne fagfolk – ryddig gjennomføring",
    "Alt er mulig – vi finner løsningen",
  ],

  stats: [
    { verdi: "100+", etikett: "Fornøyde kunder" },
    { verdi: "10+ år", etikett: "Erfaring" },
    { verdi: "4.9★", etikett: "Kundevurdering" },
  ],

  trustBadges: [
    "Gratis befaring og tilbud",
    "Forsikrede fagfolk",
    "Pålitelig og ryddig jobb",
  ],

  logo: "",
  herobildeSrc:
    "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1600&q=80",
  galleri: [] as readonly string[],

  anmeldelser: [
    {
      navn: "Thomas Berg",
      tekst:
        "Fantastisk jobb med maling av hele huset. Ryddig, profesjonell og holdt avtalt pris!",
      stjerner: 5,
      rolle: "Privatkunde",
    },
    {
      navn: "Anita Haugen",
      tekst:
        "Itreet bygde terrassen vår og la ny kledning. Kjempefornøyd med resultatet – anbefales på det varmeste!",
      stjerner: 5,
      rolle: "Privatkunde",
    },
  ],
} as const

export type { Config } from "@/types/config"
