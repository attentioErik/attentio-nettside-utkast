export const config = {
  slug: "lumiere-beauty",
  firmanavn: "Lumière Beauty",
  tagline: "Skjønnhet, omsorg og tid til deg",
  underoverskrift: "Premium skjønnhetsbehandlinger i hjertet av Bergen. Håndplukkede produkter, erfarne spesialister, og rom for å slappe helt av.",
  bransje: "beauty spa wellness",

  telefon: "55 66 77 88",
  epost: "hei@lumiere-beauty.no",
  adresse: "Torgallmenningen 8, 5014 Bergen",
  sted: "Bergen",
  apningstider: "Man–fre 09:00–19:00 · Lør 10:00–16:00",

  theme: "light" as "light" | "dark",
  designMode: "wow" as "trust" | "wow",
  heroVariant: "aurora" as "classic" | "image" | "aurora" | "retrogrid" | "flicker",
  primary: "#EC4899",
  accent: "#8B5CF6",

  tjenester: [
    {
      navn: "Ansiktsbehandling",
      beskrivelse: "Dypt rensende behandling med håndplukkede franske produkter. 60 min.",
      ikon: "star" as const,
      bilde: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=80",
    },
    {
      navn: "Luksus manikyr",
      beskrivelse: "Signature manikyr med massasje, negleforming og langtidsholdbar lakk.",
      ikon: "star" as const,
      bilde: "https://images.unsplash.com/photo-1607602132700-068007b9d06d?auto=format&fit=crop&w=1600&q=80",
    },
    {
      navn: "Vippe- og brynsløft",
      beskrivelse: "Brynslaminering og vippeløft – naturlig vakkert og varer i 6–8 uker.",
      ikon: "star" as const,
      bilde: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1600&q=80",
    },
  ],

  usps: [
    "Kun håndplukkede produkter",
    "Erfarne sertifiserte terapeuter",
    "Gratis avbestilling inntil 24t før",
  ],

  stats: [
    { verdi: "5000+", etikett: "Fornøyde gjester" },
    { verdi: "4.9★", etikett: "Google-vurdering" },
    { verdi: "12 år", etikett: "I Bergen" },
  ],

  trustBadges: [
    "Sertifiserte terapeuter",
    "Dermalogica-ekspert",
    "Medlem NFVB",
  ],

  logo: "",
  herobildeSrc: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80",
  galleri: [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1607602132700-068007b9d06d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
  ],

  anmeldelser: [
    {
      navn: "Maria Berg",
      tekst: "Et ekte pusterom i hverdagen. Terapeutene er profesjonelle og produktene himmelske!",
      stjerner: 5,
      rolle: "Fast gjest siden 2019",
    },
    {
      navn: "Ingrid Sommer",
      tekst: "Den beste ansiktsbehandlingen jeg har fått. Huden stråler fortsatt uker etterpå.",
      stjerner: 5,
      rolle: "Privatkunde, Bergen",
    },
  ],
} as const

export type { Config } from "@/types/config"
