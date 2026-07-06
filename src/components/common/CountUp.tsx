"use client"

import { useEffect, useRef, useState } from "react"

type CountUpProps = {
  value: string // e.g. "120+", "98%", "8+"
  className?: string
  duration?: number
}

export default function CountUp({ value, className = "", duration = 1600 }: CountUpProps) {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/)
  const prefix = match?.[1] ?? ""
  const target = parseFloat(match?.[2] ?? "0")
  const suffix = match?.[3] ?? ""
  const isFloat = !Number.isInteger(target)

  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      setCurrent(target)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCurrent(target * eased)
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  const display = isFloat ? current.toFixed(1) : Math.round(current).toString()

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
