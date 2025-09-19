"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  ChevronLeft,
  Star,
  Heart,
  Share2,
  ShoppingCart,
  Plus,
  Minus,
  Truck,
  Shield,
  Award,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Eye,
  ThumbsUp,
  Calendar,
  Package,
  Zap,
  Settings,
  Info,
} from "lucide-react"

interface Product {
  id: number
  name: string
  slug: string
  category: string
  categoryName: string
  brand: string
  model: string
  price: number
  discountPrice?: number
  inStock: boolean
  stockCount: number
  rating: number
  reviewCount: number
  isNew: boolean
  images: string[]
  description: string
  features: string[]
  specifications: Record<string, Record<string, string>>
  warranty: string
  supplier: {
    name: string
    rating: number
    yearsActive: number
    location: string
    responseTime: string
  }
  shipping: {
    freeShipping: boolean
    estimatedDays: string
    regions: string[]
  }
  relatedProducts: number[]
}

interface Props {
  product: Product
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("fa-IR").format(price) + " تومان"
}

export function ProductDetailClient({ product }: Props) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isLiked, setIsLiked] = useState(false)

  const discountPercentage = product.discountPrice
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-4 sm:py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8 overflow-x-auto">
          <Link href="/" className="hover:text-primary transition-colors whitespace-nowrap">
            صفحه اصلی
          </Link>
          <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 mx-1 sm:mx-2 flex-shrink-0" />
          <Link href="/products" className="hover:text-primary transition-colors whitespace-nowrap">
            محصولات
          </Link>
          <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 mx-1 sm:mx-2 flex-shrink-0" />
          <Link
            href={`/products/${product.category}`}
            className="hover:text-primary transition-colors whitespace-nowrap"
          >
            {product.categoryName}
          </Link>
          <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 mx-1 sm:mx-2 flex-shrink-0" />
          <span className="text-foreground font-medium truncate">{product.name}</span>
        </div>

        {/* Product Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* Product Images */}
          <div className="space-y-3 sm:space-y-4">
            {/* Main Image Container */}
            <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg sm:shadow-xl">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain p-4 sm:p-6 lg:p-8"
                priority
              />

              {/* Badges */}
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex flex-col gap-1 sm:gap-2">
                {product.isNew && (
                  <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg text-xs sm:text-sm">
                    جدید
                  </Badge>
                )}
                {product.discountPrice && (
                  <div className="bg-gradient-to-br from-red-500 to-rose-600 text-white rounded-full h-12 w-12 sm:h-16 sm:w-16 flex flex-col items-center justify-center text-xs font-bold shadow-lg">
                    <span>{discountPercentage}%</span>
                    <span>تخفیف</span>
                  </div>
                )}
              </div>

              {/* View Count */}
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-black/50 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center gap-1">
                <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>۱۲۳۴ بازدید</span>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index
                      ? "border-primary shadow-lg scale-105"
                      : "border-gray-200 dark:border-gray-700 hover:border-primary/50"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-contain p-1 sm:p-2"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4 sm:space-y-6">
            {/* Brand and Model */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 px-2 sm:px-3 py-1 w-fit">
                {product.brand}
              </Badge>
              <span className="text-muted-foreground text-sm sm:text-base">مدل: {product.model}</span>
            </div>

            {/* Product Name */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">{product.name}</h1>

            {/* Rating and Reviews */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 sm:h-5 sm:w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-amber-400 text-amber-400"
                        : i < product.rating
                          ? "fill-amber-400 text-amber-400 opacity-50"
                          : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="font-semibold mr-2 text-sm sm:text-base">{product.rating}</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 text-sm">
                <Separator orientation="vertical" className="h-4 sm:h-6 hidden sm:block" />
                <span className="text-muted-foreground">{product.reviewCount} نظر کاربران</span>
                <Separator orientation="vertical" className="h-4 sm:h-6 hidden sm:block" />
                <div className="flex items-center gap-1 text-green-600">
                  <ThumbsUp className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs sm:text-sm">۹۵% رضایت</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-950/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="space-y-2 sm:space-y-3">
                {product.discountPrice ? (
                  <>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                      <span className="text-muted-foreground line-through text-base sm:text-lg">
                        {formatPrice(product.price)}
                      </span>
                      <Badge variant="destructive" className="animate-pulse w-fit">
                        {discountPercentage}% تخفیف
                      </Badge>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-primary">
                      {formatPrice(product.discountPrice)}
                    </div>
                    <div className="text-xs sm:text-sm text-green-600 font-medium">
                      شما {formatPrice(product.price - product.discountPrice)} صرفه‌جویی می‌کنید!
                    </div>
                  </>
                ) : (
                  <div className="text-2xl sm:text-3xl font-bold">{formatPrice(product.price)}</div>
                )}
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              {product.inStock ? (
                <>
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="font-medium text-sm sm:text-base">موجود در انبار</span>
                  </div>
                  <span className="text-muted-foreground text-sm">({product.stockCount} عدد باقی‌مانده)</span>
                </>
              ) : (
                <div className="flex items-center gap-2 text-red-600">
                  <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="font-medium text-sm sm:text-base">ناموجود</span>
                </div>
              )}
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h3 className="font-semibold text-base sm:text-lg">ویژگی‌های کلیدی:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.slice(0, 6).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <span className="font-medium text-sm sm:text-base">تعداد:</span>
                <div className="flex items-center border-2 border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl overflow-hidden w-fit">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    className="h-10 w-10 sm:h-12 sm:w-12 hover:bg-primary hover:text-white"
                  >
                    <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                  <div className="w-12 h-10 sm:w-16 sm:h-12 flex items-center justify-center font-semibold bg-gray-50 dark:bg-gray-800 text-sm sm:text-base">
                    {quantity}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                    disabled={quantity >= product.stockCount}
                    className="h-10 w-10 sm:h-12 sm:w-12 hover:bg-primary hover:text-white"
                  >
                    <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 h-12 sm:h-14 text-sm sm:text-base"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
                  {product.inStock ? "افزودن به سبد خرید" : "ناموجود"}
                </Button>
                <div className="flex gap-3 sm:gap-2">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setIsLiked(!isLiked)}
                    className={`h-12 w-12 sm:h-14 sm:w-14 border-2 transition-all duration-300 ${
                      isLiked
                        ? "border-red-500 bg-red-50 text-red-500 hover:bg-red-100"
                        : "hover:border-red-500 hover:text-red-500"
                    }`}
                  >
                    <Heart className={`h-4 w-4 sm:h-5 sm:w-5 ${isLiked ? "fill-current" : ""}`} />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 w-12 sm:h-14 sm:w-14 border-2 hover:border-primary hover:text-primary bg-transparent"
                  >
                    <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <Card className="border-2 border-green-200 bg-green-50 dark:bg-green-950/20">
                <CardContent className="p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                  <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-green-800 dark:text-green-400 text-sm sm:text-base">
                      ارسال رایگان
                    </div>
                    <div className="text-xs sm:text-sm text-green-600">{product.shipping.estimatedDays}</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                <CardContent className="p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-blue-800 dark:text-blue-400 text-sm sm:text-base">گارانتی</div>
                    <div className="text-xs sm:text-sm text-blue-600">{product.warranty}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-12 sm:mb-16">
          <Tabs defaultValue="description" className="w-full">
            <div className="overflow-x-auto">
              <TabsList className="grid w-full grid-cols-4 h-12 sm:h-14 bg-gray-100 dark:bg-gray-800 rounded-xl sm:rounded-2xl p-1 min-w-fit">
                <TabsTrigger
                  value="description"
                  className="flex items-center gap-1 sm:gap-2 rounded-lg sm:rounded-xl text-xs sm:text-sm px-2 sm:px-4"
                >
                  <Info className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">توضیحات</span>
                  <span className="sm:hidden">توضیح</span>
                </TabsTrigger>
                <TabsTrigger
                  value="specifications"
                  className="flex items-center gap-1 sm:gap-2 rounded-lg sm:rounded-xl text-xs sm:text-sm px-2 sm:px-4"
                >
                  <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">مشخصات فنی</span>
                  <span className="sm:hidden">مشخصات</span>
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="flex items-center gap-1 sm:gap-2 rounded-lg sm:rounded-xl text-xs sm:text-sm px-2 sm:px-4"
                >
                  <Star className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">نظرات ({product.reviewCount})</span>
                  <span className="sm:hidden">نظرات</span>
                </TabsTrigger>
                <TabsTrigger
                  value="shipping"
                  className="flex items-center gap-1 sm:gap-2 rounded-lg sm:rounded-xl text-xs sm:text-sm px-2 sm:px-4"
                >
                  <Package className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">ارسال و گارانتی</span>
                  <span className="sm:hidden">ارسال</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="description" className="mt-6 sm:mt-8">
              <Card className="border-2">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="prose prose-sm sm:prose-lg dark:prose-invert max-w-none">
                    <p className="text-base sm:text-lg leading-relaxed">{product.description}</p>
                    <h3 className="text-lg sm:text-xl font-bold mt-4 sm:mt-6 mb-3 sm:mb-4">ویژگی‌های کامل محصول:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm sm:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6 sm:mt-8">
              <Card className="border-2">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="space-y-6 sm:space-y-8">
                    {Object.entries(product.specifications).map(([category, specs]) => (
                      <div key={category}>
                        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
                          <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                          {category}
                        </h3>
                        <div className="grid grid-cols-1 gap-3 sm:gap-4">
                          {Object.entries(specs).map(([key, value]) => (
                            <div
                              key={key}
                              className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl gap-1 sm:gap-0"
                            >
                              <span className="font-medium text-muted-foreground text-sm sm:text-base">{key}:</span>
                              <span className="font-semibold text-sm sm:text-base">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6 sm:mt-8">
              <Card className="border-2">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="text-center py-8 sm:py-12">
                    <Star className="h-12 w-12 sm:h-16 sm:w-16 text-amber-400 mx-auto mb-3 sm:mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold mb-2">بخش نظرات</h3>
                    <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                      این بخش در حال توسعه است. به زودی می‌توانید نظرات کاربران را مشاهده کنید.
                    </p>
                    <Button variant="outline" size="sm" className="text-sm sm:text-base bg-transparent">
                      اولین نظر را ثبت کنید
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="shipping" className="mt-6 sm:mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <Card className="border-2">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 flex items-center gap-2">
                      <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      اطلاعات ارسال
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base">ارسال رایگان برای خریدهای بالای ۵ میلیون تومان</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base">زمان تحویل: {product.shipping.estimatedDays}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-purple-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base">
                          شهرهای تحت پوشش: {product.shipping.regions.join("، ")}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 flex items-center gap-2">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      گارانتی و خدمات
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-gold-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base">{product.warranty}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base">خدمات پس از فروش</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Phone className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base">پشتیبانی ۲۴ ساعته</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Supplier Info */}
        <Card className="border-2 mb-12 sm:mb-16">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sm:gap-6">
              <div className="space-y-3 sm:space-y-4 w-full lg:w-auto">
                <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  اطلاعات تامین‌کننده
                </h3>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-semibold text-sm sm:text-base">{product.supplier.name}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                      <span className="text-xs sm:text-sm">{product.supplier.rating}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{product.supplier.yearsActive} سال سابقه</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{product.supplier.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>پاسخگویی: {product.supplier.responseTime}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 bg-transparent flex-1 sm:flex-none text-sm sm:text-base"
                >
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                  تماس
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 bg-transparent flex-1 sm:flex-none text-sm sm:text-base"
                >
                  <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                  پیام
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
