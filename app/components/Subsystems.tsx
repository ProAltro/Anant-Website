import React from 'react';
import { Link } from 'react-router';

const Subsystems = () => {
  const subsystems = [
    {
      name: "EPS",
      fullName: "Electrical Power System",
      description: "Advanced power management system featuring Azur Space multi-junction solar cells with 30% efficiency, 2s2p Li-ion battery pack, and MPPT algorithm for optimal energy harvesting under varying illumination conditions",
      image: "/assets/images/rocket2.png",
      link: "/subsystems/eps",
      color: "from-green-500 to-green-700",
      keyFeatures: ["22 Solar Cells (30% Efficiency)", "MPPT Algorithm", "2s2p Li-ion Battery", "Overcurrent Protection"],
      technicalSpecs: {
        solarCells: "Azur Space multi-junction (40×80mm)",
        batteryType: "2s2p Li-ion configuration",
        efficiency: "30% solar conversion efficiency",
        controller: "Dedicated microcontroller with housekeeping"
      }
    },
    {
      name: "OBC",
      fullName: "On-Board Computer",
      description: "BeagleBone Black Industrial-based central processing unit running custom OS with autonomous experiment control, fault tolerance, and real-time data acquisition capabilities",
      image: "/assets/images/bus.png",
      link: "/subsystems/obc",
      color: "from-yellow-500 to-yellow-700",
      keyFeatures: ["BeagleBone Black Industrial", "Custom OS", "Autonomous Control", "Fault Tolerance"],
      technicalSpecs: {
        platform: "BeagleBone Black Industrial",
        os: "Custom real-time OS",
        features: "Secure boot, memory integrity",
        control: "B-dot ADCS algorithm implementation"
      }
    },
    {
      name: "TTC",
      fullName: "Telemetry, Tracking & Command",
      description: "UHF band communication system using CC1101 transceiver with deployable turnstile and monopole antennas, implementing AX.25 protocol for reliable ground station contact",
      image: "/assets/images/rocket3.png",
      link: "/subsystems/ttc",
      color: "from-purple-500 to-purple-700",
      keyFeatures: ["CC1101 Transceiver", "UHF Band Operation", "AX.25 Protocol", "Deployable Antennas"],
      technicalSpecs: {
        transceiver: "CC1101-based UHF transceiver",
        antennas: "Deployable turnstile & monopole",
        protocol: "AX.25 framing and encoding",
        groundStation: "Yagi setup with SDR reception"
      }
    },
    {
      name: "ADCS",
      fullName: "Attitude Determination & Control System",
      description: "Precision attitude control featuring BNO085 IMU, GPS module, and B-dot controller algorithm for detumbling using magnetorquers with PWM control signals",
      image: "/assets/images/rocket1.png",
      link: "/subsystems/adcs",
      color: "from-blue-500 to-blue-700",
      keyFeatures: ["BNO085 IMU", "GPS Module", "B-dot Controller", "Magnetorquers"],
      technicalSpecs: {
        sensors: "BNO085 IMU + GPS positioning",
        algorithm: "B-dot controller for detumbling",
        actuators: "Magnetorquers with PWM control",
        integration: "OBC-based algorithm implementation"
      }
    },
    {
      name: "STS",
      fullName: "Structural & Thermal System",
      description: "Aluminum 6061-T6 structure following 3U CubeSat standard with passive thermal control using MLI insulation, black anodized radiators, and active TMP117 temperature monitoring",
      image: "/assets/images/astronaut.png",
      link: "/subsystems/sts",
      color: "from-indigo-500 to-indigo-700",
      keyFeatures: ["Al 6061-T6 Structure", "MLI Insulation", "Passive Thermal Control", "TMP117 Sensors"],
      technicalSpecs: {
        material: "Aluminum 6061-T6 (3U CubeSat)",
        thermal: "MLI + black anodized radiators",
        sensors: "TMP117 precision temperature sensors",
        control: "Active heaters for battery thermal management"
      }
    },
    {
      name: "Payload",
      fullName: "Biological Experiment Payload",
      description: "Microfluidic lab-on-chip system for studying Cutibacterium acnes growth in microgravity using Doubleflow Standard Chip with fluorescence detection and real-time environmental monitoring",
      image: "/assets/images/engines.png",
      link: "/subsystems/payload",
      color: "from-red-500 to-red-700",
      keyFeatures: ["Microfluidic Lab-on-Chip", "Fluorescence Detection", "C. acnes Culture", "Real-time Monitoring"],
      technicalSpecs: {
        platform: "Doubleflow Standard Chip (Beonchip)",
        detection: "488nm LED + S1336 photodiode",
        organism: "Cutibacterium acnes bacterial culture",
        monitoring: "Temperature, pH, fluorescence sensors"
      }
    }
  ];

  return (
    <section id="subsystems" className="py-20 bg-anant-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-anant-pure">
              Subsystems
            </h2>
            <p className="text-xl text-anant-mild max-w-3xl mx-auto mb-4">
              Six core subsystems engineered for our biological experiment mission - studying Cutibacterium acnes growth in microgravity
            </p>
            <div className="flex justify-center space-x-8 text-sm text-anant-accent">
              <span>• 3U CubeSat • 500km SSO • 1 Year Mission</span>
              <span>• BITS Pilani Student Satellite Team</span>
            </div>
          </div>

          {/* Mission Overview */}
          <div className="bg-anant-primary rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-anant-pure mb-4">Mission Overview</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-anant-accent mb-2">Primary Objectives</h4>
                <ul className="text-anant-mild space-y-1">
                  <li>• Demonstrate biological experiment in microgravity</li>
                  <li>• Study C. acnes growth using microfluidic platform</li>
                  <li>• Validate autonomous experiment control systems</li>
                  <li>• Gain LEO operational experience</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-anant-accent mb-2">Mission Specifications</h4>
                <ul className="text-anant-mild space-y-1">
                  <li>• <span className="text-anant-accent">Orbit:</span> 500km Polar Sun Synchronous</li>
                  <li>• <span className="text-anant-accent">Mass:</span> &lt;3kg bus + &lt;0.5kg payload</li>
                  <li>• <span className="text-anant-accent">Size:</span> 3U CubeSat (100×100×300mm)</li>
                  <li>• <span className="text-anant-accent">Mission Life:</span> ~1 year</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Subsystems Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subsystems.map((subsystem, index) => (
              <Link
                key={index}
                to={subsystem.link}
                className="group relative bg-anant-primary rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer block"
              >
                {/* Background Image */}
                <div className="h-80 bg-gradient-to-br from-anant-primary to-anant-gray relative overflow-hidden">
                  <img
                    src={subsystem.image}
                    alt={subsystem.name}
                    className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-anant-dark/80 to-transparent"></div>
                  
                  {/* Overlay gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${subsystem.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-2xl font-bold font-poppins text-anant-pure group-hover:text-anant-accent transition-colors">
                      {subsystem.name}
                    </h3>
                    <p className="text-anant-accent text-sm font-medium">
                      {subsystem.fullName}
                    </p>
                  </div>
                  <p className="text-anant-mild leading-relaxed mb-4">
                    {subsystem.description}
                  </p>
                  
                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-anant-pure mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {subsystem.keyFeatures.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-anant-gray text-anant-mild px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technical Specifications */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-anant-pure mb-2">Technical Specs:</h4>
                    <div className="space-y-1">
                      {Object.entries(subsystem.technicalSpecs).map(([key, value], idx) => (
                        <div key={idx} className="text-xs text-anant-mild">
                          <span className="text-anant-accent font-medium">{key}:</span> {value}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Learn More Button */}
                  <div className="flex justify-between items-center">
                    <span className="text-anant-accent hover:text-anant-accent-hover font-semibold transition-colors">
                      Learn More →
                    </span>
                    <div className="w-8 h-8 bg-anant-accent rounded-full flex items-center justify-center group-hover:bg-anant-accent-hover transition-colors">
                      <svg className="w-4 h-4 text-anant-pure" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-anant-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold text-anant-pure mb-4">
              Interested in Technical Details?
            </h3>
            <p className="text-anant-mild mb-6">
              Explore our comprehensive technical documentation and research papers
            </p>
            <a
              href="#publications"
              className="inline-flex items-center px-8 py-3 bg-anant-accent hover:bg-anant-accent-hover text-anant-pure rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View Publications
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subsystems;
