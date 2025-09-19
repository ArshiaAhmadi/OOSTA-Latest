"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import {
  Menu,
  Search,
  ShoppingCart,
  User,
  LogIn,
  ChevronDown,
  Heart,
  Cog,
  Zap,
  Droplet,
  Activity,
  Flame,
  Database,
  Sliders,
  Vibrate,
  Mic,
  Camera,
  X,
} from "lucide-react"

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVoiceSearchActive, setIsVoiceSearchActive] = useState(false)
  const [showVoiceGuide, setShowVoiceGuide] = useState(false)
  const [showPictureGuide, setShowPictureGuide] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleVoiceSearch = () => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      setIsVoiceSearchActive(true)
      setTimeout(() => setIsVoiceSearchActive(false), 3000)
    } else {
      setShowVoiceGuide(true)
    }
  }

  const handlePictureSearch = () => {
    setShowPictureGuide(true)
  }

  const productCategories = [
    { name: "گیربکس", href: "/products?category=gearboxes", icon: <Cog className="h-4 w-4" /> },
    { name: "الکتروموتور", href: "/products?category=electromotors", icon: <Zap className="h-4 w-4" /> },
    { name: "پمپ", href: "/products?category=pumps", icon: <Droplet className="h-4 w-4" /> },
    { name: "اینورتر", href: "/products?category=inverters", icon: <Activity className="h-4 w-4" /> },
    { name: "ژنراتور", href: "/products?category=generators", icon: <Flame className="h-4 w-4" /> },
    { name: "موتور ویبره", href: "/products?category=vibration-motors", icon: <Vibrate className="h-4 w-4" /> },
    { name: "مخزن تحت فشار", href: "/products?category=pressure-vessels", icon: <Database className="h-4 w-4" /> },
    { name: "ست کنترل", href: "/products?category=control-sets", icon: <Sliders className="h-4 w-4" /> },
  ]

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-8 sm:h-10 text-xs sm:text-sm">
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-1 text-gray-600"></div>
              <Link
                href="/wishlist"
                className="flex items-center gap-1 text-gray-600 hover:text-[#F18F20] transition-colors"
              >
                <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">علاقه‌مندی‌ها</span>
              </Link>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 text-gray-600">
              <Link href="/supplier-join" className="hover:text-[#F18F20] transition-colors hidden sm:inline">
                فروشنده شوید
              </Link>
              <Link href="/professionals-join" className="hover:text-[#F18F20] transition-colors hidden md:inline">
                عضویت اوستاکار
              </Link>
              <Link href="/support" className="hover:text-[#F18F20] transition-colors">
                پشتیبانی
              </Link>
              <Link href="/contact" className="hover:text-[#F18F20] transition-colors hidden sm:inline">
                تماس با ما
              </Link>
              <div className="flex items-center gap-1"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-2 sm:py-3">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden flex-shrink-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">منو</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="overflow-y-auto w-80 sm:w-96">
              <div className="flex justify-center mb-6">
                <Image src="/ousta-main-logo.png" alt="اوستا" width={120} height={40} />
              </div>
              <nav className="grid gap-3">
                <Link
                  href="/"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  صفحه اصلی
                </Link>
                {productCategories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    {category.icon}
                    {category.name}
                  </Link>
                ))}
                <Link
                  href="/oustakar"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  اوستاکار
                </Link>
                <Link
                  href="/articles"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  مقالات
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  تماس با ما
                </Link>
                <Link
                  href="/ai-assistant"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  دستیار هوش مصنوعی
                </Link>
                <Link
                  href="/supplier-join"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  فروشنده شوید
                </Link>
                <Link
                  href="/professionals-join"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  عضویت اوستاکار
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <div className="flex items-center gap-2 sm:gap-4 lg:gap-6 flex-1 min-w-0">
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/ousta-main-logo.png"
                alt="اوستا"
                width={120}
                height={40}
                className="h-8 sm:h-10 lg:h-12 w-auto"
                priority
              />
            </Link>

            <div className="flex-1 max-w-2xl lg:max-w-3xl relative">
              <div className="relative">
                <Input
                  type="search"
                  placeholder={isVoiceSearchActive ? "در حال گوش دادن..." : "جستجو در میان هزاران کالا..."}
                  className={`w-full h-10 sm:h-12 pl-20 sm:pl-32 pr-3 sm:pr-4 text-xs sm:text-sm border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-[#F18F20] focus:ring-[#F18F20] bg-gray-50 ${
                    isVoiceSearchActive ? "border-red-400 bg-red-50" : ""
                  }`}
                />
                <div className="absolute left-1 top-1 flex items-center gap-1">
                  <Button
                    size="icon"
                    onClick={handleVoiceSearch}
                    className={`h-8 w-8 sm:h-10 sm:w-10 rounded-md sm:rounded-lg transition-all duration-200 hover:bg-gray-100 ${
                      isVoiceSearchActive ? "text-red-500 animate-pulse" : "text-[#253F8F] hover:text-[#253F8F]/80"
                    }`}
                    variant="ghost"
                    title="جستجوی صوتی"
                  >
                    <Mic className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                  <Button
                    size="icon"
                    onClick={handlePictureSearch}
                    className="h-8 w-8 sm:h-10 sm:w-10 text-[#253F8F] hover:text-[#253F8F]/80 hover:bg-gray-100 rounded-md sm:rounded-lg transition-all duration-200 hidden sm:flex"
                    variant="ghost"
                    title="جستجوی تصویری"
                  >
                    <Camera className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                  <Button
                    size="icon"
                    className="h-8 w-8 sm:h-10 sm:w-10 bg-[#F18F20] hover:bg-[#F18F20]/90 text-white rounded-md sm:rounded-lg"
                  >
                    <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>
              </div>
              {showVoiceGuide && (
                <div className="absolute top-12 sm:top-14 left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-3 sm:p-4 z-50">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-xs sm:text-sm">راهنمای جستجوی صوتی</h4>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      onClick={() => setShowVoiceGuide(false)}
                    >
                      <X className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• روی آیکون میکروفون کلیک کنید</li>
                    <li>• نام محصول مورد نظر را بگویید</li>
                    <li>• منتظر بمانید تا جستجو انجام شود</li>
                    <li>• مرورگر شما باید از جستجوی صوتی پشتیبانی کند</li>
                  </ul>
                </div>
              )}
              {showPictureGuide && (
                <div className="absolute top-12 sm:top-14 left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-3 sm:p-4 z-50">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-xs sm:text-sm">راهنمای جستجوی تصویری</h4>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      onClick={() => setShowPictureGuide(false)}
                    >
                      <X className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• روی آیکون دوربین کلیک کنید</li>
                    <li>• تصویر محصول مورد نظر را آپلود کنید</li>
                    <li>• یا از دوربین برای گرفتن عکس استفاده کنید</li>
                    <li>• محصولات مشابه نمایش داده خواهند شد</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative h-9 w-9 sm:h-10 sm:w-10">
                <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                <Badge className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center p-0 bg-[#F18F20] text-white text-xs">
                  2
                </Badge>
                <span className="sr-only">سبد خرید</span>
              </Button>
            </Link>
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-9 w-9 sm:h-10 sm:w-10">
                    <User className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="sr-only">پروفایل</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/profile">پروفایل</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/orders">سفارش‌ها</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>خروج</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-[#253F8F] to-[#F18F20] hover:from-[#253F8F]/90 hover:to-[#F18F20]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-1 sm:gap-2 px-2 sm:px-4 h-8 sm:h-10 text-xs sm:text-sm"
                  title="ورود / ثبت نام"
                >
                  <LogIn className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">ورود | ثبت نام</span>
                  <span className="sm:hidden">ورود</span>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="bg-[#253F8F] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 sm:h-12">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10 flex items-center gap-1 sm:gap-2 px-2 sm:px-4 h-8 sm:h-10 text-xs sm:text-sm"
                >
                  <Menu className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">دسته‌بندی کالاها</span>
                  <span className="sm:hidden">دسته‌ها</span>
                  <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 sm:w-64 p-2">
                {productCategories.map((category) => (
                  <DropdownMenuItem key={category.name} asChild>
                    <Link href={category.href} className="flex items-center gap-2 px-3 py-2">
                      {category.icon}
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center gap-2 sm:gap-4 lg:gap-6 text-xs sm:text-sm overflow-x-auto">
              <Link href="/ai-assistant" className="hover:text-[#F18F20] transition-colors whitespace-nowrap">
                <span className="hidden lg:inline">دستیار هوش مصنوعی اوستا</span>
                <span className="lg:hidden">دستیار AI</span>
              </Link>
              <Link
                href="/catalogs"
                className="hover:text-[#F18F20] transition-colors whitespace-nowrap hidden sm:inline"
              >
                کاتالوگ ها
              </Link>
              <Link
                href="/datasheets"
                className="hover:text-[#F18F20] transition-colors whitespace-nowrap hidden sm:inline"
              >
                دیتاشیت ها
              </Link>
              <Link href="/oustakar" className="hover:text-[#F18F20] transition-colors whitespace-nowrap">
                اوستاکار
              </Link>
              <Link
                href="/articles"
                className="hover:text-[#F18F20] transition-colors whitespace-nowrap hidden md:inline"
              >
                مقالات
              </Link>
              <Link href="/rfq" className="hover:text-[#F18F20] transition-colors whitespace-nowrap hidden lg:inline">
                پیش‌فاکتور هوشمند (RFQ)
              </Link>
              <Link href="/rfq" className="hover:text-[#F18F20] transition-colors whitespace-nowrap lg:hidden">
                RFQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
