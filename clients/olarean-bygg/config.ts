export const config = {
  slug: "olarean-bygg",
  firmanavn: "Olarean Bygg & Hage",
  tagline: "Alt av bygg og hage – ett firma.",
  underoverskrift:
    "Totalentreprenør i Bergen og Hordaland. Fra grunnarbeid og renovering til terrasse, hage og rørleggerarbeid – vi tar hele jobben.",
  bransje: "construction contractor builder",

  telefon: "",
  epost: "",
  adresse: "Bergen",
  sted: "Bergen og Hordaland",
  apningstider: "Man–fre 07:00–17:00",

  theme: "light" as "light" | "dark",
  designMode: "trust" as "trust" | "wow",
  heroVariant: "aero" as const,
  primary: "#2E7D32",
  accent: "#6D4C41",

  tjenester: [
    {
      navn: "Totalrenovering & tilbygg",
      beskrivelse:
        "Komplett renovering av bolig, bad, kjøkken og kjeller. Vi tar også tilbygg, loft og delrenovering – fra planlegging til ferdig resultat.",
      ikon: "home" as const,
    },
    {
      navn: "Terrasse, hage & uteanlegg",
      beskrivelse:
        "Terrasse og platting, støttemurer, belegningsstein, gjerde, hagearbeid og grunnarbeid. Vi skaper uterom du bruker hele året.",
      ikon: "hammer" as const,
    },
    {
      navn: "Rørlegger, tak & fagarbeid",
      beskrivelse:
        "Rørlegger og VVS, taktekking, maling, snekker og sparkling. Alle fagdisipliner under ett tak – ingen koordinering av mange håndverkere.",
      ikon: "wrench" as const,
    },
  ],

  usps: [
    "5.0 rating – 64 evalueringer på Mitt anbud",
    "Totalentreprenør: alle fag under ett tak",
    "Betjener Bergen, Stord, Bømlo og omegn",
  ],

  stats: [
    { verdi: "5.0★", etikett: "Vurdering på Mitt anbud" },
    { verdi: "64", etikett: "Kundevurderinger" },
    { verdi: "8", etikett: "Kommuner vi betjener" },
  ],

  trustBadges: [
    "Registrert på Mitt anbud",
    "Forsikret virksomhet",
    "Lokal håndverker i Bergen",
  ],

  logo: "",
  herobildeSrc:
    "https://ucarecdn.com/c2470fd1-f12f-43bf-a6fc-2f0eddb6209d/hf_20260424_140751_48c7bb0f9a6f46e48f39cd7af6fe11bc.png",
  galleri: [] as readonly string[],

  anmeldelser: [
    {
      navn: "Kari Moen",
      tekst:
        "Cristinel og teamet totalrenoverte badet og kjøkkenet vårt. Ryddig arbeid, holdt tidsplan og prisen ble som avtalt. Anbefales varmt!",
      stjerner: 5,
      rolle: "Privatkunde, Bergen",
    },
    {
      navn: "Bjørn Haugen",
      tekst:
        "Fikk ny terrasse og støttemur i hagen. Solid håndverk, god dialog gjennom hele prosjektet og resultatet overgikk forventningene.",
      stjerner: 5,
      rolle: "Privatkunde, Stord",
    },
  ],
} as const

export type { Config } from "@/types/config"
