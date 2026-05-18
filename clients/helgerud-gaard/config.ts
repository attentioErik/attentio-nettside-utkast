// clients/helgerud-gaard/config.ts
// Utkast for Helgerud Gård – gårdsutsalg av kjøtt fra egne dyr.

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const config = {
  // --- Grunninfo ---
  slug: "helgerud-gaard",
  firmanavn: "Helgerud Gård",
  tagline: "Kjøtt fra egne dyr",
  underoverskrift:
    "Storfe og gris fra vår egen gård – kortreist, sporbart og med god dyrevelferd. Bestill direkte fra oss.",
  bransje: "farm shop local meat producer",

  // --- Kontakt (TODO: fyll inn når kunden oppgir) ---
  telefon: "00 00 00 00", // TODO: fyll inn telefonnummer fra kunden
  epost: "post@helgerudgaard.no", // TODO: bekreft e-postadresse med kunden
  adresse: "Helgerud Gård", // TODO: fyll inn nøyaktig gårdsadresse
  sted: "Norge", // TODO: fyll inn sted/region
  apningstider: "Gårdsutsalg etter avtale – ta kontakt for henting",

  // --- Visuell identitet ---
  theme: "light" as "light" | "dark",
  designMode: "wow" as "trust" | "wow",
  heroVariant: "image" as const,
  primary: "#2F6B3D", // dyp gårdsgrønn – brand, ikoner, kort
  accent: "#C2410C", // terrakotta/rust – hero CTA
  fontHeading: "var(--font-fraunces)",
  fontBody: "var(--font-lora)",

  // --- Hero-bilde (oppgitt av kunden) ---
  herobildeSrc:
    "https://ucarecdn.com/2c721531-bc5f-46fc-a3dd-f6acf3540f43/ChatGPTImage18mai202611_16_09.png",

  // --- Produkter (vises som "Tjenester"-grid) ---
  tjenester: [
    {
      navn: "Storfekjøtt fra egne dyr",
      beskrivelse:
        "Hovedproduktet vårt – mørt storfekjøtt fra dyr som vokser opp på gården. Selges som deler, blandingskasser eller etter ønske.",
      ikon: "leaf" as const,
      bilde: img("1565958011703-44f9829ba187"),
    },
    {
      navn: "Svinekjøtt",
      beskrivelse:
        "Litt gris ved siden av storfeet – godt kjøtt fra dyr med god plass og stell. Tilgjengelig i perioder gjennom året.",
      ikon: "leaf" as const,
      bilde: img("1567620905732-2d1ec7ab7445"),
    },
    {
      navn: "Voksende utvalg & kjøttkasser",
      beskrivelse:
        "Utvalget utvides etter hvert. Sett sammen en kjøttkasse, eller meld interesse så finner vi en løsning som passer.",
      ikon: "trending" as const,
      bilde: img("1504674900247-0877df9cc836"),
    },
  ],

  // --- Om gården ---
  omOss: {
    tittel: "En liten gård med kortreist kjøtt",
    tekst: [
      "Helgerud Gård er en familiedrevet gård der vi har dyrene gående hos oss fra start til slutt. Det meste er storfe, men vi har også litt gris.",
      "Vi selger kjøttet direkte fra gården. Da vet du hvor maten kommer fra, hvordan dyra har hatt det, og du støtter lokal matproduksjon.",
    ],
    ctaTekst: "Ta kontakt for bestilling",
    punkter: [
      {
        ikon: "leaf" as const,
        tittel: "Egne dyr",
        tekst: "Dyrene vokser opp på gården – ingen mellomledd.",
      },
      {
        ikon: "home" as const,
        tittel: "Kortreist",
        tekst: "Fra vår gård rett til ditt bord, uten lang transport.",
      },
      {
        ikon: "shield" as const,
        tittel: "God dyrevelferd",
        tekst: "Dyr med plass, ro og godt stell hele livet.",
      },
      {
        ikon: "users" as const,
        tittel: "Gårdsutsalg",
        tekst: "Henting og bestilling direkte fra oss, etter avtale.",
      },
    ],
  },

  // --- USP-er ---
  usps: [
    "Kjøtt fra egne dyr – sporbart og kortreist",
    "Direkte salg fra gården",
    "Storfe og gris, utvalget vokser",
  ],

  // --- Galleri (wow-modus bento) ---
  galleri: [
    img("1441974231531-c6227db76b6e", 800),
    img("1500382017468-9049fed747ef", 800),
    img("1497436072909-60f360e1d4b1", 800),
    img("1416879595882-3373a0480b5b", 800),
    img("1506905925346-21bda4d32df4", 800),
    img("1470813740244-df37b8c1edcb", 800),
  ] as readonly string[],

  // --- Sosiale medier ---
  sosiale: {
    instagram: "https://www.instagram.com/helgerud_gaard/",
    // facebook: "", // TODO: legg inn Facebook-URL når kunden oppgir
  },

  // --- Blogg / nyheter (demo-innhold) ---
  blogg: [
    {
      tittel: "Slaktesesong – sikre deg en kjøttkasse",
      utdrag:
        "Nå nærmer vi oss slakt, og det er tid for å melde interesse hvis du vil ha en kasse med storfekjøtt fra årets dyr.",
      dato: "Mai 2026",
      kategori: "Sesong",
      bilde: img("1565958011703-44f9829ba187", 800),
    },
    {
      tittel: "Nytt i utvalget: mer gris",
      utdrag:
        "Vi har utvidet med litt mer gris i år. Følg med her og på Instagram for når det blir tilgjengelig.",
      dato: "April 2026",
      kategori: "Utvalg",
      bilde: img("1567620905732-2d1ec7ab7445", 800),
    },
    {
      tittel: "Slik fungerer gårdsutsalget",
      utdrag:
        "Bestilling skjer via skjemaet her på siden eller på telefon, og du henter kjøttet hos oss etter avtale. Enkelt og kortreist.",
      dato: "Mars 2026",
      kategori: "Praktisk",
      bilde: img("1416879595882-3373a0480b5b", 800),
    },
  ],

  // --- Nyhetsbrev ---
  nyhetsbrev: {
    tittel: "Få beskjed når nytt kjøtt er klart",
    tekst:
      "Meld deg på nyhetsbrevet, så sier vi fra når det er slaktesesong, nye produkter i utvalget og når du kan hente på gården.",
  },

  // --- Valgfritt ---
  logo: "",

  anmeldelser: [
    {
      navn: "Marit Berg",
      tekst:
        "Helt nydelig kjøtt, og det er godt å vite hvor det kommer fra. Vi kjøper kasse hver sesong nå.",
      stjerner: 5,
      rolle: "Fast kunde",
    },
    {
      navn: "Ola Sæther",
      tekst:
        "Enkelt å bestille og hyggelig henting på gården. Anbefales på det varmeste.",
      stjerner: 5,
      rolle: "Lokal kunde",
    },
  ],
} as const

export type { Config } from "@/types/config"
