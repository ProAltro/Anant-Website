import type { Route } from "./+types/obc";
import SubsystemLayout, { SectionHeading } from "../../components/SubsystemPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "OBC - On-Board Computer | Team Anant" },
    { name: "description", content: "Advanced on-board computer system managing all satellite operations, data processing, command execution, and mission control for Team Anant's nanosatellite." },
    { name: "keywords", content: "OBC, On-Board Computer, mission control, data processing, command execution, nanosatellite" },
  ];
}

export default function OBC() {
  return (
    <SubsystemLayout
      code="OBC"
      subtitle="On-Board Computer"
      description="Central computing that schedules payloads, manages telemetry, and coordinates all subsystems with fault tolerance."
    >
      {/* Overview */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div className="space-card p-6">
            <h3 className="text-xl font-semibold text-anant-pure mb-3">System Overview</h3>
            <p className="text-anant-mild leading-relaxed mb-4">
              The OBC executes mission logic, coordinates subsystems, and manages data acquisition and storage, optimizing payload operation and resources.
            </p>
            <p className="text-anant-mild leading-relaxed">
              Designed for reliability with watchdogs, redundancy, and robust error handling to ensure continuous operation.
            </p>
          </div>
          <div className="sleek-card p-6">
            <h4 className="text-lg font-semibold text-anant-pure mb-3">Key Specifications</h4>
            <div className="space-y-3">
              <div className="flex justify-between"><span className="text-anant-mild">Processor</span><span className="text-anant-accent">ARM Cortex‑M7 / RISC‑V</span></div>
              <div className="flex justify-between"><span className="text-anant-mild">Memory</span><span className="text-anant-accent">512 KB–2 MB SRAM</span></div>
              <div className="flex justify-between"><span className="text-anant-mild">Storage</span><span className="text-anant-accent">8–32 GB Flash</span></div>
              <div className="flex justify-between"><span className="text-anant-mild">Platform</span><span className="text-anant-accent">RTOS / Bare‑metal</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="py-12">
        <SectionHeading>System Components</SectionHeading>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-card p-6">
            <h3 className="text-xl font-semibold text-anant-pure mb-2">Processing Core</h3>
            <p className="text-anant-mild">Radiation‑tolerant MCU/processor handling real‑time operations and scheduling.</p>
          </div>
          <div className="space-card p-6">
            <h3 className="text-xl font-semibold text-anant-pure mb-2">Memory & Storage</h3>
            <p className="text-anant-mild">ECC‑protected memory with non‑volatile storage for reliable retention.</p>
          </div>
          <div className="space-card p-6">
            <h3 className="text-xl font-semibold text-anant-pure mb-2">I/O and Interfaces</h3>
            <p className="text-anant-mild">Multiple buses and protocols for subsystem integration and payload control.</p>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-12">
        <SectionHeading>Technical Implementation</SectionHeading>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="sleek-card p-6">
            <h4 className="text-lg font-semibold text-anant-pure mb-3">Software Architecture</h4>
            <ul className="space-y-2 text-anant-mild">
              <li>• Real‑time scheduler with priorities</li>
              <li>• Fault detection, isolation, and recovery</li>
              <li>• Telemetry acquisition and logging</li>
              <li>• Command handling with validation</li>
            </ul>
          </div>
          <div className="sleek-card p-6">
            <h4 className="text-lg font-semibold text-anant-pure mb-3">Hardware Platform</h4>
            <ul className="space-y-2 text-anant-mild">
              <li>• Cortex‑M7 / RISC‑V with FPU</li>
              <li>• ECC memory and flash</li>
              <li>• Watchdog timers, brown‑out detection</li>
              <li>• Redundant comms links</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission Operations */}
      <section className="py-12">
        <SectionHeading>Mission Operations</SectionHeading>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="glassy-card p-6 text-center">
            <div className="text-2xl font-bold text-anant-accent mb-1">24/7</div>
            <div className="text-anant-mild">Autonomous Ops</div>
          </div>
          <div className="glassy-card p-6 text-center">
            <div className="text-2xl font-bold text-anant-accent mb-1">1000+</div>
            <div className="text-anant-mild">Commands Executed</div>
          </div>
          <div className="glassy-card p-6 text-center">
            <div className="text-2xl font-bold text-anant-accent mb-1">99.9%</div>
            <div className="text-anant-mild">Uptime Target</div>
          </div>
        </div>
      </section>
    </SubsystemLayout>
  );
}
