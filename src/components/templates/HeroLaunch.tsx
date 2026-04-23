"use client"

import Image from "next/image"
import type { Config } from "@/types/config"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { ArrowRightIcon, PhoneIcon } from "./Icons"

const transitionVariants = {
  item: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { type: "spring" as const, bounce: 0.3, duration: 1.5 },
    },
  },
}

/**
 * HeroLaunch – produktlansering-stil (tailark/hero-section-2). Sentrert
 * headline, dobbel CTA, produktbilde i glass-kort under. Blur-in reveal
 * via AnimatedGroup. Passer SaaS, tech, produktlansering.
 */
export default function HeroLaunch({ config }: { config: Config }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-background pt-28 pb-20 text-foreground"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 size-full"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 100%, transparent 0%, var(--background) 75%)",
        }}
      />
      <div className="mx-auto max-w-5xl px-6">
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: { staggerChildren: 0.05, delayChildren: 0.3 },
              },
            },
            ...transitionVariants,
          }}
        >
          <span
            className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--primary)" }}
          >
            {config.sted} · {config.firmanavn}
          </span>
          <h1 className="font-heading mt-2 max-w-3xl text-balance text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl">
            {config.tagline}
          </h1>
          {config.underoverskrift && (
            <p className="mt-7 max-w-2xl text-pretty text-lg text-foreground/75">
              {config.underoverskrift}
            </p>
          )}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <div className="rounded-[14px] border border-foreground/10 bg-foreground/5 p-0.5">
              <a
                href="#kontakt"
                className="group inline-flex h-11 items-center gap-2 rounded-xl px-5 text-base font-medium text-white shadow-sm transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--primary)" }}
              >
                <span>Start et prosjekt</span>
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
            <a
              href={`tel:${config.telefon.replace(/\s/g, "")}`}
              className="inline-flex h-11 items-center gap-2 rounded-xl px-5 text-base font-medium text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              <PhoneIcon className="h-4 w-4" />
              <span>{config.telefon}</span>
            </a>
          </div>
        </AnimatedGroup>

        {config.herobildeSrc && (
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.6 },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className="relative mt-16 overflow-hidden px-2 md:mt-24">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent from-35% to-background"
              />
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-foreground/10 bg-background p-3 shadow-xl shadow-foreground/5 ring-1 ring-foreground/5">
                <div className="relative aspect-[15/8] overflow-hidden rounded-xl">
                  <Image
                    src={config.herobildeSrc}
                    alt={`${config.firmanavn} – ${config.tagline}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </AnimatedGroup>
        )}
      </div>
    </section>
  )
}
