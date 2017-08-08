import { combineReducers } from 'redux';

import ranking from './ranking';
// import myTeam from './myTeam';
import { loading, loadingFailed, setString } from './session';

const rootReducer = combineReducers({
  ranking,
  loading,
  loadingFailed,
  setString
});

export default rootReducer;