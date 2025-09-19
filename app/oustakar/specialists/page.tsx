"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import {
  Star,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  CheckCircle,
  Search,
  Calendar,
  Award,
  Briefcase,
  Users,
  Heart,
  Share2,
  ArrowRight,
  SlidersHorizontal,
} from "lucide-react"
import Image from "next/image"

export default function SpecialistMatchingPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCity, setSelectedCity] = useState("tehran") // Updated default value
  const [selectedCategory, setSelectedCategory] = useState("electrical") // Updated default value
  const [ratingFilter, setRatingFilter] = useState([0])
  const [experienceFilter, setExperienceFilter] = useState([0])
  const [priceRange, setPriceRange] = useState([0])
  const [sortBy, setSortBy] = useState("rating")
  const [showFilters, setShowFilters] = useState(false)

  const specialists = [
    {
      id: 1,
      name: "علی محمدی",
      specialty: "متخصص برق صنعتی",
      category: "electrical",
      rating: 4.9,
      reviewCount: 187,
      experience: 12,
      location: "تهران",
      district: "منطقه 2",
      image: "/placeholder.svg?height=120&width=120",
      available: true,
      completedJobs: 245,
      responseTime: "15 دقیقه",
      hourlyRate: 150000,
      skills: ["PLC", "تابلو برق", "موتور", "ژنراتور"],
      description: "متخصص برق صنعتی با بیش از 12 سال تجربه در زمینه تعمیر و نگهداری تجهیزات برقی",
      certifications: ["مدرک فنی حرفه‌ای", "گواهینامه ایمنی"],
      languages: ["فارسی", "انگلیسی"],
      workingHours: "8:00 - 20:00",
      verified: true,
    },
    {
      id: 2,
      name: "رضا کریمی",
      specialty: "متخصص تاسیسات",
      category: "facilities",
      rating: 4.8,
      reviewCount: 156,
      experience: 15,
      location: "تهران",
      district: "منطقه 5",
      image: "/placeholder.svg?height=120&width=120",
      available: true,
      completedJobs: 198,
      responseTime: "20 دقیقه",
      hourlyRate: 120000,
      skills: ["پمپ", "کمپرسور", "هیدرولیک", "لوله‌کشی"],
      description: "متخصص تاسیسات با تجربه گسترده در پروژه‌های صنعتی و ساختمانی",
      certifications: ["مدرک مهندسی مکانیک", "گواهینامه جوشکاری"],
      languages: ["فارسی"],
      workingHours: "7:00 - 19:00",
      verified: true,
    },
    {
      id: 3,
      name: "حسین احمدی",
      specialty: "متخصص ماشین‌آلات",
      category: "machinery",
      rating: 4.7,
      reviewCount: 134,
      experience: 10,
      location: "اصفهان",
      district: "مرکز شهر",
      image: "/placeholder.svg?height=120&width=120",
      available: false,
      completedJobs: 167,
      responseTime: "25 دقیقه",
      hourlyRate: 100000,
      skills: ["گیربکس", "بلبرینگ", "ابزار دقیق", "تراش"],
      description: "متخصص ماشین‌آلات با تخصص در تعمیر و بازسازی قطعات صنعتی",
      certifications: ["مدرک فنی ماشین‌آلات"],
      languages: ["فارسی"],
      workingHours: "8:00 - 18:00",
      verified: true,
    },
    {
      id: 4,
      name: "مهدی رضایی",
      specialty: "متخصص تهویه مطبوع",
      category: "hvac",
      rating: 4.6,
      reviewCount: 98,
      experience: 8,
      location: "تهران",
      district: "منطقه 1",
      image: "/placeholder.svg?height=120&width=120",
      available: true,
      completedJobs: 123,
      responseTime: "30 دقیقه",
      hourlyRate: 90000,
      skills: ["چیلر", "فن‌کویل", "دیگ", "سردخانه"],
      description: "متخصص تهویه مطبوع با تجربه در نصب و تعمیر سیستم‌های گرمایشی و سرمایشی",
      certifications: ["گواهینامه تهویه مطبوع"],
      languages: ["فارسی"],
      workingHours: "9:00 - 17:00",
      verified: false,
    },
    {
      id: 5,
      name: "امیر حسینی",
      specialty: "متخصص اتوماسیون",
      category: "electrical",
      rating: 4.9,
      reviewCount: 203,
      experience: 14,
      location: "مشهد",
      district: "منطقه 3",
      image: "/placeholder.svg?height=120&width=120",
      available: true,
      completedJobs: 289,
      responseTime: "10 دقیقه",
      hourlyRate: 180000,
      skills: ["PLC", "HMI", "SCADA", "اتوماسیون"],
      description: "متخصص اتوماسیون صنعتی با تجربه در پروژه‌های بزرگ صنعتی",
      certifications: ["مدرک مهندسی برق", "گواهینامه PLC"],
      languages: ["فارسی", "انگلیسی", "آلمانی"],
      workingHours: "24/7",
      verified: true,
    },
  ]

  const categories = [
    { id: "electrical", name: "برق و اتوماسیون" },
    { id: "facilities", name: "تاسیسات و سیالات" },
    { id: "machinery", name: "ماشین‌آلات و تجهیزات" },
    { id: "hvac", name: "تهویه مطبوع" },
  ]

  const cities = [
    { id: "tehran", name: "تهران" },
    { id: "isfahan", name: "اصفهان" },
    { id: "mashhad", name: "مشهد" },
    { id: "shiraz", name: "شیراز" },
  ]

  const filteredSpecialists = specialists.filter((specialist) => {
    const matchesSearch = specialist.name.includes(searchQuery) || specialist.specialty.includes(searchQuery)
    const matchesCity = !selectedCity || specialist.location === cities.find((c) => c.id === selectedCity)?.name
    const matchesCategory = !selectedCategory || specialist.category === selectedCategory
    const matchesRating = specialist.rating >= ratingFilter[0]
    const matchesExperience = specialist.experience >= experienceFilter[0]

    return matchesSearch && matchesCity && matchesCategory && matchesRating && matchesExperience
  })

  const sortedSpecialists = [...filteredSpecialists].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating
      case "experience":
        return b.experience - a.experience
      case "price-low":
        return a.hourlyRate - b.hourlyRate
      case "price-high":
        return b.hourlyRate - a.hourlyRate
      case "response":
        return Number.parseInt(a.responseTime) - Number.parseInt(b.responseTime)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#253F8F] to-[#F18F20] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">یافتن بهترین متخصص</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              از بین بیش از ۵۰۰ متخصص حرفه‌ای، بهترین گزینه را برای پروژه خود انتخاب کنید
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filters */}
        <Card className="mb-8 shadow-lg border-0">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="جستجو بر اساس نام، تخصص یا مهارت..."
                    className="pr-10 py-3 text-base"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Quick Filters */}
              <div className="flex flex-wrap gap-3">
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="شهر" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tehran">تهران</SelectItem> {/* Updated value prop */}
                    {cities.map((city) => (
                      <SelectItem key={city.id} value={city.id}>
                        {city.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="دسته‌بندی" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electrical">برق و اتوماسیون</SelectItem> {/* Updated value prop */}
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="bg-transparent border-[#F18F20] text-[#F18F20] hover:bg-[#F18F20]/10"
                >
                  <SlidersHorizontal className="h-4 w-4 ml-2" />
                  فیلترهای بیشتر
                </Button>
              </div>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="mt-6 pt-6 border-t grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label className="text-sm font-semibold mb-3 block">حداقل امتیاز</Label>
                  <Slider
                    value={ratingFilter}
                    onValueChange={setRatingFilter}
                    max={5}
                    min={0}
                    step={0.1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0</span>
                    <span className="font-semibold text-[#F18F20]">{ratingFilter[0].toFixed(1)}</span>
                    <span>5</span>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-semibold mb-3 block">حداقل تجربه (سال)</Label>
                  <Slider
                    value={experienceFilter}
                    onValueChange={setExperienceFilter}
                    max={20}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0</span>
                    <span className="font-semibold text-[#F18F20]">{experienceFilter[0]}</span>
                    <span>20+</span>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-semibold mb-3 block">مرتب‌سازی بر اساس</Label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rating">بالاترین امتیاز</SelectItem>
                      <SelectItem value="experience">بیشترین تجربه</SelectItem>
                      <SelectItem value="price-low">کمترین قیمت</SelectItem>
                      <SelectItem value="price-high">بیشترین قیمت</SelectItem>
                      <SelectItem value="response">سریع‌ترین پاسخ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#253F8F]">{sortedSpecialists.length} متخصص یافت شد</h2>
            <p className="text-gray-600">بهترین متخصصین بر اساس معیارهای شما</p>
          </div>
        </div>

        {/* Specialists Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sortedSpecialists.map((specialist) => (
            <Card
              key={specialist.id}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg"
            >
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#253F8F]/5 to-[#F18F20]/5 p-6 relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-xl overflow-hidden ring-2 ring-white shadow-lg">
                          <Image
                            src={specialist.image || "/placeholder.svg"}
                            alt={specialist.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {specialist.available && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-lg text-gray-800">{specialist.name}</h3>
                          {specialist.verified && <CheckCircle className="h-5 w-5 text-blue-500" />}
                        </div>
                        <p className="text-[#253F8F] font-semibold">{specialist.specialty}</p>
                        <div className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 text-gray-400 ml-1" />
                          <span className="text-sm text-gray-600">
                            {specialist.location} - {specialist.district}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Rating and Stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(specialist.rating) ? "fill-[#F18F20] text-[#F18F20]" : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="font-bold mr-2">{specialist.rating}</span>
                        <span className="text-sm text-gray-500">({specialist.reviewCount})</span>
                      </div>
                    </div>
                    <Badge
                      className={`${specialist.available ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                    >
                      {specialist.available ? "آماده به کار" : "مشغول"}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{specialist.description}</p>

                  {/* Skills */}
                  <div className="mb-4">
                    <Label className="text-sm font-semibold mb-2 block">مهارت‌ها</Label>
                    <div className="flex flex-wrap gap-2">
                      {specialist.skills.slice(0, 4).map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-[#F18F20]/30 text-[#F18F20]">
                          {skill}
                        </Badge>
                      ))}
                      {specialist.skills.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{specialist.skills.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Briefcase className="h-4 w-4 ml-2 text-[#F18F20]" />
                      <span>{specialist.experience} سال تجربه</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="h-4 w-4 ml-2 text-[#F18F20]" />
                      <span>{specialist.completedJobs} پروژه</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 ml-2 text-[#F18F20]" />
                      <span>پاسخ در {specialist.responseTime}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Award className="h-4 w-4 ml-2 text-[#F18F20]" />
                      <span>{specialist.hourlyRate.toLocaleString()} تومان/ساعت</span>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 ml-2 text-[#F18F20]" />
                      <span>ساعات کاری: {specialist.workingHours}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      className="flex-1 bg-gradient-to-r from-[#253F8F] to-[#F18F20] hover:from-[#253F8F]/90 hover:to-[#F18F20]/90 font-semibold"
                      disabled={!specialist.available}
                    >
                      <Users className="h-4 w-4 ml-2" />
                      انتخاب متخصص
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#F18F20] text-[#F18F20] hover:bg-[#F18F20]/10 bg-transparent"
                    >
                      <MessageCircle className="h-4 w-4 ml-2" />
                      چت
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#253F8F] text-[#253F8F] hover:bg-[#253F8F]/10 bg-transparent"
                    >
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {sortedSpecialists.length > 0 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#F18F20] text-[#F18F20] hover:bg-[#F18F20]/10 bg-transparent px-8 py-3"
            >
              نمایش متخصصین بیشتر
              <ArrowRight className="mr-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {/* No Results */}
        {sortedSpecialists.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">متخصصی یافت نشد</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              با معیارهای انتخابی شما متخصصی یافت نشد. لطفاً فیلترها را تغییر دهید یا جستجوی جدیدی انجام دهید.
            </p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setSelectedCity("")
                setSelectedCategory("")
                setRatingFilter([0])
                setExperienceFilter([0])
              }}
              className="bg-gradient-to-r from-[#253F8F] to-[#F18F20] hover:from-[#253F8F]/90 hover:to-[#F18F20]/90"
            >
              پاک کردن فیلترها
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
