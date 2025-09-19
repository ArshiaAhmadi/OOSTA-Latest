"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Star,
  Clock,
  CheckCircle,
  MapPin,
  Wrench,
  Zap,
  Cog,
  Building,
  Phone,
  Shield,
  Play,
  Users,
  Award,
  TrendingUp,
  Camera,
  Target,
  ThumbsUp,
  Quote,
  Sparkles,
  Rocket,
  MessageCircle,
  Search,
  ChevronRight,
  ChevronDown,
  Briefcase,
  PenToolIcon as Tool,
  Droplets,
  Cpu,
  Thermometer,
  Wind,
  Gauge,
  Lightbulb,
  Cable,
  Truck,
  Factory,
  HardHat,
  Layers,
  Flame,
  Waves,
  Scissors,
  Paintbrush,
  Refrigerator,
  ShieldCheck,
  Package,
  RotateCcw,
  Fuel,
  Beaker,
  Compass,
  Workflow,
  Orbit,
  ArrowUp,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const comprehensiveServiceCategories = [
  {
    id: "electromotor",
    name: "الکتروموتور",
    icon: <Zap className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    count: 45,
    services: [
      "نصب و راه‌اندازی الکتروموتورهای تک‌فاز و سه‌فاز",
      "سیم‌پیچی مجدد استاتور و روتور",
      "گریس‌کاری تخصصی و سرویس دوره‌ای",
      "آنالیز ارتعاشات و ترموگرافی",
      "مشاوره انتخاب موتور ضد انفجار",
    ],
  },
  {
    id: "gearbox",
    name: "گیربکس",
    icon: <Cog className="h-6 w-6" />,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    count: 38,
    services: [
      "نصب و هم‌راستاسازی دقیق گیربکس",
      "تعویض چرخدنده‌های هلیکال و مخروطی",
      "تعویض روغن و آنالیز براده‌های روغن",
      "تشخیص علت صدای غیرعادی",
      "انتخاب گیربکس بر اساس راندمان",
    ],
  },
  {
    id: "pump",
    name: "پمپ",
    icon: <Droplets className="h-6 w-6" />,
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-50",
    count: 52,
    services: [
      "نصب انواع پمپ سانتریفیوژ و شناور",
      "تعویض و بالانس پروانه",
      "بررسی فشار و دبی",
      "تشخیص علت کاویتاسیون",
      "انتخاب پمپ با منحنی عملکرد مناسب",
    ],
  },
  {
    id: "generator",
    name: "ژنراتور و موتور برق",
    icon: <Fuel className="h-6 w-6" />,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    count: 29,
    services: [
      "نصب ژنراتور و سیستم اگزوز",
      "تعمیرات اساسی موتور دیزل",
      "سرویس و تعویض فیلترها",
      "تشخیص علت نوسان ولتاژ",
      "محاسبه توان و طراحی اتاق ژنراتور",
    ],
  },
  {
    id: "pneumatic",
    name: "پنوماتیک",
    icon: <Wind className="h-6 w-6" />,
    color: "from-green-500 to-teal-500",
    bgColor: "bg-green-50",
    count: 34,
    services: [
      "طراحی و نصب مدارهای پنوماتیک",
      "تعمیر جک‌های پنوماتیک",
      "تخلیه آب و تعویض فیلترها",
      "تشخیص علت افت فشار سیستم",
      "بهینه‌سازی مصرف هوای فشرده",
    ],
  },
  {
    id: "pool-sauna",
    name: "استخر، سونا، جکوزی",
    icon: <Waves className="h-6 w-6" />,
    color: "from-blue-400 to-cyan-400",
    bgColor: "bg-blue-50",
    count: 26,
    services: [
      "نصب کامل سیستم تصفیه",
      "تعمیر پمپ و فیلتر تصفیه",
      "بک‌واش و اسیدشویی فیلتر",
      "تشخیص علت سبز شدن آب",
      "طراحی سیستم هوشمند کنترل",
    ],
  },
  {
    id: "hvac",
    name: "تهویه مطبوع",
    icon: <Thermometer className="h-6 w-6" />,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
    count: 48,
    services: [
      "نصب چیلرهای تراکمی و جذبی",
      "نشت‌یابی و شارژ گاز",
      "شستشوی کویل‌های کندانسور",
      "تشخیص علت عدم سرمایش",
      "محاسبه بار برودتی و حرارتی",
    ],
  },
  {
    id: "hydraulic",
    name: "هیدرولیک",
    icon: <Gauge className="h-6 w-6" />,
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-50",
    count: 41,
    services: [
      "طراحی و نصب مدارهای هیدرولیک",
      "تعمیر پمپ‌های هیدرولیک",
      "تعویض روغن و فیلترها",
      "تشخیص علت افت فشار",
      "فلاشینگ خطوط لوله",
    ],
  },
  {
    id: "piping",
    name: "پایپینگ (لوله‌کشی صنعتی)",
    icon: <Cable className="h-6 w-6" />,
    color: "from-gray-500 to-slate-500",
    bgColor: "bg-gray-50",
    count: 37,
    services: [
      "اجرای خطوط لوله فولادی و استیل",
      "جوشکاری تخصصی آرگون و CO2",
      "تست فشار هیدرواستاتیک",
      "تشخیص علت ضربه قوچ",
      "طراحی ایزومتریک و تحلیل تنش",
    ],
  },
  {
    id: "heating",
    name: "گرمایش و موتورخانه",
    icon: <Flame className="h-6 w-6" />,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    count: 33,
    services: [
      "نصب دیگ بخار و آب گرم",
      "تعمیر مشعل و ریتیوب",
      "تنظیم مشعل و آنالیز دودکش",
      "تشخیص علت عدم گرمایش",
      "بهینه‌سازی مصرف انرژی",
    ],
  },
  {
    id: "industrial-fan",
    name: "فن یا هواکش صنعتی",
    icon: <Wind className="h-6 w-6" />,
    color: "from-teal-500 to-green-500",
    bgColor: "bg-teal-50",
    count: 31,
    services: [
      "نصب فن‌های آکسیال و سانتریفیوژ",
      "بالانس دینامیکی پروانه",
      "تمیز کردن پره‌ها از گرد و غبار",
      "تشخیص علت لرزش بیش از حد",
      "طراحی سیستم تهویه صنعتی",
    ],
  },
  {
    id: "paint-spray",
    name: "رنگ پاش و تجهیزات",
    icon: <Paintbrush className="h-6 w-6" />,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    count: 24,
    services: [
      "نصب کابین رنگ و سیستم پاشش",
      "تعمیر گان‌های پاشش",
      "تعویض فیلترهای کابین",
      "تشخیص علت کیفیت پایین رنگ",
      "بهینه‌سازی فرآیند پاشش",
    ],
  },
  {
    id: "material-handling",
    name: "تجهیزات انتقال مواد و نیرو",
    icon: <Truck className="h-6 w-6" />,
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-50",
    count: 28,
    services: [
      "نصب نوار نقاله و بالابر کاسه‌ای",
      "آپارات سرد و گرم تسمه نقاله",
      "رگلاژ و تنظیم تسمه نقاله",
      "تشخیص علت پارگی تسمه",
      "طراحی سیستم انتقال مواد",
    ],
  },
  {
    id: "filtration",
    name: "فیلتراسیون و تصفیه",
    icon: <Layers className="h-6 w-6" />,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    count: 35,
    services: [
      "نصب سیستم‌های تصفیه آب RO",
      "تعویض ممبران و فیلترها",
      "شستشوی شیمیایی ممبران‌ها",
      "تشخیص علت افت فشار",
      "طراحی سیستم تصفیه",
    ],
  },
  {
    id: "bearing",
    name: "بلبرینگ و رولبرینگ",
    icon: <Orbit className="h-6 w-6" />,
    color: "from-slate-500 to-gray-500",
    bgColor: "bg-slate-50",
    count: 42,
    services: [
      "نصب تخصصی با ابزار دقیق",
      "عیب‌یابی و آنالیز خرابی",
      "گریس‌کاری با گریس مناسب",
      "آنالیز ارتعاشات و صدا",
      "انتخاب بلبرینگ مناسب",
    ],
  },
  {
    id: "compressor",
    name: "کمپرسور",
    icon: <Cpu className="h-6 w-6" />,
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
    count: 39,
    services: [
      "نصب کمپرسورهای اسکرو و پیستونی",
      "تعمیرات اساسی واحد هواساز",
      "تعویض روغن و فیلترها",
      "تشخیص علت عدم تولید فشار",
      "انتخاب کمپرسور و درایر",
    ],
  },
  {
    id: "plastic-injection",
    name: "ماشین آلات تزریق پلاستیک",
    icon: <Factory className="h-6 w-6" />,
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-50",
    count: 22,
    services: [
      "نصب و تراز دقیق دستگاه",
      "تعمیر سیلندر و ماردون",
      "کالیبراسیون سیستم گیره",
      "تشخیص مشکلات کیفیت قطعه",
      "بهینه‌سازی پارامترهای تزریق",
    ],
  },
  {
    id: "cleaning-equipment",
    name: "ماشین آلات نظافتی صنعتی",
    icon: <Scissors className="h-6 w-6" />,
    color: "from-sky-500 to-blue-500",
    bgColor: "bg-sky-50",
    count: 19,
    services: [
      "راه‌اندازی اسکرابر و سوییپر",
      "تعمیر موتور مکش و برس",
      "تعویض قطعات مصرفی",
      "تشخیص علت عدم مکش آب",
      "انتخاب دستگاه و مواد شوینده",
    ],
  },
  {
    id: "chemicals",
    name: "مواد شیمیایی",
    icon: <Beaker className="h-6 w-6" />,
    color: "from-lime-500 to-green-500",
    bgColor: "bg-lime-50",
    count: 16,
    services: [
      "مشاوره انتخاب مواد شیمیایی",
      "آموزش ایمنی و نگهداری",
      "شستشوی شیمیایی CIP",
      "مدیریت پسماند شیمیایی",
      "ارائه MSDS و راهنمای ایمنی",
    ],
  },
  {
    id: "precision-instruments",
    name: "ابزار دقیق",
    icon: <Compass className="h-6 w-6" />,
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50",
    count: 44,
    services: [
      "نصب سنسورهای فشار و دما",
      "کالیبراسیون تجهیزات",
      "تعمیر کنترل ولوها",
      "تشخیص علت نمایش نادرست",
      "طراحی سیستم‌های کنترلی",
    ],
  },
  {
    id: "lighting",
    name: "تجهیزات روشنایی",
    icon: <Lightbulb className="h-6 w-6" />,
    color: "from-yellow-400 to-amber-400",
    bgColor: "bg-yellow-50",
    count: 27,
    services: [
      "طراحی روشنایی صنعتی",
      "تعمیر درایور چراغ‌های LED",
      "تمیز کردن دوره‌ای چراغ‌ها",
      "تشخیص علت چشمک زدن",
      "محاسبات روشنایی و نورپردازی",
    ],
  },
  {
    id: "cold-storage",
    name: "سردخانه",
    icon: <Refrigerator className="h-6 w-6" />,
    color: "from-cyan-400 to-blue-400",
    bgColor: "bg-cyan-50",
    count: 32,
    services: [
      "ساخت و نصب کامل سردخانه",
      "نشت‌یابی و شارژ گاز",
      "عملیات دیفراست",
      "تشخیص علت عدم رسیدن به دما",
      "طراحی سردخانه و تونل انجماد",
    ],
  },
  {
    id: "wire-cable",
    name: "سیم و کابل",
    icon: <Cable className="h-6 w-6" />,
    color: "from-orange-400 to-red-400",
    bgColor: "bg-orange-50",
    count: 25,
    services: [
      "کابل‌کشی صنعتی روی سینی",
      "تست عایقی کابل",
      "تشخیص علت داغ شدن کابل‌ها",
      "محاسبه سایز کابل",
      "نصب سرکابل و مفصل",
    ],
  },
  {
    id: "automation",
    name: "اتوماسیون صنعتی",
    icon: <Cpu className="h-6 w-6" />,
    color: "from-purple-400 to-indigo-400",
    bgColor: "bg-purple-50",
    count: 56,
    services: [
      "برنامه‌نویسی PLC و HMI",
      "طراحی تابلو برق کنترلی",
      "عیب‌یابی سیستم‌های اتوماسیون",
      "بهینه‌سازی برنامه‌های PLC",
      "راهکارهای اتوماسیون و رباتیک",
    ],
  },
  {
    id: "industrial-electrical",
    name: "برق صنعتی",
    icon: <Zap className="h-6 w-6" />,
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50",
    count: 49,
    services: [
      "نصب تابلوهای توزیع و MCC",
      "آچارکشی و ترموگرافی",
      "نصب بانک خازنی",
      "تشخیص علت قطع شدن‌های مکرر",
      "طراحی سیستم برق‌رسانی",
    ],
  },
  {
    id: "lubricants",
    name: "روانکارها",
    icon: <Droplets className="h-6 w-6" />,
    color: "from-emerald-400 to-green-400",
    bgColor: "bg-emerald-50",
    count: 21,
    services: [
      "انتخاب روغن و گریس مناسب",
      "آنالیز روغن کارکرده",
      "فیلتراسیون و تصفیه روغن",
      "تدوین برنامه روانکاری",
      "مشاوره تخصصی روانکاری",
    ],
  },
  {
    id: "elevator",
    name: "بالابر",
    icon: <ArrowUp className="h-6 w-6" />,
    color: "from-gray-400 to-slate-400",
    bgColor: "bg-gray-50",
    count: 18,
    services: [
      "نصب بالابرهای کارگاهی",
      "تعمیر سیستم هیدرولیک",
      "بازرسی ادواری و تست وزن",
      "تشخیص علت حرکت نکردن",
      "انتخاب بالابر مناسب",
    ],
  },
  {
    id: "construction-machinery",
    name: "ماشین آلات ساختمانی و راه سازی",
    icon: <HardHat className="h-6 w-6" />,
    color: "from-amber-400 to-orange-400",
    bgColor: "bg-amber-50",
    count: 36,
    services: [
      "تعمیرات موتور دیزل",
      "سرویس در محل پروژه",
      "تعمیرات زیربندی",
      "عیب‌یابی با دستگاه دیاگ",
      "بازرسی فنی ماشین‌آلات",
    ],
  },
  {
    id: "security-surveillance",
    name: "تجهیزات امنیتی و نظارتی",
    icon: <ShieldCheck className="h-6 w-6" />,
    color: "from-red-400 to-rose-400",
    bgColor: "bg-red-50",
    count: 30,
    services: [
      "نصب دوربین‌های مداربسته",
      "تعمیر DVR/NVR",
      "راه‌اندازی شبکه انتقال تصویر",
      "تشخیص علت هشدارهای کاذب",
      "طراحی پلن نظارتی",
    ],
  },
  {
    id: "production-line",
    name: "خط تولید",
    icon: <Workflow className="h-6 w-6" />,
    color: "from-violet-400 to-purple-400",
    bgColor: "bg-violet-50",
    count: 43,
    services: [
      "نصب و راه‌اندازی خطوط تولید",
      "جابجایی و بهینه‌سازی",
      "قراردادهای نگهداری جامع",
      "عیب‌یابی گلوگاه‌ها",
      "مشاوره افزایش بهره‌وری",
    ],
  },
  {
    id: "packaging-machinery",
    name: "ماشین آلات بسته بندی",
    icon: <Package className="h-6 w-6" />,
    color: "from-teal-400 to-cyan-400",
    bgColor: "bg-teal-50",
    count: 26,
    services: [
      "نصب دستگاه‌های بسته‌بندی",
      "تعمیرات مکانیکی و پنوماتیکی",
      "تنظیمات دوره‌ای",
      "تشخیص مشکلات کیفیت بسته‌بندی",
      "یکپارچه‌سازی خط بسته‌بندی",
    ],
  },
  {
    id: "inverter",
    name: "اینورتر (درایو)",
    icon: <RotateCcw className="h-6 w-6" />,
    color: "from-indigo-400 to-blue-400",
    bgColor: "bg-indigo-50",
    count: 47,
    services: [
      "نصب و پارامتردهی اینورتر",
      "تعمیرات بردهای قدرت",
      "تشخیص و رفع خطاهای اینورتر",
      "راه‌اندازی Vector Control",
      "بهینه‌سازی مصرف انرژی",
    ],
  },
]

const sampleProjects = [
  {
    id: 1,
    title: "پروژه تاسیسات صنعتی",
    category: "تاسیسات و سیالات",
    duration: "2 هفته",
    client: "شرکت A",
    image: "/placeholder.svg?height=400&width=250",
  },
  {
    id: 2,
    title: "پروژه برق صنعتی",
    category: "برق و اتوماسیون",
    duration: "1 هفته",
    client: "شرکت B",
    image: "/placeholder.svg?height=400&width=250",
  },
  {
    id: 3,
    title: "پروژه ماشین‌آلات",
    category: "ماشین‌آلات و تجهیزات",
    duration: "3 هفته",
    client: "شرکت C",
    image: "/placeholder.svg?height=400&width=250",
  },
]

const testimonials = [
  {
    id: 1,
    name: "محمد حسینی",
    company: "شرکت D",
    rating: 5,
    text: "خدمات اوستاکار بسیار خوب بود و در زمان تعیین شده انجام شد.",
    service: "تاسیسات و سیالات",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 2,
    name: "سید حسنی",
    company: "شرکت E",
    rating: 4,
    text: "متخصصین اوستاکار حرفه‌ای و پشتیبانی خوبی دارند.",
    service: "برق و اتوماسیون",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 3,
    name: "فاطمه احمدی",
    company: "شرکت F",
    rating: 5,
    text: "خدمات ماشین‌آلات و تجهیزات به شکل مطلوب انجام شد.",
    service: "ماشین‌آلات و تجهیزات",
    image: "/placeholder.svg?height=120&width=120",
  },
]

export default function OustakarPage() {
  const [selectedService, setSelectedService] = useState("")
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  const serviceCategories = [
    {
      id: "facilities",
      name: "تاسیسات و سیالات",
      description: "خدمات جامع پمپ‌ها، کمپرسورها، سیستم‌های هیدرولیک و تصفیه",
      icon: <Wrench className="h-6 w-6" />,
      count: 156,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      services: [
        "تعمیر و سرویس پمپ‌های صنعتی",
        "نگهداری کمپرسورهای هوا",
        "طراحی سیستم‌های هیدرولیک",
        "لوله‌کشی و پایپینگ صنعتی",
        "سیستم‌های فیلتراسیون",
        "تعمیر شیرآلات صنعتی",
      ],
    },
    {
      id: "electrical",
      name: "برق و اتوماسیون",
      description: "الکتروموتورها، ژنراتورها، سیستم‌های PLC و اتوماسیون صنعتی",
      icon: <Zap className="h-6 w-6" />,
      count: 142,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      services: [
        "تعمیر الکتروموتورهای AC و DC",
        "برنامه‌نویسی PLC",
        "طراحی تابلوهای برق صنعتی",
        "سیم‌کشی صنعتی",
        "تعمیر ژنراتورهای برق",
        "سیستم‌های اتوماسیون",
      ],
    },
    {
      id: "machinery",
      name: "ماشین‌آلات و تجهیزات",
      description: "گیربکس‌ها، یاتاقان‌ها، ماشین‌آلات نظافتی و ابزار دقیق",
      icon: <Cog className="h-6 w-6" />,
      count: 98,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      services: [
        "تعمیر گیربکس‌های صنعتی",
        "تعویض یاتاقان‌ها",
        "سرویس ماشین‌آلات نظافتی",
        "تعمیر دستگاه‌های تزریق پلاستیک",
        "کالیبراسیون ابزار دقیق",
        "تعمیر تجهیزات مکانیکی",
      ],
    },
    {
      id: "hvac",
      name: "تهویه مطبوع و تاسیسات",
      description: "سیستم‌های گرمایش، تهویه، تبرید و تأسیسات ساختمانی",
      icon: <Building className="h-6 w-6" />,
      count: 124,
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      services: [
        "تعمیر چیلرهای آب و هوا",
        "نگهداری دیگ‌های بخار",
        "نصب فن‌کویل‌ها",
        "تعمیر سیستم‌های سردخانه",
        "طراحی گرمایش مرکزی",
        "تهویه مطبوع صنعتی",
      ],
    },
  ]

  const featuredOustakars = [
    {
      id: 1,
      name: "علی محمدی",
      specialty: "متخصص برق صنعتی",
      rating: 4.9,
      reviewCount: 187,
      experience: 12,
      location: "تهران",
      image: "/placeholder.svg?height=120&width=120",
      available: true,
      completedJobs: 245,
      responseTime: "15 دقیقه",
      badge: "طلایی",
      skills: ["PLC", "اتوماسیون", "تابلو برق"],
    },
    {
      id: 2,
      name: "رضا کریمی",
      specialty: "متخصص تاسیسات",
      rating: 4.8,
      reviewCount: 156,
      experience: 15,
      location: "اصفهان",
      image: "/placeholder.svg?height=120&width=120",
      available: true,
      completedJobs: 198,
      responseTime: "20 دقیقه",
      badge: "نقره‌ای",
      skills: ["پمپ", "کمپرسور", "هیدرولیک"],
    },
    {
      id: 3,
      name: "حسین احمدی",
      specialty: "متخصص ماشین‌آلات",
      rating: 4.7,
      reviewCount: 134,
      experience: 10,
      location: "مشهد",
      image: "/placeholder.svg?height=120&width=120",
      available: true,
      completedJobs: 167,
      responseTime: "25 دقیقه",
      badge: "برنزی",
      skills: ["گیربکس", "یاتاقان", "تراش"],
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#253F8F] via-[#253F8F]/95 to-[#F18F20]/80">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-48 h-48 bg-[#F18F20]/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>
          <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-[#F18F20]/30 rounded-full blur-md animate-bounce delay-700"></div>
          <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-white/8 rounded-full blur-lg animate-pulse delay-300"></div>

          {/* Additional floating elements */}
          <div className="absolute top-10 right-10 w-6 h-6 bg-white/20 rounded-full animate-ping delay-200"></div>
          <div className="absolute bottom-10 left-10 w-4 h-4 bg-[#F18F20]/40 rounded-full animate-ping delay-1500"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Sparkles className="h-5 w-5 text-[#F18F20] animate-pulse" />
              <span className="text-white font-medium">پلتفرم هوشمند خدمات صنعتی</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
              <span className="block">متخصصین صنعتی</span>
              <span className="block bg-gradient-to-r from-white via-[#F18F20] to-white bg-clip-text text-transparent animate-pulse">
                در ۱۵ دقیقه
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-6 font-light max-w-4xl mx-auto leading-relaxed">
              سفارش دهید، قیمت دریافت کنید، متخصص اعزام شود
            </p>

            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12">
              بیش از ۵۰۰ متخصص حرفه‌ای آماده ارائه خدمات در سراسر کشور با ضمانت کیفیت
            </p>

            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-2xl">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                    <Input
                      placeholder="جستجوی متخصص، خدمات یا مهارت..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="h-16 pr-12 text-lg bg-white/90 backdrop-blur-sm border-0 rounded-2xl shadow-lg focus:bg-white focus:shadow-xl transition-all duration-300"
                    />
                  </div>
                  <div className="flex gap-3">
                    <Select>
                      <SelectTrigger className="h-16 w-48 bg-white/90 backdrop-blur-sm border-0 rounded-2xl shadow-lg">
                        <SelectValue placeholder="نوع خدمات" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="electromotor">الکتروموتور</SelectItem>
                        <SelectItem value="gearbox">گیربکس</SelectItem>
                        <SelectItem value="pump">پمپ</SelectItem>
                        <SelectItem value="generator">ژنراتور و موتور برق</SelectItem>
                        <SelectItem value="pneumatic">پنوماتیک</SelectItem>
                        <SelectItem value="pool">استخر، سونا، جکوزی</SelectItem>
                        <SelectItem value="hvac">تهویه مطبوع</SelectItem>
                        <SelectItem value="hydraulic">هیدرولیک</SelectItem>
                        <SelectItem value="piping">پایپینگ</SelectItem>
                        <SelectItem value="heating">گرمایش و موتورخانه</SelectItem>
                        <SelectItem value="fan">فن یا هواکش صنعتی</SelectItem>
                        <SelectItem value="paint-spray">رنگ پاش و تجهیزات</SelectItem>
                        <SelectItem value="material-handling">تجهیزات انتقال مواد و نیرو</SelectItem>
                        <SelectItem value="filtration">فیلتراسیون و تصفیه</SelectItem>
                        <SelectItem value="bearing">بلبرینگ و رولبرینگ</SelectItem>
                        <SelectItem value="compressor">کمپرسور</SelectItem>
                        <SelectItem value="plastic-injection">ماشین آلات تزریق پلاستیک</SelectItem>
                        <SelectItem value="cleaning">ماشین آلات نظافتی صنعتی</SelectItem>
                        <SelectItem value="chemicals">مواد شیمیایی</SelectItem>
                        <SelectItem value="precision">ابزار دقیق</SelectItem>
                        <SelectItem value="lighting">تجهیزات روشنایی</SelectItem>
                        <SelectItem value="cold-storage">سردخانه</SelectItem>
                        <SelectItem value="wire-cable">سیم و کابل</SelectItem>
                        <SelectItem value="automation">اتوماسیون صنعتی</SelectItem>
                        <SelectItem value="industrial-electrical">برق صنعتی</SelectItem>
                        <SelectItem value="lubricants">روانکارها</SelectItem>
                        <SelectItem value="elevator">بالابر</SelectItem>
                        <SelectItem value="construction">ماشین آلات ساختمانی و راه سازی</SelectItem>
                        <SelectItem value="security">تجهیزات امنیتی و نظارتی</SelectItem>
                        <SelectItem value="production">خط تولید</SelectItem>
                        <SelectItem value="packaging">ماشین آلات بسته بندی</SelectItem>
                        <SelectItem value="inverter">اینورتر</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="h-16 px-8 bg-gradient-to-r from-[#F18F20] to-[#F18F20]/80 hover:from-[#F18F20]/90 hover:to-[#F18F20]/70 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      <Search className="h-6 w-6" />
                    </Button>
                  </div>
                </div>

                {/* Quick search suggestions */}
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                  {["تعمیر پمپ", "برق صنعتی", "گیربکس", "تاسیسات", "اتوماسیون"].map((suggestion) => (
                    <Button
                      key={suggestion}
                      variant="ghost"
                      size="sm"
                      className="text-white/80 hover:text-white hover:bg-white/10 rounded-full px-4 py-2 text-sm transition-all duration-300"
                      onClick={() => setSearchQuery(suggestion)}
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
              {[
                { number: "500+", label: "متخصص حرفه‌ای", icon: <Users className="h-6 w-6" /> },
                { number: "2000+", label: "پروژه موفق", icon: <CheckCircle className="h-6 w-6" /> },
                { number: "4.8", label: "امتیاز کاربران", icon: <Star className="h-6 w-6" /> },
                { number: "15", label: "دقیقه پاسخ", icon: <Clock className="h-6 w-6" /> },
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                    <div className="text-[#F18F20] mb-3 flex justify-center">{stat.icon}</div>
                    <div className="text-2xl md:text-3xl font-black text-white mb-2">{stat.number}</div>
                    <div className="text-white/80 font-medium text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-right">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-8">سفارش خدمات در ۳ مرحله ساده</h3>
                  <div className="space-y-6">
                    {[
                      { step: 1, text: "شرح مشکل و انتخاب خدمات", icon: <Search className="h-5 w-5" /> },
                      { step: 2, text: "دریافت قیمت از متخصصین", icon: <Target className="h-5 w-5" /> },
                      { step: 3, text: "تایید قیمت و اعزام متخصص", icon: <Rocket className="h-5 w-5" /> },
                    ].map((item) => (
                      <div key={item.step} className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#F18F20] to-[#F18F20]/80 text-white rounded-xl flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <span className="text-white/90 font-medium text-lg">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <Dialog open={isOrderModalOpen} onOpenChange={setIsOrderModalOpen}>
                    <DialogTrigger asChild>
                      <Button
                        size="lg"
                        className="w-full bg-gradient-to-r from-[#F18F20] to-[#F18F20]/80 hover:from-[#F18F20]/90 hover:to-[#F18F20]/70 px-12 py-8 text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-0"
                      >
                        <Award className="ml-3 h-6 w-6" />
                        سفارش فوری خدمات
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-[#253F8F] text-center">
                          ثبت سفارش خدمات اوستاکار
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6 p-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            نوع خدمات مورد نیاز *
                          </label>
                          <Select value={selectedService} onValueChange={setSelectedService}>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="انتخاب نوع خدمات" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="facilities">تاسیسات و سیالات</SelectItem>
                              <SelectItem value="electrical">برق و اتوماسیون</SelectItem>
                              <SelectItem value="machinery">ماشین‌آلات و تجهیزات</SelectItem>
                              <SelectItem value="hvac">تهویه مطبوع</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              نام و نام خانوادگی *
                            </label>
                            <Input placeholder="نام کامل خود را وارد کنید" className="h-12" />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">شماره تماس *</label>
                            <Input placeholder="09xxxxxxxxx" className="h-12" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">آدرس محل خدمات *</label>
                          <Textarea placeholder="آدرس کامل محل ارائه خدمات را وارد کنید" className="min-h-[80px]" />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            شرح کامل مشکل و خدمات مورد نیاز *
                          </label>
                          <Textarea
                            placeholder="لطفاً مشکل خود را به تفصیل شرح دهید تا بتوانیم بهترین متخصص را برای شما انتخاب کنیم"
                            className="min-h-[120px]"
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">زمان مورد نظر</label>
                            <Select>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="انتخاب زمان" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="asap">در اسرع وقت</SelectItem>
                                <SelectItem value="today">امروز</SelectItem>
                                <SelectItem value="tomorrow">فردا</SelectItem>
                                <SelectItem value="this-week">این هفته</SelectItem>
                                <SelectItem value="next-week">هفته آینده</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">اولویت سفارش</label>
                            <Select>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="انتخاب اولویت" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="emergency">اضطراری</SelectItem>
                                <SelectItem value="high">بالا</SelectItem>
                                <SelectItem value="normal">عادی</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="bg-[#F18F20]/10 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Camera className="h-5 w-5 text-[#F18F20]" />
                            <span className="font-semibold text-[#253F8F]">ضمیمه تصاویر (اختیاری)</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">
                            برای تشخیص بهتر مشکل، تصاویر مربوطه را ضمیمه کنید
                          </p>
                          <Button
                            variant="outline"
                            className="w-full border-[#F18F20] text-[#F18F20] hover:bg-[#F18F20]/10 bg-transparent"
                          >
                            <Camera className="ml-2 h-4 w-4" />
                            انتخاب تصاویر
                          </Button>
                        </div>

                        <Button
                          className="w-full bg-gradient-to-r from-[#253F8F] to-[#F18F20] hover:from-[#253F8F]/90 hover:to-[#F18F20]/90 py-4 text-lg font-bold shadow-lg"
                          onClick={() => setIsOrderModalOpen(false)}
                        >
                          <Zap className="ml-2 h-5 w-5" />
                          ثبت سفارش و دریافت قیمت
                        </Button>

                        <div className="text-center text-sm text-gray-500">
                          پس از ثبت سفارش، متخصصین مناسب قیمت خود را ارائه خواهند داد
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <div className="flex items-center justify-center gap-4 text-white/70 text-sm">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-[#F18F20]" />
                      <span>ضمانت کیفیت</span>
                    </div>
                    <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#F18F20]" />
                      <span>پاسخ سریع</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#253F8F]/10 rounded-full px-6 py-3 mb-6">
              <Tool className="h-5 w-5 text-[#253F8F]" />
              <span className="text-[#253F8F] font-semibold">۳۲ دسته‌بندی جامع خدمات</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-[#253F8F] to-[#F18F20] bg-clip-text text-transparent">
              خدمات تخصصی صنعتی اوستاکار
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              دسترسی به بیش از ۱۰۰۰ متخصص مجرب در ۳۲ حوزه تخصصی صنعتی
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {comprehensiveServiceCategories.map((category, index) => (
              <Card
                key={category.id}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden transform hover:scale-105 hover:-translate-y-2 bg-white"
              >
                <Collapsible>
                  <CardContent className="p-0">
                    <div className={`${category.bgColor} p-6 text-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <div
                          className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                        >
                          {category.icon}
                        </div>
                        <h3 className="font-black text-lg mb-2 text-gray-800 leading-tight">{category.name}</h3>
                        <Badge className="bg-gradient-to-r from-[#F18F20]/10 to-[#F18F20]/20 text-[#F18F20] border-[#F18F20]/30 px-3 py-1 text-xs font-semibold">
                          {category.count} متخصص
                        </Badge>
                      </div>
                    </div>

                    <div className="p-4 bg-white">
                      <CollapsibleTrigger className="w-full" onClick={() => toggleCategory(category.id)}>
                        <Button
                          variant="ghost"
                          className="w-full justify-between text-[#253F8F] hover:bg-[#253F8F]/5 p-2 h-auto"
                        >
                          <span className="text-sm font-semibold">مشاهده خدمات</span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${
                              expandedCategories.includes(category.id) ? "rotate-180" : ""
                            }`}
                          />
                        </Button>
                      </CollapsibleTrigger>

                      <CollapsibleContent className="mt-3">
                        <div className="space-y-2">
                          {category.services.map((service, serviceIndex) => (
                            <div
                              key={serviceIndex}
                              className="flex items-start text-xs text-gray-700 bg-gray-50 rounded-lg p-3 hover:bg-[#F18F20]/5 transition-colors group/service"
                            >
                              <CheckCircle className="h-3 w-3 text-[#F18F20] ml-2 flex-shrink-0 mt-0.5 group-hover/service:scale-110 transition-transform" />
                              <span className="leading-relaxed">{service}</span>
                            </div>
                          ))}
                        </div>

                        <Button
                          className="w-full mt-4 bg-gradient-to-r from-[#253F8F] to-[#F18F20] hover:from-[#253F8F]/90 hover:to-[#F18F20]/90 font-semibold py-2 text-sm shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                          onClick={() => {
                            setSelectedService(category.id)
                            setIsOrderModalOpen(true)
                          }}
                        >
                          سفارش خدمات {category.name}
                          <ChevronRight className="mr-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </CollapsibleContent>
                    </div>
                  </CardContent>
                </Collapsible>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#253F8F]/10 to-[#F18F20]/10 rounded-3xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-black mb-4 text-[#253F8F]">خدمات مورد نظر خود را پیدا نکردید؟</h3>
              <p className="text-gray-600 mb-6 text-lg">
                با تیم پشتیبانی ما تماس بگیرید تا بهترین متخصص را برای شما پیدا کنیم
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-gradient-to-r from-[#253F8F] to-[#F18F20] hover:from-[#253F8F]/90 hover:to-[#F18F20]/90 px-8 py-3 font-semibold shadow-lg"
                  onClick={() => setIsOrderModalOpen(true)}
                >
                  <MessageCircle className="ml-2 h-5 w-5" />
                  درخواست مشاوره رایگان
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#253F8F] text-[#253F8F] hover:bg-[#253F8F]/10 px-8 py-3 font-semibold bg-transparent"
                >
                  <Phone className="ml-2 h-5 w-5" />
                  تماس با پشتیبانی
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F18F20]/10 rounded-full px-6 py-3 mb-6">
                <Award className="h-5 w-5 text-[#F18F20]" />
                <span className="text-[#F18F20] font-semibold">متخصصین برتر</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-[#253F8F] to-[#F18F20] bg-clip-text text-transparent">
                اوستاکارهای ممتاز
              </h2>
              <p className="text-lg text-gray-600">بهترین متخصصین با بالاترین امتیاز و تجربه مجرب</p>
            </div>
            <Button
              variant="outline"
              className="border-2 border-[#F18F20] text-[#F18F20] hover:bg-[#F18F20]/10 bg-transparent px-6 py-3 font-semibold group"
            >
              مشاهده همه
              <ChevronRight className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredOustakars.map((oustakar) => (
              <Card
                key={oustakar.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white border-0 shadow-lg"
              >
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-[#253F8F]/10 to-[#F18F20]/10 p-8 text-center relative">
                    <div className="absolute top-4 right-4">
                      <Badge
                        className={`${oustakar.badge === "طلایی" ? "bg-yellow-100 text-yellow-700" : oustakar.badge === "نقره‌ای" ? "bg-gray-100 text-gray-700" : "bg-orange-100 text-orange-700"} font-semibold`}
                      >
                        {oustakar.badge}
                      </Badge>
                    </div>

                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden mb-6 mx-auto ring-4 ring-white shadow-xl">
                      <Image
                        src={oustakar.image || "/placeholder.svg"}
                        alt={oustakar.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <h3 className="font-black text-xl mb-2 text-gray-800">{oustakar.name}</h3>
                    <p className="text-[#253F8F] font-semibold mb-4">{oustakar.specialty}</p>

                    <div className="flex items-center justify-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(oustakar.rating) ? "fill-[#F18F20] text-[#F18F20]" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-lg font-bold mr-2">({oustakar.rating})</span>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {oustakar.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-white/50 text-gray-700">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-white">
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="flex items-center justify-center text-gray-600 bg-gray-50 rounded-lg py-3">
                        <MapPin className="h-4 w-4 ml-1 text-[#F18F20]" />
                        {oustakar.location}
                      </div>
                      <div className="flex items-center justify-center text-gray-600 bg-gray-50 rounded-lg py-3">
                        <Briefcase className="h-4 w-4 ml-1 text-[#F18F20]" />
                        {oustakar.experience} سال تجربه
                      </div>
                      <div className="flex items-center justify-center text-gray-600 bg-gray-50 rounded-lg py-3">
                        <CheckCircle className="h-4 w-4 ml-1 text-[#F18F20]" />
                        {oustakar.completedJobs} پروژه
                      </div>
                      <div className="flex items-center justify-center text-gray-600 bg-gray-50 rounded-lg py-3">
                        <Clock className="h-4 w-4 ml-1 text-[#F18F20]" />
                        پاسخ در {oustakar.responseTime}
                      </div>
                    </div>

                    <div className="flex items-center justify-center mb-6">
                      <Badge className="bg-green-100 text-green-700 px-4 py-2 font-semibold">
                        <div className="w-2 h-2 bg-green-500 rounded-full ml-2 animate-pulse"></div>
                        آماده به کار
                      </Badge>
                    </div>

                    <div className="flex gap-3">
                      <Button className="flex-1 bg-gradient-to-r from-[#253F8F] to-[#F18F20] hover:from-[#253F8F]/90 hover:to-[#F18F20]/90 font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                        درخواست متخصص
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-[#F18F20] text-[#F18F20] hover:bg-[#F18F20]/10 bg-transparent"
                      >
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-[#253F8F] to-[#F18F20] bg-clip-text text-transparent">
              نمونه پروژه‌های موفق
            </h2>
            <p className="text-lg text-gray-600">نگاهی به کارهای انجام شده توسط متخصصین اوستاکار</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sampleProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 group transform hover:scale-105"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#F18F20] text-white font-semibold px-3 py-1">{project.category}</Badge>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-white/90 text-[#253F8F] hover:bg-white">
                      <Play className="h-4 w-4 ml-1" />
                      مشاهده جزئیات
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-800">{project.title}</h3>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 ml-1 text-[#F18F20]" />
                      مدت اجرا: {project.duration}
                    </span>
                    <span className="flex items-center">
                      <Building className="h-4 w-4 ml-1 text-[#F18F20]" />
                      {project.client}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-16 bg-gradient-to-r from-[#253F8F] to-[#F18F20] bg-clip-text text-transparent">
            مزایای استفاده از اوستاکار
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <CardContent className="p-10">
                <div className="w-24 h-24 bg-gradient-to-r from-[#253F8F] to-[#F18F20] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <TrendingUp className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-6 text-gray-800">تعیین قیمت منصفانه</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  قیمت‌گذاری شفاف و منصفانه بر اساس نوع خدمات و پیچیدگی کار
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <CardContent className="p-10">
                <div className="w-24 h-24 bg-gradient-to-r from-[#F18F20] to-[#253F8F] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-6 text-gray-800">ضمانت کیفیت خدمات</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  تمامی خدمات با ضمانت کیفیت و امکان پیگیری ارائه می‌شود
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <CardContent className="p-10">
                <div className="w-24 h-24 bg-gradient-to-r from-[#253F8F] to-[#253F8F]/80 text-white rounded-2xl flex items-center justify-center mx-auto mb-8 text-3xl font-black shadow-lg">
                  <Phone className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-6 text-gray-800">پشتیبانی ۲۴/۷</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  پشتیبانی کامل در تمامی ساعات شبانه‌روز برای رفع مشکلات فوری
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-16 bg-gradient-to-r from-[#253F8F] to-[#F18F20] bg-clip-text text-transparent">
            نحوه کار با اوستاکار
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "ثبت درخواست",
                desc: "نوع خدمات مورد نیاز خود را انتخاب کنید",
                color: "from-[#253F8F] to-[#253F8F]/80",
              },
              {
                step: 2,
                title: "انتخاب متخصص",
                desc: "بهترین متخصص را بر اساس امتیاز انتخاب کنید",
                color: "from-[#F18F20] to-[#F18F20]/80",
              },
              {
                step: 3,
                title: "اعزام متخصص",
                desc: "متخصص در زمان تعیین شده اعزام می‌شود",
                color: "from-[#253F8F] to-[#253F8F]/80",
              },
              {
                step: 4,
                title: "پرداخت و امتیاز",
                desc: "پس از انجام کار، پرداخت و امتیازدهی کنید",
                color: "from-[#F18F20] to-[#F18F20]/80",
              },
            ].map((item) => (
              <Card
                key={item.step}
                className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${item.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black shadow-lg`}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-xl font-black mb-4 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#253F8F]/10 via-transparent to-[#F18F20]/10 p-12 rounded-3xl shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-[#253F8F] to-[#F18F20] bg-clip-text text-transparent">
                  دانلود اپلیکیشن اوستاکار
                </h2>
                <p className="text-gray-600 mb-8 text-xl leading-relaxed">
                  دسترسی آسان به متخصصین حرفه‌ای در هر زمان و مکان با امکانات پیشرفته
                </p>
                <div className="flex flex-wrap gap-6">
                  <Button className="bg-gradient-to-r from-[#253F8F] to-[#F18F20] hover:from-[#253F8F]/90 hover:to-[#F18F20]/90 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    دانلود از بازار
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-[#253F8F] text-[#253F8F] hover:bg-[#253F8F]/10 px-8 py-4 text-lg font-semibold bg-transparent"
                  >
                    دانلود از اپ استور
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-80 h-80">
                  <Image
                    src="/placeholder.svg?height=400&width=250"
                    alt="اپلیکیشن موبایل اوستاکار"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-[#253F8F] to-[#F18F20] bg-clip-text text-transparent">
              نظرات مشتریان راضی
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              تجربه واقعی مشتریان از استفاده از خدمات اوستاکار
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden ml-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                      <div className="flex items-center mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#F18F20] text-[#F18F20]" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-[#F18F20]/30 mb-4" />
                  <p className="text-gray-700 leading-relaxed mb-4">{testimonial.text}</p>
                  <Badge className="bg-[#253F8F]/10 text-[#253F8F] border-[#253F8F]/20">{testimonial.service}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-16 bg-gradient-to-r from-[#253F8F] to-[#F18F20] bg-clip-text text-transparent">
            چرا اوستاکار؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <CardContent className="p-10">
                <div className="w-24 h-24 bg-gradient-to-r from-[#253F8F] to-[#F18F20] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <TrendingUp className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-6 text-gray-800">قیمت‌گذاری رقابتی</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  دریافت چندین قیمت از متخصصین مختلف و انتخاب بهترین گزینه
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <CardContent className="p-10">
                <div className="w-24 h-24 bg-gradient-to-r from-[#F18F20] to-[#253F8F] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-6 text-gray-800">ضمانت ۱۰۰٪ کیفیت</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  تمامی خدمات با ضمانت کیفیت و امکان بازگشت وجه ارائه می‌شود
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <CardContent className="p-10">
                <div className="w-24 h-24 bg-gradient-to-r from-[#253F8F] to-[#253F8F]/80 text-white rounded-2xl flex items-center justify-center mx-auto mb-8 text-3xl font-black shadow-lg">
                  <ThumbsUp className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-6 text-gray-800">رضایت ۹۸٪ مشتریان</h3>
                <p className="text-gray-600 leading-relaxed text-lg">بیش از ۹۸٪ مشتریان از کیفیت خدمات ما راضی هستند</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
