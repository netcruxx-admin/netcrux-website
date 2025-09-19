import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import "./globals.css"
import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"
import Cta from "../components/common/Cta"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: "normal",
  display: "swap",
  preload: true,
  variable: "--font-raleway",
})

export const metadata: Metadata = {
  title: "Net-Crux IT Services",
  description:
    "Net-Crux is a leading mobile and web app development firm, dedicated to creating innovative and user-centric digital solutions. We empower businesses to thrive in the digital landscape with cutting-edge technology and creative design.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} bg-primary-700 text-primary-100 font-raleway antialiased`}
      >
        <Navbar />
        {children}
        <Cta />
        <Footer />
      </body>
    </html>
  )
}
