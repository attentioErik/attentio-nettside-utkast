// clients/_template/page.tsx
// Kopier til clients/[slug]/page.tsx og fjern kommentarer

import { config } from "./config"
import NavBar from "@/components/templates/NavBar"
import HeroSection from "@/components/templates/HeroSection"
import WowHeroSection from "@/components/templates/WowHeroSection"
import ServicesSection from "@/components/templates/ServicesSection"
import GallerySection from "@/components/templates/GallerySection"
import TrustSection from "@/components/templates/TrustSection"
import ContactSection from "@/components/templates/ContactSection"
import SiteFooter from "@/components/templates/SiteFooter"

export default function ClientPage() {
  const Hero = config.designMode === "wow" ? WowHeroSection : HeroSection

  return (
    <div
      style={
        {
          "--primary": config.primærfarge,
          "--accent": config.accentfarge,
        } as React.CSSProperties
      }
      className={config.theme === "dark" ? "dark" : ""}
    >
      <NavBar config={config} />
      <main>
        <Hero config={config} />
        <ServicesSection config={config} />
        <GallerySection config={config} />
        <TrustSection config={config} />
        <ContactSection config={config} />
      </main>
      <SiteFooter config={config} />
    </div>
  )
}
