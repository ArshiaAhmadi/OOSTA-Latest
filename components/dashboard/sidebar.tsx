"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Home,
  ShoppingBag,
  Package,
  Users,
  Settings,
  CreditCard,
  FileText,
  MessageSquare,
  BarChart2,
  Heart,
  Truck,
  PenToolIcon as Tool,
  Building,
  Shield,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

interface SidebarProps {
  userType: "customer" | "supplier" | "worker" | "admin" | "corporate"
  open: boolean
  onOpenChange: (open: boolean) => void
}

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
  userTypes: Array<"customer" | "supplier" | "worker" | "admin" | "corporate">
}

export function Sidebar({ userType, open, onOpenChange }: SidebarProps) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  // Reset collapsed state when sidebar is closed on mobile
  useEffect(() => {
    if (!open) {
      setCollapsed(false)
    }
  }, [open])

  const navItems: NavItem[] = [
    {
      title: "داشبورد",
      href: "/dashboard",
      icon: <Home size={20} />,
      userTypes: ["customer", "supplier", "worker", "admin", "corporate"],
    },
    {
      title: "سفارشات",
      href: "/dashboard/orders",
      icon: <ShoppingBag size={20} />,
      userTypes: ["customer", "supplier", "admin", "corporate"],
    },
    {
      title: "محصولات",
      href: "/dashboard/products",
      icon: <Package size={20} />,
      userTypes: ["supplier", "admin"],
    },
    {
      title: "خدمات",
      href: "/dashboard/services",
      icon: <Tool size={20} />,
      userTypes: ["worker", "admin"],
    },
    {
      title: "کاربران",
      href: "/dashboard/users",
      icon: <Users size={20} />,
      userTypes: ["admin"],
    },
    {
      title: "تأمین‌کنندگان",
      href: "/dashboard/suppliers",
      icon: <Building size={20} />,
      userTypes: ["admin"],
    },
    {
      title: "مالی",
      href: "/dashboard/finance",
      icon: <CreditCard size={20} />,
      userTypes: ["customer", "supplier", "worker", "admin", "corporate"],
    },
    {
      title: "فاکتورها",
      href: "/dashboard/invoices",
      icon: <FileText size={20} />,
      userTypes: ["customer", "supplier", "worker", "admin", "corporate"],
    },
    {
      title: "پیام‌ها",
      href: "/dashboard/messages",
      icon: <MessageSquare size={20} />,
      userTypes: ["customer", "supplier", "worker", "admin", "corporate"],
    },
    {
      title: "گزارشات",
      href: "/dashboard/reports",
      icon: <BarChart2 size={20} />,
      userTypes: ["supplier", "admin", "corporate"],
    },
    {
      title: "علاقه‌مندی‌ها",
      href: "/dashboard/favorites",
      icon: <Heart size={20} />,
      userTypes: ["customer", "corporate"],
    },
    {
      title: "ارسال و تحویل",
      href: "/dashboard/shipping",
      icon: <Truck size={20} />,
      userTypes: ["customer", "supplier", "admin", "corporate"],
    },
    {
      title: "امنیت",
      href: "/dashboard/security",
      icon: <Shield size={20} />,
      userTypes: ["customer", "supplier", "worker", "admin", "corporate"],
    },
    {
      title: "تنظیمات",
      href: "/dashboard/settings",
      icon: <Settings size={20} />,
      userTypes: ["customer", "supplier", "worker", "admin", "corporate"],
    },
    {
      title: "راهنما و پشتیبانی",
      href: "/dashboard/help",
      icon: <HelpCircle size={20} />,
      userTypes: ["customer", "supplier", "worker", "admin", "corporate"],
    },
  ]

  const filteredNavItems = navItems.filter((item) => item.userTypes.includes(userType))

  return (
    <>
      {/* Backdrop for mobile */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => onOpenChange(false)}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex flex-col border-l bg-background transition-all duration-300",
          open ? "translate-x-0" : "translate-x-full lg:translate-x-0",
          collapsed ? "lg:w-20" : "lg:w-64",
        )}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <Link href="/" className="flex items-center gap-2">
            {!collapsed && <span className="text-xl font-bold">اوستا</span>}
            <img src="/abstract-logo.png" alt="لوگو" className="h-8 w-8" />
          </Link>
          <Button variant="ghost" size="icon" className="hidden lg:flex" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </Button>
        </div>

        <ScrollArea className="flex-1 py-2">
          <nav className="grid gap-1 px-2">
            {filteredNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                  collapsed && "justify-center px-0",
                )}
              >
                {item.icon}
                {!collapsed && <span>{item.title}</span>}
              </Link>
            ))}
          </nav>
        </ScrollArea>

        <div className="p-4 border-t">
          <div className={cn("flex items-center gap-3 rounded-lg bg-muted p-3", collapsed && "justify-center")}>
            <div className="flex-shrink-0">
              <img src="/people-supporting-each-other.png" alt="پشتیبانی" className="h-10 w-10 rounded-full" />
            </div>
            {!collapsed && (
              <div className="flex flex-col">
                <span className="text-sm font-medium">نیاز به کمک دارید؟</span>
                <Link href="/support" className="text-xs text-primary">
                  تماس با پشتیبانی
                </Link>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  )
}
