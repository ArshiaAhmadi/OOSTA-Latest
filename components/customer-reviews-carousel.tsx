"use client"

import Image from "next/image"
import { ImageIcon, FileText, Globe, Headphones, Calendar } from "lucide-react"

export default function CustomerReviewsCarousel() {
  const banners = [
    {
      id: 1,
      title: "گالری تصاویر نمایشگاه‌ها",
      subtitle: "مشاهده تصاویر نمایشگاه‌های صنعتی",
      image: "/placeholder.svg?height=300&width=600&text=Exhibition+Gallery",
      alt: "گالری تصاویر نمایشگاه‌ها",
      icon: ImageIcon,
      type: "gallery",
    },
    {
      id: 2,
      title: "پوستر نمایشگاه‌ها",
      subtitle: "دانلود پوسترهای رسمی",
      image: "/placeholder.svg?height=400&width=300&text=Exhibition+Posters",
      alt: "پوستر نمایشگاه‌ها",
      icon: FileText,
      type: "poster",
    },
    {
      id: 3,
      title: "اخبار و اطلاعیه ها",
      subtitle: "آخرین اخبار صنعت",
      image: "/placeholder.svg?height=250&width=400&text=News+Updates",
      alt: "اخبار و اطلاعیه ها",
      icon: Globe,
      type: "news",
    },
    {
      id: 4,
      title: "تور مجازی نمایشگاه‌ها",
      subtitle: "بازدید آنلاین از نمایشگاه‌ها",
      image: "/placeholder.svg?height=250&width=300&text=Virtual+Tour",
      alt: "تور مجازی نمایشگاه‌ها",
      icon: Headphones,
      type: "virtual",
    },
    {
      id: 5,
      title: "رویدادهای آینده",
      subtitle: "برنامه نمایشگاه‌های پیش رو",
      image: "/placeholder.svg?height=200&width=300&text=Upcoming+Events",
      alt: "رویدادهای آینده",
      icon: Calendar,
      type: "events",
    },
  ]

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[600px]">
          {/* Gallery Banner - Top Left (spans 7 columns, 3 rows) */}
          <div className="col-span-12 md:col-span-7 row-span-3 group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#253F8F]/10 to-[#F18F20]/5 border border-gray-200 hover:border-[#F18F20]/30 transition-all duration-300 hover:shadow-lg cursor-pointer">
            <div className="relative h-full">
              <Image
                src={banners[0].image || "/placeholder.svg"}
                alt={banners[0].alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Gallery thumbnails overlay */}
              

              <div className="absolute bottom-4 right-4">
                
              </div>
            </div>
          </div>

          {/* Poster Banner - Top Right (spans 5 columns, 6 rows) */}
          <div className="col-span-12 md:col-span-5 row-span-6 group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#253F8F]/10 to-[#F18F20]/5 border border-gray-200 hover:border-[#F18F20]/30 transition-all duration-300 hover:shadow-lg cursor-pointer">
            <div className="relative h-full">
              <Image
                src={banners[1].image || "/placeholder.svg"}
                alt={banners[1].alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              <div className="absolute bottom-4 right-4">
                
              </div>
            </div>
          </div>

          {/* News Banner - Bottom Left (spans 4 columns, 3 rows) */}
          <div className="col-span-12 md:col-span-4 row-span-3 group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#253F8F]/20 to-[#253F8F]/10 border border-gray-200 hover:border-[#F18F20]/30 transition-all duration-300 hover:shadow-lg cursor-pointer">
            <div className="relative h-full">
              {/* Dotted world map pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-[radial-gradient(circle_at_2px_2px,_white_1px,_transparent_0)] bg-[length:20px_20px]"></div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-[#253F8F]/30 to-transparent" />

              <div className="absolute bottom-4 right-4">
                
              </div>
            </div>
          </div>

          {/* Virtual Tour Banner - Bottom Center (spans 3 columns, 3 rows) */}
          <div className="col-span-12 md:col-span-3 row-span-3 group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#253F8F]/10 to-[#F18F20]/5 border border-gray-200 hover:border-[#F18F20]/30 transition-all duration-300 hover:shadow-lg cursor-pointer">
            <div className="relative h-full">
              <Image
                src={banners[3].image || "/placeholder.svg"}
                alt={banners[3].alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* VR Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-[#F18F20] text-white px-3 py-1 rounded-full text-sm font-bold">VR</div>
              </div>

              <div className="absolute bottom-4 right-4">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
