"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Shield,
  Bot,
  ClipboardList,
  Clock,
  PenToolIcon as Tool,
  BookOpen,
  Mic,
  Star,
  CheckCircle,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  MessageCircle,
  ShoppingCart,
  Target,
  Lightbulb,
  Rocket,
  TrendingUp,
  Cpu,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Wifi,
  Quote,
  ChevronDown,
  ChevronUp,
  Play,
  BarChart3,
  Sparkles,
  Crown,
  Gift,
  Heart,
  ThumbsUp,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface ServiceFeature {
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  benefits: string[]
  link?: string
  badge?: string
  color?: string
  popularity?: number
  stats?: {
    users: string
    satisfaction: string
    growth: string
  }
}

const services: ServiceFeature[] = [
  {
    title: "گارانتی اصالت کالا",
    description: "تضمین ۱۰۰٪ اصالت تمامی محصولات با گارانتی رسمی و خدمات پس از فروش کامل",
    icon: <Shield className="h-8 w-8" />,
    features: [
      "بررسی اصالت توسط کارشناسان مجرب",
      "گارانتی رسمی از تولیدکنندگان معتبر",
      "ضمانت بازگشت وجه در صورت عدم اصالت",
      "خدمات پس از فروش تا ۵ سال",
    ],
    benefits: ["خرید با اطمینان کامل", "صرفه‌جویی در هزینه‌های تعمیر", "افزایش عمر مفید تجهیزات", "پشتیبانی مادام‌العمر"],
    link: "/guarantee",
    badge: "محبوب‌ترین",
    color: "from-[#253F8F] to-[#1e3a8a]",
    popularity: 95,
    stats: {
      users: "۸۵,۰۰۰+",
      satisfaction: "۹۸.۵٪",
      growth: "+۲۳٪",
    },
  },
  {
    title: "دستیار هوش مصنوعی",
    description: "سیستم هوشمند تشخیص نیاز و پیشنهاد بهترین محصولات صنعتی با فناوری AI پیشرفته",
    icon: <Bot className="h-8 w-8" />,
    features: [
      "تحلیل هوشمند نیازهای صنعتی",
      "پیشنهاد محصولات بر اساس کاربری",
      "پاسخگویی فوری به سوالات فنی",
      "یادگیری از تجربیات قبلی",
    ],
    benefits: ["صرفه‌جویی ۷۰٪ در زمان جستجو", "انتخاب دقیق‌تر محصولات", "کاهش خطای انسانی", "دسترسی ۲۴/۷"],
    link: "/ai-assistant",
    badge: "جدید",
    color: "from-[#F18F20] to-[#ea580c]",
    popularity: 88,
    stats: {
      users: "۴۲,۰۰۰+",
      satisfaction: "۹۶.۸٪",
      growth: "+۱۵۶٪",
    },
  },
  {
    title: "سیستم RFQ پیشرفته",
    description: "درخواست پیش‌فاکتور هوشمند برای خریدهای سازمانی و پروژه‌های صنعتی بزرگ",
    icon: <ClipboardList className="h-8 w-8" />,
    features: ["فرم درخواست هوشمند", "مقایسه قیمت از چندین تامین‌کننده", "پیگیری وضعیت درخواست", "مذاکره آنلاین قیمت"],
    benefits: [
      "کاهش ۴۰٪ هزینه خرید",
      "شفافیت کامل در قیمت‌گذاری",
      "سرعت بالا در دریافت پیشنهاد",
      "مدیریت متمرکز خریدها",
    ],
    link: "/rfq",
    badge: "پرکاربرد",
    color: "from-teal-500 to-teal-600",
    popularity: 92,
    stats: {
      users: "۱۸,۵۰۰+",
      satisfaction: "۹۴.۲٪",
      growth: "+۶۷٪",
    },
  },
  {
    title: "خدمات اوستاکار",
    description: "دسترسی آسان به متخصصان و تکنسین‌های ماهر برای نصب، تعمیر و نگهداری تجهیزات",
    icon: <Tool className="h-8 w-8" />,
    features: ["شبکه گسترده متخصصان", "رزرو آنلاین خدمات", "نظارت بر کیفیت کار", "گارانتی خدمات ارائه شده"],
    benefits: ["دسترسی سریع به متخصص", "کیفیت تضمین شده", "قیمت‌گذاری شفاف", "پشتیبانی مستمر"],
    link: "/oustakar",
    badge: "محبوب",
    color: "from-[#253F8F] to-[#3b4f9a]",
    popularity: 89,
    stats: {
      users: "۳۲,۰۰۰+",
      satisfaction: "۹۷.۱٪",
      growth: "+۴۵٪",
    },
  },
  {
    title: "جستجوی صوتی و تصویری",
    description: "فناوری پیشرفته جستجو با استفاده از صدا و تصویر برای یافتن سریع محصولات",
    icon: <Mic className="h-8 w-8" />,
    features: ["تشخیص صوتی دقیق", "جستجوی تصویری هوشمند", "پردازش زبان طبیعی", "یادگیری الگوهای جستجو"],
    benefits: ["سرعت ۱۰ برابری در جستجو", "دقت بالا در یافتن محصول", "راحتی استفاده", "عدم نیاز به تایپ"],
    link: "/search",
    badge: "نوآورانه",
    color: "from-[#F18F20] to-[#f59e0b]",
    popularity: 76,
    stats: {
      users: "۱۵,۲۰۰+",
      satisfaction: "۹۳.۴٪",
      growth: "+۲۱۸٪",
    },
  },
  {
    title: "آکادمی اوستا",
    description: "دوره‌های آموزشی تخصصی و کارگاه‌های عملی برای ارتقای مهارت‌های فنی",
    icon: <BookOpen className="h-8 w-8" />,
    features: ["دوره‌های آنلاین و حضوری", "مدرسین مجرب صنعتی", "گواهینامه‌های معتبر", "کارگاه‌های عملی"],
    benefits: ["ارتقای مهارت‌های فنی", "افزایش فرصت‌های شغلی", "دسترسی به آخرین فناوری‌ها", "شبکه‌سازی حرفه‌ای"],
    link: "/academy",
    badge: "آموزشی",
    color: "from-emerald-500 to-emerald-600",
    popularity: 84,
    stats: {
      users: "۹,۸۰۰+",
      satisfaction: "۹۵.۷٪",
      growth: "+۸۹٪",
    },
  },
]

const testimonials = [
  {
    name: "احمد رضایی",
    company: "شرکت صنایع پتروشیمی پارس",
    role: "مدیر خرید",
    content: "با استفاده از خدمات اوستا، زمان خرید تجهیزات ما ۷۰٪ کاهش یافت و کیفیت محصولات خریداری شده بسیار بهتر شد.",
    rating: 5,
    avatar: "/professional-engineer-portrait.png",
    savings: "۲.۵ میلیارد تومان",
  },
  {
    name: "فاطمه احمدی",
    company: "گروه صنعتی کاوه",
    role: "مدیر فنی",
    content: "دستیار هوش مصنوعی اوستا واقعاً شگفت‌انگیز است. دقیقاً همان چیزی که نیاز داشتیم را پیشنهاد می‌دهد.",
    rating: 5,
    avatar: "/mechanical-engineer-portrait.png",
    savings: "۱.۸ میلیارد تومان",
  },
  {
    name: "محمد کریمی",
    company: "شرکت تولیدی آریا",
    role: "مدیر عامل",
    content: "خدمات اوستاکار فوق‌العاده است. متخصصان واقعاً حرفه‌ای هستند و کارشان تضمین شده.",
    rating: 5,
    avatar: "/industrial-tools-expert.png",
    savings: "۳.۲ میلیارد تومان",
  },
]

const faqs = [
  {
    question: "آیا تمامی محصولات دارای گارانتی هستند؟",
    answer:
      "بله، تمامی محصولات ما دارای گارانتی رسمی از تولیدکننده و همچنین گارانتی اصالت از طرف اوستا هستند. در صورت هر گونه مشکل، ما پاسخگو هستیم.",
  },
  {
    question: "چگونه می‌توانم از دستیار هوش مصنوعی استفاده کنم؟",
    answer:
      "دستیار هوش مصنوعی اوستا به صورت رایگان در دسترس تمامی کاربران است. کافی است وارد بخش 'دستیار هوشمند' شوید و سوال خود را مطرح کنید.",
  },
  {
    question: "آیا امکان سفارش‌سازی محصولات وجود دارد؟",
    answer:
      "بله، ما امکان سفارش‌سازی محصولات مطابق با نیاز شما را فراهم می‌کنیم. کارشناسان ما با شما تماس گرفته و جزئیات را بررسی خواهند کرد.",
  },
  {
    question: "زمان ارسال محصولات چقدر است؟",
    answer:
      "زمان ارسال بسته به نوع محصول و مقصد متفاوت است. معمولاً محصولات موجود در انبار ظرف ۲۴-۴۸ ساعت ارسال می‌شوند.",
  },
]

const technologies = [
  { name: "هوش مصنوعی", icon: <Cpu className="h-6 w-6" />, description: "پردازش هوشمند داده‌ها" },
  { name: "پایگاه داده ابری", icon: <Database className="h-6 w-6" />, description: "ذخیره‌سازی امن و سریع" },
  { name: "محاسبات ابری", icon: <Cloud className="h-6 w-6" />, description: "مقیاس‌پذیری بالا" },
  { name: "اپلیکیشن موبایل", icon: <Smartphone className="h-6 w-6" />, description: "دسترسی همه‌جا" },
  { name: "پنل وب", icon: <Monitor className="h-6 w-6" />, description: "مدیریت آسان" },
  { name: "اتصال API", icon: <Wifi className="h-6 w-6" />, description: "یکپارچگی سیستم‌ها" },
]

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#253F8F]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#F18F20]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#253F8F]/10 rounded-full blur-3xl animate-ping delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#253F8F] via-[#253F8F] to-[#1e3a8a] text-white min-h-screen flex items-center">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 text-center z-10">
          <div className="max-w-5xl mx-auto">
            {/* Animated Badge */}
            <div className="inline-flex items-center mb-6 animate-bounce">
              <Badge className="bg-white/20 text-white border-white/30 px-6 py-3 text-lg backdrop-blur-sm">
                <Sparkles className="h-5 w-5 ml-2 animate-spin" />
                خدمات پیشرفته و نوآورانه اوستا
                <Crown className="h-5 w-5 mr-2 text-[#F18F20]" />
              </Badge>
            </div>

            {/* Main Title with Gradient */}
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-[#F18F20] to-white bg-clip-text text-transparent animate-pulse">
                انقلاب در صنعت
              </span>
              <br />
              <span className="text-[#F18F20] animate-bounce inline-block">با خدمات هوشمند</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-3xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              از جستجوی هوشمند تا خدمات پس از فروش، همه چیز برای موفقیت پروژه‌های صنعتی شما
              <br />
              <span className="text-[#F18F20] font-bold">در یک پلتفرم یکپارچه</span>
            </p>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { number: "۱۰۰,۰۰۰+", label: "مشتری راضی", icon: <Users className="h-6 w-6" />, growth: "+۳۸٪" },
                { number: "۲۵,۰۰۰+", label: "محصول", icon: <ShoppingCart className="h-6 w-6" />, growth: "+۴۵٪" },
                { number: "۱۰۰+", label: "برند معتبر", icon: <Award className="h-6 w-6" />, growth: "+۲۳٪" },
                { number: "۹۹.۲٪", label: "رضایت", icon: <Heart className="h-6 w-6" />, growth: "+۵.۲٪" },
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="flex justify-center mb-3 group-hover:animate-bounce">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="text-white">{stat.icon}</div>
                      </div>
                    </div>
                    <div className="text-3xl font-bold mb-1 group-hover:text-[#F18F20] transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-blue-200 text-sm mb-2">{stat.label}</div>
                    <Badge className="bg-green-500/20 text-green-200 border-green-400/30 text-xs">
                      <TrendingUp className="h-3 w-3 ml-1" />
                      {stat.growth}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/ai-assistant">
                <Button
                  size="lg"
                  className="bg-white text-[#253F8F] hover:bg-blue-50 text-xl px-10 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
                >
                  <Bot className="h-6 w-6 ml-3 group-hover:animate-spin" />
                  شروع با دستیار هوشمند
                  <Sparkles className="h-5 w-5 mr-2 text-[#F18F20]" />
                </Button>
              </Link>
              <Link href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-xl px-10 py-4 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 group bg-transparent"
                >
                  <Play className="h-6 w-6 ml-3 group-hover:animate-pulse" />
                  مشاهده خدمات
                </Button>
              </Link>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 right-10 w-20 h-20 rounded-full bg-white/10 blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-[#F18F20]/20 blur-xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-[#F18F20]/20 blur-xl animate-bounce"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#253F8F]/5 to-[#F18F20]/5 dark:from-[#253F8F]/10 dark:to-[#F18F20]/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#253F8F]/10 text-[#253F8F] dark:bg-[#253F8F]/30 dark:text-blue-300 px-4 py-2">
              <Cpu className="h-4 w-4 ml-1" />
              فناوری‌های پیشرفته
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#253F8F] to-[#F18F20] bg-clip-text text-transparent">
              قدرت فناوری در خدمت شما
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              با استفاده از آخرین فناوری‌های روز دنیا، بهترین تجربه خرید صنعتی را ارائه می‌دهیم
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="group text-center p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-[#253F8F]/20 dark:hover:border-[#253F8F]/50 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#253F8F] to-[#F18F20] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                  <div className="text-white">{tech.icon}</div>
                </div>
                <h3 className="font-bold mb-2 group-hover:text-[#253F8F] transition-colors">{tech.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{tech.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section id="services" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-[#253F8F]/5 to-[#F18F20]/5 dark:from-gray-800 dark:via-[#253F8F]/10 dark:to-[#F18F20]/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-[#253F8F] to-[#F18F20] text-white px-6 py-3 text-lg">
              <Star className="h-5 w-5 ml-2 animate-spin" />
              خدمات اصلی و پیشرفته
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-[#253F8F] via-[#F18F20] to-[#253F8F] bg-clip-text text-transparent">
              خدمات نوآورانه اوستا
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              با استفاده از آخرین فناو��ی‌ها و تجربه چندین ساله، بهترین خدمات صنعتی را ارائه می‌دهیم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-none shadow-xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 bg-white/80 backdrop-blur-sm"
              >
                {/* Gradient Top Bar */}
                <div className={`h-3 bg-gradient-to-r ${service.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/30 transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
                </div>

                <CardHeader className="pb-4 relative">
                  {/* Floating Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative overflow-hidden`}
                    >
                      <div className="relative z-10">{service.icon}</div>
                      <div className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-3xl"></div>
                    </div>
                    {service.badge && (
                      <Badge className="bg-gradient-to-r from-[#F18F20] to-orange-500 text-white border-none shadow-lg animate-pulse">
                        <Crown className="h-3 w-3 ml-1" />
                        {service.badge}
                      </Badge>
                    )}
                  </div>

                  <CardTitle className="text-2xl mb-4 group-hover:text-[#253F8F] transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{service.description}</p>

                  {/* Popularity Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">محبوبیت</span>
                      <span className="text-sm font-bold text-[#253F8F]">{service.popularity}%</span>
                    </div>
                    <Progress value={service.popularity} className="h-2" />
                  </div>

                  {/* Stats */}
                  {service.stats && (
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="text-center p-2 bg-[#253F8F]/10 dark:bg-[#253F8F]/20 rounded-lg">
                        <div className="text-lg font-bold text-[#253F8F]">{service.stats.users}</div>
                        <div className="text-xs text-gray-600">کاربر</div>
                      </div>
                      <div className="text-center p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <div className="text-lg font-bold text-green-600">{service.stats.satisfaction}</div>
                        <div className="text-xs text-gray-600">رضایت</div>
                      </div>
                      <div className="text-center p-2 bg-[#F18F20]/10 dark:bg-[#F18F20]/20 rounded-lg">
                        <div className="text-lg font-bold text-[#F18F20]">{service.stats.growth}</div>
                        <div className="text-xs text-gray-600">رشد</div>
                      </div>
                    </div>
                  )}
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center text-green-600">
                      <CheckCircle className="h-5 w-5 ml-2 animate-pulse" />
                      ویژگی‌ها
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-800 transition-colors"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-[#253F8F] to-[#F18F20] rounded-full mt-2 ml-3 flex-shrink-0 animate-pulse"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-3 flex items-center text-[#253F8F]">
                      <Target className="h-5 w-5 ml-2 animate-spin" />
                      مزایا
                    </h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-800 transition-colors"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 ml-3 flex-shrink-0 animate-bounce"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.link && (
                    <Link href={service.link} className="block">
                      <Button className="w-full group-hover:shadow-2xl transition-all duration-500 bg-gradient-to-r from-[#253F8F] to-[#F18F20] hover:from-[#F18F20] hover:to-[#253F8F] text-white border-none transform group-hover:scale-105">
                        <Rocket className="h-5 w-5 ml-2 group-hover:animate-bounce" />
                        شروع استفاده
                        <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  )}
                </CardContent>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#253F8F]/0 via-[#F18F20]/0 to-[#253F8F]/0 group-hover:from-[#253F8F]/10 group-hover:via-[#F18F20]/10 group-hover:to-[#253F8F]/10 transition-all duration-700 pointer-events-none rounded-lg"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 bg-gradient-to-br from-[#253F8F] via-[#253F8F] to-[#1e3a8a] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-6 py-3 text-lg backdrop-blur-sm">
              <Quote className="h-5 w-5 ml-2" />
              نظرات مشتریان راضی
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-6">داستان‌های موفقیت</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              ببینید مشتریان ما چه می‌گویند و چگونه اوستا کسب‌وکار آن‌ها را متحول کرده است
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:rotate-1"
              >
                <CardContent className="p-8">
                  {/* Rating Stars */}
                  <div className="flex mb-6 justify-center">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 text-[#F18F20] fill-current animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <Quote className="h-12 w-12 text-white/30 mb-4 mx-auto" />
                  <p className="text-lg leading-relaxed mb-6 text-center italic">"{testimonial.content}"</p>

                  {/* Savings Badge */}
                  <div className="text-center mb-6">
                    <Badge className="bg-green-500/20 text-green-200 border-green-400/30 px-4 py-2">
                      <TrendingUp className="h-4 w-4 ml-1" />
                      صرفه‌جویی: {testimonial.savings}
                    </Badge>
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-4 border-white/30 ml-4"
                    />
                    <div className="text-center">
                      <div className="font-bold text-lg">{testimonial.name}</div>
                      <div className="text-blue-200 text-sm">{testimonial.role}</div>
                      <div className="text-blue-300 text-xs">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#F18F20]/10 text-[#F18F20] dark:bg-[#F18F20]/30 dark:text-orange-300 px-4 py-2">
              <Lightbulb className="h-4 w-4 ml-1" />
              سوالات متداول
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#F18F20] to-[#253F8F] bg-clip-text text-transparent">
              پاسخ سوالات شما
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              پاسخ سوالات رایج درباره خدمات اوستا
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-right flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-semibold text-lg">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="h-6 w-6 text-[#253F8F] animate-bounce" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-4 py-2">
              <BarChart3 className="h-4 w-4 ml-1" />
              مقایسه قبل و بعد
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">تفاوت قبل و بعد از اوستا</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              ببینید چگونه اوستا کسب‌وکار شما را متحول می‌کند
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Before */}
            <Card className="border-2 border-red-200 dark:border-red-800">
              <CardHeader className="bg-red-50 dark:bg-red-900/20">
                <CardTitle className="text-2xl text-red-600 flex items-center">
                  <ThumbsUp className="h-6 w-6 ml-2 rotate-180" />
                  قبل از اوستا
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {[
                    "جستجوی طولانی برای یافتن محصول مناسب",
                    "عدم اطمینان از اصالت کالا",
                    "قیمت‌های نامشخص و مذاکرات پیچیده",
                    "عدم دسترسی به متخصصان",
                    "فرآیند خرید پیچیده و زمان‌بر",
                    "عدم پشتیبانی پس از فروش",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* After */}
            <Card className="border-2 border-green-200 dark:border-green-800">
              <CardHeader className="bg-green-50 dark:bg-green-900/20">
                <CardTitle className="text-2xl text-green-600 flex items-center">
                  <ThumbsUp className="h-6 w-6 ml-2" />
                  بعد از اوستا
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {[
                    "جستجوی هوشمند و سریع با AI",
                    "گارانتی ۱۰۰٪ اصالت کالا",
                    "قیمت‌گذاری شفاف و رقابتی",
                    "دسترسی آسان به متخصصان اوستاکار",
                    "فرآیند خرید ساده و سریع",
                    "پشتیبانی ۲۴/۷ و خدمات پس از فروش",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#253F8F] via-[#253F8F] to-[#1e3a8a] text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-6 py-3 text-lg backdrop-blur-sm animate-bounce">
              <Rocket className="h-5 w-5 ml-2" />
              آماده شروع؟
            </Badge>

            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">همین حالا شروع کنید!</h2>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed">
              با کارشناسان ما تماس بگیرید و از خدمات پیشرفته اوستا بهره‌مند شوید
              <br />
              <span className="text-[#F18F20] font-bold">تجربه‌ای متفاوت در انتظار شماست</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-[#253F8F] hover:bg-blue-50 text-xl px-12 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 group"
                >
                  <Phone className="h-6 w-6 ml-3 group-hover:animate-bounce" />
                  تماس با کارشناسان
                  <Gift className="h-5 w-5 mr-2 text-green-500" />
                </Button>
              </Link>
              <Link href="/ai-assistant">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-xl px-12 py-4 rounded-2xl backdrop-blur-sm hover:scale-110 transition-all duration-300 group bg-transparent"
                >
                  <MessageCircle className="h-6 w-6 ml-3 group-hover:animate-pulse" />
                  چت با دستیار هوشمند
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-blue-200">
              <div className="flex items-center">
                <Shield className="h-5 w-5 ml-2" />
                <span>۱۰۰٪ امن</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 ml-2" />
                <span>پشتیبانی ۲۴/۷</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 ml-2" />
                <span>گارانتی کیفیت</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-5 w-5 ml-2" />
                <span>رضایت ۹۹٪</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#253F8F] to-[#F18F20] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-[#253F8F] transition-colors">تماس تلفنی</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">۰۲۱-۱۲۳۴۵۶۷۸</p>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                پاسخگویی ۲۴ ساعته
              </Badge>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-green-600 transition-colors">ایمیل</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">info@ousta.com</p>
              <Badge className="bg-[#253F8F]/10 text-[#253F8F] dark:bg-[#253F8F]/30 dark:text-blue-300">
                پاسخ در کمتر از ۲ ساعت
              </Badge>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F18F20] to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-[#F18F20] transition-colors">آدرس</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">تهران، خیابان ولیعصر</p>
              <Badge className="bg-[#F18F20]/10 text-[#F18F20] dark:bg-[#F18F20]/30 dark:text-orange-300">
                بازدید حضوری با هماهنگی
              </Badge>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
