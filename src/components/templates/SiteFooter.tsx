import type { Config } from "@/types/config"
import { PhoneIcon, MailIcon, MapPinIcon } from "./Icons"

export default function SiteFooter({ config }: { config: Config }) {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: "var(--primary)" }}
                aria-hidden="true"
              >
                {config.firmanavn.charAt(0)}
              </span>
              <span className="font-heading font-semibold text-white">
                {config.firmanavn}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {config.underoverskrift ?? `${config.firmanavn} tilbyr lokale tjenester i ${config.sted}.`}
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Tjenester
            </h3>
            <ul className="space-y-2.5">
              {config.tjenester.map((t, i) => (
                <li key={i}>
                  <a
                    href="#tjenester"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {t.navn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${config.telefon.replace(/\s/g, "")}`}
                  className="inline-flex items-start gap-2.5 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <PhoneIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{config.telefon}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${config.epost}`}
                  className="inline-flex items-start gap-2.5 text-sm text-slate-400 hover:text-white transition-colors break-all"
                >
                  <MailIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{config.epost}</span>
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5 text-sm text-slate-400">
                <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{config.adresse}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {config.firmanavn}. Alle rettigheter reservert.
          </p>
          <p>
            Nettside av{" "}
            <a
              href="https://attentio.no"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Attentio AS
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
