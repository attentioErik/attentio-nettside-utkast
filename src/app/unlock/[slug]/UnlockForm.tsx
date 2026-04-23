"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"

export default function UnlockForm({ slug }: { slug: string }) {
  const router = useRouter()
  const [passord, setPassord] = useState("")
  const [feil, setFeil] = useState<string | null>(null)
  const [pending, startTransition] = useTransition()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFeil(null)

    const res = await fetch("/api/unlock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, passord }),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => null)
      setFeil(data?.error ?? "Noe gikk galt")
      return
    }

    startTransition(() => {
      router.replace(`/${slug}`)
      router.refresh()
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="passord"
          className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2"
        >
          Passord
        </label>
        <input
          id="passord"
          type="password"
          value={passord}
          onChange={(e) => setPassord(e.target.value)}
          required
          autoFocus
          autoComplete="off"
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/15 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-colors"
          placeholder="Skriv inn passord"
        />
      </div>

      {feil && (
        <p className="text-sm text-rose-400" role="alert">
          {feil}
        </p>
      )}

      <button
        type="submit"
        disabled={pending || !passord}
        className="w-full px-4 py-3 rounded-lg bg-white text-slate-900 font-semibold transition-all hover:bg-white/90 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {pending ? "Åpner…" : "Åpne utkast"}
      </button>

      <p className="text-xs text-white/40 text-center pt-2">
        Har du ikke passord? Kontakt oss på{" "}
        <a
          href="mailto:erik@attentio.no"
          className="text-white/70 hover:text-white underline-offset-4 hover:underline"
        >
          erik@attentio.no
        </a>
      </p>
    </form>
  )
}
