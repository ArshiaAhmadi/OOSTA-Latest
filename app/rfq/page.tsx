"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Calculator,
  MessageCircle,
  History,
  Save,
  Download,
  Star,
  CalendarIcon,
  Search,
  Bell,
  HelpCircle,
  Users,
  Eye,
  Layers,
  PieChart,
  Sparkles,
  CheckCircle2,
  Clock,
  Shield,
  Package,
  Building2,
  BarChart3,
  ImageIcon,
  Upload,
  FileCheck,
  ChevronRight,
  ChevronLeft,
  User,
  Phone,
  Mail,
  FileText,
  Zap,
  Send,
  ArrowRight,
  Info,
  X,
  ShoppingBag,
  ArrowLeft,
  Globe,
  Truck,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function RFQPage() {
  const [step, setStep] = useState(1)
  const [uploadedFile, setUploadedFile] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [priceEstimate, setPriceEstimate] = useState(null)
  const [showChat, setShowChat] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [deliveryDate, setDeliveryDate] = useState(null)
  const [bulkRequest, setBulkRequest] = useState(false)
  const [showFAQ, setShowFAQ] = useState(false)
  const [trackingCode, setTrackingCode] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0].name)
    }
  }

  const handleSubmit = () => {
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setStep(4)
    }, 2000)
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const stepTitles = ["اطلاعات محصول", "اطلاعات تماس", "بررسی نهایی", "تکمیل"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, #253F8F 0%, #F18F20 100%)` }}
      >
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] opacity-[0.02] bg-cover bg-center" />

        <div className="container relative px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge
                variant="outline"
                className="mb-6 border-white/30 bg-white/10 px-4 py-2 text-white backdrop-blur-sm"
              >
                <Sparkles className="ml-2 h-4 w-4" />
                سیستم هوشمند درخواست پیش‌فاکتور
              </Badge>
            </motion.div>

            <motion.h1
              className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              درخواست پیش‌فاکتور هوشمند
            </motion.h1>

            <motion.p
              className="mx-auto mb-8 max-w-3xl text-lg text-white/90 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              واحد تدارکات محترم شرکت شما دیگر نیازی به صرف زمان و انرژی برای تماس با تأمین‌کنندگان متعدد جهت دریافت
              پیش‌فاکتور ندارد. تنها کافی است مدارک درخواست خرید خود را در سامانه بارگذاری نمایید.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { icon: CheckCircle2, text: "بیش از ۹۵٪ رضایت مشتری", color: "text-green-400" },
                { icon: Clock, text: "پاسخگویی در کمتر از ۲۴ ساعت", color: "text-blue-300" },
                { icon: Shield, text: "تضمین بهترین قیمت بازار", color: "text-amber-300" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm"
                >
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                  <span className="text-sm font-medium text-white">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="h-auto w-full fill-background">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
          </svg>
        </div>
      </section>

      {/* Quick Actions Bar */}
      <div className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container px-4 py-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 md:gap-4">
              {[
                { icon: Save, label: "ذخیره پیش‌نویس" },
                { icon: History, label: "تاریخچه" },
                { icon: Calculator, label: "برآورد قیمت" },
              ].map((action, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="gap-2 hover:bg-[#F18F20]/10 hover:text-[#F18F20]"
                >
                  <action.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{action.label}</span>
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Bell
                  className={`h-4 w-4 transition-colors ${notifications ? "text-[#F18F20]" : "text-muted-foreground"}`}
                />
                <Switch
                  checked={notifications}
                  onCheckedChange={setNotifications}
                  className="data-[state=checked]:bg-[#F18F20]"
                />
                <span
                  className={`hidden text-sm sm:inline transition-colors ${notifications ? "text-[#F18F20] font-medium" : "text-muted-foreground"}`}
                >
                  اطلاع‌رسانی
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 hover:bg-[#F18F20]/10 hover:text-[#F18F20]"
                onClick={() => setShowChat(!showChat)}
              >
                <MessageCircle className="h-4 w-4" />
                <span className="hidden sm:inline">پشتیبانی</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container px-4 py-8 md:py-12">
        <div className="mx-auto max-w-7xl">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              {stepTitles.map((title, index) => {
                const stepNumber = index + 1
                const isActive = step === stepNumber
                const isCompleted = step > stepNumber

                return (
                  <div key={stepNumber} className="flex flex-col items-center">
                    <div className="relative flex items-center">
                      <motion.div
                        className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                          isActive
                            ? "border-[#F18F20] bg-[#F18F20] text-white shadow-lg shadow-[#F18F20]/25"
                            : isCompleted
                              ? "border-[#253F8F] bg-[#253F8F]/10 text-[#253F8F]"
                              : "border-muted-foreground/30 bg-muted text-muted-foreground"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="h-6 w-6" />
                        ) : (
                          <span className="font-semibold">{stepNumber}</span>
                        )}
                      </motion.div>

                      {index < stepTitles.length - 1 && (
                        <div
                          className={`absolute right-12 top-6 h-0.5 w-16 transition-colors duration-300 md:w-24 lg:w-32 ${
                            isCompleted ? "bg-[#253F8F]" : "bg-muted"
                          }`}
                        />
                      )}
                    </div>

                    <span
                      className={`mt-3 text-center text-sm font-medium transition-colors duration-300 ${
                        isActive || isCompleted ? "text-[#253F8F]" : "text-muted-foreground"
                      }`}
                    >
                      {title}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Sidebar */}
            <aside className="space-y-6 lg:col-span-3">
              <Card className="overflow-hidden border-border/50 bg-gradient-to-br from-[#253F8F]/5 to-[#F18F20]/5 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Globe className="h-5 w-5 text-[#F18F20]" />
                    واردات همه‌جانبه
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-4 pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 border border-[#253F8F]/10">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F18F20]/10">
                        <Package className="h-5 w-5 text-[#F18F20]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-[#253F8F]">تجهیزات صنعتی</h4>
                        <p className="text-xs text-muted-foreground">واردات مستقیم از بهترین برندها</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 border border-[#253F8F]/10">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#253F8F]/10">
                        <Truck className="h-5 w-5 text-[#253F8F]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-[#253F8F]">حمل و نقل سریع</h4>
                        <p className="text-xs text-muted-foreground">تحویل در کمترین زمان ممکن</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 border border-[#253F8F]/10">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F18F20]/10">
                        <Shield className="h-5 w-5 text-[#F18F20]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-[#253F8F]">ضمانت کیفیت</h4>
                        <p className="text-xs text-muted-foreground">گارانتی معتبر و پشتیبانی کامل</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      className="w-full bg-gradient-to-r from-[#253F8F] to-[#F18F20] hover:from-[#253F8F]/90 hover:to-[#F18F20]/90 text-white font-medium"
                      onClick={() => (window.location.href = "/#imports")}
                    >
                      <ArrowLeft className="ml-2 h-4 w-4" />
                      مشاهده خدمات واردات
                    </Button>
                  </div>

                  <div className="text-center pt-2">
                    <Badge variant="outline" className="text-xs border-[#F18F20] text-[#F18F20]">
                      ویژه: تخفیف ۲۰٪ برای سفارشات بالای ۱۰ میلیون تومان
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-border/50 bg-gradient-to-br from-[#253F8F]/5 to-[#F18F20]/5 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="rounded-full bg-gradient-to-r from-[#253F8F] to-[#F18F20] p-3">
                        <ShoppingBag className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#253F8F] mb-2">محصولات آماده موجود در انبار</h3>
                      <p className="text-muted-foreground text-sm">
                        بیش از ۱۰,۰۰۰ قطعه صنعتی با تحویل فوری و قیمت ویژه
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-4 py-2">
                      <div className="text-center">
                        <div className="text-lg font-bold text-[#F18F20]">۲۴ ساعته</div>
                        <div className="text-xs text-muted-foreground">تحویل سریع</div>
                      </div>
                      <div className="h-8 w-px bg-border"></div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-[#F18F20]">۳۰%</div>
                        <div className="text-xs text-muted-foreground">تخفیف ویژه</div>
                      </div>
                      <div className="h-8 w-px bg-border"></div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-[#F18F20]">ضمانت</div>
                        <div className="text-xs text-muted-foreground">کیفیت اصل</div>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-[#253F8F] to-[#F18F20] hover:from-[#253F8F]/90 hover:to-[#F18F20]/90 text-white font-bold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => (window.location.href = "/products")}
                    >
                      <Package className="ml-2 h-5 w-5" />
                      مشاهده محصولات موجود
                      <ArrowLeft className="mr-2 h-4 w-4" />
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                      <Shield className="h-3 w-3" />
                      <span>پرداخت امن و ضمانت بازگشت وجه</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Request Tracking */}
              <Card className="overflow-hidden border-border/50 bg-background/70 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Search className="h-5 w-5 text-[#F18F20]" />
                    پیگیری درخواست
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 p-4 pt-0">
                  <Input
                    placeholder="کد پیگیری را وارد کنید"
                    value={trackingCode}
                    onChange={(e) => setTrackingCode(e.target.value)}
                    className="text-sm focus-visible:ring-[#F18F20]/30"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-2 border-[#253F8F]/30 hover:bg-[#253F8F]/10 hover:text-[#253F8F] bg-transparent"
                  >
                    <Eye className="h-4 w-4" />
                    مشاهده وضعیت
                  </Button>
                </CardContent>
              </Card>

              {/* Statistics */}
              <Card className="overflow-hidden border-border/50 bg-background/70 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <PieChart className="h-5 w-5 text-[#F18F20]" />
                    آمار سیستم
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-4 pt-0">
                  {[
                    { label: "درخواست‌های امروز", value: "247" },
                    { label: "میانگین پاسخ", value: "4.2 ساعت" },
                    { label: "رضایت مشتری", value: "4.8", icon: Star },
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                      <div className="flex items-center gap-1">
                        {stat.icon && <stat.icon className="h-3 w-3 fill-[#F18F20] text-[#F18F20]" />}
                        <span className="font-semibold">{stat.value}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </aside>

            {/* Main Form Content */}
            <div className="lg:col-span-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {step === 1 && (
                    <Card className="overflow-hidden border border-border/50 bg-background/70 shadow-xl backdrop-blur-sm">
                      <CardHeader className="border-b border-border/30 bg-muted/30">
                        <div className="flex items-center gap-4">
                          <div
                            className="flex h-12 w-12 items-center justify-center rounded-full"
                            style={{ background: `linear-gradient(135deg, #253F8F/20 0%, #F18F20/20 100%)` }}
                          >
                            <Package className="h-6 w-6 text-[#253F8F]" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl">اطلاعات محصول</CardTitle>
                            <CardDescription>لطفاً مشخصات محصول مورد نظر خود را وارد کنید</CardDescription>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-8 p-6 md:p-8">
                        <Tabs defaultValue="product" className="w-full">
                          <TabsList className="mb-6 grid w-full grid-cols-2">
                            <TabsTrigger value="product">محصول موجود</TabsTrigger>
                            <TabsTrigger value="custom">سفارش ویژه</TabsTrigger>
                          </TabsList>

                          <TabsContent value="product" className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                              <div className="space-y-2">
                                <Label htmlFor="product-name" className="text-base font-medium">
                                  نام محصول <span className="text-destructive">*</span>
                                </Label>
                                <div className="relative">
                                  <Input
                                    id="product-name"
                                    placeholder="مثال: پمپ سانتریفیوژ"
                                    className="border-border/50 bg-background pl-10 focus-visible:ring-[#F18F20]/30"
                                  />
                                  <Package className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                </div>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="manufacturer" className="text-base font-medium">
                                  شرکت سازنده <span className="text-destructive">*</span>
                                </Label>
                                <div className="relative">
                                  <Input
                                    id="manufacturer"
                                    placeholder="مثال: گراندفوس"
                                    className="border-border/50 bg-background pl-10 focus-visible:ring-[#F18F20]/30"
                                  />
                                  <Building2 className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                              <div className="space-y-2">
                                <Label htmlFor="product-code" className="text-base font-medium">
                                  کد یا شناسه محصول (اختیاری)
                                </Label>
                                <Input
                                  id="product-code"
                                  placeholder="مثال: CP-250"
                                  className="border-border/50 bg-background focus-visible:ring-[#F18F20]/30"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="quantity" className="text-base font-medium">
                                  تعداد مورد نیاز <span className="text-destructive">*</span>
                                </Label>
                                <div className="relative">
                                  <Input
                                    id="quantity"
                                    type="number"
                                    min="1"
                                    placeholder="مثال: 5"
                                    className="border-border/50 bg-background pl-10 focus-visible:ring-[#F18F20]/30"
                                  />
                                  <BarChart3 className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                </div>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="description" className="text-base font-medium">
                                توضیحات و مشخصات فنی <span className="text-destructive">*</span>
                              </Label>
                              <Textarea
                                id="description"
                                placeholder="لطفاً مشخصات فنی و نیازمندی‌های خود را شرح دهید..."
                                className="min-h-[120px] border-border/50 bg-background focus-visible:ring-[#F18F20]/30"
                              />
                            </div>
                          </TabsContent>

                          <TabsContent value="custom" className="space-y-6">
                            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-300">
                              <div className="flex gap-3">
                                <Sparkles className="mt-0.5 h-5 w-5 flex-shrink-0" />
                                <div>
                                  <h3 className="mb-1 font-medium">سفارش ویژه و سفارشی‌سازی</h3>
                                  <p className="text-sm">
                                    در این بخش می‌توانید درخواست طراحی و ساخت محصول سفارشی خود را ثبت کنید. کارشناسان ما
                                    پس از بررسی، با شما تماس خواهند گرفت.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="custom-title" className="text-base font-medium">
                                عنوان پروژه <span className="text-destructive">*</span>
                              </Label>
                              <Input
                                id="custom-title"
                                placeholder="مثال: طراحی و ساخت سیستم پمپاژ مخصوص"
                                className="border-border/50 bg-background focus-visible:ring-[#F18F20]/30"
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="custom-requirements" className="text-base font-medium">
                                شرح نیازمندی‌ها <span className="text-destructive">*</span>
                              </Label>
                              <Textarea
                                id="custom-requirements"
                                placeholder="لطفاً نیازمندی‌ها، مشخصات فنی و انتظارات خود از محصول نهایی را شرح دهید..."
                                className="min-h-[150px] border-border/50 bg-background focus-visible:ring-[#F18F20]/30"
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="deadline" className="text-base font-medium">
                                زمان‌بندی مورد نظر
                              </Label>
                              <Select>
                                <SelectTrigger className="border-border/50 bg-background focus:ring-[#F18F20]/30">
                                  <SelectValue placeholder="بازه زمانی مورد نظر را انتخاب کنید" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="urgent">فوری (کمتر از ۱ ماه)</SelectItem>
                                  <SelectItem value="normal">عادی (۱ تا ۳ ماه)</SelectItem>
                                  <SelectItem value="flexible">انعطاف‌پذیر (بیش از ۳ ماه)</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </TabsContent>
                        </Tabs>

                        {/* File Upload Section */}
                        <div className="space-y-2">
                          <Label className="text-base font-medium">تصویر محصول (اختیاری)</Label>
                          <div
                            className={`rounded-lg border-2 border-dashed p-6 text-center transition-all ${
                              uploadedFile
                                ? "border-primary/30 bg-primary/5"
                                : "border-border hover:border-primary/30 hover:bg-muted/50"
                            }`}
                          >
                            {!uploadedFile ? (
                              <>
                                <ImageIcon className="mx-auto mb-4 h-12 w-12 text-muted-foreground opacity-70" />
                                <p className="mb-2 text-sm text-muted-foreground">
                                  فایل تصویر را اینجا رها کنید یا کلیک کنید
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  فرمت‌های مجاز: JPG، PNG، PDF - حداکثر حجم: 5MB
                                </p>
                                <Input
                                  id="product-image"
                                  type="file"
                                  className="hidden"
                                  accept=".jpg,.jpeg,.png,.pdf"
                                  onChange={handleFileChange}
                                />
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="mt-4 bg-background"
                                  onClick={() => document.getElementById("product-image")?.click()}
                                >
                                  <Upload className="ml-2 h-4 w-4" />
                                  انتخاب فایل
                                </Button>
                              </>
                            ) : (
                              <div className="flex flex-col items-center justify-center">
                                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                                  <FileCheck className="h-8 w-8 text-primary" />
                                </div>
                                <p className="text-sm font-medium">{uploadedFile}</p>
                                <p className="mt-1 text-xs text-muted-foreground">فایل با موفقیت بارگذاری شد</p>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="mt-3 text-destructive hover:bg-destructive/10 hover:text-destructive"
                                  onClick={() => setUploadedFile(null)}
                                >
                                  حذف فایل
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter className="border-t border-border/30 bg-muted/30 p-6">
                        <div className="flex w-full justify-end">
                          <Button
                            onClick={nextStep}
                            className="text-white hover:opacity-90"
                            style={{ background: `linear-gradient(135deg, #253F8F 0%, #F18F20 100%)` }}
                          >
                            مرحله بعد
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  )}

                  {step === 2 && (
                    <Card className="overflow-hidden border border-border/50 bg-background/70 shadow-xl backdrop-blur-sm">
                      <CardHeader className="border-b border-border/30 bg-muted/30">
                        <div className="flex items-center gap-4">
                          <div
                            className="flex h-12 w-12 items-center justify-center rounded-full"
                            style={{ background: `linear-gradient(135deg, #253F8F/20 0%, #F18F20/20 100%)` }}
                          >
                            <User className="h-6 w-6 text-[#253F8F]" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl">اطلاعات تماس</CardTitle>
                            <CardDescription>لطفاً اطلاعات تماس خود را وارد کنید</CardDescription>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-6 p-6 md:p-8">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="fullname" className="text-base font-medium">
                              نام و نام خانوادگی <span className="text-destructive">*</span>
                            </Label>
                            <div className="relative">
                              <Input
                                id="fullname"
                                className="border-border/50 bg-background pl-10 focus-visible:ring-[#F18F20]/30"
                              />
                              <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="company" className="text-base font-medium">
                              نام شرکت (اختیاری)
                            </Label>
                            <div className="relative">
                              <Input
                                id="company"
                                className="border-border/50 bg-background pl-10 focus-visible:ring-[#F18F20]/30"
                              />
                              <Building2 className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-base font-medium">
                              شماره تماس <span className="text-destructive">*</span>
                            </Label>
                            <div className="relative">
                              <Input
                                id="phone"
                                type="tel"
                                className="border-border/50 bg-background pl-10 focus-visible:ring-[#F18F20]/30"
                                dir="ltr"
                              />
                              <Phone className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-base font-medium">
                              ایمیل <span className="text-destructive">*</span>
                            </Label>
                            <div className="relative">
                              <Input
                                id="email"
                                type="email"
                                className="border-border/50 bg-background pl-10 focus-visible:ring-[#F18F20]/30"
                                dir="ltr"
                              />
                              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="customer-type" className="text-base font-medium">
                            نوع مشتری <span className="text-destructive">*</span>
                          </Label>
                          <Select>
                            <SelectTrigger className="border-border/50 bg-background focus:ring-[#F18F20]/30">
                              <SelectValue placeholder="انتخاب کنید" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="individual">حقیقی</SelectItem>
                              <SelectItem value="company">شرکت خصوصی</SelectItem>
                              <SelectItem value="government">سازمان دولتی</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="additional-info" className="text-base font-medium">
                            اطلاعات تکمیلی (اختیاری)
                          </Label>
                          <Textarea
                            id="additional-info"
                            placeholder="هرگونه اطلاعات اضافی که می‌تواند به ما در ارائه پیش‌فاکتور دقیق‌تر کمک کند..."
                            className="border-border/50 bg-background focus-visible:ring-[#F18F20]/30"
                          />
                        </div>

                        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-blue-800 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-300">
                          <div className="flex gap-3">
                            <Shield className="mt-0.5 h-5 w-5 flex-shrink-0" />
                            <div>
                              <h3 className="mb-1 font-medium">حریم خصوصی شما برای ما مهم است</h3>
                              <p className="text-sm">
                                اطلاعات شما نزد ما محفوظ خواهد ماند و تنها برای ارائه پیش‌فاکتور و خدمات مرتبط استفاده
                                می‌شود.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter className="flex justify-between border-t border-border/30 bg-muted/30 p-6">
                        <Button variant="outline" onClick={prevStep} className="gap-2 bg-transparent">
                          <ChevronLeft className="h-4 w-4" />
                          بازگشت
                        </Button>
                        <Button
                          onClick={nextStep}
                          className="text-white hover:opacity-90"
                          style={{ background: `linear-gradient(135deg, #253F8F 0%, #F18F20 100%)` }}
                        >
                          مرحله بعد
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  )}

                  {step === 3 && (
                    <Card className="overflow-hidden border border-border/50 bg-background/70 shadow-xl backdrop-blur-sm">
                      <CardHeader className="border-b border-border/30 bg-muted/30">
                        <div className="flex items-center gap-4">
                          <div
                            className="flex h-12 w-12 items-center justify-center rounded-full"
                            style={{ background: `linear-gradient(135deg, #253F8F/20 0%, #F18F20/20 100%)` }}
                          >
                            <FileCheck className="h-6 w-6 text-[#253F8F]" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl">بررسی نهایی</CardTitle>
                            <CardDescription>لطفاً اطلاعات وارد شده را بررسی و تأیید کنید</CardDescription>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-6 p-6 md:p-8">
                        {/* Product Information Review */}
                        <div className="space-y-4 rounded-lg border border-border p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="flex items-center gap-2 text-lg font-semibold">
                              <Package className="h-5 w-5 text-[#253F8F]" />
                              اطلاعات محصول
                            </h3>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-[#253F8F] hover:bg-[#253F8F]/10 hover:text-[#253F8F]/80"
                              onClick={() => setStep(1)}
                            >
                              ویرایش
                            </Button>
                          </div>
                          <Separator />
                          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {[
                              { label: "نام محصول", value: "پمپ سانتریفیوژ" },
                              { label: "شرکت سازنده", value: "گراندفوس" },
                              { label: "کد محصول", value: "CP-250" },
                              { label: "تعداد", value: "5 عدد" },
                            ].map((item, index) => (
                              <div key={index}>
                                <p className="text-sm text-muted-foreground">{item.label}</p>
                                <p className="font-medium">{item.value}</p>
                              </div>
                            ))}
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">توضیحات</p>
                            <p className="text-sm">
                              پمپ سانتریفیوژ با قدرت 2.2 کیلووات، دبی 50 متر مکعب بر ساعت و هد 20 متر
                            </p>
                          </div>
                          {uploadedFile && (
                            <div className="flex items-center gap-2 text-sm">
                              <FileText className="h-4 w-4 text-[#253F8F]" />
                              <span>{uploadedFile}</span>
                            </div>
                          )}
                        </div>

                        {/* Contact Information Review */}
                        <div className="space-y-4 rounded-lg border border-border p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="flex items-center gap-2 text-lg font-semibold">
                              <User className="h-5 w-5 text-[#253F8F]" />
                              اطلاعات تماس
                            </h3>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-[#253F8F] hover:bg-[#253F8F]/10 hover:text-[#253F8F]/80"
                              onClick={() => setStep(2)}
                            >
                              ویرایش
                            </Button>
                          </div>
                          <Separator />
                          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {[
                              { label: "نام و نام خانوادگی", value: "علی محمدی" },
                              { label: "شرکت", value: "شرکت صنعتی پیشرو" },
                              { label: "شماره تماس", value: "09123456789", dir: "ltr" },
                              { label: "ایمیل", value: "info@example.com", dir: "ltr" },
                              { label: "نوع مشتری", value: "شرکت خصوصی" },
                            ].map((item, index) => (
                              <div key={index}>
                                <p className="text-sm text-muted-foreground">{item.label}</p>
                                <p className="font-medium" dir={item.dir}>
                                  {item.value}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Final Notice */}
                        <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-green-800 dark:border-green-900 dark:bg-green-950/30 dark:text-green-300">
                          <div className="flex gap-3">
                            <Zap className="mt-0.5 h-5 w-5 flex-shrink-0" />
                            <div>
                              <h3 className="mb-1 font-medium">یک قدم تا دریافت پیش‌فاکتور</h3>
                              <p className="text-sm">
                                با تأیید نهایی، درخواست شما برای کارشناسان ما ارسال می‌شود و در اسرع وقت پیش‌فاکتور برای
                                شما ارسال خواهد شد.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter className="flex justify-between border-t border-border/30 bg-muted/30 p-6">
                        <Button variant="outline" onClick={prevStep} className="gap-2 bg-transparent">
                          <ChevronLeft className="h-4 w-4" />
                          بازگشت
                        </Button>
                        <Button
                          onClick={handleSubmit}
                          className="min-w-[150px] text-white hover:opacity-90"
                          style={{ background: `linear-gradient(135deg, #253F8F 0%, #F18F20 100%)` }}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <svg
                                className="-ml-1 mr-3 h-4 w-4 animate-spin text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                              </svg>
                              در حال ارسال...
                            </>
                          ) : (
                            <>
                              ارسال درخواست
                              <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </CardFooter>
                    </Card>
                  )}

                  {step === 4 && (
                    <Card className="overflow-hidden border border-border/50 bg-background/70 shadow-xl backdrop-blur-sm">
                      <CardContent className="p-6 text-center md:p-8">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, type: "spring" }}
                          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30"
                        >
                          <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
                        </motion.div>

                        <h2 className="mb-2 text-2xl font-bold">درخواست شما با موفقیت ثبت شد</h2>
                        <p className="mx-auto mb-6 max-w-md text-muted-foreground">
                          کارشناسان ما در اسرع وقت درخواست شما را بررسی کرده و پیش‌فاکتور را برای شما ارسال خواهند کرد.
                        </p>

                        <div className="mx-auto mb-8 max-w-sm rounded-lg bg-muted/50 p-4">
                          <p className="mb-2 text-sm text-muted-foreground">کد پیگیری درخواست شما:</p>
                          <p className="font-mono text-lg font-bold" dir="ltr">
                            RFQ-{Math.floor(100000 + Math.random() * 900000)}
                          </p>
                        </div>

                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                          <Button variant="outline" className="gap-2 bg-transparent" onClick={() => setStep(1)}>
                            <ArrowRight className="h-4 w-4" />
                            ثبت درخواست جدید
                          </Button>
                          <Button
                            className="gap-2 text-white hover:opacity-90"
                            style={{ background: `linear-gradient(135deg, #253F8F 0%, #F18F20 100%)` }}
                          >
                            بازگشت به صفحه اصلی
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Advanced Features Section */}
              {step < 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-8 space-y-6"
                >
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {/* Bulk Request Option */}
                    <Card className="overflow-hidden border-border/50 bg-background/70 backdrop-blur-sm">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="flex items-center gap-2 text-lg">
                            <Layers className="h-4 w-4 text-[#F18F20]" />
                            درخواست گروهی
                          </CardTitle>
                          <Switch checked={bulkRequest} onCheckedChange={setBulkRequest} />
                        </div>
                        <CardDescription>برای درخواست چندین محصول همزمان</CardDescription>
                      </CardHeader>
                      {bulkRequest && (
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <Button variant="outline" className="gap-2 bg-transparent">
                              <Upload className="h-4 w-4" />
                              آپلود Excel
                            </Button>
                            <Button variant="outline" className="gap-2 bg-transparent">
                              <Download className="h-4 w-4" />
                              دانلود قالب
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            می‌توانید لیست محصولات خود را در قالب Excel آپلود کنید.
                          </p>
                        </CardContent>
                      )}
                    </Card>

                    {/* Delivery Preferences */}
                    <Card className="overflow-hidden border-border/50 bg-background/70 backdrop-blur-sm">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <CalendarIcon className="h-4 w-4 text-[#F18F20]" />
                          تنظیمات تحویل
                        </CardTitle>
                        <CardDescription>زمان‌بندی و نحوه تحویل</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <Label>تاریخ مورد نیاز</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" className="w-full justify-start bg-transparent">
                                <CalendarIcon className="ml-2 h-4 w-4" />
                                {deliveryDate ? deliveryDate.toLocaleDateString("fa-IR") : "انتخاب تاریخ"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar mode="single" selected={deliveryDate} onSelect={setDeliveryDate} initialFocus />
                            </PopoverContent>
                          </Popover>
                        </div>

                        <div className="space-y-2">
                          {[
                            { id: "installation", label: "نیاز به خدمات نصب و راه‌اندازی" },
                            { id: "warranty", label: "اطلاعات گارانتی و خدمات پس از فروش" },
                          ].map((item) => (
                            <div key={item.id} className="flex items-center space-x-2 space-x-reverse">
                              <Checkbox id={item.id} />
                              <Label htmlFor={item.id} className="text-sm">
                                {item.label}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Supplier Preferences */}
                    <Card className="overflow-hidden border-border/50 bg-background/70 backdrop-blur-sm">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <Users className="h-4 w-4 text-[#F18F20]" />
                          تنظیمات تأمین‌کننده
                        </CardTitle>
                        <CardDescription>ترجیحات انتخاب تأمین‌کننده</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <Checkbox id="multiple-quotes" />
                          <Label htmlFor="multiple-quotes" className="text-sm">
                            دریافت پیش‌فاکتور از چندین تأمین‌کننده
                          </Label>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-sm">حداقل امتیاز تأمین‌کننده</Label>
                          <div className="flex items-center gap-4">
                            <div className="flex-1">
                              <Progress value={80} className="h-2" />
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-[#F18F20] text-[#F18F20]" />
                              <span className="text-sm font-medium">4.0+</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Features Section */}
          {step < 4 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-16"
            >
              <div className="mb-10 text-center">
                <h2 className="mb-2 text-2xl font-bold">چرا سیستم درخواست پیش‌فاکتور اوستا؟</h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  با استفاده از سیستم هوشمند اوستا، تجربه متفاوتی از درخواست و دریافت پیش‌فاکتور خواهید داشت
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {[
                  {
                    icon: Zap,
                    title: "سرعت بالا",
                    description: "دریافت پیش‌فاکتور در کمترین زمان ممکن، معمولاً کمتر از ۲۴ ساعت کاری",
                  },
                  {
                    icon: Shield,
                    title: "قی��ت رقابتی",
                    description: "تضمین بهترین قیمت بازار با امکان مقایسه قیمت‌ها از تأمین‌کنندگان مختلف",
                  },
                  {
                    icon: Sparkles,
                    title: "سفارشی‌سازی",
                    description: "امکان سفارش محصولات خاص و سفارشی‌سازی شده مطابق با نیازهای شما",
                  },
                ].map((feature, index) => (
                  <motion.div key={index} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                    <Card className="h-full border-border/50 bg-background/70 backdrop-blur-sm transition-all hover:shadow-lg">
                      <CardContent className="p-6 text-center">
                        <div
                          className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                          style={{ background: `linear-gradient(135deg, #253F8F/20 0%, #F18F20/20 100%)` }}
                        >
                          <feature.icon className="h-8 w-8 text-[#253F8F]" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* FAQ Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16"
          >
            <Card className="overflow-hidden border-border/50 bg-background/70 backdrop-blur-sm">
              <CardHeader className="border-b border-border/30 pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <HelpCircle className="h-5 w-5 text-[#F18F20]" />
                    سوالات متداول
                  </CardTitle>
                  <Button
                    variant="ghost"
                    onClick={() => setShowFAQ(!showFAQ)}
                    className="gap-2 hover:bg-[#F18F20]/10 hover:text-[#F18F20]"
                  >
                    {showFAQ ? "بستن" : "مشاهده همه"}
                    <ChevronRight className={`h-4 w-4 transition-transform ${showFAQ ? "rotate-90" : ""}`} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {[
                    {
                      q: "چقدر طول می‌کشد تا پیش‌فاکتور دریافت کنم؟",
                      a: "معمولاً کمتر از 24 ساعت کاری",
                    },
                    {
                      q: "آیا می‌توانم پیش‌فاکتور را ویرایش کنم؟",
                      a: "بله، تا زمان تأیید نهایی امکان ویرایش وجود دارد",
                    },
                    {
                      q: "هزینه دریافت پیش‌فاکتور چقدر است؟",
                      a: "دریافت پیش‌فاکتور کاملاً رایگان است",
                    },
                    {
                      q: "آیا می‌توانم برای محصولات سفارشی درخواست دهم؟",
                      a: "بله، امکان درخواست محصولات سفارشی وجود دارد",
                    },
                  ].map((faq, index) => (
                    <div key={index} className="rounded-lg border border-border/30 bg-muted/30 p-4">
                      <h4 className="mb-2 flex items-center gap-2 text-sm font-medium">
                        <Info className="h-4 w-4 text-[#F18F20]" />
                        {faq.q}
                      </h4>
                      <p className="text-sm text-muted-foreground">{faq.a}</p>
                    </div>
                  ))}
                </div>

                <AnimatePresence>
                  {showFAQ && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 border-t border-border pt-6"
                    >
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {[
                          {
                            q: "آیا اطلاعات من محفوظ است؟",
                            a: "بله، تمام اطلاعات با بالاترین استانداردهای امنیتی محافظت می‌شود",
                          },
                          {
                            q: "می‌توانم درخواست خود را لغو کنم؟",
                            a: "بله، تا قبل از ارسال پیش‌فاکتور امکان لغو وجود دارد",
                          },
                          {
                            q: "چگونه می‌توانم وضعیت درخواست را پیگیری کنم؟",
                            a: "با کد پیگیری ارسال شده می‌توانید وضعیت را مشاهده کنید",
                          },
                          {
                            q: "آیا امکان مقایسه قیمت‌ها وجود دارد؟",
                            a: "بله، می‌توانید از چندین تأمین‌کننده پیش‌فاکتور دریافت کنید",
                          },
                        ].map((faq, index) => (
                          <div key={index} className="rounded-lg border border-border/30 bg-muted/30 p-4">
                            <h4 className="mb-2 flex items-center gap-2 text-sm font-medium">
                              <Info className="h-4 w-4 text-[#F18F20]" />
                              {faq.q}
                            </h4>
                            <p className="text-sm text-muted-foreground">{faq.a}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.section>
        </div>

        {/* Live Chat Widget */}
        <AnimatePresence>
          {showChat && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-4 right-4 z-50 w-80 overflow-hidden rounded-lg border border-border bg-background shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-border bg-[#253F8F]/5 p-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                  <span className="font-medium">پشتیبانی آنلاین</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowChat(false)}
                  className="h-6 w-6 p-0 hover:bg-destructive/10"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="h-64 overflow-y-auto p-4">
                <div className="space-y-3">
                  <div className="max-w-[80%] rounded-lg bg-muted/50 p-3">
                    <p className="text-sm">سلام! چطور می‌تونم کمکتون کنم؟</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border p-4">
                <div className="flex gap-2">
                  <Input placeholder="پیام خود را بنویسید..." className="text-sm" />
                  <Button size="sm" className="px-3">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}
