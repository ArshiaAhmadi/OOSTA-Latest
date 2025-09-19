"use client"

import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { Product } from "@/hooks/use-product-filters"

interface ProductGridProps {
  products: Product[]
  viewMode: "grid" | "list"
  categorySlug: string
  isLoading?: boolean
}

// فرمت قیمت به تومان
const formatPrice = (price: number) => {
  return new Intl.NumberFormat("fa-IR").format(price) + " تومان"
}

export function ProductGrid({ products, viewMode, categorySlug, isLoading }: ProductGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-200 dark:bg-gray-700" />
            <CardContent className="p-4">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4" />
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">���</div>
        <h3 className="text-xl font-semibold mb-2">محصولی یافت نشد</h3>
        <p className="text-muted-foreground">لطفاً فیلترهای خود را تغییر دهید یا جستجوی جدیدی انجام دهید.</p>
      </div>
    )
  }

  if (viewMode === "list") {
    return (
      <div className="space-y-4">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              <div className="relative w-full sm:w-48 h-48">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
                {product.isNew && <Badge className="absolute top-3 right-3 bg-primary">جدید</Badge>}
                {product.discountPrice && (
                  <Badge variant="destructive" className="absolute top-3 left-3">
                    {Math.round(((product.price - product.discountPrice) / product.price) * 100)}%
                  </Badge>
                )}
              </div>
              <CardContent className="flex-1 p-4">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {product.brand}
                    </Badge>
                    <div className="flex items-center">
                      <span className="text-amber-500 text-xs ml-1">★</span>
                      <span className="text-xs">{product.rating}</span>
                    </div>
                  </div>
                  <Link href={`/products/${categorySlug}/${product.slug}`}>
                    <h3 className="font-medium text-lg mb-2 hover:text-primary transition-colors">{product.name}</h3>
                  </Link>
                  <div className="flex flex-col mb-4 mt-auto">
                    {product.discountPrice ? (
                      <>
                        <span className="text-muted-foreground line-through text-sm">{formatPrice(product.price)}</span>
                        <span className="font-bold text-lg text-primary">{formatPrice(product.discountPrice)}</span>
                      </>
                    ) : (
                      <span className="font-bold text-lg">{formatPrice(product.price)}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className={cn(
                        product.inStock
                          ? "bg-green-50 text-green-600 border-green-200"
                          : "bg-red-50 text-red-600 border-red-200",
                      )}
                    >
                      {product.inStock ? "موجود در انبار" : "ناموجود"}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      + مقایسه
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <div className="relative">
            <div className="relative h-48 w-full">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain p-4" />
            </div>
            {product.isNew && <Badge className="absolute top-3 right-3 bg-primary">جدید</Badge>}
            {product.discountPrice && (
              <Badge variant="destructive" className="absolute top-3 left-3">
                {Math.round(((product.price - product.discountPrice) / product.price) * 100)}%
              </Badge>
            )}
          </div>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Badge variant="outline" className="text-xs">
                {product.brand}
              </Badge>
              <div className="flex items-center">
                <span className="text-amber-500 text-xs ml-1">★</span>
                <span className="text-xs">{product.rating}</span>
              </div>
            </div>
            <Link href={`/products/${categorySlug}/${product.slug}`}>
              <h3 className="font-medium text-lg mb-2 hover:text-primary transition-colors line-clamp-2">
                {product.name}
              </h3>
            </Link>
            <div className="flex flex-col mb-4">
              {product.discountPrice ? (
                <>
                  <span className="text-muted-foreground line-through text-sm">{formatPrice(product.price)}</span>
                  <span className="font-bold text-lg text-primary">{formatPrice(product.discountPrice)}</span>
                </>
              ) : (
                <span className="font-bold text-lg">{formatPrice(product.price)}</span>
              )}
            </div>
            <div className="flex items-center justify-between">
              <Badge
                variant="outline"
                className={cn(
                  product.inStock
                    ? "bg-green-50 text-green-600 border-green-200"
                    : "bg-red-50 text-red-600 border-red-200",
                )}
              >
                {product.inStock ? "موجود در انبار" : "ناموجود"}
              </Badge>
              <Button variant="ghost" size="sm">
                + مقایسه
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
