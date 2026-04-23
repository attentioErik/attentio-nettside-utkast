"use client"

import type { Config } from "@/types/config"
import { FeatureCarouselHero } from "@/components/ui/feature-carousel"

/**
 * HeroCarousel – 3D perspektiv-karusell med autoroterende bilder i senter.
 * Passer til visuelt drevne bransjer: fotografer, portfolios, eiendom,
 * reiseliv, produkter. Bruker config.galleri som bildekilde.
 */
export default function HeroCarousel({ config }: { config: Config }) {
  const images = (config.galleri ?? []).map((src) => ({
    src,
    alt: `${config.firmanavn} – ${config.tagline}`,
  }))

  const fallback =
    images.length === 0
      ? [
          {
            src: "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?w=900&auto=format&fit=crop&q=60",
            alt: "Fallback",
          },
          {
            src: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=900&auto=format&fit=crop&q=60",
            alt: "Fallback",
          },
          {
            src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=60",
            alt: "Fallback",
          },
        ]
      : images

  const title = (
    <>
      {config.tagline.split(" ").slice(0, -1).join(" ")}{" "}
      <span
        className="text-transparent bg-clip-text"
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--primary), var(--accent))",
        }}
      >
        {config.tagline.split(" ").slice(-1)}
      </span>
    </>
  )

  return (
    <div id="top">
      <FeatureCarouselHero
        title={title}
        subtitle={config.underoverskrift ?? ""}
        images={fallback}
        cta={
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-lg"
            style={{ backgroundColor: "var(--primary)" }}
          >
            Ta kontakt
          </a>
        }
      />
    </div>
  )
}
