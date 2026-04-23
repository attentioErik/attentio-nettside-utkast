Du skal lage et nytt nettside-utkast for Attentio AS basert på informasjonen brukeren har gitt deg.

## Jobb du skal gjøre

**1. Tolk informasjonen**

Les brukerens beskrivelse og utled følgende felt. Gjett fornuftige verdier for felt som mangler, basert på bransje og firmanavn:

- `slug` — URL-vennlig, f.eks. `hansen-elektro` (kun lowercase, bindestrek)
- `firmanavn` — f.eks. "Hansen Elektro AS"
- `tagline` — Kort og tillitsvekkende setning (maks 8 ord), f.eks. "Din lokale elektriker i Bergen"
- `bransje` — Engelskspråklig, f.eks. `electrician local service`
- `telefon` — norsk format med mellomrom
- `epost`
- `adresse`
- `sted` — By eller region, f.eks. "Bergen" eller "Sotra"
- `theme` — `"light"` for håndverkere/lokal service, `"dark"` for tech/moderne
- `primærfarge` — Hex-farge som passer bransjen (f.eks. #1a4a2e for elektriker)
- `accentfarge` — Komplementærfarge
- `tjenester` — 3 konkrete tjenester
- `usps` — 3 unike salgsargumenter
- `anmeldelser` — 2 realistiske, norske anmeldelser (finn på hvis ikke gitt)

**2. Opprett filer**

Kjør:
```
cp -r clients/_template clients/[slug]
```

Skriv `clients/[slug]/config.ts` med de utledede verdiene.

Skriv `clients/[slug]/page.tsx` — identisk med `clients/_template/page.tsx`, men uten kommentarlinjene øverst.

**3. Legg til i dynamisk ruting**

Åpne `src/app/[client]/page.tsx` og legg til klienten i `clients`-objektet:
```ts
"[slug]": () => import("../../../clients/[slug]/page"),
```

**4. Bygg og sjekk**

Kjør `npm run build` og bekreft at `/[slug]` er med i bygget uten feil.

**5. Commit og push**

```
git add clients/[slug]/ src/app/[client]/page.tsx
git commit -m "utkast: [slug]"
git push
```

**6. Rapporter tilbake**

Gi en kort oppsummering:
- Live URL: `attentio-nettside-utkast.vercel.app/[slug]`
- Hvilke verdier som ble valgt (spesielt farge, tagline og tjenester)
- Evt. felt du gjetta — så brukeren kan korrigere

---

Brukerens input: $ARGUMENTS
