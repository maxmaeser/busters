import React from 'react';
import Image from 'next/image';
// Import Heroicons
import {
  SparklesIcon, // For Unique Position
  DocumentTextIcon, // For Ops Manual
  AcademicCapIcon, // For Training
  MapPinIcon, // For Site Selection
  PresentationChartLineIcon, // For Marketing
  UserGroupIcon // For Network
} from '@heroicons/react/24/outline';

const FeatureCard = ({ title, description, icon: IconComponent }: { title: string; description: string; icon: React.ElementType }) => {
  return (
    <div className="bg-redacted-white rounded-lg shadow-md p-6 flex flex-col items-center text-center border border-bunker-concrete/20 hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="w-16 h-16 bg-gradient-to-br from-saffron-gold to-bunker-concrete rounded-full flex items-center justify-center mb-4">
        {/* Render IconComponent */}
        <IconComponent className="h-8 w-8 text-grill-charcoal" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-grill-charcoal font-sans">{title}</h3>
      {/* Add flex-grow to description */}
      <p className="text-grill-charcoal font-sans text-sm flex-grow">{description}</p>
    </div>
  );
};

const OpportunitySection = () => {
  // Update features to use imported Heroicons
  const features = [
    {
      title: "Unique Market Position",
      description: "Capitalize on a distinctive brand narrative ('Agent K-9') that cuts through the clutter and attracts attention.",
      icon: SparklesIcon
    },
    {
      title: "Field-Tested Ops Manual",
      description: "Benefit from meticulously documented procedures for efficiency, quality control, and consistent execution.",
      icon: DocumentTextIcon
    },
    {
      title: "Comprehensive Training Regimen",
      description: "Master the Buster Protocol with intensive training covering all aspects of operation, from prep to personnel.",
      icon: AcademicCapIcon
    },
    {
      title: "Intel-Driven Site Selection",
      description: "Utilize our analytical approach to identify and secure high-potential territories for optimal mission deployment.",
      icon: MapPinIcon
    },
    {
      title: "Strategic Marketing Support",
      description: "Gain access to targeted marketing campaigns and resources designed to drive customer engagement and unit growth.",
      icon: PresentationChartLineIcon
    },
    {
      title: "Network of Operators",
      description: "Join a dedicated network of franchisees committed to upholding the standards of precision and passion.",
      icon: UserGroupIcon
    }
  ];

  return (
    <section id="opportunity" className="py-16 md:py-24 bg-mission-dossier-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-grill-charcoal font-heading">
            Your Mission: Franchise Success
          </h2>
          <p className="text-xl text-grill-charcoal max-w-3xl mx-auto font-sans">
            Buster&apos;s Burgers presents a unique franchise opportunity engineered for disciplined entrepreneurs seeking a proven system with a powerful edge.
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
        
        <div className="mt-16 mb-16 max-w-5xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/Couple Enjoying Busters Burgers.png"
              alt="Satisfied customers enjoying the premium Buster's Burgers experience"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-grill-charcoal/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 text-center">
              <p className="text-xl font-heading text-redacted-white text-shadow-md">
                Join a Network of Dedicated Operators
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="/franchise-application"
            className="group relative overflow-hidden px-8 py-4 font-bold font-sans text-lg text-grill-charcoal rounded-md
                     transition-all duration-300 transform hover:scale-105
                     bg-gradient-to-r from-saffron-gold to-mission-dossier-cream hover:from-mission-dossier-cream hover:to-saffron-gold 
                     border border-grill-charcoal/50 shadow-md hover:shadow-lg inline-block"
          >
            <span className="relative z-10">
              Get Started
            </span>
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection; 