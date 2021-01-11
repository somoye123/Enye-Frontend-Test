import * as types from './actionTypes';
import paginate from '../../utils/paginate';

const categoryFilter = (rawProfiles, category) => {
  let FilteredPagination;
  category === 'ALL'
    ? (FilteredPagination = paginate(rawProfiles))
    : (FilteredPagination = paginate(
        rawProfiles.filter(
          (profile) =>
            profile.Gender === category || profile.PaymentMethod === category
        )
      ));

  return {
    type: types.SET_PROFILES,
    profiles: FilteredPagination,
  };
};

export default categoryFilter;
