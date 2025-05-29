export interface Team {
  id: number;
  name: string;
  logo?: string;
}

export interface League {
  id: number;
  name: string;
  country: string;
  logo?: string;
  flag?: string;
  season: number;
}

export interface Fixture {
  id: number;
  referee?: string;
  timezone: string;
  date: string;
  timestamp: number;
  venue: {
    id: number;
    name: string;
    city: string;
  };
  status: {
    long: string;
    short: string;
    elapsed?: number;
  };
}

export interface Goals {
  home: number | null;
  away: number | null;
}

export interface Score {
  halftime: Goals;
  fulltime: Goals;
  extratime: Goals;
  penalty: Goals;
}

export interface Teams {
  home: Team;
  away: Team;
}

export interface Match {
  fixture: Fixture;
  league: League;
  teams: Teams;
  goals: Goals;
  score: Score;
}

export interface MatchesResponse {
  get: string;
  parameters: Record<string, any>;
  errors: any[];
  results: number;
  response: Match[];
}

export interface ApiError {
  message: string;
  status?: number;
}