import Image from "next/image"
import { expertise, ourWork, testimonials } from "../lib/constants"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

export default function HomePage() {
  return (
    <main>
      <header className="flex justify-center px-4 py-12 md:px-8">
        <div className="relative w-[90%] max-w-7xl">
          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-lg md:h-[550px] lg:h-[700px]">
            <Image
              src="/hero-image.png"
              fill
              alt="background image of a computer."
              className="object-cover object-[100%_center]"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 top-25 flex flex-col items-center justify-start px-4 text-center">
              <h1 className="mb-6 text-2xl leading-snug font-bold sm:text-4xl md:text-5xl">
                Crafting Digital Experiences That Drive Success
              </h1>
              <p className="mx-auto max-w-2xl text-sm text-gray-200 sm:text-base md:max-w-3xl md:text-lg lg:text-xl">
                Net-Crux is a leading mobile and web app development firm, dedicated to creating
                innovative and user-centric digital solutions. We empower businesses to thrive in
                the digital landscape with cutting-edge technology and creative design.
              </p>
            </div>
          </div>
        </div>
      </header>
      <section className="flex justify-center py-12">
        <div className="w-[90%] max-w-7xl">
          <h2 className="mb-2 text-2xl font-bold md:text-3xl">Our Expertise</h2>
          <p className="mb-10 text-gray-300">
            We specialize in a range of services to meet your digital needs.
          </p>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="cursor-grab"
            // plugins={[
            //   Autoplay({
            //     delay: 2000,
            //   }),
            // ]}
          >
            <CarouselContent className="max-w-full">
              {expertise.map((item, i) => {
                return (
                  <CarouselItem key={i} className="select-none md:basis-64 lg:basis-1/3">
                    <div className="overflow-hidden rounded-2xl bg-black shadow-lg">
                      <div className="relative h-52 w-full md:h-64">
                        <Image src={item.img} fill alt="" className="object-cover" />
                      </div>
                      <div className="p-6 text-left">
                        <h3 className="mb-2 text-lg font-semibold md:text-xl">{item.title}</h3>
                        <p className="text-sm text-gray-400 md:text-base">{item.desc}</p>
                      </div>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
      <section className="flex justify-center py-12">
        <div className="w-[90%] max-w-7xl">
          <h2 className="pb-6 text-2xl font-bold md:text-3xl">Featured Projects</h2>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="cursor-grab"
            // plugins={[
            //   Autoplay({
            //     delay: 1500,
            //   }),
            // ]}
          >
            <CarouselContent className="max-w-full">
              {ourWork.map((item, i) => {
                return (
                  <CarouselItem key={i} className="select-none md:basis-64 lg:basis-1/3">
                    <div className="overflow-hidden rounded-2xl bg-black shadow-lg">
                      <div className="relative h-52 w-full md:h-64">
                        <Image src={item.img} fill alt="" className="object-cover" />
                      </div>

                      <div className="p-6 text-left">
                        <h3 className="mb-2 text-lg font-semibold md:text-xl">{item.title}</h3>
                        <p className="text-sm text-gray-400 md:text-base">{item.desc}</p>
                      </div>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
      <section className="flex justify-center px-4 pt-12 md:px-8">
        <div className="w-[90%] max-w-7xl">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">Client Testimonials</h2>
          <div className="flex flex-col gap-4 md:flex-row">
            {testimonials.map((item, i) => (
              <div key={i} className="w-full pb-6 last:border-none">
                <div className="mb-3 flex items-center gap-3">
                  <Image
                    src={item.avatar}
                    height={48}
                    width={48}
                    alt="A close up potrait of the reviewer"
                    className="rounded-full"
                  />
                  <div>
                    <h5 className="font-semibold">{item.reviewer}</h5>
                    <p className="text-xs text-gray-400">{item.reviewDate}</p>
                  </div>
                </div>

                <h4 className="mb-3 text-lg text-yellow-400">
                  {Array.from({ length: item.rating }).map(() => {
                    return "⭐"
                  })}
                </h4>

                <p className="mb-4 text-sm leading-relaxed text-gray-300 md:text-base">
                  {item.review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
