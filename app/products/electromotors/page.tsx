import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, Grid3X3, LayoutGrid, List } from "lucide-react"

// دیتای الکتروموتورها
const categoryData = {
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
}

// فرمت قیمت به تومان
const formatPrice = (price: number) => {
  return new Intl.NumberFormat("fa-IR").format(price) + " تومان"
}

export default function ElectromotorsPage() {
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
      <div className="mb-12 bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">زیر دسته‌های {categoryData.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryData.subcategories.map((subcat, index) => (
              <Link key={index} href={`/products/electromotors/${subcat.slug}`} className="group">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-md">
                  <div className="relative h-40 w-full">
                    <Image
                      src={subcat.image || "/placeholder.svg"}
                      alt={subcat.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg mb-2 group-hover:text-primary transition-colors">
                      {subcat.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{subcat.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* محصولات */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold">محصولات {categoryData.name}</h2>
            <p className="text-sm text-muted-foreground">{categoryData.products.length} محصول یافت شد</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <span className="text-sm ml-2">مرتب‌سازی:</span>
              <select className="text-sm border rounded-md p-2 bg-transparent">
                <option>پرفروش‌ترین</option>
                <option>جدیدترین</option>
                <option>ارزان‌ترین</option>
                <option>گران‌ترین</option>
                <option>پربازدیدترین</option>
              </select>
            </div>

            <div className="flex items-center border rounded-md">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <LayoutGrid className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryData.products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="relative">
                <div className="relative h-48 w-full">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                {product.isNew && <Badge className="absolute top-3 right-3 bg-primary">جدید</Badge>}
                {product.discountPrice && (
                  <Badge variant="destructive" className="absolute top-3 left-3">
                    {Math.round(((product.price - product.discountPrice) / product.price) * 100)}%
                  </Badge>
                )}
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {product.brand}
                  </Badge>
                  <div className="flex items-center">
                    <span className="text-amber-500 text-xs ml-1">★</span>
                    <span className="text-xs">{product.rating}</span>
                  </div>
                </div>
                <Link href={`/products/electromotors/${product.slug}`}>
                  <h3 className="font-medium text-lg mb-2 hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex flex-col mb-4">
                  {product.discountPrice ? (
                    <>
                      <span className="text-muted-foreground line-through text-sm">{formatPrice(product.price)}</span>
                      <span className="font-bold text-lg text-primary">{formatPrice(product.discountPrice)}</span>
                    </>
                  ) : (
                    <span className="font-bold text-lg">{formatPrice(product.price)}</span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className={`${
                      product.inStock
                        ? "bg-green-50 text-green-600 border-green-200"
                        : "bg-red-50 text-red-600 border-red-200"
                    }`}
                  >
                    {product.inStock ? "موجود در انبار" : "ناموجود"}
                  </Badge>
                  <Button variant="ghost" size="sm">
                    + مقایسه
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* اطلاعات تکمیلی دسته‌بندی */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">درباره {categoryData.name}</h2>
        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p>{categoryData.description}</p>
          <p>
            محصولات این دسته‌بندی با بالاترین کیفیت و استانداردهای جهانی تولید شده‌اند و برای کاربردهای مختلف صنعتی مناسب
            هستند. تمامی محصولات دارای گارانتی و خدمات پس از فروش معتبر هستند.
          </p>
          <p>
            برای مشاوره و راهنمایی بیشتر در مورد انتخاب محصول مناسب، می‌توانید با کارشناسان ما تماس بگیرید یا از طریق فرم
            تماس با ما در ارتباط باشید.
          </p>
        </div>
      </div>
    </div>
  )
}
