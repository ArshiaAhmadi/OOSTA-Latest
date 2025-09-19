import { Button } from "@/components/ui/button"
import { Bot, Sparkles, MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AIAssistantPromo() {
  return (
    <div className="relative overflow-hidden rounded-xl border-2 border-[#253F8F]/30 shadow-lg">
      {/* پس‌زمینه */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#253F8F] to-[#F18F20] z-0"></div>

      {/* محتوا */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
        {/* بخش متنی */}
        <div className="flex flex-col justify-center text-white">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-white/20 p-2 rounded-lg">
              <Bot className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold">دستیار هوشمند اوستا</h3>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            با کمک <span className="bg-white/20 px-2 py-1 rounded">هوش مصنوعی</span>، محصول مناسب را پیدا کنید
          </h2>

          <p className="text-white/90 mb-6">
            دستیار هوشمند اوستا با استفاده از هوش مصنوعی پیشرفته، به شما کمک می‌کند تا نیازهای صنعتی خود را دقیق‌تر
            شناسایی کرده و بهترین محصولات را پیدا کنید.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm">پاسخگویی هوشمند</span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">پیشنهاد محصولات مناسب</span>
            </div>
          </div>

          <Link href="/ai-assistant">
            <Button
              size="lg"
              variant="secondary"
              className="group w-full sm:w-auto bg-white hover:bg-[#F18F20]/10 text-[#253F8F] hover:text-[#253F8F] border-2 border-white/50 hover:border-[#F18F20]/30"
            >
              <span>شروع گفتگو با دستیار هوشمند</span>
              <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* بخش تصویری */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-sm aspect-[4/3]">
            <Image
              src="/placeholder.svg?key=ijj5e"
              alt="دستیار هوش مصنوعی اوستا"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
