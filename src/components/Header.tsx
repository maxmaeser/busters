'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-grill-charcoal text-redacted-white border-b-4 border-ketchup-red shadow-md relative">
      {/* Removed SVG texture overlay */}
      {/* Added gradient overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-grill-charcoal/90 via-grill-charcoal/70 to-transparent opacity-90 z-0"></div>
      
      <div className="container mx-auto px-4 py-3 flex justify-between items-center relative z-10">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold flex items-center group">
            {/* Use actual logo image - make container round */}
            <div className="mr-3 relative w-16 h-16 flex items-center justify-center transition-all transform group-hover:scale-105 rounded-full overflow-hidden bg-bunker-concrete/20">
              <Image 
                src="/images/buster-logo.png" 
                alt="Buster's Burgers Logo" 
                width={64} 
                height={64} 
                className="drop-shadow-lg"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="hover:text-saffron-gold transition-colors relative group font-sans text-shadow-sm">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-saffron-gold transition-all duration-300 group-hover:w-full"></span>
          </a>
          
          <Link
            href="/franchise-application" // Link to franchise application
            className="relative overflow-hidden px-8 py-2.5 font-medium font-sans text-grill-charcoal rounded-md transition-all duration-300
                    bg-gradient-to-r from-saffron-gold to-mission-dossier-cream hover:from-mission-dossier-cream hover:to-saffron-gold 
                    border border-grill-charcoal/50 shadow-md hover:shadow-lg text-shadow-sm group"
          >
            <span className="relative z-10">
              Get Started
            </span>
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-redacted-white focus:outline-none border border-bunker-concrete/40 rounded p-1 bg-grill-charcoal/50 backdrop-blur-sm"
          onClick={toggleMenu}
        >
           {/* Standard Menu Icon - Simplified */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-grill-charcoal/95 px-4 py-4 border-t border-ketchup-red/60 relative z-20 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a href="#about" className="hover:text-saffron-gold transition-colors font-sans text-shadow-sm" onClick={toggleMenu}>
              About
            </a>
            <Link
              href="/franchise-application" // Link to franchise application
              className="relative overflow-hidden px-6 py-2.5 font-medium font-sans text-grill-charcoal rounded-md transition-all duration-300
                      bg-gradient-to-r from-saffron-gold to-mission-dossier-cream hover:from-mission-dossier-cream hover:to-saffron-gold 
                      border border-grill-charcoal/50 shadow-md hover:shadow-lg text-center text-shadow-sm group"
              onClick={toggleMenu}
            >
              <span className="relative z-10">
                Get Started
              </span>
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;