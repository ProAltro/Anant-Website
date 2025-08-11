import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="text-white mt-8 footer-cosmic">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid md:grid-cols-4 gap-6 md:gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
      <div className="flex items-center mb-4">
                <img
                  src="/assets/logos/anant-logo.png"
                alt="Team Anant Logo"
        className="h-7 md:h-8 w-auto mr-3 drop-shadow"
              />
              <span className="text-xl font-bold">Team Anant</span>
            </div>
      <p className="text-anant-mild mb-3">
              Building BITS-Pilani's first indigenously designed nanosatellite with multispectral imaging capabilities for vegetation monitoring and analysis.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/teamanant/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-anant-mild hover:text-anant-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 footer-heading">Quick Links</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
              <li><Link to="/#about" className="footer-link link-underline-glow text-sm">About Us</Link></li>
              <li><Link to="/#team" className="footer-link link-underline-glow text-sm">Our Team</Link></li>
              <li><Link to="/#publications" className="footer-link link-underline-glow text-sm">Publications</Link></li>
              <li><Link to="/#contact" className="footer-link link-underline-glow text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Subsystems */}
          <div>
            <h3 className="text-lg font-semibold mb-3 footer-heading">Subsystems</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              <li><a href="/subsystems/adcs" className="footer-link link-underline-glow text-sm">ADCS</a></li>
              <li><a href="/subsystems/eps" className="footer-link link-underline-glow text-sm">EPS</a></li>
              <li><a href="/subsystems/obc" className="footer-link link-underline-glow text-sm">OBC</a></li>
              <li><a href="/subsystems/payload" className="footer-link link-underline-glow text-sm">Payload</a></li>
              <li><a href="/subsystems/sts" className="footer-link link-underline-glow text-sm">STS</a></li>
              <li><a href="/subsystems/ttc" className="footer-link link-underline-glow text-sm">TTC</a></li>
            </ul>
          </div>
  </div>
  <div className="mt-4 text-center">
          <div className="metallic-divider w-32 mx-auto mb-4"></div>
          <p className="text-anant-mild">&copy; 2024 Team Anant - BITS Pilani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
