export const config = {
  // --- Grunninfo ---
  slug: "tromso-vvs",
  firmanavn: "Tromsø VVS AS",
  tagline: "Trygg rørlegger i Tromsø siden 1990",
  underoverskrift: "Over 30 års erfaring med sanitæranlegg, baderom og varmeanlegg – for privat og næring i Tromsø og omegn.",
  bransje: "plumber",

  // --- Kontakt ---
  telefon: "90 54 41 23",
  epost: "post@tromso-vvs.no",
  adresse: "Tromsø",
  sted: "Tromsø",
  apningstider: "Man–fre 07:00–16:00 · Akutt hjelp tilgjengelig",

  // --- Visuell identitet ---
  theme: "light" as "light" | "dark",
  designMode: "trust" as "trust" | "wow",
  heroVariant: "image" as const,
  primærfarge: "#1E3A5F",
  accentfarge: "#EA580C",

  // --- Tjenester ---
  tjenester: [
    {
      navn: "Sanitæranlegg",
      beskrivelse: "Nybygg og rehabilitering av sanitæranlegg for bolig og næring. Solid utførelse etter gjeldende forskrifter.",
      ikon: "wrench" as const,
    },
    {
      navn: "Baderom og kjøkken",
      beskrivelse: "Montering og totalrehabilitering av bad og kjøkken. Ryddig prosess fra start til ferdig resultat.",
      ikon: "home" as const,
    },
    {
      navn: "Varmtvannsberedere og varmeanlegg",
      beskrivelse: "Service, utskifting og montering av varmtvannsberedere og varmeanlegg. Bergvarme og oljefyr.",
      ikon: "shield" as const,
    },
  ],

  // --- USP-er ---
  usps: [
    "30+ års erfaring i Tromsø",
    "Fast pris – ingen overraskelser",
    "Ryddige prosesser og solid fagkunnskap",
  ],

  // --- Stats ---
  stats: [
    { verdi: "30+", etikett: "Års erfaring" },
    { verdi: "4.9★", etikett: "Mitt Anbud – 13 vurderinger" },
    { verdi: "100%", etikett: "Lokal aktør i Tromsø" },
  ],

  // --- Trust badges ---
  trustBadges: [
    "4.9 på Mitt Anbud",
    "Autorisert rørlegger",
    "Privat og næring",
  ],

  // --- Om oss ---
  omOss: {
    tittel: "Lokal rørlegger med 30 års erfaring",
    tekst: [
      "Tromsø VVS AS er et lokalt rørleggerfirma med over 30 års erfaring i Tromsø og omegn. Vi hjelper både privatpersoner og næringskunder med alt fra nybygg til rehabilitering.",
      "Daglig leder Alen Perkovic og teamet leverer alltid solide, varige løsninger – med ryddige prosesser og fagkunnskap du kan stole på. Vi viser gjerne til referanser.",
    ],
    ctaTekst: "Kontakt for befaring",
    punkter: [
      { ikon: "shield" as const, tittel: "Godkjent og forsikret", tekst: "Alle oppdrag utføres av autoriserte fagfolk etter gjeldende forskrifter." },
      { ikon: "clock" as const, tittel: "Punktlig og pålitelig", tekst: "Vi holder avtaler og leverer til rett tid – alltid." },
      { ikon: "users" as const, tittel: "Privat og næring", tekst: "Vi betjener privatpersoner, bedrifter og entreprenører i hele regionen." },
      { ikon: "trending" as const, tittel: "Varige løsninger", tekst: "Erfaring, ryddige prosesser og solid fagkunnskap gir trygge resultater." },
    ],
  },

  // --- Bilder ---
  logo: "",
  herobildeSrc: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1600&q=80",
  galleri: [] as readonly string[],

  // --- Anmeldelser ---
  anmeldelser: [
    {
      navn: "Kristin Andersen",
      tekst: "Fantastisk service! Alen og teamet løste problemet raskt og ryddig. Holdt prisen og ingen overraskelser. Anbefales på det sterkeste!",
      stjerner: 5,
      rolle: "Privatkunde, Tromsø",
    },
    {
      navn: "Rune Bergström",
      tekst: "Brukte Tromsø VVS til totalrehab av badet. Solid håndverk, ryddig arbeidsflate og god kommunikasjon gjennom hele prosjektet.",
      stjerner: 5,
      rolle: "Boligeier, Tromsø",
    },
  ],
} as const

export type { Config } from "@/types/config"
