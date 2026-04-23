import type { Config } from "../../../clients/_template/config"

export default function HeroSection({ config }: { config: Config }) {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 py-24 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-medium uppercase tracking-widest mb-4 text-[var(--primary)]">
          {config.sted}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
          {config.tagline}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl">
          {config.firmanavn} hjelper deg med {config.tjenester.join(", ").toLowerCase()}.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={`tel:${config.telefon.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all hover:opacity-90"
            style={{ backgroundColor: "var(--primary)" }}
          >
            Ring oss: {config.telefon}
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 font-semibold text-lg transition-all hover:bg-gray-50 dark:hover:bg-gray-800"
            style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
          >
            Send en melding →
          </a>
        </div>
      </div>
    </section>
  )
}
