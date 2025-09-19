"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Flame, Factory, Gauge, Battery, Wind, Fuel } from "lucide-react"
import Image from "next/image"

const subcategoryData = {
  "diesel-generator": {
    title: "دیزل ژنراتور",
    description: "ژنراتورهای دیزلی با قدرت و کارایی بالا برای کاربردهای صنعتی و تجاری",
    icon: <Fuel className="h-10 w-10 text-amber-600" />,
    heroImage: "/placeholder.svg?height=400&width=800&query=diesel+generator+industrial",
    features: [
      "قدرت و گشتاور بالا",
      "مصرف سوخت بهینه",
      "عمر طولانی و دوام بالا",
      "قابلیت کارکرد مداوم",
      "مناسب برای بارهای سنگین",
      "سیستم خنک‌کننده کارآمد",
      "قابلیت نصب سیستم کنترل خودکار",
    ],
    applications: [
      "نیروگاه‌های برق اضطراری",
      "بیمارستان‌ها و مراکز درمانی",
      "مراکز داده و سرور",
      "کارخانه‌ها و صنایع سنگین",
      "ساختمان‌های تجاری بزرگ",
      "معادن و سایت‌های حفاری",
      "پروژه‌های عمرانی بزرگ",
    ],
    standards: ["استاندارد ISO 8528", "استاندارد IEC 60034", "استاندارد NEMA MG1", "استاندارد EPA Tier 4"],
    products: [
      {
        id: 1,
        name: "دیزل ژنراتور صنعتی 500 کیلووات",
        power: "500 کیلووات",
        brand: "کاترپ��لار",
        price: "۲,۵۰۰,۰۰۰,۰۰۰ تومان",
        image: "/placeholder.svg?height=200&width=300&query=caterpillar+diesel+generator",
      },
      {
        id: 2,
        name: "دیزل ژنراتور 250 کیلووات با کابین",
        power: "250 کیلووات",
        brand: "پرکینز",
        price: "۱,۲۰۰,۰۰۰,۰۰۰ تومان",
        image: "/placeholder.svg?height=200&width=300&query=perkins+diesel+generator",
      },
      {
        id: 3,
        name: "دیزل ژنراتور 100 کیلووات سایلنت",
        power: "100 کیلووات",
        brand: "ولوو",
        price: "۷۵۰,۰۰۰,۰۰۰ تومان",
        image: "/placeholder.svg?height=200&width=300&query=volvo+diesel+generator",
      },
      {
        id: 4,
        name: "دیزل ژنراتور 50 کیلووات قابل حمل",
        power: "50 کیلووات",
        brand: "کامینز",
        price: "۴۵۰,۰۰۰,۰۰۰ تومان",
        image: "/placeholder.svg?height=200&width=300&query=cummins+portable+diesel+generator",
      },
    ],
  },
  "gasoline-generator": {
    title: "ژنراتور بنزینی",
    description: "ژنراتورهای بنزینی قابل حمل و کارآمد برای مصارف خانگی و تجاری کوچک",
    icon: <Flame className="h-10 w-10 text-red-500" />,
    heroImage: "/placeholder.svg?height=400&width=800&query=gasoline+generator+portable",
    features: [
      "وزن سبک و قابل حمل",
      "راه‌اندازی آسان",
      "قیمت مناسب",
      "تعمیر و نگهداری ساده",
      "دسترسی آسان به سوخت",
      "مناسب برای مصارف متناوب",
      "سطح صدای متوسط",
    ],
    applications: [
      "مصارف خانگی",
      "کارگاه‌های کوچک",
      "فعالیت‌های تفریحی و کمپینگ",
      "شرایط اضطراری و قطعی برق",
      "ساخت و ساز کوچک",
      "رویدادهای خارج از شهر",
      "مغازه‌ها و فروشگاه‌های کوچک",
    ],
    standards: ["استاندارد EPA", "استاندارد CARB", "استاندارد CE", "استاندارد ISO 8528-13"],
    products: [
      {
        id: 1,
        name: "ژنراتور بنزینی 5 کیلووات",
        power: "5 کیلووات",
        brand: "هوندا",
        price: "۳۵,۰۰۰,۰۰۰ تومان",
        image: "/placeholder.svg?height=200&width=300&query=honda+gasoline+generator",
      },
      {
        id: 2,
        name: "ژنراتور بنزینی 3 کیلووات قابل حمل",
        power: "3 کیلووات",
        brand: "یاماها",
        price: "۲۵,۰۰۰,۰۰۰ تومان",
        image: "/placeholder.svg?height=200&width=300&query=yamaha+portable+generator",
      },
      {
        id: 3,
        name: "ژنراتور بنزینی 2 کیلووات اینورتر",
        power: "2 کیلووات",
        brand: "هیوندای",
        price: "۱۸,۰۰۰,۰۰۰ تومان",
        image: "/placeholder.svg?height=200&width=300&query=hyundai+inverter+generator",
      },
      {
        id: 4,
        name: "ژنراتور بنزینی 7 کیلووات",
        power: "7 کیلووات",
        brand: "بریگز و استراتون",
        price: "۴۵,۰۰۰,۰۰۰ تومان",
        image: "/placeholder.svg?height=200&width=300&query=briggs+stratton+generator",
      },
    ],
  },
  // اطلاعات مشابه برای سایر زیردسته‌ها
  "gas-generator": {
    title: "ژنراتور گازی",
    description: "ژنراتورهای گازی با آلایندگی کمتر و کارایی بالا برای مصارف خانگی و تجاری",
    icon: <Wind className="h-10 w-10 text-blue-500" />,
    heroImage: "/placeholder.svg?height=400&width=800&query=gas+generator+system",
    features: [
      "آلایندگی کمتر نسبت به سایر سوخت‌ها",
      "هزینه سوخت پایین",
      "عملکرد بی‌صدا",
      "بازده بالا",
      "عمر طولانی موتور",
      "نگهداری آسان",
      "مناسب برای کارکرد مداوم",
    ],
    applications: [
      "مراکز تجاری",
      "بیمارستان‌ها",
      "هتل‌ها",
      "مجتمع‌های مسکونی",
      "ادارات و ساختمان‌های اداری",
      "مراکز آموزشی",
      "صنایع غذایی",
    ],
    standards: ["استاندارد ISO 8528", "استاندارد IEC 60034", "استاندارد NEMA MG1", "استاندارد EPA"],
    products: [
      {
        id: 1,
        name: "ژنراتور گازی 100 کیلووات",
        power: "100 کیلووات",
        brand: "جنرک",
        price: "۸۵۰,۰۰۰,۰۰۰ تومان",
        image: "/placeholder.svg?height=200&width=300&query=generac+gas+generator",
      },
      {
        id: 2,
        name: "ژنراتور گازی 50 کیلووات",
        power: "50 کیلووات",
        brand: "کوهلر",
        price: "۴۸۰,۰۰۰,۰۰۰ تومان",
        image: "/placeholder.svg?height=200&width=300&query=kohler+gas+generator",
      },
      {
        id: 3,
        name: "ژنراتور گازی 25 کیلووات",
        power: "25 کیلووات",
        brand: "ام تی یو",
        price: "۲۸۰,۰۰۰,۰۰۰ تومان",
        image: "/placeholder.svg?height=200&width=300&query=mtu+gas+generator",
      },
      {
        id: 4,
        name: "ژنراتور گازی 200 کیلووات",
        power: "200 کیلووات",
        brand: "کاترپیلار",
        price: "۱,۵۰۰,۰۰۰,۰۰۰ تومان",
        image: "/placeholder.svg?height=200&width=300&query=caterpillar+gas+generator",
      },
    ],
  },
  "gasoline-power-engine": {
    title: "موتور برق بنزینی",
    description: "موتورهای برق بنزینی قابل حمل و کارآمد برای مصارف خانگی و تفریحی",
    icon: <Flame className="h-10 w-10 text-red-500" />,
    heroImage: "/placeholder.svg?height=400&width=800&query=portable+gasoline+power+engine",
    features: [
      "قابل حمل و سبک",
      "راه‌اندازی آسان",
      "قیمت مناسب",
      "دسترسی آسان به سوخت",
      "تعمیر و نگهداری ساده",
      "مناسب برای مصارف کوتاه مدت",
      "تنوع در اندازه و توان",
    ],
    applications: [
      "مصارف خانگی",
      "کارگاه‌های کوچک",
      "فعالیت‌های تفریحی و کمپینگ",
      "شرایط اضطراری و قطعی برق",
      "ابزارهای برقی قابل حمل",
      "باغبانی و کشاورزی کوچک",
      "رویدادهای خارج از شهر",
    ],
    standards: ["استاندارد EPA", "استاندارد CARB", "استاندارد CE", "استاندارد ISO 8528-13"],
    products: [
      {
        id: 1,
        name: "موتور برق بنزینی 3 کیلووات",
        power: "3 کیلووات",
        brand: "هوندا",
        price: "۲۲,۰۰۰,۰۰۰ تومان",
        image: "/placeholder.svg?height=200&width=300&query=honda+portable+power+engine",
      },
      {
        id: 2,
        name: "موتور برق بنزینی 2 کیلووات",
        power: "2 کیلووات",
        brand: "یاماها",
        price: "۱۸,۰۰۰,۰۰۰ تومان",
        image: "/placeholder.svg?height=200&width=300&query=yamaha+power+engine",
      },
      {
        id: 3,
        name: "موتور برق بنزینی 5 کیلووات",
        power: "5 کیلووات",
        brand: "هیوندای",
        price: "۳۲,۰۰۰,۰۰۰ تومان",
        image: "/placeholder.svg?height=200&width=300&query=hyundai+power+engine",
      },
      {
        id: 4,
        name: "موتور برق بنزینی 1 کیلووات",
        power: "1 کیلووات",
        brand: "رابین",
        price: "۱۲,۰۰۰,۰۰۰ تومان",
        image: "/placeholder.svg?height=200&width=300&query=robin+small+power+engine",
      },
    ],
  },
}

type SubcategoryProps = {
  type: string
}

export default function GeneratorSubcategoryClientPage({ type }: SubcategoryProps) {
  const [activeTab, setActiveTab] = useState("products")

  // اگر نوع زیردسته در دیتا موجود نباشد، از دیزل ژنراتور به عنوان پیش‌فرض استفاده می‌کنیم
  const subcategory = subcategoryData[type as keyof typeof subcategoryData] || subcategoryData["diesel-generator"]

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-center justify-between mb-10">
        <div className="text-center md:text-right mb-6 md:mb-0">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <h1 className="text-3xl md:text-4xl font-bold ml-3">{subcategory.title}</h1>
            {subcategory.icon}
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">{subcategory.description}</p>
        </div>
      </div>

      <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-10">
        <Image
          src={subcategory.heroImage || "/placeholder.svg"}
          alt={subcategory.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className="text-white p-6 md:p-10 max-w-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{subcategory.title}</h2>
            <p className="text-gray-200">{subcategory.description}</p>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-10">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="products" className="text-lg py-3">
            محصولات
          </TabsTrigger>
          <TabsTrigger value="features" className="text-lg py-3">
            ویژگی‌ها و کاربردها
          </TabsTrigger>
          <TabsTrigger value="standards" className="text-lg py-3">
            استانداردها
          </TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subcategory.products.map((product) => (
              <Card key={product.id} className="h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">توان:</span>
                      <span>{product.power}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">برند:</span>
                      <span>{product.brand}</span>
                    </div>
                    <div className="flex justify-between font-bold mt-2">
                      <span>قیمت:</span>
                      <span className="text-blue-600 dark:text-blue-400">{product.price}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2 w-full">
                    <Button className="flex-1">افزودن به سبد</Button>
                    <Button variant="outline" className="flex-1">
                      جزئیات
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="features" className="mt-6">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Gauge className="ml-2 h-6 w-6 text-blue-600" />
                  ویژگی‌های اصلی
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {subcategory.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 ml-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Factory className="ml-2 h-6 w-6 text-indigo-600" />
                  کاربردها
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {subcategory.applications.map((application, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 ml-2">•</span>
                      {application}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="standards" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Battery className="ml-2 h-6 w-6 text-amber-600" />
                استانداردها و گواهینامه‌ها
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {subcategory.standards.map((standard, index) => (
                  <Badge key={index} variant="outline" className="text-base py-2 px-4 bg-gray-50 dark:bg-gray-800">
                    {standard}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 mt-12">
        <h2 className="text-2xl font-bold mb-4">راهنمای خرید {subcategory.title}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">نکات مهم قبل از خرید:</h3>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>توان مورد نیاز خود را محاسبه کنید</li>
              <li>به مصرف سوخت دستگاه توجه کنید</li>
              <li>سطح صدای تولیدی را در نظر بگیرید</li>
              <li>قابلیت حمل و نقل را بررسی کنید</li>
              <li>گارانتی و خدمات پس از فروش را بررسی کنید</li>
              <li>برند معتبر انتخاب کنید</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">خدمات اوستا صنعت:</h3>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>مشاوره رایگان قبل از خرید</li>
              <li>نصب و راه‌اندازی توسط متخصصین</li>
              <li>گارانتی اصالت کالا</li>
              <li>خدمات پس از فروش گسترده</li>
              <li>امکان بازدید از نمایشگاه</li>
              <li>ارسال به سراسر کشور</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
