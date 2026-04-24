import Image from "next/image"
import type { Config } from "@/types/config"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { PhoneIcon, ArrowRightIcon } from "./Icons"

export default function WowHeroSection({ config }: { config: Config }) {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
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

      {/* Left-heavy gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, rgba(2,6,23,0.82) 0%, rgba(2,6,23,0.60) 45%, rgba(2,6,23,0.15) 75%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-32">
        <div className="max-w-xl">
          <AnimatedGradientText className="mb-6 text-white">
            <span className="text-xs sm:text-sm font-medium">
              {config.sted} · {config.firmanavn}
            </span>
          </AnimatedGradientText>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-white mb-6">
            {config.tagline}
          </h1>

          {config.underoverskrift && (
            <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed mb-10">
              {config.underoverskrift}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-white font-semibold text-base transition-all hover:opacity-95 hover:-translate-y-0.5 shadow-xl"
              style={{ backgroundColor: "var(--accent)" }}
            >
              <span>Be om befaring</span>
              <ArrowRightIcon className="w-5 h-5" />
            </a>
            {config.telefon && (
              <a
                href={`tel:${config.telefon.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-base transition-all hover:bg-white/15 hover:-translate-y-0.5"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>{config.telefon}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
