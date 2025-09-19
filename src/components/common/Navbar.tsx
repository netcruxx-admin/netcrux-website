"use client"

import { navItems } from "@/lib/constants"
import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleMobileNav() {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="relative flex items-center justify-between border-b-4 border-white px-6 py-4 text-white md:px-10">
      <Link href="/">
        <Image src="/logo.png" width={148} height={48} priority alt="Net-crux IT Services" />
      </Link>
      {/* Desktop*/}
      <div className="hidden md:flex md:items-center">
        <ul className="mr-4 flex gap-6">
          {navItems.map((item) => (
            <Link href={item.path} key={item.name} className="cursor-pointer">
              {item.name}
            </Link>
          ))}
        </ul>
        <button className="hover:button-gradient rounded bg-white bg-gradient-to-r from-white to-white px-4 py-2 font-bold text-black transition-all duration-150 ease-in-out">
          Get a Quote
        </button>
      </div>
      {/* Mobile view */}
      <button
        className="text-primary-100 cursor-pointer text-3xl md:hidden"
        onClick={toggleMobileNav}
      >
        {isOpen ? <Icon icon="mdi:close" /> : <Icon icon="mdi:menu" />}
      </button>
      {/* Mobile view */}
      {isOpen && (
        <div className="absolute top-full left-0 z-10 flex w-full flex-col items-center bg-black text-center md:hidden">
          <ul className="flex flex-col gap-4 py-6">
            {navItems.map((item, index) => (
              <Link href={item.path} key={index} className="cursor-pointer hover:text-blue-400">
                {item.name}
              </Link>
            ))}
          </ul>
          <button className="hover:button-gradient mb-6 rounded bg-white px-4 py-2 font-bold text-black transition-all">
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  )
}
