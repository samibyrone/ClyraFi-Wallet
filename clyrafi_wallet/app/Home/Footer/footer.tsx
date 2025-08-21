import React from "react";
import Image from "next/image";
import logo from "@/public/logo2.png";
import { footerSections } from "./footer-stats";

export default function Footer() {
  return (
    <footer className='bg-gray-900 px-4 py-12 text-white md:px-6 lg:px-8 mt-10'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid md:grid-cols-4 mt-20'>
          <div className='md:col-span-2'>
            <div className='mb-4 flex items-center space-x-2'>
              <Image src={logo} alt="logo" className="w-6 h-6"/>
              <span className='text-xl font-bold'>ClyraFi</span>
            </div>
            <p className='mb-4 text-gray-400 w-95'>
              Empower Businesses of all sizes with seamless payment solutions
              tailored for enterprises, startups, and emerging markets
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className='mb-4 pl-40 font-semibold'>{section.title}</h3>
              <ul className='space-y-2 pl-40'>
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
        <div className='border border-gray-500 w-320 h-0.5 bg-gray-700 mt-20'></div>
        <p className='text-sm text-gray-500 mt-10 ml-120'>
          ©Copyright 2025 ClyraFi. All rights reserved by ClyraFi.
        </p>
      </div>
    </footer>
  );
};
