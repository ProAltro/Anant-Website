import type { Route } from "./+types/payload";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Payload - Biological Experiment | Team Anant" },
    { name: "description", content: "Advanced biological experiment payload studying Cutibacterium acnes growth in microgravity using microfluidic lab-on-chip technology with fluorescence detection." },
    { name: "keywords", content: "Payload, biological experiment, Cutibacterium acnes, microfluidics, lab-on-chip, fluorescence, microgravity, space biology" },
  ];
}

export default function Payload() {
  return (
    <div className="min-h-screen bg-anant-dark">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-teal-500 to-teal-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6 text-white">
                Payload
              </h1>
              <p className="text-xl text-teal-100 mb-4">
                Biological Experiment System
              </p>
              <p className="text-lg text-teal-100 max-w-2xl mx-auto">
                Advanced biological experiment studying Cutibacterium acnes growth in microgravity using microfluidic lab-on-chip technology with fluorescence detection
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
                    Experiment Overview
                  </h2>
                  <p className="text-anant-mild leading-relaxed mb-6">
                    The Payload Subsystem is designed to conduct a biological experiment in space, focusing on the growth and behavior of Cutibacterium acnes (C. acnes) under microgravity conditions. This bacterium, a key component of the human skin microbiome and associated with acne vulgaris, will be studied to understand microbial behavior in extraterrestrial environments.
                  </p>
                  <p className="text-anant-mild leading-relaxed">
                    The experiment utilizes the Doubleflow Standard Chip from Beonchip, a microfluidic device that enables precise mechanical fluid transfer and effective waste management. This chip will house the C. acnes culture, ensuring controlled nutrient delivery and waste removal.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="bg-anant-secondary rounded-lg p-8 text-center">
                    <div className="text-4xl mb-4">🔬</div>
                    <h3 className="text-xl font-bold text-anant-pure mb-2">Lab-on-Chip</h3>
                    <p className="text-anant-mild">Microfluidic Technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Components */}
        <section className="py-16 bg-anant-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold font-poppins mb-12 text-center text-anant-pure">
                Key Components
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="text-3xl mb-4">🧪</div>
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Microfluidic Chip</h3>
                  <p className="text-anant-mild">
                    BE-Transflow chip integrating culture well with microfluidic channels for precise nutrient delivery and waste removal.
                  </p>
                </div>
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="text-3xl mb-4">💡</div>
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Fluorescence Detection</h3>
                  <p className="text-anant-mild">
                    488nm LED with S1336 photodiode and 520nm bandpass filter for fluorescence-based enzymatic activity monitoring.
                  </p>
                </div>
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="text-3xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Optical Density</h3>
                  <p className="text-anant-mild">
                    600nm LED paired with S1336 photodiode for OD600 measurements to track bacterial growth over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experimental Design */}
        <section className="py-16 bg-anant-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold font-poppins mb-12 text-center text-anant-pure">
                Experimental Design
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-anant-secondary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Cutibacterium acnes</h3>
                  <ul className="text-anant-mild space-y-2">
                    <li>• Gram-positive, anaerobic bacterium</li>
                    <li>• Optimal growth: 30-37°C, pH 6.0-7.0</li>
                    <li>• Doubling time: ~5.1 hours</li>
                    <li>• Requires organic carbon sources</li>
                    <li>• Key skin microbiome component</li>
                  </ul>
                </div>
                <div className="bg-anant-secondary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Growth Medium</h3>
                  <ul className="text-anant-mild space-y-2">
                    <li>• Tryptic Soy Broth (TSB) medium</li>
                    <li>• Buffered pH control (6.0-7.0)</li>
                    <li>• Fluorescent substrates for assays</li>
                    <li>• Pre-reduced oxygen content</li>
                    <li>• Continuous nutrient circulation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Control */}
        <section className="py-16 bg-anant-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold font-poppins mb-12 text-center text-anant-pure">
                Environmental Control
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-anant-pure mb-4">Controlled Parameters</h3>
                  <p className="text-anant-mild leading-relaxed mb-6">
                    The experiment maintains precise environmental conditions critical for bacterial survival and growth. Temperature control between 20-37°C ensures cell viability, while pH buffering and oxygen management create optimal growth conditions.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      <span className="text-anant-mild">Temperature: 20-37°C range</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      <span className="text-anant-mild">pH: 6.0-7.0 buffered medium</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      <span className="text-anant-mild">Oxygen: Low-oxygen environment</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      <span className="text-anant-mild">Nutrient flow: Continuous circulation</span>
                    </div>
                  </div>
                </div>
                <div className="bg-anant-primary rounded-lg p-8">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Sensors & Monitoring</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-anant-mild">Temperature</span>
                      <span className="text-teal-400">TMP117 Sensor</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-anant-mild">Radiation</span>
                      <span className="text-teal-400">RadSense2 Dosimeter</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-anant-mild">Growth</span>
                      <span className="text-teal-400">OD600 Measurement</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-anant-mild">Enzyme Activity</span>
                      <span className="text-teal-400">Fluorescence Assay</span>
                    </div>
                  </div>
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
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Hardware Components</h3>
                  <ul className="text-anant-mild space-y-2">
                    <li>• Microfluidic Chip: BE-Transflow</li>
                    <li>• Peristaltic Pump: 200mW intermittent</li>
                    <li>• LEDs: 600nm (OD) + 488nm (Fluorescence)</li>
                    <li>• Photodiodes: Dual S1336 sensors</li>
                    <li>• Filter: 520nm bandpass</li>
                    <li>• Controller: Arduino Nano equivalent</li>
                  </ul>
                </div>
                <div className="bg-anant-secondary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Power & Performance</h3>
                  <ul className="text-anant-mild space-y-2">
                    <li>• Total Mass: &lt; 0.5 kg</li>
                    <li>• Dimensions: 100×100×100 mm³</li>
                    <li>• Power: ~400mW peak consumption</li>
                    <li>• Data Rate: 10-minute intervals</li>
                    <li>• Mission Duration: ~1 year</li>
                    <li>• Operating Temperature: 20-37°C</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Automation & Control */}
        <section className="py-16 bg-anant-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold font-poppins mb-12 text-center text-anant-pure">
                Automation & Control
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-anant-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Automated Processes</h3>
                  <p className="text-anant-mild mb-4">
                    The microcontroller manages all automated experiment processes, ensuring optimal conditions and continuous data collection.
                  </p>
                  <ul className="text-anant-mild space-y-2">
                    <li>• Fluid transfer control via peristaltic pump</li>
                    <li>• Pulsed LED operation for measurements</li>
                    <li>• Automated data collection and logging</li>
                    <li>• Operating mode management</li>
                  </ul>
                </div>
                <div className="bg-anant-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Operating Modes</h3>
                  <p className="text-anant-mild mb-4">
                    The system operates in distinct modes to optimize experiment execution and data collection throughout the mission.
                  </p>
                  <ul className="text-anant-mild space-y-2">
                    <li>• Initialization: System startup and calibration</li>
                    <li>• Growth monitoring: Continuous bacterial tracking</li>
                    <li>• Data collection: Sensor data acquisition</li>
                    <li>• Maintenance: System health monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety & Validation */}
        <section className="py-16 bg-anant-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold font-poppins mb-12 text-center text-anant-pure">
                Safety & Validation
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-anant-secondary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Safety Measures</h3>
                  <ul className="text-anant-mild space-y-2">
                    <li>• Sealed microfluidic chip containment</li>
                    <li>• Pre-launch sterilization protocol</li>
                    <li>• Biological safety standard compliance</li>
                    <li>• Leak prevention mechanisms</li>
                    <li>• Contamination control measures</li>
                  </ul>
                </div>
                <div className="bg-anant-secondary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Testing & Validation</h3>
                  <ul className="text-anant-mild space-y-2">
                    <li>• Ground-based culture viability testing</li>
                    <li>• Optical measurement validation</li>
                    <li>• Fluidics system verification</li>
                    <li>• Thermal stability simulation</li>
                    <li>• End-to-end system integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scientific Impact */}
        <section className="py-16 bg-anant-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-poppins mb-8 text-anant-pure">
                Scientific Impact
              </h2>
              <p className="text-anant-mild leading-relaxed mb-8">
                This biological experiment will provide valuable insights into microbial behavior in microgravity environments, contributing to our understanding of bacterial proliferation in space and advancing microfluidic platform technology for space-based biomedical applications.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="text-3xl mb-4">🧬</div>
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Microbiology Research</h3>
                  <p className="text-anant-mild">
                    Understanding bacterial behavior in microgravity conditions for future space missions.
                  </p>
                </div>
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="text-3xl mb-4">🔬</div>
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Technology Validation</h3>
                  <p className="text-anant-mild">
                    Demonstrating microfluidic lab-on-chip platforms for space-based biological experiments.
                  </p>
                </div>
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="text-3xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Future Applications</h3>
                  <p className="text-anant-mild">
                    Advancing capabilities for biomedical research and life support systems in space.
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
