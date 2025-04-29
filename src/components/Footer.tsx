import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GlobeAltIcon, ChatBubbleLeftRightIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-grill-charcoal text-redacted-white py-8 relative">
      {/* Removed texture overlay */}
      
      {/* Decorative top border - updated colors */}
      <div className="absolute top-0 left-0 w-full h-2 bg-bunker-concrete/30 overflow-hidden">
        <div className="absolute -top-1 left-1/4 w-10 h-4 bg-grill-charcoal rounded-b-lg"></div>
        <div className="absolute -top-1 left-2/5 w-12 h-4 bg-grill-charcoal rounded-b-lg"></div>
        <div className="absolute -top-1 left-3/4 w-8 h-4 bg-grill-charcoal rounded-b-lg"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Use actual logo image - make container round */}
          <div className="mb-6 md:mb-0 transform hover:scale-105 transition-transform duration-300">
            <Link href="/" className="text-xl font-bold flex items-center group">
              <div className="mr-2 relative w-14 h-14 flex items-center justify-center rounded-full overflow-hidden bg-bunker-concrete/20">
                 <Image 
                    src="/images/buster-logo.png" 
                    alt="Buster's Burgers Logo" 
                    width={56} 
                    height={56} 
                    className="drop-shadow-md"
                 />
              </div>
              {/* Removed text logo elements */}
            </Link>
          </div>
          
          {/* Social Media Icons - MOVED TO THE RIGHT */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="https://busters-burger.franchisesystems.ai/signup?utm_source=franchising-landingpage&utm_campaign=test31" className="group" aria-label="Visit our website" target="_blank" rel="noopener noreferrer">
              <GlobeAltIcon className="h-6 w-6 text-bunker-concrete group-hover:text-saffron-gold transition-colors duration-300" />
            </a>
            <a href="https://busters-burger.franchisesystems.ai/signup?utm_source=franchising-landingpage&utm_campaign=test31" className="group" aria-label="Contact us" target="_blank" rel="noopener noreferrer">
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-bunker-concrete group-hover:text-saffron-gold transition-colors duration-300" />
            </a>
            <a href="https://busters-burger.franchisesystems.ai/signup?utm_source=franchising-landingpage&utm_campaign=test31" className="group" aria-label="Download brochure" target="_blank" rel="noopener noreferrer">
              <DocumentTextIcon className="h-6 w-6 text-bunker-concrete group-hover:text-saffron-gold transition-colors duration-300" />
            </a>
          </div>
          
          {/* Updated CTA Button - REMOVED */}
          
        </div>
        
        <hr className="border-bunker-concrete my-6 opacity-30" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-bunker-concrete">
          {/* Updated Copyright */}
          <div className="mb-4 md:mb-0 font-sans">
            &copy; {currentYear} Buster&apos;s Burgers Franchise Group. <span className="italic">Classified Comfort Food.</span> All rights reserved.
          </div>
          
          {/* Updated Links - Colors and Font */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 font-sans">
            <Link href="#" className="relative group hover:text-saffron-gold transition-colors">
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-saffron-gold/50 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#" className="relative group hover:text-saffron-gold transition-colors">
              Terms of Service
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-saffron-gold/50 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
        
        {/* Added Legal Disclaimer */}
        <div className="mt-4 text-center md:text-left">
          <p className="text-xs text-bunker-concrete/70 font-sans italic">
            *Buster&apos;s Burgers is a demonstration brand concept. All financial figures presented are illustrative examples and not based on actual operational data.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 