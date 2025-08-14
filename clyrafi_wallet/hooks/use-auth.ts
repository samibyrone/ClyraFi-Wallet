"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { handleApiResponse, showErrorToast } from "@/lib/api-utils";

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
      showErrorToast("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          country: data.country,
          businessName: data.businessName,
          firstName: data.firstName,
          lastName: data.lastName,
          phoneNumber: data.phoneNumber,
          emailAddress: data.emailAddress,
          password: data.password,
          confirmPassword: data.confirmPassword
        })
      });

      const result = await handleApiResponse(response);
      if (result) {
        router.push("/home");
      }
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (data: SignInData) => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          password: data.password
        })
      });

      const result = await handleApiResponse(response);
      if (result) {
        router.push("/home");
      } else {
        return null;
      }
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
