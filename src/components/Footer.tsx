import React from 'react';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-6 px-4 border-t border-gray-200">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Sports Matches. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">            <a 
              href="https://www.api-football.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 text-sm"
            >
              Data provided by API-FOOTBALL
            </a>
            
            <a 
              href="https://github.com/Shivam-knight-owl/sports-matches" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 flex items-center gap-1"
            >
              <Github size={16} />
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;