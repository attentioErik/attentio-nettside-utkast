"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import type { Config } from "@/types/config"

/**
 * HeroFashion – to-kolonners minimalist layout. Høyre: portrett med
 * brand-farget glow. Venstre: firmanavn + liste av tjenester + tagline
 * som sesong-label + underoverskrift. Passer fashion, boutique, atelier.
 */
export default function HeroFashion({ config }: { config: Config }) {
  const year = new Date().getFullYear()

  return (
    <section
      id="top"
      className="min-h-screen w-full bg-background text-foreground"
    >
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="relative grid gap-8 overflow-x-hidden md:grid-cols-2">
          <div className="relative md:order-2">
            <div
              className="absolute -top-10 -left-10 -z-10 h-72 w-72 rounded-full opacity-30 blur-3xl"
              style={{ backgroundColor: config.primary }}
            />
            {config.herobildeSrc && (
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={config.herobildeSrc}
                  alt={`${config.firmanavn} – ${config.tagline}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover brightness-105"
                />
              </div>
            )}
          </div>

          <div className="flex flex-col justify-between md:order-1">
            <div className="flex h-full flex-col justify-between gap-10">
              <h1 className="font-heading text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
                {config.firmanavn.replace(/\s*AS$/i, "")}
                <span style={{ color: "var(--primary)" }}>.</span>
              </h1>

              <ul className="space-y-2 text-lg tracking-tight text-foreground/90">
                {config.tjenester.map((tjeneste, index) => (
                  <motion.li
                    key={tjeneste.navn}
                    initial={{ opacity: 0.8 }}
                    whileHover={{
                      opacity: 1,
                      y: -3,
                      transition: { duration: 0.4, ease: "easeOut" },
                    }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a href="#tjenester" className="cursor-pointer">
                      {tjeneste.navn}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div>
                <h2
                  className="font-heading text-2xl font-medium uppercase tracking-[0.2em]"
                  style={{ color: "var(--primary)" }}
                >
                  Utvalgt {year}
                </h2>
                <p className="mt-4 max-w-md text-lg tracking-tight text-foreground/95">
                  <a href="#tjenester" className="underline">
                    &ldquo;{config.tagline}&rdquo;
                  </a>{" "}
                  {config.underoverskrift}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#kontakt"
                    className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5"
                    style={{ backgroundColor: "var(--primary)" }}
                  >
                    Start et prosjekt
                  </a>
                  <a
                    href={`tel:${config.telefon.replace(/\s/g, "")}`}
                    className="inline-flex items-center rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
                  >
                    Ring {config.telefon}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
