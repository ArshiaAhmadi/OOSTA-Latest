"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

// لود دینامیک کامپوننت چت
const ChatWidget = dynamic(() => import("./chat-widget"), {
  ssr: false,
  loading: () => <ChatWidgetSkeleton />,
})

function ChatWidgetSkeleton() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button size="lg" className="rounded-full h-14 w-14 shadow-lg">
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  )
}

export default function LazyChatWidget() {
  const [isClient, setIsClient] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // فقط در سمت کلاینت اجرا شود
  useEffect(() => {
    setIsClient(true)
  }, [])

  // فقط زمانی که کاربر روی دکمه چت کلیک کرد، کامپوننت اصلی را لود کن
  const handleOpenChat = () => {
    setIsOpen(true)
    setIsLoaded(true)
  }

  if (!isClient) return null

  return (
    <>
      {isLoaded ? (
        <ChatWidget isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <div className="fixed bottom-4 right-4 z-50">
          <Button
            size="lg"
            className="rounded-full h-14 w-14 shadow-lg bg-primary hover:bg-primary/90 text-white"
            onClick={handleOpenChat}
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </div>
      )}
    </>
  )
}
