import type * as React from "react"

import { cn } from "@/lib/utils"

// 🚫 وابستگی به «class-variance-authority» حذف شد – پیاده‌سازی بسیار سادهٔ cva
type Variant = "default" | "secondary" | "destructive" | "outline"

function simpleCva(base: string, variants: Record<Variant, string>) {
  return (variant: Variant = "default") => `${base} ${variants[variant]}`
}

const badgeVariants = simpleCva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
    outline: "text-foreground",
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return 
}

export { Badge, badgeVariants }
