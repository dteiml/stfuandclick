import { LOADING, LOADING_FAILED, SET_STRING } from '../constants/actionTypes';

import { randomString } from '../util/randomString';

export const loading = (state: boolean = true, action: any) => {
  switch ( action.type ) {
    case LOADING:
      return action.loading;

    default:
      return state;
  }
};

export const loadingFailed = (state: boolean = false, action: any) => {
  switch ( action.type ) {
    case LOADING_FAILED:
      return !state;

    default:
      return state;
  }
}

export const setString = (state: string = '', action: any) => {
  switch ( action.type ) {
    case SET_STRING:
      if ( action.setString ) {
        return randomString( 10 );
      }
      else {
        return '';
      }
    default:
      return state;
  }
}
      