import axios from 'axios';
import type { MatchesResponse, ApiError } from '../types';

const API_KEY = import.meta.env.VITE_API_FOOTBALL_KEY;
const BASE_URL = 'https://v3.football.api-sports.io';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-apisports-key': API_KEY,
    'accept': 'application/json',
  }
});

export const getUpcomingMatches = async (leagueId?: number): Promise<MatchesResponse> => {
  try {
    const today = new Date().toISOString().slice(0, 10);
    const params: Record<string, any> = { date: today };
    if (leagueId) {
      params.league = leagueId;
      params.season = new Date().getFullYear();
    }
    const response = await api.get('/fixtures', { params });
    console.log('API Response:', response.data);
    return response.data;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      const apiError: ApiError = {
        message: error.message,
        status: error.response?.status
      };
      if (error.response?.status === 401) {
        apiError.message = 'API key invalid or unauthorized';
      } else if (error.response?.status === 429) {
        apiError.message = 'Too many requests. Please try again later';
      }
      throw apiError;
    }
    throw { message: 'An unexpected error occurred' };
  }
};
