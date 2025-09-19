"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"
import {
  ChevronLeft,
  Zap,
  ArrowRight,
  Settings,
  Award,
  Lightbulb,
  Gauge,
  Thermometer,
  Shield,
  Check,
  Star,
  Download,
  BarChart3,
  Cpu,
  Factory,
  Info,
  AlertTriangle,
  Play,
  PlusCircle,
  MinusCircle,
  Sparkles,
  Flame,
  Bolt,
  Clock,
  DollarSign,
  Percent,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// انواع الکتروموتور
const electromotorTypes = [
  {
    id: "three-phase",
    name: "الکتروموتور سه فاز",
    description: "الکتروموتورهای سه فاز برای کاربردهای صنعتی با توان بالا",
    image: "/placeholder.svg?key=km2ag",
    color: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-blue-500",
    powerRange: "0.37 تا 315 کیلووات",
    applications: ["خطوط تولید", "پمپ‌های صنعتی", "کمپرسورها", "نوار نقاله‌ها"],
    features: ["راندمان بالا", "گشتاور بالا", "عمر طولانی", "قابلیت کنترل دور"],
  },
  {
    id: "single-phase",
    name: "الکتروموتور تک فاز",
    description: "الکتروموتورهای تک فاز برای کاربردهای سبک‌تر و مصارف خانگی",
    image: "/placeholder.svg?key=qjfx1",
    color: "from-green-500/20 to-emerald-500/20",
    iconBg: "bg-green-500",
    powerRange: "0.18 تا 4 کیلووات",
    applications: ["پمپ‌های کوچک", "فن‌ها", "کمپرسورهای کوچک", "ماشین‌آلات سبک"],
    features: ["راه‌اندازی آسان", "نگهداری کم", "قیمت مناسب"],
  },
  {
    id: "explosion-proof",
    name: "الکتروموتور ضد انفجار",
    description: "الکتروموتورهای مخصوص محیط‌های با خطر انفجار و گازهای قابل اشتعال",
    image: "/placeholder.svg?key=71jww",
    color: "from-red-500/20 to-rose-500/20",
    iconBg: "bg-red-500",
    powerRange: "0.37 تا 200 کیلووات",
    applications: ["صنایع نفت و گاز", "پتروشیمی", "معادن", "صنایع شیمیایی"],
    features: ["ایمنی بالا", "مقاوم در برابر محیط‌های خطرناک", "گواهینامه‌های بین‌المللی"],
  },
  {
    id: "brake-motor",
    name: "الکتروموتور ترمزدار",
    description: "الکتروموتورهای مجهز به سیستم ترمز برای توقف سریع و دقیق",
    image: "/placeholder.svg?key=78l73",
    color: "from-amber-500/20 to-orange-500/20",
    iconBg: "bg-amber-500",
    powerRange: "0.37 تا 30 کیلووات",
    applications: ["جرثقیل‌ها", "آسانسورها", "ماشین‌آلات با نیاز به توقف دقیق"],
    features: ["توقف سریع", "دقت بالا", "ایمنی بیشتر"],
  },
  {
    id: "dc-motor",
    name: "الکتروموتور DC",
    description: "الکتروموتورهای جریان مستقیم برای کاربردهای با نیاز به کنترل دقیق سرعت",
    image: "/placeholder.svg?key=h4iq5",
    color: "from-purple-500/20 to-indigo-500/20",
    iconBg: "bg-purple-500",
    powerRange: "0.18 تا 100 کیلووات",
    applications: ["ماشین‌آلات CNC", "رباتیک", "سیستم‌های کنترل دقیق"],
    features: ["کنترل دقیق سرعت", "گشتاور بالا در سرعت پایین", "شتاب‌گیری سریع"],
  },
  {
    id: "servo-motor",
    name: "سروو موتور",
    description: "موتورهای سروو برای کنترل دقیق موقعیت، سرعت و گشتاور",
    image: "/placeholder.svg?key=m3hcd",
    color: "from-teal-500/20 to-cyan-500/20",
    iconBg: "bg-teal-500",
    powerRange: "0.1 تا 75 کیلووات",
    applications: ["رباتیک", "ماشین‌آلات CNC", "خطوط مونتاژ اتوماتیک"],
    features: ["دقت بسیار بالا", "پاسخ دینامیکی سریع", "کنترل‌پذیری عالی"],
  },
  {
    id: "geared-motor",
    name: "الکتروموتور گیربکسی",
    description: "الکتروموتورهای یکپارچه با گیربکس برای کاهش سرعت و افزایش گشتاور",
    image: "/placeholder.svg?key=s41gb",
    color: "from-pink-500/20 to-purple-500/20",
    iconBg: "bg-pink-500",
    powerRange: "0.18 تا 90 کیلووات",
    applications: ["خطوط تولید", "نوار نقاله‌ها", "میکسرها", "دستگاه‌های بسته‌بندی"],
    features: ["طراحی فشرده", "نصب آسان", "نگهداری کمتر", "گشتاور بالا"],
  },
  {
    id: "high-efficiency",
    name: "الکتروموتور بازده بالا",
    description: "الکتروموتورهای با راندمان بالا برای کاهش مصرف انرژی",
    image: "/placeholder.svg?key=t19nc",
    color: "from-violet-500/20 to-purple-500/20",
    iconBg: "bg-violet-500",
    powerRange: "0.75 تا 315 کیلووات",
    applications: ["صنایع با کارکرد مداوم", "پمپ‌ها و فن‌های صنعتی", "کمپرسورها"],
    features: ["صرفه‌جویی در مصرف انرژی", "بازگشت سرمایه سریع", "کاهش انتشار CO2"],
  },
  {
    id: "vfd-motor",
    name: "الکتروموتور مخصوص اینورتر",
    description: "الکتروموتورهای طراحی شده برای کار با درایوهای کنترل دور",
    image: "/placeholder.svg?key=cyj1f",
    color: "from-yellow-500/20 to-amber-500/20",
    iconBg: "bg-yellow-500",
    powerRange: "0.37 تا 250 کیلووات",
    applications: ["سیستم‌های با نیاز به کنترل دور", "پمپ‌ها و فن‌های متغیر", "خطوط تولید انعطاف‌پذیر"],
    features: ["سازگار با فرکانس متغیر", "عایق‌بندی تقویت شده", "محافظت حرارتی بهتر"],
  },
  {
    id: "special-motors",
    name: "الکتروموتورهای خاص",
    description: "الکتروموتورهای با کاربردهای ویژه و طراحی سفارشی",
    image: "/placeholder.svg?key=dkzyy",
    color: "from-sky-500/20 to-blue-500/20",
    iconBg: "bg-sky-500",
    powerRange: "متغیر",
    applications: ["صنایع خاص", "محیط‌های ویژه", "کاربردهای سفارشی"],
    features: ["طراحی سفارشی", "مطابق با نیازهای خاص", "راه‌حل‌های منحصر به فرد"],
  },
]

// برندهای مع��بر
const popularBrands = [
  {
    name: "زیمنس (Siemens)",
    logo: "/placeholder.svg?key=93z2e",
    country: "آلمان",
    specialties: ["الکتروموتورهای صنعتی", "سروو موتورها", "موتورهای بازده بالا"],
    rating: 4.9,
  },
  {
    name: "ABB",
    logo: "/placeholder.svg?key=91pdb",
    country: "سوئیس-سوئد",
    specialties: ["الکتروموتورهای ضد انفجار", "موتورهای DC", "موتورهای بازده بالا"],
    rating: 4.8,
  },
  {
    name: "WEG",
    logo: "/placeholder.svg?key=8t8f9",
    country: "برزیل",
    specialties: ["الکتروموتورهای سه فاز", "موتورهای تک فاز", "موتورهای ضد انفجار"],
    rating: 4.7,
  },
  {
    name: "موتوژن",
    logo: "/placeholder.svg?key=7zmzm",
    country: "ایران",
    specialties: ["الکتروموتورهای سه فاز", "موتورهای تک فاز", "موتورهای کولر"],
    rating: 4.5,
  },
  {
    name: "جمکو",
    logo: "/placeholder.svg?key=wnbvm",
    country: "ایران",
    specialties: ["الکتروموتورهای صنعتی", "موتورهای کولر", "موتورهای خاص"],
    rating: 4.4,
  },
  {
    name: "الکتروژن",
    logo: "/placeholder.svg?key=mnd4g",
    country: "ایران",
    specialties: ["الکتروموتورهای سه فاز", "موتورهای تک فاز", "موتورهای ضد انفجار"],
    rating: 4.3,
  },
  {
    name: "دانفوس (Danfoss)",
    logo: "/placeholder.svg?key=s8bxq",
    country: "دانمارک",
    specialties: ["موتورهای مخصوص اینورتر", "موتورهای بازده بالا", "موتورهای گیربکسی"],
    rating: 4.7,
  },
  {
    name: "لروی سومر (Leroy Somer)",
    logo: "/placeholder.svg?key=u4x76",
    country: "فرانسه",
    specialties: ["الکتروموتورهای صنعتی", "ژنراتورها", "موتورهای DC"],
    rating: 4.6,
  },
]

// نظرات مشتریان
const customerReviews = [
  {
    id: 1,
    name: "مهندس علی محمدی",
    company: "شرکت صنایع فولاد",
    avatar: "/placeholder.svg?key=b5khg",
    rating: 5,
    review:
      "ما از الکتروموتورهای سه فاز زیمنس در خط تولید خود استفاده می‌کنیم و از کیفیت و دوام آن‌ها بسیار راضی هستیم. مصرف انرژی پایین و عملکرد بی‌نقص آن‌ها باعث شده هزینه‌های تولید ما کاهش پیدا کند.",
    productType: "الکتروموتور سه فاز",
    date: "۱۴۰۲/۰۲/۱۵",
  },
  {
    id: 2,
    name: "مهندس سارا رضایی",
    company: "شرکت تجهیزات پزشکی",
    avatar: "/placeholder.svg?key=64inz",
    rating: 4,
    review:
      "سروو موتورهای خریداری شده از اوستا صنعت دقت بسیار بالایی دارند و برای دستگاه‌های تولیدی ما که نیاز به دقت میکرون دارند، بسیار مناسب هستند. تنها مشکل، قیمت نسبتاً بالای آن‌هاست.",
    productType: "سروو موتور",
    date: "۱۴۰۲/۰۱/۲۰",
  },
  {
    id: 3,
    name: "مهندس حسین کریمی",
    company: "پالایشگاه نفت",
    avatar: "/placeholder.svg?key=m92id",
    rating: 5,
    review:
      "الکتروموتورهای ضد انفجار ABB که از اوستا صنعت خریداری کردیم، در محیط‌های خطرناک پالایشگاه به خوبی کار می‌کنند و استانداردهای ایمنی را به طور کامل رعایت می‌کنند. پشتیبانی فنی عالی شرکت نیز قابل تقدیر است.",
    productType: "الکتروموتور ضد انفجار",
    date: "۱۴۰۱/۱۱/۱۰",
  },
]

// مقایسه انواع الکتروموتور
const motorComparison = [
  {
    type: "الکتروموتور سه فاز",
    efficiency: 90,
    initialCost: 70,
    maintenanceCost: 30,
    lifespan: 95,
    controlComplexity: 50,
    powerRange: "0.37 تا 315 کیلووات",
    pros: ["راندمان بالا", "عمر طولانی", "قدرت بالا", "ارتعاش کم"],
    cons: ["نیاز به برق سه فاز", "هزینه اولیه بالاتر", "نیاز به تجهیزات راه‌انداز"],
  },
  {
    type: "الکتروموتور تک فاز",
    efficiency: 75,
    initialCost: 40,
    maintenanceCost: 40,
    lifespan: 80,
    controlComplexity: 30,
    powerRange: "0.18 تا 4 کیلووات",
    pros: ["نصب و راه‌اندازی آسان", "اتصال به برق تک فاز خانگی", "قیمت مناسب"],
    cons: ["توان محدود", "راندمان کمتر", "گشتاور راه‌اندازی کمتر"],
  },
  {
    type: "الکتروموتور DC",
    efficiency: 80,
    initialCost: 85,
    maintenanceCost: 70,
    lifespan: 75,
    controlComplexity: 80,
    powerRange: "0.18 تا 100 کیلووات",
    pros: ["کنترل دقیق سرعت", "گشتاور بالا در سرعت پایین", "شتاب‌گیری سریع"],
    cons: ["نیاز به نگهداری بیشتر", "هزینه بالاتر", "نیاز به درایو DC"],
  },
  {
    type: "سروو موتور",
    efficiency: 85,
    initialCost: 100,
    maintenanceCost: 60,
    lifespan: 85,
    controlComplexity: 100,
    powerRange: "0.1 تا 75 کیلووات",
    pros: ["دقت بسیار بالا", "کنترل موقعیت، سرعت و گشتاور", "پاسخ دینامیکی سریع"],
    cons: ["قیمت بسیار بالا", "پیچیدگی نصب و راه‌اندازی", "نیاز به درایو و کنترلر خاص"],
  },
]

// راهنمای خرید
const buyingGuideSteps = [
  {
    title: "تعیین نوع کاربرد",
    description: "مشخص کنید الکتروموتور برای چه کاربردی استفاده خواهد شد (صنعتی، خانگی، کشاورزی و...)",
    icon: Factory,
  },
  {
    title: "محاسبه توان مورد نیاز",
    description: "توان مورد نیاز (کیلووات یا اسب بخار) را بر اساس بار مکانیکی محاسبه کنید",
    icon: Gauge,
  },
  {
    title: "انتخاب نوع منبع تغذیه",
    description: "مشخص کنید که آیا به الکتروموتور تک فاز یا سه فاز نیاز دارید",
    icon: Zap,
  },
  {
    title: "بررسی شرایط محیطی",
    description: "شرایط محیطی مانند دما، رطوبت، گرد و غبار و مواد قابل اشتعال را در نظر بگیرید",
    icon: Thermometer,
  },
  {
    title: "تعیین سرعت مورد نیاز",
    description: "سرعت چرخش مورد نیاز (دور بر دقیقه) و نیاز به کنترل سرعت را مشخص کنید",
    icon: Gauge,
  },
  {
    title: "بررسی نیاز به کنترل دقیق",
    description: "اگر نیاز به کنترل دقیق موقعیت یا سرعت دارید، سروو موتور یا موتور DC را در نظر بگیرید",
    icon: Settings,
  },
  {
    title: "انتخاب کلاس راندمان",
    description: "برای کاهش هزینه‌های بلندمدت، کلاس راندمان مناسب (IE2، IE3 یا IE4) را انتخاب کنید",
    icon: Sparkles,
  },
  {
    title: "بررسی گارانتی و خدمات پس از فروش",
    description: "گارانتی، خدمات پس از فروش و دسترسی به قطعات یدکی را بررسی کنید",
    icon: Shield,
  },
]

// ویدیوهای آموزشی
const educationalVideos = [
  {
    id: 1,
    title: "اصول کار الکتروموتورهای سه فاز",
    thumbnail: "/placeholder.svg?key=omwk2",
    duration: "۱۲:۳۵",
    views: "۱۲,۴۵۶",
    link: "#",
  },
  {
    id: 2,
    title: "نحوه انتخاب الکتروموتور مناسب",
    thumbnail: "/placeholder.svg?height=200&width=350&query=how to choose electric motor",
    duration: "۱۸:۲۰",
    views: "۸,۷۹۰",
    link: "#",
  },
  {
    id: 3,
    title: "عیب‌یابی و تعمیر الکتروموتورها",
    thumbnail: "/placeholder.svg?height=200&width=350&query=electric motor troubleshooting",
    duration: "۲۵:۴۵",
    views: "۱۵,۳۲۱",
    link: "#",
  },
  {
    id: 4,
    title: "اصول نگهداری و سرویس الکتروموتورها",
    thumbnail: "/placeholder.svg?height=200&width=350&query=electric motor maintenance",
    duration: "۱۵:۱۰",
    views: "۷,۶۵۴",
    link: "#",
  },
]

// کاربردهای صنعتی
const industrialApplications = [
  {
    industry: "صنایع فولاد",
    applications: ["خطوط نورد", "کوره‌های القایی", "جرثقیل‌های سقفی", "سیستم‌های انتقال مواد"],
    motorTypes: ["الکتروموتور سه فاز", "الکتروموتور ضد انفجار", "الکتروموتور ترمزدار"],
    image: "/placeholder.svg?height=300&width=500&query=steel industry motors",
  },
  {
    industry: "صنایع نفت و گاز",
    applications: ["پمپ‌های انتقال", "کمپرسورها", "سیستم‌های تهویه", "میکسرها"],
    motorTypes: ["الکتروموتور ضد انفجار", "الکتروموتور بازده بالا", "سروو موتور"],
    image: "/placeholder.svg?height=300&width=500&query=oil and gas industry motors",
  },
  {
    industry: "صنایع غذایی",
    applications: ["خطوط بسته‌بندی", "میکسرهای مواد غذایی", "نوار نقاله‌ها", "سیستم‌های سرمایش"],
    motorTypes: ["الکتروموتور استنلس استیل", "الکتروموتور گیربکسی", "الکتروموتور تک فاز"],
    image: "/placeholder.svg?height=300&width=500&query=food industry motors",
  },
  {
    industry: "صنایع نساجی",
    applications: ["ماشین‌های بافندگی", "ماشین‌های ریسندگی", "سیستم‌های رنگرزی", "برش‌های اتوماتیک"],
    motorTypes: ["سروو موتور", "الکتروموتور سه فاز", "الکتروموتور مخصوص اینورتر"],
    image: "/placeholder.svg?height=300&width=500&query=textile industry motors",
  },
]

export default function ElectromotorsClientPage() {
  const [activeTab, setActiveTab] = useState("subcategories")
  const [selectedMotorType, setSelectedMotorType] = useState("الکتروموتور سه فاز")
  const [currentStep, setCurrentStep] = useState(1)
  const [videoPlaying, setVideoPlaying] = useState(null)
  const [showAllBrands, setShowAllBrands] = useState(false)
  const videoRefs = useRef({})

  // انیمیشن برای عناصر
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  // برای توقف ویدیو هنگام تغییر تب
  useEffect(() => {
    if (activeTab !== "videos" && videoPlaying) {
      setVideoPlaying(null)
    }
  }, [activeTab])

  return (
    <div className="container mx-auto px-4 py-8">
      {/* بخش مسیر */}
      <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">
          صفحه اصلی
        </Link>
        <ChevronLeft className="h-4 w-4" />
        <Link href="/products" className="hover:text-primary">
          محصولات
        </Link>
        <ChevronLeft className="h-4 w-4" />
        <span className="text-foreground">الکتروموتورها</span>
      </div>

      {/* بخش هدر */}
      <div className="relative rounded-3xl overflow-hidden mb-12">
        <div className="relative h-[500px] w-full">
          <Image
            src="/placeholder.svg?height=1000&width=1600&query=industrial electric motors collection factory detailed"
            alt="انواع الکتروموتور صنعتی"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/20 px-4 py-1 text-sm">
              بیش از ۱۰۰۰ مدل مختلف
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">انواع الکتروموتور و لوازم جانبی</h1>
            <p className="text-white/90 text-lg md:text-xl mb-6 leading-relaxed">
              الکتروموتورها قلب تپنده صنعت هستند. از الکتروموتورهای تک فاز کوچک تا موتورهای سه فاز قدرتمند صنعتی، همه را
              با بهترین کیفیت و قیمت مناسب از برندهای معتبر در اوستا صنعت بیابید.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                مشاهده محصولات
                <ArrowRight className="mr-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 backdrop-blur-sm">
                راهنمای انتخاب
                <Info className="mr-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* نشانگر اسکرول */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-3 bg-white rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </div>

      {/* بخش تب‌ها */}
      <Tabs defaultValue="subcategories" value={activeTab} onValueChange={setActiveTab} className="mb-12">
        <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-2 mb-8">
          <TabsTrigger value="subcategories" className="text-sm md:text-base">
            <Settings className="h-4 w-4 ml-2 hidden md:inline" />
            زیردسته‌ها
          </TabsTrigger>
          <TabsTrigger value="comparison" className="text-sm md:text-base">
            <BarChart3 className="h-4 w-4 ml-2 hidden md:inline" />
            مقایسه انواع
          </TabsTrigger>
          <TabsTrigger value="guide" className="text-sm md:text-base">
            <Lightbulb className="h-4 w-4 ml-2 hidden md:inline" />
            راهنمای خرید
          </TabsTrigger>
          <TabsTrigger value="brands" className="text-sm md:text-base">
            <Award className="h-4 w-4 ml-2 hidden md:inline" />
            برندها
          </TabsTrigger>
          <TabsTrigger value="applications" className="text-sm md:text-base">
            <Factory className="h-4 w-4 ml-2 hidden md:inline" />
            کاربردها
          </TabsTrigger>
          <TabsTrigger value="videos" className="text-sm md:text-base">
            <Play className="h-4 w-4 ml-2 hidden md:inline" />
            ویدیوها
          </TabsTrigger>
        </TabsList>

        {/* تب زیردسته‌ها */}
        <TabsContent value="subcategories" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {electromotorTypes.map((motor, index) => (
              <motion.div
                key={motor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Link href={`/products/electromotors/${motor.id}`} className="block h-full">
                  <Card className="overflow-hidden h-full bg-white dark:bg-gray-900 border-0 shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
                    {/* گرادیانت پس‌زمینه */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${motor.color} opacity-30 z-0`}></div>

                    <div className="relative">
                      <div className="relative h-52 w-full overflow-hidden">
                        <Image
                          src={motor.image || "/placeholder.svg"}
                          alt={motor.name}
                          fill
                          className="object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                      </div>

                      {/* آیکون دسته‌بندی */}
                      <div
                        className={`absolute top-4 right-4 w-12 h-12 ${motor.iconBg} rounded-full flex items-center justify-center shadow-lg`}
                      >
                        <Zap className="h-6 w-6 text-white" />
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="font-bold text-xl text-white">{motor.name}</h3>
                      </div>
                    </div>

                    <CardContent className="p-4 relative z-10">
                      <div className="flex justify-between items-center mb-3">
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 px-3 py-1">
                          {motor.powerRange}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground mb-4 line-clamp-2">{motor.description}</p>

                      <div className="space-y-2 mb-4">
                        {motor.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <div className={`w-2 h-2 ${motor.iconBg} rounded-full ml-2`}></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-end">
                        <Button variant="ghost" className="text-primary group">
                          مشاهده جزئیات
                          <ArrowRight className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* بخش نظرات مشتریان */}
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-yellow-500/10 p-3 rounded-full">
                <Star className="h-6 w-6 text-yellow-500" />
              </div>
              <h2 className="text-2xl font-bold">نظرات مشتریان</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {customerReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden">
                      <Image
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground mr-2">{review.date}</span>
                  </div>

                  <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">{review.productType}</Badge>

                  <p className="text-muted-foreground text-sm">{review.review}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* تب مقایسه انواع */}
        <TabsContent value="comparison">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">مقایسه انواع الکتروموتور</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">انتخاب نوع الکتروموتور برای مقایسه:</h3>
                <div className="flex flex-wrap gap-2">
                  {motorComparison.map((motor) => (
                    <Button
                      key={motor.type}
                      variant={selectedMotorType === motor.type ? "default" : "outline"}
                      onClick={() => setSelectedMotorType(motor.type)}
                      className="mb-2"
                    >
                      {motor.type}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                <h3 className="text-lg font-semibold mb-2">{selectedMotorType}</h3>
                <p className="text-muted-foreground mb-3">
                  محدوده توان: {motorComparison.find((m) => m.type === selectedMotorType)?.powerRange}
                </p>

                <div className="space-y-2 mb-4">
                  <h4 className="font-medium">مزایا:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {motorComparison
                      .find((m) => m.type === selectedMotorType)
                      ?.pros.map((pro, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">
                          {pro}
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">معایب:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {motorComparison
                      .find((m) => m.type === selectedMotorType)
                      ?.cons.map((con, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">
                          {con}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span>راندمان انرژی</span>
                  <span className="font-semibold">
                    {motorComparison.find((m) => m.type === selectedMotorType)?.efficiency}%
                  </span>
                </div>
                <Progress
                  value={motorComparison.find((m) => m.type === selectedMotorType)?.efficiency}
                  className="h-2"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>هزینه اولیه</span>
                  <span className="font-semibold">
                    {motorComparison.find((m) => m.type === selectedMotorType)?.initialCost}%
                  </span>
                </div>
                <Progress
                  value={motorComparison.find((m) => m.type === selectedMotorType)?.initialCost}
                  className="h-2"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>هزینه نگهداری</span>
                  <span className="font-semibold">
                    {motorComparison.find((m) => m.type === selectedMotorType)?.maintenanceCost}%
                  </span>
                </div>
                <Progress
                  value={motorComparison.find((m) => m.type === selectedMotorType)?.maintenanceCost}
                  className="h-2"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>طول عمر</span>
                  <span className="font-semibold">
                    {motorComparison.find((m) => m.type === selectedMotorType)?.lifespan}%
                  </span>
                </div>
                <Progress value={motorComparison.find((m) => m.type === selectedMotorType)?.lifespan} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>پیچیدگی کنترل</span>
                  <span className="font-semibold">
                    {motorComparison.find((m) => m.type === selectedMotorType)?.controlComplexity}%
                  </span>
                </div>
                <Progress
                  value={motorComparison.find((m) => m.type === selectedMotorType)?.controlComplexity}
                  className="h-2"
                />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">مقایسه تصویری انواع الکتروموتور</h2>

            <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-6">
              <Image
                src="/placeholder.svg?height=800&width=1600&query=electric motors comparison detailed technical"
                alt="مقایسه تصویری انواع الکتروموتور"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                <h3 className="font-bold text-blue-700 dark:text-blue-300 flex items-center gap-2 mb-3">
                  <Bolt className="h-5 w-5" />
                  مقایسه از نظر کارایی
                </h3>
                <p className="text-sm text-muted-foreground">
                  الکتروموتورهای سه فاز بالاترین راندمان را دارند، در حالی که موتورهای DC و سروو موتورها کنترل‌پذیری
                  بیشتری دارند. موتورهای تک فاز راندمان کمتری دارند اما برای کاربردهای سبک مناسب هستند.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
                <h3 className="font-bold text-green-700 dark:text-green-300 flex items-center gap-2 mb-3">
                  <DollarSign className="h-5 w-5" />
                  مقایسه از نظر هزینه
                </h3>
                <p className="text-sm text-muted-foreground">
                  الکتروموتورهای تک فاز ارزان‌ترین گزینه هستند، در حالی که سروو موتورها گران‌ترین هستند. موتورهای سه فاز
                  هزینه متوسطی دارند و با توجه به طول عمر بالا، هزینه به ازای ساعت کارکرد پایینی دارند.
                </p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4">
                <h3 className="font-bold text-amber-700 dark:text-amber-300 flex items-center gap-2 mb-3">
                  <Clock className="h-5 w-5" />
                  مقایسه از نظر طول عمر
                </h3>
                <p className="text-sm text-muted-foreground">
                  الکتروموتورهای سه فاز بیشترین طول عمر را دارند و می‌توانند تا ۲۰ سال کار کنند. موتورهای DC به دلیل وجود
                  کموتاتور و جاروبک، طول عمر کمتری دارند و نیاز به تعمیرات دوره‌ای دارند.
                </p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                دانلود جدول مقایسه کامل (PDF)
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* تب راهنمای خرید */}
        <TabsContent value="guide">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">راهنمای گام به گام خرید الکتروموتور</h2>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="sticky top-24">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 mb-6">
                    <h3 className="font-bold text-lg mb-4">مراحل انتخاب الکتروموتور</h3>

                    <div className="space-y-3">
                      {buyingGuideSteps.map((step, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentStep(index + 1)}
                          className={`flex items-center gap-2 w-full text-right p-2 rounded-lg transition-colors ${
                            currentStep === index + 1
                              ? "bg-primary text-white"
                              : "hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                        >
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center ${
                              currentStep === index + 1
                                ? "bg-white text-primary"
                                : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
                            }`}
                          >
                            {index + 1}
                          </div>
                          <span className="text-sm font-medium">{step.title}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                      <h3 className="font-bold text-amber-700 dark:text-amber-300">نکته مهم</h3>
                    </div>
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      برای انتخاب دقیق‌تر، همیشه با کارشناسان فنی مشورت کنید. انتخاب نادرست الکتروموتور می‌تواند منجر به
                      کاهش عمر دستگاه، افزایش مصرف انرژی و حتی خرابی تجهیزات متصل شود.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">
                        {currentStep}
                      </div>
                      <h3 className="text-xl font-bold">{buyingGuideSteps[currentStep - 1].title}</h3>
                    </div>

                    <p className="text-muted-foreground mb-6">{buyingGuideSteps[currentStep - 1].description}</p>

                    <div className="relative h-[300px] w-full rounded-xl overflow-hidden mb-6">
                      <Image
                        src={`/placeholder.svg?height=600&width=1200&query=electric motor ${buyingGuideSteps[currentStep - 1].title} guide`}
                        alt={buyingGuideSteps[currentStep - 1].title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="bg-white dark:bg-gray-900 rounded-xl p-4 mb-6">
                      <h4 className="font-bold mb-3">نکات کلیدی:</h4>
                      <ul className="space-y-2">
                        {currentStep === 1 && (
                          <>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>برای کاربردهای صنعتی سنگین، الکتروموتورهای سه فاز مناسب‌تر هستند.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>برای کاربردهای خانگی و صنعتی سبک، الکتروموتورهای تک فاز کافی هستند.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>برای محیط‌های با خطر انفجار، حتماً از الکتروموتورهای ضد انفجار استفاده کنید.</span>
                            </li>
                          </>
                        )}

                        {currentStep === 2 && (
                          <>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>
                                توان مورد نیاز را با در نظر گرفتن ضریب اطمینان (معمولاً ۱.۲ تا ۱.۵) محاسبه کنید.
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>برای تبدیل اسب بخار به کیلووات، عدد اسب بخار را در ۰.۷۴۶ ضرب کنید.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>انتخاب موتور با توان بیش از حد نیاز، باعث کاهش راندمان و افزایش هزینه می‌شود.</span>
                            </li>
                          </>
                        )}

                        {currentStep === 3 && (
                          <>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>برق تک فاز معمولاً ۲۲۰ ولت و برق سه فاز ۳۸۰ ولت است.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>
                                برای توان‌های بالاتر از ۳ کیلووات، معمولاً از الکتروموتورهای سه فاز استفاده می‌شود.
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>
                                در صورت نیاز به استفاده از موتور سه فاز در محیط تک فاز، می‌توان از اینورتر استفاده کرد.
                              </span>
                            </li>
                          </>
                        )}

                        {currentStep > 3 && (
                          <>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>نکته کلیدی اول برای {buyingGuideSteps[currentStep - 1].title}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>نکته کلیدی دوم برای {buyingGuideSteps[currentStep - 1].title}</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>نکته کلیدی سوم برای {buyingGuideSteps[currentStep - 1].title}</span>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>

                    <div className="flex justify-between">
                      <Button
                        variant="outline"
                        onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                        disabled={currentStep === 1}
                      >
                        مرحله قبلی
                      </Button>
                      <Button
                        onClick={() => setCurrentStep(Math.min(buyingGuideSteps.length, currentStep + 1))}
                        disabled={currentStep === buyingGuideSteps.length}
                      >
                        مرحله بعدی
                      </Button>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 bg-white dark:bg-gray-900 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4">سوالات متداول در انتخاب الکتروموتور</h3>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>چگونه توان مورد نیاز الکتروموتور را محاسبه کنم؟</AccordionTrigger>
                      <AccordionContent>
                        برای محاسبه توان مورد نیاز، ابتدا باید گشتاور مورد نیاز بار را محاسبه کنید. سپس با استفاده از
                        فرمول P = T × ω (توان = گشتاور × سرعت زاویه‌ای) می‌توانید توان مورد نیاز را به دست آورید. برای
                        اطمینان، معمولاً ضریب اطمینانی بین ۱.۲ تا ۱.۵ در نظر گرفته می‌شود تا موتور در شرایط سخت‌تر نیز
                        بتواند کار کند.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>تفاوت کلاس عایق‌بندی F و H چیست؟</AccordionTrigger>
                      <AccordionContent>
                        کلاس عایق‌بندی، حداکثر دمای مجاز سیم‌پیچ موتور را مشخص می‌کند. کلاس F برای دمای حداکثر ۱۵۵ درجه
                        سانتی‌گراد و کلاس H برای دمای حداکثر ۱۸۰ درجه سانتی‌گراد طراحی شده است. موتورهای با کلاس عایق‌بندی
                        بالاتر، در محیط‌های گرم‌تر و کاربردهای سنگین‌تر قابل استفاده هستند.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        آیا می‌توان از اینورتر برای کنترل سرعت هر نوع الکتروموتوری استفاده کرد؟
                      </AccordionTrigger>
                      <AccordionContent>
                        اگرچه می‌توان از اینورتر برای کنترل سرعت اکثر الکتروموتورهای AC استفاده کرد، اما برای بهترین
                        عملکرد، بهتر است از موتورهای مخصوص اینورتر (VFD Compatible) استفاده شود. این موتورها دارای
                        عایق‌بندی تقویت شده و سیستم خنک‌کنندگی مناسب برای کار در فرکانس‌های مختلف هستند.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger>IP در الکتروموتورها به چه معناست؟</AccordionTrigger>
                      <AccordionContent>
                        IP (Ingress Protection) درجه حفاظت الکتروموتور در برابر نفوذ اجسام خارجی و آب را نشان می‌دهد. عدد
                        اول (از ۰ تا ۶) میزان حفاظت در برابر اجسام جامد و گرد و غبار و عدد دوم (از ۰ تا ۸) میزان حفاظت
                        در برابر آب را نشان می‌دهد. مثلاً IP55 یعنی حفاظت خوب در برابر گرد و غبار و حفاظت در برابر پاشش آب
                        از هر جهت.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="mt-6 text-center">
                    <Button className="gap-2">
                      <Download className="h-4 w-4" />
                      دانلود راهنمای کامل انتخاب الکتروموتور (PDF)
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* تب برندها */}
        <TabsContent value="brands">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">برندهای معتبر الکتروموتور</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(showAllBrands ? popularBrands : popularBrands.slice(0, 4)).map((brand, index) => (
                <motion.div
                  key={brand.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="h-20 flex items-center justify-center mb-4">
                    <Image
                      src={brand.logo || "/placeholder.svg"}
                      alt={brand.name}
                      width={150}
                      height={80}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="font-bold text-center mb-2">{brand.name}</h3>
                  <p className="text-sm text-muted-foreground text-center mb-3">کشور: {brand.country}</p>

                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(brand.rating)
                            ? "fill-yellow-500 text-yellow-500"
                            : i < brand.rating
                              ? "fill-yellow-500 text-yellow-500 opacity-50"
                              : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground mr-1">({brand.rating})</span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">تخصص‌ها:</h4>
                    <div className="flex flex-wrap gap-2">
                      {brand.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Button variant="outline" onClick={() => setShowAllBrands(!showAllBrands)}>
                {showAllBrands ? (
                  <>
                    <MinusCircle className="h-4 w-4 ml-2" />
                    نمایش کمتر
                  </>
                ) : (
                  <>
                    <PlusCircle className="h-4 w-4 ml-2" />
                    نمایش همه برندها
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">راهنمای انتخاب برند مناسب</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">معیارهای انتخاب برند:</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                      ۱
                    </div>
                    <div>
                      <h4 className="font-medium">کیفیت و دوام</h4>
                      <p className="text-sm text-muted-foreground">
                        برندهای معتبر معمولاً از مواد با کیفیت بالا استفاده می‌کنند و استانداردهای سختگیرانه‌ای برای تولید
                        دارند.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                      ۲
                    </div>
                    <div>
                      <h4 className="font-medium">راندمان انرژی</h4>
                      <p className="text-sm text-muted-foreground">
                        برندهای پیشرو معمولاً موتورهایی با راندمان بالاتر (IE3 و IE4) تولید می‌کنند که در بلندمدت به
                        صرفه‌جویی در مصرف انرژی کمک می‌کنند.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                      ۳
                    </div>
                    <div>
                      <h4 className="font-medium">خدمات پس از فروش</h4>
                      <p className="text-sm text-muted-foreground">
                        دسترسی به خدمات پس از فروش، قطعات یدکی و پشتیبانی فنی از عوامل مهم در انتخاب برند است.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                      ۴
                    </div>
                    <div>
                      <h4 className="font-medium">گارانتی</h4>
                      <p className="text-sm text-muted-foreground">
                        مدت و شرایط گارانتی می‌تواند نشان‌دهنده اطمینان سازنده به محصول خود باشد.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-4">برندهای ایرانی vs. خارجی</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium flex items-center gap-2">
                        <Badge>مزایای برندهای ایرانی</Badge>
                      </h4>
                      <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>قیمت مناسب‌تر</li>
                        <li>دسترسی آسا��‌تر به خدمات پس از فروش</li>
                        <li>سازگاری با شرایط آب و هوایی ایران</li>
                        <li>تأمین سریع‌تر قطعات یدکی</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium flex items-center gap-2">
                        <Badge>مزایای برندهای خارجی</Badge>
                      </h4>
                      <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>کیفیت و دوام بالاتر (در برندهای معتبر)</li>
                        <li>تنوع بیشتر محصولات</li>
                        <li>راندمان انرژی بالاتر</li>
                        <li>فناوری‌های پیشرفته‌تر</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Info className="h-5 w-5 text-blue-500" />
                    <h3 className="font-bold text-blue-700 dark:text-blue-300">توصیه کارشناسان</h3>
                  </div>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    برای کاربردهای حساس و صنعتی که نیاز به دقت و قابلیت اطمینان بالا دارند، برندهای معتبر جهانی مانند
                    زیمنس، ABB و WEG توصیه می‌شوند. برای کاربردهای عمومی و کم‌تر حساس، برندهای ایرانی معتبر مانند موتوژن و
                    جمکو می‌توانند گزینه‌های مناسبی باشند.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* تب کاربردها */}
        <TabsContent value="applications">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">کاربردهای صنعتی الکتروموتورها</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industrialApplications.map((industry, index) => (
                <motion.div
                  key={industry.industry}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.industry}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-white">{industry.industry}</h3>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">کاربردها:</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.applications.map((app, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">انواع الکتروموتور مناسب:</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.motorTypes.map((type, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">کاربردهای خاص الکتروموتورها</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Cpu className="h-5 w-5 text-blue-500" />
                  </div>
                  <h3 className="font-bold">اتوماسیون و رباتیک</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  در سیستم‌های اتوماسیون و رباتیک، سروو موتورها و موتورهای پله‌ای به دلیل دقت بالا و کنترل‌پذیری عالی،
                  کاربرد گسترده‌ای دارند.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    سروو موتور
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    موتور پله‌ای
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    موتور خطی
                  </Badge>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Flame className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="font-bold">محیط‌های خطرناک</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  در محیط‌های با خطر انفجار مانند پالایشگاه‌ها و معادن، الکتروموتورهای ضد انفجار با گواهینامه‌های ATEX یا
                  IECEx استفاده می‌شوند.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    الکتروموتور ضد انفجار
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    الکتروموتور ضد گاز متان
                  </Badge>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <Percent className="h-5 w-5 text-amber-500" />
                  </div>
                  <h3 className="font-bold">کاربردهای با راندمان بالا</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  در کاربردهایی که موتور به صورت مداوم و طولانی‌مدت کار می‌کند، استفاده از الکتروموتورهای با راندمان بالا
                  (IE3 و IE4) به صرفه‌جویی قابل توجه در مصرف انرژی منجر می‌شود.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    الکتروموتور IE3
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    الکتروموتور IE4
                  </Badge>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">نمودار کاربردهای الکتروموتور بر اساس صنعت</h3>

              <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=1600&query=electric motors applications by industry chart"
                  alt="نمودار کاربردهای الکتروموتور بر اساس صنعت"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </TabsContent>

        {/* تب ویدیوها */}
        <TabsContent value="videos">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">ویدیوهای آموزشی الکتروموتور</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educationalVideos.map((video) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden"
                >
                  <div className="relative">
                    <div className="relative h-48 w-full">
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      {videoPlaying !== video.id && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <button
                            onClick={() => setVideoPlaying(video.id)}
                            className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform hover:scale-110"
                          >
                            <Play className="h-8 w-8 text-white fill-white" />
                          </button>
                        </div>
                      )}
                      {videoPlaying === video.id && (
                        <div className="absolute inset-0 bg-black flex items-center justify-center">
                          <video
                            ref={(el) => el && (videoRefs.current[video.id] = el)}
                            controls
                            autoPlay
                            className="w-full h-full"
                            onEnded={() => setVideoPlaying(null)}
                          >
                            <source src={video.link || "#"} type="video/mp4" />
                            مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
                          </video>
                        </div>
                      )}
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold mb-2">{video.title}</h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{video.views} بازدید</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary"
                        onClick={() => setVideoPlaying(video.id)}
                      >
                        مشاهده ویدیو
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Button className="gap-2">
                <Play className="h-4 w-4" />
                مشاهده همه ویدیوها
              </Button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">وبینارهای تخصصی الکتروموتور</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <Badge className="mb-3">به زودی</Badge>
                <h3 className="text-xl font-bold mb-2">وبینار آشنایی با الکتروموتورهای بازده بالا</h3>
                <p className="text-muted-foreground mb-4">
                  در این وبینار با انواع الکتروموتورهای بازده بالا، مزایا و کاربردهای آن‌ها آشنا خواهید شد.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm">۱۵ خرداد ۱۴۰۲ - ساعت ۱۷:۰۰</span>
                  <Button variant="outline" size="sm">
                    ثبت‌نام
                  </Button>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <Badge className="mb-3">به زودی</Badge>
                <h3 className="text-xl font-bold mb-2">وبینار عیب‌یابی و تعمیر الکتروموتورها</h3>
                <p className="text-muted-foreground mb-4">
                  در این وبینار با روش‌های عیب‌یابی، تعمیر و نگهداری انواع الکتروموتورهای صنعتی آشنا خواهید شد.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm">۲۲ خرداد ۱۴۰۲ - ساعت ۱۷:۰۰</span>
                  <Button variant="outline" size="sm">
                    ثبت‌نام
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* بخش CTA */}
      <div className="rounded-3xl overflow-hidden relative mb-16">
        <div className="relative h-[300px] w-full">
          <Image
            src="/placeholder.svg?height=600&width=1200&query=industrial electric motor engineering team"
            alt="تیم مهندسی الکتروموتور صنعتی"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">نیاز به مشاوره تخصصی دارید؟</h2>
              <p className="text-white/90 text-lg mb-8">
                کارشناسان ما آماده ارائه مشاوره تخصصی برای انتخاب بهترین نوع الکتروموتور متناسب با نیاز شما هستند.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2">
                  تماس با کارشناسان
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 gap-2">
                  درخواست استعلام قیمت
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
