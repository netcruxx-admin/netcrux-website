import React from "react"
import { ourWorkData } from "../../utils/constants"
import Image from "next/image"

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 pt-12 md:max-w-5xl">
      <h1 className="mb-4 text-2xl font-bold md:text-4xl">Our Work</h1>
      <p className="mb-10 text-gray-400">
        Net-Crux offers a full suite of app development services, from initial concept to deployment
        and beyond. We specialize in creating innovative, user-centric mobile and web applications
        that drive business growth and enhance user experiences.
      </p>

      <div className="-mx-4 mb-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {ourWorkData.map((item, i) => {
          return (
            <div key={i} className="flex flex-col items-center gap-2 p-4 text-center">
              <Image src="/work.png" width={256} height={208} alt="" className="rounded-4xl" />
              <span className="font-bold">{item.title}</span>
              <p className="font-[500] text-gray-400">{item.desc}</p>
            </div>
          )
        })}
      </div>
      <button className="hover:button-gradient mx-auto block rounded-md border border-zinc-800 p-3 font-medium">
        View All Projects
      </button>
    </main>
  )
}
