import React from 'react';

const About = () => {
  return (
  <section id="about" className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-2 title-caps title-gradient font-heading inline-block">
                Team Anant
              </h2>
        <div className="title-underline mb-6"></div>
        <div className="h-px w-16 mx-auto mb-5 bg-white/10"></div>
            <p className="text-anant-mild text-base md:text-lg max-w-2xl mx-auto">
              Team Anant is BITS Pilani’s student satellite team building a compact imaging CubeSat.
            </p>
          </div>

          {/* Three-up quick context */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <div className="sleek-card p-5">
              <h3 className="text-anant-pure font-semibold mb-2">Mission</h3>
              <p className="text-anant-mild text-sm">Demonstrate cost‑effective hyperspectral imaging on a nanosatellite platform.</p>
            </div>
            <div className="sleek-card p-5">
              <h3 className="text-anant-pure font-semibold mb-2">Focus</h3>
              <p className="text-anant-mild text-sm">Practical, end‑to‑end systems learning across OBC, EPS, TTC, ADCS, STS, and Payload.</p>
            </div>
            <div className="sleek-card p-5">
              <h3 className="text-anant-pure font-semibold mb-2">Impact</h3>
              <p className="text-anant-mild text-sm">Applications in remote sensing and an on‑campus pipeline for space engineering.</p>
            </div>
          </div>

          {/* Visual + short blurb */}
          <div className="grid md:grid-cols-2 gap-6 items-center mb-12">
            <div className="sleek-card p-3">
              <img src="/assets/images/rocket-body.png" alt="Satellite concept" className="rounded-xl w-full h-auto" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-anant-pure">What we’re building</h3>
              <p className="text-anant-mild text-base leading-relaxed">
                A student‑built CubeSat with a compact imaging payload, supported by robust subsystems and a
                reliable ground segment. The goal is simple: learn by doing and deliver useful data.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="sleek-chip">Hyperspectral</span>
                <span className="sleek-chip">CubeSat</span>
                <span className="sleek-chip">Ground Ops</span>
                <span className="sleek-chip">Education</span>
              </div>
            </div>
          </div>

          {/* Minimal stats */}
          <div className="sleek-card p-5 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold metallic-text">6</div>
                <div className="text-anant-mild text-xs">Subsystems</div>
              </div>
              <div>
                <div className="text-3xl font-bold metallic-text">3U</div>
                <div className="text-anant-mild text-xs">Form Factor</div>
              </div>
              <div>
                <div className="text-3xl font-bold metallic-text">270</div>
                <div className="text-anant-mild text-xs">Bands (legacy)</div>
              </div>
              <div>
                <div className="text-3xl font-bold metallic-text">LEO</div>
                <div className="text-anant-mild text-xs">Target Orbit</div>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="text-center">
            <a href="#subsystems" className="btn-outline font-semibold mr-2 mb-2 inline-flex">Explore subsystems</a>
            <a href="#team" className="btn-primary font-semibold mr-2 mb-2 inline-flex">Meet the team</a>
            <a href="#publications" className="btn-outline font-semibold mb-2 inline-flex">Publications</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
