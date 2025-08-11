import React, { useState } from 'react';
import { Link } from 'react-router';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [subsOpen, setSubsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative">
              <img
                src="/assets/logos/anant-logo.png"
                alt="Team Anant Logo"
                className="h-12 w-auto transition-all duration-300 hover:scale-110 drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-anant-accent/20 rounded-full blur-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="relative group">
              <span className="text-white hover:text-anant-accent-light transition-all duration-300 font-medium">
                Home
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-anant-accent to-anant-accent-light transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#about" className="relative group">
              <span className="text-white hover:text-anant-accent-light transition-all duration-300 font-medium">
                About
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-anant-accent to-anant-accent-light transition-all duration-300 group-hover:w-full"></div>
            </a>
            <div className="relative group">
              <button className="text-white hover:text-anant-accent-light transition-all duration-300 font-medium">
                Subsystems
                <svg className="w-4 h-4 ml-1 inline-block transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-anant-accent to-anant-accent-light transition-all duration-300 group-hover:w-full"></div>
              <div className="absolute top-full left-0 mt-2 w-56 glass-container opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1">
                <div className="py-2">
                  <Link to="/subsystems/eps" className="block px-4 py-3 text-white hover:bg-anant-accent/20 hover:text-anant-accent-light transition-all duration-200 rounded-t-lg font-medium">
                    EPS
                    <span className="block text-xs text-anant-mild mt-1">Electrical Power System</span>
                  </Link>
                  <Link to="/subsystems/obc" className="block px-4 py-3 text-white hover:bg-anant-accent/20 hover:text-anant-accent-light transition-all duration-200 font-medium">
                    OBC
                    <span className="block text-xs text-anant-mild mt-1">On-Board Computer</span>
                  </Link>
                  <Link to="/subsystems/ttc" className="block px-4 py-3 text-white hover:bg-anant-accent/20 hover:text-anant-accent-light transition-all duration-200 font-medium">
                    TTC
                    <span className="block text-xs text-anant-mild mt-1">Telemetry & Tracking</span>
                  </Link>
                  <Link to="/subsystems/adcs" className="block px-4 py-3 text-white hover:bg-anant-accent/20 hover:text-anant-accent-light transition-all duration-200 font-medium">
                    ADCS
                    <span className="block text-xs text-anant-mild mt-1">Attitude Determination</span>
                  </Link>
                  <Link to="/subsystems/sts" className="block px-4 py-3 text-white hover:bg-anant-accent/20 hover:text-anant-accent-light transition-all duration-200 font-medium">
                    STS
                    <span className="block text-xs text-anant-mild mt-1">Structural System</span>
                  </Link>
                  <Link to="/subsystems/payload" className="block px-4 py-3 text-white hover:bg-anant-accent/20 hover:text-anant-accent-light transition-all duration-200 rounded-b-lg font-medium">
                    Payload
                    <span className="block text-xs text-anant-mild mt-1">Mission Payload</span>
                  </Link>
                </div>
              </div>
            </div>
            <a href="#team" className="relative group">
              <span className="text-white hover:text-anant-accent-light transition-all duration-300 font-medium">
                Team
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-anant-accent to-anant-accent-light transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#publications" className="relative group">
              <span className="text-white hover:text-anant-accent-light transition-all duration-300 font-medium">
                Publications
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-anant-accent to-anant-accent-light transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a href="#contact" className="relative group">
              <span className="text-white hover:text-anant-accent-light transition-all duration-300 font-medium">
                Contact
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-anant-accent to-anant-accent-light transition-all duration-300 group-hover:w-full"></div>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-anant-accent-light transition-all duration-300 p-2 rounded-lg metallic-button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu Panel */}
        {mobileOpen && (
          <div id="mobile-menu" className="md:hidden mt-2 glass-container rounded-xl overflow-hidden">
            <div className="p-2 divide-y divide-white/10">
              <a href="#home" className="block px-4 py-3 text-white hover:bg-white/5 rounded-lg">Home</a>
              <a href="#about" className="block px-4 py-3 text-white hover:bg-white/5 rounded-lg">About</a>
              <button
                className="w-full text-left px-4 py-3 text-white hover:bg-white/5 rounded-lg flex items-center justify-between"
                onClick={() => setSubsOpen((v) => !v)}
                aria-expanded={subsOpen}
              >
                Subsystems
                <svg className={`w-4 h-4 transition-transform ${subsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {subsOpen && (
                <div className="px-2 pb-2 grid grid-cols-1 sm:grid-cols-2 gap-1">
                  <Link to="/subsystems/eps" className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/5 rounded-md">EPS</Link>
                  <Link to="/subsystems/obc" className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/5 rounded-md">OBC</Link>
                  <Link to="/subsystems/ttc" className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/5 rounded-md">TTC</Link>
                  <Link to="/subsystems/adcs" className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/5 rounded-md">ADCS</Link>
                  <Link to="/subsystems/sts" className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/5 rounded-md">STS</Link>
                  <Link to="/subsystems/payload" className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/5 rounded-md">Payload</Link>
                </div>
              )}
              <a href="#team" className="block px-4 py-3 text-white hover:bg-white/5 rounded-lg">Team</a>
              <a href="#publications" className="block px-4 py-3 text-white hover:bg-white/5 rounded-lg">Publications</a>
              <a href="#contact" className="block px-4 py-3 text-white hover:bg-white/5 rounded-lg">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
