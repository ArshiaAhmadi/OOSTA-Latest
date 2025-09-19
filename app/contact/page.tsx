import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "تماس با ما | اوستا صنعت",
  description: "با تیم اوستا صنعت در ارتباط باشید. ما آماده پاسخگویی به سوالات و درخواست‌های شما هستیم.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* هدر صفحه */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(to right, #253F8F, #F18F20)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/abstract-geometric-shapes.png')] bg-repeat opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">تماس با ما</h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
                      اوستا، آماده پاسخگویی به سوالات و درخواست‌های شما.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-900"></div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* کارت‌های اطلاعات تماس */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <ContactCard
            icon={<Phone className="h-6 w-6" style={{ color: "#253F8F" }} />}
            title="تلفن تماس"
            details={["۰۲۱-۸۸۷۷۶۶۵۵", "۰۲۱-۸۸۷۷۶۶۵۶"]}
            gradient="from-[#253F8F] to-[#1e3a7a]"
          />
          <ContactCard
            icon={<Mail className="h-6 w-6" style={{ color: "#F18F20" }} />}
            title="پست الکترونیکی"
            details={["info@ousta-industrial.com", "support@ousta-industrial.com"]}
            gradient="from-[#F18F20] to-[#e07a0a]"
          />
          <ContactCard
            icon={<MapPin className="h-6 w-6 text-red-600" />}
            title="آدرس"
            details={["تهران، خیابان ولیعصر", "پلاک ۱۲۳، طبقه ۴"]}
            gradient="from-red-500 to-red-600"
          />
          <ContactCard
            icon={<Clock className="h-6 w-6 text-green-600" />}
            title="ساعات کاری"
            details={["شنبه تا چهارشنبه: ۸ صبح تا ۵ عصر", "پنجشنبه: ۸ صبح تا ۱ بعدازظهر"]}
            gradient="from-green-500 to-green-600"
          />
        </div>

        {/* بخش اصلی */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {/* فرم تماس */}
          <div className="lg:col-span-3">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div style={{ background: "linear-gradient(to right, #253F8F, #F18F20)" }} className="p-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <MessageSquare className="h-6 w-6" />
                  فرم تماس با ما
                </h2>
                <p className="text-white/90 mt-2">
                  پیام خود را برای ما ارسال کنید. کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.
                </p>
              </div>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        نام و نام خانوادگی
                      </label>
                      <Input id="name" placeholder="نام و نام خانوادگی خود را وارد کنید" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        پست الکترونیکی
                      </label>
                      <Input id="email" type="email" placeholder="ایمیل خود را وارد کنید" />
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
                      <label htmlFor="subject" className="text-sm font-medium">
                        موضوع
                      </label>
                      <Input id="subject" placeholder="موضوع پیام خود را وارد کنید" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      پیام
                    </label>
                    <Textarea id="message" placeholder="پیام خود را بنویسید..." className="min-h-[150px]" />
                  </div>

                  <div className="flex justify-end">
                    <Button
                      style={{ background: "linear-gradient(to right, #253F8F, #F18F20)" }}
                      className="text-white hover:opacity-90"
                    >
                      <Send className="h-4 w-4 ml-2" />
                      ارسال پیام
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* اطلاعات تکمیلی */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="map" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="map">نقشه</TabsTrigger>
                <TabsTrigger value="faq">سوالات متداول</TabsTrigger>
                <TabsTrigger value="social">شبکه‌های اجتماعی</TabsTrigger>
              </TabsList>
              <TabsContent value="map" className="mt-4">
                <Card className="border-0 shadow-lg overflow-hidden">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.9627430847677!2d51.388243776037395!3d35.69934687258446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00a61f30553b%3A0xfa9f16e1048b3cc!2sTehran%2C%20Iran!5e0!3m2!1sen!2s!4v1686571913110!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="موقعیت اوستا صنعت روی نقشه"
                    ></iframe>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium">دفتر مرکزی اوستا صنعت</h3>
                        <p className="text-sm text-muted-foreground">
                          تهران، خیابان ولیعصر، بالاتر از میدان ونک، پلاک ۱۲۳، طبقه ۴
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="faq" className="mt-4">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <FaqItem
                        question="چگونه می‌توانم سفارش خود را پیگیری کنم؟"
                        answer="شما می‌توانید با استفاده از کد پیگیری که پس از ثبت سفارش دریافت کرده‌اید، از طریق بخش «پیگیری سفارش» در سایت یا تماس با پشتیبانی، وضعیت سفارش خود را پیگیری کنید."
                      />
                      <FaqItem
                        question="مدت زمان ارسال محصولات چقدر است؟"
                        answer="بسته به موقعیت جغرافیایی شما و نوع محصول، زمان ارسال بین ۲ تا ۷ روز کاری متغیر است. برای اطلاعات دقیق‌تر می‌توانید با پشتیبانی تماس بگیرید."
                      />
                      <FaqItem
                        question="آیا امکان بازدید حضوری از محصولات وجود دارد؟"
                        answer="بله، شما می‌توانید با هماهنگی قبلی از نمایشگاه دائمی محصولات ما در دفتر مرکزی بازدید کنید. برای هماهنگی با شماره‌های پشتیبانی تماس بگیرید."
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="social" className="mt-4">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <SocialButton
                        name="اینستاگرام"
                        color="bg-gradient-to-r from-purple-500 to-pink-500"
                        icon="/placeholder.svg?height=24&width=24"
                        username="@ousta_industrial"
                      />
                      <SocialButton
                        name="تلگرام"
                        color="bg-blue-500"
                        icon="/placeholder.svg?height=24&width=24"
                        username="@ousta_support"
                      />
                      <SocialButton
                        name="لینکدین"
                        color="bg-blue-700"
                        icon="/placeholder.svg?height=24&width=24"
                        username="Ousta Industrial"
                      />
                      <SocialButton
                        name="واتس‌اپ"
                        color="bg-green-600"
                        icon="/placeholder.svg?height=24&width=24"
                        username="+98 912 345 6789"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Card className="mt-6 border-0 shadow-lg overflow-hidden">
              <div style={{ background: "linear-gradient(to right, #253F8F, #F18F20)" }} className="p-4">
                <h3 className="text-lg font-bold text-white">پشتیبانی ۲۴ ساعته</h3>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#F18F20" }}
                  >
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">برای پشتیبانی فوری با ما تماس بگیرید</p>
                    <p className="text-xl font-bold mt-1" style={{ color: "#253F8F" }}>
                      ۰۲۱-۸۸۷۷۶۶۵۵
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">پشتیبانی ۲۴ ساعته، ۷ روز هفته</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* بخش نمایندگی‌ها */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">نمایندگی‌های اوستا صنعت</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              نمایندگی‌های رسمی اوستا صنعت در سراسر کشور آماده ارائه خدمات به مشتریان گرامی هستند.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <BranchCard
              city="دفتر مرکزی تهران"
              address="تهران، خیابان ولیعصر، بالاتر از میدان ونک، پلاک ۱۲۳، طبقه ۴"
              phone="۰۲۱-۸۸۷۷۶۶۵۵"
              email="tehran@ousta-industrial.com"
            />
            <BranchCard
              city="منطقه آزاد ارس (جلفا)"
              address="منطقه آزاد ارس، شهرک صنعتی جلفا، بلوار اصلی، پلاک ۴۵"
              phone="۰۴۵-۳۲۱۴۵۶۷۸"
              email="aras@ousta-industrial.com"
            />
          </div>
        </div>

        {/* بخش دعوت به همکاری */}
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{ background: "linear-gradient(to right, #253F8F, #F18F20)" }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/abstract-geometric-shapes.png')] bg-repeat opacity-20"></div>
          </div>
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">به خانواده اوستا صنعت بپیوندید</h3>
              <p className="text-white/90 max-w-xl">
                اگر به دنبال فرصت‌های شغلی در زمینه صنعت هستید، رزومه خود را برای ما ارسال کنید.
              </p>
            </div>
            <Button size="lg" className="bg-white hover:bg-gray-50" style={{ color: "#253F8F" }}>
              ارسال رزومه
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// کامپوننت کارت اطلاعات تماس
function ContactCard({ icon, title, details, gradient }) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className={`h-2 bg-gradient-to-r ${gradient}`}></div>
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-gray-800 flex items-center justify-center mb-4">
            {icon}
          </div>
          <h3 className="font-bold mb-2">{title}</h3>
          <div className="space-y-1">
            {details.map((detail, index) => (
              <p key={index} className="text-muted-foreground">
                {detail}
              </p>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// کامپوننت سوال متداول
function FaqItem({ question, answer }) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
      <h4 className="font-medium mb-2">{question}</h4>
      <p className="text-sm text-muted-foreground">{answer}</p>
    </div>
  )
}

// کامپوننت دکمه شبکه اجتماعی
function SocialButton({ name, color, icon, username }) {
  return (
    <a href="#" className="block">
      <div
        className={`${color} text-white rounded-lg p-4 flex items-center gap-3 transition-transform hover:scale-105`}
      >
        <img src={icon || "/placeholder.svg"} alt={name} className="w-6 h-6" />
        <div>
          <div className="text-xs opacity-80">{name}</div>
          <div className="font-medium">{username}</div>
        </div>
      </div>
    </a>
  )
}

// کامپوننت کارت نمایندگی
function BranchCard({ city, address, phone, email }) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg">
      <div className="h-2 bg-gradient-to-r from-gray-500 to-gray-700"></div>
      <CardContent className="p-6">
        <h3 className="font-bold text-lg mb-2">{city}</h3>
        <div className="space-y-3 text-sm">
          <div className="flex gap-2">
            <MapPin className="h-4 w-4 text-gray-500 flex-shrink-0 mt-1" />
            <p>{address}</p>
          </div>
          <div className="flex gap-2">
            <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
            <p>{phone}</p>
          </div>
          <div className="flex gap-2">
            <Mail className="h-4 w-4 text-gray-500 flex-shrink-0" />
            <p>{email}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
