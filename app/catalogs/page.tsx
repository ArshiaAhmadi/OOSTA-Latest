"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Search,
  Download,
  Eye,
  FileText,
  Calendar,
  Star,
  Filter,
  Grid3X3,
  List,
  TrendingUp,
  Award,
  Clock,
  Building2,
  Zap,
  Shield,
  Target,
} from "lucide-react"
import Image from "next/image"

export default function CatalogsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")

  const featuredCatalogs = [
    {
      id: 1,
      title: "کاتالوگ جامع الکتروموتورهای صنعتی ABB",
      description: "مجموعه کامل الکتروموتورهای سه فاز و تک فاز با مشخصات فنی دقیق",
      brand: "ABB",
      category: "الکتروموتور",
      pages: 156,
      size: "12.5 MB",
      downloads: 2847,
      views: 15420,
      rating: 4.8,
      publishDate: "1403/09/15",
      image: "/electric-motors.png",
      featured: true,
      tags: ["موتور سه فاز", "موتور تک فاز", "IE3", "IE4"],
      publisher: {
        name: "شرکت ABB ایران",
        avatar: "/abb-logo.png",
      },
    },
    {
      id: 2,
      title: "کاتالوگ پمپ‌های صنعتی گراندفوس",
      description: "راهنمای کامل انتخاب و نصب پمپ‌های آب و فاضلاب صنعتی",
      brand: "Grundfos",
      category: "پمپ",
      pages: 89,
      size: "8.2 MB",
      downloads: 1923,
      views: 9876,
      rating: 4.7,
      publishDate: "1403/09/10",
      image: "/industrial-pump.png",
      featured: true,
      tags: ["پمپ آب", "پمپ فاضلاب", "پمپ بوستر"],
      publisher: {
        name: "نمایندگی گراندفوس",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
  ]

  const recentCatalogs = [
    {
      id: 3,
      title: "کاتالوگ اینورترهای دانفوس",
      brand: "Danfoss",
      category: "اینورتر",
      pages: 67,
      size: "5.8 MB",
      downloads: 1456,
      views: 7234,
      rating: 4.6,
      publishDate: "1403/09/08",
      image: "/inverter.png",
      tags: ["VFD", "فرکانس متغیر"],
    },
    {
      id: 4,
      title: "کاتالوگ گیربکس‌های صنعتی SEW",
      brand: "SEW",
      category: "گیربکس",
      pages: 124,
      size: "15.3 MB",
      downloads: 987,
      views: 5432,
      rating: 4.5,
      publishDate: "1403/09/05",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["گیربکس حلزونی", "گیربکس مخروطی"],
    },
    {
      id: 5,
      title: "کاتالوگ ژنراتورهای کاترپیلار",
      brand: "Caterpillar",
      category: "ژنراتور",
      pages: 98,
      size: "11.7 MB",
      downloads: 756,
      views: 4123,
      rating: 4.4,
      publishDate: "1403/09/02",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["ژنراتور دیزلی", "ژنراتور گازی"],
    },
    {
      id: 6,
      title: "کاتالوگ تابلوهای برق زیمنس",
      brand: "Siemens",
      category: "تابلو برق",
      pages: 78,
      size: "9.4 MB",
      downloads: 634,
      views: 3456,
      rating: 4.3,
      publishDate: "1403/08/28",
      image: "/control-panel.png",
      tags: ["تابلو فشار قوی", "تابلو کنترل"],
    },
  ]

  const categories = [
    { name: "الکتروموتور", count: 45, icon: Zap, color: "bg-blue-500" },
    { name: "پمپ", count: 38, icon: Target, color: "bg-green-500" },
    { name: "اینورتر", count: 29, icon: Shield, color: "bg-purple-500" },
    { name: "گیربکس", count: 24, icon: Building2, color: "bg-orange-500" },
    { name: "ژنراتور", count: 18, icon: Zap, color: "bg-red-500" },
    { name: "تابلو برق", count: 15, color: "bg-indigo-500" },
  ]

  const topBrands = [
    { name: "ABB", catalogs: 12, logo: "/abb-logo.png" },
    { name: "Siemens", catalogs: 10, logo: "/siemens-logo.png" },
    { name: "Schneider", catalogs: 8, logo: "/schneider-electric-logo.png" },
    { name: "Danfoss", catalogs: 7, logo: "/danfoss-logo.png" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#253F8F]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F18F20]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#253F8F]/10 to-[#F18F20]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Badge className="bg-gradient-to-r from-[#253F8F] to-[#F18F20] text-white px-6 py-2 text-lg font-bold border-0">
                <FileText className="h-5 w-5 ml-2" />
                کاتالوگ‌های تخصصی
              </Badge>
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-[#253F8F] via-[#F18F20] to-[#253F8F] bg-clip-text text-transparent leading-tight">
              کاتالوگ‌های صنعتی
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              دسترسی به جامع‌ترین مجموعه کاتالوگ‌های محصولات صنعتی از معتبرترین برندهای جهان
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-[#253F8F] mb-2">180+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">کاتالوگ فعال</div>
                <div className="text-xs text-green-600 font-medium mt-1">↗ +15% این ماه</div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-[#F18F20] mb-2">25K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">دانلود ماهانه</div>
                <div className="text-xs text-green-600 font-medium mt-1">↗ +28% رشد</div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-[#253F8F] mb-2">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">برند معتبر</div>
                <div className="text-xs text-green-600 font-medium mt-1">↗ +8 برند جدید</div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-[#F18F20] mb-2">4.8</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">رضایت کاربران</div>
                <div className="flex text-yellow-400 text-xs mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
                <Input
                  type="text"
                  placeholder="جستجو در کاتالوگ‌ها..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-14 pr-14 pl-6 text-lg rounded-2xl border-2 border-gray-200 dark:border-gray-700 focus:border-[#253F8F] bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg"
                />
                <Button className="absolute left-2 top-2 h-10 px-6 bg-gradient-to-r from-[#253F8F] to-[#F18F20] hover:from-[#253F8F]/90 hover:to-[#F18F20]/90 rounded-xl">
                  جستجو
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Categories */}
              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="h-5 w-5 text-[#253F8F]" />
                    دسته‌بندی‌ها
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                        <span className="font-medium group-hover:text-[#253F8F] transition-colors">
                          {category.name}
                        </span>
                      </div>
                      <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-700">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Top Brands */}
              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-[#F18F20]" />
                    برندهای برتر
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {topBrands.map((brand, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <Image
                          src={brand.logo || "/placeholder.svg"}
                          alt={brand.name}
                          width={32}
                          height={32}
                          className="rounded-lg"
                        />
                        <span className="font-medium">{brand.name}</span>
                      </div>
                      <Badge variant="outline">{brand.catalogs}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-[#253F8F] to-[#F18F20] text-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">اطلاع از کاتالوگ‌های جدید</h3>
                  <p className="text-white/80 text-sm mb-4">با عضویت در خبرنامه، از جدیدترین کاتالوگ‌ها مطلع شوید</p>
                  <div className="space-y-3">
                    <Input
                      type="email"
                      placeholder="ایمیل شما"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />
                    <Button className="w-full bg-white text-[#253F8F] hover:bg-gray-50">عضویت</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* View Toggle */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">کاتالوگ‌های ویژه</h2>
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Featured Catalogs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {featuredCatalogs.map((catalog) => (
                <Card
                  key={catalog.id}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                >
                  <div className="relative">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={catalog.image || "/placeholder.svg"}
                        alt={catalog.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <Badge className="absolute top-4 right-4 bg-gradient-to-r from-[#F18F20] to-[#253F8F] text-white border-0">
                        <Star className="h-3 w-3 ml-1" />
                        ویژه
                      </Badge>
                    </div>

                    <div className="absolute bottom-4 right-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">{catalog.category}</Badge>
                        <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">{catalog.brand}</Badge>
                      </div>
                      <h3 className="text-lg font-bold mb-1 line-clamp-2">{catalog.title}</h3>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{catalog.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {catalog.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <FileText className="h-4 w-4" />
                        {catalog.pages} صفحه
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <Download className="h-4 w-4" />
                        {catalog.size}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <Eye className="h-4 w-4" />
                        {catalog.views.toLocaleString()} بازدید
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <Calendar className="h-4 w-4" />
                        {catalog.publishDate}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={catalog.publisher.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{catalog.publisher.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{catalog.publisher.name}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{catalog.rating}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-gradient-to-r from-[#253F8F] to-[#F18F20] hover:from-[#253F8F]/90 hover:to-[#F18F20]/90">
                        <Download className="h-4 w-4 ml-2" />
                        دانلود
                      </Button>
                      <Button variant="outline" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Catalogs */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">جدیدترین کاتالوگ‌ها</h2>

              <div
                className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}
              >
                {recentCatalogs.map((catalog) => (
                  <Card
                    key={catalog.id}
                    className={`group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm ${viewMode === "list" ? "flex" : ""}`}
                  >
                    <div className={`relative ${viewMode === "list" ? "w-48 flex-shrink-0" : "h-40"} overflow-hidden`}>
                      <Image
                        src={catalog.image || "/placeholder.svg"}
                        alt={catalog.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <Badge className="absolute top-2 right-2 bg-[#F18F20] text-white border-0 text-xs">
                        <Clock className="h-3 w-3 ml-1" />
                        جدید
                      </Badge>
                    </div>

                    <CardContent className={`${viewMode === "list" ? "flex-1" : ""} p-4`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {catalog.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {catalog.brand}
                        </Badge>
                      </div>

                      <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-[#253F8F] transition-colors">
                        {catalog.title}
                      </h3>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {catalog.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div
                        className={`grid ${viewMode === "list" ? "grid-cols-4" : "grid-cols-2"} gap-2 mb-3 text-xs text-gray-600 dark:text-gray-300`}
                      >
                        <div className="flex items-center gap-1">
                          <FileText className="h-3 w-3" />
                          {catalog.pages}ص
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          {catalog.size}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {catalog.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-400" />
                          {catalog.rating}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-[#253F8F] hover:bg-[#253F8F]/90">
                          <Download className="h-3 w-3 ml-1" />
                          دانلود
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" size="lg" className="px-8 bg-transparent">
                <TrendingUp className="h-4 w-4 ml-2" />
                نمایش بیشتر
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
