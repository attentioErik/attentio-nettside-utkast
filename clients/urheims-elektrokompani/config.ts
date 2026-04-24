export const config = {
  slug: "urheims-elektrokompani",
  firmanavn: "Urheims Elektrokompani AS",
  tagline: "Elektriker i Bergen siden 1942",
  underoverskrift: "Over 80 års erfaring med elektriske installasjoner for privatpersoner, bedrifter og entreprenører. To kontorer i Bergen – alltid i nærheten av deg.",
  bransje: "electrician local service",

  telefon: "55 90 44 20",
  epost: "kontakt@urheim.no",
  adresse: "Chr. Michelsens gate 9, 5012 Bergen",
  sted: "Bergen",
  apningstider: "Man–fre 07:00–16:00 · To kontorer i Bergen",

  theme: "dark" as "light" | "dark",
  designMode: "trust" as "trust" | "wow",
  heroVariant: "image" as const,
  primærfarge: "#0a1628",
  accentfarge: "#f59e0b",

  tjenester: [
    {
      navn: "Elbil-lading og smarthjem",
      beskrivelse: "Installasjon av ladestasjoner for elbil og smarthjem-løsninger som gir deg kontroll over strømforbruket.",
      ikon: "bolt" as const,
    },
    {
      navn: "Elektriske installasjoner",
      beskrivelse: "Alt fra sikringsskap og tavlearbeid til nye strømpunkter, gulvvarme og belysning – for bolig og næring.",
      ikon: "wrench" as const,
    },
    {
      navn: "ENØK og energieffektivisering",
      beskrivelse: "Vi hjelper deg redusere strømforbruket med smarte løsninger, varmepumpe og energigjennomgang av anlegget.",
      ikon: "shield" as const,
    },
  ],

  usps: [
    "Etablert 1942 – over 80 års erfaring",
    "To kontorer i Bergen",
    "For privat, næring og entreprenør",
  ],

  stats: [
    { verdi: "1942", etikett: "Etableringsår" },
    { verdi: "80+", etikett: "Års erfaring" },
    { verdi: "16+", etikett: "Spesialiserte tjenester" },
  ],

  trustBadges: [
    "DSB-godkjent",
    "DIBK sentral godkjenning",
    "Boligmappa-partner",
    "Elfag",
  ],

  logo: "",
  herobildeSrc: "https://ucarecdn.com/36a22ddd-8e83-42e7-87b6-5b19d0fa74eb/-/preview/2752x1536/",

  anmeldelser: [
    {
      navn: "Tonje Bakke",
      tekst: "Urheims kom raskt og ordnet alt på første forsøk. Ryddig jobb og gode priser. Har brukt dem i mange år!",
      stjerner: 5,
      rolle: "Privatkunde, Bergen sentrum",
    },
    {
      navn: "Morten Lie",
      tekst: "Profesjonelt firma med lang erfaring. Installerte elbil-lader og nytt sikringsskap på én dag. Anbefales!",
      stjerner: 5,
      rolle: "Boligeier, Åsane",
    },
  ],
} as const

export type { Config } from "@/types/config"
