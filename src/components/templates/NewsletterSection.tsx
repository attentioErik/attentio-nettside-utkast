"use client"

import type { Config } from "@/types/config"
import { MailIcon } from "./Icons"

export default function NewsletterSection({ config }: { config: Config }) {
  if (!config.nyhetsbrev) return null

  const tittel = config.nyhetsbrev.tittel ?? "Få beskjed når nytt kjøtt er klart"
  const tekst =
    config.nyhetsbrev.tekst ??
    "Meld deg på nyhetsbrevet, så sier vi fra når vi har nytt i utvalget og når gårdsutsalget er åpent."

  return (
    <section id="nyhetsbrev" className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
      <div
        className="max-w-5xl mx-auto rounded-3xl px-6 py-14 sm:px-14 sm:py-20 text-center"
        style={{
          backgroundColor: "color-mix(in srgb, var(--primary) 8%, white)",
          border: "1px solid color-mix(in srgb, var(--primary) 18%, white)",
        }}
      >
        <div
          className="w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white"
          style={{ backgroundColor: "var(--primary)" }}
        >
          <MailIcon className="w-7 h-7" />
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
          {tittel}
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-9">
          {tekst}
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="nyhetsbrev-epost" className="sr-only">
            E-postadresse
          </label>
          <input
            id="nyhetsbrev-epost"
            name="epost"
            type="email"
            required
            autoComplete="email"
            placeholder="din@epost.no"
            className="flex-1 px-4 py-3.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:border-transparent focus:ring-2"
            style={{
              // @ts-expect-error - CSS var
              "--tw-ring-color": "var(--primary)",
            }}
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-white font-semibold transition-all hover:opacity-95 hover:-translate-y-0.5 shadow-md"
            style={{ backgroundColor: "var(--primary)" }}
          >
            Meld meg på
          </button>
        </form>
        <p className="text-xs text-slate-500 mt-4">
          Ingen spam – kun beskjed når det er noe nytt. Du kan melde deg av når
          som helst.
        </p>
      </div>
    </section>
  )
}
