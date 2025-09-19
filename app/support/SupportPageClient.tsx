"use client"

import type React from "react"

import { useState } from "react"
import {
  Phone,
  MessageSquare,
  Send,
  Headphones,
  Clock,
  CheckCircle,
  FileText,
  Users,
  Zap,
  Shield,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

// FAQ Data
const faqData = [
  {
    question: "چگونه می‌توانم وضعیت تیکت خود را پیگیری کنم؟",
    answer:
      "پس از ارسال تیکت، شماره پیگیری برای شما ارسال می‌شود. می‌توانید با این شماره از طریق ایمیل یا تماس با پشتیبانی، وضعیت تیکت خود را پیگیری کنید.",
  },
  {
    question: "زمان پاسخ به تیکت‌ها چقدر است؟",
    answer: "معمولاً در کمتر از ۲ ساعت به تیکت‌های فوری پاسخ می‌دهیم. برای سایر تیکت‌ها حداکثر ۲۴ ساعت زمان نیاز است.",
  },
  {
    question: "آیا پشتیبانی تلفنی رایگان است؟",
    answer: "بله، تمامی خدمات پشتیبانی ما شامل تماس تلفنی، چت آنلاین و ارسال تیکت کاملاً رایگان است.",
  },
  {
    question: "چگونه می‌توانم با کارشناس فنی صحبت کنم؟",
    answer:
      "می‌توانید از طریق چت آنلاین، تماس تلفنی یا ارسال تیکت با اولویت بالا، درخواست صحبت با کارشناس فنی را داشته باشید.",
  },
  {
    question: "آیا امکان پشتیبانی از راه دور وجود دارد؟",
    answer: "بله، در صورت نیاز و با هماهنگی قبلی، امکان پشتیبانی از راه دور و کمک فنی مستقیم فراهم است.",
  },
  {
    question: "خدمات اوستاکار چگونه کار می‌کند؟",
    answer:
      "اوستاکار سرویس متصل کردن شما به متخصصان صنعتی است. کافی است درخواست خود را ثبت کنید، ما بهترین متخصص را برای شما پیدا می‌کنیم و هماهنگی‌های لازم را انجام می‌دهیم. تمام فرآیند از طریق پلتفرم ما قابل پیگیری است.",
  },
  {
    question: "چگونه می‌توانم محصولات صنعتی خاص را سفارش دهم؟",
    answer:
      "برای محصولات خاص، می‌توانید از بخش درخواست پیش‌فاکتور استفاده کنید. کارشناسان ما مشخصات فنی را بررسی کرده و بهترین گزینه‌ها را با قیمت مناسب برای شما پیدا می‌کنند. همچنین دستیار هوش مصنوعی ما نیز می‌��واند در یافتن محصول مناسب کمک کند.",
  },
  {
    question: "خدمات واردات جامع شامل چه مواردی است؟",
    answer:
      "خدمات واردات جامع ما شامل تهیه محصول از منبع، بررسی کیفیت، ترخیص کالا، حمل و نقل بین‌المللی، ترخیص گمرکی، و تحویل در محل شما می‌باشد. شما فقط مشخصات محصول مورد نیاز را اعلام کنید، بقیه کارها بر عهده ماست.",
  },
  {
    question: "تفاوت حساب خریدار حقیقی و حقوقی چیست؟",
    answer:
      "حساب حقیقی برای افراد و حساب حقوقی برای شرکت‌ها طراحی شده است. حساب حقوقی امکانات بیشتری مانند خرید عمده، اعتبار تجاری، فاکتور رسمی، و مدیریت چند کاربره دارد. همچنین تخفیف‌های ویژه و شرایط پرداخت انعطاف‌پذیرتری برای حساب‌های حقوقی در نظر گرفته شده است.",
  },
  {
    question: "چگونه می‌توانم تامین‌کننده شوم؟",
    answer:
      "برای ثبت‌نام به عنوان تامین‌کننده، باید مدارک شرکت، نمونه محصولات، و گواه��نامه‌های کیفی را ارائه دهید. پس از بررسی و تأیید، می‌توانید محصولات خود را در پلتفرم عرضه کنید. تیم ما در تمام مراحل به شما کمک خواهد کرد.",
  },
  {
    question: "دستیار هوش مصنوعی چگونه می‌تواند کمک کند؟",
    answer:
      "دستیار هوش مصنوعی اوستا می‌تواند محصولات مناسب را بر اساس نیاز شما پیشنهاد دهد، مشخصات فنی را توضیح دهد، قیمت‌ها را مقایسه کند، و حتی در انتخاب تامین‌کننده مناسب راهنمایی کند. همچنین می‌تواند سوالات فنی پیچیده را پاسخ دهد.",
  },
  {
    question: "آیا امکان خرید عمده و تخفیف وجود دارد؟",
    answer:
      "بله، برای خریدهای عمده تخفیف‌های ویژه‌ای در نظر گرفته شده است. میزان تخفیف بسته به حجم سفارش، نوع محصول، و نوع حساب کاربری متفاوت است. برای اطلاع از تخفیف‌های ویژه با تیم فروش تماس بگیرید.",
  },
  {
    question: "چگونه از اصالت محصولات اطمینان حاصل کنم؟",
    answer:
      "تمام محصولات ما از تامین‌کنندگان معتبر و دارای مجوز تهیه می‌شود. هر محصول دارای گارانتی اصالت است و در صورت عدم اصالت، کل مبلغ بازگردانده می‌شود. همچنین می‌توانید کدهای اصالت محصولات را از طریق سایت سازنده بررسی کنید.",
  },
  {
    question: "زمان تحویل محصولات چقدر است؟",
    answer:
      "زمان تحویل بسته به نوع محصول و موجودی متفاوت است. محصولات موجود در انبار معمولاً ۱-۳ روز کاری، محصولات سفارشی ۷-۱۴ روز، و محصولات وارداتی ۲-۶ هفته زمان نیاز دارند. زمان دقیق در صفحه هر محصول مشخص شده است.",
  },
  {
    question: "آیا امکان بازگشت محصول وجود دارد؟",
    answer:
      "بله، محصولات در صورت عدم مطابقت با مشخصات اعلام شده، آسیب در حین حمل، یا نقص فنی قابل بازگشت هستند. مهلت بازگشت برای اکثر محصولات ۷ روز و برای برخی محصولات خاص تا ۳۰ روز است.",
  },
  {
    question: "چگونه می‌توانم مشاوره فنی دریافت کنم؟",
    answer:
      "تیم مشاوره فنی ما آماده راهنمایی شما در انتخاب محصول مناسب، بررسی مشخصات فنی، و حل مسائل فنی است. می‌توانید از طریق تماس تلفنی، چت آنلاین، یا ارسال تیکت با کارشناسان فنی در ارتباط باشید.",
  },
  {
    question: "آیا امکان پرداخت اقساطی وجود دارد؟",
    answer:
      "برای حساب‌های حقوقی و خریدهای بالای مبلغ مشخص، امکان پرداخت اقساطی فراهم است. شرایط و مدت اقساط بسته به مبلغ خرید و سابقه مشتری تعیین می‌شود. برای اطلاع از جزئیات با تیم فروش تماس بگیرید.",
  },
  {
    question: "چگونه می‌توانم کاتالوگ محصولات را دریافت کنم؟",
    answer:
      "کاتالوگ‌های محصولات در بخش مخصوص سایت قابل دسترسی است. همچنین می‌توانید کاتالوگ‌های خاص را از طریق ایمیل درخواست کنید. برای دسترسی به کاتالوگ‌های تخصصی، ثبت‌نام در سایت ضروری است.",
  },
  {
    question: "آیا آموزش استفاده از محصولات ارائه می‌شود؟",
    answer:
      "بله، برای محصولات پیچیده و تخصصی، آموزش‌های لازم به صورت حضوری یا مجازی ارائه می‌شود. همچنین ویدیوهای آموزشی، راهنماهای کاربری، و مستندات فنی در دسترس قرار دارد.",
  },
  {
    question: "چگونه می‌توانم با سایر مشتریان در ارتباط باشم؟",
    answer:
      "انجمن کاربران اوستا فضایی برای تبادل تجربیات، طرح سوالات فنی، و ارتباط با سایر متخصصان صنعتی فراهم کرده است. همچنین رویدادها و وبینارهای تخصصی به صورت منظم برگزار می‌شود.",
  },
]

// Resource Card Component
function ResourceCard({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6 text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-2xl flex items-center justify-center">{icon}</div>
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <Button
          variant="outline"
          size="sm"
          className="border-[#253F8F] text-[#253F8F] hover:bg-[#253F8F] hover:text-white bg-transparent"
          onClick={() => window.open(link)}
        >
          مشاهده
          <ExternalLink className="h-3 w-3 mr-2" />
        </Button>
      </CardContent>
    </Card>
  )
}

export default function SupportPageClient() {
  const [ticketSubmitted, setTicketSubmitted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTicketSubmitted(true)
    setTimeout(() => setTicketSubmitted(false), 5000)
  }

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#253F8F] to-[#F18F20]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Headphones className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">مرکز پشتیبانی اوستا </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              ما اینجا هستیم تا به شما کمک کنیم. تیکت ارسال کنید، با ما تماس بگیرید یا پاسخ سوالات خود را در بخش سوالات
              متداول پیدا کنید.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-white/80 text-sm">پشتیبانی آنلاین</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-white">&lt; 2 ساعت</div>
                <div className="text-white/80 text-sm">زمان پاسخ</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-white/80 text-sm">رضایت مشتریان</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Ticket Submission Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-[#253F8F] to-[#253F8F]/90 text-white">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <MessageSquare className="h-6 w-6" />
                  ارسال تیکت پشتیبانی
                </CardTitle>
                <p className="text-white/90">مشکل یا درخواست خود را با جزئیات کامل برای ما ارسال کنید</p>
              </CardHeader>
              <CardContent className="p-6">
                {ticketSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-600 mb-2">تیکت با موفقیت ارسال شد!</h3>
                    <p className="text-gray-600 mb-4">
                      تیکت شما با شماره #TK-{Math.floor(Math.random() * 10000)} ثبت شد. کارشناسان ما در اسرع وقت با شما
                      تماس خواهند گرفت.
                    </p>
                    <Badge className="bg-green-100 text-green-800">زمان پاسخ تقریبی: کمتر از 2 ساعت</Badge>
                  </div>
                ) : (
                  <form onSubmit={handleTicketSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          نام و نام خانوادگی *
                        </label>
                        <Input id="name" placeholder="نام کامل خود را وارد کنید" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          پست الکترونیکی *
                        </label>
                        <Input id="email" type="email" placeholder="ایمیل خود را وارد کنید" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          شماره تماس
                        </label>
                        <Input id="phone" placeholder="شماره تماس خود را وارد کنید" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="priority" className="text-sm font-medium">
                          اولویت *
                        </label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="اولویت تیکت را انتخاب کنید" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">کم - سوال عمومی</SelectItem>
                            <SelectItem value="medium">متوسط - مشکل فنی</SelectItem>
                            <SelectItem value="high">بالا - مشکل فوری</SelectItem>
                            <SelectItem value="critical">بحرانی - خرابی سیستم</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="category" className="text-sm font-medium">
                        دسته‌بندی *
                      </label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="دسته‌بندی مشکل را انتخاب کنید" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technical">مشکل فنی</SelectItem>
                          <SelectItem value="billing">مسائل مالی</SelectItem>
                          <SelectItem value="product">سوال درباره محصول</SelectItem>
                          <SelectItem value="shipping">مشکل ارسال</SelectItem>
                          <SelectItem value="account">مشکل حساب کاربری</SelectItem>
                          <SelectItem value="other">سایر موارد</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        موضوع *
                      </label>
                      <Input id="subject" placeholder="موضوع مشکل یا درخواست خود را وارد کنید" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        توضیحات کامل *
                      </label>
                      <Textarea
                        id="message"
                        placeholder="لطفاً مشکل یا درخواست خود را با جزئیات کامل شرح دهید..."
                        className="min-h-[150px]"
                        required
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-[#253F8F] to-[#F18F20] text-white hover:opacity-90 px-8"
                      >
                        <Send className="h-4 w-4 ml-2" />
                        ارسال تیکت
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Quick Actions */}
          <div className="space-y-6">
            {/* Emergency Contact */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-[#F18F20] to-[#F18F20]/90 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  تماس فوری
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#253F8F] mb-2">021-88776655</div>
                  <p className="text-sm text-gray-600 mb-4">پشتیبانی 24 ساعته</p>
                  <Button
                    className="w-full bg-[#F18F20] hover:bg-[#F18F20]/90 text-white"
                    onClick={() => window.open("tel:02188776655")}
                  >
                    <Phone className="h-4 w-4 ml-2" />
                    تماس فوری
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Direct Contact Buttons */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">راه‌های ارتباط مستقیم</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white justify-start"
                  onClick={() => window.open("https://wa.me/989123456789")}
                >
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                    className="ml-2"
                  />
                  واتس‌اپ
                  <ExternalLink className="h-4 w-4 mr-auto" />
                </Button>

                <Button
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white justify-start"
                  onClick={() => window.open("https://t.me/ousta_support")}
                >
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Telegram"
                    width={20}
                    height={20}
                    className="ml-2"
                  />
                  تلگرام
                  <ExternalLink className="h-4 w-4 mr-auto" />
                </Button>

                <Button
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white justify-start"
                  onClick={() => window.open("https://instagram.com/ousta_industrial")}
                >
                  <Image
                    src="/placeholder.svg?height=20&width=20"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="ml-2"
                  />
                  اینستاگرام
                  <ExternalLink className="h-4 w-4 mr-auto" />
                </Button>
              </CardContent>
            </Card>

            {/* Live Chat */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-[#253F8F] to-[#253F8F]/90 text-white">
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  چت آنلاین
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-600 font-medium">آنلاین - آماده پاسخگویی</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">برای دریافت پاسخ فوری با کارشناسان ما گفتگو کنید</p>
                <Button
                  className="w-full bg-[#253F8F] hover:bg-[#253F8F]/90 text-white"
                  onClick={() => {
                    // Placeholder for live chat integration
                    alert("چت آنلاین به زودی راه‌اندازی خواهد شد")
                  }}
                >
                  <MessageSquare className="h-4 w-4 ml-2" />
                  شروع چت
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">سوالات متداول</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">پاسخ سوالات رایج مشتریان را در اینجا مشاهده کنید</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-right flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-[#253F8F]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#253F8F]" />
                    )}
                  </button>
                  {expandedFaq === index && <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        

        {/* Contact Hours */}
        <Card className="border-0 shadow-lg overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-[#253F8F] to-[#F18F20] text-white">
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-6 w-6" />
              ساعات پشتیبانی
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-4">پشتیبانی تلفنی</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>شنبه تا چهارشنبه:</span>
                    <span className="font-medium">۸:۰۰ - ۱۷:۰۰</span>
                  </div>
                  <div className="flex justify-between">
                    <span>پنج‌شنبه:</span>
                    <span className="font-medium">۸:۰۰ - ۱۳:۰۰</span>
                  </div>
                  <div className="flex justify-between">
                    <span>جمعه:</span>
                    <span className="font-medium text-red-600">تعطیل</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-4">پشتیبانی آنلاین</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>چت آنلاین:</span>
                    <span className="font-medium text-green-600">۲۴/۷</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ایمیل:</span>
                    <span className="font-medium text-green-600">۲۴/۷</span>
                  </div>
                  <div className="flex justify-between">
                    <span>تیکت:</span>
                    <span className="font-medium text-green-600">۲۴/۷</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
