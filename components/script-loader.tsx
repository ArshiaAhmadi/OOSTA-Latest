"use client"

import { useEffect, useState } from "react"

interface ScriptLoaderProps {
  src: string
  defer?: boolean
  async?: boolean
  onLoad?: () => void
  strategy?: "beforeInteractive" | "afterInteractive" | "lazyOnload"
  id?: string
}

export default function ScriptLoader({
  src,
  defer = true,
  async = true,
  onLoad,
  strategy = "lazyOnload",
  id,
}: ScriptLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // اگر استراتژی lazyOnload باشد، از Intersection Observer استفاده می‌کنیم
    if (strategy === "lazyOnload") {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadScript()
            observer.disconnect()
          }
        },
        { rootMargin: "200px" },
      )

      observer.observe(document.documentElement)
      return () => observer.disconnect()
    }

    // اگر استراتژی afterInteractive باشد، بعد از تعامل کاربر لود می‌کنیم
    if (strategy === "afterInteractive") {
      const handleInteraction = () => {
        loadScript()
        cleanup()
      }

      const cleanup = () => {
        window.removeEventListener("scroll", handleInteraction)
        window.removeEventListener("mousemove", handleInteraction)
        window.removeEventListener("touchstart", handleInteraction)
        window.removeEventListener("keydown", handleInteraction)
      }

      window.addEventListener("scroll", handleInteraction, { once: true, passive: true })
      window.addEventListener("mousemove", handleInteraction, { once: true, passive: true })
      window.addEventListener("touchstart", handleInteraction, { once: true, passive: true })
      window.addEventListener("keydown", handleInteraction, { once: true, passive: true })

      return cleanup
    }

    // اگر استراتژی beforeInteractive باشد، فوراً لود می‌کنیم
    if (strategy === "beforeInteractive") {
      loadScript()
    }
  }, [strategy, src])

  const loadScript = () => {
    if (isLoaded) return

    const script = document.createElement("script")
    script.src = src
    script.defer = defer
    script.async = async
    if (id) script.id = id

    script.onload = () => {
      setIsLoaded(true)
      if (onLoad) onLoad()
    }

    document.body.appendChild(script)
  }

  return null
}
