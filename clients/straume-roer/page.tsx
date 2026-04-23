import { config } from "./config"
import NavBar from "@/components/templates/NavBar"
import HeroSection from "@/components/templates/HeroSection"
import ServicesSection from "@/components/templates/ServicesSection"
import TrustSection from "@/components/templates/TrustSection"
import ContactSection from "@/components/templates/ContactSection"
import SiteFooter from "@/components/templates/SiteFooter"

export default function ClientPage() {
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
        <HeroSection config={config} />
        <ServicesSection config={config} />
        <TrustSection config={config} />
        <ContactSection config={config} />
      </main>
      <SiteFooter config={config} />
    </div>
  )
}
