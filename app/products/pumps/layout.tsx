import type React from "react"
export default function PumpsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className="min-h-screen bg-gray-50 dark:bg-gray-900">{children}</section>
}
