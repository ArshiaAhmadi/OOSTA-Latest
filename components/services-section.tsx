import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, HeadphonesIcon, Bot, ClipboardList, Clock, PenTool as Tool } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  items?: string[]
  link?: {
    href: string
    text: string
  }
  featured?: boolean
  gradient?: {
    from: string
    to: string
  }
  badges?: string[]
  secondaryIcon?: React.ReactNode
}

const ServiceCard = ({
  title,
  description,
  icon,
  items,
  link,
  featured = false,
  gradient,
  badges,
  secondaryIcon,
}: ServiceCardProps) => {
  if (featured) {
    return (
      <Card className="overflow-hidden border-none transition-all duration-300 relative group">
        <div className="absolute inset-0 bg-[#253F8F] rounded-lg"></div>
        <div className="absolute inset-0 bg-white dark:bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
        <CardContent className="p-3 sm:p-4 md:p-5 flex flex-col items-center text-center relative z-10">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 md:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-white leading-tight">{title}</h3>
          <p className="text-white/90 mb-3 text-xs sm:text-sm leading-relaxed">{description}</p>
          {items && (
            <ul className="text-xs text-right w-full space-y-1 mt-2">
              {items.slice(0, 2).map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-white rounded-full ml-2 mt-1.5 flex-shrink-0"></span>
                  <span className="text-white/90 text-right leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          )}
          {link && (
            <Link href={link.href} className="mt-3 w-full">
              <Button
                variant="secondary"
                size="sm"
                className="w-full text-xs sm:text-sm bg-white/20 backdrop-blur-sm text-white hover:bg-[#F18F20] border-white/30 border transition-colors duration-300 h-8 sm:h-9"
              >
                {link.text}
              </Button>
            </Link>
          )}
        </CardContent>
        <div className="absolute top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 blur-lg"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F18F20]/20 blur-lg"></div>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden border-2 hover:border-[#253F8F]/50 transition-all duration-300 dark:border-gray-800 dark:hover:border-[#253F8F]/30">
      <CardContent className="p-3 sm:p-4 flex flex-col items-center text-center">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#253F8F]/10 dark:bg-[#253F8F]/5 rounded-full flex items-center justify-center mb-3 sm:mb-4">
          {icon}
        </div>
        <h3 className="text-base sm:text-lg font-bold mb-2 leading-tight">{title}</h3>
        <p className="text-muted-foreground mb-3 text-xs sm:text-sm dark:text-gray-400 leading-relaxed">
          {description}
        </p>
        {items && (
          <ul className="text-xs text-right w-full space-y-1 mt-2">
            {items.slice(0, 2).map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="w-1.5 h-1.5 bg-[#253F8F] rounded-full ml-2 mt-1.5 flex-shrink-0"></span>
                <span className="text-right leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

export function ServicesSection() {
  return (
    <section className="my-6 sm:my-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold">خدمات اوستا</h2>
        <Link href="/services">
          <Button
            variant="outline"
            size="sm"
            className="group relative overflow-hidden bg-[#253F8F]/5 hover:bg-[#253F8F] border-[#253F8F]/20 hover:border-[#253F8F] text-[#253F8F] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md text-xs sm:text-sm w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2 justify-center">
              <span className="hidden sm:inline">مشاهده همه خدمات</span>
              <span className="sm:hidden">همه خدمات</span>
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </span>
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        <ServiceCard
          title="دستیار هوش مصنوعی"
          description="با دستیار هوشمند مبتنی بر AI، بهترین محصولات را پیدا کنید."
          icon={<Bot className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-[#F18F20]" />}
          items={["تشخیص هوشمند نیازهای صنعتی", "پیشنهاد محصولات متناسب"]}
          featured={true}
          link={{ href: "/ai-assistant", text: "گفتگو با دستیار" }}
        />

        <ServiceCard
          title="خدمات اوستاکار"
          description="دسترسی به متخصصان ماهر در کمترین زمان ممکن."
          icon={<Tool className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-[#F18F20]" />}
          items={["متخصصان ماهر و باتجربه", "خدمات در محل"]}
          featured={true}
          link={{ href: "/oustakar", text: "درخواست متخصص" }}
        />

        <ServiceCard
          title="درخواست پیش‌فاکتور"
          description="دریافت سریع قیمت و مشخصات محصولات مورد نیاز."
          icon={<ClipboardList className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-[#F18F20]" />}
          items={["قیمت‌گذاری دقیق و سریع", "مناسب خریدهای سازمانی"]}
          featured={true}
          link={{ href: "/rfq", text: "درخواست قیمت" }}
        />

        <ServiceCard
          title="خدمات واردات جامع"
          description="تمامی فرآیندها از تأمین تا تحویل در محل شما از هر نقطه جهان، بدون هیچ دخالت شما انجام می‌شود."
          icon={<Truck className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-[#F18F20]" />}
          items={["تأمین از بهترین تأمین‌کنندگان جهان", "تحویل در محل بدون دخالت شما"]}
          featured={true}
          link={{ href: "/import-services", text: "درخواست واردات" }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-3 sm:mt-4 md:mt-6">
        <ServiceCard
          title="مشاوره تخصصی"
          description="کارشناسان متخصص آماده ارائه مشاوره رایگان."
          icon={<HeadphonesIcon className="h-5 w-5 sm:h-6 sm:w-6 text-[#F18F20]" />}
          items={["مشاوره تلفنی ۲۴ ساعته", "پشتیبانی آنلاین"]}
        />

        <ServiceCard
          title="ارسال سریع"
          description="ارسال سریع به سراسر کشور با بسته‌بندی ایمن."
          icon={<Truck className="h-5 w-5 sm:h-6 sm:w-6 text-[#F18F20]" />}
          items={["ارسال به سراسر کشور", "رهگیری مرسوله"]}
        />

        <ServiceCard
          title="پشتیبانی ۲۴/۷"
          description="پشتیبانی فنی شبانه‌روزی برای رفع مشکلات."
          icon={<Clock className="h-5 w-5 sm:h-6 sm:w-6 text-[#F18F20]" />}
          items={["پشتیبانی شبانه‌روزی", "تیم متخصص فنی"]}
        />
      </div>
    </section>
  )
}
