import Link from "next/link"
import { Icon } from "@iconify/react"

import { footerSocial, navItems } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="flex flex-col items-center px-6 py-12 text-white md:px-12">
      {/* main footer */}
      <div className="flex w-full flex-col items-center justify-between md:mb-6 md:flex-row">
        <div className="mb-6 flex flex-wrap justify-center gap-6 text-sm text-gray-300 md:mb-0 md:text-base">
          {navItems.map((item) => {
            return (
              <Link key={item.name} href={item.path} className="transition-colors hover:text-white">
                {item.name}
              </Link>
            )
          })}
        </div>
        <div className="mb-6 flex gap-6 md:mb-0">
          {footerSocial.map((item) => {
            return (
              <a
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                key={item.platform}
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Icon icon={item.iconName} className="size-6" />
              </a>
            )
          })}
        </div>
      </div>
      <p className="text-xs text-gray-500 md:text-sm">© 2025 Net-Crux. All rights reserved.</p>
    </footer>
  )
}
