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

export default function Career() {
    // Generate the 12 job postings dynamically to match the design
    const jobPostings = Array.from({ length: 12 }).map((_, index) => ({
        id: index,
        title: "SOCIAL MEDIA MANAGER",
        date: "3 JUN 2026"
    }));

    return (
        <main className={`w-full flex flex-col items-center bg-[#092236] min-h-screen pt-24 pb-32 ${inter.className}`}>

            {/* 1. Header Section */}
            <section className="w-full flex flex-col items-center text-center px-6 sm:px-12">
                <h1 className={`${bebas.className} flex flex-col items-center text-6xl sm:text-7xl md:text-8xl uppercase tracking-wide mb-6 leading-none`}>
                    <span className="text-white mb-2">JOIN THE CREW AT</span>
                    <span className="text-[#FF9100]">AME EVENTS</span>
                </h1>
                <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
                    See a role that fits your skills? Join the AME Events crew today!
                </p>
            </section>

            {/* 2. Job Listings Grid */}
            <section className="w-full max-w-6xl mx-auto px-6 sm:px-12 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-32 gap-y-12 sm:gap-y-16">

                    {jobPostings.map((job) => (
                        <div key={job.id} className="flex flex-col items-start w-full">
                            <h2 className={`${bebas.className} text-4xl sm:text-5xl text-white tracking-wide uppercase leading-none mb-1`}>
                                {job.title}
                            </h2>
                            <p className="text-white text-sm sm:text-base font-semibold tracking-wide">
                                {job.date}
                            </p>
                        </div>
                    ))}

                </div>
            </section>

        </main>
    );
}