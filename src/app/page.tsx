import Image from "next/image"
import Link from "next/link"

import { config as straumeRoer } from "../../clients/straume-roer/config"
import { config as lumiereBeauty } from "../../clients/lumiere-beauty/config"
import { config as nordvindEnergi } from "../../clients/nordvind-energi/config"
import { config as amMurBetong } from "../../clients/am-mur-betong/config"
import { config as itreet } from "../../clients/itreet/config"

import { ArrowRightIcon, MapPinIcon } from "@/components/templates/Icons"
import type { Config } from "@/types/config"

const klienter: Config[] = [
  straumeRoer,
  lumiereBeauty,
  nordvindEnergi,
  amMurBetong,
  itreet,
]

export const metadata = {
  title: "Attentio – Nettside-utkast",
  description: "Oversikt over utkast laget av Attentio AS.",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white text-sm font-bold">
              A
            </span>
            <span className="font-heading font-semibold text-slate-900">
              Attentio
            </span>
          </div>
          <a
            href="https://www.attentio.no"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            attentio.no →
          </a>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">
          Utkast-portal
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4 leading-tight">
          Nettside-utkast
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
          Oversikt over utkast laget for potensielle kunder. Hvert utkast er
          passordbeskyttet.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {klienter.map((k) => (
            <Link
              key={k.slug}
              href={`/${k.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-slate-300 flex flex-col"
            >
              <div
                className="relative aspect-[16/10] overflow-hidden"
                style={{
                  backgroundColor: k.primærfarge,
                  backgroundImage: `linear-gradient(135deg, ${k.primærfarge} 0%, ${k.accentfarge} 100%)`,
                }}
              >
                {k.herobildeSrc ? (
                  <Image
                    src={k.herobildeSrc}
                    alt={k.firmanavn}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-heading text-5xl font-bold text-white/90">
                      {k.firmanavn.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-semibold uppercase tracking-wider text-slate-800">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Live
                </span>
              </div>

              <div className="flex-1 p-6 flex flex-col">
                <h2 className="font-heading text-xl font-semibold text-slate-900 mb-1 leading-tight">
                  {k.firmanavn}
                </h2>
                <p className="text-sm text-slate-500 mb-4 capitalize">
                  {k.bransje.split(" ")[0]}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-5">
                  <MapPinIcon className="w-3.5 h-3.5" />
                  <span>{k.sted}</span>
                </div>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-xs text-slate-400">
                    /{k.slug}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 transition-transform group-hover:translate-x-0.5">
                    Åpne utkast
                    <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>
            {klienter.length} utkast · Alle passordbeskyttet
          </p>
          <p>
            Laget av{" "}
            <a
              href="https://www.attentio.no"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-slate-900 underline-offset-4 hover:underline"
            >
              Attentio AS
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
