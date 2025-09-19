"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Filter, Search, X, SlidersHorizontal } from "lucide-react"
import type { ProductFilters as ProductFiltersType } from "@/hooks/use-product-filters"

interface ProductFiltersProps {
  filters: ProductFiltersType
  onBrandChange: (brands: string[]) => void
  onPriceRangeChange: (priceRange: string) => void
  onAvailabilityChange: (availability: string) => void
  onDiscountChange: (discount: string) => void
  onSearchChange: (query: string) => void
  onClearAll: () => void
  hasActiveFilters: boolean
  availableBrands: string[]
}

export function ProductFilters({
  filters,
  onBrandChange,
  onPriceRangeChange,
  onAvailabilityChange,
  onDiscountChange,
  onSearchChange,
  onClearAll,
  hasActiveFilters,
  availableBrands,
}: ProductFiltersProps) {
  const [searchQuery, setSearchQuery] = useState(filters.searchQuery)

  const handleBrandToggle = (brand: string) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand]
    onBrandChange(newBrands)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearchChange(searchQuery)
  }

  const priceRanges = [
    { id: "all", name: "همه قیمت‌ها" },
    { id: "under-20m", name: "کمتر از ۲۰ میلیون تومان" },
    { id: "20m-30m", name: "۲۰ تا ۳۰ میلیون تومان" },
    { id: "over-30m", name: "بیشتر از ۳۰ میلیون تومان" },
  ]

  const availabilityOptions = [
    { id: "all", name: "همه" },
    { id: "in-stock", name: "موجود در انبار" },
    { id: "out-of-stock", name: "ناموجود" },
  ]

  const discountOptions = [
    { id: "all", name: "همه" },
    { id: "discounted", name: "تخفیف‌دار" },
    { id: "no-discount", name: "بدون تخفیف" },
  ]

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold flex items-center">
          <Filter className="h-5 w-5 ml-2" />
          فیلترها
        </h3>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={onClearAll} className="text-primary">
            <X className="h-4 w-4 ml-1" />
            پاک کردن
          </Button>
        )}
      </div>

      {/* نمایش فیلترهای فعال */}
      {hasActiveFilters && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {filters.brands.map((brand) => (
              <Badge
                key={brand}
                variant="secondary"
                className="cursor-pointer"
                onClick={() => handleBrandToggle(brand)}
              >
                {brand}
                <X className="h-3 w-3 mr-1" />
              </Badge>
            ))}
            {filters.priceRange !== "all" && (
              <Badge variant="secondary" className="cursor-pointer" onClick={() => onPriceRangeChange("all")}>
                {priceRanges.find((p) => p.id === filters.priceRange)?.name}
                <X className="h-3 w-3 mr-1" />
              </Badge>
            )}
            {filters.availability !== "all" && (
              <Badge variant="secondary" className="cursor-pointer" onClick={() => onAvailabilityChange("all")}>
                {availabilityOptions.find((a) => a.id === filters.availability)?.name}
                <X className="h-3 w-3 mr-1" />
              </Badge>
            )}
            {filters.discount !== "all" && (
              <Badge variant="secondary" className="cursor-pointer" onClick={() => onDiscountChange("all")}>
                {discountOptions.find((d) => d.id === filters.discount)?.name}
                <X className="h-3 w-3 mr-1" />
              </Badge>
            )}
          </div>
        </div>
      )}

      <div className="space-y-6">
        {/* جستجو */}
        <div>
          <h4 className="font-medium mb-3 flex items-center">
            <Search className="h-4 w-4 ml-2" />
            جستجو
          </h4>
          <form onSubmit={handleSearchSubmit}>
            <div className="relative">
              <Input
                type="text"
                placeholder="جستجو در محصولات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </form>
        </div>

        {/* فیلتر برند */}
        <div>
          <h4 className="font-medium mb-3">برند</h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {availableBrands.map((brand) => (
              <div key={brand} className="flex items-center">
                <input
                  type="checkbox"
                  id={`brand-${brand}`}
                  checked={filters.brands.includes(brand)}
                  onChange={() => handleBrandToggle(brand)}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor={`brand-${brand}`} className="mr-2 text-sm cursor-pointer">
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* فیلتر قیمت */}
        <div>
          <h4 className="font-medium mb-3 flex items-center">
            <SlidersHorizontal className="h-4 w-4 ml-2" />
            محدوده قیمت
          </h4>
          <div className="space-y-2">
            {priceRanges.map((price) => (
              <div key={price.id} className="flex items-center">
                <input
                  type="radio"
                  id={`price-${price.id}`}
                  name="price"
                  checked={filters.priceRange === price.id}
                  onChange={() => onPriceRangeChange(price.id)}
                  className="h-4 w-4 rounded-full border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor={`price-${price.id}`} className="mr-2 text-sm cursor-pointer">
                  {price.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* فیلتر موجودی */}
        <div>
          <h4 className="font-medium mb-3">وضعیت موجودی</h4>
          <div className="space-y-2">
            {availabilityOptions.map((item) => (
              <div key={item.id} className="flex items-center">
                <input
                  type="radio"
                  id={`availability-${item.id}`}
                  name="availability"
                  checked={filters.availability === item.id}
                  onChange={() => onAvailabilityChange(item.id)}
                  className="h-4 w-4 rounded-full border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor={`availability-${item.id}`} className="mr-2 text-sm cursor-pointer">
                  {item.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* فیلتر تخفیف */}
        <div>
          <h4 className="font-medium mb-3">تخفیف</h4>
          <div className="space-y-2">
            {discountOptions.map((item) => (
              <div key={item.id} className="flex items-center">
                <input
                  type="radio"
                  id={`discount-${item.id}`}
                  name="discount"
                  checked={filters.discount === item.id}
                  onChange={() => onDiscountChange(item.id)}
                  className="h-4 w-4 rounded-full border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor={`discount-${item.id}`} className="mr-2 text-sm cursor-pointer">
                  {item.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
