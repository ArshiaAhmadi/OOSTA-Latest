import type React from "react"

export default function OustakarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="py-6">{children}</div>
    </div>
  )
}
