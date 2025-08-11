import type { Route } from "./+types/home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TabbedLayout from "../components/TabbedLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Team Anant - BITS Pilani's First Nanosatellite Team" },
    { name: "description", content: "Building BITS-Pilani's first indigenously designed nanosatellite with multispectral imaging capabilities for vegetation monitoring and analysis." },
    { name: "keywords", content: "Team Anant, BITS Pilani, nanosatellite, CubeSat, aerospace, space technology, multispectral imaging" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <TabbedLayout />
      <Footer />
    </div>
  );
}
