"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo2.png";
import { Button } from "@/component/ui/Button";
import { useUser } from "@/component/user-context"
import { Avatar, AvatarFallback } from "@/component/ui/avatar";
import { Bell, ChevronDown, LogOut, User } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/component/ui/dropdown-menu";

export default function Dashbar() {
  const { user, logout } = useUser()

  return (
    <div>
      <header className='w-full px-4 py-6 md:px-6 lg:px-8 bg-gray-100'>
        <div className='mx-auto flex max-w-7xl items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <Image src={logo} alt='logo' className='w-6 h-6' />
            <span className='text-xl font-bold text-gray-900'>ClyraFi</span>
          </div>
          <div className='flex gap-4'>
            <Link href=''>
              <Button className='rounded-full bg-red-100 text-black hover:bg-red-200 font-semibold'>
                <div className='w-2 h-2 bg-purple-700 rounded-full mr-3'></div>
                test mode
              </Button>
            </Link>
            <Link href={""}>
              <Button size='icon' className='hover:text-purple-500'>
                <span className='absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full'></span>
                <Bell className='h-5 w-5' />
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="hover:shadow-lg transition-shadow border-none">
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
              <DropdownMenuContent align='end' className='w-56 bg-white font-semibold hover:shadow-lg transition-shadow border-none'>
                <DropdownMenuItem asChild>
                  <a href='/dashboard/settings' className='flex items-center hover:bg-gray-300'>
                    <User className='w-4 h-4 mr-2' />
                    Profile Settings
                  </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={logout}
                  className='text-red-600 focus:text-red-600 hover:bg-gray-300'
                >
                  <LogOut className='w-4 h-4 mr-2'/>
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </div>
  );
};
