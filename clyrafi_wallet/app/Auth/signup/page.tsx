"use client";

import Link from "next/link";
import { Route } from "next";
import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/component/ui/Button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/component/ui/card";

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
    acceptTerms: false,
    starterBusiness: false,
    registeredBusiness: false,
    softwareEngineer: false
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
    // <div>
    //   <p>ClyraFi</p>
    //   </div>
    <div className='min-h-screen flex items-center justify-center bg-purple-700'>
      <Card className='w-full max-w-md mx-4 bg-white'>
        <form onSubmit={handleSubmit}>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl font-bold'>
              Create an account
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='space-y-2'>
              <label htmlFor='country' className='text-sm font-medium'>
                Country
              </label>
              <select
                id='country'
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className='w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-500'
              >
                <option value=''>Select country</option>
                <option value='ghana'>Ghana</option>
                <option value='kenya'>Kenya</option>
                <option value="canada">Canada</option>
                <option value='nigeria'>Nigeria</option>
                <option value='south-africa'>South Africa</option>
                <option value="united-state">United State</option>
                <option value="united-kingdom">United Kingdom</option>
              </select>
            </div>
            <div className='space-y-2'>
              <label htmlFor='business' className='text-sm font-medium'>
                Business name
              </label>
              <input
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
              <label htmlFor='firstname' className='text-sm font-medium'>
                First name
              </label>
              <input
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
              <label htmlFor='lastname' className='text-sm font-medium'>
                Last name
              </label>
              <input
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
              <label htmlFor='phone' className='text-sm font-medium'>
                Phone number
              </label>
              <input
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
              <label htmlFor='email' className='text-sm font-medium'>
                Enter email
              </label>
              <input
                id='email'
                type='email'
                placeholder='@example.com'
                className='w-full px-3 py-2 border rounded-md'
                value={formData.emailAddress}
                onChange={(e) =>
                  setFormData({ ...formData, emailAddress: e.target.value })
                }
                required
              />
            </div>
            <div className='space-y-2'>
              <label htmlFor='password' className='text-sm font-medium'>
                Password
              </label>
              <input
                id='password'
                type='password'
                className='w-full px-3 py-2 border rounded-md'
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
            </div>
            <div className='space-y-2'>
              <label htmlFor='confirm-password' className='text-sm font-medium'>
                Confirm Password
              </label>
              <input
                id='confirm-password'
                type='password'
                className='w-full px-3 py-2 border rounded-md'
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                required
              />
            </div>
            <div className='flex items-center space-x-2'>
              <input
                type='checkbox'
                id='terms'
                className='rounded border-gray-300'
                checked={formData.acceptTerms}
                onChange={(e) =>
                  setFormData({ ...formData, acceptTerms: e.target.checked })
                }
                required
              />
              <label htmlFor='terms' className='text-sm text-muted-foreground'>
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
              </label>
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
              <Link href='/Auth/login' className='text-primary hover:text-gray-500 text-black'>
                Sign in
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}




                // {/* Business Name */}
                // <div>
                //   <label className="block text-sm font-medium text-gray-700 mb-2">
                //     Business name
                //   </label>
                //   <input
                //     type="text"
                //     value={formData.businessName}
                //     onChange={(e) => handleInputChange('businessName', e.target.value)}
                //     placeholder="Enter business name"
                //     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                //   />
                // </div>

                // {/* First Name */}
                // <div>
                //   <label className="block text-sm font-medium text-gray-700 mb-2">
                //     First name
                //   </label>
                //   <input
                //     type="text"
                //     value={formData.firstName}
                //     onChange={(e) => handleInputChange('firstName', e.target.value)}
                //     placeholder="Enter first name"
                //     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                //   />
                // </div>

                // {/* Last Name */}
                // <div>
                //   <label className="block text-sm font-medium text-gray-700 mb-2">
                //     Last name
                //   </label>
                //   <input
                //     type="text"
                //     value={formData.lastName}
                //     onChange={(e) => handleInputChange('lastName', e.target.value)}
                //     placeholder="Enter last name"
                //     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                //   />
                // </div>

                // {/* Phone Number */}
                // <div>
                //   <label className="block text-sm font-medium text-gray-700 mb-2">
                //     Phone number
                //   </label>
                //   <input
                //     type="tel"
                //     value={formData.phoneNumber}
                //     onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                //     placeholder="Enter password"
                //     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                //   />
                // </div>

                // {/* Email */}
                // <div>
                //   <label className="block text-sm font-medium text-gray-700 mb-2">
                //     Email
                //   </label>
                //   <div className="relative">
                //     <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                //     <input
                //       type="email"
                //       value={formData.email}
                //       onChange={(e) => handleInputChange('email', e.target.value)}
                //       placeholder="Enter email"
                //       className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                //     />
                //   </div>
                // </div>

                // {/* Password */}
                // <div>
                //   <label className="block text-sm font-medium text-gray-700 mb-2">
                //     Password
                //   </label>
                //   <div className="relative">
                //     <input
                //       type={showPassword ? "text" : "password"}
                //       value={formData.password}
                //       onChange={(e) => handleInputChange('password', e.target.value)}
                //       placeholder="Enter password"
                //       className="w-full pr-10 pl-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                //     />
                //     <button
                //       type="button"
                //       onClick={() => setShowPassword(!showPassword)}
                //       className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                //     >
                //       {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                //     </button>
                //     <span className="absolute right-12 top-2.5 text-sm text-purple-600 cursor-pointer hover:text-purple-700">
                //       Show
                //     </span>
                //   </div>
                // </div>

                // {/* Business Type */}
                // <div className="space-y-4">
                //   <label className="block text-sm font-medium text-gray-700">
                //     What type of business do you own?
                //   </label>
                  
                //   <div className="space-y-3">
                //     <label className="flex items-start space-x-3 cursor-pointer">
                //       <input
                //         type="radio"
                //         name="businessType"
                //         value="starter"
                //         checked={formData.businessType === 'starter'}
                //         onChange={(e) => handleInputChange('businessType', e.target.value)}
                //         className="mt-1 w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                //       />
                //       <div>
                //         <div className="font-medium text-gray-900">Starter business</div>
                //         <div className="text-sm text-gray-500">
                //           I'm testing my ideas with real customers, and preparing to register my company
                //         </div>
                //       </div>
                //     </label>

                //     <label className="flex items-start space-x-3 cursor-pointer">
                //       <input
                //         type="radio"
                //         name="businessType"
                //         value="registered"
                //         checked={formData.businessType === 'registered'}
                //         onChange={(e) => handleInputChange('businessType', e.target.value)}
                //         className="mt-1 w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                //       />
                //       <div>
                //         <div className="font-medium text-gray-900">Registered business</div>
                //         <div className="text-sm text-gray-500">
                //           My business has the approval, documentation, and licences required to operate legally
                //         </div>
                //       </div>
                //     </label>
                //   </div>
                // </div>

                // {/* Developer Question */}
                // <div className="space-y-4">
                //   <label className="block text-sm font-medium text-gray-700">
                //     Are you a software developer?
                //   </label>
                  
                //   <div className="flex space-x-6">
                //     <label className="flex items-center space-x-2 cursor-pointer">
                //       <input
                //         type="radio"
                //         name="isDeveloper"
                //         value="yes"
                //         checked={formData.isDeveloper === 'yes'}
                //         onChange={(e) => handleInputChange('isDeveloper', e.target.value)}
                //         className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                //       />
                //       <span className="text-sm text-gray-900">Yes, I am</span>
                //     </label>

                //     <label className="flex items-center space-x-2 cursor-pointer">
                //       <input
                //         type="radio"
                //         name="isDeveloper"
                //         value="no"
                //         checked={formData.isDeveloper === 'no'}
                //         onChange={(e) => handleInputChange('isDeveloper', e.target.value)}
                //         className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                //       />
                //       <span className="text-sm text-gray-900">No, I am not</span>
                //     </label>
                //   </div>
                // </div>
