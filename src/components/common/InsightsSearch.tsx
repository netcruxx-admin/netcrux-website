"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify/react"

import { topArticles } from "@/lib/constants"

const articles = topArticles.filter((a) => a.slug)

export default function InsightsSearch() {
  const [query, setQuery] = useState("")

  const filtered = query.trim()
    ? articles.filter((a) => {
        const q = query.toLowerCase()
        return (
          a.title.toLowerCase().includes(q) ||
          a.desc.toLowerCase().includes(q) ||
          a.category?.toLowerCase().includes(q) ||
          a.author?.toLowerCase().includes(q)
        )
      })
    : articles

  return (
    <>
      <div className="mb-12">
        <div className="flex items-center rounded-md border border-gray-200 bg-white px-3">
          <Icon icon="mdi:search" className="size-5 text-gray-500" />
          <input
            className="w-full bg-transparent p-3 text-gray-900 outline-none"
            placeholder="Search articles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button onClick={() => setQuery("")} aria-label="Clear search">
              <Icon icon="mdi:close" className="size-4 text-gray-400 hover:text-gray-700" />
            </button>
          )}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {filtered.map((a, i) => (
            <Link key={i} href={`/insights/${a.slug}`} className="group">
              <article>
                <div className="relative mb-3 h-48 w-full overflow-hidden rounded-lg md:h-40 lg:h-44">
                  <Image
                    src={a.img}
                    alt={a.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {a.category && (
                    <span className="absolute top-3 left-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      {a.category}
                    </span>
                  )}
                </div>
                <h2 className="mb-1 text-sm font-semibold group-hover:text-accent md:text-base">
                  {a.title}
                </h2>
                <p className="mb-2 text-xs text-gray-500 md:text-sm">{a.desc}</p>
                <p className="text-xs text-gray-400">
                  {a.author} · {a.date} · {a.readTime}
                </p>
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mb-14 flex flex-col items-center justify-center py-16 text-center">
          <Icon icon="mdi:text-search" className="mb-3 size-10 text-gray-300" />
          <p className="text-sm font-medium text-gray-500">
            No articles found for &ldquo;{query}&rdquo;
          </p>
          <p className="mt-1 text-xs text-gray-400">Try a different keyword or category</p>
        </div>
      )}
    </>
  )
}
