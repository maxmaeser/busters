import React from 'react';
import Image from 'next/image';

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center relative group hover:shadow-xl transition-all duration-300">
      {/* Subtle worn corner effect */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-[#EFEBE9] rounded-bl-lg"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 bg-[#EFEBE9] rounded-tr-lg opacity-70"></div>
      
      <div className="w-20 h-20 flex items-center justify-center mb-4 relative">
        {/* Icon backdrop with worn effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107] to-[#FFD54F] rounded-full transform rotate-3"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107] to-[#FFD54F] rounded-full opacity-70 transform -rotate-3 scale-95"></div>
        <span className="text-3xl relative z-10 transform hover:scale-110 transition-transform duration-300">{icon}</span>
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-[#3E2723] font-serif">{title}</h3>
      <p className="text-[#3E2723]">{description}</p>
      
      {/* Decorative element */}
      <div className="w-12 h-1 mt-4 bg-gradient-to-r from-transparent via-[#FFC107]/70 to-transparent"></div>
    </div>
  );
};

const BrandSection = () => {
  const features = [
    {
      title: "Iconic Brand Experience",
      description: "Join a beloved brand with a 30+ year legacy of character-building success and customer loyalty.",
      icon: "🍺"
    },
    {
      title: "Proven Business Model",
      description: "Benefit from a time-tested business model with multiple revenue streams and strong unit economics.",
      icon: "💰"
    },
    {
      title: "Comprehensive Training",
      description: "Receive extensive training and ongoing support to ensure your success as a Moe's Tavern franchisee.",
      icon: "🤝"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#EFEBE9] relative">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%2064%2064%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.85%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url%28%23noise%29%22%2F%3E%3C%2Fsvg%3E')] bg-repeat"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 relative">
          {/* Decorative corner elements */}
          <div className="absolute -left-2 top-0 w-10 h-10 border-l-2 border-t-2 border-[#8D6E63] opacity-30 hidden md:block"></div>
          <div className="absolute -right-2 top-0 w-10 h-10 border-r-2 border-t-2 border-[#8D6E63] opacity-30 hidden md:block"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#3E2723] font-serif tracking-tight inline-block relative">
            The Moe&apos;s Tavern Story
            <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFC107] to-transparent"></div>
          </h2>
          
          <p className="text-xl text-[#3E2723] max-w-3xl mx-auto mb-8">
            Founded by <span className="text-[#3E2723] font-bold">Moe Szyslak</span> in Springfield, Moe&apos;s Tavern has grown from a local favorite to a nationally expanding franchise opportunity. Our authentic dive bar experience combines nostalgic charm with modern business practices.
          </p>
          
          {/* Add brand image showcase */}
          <div className="max-w-4xl mx-auto mt-8 mb-12 relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/compressed-images/Three Grid Images Showcase.png"
              alt="Moe's Tavern Franchise Opportunities"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-transparent via-[#8D6E63] to-transparent opacity-60 mb-2"></div>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-transparent via-[#8D6E63] to-transparent opacity-40"></div>
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

        <div className="bg-[#8D6E63]/20 rounded-lg p-8 max-w-4xl mx-auto relative overflow-hidden shadow-lg border border-[#8D6E63]/30">
          {/* Subtle wear marks on edges */}
          <div className="absolute top-0 left-0 w-4 h-20 bg-[#8D6E63]/10 rounded-br-lg transform rotate-12"></div>
          <div className="absolute bottom-0 right-0 w-16 h-4 bg-[#8D6E63]/10 rounded-tl-lg transform -rotate-6"></div>
          
          <h3 className="text-2xl font-bold mb-6 text-center text-[#3E2723] font-serif relative inline-block">
            The Moe&apos;s Tavern Advantage
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#FFC107]/70"></span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="group hover:transform hover:scale-105 transition-transform duration-300 cursor-default">
              <p className="text-3xl font-bold text-[#FFC107] drop-shadow-sm group-hover:text-[#FFD54F] transition-colors">$550K-$800K</p>
              <p className="text-[#3E2723] font-medium">Initial Investment</p>
            </div>
            <div className="group hover:transform hover:scale-105 transition-transform duration-300 cursor-default">
              <p className="text-3xl font-bold text-[#FFC107] drop-shadow-sm group-hover:text-[#FFD54F] transition-colors">$1.3M</p>
              <p className="text-[#3E2723] font-medium">Average Unit Sales</p>
            </div>
            <div className="group hover:transform hover:scale-105 transition-transform duration-300 cursor-default">
              <p className="text-3xl font-bold text-[#FFC107] drop-shadow-sm group-hover:text-[#FFD54F] transition-colors">3-4 Years</p>
              <p className="text-[#3E2723] font-medium">Typical ROI Timeline</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection; 