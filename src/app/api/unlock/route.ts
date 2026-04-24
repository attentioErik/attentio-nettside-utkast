import { NextResponse } from "next/server"
import { CLIENTS, COOKIE_NAME } from "@/lib/clients"

const PORTAL_PASSORD = "attentio_26"
const PORTAL_COOKIE = "attentio-unlock-portal"

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  if (!body || typeof body.slug !== "string" || typeof body.passord !== "string") {
    return NextResponse.json({ ok: false, error: "Mangler felt" }, { status: 400 })
  }

  const { slug, passord } = body as { slug: string; passord: string }

  // Portal-passord
  if (slug === "portal") {
    if (passord !== PORTAL_PASSORD) {
      return NextResponse.json({ ok: false, error: "Feil passord" }, { status: 401 })
    }
    const response = NextResponse.json({ ok: true })
    response.cookies.set({
      name: PORTAL_COOKIE,
      value: PORTAL_PASSORD,
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
    })
    return response
  }

  // Klient-passord
  const client = CLIENTS.find((c) => c.slug === slug)
  if (!client) {
    return NextResponse.json({ ok: false, error: "Ukjent utkast" }, { status: 404 })
  }

  if (passord !== client.passord) {
    return NextResponse.json({ ok: false, error: "Feil passord" }, { status: 401 })
  }

  const response = NextResponse.json({ ok: true })
  response.cookies.set({
    name: COOKIE_NAME(slug),
    value: client.passord,
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
  })
  return response
}
