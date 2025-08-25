"use client"

import { useState } from "react"
import { X, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface TestKeysModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TestKeysModal({ isOpen, onClose }: TestKeysModalProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const testKeys = {
    secret: "348736r83g385gdi3id6w4g643i6i34dttl6lt4dvtk",
    public: "348736r83g385gdi3id6w4g643i6i34dttl6lt4dvtk",
  }

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto get-started-dialog-overlay w-[95vw] md:w-[90vw]">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
          <div>
            <DialogTitle className="text-xl font-semibold">Your test keys</DialogTitle>
            <p className="text-sm text-gray-600 mt-1">Also available in Settings &gt; API Keys & Webhooks</p>
          </div>
          {/* <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button> */}
        </DialogHeader>

        <div className="py-6">
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="font-medium text-lg mb-3">How to use your test keys</h3>
            <p className="text-gray-600 mb-4">
              Use these keys to test integrations in your development environment.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Never share your secret key publicly</li>
              <li>Use test keys only in development environments</li>
              <li>Generate production keys when ready to go live</li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">Test secret key</label>
              <div className="flex flex-col sm:flex-row items-center space-x-3">
                <div className="flex-1 px-4 py-3 border border-gray-300 rounded-md bg-gray-50 font-mono text-sm text-gray-800  mb-2 sm:mb-0">
                  {testKeys.secret}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(testKeys.secret, "secret")}
                  className="flex items-center space-x-2 whitespace-nowrap"
                >
                  {copiedField === "secret" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedField === "secret" ? "Copied" : "Copy"}</span>
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">Test public key</label>
              <div className="flex flex-col sm:flex-row items-center space-x-3">
                <div className="flex-1 px-4 py-3 border border-gray-300 rounded-md bg-gray-50 font-mono text-sm text-gray-800  mb-2 sm:mb-0">
                  {testKeys.public}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(testKeys.public, "public")}
                  className="flex items-center space-x-2 whitespace-nowrap"
                >
                  {copiedField === "public" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedField === "public" ? "Copied" : "Copy"}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
