"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import HeroSection from "@/components/hero-section"
import AIBanner from "@/components/ai-banner"
import { Skeleton } from "@/components/ui/skeleton"
import CategoryList from "@/components/category-list"
import FeaturedProducts from "@/components/featured-products"
import { ServicesSection } from "@/components/services-section"
import TopSuppliersSection from "@/components/top-suppliers-section"
import PartnersSection from "@/components/partners-section"
import ResourceBanners from "@/components/resource-banners"
import TrustBadgesSection from "@/components/trust-badges-section"
import FlashSalesSection from "@/components/flash-sales-section"
import TrendingProductsSection from "@/components/trending-products-section"
import LiveSalesStats from "@/components/live-sales-stats"
import ExitIntentPopup from "@/components/exit-intent-popup"
import CustomerReviewsCarousel from "@/components/customer-reviews-carousel"
import RFQBanner from "@/components/rfq-banner"
import OustakarBanner from "@/components/oustakar-banner"
import OustakarRecruitmentBanner from "@/components/oustakar-recruitment-banner"

// Lazy loading heavy components
const ProductComparisonSection = dynamic(
  () => import("@/components/product-comparison/comparison-section").then((mod) => mod.ProductComparisonSection),
  {
    loading: () => <Skeleton className="h-[600px] w-full rounded-lg" />,
  },
)

export default function Home() {
  return (
    <div className="min-h-screen">
      <AIBanner />
      {/* Hero Section */}
      <Suspense fallback={<Skeleton className="h-[600px] w-full" />}>
        <div className="-mt-1">
          <HeroSection />
        </div>
      </Suspense>

      {/* Product Category Slider */}
      <Suspense fallback={<Skeleton className="h-96 w-full" />}>
        <section className="mt-0">
          <CategoryList />
        </section>
      </Suspense>

      {/* Live Sales Statistics */}
      <Suspense fallback={<Skeleton className="h-16 w-full" />}>
        <section className="mt-4">
          <LiveSalesStats />
        </section>
      </Suspense>

      {/* Flash Sales */}
      <Suspense fallback={<Skeleton className="h-64 w-full" />}>
        <section className="mt-8">
          <FlashSalesSection />
        </section>
      </Suspense>

      {/* AI Assistant Section */}
      <Suspense fallback={<Skeleton className="h-[120px] w-full" />}>
        <section className="mt-8">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden bg-gradient-to-l from-[#253F8F] to-[#253F8F]/90 rounded-2xl p-4 sm:p-6 shadow-lg">
              {/* Icon and Text */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="sm:w-6 sm:h-6"
                      >
                        <rect x="3" y="11" width="18" height="10" rx="2" ry="2"></rect>
                        <circle cx="12" cy="5" r="2"></circle>
                        <path d="m12 7 2 4-4 0 2-4"></path>
                        <line x1="8" y1="16" x2="8" y2="16"></line>
                        <line x1="16" y1="16" x2="16" y2="16"></line>
                        <path d="M9 21v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-white font-bold text-base sm:text-lg leading-tight">
                        (OOSTA AI) دستیار هوشمند اوستا
                      </h3>
                      <p className="text-white/80 text-xs sm:text-sm mt-1">
                        محصول مناسب را در کمتر از 10 ثانیه پیدا کنید
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                  <div className="hidden md:flex items-center gap-4 text-white/70 text-xs whitespace-nowrap">
                    <span>+50K سوال پاسخ داده شده</span>
                    <span>•</span>
                    <span>98% دقت</span>
                  </div>
                  <Link href="/ai-assistant" className="w-full sm:w-auto">
                    <Button
                      size="sm"
                      className="bg-[#F18F20] hover:bg-[#F18F20]/90 text-white px-4 sm:px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto text-sm"
                    >
                      شروع گفتگو
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        className="sm:w-4 sm:h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    const formData = new FormData(e.target as HTMLFormElement)
                    const message = formData.get("message") as string
                    if (message.trim()) {
                      window.location.href = `/ai-assistant?message=${encodeURIComponent(message.trim())}`
                    }
                  }}
                  className="relative"
                >
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full border border-white/20 p-2 hover:bg-white/15 transition-all duration-300">
                    <input
                      name="message"
                      type="text"
                      placeholder="سوال خود را از دستیار هوشمند بپرسید..."
                      className="flex-1 bg-transparent text-white placeholder:text-white/60 px-3 sm:px-4 py-2 text-sm focus:outline-none min-w-0"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-[#F18F20] hover:bg-[#F18F20]/90 text-white rounded-full p-2 transition-all duration-300 hover:scale-105 flex-shrink-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        className="sm:w-4 sm:h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m22 2-7 20-4-9-9-4Z"></path>
                        <path d="M22 2 11 13"></path>
                      </svg>
                    </button>
                  </div>
                </form>

                {/* Suggested Questions */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-2 mt-3">
                  <button
                    onClick={() => {
                      window.location.href =
                        "/ai-assistant?message=" + encodeURIComponent("بهترین گیربکس برای موتور 5 اسب بخار چیست؟")
                    }}
                    className="text-xs bg-white/10 hover:bg-white/20 text-white/80 hover:text-white px-3 py-2 rounded-full transition-all duration-300 text-center"
                  >
                    بهترین گیربکس برای موتور 5 اسب بخار؟
                  </button>
                  <button
                    onClick={() => {
                      window.location.href =
                        "/ai-assistant?message=" + encodeURIComponent("قیمت پمپ آب صنعتی چقدر است؟")
                    }}
                    className="text-xs bg-white/10 hover:bg-white/20 text-white/80 hover:text-white px-3 py-2 rounded-full transition-all duration-300 text-center"
                  >
                    قیمت پمپ آب صنعتی؟
                  </button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-white/5 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-[#F18F20]/20 rounded-full blur-lg"></div>
            </div>
          </div>
        </section>
      </Suspense>

      <div className="container mx-auto px-4 py-4 sm:py-8">
        {/* Featured Products */}
        <Suspense fallback={<Skeleton className="h-[500px] w-full" />}>
          <section className="mt-8 sm:mt-12">
            <FeaturedProducts />
          </section>
        </Suspense>

        {/* Services Section */}
        <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
          <section className="mt-8 sm:mt-12">
            <ServicesSection />
          </section>
        </Suspense>

        {/* Trending Products */}
        <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
          <section className="mt-8 sm:mt-12">
            <TrendingProductsSection />
          </section>
        </Suspense>

        {/* Customer Reviews Carousel */}
        <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
          <section className="mt-8 sm:mt-12">
            <CustomerReviewsCarousel />
          </section>
        </Suspense>

        {/* Oustakar Banner */}
        <Suspense fallback={<Skeleton className="h-[200px] w-full" />}>
          <section className="mt-8 sm:mt-12">
            <OustakarBanner />
          </section>
        </Suspense>

        {/* Oustakar Recruitment Banner */}
        <Suspense fallback={<Skeleton className="h-[100px] w-full" />}>
          <section className="mt-6 sm:mt-8">
            <OustakarRecruitmentBanner />
          </section>
        </Suspense>

        {/* RFQ Banner */}
        <Suspense fallback={<Skeleton className="h-[600px] w-full" />}>
          <section className="mt-8 sm:mt-12 mb-6 sm:mb-8">
            <RFQBanner />
          </section>
        </Suspense>

        {/* Product Comparison Section */}
        <Suspense fallback={<Skeleton className="h-[600px] w-full" />}>
          <section className="mt-8 sm:mt-12">
            <ProductComparisonSection />
          </section>
        </Suspense>

        {/* Top Suppliers Section */}
        <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
          <section className="mt-8 sm:mt-12">
            <TopSuppliersSection />
          </section>
        </Suspense>

        {/* Resource Banners Section */}
        <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
          <section className="mt-8 sm:mt-12">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#253F8F]/5 to-[#F18F20]/5 border border-[#253F8F]/10 shadow-lg">
              {/* Simplified background decoration */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-16 h-16 sm:w-20 sm:h-20 bg-[#253F8F]/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 w-16 h-16 sm:w-20 sm:h-20 bg-[#F18F20]/10 rounded-full blur-xl"></div>
              </div>

              <div className="relative z-10 p-4 sm:p-6">
                {/* Compact header */}
                <div className="text-center mb-4 sm:mb-6">
                  <div className="inline-flex items-center gap-2 mb-3"></div>
                </div>

                {/* ResourceBanners with brand colors */}
                <ResourceBanners />

                {/* Compact call to action */}
                <div className="text-center mt-4 sm:mt-6">
                  <Link href="/resources" className="text-white font-bold text-sm sm:text-base">
                    مشاهده منابع
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </Suspense>

        {/* Partners Section */}
        <Suspense fallback={<Skeleton className="h-[200px] w-full" />}>
          <section className="mt-8 sm:mt-12">
            <PartnersSection />
          </section>
        </Suspense>

        {/* Trust Badges Section */}
        <Suspense fallback={<Skeleton className="h-[200px] w-full" />}>
          <section className="mt-8 sm:mt-12">
            <TrustBadgesSection />
          </section>
        </Suspense>
      </div>

      {/* Exit Intent Popup */}
      <ExitIntentPopup />
    </div>
  )
}
