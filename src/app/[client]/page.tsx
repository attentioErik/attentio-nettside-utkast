import { notFound } from "next/navigation"

// Importer alle klient-configs her etter hvert som de legges til
const clients: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  "straume-roer": () => import("../../../clients/straume-roer/page"),
  "lumiere-beauty": () => import("../../../clients/lumiere-beauty/page"),
  "nordvind-energi": () => import("../../../clients/nordvind-energi/page"),
  "am-mur-betong": () => import("../../../clients/am-mur-betong/page"),
  "itreet": () => import("../../../clients/itreet/page"),
  "urheims-elektrokompani": () => import("../../../clients/urheims-elektrokompani/page"),
  "mm-hjem-kontorservice": () => import("../../../clients/mm-hjem-kontorservice/page"),
}

export default async function ClientRoute({
  params,
}: {
  params: Promise<{ client: string }>
}) {
  const { client } = await params
  const loader = clients[client]
  if (!loader) return notFound()

  const { default: ClientPage } = await loader()
  return <ClientPage />
}

export async function generateStaticParams() {
  return Object.keys(clients).map((client) => ({ client }))
}
