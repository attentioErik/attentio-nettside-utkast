"use client"

import Image from "next/image"
import type { Config } from "@/types/config"
import { ArrowRightIcon } from "./Icons"

/**
 * HeroAero – inspirert av 21st.dev/cnippet_dev/aero-hero-3
 * Passer til store bedrifter innen miljø, fornybar energi, bærekraft, industri.
 * Full-bleed natur-/industri-bilde, stor sentrert serif-typografi,
 * subtile vertikale grid-linjer, rounded pill-CTA.
 */
export default function HeroAero({ config }: { config: Config }) {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white"
    >
      {config.herobildeSrc && (
        <Image
          src={config.herobildeSrc}
          alt={`${config.firmanavn} – ${config.tagline}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}

      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,6,23,0.45) 0%, rgba(2,6,23,0.35) 40%, rgba(2,6,23,0.55) 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "12.5% 100%",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-28 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium tracking-wider uppercase">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: "var(--accent)" }}
            aria-hidden="true"
          />
          {config.sted} · {config.firmanavn}
        </span>

        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.02] tracking-[-0.02em] mb-7 max-w-4xl mx-auto text-white">
          {config.tagline}
        </h1>

        {config.underoverskrift && (
          <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-10 max-w-xl mx-auto">
            {config.underoverskrift}
          </p>
        )}

        <a
          href="#kontakt"
          className="group inline-flex items-center gap-2 pl-5 pr-3 py-2.5 rounded-full bg-white text-slate-900 font-medium text-sm transition-all hover:bg-white/90 hover:-translate-y-0.5 shadow-xl"
        >
          <span>Start et prosjekt</span>
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center text-white transition-transform group-hover:translate-x-0.5"
            style={{ backgroundColor: "var(--primary)" }}
          >
            <ArrowRightIcon className="w-4 h-4" />
          </span>
        </a>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(2,6,23,0.7) 100%)",
        }}
        aria-hidden="true"
      />
    </section>
  )
}
