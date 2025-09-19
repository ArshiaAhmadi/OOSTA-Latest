"use client"

import { useEffect } from "react"

export default function OptimizedFonts() {
  useEffect(() => {
    // لود فونت‌های ضروری به صورت اولویت‌دار
    const fontLinks = [
      // فونت‌های اصلی با اولویت بالا
      { href: "/fonts/main-font.woff2", rel: "preload", as: "font", type: "font/woff2", crossOrigin: "anonymous" },

      // فونت‌های ثانویه با اولویت پایین‌تر
      {
        href: "/fonts/secondary-font.woff2",
        rel: "prefetch",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
    ]

    // ایجاد لینک‌های فونت به صورت داینامیک
    fontLinks.forEach((font) => {
      const link = document.createElement("link")
      Object.keys(font).forEach((key) => {
        // @ts-ignore
        link[key] = font[key]
      })
      document.head.appendChild(link)
    })

    // پاکسازی
    return () => {
      document.querySelectorAll('link[as="font"]').forEach((link) => {
        link.remove()
      })
    }
  }, [])

  return null
}
