import type { Metadata } from "next"
import SupportPageClient from "./SupportPageClient"

export const metadata: Metadata = {
  title: "پشتیبانی | اوستا صنعت",
  description: "مرکز پشتیبانی اوستا صنعت - ارسال تیکت، تماس مستقیم، سوالات متداول و منابع کمکی",
}

export default function SupportPage() {
  return <SupportPageClient />
}
