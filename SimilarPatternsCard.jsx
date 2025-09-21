import React from 'react';
import { PieChart, TrendingUp } from 'lucide-react';

const SimilarPatternsCard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 h-96 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Similar Pattern Attacks</h2>
        <TrendingUp size={20} className="ml-2 text-blue-500" />
      </div>
      
      <div className="flex flex-col items-center justify-center h-5/6">
        <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">12</div>
        <p className="text-gray-600 dark:text-gray-300 text-center text-lg mb-8">
          recent matches detected with similar attack patterns
        </p>
        
        <div className="w-full">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Pattern Match Confidence</span>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">87%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500" 
              style={{ width: '87%' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarPatternsCard;