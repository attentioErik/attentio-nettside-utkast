import type { Config } from "@/types/config"
import HeroSection from "./HeroSection"
import WowHeroSection from "./WowHeroSection"
import HeroAurora from "./HeroAurora"
import HeroRetroGrid from "./HeroRetroGrid"
import HeroFlickerGrid from "./HeroFlickerGrid"
import HeroAero from "./HeroAero"

/**
 * Hero-router. Velger hero-variant basert på config.heroVariant.
 * Fallback: "wow"-modus → aurora, ellers classic.
 */
export default function Hero({ config }: { config: Config }) {
  const variant =
    config.heroVariant ?? (config.designMode === "wow" ? "aurora" : "classic")

  switch (variant) {
    case "image":
      return <WowHeroSection config={config} />
    case "aurora":
      return <HeroAurora config={config} />
    case "retrogrid":
      return <HeroRetroGrid config={config} />
    case "flicker":
      return <HeroFlickerGrid config={config} />
    case "aero":
      return <HeroAero config={config} />
    case "classic":
    default:
      return <HeroSection config={config} />
  }
}
