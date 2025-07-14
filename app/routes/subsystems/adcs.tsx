import type { Route } from "./+types/adcs";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ADCS - Attitude Determination and Control System | Team Anant" },
    { name: "description", content: "Advanced attitude determination and control system using B-dot controller and magnetorquers for precise satellite orientation and detumbling operations." },
    { name: "keywords", content: "ADCS, Attitude Control, B-dot controller, magnetorquers, IMU, GPS, detumbling, nanosatellite" },
  ];
}

export default function ADCS() {
  return (
    <div className="min-h-screen bg-anant-dark">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-500 to-blue-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6 text-white">
                ADCS
              </h1>
              <p className="text-xl text-blue-100 mb-4">
                Attitude Determination and Control System
              </p>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Precision attitude determination and control system using B-dot controller and magnetorquers for satellite orientation and detumbling operations
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
                    The Attitude Determination and Control System (ADCS) determines the satellite's orientation and applies corrective action if needed. Sensors like the BNO085 IMU and GPS module provide input for determining the attitude.
                  </p>
                  <p className="text-anant-mild leading-relaxed">
                    The primary control algorithm is the B-dot controller, which is used for detumbling post-deployment using magnetorquers. All ADCS components are interfaced with the OBC, where the algorithm is implemented and outputs are used to generate PWM signals for actuator control.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="bg-anant-secondary rounded-lg p-8 text-center">
                    <div className="text-4xl mb-4">🧭</div>
                    <h3 className="text-xl font-bold text-anant-pure mb-2">Precision Control</h3>
                    <p className="text-anant-mild">B-dot Algorithm</p>
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
                  <div className="text-3xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-anant-pure mb-4">BNO085 IMU</h3>
                  <p className="text-anant-mild">
                    Advanced 9-axis inertial measurement unit providing precise attitude data with integrated sensor fusion algorithms.
                  </p>
                </div>
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="text-3xl mb-4">🛰️</div>
                  <h3 className="text-xl font-bold text-anant-pure mb-4">GPS Module</h3>
                  <p className="text-anant-mild">
                    High-precision GPS receiver for position determination and orbital mechanics calculations supporting attitude control.
                  </p>
                </div>
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="text-3xl mb-4">🧲</div>
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Magnetorquers</h3>
                  <p className="text-anant-mild">
                    Electromagnetic actuators for torque generation using Earth's magnetic field for attitude control and detumbling.
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
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Sensors</h3>
                  <ul className="text-anant-mild space-y-2">
                    <li>• BNO085 IMU: 9-axis sensor fusion</li>
                    <li>• GPS Module: Position determination</li>
                    <li>• Magnetometer: Magnetic field sensing</li>
                    <li>• Accelerometer: Linear acceleration</li>
                    <li>• Gyroscope: Angular velocity</li>
                  </ul>
                </div>
                <div className="bg-anant-secondary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Actuators</h3>
                  <ul className="text-anant-mild space-y-2">
                    <li>• Magnetorquer (Top): Single axis control</li>
                    <li>• Magnetorquers (Side): Dual axis control</li>
                    <li>• PWM Control: Variable torque generation</li>
                    <li>• Power: Low power consumption</li>
                    <li>• Mass: 70g total magnetorquer mass</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* B-dot Controller */}
        <section className="py-16 bg-anant-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold font-poppins mb-12 text-center text-anant-pure">
                B-dot Control Algorithm
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-anant-pure mb-4">Algorithm Overview</h3>
                  <p className="text-anant-mild leading-relaxed mb-6">
                    The B-dot controller is the primary control algorithm used for detumbling post-deployment. It uses the rate of change of the magnetic field to determine the satellite's angular velocity and applies corrective torques through magnetorquers.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-anant-mild">Magnetic field rate measurement</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-anant-mild">Angular velocity estimation</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-anant-mild">Torque calculation and application</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-anant-mild">Continuous stabilization</span>
                    </div>
                  </div>
                </div>
                <div className="bg-anant-primary rounded-lg p-8">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Control Loop</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-anant-mild">Sensor Input</span>
                      <span className="text-blue-400">BNO085 IMU</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-anant-mild">Processing</span>
                      <span className="text-blue-400">OBC Algorithm</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-anant-mild">Output</span>
                      <span className="text-blue-400">PWM Signals</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-anant-mild">Actuators</span>
                      <span className="text-blue-400">Magnetorquers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Operations */}
        <section className="py-16 bg-anant-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold font-poppins mb-12 text-center text-anant-pure">
                Mission Operations
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-anant-secondary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Detumbling Phase</h3>
                  <p className="text-anant-mild mb-4">
                    Initial phase after deployment to stabilize the satellite's tumbling motion caused by separation from the launch vehicle.
                  </p>
                  <ul className="text-anant-mild space-y-2">
                    <li>• Rapid angular velocity reduction</li>
                    <li>• Magnetic field rate monitoring</li>
                    <li>• Continuous torque application</li>
                    <li>• Stabilization achievement</li>
                  </ul>
                </div>
                <div className="bg-anant-secondary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Attitude Maintenance</h3>
                  <p className="text-anant-mild mb-4">
                    Long-term attitude control for mission operations and payload pointing requirements.
                  </p>
                  <ul className="text-anant-mild space-y-2">
                    <li>• Continuous attitude monitoring</li>
                    <li>• Disturbance compensation</li>
                    <li>• Payload pointing support</li>
                    <li>• Energy-efficient operations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 bg-anant-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-poppins mb-8 text-anant-pure">
                Mission Applications
              </h2>
              <p className="text-anant-mild leading-relaxed mb-8">
                The ADCS subsystem ensures proper satellite orientation for optimal payload operation, communication with ground stations, and overall mission success. It provides the foundation for all attitude-dependent operations.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="text-3xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Payload Pointing</h3>
                  <p className="text-anant-mild">
                    Precise attitude control for biological experiment optimal conditions and data collection.
                  </p>
                </div>
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="text-3xl mb-4">📡</div>
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Communication</h3>
                  <p className="text-anant-mild">
                    Antenna pointing optimization for reliable ground station communication links.
                  </p>
                </div>
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="text-3xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Power Generation</h3>
                  <p className="text-anant-mild">
                    Solar panel orientation for maximum power generation and energy efficiency.
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
