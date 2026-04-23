import { config } from "./config"
import HeroSection from "@/components/templates/HeroSection"
import ServicesSection from "@/components/templates/ServicesSection"
import TrustSection from "@/components/templates/TrustSection"
import ContactSection from "@/components/templates/ContactSection"
import SiteFooter from "@/components/templates/SiteFooter"

export default function ClientPage() {
  return (
    <main
      style={
        {
          "--primary": config.primærfarge,
          "--accent": config.accentfarge,
        } as React.CSSProperties
      }
      className={config.theme === "dark" ? "dark" : ""}
    >
      <HeroSection config={config} />
      <ServicesSection config={config} />
      <TrustSection config={config} />
      <ContactSection config={config} />
      <SiteFooter config={config} />
    </main>
  )
}
