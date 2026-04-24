import HeroSection from "@/components/templates/HeroSection"
import WowHeroSection from "@/components/templates/WowHeroSection"
import HeroAurora from "@/components/templates/HeroAurora"
import HeroRetroGrid from "@/components/templates/HeroRetroGrid"
import HeroFlickerGrid from "@/components/templates/HeroFlickerGrid"
import HeroAero from "@/components/templates/HeroAero"
import HeroAero2 from "@/components/templates/HeroAero2"
import HeroShapes from "@/components/templates/HeroShapes"
import HeroParallax from "@/components/templates/HeroParallax"
import HeroGlass from "@/components/templates/HeroGlass"
import HeroCarousel from "@/components/templates/HeroCarousel"
import HeroShader from "@/components/templates/HeroShader"
import HeroLaunch from "@/components/templates/HeroLaunch"
import HeroPrisma from "@/components/templates/HeroPrisma"
import HeroMinimalist from "@/components/templates/HeroMinimalist"
import HeroFashion from "@/components/templates/HeroFashion"
import type { Config } from "@/types/config"

const baseDemo: Config = {
  slug: "demo",
  firmanavn: "Attentio Demo",
  tagline: "Slik kan hero-seksjonen se ut",
  underoverskrift:
    "Elleve ferdige varianter – velg den som passer bransjen og stemningen.",
  bransje: "demo",
  telefon: "55 00 00 00",
  epost: "hei@attentio.no",
  adresse: "Bergen",
  sted: "Bergen",
  theme: "light",
  primary: "#EC4899",
  accent: "#8B5CF6",
  tjenester: [],
  usps: ["Rask levering", "Lokal forankring", "Fastpris"],
  stats: [
    { verdi: "150+", etikett: "Prosjekter" },
    { verdi: "5 år", etikett: "Erfaring" },
    { verdi: "24/7", etikett: "Support" },
    { verdi: "100%", etikett: "Kvalitet" },
  ],
  trustBadges: ["ISO 9001", "Mesterbrev"],
  logo: "",
  herobildeSrc:
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80",
  galleri: [
    "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?w=900&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=900&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?w=900&auto=format&fit=crop&q=60",
  ],
  anmeldelser: [
    { navn: "Maria Berg", tekst: "Topp!", stjerner: 5 },
    { navn: "Lars Haukeland", tekst: "Topp!", stjerner: 5 },
    { navn: "Ingrid Sommer", tekst: "Topp!", stjerner: 5 },
    { navn: "Per Svendsen", tekst: "Topp!", stjerner: 5 },
  ],
}

const energyDemo: Partial<Config> = {
  tagline: "Bærekraftige løsninger for en bedre fremtid",
  underoverskrift:
    "Vi hjelper bedrifter og lokalsamfunn å blomstre i en lavkarbon-verden gjennom skreddersydde løsninger innen fornybar energi.",
  primary: "#059669",
  accent: "#84cc16",
  herobildeSrc:
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80",
}

const agencyDemo: Partial<Config> = {
  tagline: "Lager digitale opplevelser som betyr noe",
  underoverskrift:
    "Vi designer grensesnitt som kombinerer estetikk og funksjonalitet – opplevelser brukere elsker og bedrifter vokser på.",
  primary: "#f59e0b",
  accent: "#fbbf24",
}

type HeroComp = React.ComponentType<{ config: Config }>

const varianter: { navn: string; beskriv: string; C: HeroComp; overrides?: Partial<Config> }[] = [
  { navn: "classic", beskriv: "Trust-modus. Gradient-bakgrunn, stjernebadge, dobbel CTA.", C: HeroSection },
  { navn: "image", beskriv: "Full-bleed hero-bilde med gradient-overlay.", C: WowHeroSection },
  { navn: "aurora", beskriv: "Interaktive partikler + meteorer + aurora-tekst + sparkles.", C: HeroAurora },
  { navn: "retrogrid", beskriv: "Synthwave retro grid, sentrert layout.", C: HeroRetroGrid },
  { navn: "flicker", beskriv: "Flickerende prikkegrid i brand-farge (light).", C: HeroFlickerGrid },
  { navn: "aero", beskriv: "Enterprise serif over natur-/industri-bilde. Miljø, fornybar energi, industri.", C: HeroAero, overrides: energyDemo },
  { navn: "aero2", beskriv: "Venstre-justert serif + avatar-stats + fancy rotating-arrow CTA.", C: HeroAero2, overrides: energyDemo },
  { navn: "shapes", beskriv: "Elegante floating gradient-shapes, dark. Kreative byråer, designfirma.", C: HeroShapes, overrides: agencyDemo },
  { navn: "glass", beskriv: "Premium glassmorphism stats-kort med progress-bar. Byråer, studioer.", C: HeroGlass, overrides: agencyDemo },
  { navn: "carousel", beskriv: "3D auto-roterende bildekarusell. Portfolio, fotografer, reiseliv.", C: HeroCarousel },
  { navn: "parallax", beskriv: "Parallax clip-path zoom på scroll. Eiendom, reise, arkitektur. (Scroll for å se effekten)", C: HeroParallax },
  { navn: "shader", beskriv: "Animert MeshGradient-shader bakgrunn, glass-badge, bottom-left-layout. Byråer, studioer, kreative merker.", C: HeroShader, overrides: agencyDemo },
  { navn: "launch", beskriv: "SaaS-stil: sentrert headline + blur-in reveal + produktbilde i glass-kort. Tech, produkt-lansering.", C: HeroLaunch },
  { navn: "prisma", beskriv: "Redaksjonell: stort display over full-bleed bilde, asterisk, grain-overlay. Kollektiv, foto/video.", C: HeroPrisma },
  { navn: "minimalist", beskriv: "Tre-kolonners minimalist: portrett i brand-farget sirkel + massive headline. Portefølje, fashion, arkitekt.", C: HeroMinimalist },
  { navn: "fashion", beskriv: "To-kolonners boutique: portrett med glow + tjeneste-liste + sesong-label. Boutique, atelier, skjønnhet.", C: HeroFashion },
]

export default function HeroVarianterPage() {
  return (
    <div
      style={{ "--primary": "#EC4899", "--accent": "#8B5CF6" } as React.CSSProperties}
      className="bg-slate-100"
    >
      {varianter.map(({ navn, beskriv, C, overrides }) => (
        <section key={navn}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h2 className="font-heading text-2xl font-bold text-slate-900">
                heroVariant:{" "}
                <code className="px-2 py-1 rounded bg-slate-200 text-pink-700 text-lg">{`"${navn}"`}</code>
              </h2>
              <p className="text-sm text-slate-600 max-w-xl sm:text-right">{beskriv}</p>
            </div>
          </div>
          <C
            config={{
              ...baseDemo,
              heroVariant: navn as Config["heroVariant"],
              ...(overrides ?? {}),
            }}
          />
        </section>
      ))}
    </div>
  )
}
