"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Application {
  id: string
  title: string
  description: string
  image: string
  benefits: string[]
}

interface Industry {
  id: string
  name: string
  icon: string
  applications: Application[]
}

interface IndustryApplicationsProps {
  categoryName: string
  industries: Industry[]
}

export function IndustryApplications({ categoryName, industries }: IndustryApplicationsProps) {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]?.id || "")

  const currentIndustry = industries.find((industry) => industry.id === activeIndustry) || industries[0]

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">کاربردهای {categoryName} در صنایع مختلف</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {categoryName} در صنایع گوناگون کاربردهای متنوعی دارند. با انتخاب صنعت مورد نظر، کاربردهای تخصصی را مشاهده
            کنید.
          </p>
        </div>

        <Tabs value={activeIndustry} onValueChange={setActiveIndustry} className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8 gap-2">
            {industries.map((industry) => (
              <TabsTrigger
                key={industry.id}
                value={industry.id}
                className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <div className="flex items-center gap-2">
                  <div className="relative w-6 h-6">
                    <Image
                      src={industry.icon || "/placeholder.svg"}
                      alt={industry.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>{industry.name}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {industries.map((industry) => (
            <TabsContent key={industry.id} value={industry.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industry.applications.map((application) => (
                  <motion.div
                    key={application.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={application.image || "/placeholder.svg"}
                          alt={application.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3">{application.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">{application.description}</p>
                        <div>
                          <h4 className="font-semibold mb-2">مزایا:</h4>
                          <ul className="space-y-1">
                            {application.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="text-primary text-lg">•</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
