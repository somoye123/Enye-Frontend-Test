import * as types from '../actions/actionTypes';
import initialState from './initialState';

const searchTerm = (state = initialState.searchTerm, action) => {
  switch (action.type) {
    case types.SET_SEARCH_TERM:
      return action.searchTerm;
    default:
      return state;
  }
};

export default searchTerm;
