import type { Config } from "@/types/config"
import { StarIcon, ShieldIcon } from "./Icons"

export default function TrustSection({ config }: { config: Config }) {
  return (
    <section
      id="om-oss"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-slate-50 border-y border-slate-200"
    >
      <div className="max-w-6xl mx-auto">
        {config.stats && config.stats.length > 0 && (
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-16 sm:mb-20 pb-14 border-b border-slate-200">
            {config.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className="font-heading text-3xl sm:text-5xl font-bold mb-1 sm:mb-2 tabular-nums"
                  style={{ color: "var(--primary)" }}
                >
                  {stat.verdi}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-600 uppercase tracking-wider">
                  {stat.etikett}
                </div>
              </div>
            ))}
          </div>
        )}

        {config.anmeldelser.length > 0 && (
          <div className="mb-16 sm:mb-20">
            <div className="max-w-2xl mb-12">
              <p
                className="text-sm font-semibold uppercase tracking-wider mb-3"
                style={{ color: "var(--primary)" }}
              >
                Kundeomtaler
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Hva kundene våre sier
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {config.anmeldelser.map((anm, i) => (
                <blockquote
                  key={i}
                  className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm"
                >
                  <div
                    className="flex gap-0.5 mb-4"
                    aria-label={`${anm.stjerner} av 5 stjerner`}
                  >
                    {Array.from({ length: anm.stjerner }).map((_, j) => (
                      <StarIcon
                        key={j}
                        className="w-5 h-5"
                        style={{ color: "var(--accent)" }}
                      />
                    ))}
                  </div>
                  <p className="text-slate-800 leading-relaxed text-lg mb-5">
                    &ldquo;{anm.tekst}&rdquo;
                  </p>
                  <footer className="flex items-center gap-3 pt-5 border-t border-slate-100">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0"
                      style={{ backgroundColor: "var(--primary)" }}
                      aria-hidden="true"
                    >
                      {anm.navn.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">
                        {anm.navn}
                      </div>
                      {anm.rolle && (
                        <div className="text-xs text-slate-500">{anm.rolle}</div>
                      )}
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        )}

        {config.trustBadges && config.trustBadges.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {config.trustBadges.map((badge, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700"
              >
                <ShieldIcon
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "var(--primary)" }}
                />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
