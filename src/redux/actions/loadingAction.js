import * as types from './actionTypes';

const loadingAction = (status) => ({ type: types.SET_LOADING, status });

export default loadingAction;
