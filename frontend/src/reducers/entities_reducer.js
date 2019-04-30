import { combineReducers } from 'redux';
import spots from './spots_reducer';

const EntitiesReducer = combineReducers({
  spots,
});

export default EntitiesReducer;