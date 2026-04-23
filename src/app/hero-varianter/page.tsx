import HeroSection from "@/components/templates/HeroSection"
import WowHeroSection from "@/components/templates/WowHeroSection"
import HeroAurora from "@/components/templates/HeroAurora"
import HeroRetroGrid from "@/components/templates/HeroRetroGrid"
import HeroFlickerGrid from "@/components/templates/HeroFlickerGrid"
import HeroAero from "@/components/templates/HeroAero"
import type { Config } from "@/types/config"

const demoConfig: Config = {
  slug: "demo",
  firmanavn: "Attentio Demo",
  tagline: "Slik kan hero-seksjonen se ut",
  underoverskrift: "Fire ferdige varianter – velg den som passer bransjen og stemningen.",
  bransje: "demo",
  telefon: "55 00 00 00",
  epost: "hei@attentio.no",
  adresse: "Bergen",
  sted: "Bergen",
  theme: "light",
  primærfarge: "#EC4899",
  accentfarge: "#8B5CF6",
  tjenester: [],
  usps: ["Rask levering", "Lokal forankring", "Fastpris"],
  logo: "",
  herobildeSrc:
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80",
  anmeldelser: [],
}

const varianter = [
  { navn: "classic", beskriv: "Trust-modus. Rolig gradient, stjernebadge, dobbel CTA.", C: HeroSection },
  { navn: "image", beskriv: "Full-bleed hero-bilde med gradient-overlay.", C: WowHeroSection },
  { navn: "aurora", beskriv: "Interaktive partikler + meteorer + animert aurora-tekst + sparkles.", C: HeroAurora },
  { navn: "retrogrid", beskriv: "Synthwave retro grid, sentrert layout.", C: HeroRetroGrid },
  { navn: "flicker", beskriv: "Flickerende prikkegrid i brand-farge på hvit bakgrunn.", C: HeroFlickerGrid },
  { navn: "aero", beskriv: "Enterprise serif over natur-/industri-bilde. Miljø, fornybar energi, industri.", C: HeroAero },
]

export default function HeroVarianterPage() {
  return (
    <div
      style={{ "--primary": "#EC4899", "--accent": "#8B5CF6" } as React.CSSProperties}
      className="bg-slate-100"
    >
      {varianter.map(({ navn, beskriv, C }) => (
        <section key={navn}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h2 className="font-heading text-2xl font-bold text-slate-900">
                heroVariant: <code className="px-2 py-1 rounded bg-slate-200 text-pink-700 text-lg">{`"${navn}"`}</code>
              </h2>
              <p className="text-sm text-slate-600">{beskriv}</p>
            </div>
          </div>
          <C
            config={{
              ...demoConfig,
              heroVariant: navn as Config["heroVariant"],
              ...(navn === "aero"
                ? {
                    tagline: "Bærekraftige løsninger for en bedre fremtid",
                    underoverskrift:
                      "Vi hjelper bedrifter og lokalsamfunn å blomstre i en lavkarbon-verden gjennom skreddersydde løsninger innen fornybar energi.",
                    primærfarge: "#84cc16",
                    accentfarge: "#a3e635",
                    herobildeSrc:
                      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80",
                  }
                : {}),
            }}
          />
        </section>
      ))}
    </div>
  )
}
