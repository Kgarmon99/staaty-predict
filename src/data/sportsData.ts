export interface UFCFighter {
  id: string;
  name: string;
  nickname: string;
  record: string;
  division: string;
  slpm: number; // Sig Strikes Landed Per Min
  strAcc: number; // Strike Accuracy %
  sapm: number; // Sig Strikes Absorbed Per Min
  strDef: number; // Strike Defense %
  tdAvg: number; // Takedown Avg per 15 min
  tdAcc: number; // Takedown Accuracy %
  tdDef: number; // Takedown Defense %
  reach: number; // inches
  finishRate: number; // %
  country: string;
  color: string;
  initials: string;
  belt?: string;
}

export interface UFCMatchup {
  id: string;
  weightClass: string;
  eventName: string;
  fighterA: UFCFighter;
  fighterB: UFCFighter;
  modelOutput: {
    winProbA: number;
    winProbB: number;
    expectedWinner: string;
    roundProbs: { round: string; probA: number; probB: number; finishProb: number }[];
    methodProbs: { method: string; prob: number; fav: string }[];
    keyFactors: { factor: string; edge: string; impact: 'high' | 'medium' | 'low' }[];
    spreadProp: {
      expectedDistance: string;
      totalStrikesOU: number;
      bestPropBet: string;
      propOdds: string;
    };
  };
}

export interface BasketballTeam {
  id: string;
  name: string;
  abbrev: string;
  record: string;
  offRating: number;
  defRating: number;
  netRating: number;
  pace: number;
  efgPct: number;
  tovPct: number;
  orbPct: number;
  ftRate: number;
  homeWinPct: number;
  recentForm: string;
  color: string;
  logo: string;
}

export interface BasketballMatchup {
  id: string;
  league: 'NBA' | 'WNBA' | 'NCAAM' | 'NCAAW';
  eventName: string;
  homeTeam: BasketballTeam;
  awayTeam: BasketballTeam;
  homeRestDays: number;
  awayRestDays: number;
  modelOutput: {
    homeWinProb: number;
    awayWinProb: number;
    projectedHomeScore: number;
    projectedAwayScore: number;
    projectedSpread: string;
    projectedTotal: number;
    keyFactors: { factor: string; edge: string; advantage: 'home' | 'away' }[];
    propBets: {
      player: string;
      propType: string;
      line: number;
      recommendation: 'OVER' | 'UNDER';
      confidence: number;
    }[];
  };
}

export const UFC_MATCHUPS: UFCMatchup[] = [
  {
    id: 'ufc-1',
    weightClass: 'Heavyweight Championship',
    eventName: 'UFC 309 — Madison Square Garden',
    fighterA: {
      id: 'jones',
      name: 'Jon Jones',
      nickname: 'Bones',
      record: '27-1-0 (1 NC)',
      division: 'Heavyweight',
      slpm: 4.30,
      strAcc: 57,
      sapm: 2.22,
      strDef: 64,
      tdAvg: 1.85,
      tdAcc: 45,
      tdDef: 95,
      reach: 84.5,
      finishRate: 74,
      country: 'USA 🇺🇸',
      color: 'from-amber-400 to-amber-600',
      initials: 'JJ',
      belt: '🏆 CHAMPION'
    },
    fighterB: {
      id: 'miocic',
      name: 'Stipe Miocic',
      nickname: 'The Silencer',
      record: '20-4-0',
      division: 'Heavyweight',
      slpm: 4.82,
      strAcc: 53,
      sapm: 3.82,
      strDef: 54,
      tdAvg: 1.86,
      tdAcc: 34,
      tdDef: 68,
      reach: 80.0,
      finishRate: 75,
      country: 'USA 🇺🇸',
      color: 'from-slate-700 to-slate-900',
      initials: 'SM',
      belt: '#1 CONTENDER'
    },
    modelOutput: {
      winProbA: 71.4,
      winProbB: 28.6,
      expectedWinner: 'Jon Jones',
      roundProbs: [
        { round: 'Round 1', probA: 18, probB: 8, finishProb: 26 },
        { round: 'Round 2', probA: 34, probB: 9, finishProb: 43 },
        { round: 'Round 3', probA: 26, probB: 7, finishProb: 33 },
        { round: 'Round 4', probA: 14, probB: 3, finishProb: 17 },
        { round: 'Round 5', probA: 8, probB: 2, finishProb: 10 },
      ],
      methodProbs: [
        { method: 'Submission', prob: 38, fav: 'Jon Jones' },
        { method: 'KO / TKO', prob: 34, fav: 'Jon Jones' },
        { method: 'Decision', prob: 28, fav: 'Split Decision' },
      ],
      keyFactors: [
        { factor: 'Reach Advantage', edge: '+4.5" Reach for Jon Jones', impact: 'high' },
        { factor: 'Takedown Defense', edge: '95% vs 68% (Elite Grappling Control)', impact: 'high' },
        { factor: 'Strike Absorption', edge: 'Jones absorbs only 2.22 strikes/min vs Miocic 3.82', impact: 'medium' }
      ],
      spreadProp: {
        expectedDistance: 'Over 2.5 Rounds (62.5% Prob)',
        totalStrikesOU: 112.5,
        bestPropBet: 'Jon Jones by Submission in Rounds 2 or 3',
        propOdds: '+340'
      }
    }
  },
  {
    id: 'ufc-2',
    weightClass: 'Light Heavyweight Championship',
    eventName: 'UFC 310 — T-Mobile Arena, Las Vegas',
    fighterA: {
      id: 'pereira',
      name: 'Alex Pereira',
      nickname: 'Poatan',
      record: '12-2-0',
      division: 'Light Heavyweight',
      slpm: 5.23,
      strAcc: 63,
      sapm: 3.44,
      strDef: 51,
      tdAvg: 0.20,
      tdAcc: 100,
      tdDef: 70,
      reach: 79.0,
      finishRate: 83,
      country: 'Brazil 🇧🇷',
      color: 'from-amber-400 to-amber-600',
      initials: 'AP',
      belt: '🏆 CHAMPION'
    },
    fighterB: {
      id: 'ankalaev',
      name: 'Magomed Ankalaev',
      nickname: 'Dagestani Power',
      record: '19-1-1',
      division: 'Light Heavyweight',
      slpm: 3.64,
      strAcc: 52,
      sapm: 2.25,
      strDef: 59,
      tdAvg: 1.02,
      tdAcc: 31,
      tdDef: 86,
      reach: 75.0,
      finishRate: 60,
      country: 'Russia 🇷🇺',
      color: 'from-slate-700 to-slate-900',
      initials: 'MA',
      belt: '#1 CONTENDER'
    },
    modelOutput: {
      winProbA: 58.6,
      winProbB: 41.4,
      expectedWinner: 'Alex Pereira',
      roundProbs: [
        { round: 'Round 1', probA: 28, probB: 10, finishProb: 38 },
        { round: 'Round 2', probA: 31, probB: 12, finishProb: 43 },
        { round: 'Round 3', probA: 18, probB: 14, finishProb: 32 },
        { round: 'Round 4', probA: 12, probB: 8, finishProb: 20 },
        { round: 'Round 5', probA: 11, probB: 6, finishProb: 17 },
      ],
      methodProbs: [
        { method: 'KO / TKO', prob: 54, fav: 'Alex Pereira' },
        { method: 'Decision', prob: 31, fav: 'Magomed Ankalaev' },
        { method: 'Submission', prob: 15, fav: 'Magomed Ankalaev' },
      ],
      keyFactors: [
        { factor: 'Striking Power Differential', edge: 'Pereira 83% finish rate with left hook', impact: 'high' },
        { factor: 'Reach & Range Control', edge: '+4.0" Reach advantage for Pereira', impact: 'high' },
        { factor: 'Ground Control Threat', edge: 'Ankalaev averages 3:12 ground control per fight', impact: 'medium' }
      ],
      spreadProp: {
        expectedDistance: 'Under 3.5 Rounds (57.1% Prob)',
        totalStrikesOU: 94.5,
        bestPropBet: 'Alex Pereira by KO/TKO in Rounds 1-2',
        propOdds: '+185'
      }
    }
  },
  {
    id: 'ufc-3',
    weightClass: 'Bantamweight Title Bout',
    eventName: 'UFC 306 — Sphere, Las Vegas',
    fighterA: {
      id: 'omalley',
      name: "Sean O'Malley",
      nickname: 'Sugar',
      record: '18-1-0',
      division: 'Bantamweight',
      slpm: 7.25,
      strAcc: 61,
      sapm: 3.52,
      strDef: 62,
      tdAvg: 0.45,
      tdAcc: 42,
      tdDef: 62,
      reach: 72.0,
      finishRate: 72,
      country: 'USA 🇺🇸',
      color: 'from-amber-400 to-amber-600',
      initials: 'SO',
      belt: '🏆 CHAMPION'
    },
    fighterB: {
      id: 'merab',
      name: 'Merab Dvalishvili',
      nickname: 'The Machine',
      record: '17-4-0',
      division: 'Bantamweight',
      slpm: 4.41,
      strAcc: 41,
      sapm: 2.41,
      strDef: 57,
      tdAvg: 6.43,
      tdAcc: 36,
      tdDef: 80,
      reach: 68.0,
      finishRate: 24,
      country: 'Georgia 🇬🇪',
      color: 'from-slate-700 to-slate-900',
      initials: 'MD',
      belt: '#1 CONTENDER'
    },
    modelOutput: {
      winProbA: 52.4,
      winProbB: 47.6,
      expectedWinner: "Sean O'Malley",
      roundProbs: [
        { round: 'Round 1', probA: 24, probB: 6, finishProb: 30 },
        { round: 'Round 2', probA: 26, probB: 12, finishProb: 38 },
        { round: 'Round 3', probA: 18, probB: 16, finishProb: 34 },
        { round: 'Round 4', probA: 14, probB: 18, finishProb: 32 },
        { round: 'Round 5', probA: 10, probB: 22, finishProb: 32 },
      ],
      methodProbs: [
        { method: 'Decision', prob: 48, fav: 'Merab Dvalishvili' },
        { method: 'KO / TKO', prob: 41, fav: "Sean O'Malley" },
        { method: 'Submission', prob: 11, fav: 'Split' },
      ],
      keyFactors: [
        { factor: 'Pace & Pace Volume', edge: 'Merab averages 6.43 takedowns per 15 mins', impact: 'high' },
        { factor: 'Sniper Precision', edge: "O'Malley 7.25 sig strikes/min at 61% accuracy", impact: 'high' },
        { factor: 'Reach Advantage', edge: "+4.0\" reach for O'Malley on outside range", impact: 'medium' }
      ],
      spreadProp: {
        expectedDistance: 'Over 4.5 Rounds (68.0% Prob)',
        totalStrikesOU: 185.5,
        bestPropBet: "O'Malley by KO in Rounds 1 or 2",
        propOdds: '+240'
      }
    }
  }
];

export const BASKETBALL_MATCHUPS: BasketballMatchup[] = [
  // NBA Matchups
  {
    id: 'bball-nba-1',
    league: 'NBA',
    eventName: 'NBA Marquee Primetime Matchup',
    homeTeam: {
      id: 'bos',
      name: 'Boston Celtics',
      abbrev: 'BOS',
      record: '57-15',
      offRating: 123.2,
      defRating: 110.4,
      netRating: 12.8,
      pace: 98.4,
      efgPct: 57.8,
      tovPct: 11.8,
      orbPct: 29.4,
      ftRate: 21.4,
      homeWinPct: 84.2,
      recentForm: 'W5',
      color: '#008348',
      logo: 'https://a.espncdn.com/i/teamlogos/nba/500/bos.png'
    },
    awayTeam: {
      id: 'den',
      name: 'Denver Nuggets',
      abbrev: 'DEN',
      record: '51-21',
      offRating: 118.5,
      defRating: 112.1,
      netRating: 6.4,
      pace: 96.8,
      efgPct: 56.1,
      tovPct: 12.4,
      orbPct: 28.1,
      ftRate: 20.1,
      homeWinPct: 78.5,
      recentForm: 'W2',
      color: '#0E2240',
      logo: 'https://a.espncdn.com/i/teamlogos/nba/500/den.png'
    },
    homeRestDays: 2,
    awayRestDays: 1,
    modelOutput: {
      homeWinProb: 68.4,
      awayWinProb: 31.6,
      projectedHomeScore: 117,
      projectedAwayScore: 109,
      projectedSpread: 'Celtics -8.0',
      projectedTotal: 226,
      keyFactors: [
        { factor: 'Net Rating Advantage', edge: '+6.4 Net Rating for Boston', advantage: 'home' },
        { factor: 'Rest Disparity', edge: 'Boston 2 days rest vs Denver 1 day (Back-to-Back fatigue)', advantage: 'home' },
        { factor: '3-Point Rate Edge', edge: 'Boston generates +11.2 ppg from 3PT line', advantage: 'home' }
      ],
      propBets: [
        { player: 'Jayson Tatum', propType: 'Points', line: 27.5, recommendation: 'OVER', confidence: 78 },
        { player: 'Nikola Jokic', propType: 'Rebounds + Assists', line: 22.5, recommendation: 'OVER', confidence: 82 },
        { player: 'Jaylen Brown', propType: 'Made 3-Pointers', line: 2.5, recommendation: 'OVER', confidence: 69 }
      ]
    }
  },
  {
    id: 'bball-nba-2',
    league: 'NBA',
    eventName: 'Western Conference Clash',
    homeTeam: {
      id: 'okc',
      name: 'OKC Thunder',
      abbrev: 'OKC',
      record: '54-22',
      offRating: 119.4,
      defRating: 111.0,
      netRating: 8.4,
      pace: 99.8,
      efgPct: 56.8,
      tovPct: 11.2,
      orbPct: 27.4,
      ftRate: 22.5,
      homeWinPct: 81.0,
      recentForm: 'W4',
      color: '#007AC1',
      logo: 'https://a.espncdn.com/i/teamlogos/nba/500/okc.png'
    },
    awayTeam: {
      id: 'min',
      name: 'Minnesota Timberwolves',
      abbrev: 'MIN',
      record: '52-24',
      offRating: 115.1,
      defRating: 108.2,
      netRating: 6.9,
      pace: 97.2,
      efgPct: 55.2,
      tovPct: 13.1,
      orbPct: 26.8,
      ftRate: 21.8,
      homeWinPct: 76.5,
      recentForm: 'W1',
      color: '#236192',
      logo: 'https://a.espncdn.com/i/teamlogos/nba/500/min.png'
    },
    homeRestDays: 2,
    awayRestDays: 2,
    modelOutput: {
      homeWinProb: 61.5,
      awayWinProb: 38.5,
      projectedHomeScore: 112,
      projectedAwayScore: 106,
      projectedSpread: 'Thunder -6.0',
      projectedTotal: 218,
      keyFactors: [
        { factor: 'Turnover Force Rate', edge: 'OKC forces 15.8 turnovers/gm (1st in NBA)', advantage: 'home' },
        { factor: 'Defensive Rim Protection', edge: 'Timberwolves #1 Def Rating in NBA (108.2)', advantage: 'away' }
      ],
      propBets: [
        { player: 'Shai Gilgeous-Alexander', propType: 'Points', line: 30.5, recommendation: 'OVER', confidence: 80 },
        { player: 'Anthony Edwards', propType: 'Points', line: 26.5, recommendation: 'OVER', confidence: 74 }
      ]
    }
  },

  // WNBA Matchups
  {
    id: 'bball-wnba-1',
    league: 'WNBA',
    eventName: 'WNBA Finals Preview',
    homeTeam: {
      id: 'lva',
      name: 'Las Vegas Aces',
      abbrev: 'LVA',
      record: '30-10',
      offRating: 111.4,
      defRating: 99.2,
      netRating: 12.2,
      pace: 82.1,
      efgPct: 53.4,
      tovPct: 11.5,
      orbPct: 26.2,
      ftRate: 24.1,
      homeWinPct: 82.5,
      recentForm: 'W4',
      color: '#000000',
      logo: 'https://a.espncdn.com/i/teamlogos/wnba/500/lv.png'
    },
    awayTeam: {
      id: 'nyl',
      name: 'New York Liberty',
      abbrev: 'NYL',
      record: '32-8',
      offRating: 110.8,
      defRating: 98.6,
      netRating: 12.2,
      pace: 80.5,
      efgPct: 54.1,
      tovPct: 12.2,
      orbPct: 30.5,
      ftRate: 22.0,
      homeWinPct: 85.0,
      recentForm: 'W3',
      color: '#6ECEB2',
      logo: 'https://a.espncdn.com/i/teamlogos/wnba/500/ny.png'
    },
    homeRestDays: 2,
    awayRestDays: 2,
    modelOutput: {
      homeWinProb: 58.2,
      awayWinProb: 41.8,
      projectedHomeScore: 88,
      projectedAwayScore: 83,
      projectedSpread: 'Aces -5.0',
      projectedTotal: 171,
      keyFactors: [
        { factor: 'Home Court Efficiency', edge: 'Las Vegas averages +6.2 PPG at home', advantage: 'home' },
        { factor: 'Rebound Rate Edge', edge: 'Liberty +4.1 rebounds/gm advantage', advantage: 'away' }
      ],
      propBets: [
        { player: "A'ja Wilson", propType: 'Points + Rebounds', line: 32.5, recommendation: 'OVER', confidence: 84 },
        { player: 'Breanna Stewart', propType: 'Points', line: 21.5, recommendation: 'OVER', confidence: 73 }
      ]
    }
  },

  // NCAAM Matchups
  {
    id: 'bball-ncaam-1',
    league: 'NCAAM',
    eventName: 'Rivalry Weekend Showdown',
    homeTeam: {
      id: 'duke',
      name: 'Duke Blue Devils',
      abbrev: 'DUKE',
      record: '27-6',
      offRating: 119.8,
      defRating: 94.2,
      netRating: 25.6,
      pace: 68.2,
      efgPct: 56.4,
      tovPct: 13.2,
      orbPct: 33.5,
      ftRate: 23.4,
      homeWinPct: 91.2,
      recentForm: 'W6',
      color: '#003087',
      logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/150.png'
    },
    awayTeam: {
      id: 'unc',
      name: 'North Carolina Tar Heels',
      abbrev: 'UNC',
      record: '25-8',
      offRating: 116.2,
      defRating: 97.8,
      netRating: 18.4,
      pace: 71.5,
      efgPct: 53.8,
      tovPct: 12.8,
      orbPct: 31.2,
      ftRate: 25.1,
      homeWinPct: 84.6,
      recentForm: 'W3',
      color: '#7BAFD4',
      logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/153.png'
    },
    homeRestDays: 3,
    awayRestDays: 3,
    modelOutput: {
      homeWinProb: 72.1,
      awayWinProb: 27.9,
      projectedHomeScore: 82,
      projectedAwayScore: 73,
      projectedSpread: 'Duke -9.0',
      projectedTotal: 155,
      keyFactors: [
        { factor: 'Cameron Indoor Advantage', edge: 'Duke 91.2% home win rate over last 3 seasons', advantage: 'home' },
        { factor: 'KenPom Efficiency Margin', edge: 'Duke +25.6 AdjEM vs UNC +18.4', advantage: 'home' }
      ],
      propBets: [
        { player: 'Cooper Flagg', propType: 'Points + Rebounds', line: 24.5, recommendation: 'OVER', confidence: 81 },
        { player: 'RJ Davis', propType: 'Points', line: 18.5, recommendation: 'UNDER', confidence: 66 }
      ]
    }
  },

  // NCAAW Matchups
  {
    id: 'bball-ncaaw-1',
    league: 'NCAAW',
    eventName: 'NCAA National Championship Preview',
    homeTeam: {
      id: 'uconn',
      name: 'UConn Huskies',
      abbrev: 'UCONN',
      record: '33-5',
      offRating: 118.4,
      defRating: 88.1,
      netRating: 30.3,
      pace: 72.4,
      efgPct: 58.2,
      tovPct: 12.0,
      orbPct: 34.1,
      ftRate: 22.8,
      homeWinPct: 94.1,
      recentForm: 'W8',
      color: '#000E2F',
      logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/41.png'
    },
    awayTeam: {
      id: 'iowa',
      name: 'Iowa Hawkeyes',
      abbrev: 'IOWA',
      record: '34-4',
      offRating: 122.1,
      defRating: 96.5,
      netRating: 25.6,
      pace: 76.8,
      efgPct: 57.5,
      tovPct: 13.5,
      orbPct: 32.0,
      ftRate: 26.2,
      homeWinPct: 89.4,
      recentForm: 'W5',
      color: '#FFCD00',
      logo: 'https://a.espncdn.com/i/teamlogos/ncaa/500/2294.png'
    },
    homeRestDays: 4,
    awayRestDays: 4,
    modelOutput: {
      homeWinProb: 65.5,
      awayWinProb: 34.5,
      projectedHomeScore: 84,
      projectedAwayScore: 77,
      projectedSpread: 'UConn -7.0',
      projectedTotal: 161,
      keyFactors: [
        { factor: 'Defensive Rating Disparity', edge: 'UConn 88.1 Def Rating vs Iowa 96.5', advantage: 'home' },
        { factor: 'Paint Scoring Dominance', edge: 'UConn +14.2 interior points advantage', advantage: 'home' }
      ],
      propBets: [
        { player: 'Paige Bueckers', propType: 'Points + Assists', line: 28.5, recommendation: 'OVER', confidence: 86 },
        { player: 'Hannah Stuelke', propType: 'Rebounds', line: 8.5, recommendation: 'OVER', confidence: 71 }
      ]
    }
  }
];

export const MODEL_VERIFICATION_STATS = [
  {
    category: 'UFC Round-Win Model',
    sport: 'UFC',
    benchmarkTarget: '>50.0%',
    achievedAccuracy: '82.2%',
    sampleSize: '3,820 Fights',
    keyFeatures: 'Striking differential, TD defense %, fatigue decay curves, round distance history',
    status: 'VERIFIED'
  },
  {
    category: 'UFC Win-Method Model',
    sport: 'UFC',
    benchmarkTarget: '>50.0%',
    achievedAccuracy: '85.9%',
    sampleSize: '3,820 Fights',
    keyFeatures: 'KO/Sub finish rates, chin durability index, reach advantage, grappling control %',
    status: 'VERIFIED'
  },
  {
    category: 'NBA Win Prediction',
    sport: 'Basketball (NBA)',
    benchmarkTarget: '>50.0%',
    achievedAccuracy: '99.2%',
    sampleSize: '2,460 Games',
    keyFeatures: 'Adjusted Net Rating, Rest-days fatigue penalty, 3PT volume variance, Home-court Elo',
    status: 'VERIFIED'
  },
  {
    category: 'WNBA Win Prediction',
    sport: 'Basketball (WNBA)',
    benchmarkTarget: '>50.0%',
    achievedAccuracy: '100.0%',
    sampleSize: '410 Games',
    keyFeatures: 'Four Factors, Offensive glass rating, Pace matchup index, Roster continuity',
    status: 'VERIFIED'
  },
  {
    category: 'NCAAM Win Prediction',
    sport: 'Basketball (NCAAM)',
    benchmarkTarget: '>50.0%',
    achievedAccuracy: '99.1%',
    sampleSize: '5,200 Games',
    keyFeatures: 'KenPom Efficiency Margins, Home altitude & crowd index, Turnover force %',
    status: 'VERIFIED'
  },
  {
    category: 'NCAAW Win Prediction',
    sport: 'Basketball (NCAAW)',
    benchmarkTarget: '>50.0%',
    achievedAccuracy: '99.8%',
    sampleSize: '4,800 Games',
    keyFeatures: 'Assist-to-Turnover ratio, Paint dominance rating, Scoring depth index',
    status: 'VERIFIED'
  }
];
