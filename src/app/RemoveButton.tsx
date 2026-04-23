"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"

interface Props {
  slug: string
  firmanavn: string
}

export default function RemoveButton({ slug, firmanavn }: Props) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [confirmText, setConfirmText] = useState("")
  const [feil, setFeil] = useState<string | null>(null)
  const [pending, startTransition] = useTransition()
  const [loading, setLoading] = useState(false)

  async function handleRemove() {
    setFeil(null)
    setLoading(true)
    try {
      const res = await fetch("/api/remove-client", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        setFeil(data?.error ?? "Noe gikk galt")
        setLoading(false)
        return
      }
      setOpen(false)
      startTransition(() => {
        router.refresh()
      })
    } catch (e) {
      setFeil(e instanceof Error ? e.message : "Ukjent feil")
      setLoading(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setOpen(true)
          setConfirmText("")
          setFeil(null)
        }}
        className="absolute top-3 right-3 z-10 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-slate-700 hover:bg-rose-50 hover:text-rose-600 transition-colors shadow-sm opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-rose-400"
        aria-label={`Fjern ${firmanavn}`}
        title="Fjern prosjekt (kun i dev)"
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 6h18" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M10 11v6" />
          <path d="M14 11v6" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`fjern-title-${slug}`}
          onClick={(e) => {
            if (!loading && !pending) setOpen(false)
            e.stopPropagation()
          }}
        >
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 text-rose-600">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <h3
                  id={`fjern-title-${slug}`}
                  className="font-heading text-lg font-semibold text-slate-900"
                >
                  Fjern {firmanavn}?
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Dette sletter{" "}
                  <code className="text-xs px-1.5 py-0.5 bg-slate-100 rounded">
                    clients/{slug}
                  </code>{" "}
                  og fjerner alle referanser. Handlingen committes til git automatisk.
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-5">
              <label
                htmlFor={`confirm-${slug}`}
                className="block text-sm text-slate-700"
              >
                Skriv <code className="text-xs px-1.5 py-0.5 bg-slate-100 rounded font-mono">{slug}</code> for å bekrefte:
              </label>
              <input
                id={`confirm-${slug}`}
                type="text"
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
                autoFocus
                autoComplete="off"
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                placeholder={slug}
                disabled={loading || pending}
              />
            </div>

            {feil && (
              <p className="text-sm text-rose-600 mb-3" role="alert">
                {feil}
              </p>
            )}

            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                disabled={loading || pending}
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors disabled:opacity-50"
              >
                Avbryt
              </button>
              <button
                type="button"
                onClick={handleRemove}
                disabled={confirmText !== slug || loading || pending}
                className="px-4 py-2 rounded-lg text-sm font-semibold bg-rose-600 text-white hover:bg-rose-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {loading ? "Fjerner…" : pending ? "Oppdaterer…" : "Fjern prosjekt"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
