import type { Config } from "@/types/config"
import { tjenesteIcons, ArrowRightIcon } from "./Icons"

export default function AboutSection({ config }: { config: Config }) {
  const om = config.omOss
  if (!om) return null

  const tittel = om.tittel ?? "Lokal ekspertise du kan stole på"
  const tekst = om.tekst ?? []
  const ctaTekst = om.ctaTekst ?? "Kontakt oss i dag"
  const punkter = om.punkter ?? []
  const isDark = config.theme === "dark"

  return (
    <section
      id="om-oss"
      className="py-20 sm:py-28 px-4 sm:px-6"
      style={{
        background: isDark
          ? "color-mix(in srgb, var(--primary) 10%, #0a0a0a)"
          : "color-mix(in srgb, var(--primary) 7%, #ffffff)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Venstre kolonne */}
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--primary)" }}
            >
              Om oss
            </p>
            <h2
              className="font-heading text-3xl sm:text-4xl font-bold leading-tight mb-8"
              style={{ color: isDark ? "#ffffff" : "#111827" }}
            >
              {tittel}
            </h2>

            {tekst.length > 0 && (
              <div className="space-y-5 mb-10">
                {tekst.map((avsnitt, i) => (
                  <p
                    key={i}
                    className="leading-relaxed text-base sm:text-lg"
                    style={{ color: isDark ? "rgba(255,255,255,0.70)" : "#374151" }}
                  >
                    {avsnitt}
                  </p>
                ))}
              </div>
            )}

            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all hover:brightness-110 active:scale-95"
              style={{ backgroundColor: "var(--primary)", color: "#fff" }}
            >
              {ctaTekst}
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Høyre kolonne — punkt-kort */}
          {punkter.length > 0 && (
            <div className="grid grid-cols-1 gap-3">
              {punkter.map((punkt, i) => {
                const Icon = punkt.ikon ? tjenesteIcons[punkt.ikon] : null
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-2xl transition-colors"
                    style={{
                      background: isDark
                        ? "color-mix(in srgb, var(--primary) 8%, rgba(255,255,255,0.04))"
                        : "color-mix(in srgb, var(--primary) 6%, #ffffff)",
                      border: isDark
                        ? "1px solid color-mix(in srgb, var(--primary) 20%, rgba(255,255,255,0.08))"
                        : "1px solid color-mix(in srgb, var(--primary) 22%, #e5e7eb)",
                    }}
                  >
                    {Icon && (
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)",
                          color: "var(--primary)",
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    )}
                    <div className="min-w-0">
                      <h3
                        className="font-heading font-semibold text-base mb-1"
                        style={{ color: isDark ? "#ffffff" : "#111827" }}
                      >
                        {punkt.tittel}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: isDark ? "rgba(255,255,255,0.55)" : "#6b7280" }}
                      >
                        {punkt.tekst}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
