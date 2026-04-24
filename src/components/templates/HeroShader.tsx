"use client"

import type { Config } from "@/types/config"
import { ShaderBackground } from "@/components/ui/hero-shader"
import { PhoneIcon, ArrowRightIcon } from "./Icons"

/**
 * HeroShader – animert MeshGradient-shader bakgrunn. Passer til byråer,
 * studioer, kreative merker og alt som vil ha et levende, moderne uttrykk
 * uten å støtte seg på foto. Farger plukkes fra config.
 */
export default function HeroShader({ config }: { config: Config }) {
  const colors = [
    "#000000",
    config.primary,
    "#ffffff",
    "#1e1b4b",
    config.accent,
  ] as const
  const wireframeColors = [
    "#000000",
    "#ffffff",
    config.primary,
    "#000000",
  ] as const

  return (
    <section id="top" className="relative">
      <ShaderBackground
        colors={colors}
        wireframeColors={wireframeColors}
        className="relative min-h-[92vh] w-full overflow-hidden"
      >
        <div className="relative z-20 flex min-h-[92vh] w-full items-end">
          <div className="mx-auto w-full max-w-6xl px-6 pb-16 sm:pb-20 md:pb-24">
            <div className="max-w-xl text-left">
              <div
                className="relative mb-5 inline-flex items-center rounded-full bg-white/5 px-3 py-1 backdrop-blur-sm"
                style={{ filter: "url(#glass-effect)" }}
              >
                <div className="absolute top-0 left-1 right-1 h-px rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span
                  className="relative z-10 inline-flex items-center gap-2 text-xs font-light text-white/90"
                >
                  <span
                    className="h-1.5 w-1.5 animate-pulse rounded-full"
                    style={{ backgroundColor: config.accent }}
                    aria-hidden="true"
                  />
                  {config.sted} · {config.firmanavn}
                </span>
              </div>

              <h1 className="font-heading mb-5 text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
                {config.tagline}
              </h1>

              {config.underoverskrift && (
                <p className="mb-7 text-sm font-light leading-relaxed text-white/70 md:text-base">
                  {config.underoverskrift}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#kontakt"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-all duration-200 hover:bg-white/90"
                >
                  <span>Start et prosjekt</span>
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={`tel:${config.telefon.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-transparent px-7 py-3 text-sm font-medium text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10"
                >
                  <PhoneIcon className="h-4 w-4" />
                  <span>{config.telefon}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </ShaderBackground>
    </section>
  )
}
