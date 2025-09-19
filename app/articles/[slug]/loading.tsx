import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function ArticleLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Back Button Skeleton */}
      <div className="container mx-auto px-4 pt-8">
        <Skeleton className="h-10 w-32 mb-6" />
      </div>

      {/* Article Header Skeleton */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Badges Skeleton */}
          <div className="flex gap-3 mb-8">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-8 w-28" />
          </div>

          {/* Title Skeleton */}
          <Skeleton className="h-16 w-full mb-8" />

          {/* Meta Info Skeleton */}
          <div className="flex gap-8 mb-10">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-32" />
          </div>

          {/* Author Card Skeleton */}
          <Card className="mb-10">
            <CardContent className="p-8">
              <div className="flex items-center gap-6">
                <Skeleton className="h-20 w-20 rounded-full" />
                <div className="flex-1">
                  <Skeleton className="h-6 w-48 mb-2" />
                  <Skeleton className="h-4 w-full mb-3" />
                  <div className="flex gap-6">
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                </div>
                <Skeleton className="h-10 w-24" />
              </div>
            </CardContent>
          </Card>

          {/* Featured Image Skeleton */}
          <Skeleton className="h-[400px] w-full rounded-xl mb-12" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content Skeleton */}
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-8 lg:p-12">
                  {/* Table of Contents Skeleton */}
                  <Card className="mb-8">
                    <CardContent className="p-6">
                      <Skeleton className="h-6 w-32 mb-4" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-48" />
                        <Skeleton className="h-4 w-56" />
                        <Skeleton className="h-4 w-44" />
                        <Skeleton className="h-4 w-40" />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Content Skeleton */}
                  <div className="space-y-6">
                    <Skeleton className="h-8 w-48" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />

                    <Skeleton className="h-8 w-64 mt-8" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />

                    <div className="space-y-2 mt-6">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  </div>

                  {/* Key Takeaways Skeleton */}
                  <Card className="mt-12">
                    <CardContent className="p-6">
                      <Skeleton className="h-6 w-32 mb-4" />
                      <div className="space-y-3">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Tags Skeleton */}
                  <div className="mt-8 pt-8 border-t">
                    <Skeleton className="h-5 w-20 mb-4" />
                    <div className="flex gap-2">
                      <Skeleton className="h-6 w-24" />
                      <Skeleton className="h-6 w-20" />
                      <Skeleton className="h-6 w-28" />
                      <Skeleton className="h-6 w-32" />
                    </div>
                  </div>

                  {/* Actions Skeleton */}
                  <div className="mt-8 pt-8 border-t">
                    <div className="flex justify-between">
                      <div className="flex gap-4">
                        <Skeleton className="h-10 w-24" />
                        <Skeleton className="h-10 w-24" />
                      </div>
                      <div className="flex gap-2">
                        <Skeleton className="h-10 w-20" />
                        <Skeleton className="h-10 w-28" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comments Skeleton */}
              <Card className="mt-8">
                <CardContent className="p-8">
                  <Skeleton className="h-6 w-32 mb-6" />

                  {/* Comment Form Skeleton */}
                  <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Skeleton className="h-24 w-full mb-4" />
                    <div className="flex justify-between">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-10 w-24" />
                    </div>
                  </div>

                  {/* Comments List Skeleton */}
                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <div className="flex-1">
                          <div className="flex gap-2 mb-2">
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-4 w-16" />
                          </div>
                          <Skeleton className="h-4 w-full mb-2" />
                          <Skeleton className="h-4 w-3/4 mb-3" />
                          <div className="flex gap-4">
                            <Skeleton className="h-6 w-12" />
                            <Skeleton className="h-6 w-12" />
                            <Skeleton className="h-6 w-16" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Skeleton */}
            <div className="lg:col-span-1 space-y-8">
              {/* Stats Card Skeleton */}
              <Card>
                <CardContent className="p-6">
                  <Skeleton className="h-5 w-24 mb-4" />
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex justify-between">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-4 w-12" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Related Articles Skeleton */}
              <Card>
                <CardContent className="p-6">
                  <Skeleton className="h-5 w-28 mb-4" />
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex gap-3">
                        <Skeleton className="h-15 w-20 rounded-lg" />
                        <div className="flex-1">
                          <Skeleton className="h-4 w-full mb-2" />
                          <Skeleton className="h-3 w-24" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Skeleton */}
              <Card>
                <CardContent className="p-6">
                  <Skeleton className="h-5 w-32 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-10 w-full mb-3" />
                  <Skeleton className="h-10 w-full" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Skeleton */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between">
                <Skeleton className="h-10 w-32" />
                <Skeleton className="h-10 w-32" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
