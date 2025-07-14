import type { Route } from "./+types/home";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Subsystems from "../components/Subsystems";
import Team from "../components/Team";
import Publications from "../components/Publications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Team Anant - BITS Pilani's First Nanosatellite Team" },
    { name: "description", content: "Building BITS-Pilani's first indigenously designed nanosatellite with multispectral imaging capabilities for vegetation monitoring and analysis." },
    { name: "keywords", content: "Team Anant, BITS Pilani, nanosatellite, CubeSat, aerospace, space technology, multispectral imaging" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-anant-dark">
      <Header />
      <main>
        <Hero />
        <About />
        <Subsystems />
        <Team />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
