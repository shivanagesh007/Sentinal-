import React from 'react';
import { Sun, Moon, Shield } from 'lucide-react';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm p-6 ml-64 border-b border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center">
        <div className="text-center flex-1">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Cyber Defense Information
          </h1>
          <p className="text-gray-500 dark:text-gray-400 italic mt-2 text-sm">
            "Vigilance is the price of security"
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="flex items-center justify-end">
              <Shield className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
              <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                Sentinel AI
              </span>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="mt-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;