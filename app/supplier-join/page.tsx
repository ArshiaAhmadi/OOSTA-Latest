import type { Metadata } from "next"
import SupplierJoinClient from "./SupplierJoinClient"

export const metadata: Metadata = {
  title: "کانال فروش دیجیتال شما در قلب صنعت ایران | اوستا",
  description:
    "به بزرگترین اکوسیستم صنعتی ایران بپیوندید و محصولات خود را بدون واسطه به هزاران مشتری B2B و B2C در سراسر کشور بفروشید.",
  keywords: "فروشنده، تامین کننده، صنعتی، اوستا، فروش آنلاین، B2B، B2C",
}

export default function SupplierJoinPage() {
  return <SupplierJoinClient />
}
