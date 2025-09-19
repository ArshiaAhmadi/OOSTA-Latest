import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function ArticlesLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-blue-900/10">
      {/* Hero Section Skeleton */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton className="h-8 w-64 mx-auto mb-6" />
            <Skeleton className="h-16 w-96 mx-auto mb-6" />
            <Skeleton className="h-6 w-[600px] mx-auto mb-8" />
            <Skeleton className="h-14 w-[500px] mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <Card key={i} className="p-6">
                  <Skeleton className="h-8 w-8 mx-auto mb-3" />
                  <Skeleton className="h-8 w-16 mx-auto mb-1" />
                  <Skeleton className="h-4 w-24 mx-auto" />
                </Card>
              ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Skeleton */}
          <div className="lg:col-span-1 space-y-8">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <Skeleton className="h-6 w-32 mb-6" />
                    <div className="space-y-2">
                      {Array(5)
                        .fill(0)
                        .map((_, j) => (
                          <Skeleton key={j} className="h-12 w-full" />
                        ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* Main Content Skeleton */}
          <div className="lg:col-span-3 space-y-12">
            {/* Featured Articles Skeleton */}
            <section>
              <Skeleton className="h-8 w-48 mb-8" />
              <div className="space-y-8">
                {Array(3)
                  .fill(0)
                  .map((_, i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        <Skeleton className="h-64 lg:h-full w-full" />
                        <CardContent className="p-8">
                          <div className="flex gap-2 mb-4">
                            {Array(3)
                              .fill(0)
                              .map((_, j) => (
                                <Skeleton key={j} className="h-6 w-16" />
                              ))}
                          </div>
                          <Skeleton className="h-6 w-full mb-4" />
                          <Skeleton className="h-4 w-full mb-2" />
                          <Skeleton className="h-4 w-3/4 mb-6" />
                          <div className="flex justify-between mb-4">
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-4 w-24" />
                          </div>
                          <Skeleton className="h-10 w-full" />
                        </CardContent>
                      </div>
                    </Card>
                  ))}
              </div>
            </section>

            {/* Recent Articles Skeleton */}
            <section>
              <div className="flex justify-between mb-8">
                <Skeleton className="h-8 w-48" />
                <Skeleton className="h-10 w-32" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <Card key={i} className="overflow-hidden">
                      <Skeleton className="h-48 w-full" />
                      <CardContent className="p-6">
                        <Skeleton className="h-5 w-full mb-3" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-3/4 mb-4" />
                        <div className="flex justify-between mb-4">
                          <Skeleton className="h-3 w-20" />
                          <Skeleton className="h-3 w-16" />
                        </div>
                        <div className="flex justify-between">
                          <Skeleton className="h-3 w-24" />
                          <Skeleton className="h-8 w-16" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
