import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-mission-dossier-cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image - Needs review */}
          <div className="w-full md:w-1/2 relative aspect-video rounded-lg mb-8 md:mb-0 overflow-hidden shadow-lg">
            {/* Updated image with proper branding */}
            <Image
              src="/images/mushgrower98_90565_a_b2bomber_style_modern_sleek_but_still_lu_5e404454-b57d-4e69-bbc2-d3b33d954687_1.png"
              alt="Buster's Burgers sleek, modern interior with tactical-inspired design elements"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
              quality={75}
            />
          </div>
          
          {/* Content - right side */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-grill-charcoal font-heading">
              From Covert Ops to Culinary Craft: The Buster Protocol
            </h2>
            
            <p className="text-lg mb-4 text-grill-charcoal font-sans">
              Buster's Burgers was forged in the crucible of experience. Our founder, the operative known only as "Agent K-9" Buster, spent years mastering logistics, precision, and resourcefulness in high-stakes environments globally. His debriefing? Applying those same exacting standards to his true passion: the pursuit of the perfect burger.
            </p>
            
            <p className="text-lg mb-4 text-grill-charcoal font-sans">
              This isn't just fast food; it's a meticulously planned operation. Buster leverages field-tested techniques for everything from sourcing unique, high-quality ingredients ('asset acquisition') to optimizing kitchen workflow ('operational efficiency'). The result is a menu of adventurously gourmet burgers delivered with unparalleled consistency.
            </p>
            
            <p className="text-lg mb-8 text-grill-charcoal font-sans">
              We offer franchisees more than a brand; we provide a proven operational protocol. A system built on discipline, driven by passion, designed for mission success in the competitive QSR landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center md:justify-start">
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-4xl font-bold text-ketchup-red drop-shadow-sm">$1.2M+</span>
                <span className="text-grill-charcoal font-medium font-sans">Avg. Unit Volume</span>
              </div>
              
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-4xl font-bold text-ketchup-red drop-shadow-sm">18-20%</span>
                <span className="text-grill-charcoal font-medium font-sans">Target EBITDA</span>
              </div>
              
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-4xl font-bold text-ketchup-red drop-shadow-sm">5% + 2%</span>
                <span className="text-grill-charcoal font-medium font-sans">Royalty + Mktg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 