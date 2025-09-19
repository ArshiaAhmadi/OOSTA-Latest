"use client"

import { useState, useEffect, useRef } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Calendar,
  Clock,
  Eye,
  Heart,
  Share2,
  Bookmark,
  MessageCircle,
  ThumbsUp,
  ThumbsDown,
  Star,
  ArrowLeft,
  ArrowRight,
  Download,
  PrinterIcon as Print,
  Copy,
  Facebook,
  Twitter,
  Linkedin,
  Send,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Lightbulb,
  Target,
  Zap,
  Shield,
  Globe,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Mock data for article
const mockArticle = {
  id: 1,
  title: "راهنمای جامع انتخاب موتور الکتریکی صنعتی: از تئوری تا عمل",
  slug: "complete-guide-industrial-electric-motors",
  excerpt: "در این مقاله جامع، تمام نکات مهم برای انتخاب بهترین موتور الکتریکی صنعتی را بررسی می‌کنیم.",
  content: `
    <h2 id="introduction">مقدمه</h2>
    <p>انتخاب موتور الکتریکی مناسب برای کاربردهای صنعتی یکی از مهم‌ترین تصمیمات در طراحی سیستم‌های صنعتی است. این انتخاب نه تنها بر عملکرد کلی سیستم تأثیر می‌گذارد، بلکه هزینه‌های عملیاتی و نگهداری را نیز تعیین می‌کند.</p>
    
    <h2 id="types">انواع موتورهای الکتریکی صنعتی</h2>
    <p>موتورهای الکتریکی صنعتی به دو دسته اصلی تقسیم می‌شوند:</p>
    <ul>
      <li><strong>موتورهای جریان مستقیم (DC):</strong> مناسب برای کاربردهایی که نیاز به کنترل دقیق سرعت دارند</li>
      <li><strong>موتورهای جریان متناوب (AC):</strong> شامل موتورهای سنکرون و آسنکرون</li>
    </ul>
    
    <h2 id="factors">فاکتورهای مهم در انتخاب</h2>
    <p>برای انتخاب موتور مناسب، باید فاکتورهای زیر را در نظر بگیرید:</p>
    <ol>
      <li>قدرت مورد نیاز</li>
      <li>سرعت عملیاتی</li>
      <li>گشتاور شروع</li>
      <li>شرایط محیطی</li>
      <li>بازده انرژی</li>
    </ol>
    
    <h2 id="conclusion">نتیجه‌گیری</h2>
    <p>انتخاب صحیح موتور الکتریکی نیازمند بررسی دقیق تمام پارامترهای فنی و اقتصادی است. مشاوره با متخصصان و استفاده از ابزارهای شبیه‌سازی می‌تواند در این فرآیند بسیار مفید باشد.</p>
  `,
  image: "/industrial-electric-motors.png",
  author: {
    name: "مهندس علی احمدی",
    avatar: "/professional-engineer-portrait.png",
    bio: "مهندس برق صنعتی با ۱۵ سال تجربه در طراحی سیستم‌های الکتریکی",
    articles: 24,
    followers: 1250,
  },
  publishedAt: "۱۴۰۳/۰۹/۱۵",
  readTime: "۱۲ دقیقه",
  views: 2847,
  likes: 156,
  bookmarks: 89,
  comments: 23,
  category: "موتورهای الکتریکی",
  tags: ["موتور الکتریکی", "صنعتی", "انتخاب تجهیزات", "مهندسی برق"],
  difficulty: "متوسط",
  rating: 4.8,
  ratingCount: 45,
  estimatedSavings: "۳۰٪ کاهش هزینه",
  lastUpdated: "۱۴۰۳/۰۹/۲۰",
}

const relatedArticles = [
  {
    id: 2,
    title: "بررسی انواع اینورترها و کاربردهای آن‌ها",
    image: "/inverter.png",
    readTime: "۸ دقیقه",
    views: 1523,
    category: "اینورتر",
  },
  {
    id: 3,
    title: "راهنمای نصب و راه‌اندازی پمپ‌های صنعتی",
    image: "/industrial-pump.png",
    readTime: "۱۰ دقیقه",
    views: 1876,
    category: "پمپ",
  },
  {
    id: 4,
    title: "نکات مهم در نگهداری گیربکس‌های صنعتی",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "۶ دقیقه",
    views: 1234,
    category: "گیربکس",
  },
]

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const { toast } = useToast()
  const contentRef = useRef(null)
  const [activeSection, setActiveSection] = useState(null)

  // Simulate reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setReadingProgress(Math.min(progress, 100))

      // Scroll spy for Table of Contents
      if (contentRef.current) {
        const sections = contentRef.current.querySelectorAll("h2, h3")
        let currentSectionId = null

        sections.forEach((section) => {
          const sectionTop = section.offsetTop
          if (window.scrollY >= sectionTop - 50) {
            currentSectionId = section.id
          }
        })

        setActiveSection(currentSectionId)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
    toast({
      title: isBookmarked ? "از نشان‌شده‌ها حذف شد" : "به نشان‌شده‌ها اضافه شد",
      description: isBookmarked ? "مقاله از لیست نشان‌شده‌های شما حذف شد" : "مقاله به لیست نشان‌شده‌های شما اضافه شد",
    })
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    toast({
      title: isLiked ? "لایک حذف شد" : "لایک شد",
      description: isLiked ? "لایک شما حذف شد" : "از لایک شما متشکریم!",
    })
  }

  const handleShare = (platform: string) => {
    toast({
      title: "لینک کپی شد",
      description: `مقاله در ${platform} به اشتراک گذاشته شد`,
    })
    setShowShareMenu(false)
  }

  if (!mockArticle) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Progress value={readingProgress} className="h-1 rounded-none [&>div]:bg-[#253F8F]" />
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        <Button
          size="sm"
          variant={isLiked ? "default" : "outline"}
          className={`w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${
            isLiked
              ? "bg-[#F18F20] hover:bg-[#F18F20]/90 border-[#F18F20]"
              : "border-[#253F8F] text-[#253F8F] hover:bg-[#253F8F] hover:text-white"
          }`}
          onClick={handleLike}
        >
          <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
        </Button>
        <Button
          size="sm"
          variant={isBookmarked ? "default" : "outline"}
          className={`w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${
            isBookmarked
              ? "bg-[#253F8F] hover:bg-[#253F8F]/90 border-[#253F8F]"
              : "border-[#F18F20] text-[#F18F20] hover:bg-[#F18F20] hover:text-white"
          }`}
          onClick={handleBookmark}
        >
          <Bookmark className={`h-5 w-5 ${isBookmarked ? "fill-current" : ""}`} />
        </Button>
        <div className="relative">
          <Button
            size="sm"
            variant="outline"
            className="w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-all duration-300 border-gray-300 hover:border-[#253F8F] hover:bg-[#253F8F] hover:text-white bg-transparent"
            onClick={() => setShowShareMenu(!showShareMenu)}
          >
            <Share2 className="h-5 w-5" />
          </Button>
          {showShareMenu && (
            <div className="absolute left-16 top-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-2 flex flex-col gap-2 min-w-[120px]">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleShare("فیسبوک")}
                className="justify-start hover:bg-[#253F8F]/10"
              >
                <Facebook className="h-4 w-4 mr-2 text-[#253F8F]" />
                فیسبوک
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleShare("توییتر")}
                className="justify-start hover:bg-[#253F8F]/10"
              >
                <Twitter className="h-4 w-4 mr-2 text-[#253F8F]" />
                توییتر
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleShare("لینکدین")}
                className="justify-start hover:bg-[#253F8F]/10"
              >
                <Linkedin className="h-4 w-4 mr-2 text-[#253F8F]" />
                لینکدین
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleShare("کپی لینک")}
                className="justify-start hover:bg-[#253F8F]/10"
              >
                <Copy className="h-4 w-4 mr-2 text-[#253F8F]" />
                کپی لینک
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Back to Articles */}
      <div className="container mx-auto px-4 pt-8">
        <Link href="/articles">
          <Button variant="ghost" className="mb-6 hover:bg-[#253F8F]/10 text-[#253F8F]">
            <ArrowLeft className="h-4 w-4 mr-2" />
            بازگشت به مقالات
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Category & Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <Badge className="bg-[#253F8F] text-white hover:bg-[#253F8F]/90 px-4 py-2 text-sm font-medium">
              {mockArticle.category}
            </Badge>
            <Badge
              variant="outline"
              className="border-[#F18F20] text-[#F18F20] hover:bg-[#F18F20] hover:text-white px-3 py-1"
            >
              <TrendingUp className="h-3 w-3 mr-1" />
              {mockArticle.estimatedSavings}
            </Badge>
            <Badge
              variant="outline"
              className="border-gray-300 text-gray-600 hover:border-[#253F8F] hover:text-[#253F8F] px-3 py-1"
            >
              <Target className="h-3 w-3 mr-1" />
              {mockArticle.difficulty}
            </Badge>
            <Badge
              variant="outline"
              className="border-[#F18F20] text-[#F18F20] hover:bg-[#F18F20] hover:text-white px-3 py-1"
            >
              <Award className="h-3 w-3 mr-1" />
              امتیاز {mockArticle.rating}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
            {mockArticle.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-8 text-gray-600 dark:text-gray-400 mb-10 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#253F8F]" />
              <span>{mockArticle.publishedAt}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#F18F20]" />
              <span>{mockArticle.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-[#253F8F]" />
              <span>{mockArticle.views.toLocaleString()} بازدید</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-[#F18F20]" />
              <span>{mockArticle.comments} نظر</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-[#F18F20] text-[#F18F20]" />
              <span>
                {mockArticle.rating} ({mockArticle.ratingCount} رای)
              </span>
            </div>
          </div>

          {/* Author Info */}
          <Card className="mb-10 border border-gray-200 dark:border-gray-700 shadow-sm">
            <CardContent className="p-8">
              <div className="flex items-center gap-6">
                <Avatar className="h-20 w-20 ring-4 ring-[#253F8F]/20">
                  <AvatarImage src={mockArticle.author.avatar || "/placeholder.svg"} alt={mockArticle.author.name} />
                  <AvatarFallback className="bg-[#253F8F] text-white text-xl font-bold">
                    {mockArticle.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">{mockArticle.author.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">{mockArticle.author.bio}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-500">
                    <span className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-[#253F8F]" />
                      {mockArticle.author.articles} مقاله
                    </span>
                    <span className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-[#F18F20]" />
                      {mockArticle.author.followers} دنبال‌کننده
                    </span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="border-[#253F8F] text-[#253F8F] hover:bg-[#253F8F] hover:text-white px-6 bg-transparent"
                >
                  دنبال کردن
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Featured Image */}
          <div className="relative mb-12 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
            <Image
              src={mockArticle.image || "/placeholder.svg"}
              alt={mockArticle.title}
              width={800}
              height={400}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="border border-gray-200 dark:border-gray-700 shadow-sm">
                <CardContent className="p-8 lg:p-12">
                  {/* Table of Contents */}
                  <Card className="mb-10 bg-[#253F8F]/5 border-[#253F8F]/20">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-[#253F8F]">
                        <Lightbulb className="h-5 w-5" />
                        فهرست مطالب
                      </h3>
                      <ul className="space-y-3 text-sm">
                        <li>
                          <a
                            href="#introduction"
                            className={`text-[#253F8F] hover:text-[#F18F20] transition-colors ${activeSection === "introduction" ? "font-bold text-[#F18F20]" : ""}`}
                          >
                            مقدمه
                          </a>
                        </li>
                        <li>
                          <a
                            href="#types"
                            className={`text-[#253F8F] hover:text-[#F18F20] transition-colors ${activeSection === "types" ? "font-bold text-[#F18F20]" : ""}`}
                          >
                            انواع موتورهای الکتریکی صنعتی
                          </a>
                        </li>
                        <li>
                          <a
                            href="#factors"
                            className={`text-[#253F8F] hover:text-[#F18F20] transition-colors ${activeSection === "factors" ? "font-bold text-[#F18F20]" : ""}`}
                          >
                            فاکتورهای مهم در انتخاب
                          </a>
                        </li>
                        <li>
                          <a
                            href="#conclusion"
                            className={`text-[#253F8F] hover:text-[#F18F20] transition-colors ${activeSection === "conclusion" ? "font-bold text-[#F18F20]" : ""}`}
                          >
                            نتیجه‌گیری
                          </a>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Article Content */}
                  <div
                    className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:font-bold prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-strong:text-[#253F8F] prose-ul:text-gray-700 dark:prose-ul:text-gray-300 prose-ol:text-gray-700 dark:prose-ol:text-gray-300 prose-a:text-[#253F8F] hover:prose-a:text-[#F18F20]"
                    dangerouslySetInnerHTML={{ __html: mockArticle.content }}
                    ref={contentRef}
                  />

                  {/* Key Takeaways */}
                  <Card className="mt-12 bg-[#F18F20]/5 border-[#F18F20]/20">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-[#F18F20]">
                        <CheckCircle className="h-5 w-5" />
                        نکات کلیدی
                      </h3>
                      <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                        <li className="flex items-start gap-3">
                          <Zap className="h-5 w-5 mt-0.5 flex-shrink-0 text-[#F18F20]" />
                          انتخاب موتور مناسب می‌تواند تا ۳۰٪ در هزینه‌های انرژی صرفه‌جویی کند
                        </li>
                        <li className="flex items-start gap-3">
                          <Shield className="h-5 w-5 mt-0.5 flex-shrink-0 text-[#253F8F]" />
                          بررسی شرایط محیطی برای طول عمر بیشتر موتور ضروری است
                        </li>
                        <li className="flex items-start gap-3">
                          <Target className="h-5 w-5 mt-0.5 flex-shrink-0 text-[#F18F20]" />
                          مشاوره با متخصصان قبل از خرید توصیه می‌شود
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Tags */}
                  <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">برچسب‌ها:</h3>
                    <div className="flex flex-wrap gap-2">
                      {mockArticle.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="hover:bg-[#253F8F] hover:text-white cursor-pointer transition-colors bg-gray-100 text-gray-700"
                        >
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Article Actions */}
                  <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <Button
                          variant={isLiked ? "default" : "outline"}
                          onClick={handleLike}
                          className={`hover:scale-105 transition-transform ${
                            isLiked
                              ? "bg-[#F18F20] hover:bg-[#F18F20]/90 border-[#F18F20]"
                              : "border-[#F18F20] text-[#F18F20] hover:bg-[#F18F20] hover:text-white"
                          }`}
                        >
                          <Heart className={`h-4 w-4 mr-2 ${isLiked ? "fill-current" : ""}`} />
                          {mockArticle.likes + (isLiked ? 1 : 0)} پسند
                        </Button>
                        <Button
                          variant="outline"
                          className="hover:scale-105 transition-transform border-[#253F8F] text-[#253F8F] hover:bg-[#253F8F] hover:text-white bg-transparent"
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          {mockArticle.comments} نظر
                        </Button>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="hover:bg-gray-50 bg-transparent">
                          <Print className="h-4 w-4 mr-2" />
                          چاپ
                        </Button>
                        <Button variant="outline" size="sm" className="hover:bg-gray-50 bg-transparent">
                          <Download className="h-4 w-4 mr-2" />
                          دانلود PDF
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comments Section */}
              <Card className="mt-8 border border-gray-200 dark:border-gray-700 shadow-sm">
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                    <MessageCircle className="h-5 w-5 text-[#253F8F]" />
                    نظرات ({mockArticle.comments})
                  </h3>

                  {/* Comment Form */}
                  <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <textarea
                      placeholder="نظر خود را بنویسید..."
                      className="w-full p-4 border border-gray-200 dark:border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-[#253F8F] focus:border-[#253F8F] dark:bg-gray-700 dark:text-white transition-colors"
                      rows={4}
                    />
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-gray-500">حداکثر ۵۰۰ کاراکتر</span>
                      <Button className="bg-[#253F8F] hover:bg-[#253F8F]/90">
                        <Send className="h-4 w-4 mr-2" />
                        ارسال نظر
                      </Button>
                    </div>
                  </div>

                  {/* Sample Comments */}
                  <div className="space-y-6">
                    {[1, 2, 3].map((comment) => (
                      <div
                        key={comment}
                        className="flex gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700"
                      >
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={`/placeholder.svg?height=48&width=48&query=user${comment}`} />
                          <AvatarFallback className="bg-[#253F8F] text-white">کاربر</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="font-semibold text-gray-900 dark:text-white">کاربر {comment}</span>
                            <span className="text-sm text-gray-500">۲ روز پیش</span>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                            مقاله بسیار مفیدی بود. اطلاعات ارائه شده کاملاً کاربردی و قابل استفاده در پروژه‌های واقعی است.
                          </p>
                          <div className="flex items-center gap-4">
                            <Button variant="ghost" size="sm" className="text-[#F18F20] hover:bg-[#F18F20]/10">
                              <ThumbsUp className="h-3 w-3 mr-1" />۵
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-500 hover:bg-gray-100">
                              <ThumbsDown className="h-3 w-3 mr-1" />۰
                            </Button>
                            <Button variant="ghost" size="sm" className="text-[#253F8F] hover:bg-[#253F8F]/10">
                              پاسخ
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Article Stats */}
              <Card className="border border-gray-200 dark:border-gray-700 shadow-sm">
                <CardContent className="p-4">
                  <h3 className="font-bold mb-4 text-gray-900 dark:text-white text-base">آمار مقاله</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">بازدید:</span>
                      <span className="font-semibold text-[#253F8F] text-sm">{mockArticle.views.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">پسند:</span>
                      <span className="font-semibold text-[#F18F20] text-sm">{mockArticle.likes}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">نشان‌شده:</span>
                      <span className="font-semibold text-[#253F8F] text-sm">{mockArticle.bookmarks}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">آخرین بروزرسانی:</span>
                      <span className="font-semibold text-xs text-gray-700 dark:text-gray-300">
                        {mockArticle.lastUpdated}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card className="border border-gray-200 dark:border-gray-700 shadow-sm">
                <CardContent className="p-4">
                  <h3 className="font-bold mb-4 text-gray-900 dark:text-white text-base">مقالات مرتبط</h3>
                  <div className="space-y-4">
                    {relatedArticles.map((article) => (
                      <Link key={article.id} href={`/articles/${article.id}`}>
                        <div className="group cursor-pointer">
                          <div className="flex gap-3">
                            <Image
                              src={article.image || "/placeholder.svg"}
                              alt={article.title}
                              width={70}
                              height={50}
                              className="rounded-lg object-cover flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-xs leading-tight group-hover:text-[#253F8F] transition-colors line-clamp-3 mb-2 text-gray-900 dark:text-white">
                                {article.title}
                              </h4>
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <Clock className="h-3 w-3 text-[#F18F20] flex-shrink-0" />
                                <span className="truncate">{article.readTime}</span>
                                <Eye className="h-3 w-3 text-[#253F8F] flex-shrink-0" />
                                <span className="truncate">{article.views}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="border border-[#253F8F]/20 shadow-sm bg-[#253F8F]/5">
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2 text-[#253F8F] text-base">عضویت در خبرنامه</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    آخرین مقالات و راهنماهای فنی را دریافت کنید
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="ایمیل شما"
                      className="w-full p-2.5 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-[#253F8F] focus:border-[#253F8F] dark:bg-gray-700 dark:text-white transition-colors"
                    />
                    <Button className="w-full bg-[#F18F20] hover:bg-[#F18F20]/90 text-sm py-2">عضویت</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <Card className="border border-gray-200 dark:border-gray-700 shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-[#253F8F] text-[#253F8F] hover:bg-[#253F8F] hover:text-white bg-transparent"
                >
                  <ArrowLeft className="h-4 w-4" />
                  مقاله قبلی
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-[#F18F20] text-[#F18F20] hover:bg-[#F18F20] hover:text-white bg-transparent"
                >
                  مقاله بعدی
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
