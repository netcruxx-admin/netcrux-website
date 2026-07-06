"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Icon } from "@iconify/react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

import ProjectGallery from "@/components/common/ProjectGallery"
import type { ourWorkType } from "@/lib/types"

export default function ProjectsSlider({ items }: { items: ourWorkType[] }) {
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }),
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", duration: 30 },
    [autoplay.current],
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    onSelect()
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  )

  return (
    <div>
      {/* Track */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-6 flex touch-pan-y select-none">
          {items.map((item, i) => (
            <div
              key={i}
              className="min-w-0 flex-[0_0_85%] pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <div className="card-hover h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:border-gray-300">
                <ProjectGallery
                  images={item.images}
                  category={item.category}
                  title={item.title}
                  startDelay={Math.round((i * 3500) / items.length)}
                />
                <div className="p-6 text-left">
                  {item.link ? (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/title mb-2 inline-flex items-center gap-1.5 text-lg font-semibold hover:text-accent md:text-xl"
                    >
                      {item.title}
                      <Icon
                        icon="mdi:open-in-new"
                        className="size-4 opacity-0 transition group-hover/title:opacity-100"
                      />
                    </Link>
                  ) : (
                    <h3 className="mb-2 text-lg font-semibold md:text-xl">{item.title}</h3>
                  )}
                  <p className="mb-4 text-sm text-gray-500 md:text-base">{item.desc}</p>
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
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to project ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === selectedIndex ? "w-6 bg-accent" : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
