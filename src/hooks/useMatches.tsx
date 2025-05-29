import { useState, useEffect } from 'react';
import type { Match, ApiError } from '../types';
import { getUpcomingMatches } from '../services/api';

export const useMatches = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setIsLoading(true);
        setError(null);
          const data = await getUpcomingMatches();
        setMatches(data.response || []);
      } catch (err) {
        const apiError = err as ApiError;
        setError(apiError.message || 'Failed to load matches');
        console.error('Error fetching matches:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMatches();
  }, []);

  return { matches, isLoading, error };
};