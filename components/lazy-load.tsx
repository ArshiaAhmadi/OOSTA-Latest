"use client"

import { useRef, useState, useEffect, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface LazyLoadProps {
  children: ReactNode
  threshold?: number
  rootMargin?: string
  className?: string
  fadeIn?: boolean
  delay?: number
  placeholder?: ReactNode
}

export default function LazyLoad({
  children,
  threshold = 0.1,
  rootMargin = "0px",
  className,
  fadeIn = true,
  delay = 0,
  placeholder,
}: LazyLoadProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin])

  useEffect(() => {
    if (isVisible && delay > 0) {
      const timer = setTimeout(() => {
        setIsLoaded(true)
      }, delay)
      return () => clearTimeout(timer)
    } else if (isVisible) {
      setIsLoaded(true)
    }
  }, [isVisible, delay])

  return (
    <div
      ref={ref}
      className={cn(
        fadeIn && "transition-opacity duration-500",
        fadeIn && isLoaded ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      {isLoaded
        ? children
        : placeholder || <div className="animate-pulse bg-muted/20 rounded-md h-full w-full min-h-[100px]" />}
    </div>
  )
}
