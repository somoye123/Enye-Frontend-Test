import { handleResponse, handleError } from './apiUtils';

const profileApi = async () =>
  fetch('http://api.enye.tech/v1/challenge/records')
    .then(handleResponse)
    .catch(handleError);

export default profileApi;
