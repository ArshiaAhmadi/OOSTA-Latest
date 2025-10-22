import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import {
  Geist as V0_Font_Geist,
  Geist as V0_Font_Geist,
  Source_Serif_4 as V0_Font_Source_Serif_4,
} from "next/font/google"

// Initialize fonts
const _geist = V0_Font_Geist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--v0-font-geist",
})
const _geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--v0-font-geist-mono",
})
const _sourceSerif_4 = V0_Font_Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--v0-font-source-serif-4",
})
const _v0_fontVariables = `${_geist.variable} ${_geistMono.variable} ${_sourceSerif_4.variable}`

// لیزی لودینگ کامپوننت‌های سنگین
const Header = dynamic(() => import("@/components/header"), {
  ssr: true,
})

const Footer = dynamic(() => import("@/components/footer"), {
  ssr: false,
})

const LazyChatWidget = dynamic(() => import("@/components/lazy-chat-widget"), {
  ssr: false,
})

const fontSans = V0_Font_Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "فروشگاه تجهیزات صنعتی اوستا",
  description: "فروشگاه آنلاین تجهیزات و قطعات صنعتی با بهترین کیفیت و قیمت مناسب",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable) + " " + _v0_fontVariables}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main>{children}</main>
          <Footer />
          <Suspense fallback={null}>
            <LazyChatWidget />
          </Suspense>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
