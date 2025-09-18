import Image from "next/image"

export default function Home() {
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

            {/* Text Content */}
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
    </main>
  )
}
