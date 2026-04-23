import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"
import { execFile } from "child_process"
import { promisify } from "util"
import { CLIENTS } from "@/lib/clients"

const exec = promisify(execFile)

/** slug → camelCase variabelnavn */
function toCamel(slug: string) {
  return slug.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())
}

/** Validér at slug kun inneholder lovlige tegn */
function isValidSlug(slug: string) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)
}

export async function POST(request: Request) {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Kun tilgjengelig i dev-mode. Kjør `npm run dev` lokalt og prøv igjen.",
      },
      { status: 403 },
    )
  }

  const body = await request.json().catch(() => null)
  if (!body || typeof body.slug !== "string") {
    return NextResponse.json(
      { ok: false, error: "Mangler slug" },
      { status: 400 },
    )
  }

  const { slug } = body as { slug: string }

  if (!isValidSlug(slug)) {
    return NextResponse.json(
      { ok: false, error: "Ugyldig slug" },
      { status: 400 },
    )
  }

  const client = CLIENTS.find((c) => c.slug === slug)
  if (!client) {
    return NextResponse.json(
      { ok: false, error: "Fant ikke klienten" },
      { status: 404 },
    )
  }

  const root = process.cwd()
  const camel = toCamel(slug)

  try {
    // 1. Slett clients/[slug]/
    const clientDir = path.join(root, "clients", slug)
    await fs.rm(clientDir, { recursive: true, force: true })

    // 2. Oppdater src/app/[client]/page.tsx
    const dynRoutePath = path.join(root, "src/app/[client]/page.tsx")
    let dynRoute = await fs.readFile(dynRoutePath, "utf8")
    dynRoute = dynRoute.replace(
      new RegExp(
        `^\\s*"${slug}": \\(\\) => import\\("\\.\\./\\.\\./\\.\\./clients/${slug}/page"\\),\\s*\\n`,
        "m",
      ),
      "",
    )
    await fs.writeFile(dynRoutePath, dynRoute, "utf8")

    // 3. Oppdater src/lib/clients.ts
    const clientsLibPath = path.join(root, "src/lib/clients.ts")
    let clientsLib = await fs.readFile(clientsLibPath, "utf8")
    clientsLib = clientsLib.replace(
      new RegExp(
        `^import { config as ${camel} } from "\\.\\./\\.\\./clients/${slug}/config"\\s*\\n`,
        "m",
      ),
      "",
    )
    clientsLib = clientsLib.replace(
      new RegExp(`^\\s*${camel},\\s*\\n`, "m"),
      "",
    )
    await fs.writeFile(clientsLibPath, clientsLib, "utf8")

    // 4. Oppdater src/app/page.tsx
    const landingPath = path.join(root, "src/app/page.tsx")
    let landing = await fs.readFile(landingPath, "utf8")
    landing = landing.replace(
      new RegExp(
        `^import { config as ${camel} } from "\\.\\./\\.\\./clients/${slug}/config"\\s*\\n`,
        "m",
      ),
      "",
    )
    landing = landing.replace(
      new RegExp(`^\\s*${camel},\\s*\\n`, "m"),
      "",
    )
    await fs.writeFile(landingPath, landing, "utf8")

    // 5. Commit + push
    let gitResult = "ok"
    try {
      await exec("git", ["add", "-A"], { cwd: root })
      await exec(
        "git",
        ["commit", "-m", `fjern: ${slug}`],
        { cwd: root },
      )
      await exec("git", ["push"], { cwd: root })
    } catch (gitErr) {
      gitResult =
        "Filer er slettet lokalt, men git commit/push feilet. Commit manuelt."
      console.error("git error:", gitErr)
    }

    return NextResponse.json({
      ok: true,
      slug,
      firmanavn: client.firmanavn,
      git: gitResult,
    })
  } catch (err) {
    console.error("remove-client error:", err)
    return NextResponse.json(
      {
        ok: false,
        error:
          err instanceof Error
            ? err.message
            : "Ukjent feil ved fjerning",
      },
      { status: 500 },
    )
  }
}
