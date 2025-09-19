import { notFound } from "next/navigation"
import VibrationMotorSubcategoryClientPage from "./VibrationMotorSubcategoryClientPage"

type Props = {
  params: {
    type: string
  }
}

export function generateMetadata({ params }: Props) {
  const type = params.type

  let title = ""
  let description = ""

  switch (type) {
    case "electric":
      title = "موتور ویبره برقی | اوستا صنعت"
      description = "خرید انواع موتور ویبره برقی تک فاز و سه فاز با بهترین قیمت و کیفیت"
      break
    case "pneumatic":
      title = "موتور ویبره بادی | اوستا صنعت"
      description = "خرید انواع موتور ویبره بادی (پنوماتیک) با بهترین قیمت و کیفیت"
      break
    case "accessories":
      title = "لوازم جانبی موتور ویبره | اوستا صنعت"
      description = "خرید انواع لوازم جانبی و قطعات یدکی موتور ویبره با بهترین قیمت و کیفیت"
      break
    default:
      return notFound()
  }

  return {
    title,
    description,
  }
}

export default function VibrationMotorSubcategoryPage({ params }: Props) {
  const validTypes = ["electric", "pneumatic", "accessories"]

  if (!validTypes.includes(params.type)) {
    notFound()
  }

  return <VibrationMotorSubcategoryClientPage type={params.type} />
}
