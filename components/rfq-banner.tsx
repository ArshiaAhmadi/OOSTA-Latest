import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RFQBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#253F8F] to-[#253F8F]/90 shadow-2xl">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-[#F18F20]/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse"></div>
      </div>

      <div className="relative z-10 p-8 lg:p-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content Section */}
          <div className="text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#F18F20] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold">درخواست قیمت (RFQ)</h2>
                <p className="text-white/80 text-sm">بهترین قیمت را از تامین‌کنندگان دریافت کنید</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <p className="text-white/90 text-lg leading-relaxed">
                محصول صنعتی مورد نیاز خود را پیدا نکردید؟ با سیستم درخواست قیمت اوستا، مشخصات محصول مورد نظرتان را ارسال
                کنید و از تامین‌کنندگان معتبر قیمت دریافت کنید.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F18F20]/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-white/90 text-sm">دریافت چندین قیمت رقابتی</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F18F20]/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-white/90 text-sm">صرفه‌جویی در زمان و هزینه</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F18F20]/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-white/90 text-sm">تامین‌کنندگان معتبر و بررسی شده</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F18F20]/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-white/90 text-sm">پشتیبانی کامل تا تحویل</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/rfq">
                <Button
                  size="lg"
                  className="bg-[#F18F20] hover:bg-[#F18F20]/90 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto"
                >
                  ثبت درخواست قیمت
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </Button>
              </Link>
              
            </div>
          </div>

          {/* Visual Section */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-center mb-4">
                <h3 className="text-white font-semibold text-lg mb-2">فرآیند درخواست قیمت</h3>
                <p className="text-white/70 text-sm">در ۳ مرحله ساده</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F18F20] flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-medium">ارسال درخواست</h4>
                    <p className="text-white/70 text-sm">مشخصات محصول مورد نیاز را ثبت کنید</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F18F20] flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-medium">دریافت قیمت‌ها</h4>
                    <p className="text-white/70 text-sm">تامین‌کنندگان قیمت‌های خود را ارسال می‌کنند</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F18F20] flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-medium">انتخاب و خرید</h4>
                    <p className="text-white/70 text-sm">بهترین پیشنهاد را انتخاب و خرید کنید</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
