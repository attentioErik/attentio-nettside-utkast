export const config = {
  slug: "am-mur-betong",
  firmanavn: "AM Mur og Betong AS",
  tagline: "Solid håndverk. Varme hjem.",
  underoverskrift:
    "Fra betongfundament til moderne ildsteder – vi leverer mur, peis og pipe med faglig stolthet, miljøvennlige løsninger og ærlige priser.",
  bransje: "masonry concrete fireplace",

  telefon: "480 02 108",
  epost: "post@am-murogbetong.no",
  adresse: "Bergen",
  sted: "Bergen",
  apningstider: "Man–fre 07:00–16:00",

  theme: "dark" as "light" | "dark",
  designMode: "trust" as "trust" | "wow",
  heroVariant: "classic" as const,
  primærfarge: "#F59E0B",
  accentfarge: "#EA580C",

  tjenester: [
    {
      navn: "Peis & ildstedsrehabilitering",
      beskrivelse:
        "Vi bytter ut gamle ovner med moderne, rentbrennende ildsteder. Mer varme ut av hver vedkubbe – bedre for miljøet og lommeboka.",
      ikon: "home" as const,
    },
    {
      navn: "Piperehabilitering",
      beskrivelse:
        "Komplett piperehab med foring, tetting og brannsikring. Trygg fyring i mange tiår framover – utført av kvalifiserte fagfolk.",
      ikon: "shield" as const,
    },
    {
      navn: "Betong & mur",
      beskrivelse:
        "Fundamenter, støttemurer, såler for hus og garasje, etasjeskille og rå betongkonstruksjoner. Solid grunnarbeid som varer.",
      ikon: "hammer" as const,
    },
  ],

  usps: [
    "Norges beste priser på peisinstallasjon",
    "Miljøvennlig og rentbrennende fyring",
    "Trygg fagkunnskap – to selskap, én løsning",
  ],

  stats: [
    { verdi: "4.9★", etikett: "Snitt fra 200 kunder" },
    { verdi: "200+", etikett: "Fullførte oppdrag" },
    { verdi: "2", etikett: "Fagselskap under samme tak" },
  ],

  trustBadges: [
    "Sentral godkjenning",
    "Kvalifisert ildstedsmontør",
    "AM Peis & Pipe AS",
  ],

  logo: "",
  herobildeSrc:
    "https://ucarecdn.com/582c018c-78e0-4867-9193-04e065ef61df/carwithconcretemixerandmechanicalsleevefor20260107052953utc.jpg",
  galleri: [] as readonly string[],

  anmeldelser: [
    {
      navn: "Tor Helge Nilsen",
      tekst:
        "Alan og gjengen rehabiliterte pipen og monterte ny peis. Ryddig arbeid, holdt tidsplanen og en veldig god pris. Anbefales!",
      stjerner: 5,
      rolle: "Privatkunde, Åsane",
    },
    {
      navn: "Ingrid Bakken",
      tekst:
        "Vi brukte AM Mur og Betong til støttemur og garasje-såle. Solid håndverk, god dialog underveis og alt ble levert som avtalt.",
      stjerner: 5,
      rolle: "Privatkunde, Fana",
    },
  ],
} as const

export type { Config } from "@/types/config"
