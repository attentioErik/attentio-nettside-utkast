import Image from "next/image"
import type { Config } from "@/types/config"

export default function GallerySection({ config }: { config: Config }) {
  if (!config.galleri || config.galleri.length === 0) return null

  const bilder = config.galleri

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p
            className="text-sm font-semibold uppercase tracking-wider mb-3"
            style={{ color: "var(--primary)" }}
          >
            Galleri
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Smakebiter fra hverdagen vår
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-3">
          {bilder.slice(0, 6).map((src, i) => {
            const spans = [
              "col-span-2 row-span-2",
              "",
              "",
              "row-span-2",
              "",
              "col-span-2",
            ]
            return (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl group ${spans[i] ?? ""}`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
