"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Zap, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

// انواع ژنراتور
const generatorTypes = [
  {
    id: "diesel-generators",
    name: "ژنراتور دیزلی",
    description: "ژنراتورهای دیزلی برای تولید برق با استفاده از سوخت دیزل",
    image: "/placeholder.svg?height=400&width=600&query=industrial diesel generator",
    color: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-blue-500",
  },
  {
    id: "gasoline-generators",
    name: "ژنراتور بنزینی",
    description: "ژنراتورهای بنزینی برای کاربردهای سبک‌تر و قابل حمل",
    image: "/placeholder.svg?height=400&width=600&query=industrial gasoline generator",
    color: "from-green-500/20 to-emerald-500/20",
    iconBg: "bg-green-500",
  },
  {
    id: "gas-generators",
    name: "ژنراتور گازی",
    description: "ژنراتورهای گازی با سوخت گاز طبیعی یا LPG برای کاهش آلودگی",
    image: "/placeholder.svg?height=400&width=600&query=industrial gas generator",
    color: "from-purple-500/20 to-indigo-500/20",
    iconBg: "bg-purple-500",
  },
  {
    id: "silent-generators",
    name: "ژنراتور سایلنت",
    description: "ژنراتورهای کم صدا با عایق صوتی برای محیط‌های حساس به صدا",
    image: "/placeholder.svg?height=400&width=600&query=industrial silent generator",
    color: "from-amber-500/20 to-orange-500/20",
    iconBg: "bg-amber-500",
  },
  {
    id: "portable-generators",
    name: "ژنراتور پرتابل",
    description: "ژنراتورهای قابل حمل برای استفاده در مکان‌های مختلف",
    image: "/placeholder.svg?height=400&width=600&query=industrial portable generator",
    color: "from-red-500/20 to-rose-500/20",
    iconBg: "bg-red-500",
  },
  {
    id: "industrial-generators",
    name: "ژنراتور صنعتی",
    description: "ژنراتورهای قدرتمند برای کاربردهای صنعتی و تجاری بزرگ",
    image: "/placeholder.svg?height=400&width=600&query=industrial heavy duty generator",
    color: "from-teal-500/20 to-cyan-500/20",
    iconBg: "bg-teal-500",
  },
  {
    id: "synchronous-generators",
    name: "ژنراتور سنکرون",
    description: "ژنراتورهای سنکرون با قابلیت کار موازی و پایداری فرکانس",
    image: "/placeholder.svg?height=400&width=600&query=industrial synchronous generator",
    color: "from-pink-500/20 to-purple-500/20",
    iconBg: "bg-pink-500",
  },
  {
    id: "generator-accessories",
    name: "لوازم جانبی ژنراتور",
    description: "انواع لوازم جانبی ژنراتور شامل تابلو کنترل، مخزن سوخت و...",
    image: "/placeholder.svg?height=400&width=600&query=industrial generator accessories",
    color: "from-violet-500/20 to-purple-500/20",
    iconBg: "bg-violet-500",
  },
]

export default function GeneratorsClientPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* بخش مسیر */}
      <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">
          صفحه اصلی
        </Link>
        <ChevronLeft className="h-4 w-4" />
        <Link href="/products" className="hover:text-primary">
          محصولات
        </Link>
        <ChevronLeft className="h-4 w-4" />
        <span className="text-foreground">ژنراتورها</span>
      </div>

      {/* بخش هدر */}
      <div className="relative rounded-3xl overflow-hidden mb-12">
        <div className="relative h-[400px] w-full">
          <Image
            src="/placeholder.svg?height=800&width=1600&query=industrial generators collection factory"
            alt="انواع ژنراتور صنعتی"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/20 px-4 py-1 text-sm">
              ژنراتورهای صنعتی
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">انواع ژنراتور و لوازم جانبی</h1>
            <p className="text-white/80 text-lg md:text-xl mb-6">
              ژنراتورها تجهیزاتی هستند که انرژی مکانیکی را به انرژی الکتریکی تبدیل می‌کنند و برای تولید برق در مکان‌هایی
              که به شبکه برق دسترسی ندارند یا به عنوان سیستم پشتیبان استفاده می‌شوند.
            </p>
          </div>
        </div>
      </div>

      {/* بخش معرفی */}
      <div className="mb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">انواع ژنراتورهای صنعتی</h2>
          <p className="text-lg text-center text-muted-foreground mb-8">
            ژنراتورها در انواع مختلفی طراحی و تولید می‌شوند تا پاسخگوی نیازهای متنوع صنایع باشند. هر نوع ژنراتور ویژگی‌ها
            و کاربردهای خاص خود را دارد.
          </p>
        </div>
      </div>

      {/* بخش انواع ژنراتور */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {generatorTypes.map((generator, index) => (
          <motion.div
            key={generator.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/products/generators/${generator.id}`} className="block h-full">
              <Card className="overflow-hidden h-full bg-white dark:bg-gray-900 border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
                {/* گرادیانت پس‌زمینه */}
                <div className={`absolute inset-0 bg-gradient-to-br ${generator.color} opacity-30 z-0`}></div>

                <div className="relative">
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={generator.image || "/placeholder.svg"}
                      alt={generator.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>

                  {/* آیکون دسته‌بندی */}
                  <div
                    className={`absolute top-4 right-4 w-12 h-12 ${generator.iconBg} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <Zap className="h-6 w-6 text-white" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-xl text-white">{generator.name}</h3>
                  </div>
                </div>

                <CardContent className="p-4 relative z-10">
                  <p className="text-muted-foreground mb-4">{generator.description}</p>
                  <div className="flex justify-end">
                    <Button variant="ghost" className="text-primary group">
                      مشاهده جزئیات
                      <ArrowRight className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* بخش CTA */}
      <div className="rounded-3xl overflow-hidden relative mb-16">
        <div className="relative h-[300px] w-full">
          <Image
            src="/placeholder.svg?height=600&width=1200&query=industrial generator engineering team"
            alt="تیم مهندسی ژنراتور صنعتی"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">نیاز به مشاوره تخصصی دارید؟</h2>
              <p className="text-white/90 text-lg mb-8">
                کارشناسان ما آماده ارائه مشاوره تخصصی برای انتخاب بهترین نوع ژنراتور متناسب با نیاز شما هستند.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2">
                  تماس با کارشناسان
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 gap-2">
                  درخواست استعلام قیمت
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
