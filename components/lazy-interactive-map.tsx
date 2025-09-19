"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

// لود بدون SSR برای جلوگیری از خطاهای مرتبط با window
const InteractiveMap = dynamic(() => import("./interactive-map"), {
  ssr: false,
  loading: () => <MapSkeleton />,
})

function MapSkeleton() {
  return (
    <div className="w-full h-[300px] rounded-lg overflow-hidden">
      <Skeleton className="w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-muted-foreground text-sm">در حال بارگذاری نقشه...</div>
      </div>
    </div>
  )
}

interface LazyInteractiveMapProps {
  locations: any[]
  center?: [number, number]
  zoom?: number
}

export default function LazyInteractiveMap(props: LazyInteractiveMapProps) {
  return (
    <Suspense fallback={<MapSkeleton />}>
      <InteractiveMap {...props} />
    </Suspense>
  )
}
