import { Icon } from "@iconify/react"
import { whyChooseUs, ourValues, team } from "../../utils/constants"

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 md:max-w-5xl">
      <div className="mb-6">
        <h1 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">About Us</h1>
        <p className="text-sm text-gray-300 md:text-base">
          At Net-Crux, we&apos;re more than just a development firm; we&apos;re your partners in
          innovation. With a passion for crafting exceptional digital experiences, we specialize in
          mobile and web app development that drives business growth and user engagement.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">Our Mission</h2>
        <p className="text-sm text-gray-300 md:text-base">
          Our mission is to empower businesses with cutting-edge technology solutions that transform
          ideas into reality. We believe in a collaborative approach, working closely with our
          clients to understand their unique needs and deliver tailored solutions that exceed
          expectations.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">Our Team</h2>
        <p className="text-sm text-gray-300 md:text-base">
          Our team comprises seasoned developers, designers, and project managers with a wealth of
          experience in the tech industry. We&apos;re a diverse group of creative thinkers and
          problem-solvers, united by a shared commitment to excellence and innovation.
        </p>
      </div>

      <div className="my-10 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
        {team.map((item, i) => (
          <div key={i}>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-400">{item.role}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-6 text-xl font-semibold md:text-2xl">Our Values</h2>
      <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {ourValues.map((item, i) => (
          <div
            key={i}
            className="rounded-lg border border-zinc-500 bg-zinc-800 p-5 text-left text-sm"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <Icon icon={item.icon} className="size-5" />
            </div>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-6 text-xl font-semibold md:text-2xl">Why Choose Us?</h2>
      <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {whyChooseUs.map((item, i) => (
          <div
            key={i}
            className="rounded-lg border border-zinc-500 bg-zinc-800 p-5 text-left text-sm"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <Icon icon={item.icon} className="size-5" />
            </div>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>

      <button className="hover:button-gradient mx-auto block rounded bg-white px-5 py-2 text-sm font-bold text-black transition">
        Contact Us
      </button>
    </main>
  )
}
