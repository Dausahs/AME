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

export default function Portfolio() {

    // Generate 9 placeholder projects dynamically for the grid
    const projects = Array.from({ length: 9 }).map((_, index) => ({
        id: index + 1,
        title: `PROJECT ${index + 1}`
    }));

    return (
        <main className={`w-full flex flex-col bg-[#092236] min-h-screen ${inter.className}`}>

            {/* 1. Partners Header Section */}
            <section className="w-full flex flex-col items-center text-center px-6 sm:px-12 lg:px-24 pt-24 pb-12">
                <h1 className={`${bebas.className} text-6xl sm:text-7xl md:text-8xl uppercase tracking-wide mb-6 leading-none`}>
                    <span className="text-white">Our</span> <span className="text-[#FF9100]">Partners!</span>
                </h1>
                <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-12">
                    From high-stakes leadership summits in Kuala Lumpur to large-format exhibition halls across Penang, we engineer production certainty for Malaysia's leading organizations.
                </p>

                {/* Carousel Placeholder */}
                <div className="w-full max-w-7xl mx-auto h-[120px] sm:h-[150px] bg-[#e5e7eb] flex items-center justify-center text-black font-medium text-sm sm:text-base rounded-sm">
                    Carousell of company logo
                </div>
            </section>

            {/* 2. Projects Grid Section */}
            <section className="w-full px-6 sm:px-12 lg:px-24 py-12 pb-32">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">

                    {projects.map((project) => (
                        <div key={project.id} className="flex flex-col items-center w-full">
                            {/* Project Image Placeholder */}
                            <div className="w-full aspect-square bg-[#e5e7eb] mb-6 rounded-sm shadow-sm overflow-hidden flex items-center justify-center">
                                {/* Optional: You can put an <img> tag here later */}
                            </div>

                            {/* Project Title */}
                            <h2 className={`${bebas.className} text-4xl sm:text-5xl text-[#FF9100] tracking-wide uppercase leading-none`}>
                                {project.title}
                            </h2>
                        </div>
                    ))}

                </div>
            </section>

        </main>
    );
}