import React from 'react';
import Image from 'next/image';
// Import Heroicons
import {
  CogIcon,
  MapIcon, // Or GlobeAltIcon
  ShieldCheckIcon
} from '@heroicons/react/24/outline'; // Using outline style

const FeatureCard = ({ title, description, icon: IconComponent }: { title: string; description: string; icon: React.ElementType }) => {
  return (
    <div className="bg-redacted-white rounded-lg shadow-md p-6 flex flex-col items-center text-center relative group hover:shadow-xl transition-all duration-300 border border-bunker-concrete/20 h-full">
      {/* Subtle decorative corner effect - updated color */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-mission-dossier-cream rounded-bl-lg"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 bg-mission-dossier-cream rounded-tr-lg opacity-70"></div>
      
      <div className="w-20 h-20 flex items-center justify-center mb-4 relative">
        {/* Icon backdrop - updated colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-saffron-gold to-bunker-concrete rounded-full transform rotate-3 opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-saffron-gold to-bunker-concrete rounded-full opacity-60 transform -rotate-3 scale-95"></div>
        {/* Render the passed IconComponent */}
        <IconComponent className="h-10 w-10 relative z-10 transform group-hover:scale-110 transition-transform duration-300 text-grill-charcoal" />
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-grill-charcoal font-sans">{title}</h3> {/* Updated font */}
      {/* Adjust description text size and add grow to fill height */}
      <p className="text-grill-charcoal font-sans text-sm flex-grow">{description}</p> {/* Updated font and color */}
      
      {/* Decorative element - updated color */}
      <div className="w-12 h-1 mt-4 bg-gradient-to-r from-transparent via-saffron-gold/70 to-transparent"></div>
    </div>
  );
};

const BrandSection = () => {
  // Update features to use imported Heroicons
  const features = [
    {
      title: "Operational Excellence Protocol",
      description: "Leverage systems honed in high-pressure environments. Our franchise model prioritizes efficiency, consistency, and quality control.",
      icon: CogIcon
    },
    {
      title: "Gourmet Adventure Menu",
      description: "Offer premium, mission-inspired burgers crafted with unique ingredients and meticulous preparation. Stand out with classified comfort food.",
      icon: MapIcon // Using MapIcon
    },
    {
      title: "The Agent K-9 Advantage",
      description: "Benefit from a compelling brand narrative, comprehensive field support, and intel-driven marketing strategies.",
      icon: ShieldCheckIcon
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-bunker-concrete/20 relative"> {/* Updated background color */}
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%2064%2064%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.85%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url%28%23noise%29%22%2F%3E%3C%2Fsvg%3E')] bg-repeat"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 relative">
          {/* Decorative corner elements - updated color */}
          <div className="absolute -left-2 top-0 w-10 h-10 border-l-2 border-t-2 border-bunker-concrete opacity-30 hidden md:block"></div>
          <div className="absolute -right-2 top-0 w-10 h-10 border-r-2 border-t-2 border-bunker-concrete opacity-30 hidden md:block"></div>
          
          {/* Updated Heading and Text */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-grill-charcoal font-heading tracking-tight inline-block relative">
            The Buster's Burgers Advantage
            <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ketchup-red to-transparent"></div> {/* Updated color */} 
          </h2>
          
          <p className="text-xl text-grill-charcoal max-w-3xl mx-auto mb-8 font-sans"> {/* Updated font and color */} 
            Deploy a franchise built on a foundation of operational precision and a uniquely compelling brand narrative. We provide the systems and story for mission success.
          </p>
          
          {/* Add brand image showcase - Updated with brand assets */}
          <div className="max-w-4xl mx-auto mt-8 mb-12 relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/images/Bright Sunny Daytime View.png"
              alt="Buster's Burgers exterior showing the modern architectural design and inviting entrance"
              width={1200}
              height={600}
              className="w-full h-auto"
              quality={75}
            />
          </div>
          
          {/* Decorative elements - updated color */}
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-transparent via-bunker-concrete to-transparent opacity-60 mb-2"></div>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-transparent via-bunker-concrete to-transparent opacity-40"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>

        {/* Updated Financial Highlights Section */}
        <div className="bg-mission-dossier-cream rounded-lg p-8 max-w-4xl mx-auto relative overflow-hidden shadow-lg border border-bunker-concrete/40"> {/* Updated colors */} 
          {/* Subtle wear marks on edges */}
          <div className="absolute top-0 left-0 w-4 h-20 bg-bunker-concrete/10 rounded-br-lg transform rotate-12"></div>
          <div className="absolute bottom-0 right-0 w-16 h-4 bg-bunker-concrete/10 rounded-tl-lg transform -rotate-6"></div>
          
          <h3 className="text-2xl font-bold mb-6 text-center text-grill-charcoal font-heading relative inline-block"> {/* Updated font and color */} 
            Top Secret Financial Intel
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-ketchup-red/70"></span> {/* Updated color */} 
          </h3>
          
          {/* Updated financial stats based on overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center font-sans"> {/* Updated font */} 
            <div className="group hover:transform hover:scale-105 transition-transform duration-300 cursor-default">
              <p className="text-3xl font-bold text-ketchup-red drop-shadow-sm group-hover:text-saffron-gold transition-colors">$300K-$700K</p>
              <p className="text-grill-charcoal font-medium">Initial Investment</p>
            </div>
            <div className="group hover:transform hover:scale-105 transition-transform duration-300 cursor-default">
              <p className="text-3xl font-bold text-ketchup-red drop-shadow-sm group-hover:text-saffron-gold transition-colors">$1.2M+</p>
              <p className="text-grill-charcoal font-medium">Avg. Unit Volume</p>
            </div>
            <div className="group hover:transform hover:scale-105 transition-transform duration-300 cursor-default">
              <p className="text-3xl font-bold text-ketchup-red drop-shadow-sm group-hover:text-saffron-gold transition-colors">18-20%</p>
              <p className="text-grill-charcoal font-medium">Target EBITDA Margin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection; 