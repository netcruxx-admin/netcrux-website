import type { Metadata } from "next"
import {
  Inter,
  Space_Grotesk,
  Plus_Jakarta_Sans,
  Sora,
  Manrope,
  Outfit,
  Poppins,
  DM_Sans,
  Bricolage_Grotesque,
  Figtree,
} from "next/font/google"
import "./globals.css"

import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"
import Cta from "../components/common/Cta"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: "normal",
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  preload: true,
  variable: "--font-space-grotesk",
})

// Additional families for the live font-family preview switcher
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-jakarta",
})

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sora",
})

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-manrope",
})

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-outfit",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
})

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-bricolage",
})

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-figtree",
})

export const metadata: Metadata = {
  title: {
    default: "Net-Crux — Mobile & Web App Development Studio",
    template: "%s",
  },
  description:
    "Net-Crux is a mobile and web app development studio creating innovative, user-centric digital solutions. We empower businesses to thrive online with cutting-edge technology and thoughtful design.",
  keywords: [
    "app development",
    "mobile app development",
    "web app development",
    "UI/UX design",
    "Next.js",
    "React",
    "Net-Crux",
  ],
  openGraph: {
    title: "Net-Crux — Mobile & Web App Development Studio",
    description:
      "We design and build mobile and web apps that drive business growth. From concept to launch and beyond.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${plusJakarta.variable} ${sora.variable} ${manrope.variable} ${outfit.variable} ${poppins.variable} ${dmSans.variable} ${bricolage.variable} ${figtree.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var a=localStorage.getItem('accent');if(a)document.documentElement.dataset.accent=a;var f=localStorage.getItem('font');if(f)document.documentElement.dataset.font=f;}catch(e){}`,
          }}
        />
      </head>
      <body className="bg-primary-700 text-primary-100 font-sans antialiased">
        <Navbar />
        {children}
        <Cta />
        <Footer />
      </body>
    </html>
  )
}
