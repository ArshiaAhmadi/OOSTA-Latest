"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Search, UserPlus, Filter, Download, Trash, Edit, Eye, Lock, CheckCircle } from "lucide-react"

interface User {
  id: string
  name: string
  email: string
  type: "customer" | "supplier" | "worker" | "admin" | "corporate"
  status: "active" | "pending" | "blocked"
  registrationDate: string
}

export function UserManagement() {
  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      name: "کاربر نمونه ۱",
      email: "user1@example.com",
      type: "customer",
      status: "active",
      registrationDate: "۱۴۰۲/۰۱/۰۱",
    },
    {
      id: "2",
      name: "شرکت نمونه",
      email: "company@example.com",
      type: "supplier",
      status: "active",
      registrationDate: "۱۴۰۲/۰۱/۱۵",
    },
    {
      id: "3",
      name: "اوستاکار نمونه",
      email: "worker@example.com",
      type: "worker",
      status: "pending",
      registrationDate: "۱۴۰۲/۰۲/۱۰",
    },
    {
      id: "4",
      name: "شرکت دولتی نمونه",
      email: "gov@example.com",
      type: "corporate",
      status: "active",
      registrationDate: "۱۴۰۲/۰۲/۲۰",
    },
    {
      id: "5",
      name: "کاربر مسدود شده",
      email: "blocked@example.com",
      type: "customer",
      status: "blocked",
      registrationDate: "۱۴۰۲/۰۳/۰۱",
    },
  ])

  const getUserTypeLabel = (type: string) => {
    switch (type) {
      case "customer":
        return "خریدار"
      case "supplier":
        return "تأمین‌کننده"
      case "worker":
        return "اوستاکار"
      case "admin":
        return "ادمین"
      case "corporate":
        return "شرکتی"
      default:
        return type
    }
  }

  const getUserStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge>فعال</Badge>
      case "pending":
        return (
          <Badge variant="outline" className="border-yellow-500 text-yellow-500">
            در انتظار تأیید
          </Badge>
        )
      case "blocked":
        return (
          <Badge variant="outline" className="border-red-500 text-red-500">
            مسدود شده
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>مدیریت کاربران</CardTitle>
        <CardDescription>مدیریت و بررسی کاربران سایت</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="جستجوی کاربر..." className="pr-8" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
            <Button>
              <UserPlus className="ml-2 h-4 w-4" />
              <span>افزودن کاربر</span>
            </Button>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>نام کاربر</TableHead>
                <TableHead>ایمیل</TableHead>
                <TableHead>نوع کاربر</TableHead>
                <TableHead>وضعیت</TableHead>
                <TableHead>تاریخ ثبت‌نام</TableHead>
                <TableHead className="text-left">عملیات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{getUserTypeLabel(user.type)}</TableCell>
                  <TableCell>{getUserStatusBadge(user.status)}</TableCell>
                  <TableCell>{user.registrationDate}</TableCell>
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
                        {user.status === "pending" && (
                          <DropdownMenuItem className="flex items-center text-green-600">
                            <CheckCircle className="ml-2 h-4 w-4" />
                            <span>تأیید کاربر</span>
                          </DropdownMenuItem>
                        )}
                        {user.status === "active" ? (
                          <DropdownMenuItem className="flex items-center text-yellow-600">
                            <Lock className="ml-2 h-4 w-4" />
                            <span>مسدود کردن</span>
                          </DropdownMenuItem>
                        ) : (
                          user.status === "blocked" && (
                            <DropdownMenuItem className="flex items-center text-green-600">
                              <CheckCircle className="ml-2 h-4 w-4" />
                              <span>فعال‌سازی</span>
                            </DropdownMenuItem>
                          )
                        )}
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
        <div className="text-sm text-muted-foreground">نمایش ۱ تا ۵ از ۵ کاربر</div>
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
