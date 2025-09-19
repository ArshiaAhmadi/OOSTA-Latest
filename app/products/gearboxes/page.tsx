import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, Grid3X3, LayoutGrid, List } from "lucide-react"

// دیتای گیربکس‌ها
const categoryData = {
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
}

// فرمت قیمت به تومان
const formatPrice = (price: number) => {
  return new Intl.NumberFormat("fa-IR").format(price) + " تومان"
}

export default function GearboxesPage() {
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
              <Link key={index} href={`/products/gearboxes/${subcat.slug}`} className="group">
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
                <Link href={`/products/gearboxes/${product.slug}`}>
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
