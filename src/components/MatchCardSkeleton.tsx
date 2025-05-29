import React from 'react';

const MatchCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 animate-pulse">
      <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-3">
        <div className="h-4 bg-blue-300 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-blue-300 rounded w-1/2"></div>
      </div>
      
      <div className="p-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-2/3"></div>
            </div>
            <div className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded-full w-16"></div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-2/3"></div>
            </div>
            <div className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded-full w-16"></div>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="bg-gray-200 dark:bg-gray-600 px-3 py-1.5 rounded-lg w-24 h-8"></div>
          <div className="bg-gray-200 dark:bg-gray-600 w-20 h-4 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default MatchCardSkeleton;