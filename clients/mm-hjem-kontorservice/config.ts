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
        "Profesjonell behandling av vegger, tak og flater – innvendig og utvendig. Vi velger riktig produkt og teknikk for et varig og pent resultat.",
      ikon: "paint" as const,
    },
    {
      navn: "Tapetsering",
      beskrivelse:
        "Tapetsering med detaljer som gir helhet og karakter til rommet. Vi hjelper deg å velge mønster og materiale som passer ditt uttrykk.",
      ikon: "home" as const,
    },
    {
      navn: "Gulvbelegg, teppeflis og klikkvinyl",
      beskrivelse:
        "Legging av gulvbelegg, teppeflis og klikkvinyl for alle typer rom og bruksformål. Solid utførelse og ryddig sluttresultat.",
      ikon: "wrench" as const,
    },
    {
      navn: "Tilbakestilling og oppgradering av flater",
      beskrivelse:
        "Renovering av slitte og utdaterte flater i boliger, utleieenheter, kontorer og næringsbygg. Effektivt og ryddig gjennomført.",
      ikon: "hammer" as const,
    },
    {
      navn: "Styling og finish",
      beskrivelse:
        "Vi bidrar med råd og styling ved behov – slik at fargevalg, materialer og detaljer henger sammen og gir rommet et gjennomført uttrykk.",
      ikon: "star" as const,
    },
  ],

  omOss: {
    tittel: "To fagfolk – ett felles mål: et resultat du er stolt av",
    tekst: [
      "M&M Hjem og Kontorservice er et nyetablert firma bestående av Mari Bøkseth og Maria Hammer – to fagarbeidere med fagbrev i overflateteknikk og over 15 års samlet erfaring fra veletablerte bedrifter i bransjen.",
      "Vi startet for oss selv fordi vi ønsker å gjøre ting på vår måte: tett oppfølging, ærlige råd og et genuint fokus på kvalitet i hver eneste jobb. Enten du skal male stua, oppgradere kontoret eller tilbakestille en utleiebolig – vi ser på jobben, gir konkrete forslag og sørger for at du vet hva du får.",
      "Vi jobber for både private husholdninger og næringskunder i Trondheim og omegn. Første befaring er alltid gratis og uforpliktende.",
    ],
    ctaTekst: "Be om gratis befaring",
    punkter: [
      {
        ikon: "shield" as const,
        tittel: "Fagbrev i overflateteknikk",
        tekst: "Begge fagarbeiderne har fagbrev og solid teoretisk og praktisk grunnlag for godt håndverk.",
      },
      {
        ikon: "clock" as const,
        tittel: "15+ års bransjeerfaring",
        tekst: "Bakgrunn fra veletablerte bedrifter gir oss gode rutiner, god flyt og forutsigbar gjennomføring.",
      },
      {
        ikon: "users" as const,
        tittel: "Privat og næring",
        tekst: "Vi hjelper både husholdninger og bedrifter – fra enkle malerjobber til større oppussingsprosjekter.",
      },
      {
        ikon: "star" as const,
        tittel: "Personlig oppfølging",
        tekst: "Du forholder deg til oss direkte – ingen mellommenn, rask kommunikasjon og ingen ubehagelige overraskelser.",
      },
    ],
  },

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
