"use client"

import type { Config } from "@/types/config"
import { RetroGrid } from "@/components/ui/retro-grid"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { PhoneIcon, ArrowRightIcon } from "./Icons"

export default function HeroRetroGrid({ config }: { config: Config }) {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-slate-950"
    >
      <RetroGrid className="z-0" angle={60} />

      <div
        className="absolute inset-0 z-0 opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 60%, color-mix(in srgb, var(--primary) 30%, transparent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-28 text-center">
        <div className="flex justify-center mb-7">
          <div className="group rounded-full border border-white/15 bg-white/5 backdrop-blur-sm transition-all ease-in hover:cursor-pointer hover:bg-white/10">
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1.5">
              <span className="text-xs sm:text-sm font-medium">
                {config.sted} · {config.firmanavn}
              </span>
            </AnimatedShinyText>
          </div>
        </div>

        <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.98] tracking-tight mb-6 max-w-4xl mx-auto">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #fff 0%, color-mix(in srgb, var(--primary) 30%, #fff) 100%)",
            }}
          >
            {config.tagline}
          </span>
        </h1>

        {config.underoverskrift && (
          <p className="text-lg sm:text-xl text-slate-300/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            {config.underoverskrift}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#kontakt"
            className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-white font-semibold text-base transition-all hover:-translate-y-0.5 shadow-xl"
            style={{ backgroundColor: "var(--primary)" }}
          >
            <span>Kom i gang</span>
            <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={`tel:${config.telefon.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-base transition-all hover:bg-white/15 hover:-translate-y-0.5"
          >
            <PhoneIcon className="w-5 h-5" />
            <span>{config.telefon}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
