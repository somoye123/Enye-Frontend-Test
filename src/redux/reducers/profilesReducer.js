import * as types from '../actions/actionTypes';
import initialState from './initialState';

const profileReducer = (state = initialState.profiles, action) => {
  switch (action.type) {
    case types.SET_PROFILES:
      return action.profiles;
    default:
      return state;
  }
};

export default profileReducer;
