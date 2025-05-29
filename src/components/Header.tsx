import React from 'react';
import { Github, Zap } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4">        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg">
              <Zap className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                Sports Matches
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Live Football Fixtures
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://www.api-football.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-1"
            >
              <span>Data by API-FOOTBALL</span>
            </a>
            
            <a 
              href="https://github.com/Shivam-knight-owl/sports-matches" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 px-3 py-1.5 rounded-lg transition-colors duration-200 flex items-center gap-2"
            >
              <Github size={16} />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;