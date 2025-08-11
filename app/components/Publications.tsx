import React from 'react';

const Publications = () => {
  // Sample publications data - in a real app, this would come from an API or database
  const publications = [
    {
      title: "Dynamic Simulation of Electrical and Thermal Systems",
      authors: "Aryan, Vinayak, Sai, Shiv",
      conference: "IAC 2024",
      year: "2024",
      type: "Conference Paper",
      pdf: "/papers/2024_10-IAC75-Dynamic Simulation of Electrical and Thermal Systems-Aryan,Vinayak,Sai,Shiv.pdf",
      abstract: "This paper presents a comprehensive dynamic simulation framework for electrical and thermal systems in nanosatellites."
    },
    {
      title: "Hardware Architecture of Electrical Power System for 3U Hyperspectral Imaging CubeSat",
      authors: "Nihal Sanjay Singh",
      conference: "IEEE Conference",
      year: "2023",
      type: "Conference Paper",
      pdf: "/papers/Hardware Architecture of Electrical Power System for 3U Hyperspectral Imaging CubeSat - Nihal Sanjay Singh.pdf",
      abstract: "Design and implementation of robust electrical power systems for hyperspectral imaging CubeSat missions."
    },
    {
      title: "Implementation of CCSDS Hyperspectral Image Compression Algorithm onboard a nanosatellite",
      authors: "Team Anant",
      conference: "Space Systems Conference",
      year: "2023",
      type: "Journal Article",
      pdf: "/papers/Implementation of CCSDS Hyperspectral Image Compression Algorithm onboard a nanosatellite.pdf",
      abstract: "Novel approach to implementing CCSDS compression standards for hyperspectral data processing in resource-constrained environments."
    },
    {
      title: "Kalman Filter Implementation for Attitude Determination",
      authors: "Aditya Bhardwaj",
      conference: "IAC 2020",
      year: "2020",
      type: "Conference Paper",
      pdf: "/papers/IAC2020-KalmanFilter - Aditya Bhardwaj.pdf",
      abstract: "Advanced Kalman filtering techniques for precise attitude determination in nanosatellite systems."
    },
    {
      title: "Helmholtz Cage Design for Magnetic Testing",
      authors: "Tushar Goyal",
      conference: "IAC 2017",
      year: "2017",
      type: "Conference Paper",
      pdf: "/papers/IAC2017-HelmholtzCage - Tushar Goyal.pdf",
      abstract: "Design and implementation of Helmholtz cage systems for magnetic field testing of satellite components."
    },
    {
      title: "Modes of Operation for Nanosatellite Systems",
      authors: "Team Anant",
      conference: "Space Conference",
      year: "2023",
      type: "Technical Report",
      pdf: "/papers/Final_Modes_of_Operation_Paper.pdf",
      abstract: "Comprehensive analysis of operational modes for efficient nanosatellite mission execution."
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Conference Paper':
        return 'bg-blue-600';
      case 'Journal Article':
        return 'bg-green-600';
      case 'Technical Report':
        return 'bg-purple-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <section id="publications" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-anant-pure">
              Publications
            </h2>
            <p className="text-xl text-anant-mild max-w-3xl mx-auto">
              Our research contributions to the field of nanosatellite technology and space systems
            </p>
          </div>

          {/* Publications Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="text-center p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="text-3xl font-bold text-anant-accent mb-2">15+</div>
              <div className="text-anant-mild">Total Papers</div>
            </div>
            <div className="text-center p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="text-3xl font-bold text-anant-accent mb-2">8</div>
              <div className="text-anant-mild">Conference Papers</div>
            </div>
            <div className="text-center p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="text-3xl font-bold text-anant-accent mb-2">4</div>
              <div className="text-anant-mild">Journal Articles</div>
            </div>
            <div className="text-center p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="text-3xl font-bold text-anant-accent mb-2">3</div>
              <div className="text-anant-mild">Technical Reports</div>
            </div>
          </div>

          {/* Publications Grid */}
          <div className="grid gap-6 mb-16">
            {publications.map((publication, index) => (
              <div
                key={index}
                className="rounded-lg p-6 hover:transform hover:scale-102 transition-all duration-300 group border border-white/10 hover:border-sky-400/40 bg-white/5 backdrop-blur-sm"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <span className={`px-3 py-1 text-xs font-semibold text-white rounded-full ${getTypeColor(publication.type)}`}>
                        {publication.type}
                      </span>
                      <span className="text-anant-mild text-sm">{publication.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-anant-pure mb-2 group-hover:text-anant-accent transition-colors">
                      {publication.title}
                    </h3>
                    
                    <p className="text-anant-accent font-semibold mb-1">
                      {publication.authors}
                    </p>
                    
                    <p className="text-anant-mild text-sm mb-3">
                      {publication.conference}
                    </p>
                    
                    <p className="text-anant-mild text-sm leading-relaxed mb-4">
                      {publication.abstract}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
                    <a
                      href={publication.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-anant-accent hover:bg-anant-accent-hover text-anant-pure rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      PDF
                    </a>
                    <button className="px-4 py-2 border-2 border-anant-accent text-anant-accent hover:bg-anant-accent hover:text-anant-pure rounded-lg transition-all">
                      Cite
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center p-8 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-anant-pure mb-4">
              Interested in Collaborating?
            </h3>
            <p className="text-anant-mild mb-6 max-w-2xl mx-auto">
              We're open to research collaborations and partnerships. 
              Contact us to explore opportunities for joint research projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-anant-accent hover:bg-anant-accent-hover text-anant-pure rounded-lg transition-colors">
                Contact for Collaboration
              </button>
              <button className="px-6 py-3 border-2 border-anant-accent text-anant-accent hover:bg-anant-accent hover:text-anant-pure rounded-lg transition-all">
                View All Publications
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
