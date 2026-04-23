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

## Hero-varianter (`config.heroVariant`)

Live preview av alle varianter: **[`/hero-varianter`](http://localhost:3000/hero-varianter)** (kjør `npm run dev`).

Beskriv stemningen du vil ha – Claude velger riktig variant basert på tabellen.

| `heroVariant` | Stemning / passer til | Nøkkelord å be om |
|---|---|---|
| `classic` | Trust-modus default – gradient bakgrunn + stjernebadge + dobbel CTA | "enkel", "tillitsvekkende", "håndverker-standard" |
| `image` | Full-bleed hero-bilde med gradient-overlay | "stort bilde", "foto-dominert" |
| `aurora` | Partikler + meteorer + aurora-gradient tekst + sparkles (dark) | "wow-faktor", "magisk", "gnister", "flammer" |
| `retrogrid` | Synthwave retro grid, sentrert (dark) | "retro", "synthwave", "80-tall" |
| `flicker` | Flickerende prikkegrid i brand-farge (light) | "teknisk", "levende mønster" |
| `aero` | 12-kolonners divider-grid + stort sentrert display + animert arrow-CTA | "bygg", "industri", "miljø", "kraftig uttrykk" |
| `aero2` | Venstre-justert serif + avatar-stats + rotating-arrow CTA | "enterprise", "avatar-social-proof" |
| `shapes` | Elegante floating gradient-shapes (dark) | "kreativt", "byrå", "abstrakt" |
| `glass` | Glassmorphism stats-kort + progress-bar | "premium", "studio", "glass-look" |
| `carousel` | 3D auto-roterende bildekarusell | "portfolio", "fotograf", "karusell" |
| `parallax` | Parallax clip-path zoom på scroll | "eiendom", "arkitektur", "reise" |
| `shader` | Animert MeshGradient-shader + glass-badge + bottom-left-layout | "shader", "animert bakgrunn", "levende", "uten foto" |
| `launch` | SaaS-stil – sentrert headline + blur-in reveal + produktbilde i glass-kort | "SaaS", "produkt-lansering", "tech", "app-screenshot" |
| `prisma` | Redaksjonell – stort display over full-bleed bilde, asterisk, grain-overlay | "redaksjonell", "magasin", "kollektiv", "foto-studio" |
| `minimalist` | Tre-kolonners minimalist – portrett i brand-farget sirkel + massive headline | "minimalistisk", "portefølje", "fashion", "arkitekt" |
| `fashion` | To-kolonners boutique – portrett med glow + tjeneste-liste + sesong-label | "boutique", "fashion", "atelier", "skjønnhet" |

Hvordan velge:
1. Beskriv stemningen ("jeg vil ha shader-bakgrunn", "noe med flammer", "stort bilde med grid-linjer")
2. Se `/hero-varianter` for live preview mens du utvikler
3. Claude setter `heroVariant: "..."` i `config.ts`

Alle hero-varianter bruker `config.primærfarge` + `config.accentfarge` automatisk via CSS-variabler.

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
- `hero-shader` – MeshGradient-bakgrunn (driver `shader`-hero)
- `animated-group` – stagger/blur-in reveal-wrapper (driver `launch`-hero)
- `prisma-hero` – `WordsPullUp` + `WordsPullUpMultiStyle` primitiver
- `minimalist-hero` – props-basert tre-kolonners hero (driver `minimalist`-hero)

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

## Fontbibliotek

Alle fontene er lastet via `next/font/google` i [src/app/layout.tsx](src/app/layout.tsx) og eksponert som CSS-variabler + Tailwind-utilities i `globals.css`.

**Default** (hele appen):
- `--font-heading` → Rubik (display/overskrifter)
- `--font-body` → Nunito Sans (brødtekst)
- `--font-sans` → Geist (UI/systemfont)

**Tilleggsfonter** (tilgjengelig som `font-inter`, `font-playfair`, osv.):

| Tailwind-klasse | CSS-variabel | Font | Bruk |
|---|---|---|---|
| `font-inter` | `var(--font-inter)` | Inter | Moderne SaaS, tech, produkt-lansering |
| `font-playfair` | `var(--font-playfair)` | Playfair Display | Luksus, advokat, eiendom, editorial |
| `font-fraunces` | `var(--font-fraunces)` | Fraunces | Ekspressiv serif, restaurant, design |
| `font-dm-sans` | `var(--font-dm-sans)` | DM Sans | Startup, ren og minimal |
| `font-space` | `var(--font-space)` | Space Grotesk | Kreativt byrå, arkitekt, tech |
| `font-instrument` | `var(--font-instrument)` | Instrument Serif | Redaksjonell display (italic er særlig slående) |
| `font-manrope` | `var(--font-manrope)` | Manrope | Vennlig rund sans, wellness, coaching |
| `font-lora` | `var(--font-lora)` | Lora | Varm serif for brødtekst, blogg, beauty |

**Sette fonter per klient** (i `config.ts`):
```ts
fontHeading: "var(--font-playfair)",  // overrider --font-heading
fontBody: "var(--font-lora)",         // overrider --font-body
```

Dette overstyrer CSS-variablene på klient-wrapperen i `ClientShell`, så alle templates som bruker `font-heading`/`font-body` får riktig font automatisk.

**Bruk direkte i en template**:
```tsx
<h1 className="font-playfair italic">Editorial heading</h1>
<p className="font-lora">Varm brødtekst</p>
```

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

## Passordbeskyttelse

Alle klient-utkast er automatisk passordbeskyttet via `src/middleware.ts`.

- **Standard passord:** `[slug]_26` (f.eks. `straume-roer_26`, `lumiere-beauty_26`)
- Kan overstyres per klient via `passord`-feltet i config
- Første besøk → redirect til `/unlock/[slug]` → skriv inn passord → cookie settes → redirect til utkast
- Cookie varer i 30 dager
- **Nye klienter må registreres i `src/lib/clients.ts`** — ellers blir de ikke gated (og ikke tilgjengelige via middleware)

Flyten:
1. `src/middleware.ts` sjekker cookie for hver `/[slug]`-request
2. `/unlock/[slug]/page.tsx` viser Attentio-branding + passordform
3. `POST /api/unlock` validerer passord og setter httpOnly-cookie

---

## Commit-konvensjon

```
utkast: [slug]           # Nytt utkast
oppdater: [slug]         # Endringer i eksisterende utkast
komponent: [navn]        # Ny delt komponent
fix: [beskrivelse]       # Bugfix
```
