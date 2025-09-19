import { notFound } from "next/navigation"
import Link from "next/link"

interface PumpTypePageProps {
  params: {
    subcategory: string
    type: string
  }
}

export default function PumpTypePage({ params }: PumpTypePageProps) {
  // در یک پروژه واقعی، این داده‌ها از API یا دیتابیس دریافت می‌شوند
  const subcategoryMap: Record<string, { name: string; types: Record<string, string> }> = {
    "home-water-pumps": {
      name: "پمپ آب خانگی",
      types: {
        "پمپ-آب-جتی": "پمپ آب جتی",
        "پمپ-آب-بشقابی": "پمپ آب بشقابی",
        "پمپ-آب-محیطی": "پمپ آب محیطی",
        "پکیج-پمپ-آب-خانگی": "پکیج پمپ آب خانگی",
      },
    },
    "centrifugal-pumps": {
      name: "پمپ سانتریفیوژ",
      types: {
        "پمپ-عمودی-طبقاتی": "پمپ عمودی طبقاتی",
        "پمپ-افقی-طبقاتی": "پمپ افقی طبقاتی",
      },
    },
    "motor-pumps": {
      name: "پمپ موتور پمپ",
      types: {
        بنزینی: "بنزینی",
        دیزلی: "دیزلی",
      },
    },
  }

  const subcategory = subcategoryMap[params.subcategory]

  if (!subcategory) {
    return notFound()
  }

  const typeName = subcategory.types[params.type]

  if (!typeName) {
    return notFound()
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Link href="/products" className="text-primary hover:underline">
            محصولات
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link href="/products/pumps" className="text-primary hover:underline">
            پمپ‌ها
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link href={`/products/pumps/${params.subcategory}`} className="text-primary hover:underline">
            {subcategory.name}
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-muted-foreground">{typeName}</span>
        </div>

        <h1 className="text-3xl font-bold mb-2">{typeName}</h1>
        <p className="text-muted-foreground">مشاهده و خرید انواع {typeName} با بهترین قیمت و کیفیت</p>
      </div>

      {/* در اینجا می‌توانید لیست محصولات مربوط به این نوع را نمایش دهید */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="col-span-full">
          <div className="p-12 text-center bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-lg text-muted-foreground">محصولات این دسته‌بندی به زودی اضافه خواهند شد</p>
          </div>
        </div>
      </div>
    </div>
  )
}
