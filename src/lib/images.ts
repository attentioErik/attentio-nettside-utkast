/**
 * Kuratert bildebibliotek – Unsplash (gratis, kommersiell bruk OK).
 * Alle URL-er bruker Unsplash sitt /w=1600 parameter for optimalisert levering.
 * Brukes via next/image. Legg domener til i next.config.ts remotePatterns.
 */

type BildeSett = {
  hero: readonly string[]
  services: readonly string[]
  galleri?: readonly string[]
}

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const bildebibliotek: Record<string, BildeSett> = {
  plumber: {
    hero: [
      u("1585704032915-c3400ca199e7"),
      u("1581578731548-c64695cc6952"),
      u("1607472586893-edb57bdc0e39"),
    ],
    services: [
      u("1558618666-fcd25c85cd64"),
      u("1600585154526-990dced4db0d"),
      u("1591474200742-8e512e6f98f8"),
    ],
  },
  electrician: {
    hero: [
      u("1621905251918-48416bd8575a"),
      u("1581092918484-8313ef8d2c0e"),
      u("1513828583688-c52646db42da"),
    ],
    services: [
      u("1558002038-1055907df827"),
      u("1621905251189-08b45d6a269e"),
      u("1581094288338-2314dddb7ece"),
    ],
  },
  carpenter: {
    hero: [
      u("1572297794026-4e0b3a9e7a92"),
      u("1581783342308-f792dbdd27c5"),
      u("1504148455328-c376907d081c"),
    ],
    services: [
      u("1565372195458-9de0b320ef04"),
      u("1589939705384-5185137a7f0f"),
      u("1601564921647-b446839a013f"),
    ],
  },
  painter: {
    hero: [
      u("1562259949-e8e7689d7828"),
      u("1558618666-fcd25c85cd64"),
      u("1581858726788-75bc0f6a952d"),
    ],
    services: [
      u("1589939705384-5185137a7f0f"),
      u("1562259929-b4e1fd3aef09"),
      u("1562259947-32df0b0ce5da"),
    ],
  },
  roofer: {
    hero: [
      u("1632139707139-b44e0e8df4c0"),
      u("1567769541715-8c71fe49fd63"),
      u("1558618666-fcd25c85cd64"),
    ],
    services: [u("1574359411659-15573a27fd0c"), u("1558618666-fcd25c85cd64")],
  },
  restaurant: {
    hero: [
      u("1517248135467-4c7edcad34c4"),
      u("1514933651103-005eec06c04b"),
      u("1555396273-367ea4eb4db5"),
    ],
    services: [
      u("1567620905732-2d1ec7ab7445"),
      u("1565958011703-44f9829ba187"),
      u("1555939594-58d7cb561ad1"),
    ],
    galleri: [
      u("1504674900247-0877df9cc836", 800),
      u("1546069901-ba9599a7e63c", 800),
      u("1540189549336-e6e99c3679fe", 800),
      u("1565958011703-44f9829ba187", 800),
    ],
  },
  cafe: {
    hero: [
      u("1501339847302-ac426a4a7cbb"),
      u("1521017432531-fbd92d768814"),
      u("1554118811-1e0d58224f24"),
    ],
    services: [
      u("1495474472287-4d71bcdd2085"),
      u("1497935586351-b67a49e012bf"),
      u("1509042239860-f550ce710b93"),
    ],
  },
  beauty: {
    hero: [
      u("1560066984-138dadb4c035"),
      u("1522337360788-8b13dee7a37e"),
      u("1487412720507-e7ab37603c6f"),
    ],
    services: [
      u("1516975080664-ed2fc6a32937"),
      u("1562322140-8baeececf3df"),
      u("1607602132700-068007b9d06d"),
    ],
    galleri: [
      u("1560066984-138dadb4c035", 800),
      u("1522337360788-8b13dee7a37e", 800),
      u("1487412720507-e7ab37603c6f", 800),
      u("1516975080664-ed2fc6a32937", 800),
    ],
  },
  hairdresser: {
    hero: [
      u("1560066984-138dadb4c035"),
      u("1562322140-8baeececf3df"),
      u("1580618672591-eb180b1a973f"),
    ],
    services: [
      u("1522337360788-8b13dee7a37e"),
      u("1607602132700-068007b9d06d"),
      u("1560066984-138dadb4c035"),
    ],
  },
  wellness: {
    hero: [
      u("1544161515-4ab6ce6db874"),
      u("1540555700478-4be289fbecef"),
      u("1600334129128-685c5582fd35"),
    ],
    services: [
      u("1519823551278-64ac92734fb1"),
      u("1571019613454-1cb2f99b2d8b"),
      u("1545205597-3d9d02c29597"),
    ],
  },
  fitness: {
    hero: [
      u("1534438327276-14e5300c3a48"),
      u("1571019613454-1cb2f99b2d8b"),
      u("1517836357463-d25dfeac3438"),
    ],
    services: [
      u("1541534741688-6078c6bfb5c5"),
      u("1549476464-37392f717541"),
      u("1583454110551-21f2fa2afe61"),
    ],
  },
  realtor: {
    hero: [
      u("1560518883-ce09059eeffa"),
      u("1600596542815-ffad4c1539a9"),
      u("1568605114967-8130f3a36994"),
    ],
    services: [
      u("1600607687939-ce8a6c25118c"),
      u("1600566753086-00f18fe6ba68"),
      u("1560449017-7c4bc1ebf8f7"),
    ],
    galleri: [
      u("1560518883-ce09059eeffa", 800),
      u("1600596542815-ffad4c1539a9", 800),
      u("1568605114967-8130f3a36994", 800),
      u("1600566753086-00f18fe6ba68", 800),
    ],
  },
  lawyer: {
    hero: [
      u("1589829085413-56de8ae18c73"),
      u("1450101499163-c8848c66ca85"),
      u("1505663912202-ac22d4cb3707"),
    ],
    services: [u("1521737604893-d14cc237f11d"), u("1551836022-deb4988cc6c0")],
  },
  tech: {
    hero: [
      u("1518770660439-4636190af475"),
      u("1551434678-e076c223a692"),
      u("1531746790731-6c087fecd65a"),
    ],
    services: [
      u("1461749280684-dccba630e2f6"),
      u("1504639725590-34d0984388bd"),
      u("1506794778202-cad84cf45f1d"),
    ],
  },
  cleaning: {
    hero: [
      u("1581578731548-c64695cc6952"),
      u("1527515637462-cff94eecc1ac"),
      u("1584820927498-cfe5211fd8bf"),
    ],
    services: [u("1520607162513-77705c0f0d4a"), u("1581578731548-c64695cc6952")],
  },
  gardener: {
    hero: [
      u("1416879595882-3373a0480b5b"),
      u("1558904541-efa84358-7a30-4b8d-9d5d-89c36aeaa0a9"),
      u("1500382017468-9049fed747ef"),
    ],
    services: [u("1416879595882-3373a0480b5b"), u("1500382017468-9049fed747ef")],
  },
}

/**
 * Generisk fallback basert på bransje-stikkord.
 * Bruker Unsplash Source for on-demand bilder hvis kategorien ikke finnes.
 */
export const genericHero = (query: string) =>
  `https://source.unsplash.com/1600x900/?${encodeURIComponent(query)}`

/**
 * Finner passende bildesett for en bransje. Matcher på keywords.
 */
export function bilderForBransje(bransje: string): BildeSett | null {
  const b = bransje.toLowerCase()
  for (const [key, bilder] of Object.entries(bildebibliotek)) {
    if (b.includes(key)) return bilder
  }
  // Norske synonymer
  const aliases: Record<string, keyof typeof bildebibliotek> = {
    rørlegger: "plumber",
    elektriker: "electrician",
    tømrer: "carpenter",
    snekker: "carpenter",
    maler: "painter",
    taktekker: "roofer",
    frisør: "hairdresser",
    skjønnhet: "beauty",
    spa: "wellness",
    massasje: "wellness",
    trening: "fitness",
    megler: "realtor",
    eiendom: "realtor",
    advokat: "lawyer",
    renhold: "cleaning",
    gartner: "gardener",
    hage: "gardener",
  }
  for (const [no, en] of Object.entries(aliases)) {
    if (b.includes(no)) return bildebibliotek[en]
  }
  return null
}

/**
 * Plukker første hero + første N services fra biblioteket for en bransje.
 */
export function plukkBilder(bransje: string, antallServices = 3) {
  const sett = bilderForBransje(bransje)
  if (!sett) return null
  return {
    hero: sett.hero[0],
    services: sett.services.slice(0, antallServices),
    galleri: sett.galleri,
  }
}
