import type { Config } from "@/types/config"
import { PhoneIcon, CheckIcon, StarIcon, ArrowRightIcon } from "./Icons"

export default function HeroSection({ config }: { config: Config }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white border border-slate-200 shadow-sm">
            <div className="flex -space-x-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                  key={i}
                  className="w-4 h-4"
                  style={{ color: "var(--accent)" }}
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-medium text-slate-700">
              Lokalt forankret i {config.sted}
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-slate-900 mb-6">
            {config.tagline}
          </h1>

          {config.underoverskrift && (
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
              {config.underoverskrift}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href={`tel:${config.telefon.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-semibold text-base transition-all hover:opacity-95 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
              style={{ backgroundColor: "var(--primary)" }}
            >
              <PhoneIcon className="w-5 h-5" />
              <span>Ring {config.telefon}</span>
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white border-2 border-slate-200 text-slate-900 font-semibold text-base transition-all hover:border-slate-300 hover:-translate-y-0.5"
            >
              <span>Be om pristilbud</span>
              <ArrowRightIcon className="w-5 h-5" />
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {config.usps.map((usp, i) => (
              <li
                key={i}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-white flex-shrink-0"
                  style={{ backgroundColor: "var(--primary)" }}
                  aria-hidden="true"
                >
                  <CheckIcon className="w-3.5 h-3.5" />
                </span>
                {usp}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
