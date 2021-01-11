import * as types from './actionTypes';
import setLoading from './loadingAction';
import { toast } from 'react-toastify';
import profileApi from '../../api/profileApi';
import paginate from '../../utils/paginate';

const loadProfilesSuccess = (profiles) => ({
  type: types.SET_PROFILES,
  profiles,
});

const loadRawProfilesSuccess = (profiles) => ({
  type: types.SET_RAW_PROFILES,
  profiles,
});

export default function getProfiles() {
  return async (dispatch) => {
    try {
      const response = await profileApi();
      const {
        records: { profiles },
      } = response;
      if (response) {
        console.log('somoye');
        dispatch(loadRawProfilesSuccess(profiles));
        dispatch(loadProfilesSuccess(paginate(profiles)));
        dispatch(setLoading(false));
      } else {
        dispatch(loadRawProfilesSuccess(null));
        dispatch(loadProfilesSuccess(null));
        dispatch(setLoading(false));
      }
    } catch (error) {
      toast.error(`Whoops!, ${error.message} occured`);
    }
  };
}
