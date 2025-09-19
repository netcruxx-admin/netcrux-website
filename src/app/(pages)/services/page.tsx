import { Icon } from "@iconify/react"

import { services } from "@/lib/constants"

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 md:max-w-5xl">
      <h1 className="mb-7 text-2xl font-bold text-white md:text-2xl">Our Services</h1>

      <h2 className="mb-4 text-3xl leading-tight font-extrabold md:text-4xl">
        Comprehensive App Development Solutions
      </h2>

      <p className="mb-10 text-gray-400">
        Net-Crux offers a full suite of app development services, from initial concept to deployment
        and beyond. We specialize in creating innovative, user-centric mobile and web applications
        that drive business growth and enhance user experiences.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {services.map((item, i) => (
          <div
            key={i}
            className="flex flex-col justify-start rounded-xl border border-zinc-800 p-6"
          >
            <Icon icon={item.icon} className="mb-4 size-10" />
            <h3 className="mb-2 text-base font-semibold">{item.title}</h3>
            <p className="text-sm leading-relaxed text-pretty text-gray-400 md:text-[13px] lg:text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}
