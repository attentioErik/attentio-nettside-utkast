import Image from "next/image"
import type { Config } from "@/types/config"
import { config as rawConfig } from "./config"
import NavBar from "@/components/templates/NavBar"
import Hero from "@/components/templates/Hero"
import TrustSection from "@/components/templates/TrustSection"
import ContactSection from "@/components/templates/ContactSection"
import SiteFooter from "@/components/templates/SiteFooter"
import { tjenesteIcons, WrenchIcon } from "@/components/templates/Icons"

const config = rawConfig as Config

export default function ItreetPage() {
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

        <section id="tjenester" className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-14">
              <p
                className="text-sm font-semibold uppercase tracking-wider mb-3"
                style={{ color: "var(--primary)" }}
              >
                Tjenester
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
                Se hva vi kan gjøre for deg
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Vi tar ansvar fra første henvendelse til ferdig jobb – kombinert
                kompetanse innen maling, snekring, hagearbeid og trær.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {config.tjenester.map((tjeneste, i) => {
                const Icon = tjeneste.ikon
                  ? tjenesteIcons[tjeneste.ikon]
                  : WrenchIcon
                return (
                  <article
                    key={i}
                    className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300"
                  >
                    {tjeneste.bilde && (
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={tjeneste.bilde}
                          alt={tjeneste.navn}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-7">
                      {!tjeneste.bilde && (
                        <div
                          className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                          style={{
                            backgroundColor:
                              "color-mix(in srgb, var(--primary) 10%, white)",
                            color: "var(--primary)",
                          }}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                      )}
                      <h3 className="font-heading text-xl font-semibold text-slate-900 mb-2">
                        {tjeneste.navn}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {tjeneste.beskrivelse}
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <TrustSection config={config} />
        <ContactSection config={config} />
      </main>
      <SiteFooter config={config} />
    </div>
  )
}
