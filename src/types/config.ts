export type DesignMode = "trust" | "wow"

export type HeroVariant =
  | "classic"      // Trust-modus, gradient bakgrunn
  | "image"        // Wow: full-bleed hero-bilde + gradient overlay
  | "aurora"       // Wow: partikler + meteorer + aurora text + sparkles (dark)
  | "retrogrid"    // Wow: synthwave retro grid (dark, centered)
  | "flicker"      // Wow: flickerende prikkegrid (light, venstre-justert)
  | "aero"         // Enterprise: stor serif sentrert over natur-/industri-bilde (miljø, fornybar, industri)
  | "aero2"        // Enterprise: venstre-justert serif + avatar-stats + fancy rotating-arrow CTA
  | "shapes"       // Kreativ: elegante floating gradient-shapes (dark, byråer, designfirma)
  | "parallax"     // Visuell: parallax scroll clip-path zoom (eiendom, reise, arkitektur)
  | "glass"        // Premium: glassmorphism stats-kort med progress-bar (byråer, studioer)
  | "carousel"     // Visuell: 3D auto-roterende bildekarusell (portfolio, fotografer)
  | "shader"       // Animert: MeshGradient-shader bakgrunn, glass-badge, bottom-left-layout (byråer, kreative merker)
  | "launch"       // SaaS: sentrert headline + blur-in + produktskjerm i glass-kort (tech, produkt-lansering)
  | "prisma"       // Redaksjonell: stort display over full-bleed bilde, asterisk, grain (kollektiv, foto/video)
  | "minimalist"   // Portfolio: tre-kolonners, stort portrett i farget sirkel, massive headline (portefølje, fashion)
  | "fashion"      // Boutique: to-kolonners grid, portrett med glow + tjeneste-liste + sesong-label (boutique, atelier)

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

  /** Passord for å se utkastet. Default: `${slug}_26`. */
  passord?: string

  theme: "light" | "dark"
  designMode?: DesignMode
  heroVariant?: HeroVariant
  primærfarge: string
  accentfarge: string

  /** Overstyrer `--font-heading` for denne klienten. F.eks. `"var(--font-playfair)"`. */
  fontHeading?: string
  /** Overstyrer `--font-body` for denne klienten. F.eks. `"var(--font-lora)"`. */
  fontBody?: string

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
