"use client"

import { useEffect, useState } from "react"
import { Icon } from "@iconify/react"

type Accent = {
  key: string
  label: string
  swatch: string
}

const ACCENTS: Accent[] = [
  { key: "blue", label: "Ocean Blue", swatch: "#2563eb" },
  { key: "sky", label: "Sky / Cyan", swatch: "#0ea5e9" },
  { key: "teal", label: "Teal Blue", swatch: "#1f7796" },
  { key: "slate", label: "Slate Blue", swatch: "#475569" },
  { key: "rose", label: "Rose / Coral", swatch: "#e11d48" },
  { key: "green", label: "Logo Green", swatch: "#059669" },
  {
    key: "gradient",
    label: "Gradient",
    swatch: "linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6)",
  },
]

type FontOption = {
  key: string
  label: string
  note: string
  cssVar: string
}

const FONTS: FontOption[] = [
  {
    key: "default",
    label: "Space Grotesk + Inter",
    note: "Original",
    cssVar: "var(--font-space-grotesk)",
  },
  { key: "jakarta", label: "Plus Jakarta Sans", note: "Friendly", cssVar: "var(--font-jakarta)" },
  { key: "sora", label: "Sora + Inter", note: "Techy", cssVar: "var(--font-sora)" },
  { key: "manrope", label: "Manrope", note: "Clean", cssVar: "var(--font-manrope)" },
  { key: "outfit", label: "Outfit", note: "Geometric", cssVar: "var(--font-outfit)" },
  { key: "poppins", label: "Poppins", note: "Rounded", cssVar: "var(--font-poppins)" },
  {
    key: "bricolage",
    label: "Bricolage + DM Sans",
    note: "Current",
    cssVar: "var(--font-bricolage)",
  },
  { key: "figtree", label: "Figtree", note: "Modern", cssVar: "var(--font-figtree)" },
]

export default function AccentSwitcher() {
  const [active, setActive] = useState("teal")
  const [font, setFont] = useState("bricolage")

  useEffect(() => {
    const saved = localStorage.getItem("accent") || "teal"
    setActive(saved)
    document.documentElement.dataset.accent = saved

    const savedFont = localStorage.getItem("font") || "bricolage"
    setFont(savedFont)
    document.documentElement.dataset.font = savedFont
  }, [])

  function choose(key: string) {
    setActive(key)
    document.documentElement.dataset.accent = key
    localStorage.setItem("accent", key)
  }

  function chooseFont(key: string) {
    setFont(key)
    document.documentElement.dataset.font = key
    localStorage.setItem("font", key)
  }

  return (
    <section className="flex justify-center py-12">
      <div className="w-[90%] max-w-7xl rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        <div className="mb-6 text-center">
          <span className="text-accent mb-2 inline-block text-xs font-bold tracking-wide uppercase">
            Make it yours
          </span>
          <h2 className="text-2xl font-bold md:text-3xl">Choose Your Accent Color</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-500">
            Tap a color to instantly preview it across the whole site. Your choice is remembered as
            you browse.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {ACCENTS.map((a) => {
            const isActive = active === a.key
            return (
              <button
                key={a.key}
                type="button"
                onClick={() => choose(a.key)}
                aria-pressed={isActive}
                className={`group flex w-28 flex-col items-center gap-2 rounded-2xl border p-4 transition-all ${
                  isActive
                    ? "border-accent bg-accent/5 -translate-y-1 shadow-md"
                    : "border-gray-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-sm"
                }`}
              >
                <span
                  className="relative flex size-12 items-center justify-center rounded-full shadow-inner ring-2 ring-white"
                  style={{ background: a.swatch }}
                >
                  {isActive && <Icon icon="mdi:check-bold" className="size-6 text-white" />}
                </span>
                <span className="text-xs font-semibold text-gray-700">{a.label}</span>
              </button>
            )
          })}
        </div>

        <div className="mt-10 border-t border-gray-100 pt-8">
          <div className="mb-6 text-center">
            <span className="text-accent mb-2 inline-block text-xs font-bold tracking-wide uppercase">
              Typography
            </span>
            <h3 className="text-xl font-bold md:text-2xl">Choose Your Font Family</h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-gray-500">
              Tap a typeface to preview it across the whole site. Remembered as you browse.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {FONTS.map((f) => {
              const isActive = font === f.key
              return (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => chooseFont(f.key)}
                  aria-pressed={isActive}
                  className={`group flex w-44 flex-col items-center gap-1 rounded-2xl border p-4 transition-all ${
                    isActive
                      ? "border-accent bg-accent/5 -translate-y-1 shadow-md"
                      : "border-gray-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-sm"
                  }`}
                  style={{ fontFamily: f.cssVar }}
                >
                  <span className="text-3xl font-bold text-gray-900">Ag</span>
                  <span className="text-sm font-semibold text-gray-700">{f.label}</span>
                  <span className="text-xs text-gray-400">{f.note}</span>
                  {isActive && (
                    <Icon icon="mdi:check-circle" className="text-accent mt-1 size-5" />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button className="button-gradient rounded-lg px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:scale-105 hover:brightness-110">
            Primary Button
          </button>
          <button className="bg-accent hover:bg-accent-hover rounded-lg px-6 py-3 text-sm font-bold text-white transition-all hover:scale-105">
            Solid Button
          </button>
          <button className="border-accent text-accent hover:bg-accent rounded-lg border px-6 py-3 text-sm font-bold transition-all hover:text-white">
            Outline Button
          </button>
        </div>
      </div>
    </section>
  )
}
