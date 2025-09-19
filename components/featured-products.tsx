"use client"

import { NewFeaturedProductCard } from "@/components/new-featured-product-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Star } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "پمپ سانتریفیوژ صنعتی مدل CP-250",
    price: 12500000,
    discountPrice: 11800000,
    rating: 4.8,
    image: "/industrial-pump.png",
    hoverImage: "/placeholder.svg?height=300&width=300",
    isNew: true,
    isHot: true,
    isFeatured: true,
    slug: "centrifugal-pump-cp-250",
    category: "pumps",
    stock: 15,
    discountPercent: 6,
    discountEndsIn: "2 روز",
    features: ["قدرت بالا", "مصرف انرژی کم", "ضد زنگ"],
    brand: "پمپیران",
    warranty: "18 ماه",
    soldCount: 156,
  },
  {
    id: 2,
    name: "الکتروموتور سه فاز 15 اسب بخار",
    price: 8500000,
    discountPrice: 7650000,
    rating: 4.6,
    image: "/electric-motors.png",
    hoverImage: "/placeholder.svg?height=300&width=300",
    isNew: false,
    isHot: true,
    isFeatured: true,
    slug: "electric-motor-15hp",
    category: "electromotors",
    stock: 8,
    discountPercent: 10,
    discountEndsIn: "1 روز",
    features: ["راندمان بالا", "کم صدا", "دوام بالا"],
    brand: "زیمنس",
    warranty: "24 ماه",
    soldCount: 142,
  },
  {
    id: 3,
    name: "گیربکس حلزونی صنعتی WP-80",
    price: 15800000,
    discountPrice: null,
    rating: 4.7,
    image: "/placeholder.svg?height=300&width=300",
    hoverImage: "/placeholder.svg?height=300&width=300",
    isNew: true,
    isHot: false,
    isFeatured: true,
    slug: "worm-gearbox-wp80",
    category: "gearboxes",
    stock: 12,
    discountPercent: null,
    discountEndsIn: null,
    features: ["نسبت تقلیل بالا", "عملکرد آرام", "نگهداری آسان"],
    brand: "SEW",
    warranty: "18 ماه",
    soldCount: 89,
  },
  {
    id: 4,
    name: "اینورتر فرکانس متغیر 5.5 کیلووات",
    price: 6200000,
    discountPrice: 5580000,
    rating: 4.5,
    image: "/inverter.png",
    hoverImage: "/placeholder.svg?height=300&width=300",
    isNew: false,
    isHot: true,
    isFeatured: true,
    slug: "frequency-inverter-5kw",
    category: "inverters",
    stock: 20,
    discountPercent: 10,
    discountEndsIn: "3 روز",
    features: ["کنترل دقیق سرعت", "محافظت کامل", "نصب آسان"],
    brand: "دانفوس",
    warranty: "12 ماه",
    soldCount: 98,
  },
  {
    id: 5,
    name: "موتور ویبره صنعتی VB-150",
    price: 3200000,
    discountPrice: null,
    rating: 4.4,
    image: "/vibration-motor.png",
    hoverImage: "/placeholder.svg?height=300&width=300",
    isNew: true,
    isHot: false,
    isFeatured: true,
    slug: "vibration-motor-vb150",
    category: "vibration-motors",
    stock: 25,
    discountPercent: null,
    discountEndsIn: null,
    features: ["ارتعاش یکنواخت", "مقاوم در برابر گرد و غبار", "عمر طولانی"],
    brand: "ایتالویبره",
    warranty: "12 ماه",
    soldCount: 67,
  },
  {
    id: 6,
    name: "مخزن تحت فشار 500 لیتری",
    price: 18500000,
    discountPrice: 16650000,
    rating: 4.6,
    image: "/pressure-vessel.png",
    hoverImage: "/placeholder.svg?height=300&width=300",
    isNew: false,
    isHot: false,
    isFeatured: true,
    slug: "pressure-vessel-500l",
    category: "pressure-vessels",
    stock: 5,
    discountPercent: 10,
    discountEndsIn: "5 روز",
    features: ["فشار کاری بالا", "مقاوم در برابر خورندگی", "استاندارد بین‌المللی"],
    brand: "پتروشیمی",
    warranty: "36 ماه",
    soldCount: 34,
  },
  {
    id: 7,
    name: "پنل کنترل هوشمند PLC",
    price: 25000000,
    discountPrice: 22500000,
    rating: 4.9,
    image: "/control-panel.png",
    hoverImage: "/placeholder.svg?height=300&width=300",
    isNew: true,
    isHot: true,
    isFeatured: true,
    slug: "smart-plc-panel",
    category: "control-sets",
    stock: 3,
    discountPercent: 10,
    discountEndsIn: "1 روز",
    features: ["کنترل هوشمند", "رابط کاربری آسان", "قابلیت برنامه‌ریزی"],
    brand: "زیمنس",
    warranty: "24 ماه",
    soldCount: 45,
  },
  {
    id: 8,
    name: "کمپرسور هوای صنعتی 10 بار",
    price: 32000000,
    discountPrice: null,
    rating: 4.3,
    image: "/placeholder.svg?height=300&width=300",
    hoverImage: "/placeholder.svg?height=300&width=300",
    isNew: false,
    isHot: false,
    isFeatured: true,
    slug: "air-compressor-10bar",
    category: "pumps",
    stock: 7,
    discountPercent: null,
    discountEndsIn: null,
    features: ["فشار بالا", "مصرف انرژی بهینه", "عملکرد مداوم"],
    brand: "اطلس کوپکو",
    warranty: "24 ماه",
    soldCount: 23,
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-[#253F8F] to-[#F18F20] rounded-full"></div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">محصولات ویژه</h2>
              <p className="text-gray-600 text-sm">بهترین محصولات صنعتی با کیفیت برتر</p>
            </div>
            <div className="flex items-center gap-1 text-[#F18F20]">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">ویژه</span>
            </div>
          </div>

          <Link href="/products?featured=true">
            <Button
              variant="outline"
              className="border-[#253F8F] text-[#253F8F] hover:bg-[#253F8F] hover:text-white bg-transparent"
            >
              مشاهده همه
              <ArrowLeft className="w-4 h-4 mr-2" />
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <NewFeaturedProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <Link href="/products">
            <Button className="bg-gradient-to-r from-[#253F8F] to-[#253F8F]/90 hover:from-[#253F8F]/90 hover:to-[#253F8F] text-white px-8 py-3">
              مشاهده تمام محصولات
              <ArrowLeft className="w-4 h-4 mr-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
