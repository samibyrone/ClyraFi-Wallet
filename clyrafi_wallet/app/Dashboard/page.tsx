import { ComplianceForm } from "@/component/dashboard/compliance-form"
import { DashboardLayout } from "@/component/dashboard/layout/dashboard-layout"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Compliance</h1>
        <ComplianceForm />
      </div>
    </DashboardLayout>
  );
};
