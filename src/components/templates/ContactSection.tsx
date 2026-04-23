import type { Config } from "../../../clients/_template/config"

export default function ContactSection({ config }: { config: Config }) {
  return (
    <section id="kontakt" className="py-24 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Ta kontakt
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Vi svarer raskt og gir deg en uforpliktende vurdering.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${config.telefon.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-semibold text-lg"
            style={{ backgroundColor: "var(--primary)" }}
          >
            {config.telefon}
          </a>
          <a
            href={`mailto:${config.epost}`}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 font-semibold text-lg"
            style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
          >
            {config.epost}
          </a>
        </div>
        <p className="mt-8 text-gray-500 dark:text-gray-400 text-sm">
          {config.adresse}
        </p>
      </div>
    </section>
  )
}
