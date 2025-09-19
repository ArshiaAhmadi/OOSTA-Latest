"use client"

import { useState, useEffect, type ReactNode } from "react"
import { useInView } from "react-intersection-observer"
import { Skeleton } from "@/components/ui/skeleton"

interface LazyCarouselProps {
  children: ReactNode
  height?: number
  threshold?: number
  placeholderItems?: number
}

export default function LazyCarousel({
  children,
  height = 300,
  threshold = 0.1,
  placeholderItems = 3,
}: LazyCarouselProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      // کمی تاخیر برای بهبود UX
      const timer = setTimeout(() => {
        setIsLoaded(true)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [inView])

  return (
    <div ref={ref} className="w-full">
      {isLoaded ? (
        children
      ) : (
        <div className="w-full overflow-hidden">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {Array(placeholderItems)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3">
                  <Skeleton className="w-full h-[300px] rounded-lg" />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}
