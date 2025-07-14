import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-anant-dark via-anant-primary to-anant-secondary overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/assets/backgrounds/bg-gif.webp')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-anant-dark/95 via-transparent to-anant-dark/90"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-3 h-3 bg-anant-accent rounded-full animate-pulse glow-accent"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-anant-accent-light rounded-full animate-pulse delay-1000 glow-accent"></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-anant-accent rounded-full animate-pulse delay-2000 glow-accent"></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-anant-accent rounded-full animate-pulse delay-3000 glow-accent"></div>
        <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-anant-accent-light rounded-full animate-pulse delay-4000 glow-accent"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="relative inline-block">
            <img
              src="/assets/logos/anant-logo.png"
              alt="Team Anant Logo"
              className="mx-auto h-36 w-auto mb-6 animate-float drop-shadow-2xl"
            />
            <div className="absolute inset-0 bg-anant-accent/30 rounded-full blur-2xl opacity-50 animate-pulse-glow"></div>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold font-poppins mb-6 metallic-text animate-fade-in">
          Team Anant
        </h1>
        
        <div className="metallic-divider w-32 mx-auto mb-8"></div>
        
        <p className="text-2xl md:text-3xl text-anant-mild mb-4 max-w-4xl mx-auto animate-fade-in font-medium">
          BITS Pilani's First Nanosatellite Team
        </p>
        
        <p className="text-lg md:text-xl text-anant-mild mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in opacity-90">
          Building indigenously designed nanosatellites with multispectral imaging capabilities 
          for vegetation monitoring and analysis
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
          <button className="px-10 py-4 bg-gradient-to-r from-anant-accent to-anant-accent-light text-anant-pure rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-glow hover:shadow-glow-intense metallic-button">
            <span className="relative z-10">Explore Our Mission</span>
          </button>
          <button className="px-10 py-4 glass-container text-anant-accent hover:text-anant-accent-light rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-glass-hover">
            <span className="relative z-10">View Subsystems</span>
          </button>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 glass-container rounded-full flex justify-center items-start pt-2">
            <div className="w-1.5 h-4 bg-gradient-to-b from-anant-accent to-anant-accent-light rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Floating satellite animation with glassy effect */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-60">
        <div className="relative glass-container p-4 rounded-2xl">
          <img
            src="/assets/animations/satellite.gif"
            alt="Satellite Animation"
            className="w-24 h-24 md:w-32 md:h-32 animate-float drop-shadow-lg"
          />
          <div className="absolute inset-0 bg-anant-accent/10 rounded-2xl blur-lg animate-pulse-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
