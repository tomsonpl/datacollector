import { combineReducers } from 'redux';
import processingReducer from './processing';
import dataReducer from './data';


const rootReducer = combineReducers({
  processing: processingReducer,
  data: dataReducer
});

export default rootReducer;
