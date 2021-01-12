import { combineReducers } from 'redux';
import RawProfiles from './rawProfilesReducer';
import Profiles from './profilesReducer';
import Loading from './loadingReducer';

export default combineReducers({
  Profiles,
  Loading,
  RawProfiles,
});
