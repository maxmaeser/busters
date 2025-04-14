import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#EFEBE9]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image - left side */}
          <div className="w-full md:w-1/2 relative aspect-video rounded-lg mb-8 md:mb-0 overflow-hidden">
            <Image 
              src="/compressed-images/Professional Business Portrait.png"
              alt="Moe Szyslak - Founder of Moe's Tavern"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
          
          {/* Content - right side */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#3E2723]">
              The Moe's Tavern Story
            </h2>
            
            <p className="text-lg mb-6 text-[#3E2723]">
              Originally founded by Moe Szyslak in Springfield, Moe's Tavern quickly became a local institution. Starting with three pilot locations, the authentic dive bar atmosphere and unique charm captured the hearts of locals everywhere.
            </p>
            
            <p className="text-lg mb-6 text-[#3E2723]">
              Recognizing the potential to share this beloved establishment with a wider audience, Franchise Systems Ai Inc. acquired the brand to help expand Moe's vision nationwide while preserving its authentic character and spirit.
            </p>
            
            <p className="text-lg mb-8 text-[#3E2723]">
              Today, Moe's Tavern stands as a symbol of genuine hospitality, irreverent humor, and a welcoming community atmosphere. Our mission is to keep these values intact as we grow across the nation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-4xl font-bold text-[#FFC107] drop-shadow-sm">30+</span>
                <span className="text-[#3E2723] font-medium">Years of Success</span>
              </div>
              
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-4xl font-bold text-[#FFC107] drop-shadow-sm">15-20%</span>
                <span className="text-[#3E2723] font-medium">EBITDA Margin</span>
              </div>
              
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-4xl font-bold text-[#FFC107] drop-shadow-sm">6%</span>
                <span className="text-[#3E2723] font-medium">Royalty Fee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 