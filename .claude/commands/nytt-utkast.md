Du skal lage et nytt nettside-utkast for Attentio AS basert på informasjonen brukeren har gitt deg.

## Obligatorisk workflow (ikke hopp over noen steg)

**STEG 1 — Kjør ui-ux-pro-max-søk FØRST**

Før du rører noen filer, hent design-intelligens for bransjen:

```bash
python3 /Users/erikjohnsen/.claude/skills/ui-ux-pro-max/scripts/search.py "[bransje] local service trust conversion" --design-system -p "[firmanavn]"
```

Dette er ikke valgfritt. Bruk resultatene til å informere farge- og layoutvalg.

**STEG 2 — Tolk brukerens informasjon**

Utled følgende felt (gjett fornuftig hvis mangler):

- `slug` — URL-vennlig, kun lowercase + bindestrek (f.eks. `hansen-elektro`)
- `firmanavn` — f.eks. "Hansen Elektro AS"
- `tagline` — Maks 8 ord, direkte og tillitsvekkende (f.eks. "Din lokale elektriker i Bergen")
- `underoverskrift` — 1–2 setninger som utdyper verdiforslaget og nevner stedet
- `bransje` — Engelsk (f.eks. `electrician local service`, `plumber`, `carpenter`)
- `telefon`, `epost`, `adresse`, `sted`
- `apningstider` — f.eks. "Man–fre 07:00–16:00 · Døgnvakt 24/7"
- `theme` — `"light"` for håndverkere/lokalt, `"dark"` for tech
- `primærfarge` / `accentfarge` — **Bruk anbefalingene fra ui-ux-pro-max-søket**. Ikke gjett.
- `tjenester` — 3 stk, hver med `navn`, `beskrivelse` (1 setning), og `ikon` fra: `wrench | bolt | hammer | paint | home | shield | clock | star`
- `usps` — 3 korte salgsargumenter
- `stats` — 3 tall (f.eks. `{verdi: "500+", etikett: "Fornøyde kunder"}`)
- `trustBadges` — 2–3 sertifiseringer/medlemskap relevant for bransjen (f.eks. "Mesterbrev", "Sentral godkjenning")
- `anmeldelser` — 2 realistiske norske anmeldelser med `navn`, `tekst`, `stjerner`, `rolle`

**STEG 3 — Opprett filene**

```bash
cp -r clients/_template clients/[slug]
```

Skriv `clients/[slug]/config.ts` med de utledede verdiene.

Skriv `clients/[slug]/page.tsx` (fjern kommentarene fra template).

**STEG 4 — Legg til i dynamisk ruting**

I `src/app/[client]/page.tsx`, legg til i `clients`-objektet:
```ts
"[slug]": () => import("../../../clients/[slug]/page"),
```

**STEG 5 — Bygg og sjekk**

```bash
npm run build
```

Bekreft at `/[slug]` er i build-output uten feil. Hvis feil, fiks før push.

**STEG 6 — Commit og push**

```bash
git add clients/[slug]/ src/app/[client]/page.tsx
git commit -m "utkast: [slug]"
git push
```

**STEG 7 — Rapporter tilbake (kort)**

- Live URL: `attentio-nettside-utkast.vercel.app/[slug]`
- Farger valgt (med kilde: fra ui-ux-pro-max eller justert)
- Hva som ble gjettet — så brukeren kan korrigere

---

Brukerens input: $ARGUMENTS
