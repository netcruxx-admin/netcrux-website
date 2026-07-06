"use client"

import { useRef } from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { ExpertiseType } from "@/lib/types"

export default function ExpertiseCarousel({ items }: { items: ExpertiseType[] }) {
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
          <CarouselItem key={i} className="select-none md:basis-64 lg:basis-1/3">
            <div className="card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg hover:border-gray-300">
              <div className="relative h-52 w-full md:h-64">
                <Image
                  src={item.img}
                  fill
                  alt={item.title}
                  sizes="(max-width: 768px) 100vw, (max-width:1024px) 25vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 p-6 text-left">
                <h3 className="mb-2 text-lg font-semibold md:text-xl">{item.title}</h3>
                <p className="text-sm text-gray-500 md:text-base">{item.desc}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  )
}
