"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify/react"

import { navItems } from "@/lib/constants"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleMobileNav() {
    setIsOpen(!isOpen)
  }

  function toggleNavOnClick() {
    toggleMobileNav()
  }

  function handleIconClick() {
    if (isOpen) {
      setIsOpen(false)
    }
  }

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-200 bg-primary-700/80 px-6 py-4 backdrop-blur-md md:px-10">
      <Link href="/" onClick={handleIconClick}>
        <Image src="/logo.png" width={148} height={48} alt="Net-crux IT Services" />
      </Link>
      {/* Desktop nav */}
      <div className="hidden md:flex md:items-center">
        <ul className="mr-10 flex gap-6">
          {navItems.map((item) => (
            <Link href={item.path} key={item.name} className="cursor-pointer">
              {item.name}
            </Link>
          ))}
        </ul>
        <Link
          href="/contact"
          className="button-gradient cursor-pointer rounded px-4 py-2 font-bold text-white transition-all hover:brightness-110"
        >
          Get a Quote
        </Link>
      </div>
      {/* Mobile nav */}
      <button className="text-primary-100 text-3xl md:hidden" onClick={toggleMobileNav}>
        {isOpen ? <Icon icon="mdi:close" /> : <Icon icon="mdi:menu" />}
      </button>
      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 z-10 flex w-full flex-col items-center gap-y-6 border-t border-gray-200 bg-primary-700/95 py-6 text-center backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <Link href={item.path} key={index} onClick={toggleNavOnClick}>
                {item.name}
              </Link>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={toggleNavOnClick}
            className="button-gradient rounded px-4 py-2 font-bold text-white transition-all hover:brightness-110"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  )
}
