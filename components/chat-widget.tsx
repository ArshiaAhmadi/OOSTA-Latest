"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, X, Send, Paperclip, Smile, ChevronDown, MinusCircle, Circle, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

// تعریف تایپ‌های مورد نیاز
type Message = {
  id: number
  content: string
  sender: "user" | "support"
  timestamp: Date
  status: "sent" | "delivered" | "read"
}

type SupportAgent = {
  name: string
  avatar: string
  isOnline: boolean
  lastSeen?: Date
}

export default function ChatWidget() {
  // استیت‌های کامپوننت
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [newMessage, setNewMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "سلام! به فروشگاه اوستا خوش آمدید. چطور می‌توانم به شما کمک کنم؟",
      sender: "support",
      timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 دقیقه پیش
      status: "read",
    },
  ])
  const [hasNewMessage, setHasNewMessage] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [agent, setAgent] = useState<SupportAgent>({
    name: "سارا محمدی",
    avatar: "/diverse-avatars.png",
    isOnline: true,
  })

  // رفرنس برای اسکرول به آخرین پیام
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // اسکرول به آخرین پیام هنگام اضافه شدن پیام جدید
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // شبیه‌سازی پاسخ خودکار پشتیبان
  const simulateResponse = () => {
    setIsTyping(true)

    // زمان تایپ کردن تصادفی بین 1 تا 3 ثانیه
    const typingTime = Math.floor(Math.random() * 2000) + 1000

    setTimeout(() => {
      setIsTyping(false)

      const responses = [
        "چطور می‌توانم به شما کمک کنم؟",
        "آیا سوال دیگری دارید؟",
        "برای اطلاعات بیشتر درباره محصولات ما، می‌توانید به صفحه محصولات مراجعه کنید.",
        "خوشحال می‌شوم اگر بتوانم اطلاعات بیشتری در اختیارتان قرار دهم.",
        "آیا به دنبال محصول خاصی هستید؟",
      ]

      const randomResponse = responses[Math.floor(Math.random() * responses.length)]

      const newMsg: Message = {
        id: Date.now(),
        content: randomResponse,
        sender: "support",
        timestamp: new Date(),
        status: "sent",
      }

      setMessages((prev) => [...prev, newMsg])

      if (!isOpen) {
        setHasNewMessage(true)
      }
    }, typingTime)
  }

  // ارسال پیام جدید
  const handleSendMessage = () => {
    if (newMessage.trim() === "") return

    const userMessage: Message = {
      id: Date.now(),
      content: newMessage,
      sender: "user",
      timestamp: new Date(),
      status: "sent",
    }

    setMessages((prev) => [...prev, userMessage])
    setNewMessage("")

    // شبیه‌سازی تغییر وضعیت پیام به delivered و سپس read
    setTimeout(() => {
      setMessages((prev) => prev.map((msg) => (msg.id === userMessage.id ? { ...msg, status: "delivered" } : msg)))

      setTimeout(() => {
        setMessages((prev) => prev.map((msg) => (msg.id === userMessage.id ? { ...msg, status: "read" } : msg)))

        // شبیه‌سازی پاسخ پشتیبان
        simulateResponse()
      }, 1000)
    }, 500)
  }

  // باز کردن چت
  const openChat = () => {
    setIsOpen(true)
    setIsMinimized(false)
    setHasNewMessage(false)
  }

  // بستن چت
  const closeChat = () => {
    setIsOpen(false)
    setHasNewMessage(false)
  }

  // کوچک کردن چت
  const minimizeChat = () => {
    setIsMinimized(true)
  }

  // بزرگ کردن چت
  const maximizeChat = () => {
    setIsMinimized(false)
  }

  // فرمت کردن زمان
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("fa-IR", { hour: "2-digit", minute: "2-digit" })
  }

  // نمایش وضعیت پیام
  const renderMessageStatus = (status: Message["status"]) => {
    switch (status) {
      case "sent":
        return <Circle className="h-3 w-3 text-gray-400" />
      case "delivered":
        return <CheckCircle className="h-3 w-3 text-gray-400" />
      case "read":
        return <CheckCircle className="h-3 w-3 text-blue-500 dark:text-primary-dark-mode" />
    }
  }

  return (
    <>
      {/* دکمه چت */}
      {!isOpen && (
        <button
          onClick={openChat}
          className={cn(
            "fixed bottom-6 left-6 z-50 flex items-center justify-center p-4 rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 dark:bg-primary-dark-mode dark:hover:bg-primary-dark-mode-hover dark:shadow-primary-dark-mode/20 dark:focus:ring-primary-dark-mode chat-widget-button",
            hasNewMessage && "animate-bounce",
          )}
          aria-label="گفتگو با پشتیبانی"
        >
          <MessageCircle className="h-6 w-6" />
          {hasNewMessage && <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>}
        </button>
      )}

      {/* پنجره چت */}
      {isOpen && (
        <div
          className={cn(
            "fixed z-50 transition-all duration-300 ease-in-out shadow-2xl rounded-lg overflow-hidden dark:shadow-primary-dark-mode/20",
            isMinimized ? "bottom-6 left-6 w-72 h-14" : "bottom-6 left-6 w-80 sm:w-96 h-[500px] max-h-[80vh]",
          )}
        >
          {/* هدر چت */}
          <div
            className="bg-primary text-white p-4 flex items-center justify-between cursor-pointer dark:bg-gradient-to-r dark:from-primary-dark-mode dark:to-primary-dark-mode-hover chat-widget-header"
            onClick={isMinimized ? maximizeChat : minimizeChat}
          >
            <div className="flex items-center">
              <div className="relative">
                <Avatar className="h-10 w-10 border-2 border-white dark:border-primary-light">
                  <img src={agent.avatar || "/placeholder.svg"} alt={agent.name} />
                </Avatar>
                <span
                  className={cn(
                    "absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white dark:border-primary-light",
                    agent.isOnline ? "bg-green-500" : "bg-gray-400",
                  )}
                ></span>
              </div>
              <div className="mr-3">
                <h3 className="font-bold">{agent.name}</h3>
                <p className="text-xs text-white/80">{agent.isOnline ? "آنلاین" : "آفلاین"}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {isMinimized ? (
                <ChevronDown className="h-5 w-5" />
              ) : (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-white hover:bg-white/20 rounded-full dark:hover:bg-dark-100/30"
                    onClick={(e) => {
                      e.stopPropagation()
                      minimizeChat()
                    }}
                  >
                    <MinusCircle className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-white hover:bg-white/20 rounded-full dark:hover:bg-dark-100/30"
                    onClick={(e) => {
                      e.stopPropagation()
                      closeChat()
                    }}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* بدنه چت - فقط نمایش در حالت باز */}
          {!isMinimized && (
            <>
              {/* پیام‌ها */}
              <div className="bg-white dark:bg-dark-200 p-4 h-[calc(100%-8rem)] overflow-y-auto">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn("flex", message.sender === "user" ? "justify-end" : "justify-start")}
                    >
                      <div
                        className={cn(
                          "max-w-[80%] rounded-lg p-3 relative",
                          message.sender === "user"
                            ? "bg-primary text-white rounded-bl-lg rounded-tl-lg rounded-tr-none dark:bg-primary-dark-mode chat-widget-message-user"
                            : "bg-gray-100 dark:bg-dark-100 text-gray-800 dark:text-gray-100 rounded-br-lg rounded-tr-lg rounded-tl-none chat-widget-message-support",
                        )}
                      >
                        <p className="text-sm">{message.content}</p>
                        <div
                          className={cn(
                            "text-xs mt-1 flex items-center gap-1",
                            message.sender === "user"
                              ? "justify-end text-white/70"
                              : "justify-start text-gray-500 dark:text-gray-400",
                          )}
                        >
                          <span>{formatTime(message.timestamp)}</span>
                          {message.sender === "user" && renderMessageStatus(message.status)}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* نمایش وضعیت تایپ کردن */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 dark:bg-dark-100 rounded-lg p-3 max-w-[80%] chat-widget-typing-indicator">
                        <div className="flex space-x-2 space-x-reverse">
                          <div
                            className="w-2 h-2 rounded-full bg-gray-400 animate-bounce dark:bg-gray-500 chat-widget-typing-dot"
                            style={{ animationDelay: "0ms" }}
                          ></div>
                          <div
                            className="w-2 h-2 rounded-full bg-gray-400 animate-bounce dark:bg-gray-500 chat-widget-typing-dot"
                            style={{ animationDelay: "150ms" }}
                          ></div>
                          <div
                            className="w-2 h-2 rounded-full bg-gray-400 animate-bounce dark:bg-gray-500 chat-widget-typing-dot"
                            style={{ animationDelay: "300ms" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* رفرنس برای اسکرول به آخرین پیام */}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* فرم ارسال پیام */}
              <div className="bg-white dark:bg-dark-200 border-t border-gray-200 dark:border-dark-border p-3">
                <form
                  className="flex items-end gap-2"
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSendMessage()
                  }}
                >
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 flex-shrink-0 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary-dark-mode"
                  >
                    <Paperclip className="h-5 w-5" />
                  </Button>
                  <div className="relative flex-grow">
                    <Textarea
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="پیام خود را بنویسید..."
                      className="resize-none min-h-[40px] max-h-[120px] pr-3 pl-10 dark:bg-dark-100 dark:border-dark-border dark:placeholder:text-gray-500 chat-widget-input"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault()
                          handleSendMessage()
                        }
                      }}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute left-2 bottom-2 h-6 w-6 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary-dark-mode"
                    >
                      <Smile className="h-5 w-5" />
                    </Button>
                  </div>
                  <Button
                    type="submit"
                    size="icon"
                    className="h-10 w-10 rounded-full flex-shrink-0 dark:bg-primary-dark-mode dark:hover:bg-primary-dark-mode-hover"
                    disabled={newMessage.trim() === ""}
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </form>
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}
