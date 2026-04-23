"use client"

import { useState, useEffect } from "react"
import type { Config } from "@/types/config"
import { PhoneIcon, MenuIcon, CloseIcon } from "./Icons"

const lenker = [
  { href: "#tjenester", tekst: "Tjenester" },
  { href: "#om-oss", tekst: "Om oss" },
  { href: "#kontakt", tekst: "Kontakt" },
]

export default function NavBar({ config }: { config: Config }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm"
            : "bg-white border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a
            href="#top"
            className="flex items-center gap-2 font-heading font-semibold text-lg text-slate-900 hover:opacity-80 transition-opacity"
          >
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
              style={{ backgroundColor: "var(--primary)" }}
              aria-hidden="true"
            >
              {config.firmanavn.charAt(0)}
            </span>
            <span className="truncate max-w-[200px] sm:max-w-none">
              {config.firmanavn}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {lenker.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {l.tekst}
              </a>
            ))}
          </nav>

          <a
            href={`tel:${config.telefon.replace(/\s/g, "")}`}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white font-semibold text-sm transition-all hover:opacity-90 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              backgroundColor: "var(--primary)",
              // @ts-expect-error - CSS var for focus ring
              "--tw-ring-color": "var(--primary)",
            }}
          >
            <PhoneIcon className="w-4 h-4" />
            <span>{config.telefon}</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 -mr-2 text-slate-700 hover:text-slate-900"
            aria-label="Åpne meny"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Meny"
        >
          <div
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-xl flex flex-col">
            <div className="h-16 px-6 flex items-center justify-between border-b border-slate-200">
              <span className="font-heading font-semibold text-slate-900">
                {config.firmanavn}
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="p-2 -mr-2 text-slate-700 hover:text-slate-900"
                aria-label="Lukk meny"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 px-6 py-6 flex flex-col gap-1">
              {lenker.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-lg font-medium text-slate-900 hover:text-slate-600 transition-colors"
                >
                  {l.tekst}
                </a>
              ))}
            </nav>
            <div className="p-6 border-t border-slate-200">
              <a
                href={`tel:${config.telefon.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-white font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: "var(--primary)" }}
              >
                <PhoneIcon className="w-5 h-5" />
                <span>Ring {config.telefon}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
