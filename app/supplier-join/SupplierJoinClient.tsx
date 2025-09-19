"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Factory,
  Building2,
  HardHat,
  Users,
  TrendingUp,
  DollarSign,
  Award,
  BarChart3,
  UserPlus,
  Upload,
  Play,
  Quote,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Globe,
  Shield,
} from "lucide-react"

export default function SupplierJoinClient() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const marketSegments = [
    {
      title: "شرکت‌های بزرگ صنعتی",
      description: "شامل کارخانه‌ها، شرکت‌های پتروشیمی و پیمانکاران بزرگ (EPC).",
      icon: <Factory className="h-8 w-8" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "کسب‌وکارهای کوچک و متوسط (SMEs)",
      description: "شامل کارگاه‌های تولیدی، شرکت‌های ساختمانی کوچک و دفاتر تجاری.",
      icon: <Building2 className="h-8 w-8" />,
      color: "from-green-500 to-green-600",
    },
    {
      title: "سازندگان و پیمانکاران",
      description: "شامل انبوه‌سازان و شرکت‌های پیمانکاری صنعتی و ساختمانی.",
      icon: <HardHat className="h-8 w-8" />,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "مشتریان نهایی و متخصصین",
      description: "شامل علاقه‌مندان به کارهای فنی (DIY) و اوستاکارهایی که برای پروژه‌های خود خرید می‌کنند.",
      icon: <Users className="h-8 w-8" />,
      color: "from-purple-500 to-purple-600",
    },
  ]

  const valuePropositions = [
    {
      title: "افزایش فروش و دسترسی به بازار جدید",
      description:
        "به شبکه گسترده‌ای از مشتریان صنعتی (از کارخانه‌های بزرگ تا متخصصین فنی) دسترسی پیدا کنید و فروش خود را افزایش دهید.",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "text-green-600",
    },
    {
      title: "کاهش هزینه‌های توزیع و بازاریابی",
      description: "هزینه‌های بازاریابی، فروش و مدیریت شبکه‌های توزیع سنتی را با برون‌سپاری آن به پلتفرم ما کاهش دهید.",
      icon: <DollarSign className="h-6 w-6" />,
      color: "text-blue-600",
    },
    {
      title: "تثبیت برند در بازار آنلاین",
      description:
        "برند خود را در بازار آنلاین تثبیت کنید، بدون اینکه نیاز به سرمایه‌گذاری سنگین در زیرساخت دیجیتال و تیم فنی داشته باشید.",
      icon: <Award className="h-6 w-6" />,
      color: "text-purple-600",
    },
    {
      title: "دسترسی به داده‌های هوشمند بازار",
      description:
        "از طریق داشبوردهای تحلیلی ما، بفهمید کدام محصولات پرطرفدارتر هستند و برای برنامه‌ریزی تولید و واردات خود از داده‌های واقعی بازار استفاده کنید.",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "text-orange-600",
    },
  ]

  const steps = [
    {
      number: "1",
      title: "ایجاد حساب کاربری",
      description: "در کمتر از ۵ دقیقه حساب کاربری فروشنده خود را بس��زید.",
      icon: <UserPlus className="h-8 w-8" />,
    },
    {
      number: "2",
      title: "بارگذاری محصولات",
      description: "محصولات خود را به راحتی از طریق پنل مدیریت در سایت لیست کنید.",
      icon: <Upload className="h-8 w-8" />,
    },
    {
      number: "3",
      title: "شروع فروش",
      description: "سفارشات جدید را دریافت کرده و شاهد رشد فروش خود در سراسر ایران باشید.",
      icon: <Play className="h-8 w-8" />,
    },
  ]

  const partnerLogos = [
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Modern Industrial Facility"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#253F8F]/90 via-[#253F8F]/80 to-[#F18F20]/70"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-32 h-32 bg-[#F18F20]/20 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-6 py-2 text-lg backdrop-blur-sm">
              <Zap className="h-5 w-5 mr-2" />
              پلتفرم فروش صنعتی ایران
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              کانال فروش دیجیتال شما در{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F18F20] to-yellow-400">
                قلب صنعت ایران
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              به بزرگترین اکوسیستم صنعتی ایران بپیوندید و محصولات خود را بدون واسطه به هزاران مشتری  B2G ، B2B ، B2C در سراسر کشور بفروشید.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/login?type=supplier">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#F18F20] to-orange-500 hover:from-[#F18F20]/90 hover:to-orange-500/90 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
                >
                  ایجاد حساب کاربری فروشنده (رایگان)
                  <ArrowRight className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-6 py-4 text-lg backdrop-blur-sm bg-transparent"
              >
                مشاهده ویدیو معرفی
                <Play className="h-5 w-5 mr-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
              {[
                { number: "10,000+", label: "مشتری فعال" },
                { number: "500+", label: "فروشنده" },
                { number: "50,000+", label: "محصول" },
                { number: "98%", label: "رضایت مشتری" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#F18F20]">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Access Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">محصولات شما به دست چه کسانی می‌رسد؟</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              دسترسی به طیف گسترده‌ای از مشتریان صنعتی در سراسر ایران
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketSegments.map((segment, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-8 text-center relative">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${segment.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${segment.color} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {segment.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#253F8F] transition-colors">
                    {segment.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">{segment.description}</p>

                  {/* Hover Effect */}
                  {hoveredCard === index && (
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="h-1 bg-gradient-to-r from-[#253F8F] to-[#F18F20] rounded-full"></div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Benefits */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                چرا اوستا بهترین بازار برای فروش محصولات شماست؟
              </h2>

              <div className="space-y-8">
                {valuePropositions.map((prop, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center ${prop.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {prop.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#253F8F] transition-colors">
                        {prop.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{prop.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Analytics Dashboard"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#253F8F] to-[#F18F20] rounded-2xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#F18F20] to-orange-500 rounded-full opacity-10 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-[#253F8F]/5 to-[#F18F20]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">فروش در اوستا در ۳ گام ساده</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">شروع فروش آنلاین تا این حد ساده نبوده است</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connection Lines */}
              <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-[#253F8F] to-[#F18F20] transform -translate-y-1/2 z-0"></div>

              {steps.map((step, index) => (
                <div key={index} className="relative z-10">
                  <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#F18F20]/20">
                    <CardContent className="p-0">
                      {/* Step Number */}
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#253F8F] to-[#F18F20] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div className="w-12 h-12 mx-auto mb-4 text-[#253F8F]">{step.icon}</div>

                      <h3 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h3>

                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">به جمع بهترین‌های صنعت ایران بپیوندید</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">شرکت‌های معتبر صنعتی به ما اعتماد کرده‌اند</p>
          </div>

          {/* Partner Logos */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-700">برخی از شرکای تجاری ما</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
              {partnerLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 hover:opacity-100 transition-opacity duration-300"
                >
                  <Image
                    src={logo || "/placeholder.svg"}
                    alt={`Partner ${index + 1}`}
                    width={120}
                    height={60}
                    className="max-w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 shadow-2xl border-0 bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="p-0 text-center">
                <Quote className="h-12 w-12 mx-auto mb-6 text-[#F18F20]" />

                <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                  "همکاری با اوستا، کانال فروش جدید و پرقدرتی را برای ما باز کرد و به ما کمک کرد تا به مشتریانی در سراسر
                  کشور دسترسی پیدا کنیم که قبلاً امکان‌پذیر نبود."
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#253F8F] to-[#F18F20] flex items-center justify-center text-white font-bold text-xl">
                    ا.ر
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">احمد رضایی</div>
                    <div className="text-gray-600">مدیر فروش شرکت «پولاد صنعت»</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#253F8F] via-[#253F8F] to-[#F18F20] text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#F18F20]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">برای تحول در فروش خود آماده‌اید؟</h2>

            <p className="text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed">
              همین حالا به صورت رایگان ثبت‌نام کنید و اولین قدم را برای افزایش فروش آنلاین خود بردارید.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
              {[
                { icon: <CheckCircle className="h-6 w-6" />, text: "ثبت‌نام رایگان" },
                { icon: <Shield className="h-6 w-6" />, text: "پشتیبانی ۲۴/۷" },
                { icon: <Globe className="h-6 w-6" />, text: "دسترسی سراسری" },
              ].map((benefit, index) => (
                <div key={index} className="flex items-center justify-center gap-3 text-lg">
                  <div className="text-[#F18F20]">{benefit.icon}</div>
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/login?type=supplier">
                <Button
                  size="lg"
                  className="bg-white text-[#253F8F] hover:bg-gray-100 px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group"
                >
                  ثبت‌نام و شروع فروش
                  <ArrowRight className="h-6 w-6 mr-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm bg-transparent"
                >
                  تماس با مشاور فروش
                  <Target className="h-5 w-5 mr-2" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-sm text-gray-300 mb-4">بیش از ۵۰۰ فروشنده به ما اعتماد کرده‌اند</p>
              <div className="flex justify-center items-center gap-8 text-sm text-gray-400">
                <span>✓ امنیت بالا</span>
                <span>✓ پرداخت مطمئن</span>
                <span>✓ پشتیبانی تخصصی</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
