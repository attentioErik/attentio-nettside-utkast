"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

import type { Config } from "@/types/config"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

/**
 * HeroAero2 – stor serif-tagline venstre + avatar-gruppe + stats + fancy pill-CTA
 * med roterende pil. Passer til seriøse konsulent-/bærekraft-bedrifter.
 */
export default function HeroAero2({ config }: { config: Config }) {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] w-full items-end justify-center overflow-hidden"
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

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 text-white md:px-6 md:pb-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-8">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-heading text-5xl font-normal leading-[1.02] tracking-tighter text-white md:text-7xl">
              {config.tagline}
            </h1>

            {config.underoverskrift && (
              <p className="max-w-2xl font-light text-lg text-white/90 md:text-xl">
                {config.underoverskrift}
              </p>
            )}
          </div>

          <div className="flex flex-col items-start gap-7 md:items-end">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex -space-x-3">
                {config.anmeldelser.slice(0, 4).map((anm, i) => (
                  <Avatar
                    key={i}
                    className="size-12 border-2 border-[#e1fcad] transition-all duration-300"
                  >
                    <AvatarFallback
                      className="text-xs font-semibold text-slate-900"
                      style={{ backgroundColor: "var(--accent)" }}
                    >
                      {anm.navn
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="flex flex-col text-sm font-normal">
                <span className="text-base sm:text-lg font-semibold">
                  {config.stats?.[0]?.verdi ?? `${config.anmeldelser.length}+`}
                </span>
                <span className="text-white/70">
                  {config.stats?.[0]?.etikett ?? "Fornøyde kunder"}
                </span>
              </div>
            </div>

            <a
              href="#kontakt"
              className="group flex cursor-pointer items-center justify-center gap-0 rounded-full"
            >
              <span
                className="rounded-full bg-[#e1fcad] px-6 py-3 text-sm font-semibold text-slate-900 transition-colors duration-500 ease-in-out group-hover:bg-slate-900 group-hover:text-[#e1fcad]"
              >
                Start et prosjekt
              </span>
              <span
                className="relative flex h-fit cursor-pointer items-center overflow-hidden rounded-full bg-[#e1fcad] p-5 text-slate-900 transition-colors duration-500 ease-in-out group-hover:bg-slate-900 group-hover:text-[#e1fcad]"
              >
                <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
                <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
