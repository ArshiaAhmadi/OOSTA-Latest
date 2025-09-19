"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, FlameIcon as Fire, Eye, ShoppingCart, Star } from "lucide-react"
import Image from "next/image"

export default function TrendingProductsSection() {
  const [activeTab, setActiveTab] = useState("trending")

  const trendingProducts = [
    {
      id: 1,
      name: "پمپ سانتریفیوژ CP-300",
      price: 15500000,
      image: "/placeholder.svg?key=trend1",
      views: 2847,
      sales: 156,
      rating: 4.8,
      trend: "+45%",
      category: "پمپ‌ها",
    },
    {
      id: 2,
      name: "گیربکس حلزونی WG-250",
      price: 22000000,
      image: "/placeholder.svg?key=trend2",
      views: 1923,
      sales: 89,
      rating: 4.6,
      trend: "+32%",
      category: "گیربکس‌ها",
    },
    {
      id: 3,
      name: "الکتروموتور 25 کیلووات",
      price: 28000000,
      image: "/placeholder.svg?key=trend3",
      views: 3156,
      sales: 203,
      rating: 4.9,
      trend: "+67%",
      category: "الکتروموتورها",
    },
    {
      id: 4,
      name: "اینورتر صنعتی IV-500",
      price: 18500000,
      image: "/placeholder.svg?key=trend4",
      views: 1654,
      sales: 78,
      rating: 4.5,
      trend: "+28%",
      category: "اینورترها",
    },
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price) + " تومان"
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ))
  }

  return (
    <section className="relative py-6 overflow-hidden bg-gradient-to-br from-[#253F8F]/5 to-[#F18F20]/5 rounded-2xl border border-[#253F8F]/10 shadow-lg">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-5 -left-5 w-20 h-20 bg-[#253F8F]/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-[#F18F20]/10 rounded-full blur-2xl"></div>
      </div>

      {/* محتوای اصلی */}
      <div className="relative z-10">
        <div className="text-center mb-6">
          

          <h2 className="text-2xl font-bold mb-2"> پرفروش‌ترین محصولات اوستا</h2>

          
        </div>

        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-white/80 dark:bg-gray-900/80 p-1 rounded-full shadow-sm backdrop-blur-sm">
            <button
              onClick={() => setActiveTab("trending")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "trending"
                  ? "bg-[#253F8F] text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <TrendingUp className="h-4 w-4 mr-2 inline" />
              ترندینگ
            </button>
            <button
              onClick={() => setActiveTab("popular")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "popular"
                  ? "bg-[#253F8F] text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Fire className="h-4 w-4 mr-2 inline" />
              پرفروش
            </button>
            <button
              onClick={() => setActiveTab("viewed")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "viewed"
                  ? "bg-[#253F8F] text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Eye className="h-4 w-4 mr-2 inline" />
              پربازدید
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trendingProducts.map((product, index) => (
            <Card
              key={product.id}
              className="group relative overflow-hidden border border-[#253F8F]/20 hover:border-[#253F8F]/40 transition-all duration-300 hover:shadow-lg bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm"
            >
              <div className="absolute top-2 left-2 z-10">
                <Badge className="bg-[#F18F20] text-white font-bold text-xs">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {product.trend}
                </Badge>
              </div>

              <div className="absolute top-2 right-2 z-10">
                <div className="w-6 h-6 bg-[#253F8F] text-white rounded-full flex items-center justify-center font-bold text-xs">
                  {index + 1}
                </div>
              </div>

              <CardContent className="p-0">
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-3">
                  <Badge variant="outline" className="mb-2 text-xs bg-[#253F8F]/5 border-[#253F8F]/20 text-[#253F8F]">
                    {product.category}
                  </Badge>

                  <h3 className="font-bold text-sm mb-2 line-clamp-2 group-hover:text-[#253F8F] transition-colors">
                    {product.name}
                  </h3>

                  {/* امتیاز */}
                  <div className="flex items-center gap-1 mb-2">
                    {renderStars(product.rating)}
                    <span className="text-xs text-muted-foreground">({product.rating})</span>
                  </div>

                  {/* آمار */}
                  <div className="grid grid-cols-2 gap-2 mb-2 text-xs">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Eye className="h-3 w-3" />
                      <span>{product.views.toLocaleString("fa-IR")}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <ShoppingCart className="h-3 w-3" />
                      <span>{product.sales} فروش</span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="font-bold text-base text-[#F18F20]">{formatPrice(product.price)}</span>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-[#253F8F] hover:bg-[#253F8F]/90 text-white text-xs h-8">
                      <ShoppingCart className="h-3 w-3 mr-1" />
                      خرید
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#253F8F]/20 hover:border-[#253F8F]/40 text-xs h-8 w-8 p-0 bg-transparent"
                    >
                      <Eye className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
