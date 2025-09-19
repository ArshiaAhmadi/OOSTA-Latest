import { ProductCategoryList } from "@/components/product-category-list"

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">دسته‌بندی محصولات</h1>
      <p className="text-muted-foreground mb-8">
        لطفاً یکی از دسته‌بندی‌های زیر را انتخاب کنید تا محصولات مرتبط را مشاهده نمایید.
      </p>

      <ProductCategoryList />
    </div>
  )
}
