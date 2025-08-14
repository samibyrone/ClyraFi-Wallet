import React from "react";
import { footerSections } from "./footer-stats";

export default function Footer () {
    return (
    <footer className="bg-gray-900 px-4 py-12 text-white md:px-6 lg:px-8 mt-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-20 md:grid-cols-4 mt-20">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <span className="text-xl font-bold">ClyraFi</span>
            </div>
            <p className="mb-4 text-gray-400">
              Empower Businesses of all sizes with seamless payment solutions tailored for enterprises, startups, and emerging markets
            </p>
          </div>

          {footerSections.map((section, index) => (
              <div key={index}>
              <h3 className="mb-4 font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
          <div></div>
          <p className="text-sm text-gray-500 mt-20 mb-10 ml-120">©Copyright 2025 ClyariFi. All rights reserved by ClyraFi.</p>
      </div>
    </footer>
    );
};