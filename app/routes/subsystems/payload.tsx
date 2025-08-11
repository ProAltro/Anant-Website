import type { Route } from "./+types/payload";
import SubsystemLayout, { SectionHeading } from "../../components/SubsystemPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Payload - Hyperspectral Camera | Team Anant" },
    { name: "description", content: "Compact hyperspectral or multispectral imaging payload with onboard processing for remote sensing applications across agriculture, forestry, water, disaster and climate." },
    { name: "keywords", content: "Payload, hyperspectral camera, multispectral imaging, remote sensing, compression, nanosatellite, Team Anant" },
  ];
}

export default function Payload() {
  return (
    <SubsystemLayout
      code="Payload"
      subtitle="Multispectral Imaging System"
      description="High‑resolution imaging across RGB + NIR with calibrated optics and onboard processing for actionable Earth observation."
    >
      {/* Overview */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div className="space-card p-6">
            <h3 className="text-xl font-semibold text-anant-pure mb-3">System Overview</h3>
            <p className="text-anant-mild leading-relaxed mb-4">
              Designed for multispectral Earth observation—agriculture assessment, vegetation health, and environmental analysis—with onboard processing to reduce downlink volume.
            </p>
            <p className="text-anant-mild leading-relaxed">
              Precise calibration and robust pipelines deliver reliable products for research and real‑world remote‑sensing applications.
            </p>
          </div>
          <div className="sleek-card p-6">
            <h4 className="text-lg font-semibold text-anant-pure mb-3">Key Specifications</h4>
            <div className="space-y-3">
              <div className="flex justify-between"><span className="text-anant-mild">Spectral Bands</span><span className="text-anant-accent">RGB + NIR</span></div>
              <div className="flex justify-between"><span className="text-anant-mild">GSD</span><span className="text-anant-accent">5–10 m</span></div>
              <div className="flex justify-between"><span className="text-anant-mild">Optics</span><span className="text-anant-accent">Custom lens + filters</span></div>
              <div className="flex justify-between"><span className="text-anant-mild">Processing</span><span className="text-anant-accent">On‑board feature extraction</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="py-12">
        <SectionHeading>System Components</SectionHeading>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-card p-6">
            <h3 className="text-xl font-semibold text-anant-pure mb-2">Optical Assembly</h3>
            <p className="text-anant-mild">Precision optics with spectral filters and baffles to minimize stray light and improve SNR.</p>
          </div>
          <div className="space-card p-6">
            <h3 className="text-xl font-semibold text-anant-pure mb-2">Sensor Module</h3>
            <p className="text-anant-mild">Multispectral sensor with thermal control and calibration routines for consistency.</p>
          </div>
          <div className="space-card p-6">
            <h3 className="text-xl font-semibold text-anant-pure mb-2">Processing Unit</h3>
            <p className="text-anant-mild">Onboard image processing and compression to preserve key information.</p>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-12">
        <SectionHeading>Technical Implementation</SectionHeading>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="sleek-card p-6">
            <h4 className="text-lg font-semibold text-anant-pure mb-3">Imaging Pipeline</h4>
            <ul className="space-y-2 text-anant-mild">
              <li>• Radiometric and geometric calibration</li>
              <li>• On‑board feature extraction and compression</li>
              <li>• Ground processing and validation</li>
              <li>• Product generation and cataloging</li>
            </ul>
          </div>
          <div className="sleek-card p-6">
            <h4 className="text-lg font-semibold text-anant-pure mb-3">Operational Modes</h4>
            <ul className="space-y-2 text-anant-mild">
              <li>• Targeted imaging with adaptive exposure</li>
              <li>• Timelapse and strip mapping</li>
              <li>• Calibration and dark frames</li>
              <li>• Priority‑based onboard processing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission Applications */}
      <section className="py-12">
        <SectionHeading>Mission Applications</SectionHeading>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="glassy-card p-6 text-center">
            <div className="text-2xl font-bold text-anant-accent mb-1">5–10 m</div>
            <div className="text-anant-mild">Ground Sampling</div>
          </div>
          <div className="glassy-card p-6 text-center">
            <div className="text-2xl font-bold text-anant-accent mb-1">RGB+NIR</div>
            <div className="text-anant-mild">Spectral Bands</div>
          </div>
          <div className="glassy-card p-6 text-center">
            <div className="text-2xl font-bold text-anant-accent mb-1">Onboard</div>
            <div className="text-anant-mild">Processing</div>
          </div>
        </div>
      </section>
    </SubsystemLayout>
  );
}
