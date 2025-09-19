"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star, MapPin, Award, ExternalLink, Shield, Clock, CheckCircle, Handshake, UserPlus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// نمونه داده‌های تامین‌کنندگان
const suppliers = [
  {
    id: 1,
    name: "شرکت صنعت گستر پارس",
    logo: "/industrial-logo.png",
    rating: 4.8,
    reviewCount: 124,
    location: "تهران",
    categories: ["پمپ", "گیربکس"],
    featured: true,
    established: 2003,
    certified: true,
    description: "تولید کننده انواع پمپ‌های صنعتی و گیربکس‌های با کیفیت با بیش از 20 سال سابقه",
    slug: "pars-industry",
  },
  {
    id: 2,
    name: "الکتروموتور آریا",
    logo: "/placeholder.svg?key=ry654",
    rating: 4.6,
    reviewCount: 98,
    location: "اصفهان",
    categories: ["الکتروموتور"],
    featured: true,
    established: 1998,
    certified: true,
    description: "تولید کننده انواع الکتروموتورهای صنعتی با استانداردهای بین‌المللی",
    slug: "aria-electromotor",
  },
  {
    id: 3,
    name: "صنایع مکانیک نوین",
    logo: "/placeholder.svg?key=qw6ow",
    rating: 4.5,
    reviewCount: 87,
    location: "مشهد",
    categories: ["گیربکس", "پمپ"],
    featured: false,
    established: 2010,
    certified: true,
    description: "ارائه دهنده انواع تجهیزات مکانیکی صنعتی با قیمت مناسب و کیفیت بالا",
    slug: "novin-mechanic",
  },
  {
    id: 4,
    name: "پمپ سازان توس",
    logo: "/placeholder.svg?key=wu4ke",
    rating: 4.7,
    reviewCount: 112,
    location: "تبریز",
    categories: ["پمپ"],
    featured: true,
    established: 1995,
    certified: true,
    description: "متخصص در طراحی و تولید انواع پمپ‌های صنعتی با کاربردهای مختلف",
    slug: "toos-pumps",
  },
  {
    id: 5,
    name: "الکترو صنعت آذر",
    logo: "/placeholder.svg?key=gqerz",
    rating: 4.4,
    reviewCount: 76,
    location: "تهران",
    categories: ["الکتروموتور", "گیربکس"],
    featured: false,
    established: 2008,
    certified: false,
    description: "تولید و واردات انواع الکتروموتور و گیربکس‌های صنعتی با گارانتی معتبر",
    slug: "azar-electro",
  },
]

export default function SupplierSlider() {
  return (
    <div className="relative py-8">
      <div className="container mx-auto mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              تامین‌کنندگان برتر صنعتی
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
              همکاری با معتبرترین تولیدکنندگان و تامین‌کنندگان تجهیزات صنعتی با سابقه طولانی در صنعت
            </p>
          </div>
          <Link href="/suppliers" className="mt-4 md:mt-0">
            <Button
              variant="outline"
              className="border-2 border-gray-300 dark:border-gray-700 hover:border-primary hover:bg-transparent hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all duration-300"
            >
              مشاهده همه تامین‌��نندگان
              <ExternalLink className="h-4 w-4 mr-2" />
            </Button>
          </Link>
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {suppliers.map((supplier) => (
            <CarouselItem key={supplier.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="h-full border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 hover:border-primary dark:hover:border-primary">
                <CardContent className="p-0">
                  <div className="flex flex-col">
                    {/* هدر کارت */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 border-b-2 border-gray-200 dark:border-gray-700">
                      <div className="flex items-center">
                        <div className="relative w-16 h-16 bg-white dark:bg-gray-700 rounded-md p-2 flex items-center justify-center border border-gray-300 dark:border-gray-600">
                          <Image
                            src={supplier.logo || "/placeholder.svg"}
                            alt={supplier.name}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                        <div className="mr-4">
                          <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">{supplier.name}</h3>
                          <div className="flex items-center mt-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(supplier.rating)
                                      ? "fill-amber-500 text-amber-500"
                                      : i < supplier.rating
                                        ? "fill-amber-500 text-amber-500 opacity-50"
                                        : "text-gray-300 dark:text-gray-600"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400 mr-1">({supplier.rating})</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* محتوای کارت */}
                    <div className="p-5">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {supplier.categories.map((category) => (
                          <Badge
                            key={category}
                            variant="outline"
                            className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 font-medium"
                          >
                            {category}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <MapPin className="h-4 w-4 ml-1" />
                        {supplier.location}
                        <span className="mx-2">•</span>
                        <Clock className="h-4 w-4 ml-1" />
                        <span>تاسیس {supplier.established}</span>
                      </div>

                      <div className="flex flex-wrap gap-3 mb-4">
                        {supplier.featured && (
                          <div className="flex items-center text-sm text-primary">
                            <Award className="h-4 w-4 ml-1" />
                            تامین‌کننده برتر
                          </div>
                        )}
                        {supplier.certified && (
                          <div className="flex items-center text-sm text-green-600 dark:text-green-500">
                            <Shield className="h-4 w-4 ml-1" />
                            دارای گواهی کیفیت
                          </div>
                        )}
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 line-clamp-2 h-10">
                        {supplier.description}
                      </p>

                      <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
                        <Link href={`/suppliers/${supplier.slug}`} className="w-full">
                          <Button
                            variant="outline"
                            className="w-full border-2 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors duration-300"
                          >
                            مشاهده محصولات و خدمات
                            <CheckCircle className="h-4 w-4 mr-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-8">
          <CarouselPrevious className="static translate-y-0 ml-2 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-primary dark:hover:border-primary" />
          <CarouselNext className="static translate-y-0 mr-2 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-primary dark:hover:border-primary" />
        </div>
      </Carousel>

      {/* Join Oosta Banner - Enhanced Design */}
      <div className="container mx-auto mt-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-1">
          {/* Outer glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 opacity-75 blur-xl"></div>

          <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-8 md:p-12">
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              {/* Floating geometric shapes */}
              <div className="absolute top-8 left-8 w-20 h-20 bg-white/30 rounded-2xl rotate-12 animate-pulse"></div>
              <div className="absolute top-16 right-16 w-16 h-16 bg-white/20 rounded-full animate-bounce"></div>
              <div className="absolute bottom-12 left-20 w-12 h-12 bg-white/25 rounded-lg rotate-45"></div>
              <div className="absolute bottom-20 right-12 w-24 h-24 bg-white/15 rounded-3xl -rotate-12"></div>
              <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-white/30 rounded-full"></div>
              <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-white/20 rounded-2xl rotate-45"></div>

              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-40">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
              </div>
            </div>

            <div className="relative z-10 text-center">
              {/* Icon with enhanced styling */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-full p-6 animate-ping"></div>
                  <div className="relative bg-white/20 backdrop-blur-sm rounded-full p-6 border border-white/30 shadow-2xl">
                    <Handshake className="h-16 w-16 text-white drop-shadow-lg" />
                  </div>
                </div>
              </div>

              {/* Enhanced typography */}
              <div className="mb-6">
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm mb-4 px-4 py-2 text-sm font-medium">
                  🚀 فرصت طلایی
                </Badge>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                  تامین‌کننده یا تولیدکننده
                  <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    هستید؟
                  </span>
                </h3>
              </div>

              <p className="text-white/90 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                به بزرگترین پلتفرم صنعتی ایران بپیوندید و محصولات خود را به
                <span className="font-bold text-yellow-300"> بیش از ۱۰۰,۰۰۰ مشتری </span>
                معرفی کنید
              </p>

              {/* Enhanced CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
                <Link href="/join-oosta">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-10 py-4 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 rounded-2xl border-2 border-white/20"
                  >
                    <UserPlus className="h-6 w-6 ml-2" />
                    شروع رایگان
                  </Button>
                </Link>

                <div className="flex items-center gap-4">
                  <div className="flex items-center text-white/90 text-sm bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                    <CheckCircle className="h-4 w-4 ml-2 text-green-300" />
                    رایگان و بدون هزینه
                  </div>
                  <div className="flex items-center text-white/90 text-sm bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                    <Shield className="h-4 w-4 ml-2 text-blue-300" />
                    تضمین امنیت
                  </div>
                </div>
              </div>

              {/* Enhanced stats grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
                <div className="text-center group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
                    <div className="text-3xl font-black text-white mb-1">+۲,۵۰۰</div>
                    <div className="text-white/80 text-sm font-medium">تامین‌کننده فعال</div>
                    <div className="text-green-300 text-xs mt-1">↗ +۲۳٪ رشد</div>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
                    <div className="text-3xl font-black text-white mb-1">+۲۵K</div>
                    <div className="text-white/80 text-sm font-medium">محصول ثبت شده</div>
                    <div className="text-green-300 text-xs mt-1">↗ +۴۵٪ رشد</div>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
                    <div className="text-3xl font-black text-white mb-1">+۱۰۰K</div>
                    <div className="text-white/80 text-sm font-medium">مشتری فعال</div>
                    <div className="text-green-300 text-xs mt-1">↗ +۳۸٪ رشد</div>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
                    <div className="text-3xl font-black text-white mb-1">۹۹.۲٪</div>
                    <div className="text-white/80 text-sm font-medium">رضایت کاربران</div>
                    <div className="text-yellow-300 text-xs mt-1">⭐ عالی</div>
                  </div>
                </div>
              </div>

              {/* Success indicators */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="flex items-center bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-green-400/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full ml-2 animate-pulse"></div>
                  <span className="text-green-200 text-sm font-medium">۱,۲۳۴ تامین‌کننده آنلاین</span>
                </div>
                <div className="flex items-center bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-400/30">
                  <div className="w-2 h-2 bg-blue-400 rounded-full ml-2 animate-pulse"></div>
                  <span className="text-blue-200 text-sm font-medium">۵,۶۷۸ سفارش امروز</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
