"use client"

import type { Config } from "@/types/config"
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { PhoneIcon, ArrowRightIcon, StarIcon } from "./Icons"

export default function HeroFlickerGrid({ config }: { config: Config }) {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-white"
    >
      <FlickeringGrid
        className="absolute inset-0 z-0 [mask-image:radial-gradient(650px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color={config.primary}
        maxOpacity={0.35}
        flickerChance={0.12}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-7 rounded-full bg-white border border-slate-200 shadow-sm">
            <div className="flex -space-x-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                  key={i}
                  className="w-4 h-4"
                  style={{ color: "var(--accent)" }}
                />
              ))}
            </div>
            <AnimatedShinyText className="text-xs sm:text-sm font-medium">
              {config.sted} · Lokalt forankret
            </AnimatedShinyText>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-slate-900 mb-6">
            {config.tagline}
          </h1>

          {config.underoverskrift && (
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
              {config.underoverskrift}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${config.telefon.replace(/\s/g, "")}`}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-white font-semibold text-base transition-all hover:-translate-y-0.5 shadow-xl"
              style={{ backgroundColor: "var(--primary)" }}
            >
              <PhoneIcon className="w-5 h-5" />
              <span>Ring {config.telefon}</span>
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white border-2 border-slate-200 text-slate-900 font-semibold text-base transition-all hover:border-slate-300 hover:-translate-y-0.5"
            >
              <span>Be om pristilbud</span>
              <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
