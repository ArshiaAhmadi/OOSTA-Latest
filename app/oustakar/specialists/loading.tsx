import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function SpecialistsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Header Skeleton */}
      <div className="bg-gradient-to-r from-[#253F8F] to-[#F18F20] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Skeleton className="h-12 w-96 mx-auto mb-4 bg-white/20" />
            <Skeleton className="h-6 w-80 mx-auto bg-white/10" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filters Skeleton */}
        <Card className="mb-8 shadow-lg border-0">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <Skeleton className="flex-1 h-12" />
              <div className="flex gap-3">
                <Skeleton className="w-40 h-12" />
                <Skeleton className="w-48 h-12" />
                <Skeleton className="w-32 h-12" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Header Skeleton */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-5 w-64" />
          </div>
        </div>

        {/* Specialists Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <Card key={index} className="overflow-hidden shadow-lg border-0">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-[#253F8F]/5 to-[#F18F20]/5 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <Skeleton className="w-16 h-16 rounded-xl" />
                      <div>
                        <Skeleton className="h-6 w-32 mb-2" />
                        <Skeleton className="h-4 w-40 mb-1" />
                        <Skeleton className="h-4 w-28" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-6 w-20" />
                  </div>
                </div>
                <div className="p-6">
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-18" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                  <Skeleton className="h-4 w-48 mb-6" />
                  <div className="flex gap-3">
                    <Skeleton className="flex-1 h-10" />
                    <Skeleton className="w-16 h-10" />
                    <Skeleton className="w-12 h-10" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
