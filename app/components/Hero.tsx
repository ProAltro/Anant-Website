import React from 'react';

const Hero = () => {
  const goTo = (hash: string) => {
    if (typeof window !== 'undefined') {
      window.location.hash = hash;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center bg-gradient-to-br from-anant-dark via-anant-primary to-anant-secondary overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/assets/backgrounds/bg-gif.webp')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-anant-dark/95 via-transparent to-anant-dark/90"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-anant-accent rounded-full animate-pulse glow-accent"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-anant-accent-light rounded-full animate-pulse delay-1000 glow-accent"></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-anant-accent rounded-full animate-pulse delay-2000 glow-accent"></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-anant-accent rounded-full animate-pulse delay-3000 glow-accent"></div>
        <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-anant-accent-light rounded-full animate-pulse delay-4000 glow-accent"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-6 md:mb-8">
          <div className="relative inline-block">
            <img
              src="/assets/logos/anant-logo.png"
              alt="Team Anant Logo"
              className="mx-auto h-28 md:h-36 w-auto mb-4 md:mb-6 animate-float drop-shadow-2xl"
            />
            <div className="absolute inset-0 bg-anant-accent/30 rounded-full blur-2xl opacity-50 animate-pulse-glow"></div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold font-poppins mb-4 md:mb-6 metallic-text animate-fade-in">
          Team Anant
        </h1>
        
        <div className="metallic-divider w-24 md:w-32 mx-auto mb-6 md:mb-8"></div>
        
        <p className="text-xl md:text-3xl text-anant-mild mb-3 md:mb-4 max-w-4xl mx-auto animate-fade-in font-medium">
          BITS Pilani's First Nanosatellite Team
        </p>
        
        <p className="text-base md:text-xl text-anant-mild mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in opacity-90">
          Demonstrating cost‑effective hyperspectral imaging and hands‑on education in space systems.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-fade-in">
          <button onClick={() => goTo('about')} className="px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-anant-accent to-anant-accent-light text-anant-pure rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-glow hover:shadow-glow-intense metallic-button">
            <span className="relative z-10">Explore Our Mission</span>
          </button>
          <button onClick={() => goTo('subsystems')} className="px-8 md:px-10 py-3 md:py-4 glass-container text-anant-accent hover:text-anant-accent-light rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-glass-hover">
            <span className="relative z-10">View Subsystems</span>
          </button>
        </div>

        {/* Mission Overview (from team mission statement) */}
        <div className="mt-10 md:mt-12 grid md:grid-cols-3 gap-4 text-left">
          <div className="glass-container p-5 rounded-xl">
            <h3 className="text-anant-pure font-semibold mb-2">Mission Overview</h3>
            <p className="text-anant-mild text-sm leading-relaxed">
              Demonstrating cost‑effective hyperspectral imaging using a miniature imager to support
              remote sensing applications in agriculture, forestry, water monitoring, disaster
              management, and climate research.
            </p>
          </div>
          <div className="glass-container p-5 rounded-xl">
            <h3 className="text-anant-pure font-semibold mb-2">Key Objectives</h3>
            <ul className="text-anant-mild text-sm space-y-1">
              <li className="flex"><span className="text-anant-accent mr-2">•</span>Empower students via end‑to‑end satellite development</li>
              <li className="flex"><span className="text-anant-accent mr-2">•</span>Onboard hyperspectral imaging & compression feasibility</li>
              <li className="flex"><span className="text-anant-accent mr-2">•</span>Robust OBC under strict power constraints</li>
            </ul>
          </div>
          <div className="glass-container p-5 rounded-xl">
            <h3 className="text-anant-pure font-semibold mb-2">Legacy Specs Snapshot</h3>
            <ul className="text-anant-mild text-sm space-y-1">
              <li className="flex justify-between"><span>Spectral Bands</span><span className="text-anant-accent font-semibold">270</span></li>
              <li className="flex justify-between"><span>Sensor Format</span><span className="text-anant-accent font-semibold">640×480 @ 12‑bit</span></li>
              <li className="flex justify-between"><span>Imager Power</span><span className="text-anant-accent font-semibold">~10 W</span></li>
            </ul>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-12 grid md:grid-cols-4 gap-4 text-left">
          <div className="glassy-card p-5 rounded-xl">
            <div className="w-10 h-10 rounded-md bg-anant-accent/20 flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-anant-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 1.656 1.343 3 3 3s3-1.344 3-3c0-1.657-1.343-3-3-3z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.4 15a8 8 0 10-14.8 0"/></svg>
            </div>
            <h4 className="text-anant-pure font-semibold mb-1">Hyperspectral Heritage</h4>
            <p className="text-anant-mild text-sm">Legacy work on 270‑band imaging and onboard compression informs our systems design.</p>
          </div>
          <div className="glassy-card p-5 rounded-xl">
            <div className="w-10 h-10 rounded-md bg-anant-accent/20 flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-anant-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M5 11h14M7 15h10M9 19h6"/></svg>
            </div>
            <h4 className="text-anant-pure font-semibold mb-1">Hyperspectral Camera</h4>
            <p className="text-anant-mild text-sm">Compact imager with ~270 bands (640×480 @ 12‑bit) and on‑board compression feasibility.</p>
          </div>
          <div className="glassy-card p-5 rounded-xl">
            <div className="w-10 h-10 rounded-md bg-anant-accent/20 flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-anant-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M5 11h14M7 15h10M9 19h6"/></svg>
            </div>
            <h4 className="text-anant-pure font-semibold mb-1">End‑to‑End Learning</h4>
            <p className="text-anant-mild text-sm">Student‑led system engineering across design, fabrication, testing, and ops.</p>
          </div>
          <div className="glassy-card p-5 rounded-xl">
            <div className="w-10 h-10 rounded-md bg-anant-accent/20 flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-anant-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.364 5.364l-2.121-2.121M8.757 8.757L6.636 6.636m10.728 0l-2.121 2.121M8.757 15.243l-2.121 2.121"/></svg>
            </div>
            <h4 className="text-anant-pure font-semibold mb-1">Ground Segment</h4>
            <p className="text-anant-mild text-sm">Reliable TTC and mission control workflows for operations and data downlink.</p>
          </div>
        </div>

        {/* Heritage & Objectives */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 text-left">
          <div className="glass-container p-6 rounded-xl">
            <h3 className="text-anant-pure font-semibold mb-3">Objectives</h3>
            <ul className="text-anant-mild text-sm space-y-2">
              <li className="flex"><span className="text-anant-accent mr-2">•</span>Hands‑on satellite education and systems engineering</li>
              <li className="flex"><span className="text-anant-accent mr-2">•</span>Feasibility of onboard imaging and compression</li>
              <li className="flex"><span className="text-anant-accent mr-2">•</span>Robust OBC and power‑aware operations</li>
              <li className="flex"><span className="text-anant-accent mr-2">•</span>Reliable communications and ground station ops</li>
              <li className="flex"><span className="text-anant-accent mr-2">•</span>Mission maintenance and autonomy in orbit</li>
            </ul>
          </div>
          <div className="glass-container p-6 rounded-xl">
            <h3 className="text-anant-pure font-semibold mb-3">Applications & Impact</h3>
            <p className="text-anant-mild text-sm leading-relaxed">
              Our heritage in hyperspectral concepts and current focus on an imaging payload aim to
              advance low‑cost space research. Potential applications include agriculture and climate
              analytics, as well as disaster monitoring—bridging classroom learning with
              real mission outcomes.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
          <button onClick={() => goTo('about')} className="group rounded-xl border border-white/10 bg-anant-primary/60 hover:bg-anant-primary/80 transition-colors duration-200 p-5 flex items-center justify-between">
            <div>
              <h4 className="text-anant-pure font-semibold">About</h4>
              <p className="text-anant-mild text-xs mt-1">Mission, vision, and what were building</p>
            </div>
            <div className="w-8 h-8 rounded-full border border-anant-accent/40 text-anant-accent flex items-center justify-center group-hover:bg-anant-accent group-hover:text-anant-pure transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </div>
          </button>
          <button onClick={() => goTo('subsystems')} className="group rounded-xl border border-white/10 bg-anant-primary/60 hover:bg-anant-primary/80 transition-colors duration-200 p-5 flex items-center justify-between">
            <div>
              <h4 className="text-anant-pure font-semibold">Subsystems</h4>
              <p className="text-anant-mild text-xs mt-1">Core platforms powering the mission</p>
            </div>
            <div className="w-8 h-8 rounded-full border border-anant-accent/40 text-anant-accent flex items-center justify-center group-hover:bg-anant-accent group-hover:text-anant-pure transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </div>
          </button>
          <button onClick={() => goTo('team')} className="group rounded-xl border border-white/10 bg-anant-primary/60 hover:bg-anant-primary/80 transition-colors duration-200 p-5 flex items-center justify-between">
            <div>
              <h4 className="text-anant-pure font-semibold">Team</h4>
              <p className="text-anant-mild text-xs mt-1">Meet the people behind Anant</p>
            </div>
            <div className="w-8 h-8 rounded-full border border-anant-accent/40 text-anant-accent flex items-center justify-center group-hover:bg-anant-accent group-hover:text-anant-pure transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </div>
          </button>
          <button onClick={() => goTo('publications')} className="group rounded-xl border border-white/10 bg-anant-primary/60 hover:bg-anant-primary/80 transition-colors duration-200 p-5 flex items-center justify-between">
            <div>
              <h4 className="text-anant-pure font-semibold">Publications</h4>
              <p className="text-anant-mild text-xs mt-1">Research outputs and papers</p>
            </div>
            <div className="w-8 h-8 rounded-full border border-anant-accent/40 text-anant-accent flex items-center justify-center group-hover:bg-anant-accent group-hover:text-anant-pure transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </div>
          </button>
          <button onClick={() => goTo('contact')} className="group rounded-xl border border-white/10 bg-anant-primary/60 hover:bg-anant-primary/80 transition-colors duration-200 p-5 flex items-center justify-between">
            <div>
              <h4 className="text-anant-pure font-semibold">Contact</h4>
              <p className="text-anant-mild text-xs mt-1">Get in touch with us</p>
            </div>
            <div className="w-8 h-8 rounded-full border border-anant-accent/40 text-anant-accent flex items-center justify-center group-hover:bg-anant-accent group-hover:text-anant-pure transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </div>
          </button>
        </div>
      </div>
      
      {/* Floating satellite animation with glassy effect */}
      <div className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 opacity-60 hidden sm:block z-40 pointer-events-none">
        <div className="relative glass-container p-3 md:p-4 rounded-2xl">
          <div className="absolute inset-0 bg-anant-accent/10 rounded-2xl blur-lg animate-pulse-glow z-0 pointer-events-none"></div>
          <img
            src="/assets/animations/satellite.gif"
            alt="Satellite Animation"
            className="w-20 h-20 md:w-32 md:h-32 animate-float drop-shadow-lg relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
