"use client"

import type { Config } from "@/types/config"
import { MinimalistHero } from "@/components/ui/minimalist-hero"

/**
 * HeroMinimalist – three-column minimalist layout. Venstre: paragraph
 * + "Les mer". Senter: portrett/bilde i stor brand-farget sirkel.
 * Høyre: stor display-tittel. Passer portefølje, fashion, arkitekt.
 */
export default function HeroMinimalist({ config }: { config: Config }) {
  const tagline = config.tagline.trim()
  const parts = splitHeadline(tagline)

  return (
    <MinimalistHero
      logoText={config.firmanavn}
      navLinks={[]}
      mainText={config.underoverskrift ?? ""}
      readMoreLink="#tjenester"
      imageSrc={config.herobildeSrc || FALLBACK_IMAGE}
      imageAlt={`${config.firmanavn} – ${config.tagline}`}
      overlayText={{ part1: parts.part1, part2: parts.part2 }}
      socialLinks={[]}
      locationText={config.sted}
      circleColor={config.primary}
      hideHeader
      hideFooter={false}
    />
  )
}

function splitHeadline(tagline: string) {
  if (!tagline) return { part1: "", part2: "" }
  const words = tagline.split(/\s+/).filter(Boolean)
  if (words.length <= 1) return { part1: words[0] ?? "", part2: "" }
  const mid = Math.ceil(words.length / 2)
  return {
    part1: words.slice(0, mid).join(" "),
    part2: words.slice(mid).join(" "),
  }
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1603217192634-61068e4d4bf9?auto=format&fit=crop&w=800&q=80"
