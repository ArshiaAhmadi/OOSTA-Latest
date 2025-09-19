"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

type LazyImageProps = ImageProps & {
  lowQualitySrc?: string
  blurEffect?: boolean
  fadeIn?: boolean
}

export default function LazyImage({
  src,
  alt,
  lowQualitySrc,
  blurEffect = true,
  fadeIn = true,
  className,
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(lowQualitySrc || src)

  useEffect(() => {
    // اگر lowQualitySrc تعریف شده باشد، ابتدا آن را نمایش می‌دهیم
    if (lowQualitySrc) {
      setCurrentSrc(lowQualitySrc)

      // پیش‌بارگذاری تصویر اصلی
      const img = new Image()
      img.src = typeof src === "string" ? src : ""
      img.onload = () => {
        setCurrentSrc(src)
        setIsLoaded(true)
      }
    } else {
      setCurrentSrc(src)
    }
  }, [src, lowQualitySrc])

  return (
    <div className="relative overflow-hidden">
      {blurEffect && !isLoaded && lowQualitySrc && <div className="absolute inset-0 backdrop-blur-md" />}
      <Image
        src={currentSrc || "/placeholder.svg"}
        alt={alt}
        className={cn(
          fadeIn && "transition-opacity duration-500",
          fadeIn && !isLoaded && lowQualitySrc ? "opacity-70" : "opacity-100",
          className,
        )}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  )
}
