import React from 'react';
import { Bebas_Neue, Inter } from 'next/font/google';

// 1. Core Background Assets
import servicesHeroBg from '@/asset/AMARI-138.jpg';
import statsBg from '@/asset/AMARI-288.jpg';

// 2. Main Service Feature Cards
import eventAudioImg from '@/asset/service/event audio.jpg';
import eventLightingImg from '@/asset/service/Event lighting.jpg';
import eventVideosImg from '@/asset/service/Event Videos.jpg';
import experientialImg from '@/asset/service/experential.jpg';
import visualImg from '@/asset/service/visual.jpg';

// 3. Client Partner Logos (Using your exact case-sensitive folder path)
import aseanLogo from '@/asset/client logo/asean-seeklogo.png';
import averyLogo from '@/asset/client logo/Avery_Dennison_Logo.svg';
import idGqVzLogo from '@/asset/client logo/id_gqVzS7r_logos.png';
import idPclLogo from '@/asset/client logo/idPcI-5vi8_logos.png';
import lhdnmLogo from '@/asset/client logo/lhdnm-seeklogo.png';
import petraLogo from '@/asset/client logo/logo-petra2.png';
import mcebLogo from '@/asset/client logo/malaysia-convention-exhibition-bureau-seeklogo-2.svg';
import slbLogo from '@/asset/client logo/SLB_Logo_2022.svg';
import toyotaLogo from '@/asset/client logo/Toyota.svg';
import worldfishLogo from '@/asset/client logo/worldfish-seeklogo.svg';
import yahooLogo from '@/asset/client logo/Yahoo!_(2019).svg';

// Initialize Fonts outside of the component render scope
const bebas = Bebas_Neue({
    weight: '400',
    subsets: ['latin']
});

const inter = Inter({
    subsets: ['latin']
});

// Static array references
const inlineLogos = [
    aseanLogo, averyLogo, idGqVzLogo, idPclLogo, lhdnmLogo, 
    petraLogo, mcebLogo, slbLogo, toyotaLogo, worldfishLogo, yahooLogo
];

const workSteps = [
    { title: "DISCOVERY", desc: "We align on your core event objectives, target audience profile, venue limitations, and key success metrics." },
    { title: "TECHNICAL DESIGN", desc: "Our engineers draft complete system specs, detailed stage/scenic plans, and map out the run-of-show alignment." },
    { title: "REHEARSAL & QC", desc: "We conduct rigorous cue-to-cue validation and establish ironclad tech redundancy planning before doors open." },
    { title: "SHOW DAY OPERATIONS", desc: "Dedicated in-house engineers and technicians handle live execution on-site for a seamless, stress-free experience." },
    { title: "POST-EVENT ASSETS", desc: "We deliver your professional media assets and conduct a transparent project debrief for continuous improvement." }
];

export default function OurService() {
    return (
        <main className={`w-full flex flex-col bg-[#092236] ${inter.className}`}>
            
            {/* Native CSS Injection compatible with Server Components */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes marqueeLTR {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }
                .animate-custom-ltr {
                    animation: marqueeLTR 30s linear infinite;
                }
            `}} />

            {/* 1. Hero Section */}
            <section
                className="min-h-[500px] w-full relative flex flex-col items-center justify-center text-center px-6 sm:px-12 py-24 bg-cover bg-center"
                style={{ backgroundImage: `url('${servicesHeroBg.src}')` }}
            >
                <div className="absolute inset-0 bg-[#092236]/[0.82] z-0"></div>

                <div className="z-10 max-w-5xl mx-auto flex flex-col items-center">
                    <h1 className={`${bebas.className} text-5xl sm:text-6xl md:text-7xl text-white uppercase tracking-wide leading-none mb-6`}>
                        <span className="text-[#FF9100]">Why</span> AME Events?
                    </h1>
                    <p className="text-gray-200 max-w-4xl text-sm sm:text-base md:text-lg leading-relaxed">
                        We deliver consistent, reliable outcomes across all scales, from VIP boardrooms to large-format halls, under our operating philosophy "Trust in our Quality." By maintaining a fully integrated in-house team across lighting, audio, visual, media, and entertainment, we act as a single, accountable partner. Our adaptive technical teams and highly intentional system designs seamlessly optimize to specific venue acoustics, perfect sightlines, and maximize audience engagement.
                    </p>
                </div>
            </section>

            {/* 2. What We Do Section */}
            <section className="w-full bg-[#092236] px-6 sm:px-12 lg:px-24 py-20">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <h2 className={`${bebas.className} text-5xl sm:text-6xl text-white uppercase tracking-wide mb-16`}>
                        <span className="text-[#FF9100]">What</span> We Do?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full text-center items-start">
                        <div className="flex flex-col items-center px-4">
                          <h3 className={`${bebas.className} text-3xl text-white tracking-wide mb-4 uppercase leading-tight`}>Conferences &<br />Corporate</h3>
                          <div className="w-[80px] h-[3px] bg-[#FF9100] mb-6"></div>
                          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">Turnkey AV production engineered from initial stage design to flawless, real-time show calling.</p>
                        </div>

                        <div className="flex flex-col items-center px-4">
                          <h3 className={`${bebas.className} text-3xl text-white tracking-wide mb-4 uppercase leading-tight`}>Private & Premium<br />Occasions</h3>
                          <div className="w-[80px] h-[3px] bg-[#FF9100] mb-6"></div>
                          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">Bespoke stage, entertainment, and multimedia coordination for detail-driven premium presentations.</p>
                        </div>

                        <div className="flex flex-col items-center px-4">
                          <h3 className={`${bebas.className} text-3xl text-white tracking-wide mb-4 uppercase leading-tight`}>Weddings<br />&nbsp;</h3>
                          <div className="w-[80px] h-[3px] bg-[#FF9100] mb-6"></div>
                          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">Refined guest-centric experiences profiling seamless logistical flow and elegant curations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Our Services Section */}
            <section className="w-full bg-[#092236] px-6 sm:px-12 lg:px-24 pb-24">
                <div className="max-w-7xl mx-auto flex flex-col items-start">
                    <h2 className={`${bebas.className} text-5xl sm:text-6xl text-white uppercase tracking-wide mb-12`}>
                        Our <span className="text-[#FF9100]">Services!</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 w-full">
                        <div className="flex flex-col items-start w-full">
                            <div className="w-full aspect-square bg-[#e5e7eb] mb-4 overflow-hidden">
                                <img src={eventLightingImg.src} alt="Lighting & Atmosphere" className="w-full h-full object-cover" loading="lazy" />
                            </div>
                            <h4 className="font-bold text-white text-base md:text-lg">Lighting & Atmosphere</h4>
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <div className="w-full aspect-square bg-[#e5e7eb] mb-4 overflow-hidden">
                                <img src={eventAudioImg.src} alt="Audio Engineering" className="w-full h-full object-cover" loading="lazy" />
                            </div>
                            <h4 className="font-bold text-white text-base md:text-lg">Audio Engineering</h4>
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <div className="w-full aspect-square bg-[#e5e7eb] mb-4 overflow-hidden">
                                <img src={visualImg.src} alt="Visual System" className="w-full h-full object-cover" loading="lazy" />
                            </div>
                            <h4 className="font-bold text-white text-base md:text-lg">Visual System</h4>
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <div className="w-full aspect-square bg-[#e5e7eb] mb-4 overflow-hidden">
                                <img src={eventVideosImg.src} alt="Media Production Team" className="w-full h-full object-cover" loading="lazy" />
                            </div>
                            <h4 className="font-bold text-white text-base md:text-lg">Media Production Team</h4>
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <div className="w-full aspect-square bg-[#e5e7eb] mb-4 overflow-hidden">
                                <img src={experientialImg.src} alt="Experiential Actions & FX" className="w-full h-full object-cover" loading="lazy" />
                            </div>
                            <h4 className="font-bold text-white text-base md:text-lg">Experiential Actions & FX</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Our Partners Section */}
            <section className="w-full bg-[#FF9100] px-6 sm:px-12 lg:px-24 py-16 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col">
                    <h2 className={`${bebas.className} text-5xl sm:text-6xl uppercase tracking-wide mb-6 text-right`}>
                        <span className="text-white">Our</span> <span className="text-[#092236]">Partners!</span>
                    </h2>
                    
                    {/* Low Opacity Translucent Track Container */}
                    <div className="w-full h-[120px] bg-[#092236]/30 border border-white/5 backdrop-blur-sm flex items-center relative rounded-md overflow-hidden px-4 shadow-xl">
                        <div className="flex gap-16 animate-custom-ltr whitespace-nowrap min-w-full items-center">
                            {inlineLogos.map((logo, idx) => (
                                <img 
                                    key={`logo-${idx}`} 
                                    src={logo.src} 
                                    alt="Partner Brand Badge" 
                                    className="h-16 max-w-[130px] object-contain transition-transform duration-300 hover:scale-110" 
                                />
                            ))}
                            {inlineLogos.map((logo, idx) => (
                                <img 
                                    key={`dup-${idx}`} 
                                    src={logo.src} 
                                    alt="Partner Brand Badge" 
                                    className="h-16 max-w-[130px] object-contain transition-transform duration-300 hover:scale-110" 
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. How We Work Section */}
            <section className="w-full bg-[#092236] px-6 sm:px-12 lg:px-24 py-24">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <div className="text-center mb-16">
                        <h2 className={`${bebas.className} text-5xl sm:text-6xl text-white uppercase tracking-wide mb-2`}>How We <span className="text-[#FF9100]">Work?</span></h2>
                        <p className="text-gray-200 text-sm sm:text-base">See how the flow look like working with us</p>
                    </div>

                    <div className="w-full max-w-2xl mx-auto pl-4 sm:pl-16 md:pl-32">
                        {workSteps.map((step, index) => (
                            <div key={index} className="relative pb-16 last:pb-0">
                                {index !== workSteps.length - 1 && (
                                    <div className="absolute top-12 left-[21px] w-[6px] h-full bg-[#FF9100] z-0"></div>
                                )}
                                {index === 0 && (
                                    <div className={`${bebas.className} hidden md:block absolute -left-20 top-2 text-[#FF9100] text-3xl tracking-wide`}>
                                        STEPS
                                    </div>
                                )}
                                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-[#FF9100] flex items-center justify-center text-white text-2xl md:text-3xl z-10 font-bold">
                                    {index + 1}
                                </div>
                                <div className="pl-20 pt-1 text-left">
                                    <h3 className={`${bebas.className} text-3xl md:text-4xl text-white uppercase tracking-wide mb-2 leading-none`}>
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Stats Bottom Section */}
            <section
                className="min-h-[400px] w-full relative flex items-center px-6 sm:px-12 lg:px-24 py-20 bg-cover bg-center"
                style={{ backgroundImage: `url('${statsBg.src}')` }}
            >
                <div className="absolute inset-0 bg-[#092236]/[0.82] z-0"></div>
                <div className="z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
                    <div className="flex flex-col">
                        <h3 className={`${bebas.className} text-6xl sm:text-7xl text-[#FF9100] tracking-wide leading-none mb-2`}>6+ YEARS</h3>
                        <h4 className={`${bebas.className} text-3xl sm:text-4xl text-white tracking-wide mb-3`}>MARKET EXPERIENCE</h4>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-sm">Proven delivery and trusted event partnerships across Penang and beyond since 2020.</p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className={`${bebas.className} text-6xl sm:text-7xl text-[#FF9100] tracking-wide leading-none mb-2`}>1 DEDICATED PARTNER</h3>
                        <h4 className={`${bebas.className} text-3xl sm:text-4xl text-white tracking-wide mb-3`}>FULLY INTEGRATED TEAM</h4>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-sm">Seamless in-house teams. A single accountable point of contact managing audio, lighting, video, and media.</p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className={`${bebas.className} text-6xl sm:text-7xl text-[#FF9100] tracking-wide leading-none mb-2`}>2,000+</h3>
                        <h4 className={`${bebas.className} text-3xl sm:text-4xl text-white tracking-wide mb-3`}>EVENT CAPACITY</h4>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-sm">Flawless technical production scaled effortlessly from intimate VIP boardrooms to massive arenas.</p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className={`${bebas.className} text-6xl sm:text-7xl text-[#FF9100] tracking-wide leading-none mb-2`}>5 CORE CAPABILITIES</h3>
                        <h4 className={`${bebas.className} text-3xl sm:text-4xl text-white tracking-wide mb-3`}>END-TO-END PRODUCTION</h4>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-sm">Turnkey expertise across professional Audio, Lighting, Visual Systems, Media, and Experiential Special FX.</p>
                    </div>
                </div>
            </section>

        </main>
    );
}