"use client";

import { useState } from "react";
import Dashbar from "./Dashboard-Navbar/page";
import { Button } from "@/component/ui/button";
import { Server, WalletCardsIcon, FileText } from "lucide-react";
import ApiDocsModal from "@/component/dashboard/getStarted/apiDocs";
import TestKeysModal from "@/component/dashboard/getStarted/testKey";
import { ComplianceForm } from "@/component/dashboard/compliance-form";
import DemoWalletModal from "@/component/dashboard/getStarted/walletDemo";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";
import { DashboardLayout } from "@/component/dashboard/layout/dashboard-layout";

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDemoWalletOpen, setIsDemoWalletOpen] = useState(false);
  const [isApiDocsOpen, setIsApiDocsOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className=''>
        <Dashbar />
        <ComplianceForm />
      </div>
      <section id='dashboard' className='py-20 px-4 bg-white'>
        <div className='container mx-auto mt-10 mb-30'>
          <div className='text-center mb-20'>
            <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4 '>
              Welcome to <span className='text-purple-800 font-bold'>ClyraFi</span>
            </h2>
            <p className='text-lg text-slate-600 max-w-2xl mx-auto font-semibold'>
              Your business is in test mode
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-15 text-center pl-20'>
            <Card className='border-0 shadow-lg hover:shadow-xl transition-shadow'>
              <CardHeader>
                <Server className='h-10 w-10 text-blue-600 mb-4' />
                <CardTitle className='font-bold text-xl'>API testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-slate-600'>
                  Access our developer tools and create a test API key to begin
                  integrating our services.
                </p>
              </CardContent>
              <Button
                className='rounded-lg bg-purple-800 text-white text-lg hover:text-gray-300 font-medium mb-7 py-6 px-12'
                onClick={() => setIsModalOpen(true)}
              >
                Generate Test API
              </Button>
            </Card>

            <Card className='border-0 shadow-lg hover:shadow-xl transition-shadow'>
              <CardHeader>
                <WalletCardsIcon className='h-10 w-10 text-purple-600 mb-4' />
                <CardTitle className='font-bold text-xl'>Wallet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-slate-600'>
                  Experience the full functionality of our platform in a
                  simulated environment using the demo wallet.
                </p>
              </CardContent>
              <Button
                className='rounded-lg bg-purple-800 text-white hover:text-gray-300 text-lg font-medium mb-7 py-6 px-12'
                onClick={() => setIsDemoWalletOpen(true)}
              >
                Demo Test Wallet
              </Button>
            </Card>

            <Card className='border-0 shadow-lg hover:shadow-xl transition-shadow'>
              <CardHeader>
                <FileText className='h-10 w-10 text-green-600 mb-4' />
                <CardTitle className='font-bold text-xl'>
                  Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-slate-600'>
                  Explore detailed guides, code samples, and technical
                  specifications in our API documentation.
                </p>
              </CardContent>
              <Button
                className='rounded-lg bg-purple-800 text-white hover:text-gray-300 text-lg font-medium mb-7 py-6 px-10'
                onClick={() => setIsApiDocsOpen(true)}
              >
                API Documentation
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <TestKeysModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <ApiDocsModal
        isOpen={isApiDocsOpen}
        onClose={() => setIsApiDocsOpen(false)}
      />
      <DemoWalletModal
        isOpen={isDemoWalletOpen}
        onClose={() => setIsDemoWalletOpen(false)}
      />
    </DashboardLayout>
  );
}
