"use client"

import Image from "next/image"
import { ArrowRight, Play, Target, Star } from "lucide-react"
import type { Config } from "@/types/config"

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
      <span className="text-xl font-bold text-white sm:text-2xl">{value}</span>
      <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium sm:text-xs">
        {label}
      </span>
    </div>
  )
}

/**
 * HeroGlass – premium byrå-hero med glassmorphism stats-kort, progress-bar og
 * pulserende aktiv-indikator. Passer til byråer, studioer, konsulentselskaper
 * som vil signalisere premium og moderne.
 */
export default function HeroGlass({ config }: { config: Config }) {
  const hovedStat = config.stats?.[0]
  const miniStats = config.stats?.slice(1, 4) ?? []

  return (
    <section
      id="top"
      className="relative w-full bg-zinc-950 text-white overflow-hidden font-sans"
    >
      <style>{`
        @keyframes fadeSlideIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .heroglass-fade { animation: fadeSlideIn 0.8s ease-out forwards; opacity: 0; }
        .heroglass-delay-100 { animation-delay: 0.1s; }
        .heroglass-delay-200 { animation-delay: 0.2s; }
        .heroglass-delay-300 { animation-delay: 0.3s; }
        .heroglass-delay-400 { animation-delay: 0.4s; }
        .heroglass-delay-500 { animation-delay: 0.5s; }
      `}</style>

      {config.herobildeSrc && (
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            maskImage:
              "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
            WebkitMaskImage:
              "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
          }}
        >
          <Image
            src={config.herobildeSrc}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 md:pt-32 md:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pt-8">
            <div className="heroglass-fade heroglass-delay-100">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md transition-colors hover:bg-white/10">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                  {config.sted} · {config.firmanavn}
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                </span>
              </div>
            </div>

            <h1
              className="heroglass-fade heroglass-delay-200 font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tighter leading-[0.95]"
              style={{
                maskImage:
                  "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
              }}
            >
              {config.tagline.split(" ").slice(0, -2).join(" ")}
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #fff 0%, #fff 50%, var(--accent) 100%)",
                }}
              >
                {config.tagline.split(" ").slice(-2).join(" ")}
              </span>
            </h1>

            {config.underoverskrift && (
              <p className="heroglass-fade heroglass-delay-300 max-w-xl text-lg text-zinc-400 leading-relaxed">
                {config.underoverskrift}
              </p>
            )}

            <div className="heroglass-fade heroglass-delay-400 flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-zinc-950 transition-all hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98]"
              >
                Start et prosjekt
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#tjenester"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20"
              >
                <Play className="w-4 h-4 fill-current" />
                Se tjenester
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 lg:mt-12">
            <div className="heroglass-fade heroglass-delay-500 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold tracking-tight text-white">
                      {hovedStat?.verdi ?? "150+"}
                    </div>
                    <div className="text-sm text-zinc-400">
                      {hovedStat?.etikett ?? "Prosjekter levert"}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Kundetilfredshet</span>
                    <span className="text-white font-medium">98%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800/50">
                    <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-white to-zinc-400" />
                  </div>
                </div>

                <div className="h-px w-full bg-white/10 mb-6" />

                {miniStats.length > 0 && (
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {miniStats.map((s, i) => (
                      <div key={i} className="contents">
                        <StatItem value={s.verdi} label={s.etikett} />
                        {i < miniStats.length - 1 && (
                          <div className="w-px h-full bg-white/10 mx-auto" />
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-8 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    TILGJENGELIG
                  </div>
                  {config.trustBadges?.slice(0, 2).map((b, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-300"
                    >
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
