"use client"

import { useState } from "react"
import { X, Copy, Check } from "lucide-react"
import { Button } from "@/component/ui/Button"

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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Your test keys</h2>
            <p className="text-sm text-gray-600 mt-1">Also available in Settings &gt; API Keys &amp; Webhooks</p>
          </div>
          <Button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Test secret</label>
            <div className="flex items-center space-x-2">
              <div className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 font-mono text-sm text-gray-800">
                {testKeys.secret}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(testKeys.secret, "secret")}
                className="flex items-center space-x-1"
              >
                {copiedField === "secret" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                <span>{copiedField === "secret" ? "Copied" : "Copy"}</span>
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Test public</label>
            <div className="flex items-center space-x-2">
              <div className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 font-mono text-sm text-gray-800">
                {testKeys.public}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(testKeys.public, "public")}
                className="flex items-center space-x-1"
              >
                {copiedField === "public" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                <span>{copiedField === "public" ? "Copied" : "Copy"}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
