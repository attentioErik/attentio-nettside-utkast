import type { Config } from "@/types/config"

export default function SiteFooter({ config }: { config: Config }) {
  return (
    <footer className="py-8 px-6 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-semibold text-gray-900 dark:text-white">
          {config.firmanavn}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Nettside av{" "}
          <a
            href="https://attentio.no"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ color: "var(--primary)" }}
          >
            Attentio AS
          </a>
        </p>
      </div>
    </footer>
  )
}
