"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, CheckCircle2, HelpCircle, AlertCircle, Info } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface GuideStep {
  id: string
  title: string
  description: string
  image?: string
  tips: {
    text: string
    type: "info" | "warning" | "tip"
  }[]
  questions: {
    id: string
    text: string
    options: {
      id: string
      text: string
      description?: string
    }[]
  }[]
  faqs: {
    question: string
    answer: string
  }[]
}

interface InteractiveBuyingGuideProps {
  categoryName: string
  steps: GuideStep[]
}

export function InteractiveBuyingGuide({ categoryName, steps }: InteractiveBuyingGuideProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showSummary, setShowSummary] = useState(false)

  const currentStep = steps[currentStepIndex]

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1)
    } else {
      setShowSummary(true)
    }
  }

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1)
    }
  }

  const handleSelectOption = (questionId: string, optionId: string) => {
    setAnswers({
      ...answers,
      [questionId]: optionId,
    })
  }

  const handleReset = () => {
    setCurrentStepIndex(0)
    setAnswers({})
    setShowSummary(false)
  }

  const getSelectedOptions = () => {
    return Object.entries(answers).map(([questionId, optionId]) => {
      const step = steps.find((step) => step.questions.some((q) => q.id === questionId))

      const question = step?.questions.find((q) => q.id === questionId)
      const option = question?.options.find((o) => o.id === optionId)

      return {
        stepTitle: step?.title || "",
        question: question?.text || "",
        answer: option?.text || "",
        description: option?.description || "",
      }
    })
  }

  const renderTipIcon = (type: "info" | "warning" | "tip") => {
    switch (type) {
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />
      case "warning":
        return <AlertCircle className="h-5 w-5 text-amber-500" />
      case "tip":
        return <HelpCircle className="h-5 w-5 text-green-500" />
    }
  }

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">راهنمای خرید {categoryName}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            با پاسخ به چند سوال ساده، بهترین {categoryName} مناسب نیاز خود را پیدا کنید.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-lg border-0">
          <CardContent className="p-6">
            {!showSummary ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{currentStep.title}</h3>
                      <div className="text-sm text-gray-500">
                        مرحله {currentStepIndex + 1} از {steps.length}
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-6">{currentStep.description}</p>

                    {currentStep.tips.length > 0 && (
                      <div className="mb-6 space-y-3">
                        {currentStep.tips.map((tip, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                          >
                            {renderTipIcon(tip.type)}
                            <p className="text-sm">{tip.text}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="space-y-6">
                      {currentStep.questions.map((question) => (
                        <div key={question.id} className="border-t pt-4">
                          <h4 className="font-medium mb-3">{question.text}</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {question.options.map((option) => (
                              <div
                                key={option.id}
                                className={`
                                  border rounded-lg p-4 cursor-pointer transition-all
                                  ${
                                    answers[question.id] === option.id
                                      ? "border-primary bg-primary/5"
                                      : "hover:border-gray-400 dark:hover:border-gray-600"
                                  }
                                `}
                                onClick={() => handleSelectOption(question.id, option.id)}
                              >
                                <div className="flex items-center gap-3">
                                  <div
                                    className={`
                                    w-5 h-5 rounded-full flex items-center justify-center
                                    ${
                                      answers[question.id] === option.id
                                        ? "bg-primary text-white"
                                        : "border border-gray-400"
                                    }
                                  `}
                                  >
                                    {answers[question.id] === option.id && <CheckCircle2 className="h-4 w-4" />}
                                  </div>
                                  <span className="font-medium">{option.text}</span>
                                </div>
                                {option.description && (
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 mr-8">
                                    {option.description}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {currentStep.faqs.length > 0 && (
                      <div className="mt-8 border-t pt-6">
                        <h4 className="font-bold mb-4">سوالات متداول</h4>
                        <Accordion type="single" collapsible className="w-full">
                          {currentStep.faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`faq-${index}`}>
                              <AccordionTrigger className="text-right">{faq.question}</AccordionTrigger>
                              <AccordionContent>{faq.answer}</AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button variant="outline" onClick={handlePrevious} disabled={currentStepIndex === 0}>
                      <ChevronRight className="ml-2 h-4 w-4" />
                      مرحله قبل
                    </Button>
                    <Button onClick={handleNext}>
                      {currentStepIndex < steps.length - 1 ? "مرحله بعد" : "مشاهده نتیجه"}
                      <ChevronLeft className="mr-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <div className="text-center mb-8">
                  <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">نتیجه راهنمای خرید</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    بر اساس پاسخ‌های شما، موارد زیر برای خرید {categoryName} پیشنهاد می‌شود:
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  {getSelectedOptions().map((item, index) => (
                    <div key={index} className="border-b pb-4">
                      <div className="font-medium text-gray-500 mb-1">{item.stepTitle}</div>
                      <div className="flex justify-between items-start">
                        <div className="font-bold">{item.question}</div>
                        <div className="text-primary">{item.answer}</div>
                      </div>
                      {item.description && <p className="text-sm mt-2">{item.description}</p>}
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
                  <h4 className="font-bold mb-2">پیشنهاد کارشناسان اوستا</h4>
                  <p>
                    با توجه به نیازهای شما، کارشناسان ما می‌توانند در انتخاب بهترین {categoryName} به شما کمک کنند. برای
                    مشاوره رایگان با شماره ۰۲۱-۱۲۳۴۵۶۷۸ تماس بگیرید.
                  </p>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={handleReset}>
                    شروع مجدد
                  </Button>
                  <Button>
                    مشاهده محصولات پیشنهادی
                    <ChevronLeft className="mr-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
