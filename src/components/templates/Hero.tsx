import type { Config } from "@/types/config"
import HeroSection from "./HeroSection"
import WowHeroSection from "./WowHeroSection"
import HeroAurora from "./HeroAurora"
import HeroRetroGrid from "./HeroRetroGrid"
import HeroFlickerGrid from "./HeroFlickerGrid"
import HeroAero from "./HeroAero"
import HeroAero2 from "./HeroAero2"
import HeroShapes from "./HeroShapes"
import HeroParallax from "./HeroParallax"
import HeroGlass from "./HeroGlass"
import HeroCarousel from "./HeroCarousel"

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
    case "aero2":
      return <HeroAero2 config={config} />
    case "shapes":
      return <HeroShapes config={config} />
    case "parallax":
      return <HeroParallax config={config} />
    case "glass":
      return <HeroGlass config={config} />
    case "carousel":
      return <HeroCarousel config={config} />
    case "classic":
    default:
      return <HeroSection config={config} />
  }
}
