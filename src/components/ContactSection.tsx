import React from 'react';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-grill-charcoal text-redacted-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-redacted-white text-shadow-md font-heading">
            Ready to Start Your Burger Mission?
          </h2>
          
          <div className="mb-10 rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/images/Busters Bu Close-up.png"
              alt="Close-up of a perfectly executed Buster's signature burger, showcasing premium ingredients and precision assembly."
              width={1000}
              height={500}
              className="w-full h-auto"
              quality={75}
            />
            <div className="bg-grill-charcoal/80 py-3">
              <p className="text-lg italic text-redacted-white text-shadow-sm font-sans">Precision-crafted gourmet burgers: Mission accomplished.</p>
            </div>
          </div>
          
          <p className="text-xl mb-8 text-redacted-white text-shadow-sm font-sans">
            Initiate the process to receive the full franchise dossier (FDD) and connect with our franchise development team. Secure your territory today.
          </p>
          
          <div className="bg-grill-charcoal/80 rounded-lg p-8 mb-10 border border-bunker-concrete/40">
            <h3 className="text-2xl font-semibold mb-4 text-saffron-gold drop-shadow-sm font-heading">Ideal Operator Profile</h3>
            <ul className="text-left space-y-3 font-sans">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-saffron-gold mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-redacted-white">Financial Readiness ( ~$500K+ Net Worth / ~$150K+ Liquid Capital)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-saffron-gold mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-redacted-white">Operational Experience (Restaurant/Hospitality/Management preferred)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-saffron-gold mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-redacted-white">Disciplined Approach & Strong Business Acumen</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-saffron-gold mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-redacted-white">Commitment to Brand Standards & Operational Excellence</span>
              </li>
            </ul>
          </div>
          
          <a
            href="/franchise-application"
            className="group relative overflow-hidden px-10 py-4 font-bold font-sans text-xl text-grill-charcoal rounded-md
                     transition-all duration-300 transform hover:scale-105
                     bg-gradient-to-r from-saffron-gold to-mission-dossier-cream hover:from-mission-dossier-cream hover:to-saffron-gold 
                     border border-grill-charcoal/50 shadow-lg hover:shadow-lg inline-block"
          >
             <span className="relative z-10">
              Get Started
            </span>
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
          </a>
          
          <p className="mt-6 text-sm text-bunker-concrete font-sans">
            This information is not intended as an offer to sell a franchise. The offer of a Buster&apos;s Burgers franchise is made by FDD only.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 