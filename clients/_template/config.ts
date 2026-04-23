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
  primærfarge: "#1E40AF",
  accentfarge: "#EA580C",

  // --- Tjenester (med ikon og beskrivelse) ---
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

  // --- Valgfritt ---
  logo: "",
  herobildeSrc: "",

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
