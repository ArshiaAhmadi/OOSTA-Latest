import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

interface PumpSubcategoryPageProps {
  params: {
    subcategory: string
  }
}

export default function PumpSubcategoryPage({ params }: PumpSubcategoryPageProps) {
  // در یک پروژه واقعی، این داده‌ها از API یا دیتابیس دریافت می‌شوند
  const subcategoryMap: Record<string, { name: string; description: string }> = {
    "home-water-pumps": {
      name: "پمپ آب خانگی",
      description: "انواع پمپ‌های آب خانگی شامل پمپ آب جتی، بشقابی، محیطی و پکیج پمپ آب خانگی",
    },
    "centrifugal-pumps": {
      name: "پمپ سانتریفیوژ",
      description: "انواع پمپ‌های سانتریفیوژ شامل پمپ عمودی طبقاتی و پمپ افقی طبقاتی",
    },
    "submersible-pumps": {
      name: "پمپ کف کش",
      description: "انواع پمپ‌های کف کش برای تخلیه آب از مخازن و چاه‌ها",
    },
    // سایر زیردسته‌ها...
  }

  const subcategory = subcategoryMap[params.subcategory]

  if (!subcategory) {
    return notFound()
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <Link href="/products/pumps" className="flex items-center text-primary hover:underline mb-2">
          <ChevronLeft className="h-4 w-4 ml-1" />
          <span>بازگشت به دسته‌بندی پمپ‌ها</span>
        </Link>
        <h1 className="text-3xl font-bold mb-2">{subcategory.name}</h1>
        <p className="text-muted-foreground">{subcategory.description}</p>
      </div>

      {/* در اینجا می‌توانید لیست محصولات مربوط به این زیردسته را نمایش دهید */}
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
