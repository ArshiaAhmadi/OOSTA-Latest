import type React from "react"
export default function VibrationMotorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="container mx-auto py-8">{children}</div>
}
