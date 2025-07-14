import React from 'react';

const Team = () => {
  // Team data structure based on the HTML file
  const teamData = {
    faculty: {
      name: "Dr. Meetha V. Shenoy",
      position: "Faculty Coordinator",
      image: "/assets/team_files/19-21 team/Meetha Teacher.png"
    },
    leads: [
      {
        name: "Pranav Chandra",
        position: "Student Coordinator",
        image: "/assets/team_files/24-25/PRANAV_CHANDRA.jpg"
      },
      {
        name: "Samridhi Agrawal",
        position: "Joint Student Coordinator",
        image: "/assets/team_files/24-25/SAMRIDHI_AGRAWAL.png"
      },
      {
        name: "Pramit Pal",
        position: "Systems Engineer",
        image: "/assets/team_files/24-25/PRAMIT_PAL.png"
      },
      {
        name: "Rushil Barnwal",
        position: "Systems Engineer",
        image: "/assets/team_files/24-25/RUSHIL_BARNWAL.png"
      }
    ],
    subsystems: [
      {
        name: "Attitude Determination and Control System",
        members: [
          { name: "Aaditya Thakkar", position: "Subsystem Lead", image: "/assets/team_files/24-25/AADITYA_THAKKAR.png" },
          { name: "Nikhil Mathew", position: "Subsystem Lead", image: "/assets/team_files/24-25/NIKHIL_GEORGE_MATHEW.png" },
          { name: "Pranav Chandra", position: "Senior Member", image: "/assets/team_files/24-25/PRANAV_CHANDRA.jpg" },
          { name: "Pramit Pal", position: "Senior Member", image: "/assets/team_files/24-25/PRAMIT_PAL.png" },
          { name: "Anmol Saksena", position: "Member", image: "/assets/team_files/24-25/ANMOL_SAKSENA.png" },
          { name: "Apoorva Prabhala", position: "Member", image: "/assets/team_files/24-25/APOORVA_PRABHALA.png" },
          { name: "Atharva Sonwane", position: "Member", image: "/assets/team_files/24-25/ATHARVA_ABHILASH_SONWANE.png" },
          { name: "Kanav Sharma", position: "Member", image: "/assets/team_files/24-25/KANAV_SHARMA.png" },
          { name: "Vansh Jain", position: "Member", image: "/assets/team_files/24-25/VANSH_JAIN.png" }
        ]
      },
      {
        name: "Electrical Power System",
        members: [
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
        ]
      },
      {
        name: "On Board Computer System",
        members: [
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
        ]
      },
      {
        name: "Payload Subsystem",
        members: [
          { name: "Pranav Suryanvanshi", position: "Subsystem Lead", image: "/assets/team_files/unknown.png" },
          { name: "Prakhar Chindalia", position: "Senior Member", image: "/assets/team_files/24-25/PRAKHAR_CHINDALIA.png" },
          { name: "Sannidhya Ray", position: "Senior Member", image: "/assets/team_files/24-25/SANNIDHYA_RAY.png" },
          { name: "Arth Gada", position: "Member", image: "/assets/team_files/24-25/ARTH_GADA.png" },
          { name: "Atharva Gupta", position: "Member", image: "/assets/team_files/24-25/ATHARVA_GUPTA.png" },
          { name: "Bharat Kumar Saxena", position: "Member", image: "/assets/team_files/24-25/BHARAT_KUMAR_SAXENA.png" },
          { name: "Shardul Narayan", position: "Member", image: "/assets/team_files/24-25/SHARDUL_NARAYAN.png" }
        ]
      },
      {
        name: "Structural and Thermal Subsystem",
        members: [
          { name: "Vivek Gunuganti", position: "Subsystem Lead", image: "/assets/team_files/24-25/VIVEK_GUNUGANTI.png" },
          { name: "Aditya Jaikrishnia", position: "Member", image: "/assets/team_files/24-25/ADITYA_PRASHANT_JAIKRISHNIA.png" },
          { name: "Ahaan Chaturvedi", position: "Member", image: "/assets/team_files/24-25/AHAAN_CHATURVEDI.jpg" },
          { name: "Hiya Desai", position: "Member", image: "/assets/team_files/24-25/HIYA_NIRAV_DESAI.png" },
          { name: "Rahul Garg", position: "Member", image: "/assets/team_files/24-25/RAHUL_GARG.png" }
        ]
      },
      {
        name: "Telemetry, Tracking and Command Subsystem",
        members: [
          { name: "Shashank Saha", position: "Subsystem Lead", image: "/assets/team_files/24-25/SHASHANK_SAHA.png" },
          { name: "Harsh Lakshakar", position: "Senior Member", image: "/assets/team_files/unknown.png" },
          { name: "Kanishk Jain", position: "Senior Member", image: "/assets/team_files/24-25/KANISHK_JAIN.png" },
          { name: "Rakshit Jain", position: "Senior Member", image: "/assets/team_files/24-25/RAKSHIT_JAIN.png" },
          { name: "Aarnav Sood", position: "Member", image: "/assets/team_files/24-25/AARNAV_SOOD.png" },
          { name: "Raafey Aziz", position: "Member", image: "/assets/team_files/24-25/RAAFEY_AZIZ.png" },
          { name: "Vatsal Goyal", position: "Member", image: "/assets/team_files/24-25/VATSAL_GOYAL.png" },
          { name: "Y. N. Shashank", position: "Member", image: "/assets/team_files/24-25/YAMMANURU_NARASIMHA_SHASHANK.png" }
        ]
      }
    ]
  };

  const getPositionColor = (position: string) => {
    if (position.includes('Lead')) return 'text-anant-accent';
    if (position.includes('Senior')) return 'text-yellow-400';
    if (position.includes('Coordinator') || position.includes('Engineer')) return 'text-green-400';
    return 'text-anant-mild';
  };

  return (
    <section id="team" className="py-20 bg-anant-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-anant-pure">
              Our Team
            </h2>
            <p className="text-xl text-anant-mild max-w-3xl mx-auto">
              Meet the passionate individuals behind Team Anant's innovative biological experiment CubeSat mission
            </p>
          </div>

          {/* Team Photo */}
          <div className="mb-16">
            <img 
              src="/assets/images1/team-anant-picture.jpg" 
              alt="Team Anant Group Photo" 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
            />
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="text-center bg-anant-gray p-6 rounded-lg">
              <div className="text-3xl font-bold text-anant-accent mb-2">60+</div>
              <div className="text-anant-mild">Team Members</div>
            </div>
            <div className="text-center bg-anant-gray p-6 rounded-lg">
              <div className="text-3xl font-bold text-anant-accent mb-2">6</div>
              <div className="text-anant-mild">Subsystems</div>
            </div>
            <div className="text-center bg-anant-gray p-6 rounded-lg">
              <div className="text-3xl font-bold text-anant-accent mb-2">12+</div>
              <div className="text-anant-mild">Years Experience</div>
            </div>
            <div className="text-center bg-anant-gray p-6 rounded-lg">
              <div className="text-3xl font-bold text-anant-accent mb-2">3U</div>
              <div className="text-anant-mild">CubeSat</div>
            </div>
          </div>

          {/* Faculty Coordinator */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-anant-pure mb-8 text-center">Faculty Coordinator</h3>
            <div className="flex justify-center">
              <div className="bg-anant-gray rounded-lg p-8 hover:transform hover:scale-105 transition-all duration-300 group max-w-sm">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-anant-accent">
                    <img
                      src={teamData.faculty.image}
                      alt={teamData.faculty.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const initials = teamData.faculty.name.split(' ').map((n: string) => n[0]).join('');
                        target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-anant-pure text-2xl font-bold">${initials}</div>`;
                      }}
                    />
                  </div>
                  <h4 className="text-xl font-bold text-anant-pure mb-2">{teamData.faculty.name}</h4>
                  <p className="text-anant-accent font-semibold">{teamData.faculty.position}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Team */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-anant-pure mb-8 text-center">Leadership Team</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamData.leads.map((member, index) => (
                <div
                  key={index}
                  className="bg-anant-gray rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 group"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-anant-accent">
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
                    <h4 className="text-lg font-bold text-anant-pure mb-2">{member.name}</h4>
                    <p className={`font-semibold text-sm ${getPositionColor(member.position)}`}>{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subsystem Teams */}
          <div className="space-y-12">
            {teamData.subsystems.map((subsystem, subsystemIndex) => {
              // Separate senior members from regular members
              const seniorMembers = subsystem.members.filter(member => 
                member.position.includes('Senior') || member.position.includes('Lead')
              );
              const regularMembers = subsystem.members.filter(member => 
                !member.position.includes('Senior') && !member.position.includes('Lead')
              );
              
              return (
                <div key={subsystemIndex} className="bg-anant-dark rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-anant-pure mb-6 text-center">{subsystem.name}</h3>
                  
                  {/* Senior Members Row */}
                  {seniorMembers.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-anant-accent mb-4 text-center">Senior Members & Leads</h4>
                      <div className="flex flex-wrap justify-center gap-6">
                        {seniorMembers.map((member, memberIndex) => (
                          <div
                            key={memberIndex}
                            className="bg-anant-gray rounded-lg p-4 hover:transform hover:scale-105 transition-all duration-300 group"
                          >
                            <div className="text-center">
                              <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-anant-accent">
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    const initials = member.name.split(' ').map((n: string) => n[0]).join('');
                                    target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-anant-pure text-sm font-bold">${initials}</div>`;
                                  }}
                                />
                              </div>
                              <h4 className="text-sm font-bold text-anant-pure mb-1">{member.name}</h4>
                              <p className={`text-xs font-semibold ${getPositionColor(member.position)}`}>{member.position}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Regular Members Grid */}
                  {regularMembers.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-anant-mild mb-4 text-center">Team Members</h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {regularMembers.map((member, memberIndex) => (
                          <div
                            key={memberIndex}
                            className="bg-anant-gray rounded-lg p-4 hover:transform hover:scale-105 transition-all duration-300 group"
                          >
                            <div className="text-center">
                              <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden bg-anant-accent">
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    const initials = member.name.split(' ').map((n: string) => n[0]).join('');
                                    target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-anant-pure text-sm font-bold">${initials}</div>`;
                                  }}
                                />
                              </div>
                              <h4 className="text-sm font-bold text-anant-pure mb-1">{member.name}</h4>
                              <p className={`text-xs font-semibold ${getPositionColor(member.position)}`}>{member.position}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 bg-anant-dark p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-anant-pure mb-4">
              Interested in Joining Team Anant?
            </h3>
            <p className="text-anant-mild mb-6 max-w-2xl mx-auto">
              We're always looking for passionate students interested in space technology, 
              satellite systems, and innovative engineering solutions. Join us in pushing the boundaries of space exploration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 bg-anant-accent hover:bg-anant-accent-hover text-anant-pure rounded-lg transition-colors font-semibold"
              >
                Contact Us
              </a>
              <a
                href="#about"
                className="px-8 py-3 border-2 border-anant-accent text-anant-accent hover:bg-anant-accent hover:text-anant-pure rounded-lg transition-all font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
