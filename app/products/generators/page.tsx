import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, Filter, Grid3X3, LayoutGrid, List, SlidersHorizontal } from "lucide-react"

// دیتای دسته‌بندی ژنراتورها
const categoryData = {
  name: "انواع ژنراتور و موتور برق",
  description:
    "ژنراتورها و موتورهای برق تجهیزاتی هستند که برای تولید برق در شرایط اضطراری یا در مناطق فاقد برق شهری استفاده می‌شوند. این دستگاه‌ها با تبدیل انرژی مکانیکی به انرژی الکتریکی، امکان تأمین برق مورد نیاز را فراهم می‌کنند.",
  image: "/placeholder.svg?height=400&width=800",
  subcategories: [
    {
      name: "ژنراتور بنزینی",
      description: "ژنراتورهای بنزینی برای کاربردهای خانگی و سبک",
      image: "/placeholder.svg?height=200&width=300",
      slug: "gasoline",
    },
    {
      name: "ژنراتور دیزلی",
      description: "ژنراتورهای دیزلی برای کاربردهای صنعتی و سنگین",
      image: "/placeholder.svg?height=200&width=300",
      slug: "diesel",
    },
    {
      name: "ژنراتور گازی",
      description: "ژنراتورهای گازی برای کاربردهای دائمی و اقتصادی",
      image: "/placeholder.svg?height=200&width=300",
      slug: "gas",
    },
    {
      name: "ژنراتور اینورتر",
      description: "ژنراتورهای اینورتر برای تجهیزات حساس",
      image: "/placeholder.svg?height=200&width=300",
      slug: "inverter",
    },
    {
      name: "ژنراتور صامت",
      description: "ژنراتورهای صامت برای محیط‌های مسکونی",
      image: "/placeholder.svg?height=200&width=300",
      slug: "silent",
    },
    {
      name: "ژنراتور صنعتی",
      description: "ژنراتورهای صنعتی با قدرت بالا برای کارخانه‌ها",
      image: "/placeholder.svg?height=200&width=300",
      slug: "industrial",
    },
  ],
  products: [
    {
      id: 1,
      name: "ژنراتور بنزینی 5 کیلووات مدل GP-5000",
      price: 18500000,
      discountPrice: 17200000,
      rating: 4.4,
      image: "/placeholder.svg?height=300&width=300",
      isNew: true,
      slug: "gasoline-generator-gp-5000",
      brand: "هوندا",
      inStock: true,
    },
    {
      id: 2,
      name: "ژنراتور دیزلی 10 کیلووات مدل DG-10000",
      price: 45000000,
      discountPrice: null,
      rating: 4.6,
      image: "/placeholder.svg?height=300&width=300",
      isNew: false,
      slug: "diesel-generator-dg-10000",
      brand: "کاترپیلار",
      inStock: true,
    },
    {
      id: 3,
      name: "ژنراتور گازی 15 کیلووات مدل GG-15000",
      price: 52000000,
      discountPrice: 48500000,
      rating: 4.7,
      image: "/placeholder.svg?height=300&width=300",
      isNew: true,
      slug: "gas-generator-gg-15000",
      brand: "کامینز",
      inStock: false,
    },
    {
      id: 4,
      name: "ژنراتور اینورتر 3 کیلووات مدل IG-3000",
      price: 22000000,
      discountPrice: 20500000,
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=300",
      isNew: true,
      slug: "inverter-generator-ig-3000",
      brand: "یاماها",
      inStock: true,
    },
    {
      id: 5,
      name: "ژنراتور صامت 7.5 کیلووات مدل SG-7500",
      price: 38000000,
      discountPrice: null,
      rating: 4.5,
      image: "/placeholder.svg?height=300&width=300",
      isNew: false,
      slug: "silent-generator-sg-7500",
      brand: "پرکینز",
      inStock: true,
    },
    {
      id: 6,
      name: "ژنراتور صنعتی 50 کیلووات مدل IG-50000",
      price: 125000000,
      discountPrice: 118000000,
      rating: 4.9,
      image: "/placeholder.svg?height=300&width=300",
      isNew: true,
      slug: "industrial-generator-ig-50000",
      brand: "کاترپیلار",
      inStock: true,
    },
  ],
}

// فیلترهای محصولات
const filters = {
  brands: [
    { id: "all", name: "همه برندها" },
    { id: "honda", name: "هوندا" },
    { id: "caterpillar", name: "کاترپیلار" },
    { id: "cummins", name: "کامینز" },
    { id: "yamaha", name: "یاماها" },
    { id: "perkins", name: "پرکینز" },
  ],
  price: [
    { id: "all", name: "همه قیمت‌ها" },
    { id: "under-30m", name: "کمتر از ۳۰ میلیون تومان" },
    { id: "30m-60m", name: "۳۰ تا ۶۰ میلیون تومان" },
    { id: "over-60m", name: "بیشتر از ۶۰ میلیون تومان" },
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

export default function GeneratorsPage() {
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
              <Link key={index} href={`/products/generators/${subcat.slug}`} className="group">
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
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* فیلترها */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">فیلترها</h3>
              <Button variant="ghost" size="sm" className="text-primary">
                پاک کردن
              </Button>
            </div>

            <div className="space-y-6">
              {/* فیلتر برند */}
              <div>
                <h4 className="font-medium mb-3 flex items-center">
                  <Filter className="h-4 w-4 ml-2" />
                  برند
                </h4>
                <div className="space-y-2">
                  {filters.brands.map((brand) => (
                    <div key={brand.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`brand-${brand.id}`}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor={`brand-${brand.id}`} className="mr-2 text-sm">
                        {brand.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* فیلتر قیمت */}
              <div>
                <h4 className="font-medium mb-3 flex items-center">
                  <SlidersHorizontal className="h-4 w-4 ml-2" />
                  محدوده قیمت
                </h4>
                <div className="space-y-2">
                  {filters.price.map((price) => (
                    <div key={price.id} className="flex items-center">
                      <input
                        type="radio"
                        id={`price-${price.id}`}
                        name="price"
                        className="h-4 w-4 rounded-full border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor={`price-${price.id}`} className="mr-2 text-sm">
                        {price.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* فیلتر موجودی */}
              <div>
                <h4 className="font-medium mb-3">وضعیت موجودی</h4>
                <div className="space-y-2">
                  {filters.availability.map((item) => (
                    <div key={item.id} className="flex items-center">
                      <input
                        type="radio"
                        id={`availability-${item.id}`}
                        name="availability"
                        className="h-4 w-4 rounded-full border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor={`availability-${item.id}`} className="mr-2 text-sm">
                        {item.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* فیلتر تخفیف */}
              <div>
                <h4 className="font-medium mb-3">تخفیف</h4>
                <div className="space-y-2">
                  {filters.discount.map((item) => (
                    <div key={item.id} className="flex items-center">
                      <input
                        type="radio"
                        id={`discount-${item.id}`}
                        name="discount"
                        className="h-4 w-4 rounded-full border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor={`discount-${item.id}`} className="mr-2 text-sm">
                        {item.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full">اعمال فیلترها</Button>
            </div>
          </div>
        </div>

        {/* لیست محصولات */}
        <div className="lg:col-span-3">
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
                    <Link href={`/products/generators/${product.slug}`}>
                      <h3 className="font-medium text-lg mb-2 hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex flex-col mb-4">
                      {product.discountPrice ? (
                        <>
                          <span className="text-muted-foreground line-through text-sm">
                            {formatPrice(product.price)}
                          </span>
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
                ژنراتورها و موتورهای برق در انواع مختلفی مانند بنزینی، دیزلی، گازی، اینورتر، صامت و صنعتی تولید می‌شوند
                که هر کدام برای کاربردهای خاصی مناسب هستند. این محصولات با بالاترین کیفیت و استانداردهای جهانی تولید
                شده‌اند و برای کاربردهای مختلف صنعتی مناسب هستند.
              </p>
              <p>
                برای مشاوره و راهنمایی بیشتر در مورد انتخاب ژنراتور مناسب، می‌توانید با کارشناسان ما تماس بگیرید یا از
                طریق فرم تماس با ما در ارتباط باشید.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
