import { NextResponse, type NextRequest } from "next/server"
import { CLIENTS, COOKIE_NAME } from "@/lib/clients"

const PROTECTED_SLUGS = new Set(CLIENTS.map((c) => c.slug))

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Kun beskytt klient-ruter (/[slug] eller /[slug]/...)
  const segments = pathname.split("/").filter(Boolean)
  const slug = segments[0]

  if (!slug || !PROTECTED_SLUGS.has(slug)) {
    return NextResponse.next()
  }

  const client = CLIENTS.find((c) => c.slug === slug)
  if (!client) return NextResponse.next()

  const cookie = request.cookies.get(COOKIE_NAME(slug))
  if (cookie?.value === client.passord) {
    return NextResponse.next()
  }

  const unlockUrl = request.nextUrl.clone()
  unlockUrl.pathname = `/unlock/${slug}`
  unlockUrl.search = ""
  return NextResponse.redirect(unlockUrl)
}

export const config = {
  matcher: [
    /*
     * Match alle ruter unntatt:
     * - api (route-handlere)
     * - _next (statiske assets)
     * - unlock (selve gate-siden)
     * - hero-varianter (intern showcase)
     * - favicon og andre filer med endelse
     */
    "/((?!api|_next|unlock|hero-varianter|.*\\.).*)",
  ],
}
