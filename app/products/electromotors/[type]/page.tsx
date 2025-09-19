import type { Metadata } from "next"
import ElectromotorSubcategoryClientPage from "./ElectromotorSubcategoryClientPage"

// تعریف پارامترهای صفحه
type Props = {
  params: { type: string }
}

// دیتای زیردسته‌های الکتروموتور
const subcategoryData = {
  "single-phase": {
    id: "single-phase",
    name: "الکتروموتور تک فاز",
    title: "الکتروموتور تک فاز | انواع، ویژگی‌ها و کاربردها",
    description: "الکتروموتورهای تک فاز برای کاربردهای خانگی و صنعتی سبک با توان‌های مختلف",
    longDescription:
      "الکتروموتورهای تک فاز نوعی از موتورهای الکتریکی هستند که با برق تک فاز (معمولاً 220 ولت) کار می‌کنند. این موتورها برای کاربردهای خانگی و صنعتی سبک مناسب هستند و در توان‌های مختلف از 0.18 تا 4 کیلووات تولید می‌شوند. الکتروموتورهای تک فاز به دلیل سادگی نصب و راه‌اندازی و قیمت مناسب، گزینه‌ای محبوب برای بسیاری از کاربردها هستند.",
    image: "/placeholder.svg?height=600&width=1200&query=single phase electric motor industrial detailed",
    powerRange: "0.18 تا 4 کیلووات",
    applications: [
      "پمپ‌های آب خانگی و کشاورزی",
      "فن‌ها و دمنده‌های کوچک",
      "کمپرسورهای هوای کوچک",
      "ماشین‌آلات کارگاهی سبک",
      "لوازم خانگی صنعتی",
      "سیستم‌های تهویه",
    ],
    features: [
      "راه‌اندازی آسان با برق تک فاز",
      "نگهداری ساده و کم هزینه",
      "قیمت مناسب",
      "وزن سبک و نصب آسان",
      "مناسب برای کاربردهای متناوب",
    ],
    advantages: [
      "نصب و راه‌اندازی آسان",
      "اتصال به برق خانگی استاندارد",
      "قیمت اولیه پایین‌تر",
      "مناسب برای مصارف خانگی و کارگاهی",
      "تنوع در طراحی و اندازه",
    ],
    disadvantages: [
      "توان محدود (معمولاً تا 4 کیلووات)",
      "راندمان کمتر نسبت به موتورهای سه فاز",
      "گشتاور راه‌اندازی کمتر",
      "عمر کمتر در کارکرد مداوم",
      "گرمای بیشتر در حین کار",
    ],
    types: [
      {
        name: "الکتروموتور تک فاز خازنی دائم کار",
        description: "دارای خازن دائم در مدار که گشتاور راه‌اندازی متوسط و کارکرد پیوسته را فراهم می‌کند",
        applications: "پمپ‌های آب، فن‌ها، دستگاه‌های تهویه",
      },
      {
        name: "الکتروموتور تک فاز با خازن راه‌انداز",
        description: "دارای خازن راه‌انداز موقت که گشتاور راه‌اندازی بالا ایجاد می‌کند",
        applications: "کمپرسورها، یخچال‌ها، دستگاه‌های با بار راه‌اندازی سنگین",
      },
      {
        name: "الکتروموتور تک فاز دو خازنه",
        description: "ترکیبی از خازن راه‌انداز و خازن دائم کار برای بهترین عملکرد",
        applications: "ماشین‌آلات صنعتی سبک، پمپ‌های بزرگتر",
      },
      {
        name: "الکتروموتور تک فاز قطب چاکدار",
        description: "با طراحی ساده و بدون خازن، مناسب برای کاربردهای کم توان",
        applications: "فن‌های کوچک، لوازم خانگی کوچک",
      },
    ],
    selectionGuide: [
      "توان مورد نیاز را با توجه به بار مکانیکی محاسبه کنید",
      "سرعت مورد نیاز (دور بر دقیقه) را تعیین کنید",
      "نوع کارکرد (مداوم یا متناوب) را در نظر بگیرید",
      "شرایط محیطی (دما، رطوبت، گرد و غبار) را بررسی کنید",
      "نوع راه‌اندازی مناسب (مستقیم یا با خازن) را انتخاب کنید",
      "کلاس عایق‌بندی مناسب (معمولاً F یا H) را انتخاب کنید",
    ],
    maintenanceTips: [
      "بررسی منظم یاتاقان‌ها و روغن‌کاری آن‌ها",
      "تمیز کردن پروانه خنک‌کننده و مجاری هوا",
      "بررسی وضعیت خازن‌ها و تعویض در صورت نیاز",
      "اطمینان از محکم بودن اتصالات برق",
      "بررسی دمای کارکرد و جلوگیری از گرم شدن بیش از حد",
    ],
    popularBrands: ["موتوژن", "الکتروژن", "ABB", "زیمنس", "WEG", "جمکو"],
    products: [
      {
        id: 1,
        name: "الکتروموتور تک فاز 2 اسب موتوژن",
        price: 2850000,
        discountPrice: 2650000,
        rating: 4.5,
        image: "/placeholder.svg?height=300&width=300&query=single phase electric motor 2hp",
        isNew: true,
        slug: "motogen-single-phase-2hp",
      },
      {
        id: 2,
        name: "الکتروموتور تک فاز 1.5 اسب الکتروژن",
        price: 2450000,
        discountPrice: null,
        rating: 4.2,
        image: "/placeholder.svg?height=300&width=300&query=single phase electric motor 1.5hp",
        isNew: false,
        slug: "electrogen-single-phase-1.5hp",
      },
      {
        id: 3,
        name: "الکتروموتور تک فاز 3 اسب دو خازنه جمکو",
        price: 3750000,
        discountPrice: 3550000,
        rating: 4.7,
        image: "/placeholder.svg?height=300&width=300&query=single phase electric motor 3hp",
        isNew: true,
        slug: "jemco-single-phase-3hp",
      },
      {
        id: 4,
        name: "الکتروموتور تک فاز 0.75 اسب زیمنس",
        price: 1950000,
        discountPrice: null,
        rating: 4.8,
        image: "/placeholder.svg?height=300&width=300&query=siemens single phase electric motor 0.75hp",
        isNew: false,
        slug: "siemens-single-phase-0.75hp",
      },
    ],
  },
  "three-phase": {
    id: "three-phase",
    name: "الکتروموتور ۳فاز",
    title: "الکتروموتور سه فاز | انواع، ویژگی‌ها و کاربردها",
    description: "الکتروموتورهای سه فاز برای کاربردهای صنعتی سنگین با راندمان بالا",
    longDescription:
      "الکتروموتورهای سه فاز قلب تپنده صنایع مختلف هستند که با برق سه فاز (معمولاً 380 ولت) کار می‌کنند. این موتورها به دلیل راندمان بالا، گشتاور قوی و قابلیت کارکرد مداوم، گزینه اصلی برای کاربردهای صنعتی سنگین هستند. الکتروموتورهای سه فاز در طیف وسیعی از توان از 0.37 تا بیش از 315 کیلووات تولید می‌شوند و در اکثر ماشین‌آلات صنعتی مورد استفاده قرار می‌گیرند.",
    image: "/placeholder.svg?height=600&width=1200&query=three phase electric motor industrial detailed",
    powerRange: "0.37 تا 315 کیلووات",
    applications: [
      "خطوط تولید صنعتی",
      "پمپ‌های صنعتی بزرگ",
      "کمپرسورهای هوای صنعتی",
      "نوار نقاله‌ها و سیستم‌های انتقال مواد",
      "دستگاه‌های تراش و فرز",
      "فن‌های صنعتی بزرگ",
    ],
    features: [
      "راندمان بالا (تا 96% در کلاس IE4)",
      "گشتاور راه‌اندازی و گشتاور کاری بالا",
      "قابلیت کارکرد مداوم (24/7)",
      "عمر طولانی و قابلیت اطمینان بالا",
      "امکان کنترل دور با اینورتر",
    ],
    advantages: [
      "راندمان انرژی بالاتر",
      "گشتاور یکنواخت‌تر و لرزش کمتر",
      "عمر طولانی‌تر در کارکرد مداوم",
      "قابلیت تحمل بار بیشتر",
      "گرمای کمتر در حین کار",
    ],
    disadvantages: [
      "نیاز به برق سه فاز (عدم امکان استفاده با برق خانگی)",
      "هزینه اولیه بالاتر",
      "نیاز به تجهیزات راه‌انداز و حفاظتی خاص",
      "پیچیدگی بیشتر در نصب و راه‌اندازی",
    ],
    types: [
      {
        name: "الکتروموتور سه فاز روتور قفسی (آسنکرون)",
        description: "رایج‌ترین نوع موتور سه فاز با ساختار ساده و قابلیت اطمینان بالا",
        applications: "اکثر کاربردهای صنعتی، پمپ‌ها، فن‌ها، کمپرسورها",
      },
      {
        name: "الکتروموتور سه فاز روتور سیم‌پیچی شده",
        description: "با قابلیت کنترل گشتاور راه‌اندازی از طریق مقاومت خارجی",
        applications: "بارهای با اینرسی بالا، جرثقیل‌ها، آسانسورها",
      },
      {
        name: "الکتروموتور سه فاز دو سرعته",
        description: "با امکان کارکرد در دو سرعت مختلف (معمولاً با نسبت 1:2)",
        applications: "فن‌های تهویه، پمپ‌های با نیاز به تغییر دبی",
      },
      {
        name: "الکتروموتور سه فاز با راندمان بالا (IE3/IE4)",
        description: "طراحی بهینه برای حداکثر راندمان انرژی",
        applications: "کاربردهای با ساعات کارکرد بالا و هزینه انرژی زیاد",
      },
    ],
    selectionGuide: [
      "توان مورد نیاز را با توجه به بار مکانیکی محاسبه کنید",
      "سرعت مورد نیاز (دور بر دقیقه) را تعیین کنید",
      "کلاس راندمان مورد نیاز (IE1 تا IE4) را انتخاب کنید",
      "نوع راه‌اندازی (مستقیم، ستاره-مثلث، نرم) را تعیین کنید",
      "درجه حفاظت (IP) مناسب با محیط کاری را انتخاب کنید",
      "کلاس عایق‌بندی مناسب (F یا H) را انتخاب کنید",
    ],
    maintenanceTips: [
      "بررسی منظم یاتاقان‌ها و روغن‌کاری آن‌ها",
      "تمیز کردن پروانه خنک‌کننده و مجاری هوا",
      "بررسی وضعیت اتصالات برق و محکم بودن آن‌ها",
      "اندازه‌گیری جریان مصرفی و مقایسه با مقدار نامی",
      "بررسی لرزش و صدای غیرعادی",
      "بررسی دمای کارکرد و جلوگیری از گرم شدن بیش از حد",
    ],
    popularBrands: ["زیمنس", "ABB", "WEG", "موتوژن", "جمکو", "الکتروژن"],
    products: [
      {
        id: 1,
        name: "الکتروموتور سه فاز 5.5 کیلووات زیمنس",
        price: 12500000,
        discountPrice: 11800000,
        rating: 4.8,
        image: "/placeholder.svg?height=300&width=300&query=siemens three phase electric motor 5.5kw",
        isNew: true,
        slug: "siemens-three-phase-5.5kw",
      },
      {
        id: 2,
        name: "الکتروموتور سه فاز 7.5 کیلووات ABB",
        price: 15800000,
        discountPrice: null,
        rating: 4.9,
        image: "/placeholder.svg?height=300&width=300&query=ABB three phase electric motor 7.5kw",
        isNew: false,
        slug: "abb-three-phase-7.5kw",
      },
      {
        id: 3,
        name: "الکتروموتور سه فاز 11 کیلووات موتوژن",
        price: 18500000,
        discountPrice: 17200000,
        rating: 4.6,
        image: "/placeholder.svg?height=300&width=300&query=three phase electric motor 11kw",
        isNew: true,
        slug: "motogen-three-phase-11kw",
      },
      {
        id: 4,
        name: "الکتروموتور سه فاز 3 کیلووات WEG",
        price: 8900000,
        discountPrice: null,
        rating: 4.7,
        image: "/placeholder.svg?height=300&width=300&query=WEG three phase electric motor 3kw",
        isNew: false,
        slug: "weg-three-phase-3kw",
      },
    ],
  },
  // سایر زیردسته‌ها به همین ترتیب اضافه می‌شوند
}

// تعریف متادیتا برای صفحه
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const subcategory = subcategoryData[params.type as keyof typeof subcategoryData]

  if (!subcategory) {
    return {
      title: "صفحه یافت نشد | فروشگاه صنعتی اوستا",
      description: "متأسفانه صفحه مورد نظر شما یافت نشد.",
    }
  }

  return {
    title: subcategory.title + " | فروشگاه صنعتی اوستا",
    description: subcategory.description,
  }
}

export default function ElectromotorSubcategoryPage({ params }: Props) {
  return <ElectromotorSubcategoryClientPage params={params} />
}
