"use client"

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function APIDocumentationPage() {
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  const copyToClipboard = async (text: string, identifier: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedEndpoint(identifier)
      setTimeout(() => setCopiedEndpoint(null), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const apiEndpoints = [
    {
      method: "POST",
      path: "/api/v1/payments",
      description: "Create a new payment",
      example: `curl -X POST https://api.clyarafi.com/v1/payments \\
  -H "Authorization: Bearer YOUR_SECRET_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 1000,
    "currency": "USD",
    "description": "Test payment",
    "redirect_url": "https://yoursite.com/redirect"
  }'`
    },
    {
      method: "GET",
      path: "/api/v1/payments/{payment_id}",
      description: "Retrieve a payment",
      example: `curl -X GET https://api.clyarafi.com/v1/payments/payment_12345 \\
  -H "Authorization: Bearer YOUR_SECRET_KEY"`
    },
    {
      method: "POST",
      path: "/api/v1/refunds",
      description: "Create a refund",
      example: `curl -X POST https://api.clyarafi.com/v1/refunds \\
  -H "Authorization: Bearer YOUR_SECRET_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "payment_id": "payment_12345",
    "amount": 500
  }'`
    }
  ]

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">API Documentation</h1>
          <p className="text-gray-600 mt-2">Learn how to integrate ClyraFi payments into your application</p>
        </div>
        <Button 
          onClick={() => window.open("https://docs.clyarafi.com", "_blank")}
          variant="outline"
        >
          View Full Documentation
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview" className="hover:shadow-lg transition-shadow border-none">Overview</TabsTrigger>
          <TabsTrigger value="authentication" className="hover:shadow-lg transition-shadow border-none">Authentication</TabsTrigger>
          <TabsTrigger value="endpoints" className="hover:shadow-lg transition-shadow border-none">Endpoints</TabsTrigger>
          <TabsTrigger value="webhooks" className="hover:shadow-lg transition-shadow border-none">Webhooks</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>Learn how to integrate ClyraFi payments into your application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="hover:shadow-lg transition-shadow border-none">
                  <CardHeader>
                    <CardTitle className="text-lg">1. Create Account</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Sign up for a ClyraFi account to get your API keys</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow border-none">
                  <CardHeader>
                    <CardTitle className="text-lg">2. Get API Keys</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Find your test and live keys in the dashboard</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow border-none">
                  <CardHeader>
                    <CardTitle className="text-lg">3. Integrate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Use our API or SDKs to start accepting payments</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Client Libraries</CardTitle>
              <CardDescription>Official SDKs for popular programming languages</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">PHP</Badge>
                <Badge variant="secondary">Ruby</Badge>
                <Badge variant="secondary">Java</Badge>
                <Badge variant="secondary">Go</Badge>
              </div>
              <p className="text-gray-600">
                Install our official SDKs to simplify integration with ClyraFi payments.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="authentication" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Authentication</CardTitle>
              <CardDescription>Securely authenticate your API requests</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                ClyraFi uses API keys to authenticate requests. You can view and manage your API keys in the Dashboard.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <code className="text-sm">Authorization: Bearer YOUR_SECRET_KEY</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard("Authorization: Bearer YOUR_SECRET_KEY", "auth-header")}
                  >
                    {copiedEndpoint === "auth-header" ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Test Mode</h3>
                <p className="text-gray-600">
                  Use test keys to experiment with the API without making real payments. Test keys have the prefix{" "}
                  <code className="bg-gray-100 px-1 rounded">sk_test_</code>.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Live Mode</h3>
                <p className="text-gray-600">
                  Use live keys to process real payments. Live keys have the prefix{" "}
                  <code className="bg-gray-100 px-1 rounded">sk_live_</code>.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="endpoints" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>API Endpoints</CardTitle>
              <CardDescription>Core endpoints for processing payments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {apiEndpoints.map((endpoint, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge variant={endpoint.method === "GET" ? "default" : "destructive"}>
                      {endpoint.method}
                    </Badge>
                    <code className="text-sm font-mono">{endpoint.path}</code>
                  </div>
                  <p className="text-gray-600">{endpoint.description}</p>
                  <div className="bg-gray-50 p-4 rounded-lg relative">
                    <pre className="text-sm overflow-x-auto whitespace-pre-wrap">
                      <code>{endpoint.example}</code>
                    </pre>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(endpoint.example, `endpoint-${index}`)}
                    >
                      {copiedEndpoint === `endpoint-${index}` ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="webhooks" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Webhooks</CardTitle>
              <CardDescription>Receive real-time notifications about events</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Webhooks allow your application to receive real-time notifications when events happen in your ClyraFi account.
              </p>
              <div className="space-y-2">
                <h3 className="font-medium">Configuring Webhooks</h3>
                <p className="text-gray-600">
                  Set up webhooks in your Dashboard under Settings &gt; Webhooks. Enter the URL where you want to receive notifications.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Event Types</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>payment.succeeded - Payment was successful</li>
                  <li>payment.failed - Payment failed</li>
                  <li>refund.succeeded - Refund was processed</li>
                  <li>dispute.created - A dispute was filed</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Verifying Webhooks</h3>
                <p className="text-gray-600">
                  Always verify webhook signatures to ensure the events are from ClyraFi. We include a signature in the header
                  that you can use to verify the payload.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}