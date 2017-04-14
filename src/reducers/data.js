import * as TYPE from '../const/types';

export default function (state = {}, action) {
  switch (action.type) {
    case TYPE.DATA_LOADING_SUCCESS:
      return {
        ...action.payload
      };

    default:
      return state;
  }
}
