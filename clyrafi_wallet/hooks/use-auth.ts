"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface SignUpData {
  country: string;
  businessName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  password: string;
  confirmPassword: string;
}

interface SignInData {
  email: string;
  password: string;
}

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signUp = async (data: SignUpData) => {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match"); // Using alert for simplicity
      return;
    }

    setLoading(true);
    try {
      // Store user data in localStorage
      localStorage.setItem("user", JSON.stringify({ email: data.emailAddress, password: data.password }));
      alert("Account created successfully! Please sign in.");
      router.push("/Auth/login"); // Redirect to login page after signup
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred during signup.");
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (data: SignInData) => {
    setLoading(true);
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.email === data.email && user.password === data.password) {
          router.push("/Dashboard");
        } else {
          alert("Invalid email or password.");
        }
      } else {
        alert("No account found. Please sign up.");
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      alert("An error occurred during sign-in.");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    signUp,
    signIn
  };
}
