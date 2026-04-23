import { notFound } from "next/navigation"
import { getClient } from "@/lib/clients"
import UnlockForm from "./UnlockForm"

export default async function UnlockPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const client = getClient(slug)
  if (!client) return notFound()

  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-white">
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-6">
              <span className="w-8 h-px bg-white/20" />
              Attentio
              <span className="w-8 h-px bg-white/20" />
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
              Nettside-utkast
            </h1>
            <p className="text-white/70 text-base leading-relaxed">
              Dette er et utkast laget for{" "}
              <span className="font-semibold text-white">{client.firmanavn}</span>.
              Siden er passordbeskyttet og kun ment for mottakeren.
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 shadow-2xl">
            <UnlockForm slug={client.slug} />
          </div>

          <p className="mt-8 text-center text-sm text-white/50">
            Laget av{" "}
            <a
              href="https://www.attentio.no"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 underline-offset-4 hover:underline"
            >
              Attentio AS
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
