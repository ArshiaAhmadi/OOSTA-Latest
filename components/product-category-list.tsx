"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Droplet, Cog, Zap, ArrowRight, Database, Sliders, Activity, Vibrate } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export function ProductCategoryList() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const categories = [
    {
      id: 1,
      name: "انواع گیربکس و لوازم جانبی",
      description: "گیربکس‌های صنعتی با کاربردهای مختلف و قطعات یدکی",
      image: "/placeholder.svg?key=7l5hc",
      icon: Cog,
      count: 98,
      slug: "gearboxes",
      featured: true,
      subcategories: [
        "گیربکس حلزونی",
        "گیربکس کتابی",
        "گیربکس هلیکال (شافت مستقیم)",
        "گیربکس قورباغه‌ای",
        "گیربکس خورشیدی",
        "گیربکس سایکلو",
        "گیربکس دور متغیر",
        "گیربکس آویز (شافت موازی)",
        "موتور گیربکس (ترکیبی)",
        "گیربکس اکسترودر",
      ],
      color: "from-purple-500/20 to-indigo-500/20",
      iconBg: "bg-purple-500",
    },
    {
      id: 2,
      name: "انواع الکتروموتور و لوازم جانبی",
      description: "الکتروموتورهای تک فاز و سه فاز صنعتی و قطعات یدکی",
      image: "/placeholder.svg?key=cxroz",
      icon: Zap,
      count: 124,
      slug: "electromotors",
      featured: true,
      subcategories: [
        "الکتروموتور تک فاز",
        "الکتروموتور ۳فاز",
        "الکتروموتور ضد انفجار",
        "الکتروموتور ترمز دار",
        "الکتروموتور DC",
        "موتور کولر",
        "الکتروموتور مشعل",
        "الکتروموتور پوسته آلومینیومی",
        "الکتروموتور پوسته چدنی",
        "الکتروموتور سروو Servo",
        "الکتروموتور کلاچ دار",
      ],
      color: "from-amber-500/20 to-orange-500/20",
      iconBg: "bg-amber-500",
    },
    {
      id: 3,
      name: "انواع پمپ و لوازم جانبی",
      description: "انواع پمپ‌های صنعتی، سانتریفیوژ و کف‌کش و قطعات یدکی",
      image: "/placeholder.svg?key=tt3l9",
      icon: Droplet,
      count: 156,
      slug: "pumps",
      featured: true,
      subcategories: [
        "پمپ آب خانگی",
        "پمپ سانتریفیوژ",
        "پمپ کف کش",
        "پمپ لجن کش",
        "پمپ استخری",
        "پمپ شناور",
        "پمپ وکیوم",
        "پمپ دنده‌ای",
        "پمپ کارواش",
        "پمپ سیرکولاتور",
        "پمپ دیافراگمی",
        "پمپ روغن داغ",
        "پمپ باد",
        "پمپ کولر",
        "پمپ اسید",
        "پمپ آب صابون",
        "مونو پمپ",
        "پمپ گازوئیل کش",
      ],
      color: "from-blue-500/20 to-cyan-500/20",
      iconBg: "bg-blue-500",
    },
    {
      id: 4,
      name: "اینورتر و لوازم جانبی",
      icon: Activity,
      description: "انواع اینورتر سه فاز، تک فاز، سبک کار، سنگین کار و آسانسور",
      slug: "inverters",
      featured: false,
      subcategories: ["اینورتر ۳ فاز", "اینورتر تک فاز", "اینورتر سبک کار", "اینورتر سنگین کار", "اینورتر آسانسور"],
      color: "from-green-500/20 to-emerald-500/20",
      iconBg: "bg-green-500",
      count: 78,
      image: "/placeholder.svg?key=inv3r",
    },
    {
      id: 5,
      name: "انواع موتور ویبره و لوازم جانبی",
      description: "موتورهای ویبره برقی و بادی برای کاربردهای صنعتی مختلف",
      image: "/placeholder.svg?key=7p3h1",
      icon: Vibrate,
      count: 65,
      slug: "vibration-motors",
      featured: false,
      subcategories: [
        "موتور ویبره برقی",
        "موتور ویبره بادی",
        "موتور ویبره خطی",
        "موتور ویبره دورانی",
        "لوازم جانبی موتور ویبره",
      ],
      color: "from-red-500/20 to-rose-500/20",
      iconBg: "bg-red-500",
    },
    {
      id: 6,
      name: "مخزن تحت فشار",
      description: "انواع مخازن تحت فشار برای کاربردهای صنعتی و خانگی",
      image: "/placeholder.svg?key=j1trh",
      icon: Database,
      count: 58,
      slug: "pressure-vessels",
      featured: false,
      subcategories: ["مخزن دیافراگمی", "مخزن تحت فشار عمودی", "مخزن تحت فشار افقی", "مخزن گالوانیزه"],
      color: "from-indigo-500/20 to-indigo-600/20",
      iconBg: "bg-indigo-500",
    },
    {
      id: 7,
      name: "ست کنترل",
      description: "انواع ست‌های کنترل برای سیستم‌های پمپاژ و صنعتی",
      image: "/placeholder.svg?key=1d9a5",
      icon: Sliders,
      count: 42,
      slug: "control-panels",
      featured: false,
      subcategories: ["ست کنترل پمپ", "ست کنترل فشار", "ست کنترل سطح", "ست کنترل دما"],
      color: "from-cyan-500/20 to-cyan-600/20",
      iconBg: "bg-cyan-500",
    },
    {
      id: 8,
      name: "انواع ژنراتور و لوازم جانبی",
      description: "ژنراتورها و موتورهای برق برای تأمین برق اضطراری و دائمی",
      image: "/placeholder.svg?key=gen99",
      icon: Zap,
      count: 32,
      slug: "generators",
      featured: false,
      subcategories: [
        "دیزل ژنراتور",
        "ژنراتور بنزینی",
        "ژنراتور گازی",
        "موتور برق بنزینی",
        "موتور برق دیزلی",
        "موتور برق سایلنت",
      ],
      color: "from-yellow-500/20 to-yellow-600/20",
      iconBg: "bg-yellow-500",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      {categories.map((category, index) => (
        <Link
          key={category.id}
          href={`/products/${category.slug}`}
          className="block h-full"
          prefetch={false}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            initial={{ opacity: 0.9, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="h-full"
          >
            <Card className="overflow-hidden h-full bg-white dark:bg-gray-900 border-0 shadow-lg rounded-2xl">
              {/* گرادیانت پس‌زمینه متناسب با هر دسته‌بندی */}
              

              <div className="relative">
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out"
                    style={{
                      transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                {/* آیکون دسته‌بندی */}
                <div
                  className={`absolute top-4 right-4 w-12 h-12 ${category.iconBg} rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300`}
                  style={{
                    transform: hoveredIndex === index ? "scale(1.1) rotate(10deg)" : "scale(1)",
                  }}
                >
                  <category.icon className="h-6 w-6 text-white" />
                </div>

                {/* نشان پرفروش */}
                {category.featured && (
                  <Badge className="absolute top-4 left-4 bg-primary border-primary shadow-md px-3 py-1">پرفروش</Badge>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 text-white mb-1">
                    <h3 className="font-bold text-xl">{category.name}</h3>
                  </div>
                  <p className="text-white/90 text-sm line-clamp-1">{category.description}</p>
                </div>
              </div>

              <CardContent className="p-4 relative z-10">
                <div className="flex justify-between items-center mb-3">
                  <Badge
                    variant="outline"
                    className="bg-opacity-10 border-opacity-20 px-3 py-1"
                    style={{
                      backgroundColor: `rgba(var(--${category.iconBg.replace("bg-", "")}-rgb), 0.1)`,
                      borderColor: `rgba(var(--${category.iconBg.replace("bg-", "")}-rgb), 0.2)`,
                      color: `hsl(var(--${category.iconBg.replace("bg-", "")}))`,
                    }}
                  >
                    {category.count} محصول
                  </Badge>
                  <span className="text-sm text-muted-foreground flex items-center group-hover:text-primary transition-colors">
                    مشاهده محصولات
                    <ArrowRight className="h-4 w-4 mr-1 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>

                <div className="space-y-2">
                  {category.subcategories.slice(0, 6).map((subcat, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center text-sm"
                      initial={{ x: -5, opacity: 0 }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        transition: { delay: 0.2 + idx * 0.1 },
                      }}
                    >
                      <div className={`w-2 h-2 ${category.iconBg} rounded-full ml-2`}></div>
                      <span className="text-muted-foreground hover:text-foreground transition-colors">{subcat}</span>
                    </motion.div>
                  ))}
                  {category.subcategories.length > 6 && (
                    <motion.div
                      className="flex items-center text-sm"
                      initial={{ x: -5, opacity: 0 }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        transition: { delay: 0.8 },
                      }}
                    >
                      <div className={`w-2 h-2 ${category.iconBg} rounded-full ml-2`}></div>
                      <span className="text-primary font-medium">
                        +{category.subcategories.length - 6} زیردسته دیگر
                      </span>
                    </motion.div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Link>
      ))}
    </div>
  )
}
