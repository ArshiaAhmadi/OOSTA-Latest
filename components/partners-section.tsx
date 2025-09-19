"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// آرایه شرکت‌های همکار
const partners = [
  {
    id: 1,
    name: "زیمنس",
    logo: "/siemens-logo.png",
    description: "تولیدکننده تجهیزات اتوماسیون صنعتی و الکتروموتور",
  },
  {
    id: 2,
    name: "اشنایدر الکتریک",
    logo: "/schneider-electric-logo.png",
    description: "ارائه‌دهنده راهکارهای مدیریت انرژی و اتوماسیون",
  },
  {
    id: 3,
    name: "ABB",
    logo: "/abb-logo.png",
    description: "تولیدکننده تجهیزات برق و اتوماسیون صنعتی",
    imageQuery: "ABB company logo industrial automation",
  },
  {
    id: 4,
    name: "دانفوس",
    logo: "/danfoss-logo.png",
    description: "تولیدکننده درایو و تجهیزات کنترل",
    imageQuery: "Danfoss company logo industrial",
  },
  {
    id: 5,
    name: "بوش رکسروت",
    logo: "/bosch-rexroth-logo.png",
    description: "متخصص در سیستم‌های هیدرولیک و پنوماتیک",
    imageQuery: "Bosch Rexroth company logo industrial",
  },
  {
    id: 6,
    name: "فستو",
    logo: "/festo-logo.png",
    description: "تولیدکننده تجهیزات پنوماتیک و اتوماسیون",
    imageQuery: "Festo company logo industrial automation",
  },
  {
    id: 7,
    name: "میتسوبیشی الکتریک",
    logo: "/mitsubishi-electric-logo.png",
    description: "تولیدکننده تجهیزات اتوماسیون و الکتریکی",
    imageQuery: "Mitsubishi Electric company logo industrial",
  },
  {
    id: 8,
    name: "امرسون",
    logo: "/emerson-logo.png",
    description: "ارائه‌دهنده راهکارهای اتوماسیون فرآیند",
    imageQuery: "Emerson company logo industrial automation",
  },
]

export default function PartnersSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activePartner, setActivePartner] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30 rounded-3xl">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M17 20a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2a2 2 0 0 0 2 2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            همکاران تجاری
          </div>

          

          
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setActivePartner(partner.id)}
              onMouseLeave={() => setActivePartner(null)}
            >
              <div
                className={cn(
                  "bg-white dark:bg-dark-100/40 rounded-xl p-6 h-32 flex items-center justify-center transition-all duration-300 border border-muted hover:border-primary/20 hover:shadow-md dark:border-dark-border",
                  activePartner === partner.id ? "border-primary/30 shadow-md" : "",
                )}
              >
                <div className="relative h-16 w-full">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    fill
                    className="object-contain filter dark:brightness-110 dark:contrast-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 4}
                  />
                </div>
              </div>

              {/* توضیحات با انیمیشن */}
              <div
                className={cn(
                  "absolute -bottom-2 left-0 right-0 bg-white dark:bg-dark-100 rounded-lg p-3 shadow-lg border border-muted dark:border-dark-border text-center text-sm transition-all duration-300",
                  activePartner === partner.id
                    ? "opacity-100 translate-y-full pointer-events-auto"
                    : "opacity-0 translate-y-0 pointer-events-none",
                )}
              >
                <p className="font-medium text-primary dark:text-primary-dark-mode">{partner.name}</p>
                <p className="text-muted-foreground text-xs mt-1">{partner.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            و بیش از <span className="font-bold text-primary">50</span> همکار تجاری دیگر در سراسر جهان
          </p>
        </div>
      </div>
    </section>
  )
}
