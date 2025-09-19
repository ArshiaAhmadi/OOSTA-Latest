import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Activity {
  id: string
  title: string
  description: string
  time: string
  status?: "success" | "pending" | "error"
  icon?: React.ReactNode
}

interface RecentActivityProps {
  activities: Activity[]
  className?: string
}

export function RecentActivity({ activities, className }: RecentActivityProps) {
  const getStatusColor = (status?: "success" | "pending" | "error") => {
    switch (status) {
      case "success":
        return "bg-green-500"
      case "pending":
        return "bg-yellow-500"
      case "error":
        return "bg-red-500"
      default:
        return "bg-blue-500"
    }
  }

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader>
        <CardTitle>فعالیت‌های اخیر</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-0">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4 p-4 border-b last:border-0">
              {activity.icon ? (
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                  {activity.icon}
                </div>
              ) : (
                <div className={cn("h-2 w-2 mt-2 rounded-full", getStatusColor(activity.status))} />
              )}
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
                <p className="text-xs text-muted-foreground">{activity.description}</p>
                {activity.status && (
                  <Badge
                    variant="outline"
                    className={cn(
                      "mt-1",
                      activity.status === "success" && "border-green-500 text-green-500",
                      activity.status === "pending" && "border-yellow-500 text-yellow-500",
                      activity.status === "error" && "border-red-500 text-red-500",
                    )}
                  >
                    {activity.status === "success" && "موفق"}
                    {activity.status === "pending" && "در انتظار"}
                    {activity.status === "error" && "خطا"}
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
