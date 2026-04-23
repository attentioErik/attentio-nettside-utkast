# Attentio Utkast – Kunnskapsbase

Denne filen er kilden til sannheten for hvordan repoet fungerer. Holdes synkronisert med `/docs`-siden i appen.

---

## Innhold

1. [Om prosjektet](#om-prosjektet)
2. [Kom i gang](#kom-i-gang)
3. [Lage et nytt utkast](#lage-et-nytt-utkast)
4. [Config-referanse](#config-referanse)
5. [Design-modi](#design-modi)
6. [Hero-varianter](#hero-varianter)
7. [Template-komponenter](#template-komponenter)
8. [UI-komponenter (shadcn / 21st.dev)](#ui-komponenter)
9. [Bildebibliotek](#bildebibliotek)
10. [Passord-system](#passord-system)
11. [Deploy](#deploy)
12. [Mappestruktur](#mappestruktur)
13. [Kodekonvensjoner](#kodekonvensjoner)
14. [Feilsøking](#feilsøking)

---

## Om prosjektet

Dette repoet brukes av Attentio AS til å lage raske, passordbeskyttede nettside-utkast for potensielle kunder. Hvert utkast er en egen rute som f.eks. `attentio-nettside-utkast.vercel.app/straume-roer`.

**Stack:** Next.js 16 App Router + TypeScript + Tailwind v4 + shadcn/ui + 21st.dev/MagicUI-komponenter.

**Prinsipper:**
- All kundedata bor i `clients/[slug]/config.ts`, aldri hardkodet i komponenter
- Obligatorisk UI/UX-pro-max-søk før nye utkast (design-intelligens)
- Mobile-first, touch-targets ≥ 44px, kontrast ≥ 4.5:1
- SVG-ikoner, aldri emoji
- Norsk tone: direkte, tillitsvekkende, lokalt forankret

---

## Kom i gang

### Dev-server

```bash
npm install          # kun første gang
npm run dev          # starter på http://localhost:3000
```

### Bygg for produksjon

```bash
npm run build
```

### Deploy

Push til `main` → Vercel deployer automatisk til `attentio-nettside-utkast.vercel.app`.

---

## Lage et nytt utkast

### Anbefalt: `/nytt-utkast`-kommandoen

```
/nytt-utkast Hansen Elektro AS, tlf 55 33 22 11, epost post@hansen-elektro.no, Bergen
```

Claude går gjennom disse stegene automatisk:

1. **Kjører ui-ux-pro-max-søk** for bransjen → henter farger, typografi, pattern
2. **Velger `designMode`** (`trust` / `wow`) basert på bransje + nøkkelord
3. **Velger `heroVariant`** basert på stemning brukeren ber om
4. **Plukker bilder** fra `src/lib/images.ts` (norske synonymer dekkes)
5. **Oppretter** `clients/[slug]/config.ts` + `page.tsx`
6. **Registrerer** i `src/app/[client]/page.tsx`, `src/lib/clients.ts` og `src/app/page.tsx`
7. **Bygger, committer, pusher**
8. **Rapporterer passord** (`[slug]_26`) og live-URL

### Manuelt

```bash
cp -r clients/_template clients/hansen-elektro
# rediger config.ts
# rediger page.tsx (fjern kommentarene fra template)
```

Så legg til i TRE filer:
```ts
// src/app/[client]/page.tsx
"hansen-elektro": () => import("../../../clients/hansen-elektro/page"),
```
```ts
// src/lib/clients.ts
import { config as hansenElektro } from "../../clients/hansen-elektro/config"
// ...legg til i registry-arrayet
```
```tsx
// src/app/page.tsx (landingsside)
import { config as hansenElektro } from "../../clients/hansen-elektro/config"
// ...legg til i klienter-arrayet
```

---

## Config-referanse

Alle felt i `clients/[slug]/config.ts`:

| Felt | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| `slug` | string | ✓ | URL-vennlig identifikator (kun lowercase + bindestrek) |
| `firmanavn` | string | ✓ | Offisielt firmanavn |
| `tagline` | string | ✓ | Hovedoverskrift (maks 8 ord) |
| `underoverskrift` | string | – | 1–2 setninger som utdyper |
| `bransje` | string | ✓ | Engelsk (brukes i ui-ux-pro-max-søk og bildebibliotek) |
| `telefon` | string | ✓ | Norsk format med mellomrom |
| `epost` | string | ✓ | |
| `adresse` | string | ✓ | |
| `sted` | string | ✓ | By / region, f.eks. "Bergen", "Sotra" |
| `apningstider` | string | – | F.eks. "Man–fre 08:00–16:00" |
| `passord` | string | – | Default: `[slug]_26` |
| `theme` | `"light"` / `"dark"` | ✓ | |
| `designMode` | `"trust"` / `"wow"` | – | Se [design-modi](#design-modi) |
| `heroVariant` | se [hero-varianter](#hero-varianter) | – | |
| `primærfarge` | hex | ✓ | Brand-hovedfarge |
| `accentfarge` | hex | ✓ | Kontrast/CTA-farge |
| `tjenester` | array | ✓ | 3 objekter med `navn`, `beskrivelse`, `ikon`, (`bilde`) |
| `usps` | string[] | ✓ | 3 korte salgsargumenter |
| `stats` | array | – | 3 objekter med `verdi`, `etikett` |
| `trustBadges` | string[] | – | 2–3 sertifiseringer |
| `logo` | string | – | URL eller blank |
| `herobildeSrc` | string | – | Hero-bilde-URL |
| `galleri` | string[] | – | 4–6 bilder (brukes i bento-grid) |
| `anmeldelser` | array | ✓ | Objekter med `navn`, `tekst`, `stjerner`, (`rolle`) |

---

## Design-modi

| Modus | Passer til | Kjennetegn |
|---|---|---|
| **Trust** | Håndverkere, advokater, tekniske tjenester | Tillitsvekkende, solid stats-rad, kontaktform, sobert |
| **Wow** | Skjønnhet, restaurant, premium merker, kreative | Full-bleed hero, animerte effekter, bento galleri, premium vibes |

Hvis ingen `heroVariant` er satt, velges `aurora` for wow-modus og `classic` for trust-modus.

---

## Hero-varianter

Alle heroes bruker `config.primærfarge` + `config.accentfarge` automatisk via CSS-variabler.

| `heroVariant` | Stemning | Passer til | Nøkkelord |
|---|---|---|---|
| `classic` | Trust default | Håndverkere | "enkel", "håndverker-standard" |
| `image` | Foto-dominert | Bilde-sterke bransjer | "stort bilde", "foto-dominert" |
| `aurora` | Magisk, gnistrende | Skjønnhet, premium | "wow-faktor", "magisk", "gnister" |
| `retrogrid` | Synthwave-retro | Tech, SaaS | "retro", "synthwave", "80-tall" |
| `flicker` | Teknisk puls | Moderne lokal service | "teknisk", "levende mønster" |
| `aero` | Kraftig industri | Miljø, fornybar, bygg | "bygg", "industri", "miljø" |
| `aero2` | Enterprise | Konsulent, enterprise | "enterprise", "avatar-social-proof" |
| `shapes` | Kreativ | Byråer, designfirma | "kreativt", "abstrakt" |
| `glass` | Premium glass | Byråer, studioer | "premium", "glass-look" |
| `carousel` | Visuell portfolio | Fotografer, portfolios | "portfolio", "karusell" |
| `parallax` | Scroll-zoom | Eiendom, reise | "eiendom", "arkitektur", "reise" |
| `shader` | Animert bakgrunn | Kreative merker | "shader", "animert bakgrunn" |

Live preview: `/hero-varianter`.

---

## Template-komponenter

Delte komponenter i `src/components/templates/`:

| Komponent | Beskrivelse |
|---|---|
| `NavBar` | Sticky, logo + nav + tlf-CTA, hamburger på mobil |
| `Hero` | Router som velger riktig hero-variant |
| `ServicesSection` | 3 kort med SVG-ikon eller bilde |
| `GallerySection` | Bento-grid galleri (vises kun hvis `config.galleri` har innhold) |
| `TrustSection` | Stats-rad, anmeldelser, trust badges |
| `ContactSection` | Kontaktkort + skjema |
| `SiteFooter` | 3-kolonne footer |
| `Icons.tsx` | 15 SVG-ikoner (ingen emoji) |

---

## UI-komponenter

### shadcn/ui base (`src/components/ui/`)
`button`, `card`, `badge`, `input`, `textarea`, `label`, `avatar`

### 21st.dev / MagicUI
`marquee`, `bento-grid`, `animated-gradient-text`, `number-ticker`, `shine-border`, `particles`, `meteors`, `dot-pattern`, `grid-pattern`, `retro-grid`, `flickering-grid`, `warp-background`, `aurora-text`, `sparkles-text`, `border-beam`, `animated-shiny-text`, `interactive-hover-button`, `shimmer-button`, `feature-carousel`

### Hente flere komponenter

```bash
npx shadcn@latest add "https://magicui.design/r/[komponent]"
npx shadcn@latest add "https://21st.dev/r/[bruker]/[komponent]"
```

---

## Bildebibliotek

`src/lib/images.ts` har kurerte Unsplash-URLer for 19 bransjer:

**Håndverk:** plumber, electrician, carpenter, painter, roofer
**Service:** restaurant, cafe, beauty, hairdresser, wellness, fitness
**Enterprise:** realtor, lawyer, tech, cleaning, gardener, energy, environment, industrial

### Bruk

```ts
import { plukkBilder } from "@/lib/images"
const bilder = plukkBilder("plumber", 3)
// => { hero: "...", services: ["...", "...", "..."], galleri: [...] }
```

### Norske synonymer

`rørlegger → plumber`, `elektriker → electrician`, `tømrer/snekker → carpenter`, `maler → painter`, `taktekker → roofer`, `frisør → hairdresser`, `skjønnhet → beauty`, `spa/massasje → wellness`, `trening → fitness`, `megler/eiendom → realtor`, `advokat → lawyer`, `renhold → cleaning`, `gartner/hage → gardener`, `energi/fornybar/kraft/sol/vind/powering → energy`, `bærekraft/miljø/klima/natur → environment`, `industri/fabrikk → industrial`.

### Remote-patterns

`next.config.ts` whitelister: `images.unsplash.com`, `source.unsplash.com`, `images.pexels.com`, `cdn.pixabay.com`.

---

## Passord-system

Alle klient-utkast gates automatisk av `src/middleware.ts`.

- **Standard passord:** `[slug]_26`
- Overstyres via `config.passord`
- Cookie varer 30 dager
- httpOnly, re-valideres mot faktisk passord hver request
- Feil passord → 401 med norsk feilmelding

### Flyt

```
GET /straume-roer (ingen cookie)
  → 307 /unlock/straume-roer
    → POST /api/unlock { slug, passord }
      → 200 + Set-Cookie attentio-unlock-straume-roer
    → 307 /straume-roer (med cookie)
      → 200 (middleware slipper gjennom)
```

### Nye klienter MÅ inn i `src/lib/clients.ts`

Ellers blir de hverken gated eller tilgjengelige.

---

## Deploy

Vercel er allerede koblet til GitHub-repoet. Push til `main` = ny deploy.

```bash
git add .
git commit -m "utkast: [slug]"
git push
```

Live på `attentio-nettside-utkast.vercel.app/[slug]` etter ~30 sekunder.

---

## Mappestruktur

```
.
├── CLAUDE.md                        # Workflow-regler for Claude
├── docs/KUNNSKAPSBASE.md            # Denne filen
├── clients/
│   ├── _template/                   # Kopieres ved nytt utkast
│   └── [slug]/
│       ├── config.ts                # All kundedata
│       └── page.tsx                 # Layout (router mot hero-variant)
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Landingsside med alle klienter
│   │   ├── docs/page.tsx            # Denne kunnskapsbasen i browser
│   │   ├── hero-varianter/          # Live preview av alle hero-varianter
│   │   ├── unlock/[slug]/           # Passord-gate
│   │   ├── api/unlock/              # Passord-validerings-endpoint
│   │   └── [client]/                # Dynamisk klient-ruting
│   ├── components/
│   │   ├── templates/               # Delte layout-komponenter + hero-varianter
│   │   └── ui/                      # shadcn/ui + 21st.dev/MagicUI
│   ├── lib/
│   │   ├── clients.ts               # Klient-register + passord-logikk
│   │   ├── images.ts                # Kuratert bildebibliotek
│   │   └── utils.ts                 # cn() helper
│   ├── middleware.ts                # Passord-gate middleware
│   └── types/config.ts              # Config-interface
└── next.config.ts
```

---

## Kodekonvensjoner

- Delte komponenter: `src/components/templates/`
- shadcn/21st.dev: `src/components/ui/`
- Bedriftsdata: alltid i `clients/[slug]/config.ts`
- Ikoner: SVG fra `Icons.tsx` eller `lucide-react`. **Aldri emoji.**
- Bilder: `next/image` med URL fra `lib/images.ts`
- Mobil-first (test alltid 375px)
- Touch-targets ≥ 44×44px, kontrast ≥ 4.5:1

### Norsk tone
- Direkte og tillitsvekkende, ikke selgende
- Alltid lokalt forankret (nevn sted)
- Unngå: "ledende", "best i klassen", "innovativ", "banebrytende"
- Bruk: konkrete tjenester, telefonnummer synlig, fastpris

### Commit-konvensjon
```
utkast: [slug]           # Nytt utkast
oppdater: [slug]         # Endringer i eksisterende utkast
komponent: [navn]        # Ny delt komponent
fix: [beskrivelse]       # Bugfix
```

---

## Feilsøking

**Bildet laster ikke**
→ Sjekk at hostname er whitelistet i `next.config.ts` `images.remotePatterns`.

**Passord fungerer ikke**
→ Verifiser at klienten er registrert i `src/lib/clients.ts`. Middleware sjekker denne listen.

**TypeScript-feil på config**
→ Hver klient-config må eksportere type via `export type { Config } from "@/types/config"`.

**Hero-variant viser ikke**
→ Sjekk at `heroVariant` er gyldig (se [hero-varianter](#hero-varianter)) og at `config.herobildeSrc` er satt hvis varianten krever bilde.

**Build feiler med `never` i types**
→ `as const` på klient-arrays kan kollapse til `never`. Type som `Config[]` eksplisitt.
