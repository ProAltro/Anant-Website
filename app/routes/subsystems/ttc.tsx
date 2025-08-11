import type { Route } from "./+types/ttc";
import SubsystemLayout, { SectionHeading } from "../../components/SubsystemPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TTC - Telemetry, Tracking and Command | Team Anant" },
    { name: "description", content: "Advanced telemetry, tracking and command system enabling reliable communication between the satellite and ground station with UHF band operations." },
    { name: "keywords", content: "TTC, Telemetry, Tracking, Command, communication, UHF, ground station, nanosatellite" },
  ];
}

export default function TTC() {
  return (
    <SubsystemLayout
      code="TTC"
      subtitle="Telemetry, Tracking and Command"
      description="Reliable UHF-band communications with AX.25 framing, deployable antennas, and ground-station integration."
    >
      {/* Overview */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div className="space-card p-6">
            <h3 className="text-xl font-semibold text-anant-pure mb-3">System Overview</h3>
            <p className="text-anant-mild leading-relaxed mb-4">
              TTC enables robust uplink and downlink. The protocol stack (AX.25 framing and encoding) runs on the OBC; RF handled by a CC1101-based transceiver with deployable antennas.
            </p>
            <p className="text-anant-mild leading-relaxed">
              Supports telecommands, configuration updates, and downlink of housekeeping and payload data.
            </p>
          </div>
          <div className="sleek-card p-6">
            <h4 className="text-lg font-semibold text-anant-pure mb-3">Key Specifications</h4>
            <div className="space-y-3">
              <div className="flex justify-between"><span className="text-anant-mild">Band</span><span className="text-anant-accent">UHF</span></div>
              <div className="flex justify-between"><span className="text-anant-mild">Transceiver</span><span className="text-anant-accent">TI CC1101</span></div>
              <div className="flex justify-between"><span className="text-anant-mild">Protocol</span><span className="text-anant-accent">AX.25</span></div>
              <div className="flex justify-between"><span className="text-anant-mild">Antennas</span><span className="text-anant-accent">Turnstile + Monopole</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <SectionHeading>Key Features</SectionHeading>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="space-card p-6">
            <h3 className="text-xl font-semibold text-anant-pure mb-2">CC1101 Transceiver</h3>
            <p className="text-anant-mild">Configurable UHF transceiver optimized via SmartRF Studio profiles.</p>
          </div>
          <div className="space-card p-6">
            <h3 className="text-xl font-semibold text-anant-pure mb-2">AX.25 Protocol</h3>
            <p className="text-anant-mild">Reliable packet framing for robust, error‑tolerant links.</p>
          </div>
          <div className="space-card p-6">
            <h3 className="text-xl font-semibold text-anant-pure mb-2">Deployable Antennas</h3>
            <p className="text-anant-mild">Turnstile and monopole with dual‑redundant nichrome deployment.</p>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-12">
        <SectionHeading>Technical Specifications</SectionHeading>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="sleek-card p-6">
            <h4 className="text-lg font-semibold text-anant-pure mb-3">Communication System</h4>
            <ul className="text-anant-mild space-y-2">
              <li>• UHF frequency band</li>
              <li>• CC1101 transceiver + PA</li>
              <li>• AX.25 framing and encoding</li>
              <li>• RF switch for antenna selection</li>
            </ul>
          </div>
          <div className="sleek-card p-6">
            <h4 className="text-lg font-semibold text-anant-pure mb-3">Antenna System</h4>
            <ul className="text-anant-mild space-y-2">
              <li>• Turnstile: circular polarization</li>
              <li>• Monopole: linear polarization</li>
              <li>• Nichrome wire burn deployment</li>
              <li>• Dual redundant circuits</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Ground Station Integration */}
      <section className="py-12">
        <SectionHeading>Ground Station Integration</SectionHeading>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div className="space-card p-6">
            <h4 className="text-lg font-semibold text-anant-pure mb-3">Ground Segment</h4>
            <p className="text-anant-mild mb-4">Rotator‑controlled Yagi array with SDR reception and decoding, automated tracking, and data processing.</p>
            <ul className="text-anant-mild space-y-2">
              <li>• Rotator‑controlled Yagi</li>
              <li>• SDR‑based signal chain</li>
              <li>• Automated satellite tracking</li>
              <li>• Low‑noise amplifier integration</li>
            </ul>
          </div>
          <div className="sleek-card p-6">
            <h4 className="text-lg font-semibold text-anant-pure mb-3">Data Flow</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between"><span className="text-anant-mild">Uplink</span><span className="text-purple-400">Commands & Config</span></div>
              <div className="flex items-center justify-between"><span className="text-anant-mild">Downlink</span><span className="text-purple-400">Housekeeping & Payload</span></div>
              <div className="flex items-center justify-between"><span className="text-anant-mild">Protocol</span><span className="text-purple-400">AX.25</span></div>
              <div className="flex items-center justify-between"><span className="text-anant-mild">Processing</span><span className="text-purple-400">OBC Integration</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-12">
        <SectionHeading>Mission Applications</SectionHeading>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="glassy-card p-6">
            <h3 className="text-xl font-semibold text-anant-pure mb-2">Command Operations</h3>
            <p className="text-anant-mild">Uplink for mission commands, configuration changes, and contingencies.</p>
          </div>
          <div className="glassy-card p-6">
            <h3 className="text-xl font-semibold text-anant-pure mb-2">Data Downlink</h3>
            <p className="text-anant-mild">Efficient transmission of science data, housekeeping, and status.</p>
          </div>
        </div>
      </section>
    </SubsystemLayout>
  );
}
