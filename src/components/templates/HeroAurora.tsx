"use client"

import type { Config } from "@/types/config"
import { Particles } from "@/components/ui/particles"
import { Meteors } from "@/components/ui/meteors"
import { AuroraText } from "@/components/ui/aurora-text"
import { SparklesText } from "@/components/ui/sparkles-text"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { PhoneIcon, ArrowRightIcon } from "./Icons"

export default function HeroAurora({ config }: { config: Config }) {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-slate-950"
    >
      <Particles
        className="absolute inset-0 z-0"
        quantity={140}
        ease={80}
        color="#ffffff"
        refresh={false}
      />
      <Meteors number={20} className="z-0" />

      <div
        className="absolute inset-0 z-0 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 30% 30%, color-mix(in srgb, var(--accent) 35%, transparent) 0%, transparent 70%), radial-gradient(50% 40% at 80% 70%, color-mix(in srgb, var(--primary) 35%, transparent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-28">
        <div className="max-w-4xl">
          <div className="inline-flex mb-7">
            <div className="group rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-white/10">
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1.5 transition ease-out hover:text-white/90">
                <span className="text-xs sm:text-sm font-medium">
                  {config.sted} · {config.firmanavn}
                </span>
              </AnimatedShinyText>
            </div>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-white mb-6">
            <SparklesText sparklesCount={6} colors={{ first: "#ffffff", second: config.accent }}>
              <AuroraText
                colors={[
                  config.primary,
                  config.accent,
                  "#ffffff",
                  config.primary,
                ]}
              >
                {config.tagline}
              </AuroraText>
            </SparklesText>
          </h1>

          {config.underoverskrift && (
            <p className="text-lg sm:text-xl text-slate-300/90 leading-relaxed mb-10 max-w-2xl">
              {config.underoverskrift}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#kontakt"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-white font-semibold text-base transition-all hover:-translate-y-0.5 shadow-xl shadow-black/30"
              style={{ backgroundColor: "var(--accent)" }}
            >
              <span>Book time</span>
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
      </div>
    </section>
  )
}
