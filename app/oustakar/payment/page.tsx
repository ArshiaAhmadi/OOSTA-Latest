"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import {
  CreditCard,
  Banknote,
  Wallet,
  Shield,
  CheckCircle,
  Clock,
  Receipt,
  Download,
  ArrowLeft,
  Lock,
  AlertCircle,
  Calendar,
  Building,
} from "lucide-react"

export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState("card")
  const [paymentStep, setPaymentStep] = useState(1)
  const [installmentPlan, setInstallmentPlan] = useState("full")
  const [cardData, setCardData] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  })

  // Sample order data
  const orderData = {
    orderNumber: "OST-2024-001",
    title: "تعمیر تابلو برق صنعتی",
    specialist: "علی محمدی",
    serviceAmount: 2000000,
    tax: 200000,
    platformFee: 100000,
    discount: 50000,
    totalAmount: 2250000,
  }

  const paymentMethods = [
    {
      id: "card",
      name: "کارت بانکی",
      description: "پرداخت با کارت‌های عضو شتاب",
      icon: <CreditCard className="h-6 w-6" />,
      available: true,
    },
    {
      id: "bank",
      name: "انتقال بانکی",
      description: "انتقال وجه از حساب بانکی",
      icon: <Banknote className="h-6 w-6" />,
      available: true,
    },
    {
      id: "wallet",
      name: "کیف پول دیجیتال",
      description: "��رداخت با کیف پول‌های دیجیتال",
      icon: <Wallet className="h-6 w-6" />,
      available: false,
    },
  ]

  const installmentOptions = [
    { id: "full", name: "پرداخت کامل", description: "پرداخت یکجا کل مبلغ", discount: 5 },
    { id: "2months", name: "2 قسط", description: "پرداخت در 2 قسط ماهانه", fee: 2 },
    { id: "3months", name: "3 قسط", description: "پرداخت در 3 قسط ماهانه", fee: 5 },
    { id: "6months", name: "6 قسط", description: "پرداخت در 6 قسط ماهانه", fee: 10 },
  ]

  const calculateFinalAmount = () => {
    const baseAmount = orderData.totalAmount
    const selectedOption = installmentOptions.find((opt) => opt.id === installmentPlan)

    if (selectedOption?.discount) {
      return baseAmount - (baseAmount * selectedOption.discount) / 100
    } else if (selectedOption?.fee) {
      return baseAmount + (baseAmount * selectedOption.fee) / 100
    }
    return baseAmount
  }

  const processPayment = () => {
    setPaymentStep(2)
    // Simulate payment processing
    setTimeout(() => {
      setPaymentStep(3)
    }, 3000)
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(" ")
    } else {
      return v
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#253F8F] to-[#F18F20] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">پرداخت امن</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              پرداخت آنلاین با بالاترین سطح امنیت و حفاظت از اطلاعات شما
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {paymentStep === 1 && (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Payment Methods */}
              <div className="lg:col-span-2">
                <Card className="shadow-lg border-0 mb-8">
                  <CardHeader>
                    <CardTitle className="text-[#253F8F] flex items-center">
                      <CreditCard className="h-6 w-6 ml-2" />
                      انتخاب روش پرداخت
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod} className="space-y-4">
                      {paymentMethods.map((method) => (
                        <div key={method.id} className="flex items-center space-x-3 space-x-reverse">
                          <RadioGroupItem value={method.id} id={method.id} disabled={!method.available} />
                          <Label
                            htmlFor={method.id}
                            className={`flex-1 cursor-pointer ${!method.available ? "opacity-50" : ""}`}
                          >
                            <div className="flex items-center p-4 border-2 rounded-lg hover:bg-gray-50 transition-colors">
                              <div className="w-12 h-12 bg-gradient-to-r from-[#253F8F] to-[#F18F20] rounded-lg flex items-center justify-center text-white ml-4">
                                {method.icon}
                              </div>
                              <div>
                                <div className="font-semibold text-gray-800">{method.name}</div>
                                <div className="text-sm text-gray-600">{method.description}</div>
                              </div>
                              {!method.available && (
                                <Badge variant="secondary" className="mr-auto">
                                  به زودی
                                </Badge>
                              )}
                            </div>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Installment Options */}
                <Card className="shadow-lg border-0 mb-8">
                  <CardHeader>
                    <CardTitle className="text-[#253F8F] flex items-center">
                      <Calendar className="h-6 w-6 ml-2" />
                      نحوه پرداخت
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={installmentPlan} onValueChange={setInstallmentPlan} className="space-y-4">
                      {installmentOptions.map((option) => (
                        <div key={option.id} className="flex items-center space-x-3 space-x-reverse">
                          <RadioGroupItem value={option.id} id={option.id} />
                          <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                            <div className="flex items-center justify-between p-4 border-2 rounded-lg hover:bg-gray-50 transition-colors">
                              <div>
                                <div className="font-semibold text-gray-800">{option.name}</div>
                                <div className="text-sm text-gray-600">{option.description}</div>
                              </div>
                              <div className="text-left">
                                {option.discount && (
                                  <Badge className="bg-green-100 text-green-700">{option.discount}% تخفیف</Badge>
                                )}
                                {option.fee && (
                                  <Badge variant="outline" className="border-orange-200 text-orange-700">
                                    +{option.fee}% کارمزد
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Payment Form */}
                {selectedMethod === "card" && (
                  <Card className="shadow-lg border-0">
                    <CardHeader>
                      <CardTitle className="text-[#253F8F] flex items-center">
                        <Lock className="h-6 w-6 ml-2" />
                        اطلاعات کارت بانکی
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <Label className="text-sm font-semibold mb-2 block">شماره کارت</Label>
                          <Input
                            placeholder="1234 5678 9012 3456"
                            value={cardData.number}
                            onChange={(e) => setCardData({ ...cardData, number: formatCardNumber(e.target.value) })}
                            maxLength={19}
                            className="text-lg font-mono"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="text-sm font-semibold mb-2 block">تاریخ انقضا</Label>
                            <Input
                              placeholder="MM/YY"
                              value={cardData.expiry}
                              onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                              maxLength={5}
                              className="font-mono"
                            />
                          </div>
                          <div>
                            <Label className="text-sm font-semibold mb-2 block">CVV</Label>
                            <Input
                              placeholder="123"
                              type="password"
                              value={cardData.cvv}
                              onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                              maxLength={4}
                              className="font-mono"
                            />
                          </div>
                        </div>
                        <div>
                          <Label className="text-sm font-semibold mb-2 block">نام دارنده کارت</Label>
                          <Input
                            placeholder="نام و نام خانوادگی به انگلیسی"
                            value={cardData.name}
                            onChange={(e) => setCardData({ ...cardData, name: e.target.value.toUpperCase() })}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {selectedMethod === "bank" && (
                  <Card className="shadow-lg border-0">
                    <CardHeader>
                      <CardTitle className="text-[#253F8F] flex items-center">
                        <Building className="h-6 w-6 ml-2" />
                        انتقال بانکی
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h3 className="font-semibold text-blue-800 mb-2">اطلاعات حساب مقصد</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>بانک:</span>
                              <span className="font-mono">ملی ایران</span>
                            </div>
                            <div className="flex justify-between">
                              <span>شماره حساب:</span>
                              <span className="font-mono">0123456789012345</span>
                            </div>
                            <div className="flex justify-between">
                              <span>شماره کارت:</span>
                              <span className="font-mono">6037-9919-1234-5678</span>
                            </div>
                            <div className="flex justify-between">
                              <span>نام صاحب حساب:</span>
                              <span>شرکت اوستا</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-yellow-50 p-4 rounded-lg">
                          <div className="flex items-start">
                            <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 ml-2" />
                            <div className="text-sm text-yellow-800">
                              <p className="font-semibold mb-1">نکات مهم:</p>
                              <ul className="list-disc list-inside space-y-1">
                                <li>پس از انتقال وجه، رسید را در سیستم بارگذاری کنید</li>
                                <li>تأیید پرداخت تا 24 ساعت زمان ��ی‌برد</li>
                                <li>مبلغ انتقالی باید دقیقاً برابر با مبلغ فاکتور باشد</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="shadow-lg border-0 sticky top-8">
                  <CardHeader>
                    <CardTitle className="text-[#253F8F] flex items-center">
                      <Receipt className="h-6 w-6 ml-2" />
                      خلاصه سفارش
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">{orderData.title}</h3>
                        <p className="text-sm text-gray-600">شماره سفارش: {orderData.orderNumber}</p>
                        <p className="text-sm text-gray-600">متخصص: {orderData.specialist}</p>
                      </div>

                      <Separator />

                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>هزینه خدمات:</span>
                          <span>{orderData.serviceAmount.toLocaleString()} تومان</span>
                        </div>
                        <div className="flex justify-between">
                          <span>مالیات:</span>
                          <span>{orderData.tax.toLocaleString()} تومان</span>
                        </div>
                        <div className="flex justify-between">
                          <span>کمیسیون پلتفرم:</span>
                          <span>{orderData.platformFee.toLocaleString()} تومان</span>
                        </div>
                        {orderData.discount > 0 && (
                          <div className="flex justify-between text-green-600">
                            <span>تخفیف:</span>
                            <span>-{orderData.discount.toLocaleString()} تومان</span>
                          </div>
                        )}

                        <Separator />

                        <div className="flex justify-between text-lg font-bold">
                          <span>جمع کل:</span>
                          <span>{orderData.totalAmount.toLocaleString()} تومان</span>
                        </div>

                        {installmentPlan !== "full" && (
                          <>
                            <div className="flex justify-between text-sm text-gray-600">
                              <span>کارمزد اقساط:</span>
                              <span>+{(calculateFinalAmount() - orderData.totalAmount).toLocaleString()} تومان</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold text-[#F18F20]">
                              <span>مبلغ نهایی:</span>
                              <span>{calculateFinalAmount().toLocaleString()} تومان</span>
                            </div>
                          </>
                        )}

                        {installmentPlan === "full" && (
                          <div className="flex justify-between text-sm text-green-600">
                            <span>تخفیف پرداخت نقدی:</span>
                            <span>-{(orderData.totalAmount * 0.05).toLocaleString()} تومان</span>
                          </div>
                        )}
                      </div>

                      <Separator />

                      <div className="space-y-3">
                        <Button
                          onClick={processPayment}
                          className="w-full bg-gradient-to-r from-[#253F8F] to-[#F18F20] hover:from-[#253F8F]/90 hover:to-[#F18F20]/90 py-3 text-lg font-semibold"
                          disabled={
                            selectedMethod === "card" && (!cardData.number || !cardData.expiry || !cardData.cvv)
                          }
                        >
                          <Lock className="h-5 w-5 ml-2" />
                          پرداخت امن
                        </Button>

                        <div className="flex items-center justify-center text-sm text-gray-600">
                          <Shield className="h-4 w-4 ml-1 text-green-600" />
                          <span>پرداخت با بالاترین سطح امنیت</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Processing Step */}
        {paymentStep === 2 && (
          <div className="max-w-2xl mx-auto text-center">
            <Card className="shadow-lg border-0">
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-gradient-to-r from-[#253F8F] to-[#F18F20] rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl font-black text-[#253F8F] mb-4">در حال پردازش پرداخت</h2>
                <p className="text-gray-600 mb-8">
                  لطفاً صبر کنید، پرداخت شما در حال پردازش است. این فرآیند ممکن است چند لحظه طول بکشد.
                </p>
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F18F20]"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Success Step */}
        {paymentStep === 3 && (
          <div className="max-w-2xl mx-auto text-center">
            <Card className="shadow-lg border-0">
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl font-black text-green-600 mb-4">پرداخت موفقیت‌آمیز بود!</h2>
                <p className="text-gray-600 mb-8">
                  پرداخت شما با موفقیت انجام شد. رسید پرداخت به ایمیل شما ارسال خواهد شد.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8 text-right">
                  <h3 className="font-semibold text-gray-800 mb-4">جزئیات پرداخت</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>شماره تراکنش:</span>
                      <span className="font-mono">TXN-{Date.now()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>تاریخ پرداخت:</span>
                      <span>{new Date().toLocaleDateString("fa-IR")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>مبلغ پرداخت شده:</span>
                      <span className="font-semibold text-green-600">
                        {calculateFinalAmount().toLocaleString()} تومان
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>روش پرداخت:</span>
                      <span>{paymentMethods.find((m) => m.id === selectedMethod)?.name}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="bg-gradient-to-r from-[#253F8F] to-[#F18F20] hover:from-[#253F8F]/90 hover:to-[#F18F20]/90"
                    onClick={() => (window.location.href = "/oustakar/orders")}
                  >
                    <ArrowLeft className="h-4 w-4 ml-2" />
                    مشاهده سفارش
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    <Download className="h-4 w-4 ml-2" />
                    دانلود رسید
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
