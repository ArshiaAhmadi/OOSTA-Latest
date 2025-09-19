import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import {
  Search,
  Calendar,
  User,
  Eye,
  Clock,
  TrendingUp,
  BookOpen,
  Filter,
  Star,
  ArrowRight,
  Tag,
  Share2,
  Bookmark,
} from "lucide-react"

export default function ArticlesPage() {
  const featuredArticles = [
    {
      id: 1,
      title: "راهنمای کامل انتخاب گیربکس صنعتی مناسب",
      excerpt: "در این مقاله جامع، تمام نکات مهم برای انتخاب گیربکس صنعتی مناسب برای کاربردهای مختلف را بررسی می‌کنیم.",
      image: "/placeholder.svg?height=300&width=500&text=گیربکس+صنعتی",
      category: "تجهیزات صنعتی",
      author: "مهندس احمد رضایی",
      date: "۱۴۰۲/۱۲/۱۵",
      readTime: "۸ دقیقه",
      views: "۲,۳۴۵",
      featured: true,
      tags: ["گیربکس", "تجهیزات", "راهنما"],
    },
    {
      id: 2,
      title: "نوآوری‌های جدید در صنعت الکتروموتورها",
      excerpt: "بررسی آخرین فناوری‌ها و نوآوری‌های صنعت الکتروموتور و تأثیر آن‌ها بر بهره‌وری صنعتی.",
      image: "/placeholder.svg?height=300&width=500&text=الکتروموتور+مدرن",
      category: "فناوری",
      author: "دکتر سارا احمدی",
      date: "۱۴۰۲/۱۲/۱۰",
      readTime: "۶ دقیقه",
      views: "۱,۸۹۲",
      featured: true,
      tags: ["الکتروموتور", "فناوری", "نوآوری"],
    },
    {
      id: 3,
      title: "بهینه‌سازی مصرف انرژی در سیستم‌های پمپاژ",
      excerpt: "روش‌های عملی برای کاهش مصرف انرژی و افزایش بازده در سیستم‌های پمپاژ صنعتی.",
      image: "/placeholder.svg?height=300&width=500&text=پمپ+صنعتی+بهینه",
      category: "بهینه‌سازی",
      author: "مهندس علی کریمی",
      date: "۱۴۰۲/۱۲/۰۵",
      readTime: "۱۰ دقیقه",
      views: "۳,۱۲۱",
      featured: true,
      tags: ["پمپ", "انرژی", "بهینه‌سازی"],
    },
  ]

  const recentArticles = [
    {
      id: 4,
      title: "مقایسه انواع اینورترهای صنعتی",
      excerpt: "بررسی تطبیقی انواع اینورترها و کاربردهای مختلف آن‌ها در صنایع.",
      image: "/placeholder.svg?height=200&width=300&text=اینورتر",
      category: "مقایسه",
      author: "مهندس مریم نوری",
      date: "۱۴۰۲/۱۲/۰۱",
      readTime: "۵ دقیقه",
      views: "۱,۴۵۶",
    },
    {
      id: 5,
      title: "نگهداری و تعمیرات موتورهای ویبره",
      excerpt: "راهنمای عملی برای نگهداری صحیح و افزایش عمر موتورهای ویبره.",
      image: "/placeholder.svg?height=200&width=300&text=موتور+ویبره",
      category: "نگهداری",
      author: "تکنسین حسن محمدی",
      date: "۱۴۰۲/۱۱/۲۸",
      readTime: "۷ دقیقه",
      views: "۹۸۷",
    },
    {
      id: 6,
      title: "ترندهای جدید در صنعت تولید برق",
      excerpt: "نگاهی به آینده صنعت تولید برق و فناوری‌های نوظهور.",
      image: "/placeholder.svg?height=200&width=300&text=تولید+برق",
      category: "ترندها",
      author: "دکتر رضا صادقی",
      date: "۱۴۰۲/۱۱/۲۵",
      readTime: "۹ دقیقه",
      views: "۲,۱۰۳",
    },
    {
      id: 7,
      title: "راهکارهای هو��مند در کنترل صنعتی",
      excerpt: "کاربرد هوش مصنوعی و IoT در سیستم‌های کنترل صنعتی مدرن.",
      image: "/placeholder.svg?height=200&width=300&text=کنترل+هوشمند",
      category: "هوش مصنوعی",
      author: "مهندس فاطمه زارعی",
      date: "۱۴۰۲/۱۱/۲۰",
      readTime: "۱۲ دقیقه",
      views: "۳,۴۵۶",
    },
    {
      id: 8,
      title: "استانداردهای ایمنی در تجهیزات صنعتی",
      excerpt: "بررسی مهم‌ترین استانداردهای ایمنی که باید در انتخاب تجهیزات رعایت شود.",
      image: "/placeholder.svg?height=200&width=300&text=ایمنی+صنعتی",
      category: "ایمنی",
      author: "مهندس محمد رضا پور",
      date: "۱۴۰۲/۱۱/۱۵",
      readTime: "۶ دقیقه",
      views: "۱,۷۸۹",
    },
    {
      id: 9,
      title: "آینده صنعت ۴.۰ در ایران",
      excerpt: "چالش‌ها و فرصت‌های پیش روی صنعت ۴.۰ در کشور و راهکارهای توسعه.",
      image: "/placeholder.svg?height=200&width=300&text=صنعت+4.0",
      category: "آینده‌نگری",
      author: "دکتر امیر حسینی",
      date: "۱۴۰۲/۱۱/۱۰",
      readTime: "۱۵ دقیقه",
      views: "۴,۲۳۱",
    },
  ]

  const categories = [
    { name: "همه مقالات", count: 156, active: true },
    { name: "تجهیزات صنعتی", count: 45 },
    { name: "فناوری", count: 32 },
    { name: "بهینه‌سازی", count: 28 },
    { name: "نگهداری", count: 23 },
    { name: "ایمنی", count: 18 },
    { name: "آینده‌نگری", count: 10 },
  ]

  const popularTags = [
    "گیربکس",
    "الکتروموتور",
    "پمپ",
    "اینورتر",
    "موتور ویبره",
    "بهینه‌سازی",
    "انرژی",
    "ایمنی",
    "نگهداری",
    "فناوری",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#253F8F]/5 to-[#F18F20]/10 dark:from-[#253F8F]/10 dark:to-[#F18F20]/5">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#F18F20] rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#253F8F] rounded-full blur-3xl translate-x-48 translate-y-48"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#F18F20]/10 text-[#253F8F] text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              مرکز دانش و اطلاعات صنعتی
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-[#253F8F] via-[#F18F20] to-[#253F8F] bg-clip-text text-transparent">
              مقالات تخصصی اوستا
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              آخرین اخبار، راهنماها و بینش‌های تخصصی در حوزه تجهیزات و ماشین‌آلات صنعتی
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="جستجو در مقالات..."
                  className="pr-12 pl-4 py-4 text-lg rounded-2xl border-2 border-muted focus:border-[#F18F20] shadow-lg"
                />
                <Button className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-xl bg-gradient-to-r from-[#253F8F] to-[#F18F20] hover:from-[#253F8F]/90 hover:to-[#F18F20]/90">
                  جستجو
                </Button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "مقالات منتشر شده", value: "۱۵۶+", icon: BookOpen },
              { label: "نویسندگان متخصص", value: "۲۴", icon: User },
              { label: "بازدید ماهانه", value: "۵۰K+", icon: Eye },
              { label: "رضایت خوانندگان", value: "۹۸٪", icon: Star },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#F18F20]" />
                <div className="text-2xl font-bold text-[#253F8F] mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Categories */}
            <Card className="overflow-hidden border-2 border-[#F18F20]/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="w-5 h-5 text-[#F18F20]" />
                  <h3 className="text-lg font-bold">دسته‌بندی مقالات</h3>
                </div>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                        category.active
                          ? "bg-gradient-to-r from-[#253F8F] to-[#F18F20] text-white shadow-lg"
                          : "hover:bg-muted/50"
                      }`}
                    >
                      <span className="font-medium">{category.name}</span>
                      <Badge variant={category.active ? "secondary" : "outline"} className="text-xs">
                        {category.count}
                      </Badge>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card className="overflow-hidden border-2 border-[#F18F20]/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Tag className="w-5 h-5 text-[#F18F20]" />
                  <h3 className="text-lg font-bold">برچسب‌های محبوب</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-[#F18F20] hover:text-white transition-colors border-[#F18F20]/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="overflow-hidden border-2 border-[#F18F20]/10 bg-gradient-to-br from-[#253F8F]/5 to-[#F18F20]/5">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#F18F20]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-[#F18F20]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">خبرنامه اوستا</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    آخرین مقالات و اخبار صنعتی را در ایمیل خود دریافت کنید
                  </p>
                  <Input placeholder="ایمیل شما" className="mb-3" />
                  <Button className="w-full bg-gradient-to-r from-[#253F8F] to-[#F18F20] hover:from-[#253F8F]/90 hover:to-[#F18F20]/90">
                    عضویت در خبرنامه
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Featured Articles */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-[#253F8F] to-[#F18F20] rounded-full"></div>
                <h2 className="text-2xl font-bold">مقالات ویژه</h2>
                <Badge className="bg-gradient-to-r from-[#253F8F] to-[#F18F20] text-white">پیشنهاد ویژه</Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                {featuredArticles.map((article, index) => (
                  <Card
                    key={article.id}
                    className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#F18F20]/20"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="relative overflow-hidden">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          width={500}
                          height={300}
                          className="w-full h-64 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-gradient-to-r from-[#253F8F] to-[#F18F20] text-white">
                            {article.category}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 left-4 flex gap-2">
                          <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                            <Bookmark className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <CardContent className="p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {article.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs border-[#F18F20]/30">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <h3 className="text-xl font-bold mb-4 group-hover:text-[#F18F20] transition-colors">
                            {article.title}
                          </h3>

                          <p className="text-muted-foreground mb-6 leading-relaxed">{article.excerpt}</p>
                        </div>

                        <div>
                          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                <span>{article.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{article.date}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{article.readTime}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Eye className="w-4 h-4" />
                                <span>{article.views}</span>
                              </div>
                            </div>
                          </div>

                          <Link href={`/articles/${article.id}`}>
                            <Button className="w-full group/btn bg-gradient-to-r from-[#253F8F] to-[#F18F20] hover:from-[#253F8F]/90 hover:to-[#F18F20]/90">
                              مطالعه مقاله
                              <ArrowRight className="w-4 h-4 mr-2 transition-transform group-hover/btn:translate-x-1" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Recent Articles */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#F18F20] to-[#253F8F] rounded-full"></div>
                  <h2 className="text-2xl font-bold">جدیدترین مقالات</h2>
                </div>
                <Button variant="outline" className="gap-2 border-[#F18F20]/30 hover:bg-[#F18F20]/10 bg-transparent">
                  مشاهده همه
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#F18F20]/20"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="bg-white/90 text-gray-800">
                          {article.category}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-3 group-hover:text-[#F18F20] transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{article.excerpt}</p>

                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{article.date}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{article.readTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            <span>{article.views}</span>
                          </div>
                        </div>

                        <Link href={`/articles/${article.id}`}>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-[#F18F20] hover:text-[#F18F20] hover:bg-[#F18F20]/10"
                          >
                            مطالعه
                            <ArrowRight className="w-3 h-3 mr-1" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Load More */}
            <div className="text-center">
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-[#F18F20]/30 hover:bg-[#F18F20]/10 bg-transparent"
              >
                مشاهده مقالات بیشتر
                <ArrowRight className="w-4 h-4 mr-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
