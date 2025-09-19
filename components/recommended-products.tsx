"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingCart, Heart, BarChart2, Star, Truck } from "lucide-react"

interface Product {
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
  tags?: string[]
  deliveryDays?: number
  brand?: string
  brandLogo?: string
}

interface ProductGroup {
  id: string
  title: string
  products: Product[]
}

interface RecommendedProductsProps {
  categoryName: string
  productGroups: ProductGroup[]
}

export function RecommendedProducts({ categoryName, productGroups }: RecommendedProductsProps) {
  const [activeGroup, setActiveGroup] = useState(productGroups[0]?.id || "")
  const [wishlist, setWishlist] = useState<string[]>([])

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
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
        <span className="text-sm text-gray-600 dark:text-gray-400">{rating.toFixed(1)}</span>
      </div>
    )
  }

  return (
    <section className="py-12 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">محصولات پیشنهادی {categoryName}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            محصولات برتر و پرفروش {categoryName} را بر اساس نیاز خود مشاهده کنید.
          </p>
        </div>

        <Tabs value={activeGroup} onValueChange={setActiveGroup} className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8 gap-2">
            {productGroups.map((group) => (
              <TabsTrigger
                key={group.id}
                value={group.id}
                className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {group.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {productGroups.map((group) => (
            <TabsContent key={group.id} value={group.id} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {group.products.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
                      <div className="relative pt-4 px-4">
                        <div className="absolute top-6 right-6 z-10 flex flex-col gap-2">
                          {product.isNew && <Badge className="bg-blue-500 hover:bg-blue-600">جدید</Badge>}
                          {product.isBestseller && <Badge className="bg-amber-500 hover:bg-amber-600">پرفروش</Badge>}
                        </div>
                        <div className="absolute top-6 left-6 z-10">
                          <button
                            onClick={() => toggleWishlist(product.id)}
                            className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            aria-label={wishlist.includes(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                          >
                            <Heart
                              className={`h-5 w-5 ${
                                wishlist.includes(product.id) ? "text-red-500 fill-red-500" : "text-gray-400"
                              }`}
                            />
                          </button>
                        </div>
                        <Link href={`/products/${categoryName.toLowerCase()}/${product.id}`}>
                          <div className="relative h-48 mb-4 overflow-hidden rounded-lg group">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              className="object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </Link>
                        {product.brand && product.brandLogo && (
                          <div className="absolute bottom-0 right-0 bg-white dark:bg-gray-800 p-1 rounded-tl-lg">
                            <div className="relative h-6 w-16">
                              <Image
                                src={product.brandLogo || "/placeholder.svg"}
                                alt={product.brand}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4 pt-2">
                        <Link href={`/products/${categoryName.toLowerCase()}/${product.id}`}>
                          <h3 className="font-bold text-lg mb-2 hover:text-primary transition-colors line-clamp-2">
                            {product.name}
                          </h3>
                        </Link>
                        <div className="flex items-center justify-between mb-3">
                          {renderRating(product.rating)}
                          <span className="text-sm text-gray-500">{product.reviewCount} نظر</span>
                        </div>
                        {product.tags && product.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-3">
                            {product.tags.map((tag, index) => (
                              <span key={index} className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="flex items-center gap-2 mb-3">
                          {product.inStock ? (
                            <div className="flex items-center text-green-600 dark:text-green-400 text-sm">
                              <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full ml-1"></div>
                              موجود
                            </div>
                          ) : (
                            <div className="flex items-center text-red-600 dark:text-red-400 text-sm">
                              <div className="w-2 h-2 bg-red-600 dark:bg-red-400 rounded-full ml-1"></div>
                              ناموجود
                            </div>
                          )}
                          {product.deliveryDays && (
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <Truck className="h-3 w-3 ml-1" />
                              ارسال: {product.deliveryDays} روز کاری
                            </div>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex flex-col">
                        <div className="flex items-center justify-between w-full mb-3">
                          <div className="flex flex-col">
                            {product.discountedPrice ? (
                              <>
                                <span className="text-gray-500 line-through text-sm">
                                  {formatPrice(product.price)} تومان
                                </span>
                                <span className="font-bold text-lg">{formatPrice(product.discountedPrice)} تومان</span>
                              </>
                            ) : (
                              <span className="font-bold text-lg">{formatPrice(product.price)} تومان</span>
                            )}
                          </div>
                          {product.discountedPrice && (
                            <Badge className="bg-red-500 hover:bg-red-600">
                              {Math.round((1 - product.discountedPrice / product.price) * 100)}٪
                            </Badge>
                          )}
                        </div>
                        <div className="flex gap-2 w-full">
                          <Button className="flex-1" disabled={!product.inStock}>
                            <ShoppingCart className="ml-2 h-4 w-4" />
                            افزودن به سبد
                          </Button>
                          <Button variant="outline" size="icon">
                            <BarChart2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
