// clients/_template/config.ts
// Kopier denne mappen til clients/[bedrift-slug]/ for nytt utkast

export const config = {
  // --- Grunninfo ---
  slug: "bedrift-slug",                // URL: attentio-utkast.vercel.app/bedrift-slug
  firmanavn: "Bedrift AS",
  tagline: "Kort og tydelig verdisetning",
  bransje: "local service",            // Brukes i UI/UX-skill-søk (engelsk)

  // --- Kontakt ---
  telefon: "55 00 00 00",
  epost: "post@bedrift.no",
  adresse: "Gateveien 1, 5000 Bergen",
  sted: "Bergen",                      // Brukes i lokal SEO-tekst

  // --- Visuell identitet ---
  theme: "light" as "light" | "dark", // light = håndverkere/lokalt, dark = tech/moderne
  primærfarge: "#1a3a6b",             // Hex – brukes i Tailwind og CSS-variabel
  accentfarge: "#e85c2b",

  // --- Innhold ---
  tjenester: [
    "Tjeneste 1",
    "Tjeneste 2",
    "Tjeneste 3",
  ],
  usps: [                              // Unike salgsargumenter (3 stk)
    "Rask respons",
    "Lokal kunnskap",
    "Fastpris",
  ],

  // --- Valgfritt ---
  logo: "",                            // URL til logo (blank = bruk firmanavn som tekst)
  herobildeSrc: "",                    // URL til bilde (blank = farge-bakgrunn)
  anmeldelser: [
    {
      navn: "Ola Nordmann",
      tekst: "Veldig fornøyd med jobben!",
      stjerner: 5,
    },
  ],
} as const

export type Config = typeof config
