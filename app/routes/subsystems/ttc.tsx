import type { Route } from "./+types/ttc";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TTC - Telemetry, Tracking and Command | Team Anant" },
    { name: "description", content: "Advanced telemetry, tracking and command system enabling reliable communication between the satellite and ground station with UHF band operations." },
    { name: "keywords", content: "TTC, Telemetry, Tracking, Command, communication, UHF, ground station, nanosatellite" },
  ];
}

export default function TTC() {
  return (
    <div className="min-h-screen bg-anant-dark">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-purple-500 to-purple-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6 text-white">
                TTC
              </h1>
              <p className="text-xl text-purple-100 mb-4">
                Telemetry, Tracking and Command
              </p>
              <p className="text-lg text-purple-100 max-w-2xl mx-auto">
                Advanced communication system enabling reliable contact between the satellite and ground station with UHF band operations and deployable antennas
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
                    The Telemetry, Tracking and Command Subsystem (TTC) enables reliable contact between the satellite and the ground station. It supports both uplink and downlink functionalities—where uplinked data typically includes telecommands and configuration changes, and downlinked data includes housekeeping data and payload readings.
                  </p>
                  <p className="text-anant-mild leading-relaxed">
                    The communication protocol stack, including framing (AX.25) and encoding, is implemented on the OBC. The TTC uses a CC1101-based transceiver operating in the UHF band, and communicates via deployable turnstile and monopole antennas.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="bg-anant-secondary rounded-lg p-16 text-center">
                    <div className="text-9xl mb-8">📡</div>
                    <h3 className="text-2xl font-bold text-anant-pure mb-3">Communication Range</h3>
                    <p className="text-anant-mild text-lg">UHF Band Operation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-anant-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold font-poppins mb-12 text-center text-anant-pure">
                Key Features
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="text-5xl mb-6">📡</div>
                  <h3 className="text-xl font-bold text-anant-pure mb-4">CC1101 Transceiver</h3>
                  <p className="text-anant-mild">
                    Advanced transceiver operating in the UHF band with configurable parameters through SmartRF Studio for optimal performance.
                  </p>
                </div>
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="text-5xl mb-6">🔄</div>
                  <h3 className="text-xl font-bold text-anant-pure mb-4">AX.25 Protocol</h3>
                  <p className="text-anant-mild">
                    Reliable packet-based communication protocol ensuring robust data transmission and reception between satellite and ground station.
                  </p>
                </div>
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="text-5xl mb-6">📶</div>
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Deployable Antennas</h3>
                  <p className="text-anant-mild">
                    Turnstile and monopole antennas with dual redundant deployment system for secure and reliable antenna deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-anant-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold font-poppins mb-12 text-center text-anant-pure">
                Technical Specifications
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-anant-secondary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Communication System</h3>
                  <ul className="text-anant-mild space-y-2">
                    <li>• Frequency Band: UHF (Ultra High Frequency)</li>
                    <li>• Transceiver: CC1101-based system</li>
                    <li>• Protocol: AX.25 packet protocol</li>
                    <li>• Power Amplifier: Integrated for signal boost</li>
                    <li>• RF Switch: For antenna selection</li>
                  </ul>
                </div>
                <div className="bg-anant-secondary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Antenna System</h3>
                  <ul className="text-anant-mild space-y-2">
                    <li>• Turnstile Antenna: Circular polarization</li>
                    <li>• Monopole Antenna: Linear polarization</li>
                    <li>• Deployment: Nichrome wire burn system</li>
                    <li>• Redundancy: Dual deployment circuits</li>
                    <li>• Material: Highly elastic spring steel</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ground Station Integration */}
        <section className="py-16 bg-anant-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold font-poppins mb-12 text-center text-anant-pure">
                Ground Station Integration
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-anant-pure mb-4">Ground Segment</h3>
                  <p className="text-anant-mild leading-relaxed mb-6">
                    The ground segment includes a rotator-controlled Yagi setup integrated with SDR-based reception and decoding. The system features automated satellite tracking, signal decoding, and data processing capabilities.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-anant-mild">Yagi antenna with rotor control</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-anant-mild">SDR-based signal processing</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-anant-mild">Automated satellite tracking</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-anant-mild">Low noise amplifier integration</span>
                    </div>
                  </div>
                </div>
                <div className="bg-anant-primary rounded-lg p-8">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Data Flow</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-anant-mild">Uplink</span>
                      <span className="text-purple-400">Commands & Config</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-anant-mild">Downlink</span>
                      <span className="text-purple-400">Housekeeping & Payload</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-anant-mild">Protocol</span>
                      <span className="text-purple-400">AX.25 Framing</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-anant-mild">Processing</span>
                      <span className="text-purple-400">OBC Integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 bg-anant-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-poppins mb-8 text-anant-pure">
                Mission Applications
              </h2>
              <p className="text-anant-mild leading-relaxed mb-8">
                The TTC subsystem enables critical mission operations including real-time telemetry monitoring, command execution, and payload data downlink. It ensures continuous communication with the ground station for mission success and scientific data collection.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-anant-secondary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Command Operations</h3>
                  <p className="text-anant-mild">
                    Reliable uplink capability for mission commands, configuration changes, and emergency procedures.
                  </p>
                </div>
                <div className="bg-anant-secondary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Data Downlink</h3>
                  <p className="text-anant-mild">
                    Efficient transmission of scientific data, housekeeping information, and system status updates.
                  </p>
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
