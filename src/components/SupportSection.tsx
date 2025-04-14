import React from 'react';
import Image from 'next/image';

const SupportItem = ({ number, title, description }: { number: string; title: string; description: string }) => {
  return (
    <div className="flex">
      <div className="mr-6">
        <div className="w-12 h-12 bg-[#FFC107] rounded-full flex items-center justify-center">
          <span className="text-xl font-bold text-[#3E2723]">{number}</span>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-[#3E2723]">{title}</h3>
        <p className="text-[#3E2723]">{description}</p>
      </div>
    </div>
  );
};

const SupportSection = () => {
  return (
    <section id="support" className="py-16 md:py-24 bg-[#EFEBE9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#3E2723]">
            Comprehensive Support System
          </h2>
          <p className="text-xl text-[#3E2723] max-w-3xl mx-auto">
            We're with you every step of the way, from site selection to grand opening and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          <SupportItem 
            number="1"
            title="Site Selection & Development"
            description="Our real estate team helps you identify prime locations with high traffic and visibility, negotiating favorable lease terms and guiding you through the construction process to ensure your Moe's Tavern looks and feels authentic."
          />
          
          <SupportItem 
            number="2"
            title="Comprehensive Training Program"
            description="Franchisees undergo 4-6 weeks of training covering operations, customer service, inventory management, staff hiring, and the secret behind perfecting the Flaming Moe and other signature offerings."
          />
          
          <SupportItem 
            number="3"
            title="Marketing & Brand Support"
            description="Leverage our national marketing campaigns and social media presence while receiving local marketing guidance to establish your Moe's Tavern as the go-to gathering place in your community."
          />
          
          <SupportItem 
            number="4"
            title="Operational Excellence"
            description="Access our cloud-based POS system integrated with inventory management, detailed SOPs for every aspect of running your tavern, and ongoing operational support from experienced franchise consultants."
          />
          
          <SupportItem 
            number="5"
            title="Supply Chain & Vendor Relationships"
            description="Benefit from our established supplier relationships, including exclusive contracts for Duff Beer and other Springfield specialties, ensuring consistent quality and favorable pricing."
          />
          
          <SupportItem 
            number="6"
            title="Ongoing Business Coaching"
            description="Regular visits from your dedicated franchise business consultant help you optimize performance, troubleshoot challenges, and implement best practices from across the Moe's Tavern network."
          />
        </div>
        
        {/* Food and beverage showcase */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
            <Image 
              src="/compressed-images/Professional Food and Beverage Photography.png"
              alt="Moe's Tavern Signature Drinks" 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
            <Image 
              src="/compressed-images/Professional Food and Beverage Photography (1).png"
              alt="Moe's Tavern Food Menu Items" 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
            <Image 
              src="/compressed-images/Professional Food and Beverage Photography (2).png"
              alt="Moe's Tavern Special Beverages" 
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="https://moes-tavern.franchisesystems.ai/signup"
            className="bg-[#FFC107] hover:bg-[#FFD54F] text-[#5D4037] text-lg font-bold px-8 py-3 rounded-md transition-colors"
          >
            Learn About Our Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default SupportSection; 