import Link from "next/link"

export default function Cta() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-12">
      <div className="rounded-3xl border border-gray-200 bg-accent/5 px-6 py-12 text-center">
        <h2 className="mb-3 text-3xl font-bold md:text-4xl">Ready to Bring Your Idea to Life?</h2>
        <p className="mx-auto mb-6 max-w-xl text-sm text-pretty text-gray-500 md:text-base">
          Contact us today for a free consultation and let&apos;s discuss how we can help you achieve
          your digital goals.
        </p>
        <Link
          href="/contact"
          className="button-gradient inline-block rounded-lg px-6 py-3 font-medium text-white shadow-md transition-all hover:scale-105 hover:brightness-110"
        >
          Get a Free Consultation
        </Link>
      </div>
    </section>
  )
}
