"use client";

import Link from "next/link";
import { Button } from "@/component/ui/button";
import { useUser } from "@/component/user-context";
import { Avatar, AvatarFallback } from "@/component/ui/avatar";
import { Bell, ChevronDown, LogOut, Menu, User } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/component/ui/dropdown-menu";

interface DashboardNavbarProps {
  onMenuClick: () => void;
}

export default function DashboardNavbar({ onMenuClick }: DashboardNavbarProps) {
  const { user, logout } = useUser();

  return (
    <div>
      <header className='bg-white border-b border-gray-200 px-4 lg:px-6 py-4'>
        <div className='flex items-center justify-between lg:justify-end'>
          <Button
            variant='ghost'
            size='sm'
            onClick={onMenuClick}
            className='lg:hidden'
          >
            <Menu className='w-5 h-5' />
          </Button>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center space-x-2 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium'>
              <Link href=''>
                <Button className='rounded-full bg-red-100 text-black hover:bg-red-200 font-semibold'>
                  <div className='w-2 h-2 bg-purple-700 rounded-full mr-3'></div>
                  Test mode
                </Button>
              </Link>
              </div>
            <Link href=''>
              <Button variant='ghost' size='sm' className='relative'>
                <Bell className='w-5 h-5' />
                <span className='absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full'></span>
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                className='hover:shadow-lg transition-shadow border-none'
              >
                <Button
                  variant='ghost'
                  size='sm'
                  className='flex items-center space-x-2'
                >
                  <Avatar className='w-8 h-8'>
                    <AvatarFallback className='bg-purple-100 text-purple-700 text-sm'>
                      {user?.name
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("") || "ME"}
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown className='w-4 h-4' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align='end'
                className='w-56 bg-white font-semibold hover:shadow-lg transition-shadow border-none'
              >
                <DropdownMenuItem asChild>
                  <a
                    href='/dashboard/settings'
                    className='flex items-center hover:bg-gray-300'
                  >
                    <User className='w-4 h-4 mr-2' />
                    Profile Settings
                  </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={logout}
                  className='text-red-600 focus:text-red-600 hover:bg-gray-300'
                >
                  <LogOut className='w-4 h-4 mr-2' />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </div>
  );
}