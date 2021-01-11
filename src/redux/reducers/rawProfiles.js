import * as types from '../actions/actionTypes';
import initialState from './initialState';

const rawProfiles = (state = initialState.rawProfiles, action) => {
  switch (action.type) {
    case types.SET_RAW_PROFILES:
      return action.profiles;
    default:
      return state;
  }
};

export default rawProfiles;
