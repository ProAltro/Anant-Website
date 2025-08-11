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
      fullName: "Hyperspectral Imaging Payload",
      description:
        "Compact hyperspectral camera enabling cost‑effective orbital imaging for remote sensing; 270 spectral bands, 640×480 @ 12‑bit, with on‑board compression feasibility.",
      image: "/assets/images/engines.png",
      link: "/subsystems/payload",
      color: "from-red-500 to-red-700",
      keyFeatures: [
        "Hyperspectral Camera",
        "270 Bands",
        "Onboard Compression (CCSDS)",
        "Remote Sensing Applications",
      ],
      technicalSpecs: {
        bands: "270 spectral bands",
        format: "640×480 sensor",
        bitDepth: "12‑bit",
        power: "~10 W imager power",
      },
    }
  ];

  return (
    <section id="subsystems" className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 title-caps title-gradient font-heading inline-block">
              Subsystems
            </h2>
            <div className="title-underline mx-auto mb-8"></div>
            <p className="text-base text-anant-mild max-w-2xl mx-auto">
              Core systems engineered for our mission
            </p>
          </div>

          {/* Mission banner */}
          <div className="glassy-card p-6 mb-8 text-center">
            <p className="text-anant-mild text-sm md:text-base">
              Enabling a cost‑effective hyperspectral imaging mission while providing a hands‑on, end‑to‑end
              education in space systems engineering for students at BITS Pilani.
            </p>
          </div>

          {/* Subsystems Grid - detailed cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {subsystems.map((subsystem, index) => (
              <Link
                key={index}
                to={subsystem.link}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 shadow-md hover:shadow-xl"
              >
                {/* Top illustration band */}
                <div className={`relative h-40 md:h-48 bg-gradient-to-br ${subsystem.color}`}>
                  <img
                    src={subsystem.image}
                    alt={`${subsystem.name} Illustration`}
                    className="absolute right-3 md:right-5 bottom-0 h-28 md:h-36 opacity-90 drop-shadow-xl mix-blend-screen pointer-events-none transition-transform duration-300 group-hover:translate-y-[-4px]"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.6),_transparent_60%)]"></div>
                </div>

                {/* Bottom content */}
                <div className="p-5 md:p-6">
                  <div className="mb-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-anant-pure leading-tight">{subsystem.name}</h3>
                    <p className="text-anant-mild text-xs md:text-sm">{subsystem.fullName}</p>
                  </div>

                  <p className="text-anant-mild/90 text-sm leading-relaxed mt-3">
                    {subsystem.description}
                  </p>

                  {/* Key features chips */}
                  <div className="mt-4">
                    <h4 className="text-anant-pure/80 text-xs uppercase tracking-wider">Key Features:</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {subsystem.keyFeatures.slice(0, 6).map((feat: string, i: number) => (
                        <span
                          key={i}
                          className="text-[11px] md:text-xs px-2 py-1 rounded-md border border-white/10 bg-white/5 text-anant-mild group-hover:bg-white/10"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technical specs list */}
                  <div className="mt-4">
                    <h4 className="text-anant-pure/80 text-xs uppercase tracking-wider">Technical Specs:</h4>
                    <ul className="mt-2 space-y-1">
                      {Object.entries(subsystem.technicalSpecs).map(([k, v], i) => (
                        <li key={i} className="text-[11px] md:text-xs text-anant-mild">
                          <span className="uppercase text-anant-pure/70 mr-1">{k}:</span>
                          <span>{v as string}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-anant-accent font-medium text-sm">Learn More →</span>
                    <div className="w-8 h-8 rounded-full border border-anant-accent/40 text-anant-accent flex items-center justify-center group-hover:bg-anant-accent group-hover:text-anant-pure transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
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
