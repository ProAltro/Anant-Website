import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-anant-dark via-anant-primary to-anant-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-6 metallic-text">
              About Team Anant
            </h2>
            <div className="metallic-divider w-24 mx-auto mb-8"></div>
            <p className="text-xl text-anant-mild max-w-3xl mx-auto leading-relaxed">
              BITS Pilani Student Satellite Team pioneering hyperspectral imaging on a nanosatellite platform
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-semibold metallic-text font-poppins">
                Our Mission
              </h3>
              <p className="text-anant-mild leading-relaxed text-lg">
                Team Anant is developing BITS Pilani's first student satellite to demonstrate a compact
                hyperspectral imaging payload in orbit. The mission targets cost‑effective acquisition of
                rich spectral data suitable for remote sensing applications.
              </p>
              <p className="text-anant-mild leading-relaxed text-lg">
                Since 2013, following leading global universities, BITS Pilani has been pioneering space technology 
                through Project Anant. Our mission combines hands-on satellite development experience with 
                a practical imaging instrument to advance low‑cost Earth observation.
              </p>
              
              <div className="glassy-card p-6 mt-8">
                <h4 className="text-xl font-semibold text-anant-accent mb-4 font-poppins">Key Objectives</h4>
                <ul className="text-anant-mild space-y-2 text-base">
                  <li className="flex items-start">
                    <span className="text-anant-accent mr-2">•</span>
                    Demonstrate compact hyperspectral imaging in LEO
                  </li>
                  <li className="flex items-start">
                    <span className="text-anant-accent mr-2">•</span>
                    Validate onboard compression feasibility (CCSDS‑style)
                  </li>
                  <li className="flex items-start">
                    <span className="text-anant-accent mr-2">•</span>
                    Enable student end‑to‑end space systems learning
                  </li>
                  <li className="flex items-start">
                    <span className="text-anant-accent mr-2">•</span>
                    Support remote sensing applications post‑downlink
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <span className="px-4 py-2 metallic-button text-anant-pure rounded-lg text-sm font-medium">
                  Hyperspectral Imaging
                </span>
                <span className="px-4 py-2 metallic-button text-anant-pure rounded-lg text-sm font-medium">
                  Compression & Processing
                </span>
                <span className="px-4 py-2 metallic-button text-anant-pure rounded-lg text-sm font-medium">
                  Remote Sensing
                </span>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="glass-container p-4 rounded-2xl">
                <img
                  src="/assets/images/rocket-body.png"
                  alt="Satellite Design"
                  className="rounded-lg w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-anant-dark/30 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 glass-container p-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold metallic-text mb-2">6</div>
              <div className="text-anant-mild font-medium">Subsystems</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold metallic-text mb-2">500km</div>
              <div className="text-anant-mild font-medium">Orbit Altitude</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold metallic-text mb-2">30%</div>
              <div className="text-anant-mild font-medium">Solar Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold metallic-text mb-2">3U</div>
              <div className="text-anant-mild font-medium">CubeSat</div>
            </div>
          </div>

          {/* Mission Statement (from proposal) */}
          <div className="glassy-card p-8 mb-16">
            <h3 className="text-3xl md:text-4xl font-semibold metallic-text font-poppins mb-4">Mission Statement</h3>
            <p className="text-anant-mild text-lg leading-relaxed">
              Demonstrate the feasibility of hyperspectral imaging on a nanosatellite platform using a
              compact imager and onboard compression, enabling applications across agriculture,
              forestry, water monitoring, disaster management, and climate research while offering a
              comprehensive learning experience in end‑to‑end space systems.
            </p>
          </div>

          {/* Mission Specifications Snapshot */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-anant-dark rounded-lg p-6">
              <h4 className="text-anant-pure font-semibold mb-2">Imager</h4>
              <ul className="text-anant-mild text-sm space-y-1">
                <li className="flex justify-between"><span>Bands</span><span className="text-anant-accent">270</span></li>
                <li className="flex justify-between"><span>Format</span><span className="text-anant-accent">640×480</span></li>
                <li className="flex justify-between"><span>Bit Depth</span><span className="text-anant-accent">12‑bit</span></li>
              </ul>
            </div>
            <div className="bg-anant-dark rounded-lg p-6">
              <h4 className="text-anant-pure font-semibold mb-2">Performance</h4>
              <ul className="text-anant-mild text-sm space-y-1">
                <li className="flex justify-between"><span>Frame Rate</span><span className="text-anant-accent">~300 fps</span></li>
                <li className="flex justify-between"><span>Frames/Image</span><span className="text-anant-accent">270</span></li>
                <li className="flex justify-between"><span>Capture Time</span><span className="text-anant-accent">~0.9 s</span></li>
              </ul>
            </div>
            <div className="bg-anant-dark rounded-lg p-6">
              <h4 className="text-anant-pure font-semibold mb-2">Power & Size</h4>
              <ul className="text-anant-mild text-sm space-y-1">
                <li className="flex justify-between"><span>Power</span><span className="text-anant-accent">~10 W</span></li>
                <li className="flex justify-between"><span>Mass</span><span className="text-anant-accent">&lt; 0.68 kg</span></li>
                <li className="flex justify-between"><span>Size</span><span className="text-anant-accent">~3×3×4.7 in</span></li>
              </ul>
            </div>
          </div>

          {/* Vision Section */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl md:text-4xl font-semibold metallic-text font-poppins mb-6">
              Our Vision
            </h3>
            <div className="metallic-divider w-20 mx-auto mb-8"></div>
            <p className="text-anant-mild text-lg max-w-4xl mx-auto leading-relaxed">
              To establish BITS Pilani as a leading institution in nanosatellite technology and space research, 
              while contributing to low‑cost Earth observation through compact imaging systems.
            </p>
            
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="glassy-card p-6">
                <div className="w-12 h-12 bg-anant-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-anant-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-anant-accent font-semibold mb-3 text-lg">Educational Excellence</h4>
                <p className="text-anant-mild text-base">Empowering students with hands-on satellite development experience</p>
              </div>
              <div className="glassy-card p-6">
                <div className="w-12 h-12 bg-anant-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-anant-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-anant-accent font-semibold mb-3 text-lg">Research Innovation</h4>
                <p className="text-anant-mild text-base">Pioneering compact hyperspectral imaging on a student satellite</p>
              </div>
              <div className="glassy-card p-6">
                <div className="w-12 h-12 bg-anant-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-anant-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-anant-accent font-semibold mb-3 text-lg">Space Technology</h4>
                <p className="text-anant-mild text-base">Advancing low‑cost Earth observation from CubeSats</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
