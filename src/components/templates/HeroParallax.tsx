"use client"

import * as React from "react"
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion"
import type { Config } from "@/types/config"

interface SmoothScrollBackgroundProps {
  scrollHeight: number
  image: string
  initialClipPercentage: number
  finalClipPercentage: number
}

function SmoothScrollBackground({
  scrollHeight,
  image,
  initialClipPercentage,
  finalClipPercentage,
}: SmoothScrollBackgroundProps) {
  const { scrollY } = useScroll()

  const clipStart = useTransform(scrollY, [0, scrollHeight], [initialClipPercentage, 0])
  const clipEnd = useTransform(scrollY, [0, scrollHeight], [finalClipPercentage, 100])

  const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`

  const backgroundSize = useTransform(scrollY, [0, scrollHeight + 500], ["170%", "100%"])

  return (
    <motion.div
      className="sticky top-0 h-screen w-full bg-black"
      style={{ clipPath, willChange: "transform, opacity" }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </motion.div>
  )
}

/**
 * HeroParallax – parallax scroll-hero med clip-path zoom-effekt.
 * Passer til naturbaserte / visuelt drevne bransjer (eiendom, reise, arkitektur).
 * Krever mye scroll-høyde (scrollHeight=1500 gir ca 1500px scroll før seksjonen er ferdig).
 */
export default function HeroParallax({
  config,
  scrollHeight = 1200,
  initialClipPercentage = 25,
  finalClipPercentage = 75,
}: {
  config: Config
  scrollHeight?: number
  initialClipPercentage?: number
  finalClipPercentage?: number
}) {
  const image =
    config.herobildeSrc ||
    "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=1920&q=80"

  return (
    <div
      id="top"
      style={{ height: `calc(${scrollHeight}px + 100vh)` }}
      className="relative w-full"
    >
      <SmoothScrollBackground
        scrollHeight={scrollHeight}
        image={image}
        initialClipPercentage={initialClipPercentage}
        finalClipPercentage={finalClipPercentage}
      />

      {/* Fast tekst-overlay øverst */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 z-10 h-screen flex items-center">
        <div className="pointer-events-auto w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium tracking-wider uppercase text-white">
              {config.sted} · {config.firmanavn}
            </span>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-white mb-6 drop-shadow-lg">
              {config.tagline}
            </h1>

            {config.underoverskrift && (
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl drop-shadow">
                {config.underoverskrift}
              </p>
            )}

            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-white font-semibold text-base transition-all hover:-translate-y-0.5 shadow-xl"
              style={{ backgroundColor: "var(--primary)" }}
            >
              <span>Start et prosjekt</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
