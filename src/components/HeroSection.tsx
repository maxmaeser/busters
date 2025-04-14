'use client';

const HeroSection = () => {
  return (
    <section className="relative bg-[#3E2723] text-white">
      {/* Hero background image */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3E2723]/95 via-[#3E2723]/90 to-[#3E2723]/95" style={{ 
        backgroundImage: "url('/compressed-images/Moes Tavern Photorealistic Interior.png')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}></div>
      
      {/* Worn texture overlay */}
      <div className="absolute inset-0 opacity-15 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%2064%2064%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.65%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url%28%23noise%29%22%2F%3E%3C%2Fsvg%3E')] bg-repeat"></div>
      
      {/* Hero content */}
      <div className="relative container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center">
        <div className="mb-6 inline-block relative">
          {/* Worn neon effect container */}
          <div className="absolute inset-0 blur-md opacity-40 bg-[#FFC107] rounded-md transform scale-105"></div>
          
          {/* Decorative elements */}
          <div className="absolute -left-4 -top-3 w-8 h-8 border-l-2 border-t-2 border-[#FFC107]/70 opacity-70"></div>
          <div className="absolute -right-4 -bottom-3 w-8 h-8 border-r-2 border-b-2 border-[#FFC107]/70 opacity-70"></div>
          
          <h1 className="relative text-4xl md:text-6xl font-bold font-serif tracking-tight text-shadow-md">
            Join the<br className="md:hidden" /> <span className="text-[#FFD54F] italic drop-shadow-md">Legendary</span>
            <br /><span className="text-5xl md:text-7xl font-serif tracking-tighter text-[#FFD54F] drop-shadow-lg">MOE&apos;S TAVERN</span>
          </h1>
        </div>
        
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#8D6E63] to-transparent my-6"></div>
        
        <p className="text-xl md:text-2xl max-w-3xl mb-12 font-serif text-white drop-shadow-md">
          A unique opportunity to own an iconic brand with 30+ years of 
          <span className="text-[#FFD54F] italic"> character-building</span> success
        </p>
        
        <a 
          href="https://moes-tavern.franchisesystems.ai/signup" 
          className="group relative overflow-hidden px-10 py-5 font-bold text-xl text-[#3E2723] rounded-md
                   transition-all duration-300 transform hover:scale-105
                   bg-gradient-to-r from-[#FFC107] to-[#FFD54F] 
                   border-2 border-[#8D6E63] shadow-lg
                   before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%2020h40v20H0V20zM40%200v20H20V0h20z%22%20fill%3D%22%23FFFFFF%22%20fill-opacity%3D%220.1%22%2F%3E%3C%2Fsvg%3E')] before:bg-repeat before:opacity-25"
        >
          <span className="relative z-10 inline-flex items-center">
            Get Started
            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#3E2723]/30"></span>
          </span>
        </a>
        
        {/* Beer bubbles decoration - subtle animation */}
        <div className="absolute bottom-0 left-1/4 w-2 h-2 rounded-full bg-white/20 animate-float-slow"></div>
        <div className="absolute bottom-10 left-1/3 w-3 h-3 rounded-full bg-white/10 animate-float-medium"></div>
        <div className="absolute bottom-20 right-1/4 w-2 h-2 rounded-full bg-white/15 animate-float-fast"></div>
        <div className="absolute bottom-6 right-1/3 w-4 h-4 rounded-full bg-white/10 animate-float-slow"></div>
      </div>
    </section>
  );
};

export default HeroSection; 