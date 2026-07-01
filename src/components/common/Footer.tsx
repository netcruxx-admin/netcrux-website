import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify/react"

import { contactInfo, footerSocial, navItems } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 px-6 pt-12 pb-8 text-gray-900 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 pb-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/">
              <Image
                src="/logo.png"
                width={148}
                height={48}
                alt="Net-Crux IT Services"
                className="mb-4"
              />
            </Link>
            <p className="max-w-sm text-sm text-gray-500">
              A mobile and web app development studio building innovative, user-centric digital
              products for startups and growing businesses.
            </p>
            <div className="mt-5 flex gap-4">
              {footerSocial.map((item) => (
                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.platform}
                  aria-label={item.platform}
                  className="text-gray-500 transition-colors hover:text-gray-900"
                >
                  <Icon icon={item.iconName} className="size-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="transition-colors hover:text-gray-900">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Get in touch</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-gray-900"
                >
                  <Icon icon="mdi:email-outline" className="size-4" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 transition-colors hover:text-gray-900"
                >
                  <Icon icon="mdi:phone-outline" className="size-4" />
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon icon="mdi:map-marker-outline" className="mt-0.5 size-4 shrink-0" />
                {contactInfo.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-6 text-xs text-gray-400 md:flex-row md:text-sm">
          <p>© {new Date().getFullYear()} Net-Crux. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
