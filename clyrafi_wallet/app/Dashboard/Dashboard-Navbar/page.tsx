import Link from "next/link";
import { Bell, User } from "lucide-react";
import { Button } from "../../../component/ui/Button";

export default function Dashbar() {
  return (
    <header className='w-full px-4 py-6 md:px-6 lg:px-8 bg-gray-100'>
      <div className='mx-auto flex max-w-7xl items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <div className='h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500'></div>
          <span className='text-xl font-bold text-gray-900'>ClyraFi</span>
        </div>
        <div className="mr-10">
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
            <Button size='icon' className='hover:text-purple-500'>
              <User  className="h-5 w-5"/>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
