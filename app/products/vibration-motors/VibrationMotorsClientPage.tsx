"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Vibrate, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

// انواع موتور ویبره
const vibrationMotorTypes = [
  {
    id: "electric-vibration-motors",
    name: "موتور ویبره برقی",
    description: "موتورهای ویبره برقی برای کاربردهای صنعتی با قدرت بالا",
    image: "/placeholder.svg?height=400&width=600&query=industrial electric vibration motor",
    color: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-blue-500",
  },
  {
    id: "pneumatic-vibration-motors",
    name: "موتور ویبره بادی",
    description: "موتورهای ویبره بادی برای محیط‌های با خطر انفجار و شرایط خاص",
    image: "/placeholder.svg?height=400&width=600&query=industrial pneumatic vibration motor",
    color: "from-green-500/20 to-emerald-500/20",
    iconBg: "bg-green-500",
  },
  {
    id: "rotary-vibration-motors",
    name: "موتور ویبره روتاری",
    description: "موتورهای ویبره روتاری با قابلیت تنظیم نیروی گریز از مرکز",
    image: "/placeholder.svg?height=400&width=600&query=industrial rotary vibration motor",
    color: "from-purple-500/20 to-indigo-500/20",
    iconBg: "bg-purple-500",
  },
  {
    id: "linear-vibration-motors",
    name: "موتور ویبره خطی",
    description: "موتورهای ویبره خطی برای ایجاد حرکت رفت و برگشتی",
    image: "/placeholder.svg?height=400&width=600&query=industrial linear vibration motor",
    color: "from-amber-500/20 to-orange-500/20",
    iconBg: "bg-amber-500",
  },
  {
    id: "external-vibration-motors",
    name: "موتور ویبره خارجی",
    description: "موتورهای ویبره خارجی برای نصب روی سطوح و تجهیزات مختلف",
    image: "/placeholder.svg?height=400&width=600&query=industrial external vibration motor",
    color: "from-red-500/20 to-rose-500/20",
    iconBg: "bg-red-500",
  },
  {
    id: "high-frequency-vibration-motors",
    name: "موتور ویبره فرکانس بالا",
    description: "موتورهای ویبره با فرکانس بالا برای کاربردهای خاص",
    image: "/placeholder.svg?height=400&width=600&query=industrial high frequency vibration motor",
    color: "from-teal-500/20 to-cyan-500/20",
    iconBg: "bg-teal-500",
  },
  {
    id: "micro-vibration-motors",
    name: "میکرو موتور ویبره",
    description: "موتورهای ویبره کوچک برای دستگاه‌های کم حجم و دقیق",
    image: "/placeholder.svg?height=400&width=600&query=industrial micro vibration motor",
    color: "from-pink-500/20 to-purple-500/20",
    iconBg: "bg-pink-500",
  },
  {
    id: "vibration-motor-accessories",
    name: "لوازم جانبی موتور ویبره",
    description: "انواع لوازم جانبی موتور ویبره شامل پایه، کنترلر و اتصالات",
    image: "/placeholder.svg?height=400&width=600&query=industrial vibration motor accessories",
    color: "from-violet-500/20 to-purple-500/20",
    iconBg: "bg-violet-500",
  },
]

export default function VibrationMotorsClientPage() {
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
        <span className="text-foreground">موتورهای ویبره</span>
      </div>

      {/* بخش هدر */}
      <div className="relative rounded-3xl overflow-hidden mb-12">
        <div className="relative h-[400px] w-full">
          <Image
            src="/placeholder.svg?height=800&width=1600&query=industrial vibration motors collection factory"
            alt="انواع موتور ویبره صنعتی"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/20 px-4 py-1 text-sm">
              موتورهای ویبره صنعتی
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              انواع موتور ویبره و لوازم جانبی
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-6">
              موتورهای ویبره تجهیزاتی هستند که برای ایجاد ارتعاش کنترل شده در ماشین‌آلات و تجهیزات صنعتی استفاده می‌شوند و
              در صنایع مختلف کاربرد دارند.
            </p>
          </div>
        </div>
      </div>

      {/* بخش معرفی */}
      <div className="mb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">انواع موتورهای ویبره صنعتی</h2>
          <p className="text-lg text-center text-muted-foreground mb-8">
            موتورهای ویبره در انواع مختلفی طراحی و تولید می‌شوند تا پاسخگوی نیازهای متنوع صنایع باشند. هر نوع موتور ویبره
            ویژگی‌ها و کاربردهای خاص خود را دارد.
          </p>
        </div>
      </div>

      {/* بخش انواع موتور ویبره */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {vibrationMotorTypes.map((motor, index) => (
          <motion.div
            key={motor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/products/vibration-motors/${motor.id}`} className="block h-full">
              <Card className="overflow-hidden h-full bg-white dark:bg-gray-900 border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
                {/* گرادیانت پس‌زمینه */}
                <div className={`absolute inset-0 bg-gradient-to-br ${motor.color} opacity-30 z-0`}></div>

                <div className="relative">
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={motor.image || "/placeholder.svg"}
                      alt={motor.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>

                  {/* آیکون دسته‌بندی */}
                  <div
                    className={`absolute top-4 right-4 w-12 h-12 ${motor.iconBg} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <Vibrate className="h-6 w-6 text-white" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-xl text-white">{motor.name}</h3>
                  </div>
                </div>

                <CardContent className="p-4 relative z-10">
                  <p className="text-muted-foreground mb-4">{motor.description}</p>
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
            src="/placeholder.svg?height=600&width=1200&query=industrial vibration motor engineering team"
            alt="تیم مهندسی موتور ویبره صنعتی"
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
                کارشناسان ما آماده ارائه مشاوره تخصصی برای انتخاب بهترین نوع موتور ویبره متناسب با نیاز شما هستند.
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
