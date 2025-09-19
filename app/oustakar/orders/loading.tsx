import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function OrdersLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Header Skeleton */}
      <div className="bg-gradient-to-r from-[#253F8F] to-[#F18F20] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Skeleton className="h-12 w-80 mx-auto mb-4 bg-white/20" />
            <Skeleton className="h-6 w-96 mx-auto bg-white/10" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Orders List Skeleton */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <Skeleton className="h-6 w-32" />
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-2">
                  {[...Array(3)].map((_, index) => (
                    <div key={index} className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-5 w-16" />
                      </div>
                      <Skeleton className="h-3 w-24 mb-2" />
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-3 w-20" />
                        <Skeleton className="h-2 w-16" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Details Skeleton */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {/* Order Header Skeleton */}
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                    <div>
                      <Skeleton className="h-8 w-64 mb-2" />
                      <Skeleton className="h-4 w-48 mb-4" />
                      <div className="flex items-center space-x-4 space-x-reverse">
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <Skeleton className="h-8 w-32 mb-2" />
                      <Skeleton className="h-4 w-40" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-12" />
                    </div>
                    <Skeleton className="h-3 w-full" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[...Array(3)].map((_, index) => (
                      <div key={index} className="flex items-center">
                        <Skeleton className="h-5 w-5 ml-3" />
                        <div>
                          <Skeleton className="h-3 w-16 mb-1" />
                          <Skeleton className="h-4 w-20" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tabs Skeleton */}
              <div className="space-y-4">
                <Skeleton className="h-12 w-full" />
                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <Skeleton className="h-6 w-40" />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[...Array(4)].map((_, index) => (
                        <div key={index} className="flex items-start space-x-4 space-x-reverse">
                          <Skeleton className="w-10 h-10 rounded-full" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <Skeleton className="h-5 w-32" />
                              <Skeleton className="h-4 w-24" />
                            </div>
                            <Skeleton className="h-4 w-full mt-2" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
