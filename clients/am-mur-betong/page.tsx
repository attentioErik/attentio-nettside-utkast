import { config } from "./config"
import ClientShell from "@/components/templates/ClientShell"

export default function ClientPage() {
  return <ClientShell config={config} />
}
