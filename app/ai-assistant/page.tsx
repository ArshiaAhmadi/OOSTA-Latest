"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Bot,
  Send,
  Mic,
  MicOff,
  Maximize2,
  Minimize2,
  Star,
  TrendingUp,
  Sparkles,
  Brain,
  ThumbsUp,
  ThumbsDown,
  Copy,
  Volume2,
  VolumeX,
  Phone,
  Mail,
  Activity,
  Zap,
  Users,
  Clock,
  Award,
  Lightbulb,
  Target,
  Rocket,
  Palette,
  Moon,
  Sun,
  Wand2,
  Heart,
  Share2,
  Download,
  Bookmark,
  ChevronDown,
  HelpCircle,
} from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { motion, AnimatePresence } from "framer-motion"

interface Message {
  id: string
  type: "user" | "assistant"
  content: string
  timestamp: Date
  confidence?: number
  suggestions?: string[]
  products?: Product[]
  isTyping?: boolean
}

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  rating: number
  inStock: boolean
}

interface Theme {
  name: string
  primary: string
  secondary: string
  accent: string
  background: string
  icon: React.ReactNode
}

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      type: "assistant",
      content:
        "سلام! من دستیار هوشمند اوستا هستم 🤖 چطور می‌تونم کمکتون کنم؟ می‌تونید از من در مورد محصولات صنعتی، مشاوره خرید، یا هر سوال فنی دیگری بپرسید.",
      timestamp: new Date(),
      confidence: 100,
      suggestions: [
        "پمپ سانتریفیوژ مناسب برای کارخانه",
        "مقایسه گیربکس‌های مختلف",
        "راهنمای انتخاب الکتروموتور",
        "قیمت ابزارآلات صنعتی",
      ],
    },
  ])

  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [activeTab, setActiveTab] = useState("chat")
  const [voiceEnabled, setVoiceEnabled] = useState(true)
  const [showSettings, setShowSettings] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState(0)

  const themes: Theme[] = [
    {
      name: "اوستا کلاسیک",
      primary: "from-[#253F8F] to-[#F18F20]",
      secondary: "from-[#253F8F]/10 to-[#F18F20]/10",
      accent: "from-[#253F8F] to-[#253F8F]/80",
      background: "from-[#253F8F]/5 via-white to-[#F18F20]/5",
      icon: <Sparkles className="h-4 w-4" />,
    },
    {
      name: "اوستا مدرن",
      primary: "from-[#F18F20] to-[#253F8F]",
      secondary: "from-[#F18F20]/10 to-[#253F8F]/10",
      accent: "from-[#F18F20] to-[#F18F20]/80",
      background: "from-[#F18F20]/5 via-white to-[#253F8F]/5",
      icon: <Sun className="h-4 w-4" />,
    },
    {
      name: "اوستا حرفه‌ای",
      primary: "from-[#253F8F] via-[#253F8F]/80 to-[#F18F20]/60",
      secondary: "from-[#253F8F]/15 to-[#253F8F]/5",
      accent: "from-[#253F8F] to-[#253F8F]/90",
      background: "from-[#253F8F]/8 via-gray-50 to-[#253F8F]/3",
      icon: <Heart className="h-4 w-4" />,
    },
    {
      name: "اوستا انرژی",
      primary: "from-[#F18F20] via-[#F18F20]/80 to-[#253F8F]/60",
      secondary: "from-[#F18F20]/15 to-[#F18F20]/5",
      accent: "from-[#F18F20] to-[#F18F20]/90",
      background: "from-[#F18F20]/8 via-gray-50 to-[#F18F20]/3",
      icon: <Moon className="h-4 w-4" />,
    },
  ]

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Sample data for dashboard
  const [stats] = useState({
    totalQuestions: 1247,
    successRate: 94,
    avgResponseTime: 1.2,
    userSatisfaction: 4.8,
    activeUsers: 156,
    todayQuestions: 89,
  })

  const [popularProducts] = useState<Product[]>([
    {
      id: "1",
      name: "پمپ سانتریفیوژ صنعتی CP-250",
      price: 11800000,
      image: "/industrial-pump.png",
      category: "پمپ‌ها",
      rating: 4.8,
      inStock: true,
    },
    {
      id: "2",
      name: "گیربکس حلزونی WG-40",
      price: 8500000,
      image: "/placeholder.svg?height=80&width=80&text=گیربکس",
      category: "گیربکس‌ها",
      rating: 4.6,
      inStock: true,
    },
    {
      id: "3",
      name: "الکتروموتور سه‌فاز 15kW",
      price: 6200000,
      image: "/electric-motors.png",
      category: "الکتروموتورها",
      rating: 4.9,
      inStock: false,
    },
  ])

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqData = [
    {
      question: "دستیار هوش مصنوعی اوستا چگونه می‌تواند در تعمیرات و پروژه‌های فنی به من کمک کند؟",
      answer:
        "دستیار هوش مصنوعی اوستا مانند یک مشاور فنی هوشمند و ۲۴ ساعته در کنار شماست. شما می‌توانید مشکل دستگاه یا پروژه خود را شرح دهید و این دستیار در سه مرحله کلیدی به شما کمک می‌کند:\n\n• شناسایی مشکل: به شما در عیب‌یابی و پیدا کردن علت اصلی خرابی کمک می‌کند.\n• معرفی قطعه دقیق: قطعه یدکی یا محصول مورد نیازتان را با مشخصات فنی دقیق به شما معرفی می‌کند.\n• راهنمایی فنی: به عنوان یک راهنمای قدم به قدم برای انجام پروژه‌های فنی، به خصوص برای علاقه‌مندان به کارهای فنی (DIY)، عمل می‌کند.",
    },
    {
      question: "دستگاه من خراب شده ولی مدل دقیق قطعه را نمی‌دانم، آیا هوش مصنوعی اوستا کمکی می‌کند؟",
      answer:
        'بله، دقیقاً! این یکی از اصلی‌ترین کاربردهای دستیار ماست. شما نیازی به دانستن نام یا مدل دقیق قطعه ندارید. کافیست مشکل دستگاه خود را توصیف کنید (مثلاً "پمپ آب کارخانه فشارش کم شده") یا مشخصات دستگاه را وارد کنید. هوش مصنوعی اوستا با تحلیل مشکل، به شما کمک می‌کند تا قطعه صحیح را شناسایی کنید.',
    },
    {
      question: "آیا استفاده از مشاوره فنی هوش مصنوعی اوستا هزینه‌ای دارد؟",
      answer:
        "خیر، استفاده از دستیار هوش مصنوعی اوستا به عنوان مشاور فنی رایگان در اختیار تمام کاربران قرار دارد. هدف ما ارائه دانش فنی و کمک به حل سریع مشکلات شماست تا با اطمینان کامل برای مراحل بعدی تصمیم بگیرید.",
    },
    {
      question: "آیا من که تخصص فنی زیادی ندارم هم می‌توانم از هوش مصنوعی اوستا استفاده کنم؟",
      answer:
        "قطعاً. این دستیار هوشمند برای تمام کاربران، از صاحبان خانه و علاقه‌مندان به کارهای فنی (DIY) گرفته تا متخصصین حرفه‌ای، طراحی شده است. زبان ساده و راهنمایی‌های گام به گام آن به شما کمک می‌کند تا مسائل فنی را بهتر درک کرده و با اعتماد به نفس بیشتری پروژه‌های خود را انجام دهید.",
    },
    {
      question: "اطلاعات فنی دستیار هوش مصنوعی اوستا چقدر دقیق و قابل اعتماد است؟",
      answer:
        "دستیار هوش مصنوعی ما بر روی پایگاه داده گسترده‌ای از کاتالوگ‌های فنی، دیتاشیت‌ها و راهنماهای تعمیراتی آموزش دیده است تا دقیق‌ترین اطلاعات ممکن را ارائه دهد. این ابزار یک مرجع قابل اعتماد و متخصص برای راهنمایی اولیه و ارائه راه‌حل است. با این حال، همیشه توصیه می‌شود برای کارهای بسیار حساس و پیچیده، از دانش یک متخصص فنی نیز بهره بگیرید.",
    },
    {
      question: "بسیار خب، هوش مصنوعی مشکل و قطعه مورد نیاز را شناسایی کرد. قدم بعدی چیست؟",
      answer:
        "اینجاست که قدرت واقعی اکوسیستم یکپارچه اوستا مشخص می‌شود! پس از شناسایی مشکل، دستیار هوش مصنوعی به صورت هوشمند شما را به مراحل بعدی هدایت می‌کند:\n\n• خرید کالا: لینک خرید مستقیم قطعه شناسایی شده را از فروشگاه آنلاین اوستا به شما نمایش می‌دهد.\n• استخدام متخصص: به شما این امکان را می‌دهد که با یک کلیک، درخواست خود را برای نصب یا تعمیر آن قطعه در پلتفرم اوستاکار ثبت کرده و یک متخصص تأیید صلاحیت‌شده پیدا کنید.",
    },
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        {
          content:
            "بر اساس نیاز شما، چندین گزینه مناسب پیدا کردم 🎯 پمپ سانتریفیوژ CP-250 با دبی 50 متر مکعب بر ساعت و فشار 8 بار برای کاربرد صنعتی شما مناسب است.",
          confidence: 92,
          suggestions: ["مشخصات فنی بیشتر", "قیمت و موجودی", "محصولات مشابه", "نصب و راه‌اندازی"],
          products: popularProducts.slice(0, 2),
        },
        {
          content:
            "برای انتخاب گیربکس مناسب، باید نسبت دور، توان مورد نیاز و نوع کاربرد را در نظر بگیریم 🔧 آیا می‌توانید مشخصات بیشتری از پروژه خود بدهید؟",
          confidence: 88,
          suggestions: ["نسبت دور مورد نیاز", "توان ورودی", "شرایط محیطی", "بودجه تقریبی"],
        },
        {
          content:
            "الکتروموتورهای سه‌فاز برای کاربردهای صنعتی بسیار مناسب هستند ⚡ بر اساس توان مورد نیاز شما، چندین مدل پیشنهاد می‌دهم.",
          confidence: 95,
          products: [popularProducts[2]],
        },
      ]

      const randomResponse = responses[Math.floor(Math.random() * responses.length)]

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: randomResponse.content,
        timestamp: new Date(),
        confidence: randomResponse.confidence,
        suggestions: randomResponse.suggestions,
        products: randomResponse.products,
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleVoiceToggle = () => {
    if (isListening) {
      setIsListening(false)
      toast({
        title: "ضبط صدا متوقف شد",
        description: "پیام صوتی شما دریافت شد",
      })
    } else {
      setIsListening(true)
      toast({
        title: "در حال گوش دادن...",
        description: "لطفاً سوال خود را بپرسید",
      })

      // Simulate voice recognition
      setTimeout(() => {
        setIsListening(false)
        setInputMessage("پمپ مناسب برای کارخانه سیمان")
      }, 3000)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion)
    inputRef.current?.focus()
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price) + " تومان"
  }

  const MessageActions = ({ message }: { message: Message }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300"
    >
      <Button
        variant="ghost"
        size="sm"
        className="h-7 w-7 p-0 hover:bg-green-100 dark:hover:bg-green-900/20 hover:scale-110 transition-all"
      >
        <ThumbsUp className="h-3 w-3 text-green-600" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="h-7 w-7 p-0 hover:bg-red-100 dark:hover:bg-red-900/20 hover:scale-110 transition-all"
      >
        <ThumbsDown className="h-3 w-3 text-red-600" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="h-7 w-7 p-0 hover:bg-blue-100 dark:hover:bg-blue-900/20 hover:scale-110 transition-all"
      >
        <Copy className="h-3 w-3 text-blue-600" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="h-7 w-7 p-0 hover:bg-purple-100 dark:hover:bg-purple-900/20 hover:scale-110 transition-all"
      >
        <Share2 className="h-3 w-3 text-purple-600" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="h-7 w-7 p-0 hover:bg-yellow-100 dark:hover:bg-yellow-900/20 hover:scale-110 transition-all"
      >
        <Bookmark className="h-3 w-3 text-yellow-600" />
      </Button>
    </motion.div>
  )

  const currentTheme = themes[selectedTheme]

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${currentTheme.background} dark:from-gray-900 dark:via-blue-900/50 dark:to-indigo-900/50 ${isFullscreen ? "fixed inset-0 z-50" : ""} transition-all duration-500`}
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
          className={`absolute top-20 left-20 w-72 h-72 bg-gradient-to-r ${currentTheme.primary} opacity-20 rounded-full blur-3xl`}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, delay: 5 }}
          className={`absolute top-40 right-20 w-96 h-96 bg-gradient-to-r ${currentTheme.primary} opacity-15 rounded-full blur-3xl`}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, delay: 10 }}
          className={`absolute bottom-20 left-1/2 w-80 h-80 bg-gradient-to-r ${currentTheme.primary} opacity-20 rounded-full blur-3xl`}
        />
      </div>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-40 shadow-2xl"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }} className="relative">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${currentTheme.primary} rounded-2xl flex items-center justify-center shadow-2xl`}
                >
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
                >
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="w-full h-full bg-green-400 rounded-full"
                  />
                </motion.div>
              </motion.div>
              <div>
                <motion.h1
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className={`text-3xl font-bold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent`}
                >
                  دستیار هوشمند اوستا
                </motion.h1>
                <motion.p
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 mt-1"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Sparkles className="h-4 w-4 text-yellow-500" />
                  </motion.div>
                  آماده پاسخگویی به سوالات شما • پشتیبانی ۲۴/۷
                </motion.p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 px-3 py-1 shadow-lg"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    className="w-2 h-2 bg-green-500 rounded-full mr-2"
                  />
                  آنلاین
                </Badge>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setVoiceEnabled(!voiceEnabled)}
                  className={`${voiceEnabled ? "text-green-600 bg-green-50 dark:bg-green-900/20" : "text-gray-400"} hover:scale-105 transition-all duration-300 shadow-lg`}
                >
                  {voiceEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSettings(!showSettings)}
                  className="hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <Palette className="h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative z-30 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Wand2 className="h-5 w-5" />
                  تنظیمات ظاهری
                </h3>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">انتخاب تم:</span>
                  <div className="flex gap-2">
                    {themes.map((theme, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedTheme(index)}
                        className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                          selectedTheme === index
                            ? "border-blue-500 shadow-lg"
                            : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 bg-gradient-to-r ${theme.primary} rounded-lg flex items-center justify-center`}
                        >
                          {theme.icon}
                        </div>
                        <div className="text-xs mt-1 text-center">{theme.name}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Chat Area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="h-[650px] flex flex-col bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardHeader
                className={`pb-4 bg-gradient-to-r ${currentTheme.secondary} dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-2 bg-gradient-to-br ${currentTheme.primary} rounded-xl shadow-lg`}
                    >
                      <Brain className="h-5 w-5 text-white" />
                    </motion.div>
                    <CardTitle
                      className={`text-xl bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent`}
                    >
                      گفتگو با دستیار هوشمند
                    </CardTitle>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 shadow-md"
                      >
                        <Zap className="h-3 w-3 mr-1" />
                        سریع
                      </Badge>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Badge
                        variant="secondary"
                        className="bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400 shadow-md"
                      >
                        <Target className="h-3 w-3 mr-1" />
                        دقیق
                      </Badge>
                    </motion.div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col p-0">
                {/* Messages */}
                <div ref={chatContainerRef} className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
                  <AnimatePresence>
                    {messages.map((message, index) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className={`flex gap-4 group ${message.type === "user" ? "justify-end" : "justify-start"}`}
                      >
                        {message.type === "assistant" && (
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className={`w-10 h-10 bg-gradient-to-br ${currentTheme.primary} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                          >
                            <Bot className="h-5 w-5 text-white" />
                          </motion.div>
                        )}

                        <div className={`max-w-[80%] ${message.type === "user" ? "order-1" : ""}`}>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            className={`p-5 rounded-3xl shadow-lg transition-all duration-300 ${
                              message.type === "user"
                                ? `bg-gradient-to-r ${currentTheme.primary} text-white ml-auto`
                                : "bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
                            }`}
                          >
                            <p className="text-sm leading-relaxed">{message.content}</p>

                            {message.confidence && message.type === "assistant" && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600"
                              >
                                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                                  <span className="flex items-center gap-1">
                                    <Award className="h-3 w-3" />
                                    اعتماد پاسخ
                                  </span>
                                  <span className="font-bold">{message.confidence}%</span>
                                </div>
                                <Progress value={message.confidence} className="h-2" />
                              </motion.div>
                            )}
                          </motion.div>

                          {/* Suggestions */}
                          {message.suggestions && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                              className="mt-4 flex flex-wrap gap-2"
                            >
                              {message.suggestions.map((suggestion, index) => (
                                <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-xs h-8 bg-white/70 hover:bg-white border-blue-200 hover:border-blue-400 hover:text-blue-600 transition-all duration-200 shadow-md"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                  >
                                    <Lightbulb className="h-3 w-3 mr-1" />
                                    {suggestion}
                                  </Button>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}

                          {/* Product Suggestions */}
                          {message.products && (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 }}
                              className="mt-5 space-y-3"
                            >
                              {message.products.map((product, index) => (
                                <motion.div
                                  key={product.id}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  whileHover={{ scale: 1.02, y: -2 }}
                                >
                                  <Card
                                    className={`p-4 bg-gradient-to-r ${currentTheme.secondary} hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-700`}
                                  >
                                    <div className="flex items-center gap-4">
                                      <div className="relative">
                                        <motion.img
                                          whileHover={{ scale: 1.1 }}
                                          src={product.image || "/placeholder.svg"}
                                          alt={product.name}
                                          className="w-16 h-16 rounded-2xl object-cover shadow-md"
                                        />
                                        <motion.div
                                          animate={{ rotate: 360 }}
                                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                          className={`absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r ${currentTheme.primary} rounded-full`}
                                        />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <h4 className="font-bold text-sm truncate text-gray-800 dark:text-gray-200">
                                          {product.name}
                                        </h4>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                                          <Target className="h-3 w-3" />
                                          {product.category}
                                        </p>
                                        <div className="flex items-center justify-between mt-2">
                                          <span
                                            className={`text-sm font-bold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent`}
                                          >
                                            {formatPrice(product.price)}
                                          </span>
                                          <div className="flex items-center gap-1">
                                            <motion.div whileHover={{ scale: 1.2, rotate: 72 }}>
                                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                            </motion.div>
                                            <span className="text-xs font-medium">{product.rating}</span>
                                          </div>
                                        </div>
                                      </div>
                                      <Badge
                                        variant={product.inStock ? "default" : "secondary"}
                                        className={`text-xs ${product.inStock ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400" : ""} shadow-md`}
                                      >
                                        {product.inStock ? "موجود" : "ناموجود"}
                                      </Badge>
                                    </div>
                                  </Card>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}

                          <div className="flex items-center justify-between mt-3">
                            <span className="text-xs text-gray-400 flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {message.timestamp.toLocaleTimeString("fa-IR", {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </span>
                            <MessageActions message={message} />
                          </div>
                        </div>

                        {message.type === "user" && (
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                          >
                            <span className="text-sm font-bold text-white">شما</span>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  <AnimatePresence>
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex gap-4"
                      >
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className={`w-10 h-10 bg-gradient-to-br ${currentTheme.primary} rounded-2xl flex items-center justify-center shadow-lg`}
                        >
                          <Bot className="h-5 w-5 text-white" />
                        </motion.div>
                        <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-3xl p-5 shadow-lg">
                          <div className="flex gap-2">
                            <motion.div
                              animate={{ y: [0, -8, 0] }}
                              transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                              className="w-3 h-3 bg-blue-400 rounded-full"
                            />
                            <motion.div
                              animate={{ y: [0, -8, 0] }}
                              transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                              className="w-3 h-3 bg-purple-400 rounded-full"
                            />
                            <motion.div
                              animate={{ y: [0, -8, 0] }}
                              transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                              className="w-3 h-3 bg-pink-400 rounded-full"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div ref={messagesEndRef} />
                </div>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className={`p-6 border-t border-gray-200 dark:border-gray-700 bg-gradient-to-r ${currentTheme.secondary} dark:from-gray-800/80 dark:to-blue-900/20 backdrop-blur-sm`}
                >
                  <div className="flex gap-4">
                    <div className="flex-1 relative">
                      <input
                        ref={inputRef}
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                        placeholder="سوال خود را بپرسید..."
                        className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-sm placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 shadow-lg focus:shadow-xl"
                      />
                      {isListening && (
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2"
                        >
                          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                        </motion.div>
                      )}
                    </div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={handleVoiceToggle}
                        className={`px-4 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl ${
                          isListening
                            ? "bg-red-100 border-red-300 text-red-600 hover:bg-red-200"
                            : "bg-white/80 hover:bg-white border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        onClick={handleSendMessage}
                        disabled={!inputMessage.trim()}
                        className={`px-6 py-4 rounded-2xl bg-gradient-to-r ${currentTheme.primary} hover:shadow-xl transition-all duration-300 text-white font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        <Send className="h-5 w-5" />
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Stats Cards */}
            <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardHeader className={`pb-4 bg-gradient-to-r ${currentTheme.secondary}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Activity className="h-5 w-5 text-blue-600" />
                    </motion.div>
                    <CardTitle className="text-lg flex items-center gap-2">آمار عملکرد</CardTitle>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 shadow-md"
                      >
                        <Zap className="h-3 w-3 mr-1" />
                        سریع
                      </Badge>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Badge
                        variant="secondary"
                        className="bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400 shadow-md"
                      >
                        <Target className="h-3 w-3 mr-1" />
                        دقیق
                      </Badge>
                    </motion.div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl"
                >
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">کاربران فعال</span>
                  </div>
                  <span className="font-bold text-blue-600">{stats.activeUsers}</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl"
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-sm">نرخ موفقیت</span>
                  </div>
                  <span className="font-bold text-green-600">{stats.successRate}%</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl"
                >
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">زمان پاسخ</span>
                  </div>
                  <span className="font-bold text-purple-600">{stats.avgResponseTime}s</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between p-3 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl"
                >
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">رضایت کاربران</span>
                  </div>
                  <span className="font-bold text-yellow-600">{stats.userSatisfaction}/5</span>
                </motion.div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardHeader className={`pb-4 bg-gradient-to-r ${currentTheme.secondary}`}>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-purple-600" />
                  دسترسی سریع
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 p-6">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2 h-12 rounded-xl shadow-md hover:shadow-lg transition-all bg-transparent"
                  >
                    <Phone className="h-4 w-4 text-green-600" />
                    تماس با پشتیبانی
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2 h-12 rounded-xl shadow-md hover:shadow-lg transition-all bg-transparent"
                  >
                    <Mail className="h-4 w-4 text-blue-600" />
                    ارسال ایمیل
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2 h-12 rounded-xl shadow-md hover:shadow-lg transition-all bg-transparent"
                  >
                    <Download className="h-4 w-4 text-purple-600" />
                    دانلود راهنما
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className={`pb-6 bg-gradient-to-r ${currentTheme.secondary}`}>
              <div className="text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 bg-gradient-to-br ${currentTheme.primary} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <HelpCircle className="h-8 w-8 text-white" />
                </motion.div>
                <CardTitle
                  className={`text-3xl font-bold bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent mb-2`}
                >
                  سوالات متداول
                </CardTitle>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  پاسخ سوالات رایج در مورد دستیار هوش مصنوعی اوستا را در اینجا مشاهده کنید
                </p>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className={`w-full p-6 text-right bg-gradient-to-r ${expandedFaq === index ? currentTheme.secondary : "from-gray-50 to-white"} hover:from-gray-100 hover:to-gray-50 transition-all duration-300 flex items-center justify-between`}
                    >
                      <h3 className="text-lg font-semibold text-gray-800 flex-1 ml-4">{faq.question}</h3>
                      <motion.div
                        animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`p-2 rounded-full ${expandedFaq === index ? `bg-gradient-to-r ${currentTheme.primary}` : "bg-gray-200"}`}
                      >
                        <ChevronDown className={`h-5 w-5 ${expandedFaq === index ? "text-white" : "text-gray-600"}`} />
                      </motion.div>
                    </motion.button>
                    <AnimatePresence>
                      {expandedFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 bg-white">
                            <div className={`w-full h-1 bg-gradient-to-r ${currentTheme.primary} rounded-full mb-4`} />
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
