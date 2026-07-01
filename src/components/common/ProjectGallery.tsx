"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { Icon } from "@iconify/react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

type ProjectGalleryProps = {
  images: string[]
  category: string
  title: string
}

export default function ProjectGallery({ images, category, title }: ProjectGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }),
  ])
  const [selected, setSelected] = useState(0)
  const hasMultiple = images.length > 1

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    onSelect()
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi])
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div className="group/gallery relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative flex h-72 w-full flex-[0_0_100%] items-center justify-center bg-gradient-to-br from-accent/15 via-white to-accent/10"
            >
              <Image
                src={src}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                alt={`${title} screenshot ${i + 1}`}
                className="object-contain p-4 drop-shadow-xl"
              />
            </div>
          ))}
        </div>
      </div>

      <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 shadow-sm ring-1 ring-black/5 backdrop-blur-sm">
        {category}
      </span>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous screenshot"
            className="absolute top-1/2 left-2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-700 opacity-0 shadow-sm ring-1 ring-black/5 backdrop-blur-sm transition hover:bg-white hover:text-accent group-hover/gallery:opacity-100"
          >
            <Icon icon="mdi:chevron-left" className="size-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next screenshot"
            className="absolute top-1/2 right-2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-700 opacity-0 shadow-sm ring-1 ring-black/5 backdrop-blur-sm transition hover:bg-white hover:text-accent group-hover/gallery:opacity-100"
          >
            <Icon icon="mdi:chevron-right" className="size-5" />
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollTo(i)}
                aria-label={`Go to screenshot ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  selected === i ? "bg-accent w-5" : "w-1.5 bg-gray-400/60 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
