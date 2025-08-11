import type { Route } from "./+types/adcs";
import SubsystemLayout, { SectionHeading } from "../../components/SubsystemPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ADCS - Attitude Determination and Control System | Team Anant" },
    { name: "description", content: "Advanced attitude determination and control system using B-dot controller and magnetorquers for precise satellite orientation and detumbling operations." },
    { name: "keywords", content: "ADCS, Attitude Control, B-dot controller, magnetorquers, IMU, GPS, detumbling, nanosatellite" },
  ];
}

export default function ADCS() {
  return (
    <SubsystemLayout
      code="ADCS"
      subtitle="Attitude Determination and Control System"
      description="Precision attitude determination and control using B-dot controller and magnetorquers for detumbling and orientation control."
    >
      {/* Overview */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-card p-6">
              <h3 className="text-xl font-semibold text-anant-pure mb-3">System Overview</h3>
              <p className="text-anant-mild leading-relaxed mb-4">
                The ADCS determines the satellite's orientation and applies corrective action. Sensors like the BNO085 IMU and GPS provide the inputs to estimate attitude and rates.
              </p>
              <p className="text-anant-mild leading-relaxed">
                The primary control algorithm is the B-dot controller for post-deployment detumbling using magnetorquers. Outputs are driven via PWM through the OBC.
              </p>
            </div>
            <div className="sleek-card p-6 text-center">
              <h4 className="text-lg font-semibold text-anant-pure mb-1">Precision Control</h4>
              <p className="text-anant-mild">B-dot algorithm with magnetic actuation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section className="py-12">
        <SectionHeading>Key Components</SectionHeading>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="space-card p-6">
            <h3 className="text-xl font-semibold text-anant-pure mb-2">BNO085 IMU</h3>
            <p className="text-anant-mild">9-axis IMU with integrated sensor fusion for accurate attitude estimation.</p>
          </div>
          <div className="space-card p-6">
            <h3 className="text-xl font-semibold text-anant-pure mb-2">GPS Module</h3>
            <p className="text-anant-mild">Precision position and timing supporting attitude determination and ops.</p>
          </div>
          <div className="space-card p-6">
            <h3 className="text-xl font-semibold text-anant-pure mb-2">Magnetorquers</h3>
            <p className="text-anant-mild">Electromagnetic torque rods for detumbling and coarse attitude control.</p>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-12">
        <SectionHeading>Technical Specifications</SectionHeading>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="sleek-card p-6">
            <h4 className="text-lg font-semibold text-anant-pure mb-3">Sensors</h4>
            <ul className="text-anant-mild space-y-2">
              <li>• BNO085 IMU: 9-axis sensor fusion</li>
              <li>• GPS Module: Position determination</li>
              <li>• Magnetometer: Magnetic field sensing</li>
              <li>• Accelerometer: Linear acceleration</li>
              <li>• Gyroscope: Angular velocity</li>
            </ul>
          </div>
          <div className="sleek-card p-6">
            <h4 className="text-lg font-semibold text-anant-pure mb-3">Actuators</h4>
            <ul className="text-anant-mild space-y-2">
              <li>• Magnetorquer (Top): Single axis control</li>
              <li>• Magnetorquers (Side): Dual axis control</li>
              <li>• PWM Control: Variable torque generation</li>
              <li>• Power: Low power consumption</li>
              <li>• Mass: 70g total magnetorquer mass</li>
            </ul>
          </div>
        </div>
      </section>

      {/* B-dot Controller */}
      <section className="py-12">
        <SectionHeading>B-dot Control Algorithm</SectionHeading>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-start">
          <div className="space-card p-6">
            <h4 className="text-lg font-semibold text-anant-pure mb-3">Algorithm Overview</h4>
            <p className="text-anant-mild mb-4">
              Uses dB/dt to infer angular rates and applies corrective torques through magnetorquers.
            </p>
            <ul className="text-anant-mild space-y-2">
              <li>• Magnetic field rate measurement</li>
              <li>• Angular velocity estimation</li>
              <li>• Torque calculation and application</li>
              <li>• Continuous stabilization</li>
            </ul>
          </div>
          <div className="sleek-card p-6">
            <h4 className="text-lg font-semibold text-anant-pure mb-3">Control Loop</h4>
            <div className="space-y-3">
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
      </section>

      {/* Mission Operations */}
      <section className="py-12">
        <SectionHeading>Mission Operations</SectionHeading>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="space-card p-6">
            <h4 className="text-lg font-semibold text-anant-pure mb-3">Detumbling Phase</h4>
            <p className="text-anant-mild mb-3">Stabilizes tumbling motion post deployment.</p>
            <ul className="text-anant-mild space-y-2">
              <li>• Rapid angular velocity reduction</li>
              <li>• Magnetic field rate monitoring</li>
              <li>• Continuous torque application</li>
              <li>• Stabilization achievement</li>
            </ul>
          </div>
          <div className="space-card p-6">
            <h4 className="text-lg font-semibold text-anant-pure mb-3">Attitude Maintenance</h4>
            <p className="text-anant-mild mb-3">Long-term attitude control for mission ops.</p>
            <ul className="text-anant-mild space-y-2">
              <li>• Continuous attitude monitoring</li>
              <li>• Disturbance compensation</li>
              <li>• Payload pointing support</li>
              <li>• Energy-efficient operations</li>
            </ul>
          </div>
        </div>
      </section>
    </SubsystemLayout>
  );
}
