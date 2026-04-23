import type { Config } from "../../../clients/_template/config"

export default function TrustSection({ config }: { config: Config }) {
  return (
    <section className="py-24 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {config.usps.map((usp, i) => (
            <div key={i} className="text-center">
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: "var(--primary)" }}
              >
                ✓
              </div>
              <p className="font-medium text-gray-900 dark:text-white">{usp}</p>
            </div>
          ))}
        </div>

        {config.anmeldelser.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">
              Hva kunder sier
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {config.anmeldelser.map((anm, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                >
                  <div className="flex mb-3">
                    {Array.from({ length: anm.stjerner }).map((_, j) => (
                      <span key={j} style={{ color: "var(--accent)" }}>★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    &ldquo;{anm.tekst}&rdquo;
                  </p>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">
                    — {anm.navn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
