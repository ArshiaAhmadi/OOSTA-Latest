"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Search, Filter, Download, Trash, Edit, Eye, Plus, Copy, Archive, Tag } from "lucide-react"

interface Product {
  id: string
  name: string
  price: string
  stock: number
  status: "active" | "inactive" | "pending" | "out_of_stock"
  category: string
}

export function ProductManagement() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "پمپ آب صنعتی",
      price: "۲,۵۰۰,۰۰۰",
      stock: 15,
      status: "active",
      category: "پمپ",
    },
    {
      id: "2",
      name: "موتور برق صنعتی",
      price: "۵,۸۰۰,۰۰۰",
      stock: 8,
      status: "active",
      category: "موتور برق",
    },
    {
      id: "3",
      name: "کمپرسور هوا",
      price: "۳,۲۰۰,۰۰۰",
      stock: 0,
      status: "out_of_stock",
      category: "کمپرسور",
    },
    {
      id: "4",
      name: "دستگاه جوش",
      price: "۴,۵۰۰,۰۰۰",
      stock: 5,
      status: "active",
      category: "جوشکاری",
    },
    {
      id: "5",
      name: "دریل صنعتی",
      price: "۱,۸۰۰,۰۰۰",
      stock: 12,
      status: "active",
      category: "ابزار برقی",
    },
  ])

  const getProductStatusBadge = (status: string) => {
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
      case "out_of_stock":
        return (
          <Badge variant="outline" className="border-red-500 text-red-500">
            ناموجود
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>مدیریت محصولات</CardTitle>
        <CardDescription>مدیریت و بررسی محصولات شما در سایت</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="جستجوی محصول..." className="pr-8" />
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
              <span>افزودن محصول</span>
            </Button>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>نام محصول</TableHead>
                <TableHead>قیمت</TableHead>
                <TableHead>موجودی</TableHead>
                <TableHead>دسته‌بندی</TableHead>
                <TableHead>وضعیت</TableHead>
                <TableHead className="text-left">عملیات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.price} تومان</TableCell>
                  <TableCell>{product.stock} عدد</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{getProductStatusBadge(product.status)}</TableCell>
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
                          <Copy className="ml-2 h-4 w-4" />
                          <span>کپی محصول</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center">
                          <Tag className="ml-2 h-4 w-4" />
                          <span>تخفیف ویژه</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center text-yellow-600">
                          <Archive className="ml-2 h-4 w-4" />
                          <span>بایگانی</span>
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
        <div className="text-sm text-muted-foreground">نمایش ۱ تا ۵ از ۵ محصول</div>
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
