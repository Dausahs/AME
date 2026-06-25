import React from 'react';
import { Bebas_Neue, Inter } from 'next/font/google';
import MalaysiaMap from '@/components/MalaysiaMap';
import nationwideBg from '@/asset/DSC01279.jpg';
import contactBg from '@/asset/DSC01203.jpg';
import heroBg from '@/asset/DSC01558.jpg';
import pastClientsBg from '@/asset/DSC01226.jpg';

// Initialize fonts
const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin']
});

const inter = Inter({
  subsets: ['latin']
});

export default function Home() {
  return (
    <main className={`w-full flex flex-col bg-black ${inter.className}`}>

      {/* 1. Introduction Section - Target Height 500px */}
      <section className="min-h-[500px] w-full bg-[#e5e7eb] flex items-center justify-center p-6 text-center">
        <p className="text-black font-medium text-lg md:text-xl">
          Company Introduction Motion Graphic GIF
        </p>
      </section>

      {/* 2. Hero / About Section - Target Height 700px */}
      <section
        className="min-h-[700px] w-full relative flex flex-col items-center justify-center text-center px-6 sm:px-12 py-20 bg-cover bg-center"
        style={{ backgroundImage: `url('${heroBg.src}')` }}
      >
        {/* Custom shade overlay: #092236 at 82% opacity */}
        <div className="absolute inset-0 bg-[#092236]/[0.82] z-0"></div>

        <div className="z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className={`${bebas.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-wide leading-none mb-6`}>
            <span className="text-[#FF9100]">We Are</span> Malaysia's Premier<br className="hidden sm:block" />
            Event Production House
          </h1>
          <p className="text-gray-200 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed mb-8">
            From Penang to every corner of the country, AME Events delivers end-to-end, high-impact experiences for conferences, private events, and weddings. Whether it's an intimate VIP boardroom or a large-format hall scaling to 2,000+ attendees, we back our nationwide coverage with uncompromising quality and absolute technical precision.
          </p>
          <a href="#services" className="text-[#FF9100] text-lg sm:text-xl font-semibold hover:opacity-80 transition-opacity">
            Our Service &gt;
          </a>
        </div>
      </section>

      {/* 3. Past Clients Section - Target Height 700px */}
      <section
        className="min-h-[700px] w-full relative flex items-center px-6 sm:px-12 lg:px-24 py-16 lg:py-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${pastClientsBg.src}')` }}
      >
        {/* Custom shade overlay: #092236 at 82% opacity */}
        <div className="absolute inset-0 bg-[#092236]/[0.82] z-0"></div>

        <div className="z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col items-start text-left">
            <h2 className={`${bebas.className} text-5xl sm:text-6xl lg:text-7xl text-white uppercase leading-none mb-6 tracking-wide`}>
              Discover Our <span className="text-[#FF9100]">Satisfied<br />Past Clients</span>
            </h2>
            <p className="text-gray-200 mb-8 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
              From high-stakes leadership summits and corporate award dinners to high-energy product launches, we bring technical precision to the organizations that shape the nation. Discover why companies nationwide rely on our single point of accountability for their large-scale productions.
            </p>
            <button className="bg-[#FF9100] text-black px-8 py-3 sm:py-4 font-bold rounded-sm hover:opacity-90 transition-opacity uppercase text-sm tracking-wider">
              Partner With Us
            </button>
          </div>
          {/* Client Logos Placeholder Box */}
          <div className="bg-[#e5e7eb] w-full h-[300px] sm:h-[400px] flex items-center justify-center text-gray-500 font-medium text-sm rounded-sm z-10 relative">
            PAST CLIENTS LOGO
          </div>
        </div>
      </section>

      {/* 4. Scale & Locations Section - Target Height 500px */}
      <section
        className="min-h-[700px] w-full relative flex items-center px-6 sm:px-12 lg:px-24 py-16 bg-cover bg-center"
        style={{ backgroundImage: `url('${nationwideBg.src}')` }}
      >
        {/* Custom shade overlay: #092236 at 82% opacity */}
        <div className="absolute inset-0 bg-[#092236]/[0.82] z-0"></div>

        <div className="z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Map Section - Interactive vector map */}
          <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[600px] order-2 lg:order-1 z-10">
            <MalaysiaMap />
          </div>

          <div className="flex flex-col items-start lg:items-end text-left lg:text-right order-1 lg:order-2">
            <h2 className={`${bebas.className} text-4xl sm:text-5xl lg:text-6xl uppercase leading-none mb-4 tracking-wide`}>
              <span className="text-[#FF9100]">Nationwide Scale.</span><br />
              <span className="text-white">Not Only In Penang.</span>
            </h2>
            <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
              Powered by our main headquarters in Penang and our branch in Kuala Lumpur, AME Events delivers end-to-end production precision across the entire country. From corporate summits to grand halls, our integrated technical teams deploy seamlessly nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Contact Us Section - Target Height 400px */}
      <section
        className="min-h-[500px] lg:min-h-[400px] w-full relative flex items-center px-6 sm:px-12 lg:px-24 py-16 lg:py-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${contactBg.src}')` }}
      >
        {/* Custom shade overlay: #092236 at 82% opacity */}
        <div className="absolute inset-0 bg-[#092236]/[0.82] z-0"></div>

        <div className="z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start">
            <h2 className={`${bebas.className} text-5xl sm:text-6xl md:text-7xl text-white uppercase mb-4 tracking-wide`}>
              Contact <span className="text-[#FF9100]">Us!</span>
            </h2>
            <p className="text-gray-300 max-w-md text-sm sm:text-base md:text-lg">
              Ready to elevate your next stage? Contact our production teams in Penang or Kuala Lumpur to lock in your date.
            </p>
          </div>

          {/* Custom Styled Contact Form */}
          <div className="w-full z-10 relative bg-[#092236]/40 p-6 sm:p-8 rounded-md border border-gray-600/50 backdrop-blur-md shadow-xl">
            <form className="flex flex-col gap-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-gray-400/60 px-2 py-2 text-white placeholder-gray-300 focus:outline-none focus:border-[#FF9100] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border-b border-gray-400/60 px-2 py-2 text-white placeholder-gray-300 focus:outline-none focus:border-[#FF9100] transition-colors"
                />
              </div>

              <input
                type="text"
                placeholder="Event Type / Location"
                className="w-full bg-transparent border-b border-gray-400/60 px-2 py-2 text-white placeholder-gray-300 focus:outline-none focus:border-[#FF9100] transition-colors"
              />

              <textarea
                placeholder="Tell us about your event requirements..."
                rows={3}
                className="w-full bg-transparent border-b border-gray-400/60 px-2 py-2 text-white placeholder-gray-300 focus:outline-none focus:border-[#FF9100] transition-colors resize-none"
              ></textarea>

              <button
                type="button"
                className={`${bebas.className} mt-2 bg-[#FF9100] text-black text-xl tracking-wider py-3 px-6 w-full rounded-sm hover:opacity-90 transition-opacity`}
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>

    </main>
  );
}