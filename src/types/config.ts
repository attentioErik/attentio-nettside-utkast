export type DesignMode = "trust" | "wow"

export interface Config {
  slug: string
  firmanavn: string
  tagline: string
  underoverskrift?: string
  bransje: string

  telefon: string
  epost: string
  adresse: string
  sted: string
  apningstider?: string

  theme: "light" | "dark"
  designMode?: DesignMode
  primærfarge: string
  accentfarge: string

  tjenester: readonly {
    navn: string
    beskrivelse: string
    ikon?: "wrench" | "bolt" | "hammer" | "paint" | "home" | "shield" | "clock" | "star"
    bilde?: string
  }[]

  usps: readonly string[]

  stats?: readonly {
    verdi: string
    etikett: string
  }[]

  trustBadges?: readonly string[]

  logo: string
  herobildeSrc: string
  galleri?: readonly string[]

  anmeldelser: readonly {
    navn: string
    tekst: string
    stjerner: number
    rolle?: string
  }[]
}
