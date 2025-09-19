"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Search, Filter, Download, Trash, Edit, Eye, Plus, Calendar, Clock, MapPin } from "lucide-react"

interface Service {
  id: string
  title: string
  basePrice: string
  status: "active" | "inactive" | "pending"
  category: string
  location: string
}

export function ServiceManagement() {
  const [services, setServices] = useState<Service[]>([
    {
      id: "1",
      title: "نصب و راه‌اندازی برق صنعتی",
      basePrice: "از ۵۰۰,۰۰۰",
      status: "active",
      category: "برق صنعتی",
      location: "تهران",
    },
    {
      id: "2",
      title: "تعمیر موتورهای الکتریکی",
      basePrice: "از ۸۰۰,۰۰۰",
      status: "active",
      category: "تعمیرات",
      location: "تهران، کرج",
    },
    {
      id: "3",
      title: "عیب‌یابی سیستم‌های کنترلی",
      basePrice: "از ۱,۲۰۰,۰۰۰",
      status: "pending",
      category: "عیب‌یابی",
      location: "تهران",
    },
    {
      id: "4",
      title: "نصب دوربین مداربسته صن��تی",
      basePrice: "از ۱,۵۰۰,۰۰۰",
      status: "active",
      category: "دوربین مداربسته",
      location: "تهران، اصفهان",
    },
    {
      id: "5",
      title: "طراحی و اجرای تابلو برق",
      basePrice: "از ۲,۰۰۰,۰۰۰",
      status: "inactive",
      category: "تابلو برق",
      location: "تهران",
    },
  ])

  const getServiceStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge>فعال</Badge>
      case "inactive":
        return (
          <Badge variant="outline" className="border-yellow-500 text-yellow-500">
            غیرفعال
          </Badge>
        )
      case "pending":
        return (
          <Badge variant="outline" className="border-blue-500 text-blue-500">
            در انتظار تأیید
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>مدیریت خدمات</CardTitle>
        <CardDescription>مدیریت و بررسی خدمات قابل ارائه شما</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="جستجوی خدمات..." className="pr-8" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
            <Button>
              <Plus className="ml-2 h-4 w-4" />
              <span>افزودن خدمت</span>
            </Button>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>عنوان خدمت</TableHead>
                <TableHead>قیمت پایه</TableHead>
                <TableHead>دسته‌بندی</TableHead>
                <TableHead>منطقه فعالیت</TableHead>
                <TableHead>وضعیت</TableHead>
                <TableHead className="text-left">عملیات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium">{service.title}</TableCell>
                  <TableCell>{service.basePrice} تومان</TableCell>
                  <TableCell>{service.category}</TableCell>
                  <TableCell>{service.location}</TableCell>
                  <TableCell>{getServiceStatusBadge(service.status)}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">منوی عملیات</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="flex items-center">
                          <Eye className="ml-2 h-4 w-4" />
                          <span>مشاهده</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center">
                          <Edit className="ml-2 h-4 w-4" />
                          <span>ویرایش</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center">
                          <Calendar className="ml-2 h-4 w-4" />
                          <span>زمان‌های ارائه</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center">
                          <Clock className="ml-2 h-4 w-4" />
                          <span>ساعات کاری</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center">
                          <MapPin className="ml-2 h-4 w-4" />
                          <span>مناطق تحت پوشش</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center text-red-600">
                          <Trash className="ml-2 h-4 w-4" />
                          <span>حذف</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">نمایش ۱ تا ۵ از ۵ خدمت</div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            قبلی
          </Button>
          <Button variant="outline" size="sm" disabled>
            بعدی
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
