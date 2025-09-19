"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Globe, Ship, FileCheck, Shield, ArrowRight, Phone, Package } from "lucide-react"
import Link from "next/link"

export default function ImportServicesBanner() {
  return (
    <section className="relative py-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#253F8F]/5 via-[#F18F20]/5 to-[#253F8F]/5"></div>

      {/* الگوهای پس‌زمینه متحرک */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#253F8F]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#F18F20]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="mb-3 bg-[#253F8F]/10 text-[#253F8F] border-[#253F8F]/20 px-4 py-2 text-sm font-medium">
              <Globe className="w-4 h-4 mr-2" />
              خدمات جامع واردات و تجارت بین‌الملل
            </Badge>

            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#253F8F]">واردات حرفه‌ای از سراسر جهان</h2>

            <p className="text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              تیم متخصص اوستا با بیش از یک دهه تجربه، کلیه مراحل واردات شامل منبع‌یابی، مذاکره قیمت، ثبت سفارش، حمل
              بین‌المللی، ترخیص گمرکی و تحویل در محل را برای شما انجام می‌دهد. از جستجوی تأمین‌کننده تا تحویل نهایی، تنها
              کافی است محصول مورد نظر خود را سفارش دهید.
            </p>
          </div>

          <Card className="backdrop-blur-sm bg-white/90 dark:bg-slate-800/90 border border-[#253F8F]/10 shadow-xl">
            <CardContent className="p-6">
              {/* مراحل خدمات */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="text-center group">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#253F8F] to-[#253F8F]/80 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-sm mb-1 text-[#253F8F]">منبع‌یابی هوشمند</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    شناسایی و ارزیابی بهترین تأمین‌کنندگان با کیفیت‌ترین محصولات و رقابتی‌ترین قیمت‌ها
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-12 h-12 bg-[#253F8F] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <FileCheck className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-sm mb-1 text-[#253F8F]">مذاکره و ثبت سفارش</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    مذاکره حرفه‌ای برای بهترین شرایط پرداخت، کیفیت محصول و زمان‌بندی تحویل
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-12 h-12 bg-[#253F8F] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Ship className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-sm mb-1 text-[#253F8F]">حمل بین‌المللی</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    انتخاب بهترین روش حمل (دریایی، هوایی، زمینی) با کمترین هزینه و بیشترین سرعت
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-12 h-12 bg-[#253F8F] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-sm mb-1 text-[#253F8F]">ترخیص و تحویل</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    انجام کلیه فرایندهای گمرکی، پرداخت عوارض و تحویل محصول در محل مورد نظر شما
                  </p>
                </div>
              </div>

              {/* آمار عملکرد و دکمه‌ها */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-[#F18F20] mb-1">+1,200</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">سفارش موفق</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-[#F18F20] mb-1">35+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">کشور مبدأ</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-[#F18F20] mb-1">99.2%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">رضایت مشتری</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-[#F18F20] mb-1">24/7</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">پشتیبانی</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/import-services">
                    <Button
                      size="default"
                      className="bg-gradient-to-r from-[#253F8F] to-[#253F8F]/90 hover:from-[#253F8F]/90 hover:to-[#253F8F]/80 text-white px-6 py-2"
                    >
                      <Package className="w-4 h-4 mr-2" />
                      شروع سفارش واردات
                      <ArrowRight className="w-4 h-4 mr-2" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="default"
                      variant="outline"
                      className="border-2 border-[#F18F20] text-[#F18F20] hover:bg-[#F18F20]/10 px-6 py-2 bg-transparent"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      مشاوره رایگان
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
