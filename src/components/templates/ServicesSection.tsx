import type { Config } from "@/types/config"

export default function ServicesSection({ config }: { config: Config }) {
  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
          Hva vi tilbyr
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.tjenester.map((tjeneste, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700"
            >
              <div
                className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: "var(--primary)" }}
              >
                {i + 1}
              </div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                {tjeneste}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
