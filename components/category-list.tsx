"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Droplet,
  Cog,
  Zap,
  ChevronRight,
  ArrowRight,
  Activity,
  Vibrate,
  Database,
  MoreHorizontal,
  Cpu,
  Power,
} from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function CategoryList() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null)

  // 7 دسته‌بندی اصلی که باید حتماً نمایش داده شوند
  const mainCategories = [
    {
      id: 1,
      name: "پمپ‌ها",
      description: "انواع پمپ‌های صنعتی، سانتریفیوژ و کف‌کش",
      image: "/placeholder.svg?key=die26",
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
        "پمپ موتور پمپ",
        "پمپ شناور",
        "پمپ وکیوم",
      ],
      color: "from-blue-500/20 to-cyan-500/20",
      iconBg: "bg-blue-500",
      gradientText: "bg-gradient-to-r from-blue-600 to-cyan-600",
    },
    {
      id: 2,
      name: "گیربکس‌ها",
      description: "گیربکس‌های صنعتی با کاربردهای مختلف",
      image: "/placeholder.svg?key=bsrcj",
      icon: Cog,
      count: 98,
      slug: "gearboxes",
      featured: true,
      subcategories: [
        "گیربکس حلزونی",
        "گیربکس کتابی",
        "گیربکس هلیکال",
        "گیربکس قورباغه‌ای",
        "گیربکس خورشیدی",
        "گیربکس سایکلو",
        "گیربکس دور متغیر",
        "گیربکس آویز",
      ],
      color: "from-purple-500/20 to-indigo-500/20",
      iconBg: "bg-purple-500",
      gradientText: "bg-gradient-to-r from-purple-600 to-indigo-600",
    },
    {
      id: 3,
      name: "الکتروموتورها",
      description: "الکتروموتورهای تک فاز و سه فاز صنعتی",
      image: "/electric-motors.png",
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
        "الکتروموتور سروو",
      ],
      color: "from-amber-500/20 to-orange-500/20",
      iconBg: "bg-amber-500",
      gradientText: "bg-gradient-to-r from-amber-600 to-orange-600",
    },
    {
      id: 4,
      name: "اینورترها",
      description: "انواع اینورتر و درایو برای کنترل دور موتور",
      image: "/placeholder.svg?key=inverters",
      icon: Activity,
      count: 78,
      slug: "inverters",
      featured: false,
      subcategories: ["اینورتر ۳ فاز", "اینورتر تک فاز", "اینورتر سبک کار", "اینورتر سنگین کار", "اینورتر آسانسور"],
      color: "from-green-500/20 to-emerald-500/20",
      iconBg: "bg-green-500",
      gradientText: "bg-gradient-to-r from-green-600 to-emerald-600",
    },
    {
      id: 5,
      name: "موتورهای ویبره",
      description: "انواع موتور ویبره برقی و بادی برای کاربردهای صنعتی",
      image: "/placeholder.svg?key=vibration",
      icon: Vibrate,
      count: 42,
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
      gradientText: "bg-gradient-to-r from-red-600 to-rose-600",
    },
    {
      id: 6,
      name: "مخزن تحت فشار",
      description: "انواع مخازن تحت فشار برای کاربردهای صنعتی",
      image: "/placeholder.svg?key=pressure",
      icon: Database,
      count: 58,
      slug: "pressure-vessels",
      featured: false,
      subcategories: ["مخزن دیافراگمی", "مخزن تحت فشار عمودی", "مخزن تحت فشار افقی", "مخزن گالوانیزه", "مخزن استیل"],
      color: "from-indigo-500/20 to-indigo-600/20",
      iconBg: "bg-indigo-500",
      gradientText: "bg-gradient-to-r from-indigo-600 to-blue-600",
    },
    {
      id: 7,
      name: "ست کنترل",
      description: "انواع ست کنترل و تابلو برق برای سیستم‌های صنعتی",
      image: "/placeholder.svg?key=control",
      icon: Cpu,
      count: 65,
      slug: "control-sets",
      featured: true,
      subcategories: ["تابلو برق صنعتی", "ست کنترل پمپ", "ست کنترل فشار", "ست کنترل سطح", "ست کنترل دما"],
      color: "from-cyan-500/20 to-teal-500/20",
      iconBg: "bg-cyan-500",
      gradientText: "bg-gradient-to-r from-cyan-600 to-teal-600",
    },
    {
      id: 8,
      name: "ژنراتورها",
      description: "انواع ژنراتور و موتور برق برای تولید انرژی الکتریکی",
      image: "/placeholder.svg?key=generators",
      icon: Power,
      count: 45,
      slug: "generators",
      featured: false,
      subcategories: ["ژنراتور دیزلی", "ژنراتور بنزینی", "ژنراتور گازی", "ژنراتور صنعتی", "ژنراتور خانگی"],
      color: "from-yellow-500/20 to-amber-500/20",
      iconBg: "bg-yellow-500",
      gradientText: "bg-gradient-to-r from-yellow-600 to-amber-600",
    },
  ]

  const toggleExpand = (index: number) => {
    if (expandedCategory === index) {
      setExpandedCategory(null)
    } else {
      setExpandedCategory(index)
    }
  }

  return (
    <div className="relative px-4 md:px-6 py-8">
      <div className="max-w-7xl mx-auto">
        {/* اسلایدر دسته‌بندی‌های اصلی - این اسلایدر فقط 7 دسته‌بندی اصلی را نمایش می‌دهد */}
        <div className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 auto-rows-fr">
            {mainCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0.9, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-full min-h-[500px] max-w-sm mx-auto w-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card className="overflow-hidden h-full bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 shadow-lg rounded-2xl hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300">
                  <div className="relative">
                    <div className="relative h-48 sm:h-56 w-full overflow-hidden">
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
                      className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300`}
                      style={{
                        transform: hoveredIndex === index ? "scale(1.1) rotate(10deg)" : "scale(1)",
                      }}
                    >
                      <category.icon
                        className={`h-5 w-5 sm:h-7 sm:w-7 transition-colors duration-300 ${
                          hoveredIndex === index ? "text-[#F18F20]" : "text-[#253F8F]"
                        }`}
                      />
                    </div>

                    {/* نشان پرفروش */}
                    {category.featured && (
                      <Badge className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-primary border-primary shadow-md px-2 py-1 sm:px-3 text-xs sm:text-sm">
                        پرفروش
                      </Badge>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                      <div className="flex items-center gap-2 text-white mb-1">
                        <h3 className="font-bold text-lg sm:text-2xl">{category.name}</h3>
                      </div>
                      <p className="text-white/90 text-xs sm:text-sm line-clamp-1">{category.description}</p>
                    </div>
                  </div>

                  <CardContent className="p-4 sm:p-5 relative z-10 flex-1 flex flex-col">
                    <div className="flex justify-between items-center mb-3 sm:mb-4">
                      <Badge
                        variant="outline"
                        className={`bg-${category.iconBg}/10 text-${category.iconBg} border-${category.iconBg}/20 px-2 py-1 sm:px-3 text-xs sm:text-sm`}
                      >
                        {category.count} محصول
                      </Badge>
                      <Link href={`/products/${category.slug}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs sm:text-sm text-primary hover:text-primary-dark transition-colors flex items-center gap-1"
                        >
                          مشاهده همه
                          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>

                    {/* زیردسته‌های محدود */}
                    <div className="space-y-2 mb-3 sm:mb-4 flex-1">
                      {category.subcategories.slice(0, expandedCategory === index ? 8 : 4).map((subcat, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center text-xs sm:text-sm"
                          initial={{ x: -5, opacity: 0 }}
                          animate={{
                            x: 0,
                            opacity: 1,
                            transition: { delay: 0.2 + idx * 0.05 },
                          }}
                        >
                          <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 ${category.iconBg} rounded-full ml-2`}></div>
                          <Link
                            href={`/products/${category.slug}/${subcat.replace(/ /g, "-")}`}
                            className="text-muted-foreground hover:text-foreground transition-colors line-clamp-1"
                          >
                            {subcat}
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    {/* دکمه نمایش بیشتر یا پاپ‌آور */}
                    {category.subcategories.length > 4 && (
                      <div className="flex justify-center">
                        {expandedCategory === index ? (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={(e) => {
                              e.preventDefault()
                              toggleExpand(index)
                            }}
                            className="w-full text-sm border-dashed border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary"
                          >
                            نمایش کمتر
                          </Button>
                        ) : (
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full text-sm border-dashed border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary bg-transparent"
                              >
                                مشاهده همه زیردسته‌ها
                                <MoreHorizontal className="h-4 w-4 mr-2" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-72 p-4" align="center">
                              <div className="space-y-2">
                                <h4
                                  className={`text-base font-bold ${category.gradientText} bg-clip-text text-transparent mb-3`}
                                >
                                  زیردسته‌های {category.name}
                                </h4>
                                <div className="grid grid-cols-1 gap-2">
                                  {category.subcategories.map((subcat, idx) => (
                                    <Link
                                      key={idx}
                                      href={`/products/${category.slug}/${subcat.replace(/ /g, "-")}`}
                                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                                    >
                                      <div className={`w-1.5 h-1.5 ${category.iconBg} rounded-full ml-2`}></div>
                                      {subcat}
                                    </Link>
                                  ))}
                                </div>
                                <div className="pt-3 mt-3 border-t border-dashed border-gray-200 dark:border-gray-800">
                                  <Link href={`/products/${category.slug}`}>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className={`w-full text-sm border-${category.iconBg} text-${category.iconBg} hover:bg-${category.iconBg}/10`}
                                    >
                                      مشاهده همه محصولات {category.name}
                                      <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Button>
                                  </Link>
                                </div>
                              </div>
                            </PopoverContent>
                          </Popover>
                        )}
                      </div>
                    )}

                    {/* دکمه مشاهده محصولات */}
                    <div className="mt-3 sm:mt-4">
                      <Link href={`/products/${category.slug}`} className="block w-full">
                        <Button
                          className={`w-full bg-${category.iconBg} hover:bg-${category.iconBg}/90 text-white text-xs sm:text-sm`}
                          size="lg"
                        >
                          مشاهده محصولات {category.name}
                          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 mr-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* دکمه مشاهده همه دسته‌بندی‌ها */}
        <div className="flex justify-center mt-8 sm:mt-10">
          <Link href="/products">
            <Button
              size="lg"
              className="rounded-full px-6 sm:px-8 text-sm sm:text-base bg-[#253F8F] hover:bg-[#253F8F]/90 transition-all duration-300 group text-white"
            >
              مشاهده همه دسته‌بندی‌های محصولات
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
