import * as types from './actionTypes';
import paginate from '../../utils/paginate';

const searchTermAction = (rawProfiles, searchTerm) => {
  let FilteredPagination;
  searchTerm === ''
    ? (FilteredPagination = paginate(rawProfiles))
    : (FilteredPagination = paginate(
        rawProfiles.filter(
          (profile) =>
            profile.FirstName.includes(searchTerm) ||
            profile.LastName.includes(searchTerm)
        )
      ));
  return {
    type: types.SET_PROFILES,
    profiles: FilteredPagination,
  };
};

export default searchTermAction;
