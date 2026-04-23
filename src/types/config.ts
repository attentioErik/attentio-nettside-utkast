export interface Config {
  slug: string
  firmanavn: string
  tagline: string
  bransje: string
  telefon: string
  epost: string
  adresse: string
  sted: string
  theme: "light" | "dark"
  primærfarge: string
  accentfarge: string
  tjenester: readonly string[]
  usps: readonly string[]
  logo: string
  herobildeSrc: string
  anmeldelser: readonly {
    navn: string
    tekst: string
    stjerner: number
  }[]
}
