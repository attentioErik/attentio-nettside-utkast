// clients/_template/config.ts
// Kopier denne mappen til clients/[bedrift-slug]/ for nytt utkast

export const config = {
  // --- Grunninfo ---
  slug: "bedrift-slug",
  firmanavn: "Bedrift AS",
  tagline: "Kort og tydelig verdisetning",
  underoverskrift: "Kort setning som utdyper – nevner sted og hva du løser for kunden.",
  bransje: "local service",

  // --- Kontakt ---
  telefon: "55 00 00 00",
  epost: "post@bedrift.no",
  adresse: "Gateveien 1, 5000 Bergen",
  sted: "Bergen",
  apningstider: "Man–fre 07:00–16:00 · Døgnvakt 24/7",

  // --- Visuell identitet ---
  theme: "light" as "light" | "dark",
  designMode: "trust" as "trust" | "wow",   // "trust" = lokal service, "wow" = skjønnhet/premium
  primary: "#1E40AF",
  accent: "#EA580C",

  // --- Tjenester (3–6 stk, grid tilpasses automatisk) ---
  tjenester: [
    {
      navn: "Tjeneste 1",
      beskrivelse: "Kort beskrivelse av hva tjenesten inkluderer og for hvem.",
      ikon: "wrench" as const,
    },
    {
      navn: "Tjeneste 2",
      beskrivelse: "Kort beskrivelse av hva tjenesten inkluderer og for hvem.",
      ikon: "home" as const,
    },
    {
      navn: "Tjeneste 3",
      beskrivelse: "Kort beskrivelse av hva tjenesten inkluderer og for hvem.",
      ikon: "shield" as const,
    },
  ],

  // --- USP-er (3 korte salgsargumenter) ---
  usps: [
    "Rask respons",
    "Lokal kunnskap",
    "Fastpris uten overraskelser",
  ],

  // --- Stats (vises i trust-seksjon) ---
  stats: [
    { verdi: "500+", etikett: "Fornøyde kunder" },
    { verdi: "20 år", etikett: "Erfaring" },
    { verdi: "4.9★", etikett: "Kundevurdering" },
  ],

  // --- Trust badges ---
  trustBadges: [
    "Mesterbrev",
    "Sentral godkjenning",
    "Forsikret hos Gjensidige",
  ],

  // --- Om oss-seksjon (valgfritt – vises kun hvis omOss er satt) ---
  // omOss: {
  //   tittel: "Lokal ekspertise du kan stole på",
  //   tekst: [
  //     "Siden 1990 har vi levert kvalitetstjenester i Bergen.",
  //     "Vi tilpasser oss ditt behov og leverer alltid til avtalt pris.",
  //   ],
  //   ctaTekst: "Kontakt oss i dag",
  //   punkter: [
  //     { ikon: "shield" as const, tittel: "Sikkerhet i fokus", tekst: "Alle oppdrag utføres etter gjeldende forskrifter." },
  //     { ikon: "clock" as const, tittel: "Punktlig og pålitelig", tekst: "Vi overholder avtaler og leverer til rett tid." },
  //     { ikon: "users" as const, tittel: "For alle kundetyper", tekst: "Privatpersoner, bedrifter og entreprenører." },
  //     { ikon: "trending" as const, tittel: "Effektive løsninger", tekst: "Vi hjelper deg med å redusere kostnader." },
  //   ],
  // },

  // --- Valgfritt ---
  logo: "",
  herobildeSrc: "",  // URL (f.eks. fra src/lib/images.ts) eller blank
  galleri: [] as readonly string[],  // Valgfritt – fylles ut i "wow"-modus

  anmeldelser: [
    {
      navn: "Ola Nordmann",
      tekst: "Veldig fornøyd med jobben – rask, ryddig og holdt prisen!",
      stjerner: 5,
      rolle: "Privatkunde",
    },
  ],
} as const

export type { Config } from "@/types/config"
