import { NextResponse } from "next/server"
import { CLIENTS, COOKIE_NAME } from "@/lib/clients"

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  if (!body || typeof body.slug !== "string" || typeof body.passord !== "string") {
    return NextResponse.json({ ok: false, error: "Mangler felt" }, { status: 400 })
  }

  const { slug, passord } = body as { slug: string; passord: string }
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
    maxAge: 60 * 60 * 24 * 30, // 30 dager
  })
  return response
}
