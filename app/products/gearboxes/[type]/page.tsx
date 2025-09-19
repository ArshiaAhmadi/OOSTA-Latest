import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  Star,
  Check,
  X,
  Info,
  HelpCircle,
  ShoppingCart,
  Download,
  FileText,
  Settings,
  PenToolIcon as Tool,
  Zap,
  Clock,
  DollarSign,
  Shield,
  Award,
  BarChart,
} from "lucide-react"

// گیربکس‌های ما
const gearboxTypes = {
  "worm-gearbox": {
    id: "worm-gearbox",
    name: "گیربکس حلزونی",
    title: "گیربکس حلزونی | انتقال قدرت با زاویه ۹۰ درجه",
    description:
      "گیربکس حلزونی نوعی گیربکس است که از یک چرخ دنده حلزونی و یک چرخ دنده تاج برای انتقال حرکت با زاویه ۹۰ درجه استفاده می‌کند. این گیربکس‌ها به دلیل نسبت کاهش بالا، عملکرد بی‌صدا و قابلیت خود قفل‌شوندگی، در صنایع مختلف کاربرد گسترده‌ای دارند.",
    shortDescription: "انتقال قدرت با زاویه ۹۰ درجه و نسبت کاهش بالا",
    heroImage: "/placeholder.svg?key=kppxv",
    detailImages: [
      {
        src: "/placeholder.svg?key=er49l",
        alt: "نمای برش خورده گیربکس حلزونی",
        caption: "ساختار داخلی گیربکس حلزونی",
      },
      {
        src: "/placeholder.svg?key=rmw7h",
        alt: "نصب گیربکس حلزونی",
        caption: "نحوه نصب گیربکس حلزونی در خط تولید",
      },
      {
        src: "/placeholder.svg?key=f4s1z",
        alt: "کاربردهای گیربکس حلزونی",
        caption: "کاربردهای متنوع گیربکس حلزونی در صنعت",
      },
    ],
    features: [
      {
        title: "نسبت کاهش بالا",
        description: "امکان دستیابی به نسبت کاهش بالا (تا ۱۰۰:۱) در یک مرحله",
        icon: BarChart,
      },
      {
        title: "انتقال قدرت با زاویه ۹۰ درجه",
        description: "طراحی مناسب برای تغییر جهت انتقال قدرت با زاویه ۹۰ درجه",
        icon: Settings,
      },
      {
        title: "عملکرد بی‌صدا",
        description: "کارکرد با صدا و ارتعاش کم به دلیل تماس پیوسته دنده‌ها",
        icon: Zap,
      },
      {
        title: "خود قفل‌شوندگی",
        description: "قابلیت خود قفل‌شوندگی برای جلوگیری از حرکت معکوس در برخی نسبت‌ها",
        icon: Shield,
      },
      {
        title: "طول عمر بالا",
        description: "دوام و پایداری بالا در صورت روانکاری مناسب و استفاده صحیح",
        icon: Clock,
      },
      {
        title: "قیمت مناسب",
        description: "هزینه تولید و نگهداری مقرون به صرفه نسبت به سایر انواع گیربکس",
        icon: DollarSign,
      },
    ],
    applications: [
      "خطوط بسته‌بندی و کانوایرها",
      "بالابرها و جرثقیل‌های صنعتی",
      "ماشین‌آلات غذایی و دارویی",
      "تجهیزات اتوماسیون صنعتی",
      "سیستم‌های انتقال مواد",
      "دستگاه‌های چاپ و بسته‌بندی",
    ],
    advantages: [
      "نسبت کاهش بالا در یک مرحله",
      "عملکرد بی‌صدا و با ارتعاش کم",
      "قابلیت خود قفل‌شوندگی",
      "طراحی فشرده و کم‌حجم",
      "قیمت مناسب و مقرون به صرفه",
      "نگهداری آسان",
    ],
    disadvantages: [
      "راندمان پایین‌تر نسبت به گیربکس‌های هلیکال",
      "تولید حرارت بیشتر در سرعت‌های بالا",
      "محدودیت در انتقال گشتاورهای بسیار بالا",
      "نیاز به روانکاری مناسب و منظم",
      "سایش بیشتر در صورت استفاده نادرست",
    ],
    technicalSpecs: [
      { name: "نسبت کاهش", value: "۵:۱ تا ۱۰۰:۱" },
      { name: "راندمان", value: "۴۰٪ تا ۹۰٪ (بسته به نسبت کاهش)" },
      { name: "توان قابل انتقال", value: "۰.۱۲ تا ۱۵ کیلووات" },
      { name: "گشتاور خروجی", value: "تا ۱۲۰۰۰ نیوتن متر" },
      { name: "سرعت ورودی", value: "تا ۳۰۰۰ دور بر دقیقه" },
      { name: "جنس چرخ دنده حلزونی", value: "فولاد آلیاژی سخت‌کاری شده" },
      { name: "جنس چرخ دنده تاج", value: "برنز فسفری یا آلومینیوم برنز" },
      { name: "نوع روانکار", value: "روغن سنتتیک مخصوص گیربکس حلزونی" },
      { name: "دمای کاری", value: "-۱۰ تا +۹۰ درجه سانتیگراد" },
    ],
    selectionGuide: [
      {
        title: "تعیین نسبت کاهش مورد نیاز",
        description:
          "نسبت کاهش مورد نیاز را با توجه به سرعت ورودی و سرعت خروجی مطلوب محاسبه کنید. گیربکس‌های حلزونی برای نسبت‌های کاهش بالا (معمولاً بین ۵:۱ تا ۱۰۰:۱) مناسب هستند.",
      },
      {
        title: "محاسبه گشتاور مورد نیاز",
        description:
          "گشتاور خروجی مورد نیاز را با توجه به بار مکانیکی سیستم محاسبه کنید. اطمینان حاصل کنید که گیربکس انتخابی توانایی تحمل این گشتاور را داشته باشد.",
      },
      {
        title: "بررسی شرایط محیطی",
        description:
          "شرایط محیطی مانند دما، رطوبت و آلودگی را در نظر بگیرید. برای محیط‌های خاص ممکن است به گیربکس با آب‌بندی ویژه نیاز باشد.",
      },
      {
        title: "تعیین سیکل کاری",
        description:
          "سیکل کاری (مدت زمان کارکرد مداوم) را مشخص کنید. برای کاربردهای با سیکل کاری بالا، گیربکس با ظرفیت حرارتی بیشتر انتخاب کنید.",
      },
      {
        title: "بررسی فضای نصب",
        description:
          "محدودیت‌های فضای نصب را در نظر بگیرید. گیربکس‌های حلزونی معمولاً طراحی فشرده‌ای دارند و برای فضاهای محدود مناسب هستند.",
      },
    ],
    maintenanceTips: [
      {
        title: "بررسی منظم سطح روغن",
        description: "سطح روغن گیربکس را به صورت منظم بررسی کنید. سطح روغن باید در محدوده مشخص شده توسط سازنده باشد.",
      },
      {
        title: "تعویض به موقع روغن",
        description:
          "روغن گیربکس را طبق توصیه سازنده تعویض کنید. معمولاً اولین تعویض روغن پس از ۵۰۰ ساعت کارکرد و سپس هر ۲۵۰۰ تا ۳۰۰۰ ساعت انجام می‌شود.",
      },
      {
        title: "بررسی نشتی",
        description: "گیربکس را از نظر نشتی روغن بررسی کنید. در صورت مشاهده نشتی، واشرها یا کاسه نمدها را تعویض کنید.",
      },
      {
        title: "بررسی صدا و ارتعاش",
        description:
          "به صدا و ارتعاش غیرعادی گیربکس توجه کنید. افزایش صدا یا ارتعاش می‌تواند نشانه فرسودگی یا آسیب باشد.",
      },
      {
        title: "بررسی دمای کارکرد",
        description:
          "دمای کارکرد گیربکس را کنترل کنید. دمای بیش از حد می‌تواند نشانه روانکاری ناکافی یا بار بیش از حد باشد.",
      },
    ],
    faqs: [
      {
        question: "آیا گیربکس حلزونی برای انتقال قدرت در دو جهت مناسب است؟",
        answer:
          "گیربکس‌های حلزونی معمولاً برای انتقال قدرت از محور حلزونی به چرخ دنده تاج طراحی شده‌اند و در این حالت راندمان بالایی دارند. انتقال قدرت در جهت معکوس (از چرخ دنده تاج به محور حلزونی) به دلیل اصطکاک بالا و خاصیت خود قفل‌شوندگی، راندمان بسیار پایینی دارد و در برخی نسبت‌های کاهش اصلاً امکان‌پذیر نیست.",
      },
      {
        question: "چرا گیربکس حلزونی گرم می‌شود؟",
        answer:
          "گرم شدن گیربکس حلزونی به دلیل اصطکاک بین محور حلزونی و چرخ دنده تاج است. این گرما در حد متعارف طبیعی است، اما گرمای بیش از حد می‌تواند نشانه روانکاری نامناسب، بار بیش از حد، یا مشکل در طراحی باشد.",
      },
      {
        question: "آیا می‌توان از روغن معمولی گیربکس برای گیربکس حلزونی استفاده کرد؟",
        answer:
          "خیر، گیربکس‌های حلزونی به دلیل اصطکاک بالا و فشار تماس زیاد بین دنده‌ها، به روغن مخصوص با افزودنی‌های ضد سایش و فشار بالا نیاز دارند. استفاده از روغن نامناسب می‌تواند منجر به سایش سریع و آسیب به گیربکس شود.",
      },
      {
        question: "عمر مفید یک گیربکس حلزونی چقدر است؟",
        answer:
          "عمر مفید یک گیربکس حلزونی با کیفیت خوب، در صورت استفاده صحیح و نگهداری مناسب، می‌تواند بین ۱۵ تا ۲۵ سال باشد. عواملی مانند بار کاری، شرایط محیطی، کیفیت روانکاری و نحوه نصب بر طول عمر گیربکس تأثیر می‌گذارند.",
      },
      {
        question: "آیا گیربکس حلزونی نیاز به دوره آب‌بندی دارد؟",
        answer:
          "بله، گیربکس‌های حلزونی نو معمولاً به یک دوره آب‌بندی نیاز دارند. در این دوره، گیربکس باید با بار کمتر (حدود ۵۰٪ بار نامی) و در دوره‌های کوتاه‌تر کار کند تا سطوح تماس دنده‌ها به تدریج هموار شوند. این دوره معمولاً بین ۵۰ تا ۱۰۰ ساعت کارکرد است.",
      },
    ],
    comparisonTable: {
      title: "مقایسه گیربکس حلزونی با سایر انواع گیربکس",
      headers: ["ویژگی", "گیربکس حلزونی", "گیربکس هلیکال", "گیربکس مخروطی"],
      rows: [
        ["نسبت کاهش در یک مرحله", "۵:۱ تا ۱۰۰:۱", "۱:۱ تا ۱۰:۱", "۱:۱ تا ۵:۱"],
        ["راندمان", "۴۰٪ تا ۹۰٪", "۹۵٪ تا ۹۸٪", "۹۰٪ تا ۹۵٪"],
        ["زاویه انتقال قدرت", "۹۰ درجه", "موازی", "۹۰ درجه"],
        ["سطح صدا", "بسیار کم", "متوسط", "متوسط"],
        ["خود قفل‌شوندگی", "دارد", "ندارد", "ندارد"],
        ["هزینه نسبی", "کم", "متوسط", "زیاد"],
        ["پیچیدگی ساخت", "متوسط", "کم", "زیاد"],
        ["تحمل شوک", "خوب", "عالی", "خوب"],
        ["نیاز به نگهداری", "متوسط", "کم", "متوسط"],
      ],
    },
    popularBrands: [
      {
        name: "SEW-EURODRIVE",
        logo: "/placeholder.svg?key=jx0k7",
        description: "تولیدکننده آلمانی با بیش از ۹۰ سال سابقه در زمینه سیستم‌های انتقال قدرت",
      },
      {
        name: "NORD Drivesystems",
        logo: "/placeholder.svg?height=100&width=200&query=NORD Drivesystems logo",
        description: "تولیدکننده پیشرو در زمینه گیربکس‌های صنعتی با کیفیت بالا",
      },
      {
        name: "Bonfiglioli",
        logo: "/placeholder.svg?height=100&width=200&query=Bonfiglioli logo",
        description: "شرکت ایتالیایی متخصص در سیستم‌های انتقال قدرت و کنترل حرکت",
      },
      {
        name: "Motovario",
        logo: "/placeholder.svg?height=100&width=200&query=Motovario logo",
        description: "تولیدکننده ایتالیایی گیربکس‌های صنعتی با طراحی نوآورانه",
      },
      {
        name: "Rossi",
        logo: "/placeholder.svg?height=100&width=200&query=Rossi gearbox logo",
        description: "تولیدکننده ایتالیایی با بیش از ۶۰ سال تجربه در زمینه گیربکس‌های صنعتی",
      },
    ],
    relatedProducts: [
      {
        id: 1,
        name: "گیربکس حلزونی SEW مدل S97",
        price: 45800000,
        discountPrice: 42500000,
        rating: 4.8,
        image: "/placeholder.svg?height=300&width=300&query=SEW worm gearbox S97",
        isNew: true,
        slug: "sew-worm-gearbox-s97",
      },
      {
        id: 2,
        name: "گیربکس حلزونی NORD مدل SI-75",
        price: 38700000,
        discountPrice: null,
        rating: 4.5,
        image: "/placeholder.svg?height=300&width=300&query=NORD worm gearbox SI-75",
        isNew: false,
        slug: "nord-worm-gearbox-si75",
      },
      {
        id: 3,
        name: "گیربکس حلزونی Bonfiglioli مدل VF-49",
        price: 32500000,
        discountPrice: 29800000,
        rating: 4.6,
        image: "/placeholder.svg?height=300&width=300&query=Bonfiglioli worm gearbox VF-49",
        isNew: false,
        slug: "bonfiglioli-worm-gearbox-vf49",
      },
      {
        id: 4,
        name: "گیربکس حلزونی Motovario مدل NMRV-63",
        price: 28900000,
        discountPrice: null,
        rating: 4.3,
        image: "/placeholder.svg?height=300&width=300&query=Motovario worm gearbox NMRV-63",
        isNew: true,
        slug: "motovario-worm-gearbox-nmrv63",
      },
    ],
    documents: [
      {
        title: "کاتالوگ فنی گیربکس‌های حلزونی",
        description: "مشخصات فنی، ابعاد و جداول انتخاب گیربکس‌های حلزونی",
        icon: FileText,
        url: "#",
      },
      {
        title: "راهنمای نصب و راه‌اندازی",
        description: "دستورالعمل‌های نصب، راه‌اندازی و تنظیم گیربکس‌های حلزونی",
        icon: Settings,
        url: "#",
      },
      {
        title: "راهنمای نگه��اری و عیب‌یابی",
        description: "روش‌های نگهداری، عیب‌یابی و رفع مشکلات رایج گیربکس‌های حلزونی",
        icon: Tool,
        url: "#",
      },
      {
        title: "جدول روانکارهای توصیه شده",
        description: "لیست روانکارهای مناسب برای گیربکس‌های حلزونی و شرایط استفاده از آن‌ها",
        icon: Download,
        url: "#",
      },
    ],
  },
  "book-gearbox": {
    id: "book-gearbox",
    name: "گیربکس کتابی",
    title: "گیربکس کتابی | انتقال قدرت با زاویه ۹۰ درجه و راندمان بالا",
    description:
      "گیربکس کتابی (یا گیربکس زاویه‌ای) نوعی گیربکس است که از چرخ دنده‌های مخروطی برای انتقال حرکت با زاویه ۹۰ درجه استفاده می‌کند. این گیربکس‌ها به دلیل طراحی فشرده، راندمان بالا و قابلیت تحمل بارهای سنگین، در صنایع مختلف کاربرد گسترده‌ای دارند.",
    shortDescription: "انتقال قدرت با زاویه ۹۰ درجه و راندمان بالا",
    heroImage: "/placeholder.svg?height=600&width=1200&query=industrial right angle gearbox detailed",
    detailImages: [
      {
        src: "/placeholder.svg?height=400&width=600&query=right angle gearbox cutaway view",
        alt: "نمای برش خورده گیربکس کتابی",
        caption: "ساختار داخلی گیربکس کتابی",
      },
      {
        src: "/placeholder.svg?height=400&width=600&query=right angle gearbox installation",
        alt: "نصب گیربکس کتابی",
        caption: "نحوه نصب گیربکس کتابی در خط تولید",
      },
      {
        src: "/placeholder.svg?height=400&width=600&query=right angle gearbox applications",
        alt: "کاربردهای گیربکس کتابی",
        caption: "کاربردهای متنوع گیربکس کتابی در صنعت",
      },
    ],
    features: [
      {
        title: "انتقال قدرت با زاویه ۹۰ درجه",
        description: "طراحی مناسب برای تغییر جهت انتقال قدرت با زاویه ۹۰ درجه",
        icon: Settings,
      },
      {
        title: "راندمان بالا",
        description: "راندمان بالا (تا ۹۸٪) در انتقال قدرت",
        icon: Zap,
      },
      {
        title: "طراحی فشرده",
        description: "طراحی فشرده و کم‌حجم برای نصب در فضاهای محدود",
        icon: Shield,
      },
      {
        title: "تحمل بارهای سنگین",
        description: "قابلیت تحمل بارهای شعاعی و محوری سنگین",
        icon: BarChart,
      },
      {
        title: "عملکرد دو طرفه",
        description: "قابلیت انتقال قدرت در هر دو جهت با راندمان یکسان",
        icon: Clock,
      },
      {
        title: "دقت بالا",
        description: "دقت بالا در انتقال حرکت و کنترل لقی",
        icon: Award,
      },
    ],
    // سایر اطلاعات مشابه گیربکس حلزونی...
  },
  "helical-gearbox": {
    id: "helical-gearbox",
    name: "گیربکس هلیکال (شافت مستقیم)",
    title: "گیربکس هلیکال | انتقال قدرت با راندمان بالا و عملکرد بی‌صدا",
    description:
      "گیربکس هلیکال نوعی گیربکس است که از چرخ دنده‌های مارپیچ برای انتقال قدرت استفاده می‌کند. این گیربکس‌ها به دلیل راندمان بالا، عملکرد بی‌صدا و قابلیت تحمل بارهای سنگین، در صنایع مختلف کاربرد گسترده‌ای دارند.",
    shortDescription: "انتقال قدرت با راندمان بالا و عملکرد بی‌صدا",
    heroImage: "/placeholder.svg?height=600&width=1200&query=industrial helical gearbox detailed",
    // سایر اطلاعات مشابه گیربکس حلزونی...
  },
  // سایر انواع گیربکس...
}

// تابع فرمت قیمت به تومان
const formatPrice = (price: number) => {
  return new Intl.NumberFormat("fa-IR").format(price) + " تومان"
}

export default function GearboxTypePage({ params }: { params: { type: string } }) {
  const gearboxType = gearboxTypes[params.type as keyof typeof gearboxTypes]

  // اگر نوع گیربکس وجود نداشت، صفحه 404 نمایش داده شود
  if (!gearboxType) {
    notFound()
  }

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
        <Link href="/products?category=gearboxes" className="hover:text-primary">
          گیربکس‌ها
        </Link>
        <ChevronLeft className="h-4 w-4" />
        <span className="text-foreground">{gearboxType.name}</span>
      </div>

      {/* بخش هدر */}
      <div className="relative rounded-3xl overflow-hidden mb-12">
        <div className="relative h-[500px] w-full">
          <Image
            src={gearboxType.heroImage || "/placeholder.svg"}
            alt={gearboxType.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/20 px-4 py-1 text-sm">
              گیربکس‌های صنعتی
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{gearboxType.title}</h1>
            <p className="text-white/80 text-lg md:text-xl mb-6">{gearboxType.shortDescription}</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <ShoppingCart className="h-5 w-5" />
                مشاهده محصولات
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/20 gap-2 hover:bg-white/20"
              >
                <Download className="h-5 w-5" />
                دانلود کاتالوگ
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* بخش معرفی */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6">معرفی {gearboxType.name}</h2>
          <p className="text-lg leading-relaxed mb-8">{gearboxType.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gearboxType.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Card className="overflow-hidden">
            <div className="bg-primary/5 p-6 border-b">
              <h3 className="text-xl font-bold">مزایای {gearboxType.name}</h3>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {gearboxType.advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mt-1 ml-3 flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden mt-6">
            <div className="bg-primary/5 p-6 border-b">
              <h3 className="text-xl font-bold">محدودیت‌ها</h3>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {gearboxType.disadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mt-1 ml-3 flex-shrink-0">
                      <X className="h-5 w-5 text-red-500" />
                    </div>
                    <span>{disadvantage}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* بخش تصاویر جزئیات */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">تصاویر و جزئیات</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gearboxType.detailImages.map((image, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* بخش کاربردها */}
      <div className="mb-16 bg-primary/5 rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-8">کاربردهای {gearboxType.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gearboxType.applications.map((application, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold">{index + 1}</span>
              </div>
              <p className="text-lg font-medium">{application}</p>
            </div>
          ))}
        </div>
      </div>

      {/* بخش مشخصات فنی و راهنمای انتخاب */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-8">مشخصات فنی</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
            <table className="w-full">
              <tbody>
                {gearboxType.technicalSpecs.map((spec, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50 dark:bg-gray-900/50" : ""
                    } hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors`}
                  >
                    <td className="py-4 px-6 font-medium">{spec.name}</td>
                    <td className="py-4 px-6">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8">راهنمای انتخاب</h2>
          <div className="space-y-6">
            {gearboxType.selectionGuide.map((guide, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{guide.title}</h3>
                    <p className="text-muted-foreground">{guide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* بخش مقایسه */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">{gearboxType.comparisonTable.title}</h2>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden border rounded-xl shadow-sm">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    {gearboxType.comparisonTable.headers.map((header, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="px-6 py-4 text-right text-sm font-semibold text-gray-900 dark:text-gray-100"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
                  {gearboxType.comparisonTable.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`whitespace-nowrap px-6 py-4 text-sm ${
                            cellIndex === 0
                              ? "font-medium text-gray-900 dark:text-gray-100"
                              : "text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* بخش نگهداری */}
      <div className="mb-16 bg-primary/5 rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-8">راهنمای نگهداری</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gearboxType.maintenanceTips.map((tip, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Tool className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
              <p className="text-muted-foreground">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* بخش سوالات متداول */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">سوالات متداول</h2>
        <div className="space-y-4">
          {gearboxType.faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <HelpCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* بخش برندهای محبوب */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">برندهای محبوب</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {gearboxType.popularBrands.map((brand, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="relative h-16 w-full mb-4">
                <Image src={brand.logo || "/placeholder.svg"} alt={brand.name} fill className="object-contain" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{brand.name}</h3>
              <p className="text-sm text-muted-foreground">{brand.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* بخش مستندات */}
      <div className="mb-16 bg-primary/5 rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-8">مستندات و منابع</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gearboxType.documents.map((document, index) => (
            <Link
              key={index}
              href={document.url}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <document.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {document.title}
              </h3>
              <p className="text-sm text-muted-foreground">{document.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* بخش محصولات مرتبط */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">محصولات مرتبط</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gearboxType.relatedProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="relative">
                  {product.isNew && <Badge className="absolute top-2 right-2 z-10">جدید</Badge>}
                  {product.discountPrice && (
                    <Badge variant="destructive" className="absolute top-2 left-2 z-10">
                      {Math.round(((product.price - product.discountPrice) / product.price) * 100)}%
                    </Badge>
                  )}
                  <div className="relative h-48 mb-4">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <Link href={`/products/${product.slug}`}>
                  <h3 className="font-medium text-lg mb-2 hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-primary text-primary"
                          : i < product.rating
                            ? "fill-primary text-primary opacity-50"
                            : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground mr-1">({product.rating})</span>
                </div>
                <div className="flex flex-col">
                  {product.discountPrice ? (
                    <>
                      <span className="text-muted-foreground line-through text-sm">{formatPrice(product.price)}</span>
                      <span className="font-bold text-lg text-primary">{formatPrice(product.discountPrice)}</span>
                    </>
                  ) : (
                    <span className="font-bold text-lg">{formatPrice(product.price)}</span>
                  )}
                </div>
                <Button className="w-full mt-4">
                  <ShoppingCart className="h-4 w-4 ml-2" />
                  افزودن به سبد خرید
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* بخش تب‌های اطلاعات تکمیلی */}
      <div className="mb-16">
        <Tabs defaultValue="technical" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 mb-6">
            <TabsTrigger
              value="technical"
              className="rounded-t-lg py-3 px-6 data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              مشخصات فنی
            </TabsTrigger>
            <TabsTrigger
              value="applications"
              className="rounded-t-lg py-3 px-6 data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              کاربردها
            </TabsTrigger>
            <TabsTrigger
              value="maintenance"
              className="rounded-t-lg py-3 px-6 data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              نگهداری
            </TabsTrigger>
            <TabsTrigger
              value="faq"
              className="rounded-t-lg py-3 px-6 data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              سوالات متداول
            </TabsTrigger>
          </TabsList>

          <TabsContent value="technical" className="mt-0">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4">مشخصات فنی {gearboxType.name}</h3>
              <table className="w-full">
                <tbody>
                  {gearboxType.technicalSpecs.map((spec, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-50 dark:bg-gray-900/50" : ""
                      } hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors`}
                    >
                      <td className="py-3 px-4 font-medium">{spec.name}</td>
                      <td className="py-3 px-4">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="applications" className="mt-0">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4">کاربردهای {gearboxType.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {gearboxType.applications.map((application, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 ml-3 flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <span>{application}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="maintenance" className="mt-0">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4">راهنمای نگهداری {gearboxType.name}</h3>
              <div className="space-y-4">
                {gearboxType.maintenanceTips.map((tip, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 ml-3 flex-shrink-0">
                      <Info className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">{tip.title}</h4>
                      <p className="text-muted-foreground">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="mt-0">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4">سوالات متداول درباره {gearboxType.name}</h3>
              <div className="space-y-6">
                {gearboxType.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0"
                  >
                    <h4 className="font-semibold text-lg mb-2">{faq.question}</h4>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* بخش CTA */}
      <div className="rounded-3xl overflow-hidden relative mb-16">
        <div className="relative h-[300px] w-full">
          <Image
            src="/placeholder.svg?height=600&width=1200&query=industrial gearbox factory production line"
            alt="خط تولید گیربکس صنعتی"
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
                کارشناسان ما آماده ارائه مشاوره تخصصی برای انتخاب بهترین نوع گیربکس متناسب با نیاز شما هستند.
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
