import React, { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [subsOpen, setSubsOpen] = useState(false);
  const location = useLocation();
  const activeHash = location.hash || '#hero';
  const path = location.pathname || '/';
  const isSubsystems = useMemo(() => path.startsWith('/subsystems'), [path]);
  const isTeams = useMemo(() => path.startsWith('/teams'), [path]);

  const goTo = (id: string) => {
    if (typeof window !== 'undefined') {
      window.location.hash = id;
    }
    setMobileOpen(false);
  };

  return (
  <header className="fixed top-0 left-0 right-0 z-[100] glass-nav nav-accented h-14 md:h-16">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <nav className="flex items-center justify-between h-full">
      {/* Logo */}
          <div className="flex items-center">
            <Link to="/#hero" className="relative inline-block group" aria-label="Team Anant Home">
                    <img
                      src="/assets/logos/anant-logo.png"
                alt="Team Anant Logo"
                className="h-10 md:h-12 w-auto transition-transform duration-300 hover:scale-110 drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-anant-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/#hero" className={`nav-link font-medium px-2.5 py-1.5 rounded-md hover:bg-white/5 flex items-center text-[14px] md:text-[15px] ${activeHash === '#hero' ? 'is-active' : ''}`}>Home</Link>
            <Link to="/#about" className={`nav-link font-medium px-2.5 py-1.5 rounded-md hover:bg-white/5 flex items-center text-[14px] md:text-[15px] ${activeHash === '#about' ? 'is-active' : ''}`}>About</Link>
            {/* Subsystems dropdown with hover-bridge to prevent flicker */}
            <div className="relative group">
              <div className={`nav-link font-medium px-2.5 py-1.5 rounded-md hover:bg-white/5 flex items-center text-[14px] md:text-[15px] ${(activeHash === '#subsystems' || isSubsystems) ? 'is-active' : ''}`}>
                <Link to="/#subsystems" className="flex items-center">Subsystems</Link>
                <svg className="w-4 h-4 ml-1 inline-block transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {/* Hover bridge: pt-3 creates a safe area between button and menu */}
              <div className="absolute left-0 top-full pt-2 w-64 md:w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto z-[110]">
                <div className="nav-popover p-2 rounded-xl">
                  <Link to="/subsystems/eps" className="nav-item rounded-t-lg">
                    EPS
                    <small>Electrical Power System</small>
                  </Link>
                  <Link to="/subsystems/obc" className="nav-item">OBC<small>On-Board Computer</small></Link>
                  <Link to="/subsystems/ttc" className="nav-item">TTC<small>Telemetry & Tracking</small></Link>
                  <Link to="/subsystems/adcs" className="nav-item">ADCS<small>Attitude Determination</small></Link>
                  <Link to="/subsystems/sts" className="nav-item">STS<small>Structural System</small></Link>
                  <Link to="/subsystems/payload" className="nav-item rounded-b-lg">Payload<small>Mission Payload</small></Link>
                </div>
              </div>
            </div>
            <Link to="/#team" className={`nav-link font-medium px-2.5 py-1.5 rounded-md hover:bg-white/5 flex items-center text-[14px] md:text-[15px] ${(activeHash === '#team' || isTeams) ? 'is-active' : ''}`}>Team</Link>
            <Link to="/#publications" className={`nav-link font-medium px-2.5 py-1.5 rounded-md hover:bg-white/5 flex items-center text-[14px] md:text-[15px] ${activeHash === '#publications' ? 'is-active' : ''}`}>Publications</Link>
            <Link to="/#contact" className={`nav-link font-medium px-2.5 py-1.5 rounded-md hover:bg-white/5 flex items-center text-[14px] md:text-[15px] ${activeHash === '#contact' ? 'is-active' : ''}`}>Contact</Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-anant-accent-light hover:text-white bg-anant-accent/20 hover:bg-anant-accent/30 border border-anant-accent/40 rounded-xl p-2 transition-colors shadow-glow"
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
          <div id="mobile-menu" className="md:hidden mt-2 sleek-container rounded-2xl overflow-hidden">
            <div className="p-3 divide-y divide-white/10">
              <Link to="/#hero" onClick={() => setMobileOpen(false)} className="block px-4 py-3.5 text-white hover:bg-white/5 rounded-lg text-base">Home</Link>
              <Link to="/#about" onClick={() => setMobileOpen(false)} className="block px-4 py-3.5 text-white hover:bg-white/5 rounded-lg text-base">About</Link>
              <button
                className="w-full text-left px-4 py-3.5 text-white hover:bg-white/5 rounded-lg flex items-center justify-between text-base"
                onClick={() => setSubsOpen((v) => !v)}
                aria-expanded={subsOpen}
              >
                Subsystems
                <svg className={`w-4 h-4 transition-transform ${subsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {subsOpen && (
                <div className="px-2 pb-2 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  <Link to="/subsystems/eps" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-white/90 hover:text-white hover:bg-white/5 rounded-md text-base">EPS</Link>
                  <Link to="/subsystems/obc" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-white/90 hover:text-white hover:bg-white/5 rounded-md text-base">OBC</Link>
                  <Link to="/subsystems/ttc" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-white/90 hover:text-white hover:bg-white/5 rounded-md text-base">TTC</Link>
                  <Link to="/subsystems/adcs" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-white/90 hover:text-white hover:bg-white/5 rounded-md text-base">ADCS</Link>
                  <Link to="/subsystems/sts" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-white/90 hover:text-white hover:bg-white/5 rounded-md text-base">STS</Link>
                  <Link to="/subsystems/payload" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-white/90 hover:text-white hover:bg-white/5 rounded-md text-base">Payload</Link>
                </div>
              )}
              <Link to="/#team" onClick={() => setMobileOpen(false)} className="block px-4 py-3.5 text-white hover:bg-white/5 rounded-lg text-base">Team</Link>
              <Link to="/#publications" onClick={() => setMobileOpen(false)} className="block px-4 py-3.5 text-white hover:bg-white/5 rounded-lg text-base">Publications</Link>
              <Link to="/#contact" onClick={() => setMobileOpen(false)} className="block px-4 py-3.5 text-white hover:bg-white/5 rounded-lg text-base">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
