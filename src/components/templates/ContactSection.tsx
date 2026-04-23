"use client"

import type { Config } from "@/types/config"
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "./Icons"

export default function ContactSection({ config }: { config: Config }) {
  return (
    <section
      id="kontakt"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p
            className="text-sm font-semibold uppercase tracking-wider mb-3"
            style={{ color: "var(--primary)" }}
          >
            Kontakt
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Be om en uforpliktende prat
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Fortell oss kort hva du trenger hjelp med. Vi svarer samme dag.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-14">
          <div className="space-y-4">
            <ContactCard
              icon={<PhoneIcon className="w-5 h-5" />}
              etikett="Ring direkte"
              verdi={config.telefon}
              href={`tel:${config.telefon.replace(/\s/g, "")}`}
              primary
            />
            <ContactCard
              icon={<MailIcon className="w-5 h-5" />}
              etikett="Send e-post"
              verdi={config.epost}
              href={`mailto:${config.epost}`}
            />
            <ContactCard
              icon={<MapPinIcon className="w-5 h-5" />}
              etikett="Besøksadresse"
              verdi={config.adresse}
            />
            {config.apningstider && (
              <ContactCard
                icon={<ClockIcon className="w-5 h-5" />}
                etikett="Åpningstider"
                verdi={config.apningstider}
              />
            )}
          </div>

          <form
            className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field
                label="Navn"
                name="navn"
                type="text"
                placeholder="Ola Nordmann"
                required
              />
              <Field
                label="Telefon"
                name="telefon"
                type="tel"
                placeholder="400 00 000"
                required
                autoComplete="tel"
              />
            </div>
            <Field
              label="E-post"
              name="epost"
              type="email"
              placeholder="din@epost.no"
              required
              autoComplete="email"
            />
            <div>
              <label
                htmlFor="melding"
                className="block text-sm font-semibold text-slate-900 mb-1.5"
              >
                Hva kan vi hjelpe med?
              </label>
              <textarea
                id="melding"
                name="melding"
                rows={4}
                placeholder="Beskriv kort hva du trenger…"
                className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:border-transparent focus:ring-2"
                style={{
                  // @ts-expect-error - CSS var
                  "--tw-ring-color": "var(--primary)",
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-white font-semibold transition-all hover:opacity-95 hover:-translate-y-0.5 shadow-md"
              style={{ backgroundColor: "var(--primary)" }}
            >
              Send forespørsel
            </button>
            <p className="text-xs text-slate-500 text-center">
              Vi svarer innen 24 timer på hverdager.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

function ContactCard({
  icon,
  etikett,
  verdi,
  href,
  primary,
}: {
  icon: React.ReactNode
  etikett: string
  verdi: string
  href?: string
  primary?: boolean
}) {
  const Inner = (
    <div className="flex items-start gap-4">
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
          primary ? "text-white" : ""
        }`}
        style={{
          backgroundColor: primary
            ? "var(--primary)"
            : "color-mix(in srgb, var(--primary) 10%, white)",
          color: primary ? "white" : "var(--primary)",
        }}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
          {etikett}
        </div>
        <div
          className={`font-semibold ${
            primary ? "text-lg text-slate-900" : "text-slate-900"
          }`}
        >
          {verdi}
        </div>
      </div>
    </div>
  )

  const base =
    "block p-5 rounded-xl bg-white border border-slate-200 transition-all"

  if (href) {
    return (
      <a
        href={href}
        className={`${base} hover:border-slate-300 hover:-translate-y-0.5 hover:shadow-sm`}
      >
        {Inner}
      </a>
    )
  }
  return <div className={base}>{Inner}</div>
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
  autoComplete,
}: {
  label: string
  name: string
  type: string
  placeholder?: string
  required?: boolean
  autoComplete?: string
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-slate-900 mb-1.5"
      >
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:border-transparent focus:ring-2"
        style={{
          // @ts-expect-error - CSS var
          "--tw-ring-color": "var(--primary)",
        }}
      />
    </div>
  )
}
