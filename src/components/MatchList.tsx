import React from 'react';
import type { Match } from '../types';
import MatchCard from './MatchCard';
import MatchCardSkeleton from './MatchCardSkeleton';

interface MatchListProps {
  matches: Match[];
  isLoading: boolean;
  error: string | null;
}

const MatchList: React.FC<MatchListProps> = ({ matches, isLoading, error }) => {  if (error) {
    return (
      <div className="text-center py-12 px-4">
        <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-lg inline-block mx-auto">
          <h3 className="font-bold text-lg mb-2">Error Loading Matches</h3>
          <p>{error}</p>
          <p className="mt-4 text-sm">
            Please check your API key or try again later.
          </p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <MatchCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (matches.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 p-4 rounded-lg inline-block">
          <h3 className="font-bold text-lg mb-2">No Matches Found</h3>
          <p>There are no upcoming matches to display at this time.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {matches.map((match, index) => (
        <MatchCard key={index} match={match} />
      ))}
    </div>
  );
};

export default MatchList;