"use client"

import { useState } from "react"
import {
  ShoppingBag,
  Package,
  Users,
  CreditCard,
  TrendingUp,
  Clock,
  AlertCircle,
  CheckCircle2,
  Truck,
  MessageSquare,
  PenToolIcon as Tool,
  Heart,
  Star,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/layout"
import { StatsCard } from "@/components/dashboard/stats-card"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  const [userType, setUserType] = useState<"customer" | "supplier" | "worker" | "admin" | "corporate">("customer")

  // این تابع برای نمایش است و در نسخه واقعی باید از API استفاده شود
  const changeUserType = (type: "customer" | "supplier" | "worker" | "admin" | "corporate") => {
    setUserType(type)
  }

  // فعالیت‌های اخیر برای انواع کاربران
  const getRecentActivities = () => {
    if (userType === "customer" || userType === "corporate") {
      return [
        {
          id: "1",
          title: "سفارش جدید ثبت شد",
          description: "سفارش شماره #۱۲۳۴۵ با موفقیت ثبت شد.",
          time: "۱۰ دقیقه پیش",
          status: "success",
          icon: <ShoppingBag size={16} />,
        },
        {
          id: "2",
          title: "پرداخت انجام شد",
          description: "پرداخت به مبلغ ۲,۵۰۰,۰۰۰ تومان با موفقیت انجام شد.",
          time: "۱ ساعت پیش",
          status: "success",
          icon: <CreditCard size={16} />,
        },
        {
          id: "3",
          title: "سفارش در حال ارسال",
          description: "سفارش شماره #۱۲۳۴۶ در حال ارسال است.",
          time: "۲ ساعت پیش",
          status: "pending",
          icon: <Truck size={16} />,
        },
        {
          id: "4",
          title: "محصول به سبد خرید اضافه شد",
          description: 'محصول "پمپ آب صنعتی" به سبد خرید اضافه شد.',
          time: "۳ ساعت پیش",
          icon: <Package size={16} />,
        },
      ]
    } else if (userType === "supplier") {
      return [
        {
          id: "1",
          title: "سفارش جدید دریافت شد",
          description: "سفارش جدید به شماره #۱۲۳۴۵ دریافت شد.",
          time: "۱۰ دقیقه پیش",
          status: "pending",
          icon: <ShoppingBag size={16} />,
        },
        {
          id: "2",
          title: "پرداخت دریافت شد",
          description: "پرداخت به مبلغ ۲,۵۰۰,۰۰۰ تومان دریافت شد.",
          time: "۱ ساعت پیش",
          status: "success",
          icon: <CreditCard size={16} />,
        },
        {
          id: "3",
          title: "محصول جدید تأیید شد",
          description: 'محصول "پمپ آب صنعتی" تأیید و در سایت منتشر شد.',
          time: "۲ ساعت پیش",
          status: "success",
          icon: <CheckCircle2 size={16} />,
        },
        {
          id: "4",
          title: "درخواست تسویه حساب",
          description: "درخواست تسویه حساب به مبلغ ۵,۰۰۰,۰۰۰ تومان ثبت شد.",
          time: "۳ ساعت پیش",
          status: "pending",
          icon: <CreditCard size={16} />,
        },
      ]
    } else if (userType === "worker") {
      return [
        {
          id: "1",
          title: "درخواست خدمات جدید",
          description: "درخواست خدمات برق‌کاری جدید دریافت شد.",
          time: "۱۰ دقیقه پیش",
          status: "pending",
          icon: <Tool size={16} />,
        },
        {
          id: "2",
          title: "پرداخت دریافت شد",
          description: "پرداخت به مبلغ ۱,۵۰۰,۰۰۰ تومان دریافت شد.",
          time: "۱ ساعت پیش",
          status: "success",
          icon: <CreditCard size={16} />,
        },
        {
          id: "3",
          title: "نظر جدید دریافت شد",
          description: "یک نظر جدید برای خدمات شما ثبت شد.",
          time: "۲ ساعت پیش",
          icon: <MessageSquare size={16} />,
        },
        {
          id: "4",
          title: "تأیید انجام خدمات",
          description: "انجام خدمات برای سفارش #۱۲۳۴۵ تأیید شد.",
          time: "۳ ساعت پیش",
          status: "success",
          icon: <CheckCircle2 size={16} />,
        },
      ]
    } else if (userType === "admin") {
      return [
        {
          id: "1",
          title: "ثبت‌نام کاربر جدید",
          description: 'کاربر جدید با نام "کاربر نمونه" ثبت‌نام کرد.',
          time: "۱۰ دقیقه پیش",
          icon: <Users size={16} />,
        },
        {
          id: "2",
          title: "تأیید محصول جدید",
          description: 'محصول جدید "پمپ آب صنعتی" در انتظار تأیید است.',
          time: "۱ ساعت پیش",
          status: "pending",
          icon: <Package size={16} />,
        },
        {
          id: "3",
          title: "گزارش تخلف",
          description: "یک گزارش تخلف جدید ثبت شده است.",
          time: "۲ ساعت پیش",
          status: "error",
          icon: <AlertCircle size={16} />,
        },
        {
          id: "4",
          title: "درخواست تسویه حساب",
          description: "درخواست تسویه حساب جدید از طرف تأمین‌کننده دریافت شد.",
          time: "۳ ساعت پیش",
          status: "pending",
          icon: <CreditCard size={16} />,
        },
      ]
    }

    return []
  }

  return (
    <DashboardLayout userType={userType}>
      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">داشبورد</h1>
          <p className="text-muted-foreground">
            خوش آمدید! اطلاعات و آمار مربوط به حساب کاربری شما در اینجا نمایش داده می‌شود.
          </p>
        </div>

        {/* این بخش برای نمایش است و در نسخه واقعی باید حذف شود */}
        <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={() => changeUserType("customer")}>
            خریدار
          </Button>
          <Button variant="outline" size="sm" onClick={() => changeUserType("supplier")}>
            تأمین‌کننده
          </Button>
          <Button variant="outline" size="sm" onClick={() => changeUserType("worker")}>
            اوستاکار
          </Button>
          <Button variant="outline" size="sm" onClick={() => changeUserType("admin")}>
            ادمین
          </Button>
          <Button variant="outline" size="sm" onClick={() => changeUserType("corporate")}>
            شرکتی
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">نمای کلی</TabsTrigger>
          {(userType === "customer" || userType === "corporate") && <TabsTrigger value="orders">سفارشات</TabsTrigger>}
          {userType === "supplier" && <TabsTrigger value="products">محصولات</TabsTrigger>}
          {userType === "worker" && <TabsTrigger value="services">خدمات</TabsTrigger>}
          {userType === "admin" && <TabsTrigger value="users">کاربران</TabsTrigger>}
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* کارت‌های آمار برای خریدار */}
            {(userType === "customer" || userType === "corporate") && (
              <>
                <StatsCard title="سفارشات" value="۱۲" icon={<ShoppingBag size={18} />} description="در ماه جاری" />
                <StatsCard title="در انتظار ارسال" value="۲" icon={<Clock size={18} />} />
                <StatsCard
                  title="مجموع خرید"
                  value="۱۵,۰۰۰,۰۰۰ تومان"
                  icon={<CreditCard size={18} />}
                  trend={{ value: 12, isPositive: true }}
                />
                <StatsCard title="محصولات مورد علاقه" value="۸" icon={<Heart size={18} />} />
              </>
            )}

            {/* کارت‌های آمار برای تأمین‌کننده */}
            {userType === "supplier" && (
              <>
                <StatsCard
                  title="سفارشات"
                  value="۲۵"
                  icon={<ShoppingBag size={18} />}
                  description="در ماه جاری"
                  trend={{ value: 18, isPositive: true }}
                />
                <StatsCard title="محصولات" value="۴۸" icon={<Package size={18} />} />
                <StatsCard
                  title="درآمد ماهانه"
                  value="۳۵,۰۰۰,۰۰۰ تومان"
                  icon={<CreditCard size={18} />}
                  trend={{ value: 8, isPositive: true }}
                />
                <StatsCard
                  title="بازدید محصولات"
                  value="۱,۲۵۰"
                  icon={<TrendingUp size={18} />}
                  trend={{ value: 12, isPositive: true }}
                />
              </>
            )}

            {/* کارت‌های آمار برای اوستاکار */}
            {userType === "worker" && (
              <>
                <StatsCard title="درخواست‌ها" value="۱۵" icon={<ShoppingBag size={18} />} description="در ماه جاری" />
                <StatsCard title="در انتظار انجام" value="۳" icon={<Clock size={18} />} />
                <StatsCard
                  title="درآمد ماهانه"
                  value="۱۲,۰۰۰,۰۰۰ تومان"
                  icon={<CreditCard size={18} />}
                  trend={{ value: 15, isPositive: true }}
                />
                <StatsCard title="امتیاز" value="۴.۸" icon={<Star size={18} />} />
              </>
            )}

            {/* کارت‌های آمار برای ادمین */}
            {userType === "admin" && (
              <>
                <StatsCard
                  title="کاربران"
                  value="۱,۲۵۰"
                  icon={<Users size={18} />}
                  trend={{ value: 8, isPositive: true }}
                />
                <StatsCard
                  title="سفارشات"
                  value="۳۵۶"
                  icon={<ShoppingBag size={18} />}
                  description="در ماه جاری"
                  trend={{ value: 12, isPositive: true }}
                />
                <StatsCard title="محصولات" value="۱,۸۵۰" icon={<Package size={18} />} />
                <StatsCard
                  title="درآمد کل"
                  value="۱۵۰,۰۰۰,۰۰۰ تومان"
                  icon={<CreditCard size={18} />}
                  trend={{ value: 15, isPositive: true }}
                />
              </>
            )}
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>آمار فروش</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/30 rounded-md">
                  <p className="text-muted-foreground">نمودار آمار فروش</p>
                </div>
              </CardContent>
            </Card>

            <RecentActivity activities={getRecentActivities()} className="lg:col-span-3" />
          </div>
        </TabsContent>

        <TabsContent value="orders" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>سفارشات اخیر</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-1 md:grid-cols-5 p-4 font-medium border-b">
                  <div>شماره سفارش</div>
                  <div>تاریخ</div>
                  <div>وضعیت</div>
                  <div>مبلغ</div>
                  <div className="text-left">عملیات</div>
                </div>
                <div className="divide-y">
                  <div className="grid grid-cols-1 md:grid-cols-5 p-4 items-center">
                    <div>#۱۲۳۴۵</div>
                    <div>۱۴۰۲/۰۳/۱۵</div>
                    <div>
                      <Badge>تحویل شده</Badge>
                    </div>
                    <div>۲,۵۰۰,۰۰۰ تومان</div>
                    <div className="flex justify-start md:justify-end mt-2 md:mt-0">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/dashboard/orders/12345">مشاهده</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-5 p-4 items-center">
                    <div>#۱۲۳۴۶</div>
                    <div>۱۴۰۲/۰۳/۱۰</div>
                    <div>
                      <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                        در حال ارسال
                      </Badge>
                    </div>
                    <div>۱,۸۰۰,۰۰۰ تومان</div>
                    <div className="flex justify-start md:justify-end mt-2 md:mt-0">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/dashboard/orders/12346">مشاهده</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-5 p-4 items-center">
                    <div>#۱۲۳۴۷</div>
                    <div>۱۴۰۲/۰۳/۰۵</div>
                    <div>
                      <Badge variant="outline" className="border-red-500 text-red-500">
                        لغو شده
                      </Badge>
                    </div>
                    <div>۳,۲۰۰,۰۰۰ تومان</div>
                    <div className="flex justify-start md:justify-end mt-2 md:mt-0">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/dashboard/orders/12347">مشاهده</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>محصولات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-1 md:grid-cols-6 p-4 font-medium border-b">
                  <div className="md:col-span-2">نام محصول</div>
                  <div>قیمت</div>
                  <div>موجودی</div>
                  <div>وضعیت</div>
                  <div className="text-left">عملیات</div>
                </div>
                <div className="divide-y">
                  <div className="grid grid-cols-1 md:grid-cols-6 p-4 items-center">
                    <div className="md:col-span-2">پمپ آب صنعتی</div>
                    <div>۲,۵۰۰,۰۰۰ تومان</div>
                    <div>۱۵ عدد</div>
                    <div>
                      <Badge>فعال</Badge>
                    </div>
                    <div className="flex justify-start md:justify-end mt-2 md:mt-0">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/dashboard/products/1">ویرایش</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-6 p-4 items-center">
                    <div className="md:col-span-2">موتور برق صنعتی</div>
                    <div>۵,۸۰۰,۰۰۰ تومان</div>
                    <div>۸ عدد</div>
                    <div>
                      <Badge>فعال</Badge>
                    </div>
                    <div className="flex justify-start md:justify-end mt-2 md:mt-0">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/dashboard/products/2">ویرایش</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-6 p-4 items-center">
                    <div className="md:col-span-2">کمپرسور هوا</div>
                    <div>۳,۲۰۰,۰۰۰ تومان</div>
                    <div>۰ عدد</div>
                    <div>
                      <Badge variant="outline" className="border-red-500 text-red-500">
                        ناموجود
                      </Badge>
                    </div>
                    <div className="flex justify-start md:justify-end mt-2 md:mt-0">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/dashboard/products/3">ویرایش</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>خدمات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-1 md:grid-cols-5 p-4 font-medium border-b">
                  <div className="md:col-span-2">عنوان خدمت</div>
                  <div>قیمت پایه</div>
                  <div>وضعیت</div>
                  <div className="text-left">عملیات</div>
                </div>
                <div className="divide-y">
                  <div className="grid grid-cols-1 md:grid-cols-5 p-4 items-center">
                    <div className="md:col-span-2">نصب و راه‌اندازی برق صنعتی</div>
                    <div>از ۵۰۰,۰۰۰ تومان</div>
                    <div>
                      <Badge>فعال</Badge>
                    </div>
                    <div className="flex justify-start md:justify-end mt-2 md:mt-0">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/dashboard/services/1">ویرایش</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-5 p-4 items-center">
                    <div className="md:col-span-2">تعمیر موتورهای الکتریکی</div>
                    <div>از ۸۰۰,۰۰۰ تومان</div>
                    <div>
                      <Badge>فعال</Badge>
                    </div>
                    <div className="flex justify-start md:justify-end mt-2 md:mt-0">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/dashboard/services/2">ویرایش</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-5 p-4 items-center">
                    <div className="md:col-span-2">عیب‌یابی سیستم‌های کنترلی</div>
                    <div>از ۱,۲۰۰,۰۰۰ تومان</div>
                    <div>
                      <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                        در انتظار تأیید
                      </Badge>
                    </div>
                    <div className="flex justify-start md:justify-end mt-2 md:mt-0">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/dashboard/services/3">ویرایش</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>کاربران</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-1 md:grid-cols-5 p-4 font-medium border-b">
                  <div className="md:col-span-2">نام کاربر</div>
                  <div>نوع کاربر</div>
                  <div>وضعیت</div>
                  <div className="text-left">عملیات</div>
                </div>
                <div className="divide-y">
                  <div className="grid grid-cols-1 md:grid-cols-5 p-4 items-center">
                    <div className="md:col-span-2">کاربر نمونه ۱</div>
                    <div>خریدار</div>
                    <div>
                      <Badge>فعال</Badge>
                    </div>
                    <div className="flex justify-start md:justify-end mt-2 md:mt-0">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/dashboard/users/1">مشاهده</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-5 p-4 items-center">
                    <div className="md:col-span-2">شرکت نمونه</div>
                    <div>تأمین‌کننده</div>
                    <div>
                      <Badge>فعال</Badge>
                    </div>
                    <div className="flex justify-start md:justify-end mt-2 md:mt-0">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/dashboard/users/2">مشاهده</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-5 p-4 items-center">
                    <div className="md:col-span-2">اوستاکار نمونه</div>
                    <div>اوستاکار</div>
                    <div>
                      <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                        در انتظار تأیید
                      </Badge>
                    </div>
                    <div className="flex justify-start md:justify-end mt-2 md:mt-0">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/dashboard/users/3">مشاهده</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}
