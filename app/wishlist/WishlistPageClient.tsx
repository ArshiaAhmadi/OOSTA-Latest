"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Heart,
  ShoppingCart,
  Star,
  Truck,
  X,
  Share2,
  BarChart2,
  Package,
  ArrowRight,
  Filter,
  SortAsc,
} from "lucide-react"

interface WishlistItem {
  id: string
  name: string
  image: string
  price: number
  discountedPrice?: number
  rating: number
  reviewCount: number
  inStock: boolean
  isNew?: boolean
  isBestseller?: boolean
  deliveryDays?: number
  brand?: string
  category: string
  addedDate: string
}

export default function WishlistPageClient() {
  // Mock wishlist data - in real app this would come from state management/API
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: "1",
      name: "گیربکس صنعتی SEW مدل K77 DRE90M4",
      image: "/placeholder.svg?height=300&width=300",
      price: 45000000,
      discountedPrice: 38250000,
      rating: 4.8,
      reviewCount: 24,
      inStock: true,
      isBestseller: true,
      deliveryDays: 3,
      brand: "SEW",
      category: "گیربکس",
      addedDate: "2024-01-15",
    },
    {
      id: "2",
      name: "الکتروموتور سه فاز ABB مدل M2BA 132M",
      image: "/placeholder.svg?height=300&width=300",
      price: 28000000,
      rating: 4.6,
      reviewCount: 18,
      inStock: true,
      isNew: true,
      deliveryDays: 5,
      brand: "ABB",
      category: "الکتروموتور",
      addedDate: "2024-01-12",
    },
    {
      id: "3",
      name: "پمپ سانتریفیوژ Grundfos مدل CR 15-3",
      image: "/placeholder.svg?height=300&width=300",
      price: 32000000,
      discountedPrice: 29600000,
      rating: 4.9,
      reviewCount: 31,
      inStock: false,
      deliveryDays: 7,
      brand: "Grundfos",
      category: "پمپ",
      addedDate: "2024-01-10",
    },
    {
      id: "4",
      name: "اینورتر فرکانس Schneider مدل ATV320U15N4C",
      image: "/placeholder.svg?height=300&width=300",
      price: 18500000,
      rating: 4.7,
      reviewCount: 12,
      inStock: true,
      deliveryDays: 2,
      brand: "Schneider",
      category: "اینورتر",
      addedDate: "2024-01-08",
    },
  ])

  const removeFromWishlist = (itemId: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== itemId))
  }

  const addToCart = (itemId: string) => {
    // Add to cart logic here
    console.log(`Added item ${itemId} to cart`)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price)
  }

  const renderRating = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(rating)
                  ? "text-yellow-400 fill-yellow-400"
                  : i < rating
                    ? "text-yellow-400 fill-yellow-400 opacity-50"
                    : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">{rating.toFixed(1)}</span>
      </div>
    )
  }

  const totalValue = wishlistItems.reduce((sum, item) => sum + (item.discountedPrice || item.price), 0)

  const totalSavings = wishlistItems.reduce(
    (sum, item) => sum + (item.discountedPrice ? item.price - item.discountedPrice : 0),
    0,
  )

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-md mx-auto">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#253F8F]/10 to-[#F18F20]/10 rounded-full flex items-center justify-center">
              <Heart className="h-16 w-16 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold mb-4">لیست علاقه‌مندی‌های شما خالی است</h1>
            <p className="text-gray-600 mb-8">
              محصولات مورد علاقه خود را با کلیک بر روی آیکون قلب به این لیست اضافه کنید
            </p>
            <Link href="/products">
              <Button className="bg-gradient-to-r from-[#253F8F] to-[#F18F20] hover:from-[#253F8F]/90 hover:to-[#F18F20]/90 text-white">
                <Package className="ml-2 h-4 w-4" />
                مشاهده محصولات
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#253F8F] to-[#F18F20] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">علاقه‌مندی‌های من</h1>
              <p className="text-white/80">{wishlistItems.length} محصول در لیست علاقه‌مندی‌های شما</p>
            </div>
            <div className="text-left">
              <div className="text-sm text-white/80">ارزش کل</div>
              <div className="text-2xl font-bold">{formatPrice(totalValue)} تومان</div>
              {totalSavings > 0 && (
                <div className="text-sm text-green-200">صرفه‌جویی: {formatPrice(totalSavings)} تومان</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Action Bar */}
        <div className="flex items-center justify-between mb-6 bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Filter className="ml-2 h-4 w-4" />
              فیلتر
            </Button>
            <Button variant="outline" size="sm">
              <SortAsc className="ml-2 h-4 w-4" />
              مرتب‌سازی
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Share2 className="ml-2 h-4 w-4" />
              اشتراک‌گذاری
            </Button>
            <Button
              size="sm"
              className="bg-[#F18F20] hover:bg-[#F18F20]/90 text-white"
              onClick={() => wishlistItems.forEach((item) => item.inStock && addToCart(item.id))}
            >
              <ShoppingCart className="ml-2 h-4 w-4" />
              افزودن همه به سبد
            </Button>
          </div>
        </div>

        {/* Wishlist Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {wishlistItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 group">
                  <div className="relative pt-4 px-4">
                    {/* Badges */}
                    <div className="absolute top-6 right-6 z-10 flex flex-col gap-2">
                      {item.isNew && <Badge className="bg-blue-500 hover:bg-blue-600">جدید</Badge>}
                      {item.isBestseller && <Badge className="bg-amber-500 hover:bg-amber-600">پرفروش</Badge>}
                      {item.discountedPrice && (
                        <Badge className="bg-red-500 hover:bg-red-600">
                          {Math.round((1 - item.discountedPrice / item.price) * 100)}٪
                        </Badge>
                      )}
                    </div>

                    {/* Remove Button */}
                    <div className="absolute top-6 left-6 z-10">
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => removeFromWishlist(item.id)}
                        className="bg-white/90 hover:bg-red-50 hover:text-red-600 rounded-full shadow-sm transition-all duration-200"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Product Image */}
                    <Link href={`/products/${item.category.toLowerCase()}/${item.id}`}>
                      <div className="relative h-48 mb-4 overflow-hidden rounded-lg group-hover:scale-[1.02] transition-transform duration-300">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-contain" />
                      </div>
                    </Link>
                  </div>

                  <CardContent className="p-4 pt-2">
                    {/* Category & Brand */}
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                      {item.brand && <span className="text-xs text-gray-500">{item.brand}</span>}
                    </div>

                    {/* Product Name */}
                    <Link href={`/products/${item.category.toLowerCase()}/${item.id}`}>
                      <h3 className="font-bold text-lg mb-3 hover:text-[#253F8F] transition-colors line-clamp-2 group-hover:text-[#253F8F]">
                        {item.name}
                      </h3>
                    </Link>

                    {/* Rating */}
                    <div className="flex items-center justify-between mb-3">
                      {renderRating(item.rating)}
                      <span className="text-sm text-gray-500">{item.reviewCount} نظر</span>
                    </div>

                    {/* Stock & Delivery */}
                    <div className="flex items-center justify-between mb-4">
                      {item.inStock ? (
                        <div className="flex items-center text-green-600 text-sm">
                          <div className="w-2 h-2 bg-green-600 rounded-full ml-1"></div>
                          موجود
                        </div>
                      ) : (
                        <div className="flex items-center text-red-600 text-sm">
                          <div className="w-2 h-2 bg-red-600 rounded-full ml-1"></div>
                          ناموجود
                        </div>
                      )}
                      {item.deliveryDays && (
                        <div className="flex items-center text-sm text-gray-600">
                          <Truck className="h-3 w-3 ml-1" />
                          {item.deliveryDays} روز
                        </div>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="p-4 pt-0 flex flex-col">
                    {/* Price */}
                    <div className="flex items-center justify-between w-full mb-4">
                      <div className="flex flex-col">
                        {item.discountedPrice ? (
                          <>
                            <span className="text-gray-500 line-through text-sm">{formatPrice(item.price)} تومان</span>
                            <span className="font-bold text-lg text-[#253F8F]">
                              {formatPrice(item.discountedPrice)} تومان
                            </span>
                          </>
                        ) : (
                          <span className="font-bold text-lg text-[#253F8F]">{formatPrice(item.price)} تومان</span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 w-full">
                      <Button
                        className="flex-1 bg-gradient-to-r from-[#253F8F] to-[#F18F20] hover:from-[#253F8F]/90 hover:to-[#F18F20]/90 text-white"
                        disabled={!item.inStock}
                        onClick={() => addToCart(item.id)}
                      >
                        <ShoppingCart className="ml-2 h-4 w-4" />
                        {item.inStock ? "افزودن به سبد" : "ناموجود"}
                      </Button>
                      <Button variant="outline" size="icon">
                        <BarChart2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Continue Shopping */}
        <div className="mt-12 text-center">
          <Separator className="mb-8" />
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-4">محصولات بیشتری کشف کنید</h3>
            <p className="text-gray-600 mb-6">هزاران محصول صنعتی دیگر در انتظار شماست</p>
            <Link href="/products">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#253F8F] to-[#F18F20] hover:from-[#253F8F]/90 hover:to-[#F18F20]/90 text-white"
              >
                <Package className="ml-2 h-5 w-5" />
                مشاهده همه محصولات
                <ArrowRight className="mr-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
