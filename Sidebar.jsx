import React from 'react';
import { 
  LayoutDashboard, 
  AlertTriangle, 
  Shield, 
  PieChart, 
  Info,
  BarChart3
} from 'lucide-react';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'threat-prioritization', label: 'Threat Prioritization', icon: AlertTriangle },
    { id: 'unbiased-information', label: 'Unbiased Information', icon: Shield },
    { id: 'similar-patterns', label: 'Similar Patterns', icon: PieChart },
    { id: 'about-us', label: 'About Us', icon: Info }
  ];

  return (
    <div className="w-64 bg-gray-800 text-white h-screen fixed left-0 top-0 p-4 shadow-lg">
      <div className="flex items-center mb-8 mt-4 pl-4">
        <BarChart3 className="text-blue-400 mr-2" size={24} />
        <span className="text-xl font-bold">Cyber Sentinel</span>
      </div>
      
      <nav>
        <ul>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id} className="mb-1">
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center w-full p-3 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <Icon size={20} className="mr-3" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;