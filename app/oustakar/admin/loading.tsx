import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function AdminLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Header Skeleton */}
      <div className="bg-gradient-to-r from-[#253F8F] to-[#F18F20] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <Skeleton className="h-12 w-96 mb-4 bg-white/20" />
              <Skeleton className="h-6 w-64 bg-white/10" />
            </div>
            <div className="flex space-x-4 space-x-reverse">
              <Skeleton className="h-10 w-32 bg-white/20" />
              <Skeleton className="h-10 w-24 bg-white/20" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Tabs Skeleton */}
        <Skeleton className="h-12 w-full mb-8" />

        <div className="space-y-8">
          {/* Stats Cards Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Skeleton className="h-4 w-24 mb-2" />
                      <Skeleton className="h-8 w-16 mb-2" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                    <Skeleton className="w-12 h-12 rounded-lg" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <Skeleton className="h-6 w-48" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-80 w-full" />
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <Skeleton className="h-6 w-64" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-80 w-full" />
              </CardContent>
            </Card>
          </div>

          {/* Recent Orders Skeleton */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <Skeleton className="h-6 w-32" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <div>
                        <Skeleton className="h-5 w-48 mb-2" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <Skeleton className="h-6 w-20" />
                      <Skeleton className="h-5 w-24" />
                      <Skeleton className="h-8 w-8" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
