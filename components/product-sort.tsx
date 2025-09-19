"use client"

import { Button } from "@/components/ui/button"
import { Grid3X3, List } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProductSortProps {
  sortBy: string
  onSortChange: (sortBy: string) => void
  totalCount: number
  filteredCount: number
  viewMode: "grid" | "list"
  onViewModeChange: (mode: "grid" | "list") => void
  className?: string
}

export function ProductSort({
  sortBy,
  onSortChange,
  totalCount,
  filteredCount,
  viewMode,
  onViewModeChange,
  className,
}: ProductSortProps) {
  const sortOptions = [
    { value: "popular", label: "پرفروش‌ترین" },
    { value: "newest", label: "جدیدترین" },
    { value: "price-low", label: "ارزان‌ترین" },
    { value: "price-high", label: "گران‌ترین" },
    { value: "rating", label: "بیشترین امتیاز" },
    { value: "name", label: "نام محصول" },
  ]

  return (
    <div className={cn("flex flex-col sm:flex-row sm:items-center justify-between gap-4", className)}>
      <div>
        <h2 className="text-xl font-bold">محصولات</h2>
        <p className="text-sm text-muted-foreground">
          {filteredCount === totalCount ? `${totalCount} محصول` : `${filteredCount} از ${totalCount} محصول`}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <span className="text-sm ml-2">مرتب‌سازی:</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="text-sm border rounded-md p-2 bg-transparent min-w-[140px]"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center border rounded-md">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="icon"
            className="h-9 w-9"
            onClick={() => onViewModeChange("grid")}
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="icon"
            className="h-9 w-9"
            onClick={() => onViewModeChange("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
