import React from 'react';
import { formatMatchDate, formatMatchTime } from '../utils/dateUtils';
import type { Match } from '../types';
import { Trophy, Clock } from 'lucide-react';

interface MatchCardProps {
  match: Match;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 text-white">
        <div className="flex items-center gap-2">
          <Trophy size={16} />  <h3 className="font-medium text-sm truncate">{match.league.name}</h3>
        </div>
        <div className="flex items-center gap-2 text-blue-100 mt-1 text-xs">
          <Clock size={14} />
          <span>{formatMatchDate(match.fixture.date)}</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">            <div className="flex items-center gap-3 flex-1">
              {match.teams.home.logo && (
                <img 
                  src={match.teams.home.logo} 
                  alt={`${match.teams.home.name} logo`}
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              )}
              <span className="font-semibold truncate">{match.teams.home.name}</span>
            </div>
            <div className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
              HOME
            </div>
          </div>
          
          <div className="flex items-center justify-between">            <div className="flex items-center gap-3 flex-1">
              {match.teams.away.logo && (
                <img 
                  src={match.teams.away.logo} 
                  alt={`${match.teams.away.name} logo`}
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              )}
              <span className="font-semibold truncate">{match.teams.away.name}</span>
            </div>
            <div className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium">
              AWAY
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1.5">
            <Clock size={14} />
            {formatMatchTime(match.fixture.date)}
          </div>          <div className="text-xs text-gray-500 dark:text-gray-400">
            Status: {match.fixture.status.long}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;