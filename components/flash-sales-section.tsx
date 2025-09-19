"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function FlashSalesSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const flashProducts = [
    {
      id: 1,
      name: "پمپ سانتریفیوژ CP-150",
      originalPrice: 8500000,
      salePrice: 6800000,
      discount: 20,
      image: "/placeholder.svg?height=200&width=200&text=پمپ+سانتریفیوژ",
      stock: 5,
      sold: 12,
    },
    {
      id: 2,
      name: "گیربکس حلزونی WG-80",
      originalPrice: 15000000,
      salePrice: 11250000,
      discount: 25,
      image: "/placeholder.svg?height=200&width=200&text=گیربکس+حلزونی",
      stock: 3,
      sold: 8,
    },
    {
      id: 3,
      name: "الکتروموتور 10 کیلووات",
      originalPrice: 18000000,
      salePrice: 14400000,
      discount: 20,
      image: "/placeholder.svg?height=200&width=200&text=الکتروموتور",
      stock: 7,
      sold: 15,
    },
    {
      id: 4,
      name: "اینورتر فرکانس ABB",
      originalPrice: 12000000,
      salePrice: 9600000,
      discount: 20,
      image: "/placeholder.svg?height=200&width=200&text=اینورتر+فرکانس",
      stock: 4,
      sold: 10,
    },
    {
      id: 5,
      name: "موتور ویبراتور صنعتی",
      originalPrice: 6500000,
      salePrice: 4875000,
      discount: 25,
      image: "/placeholder.svg?height=200&width=200&text=موتور+ویبراتور",
      stock: 8,
      sold: 6,
    },
    {
      id: 6,
      name: "ژنراتور دیزلی 50KW",
      originalPrice: 45000000,
      salePrice: 36000000,
      discount: 20,
      image: "/placeholder.svg?height=200&width=200&text=ژنراتور+دیزلی",
      stock: 2,
      sold: 4,
    },
    {
      id: 7,
      name: "تابلو برق صنعتی",
      originalPrice: 8000000,
      salePrice: 6000000,
      discount: 25,
      image: "/placeholder.svg?height=200&width=200&text=تابلو+برق",
      stock: 6,
      sold: 9,
    },
    {
      id: 8,
      name: "مخزن تحت فشار 500 لیتر",
      originalPrice: 22000000,
      salePrice: 17600000,
      discount: 20,
      image: "/placeholder.svg?height=200&width=200&text=مخزن+تحت+فشار",
      stock: 3,
      sold: 7,
    },
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price) + " تومان"
  }

  return (
    <section className="relative py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-[#253F8F] rounded-2xl p-4 sm:p-6 lg:p-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex text-white hover:bg-white/10 z-10 flex-shrink-0"
              onClick={() => {
                const container = document.getElementById("flash-products-container")
                if (container) {
                  container.scrollBy({ left: -300, behavior: "smooth" })
                }
              }}
            >
              <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
            </Button>

            {/* Products Container */}
            <div className="flex-1 min-w-0 mx-2 sm:mx-4">
              <div
                id="flash-products-container"
                className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide pb-2"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitScrollbar: { display: "none" },
                }}
              >
                {flashProducts.map((product, index) => (
                  <Card
                    key={product.id}
                    className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 w-48 sm:w-56 lg:w-64"
                  >
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10">
                      <div className="bg-[#F18F20] text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-xs sm:text-sm font-bold">
                        {product.discount}%
                      </div>
                    </div>

                    <CardContent className="p-3 sm:p-4">
                      <div className="relative h-32 sm:h-36 lg:h-40 mb-3 sm:mb-4 overflow-hidden rounded-lg">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      <div className="space-y-2 sm:space-y-3">
                        <h3 className="font-medium text-xs sm:text-sm text-gray-800 line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem]">
                          {product.name}
                        </h3>

                        {/* Prices */}
                        <div className="space-y-1">
                          <div className="text-sm sm:text-lg font-bold text-gray-900">
                            {formatPrice(product.salePrice)}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-400 line-through">
                            {formatPrice(product.originalPrice)}
                          </div>
                        </div>

                        {/* Stock Info */}
                        <div className="text-xs text-gray-500">تنها {product.stock} عدد باقی‌مانده</div>

                        {/* Action Button */}
                        <Button
                          size="sm"
                          className="w-full bg-[#253F8F] hover:bg-[#253F8F]/90 text-white text-xs sm:text-sm"
                        >
                          <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                          خرید
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Side Promotional Section */}
            <div className="flex-shrink-0 w-32 sm:w-40 lg:w-48 text-center text-white">
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <h2 className="text-sm sm:text-lg lg:text-xl font-bold leading-tight">
                  پیشنهاد
                  <br />
                  شگفت
                  <br />
                  انگیز
                </h2>

                {/* Timer */}
                <div className="flex justify-center gap-1 text-xs sm:text-sm">
                  <div className="bg-white text-[#253F8F] rounded px-1 sm:px-2 py-1 font-bold min-w-[1.5rem] sm:min-w-[2rem]">
                    {timeLeft.seconds.toString().padStart(2, "0")}
                  </div>
                  <div className="bg-white text-[#253F8F] rounded px-1 sm:px-2 py-1 font-bold min-w-[1.5rem] sm:min-w-[2rem]">
                    {timeLeft.minutes.toString().padStart(2, "0")}
                  </div>
                  <div className="bg-white text-[#253F8F] rounded px-1 sm:px-2 py-1 font-bold min-w-[1.5rem] sm:min-w-[2rem]">
                    {timeLeft.hours.toString().padStart(2, "0")}
                  </div>
                </div>

                <div className="text-4xl sm:text-5xl lg:text-6xl">
                  <Image
                    src="/percent-icon.png"
                    alt="Percent Icon"
                    width={96}
                    height={64}
                    className="h-10 w-15 sm:h-12 sm:w-18 lg:h-16 lg:w-24 mx-auto"
                  />
                </div>

                <Button variant="ghost" className="text-white hover:bg-white/10 text-xs sm:text-sm px-2 sm:px-4">
                  <span className="hidden sm:inline">مشاهده همه ←</span>
                  <span className="sm:hidden">همه ←</span>
                </Button>
              </div>
            </div>

            {/* Navigation Arrow Right */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex text-white hover:bg-white/10 z-10 flex-shrink-0"
              onClick={() => {
                const container = document.getElementById("flash-products-container")
                if (container) {
                  container.scrollBy({ left: 300, behavior: "smooth" })
                }
              }}
            >
              <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
