"use client";

import Link from "next/link";
import { Route } from "next";
import { useState } from "react";
import { Check, Mail } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { Input } from "@/component/ui/input";
import { Label } from "@/component/ui/label";
import { Button } from "@/component/ui/Button";
import { RadioGroup, RadioGroupItem } from "@/component/ui/radio-group";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/component/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/component/ui/select";

export default function SignUpPage() {
  const { loading, signUp } = useAuth();
  const [formData, setFormData] = useState({
    country: "",
    businessName: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
    businessType: "",
    softwareEngineer: "",
    acceptTerms: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Temporarily disable these checks for local storage testing
    // if (!formData.acceptTerms) {
    //   return;
    // }
    // if (!formData.starterBusiness || !formData.registeredBusiness) {
    //   return;
    // }
    // if (!formData.softwareEngineer) {
    //   return;
    // }
    await signUp(formData);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-purple-700'>
      <div className="mt-20">
      <p className="font-bold text-xl">ClyraFi</p>
      <Card className='w-full max-w-md mx-4 bg-white mt-5 mb-20'>
        <form onSubmit={handleSubmit}>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl font-bold'>
              Create an account
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='country' className='text-sm font-medium'>
                Country
              </Label>
              <Select
                onValueChange={(value: string) =>
                  setFormData({ ...formData, country: value })
                }
              >
                <SelectTrigger
                  // className='w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-500'
                >
                  <SelectValue placeholder='Select country' />
                </SelectTrigger>
                <SelectContent className="bg-white text-black font-medium hover:text-gray-900">
                  <SelectItem value='ghana'>Ghana</SelectItem>
                  <SelectItem value='kenya'>Kenya</SelectItem>
                  <SelectItem value='canada'>Canada</SelectItem>
                  <SelectItem value='nigeria'>Nigeria</SelectItem>
                  <SelectItem value='south-africa'>South Africa</SelectItem>
                  <SelectItem value='united-state'>United State</SelectItem>
                  <SelectItem value='united-kingdom'>United Kingdom</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='business' className='text-sm font-medium'>
                Business name
              </Label>
              <Input
                id='business'
                type='text'
                placeholder='Enter business name'
                className='w-full px-3 py-2 border rounded-md'
                value={formData.businessName}
                onChange={(e) =>
                  setFormData({ ...formData, businessName: e.target.value })
                }
                required
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='firstname' className='text-sm font-medium'>
                First name
              </Label>
              <Input
                id='firstname'
                type='text'
                placeholder='Enter first name'
                className='w-full px-3 py-2 border rounded-md'
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                required
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='lastname' className='text-sm font-medium'>
                Last name
              </Label>
              <Input
                id='lastname'
                type='text'
                placeholder='Enter last name'
                className='w-full px-3 py-2 border rounded-md'
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                required
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='phone' className='text-sm font-medium'>
                Phone number
              </Label>
              <Input
                id='phone'
                type='text'
                placeholder='Enter phone number'
                className='w-full px-3 py-2 border rounded-md'
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
                required
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='email' className='text-sm font-medium'>
                Enter email
              </Label>
              <div className='relative'>
                <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                <Input
                  id='email'
                  type='email'
                  placeholder='@example.com'
                  className='w-full px-3 py-2 pl-10   border rounded-md'
                  value={formData.emailAddress}
                  onChange={(e) =>
                    setFormData({ ...formData, emailAddress: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='password' className='text-sm font-medium'>
                Password
              </Label>
              <div className='relative'>
                <Input
                  id='password'
                  type='password'
                  placeholder="zry2fkqwjQz"
                  className='w-full px-3 py-2 border rounded-md'
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
                <button
                  type='button'
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-purple-600 hover:text-purple-700'
                >
                  Show
                </button>
              </div>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='confirm-password' className='text-sm font-medium'>
                Confirm Password
              </Label>
              <div className='relative'>
                <Input
                  id='confirm-password'
                  type='password'
                  placeholder="zry2fkqwjQz"
                  className='w-full px-3 py-2 border rounded-md'
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value
                    })
                  }
                  required
                />
                <button
                  type='button'
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-purple-600 hover:text-purple-700'
                >
                  Show
                </button>
              </div>
            </div>
            <div className='space-y-4'>
              <Label>What type of business do you own?</Label>
              <RadioGroup
                value={formData.businessType}
                onValueChange={(value: string) =>
                  setFormData({ ...formData, businessType: value })
                }
                className='space-y-4'
              >
                <div className='flex items-start space-x-3 p-4 hover:bg-gray-50'>
                  <RadioGroupItem
                    value='starter'
                    id='starter'
                    className='mt-1'
                  />
                  <div className='flex-1'>
                    <Label
                      htmlFor='starter'
                      className='font-medium cursor-pointer'
                    >
                      Starter business
                    </Label>
                    <p className='text-sm text-gray-600 mt-1'>
                      I'm testing my ideas with real customers, and preparing to
                      register my company
                    </p>
                  </div>
                </div>
                <div className='flex items-start space-x-3 p-4 hover:bg-gray-50'>
                  <RadioGroupItem
                    value='registered'
                    id='registered'
                    className='mt-1'
                  />
                  <div className='flex-1'>
                    <Label
                      htmlFor='registered'
                      className='font-medium cursor-pointer'
                    >
                      Registered business
                    </Label>
                    <p className='text-sm text-gray-600 mt-1'>
                      My business has the approval, documentation, and licences
                      required to operate legally
                    </p>
                  </div>
                </div>
              </RadioGroup>
            </div>
            <div className='space-y-4'>
              <Label>Are you a software developer?</Label>
              <RadioGroup
                value={formData.softwareEngineer}
                onValueChange={(value: string) =>
                  setFormData({ ...formData, softwareEngineer: value })
                }
                className='flex space-x-6'
              >
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='yes' id='yes' />
                  <Label htmlFor='yes' className='cursor-pointer'>
                    Yes, I am
                  </Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='no' id='no' />
                  <Label htmlFor='no' className='cursor-pointer'>
                    No, I am not
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className='flex items-center space-x-2'>
              <Input
                type='checkbox'
                id='terms'
                className='rounded border-gray-300 w-3 h-3'
                checked={formData.acceptTerms}
                onChange={(e) =>
                  setFormData({ ...formData, acceptTerms: e.target.checked })
                }
                required
              />
              <Label htmlFor='terms' className='text-sm text-muted-foreground'>
                I agree to the{" "}
                <Link
                  href={"/terms" as Route}
                  className='text-primary hover:underline'
                  >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href={"/privacy" as Route}
                  className='text-primary hover:underline'
                  >
                  Privacy Policy
                </Link>
              </Label>
            </div>
          </CardContent>
          <CardFooter className='flex flex-col space-y-4'>
            <Button
              type='submit'
              className='w-full bg-purple-700 text-white font-medium'
              // variant='gradient'
              disabled={loading}
              >
              {loading ? "Creating Account..." : "Create Account"}
            </Button>
            <div className='text-sm text-center text-muted-foreground'>
              Already have an account?{" "}
              <Link
                href='/Auth/login'
                className='text-primary hover:text-gray-500 text-black'
                >
                Sign in
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
    </div>
  );
};
