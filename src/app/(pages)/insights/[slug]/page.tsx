import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

import { getAllInsights, getInsightBySlug } from "@/lib/insights"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllInsights().map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getInsightBySlug(slug)
  if (!article) return {}
  return {
    title: `${article.title} — Net-Crux`,
    description: article.desc,
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const article = getInsightBySlug(slug)
  if (!article) notFound()

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 md:max-w-4xl">
      {/* Back link */}
      <Link
        href="/insights"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-gray-900"
      >
        ← Back to Insights
      </Link>

      {/* Header */}
      <div className="mb-8 mt-4">
        <span className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
          {article.category}
        </span>
        <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl">{article.title}</h1>
        <p className="mb-5 text-base text-gray-500">{article.desc}</p>
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <span>{article.author}</span>
          <span>·</span>
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
      </div>

      {/* Cover image */}
      <div className="relative mb-10 h-64 w-full overflow-hidden rounded-2xl md:h-80">
        <Image
          src={article.img}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover"
          priority
        />
      </div>

      {/* Intro */}
      <p className="mb-10 text-base leading-relaxed text-gray-700 md:text-lg">{article.intro}</p>

      {/* Sections */}
      <div className="space-y-10">
        {article.sections.map((section, i) => (
          <section key={i}>
            <h2 className="mb-3 text-xl font-semibold text-gray-900 md:text-2xl">
              {section.heading}
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-gray-600 md:text-base">
              {section.body}
            </p>
            {section.bullets && (
              <ul className="space-y-2 pl-1">
                {section.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-3 text-sm text-gray-600 md:text-base">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {/* Conclusion */}
      <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <p className="text-sm leading-relaxed text-gray-600 md:text-base">{article.conclusion}</p>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="mb-4 text-sm text-gray-500">Want to build something together?</p>
        <Link
          href="/contact"
          className="button-gradient inline-block rounded-lg px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:scale-105 hover:brightness-110"
        >
          Let&apos;s Talk
        </Link>
      </div>
    </main>
  )
}
