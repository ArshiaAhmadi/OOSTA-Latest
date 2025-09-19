"use client"

import { Suspense, lazy, type ComponentType, type ReactNode } from "react"

interface LazyComponentProps {
  component: () => Promise<{ default: ComponentType<any> }>
  props?: Record<string, any>
  fallback?: ReactNode
}

export default function LazyComponent({ component, props = {}, fallback }: LazyComponentProps) {
  const LazyComponent = lazy(component)

  return (
    <Suspense
      fallback={fallback || <div className="animate-pulse bg-muted/20 rounded-md h-full w-full min-h-[100px]" />}
    >
      <LazyComponent {...props} />
    </Suspense>
  )
}
