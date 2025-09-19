"use client"

import { useState, useMemo, useCallback } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export interface ProductFilters {
  brands: string[]
  priceRange: string
  availability: string
  discount: string
  sortBy: string
  searchQuery: string
}

export interface Product {
  id: number
  name: string
  price: number
  discountPrice?: number | null
  rating: number
  brand: string
  inStock: boolean
  isNew: boolean
  slug: string
}

interface UseProductFiltersProps {
  products: Product[]
}

export function useProductFilters({ products }: UseProductFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Initialize filters from URL params
  const [filters, setFilters] = useState<ProductFilters>({
    brands: searchParams.get("brands")?.split(",") || [],
    priceRange: searchParams.get("priceRange") || "all",
    availability: searchParams.get("availability") || "all",
    discount: searchParams.get("discount") || "all",
    sortBy: searchParams.get("sortBy") || "popular",
    searchQuery: searchParams.get("q") || "",
  })

  // Update URL when filters change
  const updateURL = useCallback(
    (newFilters: ProductFilters) => {
      const params = new URLSearchParams()

      if (newFilters.brands.length > 0) {
        params.set("brands", newFilters.brands.join(","))
      }
      if (newFilters.priceRange !== "all") {
        params.set("priceRange", newFilters.priceRange)
      }
      if (newFilters.availability !== "all") {
        params.set("availability", newFilters.availability)
      }
      if (newFilters.discount !== "all") {
        params.set("discount", newFilters.discount)
      }
      if (newFilters.sortBy !== "popular") {
        params.set("sortBy", newFilters.sortBy)
      }
      if (newFilters.searchQuery) {
        params.set("q", newFilters.searchQuery)
      }

      const newURL = params.toString() ? `?${params.toString()}` : ""
      router.replace(newURL, { scroll: false })
    },
    [router],
  )

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products]

    // Apply brand filter
    if (filters.brands.length > 0) {
      filtered = filtered.filter((product) => filters.brands.includes(product.brand))
    }

    // Apply price range filter
    if (filters.priceRange !== "all") {
      filtered = filtered.filter((product) => {
        const price = product.discountPrice || product.price
        switch (filters.priceRange) {
          case "under-20m":
            return price < 20000000
          case "20m-30m":
            return price >= 20000000 && price <= 30000000
          case "over-30m":
            return price > 30000000
          default:
            return true
        }
      })
    }

    // Apply availability filter
    if (filters.availability !== "all") {
      filtered = filtered.filter((product) => {
        switch (filters.availability) {
          case "in-stock":
            return product.inStock
          case "out-of-stock":
            return !product.inStock
          default:
            return true
        }
      })
    }

    // Apply discount filter
    if (filters.discount !== "all") {
      filtered = filtered.filter((product) => {
        switch (filters.discount) {
          case "discounted":
            return product.discountPrice !== null
          case "no-discount":
            return product.discountPrice === null
          default:
            return true
        }
      })
    }

    // Apply search query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase()
      filtered = filtered.filter(
        (product) => product.name.toLowerCase().includes(query) || product.brand.toLowerCase().includes(query),
      )
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "price-low":
          return (a.discountPrice || a.price) - (b.discountPrice || b.price)
        case "price-high":
          return (b.discountPrice || b.price) - (a.discountPrice || a.price)
        case "newest":
          return b.isNew ? 1 : -1
        case "rating":
          return b.rating - a.rating
        case "name":
          return a.name.localeCompare(b.name, "fa")
        case "popular":
        default:
          // Popular = combination of rating and discount
          const aScore = a.rating + (a.discountPrice ? 0.5 : 0)
          const bScore = b.rating + (b.discountPrice ? 0.5 : 0)
          return bScore - aScore
      }
    })

    return filtered
  }, [products, filters])

  // Update functions
  const updateBrandFilter = useCallback(
    (brands: string[]) => {
      const newFilters = { ...filters, brands }
      setFilters(newFilters)
      updateURL(newFilters)
    },
    [filters, updateURL],
  )

  const updatePriceRangeFilter = useCallback(
    (priceRange: string) => {
      const newFilters = { ...filters, priceRange }
      setFilters(newFilters)
      updateURL(newFilters)
    },
    [filters, updateURL],
  )

  const updateAvailabilityFilter = useCallback(
    (availability: string) => {
      const newFilters = { ...filters, availability }
      setFilters(newFilters)
      updateURL(newFilters)
    },
    [filters, updateURL],
  )

  const updateDiscountFilter = useCallback(
    (discount: string) => {
      const newFilters = { ...filters, discount }
      setFilters(newFilters)
      updateURL(newFilters)
    },
    [filters, updateURL],
  )

  const updateSortBy = useCallback(
    (sortBy: string) => {
      const newFilters = { ...filters, sortBy }
      setFilters(newFilters)
      updateURL(newFilters)
    },
    [filters, updateURL],
  )

  const updateSearchQuery = useCallback(
    (searchQuery: string) => {
      const newFilters = { ...filters, searchQuery }
      setFilters(newFilters)
      updateURL(newFilters)
    },
    [filters, updateURL],
  )

  const clearAllFilters = useCallback(() => {
    const newFilters: ProductFilters = {
      brands: [],
      priceRange: "all",
      availability: "all",
      discount: "all",
      sortBy: "popular",
      searchQuery: "",
    }
    setFilters(newFilters)
    router.replace("", { scroll: false })
  }, [router])

  const hasActiveFilters = useMemo(() => {
    return (
      filters.brands.length > 0 ||
      filters.priceRange !== "all" ||
      filters.availability !== "all" ||
      filters.discount !== "all" ||
      filters.searchQuery !== ""
    )
  }, [filters])

  return {
    filters,
    filteredAndSortedProducts,
    updateBrandFilter,
    updatePriceRangeFilter,
    updateAvailabilityFilter,
    updateDiscountFilter,
    updateSortBy,
    updateSearchQuery,
    clearAllFilters,
    hasActiveFilters,
    totalProducts: products.length,
    filteredCount: filteredAndSortedProducts.length,
  }
}
