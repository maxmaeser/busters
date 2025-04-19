import React from 'react';
import Image from 'next/image';

// Custom styled bullet point component
const BulletPoint = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start group">
    <div className="relative mr-3 mt-1">
      <div className="w-6 h-6 bg-bunker-concrete rounded-full flex items-center justify-center relative">
        <div className="absolute inset-0 bg-ketchup-red rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"></div>
        <svg 
          className="w-4 h-4 text-saffron-gold group-hover:text-redacted-white relative z-10 transition-colors duration-300" 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      {/* Worn edge effect */}
      <div className="absolute top-0 right-0 w-2 h-2 bg-bunker-concrete/20 rounded-full transform translate-x-1 -translate-y-1"></div>
    </div>
    <span className="text-lg text-redacted-white text-shadow-sm font-sans">{children}</span>
  </div>
);

const CtaSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-grill-charcoal to-bunker-concrete text-redacted-white relative">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%2020h40v20H0V20zM40%200v20H20V0h20z%22%20fill%3D%22%23FFFFFF%22%20fill-opacity%3D%220.8%22%2F%3E%3C%2Fsvg%3E')] bg-repeat"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-bunker-concrete/30 to-transparent"></div>
      <div className="absolute -top-1 left-1/4 w-1 h-6 bg-bunker-concrete"></div>
      <div className="absolute -top-2 right-1/3 w-2 h-8 bg-bunker-concrete"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 relative">
            {/* Fun effect container */}
            <div className="absolute inset-0 blur-md opacity-25 bg-ketchup-red rounded-md transform scale-105"></div>
            
            <h2 className="relative text-3xl md:text-4xl font-bold mb-6 font-heading tracking-tight text-redacted-white text-shadow-md">
              Ready to Accept Your Mission?
            </h2>
            
            <p className="text-xl mb-2 relative z-10 text-redacted-white text-shadow-sm font-sans">
              Initiate the franchise acquisition process and join the ranks of Buster's Burgers operators.
            </p>
            <p className="text-lg mb-0 text-redacted-white italic text-shadow-sm font-sans">
              Precision. Passion. Patties. Profit.
            </p>
          </div>
          
          {/* Franchise Owners Image */}
          <div className="mb-10 rounded-lg overflow-hidden shadow-xl">
            <div className="relative w-full aspect-video">
              <Image 
                src="/images/mushgrower98_90565_A_couple_enjoying_busters_burgers_burgers_in_3810a8ac-3858-4188-aefd-bc7840a2d81b.png"
                alt="Happy customers at Buster's Burgers, representing your potential market."
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-t-lg"
                quality={75}
              />
            </div>
            <div className="bg-grill-charcoal py-3 text-center">
              <p className="text-lg italic font-sans text-redacted-white text-shadow-sm">Your future customers await</p>
            </div>
          </div>
          
          <div className="bg-grill-charcoal/70 rounded-lg p-8 mb-10 border border-bunker-concrete/40 relative">
            {/* Decorative corner effect */}
            <div className="absolute top-0 right-0 w-10 h-10 bg-grill-charcoal/80 rounded-bl-lg transform rotate-3"></div>
            
            <div className="space-y-5">
              <BulletPoint>Access to Mission-Inspired Gourmet Menu</BulletPoint>
              <BulletPoint>Strategic Site Selection & Territory Analysis</BulletPoint>
              <BulletPoint>Comprehensive 'Buster Protocol' Training</BulletPoint>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="/franchise-application"
              className="group relative inline-block overflow-hidden px-10 py-4 font-bold text-xl text-grill-charcoal rounded-md
                     transition-all duration-300 transform hover:scale-105
                     bg-gradient-to-r from-saffron-gold to-mission-dossier-cream hover:from-mission-dossier-cream hover:to-saffron-gold
                     border border-grill-charcoal/50 shadow-lg hover:shadow-xl font-sans"
            >
              {/* Light shine effect on hover */}
              <span className="absolute inset-0 w-full h-full transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              
              {/* Button content */}
              <span className="relative z-10 inline-flex items-center tracking-wide">
                Get Started
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              
            </a>
            
            <p className="mt-6 text-sm text-bunker-concrete italic font-sans">
              This information is not intended as an offer to sell a franchise.<br />
              The offer of a Buster&apos;s Burgers franchise is made by FDD only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection; 