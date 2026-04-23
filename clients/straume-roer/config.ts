export const config = {
  slug: "straume-roer",
  firmanavn: "Straume Rør AS",
  tagline: "Rørlegger på Sotra – når du trenger det",
  underoverskrift: "Rask hjelp, fastpris og lokal erfaring siden 2004. Vi rykker ut fra Straume når lekkasjen ikke kan vente.",
  bransje: "plumber local service",

  telefon: "56 33 60 00",
  epost: "post@straumeroer.no",
  adresse: "Straume Næringspark 1, 5353 Straume",
  sted: "Sotra",
  apningstider: "Man–fre 07:00–16:00 · Døgnvakt 24/7",

  theme: "light" as "light" | "dark",
  primærfarge: "#1E40AF",
  accentfarge: "#EA580C",

  tjenester: [
    {
      navn: "Rørleggervakt",
      beskrivelse: "Akutt lekkasje eller tett avløp? Vi rykker ut 24/7 i hele Sotra-regionen.",
      ikon: "clock" as const,
    },
    {
      navn: "Baderom og kjøkken",
      beskrivelse: "Komplett rørleggerarbeid ved oppussing – fra prosjektering til ferdig installasjon.",
      ikon: "home" as const,
    },
    {
      navn: "Rørinspeksjon",
      beskrivelse: "Vi finner problemet før det blir dyrt. Kamera-inspeksjon av avløp og rør.",
      ikon: "shield" as const,
    },
  ],

  usps: [
    "Døgnvakt 24/7",
    "Fastpristilbud før oppstart",
    "20 års erfaring på Sotra",
  ],

  stats: [
    { verdi: "2000+", etikett: "Oppdrag utført" },
    { verdi: "20 år", etikett: "På Sotra" },
    { verdi: "4.9★", etikett: "Kundevurdering" },
  ],

  trustBadges: [
    "Mesterbrev",
    "Sentral godkjenning",
    "Medlem av Rørentreprenørene Norge",
  ],

  logo: "",
  herobildeSrc: "",

  anmeldelser: [
    {
      navn: "Kari Olsen",
      tekst: "Rask og profesjonell jobb. Kom samme dag og fikset lekkasjen på under en time!",
      stjerner: 5,
      rolle: "Privatkunde, Straume",
    },
    {
      navn: "Per Svendsen",
      tekst: "Fikk fastpris på forhånd og de holdt den. Ryddig gjennomføring, anbefales!",
      stjerner: 5,
      rolle: "Borettslag, Bildøy",
    },
  ],
} as const

export type { Config } from "@/types/config"
