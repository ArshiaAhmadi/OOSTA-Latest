import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-12 text-center">
      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <AlertTriangle className="h-10 w-10 text-primary" />
      </div>
      <h1 className="text-4xl font-bold mb-4">صفحه مورد نظر یافت نشد</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا به آدرس دیگری منتقل شده است.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/">
          <Button size="lg">بازگشت به صفحه اصلی</Button>
        </Link>
        <Link href="/products">
          <Button variant="outline" size="lg">
            مشاهده محصولات
          </Button>
        </Link>
      </div>
    </div>
  )
}
