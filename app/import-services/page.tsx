import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  Ship,
  Truck,
  FileCheck,
  Shield,
  Award,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Package,
  DollarSign,
  Zap,
  Target,
  HeadphonesIcon,
  Calculator,
  Search,
  ShoppingCart,
  Plane,
  Send,
  ChevronDown,
} from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export const metadata: Metadata = {
  title: "خدمات واردات و تجارت بین‌الملل | اوستا",
  description: "خدمات جامع واردات از سراسر جهان با بهترین قیمت و کیفیت. منبع‌یابی، ثبت سفارش، حمل و نقل، گمرک و ترخیص.",
  keywords: "واردات, تجارت بین‌الملل, حمل و نقل, گمرک, ترخیص, سفارش از خارج",
}

export default function ImportServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#253F8F]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#F18F20]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#253F8F]/5 rounded-full blur-2xl animate-ping"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-[#253F8F]/10 text-[#253F8F] dark:bg-[#253F8F]/20 dark:text-[#253F8F] px-4 py-2 text-lg border border-[#253F8F]/20">
              <Globe className="w-5 h-5 mr-2" />
              خدمات تجارت بین‌الملل
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#253F8F] via-[#253F8F]/80 to-[#F18F20] bg-clip-text text-transparent leading-tight">
              واردات حرفه‌ای
              <br />
              <span className="text-4xl md:text-5xl">از سراسر جهان</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              با بیش از یک دهه تجربه در تجارت بین‌الملل، تیم متخصص اوستا
              <br />
              کلیه فرایندهای واردات را از منبع‌یابی تا تحویل نهایی برای شما انجام می‌دهد
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-[#253F8F] hover:bg-[#253F8F]/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                شروع سفارش
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#F18F20] text-[#F18F20] hover:bg-[#F18F20]/10 dark:hover:bg-[#F18F20]/20 px-8 py-4 text-lg bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                مشاوره رایگان
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#253F8F] mb-2">+1,500</div>
                <div className="text-gray-600 dark:text-gray-400">سفارش موفق</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F18F20] mb-2">40+</div>
                <div className="text-gray-600 dark:text-gray-400">کشور مبدأ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#253F8F] mb-2">99.5%</div>
                <div className="text-gray-600 dark:text-gray-400">رضایت مشتری</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F18F20] mb-2">24/7</div>
                <div className="text-gray-600 dark:text-gray-400">پشتیبانی</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">خدمات جامع واردات</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              از جستجوی محصول تا تحویل در محل، تمام مراحل واردات را با کیفیت بالا و قیمت رقابتی انجام می‌دهیم
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-[#253F8F]/5 to-[#253F8F]/10 dark:from-[#253F8F]/10 dark:to-[#253F8F]/20">
              <CardHeader>
                <div className="w-16 h-16 bg-[#253F8F] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">منبع‌یابی جهانی</CardTitle>
                <CardDescription>
                  جستجو و شناسایی بهترین تأمین‌کنندگان در سراسر جهان با کیفیت و قیمت مناسب
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F18F20] mr-2" />
                    بررسی اعتبار تأمین‌کنندگان
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F18F20] mr-2" />
                    مقایسه قیمت و کیفیت
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F18F20] mr-2" />
                    نمونه‌گیری و تست
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-[#F18F20]/5 to-[#F18F20]/10 dark:from-[#F18F20]/10 dark:to-[#F18F20]/20">
              <CardHeader>
                <div className="w-16 h-16 bg-[#F18F20] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">ثبت سفارش و مذاکره</CardTitle>
                <CardDescription>مذاکره حرفه‌ای با تأمین‌کنندگان و ثبت سفارش با بهترین شرایط</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#253F8F] mr-2" />
                    مذاکره قیمت و شرایط
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#253F8F] mr-2" />
                    تنظیم قرارداد
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#253F8F] mr-2" />
                    پیگیری تولید
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-[#253F8F]/5 to-[#F18F20]/5 dark:from-[#253F8F]/10 dark:to-[#F18F20]/10">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-[#253F8F] to-[#F18F20] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Ship className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">حمل و نقل بین‌المللی</CardTitle>
                <CardDescription>انتخاب بهترین روش حمل و نقل با توجه به نوع کالا و زمان تحویل</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center">
                    <Ship className="w-4 h-4 text-[#253F8F] mr-2" />
                    حمل دریایی
                  </li>
                  <li className="flex items-center">
                    <Plane className="w-4 h-4 text-[#253F8F] mr-2" />
                    حمل هوایی
                  </li>
                  <li className="flex items-center">
                    <Truck className="w-4 h-4 text-[#253F8F] mr-2" />
                    حمل زمینی
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-[#F18F20]/5 to-[#F18F20]/10 dark:from-[#F18F20]/10 dark:to-[#F18F20]/20">
              <CardHeader>
                <div className="w-16 h-16 bg-[#F18F20] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">گمرک و ترخیص</CardTitle>
                <CardDescription>انجام کلیه فرایندهای گمرکی و ترخیص کالا با سرعت و دقت بالا</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#253F8F] mr-2" />
                    تهیه اسناد گمرکی
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#253F8F] mr-2" />
                    پرداخت عوارض
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#253F8F] mr-2" />
                    ترخیص سریع
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-[#253F8F]/5 to-[#253F8F]/10 dark:from-[#253F8F]/10 dark:to-[#253F8F]/20">
              <CardHeader>
                <div className="w-16 h-16 bg-[#253F8F] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">تحویل و توزیع</CardTitle>
                <CardDescription>تحویل کالا در محل مورد نظر با بسته‌بندی مناسب و ایمن</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F18F20] mr-2" />
                    بسته‌بندی حرفه‌ای
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F18F20] mr-2" />
                    تحویل در محل
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F18F20] mr-2" />
                    ردیابی مرسوله
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-[#F18F20]/5 to-[#253F8F]/5 dark:from-[#F18F20]/10 dark:to-[#253F8F]/10">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-[#F18F20] to-[#253F8F] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <HeadphonesIcon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">پشتیبانی و مشاوره</CardTitle>
                <CardDescription>پشتیبانی 24/7 و مشاوره تخصصی در تمام مراحل واردات</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#253F8F] mr-2" />
                    مشاوره رایگان
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#253F8F] mr-2" />
                    پشتیبانی 24/7
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#253F8F] mr-2" />
                    گزارش‌دهی مستمر
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">مراحل ثبت سفارش</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              فرایند ساده و شفاف واردات در 6 مرحله
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#253F8F] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    1
                  </div>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-[#253F8F] to-[#F18F20] mr-4 hidden lg:block"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">درخواست و مشاوره</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  ارسال درخواست محصول مورد نظر و دریافت مشاوره رایگان از تیم متخصص
                </p>
              </div>

              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#F18F20] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    2
                  </div>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-[#F18F20] to-[#253F8F] mr-4 hidden lg:block"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">منبع‌یابی و قیمت‌گذاری</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  جستجوی تأمین‌کنندگان معتبر و ارائه بهترین قیمت‌ها با جزئیات کامل
                </p>
              </div>

              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#253F8F] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    3
                  </div>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-[#253F8F] to-[#F18F20] mr-4 hidden lg:block"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">تأیید و پیش‌پرداخت</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  تأیید سفارش توسط مشتری و دریافت پیش‌پرداخت برای شروع فرایند
                </p>
              </div>

              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#F18F20] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    4
                  </div>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-[#F18F20] to-[#253F8F] mr-4 hidden lg:block"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">ثبت سفارش و تولید</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  ثبت سفارش نزد تأمین‌کننده و پیگیری مراحل تولید و آماده‌سازی
                </p>
              </div>

              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#253F8F] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    5
                  </div>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-[#253F8F] to-[#F18F20] mr-4 hidden lg:block"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">حمل و گمرک</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  حمل کالا و انجام فرایندهای گمرکی با نظارت کامل تیم متخصص
                </p>
              </div>

              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#F18F20] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    6
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">تحویل نهایی</h3>
                <p className="text-gray-600 dark:text-gray-400">تحویل کالا در محل مورد نظر با کیفیت و بسته‌بندی مناسب</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-20 bg-gradient-to-br from-[#253F8F]/5 via-white to-[#F18F20]/5 dark:from-[#253F8F]/10 dark:via-slate-800 dark:to-[#F18F20]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">درخواست واردات</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                فرم زیر را تکمیل کنید تا تیم متخصص ما در اسرع وقت با شما تماس بگیرد
              </p>
            </div>

            <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">فرم درخواست واردات</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  {/* ... existing form content ... */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">نام و نام خانوادگی *</label>
                      <Input placeholder="نام کامل خود را وارد کنید" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">شماره تماس *</label>
                      <Input placeholder="09xxxxxxxxx" className="h-12" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">ایمیل</label>
                      <Input type="email" placeholder="example@email.com" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">نام شرکت</label>
                      <Input placeholder="نام شرکت (اختیاری)" className="h-12" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">نام محصول *</label>
                    <Input placeholder="نام دقیق محصول مورد نظر" className="h-12" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">تعداد مورد نیاز</label>
                      <Input placeholder="تعداد یا مقدار" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">کشور مبدأ (اختیاری)</label>
                      <Input placeholder="کشور مورد نظر برای واردات" className="h-12" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">توضیحات تکمیلی</label>
                    <Textarea
                      placeholder="مشخصات فنی، کیفیت مورد نظر، زمان تحویل و سایر توضیحات..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="flex-1 bg-[#253F8F] hover:bg-[#253F8F]/90 text-white h-12 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      ارسال درخواست
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex-1 border-2 border-[#F18F20] text-[#F18F20] hover:bg-[#F18F20]/10 dark:hover:bg-[#F18F20]/20 h-12 bg-transparent"
                    >
                      <Calculator className="w-5 h-5 mr-2" />
                      محاسبه هزینه
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">چرا اوستا را انتخاب کنیم؟</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              مزایای همکاری با تیم حرفه‌ای اوستا در زمینه واردات
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#253F8F] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">تجربه یک دهه‌ای</h3>
              <p className="text-gray-600 dark:text-gray-400">بیش از 10 سال تجربه در زمینه تجارت بین‌الملل و واردات</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#F18F20] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">بهترین قیمت</h3>
              <p className="text-gray-600 dark:text-gray-400">ارائه رقابتی‌ترین قیمت‌ها با کیفیت تضمین شده</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#253F8F] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">سرعت بالا</h3>
              <p className="text-gray-600 dark:text-gray-400">انجام سریع فرایندها و تحویل در کمترین زمان ممکن</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[#F18F20] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">دقت و کیفیت</h3>
              <p className="text-gray-600 dark:text-gray-400">انجام دقیق تمام مراحل با کنترل کیفیت مستمر</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#253F8F]/5 via-white to-[#F18F20]/5 dark:from-[#253F8F]/10 dark:via-slate-800 dark:to-[#F18F20]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">سوالات متداول</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              پاسخ سوالات رایج در مورد خدمات واردات اوستا
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <Collapsible className="bg-white dark:bg-slate-800 rounded-lg shadow-md">
              <CollapsibleTrigger className="flex items-center justify-between w-full p-6 text-right hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                <span className="text-lg font-semibold">چه مدت زمان برای وار��ات یک محصول نیاز است؟</span>
                <ChevronDown className="w-5 h-5 text-[#253F8F]" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6">
                <p className="text-gray-600 dark:text-gray-300">
                  زمان واردات بستگی به عوامل مختلفی دارد از جمله نوع محصول، کشور مبدأ، روش حمل و نقل و فرایندهای گمرکی.
                  به طور متوسط، حمل دریایی 20-45 روز، حمل هوایی 5-10 روز و حمل زمینی 10-20 روز زمان می‌برد.
                </p>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible className="bg-white dark:bg-slate-800 rounded-lg shadow-md">
              <CollapsibleTrigger className="flex items-center justify-between w-full p-6 text-right hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                <span className="text-lg font-semibold">هزینه‌های واردات شامل چه مواردی است؟</span>
                <ChevronDown className="w-5 h-5 text-[#F18F20]" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6">
                <p className="text-gray-600 dark:text-gray-300">
                  هزینه‌های واردات شامل: قیمت کالا، حمل و نقل بین‌المللی، بیمه، عوارض گمرکی، مالیات بر ارزش افزوده،
                  هزینه‌های ترخیص، حمل داخلی و کمیسیون خدمات می‌باشد. ما قبل از شروع فرایند، تمام هزینه‌ها را به صورت شفاف
                  اعلام می‌کنیم.
                </p>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible className="bg-white dark:bg-slate-800 rounded-lg shadow-md">
              <CollapsibleTrigger className="flex items-center justify-between w-full p-6 text-right hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                <span className="text-lg font-semibold">آیا امکان ردیابی مرسوله وجود دارد؟</span>
                <ChevronDown className="w-5 h-5 text-[#253F8F]" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6">
                <p className="text-gray-600 dark:text-gray-300">
                  بله، شما می‌توانید وضعیت مرسوله خود را در تمام مراحل از طریق سیستم ردیابی آنلاین ما پیگیری کنید. همچنین
                  تیم پشتیبانی ما به صورت مستمر گزارش‌های پیشرفت کار را برای شما ارسال می‌کند.
                </p>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible className="bg-white dark:bg-slate-800 rounded-lg shadow-md">
              <CollapsibleTrigger className="flex items-center justify-between w-full p-6 text-right hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                <span className="text-lg font-semibold">حداقل مقدار سفارش چقدر است؟</span>
                <ChevronDown className="w-5 h-5 text-[#F18F20]" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6">
                <p className="text-gray-600 dark:text-gray-300">
                  ما هیچ حداقل مقدار سفارش نداریم و حتی سفارشات کوچک را نیز پذیرش می‌کنیم. البته برای سفارشات بزرگتر،
                  امکان تخفیف در هزینه‌های حمل و نقل وجود دارد.
                </p>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible className="bg-white dark:bg-slate-800 rounded-lg shadow-md">
              <CollapsibleTrigger className="flex items-center justify-between w-full p-6 text-right hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                <span className="text-lg font-semibold">آیا گارانتی برای کالاهای وارداتی ارائه می‌دهید؟</span>
                <ChevronDown className="w-5 h-5 text-[#253F8F]" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6">
                <p className="text-gray-600 dark:text-gray-300">
                  ما گارانتی اصالت کالا و تطابق با مشخصات سفارش را ارائه می‌دهیم. همچنین در صورت بروز مشکل در فرایند حمل
                  و نقل، بیمه مرسوله پوشش کامل خسارات را فراهم می‌کند.
                </p>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible className="bg-white dark:bg-slate-800 rounded-lg shadow-md">
              <CollapsibleTrigger className="flex items-center justify-between w-full p-6 text-right hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                <span className="text-lg font-semibold">چگونه می‌توانم از کیفیت تأمین‌کننده اطمینان حاصل کنم؟</span>
                <ChevronDown className="w-5 h-5 text-[#F18F20]" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6">
                <p className="text-gray-600 dark:text-gray-300">
                  تیم متخصص ما تمام تأمین‌کنندگان را به دقت بررسی می‌کند. این بررسی شامل تأیید مجوزها، بازدید از کارخانه،
                  بررسی نمونه‌های محصول و ارزیابی سابقه کاری است. همچنین امکان نمونه‌گیری قبل از سفارش نهایی وجود دارد.
                </p>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible className="bg-white dark:bg-slate-800 rounded-lg shadow-md">
              <CollapsibleTrigger className="flex items-center justify-between w-full p-6 text-right hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                <span className="text-lg font-semibold">آیا امکان پرداخت اقساطی وجود دارد؟</span>
                <ChevronDown className="w-5 h-5 text-[#253F8F]" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6">
                <p className="text-gray-600 dark:text-gray-300">
                  بله، برای سفارشات بالای مبلغ مشخص، امکان پرداخت اقساطی وجود دارد. معمولاً 30% پیش‌پرداخت، 40% هنگام
                  آماده‌سازی کالا و 30% باقیمانده هنگام تحویل پرداخت می‌شود.
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-[#253F8F] via-[#253F8F]/90 to-[#253F8F]/80 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">آماده همکاری با شما هستیم</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              برای شروع فرایند واردات یا دریافت مشاوره رایگان، همین حالا با ما تماس بگیرید
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 text-[#F18F20]" />
                <h3 className="text-xl font-bold mb-2">تماس تلفنی</h3>
                <p className="text-blue-100 mb-4">پاسخگویی 24 ساعته</p>
                <p className="text-lg font-bold">021-88776655</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Mail className="w-12 h-12 mx-auto mb-4 text-[#F18F20]" />
                <h3 className="text-xl font-bold mb-2">ای��یل</h3>
                <p className="text-blue-100 mb-4">پاسخ در کمتر از 2 ساعت</p>
                <p className="text-lg font-bold">import@oosta.com</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-[#F18F20]" />
                <h3 className="text-xl font-bold mb-2">آدرس دفتر</h3>
                <p className="text-blue-100 mb-4">مراجعه حضوری</p>
                <p className="text-lg font-bold">تهران، خیابان ولیعصر</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-[#F18F20] hover:bg-[#F18F20]/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              تماس فوری
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
