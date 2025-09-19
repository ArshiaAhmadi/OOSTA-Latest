"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Vibrate, Zap, Wind, Settings, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { motion } from "framer-motion"

type SubcategoryInfo = {
  id: string
  name: string
  description: string
  icon: JSX.Element
  color: string
  image: string
  heroTitle: string
  heroDescription: string
}

const subcategoryInfo: Record<string, SubcategoryInfo> = {
  electric: {
    id: "electric",
    name: "موتور ویبره برقی",
    description: "انواع موتور ویبره برقی با قدرت و کارایی بالا",
    icon: <Zap className="h-5 w-5" />,
    color: "bg-blue-500",
    image: "/placeholder.svg?key=g2q9u",
    heroTitle: "موتور ویبره برقی",
    heroDescription: "موتورهای ویبره برقی با کیفیت بالا در انواع تک فاز و سه فاز با توان‌های مختلف",
  },
  pneumatic: {
    id: "pneumatic",
    name: "موتور ویبره بادی",
    description: "انواع موتور ویبره بادی با کاربردهای صنعتی متنوع",
    icon: <Wind className="h-5 w-5" />,
    color: "bg-green-500",
    image: "/placeholder.svg?key=qj2ho",
    heroTitle: "موتور ویبره بادی (پنوماتیک)",
    heroDescription: "موتورهای ویبره بادی با کارایی بالا برای محیط‌های خطرناک و شرایط خاص",
  },
  accessories: {
    id: "accessories",
    name: "لوازم جانبی موتور ویبره",
    description: "قطعات و لوازم جانبی برای انواع موتور ویبره",
    icon: <Settings className="h-5 w-5" />,
    color: "bg-amber-500",
    image: "/placeholder.svg?key=bqbyn",
    heroTitle: "لوازم جانبی موتور ویبره",
    heroDescription: "انواع قطعات و لوازم جانبی برای موتورهای ویبره برقی و بادی",
  },
}

const products = {
  electric: [
    {
      id: 1,
      name: "موتور ویبره برقی ۳ فاز ۱.۵ کیلووات",
      price: "۱۲,۵۰۰,۰۰۰",
      image: "/placeholder.svg?key=6dc8d",
      brand: "ایران ویبره",
      power: "1.5 کیلووات",
      voltage: "380 ولت",
      isAvailable: true,
    },
    {
      id: 2,
      name: "موتور ویبره برقی تک فاز ۰.۷۵ کیلووات",
      price: "۷,۲۰۰,۰۰۰",
      image: "/placeholder.svg?key=ovgbo",
      brand: "ایران ویبره",
      power: "0.75 کیلووات",
      voltage: "220 ولت",
      isAvailable: true,
    },
    {
      id: 3,
      name: "موتور ویبره برقی ۳ فاز ۲.۲ کیلووات",
      price: "۱۵,۸۰۰,۰۰۰",
      image: "/placeholder.svg?key=4ghiw",
      brand: "ویبراتک",
      power: "2.2 کیلووات",
      voltage: "380 ولت",
      isAvailable: true,
    },
    {
      id: 4,
      name: "موتور ویبره برقی تک فاز ۰.۳۷ کیلووات",
      price: "۴,۹۰۰,۰۰۰",
      image: "/placeholder.svg?height=300&width=300&query=mini vibration motor",
      brand: "ویبراتک",
      power: "0.37 کیلووات",
      voltage: "220 ولت",
      isAvailable: false,
    },
    {
      id: 5,
      name: "موتور ویبره برقی ۳ فاز ۳ کیلووات",
      price: "۱۸,۵۰۰,۰۰۰",
      image: "/placeholder.svg?height=300&width=300&query=heavy duty vibration motor",
      brand: "ایران ویبره",
      power: "3 کیلووات",
      voltage: "380 ولت",
      isAvailable: true,
    },
    {
      id: 6,
      name: "موتور ویبره برقی تک فاز ۱.۱ کیلووات",
      price: "۹,۲۰۰,۰۰۰",
      image: "/placeholder.svg?height=300&width=300&query=medium vibration motor",
      brand: "ویبراتک",
      power: "1.1 کیلووات",
      voltage: "220 ولت",
      isAvailable: true,
    },
  ],
  pneumatic: [
    {
      id: 1,
      name: "موتور ویبره بادی فشار بالا",
      price: "۸,۹۰۰,۰۰۰",
      image: "/placeholder.svg?key=214tm",
      brand: "پنوماتیک پارس",
      airPressure: "6-8 بار",
      airConsumption: "850 لیتر/دقیقه",
      isAvailable: true,
    },
    {
      id: 2,
      name: "موتور ویبره بادی فشار متوسط",
      price: "۶,۴۰۰,۰۰۰",
      image: "/placeholder.svg?key=gsuym",
      brand: "پنوماتیک پارس",
      airPressure: "4-6 بار",
      airConsumption: "650 لیتر/دقیقه",
      isAvailable: true,
    },
    {
      id: 3,
      name: "موتور ویبره بادی صنعتی سنگین",
      price: "۱۲,۵۰۰,۰۰۰",
      image: "/placeholder.svg?height=300&width=300&query=heavy duty pneumatic vibrator",
      brand: "ایرتک",
      airPressure: "6-8 بار",
      airConsumption: "1200 لیتر/دقیقه",
      isAvailable: true,
    },
    {
      id: 4,
      name: "موتور ویبره بادی کوچک",
      price: "۴,۲۰۰,۰۰۰",
      image: "/placeholder.svg?height=300&width=300&query=small pneumatic vibrator",
      brand: "ایرتک",
      airPressure: "3-5 بار",
      airConsumption: "450 لیتر/دقیقه",
      isAvailable: false,
    },
  ],
  accessories: [
    {
      id: 1,
      name: "کوپلینگ موتور ویبره صنعتی",
      price: "۱,۸۵۰,۰۰۰",
      image: "/placeholder.svg?key=g07ih",
      brand: "تکنو پارت",
      compatibility: "مناسب برای موتورهای 0.75 تا 2.2 کیلووات",
      material: "فولاد آلیاژی",
      isAvailable: true,
    },
    {
      id: 2,
      name: "پایه لاستیکی موتور ویبره",
      price: "۹۵۰,۰۰۰",
      image: "/placeholder.svg?key=p249l",
      brand: "تکنو پارت",
      compatibility: "مناسب برای انواع موتور ویبره",
      material: "لاستیک صنعتی مقاوم",
      isAvailable: true,
    },
    {
      id: 3,
      name: "وزنه تنظیم موتور ویبره",
      price: "۱,۲۰۰,۰۰۰",
      image: "/placeholder.svg?height=300&width=300&query=vibration motor weight",
      brand: "ویبراتک",
      compatibility: "مناسب برای موتورهای برقی",
      material: "چدن",
      isAvailable: true,
    },
    {
      id: 4,
      name: "کنترلر دور موتور ویبره",
      price: "۳,۸۰۰,۰۰۰",
      image: "/placeholder.svg?height=300&width=300&query=vibration motor controller",
      brand: "الکترو کنترل",
      compatibility: "مناسب برای موتورهای برقی تک فاز",
      features: "قابلیت تنظیم فرکانس و شدت ارتعاش",
      isAvailable: true,
    },
    {
      id: 5,
      name: "شیلنگ هوای فشرده مخصوص موتور ویبره",
      price: "۱,۴۵۰,۰۰۰",
      image: "/placeholder.svg?height=300&width=300&query=pneumatic vibrator hose",
      brand: "ایرتک",
      compatibility: "مناسب برای موتورهای بادی",
      length: "5 متر",
      isAvailable: false,
    },
    {
      id: 6,
      name: "فیلتر رگلاتور روغن زن",
      price: "۲,۷۰۰,۰۰۰",
      image: "/placeholder.svg?height=300&width=300&query=pneumatic FRL unit",
      brand: "پنوماتیک پارس",
      compatibility: "مناسب برای موتورهای بادی",
      features: "تنظیم فشار و روغن‌کاری اتوماتیک",
      isAvailable: true,
    },
  ],
}

export default function VibrationMotorSubcategoryClientPage({ type }: { type: string }) {
  const [sortBy, setSortBy] = useState("newest")
  const [priceRange, setPriceRange] = useState([0, 100])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [voltage, setVoltage] = useState<string | null>(null)
  const [airPressure, setAirPressure] = useState<string | null>(null)
  const [availableOnly, setAvailableOnly] = useState(false)

  const info = subcategoryInfo[type]
  let productList = products[type as keyof typeof products] || []

  const brands = Array.from(new Set(productList.map((product) => product.brand)))

  const getIconForType = () => {
    switch (type) {
      case "electric":
        return <Zap className="h-5 w-5 text-white" />
      case "pneumatic":
        return <Wind className="h-5 w-5 text-white" />
      case "accessories":
        return <Settings className="h-5 w-5 text-white" />
      default:
        return <Vibrate className="h-5 w-5 text-white" />
    }
  }

  const getColorForType = () => {
    switch (type) {
      case "electric":
        return "bg-blue-600"
      case "pneumatic":
        return "bg-green-600"
      case "accessories":
        return "bg-amber-600"
      default:
        return "bg-rose-600"
    }
  }

  // Apply filters
  productList = productList.filter((product) => {
    // Price range filter
    const price = Number.parseInt(product.price.replace(/,/g, ""))
    if (price < priceRange[0] * 200000 || price > priceRange[1] * 200000) {
      return false
    }

    // Brand filter
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false
    }

    // Voltage filter (electric)
    if (type === "electric" && voltage) {
      if ((product as any).voltage !== voltage) {
        return false
      }
    }

    // Air pressure filter (pneumatic)
    if (type === "pneumatic" && airPressure) {
      const [minPressure, maxPressure] = (product as any).airPressure.split("-").map(Number)
      if (airPressure === "low" && maxPressure >= 5) {
        return false
      }
      if (airPressure === "high" && minPressure <= 5) {
        return false
      }
    }

    // Availability filter
    if (availableOnly && !product.isAvailable) {
      return false
    }

    return true
  })

  // Apply sorting
  if (sortBy === "price-asc") {
    productList.sort((a, b) => Number.parseInt(a.price.replace(/,/g, "")) - Number.parseInt(b.price.replace(/,/g, "")))
  } else if (sortBy === "price-desc") {
    productList.sort((a, b) => Number.parseInt(b.price.replace(/,/g, "")) - Number.parseInt(a.price.replace(/,/g, "")))
  } else if (sortBy === "popular") {
    // Assuming there's a popularity field, otherwise, can't sort
  } else {
    // Default is "newest", so no sorting needed
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden h-48 md:h-64">
        <Image src={info.image || "/placeholder.svg"} alt={info.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex flex-col justify-center px-8">
          <div className="flex items-center gap-2 mb-2">
            <Link
              href="/products/vibration-motors"
              className="text-white/80 hover:text-white text-sm flex items-center"
            >
              <span>موتور ویبره و لوازم جانبی</span>
              <ArrowLeft className="h-3.5 w-3.5 mr-1" />
            </Link>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">{info.heroTitle}</h1>
          <p className="text-white/90 max-w-2xl text-sm md:text-base">{info.heroDescription}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold mb-4">فیلترها</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">محدوده قیمت</h4>
                  <Slider
                    defaultValue={[0, 100]}
                    max={100}
                    step={1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="my-6"
                  />
                  <div className="flex justify-between text-sm">
                    <span>از {priceRange[0] * 200000} تومان</span>
                    <span>تا {priceRange[1] * 200000} تومان</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">برند</h4>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2 space-x-reverse">
                        <Checkbox
                          id={`brand-${brand}`}
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedBrands([...selectedBrands, brand])
                            } else {
                              setSelectedBrands(selectedBrands.filter((b) => b !== brand))
                            }
                          }}
                        />
                        <label htmlFor={`brand-${brand}`} className="text-sm cursor-pointer">
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {type === "electric" && (
                  <div>
                    <h4 className="text-sm font-medium mb-2">ولتاژ</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Checkbox
                          id="voltage-220"
                          checked={voltage === "220 ولت"}
                          onCheckedChange={(checked) => {
                            setVoltage(checked ? "220 ولت" : null)
                          }}
                        />
                        <label htmlFor="voltage-220" className="text-sm cursor-pointer">
                          220 ولت (تک فاز)
                        </label>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Checkbox
                          id="voltage-380"
                          checked={voltage === "380 ولت"}
                          onCheckedChange={(checked) => {
                            setVoltage(checked ? "380 ولت" : null)
                          }}
                        />
                        <label htmlFor="voltage-380" className="text-sm cursor-pointer">
                          380 ولت (سه فاز)
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {type === "pneumatic" && (
                  <div>
                    <h4 className="text-sm font-medium mb-2">فشار هوا</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Checkbox
                          id="pressure-low"
                          checked={airPressure === "low"}
                          onCheckedChange={(checked) => {
                            setAirPressure(checked ? "low" : null)
                          }}
                        />
                        <label htmlFor="pressure-low" className="text-sm cursor-pointer">
                          کمتر از 5 بار
                        </label>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Checkbox
                          id="pressure-high"
                          checked={airPressure === "high"}
                          onCheckedChange={(checked) => {
                            setAirPressure(checked ? "high" : null)
                          }}
                        />
                        <label htmlFor="pressure-high" className="text-sm cursor-pointer">
                          بیشتر از 5 بار
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-sm font-medium mb-2">وضعیت موجودی</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Checkbox id="available" checked={availableOnly} onCheckedChange={setAvailableOnly} />
                      <label htmlFor="available" className="text-sm cursor-pointer">
                        فقط کالاهای موجود
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full mt-6">اعمال فیلترها</Button>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div className="md:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <div className={`${getColorForType()} p-1.5 rounded-md`}>{getIconForType()}</div>
              {info.name}
              <Badge variant="outline" className="mr-2">
                {productList.length} محصول
              </Badge>
            </h2>
            <div className="flex items-center gap-2">
              <select
                className="text-sm border rounded-md p-1.5"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">جدیدترین</option>
                <option value="price-asc">ارزان‌ترین</option>
                <option value="price-desc">گران‌ترین</option>
                <option value="popular">محبوب‌ترین</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productList.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow group">
                  <div className="relative h-48 bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    />
                    {!product.isAvailable && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        ناموجود
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="text-xs text-muted-foreground mb-1">{product.brand}</div>
                    <h3 className="font-medium mb-2 line-clamp-2 h-12">{product.name}</h3>

                    <div className="text-xs text-muted-foreground space-y-1 mt-2 mb-4">
                      {type === "electric" && (
                        <>
                          <div className="flex justify-between">
                            <span>توان:</span>
                            <span>{(product as any).power}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>ولتاژ:</span>
                            <span>{(product as any).voltage}</span>
                          </div>
                        </>
                      )}

                      {type === "pneumatic" && (
                        <>
                          <div className="flex justify-between">
                            <span>فشار هوا:</span>
                            <span>{(product as any).airPressure}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>مصرف هوا:</span>
                            <span>{(product as any).airConsumption}</span>
                          </div>
                        </>
                      )}

                      {type === "accessories" && (
                        <>
                          <div className="flex justify-between">
                            <span>سازگاری:</span>
                            <span className="text-left">{(product as any).compatibility}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>جنس:</span>
                            <span>{(product as any).material || (product as any).features}</span>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <div className="font-bold text-lg">
                        {product.price} <span className="text-xs">تومان</span>
                      </div>
                      <Button
                        size="sm"
                        variant={product.isAvailable ? "default" : "outline"}
                        disabled={!product.isAvailable}
                      >
                        {product.isAvailable ? "افزودن به سبد" : "ناموجود"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
