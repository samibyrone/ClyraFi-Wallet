import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { transactions } from "./transaction-stats";
import { Textarea } from "@/components/ui/textarea";
import { Search, Filter, Download, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardLayout } from "@/components/dashboard/layout/dashboard-layout";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function TransactionsPage() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Transactions</h1>
          <div className="flex space-x-2">
            <Button variant="outline" className="hover:bg-gray-500 text-black bg-gray-300 font-semibold">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button className="bg-purple-700 hover:bg-purple-900 font-semibold text-white">Create Payment</Button>
          </div>
        </div>

        <Card className="hover:shadow-lg transition-shadow border-none">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 hover:shadow-lg transition-shadow border-none">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Textarea placeholder="Search transactions..." className="pl-10" />
                </div>
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="success">Success</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Payment Method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Methods</SelectItem>
                  <SelectItem value="card">Card</SelectItem>
                  <SelectItem value="bank">Bank Transfer</SelectItem>
                  <SelectItem value="wallet">Wallet</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow border-none">
          <CardHeader>
            <CardTitle>All Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="hover:shadow-lg transition-shadow border-none">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Transaction ID</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Customer</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Amount</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Method</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-gray-50 hover:shadow-lg transition-shadow border-none">
                      <td className="py-3 px-4">
                        <span className="font-mono text-sm">{transaction.id}</span>
                      </td>
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium text-sm">{transaction.customer}</p>
                          <p className="text-xs text-gray-500">{transaction.email}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-medium">{transaction.amount}</td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={
                            transaction.status === "Success"
                              ? "default"
                              : transaction.status === "Pending"
                                ? "secondary"
                                : "destructive"
                          }
                          className={
                            transaction.status === "Success"
                              ? "bg-green-100 text-green-800 hover:bg-green-100"
                              : transaction.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                : "bg-red-100 text-red-800 hover:bg-red-100"
                          }
                        >
                          {transaction.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-sm">{transaction.method}</td>
                      <td className="py-3 px-4 text-sm">
                        <div>
                          <p>{transaction.date}</p>
                          <p className="text-gray-500">{transaction.time}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};
