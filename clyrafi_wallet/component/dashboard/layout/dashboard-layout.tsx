"use client"

import Image from "next/image";
import "./dashboard-layout.css";
import logo from "@/public/logo2.png";
import React, { useState } from "react";
import { Button } from "@/component/ui/button";
import { useUser } from "@/component/user-context";
import { Avatar, AvatarFallback } from "@/component/ui/avatar";
import { ChevronDown, ChevronRight, LogOut, User, X } from "lucide-react";
import DashboardNavbar from "@/component/dashboard/layout/DashboardNavbar";
import { navigationItems, paymentItems, recurringItems, commerceItems, bottomItems } from "./dashboard-stats";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/component/ui/dropdown-menu";

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, logout } = useUser()
  const [paymentExpanded, setPaymentExpanded] = useState(true)
  const [recurringExpanded, setRecurringExpanded] = useState(true)
  const [commerceExpanded, setCommerceExpanded] = useState(true)
  const [sidebarOpen, setSidebarOpen] = React.useState(false); 


  return (
    <div className="flex h-screen bg-gray-50">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
       <div
        className={`
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        fixed lg:relative lg:translate-x-0
        w-64 bg-purple-900 text-white flex flex-col
        transition-transform duration-300 ease-in-out
        z-50 lg:z-auto
        h-full
      `}
      >
        <div className="lg:hidden absolute top-4 right-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(false)}
            className="text-white hover:bg-purple-800"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        <div className="p-6 border-b border-purple-800">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Image src={logo} alt="logo" className="w-6 h-6"/>
            </div>
            <span className="text-xl font-semibold">ClyraFi</span>
          </div>
        </div>

        <div className="p-4 border-b border-purple-950">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start p-0 h-auto hover:bg-purple-800">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-purple-700 text-white">
                      {user?.name
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("") || "ME"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-left">
                    <p className="font-medium text-white">{user?.name || "Micheal Eno"}</p>
                    <p className="text-xs text-purple-200">{user?.email}</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-purple-200" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 bg-white">
              <DropdownMenuItem asChild>
                <a href="/dashboard/settings" className="flex items-center hover:bg-gray-200 font-semibold">
                  <User className="w-4 h-4 mr-2" />
                  Profile Settings
                </a>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logout} className="text-red-600 focus:text-red-600 hover:bg-gray-200 font-semibold">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <nav className="flex-1 overflow-y-auto dashboard-layout-nav py-4">
          <div className="px-4 space-y-1">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-purple-200 hover:bg-purple-800 hover:text-white transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </a>
            ))}

            <div className="mt-6">
              <button
                type="button"
                onClick={() => setPaymentExpanded(!paymentExpanded)}
                className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-purple-300 uppercase tracking-wider"
              >
                <span>PAYMENT</span>
                {paymentExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
              {paymentExpanded && (
                <div className="mt-1 space-y-1">
                  {paymentItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-purple-200 hover:bg-purple-800 hover:text-white transition-colors"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={() => setRecurringExpanded(!recurringExpanded)}
                className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-purple-300 uppercase tracking-wider"
              >
                <span>RECURRING</span>
                {recurringExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
              {recurringExpanded && (
                <div className="mt-1 space-y-1">
                  {recurringItems.map((item) => (
                     <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-purple-200 hover:bg-purple-800 hover:text-white transition-colors"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={() => setCommerceExpanded(!commerceExpanded)}
                className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-purple-300 uppercase tracking-wider"
              >
                <span>COMMERCE</span>
                {commerceExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
              {commerceExpanded && (
                <div className="mt-1 space-y-1">
                  {commerceItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-purple-200 hover:bg-purple-800 hover:text-white transition-colors"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-auto px-4 pt-6 border-t border-purple-800">
            <div className="space-y-1">
              {bottomItems.map((item) => (
                 <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-purple-200 hover:bg-purple-800 hover:text-white transition-colors"
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>

      <div className="flex-1 overflow-hidden flex flex-col lg:ml-0">
        <DashboardNavbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};
