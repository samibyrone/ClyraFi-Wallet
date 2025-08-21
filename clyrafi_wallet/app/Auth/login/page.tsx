"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "@/public/logo2.png";
import { useAuth } from "@/hooks/use-auth";
import { Input } from "@/component/ui/input";
import { Label } from "@/component/ui/label";
import { Button } from "@/component/ui/Button";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter
} from "@/component/ui/card";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    emailAddress: "",
    password: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    signIn(formData);
  };

  return (
    <div className='min-h-screen flex items-center justify-center  bg-gradient-to-br from-[#6B3287] to-[#52027A]'>
      <div className='max-w-md w-full space-y-8'>
        <div className='text-center'>
          <div className='flex items-center justify-center space-x-2 mb-6'>
            <div className='w-10 h-10 bg-white rounded-lg flex items-center justify-center'>
              <Image src={logo} alt='logo' className='w-7 h-7' />
            </div>
            <span className='text-2xl font-bold text-white'>ClyraFi</span>
          </div>
          <h2 className='text-3xl font-bold text-white'>Welcome back.</h2>
        </div>
        <Card className='w-full max-w-md mx-4 bg-white'>
          <form onSubmit={handleSubmit}>
            <CardHeader className='space-y-1'>
              <CardTitle className='text-2xl font-bold'>
                Sign in to your account
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
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
                    className='w-full px-3 py-2 pl-10 bg-white'
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
                  <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                  <Input
                    id='password'
                    type={showPassword ? "text" : "password"}
                    placeholder='Enter your password'
                    className='pl-10 pr-10 bg-white'
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
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
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <input
                    id='remember-me'
                    name='remember-me'
                    type='checkbox'
                    className='h-4 w-4 text-purple-600 focus:ring-purple-800 border-gray-300 rounded'
                  />
                  <label
                    htmlFor='remember-me'
                    className='ml-2 block text-sm text-gray-900'
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  href='/Auth/forgot-password'
                  className='text-primary hover:text-purple-500 text-black'
                >
                  Forgot password?
                </Link>
              </div>
            </CardContent>
            <CardFooter className='flex flex-col space-y-4'>
              <Button
                type='submit'
                className='w-full bg-purple-800 text-white font-semibold'
                disabled={isLoading}
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
              <div className='text-sm text-center text-muted-foreground'>
                Don't have an account?{" "}
                <Link
                  href='/Auth/signup'
                  className='text-primary hover:text-black text-purple-500 font-semibold'
                >
                  Create an account
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
        <div className='text-center'>
          <Link href='/' className='text-sm text-white hover:text-gray-400'>
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};
function signIn(formData: { emailAddress: string; password: string }) {
  throw new Error("Function not implemented.");
}
