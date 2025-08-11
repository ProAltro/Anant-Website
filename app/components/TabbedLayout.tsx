import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import Subsystems from './Subsystems';
import Team from './Team';
import Publications from './Publications';
import Contact from './Contact';

interface Tab {
  id: string;
  label: string;
  component: React.ComponentType;
}

const TabbedLayout = () => {
  const tabs: Tab[] = [
    { id: 'hero', label: 'Home', component: Hero },
    { id: 'about', label: 'About', component: About },
    { id: 'subsystems', label: 'Subsystems', component: Subsystems },
    { id: 'team', label: 'Team', component: Team },
    { id: 'publications', label: 'Publications', component: Publications },
    { id: 'contact', label: 'Contact', component: Contact },
  ];

  const [activeTab, setActiveTab] = useState('hero');

  // Sync active tab with URL hash
  useEffect(() => {
    const applyHash = () => {
      const hash = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '';
      if (hash && tabs.some(t => t.id === hash)) {
        setActiveTab(hash);
      }
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    if (typeof window !== 'undefined') {
      window.location.hash = id;
    }
  };

  const activeComponent = tabs.find(tab => tab.id === activeTab)?.component;
  const ActiveComponent = activeComponent || Hero;

  return (
    <div className="min-h-screen bg-anant-dark pb-16 md:pb-24">
      {/* Tab Navigation */}
      <nav className="sticky top-0 z-50 bg-anant-dark/95 backdrop-blur-md border-b border-anant-accent/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center space-x-1 md:space-x-4 py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-anant-accent text-anant-pure shadow-lg transform scale-105'
                    : 'text-anant-mild hover:text-anant-accent hover:bg-anant-gray/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Tab Content */}
      <div className="tab-content">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default TabbedLayout;
