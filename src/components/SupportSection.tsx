import React from 'react';
import Image from 'next/image';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

const SupportItem = ({ number, title, description }: { number: string; title: string; description: string }) => {
  return (
    <div className="flex group hover:transform hover:scale-102 transition-all duration-300">
      <div className="mr-6">
        <div className="w-12 h-12 bg-saffron-gold rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
          <span className="text-xl font-bold text-grill-charcoal">{number}</span>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-grill-charcoal font-heading">{title}</h3>
        <p className="text-grill-charcoal font-sans">{description}</p>
      </div>
    </div>
  );
};

const SupportSection = () => {
  return (
    <section id="support" className="py-16 md:py-24 bg-mission-dossier-cream relative">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%2064%2064%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.85%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url%28%23noise%29%22%2F%3E%3C%2Fsvg%3E')] bg-repeat"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
            <ShieldCheckIcon className="w-24 h-24 text-ketchup-red drop-shadow-md" />
          </div>
          <div className="md:w-3/4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-grill-charcoal font-heading">
              Mission Support Protocol
            </h2>
            <div className="w-16 h-1 bg-ketchup-red mx-auto md:mx-0 mb-4"></div>
            <p className="text-xl text-grill-charcoal max-w-3xl font-sans">
              Our intelligence and tactical support teams are with you every step of the way, from initial deployment to ongoing operations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-16">
          <SupportItem 
            number="1"
            title="Location Intelligence & Development"
            description="Our field team identifies high-value locations, negotiates optimal terms, and guides you through a streamlined build-out process ensuring operational readiness."
          />
          
          <SupportItem 
            number="2"
            title="The Buster Protocol Training"
            description="Franchisees undergo intensive 4-week training covering all aspects of the Buster's operational system, from supply management to burger assembly precision and team leadership."
          />
          
          <SupportItem 
            number="3"
            title="Strategic Marketing Operations"
            description="Leverage our targeted marketing campaigns focused on infiltrating local markets while maintaining the unique brand narrative that separates Buster's from standard QSR competitors."
          />
          
          <SupportItem 
            number="4"
            title="Operational Excellence Systems"
            description="Access our cloud-based operations platform with integrated inventory management, detailed mission protocols for every aspect of restaurant operation, and real-time performance tracking."
          />
          
          <SupportItem 
            number="5"
            title="Supply Chain Intelligence"
            description="Benefit from our established supplier network ensuring access to premium ingredients at competitive prices, maintaining the superior quality that defines Buster's Burgers."
          />
          
          <SupportItem 
            number="6"
            title="Field Support & Optimization"
            description="Regular field visits from your dedicated franchise consultant help optimize performance, troubleshoot challenges, and implement best practices from across the Buster's Burgers network."
          />
        </div>
        
        {/* Food showcase */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
            <Image 
              src="/images/Extreme_close-up_of_the_signature_Busters_Bu_a10ff432-d167-43b2-934a-bdf95de9f6e1.png"
              alt="Buster's Signature Burger - meticulously assembled with premium ingredients" 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-grill-charcoal/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-4">
              <p className="text-redacted-white text-shadow-sm font-sans">Signature Burger</p>
            </div>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
            <Image 
              src="/images/Extreme_close-up_of_the_signature_Busters_Bu_7fac61e4-f349-4eb8-9c4f-41daddf599bb.png"
              alt="Buster's Sides - field-tested perfection" 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-grill-charcoal/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-4">
              <p className="text-redacted-white text-shadow-sm font-sans">Field-Tested Sides</p>
            </div>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
            <Image 
              src="/images/Tall Glass of Creamy Healthy Banana Milkshake.png"
              alt="Buster's Premium Beverages - the perfect mission companions" 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-grill-charcoal/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-4">
              <p className="text-redacted-white text-shadow-sm font-sans">Premium Beverages</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="/franchise-application"
            className="group relative overflow-hidden px-8 py-4 font-bold font-sans text-lg text-grill-charcoal rounded-md
                     transition-all duration-300 transform hover:scale-105
                     bg-gradient-to-r from-saffron-gold to-mission-dossier-cream hover:from-mission-dossier-cream hover:to-saffron-gold 
                     border border-grill-charcoal/50 shadow-md hover:shadow-lg inline-block"
          >
            <span className="relative z-10">
              Get Started
            </span>
            {/* Added shimmer effect */}
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SupportSection; 