import { Ranking } from '../models/Ranking';
import { LOADED, SET_TEAM, CHANGE_LOCAL, INCREMENT_GLOBAL } from '../constants/actionTypes';
import { Team } from '../models/Team';
import { MyTeam } from '../models/MyTeam';
import * as deepFreeze from 'deep-freeze';

const ranking = (state: Ranking = {myTeam: {myClicks: -1, clicks: -1, name: ''}, ranking: []}, action: any) => {
  switch (action.type) {
    case LOADED:
      return {...state, ranking: action.ranking};   

    case SET_TEAM: {
      deepFreeze(state);

      let name: string;
      if ( action.decode ) {
        name = decodeURIComponent(action.name);      
      } else {
        name = action.name;
      }
      const teamArr: Team[] = state.ranking.filter(team => team.team === name);

      let currentRanking: Team[];

      let myTeam: MyTeam = {};
      if ( teamArr[0] ) {
        myTeam.clicks = teamArr[0].clicks;
      } else {
        myTeam.clicks = 0;
      }
      myTeam.name = name;
      myTeam.myClicks = 0;
      if (teamArr.length === 0) {
        currentRanking = [...state.ranking];
        const newTeam: Team = {
          order: currentRanking.length,
          team: name,
          clicks: 0
        }
        currentRanking.push(newTeam);
        return {...state, ranking: currentRanking, myTeam};
      }
      else return {...state, myTeam};
    }
    case CHANGE_LOCAL: {
      let myTeam: MyTeam = {...state.myTeam};
      myTeam.clicks += action.int;
      myTeam.myClicks += action.int;
      return {...state, myTeam};
    }
    case INCREMENT_GLOBAL: {
      const teamArr: Team[] = state.ranking.filter(team => team.team === state.myTeam.name);
      let i = state.ranking.indexOf(teamArr[0])

      let newTeam: Team = {...state.ranking[i]};
      newTeam.clicks++;

      let currentRanking = [...state.ranking];
      while (newTeam.clicks >= currentRanking[i-1].clicks) {
        currentRanking[i] = currentRanking[i-1];
        i--;
        newTeam.order--;
      }
      currentRanking[i] = newTeam; 
      return {...state, ranking: currentRanking};
    }
    default:
      return state;
  };

};

export default ranking;