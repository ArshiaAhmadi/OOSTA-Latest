"use client"

import { useState } from "react"
import { Check, X, HelpCircle, ChevronDown, ChevronUp } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

interface FeatureRowProps {
  featureName: string
  featureDescription?: string
  productValues: {
    productId: string
    value: string | number | boolean | null
    isHighlighted?: boolean
  }[]
  isImportant?: boolean
  isExpanded?: boolean
  onToggleImportance?: () => void
  onToggleExpand?: () => void
}

export function FeatureRow({
  featureName,
  featureDescription,
  productValues,
  isImportant = false,
  isExpanded = true,
  onToggleImportance,
  onToggleExpand,
}: FeatureRowProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Determine if there are differences in values
  const uniqueValues = new Set(
    productValues.map((pv) => (typeof pv.value === "boolean" ? pv.value.toString() : pv.value)),
  )
  const hasDifferences = uniqueValues.size > 1

  // Format the value for display
  const formatValue = (value: string | number | boolean | null) => {
    if (value === null || value === undefined) return "—"
    if (typeof value === "boolean") return value ? <Check className="text-green-500" /> : <X className="text-red-500" />
    return value
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-[200px_repeat(auto-fill,minmax(150px,1fr))] border-b border-gray-200 dark:border-gray-700 transition-colors duration-200",
        isHovered && "bg-gray-50 dark:bg-gray-800/50",
        hasDifferences && isImportant && "bg-blue-50/50 dark:bg-blue-900/10",
        !isExpanded && "h-0 overflow-hidden border-0 m-0 p-0",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800/80">
        <div className="flex-1">
          <div className="flex items-center">
            <span className="font-medium text-sm">{featureName}</span>

            {featureDescription && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <HelpCircle
                      size={14}
                      className="mr-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-help"
                    />
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-xs">
                    <p className="text-sm">{featureDescription}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onToggleImportance && (
            <button
              onClick={onToggleImportance}
              className={cn(
                "p-1 rounded-md transition-colors",
                isImportant
                  ? "text-blue-600 bg-blue-100 hover:bg-blue-200 dark:text-blue-400 dark:bg-blue-900/30 dark:hover:bg-blue-900/50"
                  : "text-gray-400 hover:text-gray-600 hover:bg-gray-200 dark:hover:text-gray-300 dark:hover:bg-gray-700",
              )}
              aria-label={isImportant ? "حذف از ویژگی‌های مهم" : "افزودن به ویژگی‌های مهم"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={isImportant ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </button>
          )}

          {onToggleExpand && (
            <button
              onClick={onToggleExpand}
              className="p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-200 dark:hover:text-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label={isExpanded ? "بستن" : "باز کردن"}
            >
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          )}
        </div>
      </div>

      {productValues.map((productValue) => (
        <div
          key={productValue.productId}
          className={cn(
            "p-3 flex items-center justify-center text-center",
            productValue.isHighlighted && "bg-yellow-50 dark:bg-yellow-900/10",
          )}
        >
          <div className="text-sm">{formatValue(productValue.value)}</div>
        </div>
      ))}
    </div>
  )
}
