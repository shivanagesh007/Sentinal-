import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="flex justify-center mt-6 mb-8 ml-64 px-6">
      <div className="relative w-full max-w-2xl">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Your problem"
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
      </div>
    </div>
  );
};

export default SearchBar;