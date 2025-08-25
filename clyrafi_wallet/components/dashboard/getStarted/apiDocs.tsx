"use client"

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

interface ApiDocsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ApiDocsModal({ isOpen, onClose }: ApiDocsModalProps) {
  const router = useRouter();
  
  const handleGoToDocs = () => {
    router.push("/Dashboard/API-Documentation");
    onClose();
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto get-started-dialog-overlay w-[95vw] md:w-[90vw]">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
          <DialogTitle className="text-xl font-semibold">API documentation</DialogTitle>
          {/* <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button> */}
        </DialogHeader>

        <div className="py-6">
          <p className="text-gray-600 mb-8 leading-relaxed">
            Our documentation contains the libraries, APIs and SDKs you need to integrate ClyraFi in your website or app
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="font-medium text-lg mb-3">Getting Started</h3>
            <p className="text-gray-600 mb-4">
              Explore our comprehensive API documentation to learn how to integrate payment solutions into your application.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
              <li>REST API reference with examples</li>
              <li>Client libraries for popular languages</li>
              <li>Webhook documentation</li>
              <li>Authentication guides</li>
            </ul>
          </div>

          <Button
            onClick={handleGoToDocs}
            className="w-full bg-purple-800 hover:bg-purple-700 text-white"
          >
            Go to documentation
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
