'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#5D4037] text-white border-b-4 border-[#8D6E63]/60 shadow-md relative">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%2020h40v20H0V20zM40%200v20H20V0h20z%22%20fill%3D%22%23FFFFFF%22%20fill-opacity%3D%220.8%22%2F%3E%3C%2Fsvg%3E')] bg-repeat"></div>
      
      <div className="container mx-auto px-4 py-5 flex justify-between items-center relative z-10">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold flex items-center group">
            <div className="mr-3 relative w-14 h-14 flex items-center justify-center bg-[#D7CCC8] rounded-full overflow-hidden border-2 border-[#FFC107] shadow-lg transform group-hover:rotate-3 transition-all">
              {/* Placeholder for logo, replace with actual logo */}
              <span className="text-[#3E2723] font-bold text-lg font-serif tracking-tight">MOE&apos;S</span>
            </div>
            <div className="flex flex-col">
              <span className="hidden sm:inline text-3xl font-serif tracking-tight text-[#FFC107] drop-shadow-sm">MOE&apos;S</span>
              <span className="hidden sm:inline text-lg font-serif tracking-tight -mt-1">TAVERN</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-[#FFC107] transition-colors relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFC107] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="https://moes-tavern.franchisesystems.ai/signup"
            className="relative overflow-hidden px-6 py-2.5 font-medium text-[#3E2723] rounded-md transition-all duration-300
                     bg-[#FFC107] hover:bg-[#FFD54F] border border-[#8D6E63]
                     before:absolute before:top-0 before:left-0 before:w-full before:h-full
                     before:bg-gradient-to-r before:from-white/0 before:via-white/30 before:to-white/0
                     before:translate-x-[-100%] hover:before:translate-x-[180%] before:transition-transform before:duration-700"
          >
            Franchise Inquiry
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none border border-[#8D6E63]/40 rounded p-1"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#3E2723] px-4 py-4 border-t border-[#8D6E63]/60 relative z-10">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="hover:text-[#FFC107] transition-colors" onClick={toggleMenu}>
              About
            </a>
            <a
              href="https://moes-tavern.franchisesystems.ai/signup"
              className="relative overflow-hidden px-6 py-2.5 font-medium text-[#3E2723] rounded-md transition-all duration-300
                       bg-[#FFC107] hover:bg-[#FFD54F] border border-[#8D6E63] text-center
                       before:absolute before:top-0 before:left-0 before:w-full before:h-full
                       before:bg-gradient-to-r before:from-white/0 before:via-white/30 before:to-white/0
                       before:translate-x-[-100%] hover:before:translate-x-[180%] before:transition-transform before:duration-700"
              onClick={toggleMenu}
            >
              Franchise Inquiry
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 