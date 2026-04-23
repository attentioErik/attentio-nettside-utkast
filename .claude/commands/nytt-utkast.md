Du skal lage et nytt nettside-utkast for Attentio AS basert på brukerens input.

## Obligatorisk workflow

**STEG 1 — Velg design-modus**

Les brukerens ønsker og bransjen, og velg:
- `designMode: "trust"` → håndverkere, advokater, tekniske tjenester, hvor tillit er viktigst
- `designMode: "wow"` → skjønnhet, restaurant, hotell, premium merker, kreative tjenester, eller hvis brukeren eksplisitt ber om "wow-faktor", "visuelt slående", "premium"

**STEG 2 — Kjør ui-ux-pro-max-søk**

```bash
python3 /Users/erikjohnsen/.claude/skills/ui-ux-pro-max/scripts/search.py "[bransje engelsk] [wow eller trust]" --design-system -p "[firmanavn]"
```

Bruk farger og typografi fra resultatet. **Ikke gjett.**

**STEG 3 — Velg bilder fra `src/lib/images.ts`**

Finn bransjen i `bildebibliotek` (eller norsk synonym som rørlegger/frisør/osv). Plukk:
- `herobildeSrc` — første hero-bilde
- `tjenester[i].bilde` — matchende service-bilder (KUN for wow-modus eller hvis brukeren vil ha bilder på tjenester)
- `galleri` — 4–6 bilder (kun wow-modus)

Hvis bransjen ikke finnes, søk Unsplash direkte med en passende query, eller la Claude gjette en URL-ID basert på bildebeskrivelser.

**STEG 4 — Installer ekstra 21st.dev-komponenter om nødvendig**

For wow-modus, sjekk om noe spesielt trengs. Allerede installert:
- `marquee`, `bento-grid`, `animated-gradient-text`, `number-ticker`, `shine-border`
- `button`, `card`, `badge`, `input`, `textarea`, `label`

Hent flere om nødvendig:
```bash
npx shadcn@latest add "https://magicui.design/r/[komponent]" -y
```

**STEG 5 — Tolk brukerens info og fyll ut config**

Utled (gjett fornuftig hvis mangler):
- `slug`, `firmanavn`, `tagline` (maks 8 ord), `underoverskrift` (1–2 setninger)
- `bransje` (engelsk — brukes i skill-søk)
- `telefon`, `epost`, `adresse`, `sted`, `apningstider`
- `theme` (`"light"` eller `"dark"`)
- `designMode` (`"trust"` eller `"wow"`)
- `primærfarge` / `accentfarge` — **fra ui-ux-pro-max-resultatet**
- `tjenester` — 3 stk med `navn`, `beskrivelse`, `ikon` (wrench/bolt/hammer/paint/home/shield/clock/star), og `bilde` (for wow-modus)
- `usps` — 3 korte
- `stats` — 3 tall + etiketter
- `trustBadges` — 2–3 relevante sertifiseringer
- `herobildeSrc`, `galleri` — fra `src/lib/images.ts`
- `anmeldelser` — 2 realistiske norske

**STEG 6 — Opprett filer**

```bash
cp -r clients/_template clients/[slug]
```

Skriv `clients/[slug]/config.ts` og `clients/[slug]/page.tsx` (fjern kommentarene fra template).

**STEG 7 — Legg til i dynamisk ruting**

I `src/app/[client]/page.tsx`:
```ts
"[slug]": () => import("../../../clients/[slug]/page"),
```

**STEG 8 — Bygg og verifiser**

```bash
npm run build
```

Må passere TypeScript og generere `/[slug]` uten feil.

**STEG 9 — Commit og push**

```bash
git add -A
git commit -m "utkast: [slug]"
git push
```

**STEG 10 — Rapporter tilbake**

- Live URL: `attentio-nettside-utkast.vercel.app/[slug]`
- Design-modus valgt (trust / wow) med begrunnelse
- Farger og pattern fra ui-ux-pro-max
- Bilder valgt (fra biblioteket eller Unsplash direkte)
- Hva som ble gjettet – så brukeren kan korrigere

---

Brukerens input: $ARGUMENTS
