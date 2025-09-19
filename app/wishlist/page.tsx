import type { Metadata } from "next"
import WishlistPageClient from "./WishlistPageClient"

export const metadata: Metadata = {
  title: "علاقه‌مندی‌ها | اوستا صنعت",
  description: "مشاهده و مدیریت محصولات مورد علاقه شما در اوستا صنعت",
}

export default function WishlistPage() {
  return <WishlistPageClient />
}
