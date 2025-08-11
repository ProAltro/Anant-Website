import React from 'react';
import type { Route } from "./+types/obc";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "OBC Team - Team Anant" },
    { name: "description", content: "Meet the On Board Computer System team members of Team Anant." },
  ];
}

const OBCTeam = () => {
  const teamMembers = [
    { name: "Rushil Barnwal", position: "Subsystem Lead", image: "/assets/team_files/24-25/RUSHIL_BARNWAL.png" },
    { name: "Dhruv Deshpande", position: "Senior Member", image: "/assets/team_files/24-25/DHRUV_PRASAD_DESHPANDE.png" },
    { name: "Neha Gujjari", position: "Senior Member", image: "/assets/team_files/24-25/NEHA_GUJJARI.png" },
    { name: "Samridhi Agrawal", position: "Senior Member", image: "/assets/team_files/24-25/SAMRIDHI_AGRAWAL.png" },
    { name: "Aryan Sharma", position: "Member", image: "/assets/team_files/24-25/ARYAN_SHARMA.jpg" },
    { name: "Aanya Singh", position: "Member", image: "/assets/team_files/24-25/AANYA_SINGH.png" },
    { name: "Arnav Chhabra", position: "Member", image: "/assets/team_files/24-25/ARNAV_CHHABRA.png" },
    { name: "Kushagra Agarwal", position: "Member", image: "/assets/team_files/24-25/KUSHAGRA_AGARWAL.png" },
    { name: "Siddharth Vivek", position: "Member", image: "/assets/team_files/24-25/SIDDHARTH_VIVEK.png" },
    { name: "Sumit Kumar Shah", position: "Member", image: "/assets/team_files/24-25/SUMIT_KUMAR_SHAH.png" }
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
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-anant-pure">
                OBC Team
              </h1>
              <p className="text-xl text-anant-mild max-w-3xl mx-auto mb-8">
                On Board Computer System
              </p>
              <p className="text-lg text-anant-mild max-w-4xl mx-auto">
                Our OBC team develops the central computing system that controls all satellite operations, 
                data processing, and communication protocols.
              </p>
            </div>

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

export default OBCTeam;
