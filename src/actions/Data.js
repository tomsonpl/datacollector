import axios from 'axios';

import * as TYPE from '../const/types';

const dataLoadingStarted = () => {
  return {
    type: TYPE.DATA_LOADING_STARTED
  };
};

const dataLoadingSuccess = (data) => {
  return {
    type: TYPE.DATA_LOADING_SUCCESS,
    payload: data
  };
};

const dataLoadingError = (error) => {
  return {
    type: TYPE.DATA_LOADING_ERROR,
    payload: error
  };
};

export function loadData() {
  const defaultMessage = 'Could not load data';

  return (dispatch) => {
    dispatch(dataLoadingStarted());
    const url = 'https://api.um.warszawa.pl/api/action/wsstore_get/?id=624d7e2a-bf45-48d6-ba79-8b512e662d1c';

    return axios.get(url)
      .then((response) => {
        if (typeof response.data !== 'undefined') {
          dispatch(dataLoadingSuccess(response.data));
        } else {
          dispatch(dataLoadingError(defaultMessage));
        }
      })
      .catch((error) => {
        dispatch(dataLoadingError(error));
      });
  };
}
