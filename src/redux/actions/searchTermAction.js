import * as types from './actionTypes';

const searchTermAction = (searchTerm) => ({
  type: types.SET_SEARCH_TERM,
  searchTerm,
});

export default searchTermAction;
