"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import type { Config } from "@/types/config"
import { WordsPullUp } from "@/components/ui/prisma-hero"

/**
 * HeroPrisma – stort display-tagline over full-bleed bilde i rounded kort.
 * Asterisk på siste ord, WordsPullUp-animasjon, grain overlay + gradient.
 * Passer kreative kollektiv, foto/video-studioer, kunstnere.
 */
export default function HeroPrisma({ config }: { config: Config }) {
  const displayColor = "#E1E0CC"

  return (
    <section className="h-screen w-full bg-black">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        {config.herobildeSrc && (
          <Image
            src={config.herobildeSrc}
            alt={`${config.firmanavn} – ${config.tagline}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70"
        />

        <div className="absolute bottom-0 left-0 right-0 px-4 pb-6 sm:px-6 md:px-10 md:pb-10">
          <div className="grid grid-cols-12 items-end gap-4">
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="font-heading font-medium leading-[0.9] tracking-[-0.05em] text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw]"
                style={{ color: displayColor }}
              >
                <WordsPullUp text={config.tagline} showAsterisk />
              </h1>
            </div>

            <div className="col-span-12 flex flex-col gap-5 pb-2 lg:col-span-4 lg:pb-10">
              {config.underoverskrift && (
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-xs sm:text-sm md:text-base"
                  style={{ color: `${displayColor}B3`, lineHeight: 1.3 }}
                >
                  {config.underoverskrift}
                </motion.p>
              )}

              <motion.a
                href="#kontakt"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group inline-flex items-center gap-2 self-start rounded-full py-1 pl-5 pr-1 text-sm font-medium text-black transition-all hover:gap-3 sm:text-base"
                style={{ backgroundColor: displayColor }}
              >
                Start et prosjekt
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight
                    className="h-4 w-4"
                    style={{ color: displayColor }}
                  />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
