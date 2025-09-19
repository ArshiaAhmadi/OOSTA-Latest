import { Button } from "@/components/ui/button"
import { ArrowRight, Star, PenToolIcon as Tool, UserPlus } from "lucide-react"
import Link from "next/link"

export default function OustakarRecruitmentBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#253F8F] to-[#253F8F]/80 rounded-lg shadow-md">
      <div className="absolute top-0 right-0 w-32 h-full opacity-5">
        <div className="absolute transform rotate-12 -right-3 -top-5">
          <Tool className="w-24 h-24 text-white" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-32 h-full opacity-5">
        <div className="absolute transform -rotate-12 -left-3 -bottom-5">
          <Star className="w-24 h-24 text-white" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="hidden md:flex h-10 w-10 rounded-full bg-white/20 items-center justify-center flex-shrink-0">
              <UserPlus className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-base md:text-lg">به تیم متخصصین اوستاکار بپیوندید</h3>
              <p className="text-white/90 text-xs md:text-sm">با مهارت خود، درآمد بالا و مشتریان ثابت داشته باشید</p>
            </div>
          </div>

          <Link href="/oustakar/register">
            <Button
              size="default"
              className="bg-[#F18F20] text-white hover:bg-[#F18F20]/90 group whitespace-nowrap text-sm"
            >
              ثبت‌نام به عنوان اوستاکار
              <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
