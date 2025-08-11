import type { Route } from "./+types/sts";
import SubsystemLayout, { SectionHeading } from "../../components/SubsystemPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "STS - Structural and Thermal System | Team Anant" },
    { name: "description", content: "Advanced structural and thermal design system providing mechanical support, thermal management, and environmental protection for nanosatellite operations." },
    { name: "keywords", content: "STS, Structure, Thermal, Aluminum 6061, MLI, passive thermal control, CubeSat, nanosatellite" },
  ];
}

export default function STS() {
  return (
    <SubsystemLayout
      code="STS"
      subtitle="Structures and Thermal Systems"
      description="Mechanical integrity and thermal stability across mission phases with compliant structures and passive/active control."
    >
      {/* Overview */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div className="space-card p-6">
            <h3 className="text-xl font-semibold text-anant-pure mb-3">System Overview</h3>
            <p className="text-anant-mild leading-relaxed mb-4">
              STS ensures structural integrity through launch and precise alignment in orbit, while thermal control manages heat in extreme environments.
            </p>
            <p className="text-anant-mild leading-relaxed">
              Material selection, joint design, and thermal interfaces are optimized via analysis and testing for the mission lifecycle.
            </p>
          </div>
          <div className="sleek-card p-6">
            <h4 className="text-lg font-semibold text-anant-pure mb-3">Key Specifications</h4>
            <div className="space-y-3">
              <div className="flex justify-between"><span className="text-anant-mild">Structure</span><span className="text-anant-accent">CubeSat 1U/2U Frame</span></div>
              <div className="flex justify-between"><span className="text-anant-mild">Materials</span><span className="text-anant-accent">Al 6061‑T6, CFRP</span></div>
              <div className="flex justify-between"><span className="text-anant-mild">Thermal</span><span className="text-anant-accent">Passive + Heaters</span></div>
              <div className="flex justify-between"><span className="text-anant-mild">Survivability</span><span className="text-anant-accent">‑20°C to +60°C</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="py-12">
        <SectionHeading>System Components</SectionHeading>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-card p-6">
            <h3 className="text-xl font-semibold text-anant-pure mb-2">Primary Structure</h3>
            <p className="text-anant-mild">CubeSat‑compliant frame optimized for stiffness, strength, and alignment.</p>
          </div>
          <div className="space-card p-6">
            <h3 className="text-xl font-semibold text-anant-pure mb-2">Thermal Control</h3>
            <p className="text-anant-mild">MLI, thermal straps, and localized heaters maintain component temperatures.</p>
          </div>
          <div className="space-card p-6">
            <h3 className="text-xl font-semibold text-anant-pure mb-2">Mechanisms</h3>
            <p className="text-anant-mild">Deployment and structural interfaces designed for reliability and simplicity.</p>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-12">
        <SectionHeading>Technical Implementation</SectionHeading>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="sleek-card p-6">
            <h4 className="text-lg font-semibold text-anant-pure mb-3">Structural Analysis</h4>
            <ul className="space-y-2 text-anant-mild">
              <li>• FEA for modal and static loads</li>
              <li>• Vibration and shock testing</li>
              <li>• Mass budget optimization and C.G. management</li>
              <li>• Deployer‑compliant interfaces</li>
            </ul>
          </div>
          <div className="sleek-card p-6">
            <h4 className="text-lg font-semibold text-anant-pure mb-3">Thermal Design</h4>
            <ul className="space-y-2 text-anant-mild">
              <li>• Transient and steady‑state modelling</li>
              <li>• Heater sizing and control</li>
              <li>• MLI optimization</li>
              <li>• Thermal straps and conductive paths</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission Readiness */}
      <section className="py-12">
        <SectionHeading>Mission Readiness</SectionHeading>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="glassy-card p-6 text-center">
            <div className="text-2xl font-bold text-anant-accent mb-1">FEA</div>
            <div className="text-anant-mild">Validated</div>
          </div>
          <div className="glassy-card p-6 text-center">
            <div className="text-2xl font-bold text-anant-accent mb-1">Thermal</div>
            <div className="text-anant-mild">Modelled</div>
          </div>
          <div className="glassy-card p-6 text-center">
            <div className="text-2xl font-bold text-anant-accent mb-1">Testing</div>
            <div className="text-anant-mild">Planned</div>
          </div>
        </div>
      </section>
    </SubsystemLayout>
  );
}
