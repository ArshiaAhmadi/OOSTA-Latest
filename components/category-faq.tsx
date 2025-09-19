"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
  tags: string[]
}

interface CategoryFAQProps {
  categoryName: string
  faqs: FAQItem[]
}

export function CategoryFAQ({ categoryName, faqs }: CategoryFAQProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFAQs = faqs.filter((faq) => {
    const query = searchQuery.toLowerCase()
    return (
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query) ||
      faq.tags.some((tag) => tag.toLowerCase().includes(query))
    )
  })

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">سوالات متداول درباره {categoryName}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            پاسخ سوالات رایج درباره انتخاب، خرید و نگهداری {categoryName} را در این بخش بیابید.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative mb-8">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder={`جستجو در سوالات متداول ${categoryName}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10 py-6"
            />
          </div>

          {filteredFAQs.length > 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <Accordion type="single" collapsible className="w-full">
                {filteredFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-right text-lg font-medium py-4">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      <div dangerouslySetInnerHTML={{ __html: faq.answer }} />

                      <div className="flex flex-wrap gap-2 mt-4">
                        {faq.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                            onClick={() => setSearchQuery(tag)}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400">
                نتیجه‌ای برای جستجوی شما یافت نشد. لطفاً با عبارت دیگری جستجو کنید.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
