import { wallets } from "./wallets-stats"
import { Badge } from "@/component/ui/badge"
import { Input } from "@/component/ui/input"
import { Button } from "@/component/ui/button"
import { Avatar, AvatarFallback } from "@/component/ui/avatar"
import { DashboardLayout } from "@/component/dashboard/layout/dashboard-layout"
import { Search, Plus, Mail, Phone, Eye, MoreHorizontal } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card"

export default function WalletsPage() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Wallets</h1>
          <Button className="bg-purple-800 hover:bg-purple-600 text-white font-semibold">
            <Plus className="w-4 h-4 mr-2" />
            Add Wallet
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="relative hover:shadow-lg transition-shadow border-none">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"/>
              <Input placeholder="Search customers by name, email, or phone..." className="pl-10" />
            </div>
          </div>
          <Card className="hover:shadow-lg transition-shadow border-none">
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">1,234</p>
                <p className="text-sm text-gray-600 font-semibold">Total Wallets</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="hover:shadow-lg transition-shadow border-none">
          <CardHeader>
            <CardTitle>All Wallets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {wallets.map((wallets) => (
                <div
                  key={wallets.id}
                  className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 hover:shadow-lg transition-shadow border-none"
                >
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-purple-100 text-purple-600">
                        {wallets.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-gray-900">{wallets.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Mail className="w-3 h-3 mr-1" />
                          {wallets.email}
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-3 h-3 mr-1" />
                          {wallets.phone}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{wallets.totalSpent}</p>
                      <p className="text-sm text-gray-500">{wallets.transactions} transactions</p>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={wallets.status === "Active" ? "default" : "secondary"}
                        className={
                          wallets.status === "Active"
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                        }
                      >
                        {wallets.status}
                      </Badge>
                      <p className="text-sm text-gray-500 mt-1">Last seen: {wallets.lastSeen}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
