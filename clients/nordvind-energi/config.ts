export const config = {
  slug: "nordvind-energi",
  firmanavn: "Nordvind Energi AS",
  tagline: "Bærekraftige løsninger for en bedre fremtid",
  underoverskrift: "Vi hjelper bedrifter og lokalsamfunn å blomstre i en lavkarbon-verden gjennom skreddersydde løsninger innen havvind, solenergi og energilagring.",
  bransje: "energy environment sustainability",

  telefon: "55 00 12 34",
  epost: "post@nordvind.no",
  adresse: "Nøstegaten 42, 5011 Bergen",
  sted: "Bergen",
  apningstider: "Man–fre 08:00–16:00",

  theme: "light" as "light" | "dark",
  designMode: "wow" as "trust" | "wow",
  heroVariant: "aero" as "classic" | "image" | "aurora" | "retrogrid" | "flicker" | "aero",
  primærfarge: "#059669",
  accentfarge: "#84cc16",

  tjenester: [
    {
      navn: "Havvind-prosjektering",
      beskrivelse: "Fra konseptutvikling til operativ drift – vi leder komplekse havvind-prosjekter i Nordsjøen.",
      ikon: "bolt" as const,
      bilde: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
    },
    {
      navn: "Solenergi for industri",
      beskrivelse: "Skreddersydde solcelle-installasjoner for lagerbygg, fabrikker og næringseiendom.",
      ikon: "shield" as const,
      bilde: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80",
    },
    {
      navn: "Energilagring",
      beskrivelse: "Batterisystemer som balanserer produksjon og forbruk og reduserer energikostnader.",
      ikon: "clock" as const,
      bilde: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80",
    },
  ],

  usps: [
    "Over 2 GW installert kapasitet",
    "Sertifisert etter ISO 14001",
    "Partner med Equinor og Ørsted",
  ],

  stats: [
    { verdi: "2.4 GW", etikett: "Installert kapasitet" },
    { verdi: "180+", etikett: "Prosjekter levert" },
    { verdi: "15 år", etikett: "I bransjen" },
  ],

  trustBadges: [
    "ISO 14001 sertifisert",
    "Medlem av Energi Norge",
    "EcoVadis Gold",
  ],

  logo: "",
  herobildeSrc: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80",
  galleri: [
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
  ],

  anmeldelser: [
    {
      navn: "Lars Haukeland",
      tekst: "Nordvind leverte vårt nye havvind-prosjekt under budsjett og før tidsplan. Profesjonelt tvers gjennom.",
      stjerner: 5,
      rolle: "Prosjektdirektør, BKK",
    },
    {
      navn: "Siri Johansen",
      tekst: "En partner som virkelig forstår bærekraft – ikke bare som markedsføring, men i hver teknisk beslutning.",
      stjerner: 5,
      rolle: "Bærekraftsjef, Hydro",
    },
  ],
} as const

export type { Config } from "@/types/config"
