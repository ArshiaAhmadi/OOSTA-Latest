"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Award, BarChart4, Settings, Info, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Specification {
  name: string
  value: string
  unit?: string
  description?: string
}

interface Standard {
  code: string
  name: string
  description: string
  link?: string
}

interface SpecGroup {
  id: string
  title: string
  icon: "specs" | "standards" | "performance" | "dimensions"
  content: {
    specifications?: Specification[]
    standards?: Standard[]
    description?: string
  }
}

interface TechnicalSpecificationsProps {
  categoryName: string
  specGroups: SpecGroup[]
}

export function TechnicalSpecifications({ categoryName, specGroups }: TechnicalSpecificationsProps) {
  const [activeTab, setActiveTab] = useState(specGroups[0]?.id || "")

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "specs":
        return <FileText className="h-5 w-5" />
      case "standards":
        return <Award className="h-5 w-5" />
      case "performance":
        return <BarChart4 className="h-5 w-5" />
      case "dimensions":
        return <Settings className="h-5 w-5" />
      default:
        return <Info className="h-5 w-5" />
    }
  }

  return (
    <section className="py-12 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">مشخصات فنی و استانداردها</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            اطلاعات فنی، استانداردها و مشخصات عملکردی {categoryName} را بررسی کنید.
          </p>
        </div>

        <Card className="border-0 shadow-lg max-w-4xl mx-auto">
          <CardContent className="p-0">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="flex w-full rounded-none border-b">
                {specGroups.map((group) => (
                  <TabsTrigger
                    key={group.id}
                    value={group.id}
                    className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-primary py-3"
                  >
                    <div className="flex items-center gap-2">
                      {getIcon(group.icon)}
                      <span>{group.title}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>

              {specGroups.map((group) => (
                <TabsContent key={group.id} value={group.id} className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {group.content.description && (
                      <p className="text-gray-700 dark:text-gray-300 mb-6">{group.content.description}</p>
                    )}

                    {group.content.specifications && group.content.specifications.length > 0 && (
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-1/3">مشخصه</TableHead>
                              <TableHead>مقدار</TableHead>
                              <TableHead className="w-1/3">توضیحات</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {group.content.specifications.map((spec, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-medium">{spec.name}</TableCell>
                                <TableCell>
                                  {spec.value}
                                  {spec.unit && <span className="text-gray-500 mr-1">{spec.unit}</span>}
                                </TableCell>
                                <TableCell className="text-gray-600 dark:text-gray-400">
                                  {spec.description || "-"}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    )}

                    {group.content.standards && group.content.standards.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {group.content.standards.map((standard, index) => (
                          <div key={index} className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                            <div className="flex items-center gap-2 mb-2">
                              <Award className="h-5 w-5 text-primary" />
                              <h4 className="font-bold">{standard.code}</h4>
                            </div>
                            <h5 className="font-medium mb-2">{standard.name}</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{standard.description}</p>
                            {standard.link && (
                              <Button variant="outline" size="sm" asChild>
                                <a href={standard.link} target="_blank" rel="noopener noreferrer">
                                  <Download className="h-4 w-4 ml-2" />
                                  دانلود استاندارد
                                </a>
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
