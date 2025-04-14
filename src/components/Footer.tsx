import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#3E2723] text-white py-8 relative">
      {/* Worn texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%2020h40v20H0V20zM40%200v20H20V0h20z%22%20fill%3D%22%23FFFFFF%22%20fill-opacity%3D%220.8%22%2F%3E%3C%2Fsvg%3E')] bg-repeat"></div>
      
      {/* Distressed top border */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[#8D6E63]/30 overflow-hidden">
        <div className="absolute -top-1 left-1/4 w-10 h-4 bg-[#3E2723] rounded-b-lg"></div>
        <div className="absolute -top-1 left-2/5 w-12 h-4 bg-[#3E2723] rounded-b-lg"></div>
        <div className="absolute -top-1 left-3/4 w-8 h-4 bg-[#3E2723] rounded-b-lg"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 transform hover:rotate-2 transition-transform duration-300">
            <Link href="/" className="text-xl font-bold flex items-center group">
              <div className="mr-2 relative w-10 h-10 flex items-center justify-center bg-[#D7CCC8] rounded-full overflow-hidden border border-[#FFC107]/70 shadow-md">
                <span className="text-[#5D4037] font-bold text-sm font-serif tracking-tight">MOE&apos;S</span>
                {/* Subtle worn corner effect */}
                <div className="absolute top-0 right-0 w-3 h-3 bg-[#D7CCC8]/70 rounded-bl-lg"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif tracking-tight text-[#FFC107]">MOE&apos;S</span>
                <span className="text-sm font-serif tracking-tight -mt-1 text-[#EFEBE9]">TAVERN</span>
              </div>
            </Link>
          </div>
          
          <div>
            <a
              href="https://moes-tavern.franchisesystems.ai/signup"
              className="group relative overflow-hidden px-6 py-2 font-medium text-[#3E2723] rounded-md
                     transition-all duration-300 transform hover:scale-105
                     bg-[#FFC107] border border-[#8D6E63]"
            >
              {/* Worn texture overlay */}
              <span className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%2064%2064%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%221.5%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url%28%23noise%29%22%2F%3E%3C%2Fsvg%3E')] bg-repeat opacity-5"></span>
              
              {/* Light effect */}
              <span className="absolute inset-0 w-full h-full transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
              
              <span className="relative z-10 font-serif">Apply Now</span>
            </a>
          </div>
        </div>
        
        <hr className="border-[#8D6E63] my-6 opacity-30" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0 font-serif">
            &copy; {currentYear} Franchise Systems Ai Inc. <span className="italic">All rights reserved.</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <Link href="#" className="relative group hover:text-[#FFC107] transition-colors">
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFC107]/50 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#" className="relative group hover:text-[#FFC107] transition-colors">
              Terms of Service
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFC107]/50 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 