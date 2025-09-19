"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  Mic,
  ImageIcon,
  ChevronRight,
  Play,
  Pause,
  CheckCircle2,
  Info,
  ChevronLeft,
  Sparkles,
  Volume2,
  AlertCircle,
  HelpCircle,
} from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [popularSearches] = useState([
    "پمپ سانتریفیوژ",
    "گیربکس حلزونی",
    "الکتروموتور سه فاز",
    "پمپ کف کش",
    "ابزار صنعتی",
  ])
  const searchInputRef = useRef<HTMLInputElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const dropAreaRef = useRef<HTMLDivElement>(null)

  const [activeTab, setActiveTab] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 50000000])
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [onlyInStock, setOnlyInStock] = useState(false)
  const [minRating, setMinRating] = useState<number>(0)
  const [onlyDiscounted, setOnlyDiscounted] = useState<boolean>(false)
  const [onlyNewProducts, setOnlyNewProducts] = useState<boolean>(false)
  const [isGuideOpen, setIsGuideOpen] = useState(false)

  // متغیرهای مربوط به جستجوی تصویری
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isImageSearching, setIsImageSearching] = useState(false)
  const [imageSearchResults, setImageSearchResults] = useState<any[]>([])
  const [imageUploadMethod, setImageUploadMethod] = useState<"upload" | "camera" | "url">("upload")
  const [imageUrl, setImageUrl] = useState<string>("")
  const [imageSearchProgress, setImageSearchProgress] = useState<number>(0)
  const [imageSearchError, setImageSearchError] = useState<string | null>(null)
  const [imageSearchHistory, setImageSearchHistory] = useState<{ id: number; preview: string; date: Date }[]>([])

  // متغیرهای مربوط به جستجوی صوتی
  const [voiceRecognitionSupported, setVoiceRecognitionSupported] = useState<boolean>(true)
  const [voiceSearchStatus, setVoiceSearchStatus] = useState<"idle" | "listening" | "processing" | "error">("idle")
  const [voiceVolume, setVoiceVolume] = useState<number>(0)
  const [voiceSearchError, setVoiceSearchError] = useState<string | null>(null)
  const [voiceSearchSuggestions, setVoiceSearchSuggestions] = useState<string[]>([])
  const voiceAnimationRef = useRef<NodeJS.Timeout | null>(null)

  const [guideActiveStep, setGuideActiveStep] = useState<number>(1)
  const [guideTab, setGuideTab] = useState<string>("voice")
  const [isPlayingDemo, setIsPlayingDemo] = useState<boolean>(false)
  const [demoProgress, setDemoProgress] = useState<number>(0)
  const demoIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)

  // متغیرهای جدید برای بهبود تجربه کاربری
  const [showImageUploadOptions, setShowImageUploadOptions] = useState<boolean>(false)
  const [cameraActive, setCameraActive] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  // Define SpeechRecognition outside the startVoiceSearch function
  const SpeechRecognition =
    typeof window !== "undefined" && (window.SpeechRecognition || window.webkitSpeechRecognition)
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null)

  useEffect(() => {
    // بارگذاری جستجوهای اخیر از localStorage
    const savedSearches = localStorage.getItem("recentSearches")
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches))
    }

    // بررسی پشتیبانی از جستجوی صوتی
    const isSpeechRecognitionSupported = "webkitSpeechRecognition" in window || "SpeechRecognition" in window
    setVoiceRecognitionSupported(isSpeechRecognitionSupported)

    // بارگذاری تاریخچه جستجوهای تصویری
    const savedImageSearchHistory = localStorage.getItem("imageSearchHistory")
    if (savedImageSearchHistory) {
      setImageSearchHistory(JSON.parse(savedImageSearchHistory))
    }

    // تنظیم رویدادهای drag and drop برای جستجوی تصویری
    const dropArea = dropAreaRef.current
    if (dropArea) {
      const preventDefault = (e: Event) => {
        e.preventDefault()
        e.stopPropagation()
      }

      const handleDrop = (e: DragEvent) => {
        preventDefault(e)
        if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
          handleImageFile(e.dataTransfer.files[0])
        }
      }

      dropArea.addEventListener("dragenter", preventDefault)
      dropArea.addEventListener("dragover", preventDefault)
      dropArea.addEventListener("dragleave", preventDefault)
      dropArea.addEventListener("drop", handleDrop)

      return () => {
        dropArea.removeEventListener("dragenter", preventDefault)
        dropArea.removeEventListener("dragover", preventDefault)
        dropArea.removeEventListener("dragleave", preventDefault)
        dropArea.removeEventListener("drop", handleDrop)
      }
    }

    // Initialize SpeechRecognition in useEffect
    if (SpeechRecognition) {
      const newRecognition = new SpeechRecognition()
      newRecognition.lang = "fa-IR"
      newRecognition.continuous = false
      newRecognition.interimResults = true
      newRecognition.maxAlternatives = 3
      setRecognition(newRecognition)
    }
  }, [])

  // اضافه کردن useEffect برای مدیریت دوربین
  useEffect(() => {
    if (cameraActive && videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream
            streamRef.current = stream
          }
        })
        .catch((err) => {
          console.error("خطا در دسترسی به دوربین:", err)
          setCameraActive(false)
          toast({
            title: "خطا در دسترسی به دوربین",
            description: "لطفاً مجوز دسترسی به دوربین را بررسی کنید.",
            variant: "destructive",
          })
        })
    } else if (!cameraActive && streamRef.current) {
      // بستن جریان دوربین هنگام غیرفعال شدن
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }

    return () => {
      // پاکسازی جریان دوربین هنگام unmount شدن کامپوننت
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop())
        streamRef.current = null
      }
    }
  }, [cameraActive])

  const handleSearch = () => {
    if (searchTerm.trim()) {
      // ذخیره جستجو در لیست جستجوهای اخیر
      const updatedSearches = [searchTerm, ...recentSearches.filter((s) => s !== searchTerm)].slice(0, 5)
      setRecentSearches(updatedSearches)
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches))

      // انتقال به صفحه نتایج جستجو
      window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const categories = [
    { id: "pumps", name: "پمپ‌ها" },
    { id: "gearboxes", name: "گیربکس‌ها" },
    { id: "electromotors", name: "الکتروموتورها" },
    { id: "tools", name: "ابزارآلات صنعتی" },
    { id: "measurement", name: "تجهیزات اندازه‌گیری" },
    { id: "thermal", name: "تجهیزات حرارتی" },
  ]

  const brands = [
    { id: "siemens", name: "زیمنس" },
    { id: "abb", name: "ABB" },
    { id: "grundfos", name: "گراندفوس" },
    { id: "sew", name: "SEW" },
    { id: "nord", name: "NORD" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)

    // پیشنهادات خودکار بر اساس متن وارد شده
    if (value.length > 1) {
      // در یک پروژه واقعی، این داده‌ها از API دریافت می‌شوند
      const mockSuggestions = [
        `${value} صنعتی`,
        `${value} پمپ`,
        `${value} گیربکس`,
        `${value} الکتروموتور`,
        `${value} ابزار`,
      ].filter((item) => item.length > 4)

      setSuggestions(mockSuggestions)
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }

  const applyFilters = () => {
    // در یک پروژه واقعی، این پارامترها به URL اضافه می‌شوند
    const filterParams = new URLSearchParams()

    if (searchTerm) filterParams.append("q", searchTerm)
    if (selectedCategories.length) filterParams.append("categories", selectedCategories.join(","))
    if (selectedBrands.length) filterParams.append("brands", selectedBrands.join(","))
    if (onlyInStock) filterParams.append("inStock", "true")
    if (minRating > 0) filterParams.append("minRating", minRating.toString())
    if (onlyDiscounted) filterParams.append("discounted", "true")
    if (onlyNewProducts) filterParams.append("newProducts", "true")
    filterParams.append("minPrice", priceRange[0].toString())
    filterParams.append("maxPrice", priceRange[1].toString())

    // انتقال به صفحه نتایج جستجو با فیلترها
    window.location.href = `/search?${filterParams.toString()}`
  }

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  const toggleBrand = (brandId: string) => {
    setSelectedBrands((prev) => (prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]))
  }

  const clearSearch = () => {
    setSearchTerm("")
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }

  const removeRecentSearch = (search: string) => {
    const updatedSearches = recentSearches.filter((s) => s !== search)
    setRecentSearches(updatedSearches)
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches))
  }

  // توابع بهبود یافته جستجوی صوتی
  const startVoiceSearch = () => {
    if (!voiceRecognitionSupported) {
      setVoiceSearchError("مرورگر شما از جستجوی صوتی پشتیبانی نمی‌کند")
      return
    }

    setVoiceSearchStatus("listening")
    setVoiceSearchError(null)

    // شبیه‌سازی تغییرات حجم صدا برای بازخورد بصری
    voiceAnimationRef.current = setInterval(() => {
      setVoiceVolume(Math.random() * 100)
    }, 150)

    if (!recognition) {
      setVoiceSearchStatus("error")
      setVoiceSearchError("خطا در راه‌اندازی تشخیص صدا")
      if (voiceAnimationRef.current) {
        clearInterval(voiceAnimationRef.current)
      }
      return
    }

    try {
      recognition.onstart = () => {
        setVoiceSearchStatus("listening")
      }

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript
        setSearchTerm(transcript)

        // جمع‌آوری پیشنهادات جایگزین
        const alternatives = []
        for (let i = 1; i < event.results[0].length && i < 3; i++) {
          alternatives.push(event.results[0][i].transcript)
        }
        setVoiceSearchSuggestions(alternatives)

        setVoiceSearchStatus("processing")
      }

      recognition.onerror = (event) => {
        setVoiceSearchStatus("error")
        setVoiceSearchError(`خطا در تشخیص صدا: ${event.error}`)
        if (voiceAnimationRef.current) {
          clearInterval(voiceAnimationRef.current)
        }
      }

      recognition.onend = () => {
        if (voiceSearchStatus === "listening") {
          setVoiceSearchStatus("idle")
        }
        if (voiceAnimationRef.current) {
          clearInterval(voiceAnimationRef.current)
          setVoiceVolume(0)
        }
      }

      recognition.start()
    } catch (error) {
      setVoiceSearchStatus("error")
      setVoiceSearchError("خطا در راه‌اندازی تشخیص صدا")
      if (voiceAnimationRef.current) {
        clearInterval(voiceAnimationRef.current)
      }
    }
  }

  const useVoiceSuggestion = (suggestion: string) => {
    setSearchTerm(suggestion)
    setVoiceSearchSuggestions([])
    handleSearch()
  }

  // توابع بهبود یافته جستجوی تصویری
  const handleImageFile = (file: File) => {
    if (file) {
      // بررسی نوع فایل
      if (!file.type.startsWith("image/")) {
        setImageSearchError("لطفاً یک فایل تصویری معتبر انتخاب کنید")
        toast({
          title: "خطا",
          description: "لطفاً یک فایل تصویری معتبر انتخاب کنید",
          variant: "destructive",
        })
        return
      }

      // بررسی اندازه فایل (حداکثر 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setImageSearchError("حجم تصویر نباید بیشتر از 5 مگابایت باشد")
        toast({
          title: "خطا",
          description: "حجم تصویر نباید بیشتر از 5 مگابایت باشد",
          variant: "destructive",
        })
        return
      }

      setSelectedImage(file)
      setImageSearchError(null)

      // ایجاد پیش‌نمایش تصویر
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
        toast({
          title: "تصویر با موفقیت بارگذاری شد",
          description: "می‌توانید جستجوی تصویری را انجام دهید",
        })
      }
      reader.readAsDataURL(file)

      // بستن منوی آپلود تصویر
      setShowImageUploadOptions(false)
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleImageFile(file)
      // پس از انتخاب فایل، فیلد input را ریست کنیم تا امکان انتخاب مجدد همان فایل وجود داشته باشد
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    }
  }

  const triggerImageUpload = () => {
    // به جای فقط نمایش منو، مستقیماً فایل دیالوگ را باز کنیم
    if (fileInputRef.current) {
      fileInputRef.current.click()
    } else {
      // اگر رفرنس وجود نداشت، منو را نمایش دهیم
      setShowImageUploadOptions(true)
      toast({
        title: "جستجوی تصویری",
        description: "لطفاً یک تصویر آپلود کنید یا از دوربین استفاده کنید",
      })
    }
  }

  const takePicture = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current
      const canvas = canvasRef.current

      // تنظیم ابعاد canvas برابر با ابعاد ویدیو
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight

      // گرفتن عکس از دوربین
      const context = canvas.getContext("2d")
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height)

        // تبدیل تصویر به فرمت داده
        canvas.toBlob(
          (blob) => {
            if (blob) {
              // ایجاد فایل از blob
              const file = new File([blob], "camera-capture.jpg", { type: "image/jpeg" })

              // استفاده از همان تابع handleImageFile برای پردازش تصویر
              handleImageFile(file)

              // بستن دوربین
              setCameraActive(false)
            }
          },
          "image/jpeg",
          0.95,
        )
      }
    }
  }

  const handleCameraCapture = async () => {
    setCameraActive(true)
    setImageUploadMethod("camera")
  }

  const handleImageUrlSearch = () => {
    if (!imageUrl) {
      setImageSearchError("لطفاً یک آدرس تصویر وارد کنید")
      toast({
        title: "خطا",
        description: "لطفاً یک آدرس تصویر وارد کنید",
        variant: "destructive",
      })
      return
    }

    // بررسی اعتبار URL
    try {
      new URL(imageUrl)
    } catch (error) {
      setImageSearchError("لطفاً یک آدرس اینترنتی معتبر وارد کنید")
      toast({
        title: "خطا",
        description: "لطفاً یک آدرس اینترنتی معتبر وارد کنید",
        variant: "destructive",
      })
      return
    }

    setImagePreview(imageUrl)
    setSelectedImage(null)
    setImageSearchError(null)
    toast({
      title: "تصویر با موفقیت بارگذاری شد",
      description: "می‌توانید جستجوی تصویری را انجام دهید",
    })

    // بستن منوی آپلود تصویر
    setShowImageUploadOptions(false)
  }

  const clearImageSearch = () => {
    setSelectedImage(null)
    setImagePreview(null)
    setImageSearchResults([])
    setImageUrl("")
    setImageSearchError(null)
    setImageSearchProgress(0)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const performImageSearch = () => {
    if (!imagePreview) return

    setIsImageSearching(true)
    setImageSearchProgress(0)
    setImageSearchError(null)

    // ذخیره جستجوی تصویری در تاریخچه
    const newHistoryItem = {
      id: Date.now(),
      preview: imagePreview,
      date: new Date(),
    }

    const updatedHistory = [newHistoryItem, ...imageSearchHistory].slice(0, 5)
    setImageSearchHistory(updatedHistory)
    localStorage.setItem("imageSearchHistory", JSON.stringify(updatedHistory))

    // شبیه‌سازی پیشرفت جستجوی تصویری
    const progressInterval = setInterval(() => {
      setImageSearchProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 10
      })
    }, 200)

    // شبیه‌سازی جستجوی تصویری با تاخیر
    setTimeout(() => {
      clearInterval(progressInterval)
      setImageSearchProgress(100)

      // نتایج شبیه‌سازی شده با اطلاعات بیشتر
      setImageSearchResults([
        {
          id: 1,
          name: "پمپ سانتریفیوژ صنعتی مدل CP-250",
          category: "پمپ‌ها",
          similarity: 92,
          price: 11800000,
          inStock: true,
          image: "/placeholder.svg?key=lfmt3",
        },
        {
          id: 2,
          name: "پمپ سانتریفیوژ مدل CP-200",
          category: "پمپ‌ها",
          similarity: 87,
          price: 9500000,
          inStock: true,
          image: "/placeholder.svg?key=v3ffy",
        },
        {
          id: 3,
          name: "پمپ آب صنعتی مدل WP-100",
          category: "پمپ‌ها",
          similarity: 75,
          price: 7200000,
          inStock: false,
          image: "/placeholder.svg?key=gei9b",
        },
        {
          id: 4,
          name: "پمپ کف کش صنعتی مدل SP-150",
          category: "پمپ‌ها",
          similarity: 68,
          price: 8900000,
          inStock: true,
          image: "/placeholder.svg?key=ogx4u",
        },
      ])
      setIsImageSearching(false)

      toast({
        title: "جستجوی تصویری انجام شد",
        description: "4 محصول مشابه پیدا شد",
      })
    }, 2000)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price) + " تومان"
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  useEffect(() => {
    // اطمینان از اینکه fileInputRef به درستی مقداردهی شده است
    if (!fileInputRef.current) {
      console.warn("fileInputRef is not properly initialized")
    }

    // بقیه کد useEffect بدون تغییر...
  }, [])

  return (
    <div>
      <div className="container">
        {/* نوار جستجوی اصلی */}
        <div className="flex items-center w-full mx-auto gap-2">
          <div className="relative flex-1 flex items-center bg-white dark:bg-gray-800 rounded-r-lg border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
            <input
              type="text"
              placeholder="جستجو در بین هزاران محصول..."
              className="flex-1 px-4 py-3 focus:outline-none dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 rounded-r-lg"
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              ref={searchInputRef}
            />

            <div className="flex items-center gap-1 px-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={startVoiceSearch}
                className={`rounded-full hover:bg-primary/10 ${voiceSearchStatus === "listening" ? "bg-red-100 text-red-600 animate-pulse" : ""} dark:text-white dark:hover:bg-primary/20`}
                title="جستجوی صوتی"
              >
                <Mic className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={triggerImageUpload}
                className="rounded-full hover:bg-primary/10 dark:text-white dark:hover:bg-primary/20"
                title="جستجوی تصویری"
              >
                <ImageIcon className="h-5 w-5" />
              </Button>

              <Dialog open={isGuideOpen} onOpenChange={setIsGuideOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-primary/10 dark:text-white dark:hover:bg-primary/20"
                    title="راهنمای جستجو"
                    onClick={() => setIsGuideOpen(true)}
                  >
                    <HelpCircle className="h-5 w-5" />
                  </Button>
                </DialogTrigger>

                {/* محتوای دیالوگ راهنما بدون تغییر باقی می‌ماند */}
                <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
                  {/* محتوای دیالوگ بدون تغییر */}
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">راهنمای جستجوی هوشمند</h2>
                    <Tabs
                      value={guideTab}
                      onValueChange={(value) => {
                        setGuideTab(value)
                        setGuideActiveStep(1)
                        setIsPlayingDemo(false)
                        if (demoIntervalRef.current) {
                          clearInterval(demoIntervalRef.current)
                        }
                      }}
                    >
                      <TabsList className="grid grid-cols-2">
                        <TabsTrigger value="voice" className="flex items-center gap-2">
                          <Mic className="h-4 w-4" />
                          جستجوی صوتی
                        </TabsTrigger>
                        <TabsTrigger value="image" className="flex items-center gap-2">
                          <ImageIcon className="h-4 w-4" />
                          جستجوی تصویری
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>

                  <Tabs value={guideTab} onValueChange={setGuideTab}>
                    <TabsContent value="voice" className="space-y-6">
                      {/* نوار پیشرفت مراحل */}
                      <div className="relative">
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary transition-all duration-300"
                            style={{ width: `${(guideActiveStep / 3) * 100}%` }}
                          />
                        </div>
                        <div className="flex justify-between mt-1">
                          <span
                            className={`text-xs ${guideActiveStep >= 1 ? "text-primary font-medium" : "text-muted-foreground"}`}
                          >
                            آشنایی با جستجوی صوتی
                          </span>
                          <span
                            className={`text-xs ${guideActiveStep >= 2 ? "text-primary font-medium" : "text-muted-foreground"}`}
                          >
                            نحوه استفاده
                          </span>
                          <span
                            className={`text-xs ${guideActiveStep >= 3 ? "text-primary font-medium" : "text-muted-foreground"}`}
                          >
                            نکات و ترفندها
                          </span>
                        </div>
                      </div>

                      {/* مرحله اول - آشنایی با جستجوی صوتی */}
                      {guideActiveStep === 1 && (
                        <div className="space-y-6 animate-in fade-in-50 duration-300">
                          <div className="text-center">
                            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Mic className="h-10 w-10 text-primary" />
                            </div>
                            <h2 className="text-xl font-bold mb-2">جستجوی صوتی چیست؟</h2>
                            <p className="text-muted-foreground max-w-lg mx-auto">
                              با استفاده از قابلیت جستجوی صوتی، می‌توانید بدون نیاز به تایپ، محصول مورد نظر خود را با
                              صدای خود جستجو کنید. این قابلیت به شما کمک می‌کند سریع‌تر و راحت‌تر به نتایج مورد نظر خود
                              برسید.
                            </p>
                          </div>

                          <div className="bg-muted/30 rounded-lg p-6">
                            <h3 className="font-medium text-lg mb-4 flex items-center">
                              <CheckCircle2 className="h-5 w-5 text-primary ml-2" />
                              مزایای جستجوی صوتی
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <Card>
                                <CardContent className="p-4 flex items-start">
                                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center ml-3 flex-shrink-0">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="text-primary"
                                    >
                                      <path d="M12 20v-6M6 20V10M18 20V4"></path>
                                    </svg>
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-1">سرعت بالا</h4>
                                    <p className="text-sm text-muted-foreground">
                                      جستجو با صدا سریع‌تر از تایپ کردن است، به خصوص برای عبارات طولانی و تخصصی.
                                    </p>
                                  </div>
                                </CardContent>
                              </Card>

                              <Card>
                                <CardContent className="p-4 flex items-start">
                                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center ml-3 flex-shrink-0">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="text-primary"
                                    >
                                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                    </svg>
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-1">راحتی استفاده</h4>
                                    <p className="text-sm text-muted-foreground">
                                      بدون نیاز به تایپ، حتی هنگام حرکت یا زمانی که دستان شما مشغول است.
                                    </p>
                                  </div>
                                </CardContent>
                              </Card>

                              <Card>
                                <CardContent className="p-4 flex items-start">
                                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center ml-3 flex-shrink-0">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="text-primary"
                                    >
                                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                                      <polyline points="14 2 14 8 20 8"></polyline>
                                    </svg>
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-1">دقت بالا</h4>
                                    <p className="text-sm text-muted-foreground">
                                      تشخیص دقیق کلمات تخصصی و اصطلاحات فنی صنعتی.
                                    </p>
                                  </div>
                                </CardContent>
                              </Card>

                              <Card>
                                <CardContent className="p-4 flex items-start">
                                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center ml-3 flex-shrink-0">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="text-primary"
                                    >
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="m16 8-8 8"></path>
                                      <path d="m8 8 8 8"></path>
                                    </svg>
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-1">کاهش خطا</h4>
                                    <p className="text-sm text-muted-foreground">
                                      کاهش خطاهای تایپی در جستجوی اصطلاحات تخصصی و فنی.
                                    </p>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          </div>

                          <div className="flex justify-end">
                            <Button onClick={() => setGuideActiveStep(2)} className="flex items-center gap-2">
                              مرحله بعد
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* مرحله دوم - نحوه استفاده */}
                      {guideActiveStep === 2 && (
                        <div className="space-y-6 animate-in fade-in-50 duration-300">
                          <div className="bg-muted/30 rounded-lg p-6">
                            <h3 className="font-medium text-lg mb-4">نحوه استفاده از جستجوی صوتی</h3>

                            <div className="relative mb-8">
                              <div className="flex justify-between mb-2">
                                <Button
                                  variant={isPlayingDemo ? "outline" : "default"}
                                  size="sm"
                                  className="flex items-center gap-2"
                                  onClick={() => {
                                    if (isPlayingDemo) {
                                      setIsPlayingDemo(false)
                                      if (demoIntervalRef.current) {
                                        clearInterval(demoIntervalRef.current)
                                      }
                                    } else {
                                      setIsPlayingDemo(true)
                                      setDemoProgress(0)
                                      demoIntervalRef.current = setInterval(() => {
                                        setDemoProgress((prev) => {
                                          if (prev >= 100) {
                                            setIsPlayingDemo(false)
                                            if (demoIntervalRef.current) {
                                              clearInterval(demoIntervalRef.current)
                                            }
                                            return 0
                                          }
                                          return prev + 1
                                        })
                                      }, 50)
                                    }
                                  }}
                                >
                                  {isPlayingDemo ? (
                                    <>
                                      <Pause className="h-4 w-4" />
                                      توقف نمایش
                                    </>
                                  ) : (
                                    <>
                                      <Play className="h-4 w-4" />
                                      نمایش مراحل
                                    </>
                                  )}
                                </Button>
                                <span className="text-sm text-muted-foreground">{demoProgress}%</span>
                              </div>

                              <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-primary transition-all"
                                  style={{ width: `${demoProgress}%` }}
                                ></div>
                              </div>

                              <div className="mt-6 border rounded-lg overflow-hidden">
                                <div className="bg-muted p-2 flex items-center justify-between border-b">
                                  <div className="flex space-x-2 space-x-reverse">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                  </div>
                                  <div className="text-xs">نمایش مراحل جستجوی صوتی</div>
                                  <div></div>
                                </div>
                                <div className="p-6 bg-white relative h-64 flex items-center justify-center">
                                  {/* مرحله 1: کلیک روی آیکون میکروفون */}
                                  <div
                                    className={`absolute transition-all duration-500 ${
                                      demoProgress < 33 ? "opacity-100 scale-100" : "opacity-0 scale-95"
                                    }`}
                                  >
                                    <div className="flex items-center gap-4 bg-muted/30 p-4 rounded-lg">
                                      <div className="relative">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                          <Mic className="h-6 w-6 text-primary" />
                                        </div>
                                        {demoProgress > 10 && demoProgress < 33 && (
                                          <div className="absolute inset-0 animate-ping rounded-full bg-primary/20"></div>
                                        )}
                                      </div>
                                      <div className="text-right">
                                        <h4 className="font-medium">مرحله اول: کلیک روی آیکون میکروفون</h4>
                                        <p className="text-sm text-muted-foreground mt-1">
                                          روی آیکون میکروفون در کنار جعبه جستجو کلیک کنید تا جستجوی صوتی فعال شود.
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                  {/* مرحله 2: صحبت کردن */}
                                  <div
                                    className={`absolute transition-all duration-500 ${
                                      demoProgress >= 33 && demoProgress < 66
                                        ? "opacity-100 scale-100"
                                        : "opacity-0 scale-95"
                                    }`}
                                  >
                                    <div className="flex items-center gap-4 bg-muted/30 p-4 rounded-lg">
                                      <div className="relative">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                          <Volume2 className="h-6 w-6 text-primary" />
                                        </div>
                                        {demoProgress >= 33 && demoProgress < 66 && (
                                          <div className="absolute -inset-2">
                                            <div className="w-16 h-16 rounded-full border-4 border-primary/30 animate-ping"></div>
                                          </div>
                                        )}
                                      </div>
                                      <div className="text-right">
                                        <h4 className="font-medium">مرحله دوم: صحبت کردن</h4>
                                        <p className="text-sm text-muted-foreground mt-1">
                                          پس از فعال شدن میکروفون، عبارت مورد نظر خود را به صورت واضح بیان کنید.
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                  {/* مرحله 3: مشاهده نتایج */}
                                  <div
                                    className={`absolute transition-all duration-500 ${
                                      demoProgress >= 66 ? "opacity-100 scale-100" : "opacity-0 scale-95"
                                    }`}
                                  >
                                    <div className="flex items-center gap-4 bg-muted/30 p-4 rounded-lg">
                                      <div className="relative">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                          <Sparkles className="h-6 w-6 text-primary" />
                                        </div>
                                      </div>
                                      <div className="text-right">
                                        <h4 className="font-medium">مرحله سوم: مشاهده نتایج</h4>
                                        <p className="text-sm text-muted-foreground mt-1">
                                          متن تشخیص داده شده در جعبه جستجو نمایش داده می‌شود و می‌توانید نتایج را مشاهده
                                          کنید.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="mt-8 space-y-4">
                              <h3 className="font-medium text-lg">مراحل استفاده از جستجوی صوتی:</h3>
                              <div className="space-y-4">
                                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                                    1
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-1">کلیک روی آیکون میکروفون</h4>
                                    <p className="text-sm text-muted-foreground">
                                      روی آیکون میکروفون در کنار جعبه جستجو کلیک کنید. دکمه میکروفون به رنگ قرمز تغییر
                                      می‌کند که نشان‌دهنده فعال بودن حالت ضبط صدا است.
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                                    2
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-1">بیان واضح عبارت جستجو</h4>
                                    <p className="text-sm text-muted-foreground">
                                      پس از فعال شدن میکروفون، عبارت مورد نظر خود را به صورت واضح و با صدای رسا بیان
                                      کنید. برای مثال: "پمپ سانتریفیوژ صنعتی" یا "گیربکس حلزونی با توان 5 کیلووات".
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                                    3
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-1">بررسی و تأیید متن تشخیص داده شده</h4>
                                    <p className="text-sm text-muted-foreground">
                                      پس از پایان صحبت، متن تشخیص داده شده در جعبه جستجو نمایش داده می‌شود. در صورت صحیح
                                      بودن، دکمه جستجو را کلیک کنید یا کلید Enter را فشار دهید.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-between">
                            <Button
                              variant="outline"
                              onClick={() => setGuideActiveStep(1)}
                              className="flex items-center gap-2"
                            >
                              <ChevronLeft className="h-4 w-4" />
                              مرحله قبل
                            </Button>
                            <Button onClick={() => setGuideActiveStep(3)} className="flex items-center gap-2">
                              مرحله بعد
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* مرحله سوم - نکات و ترفندها */}
                      {guideActiveStep === 3 && (
                        <div className="space-y-6 animate-in fade-in-50 duration-300">
                          <div className="bg-muted/30 rounded-lg p-6">
                            <h3 className="font-medium text-lg mb-4">نکات و ترفندهای جستجوی صوتی</h3>

                            <div className="space-y-4">
                              <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                  <AccordionTrigger className="hover:bg-muted/50 px-4 rounded-lg">
                                    <div className="flex items-center gap-2">
                                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Info className="h-4 w-4 text-primary" />
                                      </div>
                                      <span>چگونه دقت تشخیص صدا را افزایش دهم؟</span>
                                    </div>
                                  </AccordionTrigger>
                                  <AccordionContent className="px-14">
                                    <ul className="list-disc space-y-2 text-muted-foreground">
                                      <li>در محیطی با صدای کم و بدون نویز صحبت کنید.</li>
                                      <li>با صدای واضح و شمرده صحبت کنید.</li>
                                      <li>
                                        میکروفون را در فاصله مناسب (حدود 15 تا 20 سانتی‌متر) از دهان خود قرار دهید.
                                      </li>
                                      <li>از اصطلاحات دقیق و کامل استفاده کنید.</li>
                                    </ul>
                                  </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                  <AccordionTrigger className="hover:bg-muted/50 px-4 rounded-lg">
                                    <div className="flex items-center gap-2">
                                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <AlertCircle className="h-4 w-4 text-primary" />
                                      </div>
                                      <span>چرا جستجوی صوتی کار نمی‌کند؟</span>
                                    </div>
                                  </AccordionTrigger>
                                  <AccordionContent className="px-14">
                                    <ul className="list-disc space-y-2 text-muted-foreground">
                                      <li>
                                        مطمئن شوید که مرورگر شما از جستجوی صوتی پشتیبانی می‌کند (Chrome، Edge، Safari و
                                        Firefox جدید).
                                      </li>
                                      <li>دسترسی میکروفون را در مرورگر خود فعال کنید.</li>
                                      <li>اتصال اینترنت خود را بررسی کنید.</li>
                                      <li>در صورت استفاده از VPN، آن را موقتاً غیرفعال کنید.</li>
                                    </ul>
                                  </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3">
                                  <AccordionTrigger className="hover:bg-muted/50 px-4 rounded-lg">
                                    <div className="flex items-center gap-2">
                                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <HelpCircle className="h-4 w-4 text-primary" />
                                      </div>
                                      <span>چه عباراتی برای جستجوی صوتی مناسب هستند؟</span>
                                    </div>
                                  </AccordionTrigger>
                                  <AccordionContent className="px-14">
                                    <div className="space-y-2 text-muted-foreground">
                                      <p>عبارات زیر نمونه‌هایی از جستجوهای صوتی موفق هستند:</p>
                                      <ul className="list-disc space-y-1 pr-6">
                                        <li>"پمپ سانتریفیوژ با دبی 50 متر مکعب بر ساعت"</li>
                                        <li>"گیربکس حلزونی با نسبت 1 به 40"</li>
                                        <li>"الکتروموتور سه فاز 15 کیلووات"</li>
                                        <li>"ابزار اندازه‌گیری فشار مخزن"</li>
                                      </ul>
                                    </div>
                                  </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4">
                                  <AccordionTrigger className="hover:bg-muted/50 px-4 rounded-lg">
                                    <div className="flex items-center gap-2">
                                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Sparkles className="h-4 w-4 text-primary" />
                                      </div>
                                      <span>ترفندهای پیشرفته جستجوی صوتی</span>
                                    </div>
                                  </AccordionTrigger>
                                  <AccordionContent className="px-14">
                                    <ul className="list-disc space-y-2 text-muted-foreground">
                                      <li>برای جستجوی دقیق‌تر، مشخصات فنی محصول را بیان کنید.</li>
                                      <li>
                                        می‌توانید از عبارات "فیلتر بر اساس..." برای اعمال فیلترهای جستجو استفاده کنید.
                                      </li>
                                      <li>برای مقایسه محصولات، از عبارت "مقایسه بین X و Y" استفاده کنید.</li>
                                      <li>
                                        برای محدود کردن نتایج به محصولات موجود، عبارت "فقط موجود در انبار" را اضافه
                                        کنید.
                                      </li>
                                    </ul>
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>

                            <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                              <h4 className="font-medium mb-2 flex items-center">
                                <Sparkles className="h-5 w-5 text-primary ml-2" />
                                نکته طلایی
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                اگر جستجوی صوتی نتیجه دلخواه شما را نداد، می‌توانید از پیشنهادات جایگزین که سیستم ارائه
                                می‌دهد استفاده کنید. این پیشنهادات بر اساس تشخیص‌های مختلف از گفتار شما ایجاد می‌شوند.
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-between">
                            <Button
                              variant="outline"
                              onClick={() => setGuideActiveStep(2)}
                              className="flex items-center gap-2"
                            >
                              <ChevronLeft className="h-4 w-4" />
                              مرحله قبل
                            </Button>
                            <Button onClick={() => setIsGuideOpen(false)}>بستن راهنما</Button>
                          </div>
                        </div>
                      )}
                    </TabsContent>

                    <TabsContent value="image" className="space-y-6">
                      {/* نوار پیشرفت مراحل */}
                      <div className="relative">
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary transition-all duration-300"
                            style={{ width: `${(guideActiveStep / 3) * 100}%` }}
                          />
                        </div>
                        <div className="flex justify-between mt-1">
                          <span
                            className={`text-xs ${guideActiveStep >= 1 ? "text-primary font-medium" : "text-muted-foreground"}`}
                          >
                            آشنایی با جستجوی تصویری
                          </span>
                          <span
                            className={`text-xs ${guideActiveStep >= 2 ? "text-primary font-medium" : "text-muted-foreground"}`}
                          >
                            نحوه استفاده
                          </span>
                          <span
                            className={`text-xs ${guideActiveStep >= 3 ? "text-primary font-medium" : "text-muted-foreground"}`}
                          >
                            نکات و ترفندها
                          </span>
                        </div>
                      </div>

                      {/* مرحله اول - آشنایی با جستجوی تصویری */}
                      {guideActiveStep === 1 && (
                        <div className="space-y-6 animate-in fade-in-50 duration-300">
                          <div className="text-center">
                            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                              <ImageIcon className="h-10 w-10 text-primary" />
                            </div>
                            <h2 className="text-xl font-bold mb-2">جستجوی تصویری چیست؟</h2>
                            <p className="text-muted-foreground max-w-lg mx-auto">
                              با استفاده از قابلیت جستجوی تصویری، می‌توانید با آپلود تصویر محصول مورد نظر خود، محصولات
                              مشابه را پیدا کنید. این قابلیت از هوش مصنوعی برای تشخیص و مقایسه تصاویر استفاده می‌کند.
                            </p>
                          </div>

                          <div className="bg-muted/30 rounded-lg p-6">
                            <h3 className="font-medium text-lg mb-4 flex items-center">
                              <CheckCircle2 className="h-5 w-5 text-primary ml-2" />
                              مزایای جستجوی تصویری
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <Card>
                                <CardContent className="p-4 flex items-start">
                                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center ml-3 flex-shrink-0">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="text-primary"
                                    >
                                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-1">دقت بالا</h4>
                                    <p className="text-sm text-muted-foreground">
                                      تشخیص دقیق محصولات بر اساس شکل، رنگ و ویژگی‌های بصری.
                                    </p>
                                  </div>
                                </CardContent>
                              </Card>

                              <Card>
                                <CardContent className="p-4 flex items-start">
                                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center ml-3 flex-shrink-0">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="text-primary"
                                    >
                                      <path d="M12 20v-6M6 20V10M18 20V4"></path>
                                    </svg>
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-1">سرعت جستجو</h4>
                                    <p className="text-sm text-muted-foreground">
                                      یافتن سریع محصولات مشابه بدون نیاز به توصیف کلامی.
                                    </p>
                                  </div>
                                </CardContent>
                              </Card>

                              <Card>
                                <CardContent className="p-4 flex items-start">
                                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center ml-3 flex-shrink-0">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="text-primary"
                                    >
                                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                    </svg>
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-1">راحتی استفاده</h4>
                                    <p className="text-sm text-muted-foreground">
                                      بدون نیاز به دانستن نام دقیق محصول، فقط با تصویر جستجو کنید.
                                    </p>
                                  </div>
                                </CardContent>
                              </Card>

                              <Card>
                                <CardContent className="p-4 flex items-start">
                                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center ml-3 flex-shrink-0">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="text-primary"
                                    >
                                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                                      <polyline points="14 2 14 8 20 8"></polyline>
                                    </svg>
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-1">تنوع منابع</h4>
                                    <p className="text-sm text-muted-foreground">
                                      امکان آپلود از فایل، دوربین یا آدرس اینترنتی تصویر.
                                    </p>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          </div>

                          <div className="flex justify-end">
                            <Button onClick={() => setGuideActiveStep(2)} className="flex items-center gap-2">
                              مرحله بعد
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* مرحله دوم - نحوه استفاده */}
                      {guideActiveStep === 2 && (
                        <div className="space-y-6 animate-in fade-in-50 duration-300">
                          <div className="bg-muted/30 rounded-lg p-6">
                            <h3 className="font-medium text-lg mb-4">نحوه استفاده از جستجوی تصویری</h3>

                            <div className="space-y-4">
                              <h3 className="font-medium text-lg">مراحل استفاده از جستجوی تصویری:</h3>
                              <div className="space-y-4">
                                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                                    1
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-1">کلیک روی آیکون دوربین</h4>
                                    <p className="text-sm text-muted-foreground">
                                      روی آیکون دوربین در کنار جعبه جستجو کلیک کنید تا منوی جستجوی تصویری باز شود.
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                                    2
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-1">انتخاب روش آپلود تصویر</h4>
                                    <p className="text-sm text-muted-foreground">یکی از سه روش زیر را انتخاب کنید:</p>
                                    <ul className="list-disc pr-6 mt-2 space-y-1 text-sm text-muted-foreground">
                                      <li>آپلود فایل از کامپیوتر</li>
                                      <li>گرفتن عکس با دوربین</li>
                                      <li>وارد کردن آدرس اینترنتی تصویر</li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                                    3
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-1">آپلود و پیش‌نمایش تصویر</h4>
                                    <p className="text-sm text-muted-foreground">
                                      پس از انتخاب تصویر، پیش‌نمایش آن نمایش داده می‌شود. مطمئن شوید که تصویر واضح و کیفیت
                                      مناسبی دارد.
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                                    4
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-1">شروع جستجوی تصویری</h4>
                                    <p className="text-sm text-muted-foreground">
                                      روی دکمه "جستجوی تصویری" کلیک کنید تا سیستم شروع به تحلیل تصویر و یافتن محصولات
                                      مشابه کند.
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                                    5
                                  </div>
                                  <div>
                                    <h4 className="font-medium mb-1">مشاهده نتایج</h4>
                                    <p className="text-sm text-muted-foreground">
                                      نتایج جستجو به همراه درصد شباهت نمایش داده می‌شود. محصولات بر اساس میزان شباهت مرتب
                                      شده‌اند.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-between">
                            <Button
                              variant="outline"
                              onClick={() => setGuideActiveStep(1)}
                              className="flex items-center gap-2"
                            >
                              <ChevronLeft className="h-4 w-4" />
                              مرحله قبل
                            </Button>
                            <Button onClick={() => setGuideActiveStep(3)} className="flex items-center gap-2">
                              مرحله بعد
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* مرحله سوم - نکات و ترفندها */}
                      {guideActiveStep === 3 && (
                        <div className="space-y-6 animate-in fade-in-50 duration-300">
                          <div className="bg-muted/30 rounded-lg p-6">
                            <h3 className="font-medium text-lg mb-4">نکات و ترفندهای جستجوی تصویری</h3>

                            <div className="space-y-4">
                              <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                  <AccordionTrigger className="hover:bg-muted/50 px-4 rounded-lg">
                                    <div className="flex items-center gap-2">
                                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Info className="h-4 w-4 text-primary" />
                                      </div>
                                      <span>چگونه کیفیت تصویر را بهبود دهم؟</span>
                                    </div>
                                  </AccordionTrigger>
                                  <AccordionContent className="px-14">
                                    <ul className="list-disc space-y-2 text-muted-foreground">
                                      <li>از تصاویر با وضوح بالا (حداقل 800x600 پیکسل) استفاده کنید.</li>
                                      <li>مطمئن شوید که محصول در مرکز تصویر قرار دارد.</li>
                                      <li>از نور کافی برای گرفتن عکس استفاده کنید.</li>
                                      <li>پس‌زمینه تصویر را ساده و بدون پیچیدگی انتخاب کنید.</li>
                                      <li>از زوایای مختلف عکس بگیرید تا نتایج بهتری دریافت کنید.</li>
                                    </ul>
                                  </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                  <AccordionTrigger className="hover:bg-muted/50 px-4 rounded-lg">
                                    <div className="flex items-center gap-2">
                                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <AlertCircle className="h-4 w-4 text-primary" />
                                      </div>
                                      <span>چرا نتایج جستجوی تصویری دقیق نیست؟</span>
                                    </div>
                                  </AccordionTrigger>
                                  <AccordionContent className="px-14">
                                    <ul className="list-disc space-y-2 text-muted-foreground">
                                      <li>کیفیت تصویر پایین یا تار بودن آن می‌تواند دقت را کاهش دهد.</li>
                                      <li>وجود اجسام اضافی در تصویر ممکن است سیستم را گیج کند.</li>
                                      <li>زاویه گرفتن عکس ممکن است با تصاویر موجود در پایگاه داده متفاوت باشد.</li>
                                      <li>محصولات بسیار جدید یا نادر ممکن است در پایگاه داده موجود نباشند.</li>
                                    </ul>
                                  </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3">
                                  <AccordionTrigger className="hover:bg-muted/50 px-4 rounded-lg">
                                    <div className="flex items-center gap-2">
                                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <HelpCircle className="h-4 w-4 text-primary" />
                                      </div>
                                      <span>چه نوع تصاویری برای جستجو مناسب هستند؟</span>
                                    </div>
                                  </AccordionTrigger>
                                  <AccordionContent className="px-14">
                                    <div className="space-y-2 text-muted-foreground">
                                      <p>تصاویر زیر برای جستجوی تصویری مناسب هستند:</p>
                                      <ul className="list-disc space-y-1 pr-6">
                                        <li>تصاویر محصولات صنعتی با جزئیات واضح</li>
                                        <li>عکس‌های گرفته شده از زوایای استاندارد</li>
                                        <li>تصاویر با پس‌زمینه سفید یا ساده</li>
                                        <li>عکس‌های کاتالوگ یا بروشور محصولات</li>
                                      </ul>
                                    </div>
                                  </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4">
                                  <AccordionTrigger className="hover:bg-muted/50 px-4 rounded-lg">
                                    <div className="flex items-center gap-2">
                                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Sparkles className="h-4 w-4 text-primary" />
                                      </div>
                                      <span>ترفندهای پیشرفته جستجوی تصویری</span>
                                    </div>
                                  </AccordionTrigger>
                                  <AccordionContent className="px-14">
                                    <ul className="list-disc space-y-2 text-muted-foreground">
                                      <li>برای نتایج بهتر، از چندین تصویر از ز��ایای مختلف استفاده کنید.</li>
                                      <li>
                                        اگر محصول دارای برچسب یا مارک مشخصی است، مطمئن شوید که در تصویر قابل مشاهده
                                        باشد.
                                      </li>
                                      <li>
                                        برای محصولات پیچیده، سعی کنید تصویری انتخاب کنید که ویژگی‌های منحصر به فرد آن را
                                        نشان دهد.
                                      </li>
                                      <li>
                                        از تاریخچه جستجوهای تصویری خود برای دسترسی سریع به جستجوهای قبلی استفاده کنید.
                                      </li>
                                    </ul>
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>

                            <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                              <h4 className="font-medium mb-2 flex items-center">
                                <Sparkles className="h-5 w-5 text-primary ml-2" />
                                نکته طلایی
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                برای بهترین نتایج، ترکیب جستجوی تصویری و متنی را امتحان کنید. پس از دریافت نتایج جستجوی
                                تصویری، می‌توانید با اضافه کردن کلمات کلیدی مرتبط، نتایج را بیشتر تصفیه کنید.
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-between">
                            <Button
                              variant="outline"
                              onClick={() => setGuideActiveStep(2)}
                              className="flex items-center gap-2"
                            >
                              <ChevronLeft className="h-4 w-4" />
                              مرحله قبل
                            </Button>
                            <Button onClick={() => setIsGuideOpen(false)}>بستن راهنما</Button>
                          </div>
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <Button
            onClick={handleSearch}
            className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-l-lg border-r border-primary/20"
          >
            جستجو
          </Button>
        </div>

        {/* نمایش پیشنهادات خودکار */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg mt-1 z-50">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                className="w-full text-right px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-600 last:border-b-0"
                onClick={() => {
                  setSearchTerm(suggestion)
                  setShowSuggestions(false)
                  handleSearch()
                }}
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        {/* نمایش جستجوهای اخیر و محبوب */}
        {isSearchFocused && !searchTerm && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg mt-1 z-50 p-4">
            {recentSearches.length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">جستجوهای اخیر</h3>
                <div className="space-y-1">
                  {recentSearches.map((search, index) => (
                    <div key={index} className="flex items-center justify-between group">
                      <button
                        className="flex-1 text-right text-sm text-gray-600 dark:text-gray-400 hover:text-primary py-1"
                        onClick={() => {
                          setSearchTerm(search)
                          handleSearch()
                        }}
                      >
                        {search}
                      </button>
                      <button
                        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 p-1"
                        onClick={() => removeRecentSearch(search)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">جستجوهای محبوب</h3>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((search, index) => (
                  <button
                    key={index}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary hover:text-white transition-colors"
                    onClick={() => {
                      setSearchTerm(search)
                      handleSearch()
                    }}
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* فیلد مخفی برای آپلود فایل */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          accept="image/*"
          className="hidden"
          aria-label="انتخاب تصویر برای جستجو"
        />

        {/* منوی آپلود تصویر */}
        {showImageUploadOptions && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-medium mb-4">جستجوی تصویری</h3>
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                  onClick={() => {
                    if (fileInputRef.current) {
                      fileInputRef.current.click()
                    }
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  آپلود از کامپیوتر
                </Button>

                <Button variant="outline" className="w-full justify-start bg-transparent" onClick={handleCameraCapture}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2"
                  >
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                    <circle cx="12" cy="13" r="4"></circle>
                  </svg>
                  گرفتن عکس با دوربین
                </Button>

                <div className="space-y-2">
                  <input
                    type="url"
                    placeholder="آدرس اینترنتی تصویر..."
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    onClick={handleImageUrlSearch}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                    استفاده از آدرس اینترنتی
                  </Button>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <Button variant="ghost" onClick={() => setShowImageUploadOptions(false)}>
                  بستن
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* نمایش دوربین */}
        {cameraActive && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">گرفتن عکس با دوربین</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setCameraActive(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </Button>
              </div>

              <div className="relative">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full h-64 bg-gray-100 rounded-lg object-cover"
                />
                <canvas ref={canvasRef} className="hidden" />
              </div>

              <div className="flex justify-center mt-4">
                <Button onClick={takePicture} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                    <circle cx="12" cy="13" r="4"></circle>
                  </svg>
                  گرفتن عکس
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* نمایش پیش‌نمایش تصویر و نتایج جستجوی تصویری */}
        {imagePreview && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">جستجوی تصویری</h3>
                  <Button variant="ghost" size="icon" onClick={clearImageSearch}>
                    ×
                  </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* پیش‌نمایش تصویر */}
                  <div>
                    <h4 className="font-medium mb-2">تصویر انتخاب شده</h4>
                    <div className="border rounded-lg overflow-hidden">
                      <img
                        src={imagePreview || "/placeholder.svg"}
                        alt="تصویر انتخاب شده"
                        className="w-full h-64 object-contain bg-gray-50"
                      />
                    </div>

                    {!isImageSearching && imageSearchResults.length === 0 && (
                      <Button onClick={performImageSearch} className="w-full mt-4">
                        شروع جستجوی تصویری
                      </Button>
                    )}

                    {isImageSearching && (
                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>در حال جستجو...</span>
                          <span>{imageSearchProgress}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary transition-all duration-300"
                            style={{ width: `${imageSearchProgress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* نتایج جستجو */}
                  <div>
                    <h4 className="font-medium mb-2">نتایج جستجو ({imageSearchResults.length} محصول)</h4>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {imageSearchResults.map((result) => (
                        <div key={result.id} className="border rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
                          <div className="flex gap-3">
                            <img
                              src={result.image || "/placeholder.svg"}
                              alt={result.name}
                              className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h5 className="font-medium text-sm truncate">{result.name}</h5>
                              <p className="text-xs text-gray-500 mt-1">{result.category}</p>
                              <div className="flex items-center justify-between mt-2">
                                <span className="text-sm font-medium text-primary">{formatPrice(result.price)}</span>
                                <div className="flex items-center gap-2">
                                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                                    {result.similarity}% مشابه
                                  </span>
                                  {result.inStock ? (
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                      موجود
                                    </span>
                                  ) : (
                                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                                      ناموجود
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* تاریخچه جستجوهای تصویری */}
                {imageSearchHistory.length > 0 && (
                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-medium mb-3">تاریخچه جستجوهای تصویری</h4>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {imageSearchHistory.map((item) => (
                        <button
                          key={item.id}
                          className="flex-shrink-0 border rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-700"
                          onClick={() => {
                            setImagePreview(item.preview)
                            setSelectedImage(null)
                          }}
                        >
                          <img
                            src={item.preview || "/placeholder.svg"}
                            alt="تاریخچه جستجو"
                            className="w-16 h-16 object-cover rounded"
                          />
                          <p className="text-xs text-gray-500 mt-1 text-center">{formatDate(item.date)}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* نمایش خطاهای جستجوی صوتی */}
        {voiceSearchError && (
          <div className="absolute top-full left-0 right-0 bg-red-50 border border-red-200 rounded-lg p-3 mt-1 z-50">
            <div className="flex items-center gap-2 text-red-700">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">{voiceSearchError}</span>
            </div>
          </div>
        )}

        {/* نمایش پیشنهادات جستجوی صوتی */}
        {voiceSearchSuggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg mt-1 z-50 p-4">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">پیشنهادات جایگزین:</h3>
            <div className="space-y-1">
              {voiceSearchSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="w-full text-right text-sm text-gray-600 dark:text-gray-400 hover:text-primary py-1 px-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700"
                  onClick={() => useVoiceSuggestion(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* نمایش خطاهای جستجوی تصویری */}
        {imageSearchError && (
          <div className="absolute top-full left-0 right-0 bg-red-50 border border-red-200 rounded-lg p-3 mt-1 z-50">
            <div className="flex items-center gap-2 text-red-700">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">{imageSearchError}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
