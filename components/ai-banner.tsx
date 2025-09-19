"use client"

import { Bot, Sparkles, MessageSquareText, ArrowLeft, Zap, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"

export default function AIBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentPhrase, setCurrentPhrase] = useState(0)

  const phrases = [
    "پاسخگویی به سوالات فنی شما",
    "راهنمایی در انتخاب محصول مناسب",
    "ارائه اطلاعات تخصصی صنعتی",
    "مشاوره رایگان ۲۴ ساعته",
    "پیشنهاد بهترین قیمت‌ها",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        background: "linear-gradient(to right, #253F8F, #F18F20)",
      }}
      className="relative overflow-hidden text-white py-4 shadow-2xl"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
          className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-40 h-40 rounded-full bg-white/10 blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.05, 0.2, 0.05],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
          className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-32 h-32 rounded-full bg-white/5 blur-lg"
        />

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 2) * 60}%`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center bg-white/20 p-3 rounded-full backdrop-blur-sm shadow-lg"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute w-16 h-16 rounded-full border-2 border-dashed border-white/40"
              />
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                className="relative bg-white/30 p-3 rounded-full backdrop-blur-md shadow-inner"
              >
                <Bot className="h-7 w-7 text-white" />
              </motion.div>
            </motion.div>

            <div className="text-center sm:text-right">
              <motion.h3
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-bold text-xl flex items-center gap-2 justify-center sm:justify-start"
              >
                دستیار هوشمند اوستا
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Sparkles className="h-5 w-5 text-yellow-300" />
                </motion.div>
              </motion.h3>

              <div className="h-7 overflow-hidden mt-1">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentPhrase}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-sm text-white/90 flex items-center gap-2 justify-center sm:justify-start"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Zap className="h-4 w-4 text-yellow-300" />
                    </motion.div>
                    {phrases[currentPhrase]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="hidden sm:flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm"
            >
              <Star className="h-4 w-4 text-yellow-300 fill-current" />
              <span className="text-sm font-medium">4.9</span>
            </motion.div>

            <Link href="/ai-assistant" className="w-full sm:w-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="secondary"
                  size="sm"
                  className="group w-full sm:w-auto bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white hover:text-white flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageSquareText className="h-4 w-4" />
                  شروع گفتگو با دستیار
                  <motion.div
                    animate={{ x: [0, -4, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </motion.div>
                </Button>
              </motion.div>
            </Link>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/10 hover:bg-white/20 text-white rounded-full h-9 w-9 p-0 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setIsVisible(false)}
              >
                <span className="sr-only">بستن</span>
                <motion.span whileHover={{ rotate: 90 }} className="text-lg font-bold" aria-hidden="true">
                  ×
                </motion.span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
