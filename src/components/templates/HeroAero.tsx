import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { Config } from "@/types/config"

/**
 * HeroAero – full-bleed hero med 12-kolonners divider-grid, stort sentrert
 * display-tittel og animert arrow-CTA. Passer til miljø, industri, bygg,
 * premium tjenester som trenger kraftig visuelt uttrykk.
 */
export default function HeroAero({ config }: { config: Config }) {
  return (
    <section
      id="top"
      className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden bg-slate-950"
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

      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="absolute inset-0 z-10 size-full pointer-events-none">
        <div className="grid h-full w-full grid-cols-12 divide-x divide-white/20">
          <div className="col-span-1" />
          <div className="col-span-3" />
          <div className="col-span-4" />
          <div className="col-span-3" />
          <div className="col-span-1" />
        </div>
      </div>

      <div className="relative z-20 max-w-5xl px-6 text-center text-white">
        <h1 className="font-heading text-center text-5xl font-normal leading-[1.04] tracking-tight text-white md:text-6xl lg:text-8xl">
          {config.tagline}
        </h1>

        {config.underoverskrift && (
          <p className="mx-auto mt-6 mb-10 max-w-2xl text-center text-lg font-light text-white/90 md:text-xl">
            {config.underoverskrift}
          </p>
        )}

        <a
          href="#kontakt"
          className="group mx-auto flex w-fit cursor-pointer items-center justify-center gap-0"
        >
          <span
            className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-slate-950 duration-500 ease-in-out group-hover:bg-slate-900 group-hover:text-[var(--primary)] group-hover:transition-colors"
          >
            Start et prosjekt
          </span>
          <div className="relative flex h-fit items-center overflow-hidden rounded-full bg-[var(--primary)] p-5 text-slate-950 duration-500 ease-in-out group-hover:bg-slate-900 group-hover:text-[var(--primary)] group-hover:transition-colors">
            <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
            <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
          </div>
        </a>
      </div>
    </section>
  )
}
