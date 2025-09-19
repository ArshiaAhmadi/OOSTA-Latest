"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Users,
  TrendingUp,
  Shield,
  Star,
  Phone,
  Mail,
  MapPin,
  Package,
  Globe,
  HeadphonesIcon,
  CheckCircle,
  Award,
  Truck,
  CreditCard,
  BarChart3,
  MessageSquare,
  Clock,
  DollarSign,
  Sparkles,
  Rocket,
  Crown,
  Gift,
  FileText,
  Brain,
  Megaphone,
  UserCheck,
  Briefcase,
  Factory,
  Settings,
  Database,
  Wifi,
  Smartphone,
  Monitor,
  PlayCircle,
  ChevronRight,
  Zap,
  Calculator,
  Target,
  Eye,
  Lightbulb,
  ThumbsUp,
  PieChart,
  LineChart,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const benefits = [
  {
    icon: TrendingUp,
    title: "افزایش فروش تا ۵۰۰٪",
    description: "دسترسی به بیش از ۱۰۰,۰۰۰ مشتری صنعتی فعال و افزایش درآمد قابل توجه",
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    highlight: "محبوب‌ترین",
    stats: "میانگین رشد ۳۲۰٪",
    icon2: LineChart,
  },
  {
    icon: Globe,
    title: "حضور دیجیتال قدرتمند",
    description: "نمایش در بزرگترین مارکت‌پلیس صنعتی ایران با ۲ میلیون بازدید ماهانه",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    highlight: "پربازدید",
    stats: "۲M+ بازدید ماهانه",
    icon2: Eye,
  },
  {
    icon: Brain,
    title: "هوش مصنوعی اختصاصی",
    description: "سیستم پیشنهاد هوشمند محصولات و تطبیق خودکار با نیاز مشتریان",
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    highlight: "جدید",
    stats: "۸۵٪ دقت تطبیق",
    icon2: Lightbulb,
  },
  {
    icon: Shield,
    title: "گارانتی اصالت و کیفیت",
    description: "مهر تایید اوستا، بیمه محصولات و ضمانت کیفیت برای اعتماد مشتریان",
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    highlight: "منحصر به فرد",
    stats: "۱۰۰٪ ضمانت",
    icon2: Award,
  },
  {
    icon: CreditCard,
    title: "پرداخت آنلاین امن",
    description: "درگاه پرداخت مستقیم، تسویه سریع و امکان فروش اقساطی",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    highlight: "امن",
    stats: "تسویه ۲۴ ساعته",
    icon2: DollarSign,
  },
  {
    icon: BarChart3,
    title: "آنالیز و گزارش‌گیری",
    description: "داشبورد تحلیلی پیشرفته، آمار فروش و بینش‌های بازاری",
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-900/20",
    highlight: "حرفه‌ای",
    stats: "۵۰+ گزارش",
    icon2: PieChart,
  },
  {
    icon: Truck,
    title: "لجستیک هوشمند",
    description: "شبکه حمل‌ونقل سراسری، ردیابی مرسوله و تحویل سریع",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    highlight: "سریع",
    stats: "۹۸٪ تحویل به موقع",
    icon2: MapPin,
  },
  {
    icon: HeadphonesIcon,
    title: "پشتیبانی VIP",
    description: "مشاور اختصاصی، پشتیب��نی ۲۴/۷ و آموزش‌های تخصصی رایگان",
    color: "text-pink-600",
    bgColor: "bg-pink-50 dark:bg-pink-900/20",
    highlight: "اختصاصی",
    stats: "پاسخ در ۵ دقیقه",
    icon2: ThumbsUp,
  },
  {
    icon: Megaphone,
    title: "بازاریابی رایگان",
    description: "تبلیغات هدفمند، کمپین‌های ویژه و معرفی در شبکه‌های اجتماعی",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    highlight: "رایگان",
    stats: "۱M+ نمایش ماهانه",
    icon2: Target,
  },
]

const steps = [
  {
    number: "۱",
    title: "ثبت نام سریع",
    description: "تکمیل فرم در کمتر از ۵ دقیقه و ارسال مدارک شرکت",
    icon: FileText,
    time: "۵ دقیقه",
    color: "bg-blue-500",
    details: ["تکمیل اطلاعات پایه", "آپلود مدارک شناسایی", "انتخاب نوع فعالیت"],
  },
  {
    number: "۲",
    title: "بررسی و تایید",
    description: "تیم متخصص ما مدارک را بررسی و ظرف ۱۲ ساعت تایید می‌کند",
    icon: UserCheck,
    time: "۱۲ ساعت",
    color: "bg-green-500",
    details: ["بررسی اعتبار شرکت", "تایید مدارک", "ارسال ایمیل تایید"],
  },
  {
    number: "۳",
    title: "راه‌اندازی پنل",
    description: "دریافت پنل اختصاصی، آموزش کامل و تنظیمات اولیه",
    icon: Settings,
    time: "۲۴ ساعت",
    color: "bg-purple-500",
    details: ["ایجاد پنل کاربری", "آموزش استفاده", "تنظیمات اولیه"],
  },
  {
    number: "۴",
    title: "شروع فروش",
    description: "آپلود محصولات، تنظیم قیمت و شروع دریافت سفارش",
    icon: Rocket,
    time: "فوری",
    color: "bg-orange-500",
    details: ["آپلود محصولات", "تنظیم قیمت‌ها", "شروع فروش"],
  },
]

const stats = [
  {
    number: "+۲,۵۰۰",
    label: "تامین‌کننده فعال",
    icon: Building2,
    growth: "+۲۳٪",
    color: "text-blue-600",
    description: "شرکت‌های معتبر",
  },
  {
    number: "+۲۵,۰۰۰",
    label: "محصول ثبت شده",
    icon: Package,
    growth: "+۴۵٪",
    color: "text-green-600",
    description: "انواع تجهیزات صنعتی",
  },
  {
    number: "+۱۰۰,۰۰۰",
    label: "مشتری فعال",
    icon: Users,
    growth: "+۳۸٪",
    color: "text-purple-600",
    description: "خریداران صنعتی",
  },
  {
    number: "۹۹.۲٪",
    label: "رضایت تامین‌کنندگان",
    icon: Star,
    growth: "+۱.۲٪",
    color: "text-yellow-600",
    description: "نظرسنجی ماهانه",
  },
]

const successStories = [
  {
    name: "شرکت صنایع مکانیک پارس",
    category: "تولیدکننده پمپ صنعتی",
    growth: "۴۲۰٪",
    revenue: "۱۲ میلیارد تومان",
    monthlyOrders: "۲۵۰+",
    quote:
      "در ۶ ماه اول عضویت، فروش ما ۴ برابر شد و به مشتریان جدیدی در سراسر کشور دسترسی پیدا کردیم. اوستا واقعاً زندگی کاری ما را تغییر داد.",
    image: "/placeholder.svg?height=80&width=80&text=پارس",
    badge: "برترین تامین‌کننده ۲۰۲۴",
    employees: "۱۲۰ نفر",
    experience: "۱۵ سال",
    location: "تهران",
    beforeRevenue: "۲.۸ میلیارد",
  },
  {
    name: "گروه صنعتی آریا موتور",
    category: "واردکننده موتور الکتریکی",
    growth: "۳۸۵٪",
    revenue: "۸.۵ میلیارد تومان",
    monthlyOrders: "۱۸۰+",
    quote:
      "سیستم هوش مصنوعی اوستا کمک کرد محصولات مناسب را به مشتریان درست پیشنهاد دهیم. حالا ۸۰٪ فروش‌هایمان از طریق اوستا است.",
    image: "/placeholder.svg?height=80&width=80&text=آریا",
    badge: "نوآورترین تامین‌کننده",
    employees: "۸۵ نفر",
    experience: "۱۰ سال",
    location: "اصفهان",
    beforeRevenue: "۲.۲ میلیارد",
  },
  {
    name: "شرکت تجهیزات صنعتی البرز",
    category: "توزیع‌کننده ابزار دقیق",
    growth: "۲۹۰٪",
    revenue: "۶.۲ میلیارد تومان",
    monthlyOrders: "۳۲۰+",
    quote:
      "پشتیبانی عالی اوستا و امکانات پنل کاربری باعث شد کسب‌وکارمان سریع رشد کند. الان بیش از ۵۰۰ مشتری ثابت داریم.",
    image: "/placeholder.svg?height=80&width=80&text=البرز",
    badge: "سریع‌ترین رشد",
    employees: "۶۰ نفر",
    experience: "۸ سال",
    location: "کرج",
    beforeRevenue: "۱.۶ میلیارد",
  },
]

const features = [
  {
    title: "پنل مدیریت پیشرفته",
    description: "داشبورد کامل با امکان مدیریت محصولات، سفارشات و مالی",
    icon: Monitor,
    items: ["مدیریت موجودی هوشمند", "ردیابی سفارشات لحظه‌ای", "گزارش‌گیری تحلیلی", "تنظیمات قیمت پویا"],
    color: "bg-blue-50 dark:bg-blue-900/20",
    stats: "۹۵٪ کاهش زمان مدیریت",
  },
  {
    title: "اپلیکیشن موبایل",
    description: "مدیریت کسب‌وکار در هر زمان و مکان با اپ اختصاصی",
    icon: Smartphone,
    items: ["دریافت اعلان‌های فوری", "پاسخ سریع به مشتریان", "آپلود محصول آسان", "چت مستقیم با خریداران"],
    color: "bg-green-50 dark:bg-green-900/20",
    stats: "۷۰٪ افزایش پاسخگویی",
  },
  {
    title: "سیستم CRM یکپارچه",
    description: "مدیریت روابط مشتری و پیگیری فرآیند فروش",
    icon: Database,
    items: ["پایگاه داده مشتریان", "تاریخچه کامل خریدها", "یادآوری‌های هوشمند", "تحلیل رفتار خرید"],
    color: "bg-purple-50 dark:bg-purple-900/20",
    stats: "۴۰٪ افزایش فروش مجدد",
  },
  {
    title: "API و اتصالات",
    description: "اتصال به سیستم‌های موجود و خودکارسازی فرآیندها",
    icon: Wifi,
    items: ["API کامل محصولات", "وب‌سرویس قیمت‌گذاری", "اتصال به سیستم انبار", "همگام‌سازی خودکار"],
    color: "bg-orange-50 dark:bg-orange-900/20",
    stats: "۸۰٪ کاهش کار دستی",
  },
]

const packages = [
  {
    name: "استارتر",
    price: "رایگان",
    originalPrice: null,
    description: "برای شروع کسب‌وکار",
    features: ["تا ۵۰ محصول", "پشتیبانی ایمیلی", "گزارش‌های پایه", "کمیسیون ۵٪", "فروشگاه آنلاین ساده"],
    notIncluded: ["تبلیغات ویژه", "مشاور اختصاصی", "API دسترسی", "گزارش‌های پیشرفته"],
    badge: null,
    buttonText: "شروع رایگان",
    popular: false,
    color: "border-gray-200",
    monthlyRevenue: "تا ۱۰ میلیون",
  },
  {
    name: "حرفه‌ای",
    price: "۲,۹۰۰,۰۰۰",
    originalPrice: "۳,۵۰۰,۰۰۰",
    description: "برای کسب‌وکارهای در حال رشد",
    features: [
      "محصولات نامحدود",
      "پشتیبانی تلفنی ۲۴/۷",
      "گزارش‌های پیشرفته",
      "کمیسیون ۳٪",
      "تبلیغات ویژه",
      "مشاور اختصاصی",
      "اپلیکیشن موبایل",
    ],
    notIncluded: ["API کامل", "آموزش حضوری"],
    badge: "محبوب‌ترین",
    buttonText: "انتخاب پلن",
    popular: true,
    color: "border-primary",
    monthlyRevenue: "۱۰-۱۰۰ میلیون",
  },
  {
    name: "سازمانی",
    price: "۴,۹۰۰,۰۰۰",
    originalPrice: "۶,۰۰۰,۰۰۰",
    description: "برای شرکت‌های بزرگ",
    features: [
      "تمام امکانات حرفه‌ای",
      "API کامل و مستندات",
      "پشتیبانی اولویت‌دار",
      "کمیسیون ۲٪",
      "مدیر حساب اختصاصی",
      "آموزش حضوری تیم",
      "گزارش‌های سفارشی",
      "یکپارچگی سیستم‌ها",
    ],
    notIncluded: [],
    badge: "پیشنهاد ویژه",
    buttonText: "تماس با فروش",
    popular: false,
    color: "border-purple-200",
    monthlyRevenue: "۱۰۰+ میلیون",
  },
]

const marketInsights = [
  {
    title: "رشد ۴۵٪ بازار صنعتی",
    description: "بازار ��جهیزات صنعتی ایران در سال گذشته ۴۵٪ رشد داشته و پیش‌بینی می‌شود تا ۲۰۲۵ این رشد ادامه یابد",
    icon: TrendingUp,
    value: "۴۵٪",
    color: "text-green-600",
    bgColor: "bg-green-50",
    trend: "صعودی",
  },
  {
    title: "۷۰٪ خرید آنلاین",
    description: "۷۰٪ از خریداران صنعتی ترجیح می‌دهند آنلاین خرید کنند و این روند رو به افزایش است",
    icon: Globe,
    value: "۷۰٪",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    trend: "افزایشی",
  },
  {
    title: "صرفه‌جویی ۳۰٪",
    description: "شرکت‌ها با خرید آنلاین ۳۰٪ در هزینه‌ها صرفه‌جویی می‌کنند و زمان خرید را ۵ برابر کاهش می‌دهند",
    icon: Calculator,
    value: "۳۰٪",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    trend: "بهینه‌سازی",
  },
  {
    title: "سرعت ۵ برابری",
    description: "فرآیند خرید آنلاین ۵ برابر سریع‌تر از روش‌های سنتی است و رضایت مشتریان را افزایش می‌دهد",
    icon: Zap,
    value: "۵x",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    trend: "تسریع",
  },
]

const testimonials = [
  {
    name: "احمد رضایی",
    position: "مدیرعامل شرکت فولاد سازان",
    quote: "اوستا کاملاً نحوه کار ما را تغییر داد. حالا می‌توانیم به راحتی با صدها تامین‌کننده ارتباط برقرار کنیم.",
    rating: 5,
    company: "فولاد سازان",
    image: "/placeholder.svg?height=60&width=60&text=احمد",
  },
  {
    name: "فاطمه محمدی",
    position: "مدیر خرید شرکت پتروشیمی",
    quote: "کیفیت محصولات و سرعت تحویل در اوستا فوق‌العاده است. پیشنهاد می‌کنم به همه.",
    rating: 5,
    company: "پتروشیمی پارس",
    image: "/placeholder.svg?height=60&width=60&text=فاطمه",
  },
  {
    name: "علی حسینی",
    position: "مدیر فنی کارخانه تولیدی",
    quote: "با اوستا همیشه محصولات مورد نیازمان را با بهترین قیمت پیدا می‌کنیم. عالی است!",
    rating: 5,
    company: "صنایع غذایی آریا",
    image: "/placeholder.svg?height=60&width=60&text=علی",
  },
]

export default function JoinOostaPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    city: "",
    companyType: "",
    products: "",
    description: "",
    website: "",
    employeeCount: "",
    annualRevenue: "",
    acceptTerms: false,
    newsletter: true,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-32 translate-y-32 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-white rounded-full animate-bounce"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-8 animate-bounce">
                  <Crown className="h-20 w-20 text-white" />
                </div>
              </div>

              <Badge className="bg-white/20 text-white border-white/30 mb-6 px-6 py-3 text-lg font-bold">
                <Sparkles className="h-5 w-5 ml-2" />
                پلتفرم شماره ۱ صنعت ایران
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text leading-tight">
                به امپراتوری اوستا بپیوندید
              </h1>

              <p className="text-2xl md:text-3xl mb-6 text-white/90 max-w-4xl mx-auto leading-relaxed">
                جایی که تامین‌کنندگان به <span className="font-bold text-yellow-300 animate-pulse">پادشاهان بازار</span>{" "}
                تبدیل می‌شوند
              </p>

              <p className="text-xl mb-12 text-white/80 max-w-3xl mx-auto">
                بیش از ۲,۵۰۰ تامین‌کننده موفق، درآمد میلیاردی و رشد بی‌نظیر را تجربه کرده‌اند
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 font-bold px-12 py-6 text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 rounded-full"
                  onClick={() => document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Rocket className="h-6 w-6 ml-2" />
                  شروع رایگان - همین الان!
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-3 border-white text-white hover:bg-white hover:text-primary font-bold px-12 py-6 text-xl backdrop-blur-sm rounded-full"
                >
                  <PlayCircle className="h-6 w-6 ml-2" />
                  تماشای ویدیو معرفی
                </Button>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="flex justify-center mb-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className={`h-8 w-8 text-white`} />
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-white/80 text-sm mb-2">{stat.label}</div>
                    <div className="text-xs text-white/60 mb-2">{stat.description}</div>
                    <Badge className="bg-green-500/20 text-green-200 border-green-300/30">
                      <TrendingUp className="h-3 w-3 ml-1" />
                      {stat.growth}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-24 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mb-4 px-4 py-2">
              <BarChart3 className="h-4 w-4 ml-2" />
              بینش‌های بازار
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              چرا الان بهترین زمان است؟
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              آمار و ارقام بازار نشان می‌دهد که دیجیتال شدن ضروری است
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketInsights.map((insight, index) => (
              <Card
                key={index}
                className="border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-4 rounded-full ${insight.bgColor} dark:bg-gray-800 mb-4`}>
                    <insight.icon className={`h-8 w-8 ${insight.color}`} />
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${insight.color}`}>{insight.value}</div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{insight.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{insight.description}</p>
                  <Badge className={`mt-3 ${insight.bgColor} ${insight.color} border-0`}>{insight.trend}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mb-4 px-4 py-2">
              <Award className="h-4 w-4 ml-2" />
              داستان‌های موفقیت
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              آن‌ها موفق شدند، نوبت شماست!
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              تامین‌کنندگانی که با اوستا زندگی‌شان تغییر کرد
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className="border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={story.name}
                        width={80}
                        height={80}
                        className="rounded-full border-4 border-primary/20"
                      />
                      <div className="absolute -top-2 -right-2">
                        <Badge className="bg-primary text-white px-2 py-1 text-xs">
                          <Crown className="h-3 w-3 ml-1" />
                          VIP
                        </Badge>
                      </div>
                    </div>
                    <div className="mr-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{story.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{story.category}</p>
                      <div className="flex gap-2 mt-1">
                        <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs">
                          {story.employees}
                        </Badge>
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs">
                          {story.location}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 mb-4 w-full justify-center">
                    {story.badge}
                  </Badge>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">+{story.growth}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">رشد فروش</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{story.monthlyOrders}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">سفارش ماهانه</div>
                    </div>
                  </div>

                  <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">قبل از اوستا:</span>
                      <span className="font-bold text-gray-500">{story.beforeRevenue}</span>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
                      <span className="text-gray-600 dark:text-gray-400">بعد از اوستا:</span>
                      <span className="font-bold text-green-600">{story.revenue}</span>
                    </div>
                  </div>

                  <blockquote className="text-gray-700 dark:text-gray-300 italic border-r-4 border-primary pr-4 leading-relaxed">
                    "{story.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 mb-4 px-4 py-2">
              <MessageSquare className="h-4 w-4 ml-2" />
              نظرات مشتریان
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              مشتریان ما چه می‌گویند؟
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-2 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full border-2 border-primary/20"
                    />
                    <div className="mr-4">
                      <h4 className="font-bold text-gray-900 dark:text-gray-100">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                      <p className="text-xs text-primary">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary mb-4 px-4 py-2">
              <Gift className="h-4 w-4 ml-2" />
              مزایای بی‌نظیر
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              چرا اوستا انتخاب برتر است؟
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              ۹ دلیل قانع‌کننده برای پیوستن به بزرگترین خانواده صنعتی ایران
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className={`border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${benefit.bgColor} relative overflow-hidden`}
              >
                <CardContent className="p-8 relative">
                  {benefit.highlight && (
                    <Badge className="absolute -top-3 right-4 bg-primary text-white">{benefit.highlight}</Badge>
                  )}

                  <div className="flex items-center mb-6">
                    <div className={`p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg ${benefit.color} relative`}>
                      <benefit.icon className="h-8 w-8" />
                      <div className="absolute -bottom-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-1">
                        <benefit.icon2 className={`h-4 w-4 ${benefit.color}`} />
                      </div>
                    </div>
                    <div className="mr-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{benefit.title}</h3>
                      <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 mt-1">
                        {benefit.stats}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{benefit.description}</p>

                  {/* Decorative element */}
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 ${benefit.color} opacity-5 rounded-full -translate-y-10 translate-x-10`}
                  ></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Steps */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mb-4 px-4 py-2">
              <Clock className="h-4 w-4 ml-2" />
              فرآیند سریع
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              در ۴ مرحله ساده شروع کنید
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              از ثبت نام تا شروع فروش، تنها ۲۴ ساعت فاصله دارید
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="border-2 border-gray-200 dark:border-gray-700 hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-8">
                    <div
                      className={`w-20 h-20 ${step.color} text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg`}
                    >
                      {step.number}
                    </div>
                    <div className="absolute -top-2 -right-2">
                      <div className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary to-gray-300 -translate-x-10"></div>
                    )}
                  </div>

                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mb-4">
                    <Clock className="h-3 w-3 ml-1" />
                    {step.time}
                  </Badge>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{step.description}</p>

                  <div className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <CheckCircle className="h-3 w-3 text-green-500 ml-2 flex-shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 mb-4 px-4 py-2">
              <Briefcase className="h-4 w-4 ml-2" />
              ابزارهای حرفه‌ای
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              همه چیز برای موفقیت شما
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              مجموعه کاملی از ابزارها و امکانات برای مدیریت حرفه‌ای کسب‌وکار
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-xl ${feature.color}`}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="mr-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                      <Badge className="bg-primary/10 text-primary mt-2">{feature.stats}</Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {feature.items.map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 ml-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Registration Form */}
      <section
        id="registration-form"
        className="py-24 bg-gradient-to-br from-primary/5 to-blue-50 dark:from-primary/5 dark:to-blue-900/20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4 px-4 py-2">
                <Rocket className="h-4 w-4 ml-2" />
                شروع سفر موفقیت
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                همین حالا عضو شوید!
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                تکمیل فرم تنها ۵ دقیقه وقت می‌برد و آینده کسب‌وکارتان را تغییر می‌دهد
              </p>

              <div className="flex justify-center space-x-8 space-x-reverse mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                  <span className="text-gray-700 dark:text-gray-300">بدون هزینه اولیه</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                  <span className="text-gray-700 dark:text-gray-300">تایید در ۱۲ ساعت</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                  <span className="text-gray-700 dark:text-gray-300">پشتیبانی کامل</span>
                </div>
              </div>
            </div>

            <Card className="border-2 border-primary/20 shadow-2xl">
              <CardContent className="p-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="companyName" className="text-base font-medium flex items-center">
                        <Factory className="h-4 w-4 ml-2" />
                        نام شرکت *
                      </Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange("companyName", e.target.value)}
                        className="mt-2 h-12"
                        placeholder="نام شرکت یا سازمان خود را وارد کنید"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactName" className="text-base font-medium flex items-center">
                        <Users className="h-4 w-4 ml-2" />
                        نام و نام خانوادگی مسئول *
                      </Label>
                      <Input
                        id="contactName"
                        value={formData.contactName}
                        onChange={(e) => handleInputChange("contactName", e.target.value)}
                        className="mt-2 h-12"
                        placeholder="نام مسئول ارتباط با اوستا"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-base font-medium flex items-center">
                        <Mail className="h-4 w-4 ml-2" />
                        ایمیل *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-2 h-12"
                        placeholder="example@company.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-base font-medium flex items-center">
                        <Phone className="h-4 w-4 ml-2" />
                        شماره تماس *
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-2 h-12"
                        placeholder="09123456789"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <Label htmlFor="city" className="text-base font-medium flex items-center">
                        <MapPin className="h-4 w-4 ml-2" />
                        شهر *
                      </Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        className="mt-2 h-12"
                        placeholder="شهر محل فعالیت"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="employeeCount" className="text-base font-medium flex items-center">
                        <Users className="h-4 w-4 ml-2" />
                        تعداد کارکنان
                      </Label>
                      <Input
                        id="employeeCount"
                        value={formData.employeeCount}
                        onChange={(e) => handleInputChange("employeeCount", e.target.value)}
                        className="mt-2 h-12"
                        placeholder="۱-۱۰، ۱۱-۵۰، ۵۰+"
                      />
                    </div>
                    <div>
                      <Label htmlFor="website" className="text-base font-medium flex items-center">
                        <Globe className="h-4 w-4 ml-2" />
                        وب‌سایت
                      </Label>
                      <Input
                        id="website"
                        value={formData.website}
                        onChange={(e) => handleInputChange("website", e.target.value)}
                        className="mt-2 h-12"
                        placeholder="https://www.company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="companyType" className="text-base font-medium flex items-center">
                        <Building2 className="h-4 w-4 ml-2" />
                        نوع فعالیت *
                      </Label>
                      <Input
                        id="companyType"
                        value={formData.companyType}
                        onChange={(e) => handleInputChange("companyType", e.target.value)}
                        className="mt-2 h-12"
                        placeholder="تولیدکننده، واردکننده، توزیع‌کننده و ..."
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="annualRevenue" className="text-base font-medium flex items-center">
                        <DollarSign className="h-4 w-4 ml-2" />
                        درآمد سالانه (تقریبی)
                      </Label>
                      <Input
                        id="annualRevenue"
                        value={formData.annualRevenue}
                        onChange={(e) => handleInputChange("annualRevenue", e.target.value)}
                        className="mt-2 h-12"
                        placeholder="زیر ۱ میلیارد، ۱-۵ میلیارد، ۵+ میلیارد"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="products" className="text-base font-medium flex items-center">
                      <Package className="h-4 w-4 ml-2" />
                      محصولات و خدمات *
                    </Label>
                    <Textarea
                      id="products"
                      value={formData.products}
                      onChange={(e) => handleInputChange("products", e.target.value)}
                      className="mt-2"
                      placeholder="لیست محصولات و خدماتی که ارائه می‌دهید (مثال: پمپ صنعتی، موتور الکتریکی، ...)"
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-base font-medium flex items-center">
                      <FileText className="h-4 w-4 ml-2" />
                      توضیحات تکمیلی
                    </Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      className="mt-2"
                      placeholder="توضیحات بیشتر در مورد شرکت، تجربه کاری، مزیت‌های رقابتی و اهداف همکاری"
                      rows={4}
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Checkbox
                        id="acceptTerms"
                        checked={formData.acceptTerms}
                        onCheckedChange={(checked) => handleInputChange("acceptTerms", checked as boolean)}
                      />
                      <Label htmlFor="acceptTerms" className="text-sm">
                        با{" "}
                        <Link href="/terms" className="text-primary hover:underline font-medium">
                          قوانین و مقررات
                        </Link>{" "}
                        و{" "}
                        <Link href="/privacy" className="text-primary hover:underline font-medium">
                          حریم خصوصی
                        </Link>{" "}
                        اوستا موافقم *
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        مایل به دریافت اخبار، آموزش‌ها و پیشنهادات ویژه اوستا هستم
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-bold py-6 text-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    disabled={!formData.acceptTerms}
                  >
                    <Rocket className="h-6 w-6 ml-2" />
                    شروع سفر موفقیت - ارسال درخواست
                  </Button>

                  <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                    پس از ارسال، تیم ما ظرف ۱۲ ساعت با شما تماس خواهد گرفت
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mb-4 px-4 py-2">
                <HeadphonesIcon className="h-4 w-4 ml-2" />
                پشتیبانی VIP
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                سوال دارید؟ ما اینجا هستیم!
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                تیم متخصص ما ۲۴/۷ آماده پاسخگویی و راهنمایی شما هستند
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="bg-green-100 dark:bg-green-900/20 rounded-full p-6 w-fit mx-auto mb-6">
                    <Phone className="h-12 w-12 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">تماس فوری</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">۷ روز هفته، ۲۴ ساعته</p>
                  <div className="space-y-2">
                    <p className="text-xl font-bold text-primary">۰۲۱-۱۲۳۴۵۶۷۸</p>
                    <p className="text-lg text-gray-600 dark:text-gray-400">۰۹۱۲-۳۴۵۶۷۸۹</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mt-4">
                    پاسخگویی فوری
                  </Badge>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="bg-blue-100 dark:bg-blue-900/20 rounded-full p-6 w-fit mx-auto mb-6">
                    <Mail className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">ایمیل</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">پاسخ در کمتر از ۱ ساعت</p>
                  <div className="space-y-2">
                    <p className="text-lg font-bold text-primary">suppliers@oosta.com</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">support@oosta.com</p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mt-4">
                    پاسخ سریع
                  </Badge>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="bg-purple-100 dark:bg-purple-900/20 rounded-full p-6 w-fit mx-auto mb-6">
                    <MessageSquare className="h-12 w-12 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">چت آنلاین</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">مشاوره لحظه‌ای</p>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3">شروع چت</Button>
                  <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 mt-4 block">
                    آنلاین
                  </Badge>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-primary/5 to-blue-50 dark:from-primary/5 dark:to-blue-900/20 border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">دفتر مرکزی اوستا</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  تهران، خیابان ولیعصر، نرسیده به پارک وی، پلاک ۱۲۳۴، طبقه ۵
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">ملاقات حضوری با هماهنگی قبلی</p>
                <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3">
                  <ChevronRight className="h-4 w-4 ml-2" />
                  مسیریابی
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
