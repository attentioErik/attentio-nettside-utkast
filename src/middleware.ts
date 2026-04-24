import { NextResponse, type NextRequest } from "next/server"
import { CLIENTS, COOKIE_NAME } from "@/lib/clients"

const PORTAL_PASSORD = "attentio_26"
const PORTAL_COOKIE = "attentio-unlock-portal"

const PROTECTED_SLUGS = new Set(CLIENTS.map((c) => c.slug))

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Beskytt portalen (/)
  if (pathname === "/") {
    const cookie = request.cookies.get(PORTAL_COOKIE)
    if (cookie?.value === PORTAL_PASSORD) return NextResponse.next()

    const urlPassord = request.nextUrl.searchParams.get("p")
    if (urlPassord === PORTAL_PASSORD) {
      const destination = request.nextUrl.clone()
      destination.searchParams.delete("p")
      const response = NextResponse.redirect(destination)
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

    const unlockUrl = request.nextUrl.clone()
    unlockUrl.pathname = "/unlock/portal"
    unlockUrl.search = ""
    return NextResponse.redirect(unlockUrl)
  }

  // Beskytt klient-ruter (/[slug])
  const segments = pathname.split("/").filter(Boolean)
  const slug = segments[0]

  if (!slug || !PROTECTED_SLUGS.has(slug)) return NextResponse.next()

  const client = CLIENTS.find((c) => c.slug === slug)
  if (!client) return NextResponse.next()

  const cookie = request.cookies.get(COOKIE_NAME(slug))
  if (cookie?.value === client.passord) return NextResponse.next()

  // Auto-unlock via ?p=passord i URL-en
  const urlPassord = request.nextUrl.searchParams.get("p")
  if (urlPassord === client.passord) {
    const destination = request.nextUrl.clone()
    destination.searchParams.delete("p")
    const response = NextResponse.redirect(destination)
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

  const unlockUrl = request.nextUrl.clone()
  unlockUrl.pathname = `/unlock/${slug}`
  unlockUrl.search = ""
  return NextResponse.redirect(unlockUrl)
}

export const config = {
  matcher: [
    "/((?!api|_next|unlock|hero-varianter|docs|.*\\.).*)",
  ],
}
