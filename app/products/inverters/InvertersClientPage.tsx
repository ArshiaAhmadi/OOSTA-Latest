"use client"

import type { Metadata } from "next"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { BrandShowcase } from "@/components/brand-showcase"
import { CategoryComparison } from "@/components/category-comparison"
import { CustomerTestimonials } from "@/components/customer-testimonials"
import { TechnicalSpecifications } from "@/components/technical-specifications"
import { IndustryApplications } from "@/components/industry-applications"
import { InteractiveBuyingGuide } from "@/components/interactive-buying-guide"
import { RecommendedProducts } from "@/components/recommended-products"

export const metadata: Metadata = {
  title: "انواع اینورتر و لوازم جانبی | اوستا",
  description: "مشاهده و خرید انواع اینورتر و درایو کنترل دور موتور با بهترین قیمت و کیفیت",
}

const inverterTypes = [
  {
    id: "three-phase",
    name: "اینورتر سه فاز",
    image: "/placeholder.svg?key=km2ag",
  },
  {
    id: "single-phase",
    name: "اینورتر تک فاز",
    image: "/placeholder.svg?key=qjfx1",
  },
  {
    id: "micro-inverter",
    name: "میکرو اینورتر",
    image: "/placeholder.svg?key=71jww",
  },
  {
    id: "heavy-duty",
    name: "اینورتر سنگین کار",
    image: "/placeholder.svg?key=78l73",
  },
  {
    id: "elevator-inverter",
    name: "اینورتر آسانسور",
    image: "/placeholder.svg?key=h4iq5",
  },
  {
    id: "solar-inverter",
    name: "اینورتر خورشیدی",
    image: "/placeholder.svg?key=m3hcd",
  },
  {
    id: "servo-drive",
    name: "سروو درایو",
    image: "/placeholder.svg?key=s41gb",
  },
  {
    id: "soft-starter",
    name: "سافت استارتر",
    image: "/placeholder.svg?key=t19nc",
  },
  {
    id: "vector-inverter",
    name: "اینورتر برداری",
    image: "/placeholder.svg?key=cyj1f",
  },
  {
    id: "accessories",
    name: "لوازم جانبی اینورتر",
    image: "/placeholder.svg?key=dkzyy",
  },
]

const popularBrands = [
  {
    id: "siemens",
    name: "زیمنس (Siemens)",
    logo: "/siemens-logo.png",
    country: "آلمان",
    specialties: ["اینورترهای صنعتی", "سروو درایوها", "اینورترهای برداری"],
    established: "۱۸۴۷",
  },
  {
    id: "abb",
    name: "ABB",
    logo: "/placeholder.svg?key=iw64d",
    country: "سوئیس-سوئد",
    specialties: ["اینورترهای سه فاز", "اینورترهای خورشیدی", "سافت استارترها"],
    established: "۱۸۸۳",
  },
  {
    id: "danfoss",
    name: "دانفوس (Danfoss)",
    logo: "/placeholder.svg?key=c4lae",
    country: "دانمارک",
    specialties: ["اینورترهای HVAC", "اینورترهای صنعتی", "اینورترهای آب و فاضلاب"],
    established: "۱۹۳۳",
  },
  {
    id: "schneider",
    name: "اشنایدر الکتریک (Schneider Electric)",
    logo: "/schneider-electric-logo.png",
    country: "فرانسه",
    specialties: ["اینورترهای صنعتی", "سافت استارترها", "اینورترهای کم توان"],
    established: "۱۸۳۶",
  },
  {
    id: "delta",
    name: "دلتا (Delta)",
    logo: "/placeholder.svg?key=21amx",
    country: "تایوان",
    specialties: ["اینورترهای صنعتی", "اینورترهای خورشیدی", "سروو درایوها"],
    established: "۱۹۷۱",
  },
  {
    id: "ls",
    name: "LS (ال اس)",
    logo: "/placeholder.svg?key=kvv6a",
    country: "کره جنوبی",
    specialties: ["اینورترهای صنعتی", "سافت استارترها", "اینورترهای کم توان"],
    established: "۱۹۷۴",
  },
]

const customerReviews = [
  {
    id: "1",
    customerName: "مهندس محمد رضایی",
    customerRole: "مدیر فنی شرکت صنایع پتروشیمی",
    customerAvatar: "/placeholder.svg?key=15vte",
    rating: 5,
    text: "ما از اینورترهای سه فاز زیمنس در خط تولید خود استفاده می‌کنیم و از کیفیت و دقت آن‌ها بسیار راضی هستیم. مصرف انرژی به میزان قابل توجهی کاهش یافته و کنترل سرعت موتورها بسیار دقیق‌تر شده است.",
    date: "۱۴۰۲/۰۳/۱۵",
    productName: "اینورتر سه فاز زیمنس",
  },
  {
    id: "2",
    customerName: "مهندس نیما کریمی",
    customerRole: "مهندس برق شرکت آسانسور پارس",
    customerAvatar: "/placeholder.svg?key=khfhs",
    rating: 4,
    text: "اینورترهای آسانسور خریدار�� شده از اوستا صنعت عملکرد بسیار خوبی دارند. حرکت آسانسور بسیار نرم شده و دقت توقف در طبقات عالی است. تنها مشکل، قیمت نسبتاً بالای آن‌هاست.",
    date: "۱۴۰۲/۰۲/۲۰",
    productName: "اینورتر آسانسور ABB",
  },
  {
    id: "3",
    customerName: "مهندس سارا محمدی",
    customerRole: "کارشناس انرژی‌های تجدیدپذیر",
    customerAvatar: "/placeholder.svg?key=uk3zj",
    rating: 5,
    text: "اینورترهای خورشیدی ABB که از اوستا صنعت خریداری کردیم، بازده بسیار بالایی دارند و سیستم MPPT آن‌ها به خوبی کار می‌کند. پشتیبانی فنی شرکت نیز بسیار عالی است.",
    date: "۱۴۰۲/۰۱/۱۰",
    productName: "اینورتر خورشیدی ABB",
  },
]

const comparisonGroups = [
  {
    id: "general",
    title: "مقایسه کلی",
    items: inverterTypes,
    features: [
      { id: "efficiency", name: "راندمان", unit: "%" },
      { id: "initialCost", name: "هزینه اولیه", unit: "%" },
      { id: "controlAccuracy", name: "دقت کنترل", unit: "%" },
      { id: "compatibility", name: "سازگاری", unit: "%" },
      { id: "powerRange", name: "محدوده توان" },
    ],
  },
]

const buyingGuideSteps = [
  {
    id: "step1",
    title: "تعیین نوع کاربرد",
    description: "مشخص کنید اینورتر برای چه کاربردی استفاده خواهد شد (صنعتی، خانگی، آسانسور، خورشیدی و...)",
    image: "/placeholder.svg?key=step1",
    tips: [
      { text: "برای کاربردهای صنعتی سنگین، اینورترهای سه فاز مناسب‌تر هستند.", type: "info" },
      { text: "برای کاربردهای خانگی و تجاری کوچک، اینورترهای تک فاز کافی هستند.", type: "info" },
      { text: "برای آسانسورها، از اینورترهای مخصوص آسانسور استفاده کنید.", type: "info" },
    ],
    questions: [],
    faqs: [],
  },
  {
    id: "step2",
    title: "محاسبه توان مورد نیاز",
    description: "توان موتور یا سیستمی که قرار است با اینورتر کنترل شود را مشخص کنید",
    image: "/placeholder.svg?key=step2",
    tips: [
      { text: "توان اینورتر باید کمی بیشتر از توان موتور باشد (معمولاً 10-20% بیشتر).", type: "tip" },
      { text: "برای بارهای با گشتاور راه‌اندازی بالا، اینورتر با توان بالاتر انتخاب کنید.", type: "tip" },
    ],
    questions: [],
    faqs: [],
  },
  // ... سایر مراحل راهنمای خرید
]

const industrialApplications = [
  {
    id: "oil-gas",
    name: "صنایع نفت و گاز",
    icon: "/placeholder.svg?key=oil-gas-icon",
    applications: [
      {
        id: "pump-control",
        title: "کنترل پمپ‌های انتقال",
        description: "اینورترها برای کنترل دقیق سرعت و فشار پمپ‌های انتقال در پالایشگاه‌ها و خطوط لوله استفاده می‌شوند.",
        image: "/placeholder.svg?key=oil-gas-pump",
        benefits: ["کنترل دقیق فشار", "کاهش مصرف انرژی", "افزایش طول عمر پمپ"],
      },
      {
        id: "compressor-control",
        title: "کنترل کمپرسورها",
        description: "اینورترها برای کنترل سرعت و فشار کمپرسورهای گاز و هوا استفاده می‌شوند.",
        image: "/placeholder.svg?key=oil-gas-compressor",
        benefits: ["کنترل دقیق فشار", "کاهش مصرف انرژی", "افزایش طول عمر کمپرسور"],
      },
    ],
  },
  {
    id: "water-treatment",
    name: "صنایع آب و فاضلاب",
    icon: "/placeholder.svg?key=water-icon",
    applications: [
      {
        id: "pump-control-water",
        title: "کنترل پمپ‌های آب",
        description: "اینورترها برای کنترل سرعت و دبی پمپ‌های آب در سیستم‌های تصفیه و آبرسانی استفاده می‌شوند.",
        image: "/placeholder.svg?key=water-pump",
        benefits: ["کنترل دقیق دبی", "کاهش مصرف انرژی", "افزایش طول عمر پمپ"],
      },
      {
        id: "blower-control",
        title: "کنترل دمنده‌ها",
        description: "اینورترها برای کنترل سرعت و فشار دمنده‌ها در سیستم‌های هوادهی استفاده می‌شوند.",
        image: "/placeholder.svg?key=water-blower",
        benefits: ["کنترل دقیق فشار", "کاهش مصرف انرژی", "افزایش طول عمر دمنده"],
      },
    ],
  },
  // ... سایر صنایع
]

export default function InvertersClientPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/products" className="flex items-center text-primary hover:underline mb-2">
          <ChevronLeft className="h-4 w-4 ml-1" />
          <span>بازگشت به دسته‌بندی محصولات</span>
        </Link>
        <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
          اینورترها و درایوهای کنترل دور
        </h1>
        <p className="text-muted-foreground">
          اینورترها تجهیزاتی هستند که برای کنترل سرعت و گشتاور الکتروموتورها استفاده می‌شوند.
        </p>
      </div>

      <BrandShowcase categoryName="اینورتر" brands={popularBrands} />

      <CategoryComparison categoryName="اینورتر" comparisonGroups={comparisonGroups} />

      <CustomerTestimonials categoryName="اینورتر" testimonials={customerReviews} />

      <TechnicalSpecifications categoryName="ای��ورتر" specGroups={[]} />

      <IndustryApplications categoryName="اینورتر" industries={industrialApplications} />

      <InteractiveBuyingGuide categoryName="اینورتر" steps={buyingGuideSteps} />

      <RecommendedProducts categoryName="اینورتر" productGroups={[]} />
    </div>
  )
}
