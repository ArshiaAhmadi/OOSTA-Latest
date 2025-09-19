"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  Filter,
  Grid3X3,
  LayoutGrid,
  List,
  SlidersHorizontal,
  Heart,
  Eye,
  ShoppingCart,
  GitCompare,
  Star,
  TrendingUp,
  Users,
  Shield,
  Truck,
  Search,
  X,
  Zap,
  Droplets,
  Settings,
  Cpu,
  Package,
  Percent,
  RotateCcw,
} from "lucide-react"
import { Input } from "@/components/ui/input"

// تعریف پارامترهای صفحه
export const dynamicParams = true

// دیتای دسته‌بندی‌ها
const categories = {
  gearboxes: {
    name: "انواع گیربکس و لوازم جانبی",
    description:
      "گیربکس‌های صنعتی سیستم‌های انتقال قدرتی هستند که برای تغییر سرعت و گشتاور در ماشین‌آلات صنعتی استفاده می‌شوند. این تجهیزات با تبدیل سرعت بالا و گشتاور پایین به سرعت پایین و گشتاور بالا (یا برعکس)، کارایی سیستم‌های مکانیکی را افزایش می‌دهند.",
    image: "/placeholder.svg?height=400&width=800",
    subcategories: [
      {
        name: "گیربکس حلزونی",
        description: "گیربکس‌های حلزونی برای کاربردهایی که نیاز به کاهش سرعت زیاد دارند مناسب هستند",
        image: "/placeholder.svg?height=200&width=300",
        slug: "worm-gearbox",
      },
      {
        name: "گیربکس کتابی",
        description: "گیربکس‌های کتابی برای تغییر جهت انتقال نیرو در زاویه ۹۰ درجه استفاده می‌شوند",
        image: "/placeholder.svg?height=200&width=300",
        slug: "book-gearbox",
      },
      {
        name: "گیربکس هلیکال",
        description: "گیربکس‌های هلیکال با دنده‌های مارپیچ برای انتقال قدرت نرم و کم صدا",
        image: "/placeholder.svg?height=200&width=300",
        slug: "helical-gearbox",
      },
      {
        name: "گیربکس قورباغه‌ای",
        description: "گیربکس‌های قورباغه‌ای (مخروطی) برای انتقال قدرت در زوایای مختلف",
        image: "/placeholder.svg?height=200&width=300",
        slug: "bevel-gearbox",
      },
      {
        name: "گیربکس خورشیدی",
        description: "گیربکس‌های خورشیدی با طراحی فشرده و نسبت گشتاور بالا",
        image: "/placeholder.svg?height=200&width=300",
        slug: "planetary-gearbox",
      },
      {
        name: "گیربکس سایکلو",
        description: "گیربکس‌های سایکلو با قابلیت تحمل شوک و ارتعاش بالا",
        image: "/placeholder.svg?height=200&width=300",
        slug: "cyclo-gearbox",
      },
      {
        name: "گیربکس صنعتی",
        description: "گیربکس‌های صنعتی برای کاربردهای سنگین و محیط‌های صنعتی",
        image: "/placeholder.svg?height=200&width=300",
        slug: "industrial-gearbox",
      },
      {
        name: "گیربکس دنده‌ای",
        description: "گیربکس‌های دنده‌ای برای انتقال قدرت با دقت بالا",
        image: "/placeholder.svg?height=200&width=300",
        slug: "gear-gearbox",
      },
    ],
    products: [
      {
        id: 1,
        name: "گیربکس حلزونی صنعتی مدل WG-100",
        price: 18700000,
        discountPrice: 17500000,
        rating: 4.2,
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
        slug: "worm-gearbox-wg-100",
        brand: "SEW",
        inStock: true,
      },
      {
        id: 2,
        name: "گیربکس هلیکال صنعتی مدل HG-200",
        price: 25500000,
        discountPrice: 23800000,
        rating: 4.6,
        image: "/placeholder.svg?height=300&width=300",
        isNew: true,
        slug: "helical-gearbox-hg-200",
        brand: "NORD",
        inStock: true,
      },
      {
        id: 3,
        name: "گیربکس کتابی صنعتی مدل BG-150",
        price: 21300000,
        discountPrice: null,
        rating: 4.4,
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
        slug: "bevel-gearbox-bg-150",
        brand: "سیمنس",
        inStock: true,
      },
      {
        id: 4,
        name: "گیربکس خورشیدی صنعتی مدل PG-300",
        price: 32800000,
        discountPrice: 30500000,
        rating: 4.8,
        image: "/placeholder.svg?height=300&width=300",
        isNew: true,
        slug: "planetary-gearbox-pg-300",
        brand: "بونفیلیولی",
        inStock: false,
      },
      {
        id: 5,
        name: "گیربکس سایکلو صنعتی مدل CG-250",
        price: 28900000,
        discountPrice: null,
        rating: 4.5,
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
        slug: "cyclo-gearbox-cg-250",
        brand: "سومیتومو",
        inStock: true,
      },
      {
        id: 6,
        name: "گیربکس دور متغیر صنعتی مدل VG-180",
        price: 19500000,
        discountPrice: 18200000,
        rating: 4.3,
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
        slug: "variable-speed-gearbox-vg-180",
        brand: "SEW",
        inStock: true,
      },
    ],
  },
  electromotors: {
    name: "انواع الکتروموتور و لوازم جانبی",
    description:
      "الکتروموتورهای صنعتی دستگاه‌هایی هستند که انرژی الکتریکی را به انرژی مکانیکی تبدیل می‌کنند. این موتورها قلب تپنده بسیاری از ماشین‌آلات و تجهیزات صنعتی هستند و در طیف گسترده‌ای از کاربردها استفاده می‌شوند.",
    image: "/industrial-electric-motors.png",
    subcategories: [
      {
        name: "الکتروموتور تک فاز",
        description: "موتورهای تک فاز برای کاربردهای خانگی و نیمه صنعتی",
        image: "/placeholder.svg?height=200&width=300",
        slug: "single-phase",
      },
      {
        name: "الکتروموتور سه فاز",
        description: "موتورهای سه فاز صنعتی با قدرت‌های مختلف برای کاربردهای سنگین",
        image: "/placeholder.svg?height=200&width=300",
        slug: "three-phase",
      },
      {
        name: "الکتروموتور ضد انفجار",
        description: "موتورهای ضد انفجار برای محیط‌های خطرناک و صنایع نفت و گاز",
        image: "/placeholder.svg?height=200&width=300",
        slug: "explosion-proof",
      },
      {
        name: "الکتروموتور ترمز دار",
        description: "موتورهای مجهز به سیستم ترمز برای توقف سریع و ایمن",
        image: "/placeholder.svg?height=200&width=300",
        slug: "brake",
      },
      {
        name: "الکتروموتور DC",
        description: "موتورهای جریان مستقیم برای کنترل دقیق سرعت",
        image: "/placeholder.svg?height=200&width=300",
        slug: "dc",
      },
      {
        name: "الکتروموتور سروو",
        description: "موتورهای سرو برای کنترل دقیق موقعیت و سرعت",
        image: "/placeholder.svg?height=200&width=300",
        slug: "servo",
      },
      {
        name: "الکتروموتور گیربکس‌دار",
        description: "موتورهای یکپارچه با گیربکس برای کاربردهای خاص",
        image: "/placeholder.svg?height=200&width=300",
        slug: "geared",
      },
      {
        name: "الکتروموتور استپ",
        description: "موتورهای استپ برای کنترل دقیق حرکت در سیستم‌های اتوماسیون",
        image: "/placeholder.svg?height=200&width=300",
        slug: "stepper",
      },
    ],
    products: [
      {
        id: 1,
        name: "الکتروموتور سه فاز 15 کیلووات",
        price: 22000000,
        discountPrice: null,
        rating: 4.8,
        image: "/placeholder.svg?height=300&width=300",
        isNew: true,
        slug: "three-phase-electromotor-15kw",
        brand: "ABB",
        inStock: true,
      },
      {
        id: 2,
        name: "الکتروموتور تک فاز 5.5 کیلووات",
        price: 12000000,
        discountPrice: null,
        rating: 4.1,
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
        slug: "single-phase-electromotor-5.5kw",
        brand: "زیمنس",
        inStock: true,
      },
      {
        id: 3,
        name: "الکتروموتور ضد انفجار 7.5 کیلووات",
        price: 35000000,
        discountPrice: 32500000,
        rating: 4.7,
        image: "/placeholder.svg?height=300&width=300",
        isNew: true,
        slug: "explosion-proof-electromotor-7.5kw",
        brand: "WEG",
        inStock: false,
      },
      {
        id: 4,
        name: "الکتروموتور ترمز دار 3 کیلووات",
        price: 18500000,
        discountPrice: 17200000,
        rating: 4.5,
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
        slug: "brake-electromotor-3kw",
        brand: "موتوژن",
        inStock: true,
      },
      {
        id: 5,
        name: "الکتروموتور DC 2.2 کیلووات",
        price: 16800000,
        discountPrice: null,
        rating: 4.3,
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
        slug: "dc-electromotor-2.2kw",
        brand: "جمکو",
        inStock: true,
      },
      {
        id: 6,
        name: "الکتروموتور سروو 1.5 کیلووات",
        price: 42000000,
        discountPrice: 39500000,
        rating: 4.9,
        image: "/placeholder.svg?height=300&width=300",
        isNew: true,
        slug: "servo-electromotor-1.5kw",
        brand: "ABB",
        inStock: true,
      },
    ],
  },
  pumps: {
    name: "انواع پمپ و لوازم جانبی",
    description:
      "پمپ‌های صنعتی تجهیزاتی هستند که برای انتقال سیالات در محیط‌های صنعتی استفاده می‌شوند. این تجهیزات با تبدیل انرژی مکانیکی به انرژی هیدرولیکی، سیالات را از یک نقطه به نقطه دیگر منتقل می‌کنند.",
    image: "/placeholder.svg?height=400&width=800",
    subcategories: [
      {
        name: "پمپ سانتریفیوژ",
        description: "پمپ‌های سانتریفیوژ برای انتقال آب و سیالات با دبی بالا",
        image: "/placeholder.svg?height=200&width=300",
        slug: "centrifugal",
      },
      {
        name: "پمپ کف کش",
        description: "پمپ‌های کف‌کش برای تخلیه آب‌های آلوده و لجن‌کش",
        image: "/placeholder.svg?height=200&width=300",
        slug: "drainage",
      },
      {
        name: "پمپ شناور",
        description: "پمپ‌های شناور برای تخلیه آب از چاه‌ها و استخرها",
        image: "/placeholder.svg?height=200&width=300",
        slug: "submersible",
      },
      {
        name: "پمپ دیافراگمی",
        description: "پمپ‌های دیافراگمی برای انتقال مواد شیمیایی و اسیدی",
        image: "/placeholder.svg?height=200&width=300",
        slug: "diaphragm",
      },
      {
        name: "پمپ دنده ای",
        description: "پمپ‌های دنده‌ای برای انتقال سیالات با ویسکوزیته بالا",
        image: "/placeholder.svg?height=200&width=300",
        slug: "gear",
      },
      {
        name: "پمپ وکیوم",
        description: "پمپ‌های وکیوم برای ایجاد خلأ در سیستم‌های صنعتی",
        image: "/placeholder.svg?height=200&width=300",
        slug: "vacuum",
      },
      {
        name: "پمپ پیستونی",
        description: "پمپ‌های پیستونی برای ایجاد فشار بالا در سیستم‌های هیدرولیک",
        image: "/placeholder.svg?height=200&width=300",
        slug: "piston",
      },
      {
        name: "پمپ آب خانگی",
        description: "پمپ‌های آب برای مصارف خانگی و افزایش فشار آب",
        image: "/placeholder.svg?height=200&width=300",
        slug: "domestic-water",
      },
      {
        name: "پمپ آتش‌نشانی",
        description: "پمپ‌های مخصوص سیستم‌های اطفاء حریق با قابلیت اطمینان بالا",
        image: "/placeholder.svg?height=200&width=300",
        slug: "fire",
      },
    ],
    products: [
      {
        id: 1,
        name: "پمپ سانتریفیوژ صنعتی مدل CP-250",
        price: 12500000,
        discountPrice: 11800000,
        rating: 4.5,
        image: "/placeholder.svg?height=300&width=300",
        isNew: true,
        slug: "centrifugal-pump-cp-250",
        brand: "گراندفوس",
        inStock: true,
      },
      {
        id: 2,
        name: "پمپ کف کش صنعتی مدل SP-150",
        price: 8900000,
        discountPrice: null,
        rating: 4.3,
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
        slug: "submersible-pump-sp-150",
        brand: "KSB",
        inStock: true,
      },
      {
        id: 3,
        name: "پمپ شناور صنعتی مدل SB-200",
        price: 15600000,
        discountPrice: 14800000,
        rating: 4.6,
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
        slug: "submersible-pump-sb-200",
        brand: "ابارا",
        inStock: true,
      },
      {
        id: 4,
        name: "پمپ دیافراگمی صنعتی مدل DP-100",
        price: 18900000,
        discountPrice: null,
        rating: 4.4,
        image: "/placeholder.svg?height=300&width=300",
        isNew: true,
        slug: "diaphragm-pump-dp-100",
        brand: "پنتاکس",
        inStock: false,
      },
      {
        id: 5,
        name: "پمپ دنده‌ای صنعتی مدل GP-120",
        price: 14500000,
        discountPrice: 13800000,
        rating: 4.2,
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
        slug: "gear-pump-gp-120",
        brand: "پمپیران",
        inStock: true,
      },
      {
        id: 6,
        name: "پمپ وکیوم صنعتی مدل VP-180",
        price: 22800000,
        discountPrice: 21500000,
        rating: 4.7,
        image: "/placeholder.svg?height=300&width=300",
        isNew: true,
        slug: "vacuum-pump-vp-180",
        brand: "گراندفوس",
        inStock: true,
      },
    ],
  },
  inverters: {
    name: "انواع اینورتر و لوازم جانبی",
    description:
      "اینورترها یا درایوهای کنترل دور، تجهیزاتی هستند که برای کنترل سرعت و گشتاور الکتروموتورها استفاده می‌شوند. این تجهیزات با تغییر فرکانس و ولتاژ ورودی موتور، امکان کنترل دقیق سرعت و بهینه‌سازی مصرف انرژی را فراهم می‌کنند.",
    image: "/placeholder.svg?height=400&width=800",
    subcategories: [
      {
        name: "اینورتر ۳ فاز",
        description: "درایوهای کنترل دور برای موتورهای سه فاز صنعتی",
        image: "/placeholder.svg?height=200&width=300",
        slug: "three-phase",
      },
      {
        name: "اینورتر تک فاز",
        description: "درایوهای کنترل دور برای موتورهای تک فاز",
        image: "/placeholder.svg?height=200&width=300",
        slug: "single-phase",
      },
      {
        name: "اینورتر سبک کار",
        description: "اینورترهای مناسب برای کاربردهای سبک و متوسط",
        image: "/placeholder.svg?height=200&width=300",
        slug: "light-duty",
      },
      {
        name: "اینورتر سنگین کار",
        description: "اینورترهای مقاوم برای کاربردهای صنعتی سنگین",
        image: "/placeholder.svg?height=200&width=300",
        slug: "heavy-duty",
      },
      {
        name: "اینورتر آسانسور",
        description: "اینورترهای مخصوص آسانسور با قابلیت‌های ویژه",
        image: "/placeholder.svg?height=200&width=300",
        slug: "elevator",
      },
      {
        name: "اینورتر خورشیدی",
        description: "اینورترهای مخصوص سیستم‌های خورشیدی برای تبدیل DC به AC",
        image: "/placeholder.svg?height=200&width=300",
        slug: "solar",
      },
      {
        name: "اینورتر باتری",
        description: "اینورترهای مخصوص سیستم‌های باتری و UPS",
        image: "/placeholder.svg?height=200&width=300",
        slug: "battery",
      },
      {
        name: "سافت استارتر",
        description: "راه‌اندازهای نرم برای کاهش جریان راه‌اندازی موتورها",
        image: "/placeholder.svg?height=200&width=300",
        slug: "soft-starter",
      },
    ],
    products: [
      {
        id: 1,
        name: "اینورتر سه فاز 15 کیلووات",
        price: 28500000,
        discountPrice: 26800000,
        rating: 4.7,
        image: "/placeholder.svg?height=300&width=300",
        isNew: true,
        slug: "three-phase-inverter-15kw",
        brand: "ABB",
        inStock: true,
      },
      {
        id: 2,
        name: "اینورتر تک فاز 5.5 کیلووات",
        price: 15800000,
        discountPrice: null,
        rating: 4.4,
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
        slug: "single-phase-inverter-5.5kw",
        brand: "زیمنس",
        inStock: true,
      },
      {
        id: 3,
        name: "اینورتر سبک کار 7.5 کیلووات",
        price: 18900000,
        discountPrice: 17500000,
        rating: 4.3,
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
        slug: "light-duty-inverter-7.5kw",
        brand: "دانفوس",
        inStock: true,
      },
      {
        id: 4,
        name: "اینورتر سنگین کار 22 کیلووات",
        price: 42000000,
        discountPrice: 39500000,
        rating: 4.8,
        image: "/placeholder.svg?height=300&width=300",
        isNew: true,
        slug: "heavy-duty-inverter-22kw",
        brand: "اشنایدر الکتریک",
        inStock: false,
      },
      {
        id: 5,
        name: "اینورتر آسانسور 11 کیلووات",
        price: 32500000,
        discountPrice: 30800000,
        rating: 4.6,
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
        slug: "elevator-inverter-11kw",
        brand: "دلتا",
        inStock: true,
      },
    ],
  },
  "vibration-motors": {
    name: "انواع موتور ویبره و لوازم جانبی",
    description:
      "موتورهای ویبره تجهیزاتی هستند که برای ایجاد ارتعاش کنترل شده در ماشین‌آلات و تجهیزات صنعتی استفاده می‌شوند. این موتورها در صنایع مختلف برای جابجایی مواد، متراکم‌سازی، غربال‌گری و جداسازی کاربرد دارند.",
    image: "/placeholder.svg?height=400&width=800",
    subcategories: [
      {
        name: "موتور ویبره بدنه",
        description: "موتورهای ویبره بدنه برای ایجاد ارتعاش در دستگاه‌ها",
        image: "/placeholder.svg?height=200&width=300",
        slug: "body",
      },
      {
        name: "میکرو ویبره",
        description: "موتورهای میکرو ویبره برای کاربردهای دقیق",
        image: "/placeholder.svg?height=200&width=300",
        slug: "micro",
      },
      {
        name: "موتور ویبره پنوماتیک",
        description: "موتورهای ویبره پنوماتیک برای محیط‌های خطرناک",
        image: "/placeholder.svg?height=200&width=300",
        slug: "pneumatic",
      },
      {
        name: "موتور ویبره ضد انفجار",
        description: "موتورهای ویبره ضد انفجار برای صنایع نفت و گاز",
        image: "/placeholder.svg?height=200&width=300",
        slug: "explosion-proof",
      },
      {
        name: "موتور ویبره خطی",
        description: "موتورهای ویبره خطی برای حرکت‌های خطی و دقیق",
        image: "/placeholder.svg?height=200&width=300",
        slug: "linear",
      },
      {
        name: "موتور ویبره صنعتی",
        description: "موتورهای ویبره صنعتی برای کاربردهای سنگین",
        image: "/placeholder.svg?height=200&width=300",
        slug: "industrial",
      },
    ],
    products: [
      {
        id: 1,
        name: "موتور ویبره بدنه 0.75 کیلووات",
        price: 8500000,
        discountPrice: null,
        rating: 4.3,
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
        slug: "body-vibration-motor-0.75kw",
        brand: "OLI",
        inStock: true,
      },
      {
        id: 2,
        name: "میکرو ویبره 0.25 کیلووات",
        price: 4800000,
        discountPrice: 4500000,
        rating: 4.1,
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
        slug: "micro-vibration-motor-0.25kw",
        brand: "Italvibras",
        inStock: true,
      },
      {
        id: 3,
        name: "موتور ویبره پنوماتیک 1.5 کیلووات",
        price: 12500000,
        discountPrice: 11800000,
        rating: 4.5,
        image: "/placeholder.svg?height=300&width=300",
        isNew: true,
        slug: "pneumatic-vibration-motor-1.5kw",
        brand: "Martin Engineering",
        inStock: false,
      },
      {
        id: 4,
        name: "موتور ویبره ضد انفجار 2.2 کیلووات",
        price: 18900000,
        discountPrice: 17500000,
        rating: 4.7,
        image: "/placeholder.svg?height=300&width=300",
        isNew: true,
        slug: "explosion-proof-vibration-motor-2.2kw",
        brand: "Vimarc",
        inStock: true,
      },
    ],
  },
  "pressure-vessels": {
    name: "مخزن تحت فشار و لوازم جانبی",
    description:
      "مخازن تحت فشار ظروفی هستند که برای نگهداری مایعات یا گازها با فشار متفاوت از فشار محیط طراحی شده‌اند. این مخازن در سیستم‌های آبرسانی، تأسیسات گرمایشی و سرمایشی، و بسیاری از فرآیندهای صنعتی کاربرد دارند.",
    image: "/placeholder.svg?height=400&width=800",
    subcategories: [
      {
        name: "مخزن دیافراگمی",
        description: "مخازن دیافراگمی برای سیستم‌های آبرسانی با قابلیت تنظیم فشار",
        image: "/placeholder.svg?height=200&width=300",
        slug: "diaphragm-vessels",
      },
      {
        name: "مخزن تحت فشار عمودی",
        description: "مخازن عمودی برای نصب در فضاهای محدود با ظرفیت‌های مختلف",
        image: "/placeholder.svg?height=200&width=300",
        slug: "vertical-vessels",
      },
      {
        name: "مخزن تحت فشار افقی",
        description: "مخازن افقی برای نصب در فضاهای با ارتفاع محدود",
        image: "/placeholder.svg?height=200&width=300",
        slug: "horizontal-vessels",
      },
      {
        name: "مخزن گالوانیزه",
        description: "مخازن با پوشش گالوانیزه برای مقاومت بیشتر در برابر خوردگی",
        image: "/placeholder.svg?height=200&width=300",
        slug: "galvanized-vessels",
      },
      {
        name: "مخزن استیل",
        description: "مخازن استیل ضد زنگ برای نگهداری مواد غذایی و شیمیایی",
        image: "/placeholder.svg?height=200&width=300",
        slug: "stainless-steel-vessels",
      },
      {
        name: "مخزن کامپوزیت",
        description: "مخازن کامپوزیت سبک و مقاوم در برابر خوردگی",
        image: "/placeholder.svg?height=200&width=300",
        slug: "composite-vessels",
      },
      {
        name: "مخزن هیدروفور",
        description: "مخازن هیدروفور برای سیستم‌های تأمین آب با فشار ثابت",
        image: "/placeholder.svg?height=200&width=300",
        slug: "hydrophore-vessels",
      },
    ],
    products: [
      {
        id: 1,
        name: "مخزن دیافراگمی 24 لیتری",
        price: 3500000,
        discountPrice: null,
        rating: 4.2,
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
        slug: "diaphragm-vessel-24l",
        brand: "ایمن فشار",
        inStock: true,
      },
      {
        id: 2,
        name: "مخزن تحت فشار عمودی 100 لیتری",
        price: 8900000,
        discountPrice: 8500000,
        rating: 4.4,
        image: "/placeholder.svg?height=300&width=300",
        isNew: true,
        slug: "vertical-vessel-100l",
        brand: "پیران",
        inStock: true,
      },
      {
        id: 3,
        name: "مخزن تحت فشار افقی 200 لیتری",
        price: 12500000,
        discountPrice: 11800000,
        rating: 4.5,
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
        slug: "horizontal-vessel-200l",
        brand: "آکوا تک",
        inStock: false,
      },
      {
        id: 4,
        name: "مخزن گالوانیزه 150 لیتری",
        price: 9800000,
        discountPrice: null,
        rating: 4.3,
        image: "/placeholder.svg?height=300&width=300",
        isNew: true,
        slug: "galvanized-vessel-150l",
        brand: "منبع گستر",
        inStock: true,
      },
    ],
  },
  "control-sets": {
    name: "ست کنترل و لوازم جانبی",
    description:
      "ست‌های کنترل مجموعه‌ای از تجهیزات الکترونیکی و مکانیکی هستند که برای کنترل و مدیریت عملکرد سیستم‌های صنعتی مانند پمپ‌ها، فن‌ها، و سایر تجهیزات استفاده می‌شوند. این ست‌ها امکان کنترل خودکار، بهینه‌سازی مصرف انرژی و افزایش طول عمر تجهیزات را فراهم می‌کنند.",
    image: "/placeholder.svg?height=400&width=800",
    subcategories: [
      {
        name: "ست کنترل پمپ",
        description: "ست‌های کنترل مخصوص انواع پمپ‌ها با قابلیت کنترل فشار و دبی",
        image: "/placeholder.svg?height=200&width=300",
        slug: "pump-control-sets",
      },
      {
        name: "ست کنترل فشار",
        description: "ست‌های کنترل فشار برای سیستم‌های هیدرولیک و پنوماتیک",
        image: "/placeholder.svg?height=200&width=300",
        slug: "pressure-control-sets",
      },
      {
        name: "ست کنترل سطح",
        description: "ست‌های کنترل سطح مایعات در مخازن و سیستم‌های ذخیره‌سازی",
        image: "/placeholder.svg?height=200&width=300",
        slug: "level-control-sets",
      },
      {
        name: "ست کنترل دما",
        description: "ست‌های کنترل دما برای سیستم‌های گرمایشی و سرمایشی",
        image: "/placeholder.svg?height=200&width=300",
        slug: "temperature-control-sets",
      },
      {
        name: "تابلو برق صنعتی",
        description: "تابلوهای برق صنعتی برای کنترل و توزیع برق در کارخانه‌ها",
        image: "/placeholder.svg?height=200&width=300",
        slug: "industrial-electrical-panels",
      },
      {
        name: "PLC و کنترلرها",
        description: "سیستم‌های کنترل منطقی قابل برنامه‌ریزی برای اتوماسیون صنعتی",
        image: "/placeholder.svg?height=200&width=300",
        slug: "plc-controllers",
      },
      {
        name: "HMI و نمایشگرها",
        description: "رابط‌های انسان-ماشین برای کنترل و مانیتورینگ سیستم‌های صنعتی",
        image: "/placeholder.svg?height=200&width=300",
        slug: "hmi-displays",
      },
      {
        name: "سنسورها و ترانسمیترها",
        description: "انواع سنسورها و ترانسمیترها برای اندازه‌گیری پارامترهای مختلف",
        image: "/placeholder.svg?height=200&width=300",
        slug: "sensors-transmitters",
      },
    ],
    products: [
      {
        id: 1,
        name: "ست کنترل پمپ دوتایی",
        price: 15800000,
        discountPrice: 14500000,
        rating: 4.6,
        image: "/placeholder.svg?height=300&width=300",
        isNew: true,
        slug: "dual-pump-control-set",
        brand: "اشنایدر الکتریک",
        inStock: true,
      },
      {
        id: 2,
        name: "ست کنترل فشار دیجیتال",
        price: 12500000,
        discountPrice: null,
        rating: 4.4,
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
        slug: "digital-pressure-control-set",
        brand: "زیمنس",
        inStock: true,
      },
      {
        id: 3,
        name: "ست کنترل سطح اولتراسونیک",
        price: 18900000,
        discountPrice: 17500000,
        rating: 4.7,
        image: "/placeholder.svg?height=300&width=300",
        isNew: true,
        slug: "ultrasonic-level-control-set",
        brand: "ABB",
        inStock: false,
      },
      {
        id: 4,
        name: "ست کنترل دما PID",
        price: 14500000,
        discountPrice: 13800000,
        rating: 4.5,
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
        slug: "pid-temperature-control-set",
        brand: "ایران تابلو",
        inStock: true,
      },
    ],
  },
  "generators-new": {
    name: "انواع ژنراتور و لوازم جانبی",
    description:
      "ژنراتورها تجهیزاتی هستند که انرژی مکانیکی را به انرژی الکتریکی تبدیل می‌کنند. این تجهیزات برای تولید برق در مکان‌هایی که به شبکه برق دسترسی ندارند یا به عنوان سیستم پشتیبان در زمان قطعی برق استفاده می‌شوند.",
    image: "/placeholder.svg?height=400&width=800",
    subcategories: [
      {
        name: "دیزل ژنراتور",
        description: "ژنراتورهای دیزلی برای تولید برق مداوم و اضطراری",
        image: "/placeholder.svg?height=200&width=300",
        slug: "diesel",
      },
      {
        name: "ژنراتور بنزینی",
        description: "ژنراتورهای بنزینی قابل حمل برای کاربردهای سبک",
        image: "/placeholder.svg?height=200&width=300",
        slug: "gasoline",
      },
      {
        name: "ژنراتور گازی",
        description: "ژنراتورهای گاز طبیعی برای تولید برق پاک",
        image: "/placeholder.svg?height=200&width=300",
        slug: "gas",
      },
      {
        name: "ژنراتور صنعتی",
        description: "ژنراتورهای قدرت بالا برای کاربردهای صنعتی سنگین",
        image: "/placeholder.svg?height=200&width=300",
        slug: "industrial",
      },
      {
        name: "ژنراتور بی‌صدا",
        description: "ژنراتورهای با صدای کم برای استفاده در مناطق مسکونی",
        image: "/placeholder.svg?height=200&width=300",
        slug: "silent",
      },
      {
        name: "ژنراتور قابل حمل",
        description: "ژنراتورهای سبک و قابل حمل برای استفاده در سفر و کمپینگ",
        image: "/placeholder.svg?height=200&width=300",
        slug: "portable",
      },
      {
        name: "ژنراتور اضطراری",
        description: "ژنراتورهای اضطراری با قابلیت روشن شدن خودکار در زمان قطع برق",
        image: "/placeholder.svg?height=200&width=300",
        slug: "emergency",
      },
      {
        name: "تجهیزات جانبی ژنراتور",
        description: "انواع تجهیزات جانبی برای ژنراتورها مانند تابلو ATS و مخازن سوخت",
        image: "/placeholder.svg?height=200&width=300",
        slug: "accessories",
      },
    ],
    products: [
      {
        id: 1,
        name: "دیزل ژنراتور 100 کیلووات",
        price: 350000000,
        discountPrice: 335000000,
        rating: 4.8,
        image: "/placeholder.svg?height=300&width=300",
        isNew: true,
        slug: "diesel-generator-100kw",
        brand: "کاترپیلار",
        inStock: true,
      },
      {
        id: 2,
        name: "ژنراتور بنزینی 5 کیلووات",
        price: 45000000,
        discountPrice: null,
        rating: 4.3,
        image: "/placeholder.svg?height=300&width=300",
        isNew: false,
        slug: "gasoline-generator-5kw",
        brand: "کامینز",
        inStock: true,
      },
      {
        id: 3,
        name: "ژنراتور گازی 50 کیلووات",
        price: 280000000,
        discountPrice: 265000000,
        rating: 4.6,
        image: "/placeholder.svg?height=300&width=300",
        isNew: true,
        slug: "gas-generator-50kw",
        brand: "پرکینز",
        inStock: false,
      },
      {
        id: 4,
        name: "ژنراتور صنعتی 200 کیلووات",
        price: 580000000,
        discountPrice: 550000000,
        rating: 4.9,
        image: "/placeholder.svg?height=300&width=300",
        isNew: true,
        slug: "industrial-generator-200kw",
        brand: "MTU",
        inStock: true,
      },
    ],
  },
}

// فیلترهای محصولات
const filters = {
  brands: [
    { id: "all", name: "همه برندها" },
    { id: "siemens", name: "زیمنس" },
    { id: "abb", name: "ABB" },
    { id: "grundfos", name: "گراندفوس" },
    { id: "sew", name: "SEW" },
    { id: "nord", name: "NORD" },
    { id: "weg", name: "WEG" },
    { id: "danfoss", name: "دانفوس" },
    { id: "schneider", name: "اشنایدر الکتریک" },
    { id: "delta", name: "دلتا" },
    { id: "oli", name: "OLI" },
    { id: "italvibras", name: "Italvibras" },
    { id: "martin", name: "Martin Engineering" },
    { id: "vimarc", name: "Vimarc" },
    { id: "caterpillar", name: "کاترپیلار" },
    { id: "cummins", name: "کامینز" },
    { id: "perkins", name: "پرکینز" },
    { id: "mtu", name: "MTU" },
  ],
  price: [
    { id: "all", name: "همه قیمت‌ها" },
    { id: "under-10m", name: "کمتر از ۱۰ میلیون تومان" },
    { id: "10m-20m", name: "۱۰ تا ۲۰ میلیون تومان" },
    { id: "20m-50m", name: "۲۰ تا ۵۰ میلیون تومان" },
    { id: "over-50m", name: "بیشتر از ۵۰ میلیون تومان" },
  ],
  availability: [
    { id: "all", name: "همه" },
    { id: "in-stock", name: "موجود در انبار" },
    { id: "out-of-stock", name: "ناموجود" },
  ],
  discount: [
    { id: "all", name: "همه" },
    { id: "discounted", name: "تخفیف‌دار" },
    { id: "no-discount", name: "بدون تخفیف" },
  ],
}

// فرمت قیمت به تومان
const formatPrice = (price: number) => {
  return new Intl.NumberFormat("fa-IR").format(price) + " تومان"
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params

  // بررسی وجود دسته‌بندی
  if (!categories[category as keyof typeof categories]) {
    notFound()
  }

  const categoryData = categories[category as keyof typeof categories]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* بردکرامب */}
      <div className="flex items-center text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary">
          صفحه اصلی
        </Link>
        <ChevronLeft className="h-4 w-4 mx-2" />
        <Link href="/products" className="hover:text-primary">
          محصولات
        </Link>
        <ChevronLeft className="h-4 w-4 mx-2" />
        <span className="text-foreground">{categoryData.name}</span>
      </div>

      {/* هدر دسته‌بندی */}
      <div className="relative rounded-xl overflow-hidden mb-8">
        <div className="relative h-64 w-full">
          <Image
            src={categoryData.image || "/placeholder.svg"}
            alt={categoryData.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
            <div className="container px-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{categoryData.name}</h1>
              <p className="text-white/90 max-w-2xl">{categoryData.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* زیردسته‌ها */}
      <div className="mb-12 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden backdrop-blur-sm">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-primary to-blue-600 rounded-full"></div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              زیر دسته‌های {categoryData.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryData.subcategories.map((subcat, index) => (
              <Link key={index} href={`/products/${category}/${subcat.slug}`} className="group">
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-lg border border-gray-100 dark:border-gray-700 group-hover:border-primary/30 transform group-hover:-translate-y-1">
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={subcat.image || "/placeholder.svg"}
                      alt={subcat.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <span className="text-xs text-white/80">مشاهده محصولات</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{subcat.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{subcat.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* محصولات */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* فیلترها */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 sticky top-24 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-blue-600 rounded-full"></div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  فیلترهای پیشرفته
                </h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary hover:bg-primary/10 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <X className="h-4 w-4 ml-1" />
                پاک کردن
              </Button>
            </div>

            <div className="space-y-8">
              {/* جستجوی سریع */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg flex items-center text-gray-800 dark:text-gray-200">
                  <Search className="h-5 w-5 ml-2 text-primary" />
                  جستجوی سریع
                </h4>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder={`جستجو در ${categoryData.name}...`}
                    className="pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* فیلتر برند */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg flex items-center text-gray-800 dark:text-gray-200">
                  <Filter className="h-5 w-5 ml-2 text-primary" />
                  برند محصول
                </h4>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 space-y-3 max-h-64 overflow-y-auto custom-scrollbar">
                  {filters.brands.slice(1, 8).map((brand) => (
                    <div key={brand.id} className="flex items-center justify-between group">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id={`brand-${brand.id}`}
                          className="h-5 w-5 rounded-lg border-2 border-gray-300 text-primary focus:ring-primary focus:ring-2 transition-all duration-300"
                        />
                        <label
                          htmlFor={`brand-${brand.id}`}
                          className="mr-3 text-sm font-medium cursor-pointer group-hover:text-primary transition-colors duration-300"
                        >
                          {brand.name}
                        </label>
                      </div>
                      <Badge
                        variant="outline"
                        className="text-xs bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                      >
                        {Math.floor(Math.random() * 50) + 5}
                      </Badge>
                    </div>
                  ))}
                  <Button
                    variant="link"
                    size="sm"
                    className="h-auto p-0 text-primary hover:text-primary/80 font-medium"
                  >
                    + نمایش {filters.brands.length - 8} برند دیگر
                  </Button>
                </div>
              </div>

              {/* فیلتر قیمت با Range Slider */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg flex items-center text-gray-800 dark:text-gray-200">
                  <SlidersHorizontal className="h-5 w-5 ml-2 text-primary" />
                  محدوده قیمت
                </h4>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 space-y-4">
                  <div className="space-y-3">
                    {filters.price.map((price) => (
                      <div key={price.id} className="flex items-center group">
                        <input
                          type="radio"
                          id={`price-${price.id}`}
                          name="price"
                          className="h-5 w-5 rounded-full border-2 border-gray-300 text-primary focus:ring-primary focus:ring-2 transition-all duration-300"
                        />
                        <label
                          htmlFor={`price-${price.id}`}
                          className="mr-3 text-sm font-medium cursor-pointer group-hover:text-primary transition-colors duration-300"
                        >
                          {price.name}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                    <div className="flex items-center gap-3 mb-3">
                      <Input
                        type="number"
                        placeholder="حداقل"
                        className="flex-1 text-center rounded-lg border-gray-300 dark:border-gray-600"
                      />
                      <span className="text-gray-400">تا</span>
                      <Input
                        type="number"
                        placeholder="حداکثر"
                        className="flex-1 text-center rounded-lg border-gray-300 dark:border-gray-600"
                      />
                    </div>
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 rounded-lg"
                    >
                      اعمال محدوده
                    </Button>
                  </div>
                </div>
              </div>

              {/* فیلترهای مخصوص دسته‌بندی */}
              {category === "electromotors" && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center text-gray-800 dark:text-gray-200">
                    <Zap className="h-5 w-5 ml-2 text-primary" />
                    مشخصات فنی
                  </h4>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">قدرت (کیلووات)</label>
                      <select className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700">
                        <option>همه قدرت‌ها</option>
                        <option>کمتر از 5 کیلووات</option>
                        <option>5 تا 15 کیلووات</option>
                        <option>15 تا 30 کیلووات</option>
                        <option>بیشتر از 30 کیلووات</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">نوع موتور</label>
                      <div className="space-y-2">
                        {["تک فاز", "سه فاز", "DC", "سرو", "ضد انفجار"].map((type) => (
                          <div key={type} className="flex items-center">
                            <input type="checkbox" id={type} className="h-4 w-4 rounded text-primary" />
                            <label htmlFor={type} className="mr-2 text-sm">
                              {type}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {category === "pumps" && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center text-gray-800 dark:text-gray-200">
                    <Droplets className="h-5 w-5 ml-2 text-primary" />
                    مشخصات هیدرولیک
                  </h4>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">دبی (لیتر در دقیقه)</label>
                      <select className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700">
                        <option>همه دبی‌ها</option>
                        <option>کمتر از 100</option>
                        <option>100 تا 500</option>
                        <option>500 تا 1000</option>
                        <option>بیشتر از 1000</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">نوع پمپ</label>
                      <div className="space-y-2">
                        {["سانتریفیوژ", "کف کش", "شناور", "دیافراگمی", "دنده‌ای"].map((type) => (
                          <div key={type} className="flex items-center">
                            <input type="checkbox" id={type} className="h-4 w-4 rounded text-primary" />
                            <label htmlFor={type} className="mr-2 text-sm">
                              {type}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {category === "gearboxes" && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center text-gray-800 dark:text-gray-200">
                    <Settings className="h-5 w-5 ml-2 text-primary" />
                    مشخصات مکانیکی
                  </h4>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">نسبت گشتاور</label>
                      <select className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700">
                        <option>همه نسبت‌ها</option>
                        <option>1:10 تا 1:50</option>
                        <option>1:50 تا 1:100</option>
                        <option>بیشتر از 1:100</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">نوع گیربکس</label>
                      <div className="space-y-2">
                        {["حلزونی", "هلیکال", "کتابی", "خورشیدی", "سایکلو"].map((type) => (
                          <div key={type} className="flex items-center">
                            <input type="checkbox" id={type} className="h-4 w-4 rounded text-primary" />
                            <label htmlFor={type} className="mr-2 text-sm">
                              {type}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {category === "inverters" && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center text-gray-800 dark:text-gray-200">
                    <Cpu className="h-5 w-5 ml-2 text-primary" />
                    مشخصات الکترونیک
                  </h4>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">ولتاژ ورودی</label>
                      <div className="space-y-2">
                        {["تک فاز 220V", "سه فاز 380V", "سه فاز 480V"].map((voltage) => (
                          <div key={voltage} className="flex items-center">
                            <input type="checkbox" id={voltage} className="h-4 w-4 rounded text-primary" />
                            <label htmlFor={voltage} className="mr-2 text-sm">
                              {voltage}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">نوع کاربری</label>
                      <div className="space-y-2">
                        {["سبک کار", "سنگین کار", "آسانسور", "پمپ"].map((usage) => (
                          <div key={usage} className="flex items-center">
                            <input type="checkbox" id={usage} className="h-4 w-4 rounded text-primary" />
                            <label htmlFor={usage} className="mr-2 text-sm">
                              {usage}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* فیلتر موجودی */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg flex items-center text-gray-800 dark:text-gray-200">
                  <Package className="h-5 w-5 ml-2 text-primary" />
                  وضعیت موجودی
                </h4>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 space-y-3">
                  {filters.availability.map((item) => (
                    <div key={item.id} className="flex items-center justify-between group">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id={`availability-${item.id}`}
                          name="availability"
                          className="h-5 w-5 rounded-full border-2 border-gray-300 text-primary focus:ring-primary focus:ring-2 transition-all duration-300"
                        />
                        <label
                          htmlFor={`availability-${item.id}`}
                          className="mr-3 text-sm font-medium cursor-pointer group-hover:text-primary transition-colors duration-300"
                        >
                          {item.name}
                        </label>
                      </div>
                      {item.id !== "all" && (
                        <div
                          className={`w-3 h-3 rounded-full ${item.id === "in-stock" ? "bg-green-500 animate-pulse" : "bg-red-500"}`}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* فیلتر تخفیف */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg flex items-center text-gray-800 dark:text-gray-200">
                  <Percent className="h-5 w-5 ml-2 text-primary" />
                  پیشنهادات ویژه
                </h4>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 space-y-3">
                  {filters.discount.map((item) => (
                    <div key={item.id} className="flex items-center justify-between group">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id={`discount-${item.id}`}
                          name="discount"
                          className="h-5 w-5 rounded-full border-2 border-gray-300 text-primary focus:ring-primary focus:ring-2 transition-all duration-300"
                        />
                        <label
                          htmlFor={`discount-${item.id}`}
                          className="mr-3 text-sm font-medium cursor-pointer group-hover:text-primary transition-colors duration-300"
                        >
                          {item.name}
                        </label>
                      </div>
                      {item.id === "discounted" && (
                        <Badge variant="destructive" className="text-xs animate-pulse">
                          ویژه
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* فیلتر امتیاز */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg flex items-center text-gray-800 dark:text-gray-200">
                  <Star className="h-5 w-5 ml-2 text-primary" />
                  امتیاز مشتریان
                </h4>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 space-y-3">
                  {[5, 4, 3, 2].map((rating) => (
                    <div
                      key={rating}
                      className="flex items-center justify-between group cursor-pointer hover:bg-white dark:hover:bg-gray-700 p-2 rounded-lg transition-all duration-300"
                    >
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id={`rating-${rating}`}
                          name="rating"
                          className="h-5 w-5 rounded-full border-2 border-gray-300 text-primary focus:ring-primary focus:ring-2"
                        />
                        <div className="mr-3 flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                            />
                          ))}
                          <span className="text-sm mr-2">و بالاتر</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {Math.floor(Math.random() * 100) + 20}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* دکمه اعمال فیلترها */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-600">
                <Button className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 py-3 rounded-xl font-semibold">
                  <Filter className="h-5 w-5 ml-2" />
                  اعمال فیلترها
                </Button>
                <Button
                  variant="outline"
                  className="w-full mt-3 border-2 border-gray-300 dark:border-gray-600 hover:border-primary hover:bg-primary/5 transition-all duration-300 py-3 rounded-xl bg-transparent"
                >
                  <RotateCcw className="h-4 w-4 ml-2" />
                  بازنشانی فیلترها
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* لیست محصولات */}
        <div className="lg:col-span-3">
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 mb-8 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary to-blue-600 rounded-full"></div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    محصولات {categoryData.name}
                  </h2>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    {categoryData.products.length} محصول یافت شد
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    {categoryData.products.filter((p) => p.inStock).length} محصول موجود
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    {categoryData.products.filter((p) => p.discountPrice).length} محصول تخفیف‌دار
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">مرتب‌سازی:</span>
                  <select className="text-sm border-2 border-gray-200 dark:border-gray-600 rounded-xl p-3 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-primary min-w-[160px]">
                    <option>پرفروش‌ترین</option>
                    <option>جدیدترین</option>
                    <option>ارزان‌ترین</option>
                    <option>گران‌ترین</option>
                    <option>بیشترین امتیاز</option>
                    <option>پربازدیدترین</option>
                  </select>
                </div>

                <div className="flex items-center border-2 border-gray-200 dark:border-gray-600 rounded-xl overflow-hidden shadow-sm">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-11 w-11 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <Grid3X3 className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-11 w-11 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <LayoutGrid className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-11 w-11 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <List className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryData.products.map((product, index) => (
                <Link key={product.id} href={`/products/${category}/${product.slug}`} className="block">
                  <div
                    className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-primary/30 transform hover:-translate-y-2 cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* نوار بالای کارت */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500"></div>

                    <div className="relative">
                      <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* نشانگرهای ویژه */}
                        <div className="absolute top-4 right-4 flex flex-col gap-2">
                          {product.isNew && (
                            <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 border-blue-500 shadow-lg animate-pulse">
                              جدید
                            </Badge>
                          )}
                          {product.discountPrice && (
                            <div className="bg-gradient-to-br from-red-500 to-rose-600 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center text-xs font-bold shadow-lg animate-bounce">
                              <span>
                                {Math.round(((product.price - product.discountPrice) / product.price) * 100)}%
                              </span>
                              <span>تخفیف</span>
                            </div>
                          )}
                        </div>

                        {/* دکمه‌های عملیات سریع */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                          <Button
                            variant="secondary"
                            size="icon"
                            className="rounded-full h-12 w-12 shadow-xl bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-110 transition-all duration-300"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                            }}
                          >
                            <Heart className="h-5 w-5 text-rose-500" />
                          </Button>
                          <Button
                            variant="secondary"
                            size="icon"
                            className="rounded-full h-12 w-12 shadow-xl bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-110 transition-all duration-300"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                            }}
                          >
                            <Eye className="h-5 w-5 text-blue-500" />
                          </Button>
                          <Button
                            variant="secondary"
                            size="icon"
                            className="rounded-full h-12 w-12 shadow-xl bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-110 transition-all duration-300"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                            }}
                          >
                            <ShoppingCart className="h-5 w-5 text-primary" />
                          </Button>
                          <Button
                            variant="secondary"
                            size="icon"
                            className="rounded-full h-12 w-12 shadow-xl bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-110 transition-all duration-300"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                            }}
                          >
                            <GitCompare className="h-5 w-5 text-purple-500" />
                          </Button>
                        </div>

                        {/* نوار اطلاعات موجودی */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-primary/90 to-blue-600/90 backdrop-blur-sm px-4 py-2 text-white text-xs flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-2 h-2 rounded-full ${product.inStock ? "bg-green-400 animate-pulse" : "bg-red-400"}`}
                            ></div>
                            <span>{product.inStock ? "موجود در انبار" : "ناموجود"}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span>{product.rating}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 space-y-4">
                        {/* برند و دسته‌بندی */}
                        <div className="flex items-center justify-between">
                          <Badge
                            variant="outline"
                            className="bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary border-primary/30 px-3 py-1 font-medium"
                          >
                            {product.brand}
                          </Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <TrendingUp className="h-4 w-4 text-green-500" />
                            <span>پرفروش</span>
                          </div>
                        </div>

                        {/* نام محصول */}
                        <h3 className="font-bold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-300">
                          {product.name}
                        </h3>

                        {/* امتیاز و بررسی */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(product.rating)
                                    ? "fill-amber-400 text-amber-400"
                                    : i < product.rating
                                      ? "fill-amber-400 text-amber-400 opacity-50"
                                      : "text-gray-300"
                                }`}
                              />
                            ))}
                            <span className="text-sm text-muted-foreground mr-2">({product.rating})</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Users className="h-3 w-3" />
                            <span>۱۲۳ خریدار</span>
                          </div>
                        </div>

                        {/* ویژگی‌های کلیدی */}
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="text-xs bg-green-50 text-green-700 border-green-200">
                            <Shield className="h-3 w-3 mr-1" />
                            گارانتی ۱۸ ماه
                          </Badge>
                          <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                            <Truck className="h-3 w-3 mr-1" />
                            ارسال رایگان
                          </Badge>
                        </div>

                        {/* قیمت */}
                        <div className="space-y-2">
                          {product.discountPrice ? (
                            <div className="space-y-1">
                              <span className="text-muted-foreground line-through text-sm block">
                                {formatPrice(product.price)}
                              </span>
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-2xl text-primary">
                                  {formatPrice(product.discountPrice)}
                                </span>
                                <Badge variant="destructive" className="text-xs animate-pulse">
                                  {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% تخفیف
                                </Badge>
                              </div>
                            </div>
                          ) : (
                            <span className="font-bold text-2xl text-gray-900 dark:text-white">
                              {formatPrice(product.price)}
                            </span>
                          )}
                        </div>

                        {/* دکمه‌های عملیات */}
                        <div className="flex gap-3 pt-2">
                          <Button
                            className="flex-1 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                            disabled={!product.inStock}
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                            }}
                          >
                            <ShoppingCart className="h-4 w-4 ml-2" />
                            {product.inStock ? "افزودن به سبد" : "ناموجود"}
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="border-2 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 bg-transparent"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                            }}
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* اطلاعات تکمیلی دسته‌بندی */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">درباره {categoryData.name}</h2>
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <p>{categoryData.description}</p>
              <p>
                محصولات این دسته‌بندی با بالاترین کیفیت و استانداردهای جهانی تولید شده‌اند و برای کاربردهای مختلف صنعتی
                مناسب هستند. تمامی محصولات دارای گارانتی و خدمات پس از فروش معتبر هستند.
              </p>
              <p>
                برای مشاوره و راهنمایی بیشتر در مورد انتخاب محصول مناسب، می‌توانید با کارشناسان ما تماس بگیرید یا از طریق
                فرم تماس با ما در ارتباط باشید.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
