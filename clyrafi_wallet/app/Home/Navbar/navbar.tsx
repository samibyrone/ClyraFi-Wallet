"use client"
import { Button } from '../../../component/ui/Button';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 py-6 md:px-6 lg:px-8 bg-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
          <span className="text-xl font-bold text-gray-900">ClyariFi</span>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/Auth/login">
            <Button variant="outline" className="border border-black text-black hover:bg-gray-50 bg-transparent font-semibold">
              Login
            </Button>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <Link href="/Auth/login" className="block py-2">
            <Button variant="outline" className="w-full border border-black text-black hover:bg-gray-50 bg-transparent font-semibold">
              Login
            </Button>
          </Link>
        </div>
      )}
    </header>
  )
}
