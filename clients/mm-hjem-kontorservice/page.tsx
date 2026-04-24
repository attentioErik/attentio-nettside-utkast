// clients/_template/page.tsx
// Kopier til clients/[slug]/page.tsx og fjern kommentarer

import { config } from "./config"
import ClientShell from "@/components/templates/ClientShell"

export default function ClientPage() {
  return <ClientShell config={config} />
}
