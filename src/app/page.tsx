import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify/react"

import {
  aiTools,
  expertise,
  ourWork,
  process,
  stats,
  techStack,
  testimonials,
} from "../lib/constants"
import Reveal from "@/components/common/Reveal"
import CountUp from "@/components/common/CountUp"
import ProjectsSlider from "@/components/common/ProjectsSlider"
import ExpertiseCarousel from "@/components/common/ExpertiseCarousel"

export default function HomePage() {
  return (
    <main>
      {/* Animated ambient background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="animate-float absolute -top-24 left-1/4 size-96 rounded-full bg-accent/30 blur-2xl [will-change:transform]" />
        <div className="animate-float absolute top-1/3 -right-24 size-80 rounded-full bg-accent/25 blur-2xl [animation-delay:-5s] [will-change:transform]" />
        <div className="animate-float absolute bottom-0 left-0 size-96 rounded-full bg-accent/20 blur-2xl [animation-delay:-9s] [will-change:transform]" />
      </div>

      <header className="flex justify-center px-4 py-12 md:px-8">
        <div className="relative w-[90%] max-w-7xl">
          <div className="relative h-[460px] w-full overflow-hidden rounded-2xl shadow-lg md:h-[560px] lg:h-[680px]">
            <Image
              src="/image1.png"
              fill
              priority
              alt="background image of a computer."
              className="animate-hero-image object-cover object-[100%_center]"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            {/* Breathing accent spotlight */}
            <div
              aria-hidden
              className="animate-spotlight pointer-events-none absolute -top-1/4 left-1/2 size-[120%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(var(--accent-rgb),0.45),transparent_60%)] mix-blend-screen"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
              <span className="animate-fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-gray-100 backdrop-blur-sm md:text-sm">
                <span className="pulse-dot size-2 rounded-full bg-accent"></span>
                Available for new projects
              </span>
              <h1 className="animate-fade-up mb-6 max-w-4xl text-4xl leading-[1.08] font-bold text-white [animation-delay:120ms] sm:text-5xl md:text-6xl lg:text-7xl">
                Crafting Digital Experiences That{" "}
                <span className="animate-text-shimmer bg-[linear-gradient(110deg,#fff,45%,rgba(var(--accent-rgb),1),55%,#fff)] bg-[length:250%_100%] bg-clip-text text-transparent">
                  Drive Success
                </span>
              </h1>
              <p className="animate-fade-up mx-auto max-w-2xl text-base text-gray-200 [animation-delay:240ms] sm:text-lg md:max-w-3xl md:text-xl">
                Net-Crux is a mobile and web app development studio building innovative, user-centric
                digital products. We help businesses thrive online with cutting-edge technology and
                thoughtful design.
              </p>
              <div className="animate-fade-up mt-8 flex flex-col items-center gap-3 [animation-delay:360ms] sm:flex-row">
                <Link
                  href="/contact"
                  className="button-gradient rounded-lg px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:scale-105 hover:brightness-110"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/work"
                  className="rounded-lg border border-white/30 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/15"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="flex justify-center px-4 py-6 md:px-8">
        <Reveal className="w-[90%] max-w-7xl">
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-gray-200 bg-white shadow-sm p-6 md:grid-cols-4 md:p-8">
            {stats.map((item, i) => (
              <div key={i} className="text-center">
                <CountUp
                  value={item.value}
                  className="accent-text-gradient text-3xl font-extrabold text-transparent md:text-4xl"
                />
                <p className="mt-1 text-xs text-gray-500 md:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Expertise */}
      <section className="flex justify-center py-12">
        <Reveal className="w-[90%] max-w-7xl">
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">Our Expertise</h2>
          <p className="mb-10 max-w-2xl text-gray-600">
            From first sketch to global scale, we bring together design, engineering, and cloud
            know-how to build digital products that perform — and keep performing.
          </p>
          <ExpertiseCarousel items={expertise} />
        </Reveal>
      </section>

      {/* Featured Projects */}
      <section className="flex justify-center py-12">
        <div className="w-[90%] max-w-7xl">
          <Reveal>
            <div className="mb-6 flex items-end justify-between">
              <h2 className="text-3xl font-bold md:text-4xl">Featured Projects</h2>
              <Link href="/work" className="text-sm text-gray-500 transition hover:text-gray-900">
                View all →
              </Link>
            </div>
          </Reveal>
          <ProjectsSlider items={ourWork} />
        </div>
      </section>

      {/* Process */}
      <section className="flex justify-center py-12">
        <div className="w-[90%] max-w-7xl">
          <Reveal>
            <h2 className="mb-2 text-3xl font-bold md:text-4xl">How We Work</h2>
            <p className="mb-10 text-gray-600">
              A proven, transparent process that takes your idea from concept to launch.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, i) => (
              <Reveal key={i} delay={i * 120} className="h-full">
                <div className="card-hover relative h-full rounded-2xl border border-gray-200 bg-white shadow-sm p-6 hover:border-gray-300">
                  <span className="absolute top-6 right-6 text-2xl font-extrabold text-gray-600">
                    {item.step}
                  </span>
                  <Icon icon={item.icon} className="mb-4 size-9 text-accent" />
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="flex justify-center py-12">
        <Reveal className="w-[90%] max-w-7xl text-center">
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">Technologies We Use</h2>
          <p className="mb-10 text-gray-600">
            A modern, battle-tested toolkit — now supercharged with the latest AI capabilities.
          </p>

          {/* Infinite marquee */}
          <div className="group relative mb-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
            <div className="animate-marquee flex w-max gap-3 group-hover:[animation-play-state:paused]">
              {[...techStack, ...techStack].map((tech, i) => (
                <div
                  key={i}
                  className="flex shrink-0 items-center gap-2 rounded-full border border-gray-200 bg-white shadow-sm px-4 py-2 text-sm text-gray-600"
                >
                  <Icon icon={tech.icon} className="size-5" />
                  {tech.name}
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white shadow-sm p-6 md:p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
              <Icon icon="mdi:auto-fix" className="size-4" />
              AI-accelerated delivery
            </div>
            <p className="mb-6 text-sm text-gray-600 md:text-base">
              We build AI features into your product and use leading AI tools across our own workflow
              — so you get smarter software, shipped faster.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {aiTools.map((tool, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 transition-colors hover:border-accent/50 hover:text-gray-900"
                >
                  <Icon icon={tool.icon} className="size-5" />
                  {tool.name}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Testimonials */}
      <section className="flex justify-center px-4 pt-12 md:px-8">
        <div className="w-[90%] max-w-7xl">
          <Reveal>
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">Client Testimonials</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((item, i) => (
              <Reveal key={i} delay={i * 120} className="h-full">
                <div className="card-hover flex h-full flex-col rounded-2xl border border-gray-200 bg-white shadow-sm p-6 hover:border-gray-300">
                  <div className="mb-4 flex items-center gap-3">
                    <Image
                      src={item.avatar}
                      height={48}
                      width={48}
                      alt={item.reviewer}
                      className="size-12 rounded-full object-cover"
                    />
                    <div>
                      <h5 className="font-semibold">{item.reviewer}</h5>
                      <p className="text-xs text-gray-500">
                        {item.role}, {item.company}
                      </p>
                    </div>
                  </div>

                  <div className="mb-3 flex gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Icon
                        key={idx}
                        icon={idx < item.rating ? "mdi:star" : "mdi:star-outline"}
                        className="size-5"
                      />
                    ))}
                  </div>

                  <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-600">
                    &ldquo;{item.review}&rdquo;
                  </p>

                  <div className="flex items-center justify-between border-t border-gray-200 pt-4 text-xs text-gray-400">
                    <span>{item.reviewDate}</span>
                    {/* <span className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Icon icon="mdi:thumb-up-outline" className="size-4" />
                        {item.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon icon="mdi:comment-outline" className="size-4" />
                        {item.comments}
                      </span>
                    </span> */}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
