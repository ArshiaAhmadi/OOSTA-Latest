"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Brand {
  id: string
  name: string
  logo: string
  description: string
  country: string
  specialties: string[]
  established: string
}

interface BrandShowcaseProps {
  categoryName: string
  brands: Brand[]
}

export function BrandShowcase({ categoryName, brands }: BrandShowcaseProps) {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(brands[0] || null)

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">برندهای معتبر {categoryName}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            اوستا صنعت با افتخار نماینده برندهای معتبر جهانی در زمینه {categoryName} است. محصولات این برندها با کیفیت
            بالا و گارانتی اصلی ارائه می‌شوند.
          </p>
        </div>

        <Tabs defaultValue={brands[0]?.id} className="w-full">
          <div className="flex flex-col md:flex-row gap-8">
            <Card className="md:w-1/3 bg-white dark:bg-gray-800 shadow-lg">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-4 text-center">انتخاب برند</h3>
                <TabsList className="flex flex-col w-full h-auto gap-2">
                  {brands.map((brand) => (
                    <TabsTrigger
                      key={brand.id}
                      value={brand.id}
                      onClick={() => setSelectedBrand(brand)}
                      className="w-full justify-start gap-3 p-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      <div className="relative w-8 h-8">
                        <Image
                          src={brand.logo || "/placeholder.svg"}
                          alt={brand.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span>{brand.name}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </CardContent>
            </Card>

            <div className="md:w-2/3">
              {brands.map((brand) => (
                <TabsContent key={brand.id} value={brand.id} className="mt-0">
                  <Card className="bg-white dark:bg-gray-800 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <motion.div
                          className="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image
                            src={brand.logo || "/placeholder.svg"}
                            alt={brand.name}
                            fill
                            className="object-contain p-4"
                          />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="text-2xl font-bold">{brand.name}</h3>
                            <span className="text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full">
                              تأسیس {brand.established}
                            </span>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 mb-4">{brand.description}</p>
                          <div className="mb-4">
                            <span className="font-semibold ml-2">کشور سازنده:</span>
                            <span>{brand.country}</span>
                          </div>
                          <div>
                            <span className="font-semibold block mb-2">تخصص‌ها:</span>
                            <div className="flex flex-wrap gap-2">
                              {brand.specialties.map((specialty, index) => (
                                <span
                                  key={index}
                                  className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                                >
                                  {specialty}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  )
}
