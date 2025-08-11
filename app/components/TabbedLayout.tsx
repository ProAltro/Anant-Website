import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
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
  const location = useLocation();

  // Sync active tab with router location.hash (handles Link navigations)
  useEffect(() => {
    const hash = (location.hash || '').replace('#', '') || 'hero';
    if (tabs.some((t) => t.id === hash)) {
      setActiveTab(hash);
    } else {
      setActiveTab('hero');
    }
  }, [location.hash]);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    if (typeof window !== 'undefined') {
      window.location.hash = id;
    }
  };

  const activeComponent = tabs.find(tab => tab.id === activeTab)?.component;
  const ActiveComponent = activeComponent || Hero;

  // When switching to the hero tab (especially after a route change), ensure we scroll to the very top
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isHome = (location.pathname || '/') === '/';
      const onHero = activeTab === 'hero';
      if (isHome && onHero) {
        // Use instant jump to avoid visible jank during page transition
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    }
  }, [activeTab, location.pathname]);

  const topPad = activeTab === 'hero' ? 'pt-0' : 'pt-14 md:pt-16';

  return (
    <div className={`min-h-screen bg-transparent ${topPad} pb-8 md:pb-12`}>
      {/* Tab Content Only (header provides navigation) */}
      <div className="tab-content">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default TabbedLayout;
