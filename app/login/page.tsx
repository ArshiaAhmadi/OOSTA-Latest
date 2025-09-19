"use client"

import { DialogTrigger } from "@/components/ui/dialog"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import {
  Eye,
  EyeOff,
  Check,
  AlertCircle,
  Facebook,
  Twitter,
  Linkedin,
  MapPin,
  Camera,
  Shield,
  ChevronRight,
  ChevronLeft,
  Smartphone,
  Mail,
  Lock,
  User,
  Calendar,
  HelpCircle,
  Award,
  QrCode,
  Sparkles,
  Star,
} from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { toast } from "@/components/ui/use-toast"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="w-full py-4">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                ${
                  index < currentStep
                    ? "bg-[#F18F20] border-[#F18F20] text-white shadow-lg"
                    : index === currentStep
                      ? "border-[#253F8F] text-[#253F8F] bg-[#253F8F]/10"
                      : "border-gray-300 text-gray-400"
                }`}
            >
              {index < currentStep ? <Check className="h-5 w-5" /> : <span>{index + 1}</span>}
            </div>
            <span
              className={`text-xs mt-2 text-center ${index === currentStep ? "text-[#253F8F] font-medium" : "text-gray-500"}`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
      <div className="relative flex items-center justify-between mt-4">
        <div className="absolute left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        <div
          className="absolute left-0 h-1 bg-gradient-to-r from-[#253F8F] to-[#F18F20] transition-all duration-500 rounded-full"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        ></div>
        {steps.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full z-10 transition-all duration-300
              ${
                index < currentStep
                  ? "bg-[#F18F20] shadow-lg"
                  : index === currentStep
                    ? "bg-[#253F8F] shadow-lg"
                    : "bg-gray-200 dark:bg-gray-700"
              }`}
          ></div>
        ))}
      </div>
    </div>
  )
}

// OTP Input component
const OtpInput = ({ length = 6, onComplete }) => {
  const [otp, setOtp] = useState(Array(length).fill(""))
  const inputRefs = useRef([])

  const handleChange = (e, index) => {
    const value = e.target.value
    if (isNaN(value)) return

    const newOtp = [...otp]
    // Allow only last entered digit
    newOtp[index] = value.substring(value.length - 1)
    setOtp(newOtp)

    // Auto focus next input
    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus()
    }

    // Check if OTP is complete
    const otpValue = newOtp.join("")
    if (otpValue.length === length) {
      onComplete(otpValue)
    }
  }

  const handleKeyDown = (e, index) => {
    // Handle backspace
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1].focus()
      }
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pasteData = e.clipboardData.getData("text/plain").slice(0, length).split("")

    if (pasteData) {
      const newOtp = [...otp]
      pasteData.forEach((value, index) => {
        if (index < length && !isNaN(value)) {
          newOtp[index] = value
          inputRefs.current[index].value = value
        }
      })

      setOtp(newOtp)

      // Focus on the next empty input or the last one
      const focusIndex = Math.min(pasteData.length, length - 1)
      inputRefs.current[focusIndex].focus()

      // Check if OTP is complete
      const otpValue = newOtp.join("")
      if (otpValue.length === length) {
        onComplete(otpValue)
      }
    }
  }

  return (
    <div className="flex justify-between gap-2 my-4" onPaste={handlePaste}>
      {otp.map((value, index) => (
        <input
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-12 h-14 text-center text-xl font-bold border-2 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
        />
      ))}
    </div>
  )
}

// Password strength meter
const PasswordStrengthMeter = ({ password }) => {
  const [strength, setStrength] = useState(0)
  const [feedback, setFeedback] = useState([])

  useEffect(() => {
    if (!password) {
      setStrength(0)
      setFeedback([])
      return
    }

    let currentStrength = 0
    const newFeedback = []

    // Length check
    if (password.length >= 8) {
      currentStrength += 25
    } else {
      newFeedback.push("حداقل ۸ کاراکتر")
    }

    // Contains number
    if (/\d/.test(password)) {
      currentStrength += 25
    } else {
      newFeedback.push("حداقل یک عدد")
    }

    // Contains lowercase
    if (/[a-z]/.test(password)) {
      currentStrength += 25
    } else {
      newFeedback.push("حداقل یک حرف کوچک")
    }

    // Contains uppercase or special char
    if (/[A-Z]/.test(password) || /[^A-Za-z0-9]/.test(password)) {
      currentStrength += 25
    } else {
      newFeedback.push("حداقل یک حرف بزرگ یا کاراکتر ویژه")
    }

    setStrength(currentStrength)
    setFeedback(newFeedback)
  }, [password])

  const getStrengthText = () => {
    if (strength === 0) return ""
    if (strength <= 25) return "ضعیف"
    if (strength <= 75) return "متوسط"
    return "قوی"
  }

  const getStrengthColor = () => {
    if (strength <= 25) return "bg-red-500"
    if (strength <= 75) return "bg-yellow-500"
    return "bg-green-500"
  }

  return (
    <div className="mt-2">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-gray-500">قدرت رمز عبور: {getStrengthText()}</span>
        <span
          className={`text-xs ${
            strength <= 25 ? "text-red-500" : strength <= 75 ? "text-yellow-500" : "text-green-500"
          }`}
        >
          {strength}%
        </span>
      </div>
      <Progress value={strength} className={getStrengthColor()} />
      {feedback.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {feedback.map((item, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

// QR Code Login Dialog
const QrCodeLoginDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full h-12 mt-4 border-[#253F8F]/20 hover:border-[#253F8F] hover:bg-[#253F8F]/5 transition-all duration-300 bg-transparent"
        >
          <QrCode className="h-5 w-5 ml-2 text-[#253F8F]" />
          ورود با کد QR
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-[#253F8F]">ورود با کد QR</DialogTitle>
          <DialogDescription>اپلیکیشن اوستا را باز کنید و کد QR زیر را اسکن کنید.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center p-6">
          <div className="w-64 h-64 bg-gradient-to-br from-[#253F8F]/5 to-[#F18F20]/5 rounded-2xl flex items-center justify-center border-2 border-dashed border-[#253F8F]/20">
            <Image src="/placeholder.svg?key=homt5" alt="QR Code" width={200} height={200} />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
            این کد تا ۲ دقیقه دیگر منقضی می‌شود
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// FAQ Dialog
const FaqDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="absolute top-4 right-4">
          <HelpCircle className="h-5 w-5" />
          <span className="sr-only">سوالات متداول</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>سوالات متداول</DialogTitle>
          <DialogDescription>پاسخ سوالات رایج درباره ورود و ثبت‌نام</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          <div className="space-y-2">
            <h3 className="font-medium">چگونه ثبت‌نام کنم؟</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              برای ثبت‌نام، به تب «ثبت‌نام» بروید و فرم را با اطلاعات خواسته شده پر کنید. پس از تکمیل فرم، یک کد تأیید به
              شماره موبایل یا ایمیل شما ارسال می‌شود.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">رمز عبور خود را فراموش کرده‌ام</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              روی گزینه «فراموشی رمز عبور» کلیک کنید و ایمیل یا شماره موبایل خود را وارد کنید. یک لینک بازیابی رمز عبور
              برای شما ارسال خواهد شد.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">تفاوت انواع کاربران چیست؟</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <strong>خریدار حقیقی:</strong> افراد عادی که قصد خرید محصولات را دارند.
              <br />
              <strong>خریدار حقوقی:</strong> شرکت‌ها و سازمان‌هایی که قصد خرید محصولات را دارند.
              <br />
              <strong>تامین‌کننده:</strong> فروشندگان و تولیدکنندگان محصولات صنعتی.
              <br />
              <strong>اوستاکار:</strong> متخصصان و تکنسین‌های صنعتی که خدمات فنی ارائه می‌دهند.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">آیا اطلاعات من محرمانه می‌ماند؟</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              بله، تمامی اطلاعات شما با استفاده از پروتکل‌های امنیتی پیشرفته محافظت می‌شوند و ما هرگز اطلاعات شخصی شما را
              بدون اجازه در اختیار اشخاص ثالث قرار نمی‌دهیم.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">چگونه می‌توانم اطلاعات پروفایل خود را تغییر دهم؟</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              پس از ورود به حساب کاربری، به بخش «پروفایل من» بروید. در آنجا می‌توانید تمامی اطلاعات خود را ویرایش کنید.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function LoginPage() {
  const [userType, setUserType] = useState("individual")
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [activeTab, setActiveTab] = useState("login")
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    phone: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [showOtpVerification, setShowOtpVerification] = useState(false)
  const [avatarPreview, setAvatarPreview] = useState(null)
  const fileInputRef = useRef(null)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // Steps for registration based on user type
  const getSteps = () => {
    switch (userType) {
      case "individual":
        return ["اطلاعات اولیه", "اطلاعات تکمیلی", "تأیید هویت", "تکمیل ثبت‌نام"]
      case "corporate":
        return ["اطلاعات شرکت", "اطلاعات نماینده", "مدارک شرکت", "تکمیل ثبت‌نام"]
      case "supplier":
        return ["اطلاعات شرکت", "دسته‌بندی محصولات", "اطلاعات تماس", "تکمیل ثبت‌نام"]
      case "oustakar":
        return ["اطلاعات شخصی", "تخصص و مهارت", "مدارک و گواهی‌ها", "تکمیل ثبت‌نام"]
      default:
        return ["اطلاعات اولیه", "اطلاعات تکمیلی", "تأیید هویت", "تکمیل ثبت‌نام"]
    }
  }

  const [formData, setFormData] = useState({
    // Individual user fields
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    nationalId: "",
    birthdate: "",
    address: "",
    postalCode: "",
    password: "",
    passwordConfirm: "",
    phoneVerification: "",
    verificationCode: "",

    // Corporate user fields
    companyName: "",
    companyType: "",
    registrationNumber: "",
    economicCode: "",
    representativeName: "",
    representativePhone: "",
    representativeEmail: "",
    companyRegistrationNumber: "",
    companyNationalId: "",
    ceoName: "",
    ceoNationalId: "",
    companyPhone: "",
    companyEmail: "",
    businessLicenseNumber: "",
    companyDescription: "",

    // Supplier fields
    supplierCompanyName: "",
    supplierRegistrationNumber: "",
    productCategories: [],
    businessLicense: "",
    contactPerson: "",
    contactPhone: "",
    contactEmail: "",
    companyDescription: "",
    website: "",

    // Oustakar fields
    oustakarFirstName: "",
    oustakarLastName: "",
    oustakarPhone: "",
    oustakarEmail: "",
    specialization: "",
    experience: "",
    skills: [],
    certifications: [],
    portfolio: "",
    educationLevel: "",
    fieldOfStudy: "",
    yearsOfExperience: "",
    portfolioDescription: "",
  })

  const updateFormData = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setAvatarPreview(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validatePhone = (phone) => {
    const re = /^09\d{9}$/
    return re.test(phone)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    let hasError = false
    const errors = { email: "", password: "" }

    if (!email) {
      errors.email = "لطفا ایمیل یا شماره موبایل خود را وارد کنید"
      hasError = true
    } else if (!validateEmail(email) && !validatePhone(email)) {
      errors.email = "فرمت ایمیل یا شماره موبایل صحیح نیست"
      hasError = true
    }

    if (!password) {
      errors.password = "لطفا رمز عبور خود را وارد کنید"
      hasError = true
    }

    if (hasError) {
      setFormErrors(errors)
      return
    }

    // Simulate login
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      // Show 2FA verification if enabled
      setShowOtpVerification(true)
    }, 1500)
  }

  const handleOtpComplete = (otp) => {
    // Simulate OTP verification
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setShowOtpVerification(false)
      toast({
        title: "ورود موفقیت‌آمیز",
        description: "به اوستا خوش آمدید!",
      })
    }, 1500)
  }

  const handleNextStep = () => {
    if (currentStep < getSteps().length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleRegister = (e) => {
    e.preventDefault()
    console.log("[v0] Form submission with data:", formData)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "ثبت‌نام موفقیت‌آمیز",
        description: "حساب کاربری شما با موفقیت ایجاد شد.",
      })
    }, 1500)
  }

  // Render registration form based on user type and current step
  const renderRegistrationForm = () => {
    if (userType === "individual") {
      switch (currentStep) {
        case 0: // Basic Information
          return (
            <div className="space-y-4">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
                    <AvatarImage src={avatarPreview || "/placeholder.svg"} />
                    <AvatarFallback className="bg-blue-100 text-blue-600 text-xl">
                      {avatarPreview ? "" : <User className="h-10 w-10" />}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="sm"
                    className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleAvatarUpload}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstname" className="text-base">
                    نام
                  </Label>
                  <Input
                    id="firstname"
                    type="text"
                    className="h-12 text-base"
                    value={formData.firstName}
                    onChange={(e) => updateFormData("firstName", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastname" className="text-base">
                    نام خانوادگی
                  </Label>
                  <Input
                    id="lastname"
                    type="text"
                    className="h-12 text-base"
                    value={formData.lastName}
                    onChange={(e) => updateFormData("lastName", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base">
                  شماره موبایل
                </Label>
                <div className="relative">
                  <Smartphone className="absolute right-3 top-3 h-6 w-6 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="09123456789"
                    className="h-12 text-base pr-12"
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">
                  ایمیل
                </Label>
                <div className="relative">
                  <Mail className="absolute right-3 top-3 h-6 w-6 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@mail.com"
                    className="h-12 text-base pr-12"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                  />
                </div>
              </div>
            </div>
          )
        case 1: // Additional Information
          return (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="national-id" className="text-base">
                  کد ملی
                </Label>
                <Input
                  id="national-id"
                  type="text"
                  className="h-12 text-base"
                  value={formData.nationalId}
                  onChange={(e) => updateFormData("nationalId", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthdate" className="text-base">
                  تاریخ تولد
                </Label>
                <div className="relative">
                  <Calendar className="absolute right-3 top-3 h-6 w-6 text-gray-400" />
                  <Input
                    id="birthdate"
                    type="date"
                    className="h-12 text-base pr-12"
                    value={formData.birthdate}
                    onChange={(e) => updateFormData("birthdate", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-base">
                  آدرس
                </Label>
                <div className="relative">
                  <MapPin className="absolute right-3 top-3 h-6 w-6 text-gray-400" />
                  <Textarea
                    id="address"
                    className="min-h-[100px] pt-10 pr-12"
                    value={formData.address}
                    onChange={(e) => updateFormData("address", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="postal-code" className="text-base">
                  کد پستی
                </Label>
                <Input
                  id="postal-code"
                  type="text"
                  className="h-12 text-base"
                  value={formData.postalCode}
                  onChange={(e) => updateFormData("postalCode", e.target.value)}
                />
              </div>
            </div>
          )
        case 2: // Replaced identity document upload with phone verification
          return (
            <div className="space-y-4">
              <Alert className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
                <AlertDescription className="text-sm text-green-800 dark:text-green-300">
                  برای تکمیل ثبت نام، لطفاً شماره تلفن همراه خود را تأیید کنید.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone-verification" className="text-base">
                    شماره تلفن همراه
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="phone-verification"
                      type="tel"
                      placeholder="09123456789"
                      className="h-12 text-base flex-1"
                      value={formData.phoneVerification}
                      onChange={(e) => updateFormData("phoneVerification", e.target.value)}
                    />
                    <Button type="button" variant="outline" className="h-12 px-4 bg-transparent">
                      ارسال کد
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="verification-code" className="text-base">
                    کد تأیید
                  </Label>
                  <Input
                    id="verification-code"
                    type="text"
                    placeholder="کد 6 رقمی را وارد کنید"
                    className="h-12 text-base"
                    value={formData.verificationCode}
                    onChange={(e) => updateFormData("verificationCode", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-base">
                  رمز عبور
                </Label>
                <div className="relative">
                  <Lock className="absolute right-3 top-3 h-6 w-6 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="h-12 text-base pr-12"
                    value={formData.password}
                    onChange={(e) => updateFormData("password", e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-6 w-6" /> : <Eye className="h-6 w-6" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="text-base">
                  تکرار رمز عبور
                </Label>
                <div className="relative">
                  <Lock className="absolute right-3 top-3 h-6 w-6 text-gray-400" />
                  <Input
                    id="confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    className="h-12 text-base pr-12"
                    value={formData.confirmPassword}
                    onChange={(e) => updateFormData("confirmPassword", e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute left-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="h-6 w-6" /> : <Eye className="h-6 w-6" />}
                  </button>
                </div>
              </div>
            </div>
          )
        case 3: // Completion
          return (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">ثبت‌نام تکمیل شد!</h3>
              <p className="text-gray-600">حساب کاربری شما با موفقیت ایجاد شد.</p>
            </div>
          )
        default:
          return null
      }
    }

    if (userType === "corporate") {
      switch (currentStep) {
        case 0: // Company Information
          return (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company-name" className="text-base">
                  نام شرکت
                </Label>
                <Input
                  id="company-name"
                  type="text"
                  className="h-12 text-base"
                  value={formData.companyName}
                  onChange={(e) => updateFormData("companyName", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="registration-number" className="text-base">
                  شماره ثبت شرکت
                </Label>
                <Input
                  id="registration-number"
                  type="text"
                  className="h-12 text-base"
                  value={formData.registrationNumber}
                  onChange={(e) => updateFormData("registrationNumber", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="economic-code" className="text-base">
                  کد اقتصادی
                </Label>
                <Input
                  id="economic-code"
                  type="text"
                  className="h-12 text-base"
                  value={formData.economicCode}
                  onChange={(e) => updateFormData("economicCode", e.target.value)}
                />
              </div>
            </div>
          )
        case 1: // Representative Information
          return (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="representative-name" className="text-base">
                  نام نماینده شرکت
                </Label>
                <Input
                  id="representative-name"
                  type="text"
                  className="h-12 text-base"
                  value={formData.representativeName}
                  onChange={(e) => updateFormData("representativeName", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="representative-phone" className="text-base">
                  شماره تماس نماینده
                </Label>
                <Input
                  id="representative-phone"
                  type="tel"
                  className="h-12 text-base"
                  value={formData.representativePhone}
                  onChange={(e) => updateFormData("representativePhone", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="representative-email" className="text-base">
                  ایمیل نماینده
                </Label>
                <Input
                  id="representative-email"
                  type="email"
                  className="h-12 text-base"
                  value={formData.representativeEmail}
                  onChange={(e) => updateFormData("representativeEmail", e.target.value)}
                />
              </div>
            </div>
          )
        case 2: // Replaced company document uploads with basic company information form
          return (
            <div className="space-y-4">
              <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                <AlertDescription className="text-sm text-blue-800 dark:text-blue-300">
                  لطفاً اطلاعات اساسی شرکت خود را وارد کنید.
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-registration-number" className="text-base">
                    شماره ثبت شرکت
                  </Label>
                  <Input
                    id="company-registration-number"
                    type="text"
                    className="h-12 text-base"
                    value={formData.companyRegistrationNumber}
                    onChange={(e) => updateFormData("companyRegistrationNumber", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company-national-id" className="text-base">
                    شناسه ملی شرکت
                  </Label>
                  <Input
                    id="company-national-id"
                    type="text"
                    className="h-12 text-base"
                    value={formData.companyNationalId}
                    onChange={(e) => updateFormData("companyNationalId", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ceo-name" className="text-base">
                    نام مدیرعامل
                  </Label>
                  <Input
                    id="ceo-name"
                    type="text"
                    className="h-12 text-base"
                    value={formData.ceoName}
                    onChange={(e) => updateFormData("ceoName", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ceo-national-id" className="text-base">
                    کد ملی مدیرعامل
                  </Label>
                  <Input
                    id="ceo-national-id"
                    type="text"
                    className="h-12 text-base"
                    value={formData.ceoNationalId}
                    onChange={(e) => updateFormData("ceoNationalId", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company-phone" className="text-base">
                    تلفن شرکت
                  </Label>
                  <Input
                    id="company-phone"
                    type="tel"
                    className="h-12 text-base"
                    value={formData.companyPhone}
                    onChange={(e) => updateFormData("companyPhone", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company-email" className="text-base">
                    ایمیل شرکت
                  </Label>
                  <Input
                    id="company-email"
                    type="email"
                    className="h-12 text-base"
                    value={formData.companyEmail}
                    onChange={(e) => updateFormData("companyEmail", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="business-license-number" className="text-base">
                  شماره پروانه کسب
                </Label>
                <Input
                  id="business-license-number"
                  type="text"
                  className="h-12 text-base"
                  value={formData.businessLicenseNumber}
                  onChange={(e) => updateFormData("businessLicenseNumber", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company-description" className="text-base">
                  توضیحات فعالیت شرکت
                </Label>
                <textarea
                  id="company-description"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#253F8F] focus:border-transparent"
                  value={formData.companyDescription}
                  onChange={(e) => updateFormData("companyDescription", e.target.value)}
                  placeholder="لطفاً فعالیت اصلی شرکت خود را شرح دهید..."
                />
              </div>
            </div>
          )
        case 3: // Completion
          return (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">ثبت‌نام شرکت تکمیل شد!</h3>
              <p className="text-gray-600">حساب کاربری شرکت شما با موفقیت ایجاد شد و در انتظار تأیید مدارک است.</p>
              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  پس از بررسی مدارک توسط تیم ما، حساب شما فعال خواهد شد.
                </p>
              </div>
            </div>
          )
        default:
          return null
      }
    }

    if (userType === "supplier") {
      switch (currentStep) {
        case 0: // Company Information
          return (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="supplier-company-name" className="text-base">
                  نام شرکت تامین‌کننده
                </Label>
                <Input
                  id="supplier-company-name"
                  type="text"
                  className="h-12 text-base"
                  value={formData.supplierCompanyName}
                  onChange={(e) => updateFormData("supplierCompanyName", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="supplier-registration" className="text-base">
                  شماره ثبت
                </Label>
                <Input
                  id="supplier-registration"
                  type="text"
                  className="h-12 text-base"
                  value={formData.supplierRegistrationNumber}
                  onChange={(e) => updateFormData("supplierRegistrationNumber", e.target.value)}
                />
              </div>
            </div>
          )
        case 1: // Product Categories
          return (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-base">دسته‌بندی محصولات</Label>
                <p className="text-sm text-gray-600">محصولاتی که عرضه می‌کنید را انتخاب کنید</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "ابزار و تجهیزات صنعتی",
                    "قطعات مکانیکی",
                    "تجهیزات الکترونیکی",
                    "مواد شیمیایی صنعتی",
                    "تجهیزات ایمنی",
                    "ابزار اندازه‌گیری",
                    "پمپ و کمپرسور",
                    "تجهیزات برقی",
                    "لوله و اتصالات",
                    "بلبرینگ و یاتاقان",
                    "موتور و گیربکس",
                    "سایر",
                  ].map((category) => (
                    <div key={category} className="flex items-center space-x-2 space-x-reverse">
                      <input
                        type="checkbox"
                        id={category}
                        className="rounded border-gray-300 text-[#253F8F] focus:ring-[#253F8F]"
                        onChange={(e) => {
                          const currentCategories = formData.productCategories || []
                          if (e.target.checked) {
                            updateFormData("productCategories", [...currentCategories, category])
                          } else {
                            updateFormData(
                              "productCategories",
                              currentCategories.filter((c) => c !== category),
                            )
                          }
                        }}
                      />
                      <Label htmlFor={category} className="text-sm font-normal cursor-pointer">
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company-description" className="text-base">
                  توضیحات شرکت
                </Label>
                <Textarea
                  id="company-description"
                  className="min-h-[100px]"
                  placeholder="درباره شرکت و محصولات خود توضیح دهید..."
                  value={formData.companyDescription}
                  onChange={(e) => updateFormData("companyDescription", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website" className="text-base">
                  وب‌سایت شرکت (اختیاری)
                </Label>
                <Input
                  id="website"
                  type="url"
                  placeholder="https://example.com"
                  className="h-12 text-base"
                  value={formData.website}
                  onChange={(e) => updateFormData("website", e.target.value)}
                />
              </div>
            </div>
          )
        case 2: // Contact Information
          return (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contact-person" className="text-base">
                  نام شخص تماس
                </Label>
                <Input
                  id="contact-person"
                  type="text"
                  className="h-12 text-base"
                  value={formData.contactPerson}
                  onChange={(e) => updateFormData("contactPerson", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-phone" className="text-base">
                  شماره تماس
                </Label>
                <Input
                  id="contact-phone"
                  type="tel"
                  className="h-12 text-base"
                  value={formData.contactPhone}
                  onChange={(e) => updateFormData("contactPhone", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email" className="text-base">
                  ایمیل تماس
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  className="h-12 text-base"
                  value={formData.contactEmail}
                  onChange={(e) => updateFormData("contactEmail", e.target.value)}
                />
              </div>
            </div>
          )
        case 3: // Completion
          return (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">ثبت‌نام تامین‌کننده تکمیل شد!</h3>
              <p className="text-gray-600">حساب کاربری تامین‌کننده شما با موفقیت ایجاد شد.</p>
              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  اکنون می‌توانید محصولات خود را در پلتفرم اوستا عرضه کنید.
                </p>
              </div>
            </div>
          )
        default:
          return null
      }
    }

    if (userType === "oustakar") {
      switch (currentStep) {
        case 0: // Personal Information
          return (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="oustakar-firstname" className="text-base">
                    نام
                  </Label>
                  <Input
                    id="oustakar-firstname"
                    type="text"
                    className="h-12 text-base"
                    value={formData.oustakarFirstName}
                    onChange={(e) => updateFormData("oustakarFirstName", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="oustakar-lastname" className="text-base">
                    نام خانوادگی
                  </Label>
                  <Input
                    id="oustakar-lastname"
                    type="text"
                    className="h-12 text-base"
                    value={formData.oustakarLastName}
                    onChange={(e) => updateFormData("oustakarLastName", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="oustakar-phone" className="text-base">
                  شماره موبایل
                </Label>
                <Input
                  id="oustakar-phone"
                  type="tel"
                  className="h-12 text-base"
                  value={formData.oustakarPhone}
                  onChange={(e) => updateFormData("oustakarPhone", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="oustakar-email" className="text-base">
                  ایمیل
                </Label>
                <Input
                  id="oustakar-email"
                  type="email"
                  className="h-12 text-base"
                  value={formData.oustakarEmail}
                  onChange={(e) => updateFormData("oustakarEmail", e.target.value)}
                />
              </div>
            </div>
          )
        case 1: // Specialization and Skills
          return (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="specialization" className="text-base">
                  تخصص اصلی
                </Label>
                <Input
                  id="specialization"
                  type="text"
                  className="h-12 text-base"
                  value={formData.specialization}
                  onChange={(e) => updateFormData("specialization", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience" className="text-base">
                  سابقه کار (سال)
                </Label>
                <Input
                  id="experience"
                  type="number"
                  className="h-12 text-base"
                  value={formData.experience}
                  onChange={(e) => updateFormData("experience", e.target.value)}
                />
              </div>
            </div>
          )
        case 2: // Made Oustakar documents optional and simplified
          return (
            <div className="space-y-4">
              <Alert className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                <AlertDescription className="text-sm text-blue-800 dark:text-blue-300">
                  لطفاً اطلاعات تخصصی خود را وارد کنید. آپلود مدارک اختیاری است و می‌توانید بعداً انجام دهید.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="education-level" className="text-base">
                    سطح تحصیلات
                  </Label>
                  <select
                    id="education-level"
                    className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#253F8F] focus:border-transparent"
                    value={formData.educationLevel}
                    onChange={(e) => updateFormData("educationLevel", e.target.value)}
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="diploma">دیپلم</option>
                    <option value="associate">کاردانی</option>
                    <option value="bachelor">کارشناسی</option>
                    <option value="master">کارشناسی ارشد</option>
                    <option value="phd">دکتری</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="field-of-study" className="text-base">
                    رشته تحصیلی
                  </Label>
                  <Input
                    id="field-of-study"
                    type="text"
                    className="h-12 text-base"
                    value={formData.fieldOfStudy}
                    onChange={(e) => updateFormData("fieldOfStudy", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="years-of-experience" className="text-base">
                    سال‌های تجربه
                  </Label>
                  <select
                    id="years-of-experience"
                    className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#253F8F] focus:border-transparent"
                    value={formData.yearsOfExperience}
                    onChange={(e) => updateFormData("yearsOfExperience", e.target.value)}
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="0-1">کمتر از 1 سال</option>
                    <option value="1-3">1 تا 3 سال</option>
                    <option value="3-5">3 تا 5 سال</option>
                    <option value="5-10">5 تا 10 سال</option>
                    <option value="10+">بیش از 10 سال</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="certifications" className="text-base">
                    گواهی‌نامه‌ها (اختیاری)
                  </Label>
                  <Input
                    id="certifications"
                    type="text"
                    className="h-12 text-base"
                    placeholder="نام گواهی‌نامه‌های خود را وارد کنید"
                    value={formData.certifications}
                    onChange={(e) => updateFormData("certifications", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="portfolio-description" className="text-base">
                    توضیحات نمونه کارها
                  </Label>
                  <textarea
                    id="portfolio-description"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#253F8F] focus:border-transparent"
                    value={formData.portfolioDescription}
                    onChange={(e) => updateFormData("portfolioDescription", e.target.value)}
                    placeholder="لطفاً تجربیات و نمونه کارهای خود را شرح دهید..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="skills" className="text-base">
                    مهارت‌های تخصصی
                  </Label>
                  <Input
                    id="skills"
                    type="text"
                    className="h-12 text-base"
                    placeholder="مهارت‌های خود را با کامای انگلیسی جدا کنید"
                    value={formData.skills}
                    onChange={(e) => updateFormData("skills", e.target.value)}
                  />
                </div>
              </div>
            </div>
          )
        case 3: // Completion
          return (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">ثبت‌نام اوستاکار تکمیل شد!</h3>
              <p className="text-gray-600">حساب کاربری اوستاکار شما با موفقیت ایجاد شد و در انتظار تأیید مدارک است.</p>
              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  پس از بررسی مدارک و تأیید تخصص شما، می‌توانید خدمات خود را ارائه دهید.
                </p>
              </div>
            </div>
          )
        default:
          return null
      }
    }

    return null
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#253F8F]/5 via-white to-[#F18F20]/5"></div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-gradient-to-r from-[#253F8F]/10 to-[#F18F20]/10 blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gradient-to-r from-[#F18F20]/10 to-[#253F8F]/10 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-[#253F8F]/5 blur-2xl animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>

        <div
          className="absolute top-32 right-32 w-16 h-16 rotate-45 bg-gradient-to-r from-[#253F8F]/20 to-[#F18F20]/20 rounded-lg animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div className="absolute bottom-40 left-40 w-12 h-12 rotate-12 bg-[#F18F20]/20 rounded-full animate-bounce"></div>

        <Sparkles className="absolute top-1/4 right-1/4 w-6 h-6 text-[#F18F20]/30 animate-pulse" />
        <Star
          className="absolute bottom-1/3 left-1/3 w-4 h-4 text-[#253F8F]/30 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="max-w-6xl w-full flex flex-col lg:flex-row bg-white/80 backdrop-blur-xl dark:bg-gray-950/80 rounded-3xl shadow-2xl overflow-hidden relative z-10 border border-white/20">
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#253F8F] via-[#253F8F]/90 to-[#253F8F]/80 p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#F18F20]/20 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#F18F20]/10 blur-3xl"></div>
            <div className="absolute top-1/3 left-1/3 w-32 h-32 rounded-full bg-white/5 blur-2xl"></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center mb-8">
              <div className="flex items-center justify-center mr-4">
                <Image src="/ousta-brand-logo.png" alt="اوستا" width={120} height={120} className="object-contain" />
              </div>
              <div>
                
                
              </div>
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight">
              مرجع ت��صصی
              <span className="block text-[#F18F20] font-semibold text-3xl"> تجهیزات صنعتی، کشاورزی و ساختمانی</span>
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              به هوشمندترین پلتفرم خرید و فروش و خدمات تجهیزات صنعتی، کشاورزی و ساختمانی ایران خوش آمدید
            </p>
          </div>

          <div className="relative z-10 space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#F18F20] flex items-center justify-center mr-3">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <p className="text-white font-semibold">مزایای عضویت در اوستا</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-white/90">
                  <div className="w-2 h-2 rounded-full bg-[#F18F20] ml-3"></div>
                  <span>دسترسی به هزاران محصول </span>
                </li>
                <li className="flex items-center text-white/90">
                  <div className="w-2 h-2 rounded-full bg-[#F18F20] ml-3"></div>
                  <span>استفاده از OOSTA AI و RFQ</span>
                </li>
                <li className="flex items-center text-white/90">
                  <div className="w-2 h-2 rounded-full bg-[#F18F20] ml-3"></div>
                  <span>قیمت‌های رقابتی و مناسب</span>
                </li>
                <li className="flex items-center text-white/90">
                  <div className="w-2 h-2 rounded-full bg-[#F18F20] ml-3"></div>
                  <span>پشتیبانی فنی و مشاوره تخصصی</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#F18F20] flex items-center justify-center mr-3">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <p className="text-white font-semibold">گواهینامه‌ها و افتخارات</p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/10 rounded-xl p-3 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                  <Image src="/placeholder.svg?key=ozfqd" alt="گواهی ISO" width={40} height={40} />
                </div>
                <div className="bg-white/10 rounded-xl p-3 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                  <Image src="/placeholder.svg?key=l51yu" alt="جایزه صنعت" width={40} height={40} />
                </div>
                <div className="bg-white/10 rounded-xl p-3 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                  <Image src="/placeholder.svg?key=ba3ye" alt="فروشنده معتبر" width={40} height={40} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#F18F20]">۱۰۰+</div>
                <div className="text-white/70 text-sm">هزار محصول</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#F18F20]">۵۰+</div>
                <div className="text-white/70 text-sm">هزار کاربر</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#F18F20]">۲۴/۷</div>
                <div className="text-white/70 text-sm">پشتیبانی</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-8 lg:p-12 relative">
          <FaqDialog />

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100/50 dark:bg-gray-800/50 p-1 rounded-2xl">
              <TabsTrigger
                value="login"
                className="text-lg py-3 rounded-xl data-[state=active]:bg-[#253F8F] data-[state=active]:text-white transition-all duration-300"
              >
                ورود
              </TabsTrigger>
              <TabsTrigger
                value="register"
                className="text-lg py-3 rounded-xl data-[state=active]:bg-[#253F8F] data-[state=active]:text-white transition-all duration-300"
              >
                ثبت‌نام
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <AnimatePresence mode="wait">
                {showOtpVerification ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-[#253F8F]/10 to-[#F18F20]/10 mb-4">
                        <Shield className="h-8 w-8 text-[#253F8F]" />
                      </div>
                      <h2 className="text-xl font-bold mb-2 text-[#253F8F]">تأیید دو مرحله‌ای</h2>
                      <p className="text-gray-500 dark:text-gray-400">کد تأیید به شماره 09123****89 ارسال شد</p>
                    </div>

                    {/* ... existing OTP code ... */}

                    <div className="flex justify-between items-center mt-4">
                      <Button
                        variant="ghost"
                        onClick={() => setShowOtpVerification(false)}
                        disabled={isLoading}
                        className="hover:bg-[#253F8F]/10"
                      >
                        بازگشت
                      </Button>
                      <Button variant="link" className="text-[#F18F20] hover:text-[#F18F20]/80" disabled={isLoading}>
                        ارسال مجدد کد
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <form onSubmit={handleLogin}>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-base font-medium text-gray-700 dark:text-gray-300">
                            ایمیل یا شماره موبایل
                          </Label>
                          <div className="relative">
                            <div className="absolute right-4 top-4 h-5 w-5 text-[#253F8F]/60">
                              <Mail className="h-5 w-5" />
                            </div>
                            <Input
                              id="email"
                              name="email"
                              type="text"
                              placeholder="example@mail.com یا 09123456789"
                              className={`h-14 text-base pr-12 rounded-xl border-2 transition-all duration-300 focus:border-[#253F8F] focus:ring-[#253F8F]/20 ${
                                formErrors.email
                                  ? "border-red-500 focus:ring-red-500/20"
                                  : "border-gray-200 hover:border-[#253F8F]/50"
                              }`}
                            />
                            {formErrors.email && (
                              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                <AlertCircle className="h-5 w-5 text-red-500" />
                              </div>
                            )}
                          </div>
                          {formErrors.email && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                              <AlertCircle className="h-4 w-4 mr-1" />
                              {formErrors.email}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label
                              htmlFor="login-password"
                              className="text-base font-medium text-gray-700 dark:text-gray-300"
                            >
                              رمز عبور
                            </Label>
                            <Link
                              href="/forgot-password"
                              className="text-sm text-[#F18F20] hover:text-[#F18F20]/80 hover:underline transition-colors duration-300"
                            >
                              فراموشی رمز عبور
                            </Link>
                          </div>
                          <div className="relative">
                            <Lock className="absolute right-4 top-4 h-5 w-5 text-[#253F8F]/60" />
                            <Input
                              id="login-password"
                              name="password"
                              type={showPassword ? "text" : "password"}
                              placeholder="رمز عبور خود را وارد کنید"
                              className={`h-14 text-base pr-12 pl-12 rounded-xl border-2 transition-all duration-300 focus:border-[#253F8F] focus:ring-[#253F8F]/20 ${
                                formErrors.password
                                  ? "border-red-500 focus:ring-red-500/20"
                                  : "border-gray-200 hover:border-[#253F8F]/50"
                              }`}
                            />
                            <button
                              type="button"
                              className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#253F8F]/60 hover:text-[#253F8F] transition-colors duration-300"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                          </div>
                          {formErrors.password && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                              <AlertCircle className="h-4 w-4 mr-1" />
                              {formErrors.password}
                            </p>
                          )}
                        </div>

                        <div className="flex items-center">
                          <Checkbox
                            id="remember"
                            className="ml-2 border-[#253F8F]/30 data-[state=checked]:bg-[#253F8F] data-[state=checked]:border-[#253F8F]"
                          />
                          <Label htmlFor="remember" className="text-sm text-gray-600 dark:text-gray-400">
                            مرا به خاطر بسپار
                          </Label>
                        </div>

                        <Button
                          type="submit"
                          className="w-full h-14 text-base font-semibold rounded-xl bg-gradient-to-r from-[#253F8F] to-[#253F8F]/90 hover:from-[#253F8F]/90 hover:to-[#253F8F] transition-all duration-300 shadow-lg hover:shadow-xl"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <div className="flex items-center">
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></div>
                              در حال ورود...
                            </div>
                          ) : (
                            <>
                              <span>ورود به حساب کاربری</span>
                              <ChevronRight className="h-5 w-5 mr-2" />
                            </>
                          )}
                        </Button>

                        <div className="relative flex items-center justify-center mt-8 mb-6">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                          </div>
                          <div className="relative px-6 bg-white dark:bg-gray-950 text-sm text-gray-500 dark:text-gray-400">
                            یا ورود با
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                          <Button
                            variant="outline"
                            className="h-12 rounded-xl border-2 hover:border-[#253F8F]/50 hover:bg-[#253F8F]/5 transition-all duration-300 bg-transparent"
                          >
                            <Facebook className="h-5 w-5 text-blue-600" />
                          </Button>
                          <Button
                            variant="outline"
                            className="h-12 rounded-xl border-2 hover:border-[#253F8F]/50 hover:bg-[#253F8F]/5 transition-all duration-300 bg-transparent"
                          >
                            <Twitter className="h-5 w-5 text-blue-400" />
                          </Button>
                          <Button
                            variant="outline"
                            className="h-12 rounded-xl border-2 hover:border-[#253F8F]/50 hover:bg-[#253F8F]/5 transition-all duration-300 bg-transparent"
                          >
                            <Linkedin className="h-5 w-5 text-blue-700" />
                          </Button>
                        </div>

                        <QrCodeLoginDialog />
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </TabsContent>

            <TabsContent value="register">
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <form onSubmit={handleRegister}>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <Label htmlFor="user-type" className="text-base">
                          نوع کاربر
                        </Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[
                            {
                              value: "individual",
                              label: "خریدار حقیقی",
                              icon: "👤",
                              description: "خرید شخصی محصولات",
                            },
                            {
                              value: "corporate",
                              label: "خریدار حقوقی",
                              icon: "🏢",
                              description: "خرید سازمانی و شرکتی",
                            },
                            { value: "supplier", label: "تامین‌کننده", icon: "📦", description: "عرضه محصولات صنعتی" },
                            { value: "oustakar", label: "اوستاکار", icon: "🔧", description: "ارائه خدمات تخصصی" },
                          ].map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => {
                                setUserType(option.value)
                                setCurrentStep(0)
                              }}
                              className={`relative p-4 rounded-xl border-2 transition-all duration-300 text-right hover:shadow-lg ${
                                userType === option.value
                                  ? "border-[#253F8F] bg-[#253F8F]/5 shadow-md"
                                  : "border-gray-200 hover:border-[#253F8F]/50 bg-white"
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <div
                                  className={`text-2xl p-2 rounded-lg ${
                                    userType === option.value ? "bg-[#253F8F] text-white" : "bg-gray-100 text-gray-600"
                                  }`}
                                >
                                  {option.icon}
                                </div>
                                <div className="flex-1">
                                  <h3
                                    className={`font-semibold text-base mb-1 ${
                                      userType === option.value ? "text-[#253F8F]" : "text-gray-800"
                                    }`}
                                  >
                                    {option.label}
                                  </h3>
                                  <p className="text-sm text-gray-600">{option.description}</p>
                                </div>
                                {userType === option.value && (
                                  <div className="absolute top-2 left-2">
                                    <div className="w-5 h-5 bg-[#F18F20] rounded-full flex items-center justify-center">
                                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                          fillRule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <Stepper steps={getSteps()} currentStep={currentStep} />

                      {renderRegistrationForm()}

                      <div className="flex justify-between mt-8">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handlePrevStep}
                          disabled={currentStep === 0}
                          className="w-1/3 bg-transparent"
                        >
                          <ChevronRight className="h-5 w-5 ml-1" />
                          مرحله قبل
                        </Button>

                        {currentStep < getSteps().length - 1 ? (
                          <Button type="button" onClick={handleNextStep} className="w-1/3">
                            مرحله بعد
                            <ChevronLeft className="h-5 w-5 mr-1" />
                          </Button>
                        ) : (
                          <Button type="submit" className="w-1/3" disabled={isLoading}>
                            {isLoading ? (
                              <div className="flex items-center">
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></div>
                                در حال ثبت‌نام...
                              </div>
                            ) : (
                              "تکمیل ثبت‌نام"
                            )}
                          </Button>
                        )}
                      </div>
                    </div>
                  </form>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
