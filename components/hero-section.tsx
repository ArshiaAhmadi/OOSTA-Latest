"use client"

import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [autoplay, setAutoplay] = useState<NodeJS.Timeout | null>(null)
  const [isHovering, setIsHovering] = useState(false)

  const slides = [
    {
      id: 1,
      title: "تجهیزات صنعتی با کیفیت",
      description: "مجموعه کاملی از تجهیزات صنعتی با بهترین کیفیت و قیمت مناسب",
      image: "/images/slides/industrial-equipment.jpg",
      link: "/products",
      cta: "مشاهده محصولات",
      badge: "پرفروش‌ترین",
    },
    {
      id: 2,
      title: "خدمات نصب و راه‌اندازی",
      description: "ارائه خدمات نصب و راه‌اندازی توسط متخصصین با تجربه",
      image: "/images/slides/installation-service.jpg",
      link: "/services",
      cta: "درخواست خدمات",
      badge: "تخصصی",
    },
    {
      id: 3,
      title: "مشاوره تخصصی رایگان",
      description: "دریافت مشاوره تخصصی رایگان برای انتخاب بهترین محصول",
      image: "/images/slides/consultation.jpg",
      link: "/consultation",
      cta: "مشاوره آنلاین",
      badge: "رایگان",
    },
  ]

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  // تنظیم اسلاید اتوماتیک
  useEffect(() => {
    if (isHovering && autoplay) {
      clearInterval(autoplay)
      setAutoplay(null)
      return
    }

    if (!isHovering && !autoplay) {
      const interval = setInterval(() => {
        if (api) api.scrollNext()
      }, 5000)
      setAutoplay(interval)
      return () => clearInterval(interval)
    }
  }, [api, isHovering, autoplay])

  // پاکسازی اینتروال هنگام آنمانت
  useEffect(() => {
    return () => {
      if (autoplay) clearInterval(autoplay)
    }
  }, [autoplay])

  return (
    <section
      className="relative h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] w-full mt-16 overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Carousel className="w-full h-full" setApi={setApi}>
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="h-full">
              <div className="relative h-full w-full overflow-hidden group">
                {/* تصویر پس زمینه با افکت زوم آرام */}
                <div className="absolute inset-0 w-full h-full transform transition-transform duration-10000 group-hover:scale-110">
                  <Image
                    src={slide.image || "/placeholder.svg?height=500&width=1200&query=industrial equipment"}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* گرادیانت پس زمینه */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

                {/* محتوای اسلاید */}
                <div className="absolute inset-0 flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-16">
                  <div className="container mx-auto">
                    <div className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl relative">
                      {/* نشان */}
                      {slide.badge && (
                        <span className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full mb-4 animate-pulse">
                          {slide.badge}
                        </span>
                      )}

                      {/* عنوان با انیمیشن */}
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 lg:mb-6 animate-fade-in-up">
                        {slide.title}
                      </h1>

                      {/* توضیحات با انیمیشن */}
                      <p
                        className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 md:mb-6 lg:mb-8 max-w-md line-clamp-2 sm:line-clamp-3 md:line-clamp-none opacity-0 animate-[fadeInUp_0.5s_0.4s_forwards]"
                        style={{ animationFillMode: "forwards" }}
                      >
                        {slide.description}
                      </p>

                      {/* دکمه با انیمیشن */}
                      <div
                        className="opacity-0 animate-[fadeInUp_0.5s_0.6s_forwards]"
                        style={{ animationFillMode: "forwards" }}
                      >
                        <Link href={slide.link}>
                          <Button
                            size="lg"
                            className="text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-2 md:py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
                          >
                            {slide.cta}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* دکمه‌های ناوبری سفارشی */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={() => api?.scrollPrev()}
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-all duration-300"
            aria-label="اسلاید قبلی"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </button>
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={() => api?.scrollNext()}
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-all duration-300"
            aria-label="اسلاید بعدی"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </button>
        </div>

        {/* نشانگر اسلایدها */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300",
                current === index + 1 ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70",
              )}
              aria-label={`رفتن به اسلاید ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>

      {/* افکت ساده پایین اسلایدر */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-white via-white/80 to-transparent"></div>
      </div>
    </section>
  )
}
