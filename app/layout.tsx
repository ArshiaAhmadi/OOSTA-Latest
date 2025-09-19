import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import dynamic from "next/dynamic"
import { Suspense } from "react"

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

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
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
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
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
