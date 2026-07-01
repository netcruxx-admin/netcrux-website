import Link from "next/link"
import { Icon } from "@iconify/react"
import type { Metadata } from "next"

import { ourValues, stats, team, whyChooseUs } from "@/lib/constants"

export const metadata: Metadata = {
  title: "About — Net-Crux",
  description:
    "Net-Crux is a mobile and web app development studio. Meet the team, our values, and why businesses choose us.",
}

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 md:max-w-5xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">About Us</h1>
        <p className="max-w-2xl text-sm text-gray-600 md:text-base">
          At Net-Crux, we&apos;re more than a development firm — we&apos;re your partners in
          innovation. We specialize in mobile and web app development that drives business growth and
          user engagement, turning ambitious ideas into products people love to use.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-12 grid grid-cols-2 gap-4 rounded-2xl border border-gray-200 bg-white shadow-sm p-6 md:grid-cols-4">
        {stats.map((item, i) => (
          <div key={i} className="text-center">
            <p className="accent-text-gradient text-2xl font-extrabold text-transparent md:text-3xl">
              {item.value}
            </p>
            <p className="mt-1 text-xs text-gray-500">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-2 text-xl font-semibold">Our Mission</h2>
          <p className="text-sm text-gray-600 md:text-base">
            To empower businesses with cutting-edge technology solutions that transform ideas into
            reality. We work closely with our clients to understand their unique needs and deliver
            tailored solutions that exceed expectations.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-xl font-semibold">Our Story</h2>
          <p className="text-sm text-gray-600 md:text-base">
            Founded by a small group of engineers and designers, Net-Crux has grown into a trusted
            studio that has shipped 120+ products. We&apos;ve stayed lean and senior-led so every
            client gets the attention their product deserves.
          </p>
        </div>
      </div>

      {/* Team */}
      <h2 className="mb-6 text-xl font-semibold md:text-2xl">Meet the Team</h2>
      <div className="mb-14 grid grid-cols-2 gap-6 text-center md:grid-cols-4">
        {team.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 transition-colors hover:border-gray-300"
          >
            <div className="brand-gradient mx-auto mb-3 flex size-16 items-center justify-center rounded-full text-xl font-bold text-white">
              {item.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.role}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-6 text-xl font-semibold md:text-2xl">Our Values</h2>
      <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {ourValues.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-200 bg-white shadow-sm p-5 text-left text-sm transition-colors hover:border-gray-300"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <Icon icon={item.icon} className="size-5 text-accent" />
            </div>
            <p className="text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-6 text-xl font-semibold md:text-2xl">Why Choose Us?</h2>
      <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {whyChooseUs.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-200 bg-white shadow-sm p-5 text-left text-sm transition-colors hover:border-gray-300"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold">{item.title}</h3>
              <Icon icon={item.icon} className="size-5 text-accent" />
            </div>
            <p className="text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>

      <Link
        href="/contact"
        className="button-gradient mx-auto block w-fit rounded-lg px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:scale-105 hover:brightness-110"
      >
        Contact Us
      </Link>
    </main>
  )
}
