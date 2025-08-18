import { getStarted } from "./dashPage";
import Dashbar from "./Dashboard-Navbar/page";
import { ComplianceForm } from "@/component/dashboard/compliance-form";
import { DashboardLayout } from "@/component/dashboard/layout/dashboard-layout";
import { Link } from "lucide-react";
import { Button } from "@/component/ui/Button";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className='p-6'>
        <Dashbar />
        <p className='text-2xl font-semibold text-gray-900 mb-6 items-center'>
          Welcome to <span className='text-purple-800'>ClyraFi</span>
        </p>
        <h1>Your business is in test mode</h1>
        {/* <ComplianceForm /> */}
      </div>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 ml-20 mr-20 mt-30'>
        {getStarted.map((getStarted, index) => (
          <div
            key={index}
            className='rounded-2xl bg-white p-8 shadow-sm border border-gray-100'
          >
            <div className='mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100'>
              <getStarted.icon className='h-7 w-7 text-purple-600' />
            </div>
            <h3 className='mb-3 text-xl font-semibold text-gray-900'>
              {getStarted.title}
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              {getStarted.description}
            </p>
            <div>
              <Button className='bg-purple-500 rounded-full'>
                <p className='text-white bg-puple-800 '>{getStarted.button}</p>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
