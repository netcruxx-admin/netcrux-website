import { Icon } from "@iconify/react"
import type { Metadata } from "next"

import { resources } from "@/lib/constants"
import InsightsSearch from "@/components/common/InsightsSearch"

export const metadata: Metadata = {
  title: "Insights — Net-Crux",
  description:
    "Articles, guides, and resources on mobile and web app development, design, and technology trends from the Net-Crux team.",
}

export default function Page() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12 md:max-w-5xl">
      <h1 className="mb-3 text-4xl font-bold md:text-5xl">Insights</h1>
      <p className="mb-8 max-w-2xl text-gray-500">
        Practical guides, engineering deep-dives, and product thinking from the people building at
        Net-Crux.
      </p>

      <InsightsSearch />

      {/* Featured Articles — shown when featuredArticles has items with slugs */}

      <h2 className="mb-6 text-xl font-bold md:text-2xl">Resources</h2>
      <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {resources.map((r, i) => (
          <button
            key={i}
            className="flex items-center gap-4 rounded-lg border border-gray-200 px-5 py-3 text-left transition hover:border-gray-300 hover:bg-[#f2f4f1]"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white">
              <Icon icon="mdi:file-download-outline" className="text-accent" />
            </div>
            <p className="flex-1 text-sm leading-tight font-semibold">{r.title}</p>
          </button>
        ))}
      </div>
    </section>
  )
}
