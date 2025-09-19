"use client"

import { useState } from "react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit,
  FileText,
  ShoppingBag,
  Building,
  PenToolIcon as Tool,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

export default function ProfilePage() {
  const [userType, setUserType] = useState<"customer" | "supplier" | "worker" | "corporate">("customer")

  // این تابع برای نمایش است و در نسخه واقعی باید از API استفاده شود
  const changeUserType = (type: "customer" | "supplier" | "worker" | "corporate") => {
    setUserType(type)
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/abstract-geometric-shapes.png" alt="تصویر کاربر" />
                  <AvatarFallback className="text-2xl">کاربر</AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="mt-4">کاربر نمونه</CardTitle>
              <CardDescription>
                {userType === "customer" && "خریدار"}
                {userType === "supplier" && "تأمین‌کننده"}
                {userType === "worker" && "اوستاکار"}
                {userType === "corporate" && "خریدار شرکتی"}
              </CardDescription>
              <div className="flex justify-center gap-2 mt-2">
                <Badge variant="outline" className="bg-primary/10">
                  {userType === "customer" && "کاربر نقره‌ای"}
                  {userType === "supplier" && "فروشنده رسمی"}
                  {userType === "worker" && "متخصص تأیید شده"}
                  {userType === "corporate" && "شرکت معتبر"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">نام کامل: کاربر نمونه</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">ایمیل: example@mail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">تلفن: ۰۹۱۲۳۴۵۶۷۸۹</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">آدرس: تهران، خیابان نمونه</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">تاریخ عضویت: ۱۴۰۲/۰۱/۰۱</span>
                </div>
                {userType === "supplier" && (
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">نام شرکت: شرکت نمونه</span>
                  </div>
                )}
                {userType === "worker" && (
                  <div className="flex items-center gap-2">
                    <Tool className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">تخصص: برق‌کار</span>
                  </div>
                )}
              </div>

              <Separator className="my-4" />

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">تکمیل پروفایل</span>
                    <span className="text-sm text-muted-foreground">۸۰٪</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">اعتبارسنجی</span>
                    <span className="text-sm text-muted-foreground">۱۰۰٪</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/profile/edit">
                  <Edit className="ml-2 h-4 w-4" />
                  ویرایش پروفایل
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full" onClick={() => changeUserType("customer")}>
              خریدار
            </Button>
            <Button variant="outline" className="w-full" onClick={() => changeUserType("supplier")}>
              تأمین‌کننده
            </Button>
            <Button variant="outline" className="w-full" onClick={() => changeUserType("worker")}>
              اوستاکار
            </Button>
            <Button variant="outline" className="w-full" onClick={() => changeUserType("corporate")}>
              شرکتی
            </Button>
          </div>
        </div>

        <div className="md:col-span-2">
          <Tabs defaultValue="info">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="info">اطلاعات</TabsTrigger>
              <TabsTrigger value="orders">سفارشات</TabsTrigger>
              <TabsTrigger value="security">امنیت</TabsTrigger>
              <TabsTrigger value="documents">مدارک</TabsTrigger>
            </TabsList>

            <TabsContent value="info" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>اطلاعات شخصی</CardTitle>
                  <CardDescription>اطلاعات شخصی شما که در پروفایل نمایش داده می‌شود.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium mb-2">نام و نام خانوادگی</h3>
                      <p className="text-sm text-muted-foreground">کاربر نمونه</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-2">کد ملی</h3>
                      <p className="text-sm text-muted-foreground">۱۲۳۴۵۶۷۸۹۰</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-2">ایمیل</h3>
                      <p className="text-sm text-muted-foreground">example@mail.com</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-2">شماره تماس</h3>
                      <p className="text-sm text-muted-foreground">۰۹۱۲۳۴۵۶۷۸۹</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-2">آدرس</h3>
                      <p className="text-sm text-muted-foreground">تهران، خیابان نمونه، کوچه نمونه، پلاک ۱</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-2">کد پستی</h3>
                      <p className="text-sm text-muted-foreground">۱۲۳۴۵۶۷۸۹۰</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline">
                    <Link href="/profile/edit">ویرایش اطلاعات</Link>
                  </Button>
                </CardFooter>
              </Card>

              {userType === "supplier" && (
                <Card>
                  <CardHeader>
                    <CardTitle>اطلاعات شرکت</CardTitle>
                    <CardDescription>اطلاعات شرکت شما که برای خریداران نمایش داده می‌شود.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium mb-2">نام شرکت</h3>
                        <p className="text-sm text-muted-foreground">شرکت نمونه</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-2">شماره ثبت</h3>
                        <p className="text-sm text-muted-foreground">۱۲۳۴۵</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-2">کد اقتصادی</h3>
                        <p className="text-sm text-muted-foreground">۱۲۳۴۵۶۷۸۹۰۱۲</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-2">شناسه ملی</h3>
                        <p className="text-sm text-muted-foreground">۱۲۳۴۵۶۷۸۹۰</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-2">آدرس شرکت</h3>
                        <p className="text-sm text-muted-foreground">تهران، خیابان نمونه، کوچه نمونه، پلاک ۱</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-2">تلفن شرکت</h3>
                        <p className="text-sm text-muted-foreground">۰۲۱۱۲۳۴۵۶۷۸</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline">
                      <Link href="/profile/edit-company">ویرایش اطلاعات شرکت</Link>
                    </Button>
                  </CardFooter>
                </Card>
              )}

              {userType === "worker" && (
                <Card>
                  <CardHeader>
                    <CardTitle>اطلاعات تخصصی</CardTitle>
                    <CardDescription>اطلاعات تخصصی شما که برای مشتریان نمایش داده می‌شود.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium mb-2">تخصص اصلی</h3>
                        <p className="text-sm text-muted-foreground">برق‌کار</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-2">سابقه کار</h3>
                        <p className="text-sm text-muted-foreground">۵ سال</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-2">مدرک تحصیلی</h3>
                        <p className="text-sm text-muted-foreground">کارشناسی برق</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-2">گواهینامه‌ها</h3>
                        <p className="text-sm text-muted-foreground">گواهینامه فنی و حرفه‌ای</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-2">منطقه فعالیت</h3>
                        <p className="text-sm text-muted-foreground">تهران، شمال و مرکز</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-2">ساعات کاری</h3>
                        <p className="text-sm text-muted-foreground">۸ صبح تا ۸ شب</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline">
                      <Link href="/profile/edit-skills">ویرایش اطلاعات تخصصی</Link>
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="orders" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>سفارشات اخیر</CardTitle>
                  <CardDescription>لیست سفارشات اخیر شما در سایت</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                            <ShoppingBag className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">سفارش #۱۲۳۴۵</h4>
                            <p className="text-xs text-muted-foreground">تاریخ: ۱۴۰۲/۰۳/۱۵</p>
                          </div>
                        </div>
                        <Badge>تحویل شده</Badge>
                      </div>
                      <Separator className="my-4" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm">مبلغ: ۲,۵۰۰,۰۰۰ تومان</span>
                        <Button size="sm" variant="outline" asChild>
                          <Link href="/dashboard/orders/12345">مشاهده جزئیات</Link>
                        </Button>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                            <ShoppingBag className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">سفارش #۱۲۳۴۶</h4>
                            <p className="text-xs text-muted-foreground">تاریخ: ۱۴۰۲/۰۳/۱۰</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                          در حال ارسال
                        </Badge>
                      </div>
                      <Separator className="my-4" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm">مبلغ: ۱,۸۰۰,۰۰۰ تومان</span>
                        <Button size="sm" variant="outline" asChild>
                          <Link href="/dashboard/orders/12346">مشاهده جزئیات</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/dashboard/orders">مشاهده همه سفارشات</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>امنیت حساب کاربری</CardTitle>
                  <CardDescription>تنظیمات امنیتی حساب کاربری شما</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h3 className="text-sm font-medium">رمز عبور</h3>
                      <p className="text-xs text-muted-foreground">آخرین تغییر: ۳ ماه پیش</p>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="/profile/change-password">تغییر رمز عبور</Link>
                    </Button>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h3 className="text-sm font-medium">احراز هویت دو مرحله‌ای</h3>
                      <p className="text-xs text-muted-foreground">امنیت حساب خود را افزایش دهید</p>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="/profile/two-factor">فعال‌سازی</Link>
                    </Button>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h3 className="text-sm font-medium">دستگاه‌های فعال</h3>
                      <p className="text-xs text-muted-foreground">مشاهده و مدیریت دستگاه‌های متصل</p>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="/profile/devices">مشاهده دستگاه‌ها</Link>
                    </Button>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h3 className="text-sm font-medium">سابقه ورود</h3>
                      <p className="text-xs text-muted-foreground">مشاهده سابقه ورود به حساب کاربری</p>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="/profile/login-history">مشاهده سابقه</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documents" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>مدارک و اسناد</CardTitle>
                  <CardDescription>مدارک و اسناد آپلود شده توسط شما</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userType === "customer" && (
                      <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                              <FileText className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="text-sm font-medium">کارت ملی</h4>
                              <p className="text-xs text-muted-foreground">آپلود شده در تاریخ: ۱۴۰۲/۰۱/۱۵</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="border-green-500 text-green-500">
                            تأیید شده
                          </Badge>
                        </div>
                      </div>
                    )}

                    {userType === "supplier" && (
                      <>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                                <FileText className="h-5 w-5" />
                              </div>
                              <div>
                                <h4 className="text-sm font-medium">مجوز فعالیت</h4>
                                <p className="text-xs text-muted-foreground">آپلود شده در تاریخ: ۱۴۰۲/۰۱/۱۵</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="border-green-500 text-green-500">
                              تأیید شده
                            </Badge>
                          </div>
                        </div>

                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                                <FileText className="h-5 w-5" />
                              </div>
                              <div>
                                <h4 className="text-sm font-medium">روزنامه رسمی</h4>
                                <p className="text-xs text-muted-foreground">آپلود شده در تاریخ: ۱۴۰۲/۰۱/۱۵</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="border-green-500 text-green-500">
                              تأیید شده
                            </Badge>
                          </div>
                        </div>

                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                                <FileText className="h-5 w-5" />
                              </div>
                              <div>
                                <h4 className="text-sm font-medium">گواهی ارزش افزوده</h4>
                                <p className="text-xs text-muted-foreground">آپلود شده در تاریخ: ۱۴۰۲/۰۱/۱۵</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                              در حال بررسی
                            </Badge>
                          </div>
                        </div>
                      </>
                    )}

                    {userType === "worker" && (
                      <>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                                <FileText className="h-5 w-5" />
                              </div>
                              <div>
                                <h4 className="text-sm font-medium">کارت ملی</h4>
                                <p className="text-xs text-muted-foreground">آپلود شده در تاریخ: ۱۴۰۲/۰۱/۱۵</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="border-green-500 text-green-500">
                              تأیید شده
                            </Badge>
                          </div>
                        </div>

                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                                <FileText className="h-5 w-5" />
                              </div>
                              <div>
                                <h4 className="text-sm font-medium">گواهینامه مهارت</h4>
                                <p className="text-xs text-muted-foreground">آپلود شده در تاریخ: ۱۴۰۲/۰۱/۱۵</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="border-green-500 text-green-500">
                              تأیید شده
                            </Badge>
                          </div>
                        </div>
                      </>
                    )}

                    {userType === "corporate" && (
                      <>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                                <FileText className="h-5 w-5" />
                              </div>
                              <div>
                                <h4 className="text-sm font-medium">مجوز فعالیت</h4>
                                <p className="text-xs text-muted-foreground">آپلود شده در تاریخ: ۱۴۰۲/۰۱/۱۵</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="border-green-500 text-green-500">
                              تأیید شده
                            </Badge>
                          </div>
                        </div>

                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                                <FileText className="h-5 w-5" />
                              </div>
                              <div>
                                <h4 className="text-sm font-medium">معرفی‌نامه سازمانی</h4>
                                <p className="text-xs text-muted-foreground">آپلود شده در تاریخ: ۱۴۰۲/۰۱/۱۵</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="border-green-500 text-green-500">
                              تأیید شده
                            </Badge>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/profile/upload-documents">آپلود مدرک جدید</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
