# Attentio – Utkast-workflow

## Hvem er vi
Attentio AS er et norsk digitalbyrå i Bergen. Dette repoet brukes til å lage raske nettside-utkast for potensielle kunder. Utkast deles som live URL-er via Vercel.

---

## Nytt utkast – steg for steg

1. `cp -r clients/_template clients/[slug]`
2. Fyll ut `clients/[slug]/config.ts` med bedriftens info
3. Tilpass komponenter i `clients/[slug]/page.tsx` om nødvendig
4. Legg til klienten i `src/app/[client]/page.tsx` sin clients-liste
5. `git add . && git commit -m "utkast: [slug]" && git push`
6. Vercel deployer automatisk – live URL klar på ca. 30 sekunder

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
- Hero skal alltid ha: overskrift + underoverskrift + CTA-knapp + telefonnummer

---

## Kodekonvensjoner

- Stack: Next.js App Router + TypeScript + Tailwind CSS
- Delte komponenter: `src/components/templates/`
- Bedriftsdata: alltid i `clients/[slug]/config.ts`
- Tilpass alltid via config – ikke hardkod tekst i komponenter
- Mobilvisning prioriteres (test alltid ved 375px)
- CSS-fargevariabler: `--primary` og `--accent` settes i page.tsx fra config

---

## Commit-konvensjon

```
utkast: [slug]           # Nytt utkast
oppdater: [slug]         # Endringer i eksisterende utkast
komponent: [navn]        # Ny delt komponent
fix: [beskrivelse]       # Bugfix
```
