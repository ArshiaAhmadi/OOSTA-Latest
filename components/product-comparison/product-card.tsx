"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { X, Info, ShoppingCart } from "lucide-react"

interface ProductCardProps {
  product: {
    id: string
    name: string
    image: string
    price: number
    discountedPrice?: number
    rating: number
    category: string
    brand: string
    inStock: boolean
    isNew?: boolean
    slug: string
  }
  onRemove: (id: string) => void
  showRemoveButton?: boolean
}

export function ProductComparisonCard({ product, onRemove, showRemoveButton = true }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const discount = product.discountedPrice
    ? Math.round(((product.price - product.discountedPrice) / product.price) * 100)
    : 0

  return (
    <div
      className="relative flex flex-col h-full bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {showRemoveButton && (
        <button
          onClick={() => onRemove(product.id)}
          className="absolute top-2 right-2 z-10 p-1 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-red-50 dark:hover:bg-red-900/30 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
          aria-label={`حذف ${product.name} از مقایسه`}
        >
          <X size={16} />
        </button>
      )}

      {product.isNew && <Badge className="absolute top-3 left-3 z-10 bg-green-500 hover:bg-green-600">جدید</Badge>}

      {discount > 0 && (
        <Badge className="absolute top-3 left-3 z-10 bg-red-500 hover:bg-red-600">{discount}٪ تخفیف</Badge>
      )}

      <div className="relative w-full pt-[100%] bg-gray-100 dark:bg-gray-900">
        <Link href={`/products/${product.slug}`}>
          <div className="absolute inset-0 p-4 flex items-center justify-center overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain transition-transform duration-500 hover:scale-110"
              loading="lazy"
            />
          </div>
        </Link>
      </div>

      <div className="flex flex-col flex-grow p-4">
        <div className="flex items-center justify-between mb-1">
          <Badge variant="outline" className="text-xs font-normal">
            {product.category}
          </Badge>
          <span className="text-xs text-gray-500 dark:text-gray-400">{product.brand}</span>
        </div>

        <Link href={`/products/${product.slug}`} className="group">
          <h3 className="font-medium text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400"
                    : i < product.rating
                      ? "text-yellow-400 fill-yellow-400/50"
                      : "text-gray-300 dark:text-gray-600"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 mr-1">({product.rating.toFixed(1)})</span>
        </div>

        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            <div>
              {product.discountedPrice ? (
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-primary">
                    {product.discountedPrice.toLocaleString("fa-IR")} تومان
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                    {product.price.toLocaleString("fa-IR")} تومان
                  </span>
                </div>
              ) : (
                <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {product.price.toLocaleString("fa-IR")} تومان
                </span>
              )}
            </div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className={`w-3 h-3 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`}></div>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>{product.inStock ? "موجود در انبار" : "ناموجود"}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="flex gap-2">
            <Button variant="default" size="sm" className="flex-1 gap-1" disabled={!product.inStock}>
              <ShoppingCart size={14} />
              <span>خرید</span>
            </Button>

            <Link href={`/products/${product.slug}`} className="flex-1">
              <Button variant="outline" size="sm" className="w-full gap-1">
                <Info size={14} />
                <span>جزئیات</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
