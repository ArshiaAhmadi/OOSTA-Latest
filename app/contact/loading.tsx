import { Skeleton } from "@/components/ui/skeleton"

export default function ContactLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* هدر صفحه */}
      <div className="relative" style={{ background: "linear-gradient(to right, #253F8F, #F18F20)" }}>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <Skeleton className="h-12 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* کارت‌های اطلاعات تماس */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-40 w-full rounded-lg" />
          ))}
        </div>

        {/* بخش اصلی */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {/* فرم تماس */}
          <div className="lg:col-span-3">
            <Skeleton className="h-[500px] w-full rounded-lg" />
          </div>

          {/* اطلاعات تکمیلی */}
          <div className="lg:col-span-2">
            <Skeleton className="h-12 w-full rounded-lg mb-4" />
            <Skeleton className="h-[300px] w-full rounded-lg mb-6" />
            <Skeleton className="h-[100px] w-full rounded-lg" />
          </div>
        </div>

        {/* بخش نمایندگی‌ها */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-48 w-full rounded-lg" />
            ))}
          </div>
        </div>

        {/* بخش دعوت به همکاری */}
        <Skeleton className="h-40 w-full rounded-2xl" />
      </div>
    </div>
  )
}
