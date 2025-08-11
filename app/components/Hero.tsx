import React from 'react';

const Hero = () => {
  const goTo = (hash: string) => {
    if (typeof window !== 'undefined') {
    // Update hash and let browser scroll to the anchor; sections have scroll-margin to account for fixed header
    window.location.hash = hash;
    }
  };

  return (
  <section id="hero" className="relative min-h-[78vh] md:min-h-[84vh] flex items-center justify-center overflow-hidden pt-6 cosmic-hero">

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <div className="mb-5 md:mb-7">
          <div className="relative inline-block">
            <img
              src="/assets/logos/anant-logo.png"
              alt="Team Anant Logo"
              className="mx-auto h-20 md:h-24 w-auto mb-3 md:mb-4 drop-shadow-2xl"
            />
          </div>
        </div>

  <h1 className="hero-title-xl font-semibold mb-2 md:mb-3 title-caps title-gradient font-heading">
          Team Anant
        </h1>
        <div className="title-underline"></div>

        <div className="h-px w-24 mx-auto mb-5 md:mb-6 bg-white/15" />

        <p className="text-base md:text-lg text-white/75 mb-6 md:mb-8 max-w-2xl mx-auto">
          Designing, building, and operating nanosatellites. A hands‑on space program by students, supported by faculty and alumni.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
          <button onClick={() => goTo('about')} className="inline-flex items-center rounded-full bg-sky-400/15 text-sky-200 hover:bg-sky-400/25 px-5 py-2.5 backdrop-blur transition-colors font-medium">
            Learn more
          </button>
          <button onClick={() => goTo('contact')} className="inline-flex items-center rounded-full bg-white/10 text-white hover:bg-white/20 px-5 py-2.5 backdrop-blur transition-colors font-medium">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
