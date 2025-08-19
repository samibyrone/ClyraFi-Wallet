import { getStarted } from "./dashPage";
import Link from "next/link";
import Dashbar from "./Dashboard-Navbar/page";
import { Button } from "@/component/ui/Button";
import { Server, WalletCardsIcon, FileText } from "lucide-react";
import { ComplianceForm } from "@/component/dashboard/compliance-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card"
import { DashboardLayout } from "@/component/dashboard/layout/dashboard-layout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className=''>
        <Dashbar />
        <ComplianceForm />
      </div>
       <section id="dashboard" className="py-20 px-4 bg-white">
        <div className="container mx-auto mt-10 mb-30">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 ">Welcome to <span className="text-purple-800">ClyraFi</span></h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-semibold">
              Your business is in test mode
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-15 text-center pl-20">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Server className="h-10 w-10 text-blue-600 mb-4"/>
                <CardTitle className="font-bold text-xl">API testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Access our developer tools and create a test API key to begin integrating our services.
                </p>
              </CardContent>
                <Link href="/dashboard/api-testing" className="items-center">
                  <Button className="rounded-lg bg-purple-800 text-white text-lg hover:text-gray-300 font-medium mb-7 py-6 px-12">Generate Test API</Button>
                </Link>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <WalletCardsIcon className="h-10 w-10 text-purple-600 mb-4" />
                <CardTitle className="font-bold text-xl">Wallet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                 Experience the full functionality of our platform in a simulated environment using the demo wallet.
                </p>
              </CardContent>
                <Link href="/dashboard/wallet" className="items-center">
                  <Button className="rounded-lg bg-purple-800 text-white hover:text-gray-300 text-lg font-medium mb-7 py-6 px-12">Demo Test Wallet</Button>
                </Link>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <FileText className="h-10 w-10 text-green-600 mb-4" />
                <CardTitle className="font-bold text-xl">Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                 Explore detailed guides, code samples, and technical specifications in our API documentation.
                </p>
              </CardContent>
                <Link href="/dashboard/documentation" className="items-center">
                  <Button className="rounded-lg bg-purple-800 text-white hover:text-gray-300 text-lg font-medium mb-7 py-6 px-10">API Documentation</Button>
                </Link>
            </Card>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};
