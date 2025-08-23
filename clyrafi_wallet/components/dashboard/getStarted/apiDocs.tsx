"use client"

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ApiDocsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ApiDocsModal({ isOpen, onClose }: ApiDocsModalProps) {
  const handleGoToDocs = () => {
    window.open("https://docs.clyarafi.com", "_blank")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 gap-0">
        <div className="flex items-center justify-between p-6 pb-4">
          <h2 className="text-xl font-semibold text-gray-900">API documentation</h2>
          <button
            onClick={onClose}
            className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </div>

        <div className="px-6 pb-6">
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our documentation contain the libraries, APIs and SDKs you need to integrate ClyraFi in your website or app
          </p>

          <Button
            onClick={handleGoToDocs}
            className="w-full bg-white border border-purple-600 text-purple-600 hover:bg-purple-50"
          >
            Go to docs
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
