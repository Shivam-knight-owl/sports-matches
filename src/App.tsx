import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MatchList from './components/MatchList';
import { useMatches } from './hooks/useMatches';
import { CalendarClock, RefreshCw } from 'lucide-react';

function App() {
  const { matches, isLoading, error } = useMatches();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                <CalendarClock className="text-blue-600" size={24} />
                Upcoming Matches
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Displaying the latest scheduled football matches from around the world
              </p>
            </div>
            
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 self-start"
              onClick={() => window.location.reload()}
              disabled={isLoading}
            >
              <RefreshCw size={16} className={isLoading ? 'animate-spin' : ''} />
              Refresh Matches
            </button>
          </div>
        </div>
        
        <MatchList 
          matches={matches}
          isLoading={isLoading}
          error={error}
        />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;