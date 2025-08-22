"use client";

import Link from "next/link";
import { Route } from "next";
import Image from "next/image";
import { useState } from "react";
import logo from "@/public/logo2.png";
import { useAuth } from "@/hooks/use-auth";
import { Input } from "@/component/ui/input";
import { Label } from "@/component/ui/label";
import { Button } from "@/component/ui/button";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/component/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/component/ui/select";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
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
    if (!formData.acceptTerms) {
      return;
    }
    if (!formData.businessType) {
      return;
    }
    if (!formData.softwareEngineer) {
      return;
    }
    await signUp(formData);
  };

    const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-[#6B3287] to-[#52027A]'>
        <div className='text-center mb-300'>
          <Link href='/' className='text-sm text-white hover:text-gray-400'>
            ← Back to home
          </Link>
        </div>
      <div className='mt-20'>
        <div className='flex items-center justify-center space-x-2 mb-6'>
          <div className='w-10 h-10 bg-white rounded-lg flex items-center justify-center'>
            <Image src={logo} alt='logo' className='w-7 h-7' />
          </div>
          <span className='text-2xl font-bold text-white'>ClyraFi</span>
        </div>
        <Card className='w-full max-w-sm mx-4 bg-white mt-5 mb-20'>
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
                  <SelectTrigger>
                    <SelectValue placeholder='Select country' />
                  </SelectTrigger>
                  <SelectContent className='bg-white text-black font-medium hover:text-gray-900'>
                    <SelectItem value='ghana'>Ghana</SelectItem>
                    <SelectItem value='kenya'>Kenya</SelectItem>
                    <SelectItem value='canada'>Canada</SelectItem>
                    <SelectItem value='nigeria'>Nigeria</SelectItem>
                    <SelectItem value='south-africa'>South Africa</SelectItem>
                    <SelectItem value='united-state'>United State</SelectItem>
                    <SelectItem value='united-kingdom'>
                      United Kingdom
                    </SelectItem>
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
                  className='w-full px-3 py-2'
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
                  className='w-full px-3 py-2'
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
                  className='w-full px-3 py-2'
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
                  className='w-full px-3 py-2'
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
                    className='w-full px-3 py-2 pl-10'
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
                <div className="relative">
                  <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className='pl-10 pr-10'
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value})}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <div className='space-y-2'>
                <Label
                  htmlFor='confirm-password'
                  className='text-sm font-medium'
                >
                  Confirm Password
                </Label>
                <div className='relative'>
                  <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className='pl-10 pr-10'
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value})}
                    required
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'
                  >
                    {showPassword ? (
                      <EyeOff className='w-5 h-5' />
                    ) : (
                      <Eye className='w-5 h-5' />
                    )}
                  </button>
                </div>
              </div>
              <div className='space-y-4'>
                <Label>What type of business do you own?</Label>
                <div className="space-y-3">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="businessType"
                        value="starter"
                        checked={formData.businessType === 'starter'}
                        onChange={(e) => handleInputChange('businessType', e.target.value)}
                        className="mt-1 w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                      />
                      <div>
                        <div className="font-medium text-gray-900">Starter business</div>
                        <div className="text-sm text-gray-500">
                          I'm testing my ideas with real customers, and preparing to register my company
                        </div>
                      </div>
                    </label>
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="businessType"
                        value="registered"
                        checked={formData.businessType === 'registered'}
                        onChange={(e) => handleInputChange('businessType', e.target.value)}
                        className="mt-1 w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                      />
                      <div>
                        <div className="font-medium text-gray-900">Registered business</div>
                        <div className="text-sm text-gray-500">
                          My business has the approval, documentation, and licences required to operate legally
                        </div>
                      </div>
                    </label>
                  </div>
              </div>
              <div className='space-y-4'>
                <Label>Are you a software developer?</Label>
                <div className="flex space-x-6">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="softwareEngineer"
                        value="yes"
                        checked={formData.softwareEngineer === 'yes'}
                        onChange={(e) => handleInputChange('softwareEngineer', e.target.value)}
                        className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                      />
                      <span className="text-sm text-gray-900">Yes, I am</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="softwareEngineer"
                        value="no"
                        checked={formData.softwareEngineer === 'no'}
                        onChange={(e) => handleInputChange('softwareEngineer', e.target.value)}
                        className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                      />
                      <span className="text-sm text-gray-900">No, I am not</span>
                    </label>
                  </div>
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
                <Label
                  htmlFor='terms'
                  className='text-sm text-muted-foreground'
                >
                  I agree to the{" "}
                  <Link
                    href={"/terms" as Route}
                    className='text-purple-500 hover:underline'
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href={"/privacy" as Route}
                    className='text-purple-500 hover:underline'
                  >
                    Privacy Policy
                  </Link>
                </Label>
              </div>
            </CardContent>
            <CardFooter className='flex flex-col space-y-4'>
              <Button
                type='submit'
                className='w-full bg-purple-700 text-white font-semibold'
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </Button>
              <div className='text-sm text-center text-muted-foreground'>
                Already have an account?{" "}
                <Link
                  href='/Auth/login'
                  className='hover:text-black text-purple-500 font-semibold'
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
}
