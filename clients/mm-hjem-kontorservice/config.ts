export const config = {
  slug: "mm-hjem-kontorservice",
  firmanavn: "M&M Hjem og Kontorservice",
  tagline: "Faglig maling og oppussing i Trondheim",
  underoverskrift:
    "15 års erfaring og fagbrev i overflateteknikk. Vi leverer pene, moderne og gjennomførte resultater – for private og næring i Trondheim og omegn.",
  bransje: "painter",

  telefon: "94 24 34 96",
  epost: "mari@mmhjemogkontor.no",
  adresse: "Trondheim",
  sted: "Trondheim og omegn",
  apningstider: "Man–fre 07:00–17:00 · Gratis befaring",

  theme: "light" as "light" | "dark",
  designMode: "trust" as "trust" | "wow",
  heroVariant: "classic" as const,
  primærfarge: "#EA580C",
  accentfarge: "#2563EB",

  tjenester: [
    {
      navn: "Sparkling, maling og overflatebehandling",
      beskrivelse:
        "Profesjonell behandling av vegger, tak og flater – innvendig og utvendig. Vi velger riktig produkt og teknikk for varig resultat.",
      ikon: "paint" as const,
    },
    {
      navn: "Tapetsering og gulvbelegg",
      beskrivelse:
        "Tapetsering med detaljer som gir helhet, samt legging av gulvbelegg, teppeflis og klikkvinyl. Vi hjelper deg å velge uttrykk.",
      ikon: "home" as const,
    },
    {
      navn: "Oppgradering og tilbakestilling",
      beskrivelse:
        "Renovering og oppgradering av slitte flater – for boliger, utleieenheter, kontorer og næringsbygg. Ryddig og effektivt.",
      ikon: "wrench" as const,
    },
  ],

  usps: [
    "Fagbrev + 15 års bransjeerfaring",
    "Personlig oppfølging og ryddig kommunikasjon",
    "Gratis og uforpliktende befaring",
  ],

  stats: [
    { verdi: "15+", etikett: "Års erfaring" },
    { verdi: "5.0★", etikett: "Google-vurdering" },
    { verdi: "2", etikett: "Dedikerte fagarbeidere" },
  ],

  trustBadges: [
    "Fagbrev i overflateteknikk",
    "Gratis befaring",
    "Privat og næring",
  ],

  logo: "",
  herobildeSrc:
    "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1600&q=80",
  galleri: [] as readonly string[],

  anmeldelser: [
    {
      navn: "Kristin Moen",
      tekst:
        "Mari og Maria gjorde en utrolig fin jobb med stua vår. Ryddig, presis og holdt prisen. Anbefales!",
      stjerner: 5,
      rolle: "Privatkunde, Trondheim",
    },
    {
      navn: "Lars-Erik Hagen",
      tekst:
        "Brukte M&M til å oppgradere kontorlokalene. Effektiv kommunikasjon og et flott sluttresultat. Veldig fornøyd.",
      stjerner: 5,
      rolle: "Næringskunde, Trondheim",
    },
  ],
} as const

export type { Config } from "@/types/config"
