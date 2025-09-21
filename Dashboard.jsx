import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import SearchBar from './SearchBar';
import TopThreatsCard from './TopThreatsCard';
import SimilarPatternsCard from './SimilarPatternsCard';
import RealTimeGraphCard from './RealTimeGraphCard';
import OverallAttacksCard from './OverallAttacksCard';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-100'} transition-colors duration-200`}>
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <SearchBar />
      
      <main className="ml-64 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TopThreatsCard />
          <SimilarPatternsCard />
          <RealTimeGraphCard />
          <OverallAttacksCard />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;