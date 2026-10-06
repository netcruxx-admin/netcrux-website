"use client"

import { useRef } from "react"
import { Icon } from "@iconify/react"
import Autoplay from "embla-carousel-autoplay"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import type { TestimonialsType } from "@/lib/types"

export default function TestimonialsCarousel({ items }: { items: TestimonialsType[] }) {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }),
  )

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[autoplay.current]}
      className="cursor-grab py-3"
    >
      <CarouselContent className="max-w-full">
        {items.map((item, i) => (
          <CarouselItem key={i} className="select-none md:basis-1/2 lg:basis-1/3">
            <div className="card-hover flex h-full flex-col rounded-2xl border border-gray-200 bg-white shadow-sm p-6 hover:border-gray-300">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h5 className="font-semibold">{item.reviewer}</h5>
                  <p className="text-xs text-gray-500">
                    {item.role}, {item.company}
                  </p>
                </div>
                <div className="flex shrink-0 gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Icon
                      key={idx}
                      icon={idx < item.rating ? "mdi:star" : "mdi:star-outline"}
                      className="size-4"
                    />
                  ))}
                </div>
              </div>

              <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-600">
                &ldquo;{item.review}&rdquo;
              </p>

              <div className="flex items-center justify-between border-t border-gray-200 pt-4 text-xs text-gray-400">
                <span>{item.reviewDate}</span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
