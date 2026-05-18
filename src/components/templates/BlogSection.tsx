import Image from "next/image"
import type { Config } from "@/types/config"

export default function BlogSection({ config }: { config: Config }) {
  if (!config.blogg || config.blogg.length === 0) return null

  return (
    <section id="blogg" className="py-20 sm:py-28 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p
            className="text-sm font-semibold uppercase tracking-wider mb-3"
            style={{ color: "var(--primary)" }}
          >
            Fra gården
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Nytt fra gården
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Følg med på sesong, slakt og hva som er i utvalget akkurat nå.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {config.blogg.map((post, i) => (
            <article
              key={i}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300"
            >
              {post.bilde && (
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.bilde}
                    alt={post.tittel}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center gap-3 mb-3 text-xs font-medium uppercase tracking-wider">
                  {post.kategori && (
                    <span
                      className="px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--primary) 12%, white)",
                        color: "var(--primary)",
                      }}
                    >
                      {post.kategori}
                    </span>
                  )}
                  <span className="text-slate-500">{post.dato}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">
                  {post.tittel}
                </h3>
                <p className="text-slate-600 leading-relaxed text-[15px] flex-1">
                  {post.utdrag}
                </p>
                <span
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-transform duration-200 group-hover:translate-x-0.5"
                  style={{ color: "var(--primary)" }}
                >
                  Les mer
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
