"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Sidebar } from "./sidebar"
import { Header } from "./header"
import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

interface DashboardLayoutProps {
  children: React.ReactNode
  userType: "customer" | "supplier" | "worker" | "admin" | "corporate"
}

export function DashboardLayout({ children, userType }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 1024px)")

  useEffect(() => {
    if (isDesktop) {
      setSidebarOpen(true)
    } else {
      setSidebarOpen(false)
    }
  }, [isDesktop])

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="flex h-screen overflow-hidden bg-background">
        <Sidebar userType={userType} open={sidebarOpen} onOpenChange={setSidebarOpen} />

        <div className="flex flex-col flex-1 overflow-hidden">
          <Header sidebarOpen={sidebarOpen} onSidebarOpenChange={setSidebarOpen} userType={userType} />

          <main
            className={cn(
              "flex-1 overflow-y-auto p-4 md:p-6 transition-all",
              sidebarOpen && isDesktop ? "lg:mr-64" : "",
            )}
          >
            <div className="mx-auto max-w-7xl">{children}</div>
          </main>
        </div>
        <Toaster />
      </div>
    </ThemeProvider>
  )
}
