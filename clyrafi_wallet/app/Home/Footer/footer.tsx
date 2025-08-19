import React from "react";
import { footerSections } from "./footer-stats";

export default function Footer() {
  return (
    <footer className='bg-gray-900 px-4 py-12 text-white md:px-6 lg:px-8 mt-10'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 mt-10 md:mt-20'>
          <div className='md:col-span-2'>
            <div className='mb-4 flex items-center space-x-2'>
              <div className='h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500'></div>
              <span className='text-xl font-bold'>ClyraFi</span>
            </div>
            <p className='mb-4 text-gray-400 md:w-95'>
              Empower Businesses of all sizes with seamless payment solutions
              tailored for enterprises, startups, and emerging markets
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className='mb-4 font-semibold sm:pl-0 md:pl-40'>{section.title}</h3>
              <ul className='space-y-2 sm:pl-0 md:pl-40'>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href='#'
                      className='text-gray-400 hover:text-white transition-colors'
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='mx-auto my-10 h-0.5 w-full max-w-7xl bg-gray-700 md:w-320 md:mt-20'></div>
        <p className='text-center text-sm text-gray-500 mt-5 mb-10 ml-0 md:ml-120 md:mt-10 md:text-left'>
          ©Copyright 2025 ClyariFi. All rights reserved by ClyraFi.
        </p>
      </div>
    </footer>
  );
}
