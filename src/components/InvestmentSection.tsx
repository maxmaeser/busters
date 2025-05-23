import React from 'react';
import Image from 'next/image';

const InvestmentSection = () => {
  return (
    <section id="investment" className="py-16 md:py-24 bg-grill-charcoal text-redacted-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Operation Intelligence: Investment & Returns
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-sans">
            A strategic briefing on what it takes to deploy a Buster&apos;s Burgers franchise and the mission outcomes you can expect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Investment column */}
          <div className="bg-bunker-concrete/10 backdrop-blur-sm rounded-lg p-8 border border-bunker-concrete/40 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-16 h-4 bg-ketchup-red/10 rounded-bl-lg"></div>
            
            <h3 className="text-2xl font-bold mb-6 text-saffron-gold font-heading relative inline-block">
              Operation Resources
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-ketchup-red/50"></span>
            </h3>
            
            <div className="space-y-6 font-sans">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg">Initial Franchise Fee</span>
                  <span className="text-xl font-bold text-saffron-gold">$45,000<sup>*</sup></span>
                </div>
                <p className="text-sm text-mission-dossier-cream">One-time fee to join the Buster&apos;s Burgers franchise network</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg">Total Initial Investment</span>
                  <span className="text-xl font-bold text-saffron-gold">$300K-$700K<sup>*</sup></span>
                </div>
                <p className="text-sm text-mission-dossier-cream">Includes franchise fee, build-out, equipment, and initial operations capital</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg">Royalty Fee</span>
                  <span className="text-xl font-bold text-saffron-gold">5%<sup>*</sup></span>
                </div>
                <p className="text-sm text-mission-dossier-cream">Of gross revenue, paid monthly</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg">Marketing Fee</span>
                  <span className="text-xl font-bold text-saffron-gold">2%<sup>*</sup></span>
                </div>
                <p className="text-sm text-mission-dossier-cream">Contribution to the strategic marketing operations</p>
              </div>
            </div>
          </div>
          
          {/* Returns column */}
          <div className="bg-bunker-concrete/10 backdrop-blur-sm rounded-lg p-8 border border-bunker-concrete/40 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-16 h-4 bg-ketchup-red/10 rounded-br-lg"></div>
            
            <h3 className="text-2xl font-bold mb-6 text-saffron-gold font-heading relative inline-block">
              Mission Outcomes
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-ketchup-red/50"></span>
            </h3>
            
            <div className="space-y-6 font-sans">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg">Average Unit Volume</span>
                  <span className="text-xl font-bold text-saffron-gold">$1.2M+<sup>*</sup></span>
                </div>
                <p className="text-sm text-mission-dossier-cream">Annual gross revenue per location</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg">Target EBITDA</span>
                  <span className="text-xl font-bold text-saffron-gold">18-20%<sup>*</sup></span>
                </div>
                <p className="text-sm text-mission-dossier-cream">Earnings before interest, taxes, depreciation, and amortization</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg">Operational Timeline</span>
                  <span className="text-xl font-bold text-saffron-gold">4-6 Months<sup>*</sup></span>
                </div>
                <p className="text-sm text-mission-dossier-cream">Average time from signing to grand opening</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg">ROI Timeline</span>
                  <span className="text-xl font-bold text-saffron-gold">3-4 Years<sup>*</sup></span>
                </div>
                <p className="text-sm text-mission-dossier-cream">Expected time to recoup initial investment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Added Financial Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-bunker-concrete/70 font-sans italic">
            *Buster&apos;s Burgers is a demonstration brand concept. All financial figures, timelines, and projections presented are illustrative examples for demonstration purposes only and are not based on actual operational data or guarantees of performance.
          </p>
        </div>
        
        {/* Food showcase */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative aspect-[21/9] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/mushgrower98_90565_Extreme_close-up_of_the_signature_Busters_Bu_7fac61e4-f349-4eb8-9c4f-41daddf599bb.png"
              alt="Buster's premium gourmet burger and fries, meticulously assembled with top-quality ingredients."
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-grill-charcoal/90 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 text-center">
              <p className="text-xl font-sans italic text-redacted-white text-shadow-sm">
                Premium ingredients. Precise execution. Passionate service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection; 