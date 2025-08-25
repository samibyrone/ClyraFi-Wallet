import React from "react";
import Image from "next/image";
import logo from "@/public/logo2.png";
import { footerSections } from "./footer-stats";

export default function Footer() {
  return (
    <footer className='bg-gray-900 px-4 py-8 sm:py-12 text-white md:px-6 lg:px-8 mt-8 sm:mt-10'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10 sm:mt-20'>
          <div className='md:col-span-2'>
            <div className='mb-4 flex items-center space-x-2'>
              <Image src={logo} alt="logo" className="w-8 h-8"/>
              <span className='text-xl font-bold'>ClyraFi</span>
            </div>
            <p className='mb-4 text-gray-400 max-w-xs'>
              Empower Businesses of all sizes with seamless payment solutions
              tailored for enterprises, startups, and emerging markets
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index} className='sm:pl-0'>
              <h3 className='mb-4 font-semibold'>{section.title}</h3>
              <ul className='space-y-2'>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href='#'
                      className='text-gray-400 hover:text-white transition-colors text-sm sm:text-base'
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='border border-gray-500 w-full h-0.5 bg-gray-700 mt-10 sm:mt-20'></div>
        <p className='text-xs sm:text-sm text-gray-500 mt-6 sm:mt-10 text-center sm:text-left'>
          ©Copyright 2025 ClyraFi. All rights reserved by ClyraFi.
        </p>
      </div>
    </footer>
  );
};
