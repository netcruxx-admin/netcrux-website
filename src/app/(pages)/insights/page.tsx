import Image from "next/image"
import { Icon } from "@iconify/react"

import { featuredArticles, resources, topArticles } from "@/lib/constants"

export default function Page() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12 md:max-w-5xl">
      <h1 className="mb-6 text-2xl font-bold md:text-4xl">Insights</h1>

      <div className="mb-10">
        <div className="flex items-center rounded-md bg-zinc-900 px-3">
          <Icon icon="mdi:search" className="size-5 text-gray-400" />
          <input
            className="w-full bg-transparent p-3 text-white outline-none"
            placeholder="Search articles..."
          />
        </div>
      </div>

      <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {topArticles.map((a, i) => (
          <div key={i}>
            <div className="relative mb-3 h-48 w-full md:h-40 lg:h-44">
              <Image
                src={a.img}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="rounded object-cover"
              />
            </div>
            <h2 className="mb-1 text-sm font-semibold md:text-base">{a.title}</h2>
            <p className="text-xs text-gray-400 md:text-sm">{a.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-6 text-xl font-bold md:text-2xl">Featured Articles</h2>
      <div className="mb-12 space-y-10">
        {featuredArticles.map((item, i) => (
          <div key={i} className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <p className="mb-1 text-xs text-gray-400">{item.category}</p>
              <h3 className="mb-2 font-semibold">{item.title}</h3>
              <p className="mb-4 text-sm text-gray-400">{item.desc}</p>
              <button className="rounded-md bg-gray-700 px-4 py-2 text-sm text-white transition-colors">
                Read More
              </button>
            </div>
            <div className="relative h-60 w-full">
              <Image
                src={item.img}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <h2 className="mb-6 text-xl font-bold md:text-2xl">Resources</h2>
      <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {resources.map((r, i) => (
          <button
            key={i}
            className="flex items-center gap-4 rounded-lg border border-gray-700 px-5 py-3 text-left transition hover:bg-zinc-800"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-700 bg-zinc-900">
              <Icon icon="mdi:file-outline" />
            </div>
            <div className="flex-1">
              <p className="text-sm leading-tight font-semibold">{r.title}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
