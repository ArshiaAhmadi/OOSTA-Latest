"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Check, X, ChevronRight } from "lucide-react"
import Link from "next/link"

interface ComparisonItem {
  id: string
  name: string
  image: string
  features: {
    [key: string]: {
      value: string | number | boolean
      isHighlight?: boolean
    }
  }
}

interface ComparisonGroup {
  id: string
  title: string
  items: ComparisonItem[]
  features: {
    id: string
    name: string
    unit?: string
  }[]
}

interface CategoryComparisonProps {
  categoryName: string
  comparisonGroups: ComparisonGroup[]
}

export function CategoryComparison({ categoryName, comparisonGroups }: CategoryComparisonProps) {
  const [activeGroup, setActiveGroup] = useState(comparisonGroups[0]?.id || "")

  const currentGroup = comparisonGroups.find((group) => group.id === activeGroup) || comparisonGroups[0]

  return (
    <section className="py-12 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">مقایسه انواع {categoryName}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            برای انتخاب بهترین {categoryName} مناسب نیاز خود، مقایسه مشخصات فنی و ویژگی‌های محصولات مختلف را بررسی کنید.
          </p>
        </div>

        <Tabs value={activeGroup} onValueChange={setActiveGroup} className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8 gap-2">
            {comparisonGroups.map((group) => (
              <TabsTrigger
                key={group.id}
                value={group.id}
                className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {group.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {comparisonGroups.map((group) => (
            <TabsContent key={group.id} value={group.id} className="mt-0">
              <Card className="overflow-hidden border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-800">
                          <th className="p-4 text-right min-w-[200px]">ویژگی</th>
                          {group.items.map((item) => (
                            <th key={item.id} className="p-4 text-center min-w-[200px]">
                              <div className="flex flex-col items-center gap-3">
                                <div className="relative w-24 h-24">
                                  <Image
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.name}
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                                <span className="font-bold">{item.name}</span>
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {group.features.map((feature) => (
                          <tr key={feature.id} className="border-b dark:border-gray-700">
                            <td className="p-4 font-medium bg-gray-50 dark:bg-gray-900">
                              {feature.name}
                              {feature.unit && <span className="text-gray-500 text-sm mr-1">({feature.unit})</span>}
                            </td>
                            {group.items.map((item) => {
                              const featureData = item.features[feature.id]
                              const value = featureData?.value
                              const isHighlight = featureData?.isHighlight

                              return (
                                <td
                                  key={`${item.id}-${feature.id}`}
                                  className={`p-4 text-center ${isHighlight ? "bg-green-50 dark:bg-green-900/20" : ""}`}
                                >
                                  {typeof value === "boolean" ? (
                                    value ? (
                                      <Check className="mx-auto text-green-600 dark:text-green-400" />
                                    ) : (
                                      <X className="mx-auto text-red-600 dark:text-red-400" />
                                    )
                                  ) : (
                                    <span className={isHighlight ? "font-bold text-green-700 dark:text-green-400" : ""}>
                                      {value}
                                    </span>
                                  )}
                                </td>
                              )
                            })}
                          </tr>
                        ))}
                        <tr>
                          <td className="p-4 bg-gray-50 dark:bg-gray-900"></td>
                          {group.items.map((item) => (
                            <td key={`${item.id}-action`} className="p-4 text-center">
                              <Link href={`/products/${categoryName.toLowerCase()}/${item.id}`}>
                                <Button className="w-full">
                                  مشاهده جزئیات
                                  <ChevronRight className="mr-2 h-4 w-4" />
                                </Button>
                              </Link>
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
