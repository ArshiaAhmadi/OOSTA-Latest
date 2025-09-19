"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart, Star, Eye, Sparkles, Clock, Zap, Shield, Check, Bookmark } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProductProps {
  id?: number
  name?: string
  price?: number
  discountPrice?: number | null
  rating?: number
  image?: string
  hoverImage?: string
  isNew?: boolean
  isHot?: boolean
  isFeatured?: boolean
  slug?: string
  category?: string
  stock?: number
  discountPercent?: number | null
  discountEndsIn?: string | null
  features?: string[]
  brand?: string
  warranty?: string
  soldCount?: number
}

export function NewFeaturedProductCard({
  id = 1,
  name = "پمپ سانتریفیوژ صنعتی مدل CP-250",
  price = 12500000,
  discountPrice = 11800000,
  rating = 4.5,
  image = "/industrial-pump.png",
  hoverImage = "/placeholder-k7nxi.png",
  isNew = true,
  isHot = true,
  isFeatured = true,
  slug = "centrifugal-pump-cp-250",
  category = "pumps",
  stock = 15,
  discountPercent = 6,
  discountEndsIn = "2 روز",
  features = ["قدرت بالا", "مصرف انرژی کم", "ضد زنگ"],
  brand = "پمپیران",
  warranty = "18 ماه",
  soldCount = 42,
}: ProductProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  // Format price to Persian currency format
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price) + " تومان"
  }

  // تعیین نام دسته‌بندی به فارسی
  const getCategoryName = (category: string) => {
    switch (category) {
      case "pumps":
        return "پمپ‌ها"
      case "gearboxes":
        return "گیربکس‌ها"
      case "electromotors":
        return "الکتروموتورها"
      case "inverters":
        return "اینورترها"
      case "vibration-motors":
        return "موتور ویبره"
      case "pressure-vessels":
        return "مخزن تحت فشار"
      case "control-sets":
        return "ست کنترل"
      default:
        return category
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: id * 0.1 }}
    >
      <Link href={`/products/${slug}`} className="block h-full">
        <Card
          className={cn(
            "overflow-hidden transition-all duration-300 hover:shadow-lg border-2 hover:border-primary/50 h-full group",
            isFeatured ? "border-primary/30 shadow-md" : "border-border",
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <CardContent className="p-0">
            <div className="relative">
              <div className="relative h-64 w-full overflow-hidden bg-muted/20">
                <Image
                  src={isHovered && hoverImage ? hoverImage : image}
                  alt={name}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  {isNew && (
                    <Badge className="bg-[#253F8F] hover:bg-[#253F8F]/90 border-[#253F8F] shadow-sm">جدید</Badge>
                  )}
                  {isHot && (
                    <Badge className="bg-[#F18F20] hover:bg-[#F18F20]/90 border-[#F18F20] flex items-center gap-1 shadow-sm">
                      <Sparkles className="h-3 w-3" />
                      پرفروش
                    </Badge>
                  )}
                </div>

                {discountPrice && discountPercent && (
                  <div className="absolute top-3 left-3">
                    <div className="bg-gradient-to-br from-[#F18F20] to-[#F18F20]/80 text-white rounded-full h-14 w-14 flex flex-col items-center justify-center text-xs font-bold shadow-md">
                      <span>{discountPercent}%</span>
                      <span>تخفیف</span>
                    </div>
                  </div>
                )}

                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full h-10 w-10 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white"
                    onClick={(e) => {
                      e.preventDefault()
                      setIsBookmarked(!isBookmarked)
                    }}
                  >
                    <Bookmark
                      className={cn("h-5 w-5", isBookmarked ? "fill-[#F18F20] text-[#F18F20]" : "text-[#F18F20]")}
                    />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full h-10 w-10 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Eye className="h-5 w-5 text-[#253F8F]" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full h-10 w-10 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white"
                    onClick={(e) => e.preventDefault()}
                  >
                    <ShoppingCart className="h-5 w-5 text-primary" />
                  </Button>
                </div>
              </div>

              {/* نوار اطلاعات موجودی */}
              <div className="absolute -bottom-1 left-0 right-0 bg-gradient-to-r from-primary/80 to-primary px-4 py-1 text-white text-xs flex justify-between">
                <span>موجودی: {stock} عدد</span>
                {discountEndsIn && (
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>پایان تخفیف: {discountEndsIn}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="p-4">
              {/* برند و دسته‌بندی */}
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 text-xs">
                  {getCategoryName(category)}
                </Badge>
                <span className="text-xs text-muted-foreground">{brand}</span>
              </div>

              {/* نام محصول */}
              <h3 className="font-medium text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {name}
              </h3>

              {/* امتیاز و تعداد فروش */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < Math.floor(rating)
                          ? "fill-amber-400 text-amber-400"
                          : i < rating
                            ? "fill-amber-400 text-amber-400 opacity-50"
                            : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground mr-1">({rating})</span>
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Zap className="h-3 w-3 mr-1 text-amber-500" />
                  <span>{soldCount} فروش</span>
                </div>
              </div>

              {/* ویژگی‌های محصول */}
              <div className="mb-3">
                <ul className="text-xs space-y-1">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-3 w-3 mr-1 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* گارانتی */}
              <div className="flex items-center mb-3 text-xs text-muted-foreground">
                <Shield className="h-3 w-3 mr-1 text-primary" />
                <span>گارانتی {warranty}</span>
              </div>

              {/* قیمت */}
              <div className="flex flex-col">
                {discountPrice ? (
                  <>
                    <span className="text-muted-foreground line-through text-sm">{formatPrice(price)}</span>
                    <span className="font-bold text-lg text-primary">{formatPrice(discountPrice)}</span>
                  </>
                ) : (
                  <span className="font-bold text-lg">{formatPrice(price)}</span>
                )}
              </div>
            </div>
          </CardContent>

          <CardFooter className="p-4 pt-0">
            <Button className="w-full bg-gradient-to-r from-primary to-[#253F8F] hover:from-primary/90 hover:to-[#253F8F]/90 transition-all duration-300 group-hover:shadow-md">
              <ShoppingCart className="h-4 w-4 ml-2" />
              افزودن به سبد خرید
            </Button>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}
