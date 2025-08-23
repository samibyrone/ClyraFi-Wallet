"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { WalletCardsIcon, FileText, CloudIcon } from "lucide-react";
import ApiDocsModal from "@/components/dashboard/getStarted/apiDocs";
import TestKeysModal from "@/components/dashboard/getStarted/testKey";
import DemoWalletModal from "@/components/dashboard/getStarted/walletDemo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardLayout } from "@/components/dashboard/layout/dashboard-layout";

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDemoWalletOpen, setIsDemoWalletOpen] = useState(false);
  const [isApiDocsOpen, setIsApiDocsOpen] = useState(false);

  return (
    <DashboardLayout>
      <section id='dashboard' className="min-h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-6xl">
          <div className='text-center mb-12 sm:mb-16 md:mb-20'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
              Welcome to <span className='text-purple-800 font-bold'>ClyraFi</span>
            </h2>
            <p className='text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-semibold'>
              Your business is in test mode
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className='border-0 shadow-lg hover:shadow-md transition-shadow w-full flex flex-col h-full'>
              <CardHeader className="flex-grow">
                <CloudIcon className='h-10 w-10 text-blue-600 mb-4 mx-auto' />
                <CardTitle className="font-bold text-gray-900 text-center text-base sm:text-lg">Generate test API</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-xs sm:text-sm text-gray-600 text-center">
                  Access our developer tools and create a test API key to begin
                  integrating our services.
                </p>
              </CardContent>
              <div className="p-6 pt-0 flex justify-center">
                <Button
                  className="rounded-lg bg-purple-700 text-white hover:bg-purple-600 text-base sm:text-lg font-medium w-full sm:w-auto py-5 px-10"
                  onClick={() => setIsModalOpen(true)}
                >
                  Generate Test API
                </Button>
              </div>
            </Card>

            <Card className='border-0 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full'>
              <CardHeader className="flex-grow">
                <WalletCardsIcon className='h-10 w-10 text-purple-600 mb-4 mx-auto' />
                <CardTitle className="font-bold text-gray-900 text-center text-base sm:text-lg">Wallet</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className='text-slate-600 text-center'>
                  Experience the full functionality of our platform in a
                  simulated environment using the demo wallet.
                </p>
              </CardContent>
              <div className="p-6 pt-0 flex justify-center">
                <Button
                  className='rounded-lg bg-purple-700 text-white hover:bg-purple-600 text-base sm:text-lg font-medium w-full sm:w-auto py-5 px-10'
                  onClick={() => setIsDemoWalletOpen(true)}
                >
                  Demo Test Wallet
                </Button>
              </div>
            </Card>

            <Card className='border-0 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full'>
              <CardHeader className="flex-grow">
                <FileText className='h-10 w-10 text-green-600 mb-4 mx-auto' />
                <CardTitle className="font-bold text-gray-900 text-center text-base sm:text-lg">
                  Documentation
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className='text-slate-600 text-center'>
                  Explore detailed guides, code samples, and technical
                  specifications in our API documentation.
                </p>
              </CardContent>
              <div className="p-6 pt-0 flex justify-center">
                <Button
                  className='rounded-lg bg-purple-700 text-white hover:bg-purple-600 text-base sm:text-lg font-medium w-full sm:w-auto py-5 px-6'
                  onClick={() => setIsApiDocsOpen(true)}
                >
                  API Documentation
                </Button>
              </div>
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
