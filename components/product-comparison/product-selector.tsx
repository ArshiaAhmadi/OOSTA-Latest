"use client"

import { useState, useEffect } from "react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Check, ChevronsUpDown, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

interface Product {
  id: string
  name: string
  category: string
  brand: string
  image: string
}

interface ProductSelectorProps {
  products: Product[]
  selectedProductIds: string[]
  onSelectProduct: (productId: string) => void
  maxSelections?: number
}

export function ProductSelector({
  products,
  selectedProductIds,
  onSelectProduct,
  maxSelections = 4,
}: ProductSelectorProps) {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)

  // Filter out already selected products and apply search filter
  useEffect(() => {
    const filtered = products.filter((product) => {
      // Filter out selected products
      if (selectedProductIds.includes(product.id)) return false

      // Apply search filter
      if (!searchQuery) return true

      const query = searchQuery.toLowerCase()
      return (
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query)
      )
    })

    setFilteredProducts(filtered)
  }, [products, selectedProductIds, searchQuery])

  const isSelectionDisabled = selectedProductIds.length >= maxSelections

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
          disabled={isSelectionDisabled}
        >
          <span className="truncate">
            {isSelectionDisabled ? `حداکثر ${maxSelections} محصول انتخاب شده است` : "افزودن محصول به مقایسه"}
          </span>
          <div className="flex items-center gap-1">
            <Plus size={16} />
            <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command>
          <CommandInput placeholder="جستجوی محصول..." onValueChange={setSearchQuery} />
          <CommandList>
            <CommandEmpty>محصولی یافت نشد</CommandEmpty>
            <CommandGroup>
              {filteredProducts.map((product) => (
                <CommandItem
                  key={product.id}
                  value={product.id}
                  onSelect={() => {
                    onSelectProduct(product.id)
                    setOpen(false)
                  }}
                >
                  <div className="flex items-center gap-2 w-full">
                    <div className="w-8 h-8 rounded bg-gray-100 dark:bg-gray-800 overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <p className="truncate">{product.name}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {product.brand} | {product.category}
                      </p>
                    </div>
                  </div>
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedProductIds.includes(product.id) ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
