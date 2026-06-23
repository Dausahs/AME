import React from 'react';
import { Bebas_Neue, Inter } from 'next/font/google';

// Initialize fonts
const bebas = Bebas_Neue({
    weight: '400',
    subsets: ['latin']
});

const inter = Inter({
    subsets: ['latin']
});

export default function AboutUs() {
    // Array to generate the 12 team members dynamically
    const teamMembers = Array.from({ length: 12 }).map((_, index) => ({
        name: "AMIR MIRZA",
        role: "Chief Operating Officer",
        image: "https://placehold.co/259x259/e5e7eb/6b7280?text=Team+Member"
    }));

    return (
        <main className={`w-full flex flex-col bg-[#092236] ${inter.className}`}>

            {/* 1. Hero Section */}
            <section
                className="min-h-[500px] w-full relative flex flex-col items-center justify-center text-center px-6 sm:px-12 py-24 bg-cover bg-center"
                style={{ backgroundImage: "url('https://placehold.co/1920x600/1e293b/ffffff?text=About+Us+Background')" }}
            >
                {/* Dark overlay: #092236 at 82% opacity */}
                <div className="absolute inset-0 bg-[#092236]/[0.82] z-0"></div>

                <div className="z-10 max-w-5xl mx-auto flex flex-col items-center">
                    <h1 className={`${bebas.className} text-5xl sm:text-6xl md:text-7xl text-white uppercase tracking-wide leading-none mb-6`}>
                        Welcome To <span className="text-[#FF9100]">AME Events</span>
                    </h1>
                    <p className="text-gray-200 max-w-4xl text-sm sm:text-base md:text-lg leading-relaxed">
                        Since 2020, AME Events has been a trusted partner in Penang and beyond, delivering seamless, high-impact conferences, private events, and weddings for audiences up to 2,000+ attendees. Driven by the philosophy "Trust in our Quality," their fully integrated in-house team handles everything from adaptive AV engineering to real-time media production. By blending technical precision with creative execution, they provide a single point of contact to ensure flawless, venue-optimized outcomes for every client.
                    </p>
                </div>
            </section>

            {/* 2. Philosophy Section */}
            <section className="w-full relative px-6 sm:px-12 lg:px-24 py-20 lg:py-32">
                <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Left Column: Heading */}
                    <div className="flex flex-col items-start">
                        {/* w-fit ensures the container strictly hugs the text width */}
                        <div className="w-fit flex flex-col items-start">
                            <h2 className={`${bebas.className} text-5xl sm:text-6xl lg:text-7xl text-white uppercase leading-none tracking-wide`}>
                                "Trust In Our Quality"
                            </h2>
                            {/* Responsive Orange Underline Indicator (100% of text width) */}
                            <div className="w-full h-[6px] bg-[#FF9100] mt-4"></div>
                        </div>
                    </div>

                    {/* Right Column: Text */}
                    <div>
                        <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
                            Our philosophy centers on delivering reliable outcomes through uncompromising quality and technical mastery. We don't just supply equipment; we architect experiences through Integrated Accountability with in-house teams and Adaptive Engineering for perfect acoustics and sightlines. Driven by Redundancy & Rigor, our strict rehearsal validation completely eliminates operational risk so you can host with absolute confidence.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Our Teams Section */}
            <section className="w-full relative px-6 sm:px-12 lg:px-24 py-16 pb-32">
                <div className="w-full max-w-7xl mx-auto flex flex-col items-center">

                    {/* Section Heading */}
                    <div className="flex flex-col items-center mb-16">
                        {/* w-fit ensures the container strictly hugs the text width */}
                        <div className="w-fit flex flex-col items-center">
                            <h2 className={`${bebas.className} text-5xl sm:text-6xl md:text-7xl text-white uppercase leading-none tracking-wide`}>
                                Our Teams!
                            </h2>
                            {/* Responsive Orange Underline Indicator (100% of text width) */}
                            <div className="w-full h-[6px] bg-[#FF9100] mt-4"></div>
                        </div>
                    </div>

                    {/* Team Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 w-full justify-items-center sm:justify-items-start">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="flex flex-col items-start w-full max-w-[259px]">
                                {/* Image Frame - Responsive, max 259x259 */}
                                <div className="w-full max-w-[259px] aspect-square bg-gray-200 mb-4 overflow-hidden shrink-0">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Member Info */}
                                <h3 className={`${bebas.className} text-3xl text-white tracking-wide mb-1`}>
                                    {member.name}
                                </h3>
                                <p className="text-gray-300 text-sm sm:text-base">
                                    {member.role}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}