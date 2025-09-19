import { Button } from "@/components/ui/button"
import { PenToolIcon as Tool, ArrowRight, CheckCircle, Clock, Users, Sparkles, Zap } from "lucide-react"
import Link from "next/link"

export default function OustakarBanner() {
  const steps = [
    { icon: Tool, title: "درخواست", desc: "نیاز خود را ثبت کنید" },
    { icon: Users, title: "تطبیق", desc: "با متخصص مناسب" },
    { icon: CheckCircle, title: "انجام", desc: "دریافت خدمات" },
  ]

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#253F8F] via-[#253F8F]/95 to-[#253F8F]/80 p-6 shadow-2xl border border-white/10">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#F18F20]/20 rounded-full blur-3xl -translate-y-20 translate-x-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#F18F20]/15 rounded-full blur-2xl translate-y-16 -translate-x-16 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-[#F18F20]/10 rounded-full blur-lg animate-bounce delay-500"></div>

        <div className="absolute top-4 right-20 text-[#F18F20]/30 animate-pulse">
          <Sparkles className="h-4 w-4" />
        </div>
        <div className="absolute bottom-6 left-16 text-white/20 animate-bounce delay-700">
          <Zap className="h-3 w-3" />
        </div>
        <div className="absolute top-8 left-1/3 text-[#F18F20]/25 animate-pulse delay-300">
          <Sparkles className="h-3 w-3" />
        </div>
      </div>

      <div className="relative z-10 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-6">
          {/* بخش متنی و مراحل */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-[#F18F20] to-[#F18F20]/80 p-3 rounded-xl shadow-lg shadow-[#F18F20]/25 hover:shadow-[#F18F20]/40 transition-all duration-300 hover:scale-110">
                <Tool className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white drop-shadow-lg">اوستاکار</h3>
                <p className="text-white/90 text-sm font-medium">اعزام متخصصین در ۳ مرحله ساده</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-2 group">
                  <div className="bg-white/15 backdrop-blur-md p-3 rounded-full border border-white/20 shadow-lg group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <step.icon className="h-5 w-5 text-[#F18F20] drop-shadow-sm" />
                  </div>
                  <div className="text-white">
                    <div className="text-sm font-semibold drop-shadow-sm">{step.title}</div>
                    <div className="text-xs text-white/80">{step.desc}</div>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-[#F18F20] mx-2 drop-shadow-sm animate-pulse" />
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 text-white/95 text-sm mb-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20">
                <Clock className="h-4 w-4 text-[#F18F20]" />
                <span className="font-medium">۲۴ ساعته</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20">
                <CheckCircle className="h-4 w-4 text-[#F18F20]" />
                <span className="font-medium">+۱۰۰۰ متخصص</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <Link href="/oustakar">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#F18F20] to-[#F18F20]/90 hover:from-[#F18F20]/90 hover:to-[#F18F20] text-white font-bold px-8 py-4 rounded-xl group transition-all duration-300 hover:scale-105 shadow-xl shadow-[#F18F20]/25 hover:shadow-[#F18F20]/40 border border-[#F18F20]/30"
              >
                <span className="text-lg">شروع کنید</span>
                <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:scale-110" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F18F20]/20 via-transparent to-[#F18F20]/20 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  )
}
