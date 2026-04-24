import type { Config } from "@/types/config"
import NavBar from "./NavBar"
import Hero from "./Hero"
import ServicesSection from "./ServicesSection"
import AboutSection from "./AboutSection"
import GallerySection from "./GallerySection"
import TrustSection from "./TrustSection"
import ContactSection from "./ContactSection"
import SiteFooter from "./SiteFooter"

/**
 * Delt wrapper for alle klient-utkast. Tar Config og rendrer
 * NavBar + Hero + alle seksjoner + Footer. Setter CSS-variabler
 * for farger og valgfrie font-overrides.
 */
export default function ClientShell({ config }: { config: Config }) {
  return (
    <div
      style={
        {
          "--primary": config.primærfarge,
          "--accent": config.accentfarge,
          ...(config.fontHeading && { "--font-heading": config.fontHeading }),
          ...(config.fontBody && { "--font-body": config.fontBody }),
        } as React.CSSProperties
      }
      className={config.theme === "dark" ? "dark" : ""}
    >
      <NavBar config={config} />
      <main>
        <Hero config={config} />
        <ServicesSection config={config} />
        <AboutSection config={config} />
        <GallerySection config={config} />
        <TrustSection config={config} />
        <ContactSection config={config} />
      </main>
      <SiteFooter config={config} />
    </div>
  )
}
