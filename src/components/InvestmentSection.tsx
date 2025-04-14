import React from 'react';
import Image from 'next/image';

const InvestmentSection = () => {
  return (
    <section id="investment" className="py-16 md:py-24 bg-[#5D4037] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Investment & Returns
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            A transparent overview of what it takes to join the Moe's Tavern franchise family and the returns you can expect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Investment column */}
          <div className="bg-[#4E342E] rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-[#FFC107]">What You'll Invest</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg">Initial Franchise Fee</span>
                  <span className="text-xl font-bold">$40,000</span>
                </div>
                <p className="text-sm text-gray-300">One-time fee to join the Moe's Tavern franchise system</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg">Total Initial Investment</span>
                  <span className="text-xl font-bold">$550K-$800K</span>
                </div>
                <p className="text-sm text-gray-300">Includes franchise fee, construction, equipment, and initial working capital</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg">Royalty Fee</span>
                  <span className="text-xl font-bold">6%</span>
                </div>
                <p className="text-sm text-gray-300">Of gross sales, paid monthly</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg">Marketing Fee</span>
                  <span className="text-xl font-bold">2%</span>
                </div>
                <p className="text-sm text-gray-300">Contribution to the national marketing fund</p>
              </div>
            </div>
          </div>
          
          {/* Returns column */}
          <div className="bg-[#4E342E] rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-[#FFC107]">What You Can Expect</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg">Average Unit Volume</span>
                  <span className="text-xl font-bold">$1.3M</span>
                </div>
                <p className="text-sm text-gray-300">Annual gross sales per location</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg">EBITDA Margin</span>
                  <span className="text-xl font-bold">15-20%</span>
                </div>
                <p className="text-sm text-gray-300">Earnings before interest, taxes, depreciation, and amortization</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg">Break-Even Timeline</span>
                  <span className="text-xl font-bold">6-9 Months</span>
                </div>
                <p className="text-sm text-gray-300">Average time to operational break-even</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg">ROI Timeline</span>
                  <span className="text-xl font-bold">3-4 Years</span>
                </div>
                <p className="text-sm text-gray-300">Expected time to recoup initial investment</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a
            href="https://moes-tavern.franchisesystems.ai/signup"
            className="bg-[#FFC107] hover:bg-[#FFD54F] text-[#5D4037] text-lg font-bold px-8 py-3 rounded-md transition-colors"
          >
            Request Financial Details
          </a>
        </div>
        
        {/* Food and beverage showcase */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative aspect-[21/9] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/compressed-images/Professional Food and Beverage Photography.png"
              alt="Moe's Tavern Signature Food and Beverages"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 text-center">
              <p className="text-xl font-serif italic text-white">
                Authentic recipes and premium beverage options
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection; 