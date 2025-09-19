"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ShoppingCart, Heart, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import ImportServicesBanner from "@/components/import-services-banner"

// Sample data for best-selling products
const bestSellingProducts = [
  {
    id: "1",
    name: "پمپ سانتریفیوژ صنعتی CP-250",
    image: "/industrial-pump.png",
    price: 12500000,
    discountedPrice: 11200000,
    rating: 4.8,
    salesCount: 156,
    category: "پمپ صنعتی",
    brand: "گروندفوس",
    slug: "cp-250-pump",
    isHot: true,
  },
  {
    id: "2",
    name: "الکتروموتور سه فاز 15 اسب بخار",
    image: "/electric-motors.png",
    price: 8500000,
    discountedPrice: 7800000,
    rating: 4.6,
    salesCount: 142,
    category: "الکتروموتور",
    brand: "زیمنس",
    slug: "electric-motor-15hp",
    isHot: true,
  },
  {
    id: "3",
    name: "گیربکس حلزونی صنعتی WP-80",
    image: "/placeholder.svg?height=300&width=300",
    price: 15800000,
    rating: 4.7,
    salesCount: 128,
    category: "گیربکس",
    brand: "SEW",
    slug: "worm-gearbox-wp80",
  },
  {
    id: "4",
    name: "اینورتر فرکانس متغیر 5.5 کیلووات",
    image: "/inverter.png",
    price: 6200000,
    discountedPrice: 5800000,
    rating: 4.5,
    salesCount: 98,
    category: "اینورتر",
    brand: "دانفوس",
    slug: "frequency-inverter-5kw",
  },
]

// Sample data for most-viewed products
const mostViewedProducts = [
  {
    id: "5",
    name: "موتور ویبره صنعتی VB-150",
    image: "/vibration-motor.png",
    price: 3200000,
    rating: 4.4,
    viewCount: 2847,
    category: "موتور ویبره",
    brand: "ایتالویبره",
    slug: "vibration-motor-vb150",
    isNew: true,
  },
  {
    id: "6",
    name: "مخزن تحت فشار 500 لیتری",
    image: "/pressure-vessel.png",
    price: 18500000,
    rating: 4.6,
    viewCount: 2156,
    category: "مخزن تحت فشار",
    brand: "پتروشیمی",
    slug: "pressure-vessel-500l",
  },
  {
    id: "7",
    name: "پنل کنترل هوشمند PLC",
    image: "/control-panel.png",
    price: 25000000,
    discountedPrice: 23500000,
    rating: 4.9,
    viewCount: 1923,
    category: "پنل کنترل",
    brand: "زیمنس",
    slug: "smart-plc-panel",
    isNew: true,
  },
  {
    id: "8",
    name: "کمپرسور هوای صنعتی 10 بار",
    image: "/placeholder.svg?height=300&width=300",
    price: 32000000,
    rating: 4.3,
    viewCount: 1687,
    category: "کمپرسور",
    brand: "اطلس کوپکو",
    slug: "air-compressor-10bar",
  },
]

// Format price function
const formatPrice = (price: number) => {
  return new Intl.NumberFormat("fa-IR").format(price) + " تومان"
}

const ProductCard = ({ product, type }: { product: any; type: "bestselling" | "mostviewed" }) => {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <Card className="group overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-200 bg-white">
      <CardContent className="p-0">
        <div className="relative">
          {/* Product Image */}
          <div className="relative h-40 overflow-hidden bg-gray-50">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />

            {/* Simple badges */}
            {product.discountedPrice && (
              <div className="absolute top-2 right-2">
                <div className="bg-[#F18F20] text-white rounded px-2 py-1 text-xs font-medium">
                  {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}%
                </div>
              </div>
            )}

            {/* Heart icon */}
            <button
              className="absolute top-2 left-2 p-1 rounded-full bg-white/80 hover:bg-white transition-colors"
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className={cn("w-4 h-4", isLiked ? "fill-red-500 text-red-500" : "text-gray-400")} />
            </button>
          </div>

          {/* Product Info */}
          <div className="p-3">
            {/* Product Name */}
            <Link href={`/products/${product.slug}`}>
              <h3 className="font-medium text-sm mb-2 line-clamp-2 text-gray-800 group-hover:text-[#253F8F] transition-colors cursor-pointer">
                {product.name}
              </h3>
            </Link>

            {/* Rating & Stats */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span className="text-xs text-gray-600 mr-1">{product.rating}</span>
              </div>

              <div className="flex items-center text-xs text-gray-500">
                {type === "bestselling" ? (
                  <span>{product.salesCount} فروش</span>
                ) : (
                  <span>{product.viewCount} بازدید</span>
                )}
              </div>
            </div>

            {/* Price */}
            <div className="flex flex-col mb-3">
              {product.discountedPrice ? (
                <>
                  <span className="text-xs text-gray-400 line-through">{formatPrice(product.price)}</span>
                  <span className="font-bold text-gray-900">{formatPrice(product.discountedPrice)}</span>
                </>
              ) : (
                <span className="font-bold text-gray-900">{formatPrice(product.price)}</span>
              )}
            </div>

            {/* Add to cart button */}
            <Button size="sm" className="w-full bg-[#253F8F] hover:bg-[#253F8F]/90 text-white text-xs h-8">
              <ShoppingCart className="w-3 h-3 ml-1" />
              افزودن به سبد
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function ProductComparisonSection() {
  return (
    <div className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <section className="mb-8">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            {/* Simple header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-1 h-6 bg-[#F18F20] rounded ml-2"></div>
                <h2 className="text-lg font-bold text-gray-800">انتخاب کاربران</h2>
              </div>
              <Link href="/products?sort=bestselling">
                
              </Link>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {bestSellingProducts.map((product) => (
                <ProductCard key={product.id} product={product} type="bestselling" />
              ))}
            </div>
          </div>
        </section>

        {/* ImportServicesBanner between Users' Choice and Most Viewed Products sections */}
        <section className="mb-8">
          <ImportServicesBanner />
        </section>

        <section>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            {/* Simple header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-1 h-6 bg-[#253F8F] rounded ml-2"></div>
                <h2 className="text-lg font-bold text-gray-800">پربازدیدترین محصولات</h2>
              </div>
              <Link href="/products?sort=mostviewed">
                
              </Link>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {mostViewedProducts.map((product) => (
                <ProductCard key={product.id} product={product} type="mostviewed" />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
