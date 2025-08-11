import React from 'react';
import type { Route } from "./+types/adcs";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ADCS Team - Team Anant" },
    { name: "description", content: "Meet the Attitude Determination and Control System team members of Team Anant." },
  ];
}

const ADCSTeam = () => {
  const teamMembers = [
    { name: "Aaditya Thakkar", position: "Subsystem Lead", image: "/assets/team_files/24-25/AADITYA_THAKKAR.png" },
    { name: "Nikhil Mathew", position: "Subsystem Lead", image: "/assets/team_files/24-25/NIKHIL_GEORGE_MATHEW.png" },
    { name: "Pranav Chandra", position: "Senior Member", image: "/assets/team_files/24-25/PRANAV_CHANDRA.jpg" },
    { name: "Pramit Pal", position: "Senior Member", image: "/assets/team_files/24-25/PRAMIT_PAL.png" },
    { name: "Anmol Saksena", position: "Member", image: "/assets/team_files/24-25/ANMOL_SAKSENA.png" },
    { name: "Apoorva Prabhala", position: "Member", image: "/assets/team_files/24-25/APOORVA_PRABHALA.png" },
    { name: "Atharva Sonwane", position: "Member", image: "/assets/team_files/24-25/ATHARVA_ABHILASH_SONWANE.png" },
    { name: "Kanav Sharma", position: "Member", image: "/assets/team_files/24-25/KANAV_SHARMA.png" },
    { name: "Vansh Jain", position: "Member", image: "/assets/team_files/24-25/VANSH_JAIN.png" }
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
                ADCS Team
              </h1>
              <p className="text-xl text-anant-mild max-w-3xl mx-auto mb-8">
                Attitude Determination and Control System
              </p>
              <p className="text-lg text-anant-mild max-w-4xl mx-auto">
                Our ADCS team is responsible for determining and controlling the satellite's orientation in space, 
                ensuring precise pointing for mission success and optimal payload operation.
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

export default ADCSTeam;
