import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className='text-center py-12 max-w-5xl mx-auto px-6'>
      <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 px-4 py-2 rounded-full text-sm text-purple-700 mb-12'>
        <div className='w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full'></div>
        <span className='font-medium'>Now Available in Nigeria</span>
      </div>

      <h1 className='text-6xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight'>
        <span className='text-gray-900'>Programmable payments</span>
        <br />
        <span className='text-gray-900'>infrastructure for Africa</span>
      </h1>

      <p className='text-xl text-gray-600 mb-12 mx-auto leading-relaxed'>
        Dual-currency wallets. Powerful APIs. Built for African fintechs,
        edtechs, and workforce platforms.
      </p>

      <div className='flex flex-col sm:flex-row items-center justify-center mb-16 max-w-lg mx-auto text-gray-200 text-sm'>
        <input
          type='email'
          placeholder='Enter your email address'
          className='px-4 py-3 border border-gray-100 bg-white rounded-lg w-full sm:flex-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900'
        />
        <button
          type='button'
          className='px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors w-full sm:w-auto font-medium'
        >
          Request early access
        </button>
      </div>

      <div>
        <h1 className='font-semibold text-gray-500 text-sm mb-5'>Trusted by</h1>
        <div className='flex justify-center items-center mb-20'>
          <div className='flex items-center space-x-8 opacity-60'>
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className='w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center'
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className='border border-gray-300 rounded-lg bg-white px-2 py-2 w-125 ml-50'>
        <div className='flex flex-wrap justify-center items-center gap-6 text-sm'>
          <span className='text-gray-500 font-medium'>Integration</span>
          <span className='text-gray-500 font-medium'>Why Clyra-Fi</span>
          <span className='text-gray-500 font-medium'>FAQ</span>
          <span className='text-gray-500 font-medium'>Pricing</span>
          <Link href="/Auth/signup">
            <button
              type='button'
              className='flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors'
            >
              <span className='font-medium'>Create free account</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
