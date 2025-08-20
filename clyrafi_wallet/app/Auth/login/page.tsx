"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { Input } from "@/component/ui/input";
import { Label } from "@/component/ui/label";
import { Button } from "@/component/ui/Button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/component/ui/card";

export default function LoginPage() {
  const { loading, signIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn(formData);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-purple-900'>
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
              <Input
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
              <Label htmlFor='password' className='text-sm font-medium'>
                Password
              </Label>
              <Input
                id='password'
                type='password'
                className='w-full px-3 py-2 border rounded-md'
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
              <Button
                type='button'
                variant='ghost'
                size='icon'
                className='absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className='h-4 w-4' />
                ) : (
                  <Eye className='h-4 w-4' />
                )}
              </Button>
            </div>
            <div className='text-right text-sm'>
              <Link
                href='/Auth/forgot-password'
                className='text-primary hover:text-gray-500 text-black'
              >
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
              <Link
                href='/Auth/signup'
                className='text-primary hover:text-gray-500 text-black'
              >
                Sign up
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
