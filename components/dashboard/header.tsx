"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, Search, Menu, X, Settings, LogOut, User, ShoppingCart, HelpCircle, Moon, Sun } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"

interface HeaderProps {
  sidebarOpen: boolean
  onSidebarOpenChange: (open: boolean) => void
  userType: "customer" | "supplier" | "worker" | "admin" | "corporate"
}

export function Header({ sidebarOpen, onSidebarOpenChange, userType }: HeaderProps) {
  const [notifications, setNotifications] = useState(5)
  const { theme, setTheme } = useTheme()

  const userTypeLabels = {
    customer: "خریدار",
    supplier: "تأمین‌کننده",
    worker: "اوستاکار",
    admin: "مدیر سایت",
    corporate: "خریدار شرکتی",
  }

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => onSidebarOpenChange(!sidebarOpen)}>
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          <span className="sr-only">{sidebarOpen ? "بستن منو" : "باز کردن منو"}</span>
        </Button>

        <div className="hidden md:flex md:items-center md:gap-4 md:mr-4">
          <div className="relative">
            <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="جستجو..." className="w-[200px] lg:w-[300px] pr-8 rounded-full" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          <span className="sr-only">تغییر تم</span>
        </Button>

        <Button variant="ghost" size="icon" className="text-muted-foreground relative" asChild>
          <Link href="/dashboard/cart">
            <ShoppingCart size={20} />
            {userType === "customer" || userType === "corporate" ? (
              <Badge className="absolute -top-1 -left-1 h-5 w-5 flex items-center justify-center p-0">3</Badge>
            ) : null}
            <span className="sr-only">سبد خرید</span>
          </Link>
        </Button>

        <Button variant="ghost" size="icon" className="text-muted-foreground relative" asChild>
          <Link href="/dashboard/notifications">
            <Bell size={20} />
            {notifications > 0 && (
              <Badge className="absolute -top-1 -left-1 h-5 w-5 flex items-center justify-center p-0">
                {notifications}
              </Badge>
            )}
            <span className="sr-only">اعلان‌ها</span>
          </Link>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/abstract-geometric-shapes.png" alt="تصویر کاربر" />
                <AvatarFallback>کاربر</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <div className="flex items-center justify-start gap-2 p-2">
              <div className="flex flex-col space-y-0.5">
                <p className="text-sm font-medium">کاربر نمونه</p>
                <p className="text-xs text-muted-foreground">{userTypeLabels[userType]}</p>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/profile" className="cursor-pointer flex w-full items-center">
                <User className="ml-2 h-4 w-4" />
                <span>پروفایل کاربری</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard/settings" className="cursor-pointer flex w-full items-center">
                <Settings className="ml-2 h-4 w-4" />
                <span>تنظیمات</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/help" className="cursor-pointer flex w-full items-center">
                <HelpCircle className="ml-2 h-4 w-4" />
                <span>راهنما و پشتیبانی</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/logout" className="cursor-pointer flex w-full items-center text-red-500">
                <LogOut className="ml-2 h-4 w-4" />
                <span>خروج</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
