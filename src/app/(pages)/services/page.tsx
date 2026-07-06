import Link from "next/link"
import { Icon } from "@iconify/react"
import type { Metadata } from "next"

import { process, services } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Services — Net-Crux",
  description:
    "End-to-end app development services: mobile, web, UI/UX design, cloud & DevOps, APIs, and ongoing QA and maintenance.",
}

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 md:max-w-5xl">
      <h1 className="mb-3 text-sm font-bold tracking-wide text-accent uppercase">Our Services</h1>

      <h2 className="mb-4 text-3xl leading-tight font-extrabold md:text-4xl">
        Comprehensive App Development Solutions
      </h2>

      <p className="mb-12 max-w-2xl text-gray-500">
        Net-Crux offers a full suite of app development services, from initial concept to deployment
        and beyond. We build innovative, user-centric mobile and web applications that drive business
        growth and enhance user experiences.
      </p>

      <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((item, i) => (
          <div
            key={i}
            className="flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm p-6 transition-colors hover:border-gray-300"
          >
            <div className="mb-4 flex size-12 items-center justify-center rounded-lg border border-gray-200 bg-white">
              <Icon icon={item.icon} className="size-6 text-accent" />
            </div>
            <h3 className="mb-2 text-base font-semibold">{item.title}</h3>
            <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Process */}
      <h2 className="mb-2 text-3xl font-bold md:text-4xl">How We Work</h2>
      <p className="mb-10 text-gray-500">
        A proven, transparent process that keeps you in the loop from kickoff to launch.
      </p>
      <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((item, i) => (
          <div key={i} className="relative rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
            <span className="absolute top-6 right-6 text-2xl font-extrabold text-gray-600">
              {item.step}
            </span>
            <Icon icon={item.icon} className="mb-4 size-9 text-accent" />
            <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-8 text-center">
        <h3 className="mb-2 text-xl font-bold md:text-2xl">Not sure which service you need?</h3>
        <p className="mx-auto mb-6 max-w-xl text-sm text-gray-500">
          Book a free discovery call and we&apos;ll help you map out the right approach for your
          product and budget.
        </p>
        <Link
          href="/contact"
          className="button-gradient inline-block rounded-lg px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:scale-105 hover:brightness-110"
        >
          Book a Free Call
        </Link>
      </div>
    </main>
  )
}
