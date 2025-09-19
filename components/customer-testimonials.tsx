"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Testimonial {
  id: string
  customerName: string
  customerRole: string
  customerAvatar?: string
  rating: number
  text: string
  date: string
  productName?: string
}

interface CustomerTestimonialsProps {
  categoryName: string
  testimonials: Testimonial[]
}

export function CustomerTestimonials({ categoryName, testimonials }: CustomerTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <section className="py-12 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">نظرات مشتریان درباره {categoryName}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            مشتریان ما درباره تجربه خرید و استفاده از {categoryName} چه می‌گویند؟
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div
            className="absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-4 z-10"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <button
              onClick={prevTestimonial}
              className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Previous testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div
            className="absolute top-1/2 left-0 transform -translate-y-1/2 translate-x-4 z-10"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <button
              onClick={nextTestimonial}
              className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Next testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>

          <div className="overflow-hidden px-12">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="py-4"
              >
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 flex flex-col items-center text-center">
                        <Avatar className="h-24 w-24 mb-4">
                          {testimonials[currentIndex].customerAvatar ? (
                            <AvatarImage src={testimonials[currentIndex].customerAvatar || "/placeholder.svg"} />
                          ) : null}
                          <AvatarFallback className="text-2xl">
                            {testimonials[currentIndex].customerName.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <h3 className="text-xl font-bold">{testimonials[currentIndex].customerName}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">
                          {testimonials[currentIndex].customerRole}
                        </p>
                        <div className="flex items-center gap-1 mb-2">
                          {renderStars(testimonials[currentIndex].rating)}
                        </div>
                        <p className="text-sm text-gray-500">{testimonials[currentIndex].date}</p>
                        {testimonials[currentIndex].productName && (
                          <div className="mt-3 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
                            {testimonials[currentIndex].productName}
                          </div>
                        )}
                      </div>
                      <div className="md:w-2/3 flex items-center">
                        <div className="relative">
                          <Quote className="absolute top-0 right-0 h-8 w-8 text-gray-200 dark:text-gray-700 -translate-y-1/2 -translate-x-1/2" />
                          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed pr-6">
                            {testimonials[currentIndex].text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-gray-300 dark:bg-gray-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
