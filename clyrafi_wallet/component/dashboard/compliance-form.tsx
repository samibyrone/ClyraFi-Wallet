"use client"

import { useState } from "react"
import { Check, Mail } from "lucide-react"
import { Input } from "@/component/ui/input"
import { Label } from "@/component/ui/label"
import { Button } from "@/component/ui/Button"
import { Card, CardContent } from "@/component/ui/card"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/component/ui/select"

const steps = [
  { id: "profile", name: "Profile", completed: false, current: true },
  { id: "contact", name: "Contact", completed: false, current: false },
  { id: "owner", name: "Owner", completed: false, current: false },
  { id: "account", name: "Account", completed: false, current: false },
  { id: "service-agreement", name: "Service agreement", completed: false, current: false },
]

export function ComplianceForm() {
  const [formData, setFormData] = useState({
    country: "",
    businessName: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    businessType: "",
    isDeveloper: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Progress Steps */}
        <div className="lg:col-span-1">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center space-x-3">
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    step.completed
                      ? "bg-green-500 text-white"
                      : step.current
                        ? "bg-purple-600 text-white"
                        : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step.completed ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-medium">{index + 1}</span>
                  )}
                </div>
                <div className={`text-sm font-medium ${step.current ? "text-purple-600" : "text-gray-500"}`}>
                  {step.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <form className="space-y-6">
                {/* Country */}
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select onValueChange={(value: string) => handleInputChange("country", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ng">Nigeria</SelectItem>
                      <SelectItem value="gh">Ghana</SelectItem>
                      <SelectItem value="ke">Kenya</SelectItem>
                      <SelectItem value="za">South Africa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Business Name */}
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business name</Label>
                  <Input
                    id="businessName"
                    placeholder="Enter business name"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange("businessName", e.target.value)}
                  />
                </div>

                {/* First Name */}
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input
                    id="firstName"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                  />
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    id="lastName"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone number</Label>
                  <Input
                    id="phoneNumber"
                    placeholder="Enter password"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter email"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-purple-600 hover:text-purple-700"
                    >
                      Show
                    </button>
                  </div>
                </div>

                {/* Business Type */}
                <div className="space-y-4">
                  <Label>What type of business do you own?</Label>
                  <RadioGroup
                    value={formData.businessType}
                    onValueChange={(value: string) => handleInputChange("businessType", value)}
                    className="space-y-4"
                  >
                    <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="starter" id="starter" className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor="starter" className="font-medium cursor-pointer">
                          Starter business
                        </Label>
                        <p className="text-sm text-gray-600 mt-1">
                          I'm testing my ideas with real customers, and preparing to register my company
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="registered" id="registered" className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor="registered" className="font-medium cursor-pointer">
                          Registered business
                        </Label>
                        <p className="text-sm text-gray-600 mt-1">
                          My business has the approval, documentation, and licences required to operate legally
                        </p>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Software Developer */}
                <div className="space-y-4">
                  <Label>Are you a software developer?</Label>
                  <RadioGroup
                    value={formData.isDeveloper}
                    onValueChange={(value: string) => handleInputChange("isDeveloper", value)}
                    className="flex space-x-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes" className="cursor-pointer">
                        Yes, I am
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no" className="cursor-pointer">
                        No, I am not
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Submit Button */}
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3">Create my account</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
