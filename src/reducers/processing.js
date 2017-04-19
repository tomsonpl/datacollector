import * as TYPE from '../const/types';

export default function (state = {}, action) {
  switch (action.type) {
    case TYPE.DATA_LOADING_STARTED:
      return {
        ...state,
        loading: true
      };

    case TYPE.DATA_LOADING_ERROR:
      return {
        error: action.payload,
        loading: false
      };

    case TYPE.DATA_LOADING_SUCCESS:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}
