import React from 'react';
import type { Route } from "./+types/sts";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "STS Team - Team Anant" },
    { name: "description", content: "Meet the Structural and Thermal Subsystem team members of Team Anant." },
  ];
}

const STSTeam = () => {
  const teamMembers = [
    { name: "Vivek Gunuganti", position: "Subsystem Lead", image: "/assets/team_files/24-25/VIVEK_GUNUGANTI.png" },
    { name: "Aditya Jaikrishnia", position: "Member", image: "/assets/team_files/24-25/ADITYA_PRASHANT_JAIKRISHNIA.png" },
    { name: "Ahaan Chaturvedi", position: "Member", image: "/assets/team_files/24-25/AHAAN_CHATURVEDI.jpg" },
    { name: "Hiya Desai", position: "Member", image: "/assets/team_files/24-25/HIYA_NIRAV_DESAI.png" },
    { name: "Rahul Garg", position: "Member", image: "/assets/team_files/24-25/RAHUL_GARG.png" }
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
                STS Team
              </h1>
              <p className="text-xl text-anant-mild max-w-3xl mx-auto mb-8">
                Structural and Thermal Subsystem
              </p>
              <p className="text-lg text-anant-mild max-w-4xl mx-auto">
                Our STS team designs the mechanical structure and thermal management systems to ensure 
                the satellite can withstand launch conditions and operate in the harsh space environment.
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

export default STSTeam;
