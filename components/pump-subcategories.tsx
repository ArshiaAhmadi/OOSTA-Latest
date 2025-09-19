"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Droplet } from "lucide-react"
import { motion } from "framer-motion"

export default function PumpSubcategories() {
  const pumpCategories = [
    {
      id: 1,
      name: "پمپ آب خانگی",
      subcategories: ["پمپ آب جتی", "پمپ آب بشقابی", "پمپ آب محیطی", "پکیج پمپ آب خانگی"],
      count: 42,
      slug: "home-water-pumps",
      image: "/placeholder.svg?key=rg8uo",
      color: "blue",
    },
    {
      id: 2,
      name: "پمپ سانتریفیوژ",
      subcategories: ["پمپ عمودی طبقاتی", "پمپ افقی طبقاتی"],
      count: 28,
      slug: "centrifugal-pumps",
      image: "/placeholder.svg?key=5k7tw",
      color: "indigo",
    },
    {
      id: 3,
      name: "پمپ کف کش",
      subcategories: [],
      count: 15,
      slug: "submersible-pumps",
      image: "/submersible-pump.png",
      color: "cyan",
    },
    {
      id: 4,
      name: "پمپ لجن کش",
      subcategories: [],
      count: 12,
      slug: "sludge-pumps",
      image: "/placeholder.svg?key=kltz0",
      color: "teal",
    },
    {
      id: 5,
      name: "پمپ استخری",
      subcategories: [],
      count: 18,
      slug: "pool-pumps",
      image: "/placeholder.svg?key=zv2hl",
      color: "sky",
    },
    {
      id: 6,
      name: "پمپ موتور پمپ",
      subcategories: ["بنزینی", "دیزلی"],
      count: 24,
      slug: "motor-pumps",
      image: "/placeholder.svg?query=motor pump&width=400&height=300",
      color: "green",
    },
    {
      id: 7,
      name: "پمپ شناور",
      subcategories: [],
      count: 16,
      slug: "float-pumps",
      image: "/placeholder.svg?query=float pump&width=400&height=300",
      color: "emerald",
    },
    {
      id: 8,
      name: "پمپ وکیوم",
      subcategories: [],
      count: 10,
      slug: "vacuum-pumps",
      image: "/placeholder.svg?query=vacuum pump&width=400&height=300",
      color: "purple",
    },
    {
      id: 9,
      name: "پمپ دنده‌ای - غلیظ کش",
      subcategories: [],
      count: 14,
      slug: "gear-pumps",
      image: "/placeholder.svg?query=gear pump&width=400&height=300",
      color: "violet",
    },
    {
      id: 10,
      name: "پمپ کارواش",
      subcategories: [],
      count: 20,
      slug: "car-wash-pumps",
      image: "/placeholder.svg?query=car wash pump&width=400&height=300",
      color: "blue",
    },
    {
      id: 11,
      name: "مه پاش صنعتی",
      subcategories: [],
      count: 8,
      slug: "industrial-foggers",
      image: "/placeholder.svg?query=industrial fogger&width=400&height=300",
      color: "indigo",
    },
    {
      id: 12,
      name: "جاروبرقی صنعتی",
      subcategories: [],
      count: 15,
      slug: "industrial-vacuum-cleaners",
      image: "/placeholder.svg?query=industrial vacuum cleaner&width=400&height=300",
      color: "purple",
    },
    {
      id: 13,
      name: "پمپ سیرکولاتور",
      subcategories: [],
      count: 12,
      slug: "circulator-pumps",
      image: "/placeholder.svg?query=circulator pump&width=400&height=300",
      color: "cyan",
    },
    {
      id: 14,
      name: "پمپ دیافراگمی",
      subcategories: [],
      count: 9,
      slug: "diaphragm-pumps",
      image: "/placeholder.svg?query=diaphragm pump&width=400&height=300",
      color: "teal",
    },
    {
      id: 15,
      name: "پمپ روغن داغ",
      subcategories: [],
      count: 7,
      slug: "hot-oil-pumps",
      image: "/placeholder.svg?query=hot oil pump&width=400&height=300",
      color: "amber",
    },
    {
      id: 16,
      name: "پمپ باد - کمپرسور باد",
      subcategories: [],
      count: 22,
      slug: "air-compressors",
      image: "/placeholder.svg?query=air compressor&width=400&height=300",
      color: "blue",
    },
    {
      id: 17,
      name: "پمپ کولر",
      subcategories: [],
      count: 11,
      slug: "cooler-pumps",
      image: "/placeholder.svg?query=cooler pump&width=400&height=300",
      color: "sky",
    },
    {
      id: 18,
      name: "پمپ اسید",
      subcategories: [],
      count: 6,
      slug: "acid-pumps",
      image: "/placeholder.svg?query=acid pump&width=400&height=300",
      color: "red",
    },
    {
      id: 19,
      name: "پمپ آب صابون",
      subcategories: [],
      count: 8,
      slug: "soap-water-pumps",
      image: "/placeholder.svg?query=soap water pump&width=400&height=300",
      color: "blue",
    },
    {
      id: 20,
      name: "مونو پمپ",
      subcategories: [],
      count: 5,
      slug: "mono-pumps",
      image: "/placeholder.svg?query=mono pump&width=400&height=300",
      color: "indigo",
    },
    {
      id: 21,
      name: "پمپ گازوئیل کش",
      subcategories: [],
      count: 9,
      slug: "diesel-pumps",
      image: "/placeholder.svg?query=diesel pump&width=400&height=300",
      color: "amber",
    },
  ]

  // Helper function to get gradient class based on color
  const getGradientClass = (color) => {
    const gradients = {
      blue: "from-blue-500 to-blue-700",
      indigo: "from-indigo-500 to-indigo-700",
      purple: "from-purple-500 to-purple-700",
      cyan: "from-cyan-500 to-cyan-700",
      teal: "from-teal-500 to-teal-700",
      green: "from-green-500 to-green-700",
      emerald: "from-emerald-500 to-emerald-700",
      amber: "from-amber-500 to-amber-700",
      orange: "from-orange-500 to-orange-700",
      red: "from-red-500 to-red-700",
      sky: "from-sky-500 to-sky-700",
      violet: "from-violet-500 to-violet-700",
    }
    return gradients[color] || "from-blue-500 to-blue-700"
  }

  // Helper function to get text color class based on color
  const getTextColorClass = (color) => {
    const textColors = {
      blue: "text-blue-600 dark:text-blue-400",
      indigo: "text-indigo-600 dark:text-indigo-400",
      purple: "text-purple-600 dark:text-purple-400",
      cyan: "text-cyan-600 dark:text-cyan-400",
      teal: "text-teal-600 dark:text-teal-400",
      green: "text-green-600 dark:text-green-400",
      emerald: "text-emerald-600 dark:text-emerald-400",
      amber: "text-amber-600 dark:text-amber-400",
      orange: "text-orange-600 dark:text-orange-400",
      red: "text-red-600 dark:text-red-400",
      sky: "text-sky-600 dark:text-sky-400",
      violet: "text-violet-600 dark:text-violet-400",
    }
    return textColors[color] || "text-blue-600 dark:text-blue-400"
  }

  // Helper function to get hover background color class based on color
  const getHoverBgClass = (color) => {
    const hoverBgColors = {
      blue: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
      indigo: "hover:bg-indigo-50 dark:hover:bg-indigo-900/20",
      purple: "hover:bg-purple-50 dark:hover:bg-purple-900/20",
      cyan: "hover:bg-cyan-50 dark:hover:bg-cyan-900/20",
      teal: "hover:bg-teal-50 dark:hover:bg-teal-900/20",
      green: "hover:bg-green-50 dark:hover:bg-green-900/20",
      emerald: "hover:bg-emerald-50 dark:hover:bg-emerald-900/20",
      amber: "hover:bg-amber-50 dark:hover:bg-amber-900/20",
      orange: "hover:bg-orange-50 dark:hover:bg-orange-900/20",
      red: "hover:bg-red-50 dark:hover:bg-red-900/20",
      sky: "hover:bg-sky-50 dark:hover:bg-sky-900/20",
      violet: "hover:bg-violet-50 dark:hover:bg-violet-900/20",
    }
    return hoverBgColors[color] || "hover:bg-blue-50 dark:hover:bg-blue-900/20"
  }

  // Helper function to get badge background color class based on color
  const getBadgeBgClass = (color) => {
    const badgeBgColors = {
      blue: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
      indigo: "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
      purple: "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
      cyan: "bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
      teal: "bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
      green: "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300",
      emerald: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
      amber: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
      orange: "bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
      red: "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300",
      sky: "bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
      violet: "bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
    }
    return badgeBgColors[color] || "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <Link href="/products" className="flex items-center text-primary hover:underline mb-2">
          <ChevronLeft className="h-4 w-4 ml-1" />
          <span>بازگشت به دسته‌بندی محصولات</span>
        </Link>
        <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
          پمپ آب و لوازم جانبی
        </h1>
        <div className="flex items-center gap-2">
          <Droplet className="h-5 w-5 text-blue-500" />
          <p className="text-muted-foreground">انتخاب از میان {pumpCategories.length} زیر دسته‌بندی تخصصی</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pumpCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-800">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${getGradientClass(category.color)} opacity-60 dark:opacity-70`}
                ></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white drop-shadow-md">{category.name}</h3>
                </div>
              </div>

              <CardContent className="p-5 relative">
                <div className="absolute -top-6 right-4">
                  <Badge
                    variant="outline"
                    className={`${getBadgeBgClass(category.color)} text-sm font-medium px-3 py-1 shadow-sm`}
                  >
                    {category.count} محصول
                  </Badge>
                </div>

                {category.subcategories.length > 0 && (
                  <div className="space-y-2 mb-4 mt-2">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">زیر دسته‌ها:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {category.subcategories.map((subcat, idx) => (
                        <Link
                          key={idx}
                          href={`/products/pumps/${category.slug}/${subcat.replace(/ /g, "-")}`}
                          className={`flex items-center gap-2 px-2 py-1.5 rounded-md ${getHoverBgClass(category.color)} transition-colors text-sm group`}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-${category.color}-500`}></div>
                          <span className={`group-hover:${getTextColorClass(category.color)} transition-colors`}>
                            {subcat}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <Link
                  href={`/products/pumps/${category.slug}`}
                  className={`inline-flex items-center gap-1 mt-3 px-4 py-2 rounded-lg bg-gradient-to-r ${getGradientClass(category.color)} text-white font-medium text-sm hover:shadow-md transition-all`}
                >
                  <span>مشاهده محصولات</span>
                  <ChevronLeft className="h-3.5 w-3.5" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
