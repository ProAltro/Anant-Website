import type { Route } from "./+types/eps";
import SubsystemLayout, { SectionHeading } from "../../components/SubsystemPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "EPS - Electrical Power System | Team Anant" },
    { name: "description", content: "Comprehensive electrical power management system for Team Anant's nanosatellite, featuring solar panel control, battery management, and power distribution." },
    { name: "keywords", content: "EPS, Electrical Power System, solar panels, battery management, power distribution, nanosatellite" },
  ];
}

export default function EPS() {
  return (
    <SubsystemLayout
      code="EPS"
      subtitle="Electrical Power System"
      description="Advanced power management with efficient generation, storage, and distribution for continuous operations."
    >
      {/* Overview */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div className="space-card p-6">
            <h3 className="text-xl font-semibold text-anant-pure mb-3">System Overview</h3>
            <p className="text-anant-mild leading-relaxed mb-4">
              The EPS generates, stores, and distributes electrical power across the mission. It handles demanding payload requirements while maintaining reliability in space.
            </p>
            <p className="text-anant-mild leading-relaxed">
              High-efficiency solar arrays, battery management, and intelligent distribution ensure operation during sunlit and eclipse periods.
            </p>
          </div>
          <div className="sleek-card p-6">
            <h4 className="text-lg font-semibold text-anant-pure mb-3">Key Specifications</h4>
            <div className="space-y-3">
              <div className="flex justify-between"><span className="text-anant-mild">Solar Panel Efficiency</span><span className="text-anant-accent">28–30%</span></div>
              <div className="flex justify-between"><span className="text-anant-mild">Battery Capacity</span><span className="text-anant-accent">20–25 Wh</span></div>
              <div className="flex justify-between"><span className="text-anant-mild">Power Generation</span><span className="text-anant-accent">8–12 W</span></div>
              <div className="flex justify-between"><span className="text-anant-mild">Regulated Rails</span><span className="text-anant-accent">3.3V, 5V, 12V</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="py-12">
        <SectionHeading>System Components</SectionHeading>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-card p-6">
            <h3 className="text-xl font-semibold text-anant-pure mb-2">Solar Panels</h3>
            <p className="text-anant-mild">High-efficiency triple-junction arrays, deployable for maximum collection.</p>
          </div>
          <div className="space-card p-6">
            <h3 className="text-xl font-semibold text-anant-pure mb-2">Battery Management</h3>
            <p className="text-anant-mild">Li‑ion pack with intelligent charge/discharge management and protection.</p>
          </div>
          <div className="space-card p-6">
            <h3 className="text-xl font-semibold text-anant-pure mb-2">Power Distribution</h3>
            <p className="text-anant-mild">Regulated rails with overcurrent protection and housekeeping telemetry.</p>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-12">
        <SectionHeading>Technical Implementation</SectionHeading>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="sleek-card p-6">
            <h4 className="text-lg font-semibold text-anant-pure mb-3">Power Generation</h4>
            <ul className="space-y-2 text-anant-mild">
              <li>• Triple‑junction GaAs cells (28–30%)</li>
              <li>• Deployable panel design for surface area</li>
              <li>• Maximum Power Point Tracking (MPPT)</li>
              <li>• Radiation‑tolerant components</li>
            </ul>
          </div>
          <div className="sleek-card p-6">
            <h4 className="text-lg font-semibold text-anant-pure mb-3">Power Management</h4>
            <ul className="space-y-2 text-anant-mild">
              <li>• 2s2p Li‑ion pack (20–25 Wh)</li>
              <li>• Charge/discharge monitoring & protection</li>
              <li>• Multiple regulated outputs (3.3V/5V/12V)</li>
              <li>• Overcurrent and thermal safeguards</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission Performance */}
      <section className="py-12">
        <SectionHeading>Mission Performance</SectionHeading>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="glassy-card p-6 text-center">
            <div className="text-2xl font-bold text-anant-accent mb-1">99.9%</div>
            <div className="text-anant-mild">System Reliability</div>
          </div>
          <div className="glassy-card p-6 text-center">
            <div className="text-2xl font-bold text-anant-accent mb-1">8–12 W</div>
            <div className="text-anant-mild">Power Generation</div>
          </div>
          <div className="glassy-card p-6 text-center">
            <div className="text-2xl font-bold text-anant-accent mb-1">2+ Years</div>
            <div className="text-anant-mild">Mission Duration</div>
          </div>
        </div>
      </section>
    </SubsystemLayout>
  );
}
