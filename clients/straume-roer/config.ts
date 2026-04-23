export const config = {
  slug: "straume-roer",
  firmanavn: "Straume Rør AS",
  tagline: "Din lokale rørlegger på Sotra",
  bransje: "plumber local service",

  telefon: "56 33 60 00",
  epost: "post@straumeroer.no",
  adresse: "Straume Næringspark 1, 5353 Straume",
  sted: "Sotra",

  theme: "light" as "light" | "dark",
  primærfarge: "#1a4a7a",
  accentfarge: "#e07b2b",

  tjenester: [
    "Rørleggervakt",
    "Baderom og kjøkken",
    "Rørinspeksjon",
  ],
  usps: [
    "24/7 vakttelefon",
    "Fastpristilbud",
    "20 års erfaring",
  ],

  logo: "",
  herobildeSrc: "",
  anmeldelser: [
    {
      navn: "Kari Olsen",
      tekst: "Rask og profesjonell jobb. Kom samme dag og fikset lekkasjen på under en time!",
      stjerner: 5,
    },
    {
      navn: "Per Svendsen",
      tekst: "Fikk fastpris på forhånd og de holdt den. Anbefales!",
      stjerner: 5,
    },
  ],
} as const

export type { Config } from "@/types/config"
