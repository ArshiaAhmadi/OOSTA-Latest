import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, FileText, Database, GraduationCap, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function ResourceBanners() {
  const resources = [
    {
      id: "articles",
      title: "مقالات تخصصی",
      description: "آخرین مقالات و اخبار صنعتی در حوزه تجهیزات و ماشین‌آلات",
      icon: BookOpen,
      image: "/placeholder.svg?key=articles-banner",
      link: "/articles",
    },
    {
      id: "catalogs",
      title: "کاتالوگ‌ها",
      description: "دانلود کاتالوگ محصولات از برندهای معتبر داخلی و خارجی",
      icon: FileText,
      image: "/placeholder.svg?key=catalogs-banner",
      link: "/catalogs",
    },
    {
      id: "datasheets",
      title: "دیتاشیت‌ها",
      description: "مشخصات فنی و اطلاعات تخصصی محصولات صنعتی",
      icon: Database,
      image: "/placeholder.svg?key=datasheets-banner",
      link: "/datasheets",
    },
    {
      id: "academy",
      title: "آکادمی اوستا",
      description: "آموزش‌های تخصصی و دوره‌های کاربردی در حوزه صنعت",
      icon: GraduationCap,
      image: "/placeholder.svg?key=academy-banner",
      link: "/academy",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {resources.map((resource) => (
        <Link href={resource.link} key={resource.id} className="block h-full">
          <Card className="overflow-hidden h-full group hover:shadow-xl transition-all duration-500 border border-[#253F8F]/20 hover:border-[#F18F20]/50 bg-white/70 backdrop-blur-md hover:bg-white/80">
            <CardContent className="p-0">
              <div className="relative">
                {/* تصویر پس‌زمینه */}
                <div className="relative h-32 w-full overflow-hidden">
                  <Image
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#253F8F]/20 via-[#253F8F]/10 to-transparent group-hover:from-[#F18F20]/20 group-hover:via-[#F18F20]/10 transition-all duration-500"></div>
                </div>

                {/* محتوای روی تصویر */}
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/30 backdrop-blur-lg p-3 rounded-xl border border-[#253F8F]/30 shadow-lg group-hover:bg-[#F18F20]/20 group-hover:border-[#F18F20]/50 transition-all duration-300">
                      <resource.icon className="h-7 w-7 text-[#253F8F] group-hover:text-[#F18F20] transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-[#253F8F] group-hover:text-[#F18F20] transition-colors duration-300">
                        {resource.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#253F8F]/80 group-hover:bg-[#F18F20] rounded-full animate-pulse transition-colors duration-300"></div>
                        <span className="text-sm text-[#253F8F]/80 group-hover:text-[#F18F20] font-medium transition-colors duration-300">
                          جدیدترین محتوا
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/30 backdrop-blur-lg p-2 rounded-full border border-[#253F8F]/30 group-hover:bg-[#F18F20]/20 group-hover:border-[#F18F20]/50 transition-all duration-300">
                    <ArrowRight className="h-5 w-5 text-[#253F8F] group-hover:text-[#F18F20] transition-all duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white/50 backdrop-blur-sm">
                <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                <Button
                  variant="ghost"
                  className="text-[#253F8F] hover:text-[#F18F20] hover:bg-[#F18F20]/10 p-0 h-auto group-hover:translate-x-1 transition-all duration-300"
                >
                  <span>مشاهده</span>
                  <ArrowRight className="h-4 w-4 mr-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
