import type { Route } from "./+types/obc";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "OBC - On-Board Computer | Team Anant" },
    { name: "description", content: "Advanced on-board computer system managing all satellite operations, data processing, command execution, and mission control for Team Anant's nanosatellite." },
    { name: "keywords", content: "OBC, On-Board Computer, mission control, data processing, command execution, nanosatellite" },
  ];
}

export default function OBC() {
  return (
    <div className="min-h-screen bg-anant-dark">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-yellow-500 to-yellow-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6 text-white">
                OBC
              </h1>
              <p className="text-xl text-yellow-100 mb-4">
                On-Board Computer
              </p>
              <p className="text-lg text-yellow-100 max-w-2xl mx-auto">
                Central processing unit managing all satellite operations, data processing, command execution, and mission control functions
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
                    The On-Board Computer (OBC) serves as the central nervous system of our nanosatellite, orchestrating all mission operations and data processing tasks. It manages subsystem coordination, executes mission commands, and handles data acquisition from the multispectral imaging payload.
                  </p>
                  <p className="text-anant-mild leading-relaxed">
                    Built on a robust ARM-based architecture, the OBC provides the computational power needed for real-time operations while maintaining low power consumption critical for space missions.
                  </p>
                </div>
                <div className="bg-anant-dark rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-anant-pure mb-4">Key Specifications</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-anant-mild">Processor:</span>
                      <span className="text-anant-accent">ARM Cortex-A9</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-anant-mild">Clock Speed:</span>
                      <span className="text-anant-accent">800 MHz</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-anant-mild">RAM:</span>
                      <span className="text-anant-accent">1 GB DDR3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-anant-mild">Storage:</span>
                      <span className="text-anant-accent">8 GB eMMC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-anant-mild">Operating System:</span>
                      <span className="text-anant-accent">Linux RT</span>
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
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-anant-pure mb-3">Main Processor</h3>
                  <p className="text-anant-mild">ARM Cortex-A9 processor with dual-core architecture for high-performance computing and real-time operations.</p>
                </div>
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v2a1 1 0 01-1 1h-1v12a2 2 0 01-2 2H6a2 2 0 01-2-2V8H3a1 1 0 01-1-1V5a1 1 0 011-1h4zM9 6h6v12H9V6z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-anant-pure mb-3">Memory Management</h3>
                  <p className="text-anant-mild">1 GB DDR3 RAM and 8 GB eMMC storage with advanced memory management for efficient data handling.</p>
                </div>
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-anant-pure mb-3">I/O Interfaces</h3>
                  <p className="text-anant-mild">Multiple I/O interfaces including UART, SPI, I2C, and GPIO for comprehensive subsystem communication.</p>
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
                  <h3 className="text-xl font-semibold text-anant-pure mb-4">Software Architecture</h3>
                  <ul className="space-y-3 text-anant-mild">
                    <li className="flex items-start">
                      <span className="text-anant-accent mr-2">•</span>
                      Real-time Linux operating system for mission-critical operations
                    </li>
                    <li className="flex items-start">
                      <span className="text-anant-accent mr-2">•</span>
                      Modular software design with failsafe mechanisms
                    </li>
                    <li className="flex items-start">
                      <span className="text-anant-accent mr-2">•</span>
                      Autonomous mission execution and emergency response
                    </li>
                    <li className="flex items-start">
                      <span className="text-anant-accent mr-2">•</span>
                      Data compression and encryption for secure transmission
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-anant-pure mb-4">Mission Control</h3>
                  <ul className="space-y-3 text-anant-mild">
                    <li className="flex items-start">
                      <span className="text-anant-accent mr-2">•</span>
                      Command and data handling for all subsystems
                    </li>
                    <li className="flex items-start">
                      <span className="text-anant-accent mr-2">•</span>
                      Telemetry collection and transmission scheduling
                    </li>
                    <li className="flex items-start">
                      <span className="text-anant-accent mr-2">•</span>
                      Attitude control and orbital mechanics calculations
                    </li>
                    <li className="flex items-start">
                      <span className="text-anant-accent mr-2">•</span>
                      Payload data acquisition and processing
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
                The OBC is designed for high reliability and autonomous operation, capable of managing complex mission scenarios and maintaining system integrity throughout the mission lifetime.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="text-2xl font-bold text-anant-accent mb-2">800 MHz</div>
                  <div className="text-anant-mild">Processing Power</div>
                </div>
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="text-2xl font-bold text-anant-accent mb-2">1 GB</div>
                  <div className="text-anant-mild">System Memory</div>
                </div>
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="text-2xl font-bold text-anant-accent mb-2">99.95%</div>
                  <div className="text-anant-mild">Uptime Reliability</div>
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
