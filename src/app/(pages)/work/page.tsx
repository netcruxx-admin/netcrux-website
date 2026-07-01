import Link from "next/link"
import { Icon } from "@iconify/react"
import type { Metadata } from "next"

import { ourWork } from "@/lib/constants"
import ProjectGallery from "@/components/common/ProjectGallery"

export const metadata: Metadata = {
  title: "Our Work — Net-Crux",
  description:
    "Explore mobile and web apps Net-Crux has designed and built — from FinTech and e-commerce to healthcare and logistics.",
}

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 pt-12 md:max-w-5xl">
      <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Work</h1>
      <p className="mb-10 max-w-2xl text-gray-500">
        A selection of products we&apos;ve designed and engineered for startups and growing
        businesses — each built to solve a real problem and drive measurable results.
      </p>

      <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ourWork.map((item, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-colors hover:border-gray-300"
          >
            <ProjectGallery images={item.images} category={item.category} title={item.title} />
            <div className="p-5">
              {item.link ? (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/title mb-2 inline-flex items-center gap-1.5 text-lg font-bold hover:text-accent"
                >
                  {item.title}
                  <Icon icon="mdi:open-in-new" className="size-4 opacity-0 transition group-hover/title:opacity-100" />
                </Link>
              ) : (
                <h2 className="mb-2 text-lg font-bold">{item.title}</h2>
              )}
              <p className="mb-4 text-sm text-gray-500">{item.desc}</p>
              {item.link ? (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-accent underline-offset-2 hover:underline"
                >
                  <Icon icon="mdi:trending-up" className="size-4" />
                  {item.result}
                </Link>
              ) : (
                <p className="flex items-center gap-1.5 text-sm font-medium text-accent">
                  <Icon icon="mdi:trending-up" className="size-4" />
                  {item.result}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-12 flex justify-center">
        <Link
          href="/contact"
          className="border-accent text-accent hover:bg-accent rounded-lg border px-6 py-3 text-sm font-semibold transition-all hover:text-white"
        >
          Have a project in mind? Let&apos;s talk →
        </Link>
      </div>
    </main>
  )
}
