"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Info } from "lucide-react"
import Image from "next/image"

// کامپوننت نمایش برند
const BrandShowcase = () => {
  const brands = [
    {
      name: "سوم",
      logo: "/placeholder.svg?height=60&width=120&query=سوم لوگو",
      description: "تولید کننده انواع گیربکس‌های صنعتی با کیفیت بالا",
    },
    {
      name: "بونفیلیولی",
      logo: "/placeholder.svg?height=60&width=120&query=بونفیلیولی لوگو",
      description: "برند ایتالیایی با سابقه طولانی در تولید گیربکس‌های با کیفیت",
    },
    {
      name: "نورد",
      logo: "/placeholder.svg?height=60&width=120&query=نورد لوگو",
      description: "پیشرو در تکنولوژی گیربکس‌های مدرن و کم صدا",
    },
    {
      name: "سیمنس-فلندر",
      logo: "/placeholder.svg?height=60&width=120&query=سیمنس فلندر لوگو",
      description: "متخصص در گیربکس‌های صنعتی سنگین",
    },
    {
      name: "SEW",
      logo: "/placeholder.svg?height=60&width=120&query=SEW لوگو",
      description: "ارائه دهنده راهکارهای انتقال قدرت پیشرفته",
    },
    {
      name: "دنیسون-کالزونی",
      logo: "/placeholder.svg?height=60&width=120&query=دنیسون کالزونی لوگو",
      description: "تولید کننده گیربکس‌های دقیق و با کیفیت",
    },
  ]

  return (
    <div className="my-8">
      <h3 className="text-2xl font-bold mb-6 text-right">برندهای برتر گیربکس</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center"
          >
            <Image
              src={brand.logo || "/placeholder.svg"}
              alt={`${brand.name} لوگو`}
              width={120}
              height={60}
              className="object-contain h-16"
            />
            <h4 className="mt-3 font-semibold text-center">{brand.name}</h4>
            <p className="text-xs text-gray-600 mt-2 text-center">{brand.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// کامپوننت راهنمای خرید
const BuyingGuide = () => {
  return (
    <Card className="my-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center gap-2 text-right">
          <Info className="h-6 w-6 text-blue-600" />
          راهنمای خرید گیربکس
        </CardTitle>
        <CardDescription className="text-right">نکات مهم برای انتخاب گیربکس مناسب با نیاز شما</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-right">
              نسبت تبدیل (Ratio) چیست و چگونه آن را انتخاب کنیم؟
            </AccordionTrigger>
            <AccordionContent className="text-right">
              نسبت تبدیل، نسبت سرعت ورودی به سرعت خروجی گیربکس است. برای انتخاب نسبت تبدیل مناسب، باید سرعت موتور محرک و
              سرعت مورد نیاز خروجی را محاسبه کنید.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
