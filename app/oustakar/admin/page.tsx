"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"
import {
  Search,
  Eye,
  Edit,
  MessageCircle,
  Phone,
  CheckCircle,
  Clock,
  Users,
  DollarSign,
  Settings,
  Download,
  Plus,
} from "lucide-react"

export default function OrderManagementPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedTimeRange, setSelectedTimeRange] = useState("7days")

  // Sample data
  const dashboardStats = [
    {
      title: "کل سفارشات",
      value: "1,247",
      change: "+12%",
      trend: "up",
      icon: <Users className="h-6 w-6" />,
      color: "text-blue-600",
    },
    {
      title: "سفارشات فعال",
      value: "89",
      change: "+5%",
      trend: "up",
      icon: <Clock className="h-6 w-6" />,
      color: "text-orange-600",
    },
    {
      title: "درآمد ماهانه",
      value: "۲۴۵ میلیون",
      change: "+18%",
      trend: "up",
      icon: <DollarSign className="h-6 w-6" />,
      color: "text-green-600",
    },
    {
      title: "متخصصین فعال",
      value: "156",
      change: "+3%",
      trend: "up",
      icon: <CheckCircle className="h-6 w-6" />,
      color: "text-purple-600",
    },
  ]

  const revenueData = [
    { month: "فروردین", revenue: 180 },
    { month: "اردیبهشت", revenue: 220 },
    { month: "خرداد", revenue: 195 },
    { month: "تیر", revenue: 245 },
    { month: "مرداد", revenue: 280 },
    { month: "شهریور", revenue: 310 },
  ]

  const categoryData = [
    { name: "برق و اتوماسیون", value: 35, color: "#253F8F" },
    { name: "تاسیسات", value: 28, color: "#F18F20" },
    { name: "ماشین‌آلات", value: 22, color: "#10B981" },
    { name: "تهویه مطبوع", value: 15, color: "#8B5CF6" },
  ]

  const orders = [
    {
      id: "OST-2024-001",
      title: "تعمیر تابلو برق صنعتی",
      customer: "شرکت فولاد مبارکه",
      specialist: "علی محمدی",
      status: "in-progress",
      statusText: "در حال انجام",
      amount: 2500000,
      date: "1403/01/15",
      priority: "high",
      category: "برق و اتوماسیون",
    },
    {
      id: "OST-2024-002",
      title: "سرویس کمپرسور هوا",
      customer: "کارخانه نساجی پارس",
      specialist: "رضا کریمی",
      status: "completed",
      statusText: "تکمیل شده",
      amount: 800000,
      date: "1403/01/12",
      priority: "medium",
      category: "تاسیسات",
    },
    {
      id: "OST-2024-003",
      title: "تعمیر گیربکس",
      customer: "صنایع خودروسازی",
      specialist: "حسین احمدی",
      status: "pending",
      statusText: "در انتظار",
      amount: 1500000,
      date: "1403/01/18",
      priority: "low",
      category: "ماشین‌آلات",
    },
    {
      id: "OST-2024-004",
      title: "نصب سیستم تهویه",
      customer: "مجتمع تجاری آریا",
      specialist: "مهدی رضایی",
      status: "assigned",
      statusText: "تخصیص داده شده",
      amount: 3200000,
      date: "1403/01/20",
      priority: "high",
      category: "تهویه مطبوع",
    },
    {
      id: "OST-2024-005",
      title: "تعمیر موتور الکتریکی",
      customer: "کارخانه سیمان",
      specialist: "امیر حسینی",
      status: "in-progress",
      statusText: "در حال انجام",
      amount: 1800000,
      date: "1403/01/16",
      priority: "medium",
      category: "برق و اتوماسیون",
    },
  ]

  const specialists = [
    {
      id: 1,
      name: "علی محمدی",
      specialty: "برق صنعتی",
      activeOrders: 3,
      completedOrders: 45,
      rating: 4.9,
      status: "active",
      revenue: 12500000,
    },
    {
      id: 2,
      name: "رضا کریمی",
      specialty: "تاسیسات",
      activeOrders: 2,
      completedOrders: 38,
      rating: 4.8,
      status: "active",
      revenue: 9800000,
    },
    {
      id: 3,
      name: "حسین احمدی",
      specialty: "ماشین‌آلات",
      activeOrders: 1,
      completedOrders: 32,
      rating: 4.7,
      status: "busy",
      revenue: 8200000,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700 border-green-200"
      case "in-progress":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-200"
      case "assigned":
        return "bg-purple-100 text-purple-700 border-purple-200"
      case "cancelled":
        return "bg-red-100 text-red-700 border-red-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700"
      case "medium":
        return "bg-yellow-100 text-yellow-700"
      case "low":
        return "bg-green-100 text-green-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order.title.includes(searchQuery) || order.customer.includes(searchQuery)
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#253F8F] to-[#F18F20] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-black mb-4">پنل مدیریت اوستاکار</h1>
              <p className="text-xl text-white/90">مدیریت جامع سفارشات و متخصصین</p>
            </div>
            <div className="flex space-x-4 space-x-reverse">
              <Button
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                <Download className="h-4 w-4 ml-2" />
                گزارش‌گیری
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                <Settings className="h-4 w-4 ml-2" />
                تنظیمات
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-white shadow-lg border-0 mb-8">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-[#F18F20] data-[state=active]:text-white">
              داشبورد
            </TabsTrigger>
            <TabsTrigger value="orders" className="data-[state=active]:bg-[#F18F20] data-[state=active]:text-white">
              سفارشات
            </TabsTrigger>
            <TabsTrigger
              value="specialists"
              className="data-[state=active]:bg-[#F18F20] data-[state=active]:text-white"
            >
              متخصصین
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-[#F18F20] data-[state=active]:text-white">
              آنالیتیکس
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-[#F18F20] data-[state=active]:text-white">
              تنظیمات
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard">
            <div className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardStats.map((stat, index) => (
                  <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                          <p className="text-3xl font-black text-gray-800">{stat.value}</p>
                          <p className={`text-sm ${stat.trend === "up" ? "text-green-600" : "text-red-600"} mt-1`}>
                            {stat.change} از ماه قبل
                          </p>
                        </div>
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-r from-[#253F8F] to-[#F18F20] flex items-center justify-center text-white`}
                        >
                          {stat.icon}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Revenue Chart */}
                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="text-[#253F8F]">روند درآمد (میلیون تومان)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="revenue" stroke="#F18F20" strokeWidth={3} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Category Distribution */}
                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="text-[#253F8F]">توزیع سفارشات بر اساس دسته‌بندی</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={categoryData}
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {categoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Orders */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-[#253F8F]">آخرین سفارشات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orders.slice(0, 5).map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4 space-x-reverse">
                          <div>
                            <h3 className="font-semibold text-gray-800">{order.title}</h3>
                            <p className="text-sm text-gray-600">{order.customer}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 space-x-reverse">
                          <Badge className={getStatusColor(order.status)}>{order.statusText}</Badge>
                          <span className="font-semibold text-[#F18F20]">{order.amount.toLocaleString()} تومان</span>
                          <Button size="sm" variant="outline" className="bg-transparent">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <div className="space-y-6">
              {/* Filters */}
              <Card className="shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          placeholder="جستجو در سفارشات..."
                          className="pr-10"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="وضعیت" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">همه وضعیت‌ها</SelectItem>
                        <SelectItem value="pending">در انتظار</SelectItem>
                        <SelectItem value="assigned">تخصیص داده شده</SelectItem>
                        <SelectItem value="in-progress">در حال انجام</SelectItem>
                        <SelectItem value="completed">تکمیل شده</SelectItem>
                        <SelectItem value="cancelled">لغو شده</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="bg-gradient-to-r from-[#253F8F] to-[#F18F20] hover:from-[#253F8F]/90 hover:to-[#F18F20]/90">
                      <Plus className="h-4 w-4 ml-2" />
                      سفارش جدید
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Orders Table */}
              <Card className="shadow-lg border-0">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>شماره سفارش</TableHead>
                        <TableHead>عنوان</TableHead>
                        <TableHead>مشتری</TableHead>
                        <TableHead>متخصص</TableHead>
                        <TableHead>وضعیت</TableHead>
                        <TableHead>اولویت</TableHead>
                        <TableHead>مبلغ</TableHead>
                        <TableHead>تاریخ</TableHead>
                        <TableHead>عملیات</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredOrders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-mono">{order.id}</TableCell>
                          <TableCell className="font-semibold">{order.title}</TableCell>
                          <TableCell>{order.customer}</TableCell>
                          <TableCell>{order.specialist}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(order.status)}>{order.statusText}</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className={getPriorityColor(order.priority)}>
                              {order.priority === "high" ? "بالا" : order.priority === "medium" ? "متوسط" : "پایین"}
                            </Badge>
                          </TableCell>
                          <TableCell className="font-semibold text-[#F18F20]">
                            {order.amount.toLocaleString()}
                          </TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2 space-x-reverse">
                              <Button size="sm" variant="outline" className="bg-transparent">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline" className="bg-transparent">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline" className="bg-transparent">
                                <MessageCircle className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Specialists Tab */}
          <TabsContent value="specialists">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-[#253F8F]">مدیریت متخصصین</h2>
                <Button className="bg-gradient-to-r from-[#253F8F] to-[#F18F20] hover:from-[#253F8F]/90 hover:to-[#F18F20]/90">
                  <Plus className="h-4 w-4 ml-2" />
                  افزودن متخصص
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specialists.map((specialist) => (
                  <Card
                    key={specialist.id}
                    className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-lg text-gray-800">{specialist.name}</h3>
                          <p className="text-[#253F8F] font-semibold">{specialist.specialty}</p>
                        </div>
                        <Badge
                          className={
                            specialist.status === "active"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }
                        >
                          {specialist.status === "active" ? "فعال" : "مشغول"}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-gray-600">سفارشات فعال:</span>
                          <span className="font-semibold mr-2">{specialist.activeOrders}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">تکمیل شده:</span>
                          <span className="font-semibold mr-2">{specialist.completedOrders}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">امتیاز:</span>
                          <span className="font-semibold mr-2 text-[#F18F20]">{specialist.rating}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">درآمد:</span>
                          <span className="font-semibold mr-2 text-green-600">
                            {(specialist.revenue / 1000000).toFixed(1)}M
                          </span>
                        </div>
                      </div>

                      <div className="flex space-x-2 space-x-reverse">
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                          <Eye className="h-4 w-4 ml-2" />
                          مشاهده
                        </Button>
                        <Button size="sm" variant="outline" className="bg-transparent">
                          <Phone className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="bg-transparent">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-[#253F8F]">آنالیتیکس و گزارشات</h2>
                <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7days">7 روز گذشته</SelectItem>
                    <SelectItem value="30days">30 روز گذشته</SelectItem>
                    <SelectItem value="3months">3 ماه گذشته</SelectItem>
                    <SelectItem value="1year">1 سال گذشته</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Revenue Chart */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-[#253F8F]">روند درآمد ماهانه</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="revenue" fill="#F18F20" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Performance Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="text-[#253F8F] text-lg">نرخ تکمیل سفارشات</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-4xl font-black text-green-600 mb-2">94.2%</div>
                      <p className="text-sm text-gray-600">از کل سفارشات</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="text-[#253F8F] text-lg">میانگین زمان تکمیل</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-4xl font-black text-blue-600 mb-2">3.2</div>
                      <p className="text-sm text-gray-600">روز</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="text-[#253F8F] text-lg">رضایت مشتریان</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-4xl font-black text-[#F18F20] mb-2">4.8</div>
                      <p className="text-sm text-gray-600">از 5 امتیاز</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-[#253F8F]">تنظیمات سیستم</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="text-[#253F8F]">تنظیمات عمومی</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold mb-2 block">نام پلتفرم</label>
                      <Input defaultValue="اوستاکار" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">ایمیل پشتیبانی</label>
                      <Input defaultValue="support@oustakar.com" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">شماره تماس</label>
                      <Input defaultValue="021-12345678" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="text-[#253F8F]">تنظیمات مالی</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold mb-2 block">کمیسیون پلتفرم (%)</label>
                      <Input defaultValue="10" type="number" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">حداقل مبلغ سفارش</label>
                      <Input defaultValue="100000" type="number" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">حداکثر مبلغ سفارش</label>
                      <Input defaultValue="50000000" type="number" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-end">
                <Button className="bg-gradient-to-r from-[#253F8F] to-[#F18F20] hover:from-[#253F8F]/90 hover:to-[#F18F20]/90">
                  ذخیره تنظیمات
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
