import React from 'react';
import Image from 'next/image';

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-[#FFC107] rounded-full flex items-center justify-center mb-4">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold mb-3 text-[#3E2723]">{title}</h3>
      <p className="text-[#3E2723] font-medium">{description}</p>
    </div>
  );
};

const OpportunitySection = () => {
  const features = [
    {
      title: "Authentic Brand Experience",
      description: "Leverage the power of a beloved Springfield icon with its irreverent humor and nostalgic charm.",
      icon: "🍺"
    },
    {
      title: "Proven Business Model",
      description: "Benefit from a business model that delivers strong returns with EBITDA margins of 15-20%.",
      icon: "💰"
    },
    {
      title: "Comprehensive Support",
      description: "From site selection to grand opening, receive 4-6 weeks of training and ongoing operational guidance.",
      icon: "🤝"
    },
    {
      title: "Multiple Revenue Streams",
      description: "Capitalize on food, beverages, merchandise, and the unique Moe's Tavern experience.",
      icon: "📈"
    },
    {
      title: "Prime Territories Available",
      description: "Secure high-potential locations in major cities, college towns, and tourist destinations.",
      icon: "🏙️"
    },
    {
      title: "National Marketing Power",
      description: "Tap into brand recognition and ongoing marketing support (2% marketing contribution).",
      icon: "📱"
    }
  ];

  return (
    <section id="opportunity" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#3E2723]">
            The Moe's Tavern Advantage
          </h2>
          <p className="text-xl text-[#3E2723] max-w-3xl mx-auto">
            Join a franchise opportunity that combines authentic Springfield character with real-world business success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
        
        {/* Franchise owners showcase */}
        <div className="mt-16 mb-16 max-w-5xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/compressed-images/Diverse Franchise Owners.png"
              alt="Diverse Moe's Tavern Franchise Owners"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000]/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 text-center">
              <p className="text-xl font-serif text-white text-shadow-md">
                Join our diverse community of franchise owners
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="https://moes-tavern.franchisesystems.ai/signup"
            className="bg-[#FFC107] hover:bg-[#FFD54F] text-[#3E2723] text-lg font-bold px-8 py-3 rounded-md transition-colors"
          >
            Explore the Opportunity
          </a>
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection; 