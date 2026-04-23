# Attentio – Utkast-workflow

## Hvem er vi
Attentio AS er et norsk digitalbyrå i Bergen. Dette repoet brukes til å lage raske nettside-utkast for potensielle kunder. Utkast deles som live URL-er via Vercel.

---

## OBLIGATORISK: Bruk `/ui-ux-pro-max` FØR du designer noe

Dette er ikke valgfritt. Før du lager eller redesigner et utkast, **må** du hente design-intelligens fra ui-ux-pro-max-skillet. Det er Attentio-standarden.

```bash
python3 /Users/erikjohnsen/.claude/skills/ui-ux-pro-max/scripts/search.py "[bransje] local service trust conversion" --design-system -p "[firmanavn]"
```

Suppler med domene-søk etter behov:
```bash
python3 /Users/erikjohnsen/.claude/skills/ui-ux-pro-max/scripts/search.py "[bransje] landing conversion" --domain landing
python3 /Users/erikjohnsen/.claude/skills/ui-ux-pro-max/scripts/search.py "[bransje] service" --domain color
python3 /Users/erikjohnsen/.claude/skills/ui-ux-pro-max/scripts/search.py "[bransje] trust" --domain typography
```

Bruk resultatene direkte. **Ikke gjett farger, fonter eller layout.**

---

## Nytt utkast – én kommando

```
/nytt-utkast Hansen Elektro AS, tlf 55 33 22 11, epost post@hansen-elektro.no, Bergen
```

Claude kjører `ui-ux-pro-max` først, tolker informasjonen, oppretter filer, bygger og pusher automatisk. Live URL er klar på ca. 30 sekunder etter push.

### Manuelt (om nødvendig)

1. Kjør `ui-ux-pro-max`-søk for bransjen
2. `cp -r clients/_template clients/[slug]`
3. Fyll ut `clients/[slug]/config.ts`
4. Legg til klienten i `src/app/[client]/page.tsx` sin clients-liste
5. `git add . && git commit -m "utkast: [slug]" && git push`

---

## Designsystem (Trust & Authority + Conversion)

Hentet fra `ui-ux-pro-max --design-system` for lokal service-bransje:

- **Pattern:** Trust & Authority + Conversion
- **Sections:** 1. Hero m/credibility → 2. Proof (logoer, sertifiseringer, stats) → 3. Solution overview → 4. Clear CTA path
- **Farger (defaults):** Primær `#1E40AF` (trust-blå), Aksent `#EA580C` (konvertering-oransje)
- **Typografi:** Rubik (headings) + Nunito Sans (body)
- **Layout:** Sticky navbar, max-width 6xl (1152px), 4/8pt spacing-system
- **Effekter:** 150–300ms transisjoner, hover-løft (-translate-y-0.5), subtle shadows

### Komponenter som alltid skal med
1. `NavBar` (sticky, logo + navigasjon + tlf-CTA, hamburger på mobil)
2. `HeroSection` (trust-badge, tagline, underoverskrift, dual CTA, USP-liste)
3. `ServicesSection` (3 tjenestekort med SVG-ikon + beskrivelse)
4. `TrustSection` (stats-rad, anmeldelser med stjerner, trust badges)
5. `ContactSection` (tlf/e-post/adresse/åpningstider + kontaktskjema)
6. `SiteFooter` (3-kolonne: om, tjenester, kontakt)

---

## Theme-valg

| Bransje | Theme | Begrunnelse |
|---|---|---|
| Rørlegger, elektriker, tømrer, maler | `light` | Tillitsvekkende, trygt, tradisjonelt |
| Restaurant, hotell, butikk | `light` | Oversiktlig, mat-vennlig |
| Tech, SaaS, moderne firma | `dark` | Profesjonelt, moderne |
| Wellness, spa, terapi | `light` | Rolig, rent |

---

## Norsk tone og stil

- Direkte og tillitsvekkende – ikke selgende eller overspent
- Alltid lokalt forankret: nevn sted, region eller "Bergen-basert"
- Unngå: "ledende", "best i klassen", "innovativ", "banebrytende"
- Bruk: konkrete tjenester, telefonnummer synlig, fastpris/uforpliktende
- Hero skal alltid ha: overskrift + underoverskrift + CTA-knapp + telefonnummer + trust-signal

---

## Kodekonvensjoner

- Stack: Next.js App Router + TypeScript + Tailwind CSS v4
- Delte komponenter: `src/components/templates/`
- Bedriftsdata: alltid i `clients/[slug]/config.ts`
- Tilpass alltid via config – ikke hardkod tekst i komponenter
- Ikoner: SVG fra `src/components/templates/Icons.tsx`. **Aldri emoji som ikon.**
- Mobilvisning prioriteres (test alltid ved 375px)
- Touch-targets min 44×44px
- Kontrast ≥ 4.5:1 på kroppstekst
- CSS-fargevariabler: `--primary` og `--accent` settes i page.tsx fra config

---

## Commit-konvensjon

```
utkast: [slug]           # Nytt utkast
oppdater: [slug]         # Endringer i eksisterende utkast
komponent: [navn]        # Ny delt komponent
fix: [beskrivelse]       # Bugfix
```
