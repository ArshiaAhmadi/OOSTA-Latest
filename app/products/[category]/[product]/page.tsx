import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ProductDetailClient } from "./ProductDetailClient"

// Mock data - در پروژه واقعی از دیتابیس یا API دریافت می‌شود
const getProduct = async (category: string, productSlug: string) => {
  // شبیه‌سازی دریافت اطلاعات محصول
  const products = {
    pumps: {
      "centrifugal-pump-5hp": {
        id: 1,
        name: "پمپ سانتریفیوژ 5 اسب بخار",
        slug: "centrifugal-pump-5hp",
        category: "pumps",
        categoryName: "پمپ‌ها",
        brand: "پدروللو",
        model: "CP-220",
        price: 25000000,
        discountPrice: 22500000,
        inStock: true,
        stockCount: 15,
        rating: 4.8,
        reviewCount: 127,
        isNew: false,
        images: [
          "/industrial-pump.png",
          "/placeholder.svg?height=400&width=400&text=تصویر+2",
          "/placeholder.svg?height=400&width=400&text=تصویر+3",
          "/placeholder.svg?height=400&width=400&text=تصویر+4",
        ],
        description:
          "پمپ سانتریفیوژ 5 اسب بخار مناسب برای انتقال آب در ساختمان‌های مسکونی و تجاری. این پمپ با کیفیت بالا و عملکرد مطمئن، انتخاب ایده‌آلی برای سیستم‌های آب‌رسانی است.",
        features: [
          "قدرت موتور: 5 اسب بخار",
          "دبی: 100 لیتر در دقیقه",
          "ارتفاع مکش: 8 متر",
          "ارتفاع فشار: 45 متر",
          "ولتاژ: 380 ولت سه فاز",
          "مواد ساخت: چدن خاکستری",
          "اتصالات: فلنجی",
          "کاربری: آب شیرین",
        ],
        specifications: {
          "مشخصات فنی": {
            قدرت: "5 HP (3.7 kW)",
            "دور موتور": "2900 rpm",
            "دبی نامی": "100 l/min",
            "ارتفاع نامی": "45 m",
            "قطر ورودی": "3 اینچ",
            "قطر خروجی": "2 اینچ",
            "حداکثر دما": "60°C",
          },
          "مشخصات الکتریکی": {
            ولتاژ: "380V",
            فرکانس: "50 Hz",
            "نوع راه‌اندازی": "DOL",
            "کلاس عایق‌بندی": "F",
            "درجه حفاظت": "IP55",
          },
          "ابعاد و وزن": {
            طول: "650 mm",
            عرض: "300 mm",
            ارتفاع: "400 mm",
            وزن: "45 kg",
          },
        },
        warranty: "24 ماه گارانتی شرکتی",
        supplier: {
          name: "شرکت پمپ سازان ایران",
          rating: 4.9,
          yearsActive: 15,
          location: "تهران، ایران",
          responseTime: "کمتر از 2 ساعت",
        },
        shipping: {
          freeShipping: true,
          estimatedDays: "2-3 روز کاری",
          regions: ["تهران", "کرج", "اصفهان", "مشهد", "شیراز"],
        },
        relatedProducts: [2, 3, 4, 5],
      },
    },
  }

  const categoryProducts = products[category as keyof typeof products]
  if (!categoryProducts) return null

  const product = categoryProducts[productSlug as keyof typeof categoryProducts]
  return product || null
}

interface Props {
  params: {
    category: string
    product: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProduct(params.category, params.product)

  if (!product) {
    return {
      title: "محصول یافت نشد",
    }
  }

  return {
    title: `${product.name} | اوستا`,
    description: product.description,
    keywords: [product.name, product.brand, product.categoryName, "خرید آنلاین"].join(", "),
  }
}

export default async function ProductPage({ params }: Props) {
  const product = await getProduct(params.category, params.product)

  if (!product) {
    notFound()
  }

  return <ProductDetailClient product={product} />
}
