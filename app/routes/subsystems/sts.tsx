import type { Route } from "./+types/sts";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "STS - Structural and Thermal System | Team Anant" },
    { name: "description", content: "Advanced structural and thermal design system providing mechanical support, thermal management, and environmental protection for nanosatellite operations." },
    { name: "keywords", content: "STS, Structure, Thermal, Aluminum 6061, MLI, passive thermal control, CubeSat, nanosatellite" },
  ];
}

export default function STS() {
  return (
    <div className="min-h-screen bg-anant-dark">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-orange-500 to-orange-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6 text-white">
                STS
              </h1>
              <p className="text-xl text-orange-100 mb-4">
                Structural and Thermal System
              </p>
              <p className="text-lg text-orange-100 max-w-2xl mx-auto">
                Advanced structural design and thermal management system providing mechanical support and temperature control for harsh space environments
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
                    The Structural and Thermal System (STS) is designed to protect internal components during both launch and space operations. Built from aluminum 6061-T6, the structure follows the 3U CubeSat standard and provides mechanical support while minimizing mass.
                  </p>
                  <p className="text-anant-mild leading-relaxed">
                    The thermal subsystem ensures that the satellite's components remain within their operational temperature limits using passive thermal control strategies such as MLI insulation, black anodized radiators, and thermal straps combined with active heating elements.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="bg-anant-secondary rounded-lg p-8 text-center">
                    <div className="text-4xl mb-4">🏗️</div>
                    <h3 className="text-xl font-bold text-anant-pure mb-2">3U CubeSat Standard</h3>
                    <p className="text-anant-mild">100×100×200 mm³</p>
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
                  <div className="text-3xl mb-4">⚙️</div>
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Aluminum 6061-T6</h3>
                  <p className="text-anant-mild">
                    High-strength aluminum alloy providing excellent strength-to-weight ratio, thermal conductivity, and machinability for space applications.
                  </p>
                </div>
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="text-3xl mb-4">🛡️</div>
                  <h3 className="text-xl font-bold text-anant-pure mb-4">MLI Insulation</h3>
                  <p className="text-anant-mild">
                    Multi-layer insulation providing superior thermal protection against extreme temperature variations in space environment.
                  </p>
                </div>
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="text-3xl mb-4">🔗</div>
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Antenna Deployment</h3>
                  <p className="text-anant-mild">
                    Sophisticated deployment system using nichrome wire burn mechanism with dual redundancy for reliable antenna deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Structural Design */}
        <section className="py-16 bg-anant-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold font-poppins mb-12 text-center text-anant-pure">
                Structural Design
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-anant-secondary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Structure Categories</h3>
                  <ul className="text-anant-mild space-y-2">
                    <li>• <strong>Primary Structure:</strong> Major load path between components and launch vehicle</li>
                    <li>• <strong>Secondary Structure:</strong> Support beams, trusses, and solar panel mounting</li>
                    <li>• <strong>Tertiary Structure:</strong> Component housing and mounting brackets</li>
                  </ul>
                </div>
                <div className="bg-anant-secondary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Material Properties</h3>
                  <ul className="text-anant-mild space-y-2">
                    <li>• Density: 2700 kg/m³</li>
                    <li>• Young's Modulus: 68.9 GPa</li>
                    <li>• Yield Strength: 320 MPa</li>
                    <li>• Excellent thermal conductivity</li>
                    <li>• Superior machinability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Thermal Management */}
        <section className="py-16 bg-anant-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold font-poppins mb-12 text-center text-anant-pure">
                Thermal Management
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-anant-pure mb-4">Temperature Control</h3>
                  <p className="text-anant-mild leading-relaxed mb-6">
                    Satellites are subjected to extreme temperature variations in space, ranging from -50°C to +80°C. The thermal subsystem maintains operational limits for all components, especially the biological payload requiring 20-40°C range.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-anant-mild">Multi-layer insulation (MLI)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-anant-mild">Black anodized radiators</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-anant-mild">Thermal straps and conduction</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-anant-mild">Active heating elements</span>
                    </div>
                  </div>
                </div>
                <div className="bg-anant-primary rounded-lg p-8">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Thermal Requirements</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-anant-mild">Payload</span>
                      <span className="text-orange-400">20-40°C</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-anant-mild">Battery</span>
                      <span className="text-orange-400">0-45°C</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-anant-mild">Electronics</span>
                      <span className="text-orange-400">-40-85°C</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-anant-mild">Solar Panels</span>
                      <span className="text-orange-400">-40-80°C</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mass Budget */}
        <section className="py-16 bg-anant-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold font-poppins mb-12 text-center text-anant-pure">
                Mass Budget
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-anant-secondary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Structural Components</h3>
                  <ul className="text-anant-mild space-y-3">
                    <li className="flex justify-between">
                      <span>Satellite Frame</span>
                      <span className="text-orange-400">350g</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Antenna System</span>
                      <span className="text-orange-400">25g</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Fasteners (28 units)</span>
                      <span className="text-orange-400">42.5g</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Face Plates</span>
                      <span className="text-orange-400">27g</span>
                    </li>
                    <li className="flex justify-between border-t border-anant-mild pt-2">
                      <span><strong>Total Structural</strong></span>
                      <span className="text-orange-400 font-bold">444.5g</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-anant-secondary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Overall Mass Budget</h3>
                  <ul className="text-anant-mild space-y-3">
                    <li className="flex justify-between">
                      <span>Bus Mass</span>
                      <span className="text-orange-400">&lt; 3 kg</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Payload Mass</span>
                      <span className="text-orange-400">&lt; 0.5 kg</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Structure Contribution</span>
                      <span className="text-orange-400">~15%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Launch Configuration</span>
                      <span className="text-orange-400">3U CubeSat</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Analysis */}
        <section className="py-16 bg-anant-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold font-poppins mb-12 text-center text-anant-pure">
                Dynamic Analysis
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-anant-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Modal Analysis</h3>
                  <p className="text-anant-mild mb-4">
                    Determines vibration characteristics and natural frequencies of the structure. First natural frequency must be greater than 120Hz for launch compatibility.
                  </p>
                  <ul className="text-anant-mild space-y-2">
                    <li>• Natural frequency calculation</li>
                    <li>• Mode shape determination</li>
                    <li>• Resonance avoidance</li>
                    <li>• Structural optimization</li>
                  </ul>
                </div>
                <div className="bg-anant-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Launch Loads</h3>
                  <p className="text-anant-mild mb-4">
                    Analysis of static and dynamic loading conditions during launch phase including vibrations, accelerations, and thermal expansion.
                  </p>
                  <ul className="text-anant-mild space-y-2">
                    <li>• Random vibration analysis</li>
                    <li>• Sine vibration testing</li>
                    <li>• Shock load evaluation</li>
                    <li>• Thermal stress analysis</li>
                  </ul>
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
                The STS subsystem provides the foundation for all mission operations by ensuring mechanical integrity during launch and thermal stability in space. It enables safe deployment, protects sensitive components, and maintains operational temperatures for the biological payload.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-anant-secondary rounded-lg p-6">
                  <div className="text-3xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Launch Protection</h3>
                  <p className="text-anant-mild">
                    Withstands launch vibrations, accelerations, and deployment forces while protecting internal components.
                  </p>
                </div>
                <div className="bg-anant-secondary rounded-lg p-6">
                  <div className="text-3xl mb-4">🌡️</div>
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Thermal Control</h3>
                  <p className="text-anant-mild">
                    Maintains optimal operating temperatures for biological payload and electronic components.
                  </p>
                </div>
                <div className="bg-anant-secondary rounded-lg p-6">
                  <div className="text-3xl mb-4">📡</div>
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Deployment System</h3>
                  <p className="text-anant-mild">
                    Reliable antenna deployment mechanism enabling communication with ground stations.
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
