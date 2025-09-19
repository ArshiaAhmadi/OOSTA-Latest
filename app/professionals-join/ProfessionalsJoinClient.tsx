"use client"

import { useState, useEffect } from "react"
import Link from "next/link" // Added Link import for navigation
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Wrench,
  Clock,
  Shield,
  Building,
  Home,
  Factory,
  Store,
  CheckCircle,
  Star,
  Award,
  Zap,
  TrendingUp,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

export default function ProfessionalsJoinClient() {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const valueProps = [
    {
      icon: <TrendingUp className="w-8 h-8 text-[#F18F20]" />,
      title: "درآمد پایدار و قابل پیش‌بینی",
      description:
        "با دسترسی به جریان دائمی پروژه‌ها، با دوره‌های بیکاری خداحافظی کنید و یک درآمد مطمئن برای خود بسازید.",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#F18F20]" />,
      title: "پرداخت تضمین‌شده و سریع",
      description:
        "دیگر نگران پیگیری برای دریافت دستمزد خود نباشید. پس از اتمام موفق هر پروژه، درآمد شما به صورت امن و سریع در کیف پول دیجیتال شما واریز می‌شود.",
    },
    {
      icon: <Clock className="w-8 h-8 text-[#F18F20]" />,
      title: "انعطاف‌پذیری و استقلال کامل",
      description:
        "شما رئیس خودتان هستید. پروژه‌ها و زمان کاری دلخواه خود را انتخاب کنید و متناسب با سبک زندگی خود فعالیت کنید.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-[#F18F20]" />,
      title: "تمرکز کامل بر کار فنی",
      description:
        "ما بازاریابی، جذب مشتری، قیمت‌گذاری و کارهای اداری را برای شما انجام می‌دهیم. شما فقط بر روی کاری که در آن بهترین هستید تمرکز کنید.",
    },
  ]

  const clientTypes = [
    {
      icon: <Factory className="w-12 h-12 text-[#253F8F]" />,
      title: "شرکت‌های بزرگ صنعتی",
      description: "پروژه‌های نصب، نگهداری و تعمیرات در کارخانه‌ها و مجموعه‌های بزرگ.",
    },
    {
      icon: <Store className="w-12 h-12 text-[#253F8F]" />,
      title: "کسب‌وکارهای کوچک و متوسط",
      description: "خدمات فنی و تعمیرات فوری برای کارگاه‌ها، فروشگاه‌ها و دفاتر تجاری.",
    },
    {
      icon: <Building className="w-12 h-12 text-[#253F8F]" />,
      title: "سازندگان و پیمانکاران",
      description: "پروژه‌های نصب تأسیسات در پروژه‌های ساختمانی جدید.",
    },
    {
      icon: <Home className="w-12 h-12 text-[#253F8F]" />,
      title: "مشتریان خانگی",
      description: "خدمات نصب و تعمیرات لوازم خانگی و تأسیسات در منازل.",
    },
  ]

  const steps = [
    {
      number: "۱",
      title: "ثبت‌نام و تکمیل پروفایل",
      description: "در اپلیکیشن متخصصین ثبت‌نام کرده و مدارک و سوابق تخصصی خود را بارگذاری کنید.",
    },
    {
      number: "۲",
      title: "تأیید صلاحیت",
      description: "تیم ما مدارک شما را برای تضمین کیفیت و ایجاد اعتماد برای مشتریان، به دقت بررسی می‌کند.",
    },
    {
      number: "۳",
      title: "پذیرش پروژه و کسب درآمد",
      description: "اعلان پروژه‌های جدید را دریافت کرده، اولین پروژه خود را بپذیرید و ۱۰۰٪ درآمد آن را دریافت کنید.",
      highlight: "(با کمیسیون ۰٪)",
    },
  ]

  const faqs = [
    {
      question: "پیشنهاد کمیسیون صفر درصد دقیقاً به چه معناست؟",
      answer:
        "به این معناست که اگر در دوره محدود افتتاحیه ثبت‌نام کنید، ما هیچ درصدی از درآمد پروژه‌های شما را به عنوان کمیسیون برنمی‌داریم. این پیشنهاد ویژه فقط برای اعضای اولیه و به پاس قدردانی از اعتماد شماست.",
      isSpecial: true,
    },
    {
      question: "آیا عضویت در اوستا هزینه‌ای دارد؟",
      answer: "خیر، ثبت‌نام اولیه و عضویت در شبکه متخصصین اوستا کاملاً رایگان است.",
    },
    {
      question: "چه نوع پروژه‌هایی در اوستا وجود دارد؟",
      answer:
        "شما به طیف وسیعی از پروژه‌ها دسترسی خواهید داشت؛ از تعمیرات کوچک خانگی گرفته تا پروژه‌های نصب و نگهداری پیچیده در کارخانه‌ها و شرکت‌های بزرگ.",
    },
    {
      question: "آیا می‌توانم قطعات و ابزار مورد نیازم را از اوستا تهیه کنم؟",
      answer:
        "بله، تمام متخصصین فعال در پلتفرم ما، از تخفیف‌های ویژه برای خرید ابزار و قطعات از فروشگاه آنلاین اوستا بهره‌مند می‌شوند.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#253F8F] via-[#253F8F]/90 to-[#253F8F]/80">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#253F8F]/90 via-transparent to-[#253F8F]/50"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-[#F18F20]/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-[#F18F20]/30 rounded-full blur-lg animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-[#F18F20] text-white px-6 py-2 text-lg font-bold animate-bounce">
              🎉 پیشنهاد ویژه افتتاحیه
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              به اولین متخصصین اوستا بپیوندید و{" "}
              <span className="text-[#F18F20] bg-gradient-to-r from-[#F18F20] to-yellow-400 bg-clip-text text-transparent animate-pulse">
                ۱۰۰٪ درآمدتان
              </span>{" "}
              را برای خود بردارید
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              به مناسبت افتتاحیه، کمیسیون اوستا برای اعضای اولیه،{" "}
              <span className="text-[#F18F20] font-bold text-3xl">صفر درصد</span> است. این یک فرصت تکرار نشدنی برای
              افزایش درآمد شماست.
            </p>

            <Link href="/login?type=oustakar">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#F18F20] to-yellow-500 hover:from-yellow-500 hover:to-[#F18F20] text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse"
              >
                <Award className="w-6 h-6 ml-2" />
                استفاده از فرصت کمیسیون صفر (ثبت‌نام رایگان)
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-[#253F8F] to-gray-900 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F18F20] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-[#F18F20] to-yellow-500 rounded-full mb-8 shadow-2xl animate-bounce">
              <span className="text-4xl font-black text-white">۰٪</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              کمیسیون <span className="text-[#F18F20]">۰٪</span> به افتخار افتتاحیه
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <p className="text-xl md:text-2xl leading-relaxed text-center mb-8">
                ما در اوستا به قدرت تخصص و ارزش کار شما ایمان داریم. به همین دلیل، به افتخار آغاز به کار رسمی و برای
                قدردانی از اولین متخصصینی که به ما اعتماد می‌کنند، یک فرصت استثنایی را اعلام می‌کنیم:{" "}
                <span className="text-[#F18F20] font-bold text-3xl">کمیسیون صفر درصد!</span>
              </p>

              <p className="text-lg md:text-xl text-gray-200 text-center mb-12">
                تمام متخصصینی که در این دوره محدود اولیه به شبکه اوستا بپیوندند، هیچ کمیسیونی پرداخت نخواهند کرد. این به
                معنای آن است که{" "}
                <span className="text-[#F18F20] font-bold">
                  ۱۰۰٪ درآمدی که از پروژه‌ها کسب می‌کنید، مستقیماً به جیب خودتان می‌رود.
                </span>
              </p>

              {/* Countdown Timer */}
              <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-6 text-center">
                <h3 className="text-2xl font-bold mb-4">این فرصت محدود است!</h3>
                <div className="flex justify-center gap-4 text-center">
                  <div className="bg-white/20 rounded-lg p-4 min-w-[80px]">
                    <div className="text-3xl font-bold">{timeLeft.days}</div>
                    <div className="text-sm">روز</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 min-w-[80px]">
                    <div className="text-3xl font-bold">{timeLeft.hours}</div>
                    <div className="text-sm">ساعت</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 min-w-[80px]">
                    <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                    <div className="text-sm">دقیقه</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 min-w-[80px]">
                    <div className="text-3xl font-bold">{timeLeft.seconds}</div>
                    <div className="text-sm">ثانیه</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              درآمد بیشتر، دردسر کمتر؛ چرا اوستا انتخاب حرفه‌ای‌هاست؟
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#F18F20]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    {prop.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{prop.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{prop.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who You Will Work For Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">شما برای چه کسانی کار خواهید کرد؟</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientTypes.map((client, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-[#253F8F]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#253F8F]/20 transition-colors">
                  {client.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{client.title}</h3>
                <p className="text-gray-600 leading-relaxed">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-[#253F8F]/5 to-[#F18F20]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">شروع به کسب درآمد در ۳ گام ساده</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center relative">
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#253F8F] to-[#F18F20] transform -translate-x-1/2 z-0"></div>
                  )}

                  <div className="relative z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#253F8F] to-[#F18F20] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">
                      {step.title}
                      {step.highlight && <span className="block text-[#F18F20] text-lg mt-2">{step.highlight}</span>}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">هنوز سوالی دارید؟</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className={`mb-4 ${faq.isSpecial ? "border-2 border-[#F18F20] rounded-lg" : ""}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className={`w-full text-right p-6 rounded-lg transition-all duration-300 ${
                    faq.isSpecial
                      ? "bg-gradient-to-r from-[#F18F20]/10 to-[#253F8F]/10 hover:from-[#F18F20]/20 hover:to-[#253F8F]/20"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {faq.isSpecial && <Star className="w-6 h-6 text-[#F18F20] ml-3" />}
                      <h3 className={`text-lg font-bold ${faq.isSpecial ? "text-[#253F8F]" : "text-gray-800"}`}>
                        {faq.question}
                      </h3>
                    </div>
                    {openFaq === index ? (
                      <ChevronUp className="w-6 h-6 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-600" />
                    )}
                  </div>
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-[#253F8F] to-gray-900 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F18F20] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">این فرصت تکرار نخواهد شد!</h2>

            <p className="text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed">
              به جمع بنیان‌گذاران شبکه متخصصین اوستا بپیوندید و آینده درآمدی خود را تضمین کنید.
            </p>

            <Link href="/login?type=oustakar">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#F18F20] to-yellow-500 hover:from-yellow-500 hover:to-[#F18F20] text-white px-16 py-8 text-2xl font-bold rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse"
              >
                <Zap className="w-8 h-8 ml-3" />
                همین حالا با کمیسیون ۰٪ ثبت‌نام می‌کنم
              </Button>
            </Link>

            <div className="mt-8 flex items-center justify-center gap-4 text-gray-300">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span>ثبت‌نام رایگان</span>
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span>کمیسیون ۰٪</span>
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span>شروع فوری</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
