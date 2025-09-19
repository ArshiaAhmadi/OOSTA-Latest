import type { Metadata } from "next"

import InverterSubcategoryClientPage from "./InverterSubcategoryClientPage"

type Props = {
  params: {
    type: string
  }
}

export function generateMetadata({ params }: Props): Metadata {
  const typeMap: Record<string, string> = {
    "three-phase": "اینورتر ۳ فاز",
    "single-phase": "اینورتر تک فاز",
    "light-duty": "اینورتر سبک کار",
    "heavy-duty": "اینورتر سنگین کار",
    elevator: "اینورتر آسانسور",
  }

  const title = typeMap[params.type] || "اینورتر"

  return {
    title: `${title} | اوستا`,
    description: `خرید انواع ${title} با بهترین قیمت و کیفیت | فروشگاه اینترنتی اوستا`,
  }
}

export default function InverterTypePage({ params }: { params: { type: string } }) {
  return <InverterSubcategoryClientPage type={params.type} />
}
