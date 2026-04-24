/**
 * Sentralt register for alle klient-utkast + passord-logikk.
 * Importer hit når du legger til en ny klient.
 */

import { config as straumeRoer } from "../../clients/straume-roer/config"
import { config as lumiereBeauty } from "../../clients/lumiere-beauty/config"
import { config as nordvindEnergi } from "../../clients/nordvind-energi/config"
import { config as amMurBetong } from "../../clients/am-mur-betong/config"
import { config as itreet } from "../../clients/itreet/config"
import { config as urheimsElektrokompani } from "../../clients/urheims-elektrokompani/config"
import { config as mmHjemKontorservice } from "../../clients/mm-hjem-kontorservice/config"
import { config as storliBilMaskin } from "../../clients/storli-bil-maskin/config"

type ClientEntry = {
  slug: string
  firmanavn: string
  passord: string
}

const registry: readonly { slug: string; firmanavn: string; passord?: string }[] = [
  straumeRoer,
  lumiereBeauty,
  nordvindEnergi,
  amMurBetong,
  itreet,
  urheimsElektrokompani,
  mmHjemKontorservice,
  storliBilMaskin,
] as const

export const CLIENTS: readonly ClientEntry[] = registry.map((c) => ({
  slug: c.slug,
  firmanavn: c.firmanavn,
  passord: c.passord ?? `${c.slug}_26`,
}))

export function getClient(slug: string): ClientEntry | null {
  return CLIENTS.find((c) => c.slug === slug) ?? null
}

export function getPassword(slug: string): string | null {
  const c = getClient(slug)
  return c?.passord ?? null
}

export const COOKIE_NAME = (slug: string) => `attentio-unlock-${slug}`
