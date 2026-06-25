'use client';

import React, { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const navLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Service', href: '/ourservice' },
  { label: 'Our Portfolio', href: '/portfolio' },
  { label: 'Career', href: '/career' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on window resize to desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={`w-full bg-[#092236] relative z-50 ${inter.className}`}>
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 sm:px-12 py-4">

          {/* Logo */}
          <a
            href="/"
            className="text-white text-xl font-semibold hover:text-[#FF9100] transition-colors"
            onClick={closeMenu}
          >
            Logo
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#FF9100] transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
            <a href="/contact">
              <button className="bg-[#FF9100] text-white px-6 py-2 rounded-sm font-semibold text-sm hover:opacity-90 transition-opacity">
                Contact Us
              </button>
            </a>
          </div>

          {/* Hamburger Button (mobile only) */}
          <button
            className="md:hidden text-white cursor-pointer p-1 focus:outline-none"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                /* X icon */
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                /* Hamburger icon */
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden bg-[#0b2d47] overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#FF9100] transition-colors text-sm font-medium py-2 border-b border-white/10 last:border-b-0"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a href="/contact" onClick={closeMenu} className="pt-2">
              <button className="w-full bg-[#FF9100] text-white px-6 py-2 rounded-sm font-semibold text-sm hover:opacity-90 transition-opacity">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}
