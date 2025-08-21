import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo2.png";
import { Button } from "@/component/ui/Button";
import { Popover, PopoverTrigger } from "@/component/ui/popover";
import { Bell, ChevronDown, User, UserCircle } from "lucide-react";

export default function Dashbar() {
  return (
    <header className='w-full px-4 py-6 md:px-6 lg:px-8 bg-gray-100'>
      <div className='mx-auto flex max-w-7xl items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <Image src={logo} alt="logo" className="w-6 h-6"/>
          <span className='text-xl font-bold text-gray-900'>ClyraFi</span>
        </div>
        <div className='flex gap-4'>
          <Link href=''>
            <Button className='rounded-full bg-red-100 text-black hover:bg-red-200 font-semibold'>
              test mode
            </Button>
          </Link>
            <Link href={""}>
              <Button size='icon' className='hover:text-purple-500'>
                <Bell className='h-5 w-5' />
              </Button>
            </Link>
            <Link href={""}>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    size='icon'
                    className='w-full flex items-center gap-1 p-2 rounded-lg hover:bg-accent transition-colors'
                  >
                    <div className='flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary'>
                      <UserCircle className='w-5 h-5 hover:text-purple-500' />
                    </div>
                    <div className='flex-1 text-left'>
                      <p className='text-sm font-medium truncate'>
                        {User?.name}
                      </p>
                      <p className='text-xs text-muted-foreground truncate'>
                        {User?.name}
                      </p>
                    </div>
                    <ChevronDown className='w-5 h-5 text-muted-foreground hover:text-purple-500' />
                  </Button>
                </PopoverTrigger>
              </Popover>
            </Link>
        </div>
      </div>
    </header>
  );
}
