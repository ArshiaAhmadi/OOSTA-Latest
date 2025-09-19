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
  Database,
  Calendar,
  User,
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
  FileSpreadsheet,
  BarChart3,
  Settings,
} from "lucide-react"
import Image from "next/image"

export default function DatasheetsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")

  const featuredDatasheets = [
    {
      id: 1,
      title: "دیتاشیت کامل الکتروموتور ABB M3BP سری IE3",
      description: "مشخصات فنی دقیق، منحنی‌های عملکرد و جداول انتخاب موتورهای سه فاز",
      brand: "ABB",
      category: "الکتروموتور",
      model: "M3BP-IE3",
      pages: 24,
      size: "3.2 MB",
      downloads: 4521,
      views: 18750,
      rating: 4.9,
      publishDate: "1403/09/20",
      image: "/electric-motors.png",
      featured: true,
      specifications: {
        power: "0.75-355 kW",
        voltage: "230/400V",
        frequency: "50/60 Hz",
        efficiency: "IE3",
      },
      tags: ["IE3", "سه فاز", "چدنی", "آلومینیومی"],
      publisher: {
        name: "ABB تکنیکال",
        avatar: "/abb-logo.png",
      },
    },
    {
      id: 2,
      title: "دیتاشیت پمپ گریز از مرکز Grundfos CR",
      description: "مشخصات هیدرولیکی، منحنی‌های H-Q و راهنمای انتخاب پمپ‌های عمودی",
      brand: "Grundfos",
      category: "پمپ",
      model: "CR Series",
      pages: 18,
      size: "2.8 MB",
      downloads: 3247,
      views: 12430,
      rating: 4.8,
      publishDate: "1403/09/18",
      image: "/industrial-pump.png",
      featured: true,
      specifications: {
        flow: "0.5-120 m³/h",
        head: "15-340 m",
        pressure: "25 bar",
        temperature: "120°C",
      },
      tags: ["گریز از مرکز", "عمودی", "استیل", "مقاوم"],
      publisher: {
        name: "Grundfos فنی",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
  ]

  const recentDatasheets = [
    {
      id: 3,
      title: "دیتاشیت اینورتر Danfoss VLT FC302",
      brand: "Danfoss",
      category: "اینورتر",
      model: "VLT FC302",
      pages: 16,
      size: "2.1 MB",
      downloads: 2156,
      views: 8934,
      rating: 4.7,
      publishDate: "1403/09/15",
      image: "/inverter.png",
      specifications: {
        power: "0.37-22 kW",
        voltage: "380-480V",
        frequency: "0-1000 Hz",
      },
      tags: ["VFD", "IP20", "Modbus"],
    },
    {
      id: 4,
      title: "دیتاشیت گیربکس SEW K Series",
      brand: "SEW",
      category: "گیربکس",
      model: "K Series",
      pages: 32,
      size: "4.5 MB",
      downloads: 1876,
      views: 7123,
      rating: 4.6,
      publishDate: "1403/09/12",
      image: "/placeholder.svg?height=200&width=300",
      specifications: {
        ratio: "3.77-191",
        torque: "18-18000 Nm",
        efficiency: "96%",
      },
      tags: ["حلزونی", "مخروطی", "موازی"],
    },
    {
      id: 5,
      title: "دیتاشیت ژنراتور Caterpillar C18",
      brand: "Caterpillar",
      category: "ژنراتور",
      model: "C18 ACERT",
      pages: 28,
      size: "5.2 MB",
      downloads: 1432,
      views: 5876,
      rating: 4.5,
      publishDate: "1403/09/08",
      image: "/placeholder.svg?height=200&width=300",
      specifications: {
        power: "350-715 kVA",
        voltage: "400/230V",
        fuel: "دیزل",
      },
      tags: ["دیزلی", "ACERT", "Tier 3"],
    },
    {
      id: 6,
      title: "دیتاشیت کنتاکتور Siemens 3RT",
      brand: "Siemens",
      category: "کنتاکتور",
      model: "3RT Series",
      pages: 12,
      size: "1.8 MB",
      downloads: 987,
      views: 4321,
      rating: 4.4,
      publishDate: "1403/09/05",
      image: "/control-panel.png",
      specifications: {
        current: "9-800A",
        voltage: "24-690V",
        auxiliary: "2NO+2NC",
      },
      tags: ["AC", "DC", "مغناطیسی"],
    },
  ]

  const categories = [
    { name: "الکتروموتور", count: 67, icon: Zap, color: "bg-[#253F8F]" },
    { name: "پمپ", count: 54, icon: Target, color: "bg-[#F18F20]" },
    { name: "اینورتر", count: 43, icon: Shield, color: "bg-[#253F8F]" },
    { name: "گیربکس", count: 38, icon: Settings, color: "bg-[#F18F20]" },
    { name: "ژنراتور", count: 29, icon: Zap, color: "bg-[#253F8F]" },
    { name: "کنتاکتور", count: 25, icon: Building2, color: "bg-[#F18F20]" },
  ]

  const topBrands = [
    { name: "ABB", datasheets: 18, logo: "/abb-logo.png" },
    { name: "Siemens", datasheets: 15, logo: "/siemens-logo.png" },
    { name: "Schneider", datasheets: 12, logo: "/schneider-electric-logo.png" },
    { name: "Danfoss", datasheets: 10, logo: "/danfoss-logo.png" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#F18F20]/30 dark:from-gray-900 dark:via-gray-800 dark:to-[#F18F20]/20">
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
                <Database className="h-5 w-5 ml-2" />
                دیتاشیت‌های تخصصی
              </Badge>
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-[#253F8F] via-[#F18F20] to-[#253F8F] bg-clip-text text-transparent leading-tight">
              دیتاشیت‌های فنی
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              دسترسی به کامل‌ترین مجموعه مشخصات فنی و دیتاشیت‌های محصولات صنعتی
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-[#253F8F] mb-2">250+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">دیتاشیت فعال</div>
                <div className="text-xs text-green-600 font-medium mt-1">↗ +22% این ماه</div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-[#F18F20] mb-2">35K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">دانلود ماهانه</div>
                <div className="text-xs text-green-600 font-medium mt-1">↗ +34% رشد</div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-[#253F8F] mb-2">65+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">برند معتبر</div>
                <div className="text-xs text-green-600 font-medium mt-1">↗ +12 برند جدید</div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-[#F18F20] mb-2">4.9</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">دقت اطلاعات</div>
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
                  placeholder="جستجو در دیتاشیت‌ها..."
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
                      <Badge variant="outline">{brand.datasheets}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Technical Support */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-[#253F8F] to-[#F18F20] text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 className="h-5 w-5" />
                    <h3 className="text-lg font-bold">پشتیبانی فنی</h3>
                  </div>
                  <p className="text-white/80 text-sm mb-4">نیاز به راهنمایی در انتخاب محصول دارید؟</p>
                  <Button className="w-full bg-white text-[#253F8F] hover:bg-gray-50">
                    <User className="h-4 w-4 ml-2" />
                    تماس با متخصص
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* View Toggle */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">دیتاشیت‌های ویژه</h2>
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

            {/* Featured Datasheets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {featuredDatasheets.map((datasheet) => (
                <Card
                  key={datasheet.id}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                >
                  <div className="relative">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={datasheet.image || "/placeholder.svg"}
                        alt={datasheet.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <Badge className="absolute top-4 right-4 bg-gradient-to-r from-[#253F8F] to-[#F18F20] text-white border-0">
                        <FileSpreadsheet className="h-3 w-3 ml-1" />
                        ویژه
                      </Badge>
                    </div>

                    <div className="absolute bottom-4 right-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">{datasheet.category}</Badge>
                        <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">{datasheet.brand}</Badge>
                      </div>
                      <h3 className="text-lg font-bold mb-1 line-clamp-2">{datasheet.title}</h3>
                      <p className="text-sm text-gray-200 font-medium">{datasheet.model}</p>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                      {datasheet.description}
                    </p>

                    {/* Technical Specifications */}
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 mb-4">
                      <h4 className="text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">مشخصات کلیدی:</h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {Object.entries(datasheet.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-gray-500">{key}:</span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {datasheet.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <FileSpreadsheet className="h-4 w-4" />
                        {datasheet.pages} صفحه
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <Download className="h-4 w-4" />
                        {datasheet.size}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <Eye className="h-4 w-4" />
                        {datasheet.views.toLocaleString()} بازدید
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <Calendar className="h-4 w-4" />
                        {datasheet.publishDate}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={datasheet.publisher.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{datasheet.publisher.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{datasheet.publisher.name}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{datasheet.rating}</span>
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

            {/* Recent Datasheets */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">جدیدترین دیتاشیت‌ها</h2>

              <div
                className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}
              >
                {recentDatasheets.map((datasheet) => (
                  <Card
                    key={datasheet.id}
                    className={`group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm ${viewMode === "list" ? "flex" : ""}`}
                  >
                    <div className={`relative ${viewMode === "list" ? "w-48 flex-shrink-0" : "h-40"} overflow-hidden`}>
                      <Image
                        src={datasheet.image || "/placeholder.svg"}
                        alt={datasheet.title}
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
                          {datasheet.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {datasheet.brand}
                        </Badge>
                      </div>

                      <h3 className="font-bold mb-1 line-clamp-2 group-hover:text-[#253F8F] transition-colors">
                        {datasheet.title}
                      </h3>

                      <p className="text-xs text-gray-500 mb-2">{datasheet.model}</p>

                      {/* Mini Specifications */}
                      <div className="bg-gray-50 dark:bg-gray-700/30 rounded p-2 mb-3">
                        <div className="grid grid-cols-1 gap-1 text-xs">
                          {Object.entries(datasheet.specifications)
                            .slice(0, 2)
                            .map(([key, value]) => (
                              <div key={key} className="flex justify-between">
                                <span className="text-gray-500">{key}:</span>
                                <span className="font-medium">{value}</span>
                              </div>
                            ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {datasheet.tags.slice(0, 2).map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div
                        className={`grid ${viewMode === "list" ? "grid-cols-4" : "grid-cols-2"} gap-2 mb-3 text-xs text-gray-600 dark:text-gray-300`}
                      >
                        <div className="flex items-center gap-1">
                          <FileSpreadsheet className="h-3 w-3" />
                          {datasheet.pages}ص
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          {datasheet.size}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {datasheet.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-400" />
                          {datasheet.rating}
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
