"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  MapPin,
  Upload,
  User,
  FileText,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Wrench,
  Zap,
  Cog,
  Building,
  Calendar,
  Clock,
  Phone,
  Mail,
  MapPinIcon,
} from "lucide-react"

export default function ServiceOrderPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    serviceCategory: "",
    serviceType: "",
    description: "",
    urgency: "",
    location: "",
    address: "",
    preferredDate: "",
    preferredTime: "",
    budget: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    additionalNotes: "",
    files: [],
  })

  const serviceCategories = [
    {
      id: "facilities",
      name: "تاسیسات و سیالات",
      icon: <Wrench className="h-6 w-6" />,
      services: [
        "تعمیر و سرویس پمپ‌های صنعتی (گریز از مرکز، جابجایی مثبت)",
        "نگهداری و تعمیر کمپرسورهای هوا (پیستونی، پیچی، دورانی)",
        "طراحی و نصب سیستم‌های هیدرولیک و پنوماتیک",
        "لوله‌کشی و پایپینگ صنعتی (فولادی، استیل، پلاستیکی)",
        "سیستم‌های فیلتراسیون و تصفیه آب و مواد شیمیایی",
        "تعمیر و کالیبراسیون شیرآلات صنعتی و کنترلی",
        "طراحی سیستم‌های انتقال سیال و مواد خام",
        "نصب و تعمیر ت��هیزات پمپاژ و انتقال مواد",
        "سیستم‌های تهویه و تخلیه گازهای صنعتی",
        "تعمیر و نگهداری مخازن تحت فشار",
        "سیستم‌های اندازه‌گیری و کنترل فشار",
        "تجهیزات ایمنی و حفاظتی سیالات",
      ],
    },
    {
      id: "electrical",
      name: "برق و اتوماسیون",
      icon: <Zap className="h-6 w-6" />,
      services: [
        "تعمیر و بازسازی الکتروموتورهای AC و DC",
        "برنامه‌نویسی و راه‌اندازی سیستم‌های PLC",
        "طراحی و نصب تابلوهای برق صنعتی و کنترل",
        "سیم‌کشی و تأسیسات برقی صنعتی",
        "تعمیر و سرویس ژنراتورهای برق اضطراری",
        "طراحی سیستم‌های اتوماسیون صنعتی",
        "نصب و تنظیم ابزار دقیق و کنترل فرآیند",
        "سیستم‌های روشنایی صنعتی و اضطراری",
        "تعمیر و نگهداری ترانسفورماتورها",
        "سیستم‌های حفاظت و ریله‌های برقی",
        "نصب و تعمیر سیستم‌های UPS",
        "کابل‌کشی و شبکه‌های توزیع برق",
        "سیستم‌های زمین و صاعقه‌گیر",
      ],
    },
    {
      id: "machinery",
      name: "ماشین‌آلات و تجهیزات",
      icon: <Cog className="h-6 w-6" />,
      services: [
        "تعمیر و بازسازی گیربکس‌های صنعتی و کاهنده دور",
        "تعویض و تنظیم یاتاقان‌ها و بوش‌های مکانیکی",
        "سرویس و تعمیر ماشین‌آلات نظافتی صنعتی",
        "تعمیر دستگاه‌های تزریق پلاستیک و قالب‌گیری",
        "کالیبراسیون و تعمیر ابزار دقیق اندازه‌گیری",
        "تعمیر و نگهداری تجهیزات مکانیکی عمومی",
        "طراحی و تعمیر سیستم‌های انتقال قدرت",
        "تعمیر ماشین‌آلات تولیدی و خطوط تولید",
        "سیستم‌های کوپلینگ و اتصالات مکانیکی",
        "تعمیر و تنظیم دستگاه‌های برش و تراش",
        "نگهداری تجهیزات جوشکاری و برش",
        "سیستم‌های حمل و نقل مکانیکی (نوار نقاله، بالابر)",
      ],
    },
    {
      id: "hvac",
      name: "تاسیسات ساختمانی و تهویه مطبوع",
      icon: <Building className="h-6 w-6" />,
      services: [
        "تعمیر و سرویس چیلرهای آب و هوا",
        "نگهداری دیگ‌های بخار و آب گرم صنعتی",
        "نصب و تعمیر فن‌کویل‌ها و کولرهای گازی",
        "تعمیر سیستم‌های سردخانه و انجماد",
        "طراحی سیستم‌های گرمایش مرکزی",
        "تهویه مطبوع صنعتی و تجاری",
        "تأسیسات استخر، سونا و جکوزی",
        "سیستم‌های تبرید صنعتی و تجاری",
        "نصب و تعمیر کانال‌های هوا و دودکش",
        "سیستم‌های تصفیه و کنترل کیفیت هوا",
        "تجهیزات کنترل رطوبت و دما",
        "سیستم‌های اتوماسیون ساختمان (BMS)",
        "عایق‌کاری حرارتی و صوتی",
      ],
    },
  ]

  const steps = [
    { number: 1, title: "انتخاب خدمات", icon: <Wrench className="h-5 w-5" /> },
    { number: 2, title: "جزئیات پروژه", icon: <FileText className="h-5 w-5" /> },
    { number: 3, title: "زمان و مکان", icon: <MapPin className="h-5 w-5" /> },
    { number: 4, title: "اطلاعات تماس", icon: <User className="h-5 w-5" /> },
    { number: 5, title: "تأیید نهایی", icon: <CheckCircle className="h-5 w-5" /> },
  ]

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("سفارش شما با موفقیت ثبت شد!")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#253F8F] to-[#F18F20] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">ثبت سفارش خدمات</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              در چند گام ساده، سفارش خود را ثبت کنید و بهترین متخصصین را پیدا کنید
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4 space-x-reverse">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                      currentStep >= step.number
                        ? "bg-[#F18F20] border-[#F18F20] text-white"
                        : "bg-white border-gray-300 text-gray-400"
                    }`}
                  >
                    {currentStep > step.number ? <CheckCircle className="h-6 w-6" /> : step.icon}
                  </div>
                  <div className="mr-3 text-right">
                    <div
                      className={`text-sm font-semibold ${
                        currentStep >= step.number ? "text-[#253F8F]" : "text-gray-400"
                      }`}
                    >
                      {step.title}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-0.5 mx-4 ${currentStep > step.number ? "bg-[#F18F20]" : "bg-gray-300"}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-0">
            <CardContent className="p-8">
              {/* Step 1: Service Selection */}
              {currentStep === 1 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-black mb-4 text-[#253F8F]">انتخاب نوع خدمات</h2>
                    <p className="text-gray-600">دسته‌بندی خدمات مورد نیاز خود را انتخاب کنید</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {serviceCategories.map((category) => (
                      <Card
                        key={category.id}
                        className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                          formData.serviceCategory === category.id
                            ? "ring-2 ring-[#F18F20] bg-[#F18F20]/5"
                            : "hover:shadow-md"
                        }`}
                        onClick={() => setFormData({ ...formData, serviceCategory: category.id, serviceType: "" })}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#253F8F] to-[#F18F20] rounded-lg flex items-center justify-center text-white mr-4">
                              {category.icon}
                            </div>
                            <h3 className="font-bold text-lg">{category.name}</h3>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm text-gray-600 mb-3">خدمات شامل:</p>
                            <div className="max-h-32 overflow-y-auto space-y-1">
                              {category.services.slice(0, 4).map((service, index) => (
                                <div key={index} className="flex items-start text-xs text-gray-700">
                                  <CheckCircle className="h-3 w-3 text-[#F18F20] mt-0.5 ml-1 flex-shrink-0" />
                                  <span className="leading-relaxed">{service}</span>
                                </div>
                              ))}
                              {category.services.length > 4 && (
                                <div className="text-xs text-[#F18F20] font-medium">
                                  و {category.services.length - 4} خدمات دیگر...
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {formData.serviceCategory && (
                    <div className="mt-8">
                      <Label className="text-lg font-semibold mb-4 block">انتخاب خدمات دقیق</Label>
                      <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto">
                        {serviceCategories
                          .find((cat) => cat.id === formData.serviceCategory)
                          ?.services.map((service) => (
                            <div
                              key={service}
                              className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                                formData.serviceType === service
                                  ? "border-[#F18F20] bg-[#F18F20]/5"
                                  : "border-gray-200 hover:border-[#F18F20]/50"
                              }`}
                              onClick={() => setFormData({ ...formData, serviceType: service })}
                            >
                              <div className="flex items-start">
                                <div
                                  className={`w-4 h-4 rounded-full border-2 mr-3 mt-1 flex-shrink-0 ${
                                    formData.serviceType === service
                                      ? "bg-[#F18F20] border-[#F18F20]"
                                      : "border-gray-300"
                                  }`}
                                />
                                <span className="font-medium text-sm leading-relaxed">{service}</span>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-black mb-4 text-[#253F8F]">جزئیات پروژه</h2>
                    <p className="text-gray-600">توضیحات کامل از خدمات مورد نیاز خود ارائه دهید</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label className="text-lg font-semibold mb-3 block">توضیحات کامل پروژه</Label>
                      <Textarea
                        placeholder="لطفاً جزئیات کامل پروژه، نوع مشکل، شرایط فعلی تجهیزات و انتظارات خود را شرح دهید..."
                        className="min-h-32 text-base"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label className="text-lg font-semibold mb-3 block">میزان فوریت</Label>
                      <RadioGroup
                        value={formData.urgency}
                        onValueChange={(value) => setFormData({ ...formData, urgency: value })}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                      >
                        {[
                          { value: "low", label: "عادی", desc: "تا 1 هفته", color: "text-green-600" },
                          { value: "medium", label: "متوسط", desc: "تا 3 روز", color: "text-yellow-600" },
                          { value: "high", label: "فوری", desc: "تا 24 ساعت", color: "text-red-600" },
                        ].map((urgency) => (
                          <div key={urgency.value} className="flex items-center space-x-2 space-x-reverse">
                            <RadioGroupItem value={urgency.value} id={urgency.value} />
                            <Label htmlFor={urgency.value} className="flex-1 cursor-pointer">
                              <div className="p-4 border-2 rounded-lg hover:bg-gray-50 transition-colors">
                                <div className={`font-semibold ${urgency.color}`}>{urgency.label}</div>
                                <div className="text-sm text-gray-500">{urgency.desc}</div>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="text-lg font-semibold mb-3 block">بودجه تخمینی (تومان)</Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) => setFormData({ ...formData, budget: value })}
                      >
                        <SelectTrigger className="text-base">
                          <SelectValue placeholder="محدوده بودجه خود را انتخاب کنید" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1m">کمتر از 1 میلیون</SelectItem>
                          <SelectItem value="1m-5m">1 تا 5 میلیون</SelectItem>
                          <SelectItem value="5m-10m">5 تا 10 میلیون</SelectItem>
                          <SelectItem value="10m-20m">10 تا 20 میلیون</SelectItem>
                          <SelectItem value="over-20m">بیش از 20 میلیون</SelectItem>
                          <SelectItem value="negotiable">قابل مذاکره</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-lg font-semibold mb-3 block">آپلود فایل‌ها (اختیاری)</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#F18F20] transition-colors cursor-pointer">
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">تصاویر، نقشه‌ها یا اسناد مرتبط را آپلود کنید</p>
                        <p className="text-sm text-gray-500">حداکثر 10 فایل، هر فایل تا 5 مگابایت</p>
                        <Button variant="outline" className="mt-4 bg-transparent">
                          انتخاب فایل‌ها
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Time and Location */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-black mb-4 text-[#253F8F]">زمان و مکان</h2>
                    <p className="text-gray-600">زمان و مکان مورد نظر برای انجام خدمات را مشخص کنید</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label className="text-lg font-semibold mb-3 block flex items-center">
                        <MapPinIcon className="h-5 w-5 ml-2 text-[#F18F20]" />
                        آدرس محل انجام خدمات
                      </Label>
                      <Select
                        value={formData.location}
                        onValueChange={(value) => setFormData({ ...formData, location: value })}
                      >
                        <SelectTrigger className="text-base">
                          <SelectValue placeholder="استان و شهر را انتخاب کنید" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tehran">تهران</SelectItem>
                          <SelectItem value="isfahan">اصفهان</SelectItem>
                          <SelectItem value="mashhad">مشهد</SelectItem>
                          <SelectItem value="shiraz">شیراز</SelectItem>
                          <SelectItem value="tabriz">تبریز</SelectItem>
                          <SelectItem value="karaj">کرج</SelectItem>
                          <SelectItem value="ahvaz">اهواز</SelectItem>
                          <SelectItem value="qom">قم</SelectItem>
                          <SelectItem value="other">سایر شهرها</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-lg font-semibold mb-3 block">آدرس دقیق</Label>
                      <Textarea
                        placeholder="آدرس کامل محل انجام خدمات را وارد کنید..."
                        className="min-h-24 text-base"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label className="text-lg font-semibold mb-3 block flex items-center">
                          <Calendar className="h-5 w-5 ml-2 text-[#F18F20]" />
                          تاریخ مورد نظر
                        </Label>
                        <Input
                          type="date"
                          className="text-base"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        />
                      </div>

                      <div>
                        <Label className="text-lg font-semibold mb-3 block flex items-center">
                          <Clock className="h-5 w-5 ml-2 text-[#F18F20]" />
                          زمان مورد نظر
                        </Label>
                        <Select
                          value={formData.preferredTime}
                          onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
                        >
                          <SelectTrigger className="text-base">
                            <SelectValue placeholder="بازه زمانی را انتخاب کنید" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">صبح (8-12)</SelectItem>
                            <SelectItem value="afternoon">بعدازظهر (12-17)</SelectItem>
                            <SelectItem value="evening">عصر (17-20)</SelectItem>
                            <SelectItem value="flexible">انعطاف‌پذیر</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="font-semibold text-[#253F8F] mb-3">نکات مهم:</h3>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-[#F18F20] mt-0.5 ml-2 flex-shrink-0" />
                          متخصص قبل از مراجعه با شما تماس خواهد گرفت
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-[#F18F20] mt-0.5 ml-2 flex-shrink-0" />
                          امکان تغییر زمان با هماهنگی متخصص وجود دارد
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-[#F18F20] mt-0.5 ml-2 flex-shrink-0" />
                          در صورت عدم دسترسی، متخصص جایگزین معرفی خواهد شد
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Information */}
              {currentStep === 4 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-black mb-4 text-[#253F8F]">اطلاعات تماس</h2>
                    <p className="text-gray-600">اطلاعات تماس خود را برای هماهنگی با متخصص وارد کنید</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label className="text-lg font-semibold mb-3 block flex items-center">
                        <User className="h-5 w-5 ml-2 text-[#F18F20]" />
                        نام و نام خانوادگی
                      </Label>
                      <Input
                        placeholder="نام کامل خود را وارد کنید"
                        className="text-base"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label className="text-lg font-semibold mb-3 block flex items-center">
                        <Phone className="h-5 w-5 ml-2 text-[#F18F20]" />
                        شماره تماس
                      </Label>
                      <Input
                        placeholder="09xxxxxxxxx"
                        className="text-base"
                        value={formData.contactPhone}
                        onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label className="text-lg font-semibold mb-3 block flex items-center">
                        <Mail className="h-5 w-5 ml-2 text-[#F18F20]" />
                        ایمیل (اختیاری)
                      </Label>
                      <Input
                        type="email"
                        placeholder="example@email.com"
                        className="text-base"
                        value={formData.contactEmail}
                        onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label className="text-lg font-semibold mb-3 block">توضیحات اضافی (اختیاری)</Label>
                      <Textarea
                        placeholder="هر گونه توضیح اضافی که برای متخصص مفید باشد..."
                        className="min-h-24 text-base"
                        value={formData.additionalNotes}
                        onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                      />
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="font-semibold text-green-800 mb-3">حریم خصوصی:</h3>
                      <p className="text-sm text-green-700">
                        اطلاعات شما محرمانه بوده و تنها برای هماهنگی با متخصصین مورد استفاده قرار می‌گیرد. هیچ‌گونه
                        اطلاعات شخصی شما به اشخاص ثالث ارائه نخواهد شد.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Final Confirmation */}
              {currentStep === 5 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-black mb-4 text-[#253F8F]">تأیید نهایی سفارش</h2>
                    <p className="text-gray-600">لطفاً اطلاعات وارد شده را بررسی و تأیید کنید</p>
                  </div>

                  <div className="space-y-6">
                    {/* Service Summary */}
                    <Card className="border-2 border-[#F18F20]/20">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-4 text-[#253F8F] flex items-center">
                          <Wrench className="h-5 w-5 ml-2" />
                          خدمات انتخابی
                        </h3>
                        <div className="space-y-2">
                          <p>
                            <span className="font-semibold">دسته‌بندی:</span>{" "}
                            {serviceCategories.find((cat) => cat.id === formData.serviceCategory)?.name}
                          </p>
                          <p>
                            <span className="font-semibold">خدمات:</span> {formData.serviceType}
                          </p>
                          <p>
                            <span className="font-semibold">فوریت:</span>{" "}
                            {formData.urgency === "high" ? "فوری" : formData.urgency === "medium" ? "متوسط" : "عادی"}
                          </p>
                          <p>
                            <span className="font-semibold">بودجه:</span> {formData.budget}
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Location & Time Summary */}
                    <Card className="border-2 border-[#F18F20]/20">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-4 text-[#253F8F] flex items-center">
                          <MapPin className="h-5 w-5 ml-2" />
                          زمان و مکان
                        </h3>
                        <div className="space-y-2">
                          <p>
                            <span className="font-semibold">شهر:</span> {formData.location}
                          </p>
                          <p>
                            <span className="font-semibold">آدرس:</span> {formData.address}
                          </p>
                          <p>
                            <span className="font-semibold">تاریخ:</span> {formData.preferredDate}
                          </p>
                          <p>
                            <span className="font-semibold">زمان:</span> {formData.preferredTime}
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Contact Summary */}
                    <Card className="border-2 border-[#F18F20]/20">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-4 text-[#253F8F] flex items-center">
                          <User className="h-5 w-5 ml-2" />
                          اطلاعات تماس
                        </h3>
                        <div className="space-y-2">
                          <p>
                            <span className="font-semibold">نام:</span> {formData.contactName}
                          </p>
                          <p>
                            <span className="font-semibold">تلفن:</span> {formData.contactPhone}
                          </p>
                          {formData.contactEmail && (
                            <p>
                              <span className="font-semibold">ایمیل:</span> {formData.contactEmail}
                            </p>
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Project Description */}
                    {formData.description && (
                      <Card className="border-2 border-[#F18F20]/20">
                        <CardContent className="p-6">
                          <h3 className="font-bold text-lg mb-4 text-[#253F8F] flex items-center">
                            <FileText className="h-5 w-5 ml-2" />
                            توضیحات پروژه
                          </h3>
                          <p className="text-gray-700 leading-relaxed">{formData.description}</p>
                        </CardContent>
                      </Card>
                    )}

                    <div className="bg-gradient-to-r from-[#253F8F]/10 to-[#F18F20]/10 border border-[#F18F20]/30 rounded-lg p-6">
                      <h3 className="font-semibold text-[#253F8F] mb-3">مراحل بعدی:</h3>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-[#F18F20] mt-0.5 ml-2 flex-shrink-0" />
                          سفارش شما در سیستم ثبت و برای متخصصین ارسال می‌شود
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-[#F18F20] mt-0.5 ml-2 flex-shrink-0" />
                          متخصصین مناسب ظرف 2 ساعت با شما تماس خواهند گرفت
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-[#F18F20] mt-0.5 ml-2 flex-shrink-0" />
                          می‌توانید بهترین متخصص را بر اساس قیمت و امتیاز انتخاب کنید
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-[#F18F20] mt-0.5 ml-2 flex-shrink-0" />
                          پیامک تأیید و کد پیگیری برای شما ارسال خواهد شد
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-8 border-t">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="px-8 py-3 bg-transparent"
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                  مرحله قبل
                </Button>

                {currentStep < 5 ? (
                  <Button
                    onClick={nextStep}
                    className="bg-gradient-to-r from-[#253F8F] to-[#F18F20] hover:from-[#253F8F]/90 hover:to-[#F18F20]/90 px-8 py-3"
                  >
                    مرحله بعد
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-[#253F8F] to-[#F18F20] hover:from-[#253F8F]/90 hover:to-[#F18F20]/90 px-12 py-3 text-lg font-semibold"
                  >
                    <CheckCircle className="ml-2 h-5 w-5" />
                    ثبت نهایی سفارش
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
