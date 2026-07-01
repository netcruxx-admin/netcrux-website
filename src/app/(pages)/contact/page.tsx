"use client"

import { useState } from "react"
import { Icon } from "@iconify/react"

import { contactInfo, faqs, services } from "@/lib/constants"

const initialForm = {
  name: "",
  email: "",
  service: services[0].title,
  budget: "Not sure yet",
  message: "",
}

type SubmitStatus = "idle" | "sending" | "success" | "error"

export default function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<SubmitStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("sending")
    setErrorMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Something went wrong. Please try again.")
      }

      setStatus("success")
      setForm(initialForm)
    } catch (err) {
      setStatus("error")
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  const details = [
    { icon: "mdi:email-outline", label: "Email", value: contactInfo.email },
    { icon: "mdi:phone-outline", label: "Phone", value: contactInfo.phone },
    { icon: "mdi:map-marker-outline", label: "Location", value: contactInfo.location },
    { icon: "mdi:clock-outline", label: "Hours", value: contactInfo.hours },
  ]

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 md:max-w-5xl">
      <h1 className="mb-4 text-4xl font-bold md:text-5xl">Let&apos;s Build Something Together</h1>
      <p className="mb-10 max-w-2xl text-gray-500">
        Tell us about your project and we&apos;ll get back to you within one business day with next
        steps. No obligation, no jargon — just a conversation about your idea.
      </p>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-gray-200 bg-white shadow-sm p-6 md:col-span-3 md:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className="w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="jane@company.com"
                className="w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-accent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="service" className="mb-1.5 block text-sm font-medium">
                Service
              </label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-accent"
              >
                {services.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="budget" className="mb-1.5 block text-sm font-medium">
                Estimated budget
              </label>
              <select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-accent"
              >
                <option>Not sure yet</option>
                <option>Under $5k</option>
                <option>$5k – $15k</option>
                <option>$15k – $50k</option>
                <option>$50k+</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your idea, goals, and timeline..."
              className="w-full resize-none rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-accent"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="button-gradient flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "sending" ? (
              <>
                <Icon icon="mdi:loading" className="size-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Enquiry"
            )}
          </button>

          {status === "success" && (
            <p className="flex items-center gap-2 text-sm font-medium text-green-600">
              <Icon icon="mdi:check-circle-outline" className="size-4 shrink-0" />
              Thanks! Your enquiry has been sent — we&apos;ll get back to you within one business day.
            </p>
          )}
          {status === "error" && (
            <p className="flex items-center gap-2 text-sm font-medium text-red-600">
              <Icon icon="mdi:alert-circle-outline" className="size-4 shrink-0" />
              {errorMessage}
            </p>
          )}
        </form>

        {/* Details */}
        <div className="space-y-4 md:col-span-2">
          {details.map((d) => (
            <div
              key={d.label}
              className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white shadow-sm p-4"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white">
                <Icon icon={d.icon} className="size-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500">{d.label}</p>
                {d.label === "Email" ? (
                  <a href={`mailto:${d.value}`} className="text-sm font-medium hover:underline">
                    {d.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium">{d.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <h2 className="mt-16 mb-6 text-xl font-bold md:text-2xl">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="group rounded-xl border border-gray-200 bg-white shadow-sm p-5 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold md:text-base">
              {faq.question}
              <Icon
                icon="mdi:chevron-down"
                className="size-5 shrink-0 text-gray-500 transition-transform group-open:rotate-180"
              />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">{faq.answer}</p>
          </details>
        ))}
      </div>
    </main>
  )
}
