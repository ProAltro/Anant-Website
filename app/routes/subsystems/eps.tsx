import type { Route } from "./+types/eps";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "EPS - Electrical Power System | Team Anant" },
    { name: "description", content: "Comprehensive electrical power management system for Team Anant's nanosatellite, featuring solar panel control, battery management, and power distribution." },
    { name: "keywords", content: "EPS, Electrical Power System, solar panels, battery management, power distribution, nanosatellite" },
  ];
}

export default function EPS() {
  return (
    <div className="min-h-screen bg-anant-dark">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-green-500 to-green-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6 text-white">
                EPS
              </h1>
              <p className="text-xl text-green-100 mb-4">
                Electrical Power System
              </p>
              <p className="text-lg text-green-100 max-w-2xl mx-auto">
                Advanced power management system providing reliable energy distribution, solar panel control, and battery management for continuous CubeSat operations
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-anant-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold font-poppins mb-6 text-anant-pure">
                    System Overview
                  </h2>
                  <p className="text-anant-mild leading-relaxed mb-6">
                    The Electrical Power System (EPS) is the lifeline of our nanosatellite, responsible for generating, storing, and distributing electrical power throughout the mission. Our EPS is designed to handle the demanding power requirements of a multispectral imaging payload while maintaining system reliability in the harsh space environment.
                  </p>
                  <p className="text-anant-mild leading-relaxed">
                    The system integrates high-efficiency solar panels, advanced battery management, and intelligent power distribution to ensure continuous operation during both sunlit and eclipse periods of the satellite's orbit.
                  </p>
                </div>
                <div className="bg-anant-dark rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-anant-pure mb-4">Key Specifications</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-anant-mild">Solar Panel Efficiency:</span>
                      <span className="text-anant-accent">28-30%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-anant-mild">Battery Capacity:</span>
                      <span className="text-anant-accent">20-25 Wh</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-anant-mild">Power Generation:</span>
                      <span className="text-anant-accent">8-12W</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-anant-mild">Voltage Regulation:</span>
                      <span className="text-anant-accent">3.3V, 5V, 12V</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Components Section */}
        <section className="py-16 bg-anant-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold font-poppins mb-12 text-anant-pure text-center">
                System Components
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-anant-pure mb-3">Solar Panels</h3>
                  <p className="text-anant-mild">High-efficiency triple-junction solar cells mounted on deployable panels for maximum power generation.</p>
                </div>
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-anant-pure mb-3">Battery Management</h3>
                  <p className="text-anant-mild">Advanced Li-ion battery system with intelligent charging and protection circuits for optimal performance.</p>
                </div>
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-anant-pure mb-3">Power Distribution</h3>
                  <p className="text-anant-mild">Regulated power distribution unit providing stable voltages to all subsystems with overcurrent protection.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Details Section */}
        <section className="py-16 bg-anant-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold font-poppins mb-12 text-anant-pure text-center">
                Technical Implementation
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold text-anant-pure mb-4">Power Generation</h3>
                  <ul className="space-y-3 text-anant-mild">
                    <li className="flex items-start">
                      <span className="text-anant-accent mr-2">•</span>
                      Triple-junction GaAs solar cells with 28-30% efficiency
                    </li>
                    <li className="flex items-start">
                      <span className="text-anant-accent mr-2">•</span>
                      Deployable solar panel design for maximum surface area
                    </li>
                    <li className="flex items-start">
                      <span className="text-anant-accent mr-2">•</span>
                      Maximum Power Point Tracking (MPPT) implementation
                    </li>
                    <li className="flex items-start">
                      <span className="text-anant-accent mr-2">•</span>
                      Radiation-hardened components for space environment
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-anant-pure mb-4">Power Management</h3>
                  <ul className="space-y-3 text-anant-mild">
                    <li className="flex items-start">
                      <span className="text-anant-accent mr-2">•</span>
                      Li-ion battery system with 20-25 Wh capacity
                    </li>
                    <li className="flex items-start">
                      <span className="text-anant-accent mr-2">•</span>
                      Battery charge/discharge monitoring and protection
                    </li>
                    <li className="flex items-start">
                      <span className="text-anant-accent mr-2">•</span>
                      Multiple regulated voltage outputs (3.3V, 5V, 12V)
                    </li>
                    <li className="flex items-start">
                      <span className="text-anant-accent mr-2">•</span>
                      Overcurrent and thermal protection circuits
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Critical Section */}
        <section className="py-16 bg-anant-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-poppins mb-6 text-anant-pure">
                Mission Critical Performance
              </h2>
              <p className="text-anant-mild leading-relaxed mb-8">
                The EPS is designed to operate reliably throughout the mission lifetime, providing uninterrupted power to critical systems including the multispectral imaging payload, communication systems, and attitude control mechanisms.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="text-2xl font-bold text-anant-accent mb-2">99.9%</div>
                  <div className="text-anant-mild">System Reliability</div>
                </div>
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="text-2xl font-bold text-anant-accent mb-2">8-12W</div>
                  <div className="text-anant-mild">Power Generation</div>
                </div>
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="text-2xl font-bold text-anant-accent mb-2">2+ Years</div>
                  <div className="text-anant-mild">Mission Duration</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
