import React from 'react';
import Image from 'next/image';

// Custom styled bullet point component
const BulletPoint = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start group">
    <div className="relative mr-3 mt-1">
      <div className="w-6 h-6 bg-[#5D4037] rounded-full flex items-center justify-center relative">
        <div className="absolute inset-0 bg-[#FFC107] rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"></div>
        <svg 
          className="w-4 h-4 text-[#FFC107] group-hover:text-[#5D4037] relative z-10 transition-colors duration-300" 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      {/* Worn edge effect */}
      <div className="absolute top-0 right-0 w-2 h-2 bg-[#8D6E63]/20 rounded-full transform translate-x-1 -translate-y-1"></div>
    </div>
    <span className="text-lg text-white text-shadow-sm">{children}</span>
  </div>
);

const CtaSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#3E2723] to-[#5D4037] text-white relative">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%2020h40v20H0V20zM40%200v20H20V0h20z%22%20fill%3D%22%23FFFFFF%22%20fill-opacity%3D%220.8%22%2F%3E%3C%2Fsvg%3E')] bg-repeat"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-[#8D6E63]/30 to-transparent"></div>
      <div className="absolute -top-1 left-1/4 w-1 h-6 bg-[#8D6E63]"></div>
      <div className="absolute -top-2 right-1/3 w-2 h-8 bg-[#8D6E63]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 relative">
            {/* Worn neon effect */}
            <div className="absolute inset-0 blur-md opacity-20 bg-[#FFC107] rounded-md transform scale-105"></div>
            
            <h2 className="relative text-3xl md:text-4xl font-bold mb-6 font-serif tracking-tight text-white text-shadow-md">
              Ready to Join the Moe&apos;s Tavern Family?
            </h2>
            
            <p className="text-xl mb-2 relative z-10 text-white text-shadow-sm">
              Take the first step toward owning your own Moe&apos;s Tavern franchise.
            </p>
            <p className="text-lg mb-0 text-white italic text-shadow-sm">
              Where "slightly worn down" is a feature, not a bug.
            </p>
          </div>
          
          {/* Franchise Owners Image */}
          <div className="mb-10 rounded-lg overflow-hidden shadow-xl">
            <div className="relative w-full aspect-video">
              <Image 
                src="/compressed-images/Diverse Franchise Owners (1).png"
                alt="Diverse Moe's Tavern Franchise Owners"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-t-lg"
              />
            </div>
            <div className="bg-[#3E2723] py-3 text-center">
              <p className="text-lg italic font-serif text-white text-shadow-sm">Our growing family of successful franchise partners</p>
            </div>
          </div>
          
          <div className="bg-[#3E2723]/70 rounded-lg p-8 mb-10 border border-[#8D6E63]/40 relative">
            {/* Worn corner effect */}
            <div className="absolute top-0 right-0 w-10 h-10 bg-[#3E2723] rounded-bl-lg transform rotate-3"></div>
            
            <div className="space-y-5">
              <BulletPoint>Community-focused business model</BulletPoint>
              <BulletPoint>Protected territories</BulletPoint>
              <BulletPoint>Ongoing operational support</BulletPoint>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="https://moes-tavern.franchisesystems.ai/signup"
              className="group relative inline-block overflow-hidden px-10 py-5 font-bold text-xl text-[#3E2723] rounded-md
                     transition-all duration-300 transform hover:scale-105
                     bg-gradient-to-r from-[#FFC107] to-[#FFD54F] 
                     border-2 border-[#8D6E63] shadow-lg"
            >
              {/* Worn texture overlay */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%2020h40v20H0V20zM40%200v20H20V0h20z%22%20fill%3D%22%23FFFFFF%22%20fill-opacity%3D%220.1%22%2F%3E%3C%2Fsvg%3E')] bg-repeat opacity-25"></div>
              
              {/* Light shine effect on hover */}
              <div className="absolute inset-0 w-full h-full transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              
              {/* Button content */}
              <span className="relative z-10 inline-flex items-center font-serif tracking-wide">
                Get Started
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              
              {/* Bottom worn edge */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#3E2723]/20"></div>
            </a>
            
            <p className="mt-6 text-sm text-gray-200 italic">
              This information is not intended as an offer to sell a franchise.<br />
              The offer of a Moe&apos;s Tavern franchise is made by prospectus only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection; 