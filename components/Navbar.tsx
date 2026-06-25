import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Navbar() {
  return (
    <nav className={`w-full bg-[#092236] ${inter.className}`}>
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 sm:px-12 py-4">

        {/* Logo Section */}
        <a href="/" className="text-white text-xl font-semibold hover:text-[#FF9100] transition-colors">
          Logo
        </a>

        {/* Links & Button Section */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/about" className="text-white hover:text-[#FF9100] transition-colors text-sm">About Us</a>
          <a href="/ourservice" className="text-white hover:text-[#FF9100] transition-colors text-sm">Our Service</a>
          <a href="/portfolio" className="text-white hover:text-[#FF9100] transition-colors text-sm">Our Portfolio</a>
          <a href="/career" className="text-white hover:text-[#FF9100] transition-colors text-sm">Career</a>

          <button className="bg-[#FF9100] text-white px-6 py-2 rounded-sm font-semibold text-sm hover:opacity-90 transition-opacity">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Placeholder (Optional for later) */}
        <div className="md:hidden text-white cursor-pointer">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

      </div>
    </nav>
  );
}
