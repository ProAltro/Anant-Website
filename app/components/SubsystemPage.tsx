import React from 'react';
import Header from './Header';
import Footer from './Footer';

export type SubsystemLayoutProps = {
  code: string;
  subtitle: string;
  description: string;
  children: React.ReactNode;
};

export const SectionHeading: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = '', children }) => (
  <div className={`text-center mb-10 ${className}`}>
    <h2 className="text-3xl md:text-4xl font-bold mb-2 title-caps title-gradient font-heading inline-block">
      {children}
    </h2>
    <div className="title-underline mx-auto mb-6"></div>
  </div>
);

const SubsystemLayout: React.FC<SubsystemLayoutProps> = ({ code, subtitle, description, children }) => {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <main className="pt-20">
        {/* Hero (transparent, starfield underneath) */}
        <section className="py-16 cosmic-hero bg-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-3 title-caps title-gradient font-heading inline-block">
                {code}
              </h1>
              <div className="title-underline mb-6 mx-auto"></div>
              <p className="text-lg text-white/85 mb-2">{subtitle}</p>
              <p className="text-base text-white/70 max-w-2xl mx-auto">{description}</p>
            </div>
          </div>
        </section>

        {/* Page content */}
        <div className="container mx-auto px-4">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SubsystemLayout;
