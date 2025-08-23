"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setMessage("If an account with that email exists, a password reset link has been sent.");
    setLoading(false);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-purple-700'>
      <Card className='w-full max-w-md mx-4 bg-white'>
        <form onSubmit={handleSubmit}>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl font-bold'>
              Forgot Password
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='space-y-2'>
              <label htmlFor='email' className='text-sm font-medium'>
                Enter your email
              </label>
              <input
                id='email'
                type='email'
                placeholder='@example.com'
                className='w-full px-3 py-2 border rounded-md'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {message && <p className="text-sm text-center text-green-600">{message}</p>}
          </CardContent>
          <CardFooter className='flex flex-col space-y-4'>
            <Button
              type='submit'
              className='w-full bg-purple-700 text-white'
              disabled={loading}
            >
              {loading ? "Sending..." : "Reset Password"}
            </Button>
            <div className='text-sm text-center text-muted-foreground'>
              Remember your password?{" "}
              <Link href='/Auth/login' className='hover:text-gray-500 text-black'>
                Sign in
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
