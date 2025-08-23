import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { UserProvider } from "@/component/user-context";
import { IBM_Plex_Sans, DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clyra-Fi Wallet",
  description: "ClyraFi is a programmable Wallet-as-a-Service (WaaS) API platform designed to power modern financial ecosystems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlex.className} ${dmSans.className} antialiased`}
      >
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
