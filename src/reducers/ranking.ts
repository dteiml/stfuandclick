import { Ranking } from '../models/Ranking';
import { LOADED, SET_TEAM, CHANGE_LOCAL, INCREMENT_GLOBAL } from '../constants/actionTypes';
import { Team } from '../models/Team';
import { MyTeam } from '../models/MyTeam';

const ranking = (state: Ranking = {myTeam: {myClicks: -1, clicks: -1, name: ''}, ranking: []}, action: any) => {
  switch (action.type) {
    case LOADED:
      return Object.assign({}, state, {ranking: action.ranking});

    case SET_TEAM: {
      let name: string;
      if ( action.decode ) {
        name = decodeURIComponent(action.name);
      } else {
        name = action.name;
      }
      const teamArr: Team[] = state.ranking.filter(team => team.team === name);
      let newTeam: MyTeam = {};
      if ( teamArr[0] ) {
        newTeam.clicks = teamArr[0].clicks;
      } else {
        newTeam.clicks = 0;
      }
      newTeam.name = name;
      newTeam.myClicks = 0;
      return Object.assign({}, state, {myTeam: newTeam});
    }
    case CHANGE_LOCAL: {
      let newTeam: MyTeam = Object.assign({}, state.myTeam);
      newTeam.clicks += action.int;
      newTeam.myClicks += action.int;
      return Object.assign({}, state, {myTeam: newTeam});
    }
    case INCREMENT_GLOBAL: {
      const teamArr: Team[] = state.ranking.filter(team => team.team === state.myTeam.name);
      let i = state.ranking.indexOf(teamArr[0])

      let newTeam: Team = Object.assign({}, state.ranking[i]);
      newTeam.clicks += 1;

      let currentRanking = state.ranking.slice();
      while (newTeam.clicks >= currentRanking[i-1].clicks) {
        currentRanking[i] = currentRanking[i-1];
        i--;
        newTeam.order--;
      }
      currentRanking[i] = newTeam; 
      return Object.assign({}, state, {ranking: currentRanking});
    }
    default:
      return state;
  };

};

export default ranking;