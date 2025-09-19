"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import dynamic from "next/dynamic"
import {
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  ChevronUp,
  Heart,
  CheckCircle,
  ExternalLink,
} from "lucide-react"
import TrustBadges from "./trust-badges"

// Import map component dynamically to avoid SSR issues
const InteractiveMap = dynamic(() => import("./interactive-map"), {
  ssr: false,
  loading: () => (
    <div className="h-[150px] sm:h-[200px] w-full bg-white/10 rounded-lg flex items-center justify-center">
      <div className="animate-pulse text-white/70 text-sm">در حال بارگذاری نقشه...</div>
    </div>
  ),
})

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [email, setEmail] = useState("")
  const footerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  // Set mounted state to true after component mounts
  useEffect(() => {
    setMounted(true)
  }, [])

  // Check if footer is in viewport for animations
  useEffect(() => {
    if (!mounted) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current)
      }
    }
  }, [mounted])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setShowThankYou(true)
      setTimeout(() => {
        setShowThankYou(false)
        setEmail("")
      }, 3000)
    }
  }

  // Animation classes based on visibility
  const getAnimationClass = (delay: number) => {
    return `transition-all duration-700 ease-out ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    } ${mounted ? `delay-${delay}` : ""}`
  }

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-gradient-to-br from-[#253F8F] via-[#253F8F]/90 to-[#1a2d6b] text-white"
    >
      {/* Top wave decoration with animation */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform">
        <svg
          className="relative block w-full h-8 sm:h-12 md:h-16"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-background"
          ></path>
        </svg>
      </div>

      {/* Main footer content */}
      <div className="pt-12 sm:pt-16">
        <div className="container px-4">
          {/* Top section with logo and newsletter */}
          <div
            className={`flex flex-col lg:flex-row justify-between items-center mb-8 sm:mb-12 gap-6 lg:gap-0 ${getAnimationClass(1)}`}
          >
            <div className="text-center lg:text-right w-full lg:w-auto">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="footer-logo-animation dark:animate-glow-pulse">
                  <Image src="/ousta-logo-orange.png" alt="اوستا" width={60} height={60} className="sm:w-20 sm:h-20" />
                </div>
              </div>
              <p className="text-white/80 max-w-md text-sm sm:text-base leading-relaxed">
                فروشگاه تخصصی تجهیزات و محصولات صنعتی با ارائه خدمات مشاوره و پشتیبانی حرفه‌ای
              </p>
            </div>

            <div className="w-full lg:w-auto max-w-md">
              <div className="footer-card-animation bg-gradient-to-br from-[#F18F20]/20 to-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-[#F18F20]/30">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">عضویت در خبرنامه</h3>
                <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                  برای اطلاع از آخرین محصولات و تخفیف‌های ویژه
                </p>
                <form onSubmit={handleSubmit} className="relative">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                    <Input
                      placeholder="ایمیل خود را وارد کنید"
                      className="bg-white/20 border-0 text-white placeholder:text-white/60 focus-visible:ring-[#F18F20]/50 text-sm sm:text-base h-10 sm:h-auto"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button
                      type="submit"
                      className="sm:mr-2 bg-gradient-to-r from-[#F18F20] to-[#e67d0a] text-white hover:from-[#e67d0a] hover:to-[#F18F20] footer-button-animation shadow-lg h-10 sm:h-auto text-sm sm:text-base"
                    >
                      <Send className="h-3 w-3 sm:h-4 sm:w-4 ml-2 footer-icon-pulse" />
                      ارسال
                    </Button>
                  </div>

                  {/* Thank you message with animation */}
                  <div
                    className={`absolute top-full right-0 mt-2 bg-green-500/90 text-white px-3 sm:px-4 py-2 rounded-md flex items-center transition-all duration-300 text-sm ${
                      showThankYou ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px] pointer-events-none"
                    }`}
                  >
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 ml-2" />
                    <span>با تشکر! ایمیل شما ثبت شد.</span>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Main footer links section with staggered animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 py-6 sm:py-8">
            {/* About section */}
            <div className={`space-y-4 sm:space-y-6 lg:col-span-1 ${getAnimationClass(2)}`}>
              <h3 className="text-lg sm:text-xl font-bold text-white relative inline-block pb-2 footer-heading">
                درباره اوستا
                <span className="absolute bottom-0 right-0 w-8 sm:w-12 h-0.5 bg-gradient-to-r from-[#F18F20] to-transparent"></span>
              </h3>
              <p className="text-white/80 leading-relaxed text-justify text-sm sm:text-base">
                در اوستا، ما به فردای صنعت، ساختمان و کسب‌وکار ایران می‌اندیشیم؛ فردایی کارآمدتر، هوشمندتر و در دسترس‌تر.
                ما فقط یک فروشگاه یا پلتفرم خدماتی نیستیم؛ ما یک اکوسیستم یکپارچه هستیم که تمام چرخه یک نیاز فنی را پوشش
                می‌دهد.
              </p>
              <div className="flex justify-center sm:justify-start space-x-3 space-x-reverse">
                {[Instagram, Twitter, Facebook, Linkedin].map((Icon, idx) => (
                  <Button
                    key={idx}
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-white/10 hover:bg-[#F18F20]/20 text-white footer-social-icon border border-white/20 hover:border-[#F18F20]/50 transition-all duration-300 w-9 h-9 sm:w-10 sm:h-10"
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="sr-only">شبکه اجتماعی</span>
                  </Button>
                ))}
              </div>
            </div>

            <div className={`space-y-4 sm:space-y-6 ${getAnimationClass(3)}`}>
              <h3 className="text-lg sm:text-xl font-bold text-white relative inline-block pb-2 footer-heading">
                فروشگاه اوستا
                <span className="absolute bottom-0 right-0 w-8 sm:w-12 h-0.5 bg-gradient-to-r from-[#F18F20] to-transparent"></span>
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { href: "/", label: "صفحه اصلی" },
                  { href: "/products", label: "محصولات صنعتی" },
                  { href: "/catalogs", label: "کاتالوگ‌ها" },
                  { href: "/datasheets", label: "دیتاشیت‌ها" },
                  { href: "/rfq", label: "درخواست قیمت" },
                  { href: "/import-services", label: "خدمات واردات" },
                ].map((link, index) => (
                  <li key={index} className="footer-link-item">
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white flex items-center group text-sm sm:text-base"
                    >
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 text-[#F18F20]" />
                      <span className="relative">
                        {link.label}
                        <span className="absolute right-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-[#F18F20] transition-all duration-300"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`space-y-4 sm:space-y-6 ${getAnimationClass(4)}`}>
              <h3 className="text-lg sm:text-xl font-bold text-white relative inline-block pb-2 footer-heading">
                خدمات ویژه
                <span className="absolute bottom-0 right-0 w-8 sm:w-12 h-0.5 bg-gradient-to-r from-[#F18F20] to-transparent"></span>
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { href: "/oustakar", label: "اوستاکار" },
                  { href: "/professionals-join", label: "عضویت اوستاکار" },
                  { href: "/ai-assistant", label: "دستیار هوشمند اوستا" },
                  { href: "/supplier-join", label: "فروشنده شوید" },
                  { href: "/support", label: "پشتیبانی فنی" },
                ].map((link, index) => (
                  <li key={index} className="footer-link-item">
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white flex items-center group text-sm sm:text-base"
                    >
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 text-[#F18F20]" />
                      <span className="relative">
                        {link.label}
                        <span className="absolute right-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-[#F18F20] transition-all duration-300"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`space-y-4 sm:space-y-6 ${getAnimationClass(5)}`}>
              <h3 className="text-lg sm:text-xl font-bold text-white relative inline-block pb-2 footer-heading">
                همکاری با ما
                <span className="absolute bottom-0 right-0 w-8 sm:w-12 h-0.5 bg-gradient-to-r from-[#F18F20] to-transparent"></span>
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { href: "/supplier-join", label: "تامین‌کننده شوید" },
                  { href: "/professionals-join", label: "متخصص شوید" },
                  { href: "/contact", label: "مشارکت تجاری" },
                  { href: "/contact", label: "نمایندگی" },
                  { href: "/contact", label: "فرصت‌های شغلی" },
                ].map((link, index) => (
                  <li key={index} className="footer-link-item">
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white flex items-center group text-sm sm:text-base"
                    >
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 text-[#F18F20]" />
                      <span className="relative">
                        {link.label}
                        <span className="absolute right-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-[#F18F20] transition-all duration-300"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info with map */}
            <div className={`space-y-4 sm:space-y-6 ${getAnimationClass(6)}`}>
              <h3 className="text-lg sm:text-xl font-bold text-white relative inline-block pb-2 footer-heading">
                اطلاعات تماس
                <span className="absolute bottom-0 right-0 w-8 sm:w-12 h-0.5 bg-gradient-to-r from-[#F18F20] to-transparent"></span>
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { Icon: Mail, label: "ایمیل", value: "info@ousta.ir" },
                  { Icon: Phone, label: "تلفن پشتیبانی", value: "021-12345678" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center group footer-contact-item">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#F18F20]/20 to-white/10 flex items-center justify-center group-hover:from-[#F18F20]/30 group-hover:to-white/20 transition-all duration-300 border border-[#F18F20]/30">
                      <item.Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div className="mr-3 sm:mr-4">
                      <p className="text-white/60 text-xs sm:text-sm">{item.label}</p>
                      <p className="text-white text-sm sm:text-base">{item.value}</p>
                    </div>
                  </div>
                ))}

                {/* Address with interactive map */}
                <div className="footer-map-container">
                  <div className="flex items-center group footer-contact-item mb-2">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#F18F20]/20 to-white/10 flex items-center justify-center group-hover:from-[#F18F20]/30 group-hover:to-white/20 transition-all duration-300 border border-[#F18F20]/30">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div className="mr-3 sm:mr-4">
                      <p className="text-white/60 text-xs sm:text-sm">آدرس</p>
                      <p className="text-white text-sm sm:text-base">تهران، خیابان ولیعصر، ساختمان اوستا</p>
                    </div>
                  </div>

                  {/* Interactive Map */}
                  <div className="mt-3 rounded-lg overflow-hidden shadow-lg footer-map-animation border border-[#F18F20]/30">
                    <InteractiveMap />
                    <a
                      href="https://maps.google.com/?q=35.7219,51.3347"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-[#F18F20]/20 to-white/10 hover:from-[#F18F20]/30 hover:to-white/20 text-white text-xs sm:text-sm py-2 px-3 flex items-center justify-center transition-all duration-300"
                    >
                      <ExternalLink className="h-3 w-3 ml-1" />
                      مشاهده در گوگل مپ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges Section */}
          <div className={`py-6 sm:py-8 border-t border-white/10 ${getAnimationClass(7)}`}>
            <TrustBadges />
          </div>

          {/* Scroll to top button with animation */}
          <div className="flex justify-center my-6 sm:my-8">
            <button
              onClick={scrollToTop}
              className="bg-gradient-to-br from-[#F18F20] to-[#e67d0a] hover:from-[#e67d0a] hover:to-[#F18F20] text-white p-2 sm:p-3 rounded-full footer-scroll-button focus:outline-none focus:ring-2 focus:ring-[#F18F20]/50 shadow-lg transition-all duration-300"
              aria-label="بازگشت به بالای صفحه"
            >
              <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          <div className={`border-t border-white/20 py-6 sm:py-8 mt-4 ${getAnimationClass(8)}`}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center">
                <p className="text-white/80 text-sm sm:text-base">© ۱۴۰۴ اوستا. تمامی حقوق محفوظ است.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
                <div className="flex gap-4 sm:gap-6">
                  <Link
                    href="/contact"
                    className="text-white/80 hover:text-white transition-colors relative group text-sm sm:text-base"
                  >
                    تماس با ما
                    <span className="absolute right-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-[#F18F20] transition-all duration-300"></span>
                  </Link>
                  <Link
                    href="/support"
                    className="text-white/80 hover:text-white transition-colors relative group text-sm sm:text-base"
                  >
                    سوالات متداول
                    <span className="absolute right-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-[#F18F20] transition-all duration-300"></span>
                  </Link>
                </div>
                <div className="flex items-center text-white/80 text-sm sm:text-base">
                  <span>ساخته شده با</span>
                  <Heart className="h-3 w-3 sm:h-4 sm:w-4 mx-1 text-[#F18F20] footer-heart-animation" />
                  <span>در ایران</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
