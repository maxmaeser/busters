'use client';

import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white py-40 px-4 md:px-10 lg:px-20"
      style={{
        backgroundImage: `url('/images/Dramatic Twilight View of Futuristic Residence.png')`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
      
      {/* Hero background image using next/image */}
      <Image
        src="/images/Dramatic Twilight View of Futuristic Residence.png"
        alt="Exterior of a sleek Buster's Burgers restaurant at twilight"
        fill
        style={{ objectFit: 'cover' }}
        className="absolute inset-0 z-0 opacity-80"
        quality={75}
        priority
      />
      
      {/* Gradient overlay - Increased opacity for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-grill-charcoal/95 via-grill-charcoal/90 to-grill-charcoal/95 z-10"></div>
      
      {/* Hero content - Ensure it has a higher z-index */}
      <div className="relative container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center z-20">
        <div className="mb-6 inline-block relative">
          {/* Fun effect container - Update color */}
          <div className="absolute inset-0 blur-md opacity-50 bg-ketchup-red rounded-md transform scale-105"></div>
          
          {/* Decorative elements - Update colors */}
          <div className="absolute -left-4 -top-3 w-8 h-8 border-l-2 border-t-2 border-ketchup-red/70 opacity-70"></div>
          <div className="absolute -right-4 -bottom-3 w-8 h-8 border-r-2 border-b-2 border-ketchup-red/70 opacity-70"></div>
          
          {/* Updated Heading - Added stronger text shadow */}
          <h1 className="relative text-4xl md:text-6xl font-display font-bold tracking-tight text-shadow-lg text-redacted-white">
            PRECISION. PASSION.<br className="md:hidden" /> <span className="text-saffron-gold italic drop-shadow-lg">PATTIES.</span>
            <br /><span className="text-5xl md:text-7xl font-display tracking-tighter text-saffron-gold drop-shadow-xl">BUSTER&apos;S BURGERS</span>
          </h1>
        </div>
        
        {/* Divider - Update color */}
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-bunker-concrete to-transparent my-6"></div>
        
        {/* Wrap paragraph in a styled card for readability */}
        <div className="bg-grill-charcoal/70 backdrop-blur-sm rounded-lg p-6 shadow-lg max-w-3xl mx-auto mb-12 border border-bunker-concrete/30">
          <p className="text-xl md:text-2xl font-sans text-redacted-white drop-shadow-lg text-shadow-md">
            Experience burgers crafted with operational excellence and adventurous flavor.
            Join the mission: Deploy a Buster&apos;s Burgers franchise.
          </p>
        </div>
        
        {/* Updated Button - Matching CTA Style */}
        <a 
          href="/franchise-application"
          className="group relative inline-block overflow-hidden px-10 py-4 font-bold text-xl text-grill-charcoal rounded-md
                     transition-all duration-300 transform hover:scale-105
                     bg-gradient-to-r from-saffron-gold to-mission-dossier-cream hover:from-mission-dossier-cream hover:to-saffron-gold
                     border border-grill-charcoal/50 shadow-lg hover:shadow-xl font-sans"
        >
          {/* Light shine effect from CTA */}
          <span className="absolute inset-0 w-full h-full transform -translate-x-[101%] group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
          
          {/* Button content from CTA */}
          <span className="relative z-10 inline-flex items-center tracking-wide">
            Get Started
            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </a>
        
        {/* Decoration - Update colors (using redacted-white/bunker-concrete for subtlety) */}
        <div className="absolute bottom-0 left-1/4 w-3 h-3 rounded-full bg-bunker-concrete/10 animate-float-slow opacity-50"></div>
        <div className="absolute bottom-10 left-1/3 w-4 h-4 rounded-full bg-redacted-white/5 animate-float-medium opacity-50"></div>
        <div className="absolute bottom-20 right-1/4 w-2 h-2 rounded-full bg-bunker-concrete/8 animate-float-fast opacity-50"></div>
        <div className="absolute bottom-6 right-1/3 w-3 h-3 rounded-full bg-redacted-white/5 animate-float-slow opacity-50"></div>
      </div>
      {/* TODO: Review background image (/compressed-images/Professional Food and Beverage Photography.png) 
           and alt text ("Interior of a vibrant Buster's Burgers restaurant") 
           against Brand Guide Section 4 (Imagery & Visual Assets). 
           Consider if a different image or style is more appropriate for the 'Agent K-9' theme. */}
    </div>
  );
};

export default HeroSection; 