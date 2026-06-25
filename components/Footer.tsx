import React from 'react';
import { Bebas_Neue, Inter } from 'next/font/google';

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function Footer() {
  return (
    <footer className="w-full bg-[#092236] text-white py-12">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

        {/* Column 1: Logo & Company Name */}
        <div className="flex flex-col items-start justify-center">
          <div className={`mb-8 text-lg ${inter.className}`}>Logo</div>
          <h2 className={`${bebas.className} text-4xl text-[#FF9100] tracking-wide leading-none mb-1`}>
            AME EVENTS SDN. BHD
          </h2>
          <p className={`${inter.className} text-sm text-gray-200`}>
            SSM Registration number
          </p>
        </div>

        {/* Column 2: Contact & Socials */}
        <div className={`flex flex-col ${inter.className}`}>
          <h3 className={`${bebas.className} text-2xl text-[#FF9100] tracking-wide mb-3`}>
            CONTACT US
          </h3>
          <ul className="space-y-2 mb-6 text-sm text-gray-200">
            <li>
              <a 
                href="tel:+60123456789" 
                className="flex items-center gap-2 hover:text-[#FF9100] transition-colors w-fit"
              >
                {/* Phone Icon */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 00-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" />
                </svg>
                +60-123456789
              </a>
            </li>
            <li>
              <a 
                href="mailto:AME@gmail.com" 
                className="flex items-center gap-2 hover:text-[#FF9100] transition-colors w-fit"
              >
                {/* Email Icon */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                AME@gmail.com
              </a>
            </li>
          </ul>

          <h3 className={`${bebas.className} text-2xl text-[#FF9100] tracking-wide mb-3`}>
            FOLLOW US ON
          </h3>
          {/* 1 column on mobile, switches to 2 columns on sm breakpoints and up */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-sm text-gray-200">
            <li>
              <a 
                href="https://www.instagram.com/ameeevents.my/?__d=1%3F%2F" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-[#FF9100] transition-colors w-fit"
              >
                {/* Instagram Icon */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.4 5.6 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.6 18.4 4 16.4 4H7.6zm4.4 3.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm5.3-2a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
                ameevents.my
              </a>
            </li>
            <li>
              <a 
                href="https://www.tiktok.com/@ameevents.my" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-[#FF9100] transition-colors w-fit"
              >
                {/* TikTok Icon */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.53 2.01c.14 0 .28.01.42.02.34 2.87 2.39 4.9 5.04 4.98v3.29a7.35 7.35 0 01-5.46-2.14v5.36a5.52 5.52 0 11-5.3-5.5v3.42a2.12 2.12 0 102.16 2.08v-11.5z" />
                </svg>
                ameevents.my
              </a>
            </li>
            <li>
              <a 
                href="https://www.facebook.com/ameevents.my/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-[#FF9100] transition-colors w-fit"
              >
                {/* Facebook Icon */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
                AME Events
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/company/ame-events/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-[#FF9100] transition-colors w-fit"
              >
                {/* LinkedIn Icon */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                AME Events
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Branches */}
        <div className={`flex flex-col ${inter.className}`}>
          <h3 className={`${bebas.className} text-2xl text-[#FF9100] tracking-wide mb-4`}>
            OUR BRANCHES
          </h3>

          <h4 className={`${bebas.className} text-xl text-[#FF9100] tracking-wide mb-1`}>
            HEADQUARTER
          </h4>
          <p className="text-sm text-gray-200 mb-4">Penang</p>

          <h4 className={`${bebas.className} text-xl text-[#FF9100] tracking-wide mb-1`}>
            BRANCH
          </h4>
          <ul className="text-sm text-gray-200 space-y-1">
            <li>Kuala Lumpur</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}