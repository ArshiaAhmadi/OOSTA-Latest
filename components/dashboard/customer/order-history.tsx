"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Search, Filter, Download, Eye, FileText, MessageSquare, RotateCcw, Truck } from "lucide-react"

interface Order {
  id: string
  orderNumber: string
  date: string
  total: string
  status: "delivered" | "shipping" | "processing" | "cancelled" | "returned"
  paymentStatus: "paid" | "pending" | "failed"
}

export function OrderHistory() {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "1",
      orderNumber: "#۱۲۳۴۵",
      date: "۱۴۰۲/۰۳/۱۵",
      total: "۲,۵۰۰,۰۰۰",
      status: "delivered",
      paymentStatus: "paid",
    },
    {
      id: "2",
      orderNumber: "#۱۲۳۴۶",
      date: "۱۴۰۲/۰۳/۱۰",
      total: "۱,۸۰۰,۰۰۰",
      status: "shipping",
      paymentStatus: "paid",
    },
    {
      id: "3",
      orderNumber: "#۱۲۳۴۷",
      date: "۱۴۰۲/۰۳/۰۵",
      total: "۳,۲۰۰,۰۰۰",
      status: "cancelled",
      paymentStatus: "failed",
    },
    {
      id: "4",
      orderNumber: "#۱۲۳۴۸",
      date: "۱۴۰۲/۰۲/۲۵",
      total: "۴,۵۰۰,۰۰۰",
      status: "delivered",
      paymentStatus: "paid",
    },
    {
      id: "5",
      orderNumber: "#۱۲۳۴۹",
      date: "۱۴۰۲/۰۲/۲۰",
      total: "۱,۲۰۰,۰۰۰",
      status: "returned",
      paymentStatus: "paid",
    },
  ])

  const getOrderStatusBadge = (status: string) => {
    switch (status) {
      case "delivered":
        return <Badge>تحویل شده</Badge>
      case "shipping":
        return (
          <Badge variant="outline" className="border-yellow-500 text-yellow-500">
            در حال ارسال
          </Badge>
        )
      case "processing":
        return (
          <Badge variant="outline" className="border-blue-500 text-blue-500">
            در حال پردازش
          </Badge>
        )
      case "cancelled":
        return (
          <Badge variant="outline" className="border-red-500 text-red-500">
            لغو شده
          </Badge>
        )
      case "returned":
        return (
          <Badge variant="outline" className="border-purple-500 text-purple-500">
            مرجوع شده
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getPaymentStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return (
          <Badge variant="outline" className="border-green-500 text-green-500">
            پرداخت شده
          </Badge>
        )
      case "pending":
        return (
          <Badge variant="outline" className="border-yellow-500 text-yellow-500">
            در انتظار پرداخت
          </Badge>
        )
      case "failed":
        return (
          <Badge variant="outline" className="border-red-500 text-red-500">
            ناموفق
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>تاریخچه سفارشات</CardTitle>
        <CardDescription>مشاهده و پیگیری سفارشات شما</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="جستجوی سفارش..." className="pr-8" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>شماره سفارش</TableHead>
                <TableHead>تاریخ</TableHead>
                <TableHead>مبلغ کل</TableHead>
                <TableHead>وضعیت سفارش</TableHead>
                <TableHead>وضعیت پرداخت</TableHead>
                <TableHead className="text-left">عملیات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.orderNumber}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.total} تومان</TableCell>
                  <TableCell>{getOrderStatusBadge(order.status)}</TableCell>
                  <TableCell>{getPaymentStatusBadge(order.paymentStatus)}</TableCell>
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
                          <span>مشاهده جزئیات</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center">
                          <FileText className="ml-2 h-4 w-4" />
                          <span>مشاهده فاکتور</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center">
                          <Truck className="ml-2 h-4 w-4" />
                          <span>پیگیری ارسال</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center">
                          <MessageSquare className="ml-2 h-4 w-4" />
                          <span>پشتیبانی</span>
                        </DropdownMenuItem>
                        {(order.status === "processing" || order.status === "shipping") && (
                          <DropdownMenuItem className="flex items-center text-red-600">
                            <RotateCcw className="ml-2 h-4 w-4" />
                            <span>درخواست لغو</span>
                          </DropdownMenuItem>
                        )}
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
        <div className="text-sm text-muted-foreground">نمایش ۱ تا ۵ از ۵ سفارش</div>
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
