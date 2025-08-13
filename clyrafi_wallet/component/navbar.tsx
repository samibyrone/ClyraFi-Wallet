import { Button } from './ui/Button';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full px-4 py-6 md:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
          <span className="text-xl font-bold text-gray-900">ClyariFi</span>
        </div>
        <Link href="/login">
          <Button variant="outline" className="border border-black text-black hover:bg-gray-50 bg-transparent font-semibold">
            Login
          </Button>
        </Link>
      </div>
    </header>
  )
}
