import Image from "next/image"
import { Icon } from "@iconify/react"
import type { Metadata } from "next"

import { featuredArticles, resources, topArticles } from "@/lib/constants"

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

      <div className="mb-12">
        <div className="flex items-center rounded-md border border-gray-200 bg-white px-3">
          <Icon icon="mdi:search" className="size-5 text-gray-500" />
          <input
            className="w-full bg-transparent p-3 text-gray-900 outline-none"
            placeholder="Search articles..."
          />
        </div>
      </div>

      <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {topArticles.map((a, i) => (
          <article key={i} className="group cursor-pointer">
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
        ))}
      </div>

      <h2 className="mb-6 text-xl font-bold md:text-2xl">Featured Articles</h2>
      <div className="mb-12 space-y-10">
        {featuredArticles.map((item, i) => (
          <article key={i} className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <p className="mb-1 text-xs font-medium tracking-wide text-accent uppercase">
                {item.category}
              </p>
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="mb-3 text-sm text-gray-500">{item.desc}</p>
              <p className="mb-4 text-xs text-gray-400">
                {item.author} · {item.date} · {item.readTime}
              </p>
              <button className="w-fit rounded-md bg-accent px-4 py-2 text-sm text-white transition-colors hover:bg-accent-hover">
                Read More
              </button>
            </div>
            <div className="relative h-60 w-full overflow-hidden rounded-lg">
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </article>
        ))}
      </div>

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
