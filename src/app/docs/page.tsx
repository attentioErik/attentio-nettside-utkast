import Link from "next/link"

export const metadata = {
  title: "Kunnskapsbase – Attentio Utkast",
  description:
    "Komplett referanse for komponenter, workflow og bruk av utkast-portalen.",
}

type Section = {
  id: string
  title: string
  body: React.ReactNode
}

const sections: Section[] = [
  {
    id: "om-prosjektet",
    title: "Om prosjektet",
    body: (
      <>
        <p>
          Dette repoet brukes av Attentio til å lage raske, passordbeskyttede
          nettside-utkast for potensielle kunder. Hvert utkast er en egen rute
          som f.eks.{" "}
          <Code>attentio-nettside-utkast.vercel.app/straume-roer</Code>.
        </p>
        <p>
          <strong>Stack:</strong> Next.js 16 App Router + TypeScript + Tailwind
          v4 + shadcn/ui + 21st.dev/MagicUI-komponenter.
        </p>
        <Ul>
          <li>All kundedata bor i <Code>clients/[slug]/config.ts</Code></li>
          <li>Obligatorisk ui-ux-pro-max-søk før nye utkast</li>
          <li>Mobile-first, touch-targets ≥ 44px, kontrast ≥ 4.5:1</li>
          <li>SVG-ikoner, aldri emoji</li>
          <li>Norsk tone: direkte, tillitsvekkende, lokalt forankret</li>
        </Ul>
      </>
    ),
  },
  {
    id: "kom-i-gang",
    title: "Kom i gang",
    body: (
      <>
        <H3>Dev-server</H3>
        <Pre>{`npm install          # kun første gang
npm run dev          # http://localhost:3000`}</Pre>
        <H3>Bygg</H3>
        <Pre>{`npm run build`}</Pre>
        <H3>Deploy</H3>
        <p>
          Push til <Code>main</Code> → Vercel deployer automatisk til{" "}
          <Code>attentio-nettside-utkast.vercel.app</Code>.
        </p>
      </>
    ),
  },
  {
    id: "nytt-utkast",
    title: "Lage et nytt utkast",
    body: (
      <>
        <H3>Anbefalt: /nytt-utkast</H3>
        <Pre>{`/nytt-utkast Hansen Elektro AS, tlf 55 33 22 11, Bergen`}</Pre>
        <p>Claude går gjennom disse stegene automatisk:</p>
        <ol className="list-decimal pl-5 space-y-1.5 text-slate-700">
          <li>Kjører <Code>ui-ux-pro-max --design-system</Code> for bransjen</li>
          <li>Velger <Code>designMode</Code> basert på bransje + nøkkelord</li>
          <li>Velger <Code>heroVariant</Code> basert på stemning</li>
          <li>Plukker bilder fra <Code>src/lib/images.ts</Code></li>
          <li>Oppretter config + page</li>
          <li>Registrerer i [client]/page.tsx, lib/clients.ts, app/page.tsx</li>
          <li>Bygger, committer, pusher</li>
          <li>Rapporterer passord og live-URL</li>
        </ol>

        <H3>Manuelt</H3>
        <Pre>{`cp -r clients/_template clients/hansen-elektro
# rediger config.ts og page.tsx`}</Pre>
        <p>Husk å registrere i <strong>3 filer</strong>:</p>
        <Ul>
          <li><Code>src/app/[client]/page.tsx</Code> — dynamisk ruting</li>
          <li><Code>src/lib/clients.ts</Code> — passord-register</li>
          <li><Code>src/app/page.tsx</Code> — landingsside-kort</li>
        </Ul>
      </>
    ),
  },
  {
    id: "config",
    title: "Config-referanse",
    body: (
      <>
        <p>Alle felt i <Code>clients/[slug]/config.ts</Code>:</p>
        <Table
          headers={["Felt", "Type", "Påkrevd", "Beskrivelse"]}
          rows={[
            ["slug", "string", "✓", "URL-slug (lowercase + bindestrek)"],
            ["firmanavn", "string", "✓", "Offisielt firmanavn"],
            ["tagline", "string", "✓", "Hovedoverskrift (maks 8 ord)"],
            ["underoverskrift", "string", "–", "1–2 setninger som utdyper"],
            ["bransje", "string", "✓", "Engelsk (for søk + bildebibliotek)"],
            ["telefon, epost, adresse, sted", "string", "✓", "Kontakt"],
            ["apningstider", "string", "–", "F.eks. 'Man–fre 08:00–16:00'"],
            ["passord", "string", "–", "Default: [slug]_26"],
            ["theme", "light / dark", "✓", ""],
            ["designMode", "trust / wow", "–", "Se design-modi"],
            ["heroVariant", "string", "–", "Se hero-varianter"],
            ["primærfarge, accentfarge", "hex", "✓", "Brand-farger"],
            ["tjenester", "array", "✓", "3 objekter {navn, beskrivelse, ikon, bilde?}"],
            ["usps", "string[]", "✓", "3 korte salgsargumenter"],
            ["stats", "array", "–", "3 objekter {verdi, etikett}"],
            ["trustBadges", "string[]", "–", "2–3 sertifiseringer"],
            ["herobildeSrc", "string", "–", "Hero-bilde-URL"],
            ["galleri", "string[]", "–", "4–6 bilder for bento-grid"],
            ["anmeldelser", "array", "✓", "{navn, tekst, stjerner, rolle?}"],
          ]}
        />
      </>
    ),
  },
  {
    id: "design-modi",
    title: "Design-modi",
    body: (
      <Table
        headers={["Modus", "Passer til", "Kjennetegn"]}
        rows={[
          ["Trust", "Håndverkere, advokater, tekniske tjenester", "Tillitsvekkende, solid stats, sobert"],
          ["Wow", "Skjønnhet, restaurant, premium, kreative", "Full-bleed hero, animerte effekter, premium"],
        ]}
      />
    ),
  },
  {
    id: "hero-varianter",
    title: "Hero-varianter",
    body: (
      <>
        <p>
          Alle heroes bruker <Code>config.primærfarge</Code> +{" "}
          <Code>config.accentfarge</Code> automatisk. Live preview:{" "}
          <Link href="/hero-varianter" className="text-pink-700 underline underline-offset-4 hover:text-pink-800">
            /hero-varianter
          </Link>
          .
        </p>
        <Table
          headers={["heroVariant", "Stemning", "Passer til", "Nøkkelord"]}
          rows={[
            ["classic", "Trust default", "Håndverkere", "enkel, håndverker-standard"],
            ["image", "Foto-dominert", "Bilde-sterke bransjer", "stort bilde"],
            ["aurora", "Magisk, gnistrende", "Skjønnhet, premium", "wow-faktor, magisk"],
            ["retrogrid", "Synthwave-retro", "Tech, SaaS", "retro, 80-tall"],
            ["flicker", "Teknisk puls", "Moderne lokal service", "teknisk, levende mønster"],
            ["aero", "Kraftig industri", "Miljø, fornybar, bygg", "industri, miljø"],
            ["aero2", "Enterprise", "Konsulent", "enterprise, social-proof"],
            ["shapes", "Kreativ abstrakt", "Byråer, designfirma", "kreativt, abstrakt"],
            ["glass", "Premium glass", "Studioer, byråer", "premium, glass-look"],
            ["carousel", "Visuell portfolio", "Fotografer", "portfolio, karusell"],
            ["parallax", "Scroll-zoom", "Eiendom, reise", "eiendom, arkitektur"],
            ["shader", "Animert bakgrunn", "Kreative merker", "shader, animert"],
            ["launch", "SaaS-lansering", "Tech, produkt", "produktbilde, blur-in, tailark"],
            ["prisma", "Redaksjonell", "Kollektiv, foto/video", "magasin, stort display, asterisk"],
            ["minimalist", "Minimalist portrett", "Portefølje, fashion", "sirkel, tre-kolonner"],
            ["fashion", "Boutique", "Atelier, skjønnhet", "boutique, sesong-label"],
          ]}
        />
      </>
    ),
  },
  {
    id: "fonter",
    title: "Fontbibliotek",
    body: (
      <>
        <p>
          Alle fontene er lastet via <Code>next/font/google</Code> i{" "}
          <Code>src/app/layout.tsx</Code> og eksponert som CSS-variabler +
          Tailwind-utilities i <Code>globals.css</Code>.
        </p>

        <H3>Default-fonter (brukt i hele appen)</H3>
        <Table
          headers={["Rolle", "CSS-variabel", "Font"]}
          rows={[
            ["Overskrifter", <Code key="a">var(--font-heading)</Code>, "Rubik"],
            ["Brødtekst", <Code key="b">var(--font-body)</Code>, "Nunito Sans"],
            ["UI/system", <Code key="c">var(--font-sans)</Code>, "Geist"],
          ]}
        />

        <H3>Tilleggsfonter</H3>
        <p>
          Tilgjengelig som både Tailwind-utility og CSS-variabel. Bruk f.eks.{" "}
          <Code>className=&quot;font-playfair italic&quot;</Code> på en overskrift.
        </p>
        <Table
          headers={["Tailwind-klasse", "Font", "Bruk"]}
          rows={[
            [<Code key="1">font-inter</Code>, "Inter", "Moderne SaaS, tech, produkt-lansering"],
            [<Code key="2">font-playfair</Code>, "Playfair Display", "Luksus, advokat, eiendom, editorial"],
            [<Code key="3">font-fraunces</Code>, "Fraunces", "Ekspressiv serif, restaurant, design"],
            [<Code key="4">font-dm-sans</Code>, "DM Sans", "Startup, ren og minimal"],
            [<Code key="5">font-space</Code>, "Space Grotesk", "Kreativt byrå, arkitekt, tech"],
            [<Code key="6">font-instrument</Code>, "Instrument Serif", "Redaksjonell display (italic er særlig slående)"],
            [<Code key="7">font-manrope</Code>, "Manrope", "Vennlig rund sans, wellness, coaching"],
            [<Code key="8">font-lora</Code>, "Lora", "Varm serif for brødtekst, blogg, beauty"],
          ]}
        />

        <H3>Sette fonter per klient (config.ts)</H3>
        <Pre>{`fontHeading: "var(--font-playfair)",  // overrider --font-heading
fontBody: "var(--font-lora)",         // overrider --font-body`}</Pre>
        <p>
          <Code>ClientShell</Code> applyer disse som CSS-variabel-override på
          klient-wrapperen, så alle templates som bruker <Code>font-heading</Code>/
          <Code>font-body</Code> får riktig font automatisk – ingen endring i
          templates trengs.
        </p>

        <H3>Eller direkte i en template</H3>
        <Pre>{`<h1 className="font-playfair italic">Editorial heading</h1>
<p className="font-lora">Varm brødtekst</p>`}</Pre>
      </>
    ),
  },
  {
    id: "komponenter",
    title: "Komponenter",
    body: (
      <>
        <H3>Template-komponenter (src/components/templates/)</H3>
        <Ul>
          <li><Code>NavBar</Code> — sticky, logo + nav + tlf-CTA, hamburger på mobil</li>
          <li><Code>Hero</Code> — router som velger riktig hero-variant</li>
          <li><Code>ServicesSection</Code> — 3 kort med SVG-ikon eller bilde</li>
          <li><Code>GallerySection</Code> — bento-grid (vises kun med <Code>config.galleri</Code>)</li>
          <li><Code>TrustSection</Code> — stats-rad, anmeldelser, trust badges</li>
          <li><Code>ContactSection</Code> — kontaktkort + skjema</li>
          <li><Code>SiteFooter</Code> — 3-kolonne footer</li>
          <li><Code>Icons.tsx</Code> — 15 SVG-ikoner (ingen emoji)</li>
        </Ul>

        <H3>shadcn/ui base (src/components/ui/)</H3>
        <p className="text-sm">
          <Code>button</Code>, <Code>card</Code>, <Code>badge</Code>,{" "}
          <Code>input</Code>, <Code>textarea</Code>, <Code>label</Code>,{" "}
          <Code>avatar</Code>
        </p>

        <H3>21st.dev / MagicUI</H3>
        <p className="text-sm">
          <Code>marquee</Code>, <Code>bento-grid</Code>,{" "}
          <Code>animated-gradient-text</Code>, <Code>number-ticker</Code>,{" "}
          <Code>shine-border</Code>, <Code>particles</Code>,{" "}
          <Code>meteors</Code>, <Code>dot-pattern</Code>,{" "}
          <Code>grid-pattern</Code>, <Code>retro-grid</Code>,{" "}
          <Code>flickering-grid</Code>, <Code>warp-background</Code>,{" "}
          <Code>aurora-text</Code>, <Code>sparkles-text</Code>,{" "}
          <Code>border-beam</Code>, <Code>animated-shiny-text</Code>,{" "}
          <Code>interactive-hover-button</Code>, <Code>shimmer-button</Code>,{" "}
          <Code>feature-carousel</Code>
        </p>

        <H3>Hente flere komponenter</H3>
        <Pre>{`npx shadcn@latest add "https://magicui.design/r/[komponent]"
npx shadcn@latest add "https://21st.dev/r/[bruker]/[komponent]"`}</Pre>
      </>
    ),
  },
  {
    id: "bildebibliotek",
    title: "Bildebibliotek",
    body: (
      <>
        <p>
          <Code>src/lib/images.ts</Code> har kurerte Unsplash-URLer for 19 bransjer.
        </p>
        <Pre>{`import { plukkBilder } from "@/lib/images"

const bilder = plukkBilder("plumber", 3)
// => { hero: "...", services: [...], galleri?: [...] }`}</Pre>

        <H3>Norske synonymer matches automatisk</H3>
        <p className="text-sm">
          rørlegger → plumber, elektriker → electrician, tømrer → carpenter,
          maler → painter, taktekker → roofer, frisør → hairdresser, skjønnhet →
          beauty, spa/massasje → wellness, trening → fitness, megler/eiendom →
          realtor, advokat → lawyer, renhold → cleaning, gartner/hage →
          gardener, energi/fornybar/kraft/sol/vind/powering → energy,
          bærekraft/miljø/klima/natur → environment, industri/fabrikk →
          industrial.
        </p>

        <H3>Remote-patterns</H3>
        <p className="text-sm">
          <Code>next.config.ts</Code> whitelister <Code>images.unsplash.com</Code>,{" "}
          <Code>source.unsplash.com</Code>, <Code>images.pexels.com</Code>,{" "}
          <Code>cdn.pixabay.com</Code>.
        </p>
      </>
    ),
  },
  {
    id: "passord",
    title: "Passord-system",
    body: (
      <>
        <p>
          Alle klient-utkast gates automatisk av <Code>src/middleware.ts</Code>.
        </p>
        <Ul>
          <li><strong>Standard:</strong> <Code>[slug]_26</Code></li>
          <li>Overstyres via <Code>config.passord</Code></li>
          <li>Cookie varer 30 dager, httpOnly</li>
          <li>Re-valideres mot faktisk passord hver request</li>
        </Ul>

        <H3>Flyt</H3>
        <Pre>{`GET /straume-roer (ingen cookie)
  → 307 /unlock/straume-roer
    → POST /api/unlock { slug, passord }
      → 200 + Set-Cookie attentio-unlock-straume-roer
    → 307 /straume-roer (med cookie)
      → 200`}</Pre>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <strong>Viktig:</strong> Nye klienter må inn i{" "}
          <Code>src/lib/clients.ts</Code>, ellers blir de hverken gated eller
          tilgjengelige via middleware.
        </div>
      </>
    ),
  },
  {
    id: "mappestruktur",
    title: "Mappestruktur",
    body: (
      <Pre>{`.
├── CLAUDE.md                        # Workflow-regler for Claude
├── docs/KUNNSKAPSBASE.md            # Denne filen (markdown)
├── clients/
│   ├── _template/                   # Kopieres ved nytt utkast
│   └── [slug]/
│       ├── config.ts                # All kundedata
│       └── page.tsx                 # Layout (router mot hero-variant)
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Landingsside med alle klienter
│   │   ├── docs/page.tsx            # Denne siden
│   │   ├── hero-varianter/          # Live preview av hero-varianter
│   │   ├── unlock/[slug]/           # Passord-gate
│   │   ├── api/unlock/              # Passord-validerings-endpoint
│   │   └── [client]/                # Dynamisk klient-ruting
│   ├── components/
│   │   ├── templates/               # Delte layout + hero-varianter
│   │   └── ui/                      # shadcn/ui + 21st.dev/MagicUI
│   ├── lib/
│   │   ├── clients.ts               # Klient-register + passord
│   │   ├── images.ts                # Kuratert bildebibliotek
│   │   └── utils.ts                 # cn() helper
│   ├── middleware.ts                # Passord-gate
│   └── types/config.ts              # Config-interface
└── next.config.ts`}</Pre>
    ),
  },
  {
    id: "konvensjoner",
    title: "Kodekonvensjoner",
    body: (
      <>
        <Ul>
          <li>Delte komponenter: <Code>src/components/templates/</Code></li>
          <li>shadcn/21st.dev: <Code>src/components/ui/</Code></li>
          <li>Bedriftsdata: alltid i <Code>clients/[slug]/config.ts</Code></li>
          <li>Ikoner: SVG fra <Code>Icons.tsx</Code> eller lucide-react. <strong>Aldri emoji.</strong></li>
          <li>Bilder: <Code>next/image</Code> med URL fra <Code>lib/images.ts</Code></li>
          <li>Mobil-first, test alltid 375px</li>
          <li>Touch-targets ≥ 44×44px, kontrast ≥ 4.5:1</li>
        </Ul>

        <H3>Norsk tone</H3>
        <Ul>
          <li>Direkte og tillitsvekkende, ikke selgende</li>
          <li>Alltid lokalt forankret (nevn sted)</li>
          <li>Unngå: "ledende", "best i klassen", "innovativ", "banebrytende"</li>
          <li>Bruk: konkrete tjenester, telefonnummer synlig, fastpris</li>
        </Ul>

        <H3>Commit-konvensjon</H3>
        <Pre>{`utkast: [slug]           # Nytt utkast
oppdater: [slug]         # Endringer i eksisterende utkast
komponent: [navn]        # Ny delt komponent
fix: [beskrivelse]       # Bugfix`}</Pre>
      </>
    ),
  },
  {
    id: "feilsoking",
    title: "Feilsøking",
    body: (
      <Ul>
        <li>
          <strong>Bildet laster ikke</strong> → sjekk hostname i{" "}
          <Code>next.config.ts</Code> <Code>images.remotePatterns</Code>.
        </li>
        <li>
          <strong>Passord fungerer ikke</strong> → verifiser at klienten er
          registrert i <Code>src/lib/clients.ts</Code>.
        </li>
        <li>
          <strong>TypeScript-feil på config</strong> → hver klient-config må
          eksportere type via{" "}
          <Code>{`export type { Config } from "@/types/config"`}</Code>.
        </li>
        <li>
          <strong>Hero-variant viser ikke</strong> → sjekk at{" "}
          <Code>heroVariant</Code> er gyldig og at{" "}
          <Code>config.herobildeSrc</Code> er satt hvis varianten krever bilde.
        </li>
        <li>
          <strong>Build feiler med <Code>never</Code> i types</strong> →{" "}
          <Code>as const</Code> på klient-arrays kan kollapse til{" "}
          <Code>never</Code>. Type som <Code>Config[]</Code> eksplisitt.
        </li>
      </Ul>
    ),
  },
]

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-heading font-semibold text-slate-900 hover:opacity-80 transition-opacity"
          >
            <span className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white text-sm font-bold">
              A
            </span>
            <span>Attentio · Kunnskapsbase</span>
          </Link>
          <Link
            href="/hero-varianter"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Hero-preview →
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-14">
        {/* Sidebar TOC */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
            Innhold
          </p>
          <nav className="flex flex-col gap-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-100 px-3 py-1.5 rounded-md transition-colors"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Kunnskapsbase
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Attentio Utkast
          </h1>
          <p className="text-lg text-slate-600 mb-14">
            Komplett referanse for komponenter, workflow og bruk av utkast-portalen.
          </p>

          <div className="space-y-16">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-20">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mb-5 pb-3 border-b border-slate-200">
                  {s.title}
                </h2>
                <div className="prose prose-slate max-w-none space-y-4 text-slate-700 leading-relaxed">
                  {s.body}
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>

      <footer className="border-t border-slate-200 bg-white mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            ← Tilbake til utkast-portalen
          </Link>
          <p>
            Kilde:{" "}
            <Code>docs/KUNNSKAPSBASE.md</Code>
          </p>
        </div>
      </footer>
    </div>
  )
}

// --- Små presentasjons-helpere -----------------------------------------

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="px-1.5 py-0.5 rounded bg-slate-100 text-pink-700 text-[0.875em] font-mono">
      {children}
    </code>
  )
}

function Pre({ children }: { children: string }) {
  return (
    <pre className="rounded-lg bg-slate-900 text-slate-100 text-sm p-4 overflow-x-auto font-mono leading-relaxed">
      <code>{children}</code>
    </pre>
  )
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-heading text-lg font-semibold text-slate-900 mt-6 mb-2">
      {children}
    </h3>
  )
}

function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc pl-5 space-y-1.5 text-slate-700">{children}</ul>
}

function Table({
  headers,
  rows,
}: {
  headers: string[]
  rows: (React.ReactNode)[][]
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className="text-left px-4 py-2.5 font-semibold text-slate-700"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-slate-50/70">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-4 py-2.5 text-slate-700 align-top"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
