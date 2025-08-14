"use client";

import Link from "next/link";
import { Route } from "next";
import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/component/ui/Button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/component/ui/card";

export default function LoginPage() {
  const { loading, signIn } = useAuth();
  const [formData, setFormData] = useState({ 
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn(formData);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-purple-700'>
      <Card className='w-full max-w-md mx-4 bg-white'>
        <form onSubmit={handleSubmit}>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl font-bold'>
              Sign in to your account
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='space-y-2'>
              <label htmlFor='email' className='text-sm font-medium'>
                Enter email
              </label>
              <input
                id='email'
                type='email'
                placeholder='@example.com'
                className='w-full px-3 py-2 border rounded-md'
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
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
            <div className='text-right text-sm'>
              <Link href='/Auth/forgot-password' className='text-primary hover:text-gray-500 text-black'>
                Forgot password?
              </Link>
            </div>
          </CardContent>
          <CardFooter className='flex flex-col space-y-4'>
            <Button
              type='submit'
              className='w-full bg-purple-700 text-white font-medium'
              // variant='gradient'
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>
            <div className='text-sm text-center text-muted-foreground'>
              Don't have an account?{" "}
              <Link href='/Auth/signup' className='text-primary hover:text-gray-500 text-black'>
                Sign up
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
