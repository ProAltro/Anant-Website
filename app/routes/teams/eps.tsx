import React from 'react';
import type { Route } from "./+types/eps";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "EPS Team - Team Anant" },
    { name: "description", content: "Meet the Electrical Power System team members of Team Anant." },
  ];
}

const EPSTeam = () => {
  const teamMembers = [
    { name: "Meghadri Ghosh", position: "Subsystem Lead", image: "/assets/team_files/24-25/MEGHADRI_GHOSH.jpg" },
    { name: "Manit Kachhwaha", position: "Senior Member", image: "/assets/team_files/24-25/MANIT_ANAND_KACHHWAHA.png" },
    { name: "Arush Mangalam Bajpai", position: "Senior Member", image: "/assets/team_files/24-25/ARUSH_MANGALAM_BAJPAI.png" },
    { name: "Depak Ravinuthala", position: "Senior Member", image: "/assets/team_files/unknown.png" },
    { name: "Konaark Berwal", position: "Member", image: "/assets/team_files/24-25/KONAARK_BERWAL.png" },
    { name: "Karthik Raj Palleboyina", position: "Member", image: "/assets/team_files/24-25/KARTHIK_RAJ_PALLEBOYINA.png" },
    { name: "Abhirup Tapadar", position: "Member", image: "/assets/team_files/24-25/ABHIRUP_TAPADAR.png" },
    { name: "Advait Mehta", position: "Member", image: "/assets/team_files/24-25/ADVAIT_SNEHALBHAI_MEHTA.png" },
    { name: "Siddhant Patel", position: "Member", image: "/assets/team_files/24-25/SIDDHANT_ANANTKUMAR_PATEL.png" },
    { name: "Yog Panjarle", position: "Member", image: "/assets/team_files/24-25/YOG_SURYAKANT_PANJARALE.png" }
  ];

  const getPositionColor = (position: string) => {
    if (position.includes('Lead')) return 'text-anant-accent';
    if (position.includes('Senior')) return 'text-yellow-400';
    return 'text-anant-mild';
  };

  return (
    <div className="min-h-screen bg-anant-dark">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-anant-pure">
                EPS Team
              </h1>
              <p className="text-xl text-anant-mild max-w-3xl mx-auto mb-8">
                Electrical Power System
              </p>
              <p className="text-lg text-anant-mild max-w-4xl mx-auto">
                Our EPS team manages all aspects of power generation, distribution, and storage for the satellite, 
                ensuring reliable operation throughout the mission lifecycle.
              </p>
            </div>

            {/* Team Members */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-anant-gray rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 group glass-container"
                >
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-anant-accent">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const initials = member.name.split(' ').map((n: string) => n[0]).join('');
                          target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-anant-pure text-lg font-bold">${initials}</div>`;
                        }}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-anant-pure mb-2">{member.name}</h3>
                    <p className={`font-semibold ${getPositionColor(member.position)}`}>{member.position}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Back to Main Team */}
            <div className="text-center mt-16">
              <a
                href="/#team"
                className="inline-block px-8 py-3 bg-anant-accent hover:bg-anant-accent-hover text-anant-pure rounded-lg transition-colors font-semibold"
              >
                ← Back to All Teams
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EPSTeam;
