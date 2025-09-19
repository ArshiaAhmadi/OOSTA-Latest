"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

type OptimizedImageProps = Omit<ImageProps, "onLoad"> & {
  lowQuality?: boolean
  blurEffect?: boolean
  fadeIn?: boolean
  loadingStrategy?: "eager" | "lazy" | "progressive"
}

export default function OptimizedImage({
  src,
  alt,
  lowQuality = true,
  blurEffect = true,
  fadeIn = true,
  loadingStrategy = "progressive",
  className,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [currentSrc, setCurrentSrc] = useState<string | any>(src)

  // تبدیل آدرس تصویر به نسخه کم کیفیت برای پیش‌نمایش
  const getLowQualitySrc = (src: string) => {
    if (src.includes("placeholder.svg")) {
      // اگر از placeholder استفاده می‌کند، کیفیت را کاهش می‌دهیم
      return src.replace(/width=(\d+)/, "width=20").replace(/height=(\d+)/, "height=20")
    }

    // برای تصاویر واقعی می‌توان از سرویس‌های تصویر آنلاین استفاده کرد
    // یا از پارامترهای کیفیت Next.js استفاده کرد
    return src
  }

  useEffect(() => {
    // استفاده از Intersection Observer برای تشخیص زمانی که تصویر در دید کاربر قرار می‌گیرد
    if (loadingStrategy === "lazy" || loadingStrategy === "progressive") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        },
        { threshold: 0.1 },
      )

      const element = document.getElementById(`optimized-image-${props.id || Math.random().toString(36).substring(7)}`)
      if (element) {
        observer.observe(element)
      }

      return () => {
        if (element) {
          observer.unobserve(element)
        }
      }
    } else {
      setIsVisible(true)
    }
  }, [loadingStrategy, props.id])

  useEffect(() => {
    if (isVisible) {
      if (loadingStrategy === "progressive" && lowQuality && typeof src === "string") {
        // ابتدا نسخه کم کیفیت را نمایش می‌دهیم
        setCurrentSrc(getLowQualitySrc(src as string))

        // سپس تصویر اصلی را بارگذاری می‌کنیم
        const img = new Image()
        img.src = src as string
        img.onload = () => {
          setCurrentSrc(src)
          setIsLoaded(true)
        }
      } else {
        setCurrentSrc(src)
      }
    }
  }, [isVisible, loadingStrategy, lowQuality, src])

  if (!isVisible && (loadingStrategy === "lazy" || loadingStrategy === "progressive")) {
    return (
      <div
        id={`optimized-image-${props.id || Math.random().toString(36).substring(7)}`}
        className={cn("bg-muted/20 animate-pulse", className)}
        style={{ height: props.height || "100%", width: props.width || "100%" }}
      />
    )
  }

  return (
    <div
      className="relative overflow-hidden"
      id={`optimized-image-${props.id || Math.random().toString(36).substring(7)}`}
    >
      {blurEffect && !isLoaded && loadingStrategy === "progressive" && (
        <div className="absolute inset-0 backdrop-blur-sm" />
      )}
      <Image
        src={currentSrc || "/placeholder.svg"}
        alt={alt}
        className={cn(
          fadeIn && "transition-all duration-500",
          fadeIn && !isLoaded && loadingStrategy === "progressive" ? "scale-105 blur-sm" : "scale-100 blur-0",
          className,
        )}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  )
}
