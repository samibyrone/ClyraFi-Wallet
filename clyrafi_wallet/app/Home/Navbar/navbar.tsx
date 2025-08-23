import Link from 'next/link';
import Image from 'next/image';
import logo from "@/public/logo2.png";
import { Button } from '@/component/ui/button';

export default function Navbar() {
  return (
    <header className="w-full px-4 py-6 md:px-6 lg:px-8 bg-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image src={logo} alt="logo" className='w-6 h-6'/>
          <span className="text-xl font-bold text-gray-900">ClyraFi</span>
        </div>
        <Link href="/Auth/login">
          <Button variant="outline" className="border border-black text-black hover:bg-gray-50 bg-transparent font-semibold md:text-sm lg:text-base">
            Login
          </Button>
        </Link>
      </div>
    </header>
  )
}
