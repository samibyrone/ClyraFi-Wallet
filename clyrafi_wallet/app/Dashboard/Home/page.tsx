import { Button } from "@/component/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card"
import { DashboardLayout } from "@/component/dashboard/layout/dashboard-layout"
import { ArrowUpRight, ArrowDownRight, DollarSign, Users, CreditCard, TrendingUp } from "lucide-react"

export default function HomePage() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
          <Button className="bg-purple-700 hover:bg-purple-900 text-white">
            <ArrowUpRight className="w-4 h-4 mr-2" />
            Quick Action
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₦2,450,000</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +12.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Active Customers</CardTitle>
              <Users className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +8.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Transactions</CardTitle>
              <CreditCard className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5,678</div>
              <p className="text-xs text-red-600 flex items-center mt-1">
                <ArrowDownRight className="w-3 h-3 mr-1" />
                -2.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Success Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98.5%</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +0.3% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow border-none">
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { id: "TXN001", amount: "₦45,000", customer: "John Doe", status: "Success", time: "2 mins ago" },
                  { id: "TXN002", amount: "₦12,500", customer: "Jane Smith", status: "Pending", time: "5 mins ago" },
                  { id: "TXN003", amount: "₦78,900", customer: "Mike Johnson", status: "Success", time: "8 mins ago" },
                  { id: "TXN004", amount: "₦23,400", customer: "Sarah Wilson", status: "Failed", time: "12 mins ago" },
                ].map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between py-2 hover:shadow-lg transition-shadow border-none">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{transaction.customer}</p>
                      <p className="text-xs text-gray-500">
                        {transaction.id} • {transaction.time}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-sm">{transaction.amount}</p>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          transaction.status === "Success"
                            ? "bg-green-100 text-green-800"
                            : transaction.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-none">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent hover:shadow-lg transition-shadow border-none bg-purple-100">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Create Payment Link
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent hover:shadow-lg transition-shadow border-none bg-purple-100">
                  <Users className="w-4 h-4 mr-2" />
                  Add New Customer
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent hover:shadow-lg transition-shadow border-none bg-purple-100">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Process Refund
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent hover:shadow-lg transition-shadow border-none bg-purple-100">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
