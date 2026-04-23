# Attentio – Utkast-workflow

## Hvem er vi
Attentio AS er et norsk digitalbyrå i Bergen. Dette repoet brukes til å lage raske nettside-utkast for potensielle kunder. Utkast deles som live URL-er via Vercel.

---

## OBLIGATORISK: Kjør `ui-ux-pro-max` FØRST

Før du lager eller redesigner et utkast, **må** du hente design-intelligens fra ui-ux-pro-max-skillet:

```bash
python3 /Users/erikjohnsen/.claude/skills/ui-ux-pro-max/scripts/search.py "[bransje] local service trust conversion" --design-system -p "[firmanavn]"
```

Bruk resultatene direkte. **Ikke gjett farger, fonter eller layout.**

---

## To design-modi

Velg basert på bransje og brukerens ønsker:

| Modus | `designMode` | Passer til | Kjennetegn |
|---|---|---|---|
| **Trust** | `"trust"` | Rørlegger, elektriker, advokat, eiendomsmegler, tekniske tjenester | Tillitsvekkende navy-blå, solid stats-rad, kontaktform, sobert footer |
| **Wow** | `"wow"` | Skjønnhet, restaurant, hotell, premium merker, kreative tjenester | Full-bleed hero-bilde, animert gradient, bento galleri, slankere fargepalett |

Hvis brukeren ber om "wow-faktor", "visuelt slående", "premium" el., bruk `"wow"`.

Begge modi kan kombineres med **alle 21st.dev / MagicUI-komponenter** som er installert (`src/components/ui/`). Hent flere via `npx shadcn@latest add <url>`.

---

## Nytt utkast – én kommando

```
/nytt-utkast Hansen Elektro AS, tlf 55 33 22 11, epost post@hansen-elektro.no, Bergen
```

Claude:
1. Kjører `ui-ux-pro-max --design-system` for bransjen
2. Velger `"trust"` eller `"wow"` basert på bransje/ord
3. Plukker bilder fra `src/lib/images.ts` (eller søker Unsplash)
4. Installerer ekstra 21st.dev-komponenter ved behov
5. Oppretter filer, bygger, committer, pusher

---

## Installerte komponenter

### Delte templates (`src/components/templates/`)
- `NavBar` – sticky, logo + nav + tlf-CTA, hamburger på mobil
- `HeroSection` – trust-modus hero (gradient bakgrunn, dual CTA)
- `WowHeroSection` – full-bleed hero-bilde med animert gradient-badge
- `ServicesSection` – 3 kort, SVG-ikon ELLER bilde + beskrivelse
- `GallerySection` – bento-grid galleri (kun med `config.galleri`)
- `TrustSection` – stats, anmeldelser, trust badges
- `ContactSection` – kontaktkort + skjema
- `SiteFooter` – 3-kolonne
- `Icons.tsx` – 15 SVG-ikoner (ingen emoji)

### shadcn/ui base (`src/components/ui/`)
- `button`, `card`, `badge`, `input`, `textarea`, `label`

### 21st.dev / MagicUI (wow-modus)
- `marquee` – scrolle-effekt for logoer/tekst
- `bento-grid` – asymmetriske grid-kort
- `animated-gradient-text` – animert gradient-badge
- `number-ticker` – animert stat-telling
- `shine-border` – border med shine-effekt

Hent flere:
```bash
npx shadcn@latest add "https://magicui.design/r/[komponent]"
npx shadcn@latest add "https://21st.dev/r/[bruker]/[komponent]"
```

---

## Bildebibliotek

Kuratert Unsplash-bibliotek i `src/lib/images.ts`. Dekker:
- plumber, electrician, carpenter, painter, roofer
- restaurant, cafe, beauty, hairdresser, wellness, fitness
- realtor, lawyer, tech, cleaning, gardener

Norske synonymer matches automatisk (rørlegger → plumber, frisør → hairdresser, osv.).

```ts
import { plukkBilder } from "@/lib/images"
const bilder = plukkBilder("plumber", 3)
// { hero, services: [...], galleri? }
```

Fallback for ukjent bransje: `genericHero(query)` bruker Unsplash Source.

Remote-mønstre er whitelisted i `next.config.ts`: `images.unsplash.com`, `source.unsplash.com`, `images.pexels.com`, `cdn.pixabay.com`.

---

## Designsystem (defaults)

### Trust & Authority (lokal service)
- Primær: `#1E40AF` (trust-blå), Aksent: `#EA580C` (oransje)
- Typografi: Rubik + Nunito Sans
- Pattern: Hero m/credibility → Proof → Solutions → CTA

### Soft UI Evolution (skjønnhet/wellness)
- Primær: `#EC4899` (rosa), Aksent: `#8B5CF6` (lavendel)
- Typografi: Lora + Raleway (valgfritt – Rubik/Nunito Sans fungerer også)
- Pattern: Hero-Centric + Social Proof

Kjør `ui-ux-pro-max` for din spesifikke bransje for å få riktige farger.

---

## Norsk tone og stil

- Direkte og tillitsvekkende – ikke selgende eller overspent
- Alltid lokalt forankret: nevn sted, region eller "Bergen-basert"
- Unngå: "ledende", "best i klassen", "innovativ", "banebrytende"
- Bruk: konkrete tjenester, telefonnummer synlig, fastpris/uforpliktende

---

## Kodekonvensjoner

- Stack: Next.js App Router + TypeScript + Tailwind CSS v4 + shadcn/ui
- Delte komponenter: `src/components/templates/`
- Shadcn / 21st.dev-komponenter: `src/components/ui/`
- Bedriftsdata: alltid i `clients/[slug]/config.ts`
- Tilpass alltid via config – ikke hardkod tekst i komponenter
- Ikoner: SVG fra `Icons.tsx` eller lucide-react. **Aldri emoji.**
- Bilder: `next/image` med URL fra `lib/images.ts`
- Mobilvisning prioriteres (test alltid ved 375px)
- Touch-targets min 44×44px, kontrast ≥ 4.5:1
- CSS-variabler: `--primary` og `--accent` settes på `page.tsx`-root fra config

---

## Commit-konvensjon

```
utkast: [slug]           # Nytt utkast
oppdater: [slug]         # Endringer i eksisterende utkast
komponent: [navn]        # Ny delt komponent
fix: [beskrivelse]       # Bugfix
```
