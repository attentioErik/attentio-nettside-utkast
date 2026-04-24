/**
 * Sentralt register for alle klient-utkast + passord-logikk.
 * Legg til én import + én linje i CONFIGS når du oppretter et nytt utkast.
 * page.tsx og portalen henter automatisk fra CONFIGS — ingen endringer der nødvendig.
 */

import { config as straumeRoer } from "../../clients/straume-roer/config"
import { config as lumiereBeauty } from "../../clients/lumiere-beauty/config"
import { config as nordvindEnergi } from "../../clients/nordvind-energi/config"
import { config as amMurBetong } from "../../clients/am-mur-betong/config"
import { config as itreet } from "../../clients/itreet/config"
import { config as urheimsElektrokompani } from "../../clients/urheims-elektrokompani/config"
import { config as mmHjemKontorservice } from "../../clients/mm-hjem-kontorservice/config"
import { config as storliBilMaskin } from "../../clients/storli-bil-maskin/config"
import { config as railaAs } from "../../clients/raila-as/config"
import { config as tromsoVvs } from "../../clients/tromso-vvs/config"
import { config as kvikkParkettsliperi } from "../../clients/kvikk-parkettsliperi/config"
import { config as olareanBygg } from "../../clients/olarean-bygg/config"

import type { Config } from "../types/config"

/** Alle klient-configs. Portalen og middleware henter herfra automatisk. */
export const CONFIGS: readonly Config[] = [
  straumeRoer,
  lumiereBeauty,
  nordvindEnergi,
  amMurBetong,
  itreet,
  urheimsElektrokompani,
  mmHjemKontorservice,
  storliBilMaskin,
  railaAs,
  tromsoVvs,
  kvikkParkettsliperi,
  olareanBygg,
] as unknown as Config[]

type ClientEntry = {
  slug: string
  firmanavn: string
  passord: string
}

export const CLIENTS: readonly ClientEntry[] = CONFIGS.map((c) => ({
  slug: c.slug,
  firmanavn: c.firmanavn,
  passord: (c as Config & { passord?: string }).passord ?? `${c.slug}_26`,
}))

export function getClient(slug: string): ClientEntry | null {
  return CLIENTS.find((c) => c.slug === slug) ?? null
}

export function getPassword(slug: string): string | null {
  const c = getClient(slug)
  return c?.passord ?? null
}

export const COOKIE_NAME = (slug: string) => `attentio-unlock-${slug}`
