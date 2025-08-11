import type { Route } from "./+types/payload";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Payload - Hyperspectral Camera | Team Anant" },
    { name: "description", content: "Compact hyperspectral imaging payload with ~270 spectral bands (640×480 @ 12‑bit), on‑board compression feasibility, and remote sensing applications across agriculture, forestry, water, disaster and climate." },
    { name: "keywords", content: "Payload, hyperspectral camera, hyperspectral imaging, remote sensing, CCSDS compression, nanosatellite, Team Anant" },
  ];
}

export default function Payload() {
  return (
    <div className="min-h-screen bg-anant-dark">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6 text-white">
                Payload
              </h1>
              <p className="text-xl text-indigo-100 mb-4">
                Hyperspectral Imaging Payload
              </p>
              <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
                Compact hyperspectral camera enabling cost‑effective orbital imaging for remote sensing with ~270 spectral bands, 640×480 @ 12‑bit, and on‑board compression feasibility.
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
                    Payload Overview
                  </h2>
                  <p className="text-anant-mild leading-relaxed mb-6">
                    The hyperspectral imaging payload captures rich spectral information across approximately 270 bands, enabling precise material identification and environmental monitoring from orbit. The system is designed around a compact imager with 640×480 format at 12‑bit depth and supports on‑board compression for efficient downlink.
                  </p>
                  <p className="text-anant-mild leading-relaxed">
                    Applications include vegetation health assessment, water quality analysis, mineral mapping, and disaster impact evaluation. The payload draws on heritage work within the team to realize a capable yet power‑aware imaging instrument for a 3U CubeSat.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="bg-anant-secondary rounded-lg p-8 text-center">
                    <div className="text-4xl mb-4">📷</div>
                    <h3 className="text-xl font-bold text-anant-pure mb-2">Hyperspectral Camera</h3>
                    <p className="text-anant-mild">~270 bands • 640×480 • 12‑bit</p>
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
                  <div className="text-3xl mb-4">🖼️</div>
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Imaging Sensor</h3>
                  <p className="text-anant-mild">
                    640×480 format with 12‑bit depth, supporting high fidelity acquisition across discrete spectral bands.
                  </p>
                </div>
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="text-3xl mb-4">🔬</div>
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Optics & Spectral Path</h3>
                  <p className="text-anant-mild">
                    Spectral selection and scanning approach designed to realize ~270 bands suited for remote sensing use‑cases.
                  </p>
                </div>
                <div className="bg-anant-primary rounded-lg p-6">
                  <div className="text-3xl mb-4">🗜️</div>
                  <h3 className="text-xl font-bold text-anant-pure mb-4">On‑board Processing</h3>
                  <p className="text-anant-mild">
                    CCSDS‑style hyperspectral image compression feasibility for reduced downlink volume while preserving science value.
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
                <div className="bg-anant-dark rounded-lg p-6">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Imager</h3>
                  <ul className="text-anant-mild space-y-2">
                    <li>• Bands: ~270</li>
                    <li>• Sensor Format: 640×480</li>
                    <li>• Bit Depth: 12‑bit</li>
                    <li>• Capture: ~270 frames/image</li>
                    <li>• Effective Frame Rate: ~300 fps</li>
                    <li>• Capture Time: ~0.9 s per hypercube</li>
                  </ul>
                </div>
                <div className="bg-anant-dark rounded-lg p-6">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Power & Size</h3>
                  <ul className="text-anant-mild space-y-2">
                    <li>• Imager Power: ~10 W</li>
                    <li>• Mass: &lt; 0.68 kg</li>
                    <li>• Size: ~3×3×4.7 in</li>
                    <li>• Platform: 3U CubeSat compatible</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Handling & Compression */}
        <section className="py-16 bg-anant-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold font-poppins mb-12 text-center text-anant-pure">
                Data Handling & Compression
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-anant-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">On‑board Workflow</h3>
                  <ul className="text-anant-mild space-y-2">
                    <li>• Hypercube acquisition and buffering</li>
                    <li>• Optional CCSDS‑style compression</li>
                    <li>• Packetization for TTC downlink</li>
                    <li>• Health and status telemetry</li>
                  </ul>
                </div>
                <div className="bg-anant-primary rounded-lg p-6">
                  <h3 className="text-xl font-bold text-anant-pure mb-4">Ground Segment</h3>
                  <p className="text-anant-mild">
                    Received data products support calibration and analysis pipelines for remote sensing applications, including vegetation indices and material classification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 bg-anant-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold font-poppins mb-12 text-center text-anant-pure">
                Applications & Impact
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="glassy-card p-6">
                  <h3 className="text-anant-accent font-semibold mb-3 text-lg">Agriculture</h3>
                  <p className="text-anant-mild">Vegetation health assessment, crop monitoring, and stress detection.</p>
                </div>
                <div className="glassy-card p-6">
                  <h3 className="text-anant-accent font-semibold mb-3 text-lg">Forestry & Land</h3>
                  <p className="text-anant-mild">Species mapping, biomass estimation, and land‑use classification.</p>
                </div>
                <div className="glassy-card p-6">
                  <h3 className="text-anant-accent font-semibold mb-3 text-lg">Water & Climate</h3>
                  <p className="text-anant-mild">Water quality indices, disaster impact mapping, and climate research inputs.</p>
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
