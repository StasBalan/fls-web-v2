export type FaceitProfile = {
  player_id: string;
  nickname: string;
  country: string; // "nl"...
  games: {
    cs2: {
      region: string; // "EU"...
      game_player_id: string;
      skill_level: number;
      faceit_elo: number;
      game_player_name: string;
    };
  };
  settings: { language: "en" };
  friends_ids: string[];
  faceit_url: string;
  verified: boolean;
  activated_at: string;
  // other props
};

export type FaceitMatchStats = {
  matchId: string;
  map: string;
  isWin: boolean;
  elo?: number;
  elo_delta?: number;
  kills: number;
  deaths: number;
  assists: number;
  kd: number;
  kr: number;
  rounds: number;
  damage: number;
  hs: number;
  hsPercent: number;
  date: number;
};
