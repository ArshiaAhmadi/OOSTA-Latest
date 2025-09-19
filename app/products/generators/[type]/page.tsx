import GeneratorSubcategoryClientPage from "./GeneratorSubcategoryClientPage"

type GeneratorSubcategoryPageProps = {
  params: {
    type: string
  }
}

export default function GeneratorSubcategoryPage({ params }: GeneratorSubcategoryPageProps) {
  return <GeneratorSubcategoryClientPage type={params.type} />
}

export async function generateMetadata({ params }: GeneratorSubcategoryPageProps) {
  const type = params.type

  const titles: Record<string, string> = {
    "diesel-generator": "دیزل ژنراتور | اوستا صنعت",
    "gasoline-generator": "ژنراتور بنزینی | اوستا صنعت",
    "gas-generator": "ژنراتور گازی | اوستا صنعت",
    "hydro-generator": "ژنراتور آبی | اوستا صنعت",
    "semi-industrial-generator": "ژنراتور نیمه صنعتی | اوستا صنعت",
    "industrial-generator": "ژنراتور صنعتی | اوستا صنعت",
    "single-engine-generator": "ژنراتور موتورتک | اوستا صنعت",
    "single-phase-generator": "ژنراتور تک فاز | اوستا صنعت",
    "three-phase-generator": "ژنراتور سه فاز | اوستا صنعت",
    "gasoline-power-engine": "موتور برق بنزینی | اوستا صنعت",
    "portable-power-engine": "موتور برق مسافرتی | اوستا صنعت",
    "gas-power-engine": "موتور برق گازسوز | اوستا صنعت",
    "diesel-power-engine": "موتور برق دیزلی | اوستا صنعت",
    "dual-fuel-power-engine": "موتور برق دوگانه سوز | اوستا صنعت",
    "silent-power-engine": "موتور برق سایلنت | اوستا صنعت",
  }

  const descriptions: Record<string, string> = {
    "diesel-generator": "خرید انواع دیزل ژنراتور با کیفیت بالا برای کاربردهای صنعتی و تجاری با بهترین قیمت و گارانتی",
    "gasoline-generator": "خرید انواع ژنراتور بنزینی قابل حمل و کارآمد برای مصارف خانگی و تجاری کوچک با بهترین قیمت",
    "gas-generator": "خرید انواع ژنراتور گازی با آلایندگی کمتر و کارایی بالا برای مصارف خانگی و تجاری با گارانتی اصل",
    "hydro-generator": "خرید انواع ژنراتور آبی با انرژی تجدیدپذیر برای مناطق نزدیک به منابع آبی با بهترین قیمت",
    "semi-industrial-generator": "خرید انواع ژنراتور نیمه صنعتی برای کاربردهای متوسط با کیفیت بالا و گارانتی اصل",
    "industrial-generator": "خرید انواع ژنراتور صنعتی قدرتمند برای کاربردهای سنگین با بهترین قیمت و گارانتی",
    "single-engine-generator": "خرید انواع ژنراتور موتورتک با کارایی بالا برای مصارف متنوع با بهترین قیمت",
    "single-phase-generator": "خرید انواع ژنراتور تک فاز برای مصارف خانگی و تجاری کوچک با گارانتی اصل",
    "three-phase-generator": "خرید انواع ژنراتور سه فاز برای کاربردهای صنعتی و تجاری با بهترین قیمت و گارانتی",
    "gasoline-power-engine": "خرید انواع موتور برق بنزینی قابل حمل و کارآمد برای مصارف خانگی با بهترین قیمت",
    "portable-power-engine": "خرید انواع موتور برق مسافرتی سبک و قابل حمل برای سفر و کمپینگ با گارانتی اصل",
    "gas-power-engine": "خرید انواع موتور برق گازسوز با آلایندگی کمتر برای مصارف خانگی با بهترین قیمت",
    "diesel-power-engine": "خرید انواع موتور برق دیزلی با قدرت و دوام بالا برای کاربردهای صنعتی با گارانتی اصل",
    "dual-fuel-power-engine": "خرید انواع موتور برق دوگانه سوز با قابلیت استفاده از دو نوع سوخت با بهترین قیمت",
    "silent-power-engine": "خرید انواع موتور برق سایلنت بی‌صدا برای محیط‌های حساس به صدا با گارانتی اصل",
  }

  return {
    title: titles[type] || "انواع ژنراتور | اوستا صنعت",
    description:
      descriptions[type] ||
      "خرید انواع ژنراتور و موتور برق با کیفیت بالا برای مصارف خانگی، تجاری و صنعتی با بهترین قیمت و گارانتی",
  }
}
