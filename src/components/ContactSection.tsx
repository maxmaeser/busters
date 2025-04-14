import React from 'react';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#3E2723] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-shadow-md">
            Ready to Join the Moe&apos;s Tavern Family?
          </h2>
          
          {/* Before and After Image */}
          <div className="mb-10 rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/compressed-images/Mo Side-by-Side Comparison (1).png"
              alt="Moe's Tavern Before and After"
              width={1000}
              height={500}
              className="w-full h-auto"
            />
            <div className="bg-[#3E2723] py-3">
              <p className="text-lg italic text-white text-shadow-sm">See the transformation from concept to reality</p>
            </div>
          </div>
          
          <p className="text-xl mb-8 text-white text-shadow-sm">
            Take the first step toward owning your own Moe&apos;s Tavern franchise. Complete our quick application to receive detailed information and speak with a franchise development representative.
          </p>
          
          <div className="bg-[#3E2723] rounded-lg p-8 mb-10 border border-[#8D6E63]/40">
            <h3 className="text-2xl font-semibold mb-4 text-[#FFD54F] drop-shadow-sm">Ideal Franchise Partner</h3>
            <ul className="text-left space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#FFD54F] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">Minimum net worth of $500,000</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#FFD54F] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">Liquid assets of at least $200,000</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#FFD54F] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">Restaurant or hospitality experience preferred (but not required)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#FFD54F] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">Strong business acumen and passion for the Moe's Tavern brand</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#FFD54F] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">Commitment to community engagement and customer experience</span>
              </li>
            </ul>
          </div>
          
          <a
            href="https://moes-tavern.franchisesystems.ai/signup"
            className="bg-[#FFC107] hover:bg-[#FFD54F] text-[#3E2723] text-xl font-bold px-10 py-4 rounded-md transition-colors inline-block"
          >
            Apply Now
          </a>
          
          <p className="mt-6 text-sm text-gray-200">
            This information is not intended as an offer to sell a franchise. The offer of a Moe's Tavern franchise is made by prospectus only.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 