"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ChevronRight,
  Info,
  Star,
  TrendingUp,
  Truck,
  Award,
  PenToolIcon as Tool,
  Filter,
  Droplet,
  Zap,
  Thermometer,
  Settings,
  Gauge,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// کامپوننت نمایش برند
const BrandShowcase = () => {
  const brands = [
    {
      name: "پمپیران",
      logo: "/placeholder.svg?key=fl186",
      description: "تولید کننده انواع پمپ‌های صنعتی با کیفیت بالا",
    },
    {
      name: "ابارا",
      logo: "/placeholder.svg?height=60&width=120&query=ابارا لوگو",
      description: "برند ژاپنی با سابقه طولانی در تولید پمپ‌های با کیفیت",
    },
    {
      name: "گراندفوس",
      logo: "/placeholder.svg?height=60&width=120&query=گراندفوس لوگو",
      description: "پیشرو در تکنولوژی پمپ‌های مدرن و کم مصرف",
    },
    {
      name: "پنتاکس",
      logo: "/placeholder.svg?height=60&width=120&query=پنتاکس لوگو",
      description: "متخصص در پمپ‌های خانگی �� نیمه صنعتی",
    },
    {
      name: "داب",
      logo: "/placeholder.svg?height=60&width=120&query=داب لوگو",
      description: "ارائه دهنده راهکارهای پمپاژ پیشرفته",
    },
    {
      name: "لوارا",
      logo: "/placeholder.svg?height=60&width=120&query=لوارا لوگو",
      description: "تولید کننده ایتالیایی پمپ‌های با کیفیت",
    },
  ]

  return (
    <div className="my-8">
      <h3 className="text-2xl font-bold mb-6 text-right">برندهای برتر پمپ</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center"
          >
            <Image
              src={brand.logo || "/placeholder.svg"}
              alt={`${brand.name} لوگو`}
              width={120}
              height={60}
              className="object-contain h-16"
            />
            <h4 className="mt-3 font-semibold text-center">{brand.name}</h4>
            <p className="text-xs text-gray-600 mt-2 text-center">{brand.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// کامپوننت راهنمای خرید
const BuyingGuide = () => {
  return (
    <Card className="my-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center gap-2 text-right">
          <Info className="h-6 w-6 text-blue-600" />
          راهنمای خرید پمپ
        </CardTitle>
        <CardDescription className="text-right">نکات مهم برای انتخاب پمپ مناسب با نیاز شما</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-right">چگونه دبی مورد نیاز پمپ را محاسبه کنیم؟</AccordionTrigger>
            <AccordionContent className="text-right">
              برای محاسبه دبی مورد نیاز، باید میزان آب مصرفی در واحد زمان را مشخص کنید. برای مصارف خانگی معمولاً بین 1 تا
              3 متر مکعب در ساعت کافی است، اما برای مصارف صنعتی باید محاسبات دقیق‌تری انجام شود.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-right">هد پمپ چیست و چگونه آن را تعیین کنیم؟</AccordionTrigger>
            <AccordionContent className="text-right">
              هد پمپ به معنای ارتفاع یا فشاری است که پمپ می‌تواند آب را به آن برساند. برای محاسبه هد مورد نیاز، باید
              ارتفاع عمودی از سطح آب تا بالاترین نقطه مصرف، به علاوه افت فشار در مسیر لوله‌ها را محاسبه کنید.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-right">
              تفاوت پمپ‌های سانتریفیوژ و پمپ‌های جابجایی مثبت چیست؟
            </AccordionTrigger>
            <AccordionContent className="text-right">
              پمپ‌های سانتریفیوژ با استفاده از نیروی گریز از مرکز کار می‌کنند و برای کاربردهایی با دبی بالا و فشار متوسط
              مناسب هستند. پمپ‌های جابجایی مثبت با حرکت مکانیکی سیال را جابجا می‌کنند و برای کاربردهایی با فشار بالا و دبی
              کم مناسب‌ترند.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-right">چگونه بین پمپ آب سرد و پمپ آب داغ انتخاب کنیم؟</AccordionTrigger>
            <AccordionContent className="text-right">
              دمای سیال یکی از مهمترین فاکتورها در انتخاب پمپ است. پمپ‌های معمولی برای آب تا دمای 80 درجه سانتیگراد مناسب
              هستند، اما برای دماهای بالاتر باید از پمپ‌های مخصوص آب داغ استفاده کنید که دارای آب‌بندهای خاص و مواد مقاوم
              به حرارت هستند.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-right">راندمان پمپ چیست و چرا اهمیت دارد؟</AccordionTrigger>
            <AccordionContent className="text-right">
              راندمان پمپ نسبت توان مفید خروجی به توان ورودی است. پمپ با راندمان بالاتر، مصرف برق کمتری دارد و در
              درازمدت هزینه‌های عملیاتی را کاهش می‌دهد. معمولاً پمپ‌های با کیفیت‌تر راندمان بالاتری دارند.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-6 text-center">
          <Button variant="outline" className="gap-2">
            <Info className="h-4 w-4" />
            دانلود راهنمای جامع انتخاب پمپ
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// کامپوننت نمایش کاربردها
const ApplicationShowcase = () => {
  const applications = [
    {
      title: "صنایع نفت و گاز",
      icon: <Zap className="h-8 w-8 text-amber-500" />,
      description: "پمپ‌های مخصوص انتقال نفت خام، مواد شیمیایی و فرآورده‌های نفتی با مقاومت بالا در برابر خوردگی",
      image: "/placeholder.svg?height=200&width=300&query=پمپ در صنعت نفت و گاز",
    },
    {
      title: "تأسیسات ساختمانی",
      icon: <Settings className="h-8 w-8 text-blue-500" />,
      description: "پمپ‌های آبرسانی، سیرکولاتور، بوستر پمپ و پمپ‌های فاضلابی برای ساختمان‌های مسکونی و تجاری",
      image: "/placeholder.svg?height=200&width=300&query=پمپ در تاسیسات ساختمانی",
    },
    {
      title: "کشاورزی و آبیاری",
      icon: <Droplet className="h-8 w-8 text-green-500" />,
      description: "پمپ‌های شناور، سانتریفیوژ و دیزلی برای آبیاری مزارع، باغات و گلخانه‌ها",
      image: "/placeholder.svg?height=200&width=300&query=پمپ در کشاورزی و آبیاری",
    },
    {
      title: "صنایع غذایی",
      icon: <Thermometer className="h-8 w-8 text-red-500" />,
      description: "پمپ‌های بهداشتی مخصوص انتقال مواد غذایی، نوشیدنی‌ها و محصولات لبنی",
      image: "/placeholder.svg?height=200&width=300&query=پمپ در صنایع غذایی",
    },
  ]

  return (
    <div className="my-8">
      <h3 className="text-2xl font-bold mb-6 text-right">کاربردهای پمپ در صنایع مختلف</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {applications.map((app, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="relative h-48">
              <Image src={app.image || "/placeholder.svg"} alt={app.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                {app.icon}
                <h4 className="text-xl font-semibold">{app.title}</h4>
              </div>
              <p className="text-gray-700 text-right">{app.description}</p>
              <Button variant="link" className="mt-2 p-0 h-auto text-blue-600 flex items-center gap-1">
                مشاهده محصولات مرتبط
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// کامپوننت نظرات مشتریان
const CustomerTestimonials = () => {
  const testimonials = [
    {
      name: "مهندس علی محمدی",
      company: "شرکت تأسیسات صنعتی پارس",
      comment:
        "ما بیش از 5 سال است که از پمپ‌های صنعتی اوستا استفاده می‌کنیم. کیفیت محصولات و خدمات پس از فروش عالی بوده و تا به حال هیچ مشکلی نداشته‌ایم.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60&query=مرد ایرانی با لباس مهندسی",
    },
    {
      name: "مهندس سارا کریمی",
      company: "مجتمع کشت و صنعت گلستان",
      comment:
        "پمپ‌های آبیاری که از اوستا خریداری کردیم، بسیار کارآمد و کم مصرف هستند. مشاوره فنی قبل از خرید بسیار کمک کننده بود و توانستیم بهترین انتخاب را داشته باشیم.",
      rating: 4,
      image: "/placeholder.svg?height=60&width=60&query=زن ایرانی با لباس مهندسی",
    },
    {
      name: "دکتر حسین رضایی",
      company: "پالایشگاه نفت اصفهان",
      comment:
        "کیفیت پمپ‌های مخصوص مواد شیمیایی اوستا بی‌نظیر است. در محیط‌های خورنده و دماهای بالا به خوبی کار می‌کنند و هزینه‌های نگهداری ما را به شدت کاهش داده‌اند.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60&query=مرد ایرانی میانسال با عینک",
    },
  ]

  return (
    <div className="my-8 bg-gray-50 p-6 rounded-lg">
      <h3 className="text-2xl font-bold mb-6 text-right flex items-center gap-2">
        <Star className="h-6 w-6 text-yellow-500" />
        نظرات مشتریان ما
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-4 rounded-lg shadow relative"
          >
            <div className="flex items-center gap-3 mb-3">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </div>
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                />
              ))}
            </div>
            <p className="text-gray-700 text-right">{testimonial.comment}</p>
            <div className="absolute top-3 left-3 text-blue-600 opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// کامپوننت مقایسه تکنولوژی‌ها
const TechnologyComparison = () => {
  return (
    <Card className="my-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-right">مقایسه تکنولوژی‌های پمپ</CardTitle>
        <CardDescription className="text-right">
          مقایسه انواع مختلف پمپ‌ها برای کمک به انتخاب بهترین گزینه برای نیاز شما
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-right">نوع پمپ</th>
                <th className="border p-2 text-center">کاربرد اصلی</th>
                <th className="border p-2 text-center">مزایا</th>
                <th className="border p-2 text-center">معایب</th>
                <th className="border p-2 text-center">هزینه نسبی</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2 text-right font-semibold">پمپ سانتریفیوژ</td>
                <td className="border p-2 text-right">آبرسانی، تهویه مطبوع، صنایع</td>
                <td className="border p-2 text-right">دبی بالا، قیمت مناسب، تنوع زیاد</td>
                <td className="border p-2 text-right">کارایی کمتر در فشارهای بالا</td>
                <td className="border p-2 text-center">
                  <div className="flex justify-center">
                    <span className="text-green-600 font-bold">$</span>
                    <span className="text-green-600 font-bold">$</span>
                    <span className="text-gray-300">$</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border p-2 text-right font-semibold">پمپ دیافراگمی</td>
                <td className="border p-2 text-right">انتقال سیالات خورنده و حساس</td>
                <td className="border p-2 text-right">مناسب برای سیالات ویسکوز و خورنده</td>
                <td className="border p-2 text-right">دبی محدود، نیاز به تعمیرات بیشتر</td>
                <td className="border p-2 text-center">
                  <div className="flex justify-center">
                    <span className="text-yellow-600 font-bold">$</span>
                    <span className="text-yellow-600 font-bold">$</span>
                    <span className="text-yellow-600 font-bold">$</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border p-2 text-right font-semibold">پمپ پیستونی</td>
                <td className="border p-2 text-right">فشار بالا، هیدرولیک</td>
                <td className="border p-2 text-right">فشار بسیار بالا، دقت زیاد</td>
                <td className="border p-2 text-right">قیمت بالا، پیچیدگی نگهداری</td>
                <td className="border p-2 text-center">
                  <div className="flex justify-center">
                    <span className="text-red-600 font-bold">$</span>
                    <span className="text-red-600 font-bold">$</span>
                    <span className="text-red-600 font-bold">$</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border p-2 text-right font-semibold">پمپ شناور</td>
                <td className="border p-2 text-right">چاه‌های عمیق، آبرسانی</td>
                <td className="border p-2 text-right">مناسب برای چاه‌های عمیق، نصب آسان</td>
                <td className="border p-2 text-right">محدودیت قطر چاه، هزینه تعمیر بالا</td>
                <td className="border p-2 text-center">
                  <div className="flex justify-center">
                    <span className="text-yellow-600 font-bold">$</span>
                    <span className="text-yellow-600 font-bold">$</span>
                    <span className="text-gray-300">$</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border p-2 text-right font-semibold">پمپ مونو</td>
                <td className="border p-2 text-right">سیالات غلیظ، لجن، صنایع غذایی</td>
                <td className="border p-2 text-right">مناسب برای سیالات ویسکوز و حاوی ذرات جامد</td>
                <td className="border p-2 text-right">هزینه نگهداری بالا، قطعات یدکی گران</td>
                <td className="border p-2 text-center">
                  <div className="flex justify-center">
                    <span className="text-red-600 font-bold">$</span>
                    <span className="text-red-600 font-bold">$</span>
                    <span className="text-red-600 font-bold">$</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

// کامپوننت نمایش زیردسته‌ها
const SubcategoryShowcase = () => {
  const subcategories = [
    {
      title: "پمپ‌های سانتریفیوژ",
      image: "/placeholder.svg?height=200&width=300&query=پمپ سانتریفیوژ صنعتی",
      description: "پمپ‌های سانتریفیوژ برای کاربردهای متنوع با دبی بالا و فشار متوسط",
      link: "/products/pumps/centrifugal",
      features: ["دبی بالا", "نصب آسان", "هزینه نگهداری پایین", "تنوع در مدل‌ها"],
      badge: "پرفروش",
    },
    {
      title: "پمپ‌های شناور",
      image: "/placeholder.svg?height=200&width=300&query=پمپ شناور چاه عمیق",
      description: "پمپ‌های شناور برای استخراج آب از چاه‌های عمیق و نیمه عمیق",
      link: "/products/pumps/submersible",
      features: ["مناسب چاه‌های عمیق", "عمر طولانی", "کارکرد بی‌صدا", "راندمان بالا"],
      badge: "محبوب",
    },
    {
      title: "پمپ‌های دیافراگمی",
      image: "/placeholder.svg?height=200&width=300&query=پمپ دیافراگمی صنعتی",
      description: "پمپ‌های دیافراگمی برای انتقال سیالات خورنده، ویسکوز و حساس",
      link: "/products/pumps/diaphragm",
      features: ["مقاوم در برابر خوردگی", "مناسب سیالات ویسکوز", "خودمکش", "کارکرد خشک"],
      badge: "",
    },
    {
      title: "پمپ‌های کفکش",
      image: "/placeholder.svg?height=200&width=300&query=پمپ کفکش صنعتی",
      description: "پمپ‌های کفکش برای تخلیه آب و فاضلاب از مخازن و حوضچه‌ها",
      link: "/products/pumps/drainage",
      features: ["تخلیه سریع", "قابل حمل", "مقاوم در برابر ذرات جامد", "نصب آسان"],
      badge: "جدید",
    },
    {
      title: "بوستر پمپ‌ها",
      image: "/placeholder.svg?height=200&width=300&query=بوستر پمپ ساختمانی",
      description: "بوستر پمپ‌ها برای افزایش فشار آب در ساختمان‌های بلند و مجتمع‌ها",
      link: "/products/pumps/booster",
      features: ["فشار ثابت", "کنترل هوشمند", "کارکرد بی‌صدا", "صرفه‌جویی در مصرف انرژی"],
      badge: "پیشنهاد ویژه",
    },
    {
      title: "پمپ‌های مونو",
      image: "/placeholder.svg?height=200&width=300&query=پمپ مونو صنعتی",
      description: "پمپ‌های مونو برای انتقال سیالات غلیظ، لجن و مواد حاوی ذرات جامد",
      link: "/products/pumps/mono",
      features: ["مناسب سیالات غلیظ", "جریان یکنواخت", "فشار بالا", "کم صدا"],
      badge: "",
    },
  ]

  return (
    <div className="my-8">
      <h3 className="text-2xl font-bold mb-6 text-right">انواع پمپ‌ها</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategories.map((subcategory, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
          >
            <div className="relative h-48">
              <Image
                src={subcategory.image || "/placeholder.svg"}
                alt={subcategory.title}
                fill
                className="object-cover"
              />
              {subcategory.badge && <Badge className="absolute top-2 right-2 bg-blue-600">{subcategory.badge}</Badge>}
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h4 className="text-xl font-semibold mb-2 text-right">{subcategory.title}</h4>
              <p className="text-gray-700 mb-4 text-right">{subcategory.description}</p>
              <div className="mb-4 flex-grow">
                <h5 className="font-semibold mb-2 text-right">ویژگی‌ها:</h5>
                <ul className="list-disc list-inside text-right">
                  {subcategory.features.map((feature, i) => (
                    <li key={i} className="text-gray-700">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href={subcategory.link}>
                <Button className="w-full gap-2">
                  مشاهده محصولات
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// کامپوننت نمایش آمار و ارقام
const StatsSection = () => {
  return (
    <div className="my-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg">
      <h3 className="text-2xl font-bold mb-6 text-center">چرا اوستا را انتخاب کنید؟</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center p-4"
        >
          <div className="flex justify-center mb-3">
            <TrendingUp className="h-12 w-12 text-white" />
          </div>
          <h4 className="text-3xl font-bold mb-2">+۱۵۰۰</h4>
          <p className="text-blue-100">محصول متنوع</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center p-4"
        >
          <div className="flex justify-center mb-3">
            <Award className="h-12 w-12 text-white" />
          </div>
          <h4 className="text-3xl font-bold mb-2">+۲۰</h4>
          <p className="text-blue-100">برند معتبر جهانی</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center p-4"
        >
          <div className="flex justify-center mb-3">
            <Truck className="h-12 w-12 text-white" />
          </div>
          <h4 className="text-3xl font-bold mb-2">+۵۰۰۰</h4>
          <p className="text-blue-100">مشتری راضی</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center p-4"
        >
          <div className="flex justify-center mb-3">
            <Tool className="h-12 w-12 text-white" />
          </div>
          <h4 className="text-3xl font-bold mb-2">+۱۰</h4>
          <p className="text-blue-100">سال خدمات پس از فروش</p>
        </motion.div>
      </div>
    </div>
  )
}

// کامپوننت نمایش محصولات ویژه
const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      title: "پمپ سانتریفیوژ پمپیران مدل ۵۰-۲۰۰",
      image: "/placeholder.svg?height=200&width=200&query=پمپ سانتریفیوژ صنعتی پمپیران",
      price: "۱۲,۵۰۰,۰۰۰",
      discount: "۱۰٪",
      originalPrice: "۱۳,۹۰۰,۰۰۰",
      rating: 4.8,
      reviewCount: 45,
      inStock: true,
      features: ["دبی: ۵۰ متر مکعب بر ساعت", "هد: ۲۰ متر", "توان: ۵.۵ کیلووات", "اتصالات: ۲ اینچ"],
    },
    {
      id: 2,
      title: "پمپ شناور ابارا مدل ۶ES",
      image: "/placeholder.svg?height=200&width=200&query=پمپ شناور ابارا",
      price: "۱۸,۹۰۰,۰۰۰",
      discount: "",
      originalPrice: "",
      rating: 4.5,
      reviewCount: 32,
      inStock: true,
      features: ["دبی: ۱۸ متر مکعب بر ساعت", "هد: ۱۰۰ متر", "توان: ۷.۵ کیلووات", "قطر: ۶ اینچ"],
    },
    {
      id: 3,
      title: "بوستر پمپ گراندفوس مدل CMBE",
      image: "/placeholder.svg?height=200&width=200&query=بوستر پمپ گراندفوس",
      price: "۲۵,۷۰۰,۰۰۰",
      discount: "۱۵٪",
      originalPrice: "۳۰,۲۰۰,۰۰۰",
      rating: 4.9,
      reviewCount: 67,
      inStock: false,
      features: ["دبی: ۱۰ متر مکعب بر ساعت", "هد: ۴۵ متر", "توان: ۱.۵ کیلووات", "کنترل فشار هوشمند"],
    },
    {
      id: 4,
      title: "پمپ کفکش پنتاکس مدل DPV",
      image: "/placeholder.svg?height=200&width=200&query=پمپ کفکش پنتاکس",
      price: "۴,۸۰۰,۰۰۰",
      discount: "",
      originalPrice: "",
      rating: 4.3,
      reviewCount: 28,
      inStock: true,
      features: ["دبی: ۱۵ متر مکعب بر ساعت", "هد: ۱۲ متر", "توان: ۱.۱ کیلووات", "قابلیت پمپاژ ذرات تا ۳۵ میلیمتر"],
    },
  ]

  return (
    <div className="my-8">
      <h3 className="text-2xl font-bold mb-6 text-right flex items-center justify-end gap-2">
        <Gauge className="h-6 w-6 text-blue-600" />
        محصولات ویژه
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="relative p-4 flex justify-center">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                width={200}
                height={200}
                className="object-contain h-48"
              />
              {product.discount && (
                <Badge className="absolute top-2 right-2 bg-red-600">تخفیف {product.discount}</Badge>
              )}
              {!product.inStock && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">ناموجود</span>
                </div>
              )}
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h4 className="text-lg font-semibold mb-2 text-right line-clamp-2">{product.title}</h4>
              <div className="flex items-center mb-2 justify-end">
                <span className="text-gray-600 text-sm ml-1">({product.reviewCount})</span>
                <span className="text-gray-700 ml-1">{product.rating}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
              <ul className="list-disc list-inside text-right text-sm text-gray-700 mb-4 flex-grow">
                {product.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-3">
                  <Badge
                    variant="outline"
                    className={product.inStock ? "text-green-600 border-green-600" : "text-red-600 border-red-600"}
                  >
                    {product.inStock ? "موجود در انبار" : "ناموجود"}
                  </Badge>
                  <div className="text-left">
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through text-sm block">{product.originalPrice} تومان</span>
                    )}
                    <span className="text-lg font-bold text-blue-700">{product.price} تومان</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="w-full">
                    جزئیات
                  </Button>
                  <Button className="w-full" disabled={!product.inStock}>
                    افزودن به سبد
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Button variant="outline" className="gap-2">
          مشاهده همه محصولات
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

// کامپوننت فیلتر پیشرفته
const AdvancedFilter = () => {
  return (
    <Card className="my-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center gap-2 text-right">
          <Filter className="h-6 w-6 text-blue-600" />
          جستجوی پیشرفته پمپ
        </CardTitle>
        <CardDescription className="text-right">با استفاده از فیلترهای زیر، پمپ مناسب خود را پیدا کنید</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="technical">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="technical">مشخصات فنی</TabsTrigger>
            <TabsTrigger value="application">کاربرد</TabsTrigger>
          </TabsList>
          <TabsContent value="technical" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium block text-right">دبی (متر مکعب بر ساعت)</label>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-xs text-gray-500 block text-right">حداقل</label>
                    <input type="number" className="w-full p-2 border rounded-md text-right" placeholder="0" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 block text-right">حداکثر</label>
                    <input type="number" className="w-full p-2 border rounded-md text-right" placeholder="1000" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium block text-right">هد (متر)</label>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-xs text-gray-500 block text-right">حداقل</label>
                    <input type="number" className="w-full p-2 border rounded-md text-right" placeholder="0" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 block text-right">حداکثر</label>
                    <input type="number" className="w-full p-2 border rounded-md text-right" placeholder="500" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium block text-right">توان (کیلووات)</label>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-xs text-gray-500 block text-right">حداقل</label>
                    <input type="number" className="w-full p-2 border rounded-md text-right" placeholder="0" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 block text-right">حداکثر</label>
                    <input type="number" className="w-full p-2 border rounded-md text-right" placeholder="100" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium block text-right">نوع پمپ</label>
                <select className="w-full p-2 border rounded-md text-right">
                  <option value="">همه</option>
                  <option value="centrifugal">سانتریفیوژ</option>
                  <option value="submersible">شناور</option>
                  <option value="diaphragm">دیافراگمی</option>
                  <option value="piston">پیستونی</option>
                  <option value="mono">مونو</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium block text-right">جنس بدنه</label>
                <select className="w-full p-2 border rounded-md text-right">
                  <option value="">همه</option>
                  <option value="cast-iron">چدن</option>
                  <option value="stainless-steel">استنلس استیل</option>
                  <option value="bronze">برنز</option>
                  <option value="plastic">پلاستیک</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium block text-right">برند</label>
                <select className="w-full p-2 border rounded-md text-right">
                  <option value="">همه</option>
                  <option value="pumpiran">پمپیران</option>
                  <option value="ebara">ابارا</option>
                  <option value="grundfos">گراندفوس</option>
                  <option value="pentax">پنتاکس</option>
                  <option value="dab">داب</option>
                  <option value="lowara">لوارا</option>
                </select>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="application" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium block text-right">کاربرد</label>
                <select className="w-full p-2 border rounded-md text-right">
                  <option value="">همه</option>
                  <option value="water-supply">آبرسانی</option>
                  <option value="agriculture">کشاورزی</option>
                  <option value="industrial">صنعتی</option>
                  <option value="sewage">فاضلاب</option>
                  <option value="oil-gas">نفت و گاز</option>
                  <option value="food">صنایع غذایی</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium block text-right">نوع سیال</label>
                <select className="w-full p-2 border rounded-md text-right">
                  <option value="">همه</option>
                  <option value="clean-water">آب تمیز</option>
                  <option value="dirty-water">آب کثیف</option>
                  <option value="chemical">مواد شیمیایی</option>
                  <option value="oil">روغن و مشتقات نفتی</option>
                  <option value="food-liquid">مایعات غذایی</option>
                  <option value="slurry">دوغاب و لجن</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium block text-right">دمای سیال</label>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-xs text-gray-500 block text-right">حداقل (°C)</label>
                    <input type="number" className="w-full p-2 border rounded-md text-right" placeholder="-20" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 block text-right">حداکثر (°C)</label>
                    <input type="number" className="w-full p-2 border rounded-md text-right" placeholder="120" />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        <div className="mt-6 flex justify-center">
          <Button className="w-full md:w-auto">جستجوی پمپ</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function PumpsClientPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">در حال بارگذاری...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-8 rounded-lg mb-8">
        <h1 className="text-4xl font-bold mb-4 text-right">پمپ‌های صنعتی</h1>
        <p className="text-xl text-right">انواع پمپ‌های صنعتی با کیفیت بالا برای کاربردهای مختلف</p>
      </div>

      <AdvancedFilter />

      <SubcategoryShowcase />

      <StatsSection />

      <FeaturedProducts />

      <BuyingGuide />

      <ApplicationShowcase />

      <TechnologyComparison />

      <BrandShowcase />

      <CustomerTestimonials />
    </div>
  )
}
