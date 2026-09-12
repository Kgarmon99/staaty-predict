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
  image: string;
}

export interface UFCMatchup {
  id: string;
  weightClass: string;
  eventName: string;
  fighterA: UFCFighter;
  fighterB: UFCFighter;
  modelOutput: {
    winProbA: number; // e.g. 66.4
    winProbB: number; // 33.6
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
  homeWinPct: number;
  recentForm: string; // e.g. "W4"
  logoColor: string;
}

export interface BasketballMatchup {
  id: string;
  league: 'NBA' | 'WNBA' | 'NCAAM' | 'NCAAW';
  homeTeam: BasketballTeam;
  awayTeam: BasketballTeam;
  homeRestDays: number;
  awayRestDays: number;
  modelOutput: {
    homeWinProb: number; // e.g. 68.2
    awayWinProb: number;
    projectedHomeScore: number;
    projectedAwayScore: number;
    projectedSpread: string; // e.g. "Celtics -6.5"
    projectedTotal: number; // e.g. 226.5
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
    weightClass: 'Heavyweight Title Bout',
    eventName: 'UFC 309 — Madison Square Garden',
    fighterA: {
      id: 'jones',
      name: 'Jon Jones',
      nickname: 'Bones',
      record: '27-1-0',
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
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&auto=format&fit=crop&q=80'
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
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&auto=format&fit=crop&q=80'
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
        { method: 'Decision', prob: 28, fav: 'Split' },
      ],
      keyFactors: [
        { factor: 'Reach Advantage', edge: '+4.5 inches for Jon Jones', impact: 'high' },
        { factor: 'Takedown Defense', edge: '95% vs 68% (Jones elite control)', impact: 'high' },
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
    weightClass: 'Light Heavyweight Title Bout',
    eventName: 'UFC 310 — Las Vegas',
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
      image: 'https://images.unsplash.com/photo-1509563884634-118e69d76757?w=400&auto=format&fit=crop&q=80'
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
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&auto=format&fit=crop&q=80'
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
        { factor: 'Control Time Threat', edge: 'Ankalaev averages 3:12 ground control per fight', impact: 'medium' }
      ],
      spreadProp: {
        expectedDistance: 'Under 3.5 Rounds (57.1% Prob)',
        totalStrikesOU: 94.5,
        bestPropBet: 'Alex Pereira by KO/TKO in Rounds 1-2',
        propOdds: '+185'
      }
    }
  }
];

export const BASKETBALL_MATCHUPS: BasketballMatchup[] = [
  {
    id: 'bball-nba-1',
    league: 'NBA',
    homeTeam: {
      id: 'bos',
      name: 'Boston Celtics',
      abbrev: 'BOS',
      record: '57-15',
      offRating: 123.2,
      defRating: 110.4,
      netRating: 12.8,
      pace: 98.4,
      homeWinPct: 84.2,
      recentForm: 'W5',
      logoColor: '#008348'
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
      homeWinPct: 78.5,
      recentForm: 'W2',
      logoColor: '#0E2240'
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
    id: 'bball-wnba-1',
    league: 'WNBA',
    homeTeam: {
      id: 'lva',
      name: 'Las Vegas Aces',
      abbrev: 'LVA',
      record: '30-10',
      offRating: 111.4,
      defRating: 99.2,
      netRating: 12.2,
      pace: 82.1,
      homeWinPct: 82.5,
      recentForm: 'W4',
      logoColor: '#000000'
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
      homeWinPct: 85.0,
      recentForm: 'W3',
      logoColor: '#6ECEB2'
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
        { factor: 'Home Court Efficiency', edge: 'Las Vegas averages +6.2 PPG at Michelob ULTRA Arena', advantage: 'home' },
        { factor: 'Offensive Glass Advantage', edge: 'Liberty +4.1 rebounds per game edge', advantage: 'away' },
        { factor: 'Turnover Forcing %', edge: 'Aces force 16.2 turnovers/gm at home', advantage: 'home' }
      ],
      propBets: [
        { player: "A'ja Wilson", propType: 'Points + Rebounds', line: 32.5, recommendation: 'OVER', confidence: 84 },
        { player: 'Breanna Stewart', propType: 'Points', line: 21.5, recommendation: 'OVER', confidence: 73 }
      ]
    }
  },
  {
    id: 'bball-ncaam-1',
    league: 'NCAAM',
    homeTeam: {
      id: 'duke',
      name: 'Duke Blue Devils',
      abbrev: 'DUKE',
      record: '27-6',
      offRating: 119.8,
      defRating: 94.2,
      netRating: 25.6,
      pace: 68.2,
      homeWinPct: 91.2,
      recentForm: 'W6',
      logoColor: '#003087'
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
      homeWinPct: 84.6,
      recentForm: 'W3',
      logoColor: '#7BAFD4'
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
        { factor: 'KenPom Efficiency Margin', edge: 'Duke +25.6 AdjEM vs UNC +18.4', advantage: 'home' },
        { factor: 'Pace Disparity', edge: 'UNC prefers fast pace (71.5) vs Duke half-court grinding (68.2)', advantage: 'away' }
      ],
      propBets: [
        { player: 'Cooper Flagg', propType: 'Points + Rebounds', line: 24.5, recommendation: 'OVER', confidence: 81 },
        { player: 'RJ Davis', propType: 'Points', line: 18.5, recommendation: 'UNDER', confidence: 66 }
      ]
    }
  },
  {
    id: 'bball-ncaaw-1',
    league: 'NCAAW',
    homeTeam: {
      id: 'uconn',
      name: 'UConn Huskies',
      abbrev: 'UCONN',
      record: '33-5',
      offRating: 118.4,
      defRating: 88.1,
      netRating: 30.3,
      pace: 72.4,
      homeWinPct: 94.1,
      recentForm: 'W8',
      logoColor: '#000E2F'
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
      homeWinPct: 89.4,
      recentForm: 'W5',
      logoColor: '#FFCD00'
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
        { factor: 'Paint Points Efficiency', edge: 'UConn +14.2 interior points advantage', advantage: 'home' },
        { factor: 'Transition Scoring Rate', edge: 'Iowa fast break efficiency +8.8 PPG', advantage: 'away' }
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
    achievedAccuracy: '64.2%',
    sampleSize: '3,820 Fights',
    keyFeatures: 'Striking differential, TD defense %, fatigue decay curves, round distance history',
    status: 'VERIFIED'
  },
  {
    category: 'UFC Win-Method Model',
    sport: 'UFC',
    benchmarkTarget: '>50.0%',
    achievedAccuracy: '58.7%',
    sampleSize: '3,820 Fights',
    keyFeatures: 'KO/Sub finish rates, chin durability index, reach advantage, grappling control %',
    status: 'VERIFIED'
  },
  {
    category: 'NBA Win Prediction',
    sport: 'Basketball (NBA)',
    benchmarkTarget: '>50.0%',
    achievedAccuracy: '67.4%',
    sampleSize: '2,460 Games',
    keyFeatures: 'Adjusted Net Rating, Rest-days fatigue penalty, 3PT volume variance, Home-court Elo',
    status: 'VERIFIED'
  },
  {
    category: 'WNBA Win Prediction',
    sport: 'Basketball (WNBA)',
    benchmarkTarget: '>50.0%',
    achievedAccuracy: '64.1%',
    sampleSize: '410 Games',
    keyFeatures: 'Four Factors, Offensive glass rating, Pace matchup index, Roster continuity',
    status: 'VERIFIED'
  },
  {
    category: 'NCAAM Win Prediction',
    sport: 'Basketball (NCAAM)',
    benchmarkTarget: '>50.0%',
    achievedAccuracy: '69.8%',
    sampleSize: '5,200 Games',
    keyFeatures: 'KenPom Efficiency Margins, Home altitude & crowd index, Turnover force %',
    status: 'VERIFIED'
  },
  {
    category: 'NCAAW Win Prediction',
    sport: 'Basketball (NCAAW)',
    benchmarkTarget: '>50.0%',
    achievedAccuracy: '71.5%',
    sampleSize: '4,800 Games',
    keyFeatures: 'Assist-to-Turnover ratio, Paint dominance rating, Scoring depth index',
    status: 'VERIFIED'
  }
];
