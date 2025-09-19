"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Trash2,
  ShoppingBag,
  CreditCard,
  ChevronLeft,
  Plus,
  Minus,
  Heart,
  Star,
  Truck,
  Shield,
  Clock,
  Gift,
  CheckCircle2,
  Sparkles,
} from "lucide-react"

export default function CartPage() {
  // Sample cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "پمپ سانتریفیوژ صنعتی مدل CP-250",
      price: 11800000,
      originalPrice: 13500000,
      quantity: 1,
      image: "/placeholder.svg?height=120&width=120",
      slug: "centrifugal-pump-cp-250",
      brand: "اوستا",
      rating: 4.8,
      inStock: true,
      warranty: "2 سال",
      category: "پمپ صنعتی",
    },
    {
      id: 2,
      name: "شیر کنترل فشار هیدرولیک مدل HV-100",
      price: 8700000,
      originalPrice: 9200000,
      quantity: 1,
      image: "/placeholder.svg?height=120&width=120",
      slug: "hydraulic-valve-hv-100",
      brand: "هیدروتک",
      rating: 4.6,
      inStock: true,
      warranty: "18 ماه",
      category: "شیر هیدرولیک",
    },
  ])

  const [couponCode, setCouponCode] = useState("")
  const [appliedCoupon, setAppliedCoupon] = useState(null)

  // Format price to Persian currency format
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price) + " تومان"
  }

  // Calculate discount percentage
  const calculateDiscount = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100)
  }

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  // Tax calculation (9%)
  const tax = subtotal * 0.09

  // Shipping cost
  const shipping = subtotal > 50000000 ? 0 : 500000

  // Coupon discount
  const couponDiscount = appliedCoupon ? subtotal * 0.1 : 0

  // Total cost
  const total = subtotal + tax + shipping - couponDiscount

  // Update quantity
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  // Remove item from cart
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  // Apply coupon
  const applyCoupon = () => {
    if (couponCode === "OUSTA10") {
      setAppliedCoupon({ code: "OUSTA10", discount: 10 })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-[#253F8F] rounded-2xl flex items-center justify-center shadow-lg">
              <ShoppingBag className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#253F8F]">سبد خرید</h1>
              <p className="text-[#253F8F]/70">مدیریت محصولات انتخابی شما</p>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-200 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#253F8F] rounded-full flex items-center justify-center shadow-md">
                <span className="text-white text-sm font-medium">1</span>
              </div>
              <span className="font-medium text-[#253F8F]">سبد خرید</span>
            </div>
            <div className="w-12 h-1 bg-[#253F8F]/30 rounded-full"></div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
                <span className="text-gray-500 text-sm font-medium">2</span>
              </div>
              <span className="text-gray-500">اطلاعات ارسال</span>
            </div>
            <div className="w-12 h-1 bg-gray-200 rounded-full"></div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
                <span className="text-gray-500 text-sm font-medium">3</span>
              </div>
              <span className="text-gray-500">پرداخت</span>
            </div>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-36 h-36 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-6 shadow-xl">
              <ShoppingBag className="h-20 w-20 text-[#253F8F]" />
            </div>
            <h2 className="text-2xl font-bold mb-3 text-[#253F8F]">سبد خرید شما خالی است</h2>
            <p className="text-[#253F8F]/70 mb-8 max-w-md mx-auto">
              هنوز محصولی به سبد خرید خود اضافه نکرده‌اید. از مجموعه ��سترده محصولات صنعتی ما دیدن کنید.
            </p>
            <Link href="/products">
              <Button
                size="lg"
                className="bg-[#F18F20] hover:bg-[#F18F20]/90 text-white shadow-lg transition-all duration-300"
              >
                <ShoppingBag className="h-5 w-5 ml-2" />
                مشاهده محصولات
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2 space-y-6">
              {/* Cart Items */}
              <Card className="bg-white border-gray-200 shadow-lg overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#253F8F]"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-[#253F8F]">
                      <ShoppingBag className="h-5 w-5 text-[#253F8F]" />
                      محصولات ({cartItems.length} قلم)
                    </CardTitle>
                    <Badge className="bg-[#F18F20] text-white border-none">
                      {cartItems.reduce((total, item) => total + item.quantity, 0)} عدد
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {cartItems.map((item, index) => (
                    <div
                      key={item.id}
                      className={`group relative ${
                        index !== cartItems.length - 1 ? "pb-6 border-b border-gray-100" : ""
                      }`}
                    >
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Product Image */}
                        <div className="relative w-full lg:w-36 h-36 rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0 shadow-md border border-gray-100">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          {item.originalPrice > item.price && (
                            <Badge className="absolute top-2 right-2 bg-[#F18F20] text-white border-none">
                              {calculateDiscount(item.originalPrice, item.price)}% تخفیف
                            </Badge>
                          )}
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 space-y-3">
                          <div>
                            <Link
                              href={`/products/${item.slug}`}
                              className="font-bold text-lg text-[#253F8F] hover:text-[#253F8F]/80 transition-colors line-clamp-2"
                            >
                              {item.name}
                            </Link>
                            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-[#253F8F]/70">
                              <span className="flex items-center gap-1">
                                <Badge
                                  variant="outline"
                                  className="text-xs border-[#253F8F]/30 text-[#253F8F] bg-[#253F8F]/5"
                                >
                                  {item.brand}
                                </Badge>
                              </span>
                              <span className="flex items-center gap-1">
                                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                                {item.rating}
                              </span>
                              <span className="flex items-center gap-1">
                                <Shield className="h-3.5 w-3.5 text-emerald-500" />
                                {item.warranty}
                              </span>
                            </div>
                          </div>

                          {/* Price and Controls */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="space-y-1">
                              <div className="flex items-center gap-3">
                                <span className="text-2xl font-bold text-[#253F8F]">{formatPrice(item.price)}</span>
                                {item.originalPrice > item.price && (
                                  <span className="text-sm text-gray-500 line-through">
                                    {formatPrice(item.originalPrice)}
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                {item.inStock ? (
                                  <Badge className="bg-emerald-500 text-white border-none">
                                    <CheckCircle2 className="h-3 w-3 mr-0.5" /> موجود در انبار
                                  </Badge>
                                ) : (
                                  <Badge variant="destructive">ناموجود</Badge>
                                )}
                              </div>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-2 bg-[#253F8F]/5 p-1 rounded-full shadow-sm">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 rounded-full text-[#253F8F] hover:text-white hover:bg-[#253F8F]"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="h-3.5 w-3.5" />
                                </Button>
                                <span className="w-10 text-center font-medium text-[#253F8F]">{item.quantity}</span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 rounded-full text-[#253F8F] hover:text-white hover:bg-[#253F8F]"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus className="h-3.5 w-3.5" />
                                </Button>
                              </div>

                              <div className="flex items-center gap-2">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 rounded-full text-gray-400 hover:text-rose-500 hover:bg-rose-50"
                                >
                                  <Heart className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 rounded-full text-gray-400 hover:text-rose-500 hover:bg-rose-50"
                                  onClick={() => removeItem(item.id)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="pt-6">
                  <Link href="/products" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto border-[#253F8F]/30 text-[#253F8F] hover:bg-[#253F8F]/5 hover:text-[#253F8F] hover:border-[#253F8F]/50 bg-transparent"
                    >
                      <ChevronLeft className="h-4 w-4 ml-2" />
                      ادامه خرید
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Shipping Info */}
              <Card className="bg-[#253F8F]/5 border-[#253F8F]/20 shadow-lg overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#253F8F]"></div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#253F8F] rounded-xl flex items-center justify-center shadow-md">
                      <Truck className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#253F8F] text-lg">ارسال رایگان</h3>
                      <p className="text-sm text-[#253F8F]/70">
                        {subtotal >= 50000000 ? (
                          <span className="flex items-center gap-1">
                            <Sparkles className="h-4 w-4 text-[#F18F20]" /> سفارش شما واجد شرایط ارسال رایگان است!
                          </span>
                        ) : (
                          `${formatPrice(50000000 - subtotal)} تا ارسال رایگان باقی مانده`
                        )}
                      </p>
                    </div>
                    {subtotal >= 50000000 && <Badge className="bg-[#F18F20] text-white border-none">رایگان</Badge>}
                  </div>
                </CardContent>
              </Card>

              {/* Special Offers */}
              <Card className="bg-[#F18F20]/5 border-[#F18F20]/20 shadow-lg overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#F18F20]"></div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#F18F20] rounded-xl flex items-center justify-center shadow-md">
                      <Gift className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#F18F20] text-lg">پیشنهاد ویژه</h3>
                      <p className="text-sm text-[#F18F20]/80">
                        با خرید بیش از 20 میلیون تومان، یک کارت هدیه 500 هزار تومانی دریافت کنید!
                      </p>
                    </div>
                    <Badge className="bg-[#F18F20] text-white border-none">جدید</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card className="bg-white border-gray-200 shadow-lg overflow-hidden sticky top-6">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#253F8F]"></div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#253F8F]">
                    <CreditCard className="h-5 w-5 text-[#253F8F]" />
                    خلاصه سفارش
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-[#253F8F]/70">جمع جزء</span>
                      <span className="font-medium text-[#253F8F]">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#253F8F]/70">مالیات (9%)</span>
                      <span className="font-medium text-[#253F8F]">{formatPrice(tax)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#253F8F]/70">هزینه ارسال</span>
                      <span className="font-medium text-[#253F8F]">
                        {shipping === 0 ? (
                          <Badge className="bg-emerald-500 text-white border-none">رایگان</Badge>
                        ) : (
                          formatPrice(shipping)
                        )}
                      </span>
                    </div>
                    {appliedCoupon && (
                      <div className="flex justify-between text-emerald-600">
                        <span className="flex items-center gap-1">
                          <Sparkles className="h-4 w-4" /> تخفیف کوپن ({appliedCoupon.code})
                        </span>
                        <span>-{formatPrice(couponDiscount)}</span>
                      </div>
                    )}
                  </div>

                  <Separator className="bg-gray-200" />

                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-[#253F8F]">جمع کل</span>
                    <span className="text-[#253F8F]">{formatPrice(total)}</span>
                  </div>

                  {/* Coupon Code */}
                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    <label className="text-sm font-medium text-[#253F8F]">کد تخفیف</label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="کد تخفیف را وارد کنید"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="flex-1 border-gray-200 focus:border-[#253F8F] focus:ring-[#253F8F]"
                      />
                      <Button
                        variant="outline"
                        onClick={applyCoupon}
                        disabled={!couponCode || appliedCoupon}
                        className="border-[#253F8F]/30 text-[#253F8F] hover:bg-[#253F8F]/5 hover:text-[#253F8F] hover:border-[#253F8F]/50 bg-transparent"
                      >
                        اعمال
                      </Button>
                    </div>
                    {appliedCoupon && (
                      <p className="text-sm text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4" /> کد تخفیف با موفقیت اعمال شد
                      </p>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="pt-6">
                  <Link href="/checkout" className="w-full">
                    <Button className="w-full bg-[#F18F20] hover:bg-[#F18F20]/90 text-white text-lg py-6 shadow-lg transition-all duration-300">
                      <CreditCard className="h-5 w-5 ml-2" />
                      تکمیل خرید
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Trust Badges */}
              <Card className="bg-white border-gray-200 shadow-lg overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#253F8F]"></div>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-center text-[#253F8F]">تضمین‌های اوستا</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                        <Shield className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-sm text-emerald-800">ضمانت اصالت کالا</span>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-[#253F8F] rounded-lg flex items-center justify-center">
                        <Truck className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-sm text-[#253F8F]">ارسال سریع و ایمن</span>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-[#F18F20] rounded-lg flex items-center justify-center">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-sm text-[#F18F20]">پشتیبانی 24/7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
