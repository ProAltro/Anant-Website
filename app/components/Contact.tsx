import React from 'react';

const Contact = () => {
  // Form removed per request; keeping only direct contact information

  return (
    <section id="contact" className="py-20 bg-transparent scroll-mt-14 md:scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 title-caps title-gradient font-heading inline-block">
              Get In Touch
            </h2>
            <div className="title-underline mb-10"></div>
            <p className="text-xl text-anant-mild max-w-3xl mx-auto">
              Have questions about our project or interested in collaboration? We'd love to hear from you.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-anant-pure mb-6 text-center">
                Contact Information
              </h3>
              
              <div className="space-y-6 max-w-2xl mx-auto">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-anant-accent/15 ring-1 ring-anant-accent/30">
                    <svg className="w-6 h-6 text-anant-pure" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-anant-pure mb-1">Address</h4>
                    <p className="text-anant-mild">
                      Birla Institute of Technology and Science<br />
                      Pilani, Rajasthan 333031<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-anant-accent/15 ring-1 ring-anant-accent/30">
                    <svg className="w-6 h-6 text-anant-pure" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-anant-pure mb-1">Email</h4>
                    <p className="text-anant-mild">
                      <a href="mailto:team.anant@pilani.bits-pilani.ac.in" className="hover:text-anant-accent transition-colors">
                        team.anant@pilani.bits-pilani.ac.in
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-anant-accent/15 ring-1 ring-anant-accent/30">
                    <svg className="w-6 h-6 text-anant-pure" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-anant-pure mb-1">Phone</h4>
                    <p className="text-anant-mild">
                      <a href="tel:+919080796426" className="hover:text-anant-accent transition-colors">+91 90807 96426</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-anant-accent/15 ring-1 ring-anant-accent/30">
                    <svg className="w-6 h-6 text-anant-pure" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-anant-pure mb-1">Social Media</h4>
                    <div className="flex gap-3">
                      <a href="https://www.linkedin.com/company/teamanant/" target="_blank" rel="noopener noreferrer" className="text-anant-mild hover:text-anant-accent transition-colors">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form removed as requested */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
