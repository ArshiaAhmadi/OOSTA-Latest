"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Gift, Clock, Mail } from "lucide-react"

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true)
        setHasShown(true)
      }
    }

    // تأخیر برای اطمینان از بارگذاری کامل صفحه
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave)
    }, 5000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [hasShown])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ارسال ایمیل به سرور
    console.log("Email submitted:", email)
    setIsOpen(false)
    // نمایش پیام موفقیت
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-red-50 via-orange-50 to-red-50 dark:from-red-950/20 dark:via-orange-950/20 dark:to-red-950/20 border-2 border-red-200 dark:border-red-800">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
            <Gift className="h-8 w-8 text-white" />
          </div>

          <DialogTitle className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">صبر کنید! 🎁</DialogTitle>

          <div className="space-y-2">
            <Badge className="bg-red-500 hover:bg-red-600 text-white font-bold animate-pulse">
              پیشنهاد ویژه فقط برای شما
            </Badge>

            <p className="text-lg font-semibold">15% تخفیف روی اولین خرید</p>

            <p className="text-sm text-muted-foreground">قبل از رفتن، کد تخفیف رایگان دریافت کنید</p>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          {/* مزایای پیشنهاد */}
          <div className="bg-white/60 dark:bg-gray-900/60 rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>تخفیف 15% روی تمام محصولات</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>ارسال رایگان برای خریدهای بالای 5 میلیون تومان</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>مشاوره رایگان با کارشناسان</span>
            </div>
          </div>

          {/* فرم ثبت ایمیل */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative">
              <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pr-10 border-red-200 dark:border-red-800 focus:border-red-400 dark:focus:border-red-600"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold"
            >
              دریافت کد تخفیف 15%
            </Button>
          </form>

          {/* تایمر محدودیت زمانی */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>این پیشنهاد تنها برای 10 دقیقه معتبر است</span>
          </div>

          {/* دکمه بستن */}
          <div className="text-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              نه متشکرم، ادامه مرور
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
