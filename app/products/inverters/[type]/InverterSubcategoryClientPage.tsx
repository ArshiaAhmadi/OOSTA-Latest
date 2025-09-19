"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Cpu,
  Zap,
  Weight,
  Gauge,
  CableCarIcon as Elevator,
  Filter,
  SlidersHorizontal,
  ShoppingCart,
  Heart,
} from "lucide-react"
import Image from "next/image"

const subcategoryData = {
  "three-phase": {
    name: "اینورتر ۳ فاز",
    icon: <Cpu className="h-8 w-8 text-blue-600" />,
    description: "اینورترهای سه فاز برای کاربردهای صنعتی و تجاری با توان بالا",
    features: ["کنترل دقیق سرعت موتور", "بازده انرژی بالا", "قابلیت اتصال به شبکه سه فاز", "محافظت در برابر اضافه بار"],
    applications: ["سیستم‌های تهویه مطبوع صنعتی", "پمپ‌های آب صنعتی", "خطوط تولید", "ماشین‌آلات صنعتی سنگین"],
    standards: ["IEC 61800-5-1", "EN 61800-3", "ISO 9001"],
    image: "/placeholder.svg?height=200&width=300&query=industrial+three+phase+inverter",
    color: "blue",
  },
  "single-phase": {
    name: "اینورتر تک فاز",
    icon: <Zap className="h-8 w-8 text-yellow-600" />,
    description: "اینورترهای تک فاز برای کاربردهای خانگی و تجاری کوچک",
    features: ["نصب آسان", "کارکرد کم صدا", "حفاظت در برابر ولتاژ بالا و پایین", "طراحی فشرده"],
    applications: ["پمپ‌های آب خانگی", "سیستم‌های تهویه", "ماشین‌آلات کوچک", "تجهیزات اداری"],
    standards: ["IEC 61000-3-2", "EN 55011", "CE"],
    image: "/placeholder.svg?height=200&width=300&query=single+phase+inverter",
    color: "yellow",
  },
  "light-duty": {
    name: "اینورتر سبک کار",
    icon: <Weight className="h-8 w-8 text-green-600" />,
    description: "اینورترهای مناسب برای کاربردهای سبک و متوسط با فرکانس کاری متغیر",
    features: ["وزن سبک", "مصرف انرژی بهینه", "عملکرد پایدار", "قیمت مقرون به صرفه"],
    applications: ["تجهیزات کشاورزی کوچک", "ماشین‌آلات سبک کارگاهی", "سیستم‌های تهویه کوچک", "پمپ‌های آب خانگی"],
    standards: ["IEC 60529", "EN 61000-6-3", "ISO 14001"],
    image: "/placeholder.svg?height=200&width=300&query=light+duty+inverter",
    color: "green",
  },
  "heavy-duty": {
    name: "اینورتر سنگین کار",
    icon: <Gauge className="h-8 w-8 text-red-600" />,
    description: "اینورترهای قدرتمند برای کاربردهای سنگین صنعتی با قابلیت تحمل بار بالا",
    features: ["تحمل بار سنگین", "خنک‌کنندگی پیشرفته", "حفاظت حرارتی قوی", "قابلیت کار در شرایط سخت محیطی"],
    applications: ["صنایع فولاد و معدن", "کمپرسورهای بزرگ", "سیستم‌های حمل و نقل سنگین", "خطوط تولید پرفشار"],
    standards: ["IEC 61800-5-2", "EN 60204-1", "UL 508C"],
    image: "/placeholder.svg?height=200&width=300&query=heavy+duty+industrial+inverter",
    color: "red",
  },
  elevator: {
    name: "اینورتر آسانسور",
    icon: <Elevator className="h-8 w-8 text-purple-600" />,
    description: "اینورترهای تخصصی برای کنترل موتور آسانسور با قابلیت‌های ایمنی و راحتی سفر",
    features: ["شتاب و توقف نرم", "دقت توقف در طبقات", "سیستم نجات اضطراری", "کاهش مصرف انرژی"],
    applications: ["آسانسورهای مسافربری", "آسانسورهای باربری", "پله‌های برقی", "بالابرهای صنعتی"],
    standards: ["EN 81-20", "EN 81-50", "IEC 61800-5-2", "ISO 22201"],
    image: "/placeholder.svg?height=200&width=300&query=elevator+inverter+drive",
    color: "purple",
  },
}

// Sample products for each subcategory
const sampleProducts = [
  {
    id: 1,
    name: "اینورتر صنعتی LS مدل iG5A",
    brand: "LS",
    power: "7.5 کیلووات",
    voltage: "380-480 ولت",
    price: "۱۲,۵۰۰,۰۰۰ تومان",
    image: "/placeholder.svg?height=200&width=200&query=LS+iG5A+inverter",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 2,
    name: "اینورتر دانفوس مدل FC51",
    brand: "Danfoss",
    power: "5.5 کیلووات",
    voltage: "380-480 ولت",
    price: "۱۱,۸۰۰,۰۰۰ تومان",
    image: "/placeholder.svg?height=200&width=200&query=Danfoss+FC51+inverter",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 3,
    name: "اینورتر زیمنس مدل V20",
    brand: "Siemens",
    power: "4 کیلووات",
    voltage: "380-480 ولت",
    price: "۹,۷۰۰,۰۰۰ تومان",
    image: "/placeholder.svg?height=200&width=200&query=Siemens+V20+inverter",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 4,
    name: "اینورتر ABB مدل ACS310",
    brand: "ABB",
    power: "11 کیلووات",
    voltage: "380-480 ولت",
    price: "۱۵,۹۰۰,۰۰۰ تومان",
    image: "/placeholder.svg?height=200&width=200&query=ABB+ACS310+inverter",
    rating: 4.6,
    inStock: false,
  },
  {
    id: 5,
    name: "اینورتر اشنایدر مدل ATV310",
    brand: "Schneider",
    power: "2.2 کیلووات",
    voltage: "380-480 ولت",
    price: "۷,۵۰۰,۰۰۰ تومان",
    image: "/placeholder.svg?height=200&width=200&query=Schneider+ATV310+inverter",
    rating: 4.4,
    inStock: true,
  },
  {
    id: 6,
    name: "اینورتر دلتا مدل VFD-E",
    brand: "Delta",
    power: "15 کیلووات",
    voltage: "380-480 ولت",
    price: "۱۸,۲۰۰,۰۰۰ تومان",
    image: "/placeholder.svg?height=200&width=200&query=Delta+VFD-E+inverter",
    rating: 4.3,
    inStock: true,
  },
]

interface InverterSubcategoryClientPageProps {
  type: string
}

export default function InverterSubcategoryClientPage({ type }: InverterSubcategoryClientPageProps) {
  const [activeTab, setActiveTab] = useState("products")
  const subcategory = subcategoryData[type as keyof typeof subcategoryData]

  if (!subcategory) {
    return <div>زیردسته مورد نظر یافت نشد.</div>
  }

  const colorClass = `text-${subcategory.color}-600`

  return (
    <div className="container mx-auto py-8 px-4 md:px-6 rtl">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          {subcategory.icon}
          <h1 className="text-3xl md:text-4xl font-bold">{subcategory.name}</h1>
        </div>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl">{subcategory.description}</p>
      </div>

      <Tabs defaultValue="products" className="mb-12" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          <TabsTrigger value="products">محصولات</TabsTrigger>
          <TabsTrigger value="features">ویژگی‌ها</TabsTrigger>
          <TabsTrigger value="applications">کاربردها</TabsTrigger>
          <TabsTrigger value="guide">راهنمای خرید</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              <span className="font-medium">فیلترها:</span>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <SlidersHorizontal className="h-4 w-4" />
                <span>پیشرفته</span>
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <span>مرتب‌سازی بر اساس:</span>
              <select className="border rounded-md p-1 text-sm">
                <option>پرفروش‌ترین</option>
                <option>جدیدترین</option>
                <option>ارزان‌ترین</option>
                <option>گران‌ترین</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProducts.map((product) => (
              <Card key={product.id} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge
                      variant={product.inStock ? "default" : "outline"}
                      className={product.inStock ? "bg-green-500" : ""}
                    >
                      {product.inStock ? "موجود" : "ناموجود"}
                    </Badge>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-center mb-4">
                    <div className="relative h-40 w-40">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">برند:</span>
                      <span>{product.brand}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">توان:</span>
                      <span>{product.power}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">ولتاژ:</span>
                      <span>{product.voltage}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="ml-1">{product.rating}</span>
                    </div>
                    <span className="font-bold text-lg">{product.price}</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0 flex gap-2">
                  <Button className="flex-1" disabled={!product.inStock}>
                    <ShoppingCart className="h-4 w-4 ml-2" />
                    افزودن به سبد
                  </Button>
                  <Button variant="outline" className="flex-1">
                    جزئیات
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="mx-1">
              1
            </Button>
            <Button variant="outline" className="mx-1">
              2
            </Button>
            <Button variant="outline" className="mx-1">
              3
            </Button>
            <Button variant="outline" className="mx-1">
              ...
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="features">
          <Card>
            <CardHeader>
              <CardTitle>ویژگی‌های {subcategory.name}</CardTitle>
              <CardDescription>مشخصات فنی و قابلیت‌های کلیدی</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">ویژگی‌های کلیدی</h3>
                  <ul className="list-disc list-inside space-y-3">
                    {subcategory.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={subcategory.image || "/placeholder.svg"}
                    alt={subcategory.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">مشخصات فنی عمومی</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">ورودی</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <span className="font-medium">ولتاژ:</span> بسته به مدل (معم��لاً 220V یا 380-480V)
                      </li>
                      <li>
                        <span className="font-medium">فرکانس:</span> 50/60 هرتز
                      </li>
                      <li>
                        <span className="font-medium">محدوده تغییرات ولتاژ:</span> -15% تا +10%
                      </li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">خروجی</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <span className="font-medium">ولتاژ:</span> 0 تا ولتاژ ورودی
                      </li>
                      <li>
                        <span className="font-medium">فرکانس:</span> 0 تا 400 هرتز
                      </li>
                      <li>
                        <span className="font-medium">روش کنترل:</span> V/F، کنترل برداری
                      </li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">حفاظت‌ها</h4>
                    <ul className="space-y-2 text-sm">
                      <li>حفاظت اضافه جریان</li>
                      <li>حفاظت اضافه ولتاژ</li>
                      <li>حفاظت حرارتی</li>
                      <li>حفاظت اتصال کوتاه</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">ارتباطات</h4>
                    <ul className="space-y-2 text-sm">
                      <li>RS-485 (پروتکل Modbus)</li>
                      <li>ورودی‌های آنالوگ و دیجیتال</li>
                      <li>خروجی‌های رله‌ای</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="applications">
          <Card>
            <CardHeader>
              <CardTitle>کاربردهای {subcategory.name}</CardTitle>
              <CardDescription>موارد استفاده و صنایع مرتبط</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">کاربردهای اصلی</h3>
                  <ul className="list-disc list-inside space-y-3">
                    {subcategory.applications.map((app, index) => (
                      <li key={index}>{app}</li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&query=${type}+inverter+application`}
                    alt={`کاربردهای ${subcategory.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">مزایای استفاده</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">صرفه‌جویی در انرژی</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">با کنترل دقیق سرعت موتور، مصرف انرژی را تا 30% کاهش می‌دهد.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">افزایش طول عمر تجهیزات</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        با راه‌اندازی نرم و کنترل دقیق، استهلاک موتور و تجهیزات مکانیکی را کاهش می‌دهد.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">کنترل دقیق فرآیند</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">امکان تنظیم دقیق سرعت و گشتاور برای بهبود کیفیت محصول و فرآیند تولید.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guide">
          <Card>
            <CardHeader>
              <CardTitle>راهنمای خرید {subcategory.name}</CardTitle>
              <CardDescription>نکات مهم برای انتخاب محصول مناسب</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">چگونه اینورتر مناسب را انتخاب کنیم؟</h3>
                  <p>برای انتخاب اینورتر مناسب، باید به موارد زیر توجه کنید:</p>
                  <ol className="list-decimal list-inside mt-2 space-y-2">
                    <li>
                      <span className="font-medium">توان موتور:</span> اینورتر باید متناسب با توان موتور انتخاب شود.
                    </li>
                    <li>
                      <span className="font-medium">نوع کاربرد:</span> سبک، متوسط یا سنگین بودن کار تعیین‌کننده نوع
                      اینورتر است.
                    </li>
                    <li>
                      <span className="font-medium">شرایط محیطی:</span> دما، رطوبت و آلودگی محیط در انتخاب اینورتر مؤثر
                      است.
                    </li>
                    <li>
                      <span className="font-medium">نیازهای کنترلی:</span> دقت کنترل سرعت، گشتاور و موقعیت مورد نیاز را
                      مشخص کنید.
                    </li>
                    <li>
                      <span className="font-medium">قابلیت‌های ارتباطی:</span> نیاز به اتصال به سیستم‌های کنترل و
                      مانیتورینگ را بررسی کنید.
                    </li>
                  </ol>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">فرمول محاسبه توان اینورتر</h3>
                  <p className="mb-2">برای محاسبه توان مورد نیاز اینورتر، می‌توانید از فرمول زیر استفاده کنید:</p>
                  <div className="bg-white dark:bg-gray-700 p-3 rounded border text-center mb-2">
                    <p>توان اینورتر (kW) = توان موتور (kW) × ضریب اطمینان (معمولاً 1.1 ت�� 1.5)</p>
                  </div>
                  <p className="text-sm">
                    توجه: برای کاربردهای با گشتاور راه‌اندازی بالا یا تغییرات بار زیاد، ضریب اطمینان بالاتری در نظر
                    بگیرید.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">استانداردهای مهم</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {subcategory.standards.map((standard, index) => (
                      <Badge key={index} variant="secondary">
                        {standard}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm">
                    اطمینان حاصل کنید که اینورتر انتخابی شما با استانداردهای صنعتی و ایمنی مطابقت دارد.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">برندهای معتبر</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="border rounded-lg p-3 text-center">
                      <p className="font-medium">ABB</p>
                    </div>
                    <div className="border rounded-lg p-3 text-center">
                      <p className="font-medium">Siemens</p>
                    </div>
                    <div className="border rounded-lg p-3 text-center">
                      <p className="font-medium">Schneider Electric</p>
                    </div>
                    <div className="border rounded-lg p-3 text-center">
                      <p className="font-medium">Danfoss</p>
                    </div>
                    <div className="border rounded-lg p-3 text-center">
                      <p className="font-medium">LS</p>
                    </div>
                    <div className="border rounded-lg p-3 text-center">
                      <p className="font-medium">Delta</p>
                    </div>
                    <div className="border rounded-lg p-3 text-center">
                      <p className="font-medium">Yaskawa</p>
                    </div>
                    <div className="border rounded-lg p-3 text-center">
                      <p className="font-medium">Mitsubishi</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">دریافت مشاوره رایگان</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
